/* =====================================================================
   Función de Netlify: puente entre tu web y una API de IA gratuita.

   ¿Por qué hace falta?  La clave de la API es como una contraseña. Si la
   pusieras en el JavaScript de la web, cualquiera podría verla (botón
   derecho → "Ver código fuente") y gastar tu cuota. Esta función se
   ejecuta en los servidores de Netlify: el navegador le habla a ella
   (/api/chat) y solo ella conoce la clave.

   Funciona con cualquier proveedor que use el formato de OpenAI
   ("chat completions"), por ejemplo Groq o Google Gemini.

   Variables de entorno (Netlify → Project configuration → Environment variables):
     AI_PROVIDER   "groq" (por defecto) o "gemini"
     AI_API_KEY    tu clave del proveedor (obligatoria)
     AI_MODEL      (opcional) nombre del modelo; si no, se usa uno por defecto
     AI_BASE_URL   (opcional) otra dirección compatible con OpenAI
     CHAT_CODE     (opcional) contraseña para que solo tú puedas usar el chat
   ===================================================================== */

const PROVIDERS = {
  // Lista de modelos por orden de preferencia: si uno ya no existe (404), se prueba el siguiente.
  // Groq retiró Llama 3.x del plan gratuito (agosto 2026); Google limita Gemini 2.5 a cuentas antiguas.
  groq:   { url: "https://api.groq.com/openai/v1/chat/completions",
            models: ["openai/gpt-oss-120b", "openai/gpt-oss-20b"] },
  gemini: { url: "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
            models: ["gemini-3.8-flash", "gemini-3.5-flash-lite", "gemini-3.6-flash", "gemini-3-flash-preview", "gemini-2.5-flash"] },
};

const MAX_MESSAGES = 12;      // turnos de conversación que se reenvían
const MAX_CHARS = 14000;      // tamaño máximo de cada mensaje (los apuntes van en el primero)

// Respuesta JSON con el código HTTP indicado
const json = (status, obj) =>
  new Response(JSON.stringify(obj), { status, headers: { "Content-Type": "application/json; charset=utf-8" } });

export default async (req) => {
  // 1. Solo aceptamos peticiones POST (las que envía el chat)
  if (req.method !== "POST") return json(405, { error: "Usa POST" });

  // 2. Leemos la configuración secreta
  const provider = PROVIDERS[(process.env.AI_PROVIDER || "groq").trim().toLowerCase()] || PROVIDERS.groq;
  const key = (process.env.AI_API_KEY || "").trim();
  if (!key) return json(500, { error: "Falta la variable AI_API_KEY en Netlify." });
  const url = process.env.AI_BASE_URL || provider.url;
  // Si defines AI_MODEL se usa solo ese; si no, la lista del proveedor
  const candidates = process.env.AI_MODEL ? [process.env.AI_MODEL.trim()] : provider.models;

  // 3. Código de acceso opcional (protege tu cuota gratuita)
  if (process.env.CHAT_CODE && req.headers.get("x-chat-code") !== process.env.CHAT_CODE) {
    return json(401, { error: "codigo" });
  }

  // 4. Validamos lo que nos manda el navegador
  let body;
  try { body = await req.json(); } catch { return json(400, { error: "JSON no válido" }); }
  const messages = (Array.isArray(body.messages) ? body.messages : [])
    .filter(m => m && ["system", "user", "assistant"].includes(m.role) && typeof m.content === "string")
    .slice(-MAX_MESSAGES)
    .map(m => ({ role: m.role, content: m.content.slice(0, MAX_CHARS) }));
  if (!messages.length) return json(400, { error: "No hay mensajes" });

  // 5. Llamamos a la API en formato OpenAI: { model, messages, ... }
  //    Los modelos que "piensan" antes de responder (GPT-OSS, Gemini 3) gastan parte de max_tokens
  //    en razonar: les pedimos razonamiento corto y les damos más margen.
  async function ask(model) {
    const reasoning = /gpt-oss|gemini-3/i.test(model);
    const payload = {
      model,
      messages,
      temperature: 0.3,
      max_tokens: reasoning ? 4000 : Math.min(Number(body.max_tokens) || 900, 1500),
    };
    if (reasoning) payload.reasoning_effort = "low";
    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": "Bearer " + key },
      body: JSON.stringify(payload),
    });
    const raw = await r.text();
    let data = {};
    try { data = JSON.parse(raw); } catch { data = {}; }
    if (Array.isArray(data)) data = data[0] || {};          // Gemini devuelve los errores dentro de una lista
    const detail = (data.error && (data.error.message || JSON.stringify(data.error))) || raw.slice(0, 200) || "sin detalles";
    return { r, data, detail };
  }

  try {
    let last = null;
    for (const model of candidates) {
      const { r, data, detail } = await ask(model);
      last = { r, detail, model };
      if (r.status === 404) continue;                        // modelo retirado o inexistente: probamos el siguiente

      // 6. Errores típicos traducidos a algo comprensible
      if (r.status === 429) return json(429, { error: "Se ha alcanzado el límite gratuito del proveedor (peticiones por minuto o por día). Espera un poco y vuelve a probar." });
      if (r.status === 401 || r.status === 403) return json(502, { error: "La clave AI_API_KEY no es válida, no es de este proveedor (revisa AI_PROVIDER) o no tiene permiso para el modelo «" + model + "». Detalle: " + String(detail).slice(0, 200) });
      if (!r.ok) return json(502, { error: "Error del proveedor (" + r.status + ") con el modelo «" + model + "»: " + String(detail).slice(0, 300) });

      // 7. La respuesta viene en choices[0].message.content
      const answer = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
      return json(200, { answer: answer || "(respuesta vacía)", model });
    }
    return json(502, { error: "El proveedor no encuentra ninguno de estos modelos: " + candidates.join(", ") + ". Busca un modelo actual en la consola del proveedor y ponlo en la variable AI_MODEL de Netlify. Detalle: " + String(last && last.detail).slice(0, 200) });
  } catch (e) {
    return json(502, { error: "No se pudo contactar con el proveedor: " + e.message });
  }
};

// La función responde en la dirección /api/chat de tu web
export const config = { path: "/api/chat" };
