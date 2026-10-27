/* Asistente de estudio gratuito.
   Modo 1 "Buscar en apuntes": buscador semántico ligero (BM25) sobre todos los apuntes. Sin descargas.
   Modo 2 "IA local": un modelo de lenguaje pequeño que se ejecuta en el navegador (WebLLM + WebGPU),
   y redacta la respuesta a partir de los apartados que encuentra el buscador. Gratis, sin servidor. */
(function () {
  "use strict";
  const S = window.SUBJECTS || [];
  const $ = (q, el = document) => el.querySelector(q);
  const SCRIPT_SRC = (document.currentScript && document.currentScript.src) || (location.href.replace(/[#?].*$/, "").replace(/[^/]*$/, "") + "js/chat.js");
  const WEBLLM_URL = "https://esm.run/@mlc-ai/web-llm@0.2.83";
  const MODELS = [
    { id: "Qwen2.5-1.5B-Instruct-q4f16_1-MLC", label: "Recomendado · Qwen 2.5 1.5B (≈1,1 GB)" },
    { id: "Qwen2.5-0.5B-Instruct-q4f16_1-MLC", label: "Ligero · Qwen 2.5 0.5B (≈0,4 GB, peor calidad)" },
    { id: "Llama-3.2-1B-Instruct-q4f16_1-MLC", label: "Alternativo · Llama 3.2 1B (≈0,9 GB)" }
  ];
  const LS = { get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };

  /* ================= Texto plano de los apuntes ================= */
  function toText(html) {
    return String(html || "").replace(/<svg[\s\S]*?<\/svg>/g, " ").replace(/<div class="plot"[\s\S]*?><\/div>/g, m => " " + ((m.match(/data-cap="([^"]*)"/) || [])[1] || "") + " ")
      .replace(/<pre[^>]*>/g, "\n```\n").replace(/<\/pre>/g, "\n```\n")
      .replace(/<h[234][^>]*>/g, "\n").replace(/<li[^>]*>/g, "\n• ")
      .replace(/<t[dh][^>]*>/g, " | ")
      .replace(/<div class="why">/g, "\nExplicación: ")
      .replace(/<div class="sol">/g, "\nSolución: ").replace(/<div class="hint">/g, "\nPista: ")
      .replace(/<\/(p|div|tr|h2|h3|h4|table|ul|ol|li)>/g, "\n").replace(/<br\s*\/?>/g, "\n")
      .replace(/<[^>]+>/g, "")
      .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")
      .replace(/[ \t]+/g, " ").replace(/\n[ \t]+/g, "\n").replace(/\n{2,}/g, "\n").trim();
  }

  /* ================= Índice de búsqueda ================= */
  const STOP = new Set(("de la que el en y a los se del las un por con no una su para es al lo como mas o pero sus le ha me si sin sobre este ya entre cuando todo esta ser son dos tambien fue era muy hasta desde mi porque cual cuales donde quien cuanto hay estos estas esto eso esa ese tiene tienen puede pueden hace hacer cada otro otra otros otras mismo misma vez bien solo sea nos les tan entonces asi algo alguna algun explicame explica explicar dime quiero saber sirve significa pregunta preguntas tengo duda dudas favor puedes podrias necesito ayuda ayudame cosa cosas tema temas mis tus esto estos yo tu el ella ellos que qué cómo hago calcular calcula calculo halla hallar resuelve resolver usar uso").split(" ").map(norm));
  function norm(w) { return w.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); }
  function stem(w) {
    if (w.length > 4 && w.endsWith("ces")) w = w.slice(0, -3) + "z";
    else if (w.length > 4 && /[nrld]es$/.test(w)) w = w.slice(0, -2);
    else if (w.length > 3 && w.endsWith("s")) w = w.slice(0, -1);
    return w.length > 6 ? w.slice(0, 6) : w;
  }
  function tokens(text) {
    return norm(text).split(/[^a-z0-9ñ]+/).filter(w => w.length >= 2 && !STOP.has(w)).map(stem);
  }

  const DOCS = [];
  S.forEach(s => s.topics.forEach(t => {
    [["teoria", "teo-", t.theory, "Apuntes"], ["content", "sec-", t.html, "Resumen y práctica"]].forEach(([tab, pre, html, tabName]) => {
      if (!html) return;
      const parts = html.split(/<h2[^>]*>/);
      parts.forEach((part, i) => {
        let heading = t.title, body = part;
        if (i > 0) { const end = part.indexOf("</h2>"); heading = toText(part.slice(0, end)); body = part.slice(end + 5); }
        const text = toText(body);
        if (text.length < 40) return;
        const anchor = i > 0 ? pre + i : "";
        DOCS.push({ s, t, tab, tabName, heading, text, anchor });
      });
    });
  }));
  // BM25
  const DF = new Map();
  DOCS.forEach(d => {
    const tk = tokens(d.heading + " " + d.heading + " " + d.heading + " " + d.t.title + " " + d.text);
    d.len = tk.length; d.tf = new Map(); d.head = new Set(tokens(d.heading));
    d.bi = new Set(); for (let i = 1; i < tk.length; i++) d.bi.add(tk[i - 1] + " " + tk[i]);   // pares de palabras seguidas
    tk.forEach(w => d.tf.set(w, (d.tf.get(w) || 0) + 1));
    d.tf.forEach((_, w) => DF.set(w, (DF.get(w) || 0) + 1));
  });
  const AVG = DOCS.reduce((a, d) => a + d.len, 0) / Math.max(1, DOCS.length);
  function search(query, filter, k) {
    const q = [...new Set(tokens(query))];
    if (!q.length) return [];
    const N = DOCS.length, res = [];
    for (const d of DOCS) {
      if (filter && !filter(d)) continue;
      let sc = 0, hit = 0;
      for (const w of q) {
        const f = d.tf.get(w); if (!f) continue;
        hit++;
        const idf = Math.log(1 + (N - DF.get(w) + 0.5) / (DF.get(w) + 0.5));
        sc += idf * (f * 2.2) / (f + 1.2 * (0.25 + 0.75 * d.len / AVG));
        if (d.head.has(w)) sc += 1.6 * idf;   // el concepto está en el título del apartado
      }
      if (sc > 0) {
        const qs = tokens(query); let pairs = 0;
        for (let i = 1; i < qs.length; i++) if (d.bi.has(qs[i - 1] + " " + qs[i])) pairs++;
        res.push({ d, score: sc * (0.5 + hit / q.length) * (1 + 0.6 * pairs) });
      }
    }
    res.sort((a, b) => b.score - a.score);
    return res.slice(0, k || 4);
  }
  // Fragmento: las líneas del apartado que más palabras de la pregunta contienen
  function excerpt(d, query, maxLines) {
    const q = new Set(tokens(query));
    const lines = d.text.split("\n").filter(l => l.trim().length > 3);
    const scored = lines.map((l, i) => ({ l, i, s: tokens(l).filter(w => q.has(w)).length + (i === 0 ? 0.3 : 0) }));
    const best = scored.slice().sort((a, b) => b.s - a.s).slice(0, maxLines || 3).sort((a, b) => a.i - b.i);
    return best.map(x => trimLine(x.l, 420));
  }
  function trimLine(l, n) {
    if (l.length <= n) return l;
    let cut = l.slice(0, n);
    if ((cut.match(/\$/g) || []).length % 2) cut = cut.slice(0, cut.lastIndexOf("$"));
    return cut.replace(/\s+\S*$/, "") + "…";
  }

  /* ================= Render de texto con fórmulas ================= */
  function esc(x) { return String(x).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function md(src) {
    const keep = [];
    const hold = (h) => "\u0000" + (keep.push(h) - 1) + "\u0000";
    let t = String(src);
    t = t.replace(/```[a-zA-Z+]*\n?([\s\S]*?)```/g, (_, c) => hold('<pre class="chat-code"><code>' + esc(c.replace(/^\n+|\s+$/g, "")) + "</code></pre>"));
    t = t.replace(/\\\[([\s\S]+?)\\\]/g, (_, m) => hold(esc("$$" + m + "$$")));
    t = t.replace(/\\\(([\s\S]+?)\\\)/g, (_, m) => hold(esc("$" + m + "$")));
    t = t.replace(/\$\$([\s\S]+?)\$\$/g, (m) => hold(esc(m)));
    t = t.replace(/\$([^\$\n]+?)\$/g, (m) => hold(esc(m)));
    t = t.replace(/`([^`\n]+)`/g, (_, c) => hold("<code>" + esc(c) + "</code>"));
    t = esc(t).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    const out = []; let list = null, para = [];
    const fP = () => { if (para.length) { out.push("<p>" + para.join("<br>") + "</p>"); para = []; } };
    const fL = () => { if (list) { out.push("</" + list + ">"); list = null; } };
    for (const raw of t.split("\n")) {
      const line = raw.trim(); let m;
      if (!line) { fP(); fL(); continue; }
      if ((m = line.match(/^#{1,4}\s+(.*)$/))) { fP(); fL(); out.push("<h4>" + m[1] + "</h4>"); continue; }
      if ((m = line.match(/^[-*•]\s+(.*)$/))) { fP(); if (list !== "ul") { fL(); out.push("<ul>"); list = "ul"; } out.push("<li>" + m[1] + "</li>"); continue; }
      if ((m = line.match(/^\d+[.)]\s+(.*)$/))) { fP(); if (list !== "ol") { fL(); out.push("<ol>"); list = "ol"; } out.push("<li>" + m[1] + "</li>"); continue; }
      fL(); para.push(line);
    }
    fP(); fL();
    return out.join("").replace(/\u0000(\d+)\u0000/g, (_, i) => keep[+i]);
  }
  function math(el) {
    if (window.renderMathInElement) {
      try { window.renderMathInElement(el, { delimiters: [{ left: "$$", right: "$$", display: true }, { left: "$", right: "$", display: false }], throwOnError: false }); } catch (e) {}
    }
  }
  const link = (d) => `#/s/${d.s.id}/${d.t.id}${d.anchor ? "/" + d.anchor : ""}`;
  const crumb = (d) => `${esc(d.s.short || d.s.name)} › ${esc(d.t.title)} › ${esc(d.heading)}`;

  /* ================= Interfaz ================= */
  const fab = document.createElement("button");
  fab.className = "chat-fab";
  fab.setAttribute("aria-label", "Abrir el asistente de estudio");
  fab.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v11H8l-4 4z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M8 9.5h8M8 12.5h5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><span>Asistente</span>';
  const panel = document.createElement("section");
  panel.className = "chat-panel"; panel.hidden = true;
  panel.setAttribute("aria-label", "Asistente de estudio");
  panel.innerHTML = `
    <header class="chat-head">
      <div><strong>Asistente de estudio</strong><small>Gratis · funciona con tus apuntes</small></div>
      <button class="chat-x" aria-label="Cerrar">×</button>
    </header>
    <div class="chat-modes" role="tablist" aria-label="Modo">
      <button role="tab" data-mode="search">Buscar en apuntes</button>
      <button role="tab" data-mode="ai">IA local <em>beta</em></button>
      <button role="tab" data-mode="cloud">IA online</button>
    </div>
    <label class="chat-scope"><span>Dónde:</span><select id="chatScope" aria-label="Qué apuntes usar"></select></label>
    <div class="chat-log" id="chatLog" aria-live="polite"></div>
    <div class="chat-sugg" id="chatSugg"></div>
    <form class="chat-form" id="chatForm">
      <textarea id="chatInput" rows="2" aria-label="Tu pregunta"></textarea>
      <button class="btn primary" id="chatSend">Enviar</button>
    </form>
    <p class="chat-note" id="chatNote"></p>`;
  document.body.append(fab, panel);
  const log = $("#chatLog", panel), input = $("#chatInput", panel), sel = $("#chatScope", panel);
  const sendBtn = $("#chatSend", panel), sugg = $("#chatSugg", panel), note = $("#chatNote", panel);

  let mode = ["ai", "cloud"].includes(LS.get("mesa-chat-mode")) ? LS.get("mesa-chat-mode") : "search";
  let history = [], busy = false, engine = null, loading = false, scopeKey = "";
  let pendingExplain = null;   // fragmento seleccionado que espera a que la IA esté lista

  function buildScopes() {
    const cur = window.MESA ? window.MESA.current() : {};
    const opts = [];
    if (cur.s && cur.t) opts.push({ key: "t:" + cur.s.id + ":" + cur.t.id, label: "Este tema: " + cur.t.title });
    if (cur.s) opts.push({ key: "s:" + cur.s.id, label: "Toda " + cur.s.name });
    opts.push({ key: "all", label: "Todas las asignaturas" });
    S.filter(x => x !== cur.s).forEach(s => opts.push({ key: "s:" + s.id, label: s.name }));
    sel.innerHTML = opts.map(o => `<option value="${o.key}">${esc(o.label)}</option>`).join("");
    sel.value = opts.some(o => o.key === scopeKey) && history.length ? scopeKey : opts[0].key;
    scopeKey = sel.value;
  }
  function filterFn() {
    const [kind, sid, tid] = sel.value.split(":");
    if (kind === "t") return d => d.s.id === sid && d.t.id === tid;
    if (kind === "s") return d => d.s.id === sid;
    return null;
  }
  function addMsg(role, html, cls) {
    const d = document.createElement("div");
    d.className = "chat-msg " + role + (cls ? " " + cls : "");
    d.innerHTML = html; log.appendChild(d);
    math(d);
    log.scrollTop = log.scrollHeight;
    return d;
  }
  function setSugg(list) {
    sugg.innerHTML = list.map(q => `<button type="button" class="chat-chip">${esc(q)}</button>`).join("");
    sugg.hidden = !list.length;
  }

  function renderMode() {
    $$modes().forEach(b => b.setAttribute("aria-selected", b.dataset.mode === mode));
    log.innerHTML = ""; history = [];
    if (mode === "search") {
      input.placeholder = "Escribe palabras clave o una pregunta…";
      note.textContent = "Busca en todos tus apuntes al instante. No redacta: te enseña los apartados que responden a tu duda.";
      addMsg("assistant", md("Escribe lo que buscas (por ejemplo, **regla de la cadena**, **PMP**, **Coriolis** o **cómo leer un fichero**) y te enseño los apartados de tus apuntes que lo explican, con enlace directo."));
      setSugg(["regla de la cadena", "raíces n-ésimas", "Rouché-Frobenius", "fondo de maniobra", "paso por referencia"]);
      input.disabled = false; sendBtn.disabled = false;
    } else if (mode === "cloud") {
      cloudReady();
    } else {
      input.placeholder = "Pregunta lo que quieras… (Intro para enviar)";
      note.innerHTML = "La IA se ejecuta en tu dispositivo: gratis y privado. Es un modelo pequeño: puede equivocarse, comprueba siempre con los apuntes (te los enlaza). <strong>Truco:</strong> selecciona cualquier texto de los apuntes y pulsa «Explícamelo».";
      setSugg([]);
      if (engine) aiReady(); else aiSetup();
    }
  }
  function $$modes() { return Array.from(panel.querySelectorAll(".chat-modes button")); }

  /* ---------- Modo IA online (API gratuita a través de /api/chat) ---------- */
  const CLOUD_NOTE = "Usa una API gratuita (Groq o Gemini) a través de tu web en Netlify. Necesita configurar la clave: mira GUIA-API-GRATIS.md. <strong>Truco:</strong> selecciona texto de los apuntes y pulsa «Explícamelo».";
  function cloudReady() {
    log.innerHTML = "";
    input.placeholder = "Pregunta lo que quieras… (Intro para enviar)";
    note.innerHTML = CLOUD_NOTE;
    addMsg("assistant", md("Modo **IA online**: un modelo grande y rápido en la nube, gratis dentro de los límites del proveedor. Pregúntame dudas de tus apuntes: busco los apartados relevantes y te respondo a partir de ellos."));
    setSugg(["¿Qué es la regla de la cadena?", "Explícame la diferencia entre FIFO y PMP", "¿Qué es la aceleración de Coriolis?"]);
    input.disabled = false; sendBtn.disabled = false;
  }
  async function cloudCall(messages, maxTokens, retried) {
    let r;
    try {
      r = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-chat-code": LS.get("mesa-chat-code") || "" },
        body: JSON.stringify({ messages, max_tokens: maxTokens || 900 })
      });
    } catch (e) {
      throw new Error("No se puede conectar con /api/chat. Si abres la web desde tu ordenador (sin Netlify), este modo no funciona.");
    }
    let data = {};
    try { data = await r.json(); } catch (e) {}
    if (r.status === 401 && data.error === "codigo" && !retried) {
      const c = window.prompt("Este chat está protegido. Escribe el código de acceso:");
      if (c) { LS.set("mesa-chat-code", c.trim()); return cloudCall(messages, maxTokens, true); }
      throw new Error("Hace falta el código de acceso.");
    }
    if (r.status === 404) throw new Error("La función /api/chat no existe en esta web. Hay que publicarla desde GitHub (Netlify Drop no ejecuta funciones) y configurar AI_API_KEY. Lo tienes paso a paso en GUIA-API-GRATIS.md.");
    if (!r.ok) throw new Error(data.error || ("Error " + r.status));
    return data.answer || "";
  }

  /* ---------- Modo buscador ---------- */
  function answerSearch(q) {
    const res = search(q, filterFn(), 4);
    if (!res.length) {
      addMsg("assistant", md("No he encontrado nada sobre eso" + (sel.value !== "all" ? " en esta parte. Prueba a cambiar **Dónde** a *Todas las asignaturas*" : "") + ", o usa otras palabras (el nombre del concepto suele funcionar mejor que una frase larga)."));
      return;
    }
    const html = res.map((r, i) => {
      const lines = excerpt(r.d, q, i === 0 ? 4 : 2);
      return `<div class="chat-hit"><a href="${link(r.d)}" class="chat-crumb">${crumb(r.d)}</a>
        <div class="chat-ex">${md(lines.join("\n"))}</div>
        <a class="chat-open" href="${link(r.d)}">Abrir el apartado (${esc(r.d.tabName)}) →</a></div>`;
    }).join("");
    addMsg("assistant", `<p>Esto es lo que dicen tus apuntes:</p>${html}`);
  }

  /* ---------- Modo IA local ---------- */
  function aiSetup() {
    log.innerHTML = "";
    const saved = LS.get("mesa-ia-model");
    const d = addMsg("assistant", `
      <p><strong>IA gratuita que funciona dentro de tu navegador.</strong> La primera vez descarga el modelo (se guarda para las siguientes visitas). Después funciona incluso sin internet.</p>
      <ul><li>Necesita <strong>Chrome o Edge actualizados</strong> (con WebGPU), mejor en ordenador. En móviles puede ir lento o no funcionar.</li>
      <li>Descárgalo con <strong>wifi</strong>.</li></ul>
      <label class="chat-model">Modelo: <select>${MODELS.map(m => `<option value="${m.id}"${m.id === saved ? " selected" : ""}>${esc(m.label)}</option>`).join("")}</select></label>
      <div class="q-actions"><button class="btn primary small" type="button">${saved ? "Activar (ya descargado)" : "Descargar y activar"}</button></div>
      <div class="chat-prog" hidden><div class="bar"><i style="width:0%"></i></div><small></small></div>`, "sys");
    input.disabled = true; sendBtn.disabled = true;
    $("button", d).addEventListener("click", () => loadModel($("select", d).value, d));
  }
  async function loadModel(modelId, box) {
    if (loading) return;
    const prog = $(".chat-prog", box), bar = $(".bar i", box), txt = $("small", prog), btn = $("button", box);
    let adapter = null;
    if (navigator.gpu && !window.MESA_LLM_FACTORY) { try { adapter = await navigator.gpu.requestAdapter(); } catch (e) {} }
    if (!navigator.gpu || (!adapter && !window.MESA_LLM_FACTORY)) {
      addMsg("assistant", md("Tu navegador **no tiene WebGPU**, que es lo que necesita la IA local. Prueba con **Chrome o Edge actualizados en un ordenador**. Mientras tanto, el modo **Buscar en apuntes** funciona en cualquier dispositivo."), "err");
      return;
    }
    loading = true; btn.disabled = true; prog.hidden = false; txt.textContent = "Preparando…";
    try {
      const factory = window.MESA_LLM_FACTORY || (async (id, onProgress) => {
        const webllm = await import(WEBLLM_URL);
        const worker = new Worker(new URL("llm-worker.js", SCRIPT_SRC), { type: "module" });
        return webllm.CreateWebWorkerMLCEngine(worker, id, { initProgressCallback: onProgress });
      });
      engine = await factory(modelId, (r) => {
        const p = Math.round((r.progress || 0) * 100);
        bar.style.width = p + "%";
        txt.textContent = p + "% · " + String(r.text || "").replace(/\[.*?\]\s*/g, "").slice(0, 90);
      });
      LS.set("mesa-ia-model", modelId);
      aiReady();
    } catch (e) {
      engine = null; btn.disabled = false;
      addMsg("assistant", "<p>No se ha podido cargar la IA: " + esc(e && e.message ? e.message : e) + "</p><p>Prueba el modelo ligero, cierra otras pestañas o usa el modo <strong>Buscar en apuntes</strong>.</p>", "err");
    }
    loading = false;
  }
  function aiReady() {
    log.innerHTML = "";
    addMsg("assistant", md("IA lista. Pregúntame dudas sobre tus apuntes: busco los apartados relevantes y te respondo a partir de ellos (y te dejo los enlaces para comprobarlo)."));
    setSugg(["¿Qué es la regla de la cadena?", "Explícame la diferencia entre FIFO y PMP", "¿Qué es la aceleración de Coriolis?"]);
    input.disabled = false; sendBtn.disabled = false; input.focus();
    note.innerHTML = "La IA se ejecuta en tu dispositivo: gratis y privado. Es un modelo pequeño: puede equivocarse, comprueba siempre con los apuntes (te los enlaza). <strong>Truco:</strong> selecciona cualquier texto de los apuntes y pulsa «Explícamelo».";
    if (pendingExplain) { const p = pendingExplain; pendingExplain = null; runExplain(p); }
  }
  async function answerAI(q) {
    const res = search(q + " " + (history.length ? history[history.length - 2]?.content || "" : ""), filterFn(), 4);
    let ctx = "", used = [];
    for (const r of res) {
      const piece = `[${r.d.s.name} › ${r.d.t.title} › ${r.d.heading}]\n${r.d.text}`.slice(0, 1800);
      if (ctx.length + piece.length > 5200) break;
      ctx += piece + "\n\n"; used.push(r.d);
    }
    const system = "Eres un profesor particular de primer curso de ingeniería. Responde SIEMPRE en español, de forma clara y breve (máximo unos 180 palabras salvo que pidan más). " +
      "Usa los fragmentos de los apuntes del alumno que tienes abajo; si no bastan, dilo. No inventes datos. Fórmulas en LaTeX entre $...$.\n\nAPUNTES:\n" + (ctx || "(no se han encontrado apartados relacionados)");
    const messages = [{ role: "system", content: system }].concat(history.slice(-4), [{ role: "user", content: q }]);
    await streamAnswer(messages, used, q);
  }

  /* Genera una respuesta en streaming y la deja renderizada con sus fuentes */
  async function streamAnswer(messages, used, userText, maxTokens) {
    const bubble = addMsg("assistant", '<p class="chat-wait"><span></span><span></span><span></span> Pensando…</p>');
    let text = "";
    if (mode === "cloud") {
      try { text = await cloudCall(messages, maxTokens); }
      catch (e) { bubble.classList.add("err"); bubble.innerHTML = "<p>" + esc(e.message) + "</p>"; return; }
    } else try {
      const stream = await engine.chat.completions.create({ messages, stream: true, temperature: 0.3, max_tokens: maxTokens || 700 });
      for await (const ch of stream) {
        const delta = ch.choices && ch.choices[0] && ch.choices[0].delta && ch.choices[0].delta.content;
        if (delta) { text += delta; bubble.innerHTML = "<p>" + esc(text).replace(/\n/g, "<br>") + "</p>"; log.scrollTop = log.scrollHeight; }
      }
    } catch (e) {
      bubble.classList.add("err");
      bubble.innerHTML = "<p>Error al generar la respuesta: " + esc(e && e.message ? e.message : e) + "</p>";
      return;
    }
    const src = used.length ? `<div class="chat-src"><small>Fuentes en tus apuntes:</small>${used.map(d => `<a href="${link(d)}">${crumb(d)}</a>`).join("")}</div>` : "";
    bubble.innerHTML = md(text || "(sin respuesta)") + src;
    math(bubble);
    history.push({ role: "user", content: userText }, { role: "assistant", content: text });
    log.scrollTop = log.scrollHeight;
  }

  /* ---------- Explicar un fragmento seleccionado ---------- */
  function quoteHtml(sel) {
    return `<p class="chat-quote-h">Explícame este fragmento${sel.where ? ` <small>(${esc(sel.where)})</small>` : ""}:</p><blockquote class="chat-quote">${md(sel.text)}</blockquote>`;
  }
  function relatedHtml(sel) {
    const res = search(sel.text, null, 3);
    if (!res.length) return "";
    return `<div class="chat-src"><small>Apartados de tus apuntes que lo explican:</small>${res.map(r => `<a href="${link(r.d)}">${crumb(r.d)}</a>`).join("")}</div>`;
  }
  async function runExplain(sel) {
    busy = true; sendBtn.disabled = true; sugg.hidden = true;
    addMsg("user", quoteHtml(sel));
    const res = search(sel.text + " " + (sel.heading || ""), null, 3);
    let ctx = sel.context ? `[Apartado donde está el fragmento: ${sel.where}]
${sel.context}

` : "", used = [];
    for (const r of res) {
      const piece = `[${r.d.s.name} › ${r.d.t.title} › ${r.d.heading}]
${r.d.text}`.slice(0, 1400);
      if (ctx.length + piece.length > 5200) break;
      ctx += piece + "\n\n"; used.push(r.d);
    }
    const system = "Eres un profesor particular de primer curso de ingeniería, muy paciente y claro. El alumno ha seleccionado un fragmento de sus apuntes que no entiende bien. " +
      "Explícalo SIEMPRE en español, con más claridad y más detalle que los apuntes, siguiendo esta estructura con estos títulos en negrita:\n" +
      "**Idea clave**: qué significa, en una o dos frases sencillas.\n" +
      "**Paso a paso**: la explicación detallada, desmontando cada símbolo o término difícil.\n" +
      "**Ejemplo**: un ejemplo concreto, con números si es posible, resuelto.\n" +
      "**Error típico**: el error más frecuente o la confusión habitual.\n" +
      "**Para recordarlo**: un truco o una frase corta.\n" +
      "Usa los apuntes de abajo como referencia y no los contradigas; si añades información que no está en ellos, dilo. Fórmulas en LaTeX entre $...$.\n\nAPUNTES:\n" + ctx;
    const prompt = "Explícame con más claridad y más detalle este fragmento de mis apuntes:\n«" + sel.text + "»";
    const messages = [{ role: "system", content: system }, { role: "user", content: prompt }];
    try { await streamAnswer(messages, used, prompt, 1000); }
    finally { busy = false; sendBtn.disabled = false; }
  }
  function explain(sel) {
    panel.hidden = false; fab.hidden = true;
    buildScopes();
    if (mode === "cloud") {
      $$modes().forEach(b => b.setAttribute("aria-selected", b.dataset.mode === mode));
      if (!log.children.length) cloudReady();
      if (busy) return;
      runExplain(sel);
      return;
    }
    if (mode !== "ai") { mode = "ai"; LS.set("mesa-chat-mode", mode); }
    $$modes().forEach(b => b.setAttribute("aria-selected", b.dataset.mode === mode));
    input.placeholder = "Pregunta lo que quieras… (Intro para enviar)";
    if (engine) {
      if (!log.children.length) aiReady();
      if (busy) { pendingExplain = sel; return; }
      runExplain(sel);
    } else {
      pendingExplain = sel;
      aiSetup();
      note.innerHTML = "Cuando la IA esté activada, explicará el fragmento automáticamente. Sin IA, tienes debajo los apartados de tus apuntes que lo tratan.";
      addMsg("user", quoteHtml(sel));
      const rel = relatedHtml(sel);
      addMsg("assistant", "<p>Para que te lo explique con sus propias palabras, activa la IA local con el botón de arriba (gratis, se ejecuta en tu dispositivo).</p>" + (rel || "<p>No he encontrado otros apartados relacionados en tus apuntes.</p>"));
    }
  }

  /* ---------- Envío y eventos ---------- */
  async function send() {
    const q = input.value.trim();
    if (!q || busy || input.disabled) return;
    busy = true; sendBtn.disabled = true; sugg.hidden = true; input.value = "";
    addMsg("user", "<p>" + esc(q).replace(/\n/g, "<br>") + "</p>");
    try {
      if (mode === "search") answerSearch(q);
      else await answerAI(q);   // "ai" (local) y "cloud" comparten la búsqueda de contexto
    } finally { busy = false; sendBtn.disabled = false; input.focus(); }
  }
  function open(o) {
    panel.hidden = !o; fab.hidden = o;
    if (o) { buildScopes(); if (!log.children.length) renderMode(); setTimeout(() => input.focus(), 50); }
    else fab.focus();
  }
  fab.addEventListener("click", () => open(true));
  $(".chat-x", panel).addEventListener("click", () => open(false));
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !panel.hidden) open(false); });
  $$modes().forEach(b => b.addEventListener("click", () => { if (mode === b.dataset.mode) return; mode = b.dataset.mode; LS.set("mesa-chat-mode", mode); renderMode(); }));
  sel.addEventListener("change", () => { scopeKey = sel.value; history = []; });
  sugg.addEventListener("click", e => { const b = e.target.closest(".chat-chip"); if (b) { input.value = b.textContent; send(); } });
  input.addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } });
  $("#chatForm", panel).addEventListener("submit", e => { e.preventDefault(); send(); });
  log.addEventListener("click", e => { if (e.target.closest("a[href^='#/']") && window.innerWidth <= 600) open(false); });
  window.addEventListener("hashchange", () => { if (!history.length) setTimeout(buildScopes, 0); });

  /* ---------- Botón flotante al seleccionar texto ---------- */
  const xbtn = document.createElement("button");
  xbtn.className = "explain-btn"; xbtn.type = "button"; xbtn.hidden = true;
  xbtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.2 6.6L21 11l-6.8 2.4L12 20l-2.2-6.6L3 11l6.8-2.4z" fill="currentColor"/></svg> Explícamelo';
  document.body.appendChild(xbtn);
  let lastSel = null;

  // Convierte un trozo del documento a texto, recuperando el LaTeX original de las fórmulas de KaTeX
  function fragText(frag) {
    frag.querySelectorAll(".katex").forEach(k => {
      const ann = k.querySelector('annotation[encoding="application/x-tex"]');
      const disp = k.parentElement && k.parentElement.classList && k.parentElement.classList.contains("katex-display");
      k.replaceWith(document.createTextNode(ann ? (disp ? " $$" + ann.textContent + "$$ " : " $" + ann.textContent.trim() + "$ ") : k.textContent));
    });
    frag.querySelectorAll(".q-actions, .fb, .plot-ctrls, button, svg, .num-row").forEach(x => x.remove());
    frag.querySelectorAll("li, p, h2, h3, h4, tr, pre, .step, div").forEach(x => x.append(document.createTextNode("\n")));
    return frag.textContent.replace(/[ \t]+/g, " ").replace(/\s*\n\s*/g, "\n").replace(/\n{2,}/g, "\n").trim();
  }
  function getSel() {
    const s = window.getSelection();
    if (!s || !s.rangeCount || s.isCollapsed) return null;
    const r = s.getRangeAt(0).cloneRange();
    const el = n => (n.nodeType === 1 ? n : n.parentElement);
    const area = el(r.commonAncestorContainer) && el(r.commonAncestorContainer).closest("#teoria, #content, .sheet, #quiz");
    if (!area || el(r.commonAncestorContainer).closest(".chat-panel")) return null;
    const k1 = el(r.startContainer).closest(".katex"), k2 = el(r.endContainer).closest(".katex");
    if (k1) r.setStartBefore(k1.closest(".katex-display") || k1);
    if (k2) r.setEndAfter(k2.closest(".katex-display") || k2);
    const text = fragText(r.cloneContents()).slice(0, 1500);
    if (text.replace(/\s/g, "").length < 8) return null;
    // apartado (h2) en el que está la selección, y su texto como contexto
    let h2 = null;
    area.querySelectorAll("h2").forEach(h => { if (h.compareDocumentPosition(r.startContainer) & Node.DOCUMENT_POSITION_FOLLOWING) h2 = h; });
    let context = "", heading = "";
    if (h2) {
      heading = h2.textContent.trim();
      const sec = document.createRange(); sec.setStartBefore(h2);
      let nx = h2.nextElementSibling; while (nx && nx.tagName !== "H2") nx = nx.nextElementSibling;
      if (nx) sec.setEndBefore(nx); else sec.setEndAfter(area.lastChild);
      context = fragText(sec.cloneContents()).slice(0, 3000);
    }
    const cur = window.MESA ? window.MESA.current() : {};
    const where = [cur.s && (cur.s.short || cur.s.name), cur.t && cur.t.title, heading].filter(Boolean).join(" › ");
    return { text, context, heading, where, rect: s.getRangeAt(0).getBoundingClientRect() };
  }
  function showBtn() {
    const sel = getSel();
    if (!sel) { xbtn.hidden = true; lastSel = null; return; }
    lastSel = sel;
    xbtn.hidden = false;
    const w = xbtn.offsetWidth || 130, rect = sel.rect;
    let left = rect.left + rect.width / 2 - w / 2;
    left = Math.max(8, Math.min(window.innerWidth - w - 8, left));
    let top = rect.bottom + 10;
    if (top + 44 > window.innerHeight) top = Math.max(8, rect.top - 50);
    xbtn.style.left = left + "px"; xbtn.style.top = top + "px";
  }
  document.addEventListener("mouseup", e => { if (e.target === xbtn || xbtn.contains(e.target)) return; setTimeout(showBtn, 10); });
  document.addEventListener("keyup", e => { if (e.shiftKey || e.key === "Shift") setTimeout(showBtn, 10); });
  document.addEventListener("touchend", () => setTimeout(showBtn, 350));
  document.addEventListener("selectionchange", () => { const s = window.getSelection(); if (!s || s.isCollapsed) setTimeout(() => { const t = window.getSelection(); if (!t || t.isCollapsed) xbtn.hidden = true; }, 150); });
  window.addEventListener("scroll", () => { xbtn.hidden = true; }, { passive: true });
  window.addEventListener("hashchange", () => { xbtn.hidden = true; });
  xbtn.addEventListener("mousedown", e => e.preventDefault());   // que no se pierda la selección
  xbtn.addEventListener("click", () => {
    if (!lastSel) return;
    const sel = lastSel; xbtn.hidden = true;
    window.getSelection().removeAllRanges();
    explain(sel);
  });

  // Para pruebas
  window.MESA_EXPLAIN = (text) => explain({ text, context: "", heading: "", where: "" });
  window.MESA_SEARCH = (q, k) => search(q, null, k).map(r => r.d.s.id + "/" + r.d.t.id + " · " + r.d.heading);
})();
