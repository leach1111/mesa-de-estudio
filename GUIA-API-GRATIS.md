# Cómo integrar una API de chatbot gratis en tu web

Esta guía explica **qué** estás montando, **por qué** se hace así y **cómo** hacerlo paso a paso,
con el código que ya está en esta carpeta (`netlify/functions/chat.mjs` y el modo "IA online" del asistente).

---

## 1. Las piezas (qué es cada cosa)

| Pieza | Qué es | Aquí |
|---|---|---|
| **API** | Un servicio al que tu programa le envía una petición por internet y le devuelve una respuesta. | Groq o Google Gemini |
| **Clave de la API** (*API key*) | Una contraseña que identifica tu cuenta. Con ella el proveedor sabe a quién descontar la cuota gratuita. | `gsk_...` (Groq) o `AIza...` (Gemini) |
| **Modelo** | La IA concreta que responde. Cada proveedor tiene varios. | `llama-3.3-70b-versatile`, `gemini-2.5-flash` |
| **Función de servidor** | Un pequeño programa que se ejecuta en los servidores de Netlify, no en el navegador. | `netlify/functions/chat.mjs` |
| **Variable de entorno** | Un valor secreto que guardas en Netlify y que la función puede leer, pero que nunca se publica. | `AI_API_KEY` |

### ¿Por qué no llamar a la API directamente desde la web?

Todo el JavaScript de una web se descarga en el navegador de quien la visita: cualquiera puede verlo.
Si pusieras ahí tu clave, cualquiera podría copiarla y gastarte la cuota. Por eso se hace así:

```
Navegador (tu web)  ──►  /api/chat (función en Netlify, conoce la clave)  ──►  API de Groq o Gemini
        ◄───────────────────────── respuesta ◄────────────────────────────────────────
```

El navegador solo habla con **tu** función. La función añade la clave y reenvía la pregunta.

---

## 2. El formato de la petición (lo que viaja por internet)

Groq y Gemini aceptan el mismo formato, llamado *chat completions* (lo inventó OpenAI y se ha convertido
en un estándar). Por eso el mismo código sirve para los dos: solo cambia la dirección y la clave.

**Petición** (POST a la dirección del proveedor, con la cabecera `Authorization: Bearer TU_CLAVE`):

```json
{
  "model": "llama-3.3-70b-versatile",
  "messages": [
    { "role": "system",    "content": "Eres un profesor... Estos son los apuntes: ..." },
    { "role": "user",      "content": "¿Qué es la regla de la cadena?" }
  ],
  "temperature": 0.3,
  "max_tokens": 900
}
```

- `system`: instrucciones de comportamiento (aquí van también los fragmentos de tus apuntes).
- `user` / `assistant`: la conversación. Para que la IA "recuerde", se reenvían los mensajes anteriores en cada petición.
- `temperature`: creatividad (0 = muy predecible; 1 = más variado). Para estudiar conviene baja.
- `max_tokens`: longitud máxima de la respuesta (un *token* es aproximadamente 3/4 de palabra).

**Respuesta** (lo que nos importa):

```json
{ "choices": [ { "message": { "role": "assistant", "content": "La regla de la cadena dice que..." } } ] }
```

La función extrae `choices[0].message.content` y se lo devuelve a la web.

---

## 3. Elige proveedor (los dos son gratis)

| | **Groq** (recomendado para empezar) | **Google Gemini** |
|---|---|---|
| Tarjeta de crédito | No hace falta | No hace falta |
| Dónde se saca la clave | console.groq.com → API Keys | aistudio.google.com → Get API key |
| Modelo por defecto en el código | `llama-3.3-70b-versatile` | `gemini-2.5-flash` |
| Puntos fuertes | Respuestas muy rápidas | Modelos de Google, buena calidad en español |
| Límites gratuitos | Por minuto y por día (consulta tu cuenta) | Por minuto y por día (consulta AI Studio) |

> Los límites y los nombres de los modelos cambian con el tiempo. Los valores actuales de tu cuenta
> los ves en la consola de cada proveedor. Si un modelo deja de existir, cambia `AI_MODEL` (paso 6).

---

## 4. Paso a paso

### Paso 1 · Consigue la clave

**Groq:** entra en console.groq.com, crea una cuenta, ve a **API Keys → Create API Key**, ponle un nombre
(por ejemplo, `mesa-de-estudio`) y copia la clave. Solo se muestra una vez: guárdala en un sitio seguro.

**Gemini:** entra en aistudio.google.com con tu cuenta de Google, pulsa **Get API key → Create API key** y cópiala.

### Paso 2 · Sube la web a GitHub

Netlify Drop (arrastrar la carpeta) **no ejecuta funciones**. Hay que publicar desde un repositorio:

1. Crea una cuenta en github.com.
2. **New repository** → nombre `mesa-de-estudio` → puede ser **Private** → **Create repository**.
3. En el repositorio vacío: **uploading an existing file** (o **Add file → Upload files**).
4. Arrastra **todo el contenido** de esta carpeta (no la carpeta en sí). Comprueba que aparecen en la raíz
   `index.html`, `netlify.toml` y la carpeta `netlify` (con `functions/chat.mjs` dentro).
5. **Commit changes**.

### Paso 3 · Conecta GitHub con Netlify

1. En app.netlify.com: **Add new project → Import an existing project → GitHub** y autoriza el acceso.
2. Elige el repositorio `mesa-de-estudio`.
3. Netlify lee `netlify.toml`: deja el *build command* vacío y el *publish directory* como `.`.
4. **Deploy**. En un minuto tendrás la web en una dirección `https://algo.netlify.app`.

> Si ya tenías el sitio creado con Netlify Drop, puedes crear uno nuevo así y dejar el antiguo,
> o en el antiguo ir a **Project configuration → Build & deploy → Link repository**.

### Paso 4 · Guarda la clave en Netlify (la parte clave)

**Project configuration → Environment variables → Add a variable**:

| Key | Value |
|---|---|
| `AI_API_KEY` | tu clave (la del paso 1) |
| `AI_PROVIDER` | `groq` o `gemini` |
| `CHAT_CODE` | *(muy recomendado)* una contraseña que elijas, por ejemplo `cafe-y-derivadas` |

`CHAT_CODE` evita que un desconocido que encuentre tu web gaste tu cuota gratuita: el chat la pedirá
la primera vez y la recordará en tu navegador.

Después: **Deploys → Trigger deploy → Deploy project** (las variables solo se aplican en un despliegue nuevo).

### Paso 5 · Pruébalo

Abre tu web, pulsa **Asistente → IA online** y pregunta algo. También funciona con **Explícamelo**:
si la pestaña activa del asistente es "IA online", las explicaciones de texto seleccionado irán por la API.

### Paso 6 · (Opcional) Cambia de modelo o de proveedor

Solo hay que cambiar variables en Netlify y volver a desplegar; no hay que tocar el código:

- `AI_MODEL` = otro modelo del proveedor (por ejemplo, uno más pequeño si agotas el límite diario).
- `AI_PROVIDER` = `gemini` para pasar a Google (y `AI_API_KEY` con la clave de Gemini).
- `AI_BASE_URL` = la dirección de cualquier otro proveedor compatible con el formato de OpenAI.

---

## 5. Si algo falla

| Mensaje en el chat | Causa | Solución |
|---|---|---|
| "La función /api/chat no existe" | La web está subida con Netlify Drop, o falta la carpeta `netlify` | Publica desde GitHub (pasos 2 y 3) y comprueba la estructura de carpetas |
| "Falta la variable AI_API_KEY" | No has creado la variable o no has vuelto a desplegar | Paso 4 y **Trigger deploy** |
| "La clave no es válida" | Clave copiada mal, borrada, o de otro proveedor | Crea una nueva y comprueba `AI_PROVIDER` |
| "Se ha alcanzado el límite gratuito" | Demasiadas preguntas por minuto o por día | Espera; o cambia `AI_MODEL` a un modelo con más cuota |
| "Error del proveedor (404)" | El nombre del modelo ya no existe | Mira la lista de modelos en la consola del proveedor y cambia `AI_MODEL` |

En Netlify, **Logs → Functions → chat** muestra cada llamada a la función y sus errores.

---

## 6. Cómo está hecho el código (para entenderlo)

**`netlify/functions/chat.mjs`** (servidor):

1. Rechaza cualquier petición que no sea POST.
2. Lee de las variables de entorno el proveedor, la clave y el modelo.
3. Si hay `CHAT_CODE`, comprueba la cabecera `x-chat-code`.
4. Limpia los mensajes recibidos (solo roles válidos, longitud máxima, últimos 12 turnos).
5. Hace `fetch` a la API con el formato de la sección 2.
6. Traduce los errores habituales (429, 401…) a mensajes comprensibles.
7. Devuelve `{ answer }` a la web.

**`js/chat.js`** (navegador), modo "IA online":

1. Busca en tus apuntes los apartados relacionados con la pregunta (el mismo buscador del modo "Buscar").
2. Construye el mensaje `system` con las instrucciones y esos fragmentos (unos 5.000 caracteres).
3. Hace `fetch("/api/chat", ...)` con la conversación.
4. Muestra la respuesta con las fórmulas dibujadas y los enlaces a las fuentes.

Enviar solo los apartados relevantes, y no la asignatura entera, tiene una razón práctica: los planes gratuitos
limitan los **tokens por minuto y por día**, y así cada pregunta gasta poco y te dura mucho más la cuota.
