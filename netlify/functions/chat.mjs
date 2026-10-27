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
  groq:   { url: "https://api.groq.com/openai/v1/chat/completions",                         model: "llama-3.3-70b-versatile" },
  gemini: { url: "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions", model: "gemini-2.5-flash" },
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
  const provider = PROVIDERS[(process.env.AI_PROVIDER || "groq").toLowerCase()] || PROVIDERS.groq;
  const key = process.env.AI_API_KEY;
  if (!key) return json(500, { error: "Falta la variable AI_API_KEY en Netlify." });
  const url = process.env.AI_BASE_URL || provider.url;
  const model = process.env.AI_MODEL || provider.model;

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
  try {
    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": "Bearer " + key },
      body: JSON.stringify({
        model,
        messages,
        temperature: 0.3,
        max_tokens: Math.min(Number(body.max_tokens) || 900, 1500),
      }),
    });
    const data = await r.json().catch(() => ({}));

    // 6. Errores típicos traducidos a algo comprensible
    if (!r.ok) {
      const detail = (data.error && (data.error.message || data.error)) || "";
      if (r.status === 429) return json(429, { error: "Se ha alcanzado el límite gratuito del proveedor (peticiones por minuto o por día). Espera un poco y vuelve a probar." });
      if (r.status === 401 || r.status === 403) return json(502, { error: "La clave AI_API_KEY no es válida o no tiene permiso para este modelo." });
      return json(502, { error: "Error del proveedor (" + r.status + "): " + String(detail).slice(0, 300) });
    }

    // 7. La respuesta viene en choices[0].message.content
    const answer = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
    return json(200, { answer: answer || "(respuesta vacía)", model });
  } catch (e) {
    return json(502, { error: "No se pudo contactar con el proveedor: " + e.message });
  }
};

// La función responde en la dirección /api/chat de tu web
export const config = { path: "/api/chat" };
