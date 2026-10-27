/* Mesa de estudio — motor de la web (sin dependencias salvo KaTeX) */
(function () {
  "use strict";

  const S = window.SUBJECTS || [];
  const $ = (sel, el = document) => el.querySelector(sel);
  const $$ = (sel, el = document) => Array.from(el.querySelectorAll(sel));
  const main = $("#main");

  /* ---------- Almacenamiento ---------- */
  const KEY = "mesa-estudio-v1";
  const DEFAULT_EXAMS = [
    { name: "Parcial de Cálculo I", date: "2026-10-30", s: "calculo" },
    { name: "Final de Cálculo I", date: "2027-01-20", s: "calculo" }
  ];
  let store = { q: {}, p: {}, exams: DEFAULT_EXAMS, last: null, theme: null };
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) store = Object.assign(store, JSON.parse(raw));
  } catch (e) { /* sin almacenamiento: funciona igual, sin guardar */ }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) {} }

  /* ---------- Tema ---------- */
  function applyTheme() {
    if (store.theme) document.documentElement.setAttribute("data-theme", store.theme);
    else document.documentElement.removeAttribute("data-theme");
  }
  function toggleTheme() {
    const dark = store.theme ? store.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    store.theme = dark ? "light" : "dark";
    save(); applyTheme();
  }
  applyTheme();
  $("#themeBtn").addEventListener("click", toggleTheme);
  $("#themeBtn2").addEventListener("click", toggleTheme);

  /* ---------- Menú móvil ---------- */
  const sidebar = $("#sidebar"), scrim = $("#scrim"), menuBtn = $("#menuBtn");
  function openMenu(o) {
    sidebar.classList.toggle("open", o);
    scrim.hidden = !o;
    menuBtn.setAttribute("aria-expanded", o ? "true" : "false");
  }
  menuBtn.addEventListener("click", () => openMenu(!sidebar.classList.contains("open")));
  scrim.addEventListener("click", () => openMenu(false));

  /* ---------- Utilidades ---------- */
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg; t.classList.add("show");
    clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove("show"), 1800);
  }
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }
  function daysTo(dateStr) {
    const d = new Date(dateStr + "T00:00:00");
    const now = new Date(); now.setHours(0, 0, 0, 0);
    return Math.round((d - now) / 86400000);
  }
  function fmtDate(dateStr) {
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" });
  }

  /* Resaltado de C++ muy simple */
  const KW = /^(if|else|while|for|do|return|switch|case|break|continue|default|struct|const|using|namespace|void|true|false|and|or|not|new|delete)$/;
  const TY = /^(int|float|double|char|bool|string|long|short|unsigned|ifstream|ofstream|auto)$/;
  function hlCpp(src) {
    const re = /(\/\/[^\n]*)|("(?:\\.|[^"\\])*")|('(?:\\.|[^'\\])*')|(^[ \t]*#[^\n]*)|(\b\d+(?:\.\d+)?(?:e-?\d+)?\b)|([A-Za-z_]\w*)/gm;
    let out = "", last = 0, m;
    while ((m = re.exec(src))) {
      out += esc(src.slice(last, m.index));
      const t = m[0];
      if (m[1]) out += '<span class="tk-c">' + esc(t) + "</span>";
      else if (m[2] || m[3]) out += '<span class="tk-s">' + esc(t) + "</span>";
      else if (m[4]) out += '<span class="tk-p">' + esc(t) + "</span>";
      else if (m[5]) out += '<span class="tk-n">' + esc(t) + "</span>";
      else if (KW.test(t)) out += '<span class="tk-k">' + t + "</span>";
      else if (TY.test(t)) out += '<span class="tk-t">' + t + "</span>";
      else out += t;
      last = re.lastIndex;
    }
    return out + esc(src.slice(last));
  }

  /* Pre-procesa el HTML de un tema: escapa código y resalta C++ */
  function unesc(s) { return s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&"); }
  function prep(html) {
    // 1) código en línea; 2) bloques (así el <code> que generan los bloques no se vuelve a escapar)
    return html
      .replace(/<code>([\s\S]*?)<\/code>/g, (_, c) => "<code>" + esc(unesc(c)) + "</code>")
      .replace(/<pre class="cpp">\n?([\s\S]*?)<\/pre>/g, (_, c) => '<pre class="cpp"><code>' + hlCpp(unesc(c).replace(/\s+$/, "")) + "</code></pre>")
      .replace(/<pre class="out">\n?([\s\S]*?)<\/pre>/g, (_, c) => '<pre class="out">' + esc(unesc(c).replace(/\s+$/, "")) + "</pre>");
  }


  function renderMath(el) {
    if (window.renderMathInElement) {
      try {
        window.renderMathInElement(el, {
          delimiters: [{ left: "$$", right: "$$", display: true }, { left: "$", right: "$", display: false }],
          throwOnError: false,
          ignoredClasses: ["nomath"]
        });
      } catch (e) { console.warn(e); }
    }
  }

  /* ---------- Índice ---------- */
  const SUBJ = {};
  const TH = window.THEORY || {};
  S.forEach(s => { SUBJ[s.id] = s; s.topics.forEach((t, i) => { t.idx = i; t.subject = s; t.theory = (TH[s.id] || {})[t.id] || ""; }); });

  /* Ampliaciones: bloques que se insertan al final del apartado (h2) indicado */
  const plain = h => h.replace(/<[^>]+>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").trim();
  Object.keys(window.EXTRA || {}).forEach(sid => {
    const subj = SUBJ[sid]; if (!subj) return;
    (window.EXTRA[sid] || []).forEach(x => {
      const t = subj.topics.find(tt => tt.id === x.t); if (!t) { console.warn("Ampliación sin tema", sid, x.t); return; }
      let h = t.theory || "";
      if (x.after === "^") { t.theory = x.html + h; return; }
      const re = /<h2[^>]*>([\s\S]*?)<\/h2>/g; let m, at = -1;
      while ((m = re.exec(h))) {
        if (x.after && plain(m[1]).startsWith(x.after)) { const nx = h.indexOf("<h2", re.lastIndex); at = nx === -1 ? h.length : nx; break; }
      }
      if (x.after && at === -1) console.warn("Apartado no encontrado", sid, x.t, x.after);
      if (at === -1) at = h.length;
      t.theory = h.slice(0, at) + x.html + h.slice(at);
    });
  });

  /* Cuenta preguntas y problemas por tema (sin renderizar) */
  function countTopic(t) {
    if (t._count) return t._count;
    const h = t.html + (t.theory || "");
    const qs = (h.match(/class="(tf|mc|num)\b/g) || []).length;
    const ps = (h.match(/class="prob\b/g) || []).length;
    t._count = { qs, ps };
    return t._count;
  }
  function topicProgress(s, t) {
    const { qs, ps } = countTopic(t);
    let qok = 0, pok = 0;
    const pre = s.id + "/" + t.id + "/";
    for (const k in store.q) if (k.startsWith(pre) && store.q[k] === 1) qok++;
    for (const k in store.p) if (k.startsWith(pre) && store.p[k] === "ok") pok++;
    const total = qs + ps;
    return { qs, ps, qok: Math.min(qok, qs), pok: Math.min(pok, ps), pct: total ? Math.round(100 * (Math.min(qok, qs) + Math.min(pok, ps)) / total) : 0 };
  }
  function subjectProgress(s) {
    let tot = 0, ok = 0;
    s.topics.forEach(t => { const p = topicProgress(s, t); tot += p.qs + p.ps; ok += p.qok + p.pok; });
    return tot ? Math.round(100 * ok / tot) : 0;
  }

  /* Texto plano para búsqueda */
  const searchIndex = [];
  S.forEach(s => s.topics.forEach(t => {
    const txt = (t.title + " " + (t.desc || "") + " " + ((t.theory || "") + " " + t.html).replace(/<svg[\s\S]*?<\/svg>/g, " ").replace(/<div class="plot"[\s\S]*?><\/div>/g, m => " " + ((m.match(/data-cap="([^"]*)"/) || [])[1] || "") + " ").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ");
    searchIndex.push({ s, t, txt, low: norm(txt) });
  }));
  function norm(x) { return x.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); }

  /* ---------- Navegación lateral ---------- */
  function renderNav(curS, curT) {
    const nav = $("#nav");
    nav.innerHTML = S.map(s => {
      const open = curS && curS.id === s.id;
      let topics = "";
      if (open) {
        topics = '<ul class="nav-topics">' + s.topics.map(t => {
          const p = topicProgress(s, t);
          const cur = curT && curT.id === t.id ? ' aria-current="page"' : "";
          return `<li><a href="#/s/${s.id}/${t.id}"${cur}><span>${esc(t.title)}</span><span class="mini" title="${p.pct}% completado"><i style="width:${p.pct}%"></i></span></a></li>`;
        }).join("") +
          `<li><a href="#/s/${s.id}/repaso"${curT === "repaso" ? ' aria-current="page"' : ""}><span>Repaso aleatorio</span><span></span></a></li>` +
          ((window.EXAMS || {})[s.id] ? `<li><a href="#/s/${s.id}/examenes"${curT === "examenes" ? ' aria-current="page"' : ""}><span>Exámenes de prueba</span><span></span></a></li>` : "") + `</ul>`;
      }
      const cur = open && !curT ? ' aria-current="page"' : "";
      return `<div class="nav-subj" data-s="${s.id}"><a href="#/s/${s.id}"${cur}>${esc(s.name)}</a>${topics}</div>`;
    }).join("");
  }

  /* Búsqueda */
  const searchInput = $("#search"), searchRes = $("#searchResults");
  searchInput.addEventListener("input", () => {
    const q = norm(searchInput.value.trim());
    if (q.length < 2) { searchRes.hidden = true; return; }
    const hits = [];
    for (const it of searchIndex) {
      const i = it.low.indexOf(q);
      if (i >= 0) {
        const a = Math.max(0, i - 40), b = Math.min(it.txt.length, i + q.length + 50);
        hits.push({ it, snip: (a > 0 ? "…" : "") + it.txt.slice(a, b).replace(/\$/g, "") + "…", title: norm(it.t.title).includes(q) });
      }
    }
    hits.sort((x, y) => (y.title ? 1 : 0) - (x.title ? 1 : 0));
    searchRes.hidden = false;
    searchRes.innerHTML = hits.length
      ? hits.slice(0, 12).map(h => `<a data-s="${h.it.s.id}" href="#/s/${h.it.s.id}/${h.it.t.id}">${esc(h.it.t.title)}<small>${esc(h.it.s.short || h.it.s.name)} · ${esc(h.snip)}</small></a>`).join("")
      : '<div class="none">Nada encontrado. Prueba con otra palabra.</div>';
  });
  searchRes.addEventListener("click", e => { if (e.target.closest("a")) { searchInput.value = ""; searchRes.hidden = true; } });

  /* ---------- Widgets interactivos ---------- */
  function mark(id, ok) {
    if (!id) return;
    // Un acierto queda guardado; un fallo no borra un acierto anterior.
    if (ok) store.q[id] = 1; else if (store.q[id] !== 1) store.q[id] = 0;
    save();
    refreshProgress();
  }

  function tag(el, text) {
    const t = document.createElement("div");
    t.className = "q-tag"; t.textContent = text;
    el.prepend(t);
  }
  function feedback(el, ok, text) {
    let fb = $(".fb", el);
    if (!fb) { fb = document.createElement("div"); fb.className = "fb"; const why = $(".why", el); why ? el.insertBefore(fb, why) : el.appendChild(fb); }
    fb.className = "fb " + (ok ? "ok" : "bad");
    fb.textContent = text;
    el.classList.add("answered");
  }

  function upTF(el, id) {
    el.classList.add("q");
    tag(el, "Verdadero o falso");
    const ans = (el.dataset.a || "").toLowerCase().startsWith("v");
    const row = document.createElement("div");
    row.className = "q-actions";
    row.innerHTML = '<button class="btn" data-v="1">Verdadero</button><button class="btn" data-v="0">Falso</button>';
    const why = $(".why", el);
    why ? el.insertBefore(row, why) : el.appendChild(row);
    row.addEventListener("click", e => {
      const b = e.target.closest("button"); if (!b) return;
      const said = b.dataset.v === "1";
      const ok = said === ans;
      $$("button", row).forEach(x => { x.disabled = true; x.classList.remove("is-ok", "is-bad"); });
      b.classList.add(ok ? "is-ok" : "is-bad");
      if (!ok) $$("button", row).find(x => (x.dataset.v === "1") === ans).classList.add("is-ok");
      feedback(el, ok, ok ? "¡Bien! Es " + (ans ? "verdadero." : "falso.") : "No. Es " + (ans ? "verdadero." : "falso."));
      addRetry(el, row, () => { $$("button", row).forEach(x => { x.disabled = false; x.classList.remove("is-ok", "is-bad"); }); });
      mark(id, ok);
    });
  }

  function upMC(el, id) {
    el.classList.add("q");
    tag(el, "Elige la respuesta");
    const ul = $("ul", el);
    ul.classList.add("mc-opts");
    const items = $$("li", ul);
    items.forEach(li => {
      const b = document.createElement("button");
      b.innerHTML = li.innerHTML;
      if (li.hasAttribute("data-ok")) b.dataset.ok = "1";
      li.innerHTML = ""; li.appendChild(b);
    });
    ul.addEventListener("click", e => {
      const b = e.target.closest("button"); if (!b || b.disabled) return;
      const ok = b.dataset.ok === "1";
      const all = $$("button", ul);
      all.forEach(x => { x.disabled = true; });
      b.classList.add(ok ? "is-ok" : "is-bad");
      all.filter(x => x.dataset.ok === "1").forEach(x => x.classList.add("is-ok"));
      feedback(el, ok, ok ? "¡Correcto!" : "No es esa. La correcta está marcada en verde.");
      const row = $(".q-actions", el) || (() => { const r = document.createElement("div"); r.className = "q-actions"; const why = $(".why", el); why ? el.insertBefore(r, why) : el.appendChild(r); return r; })();
      addRetry(el, row, () => all.forEach(x => { x.disabled = false; x.classList.remove("is-ok", "is-bad"); }));
      mark(id, ok);
    });
  }

  function parseNum(s) {
    s = String(s).trim().replace(/\s+/g, "").replace(/−/g, "-");
    if (!s) return NaN;
    // 1.234,5 → 1234.5 ; 2,5 → 2.5
    if (/^-?[1-9]\d{0,2}(\.\d{3})+(,\d+)?$/.test(s)) s = s.replace(/\./g, "").replace(",", ".");
    else s = s.replace(",", ".");
    const fr = s.match(/^(-?[\d.]+)\/(-?[\d.]+)$/);
    if (fr) return parseFloat(fr[1]) / parseFloat(fr[2]);
    if (!/^-?(\d+\.?\d*|\.\d+)(e-?\d+)?$/i.test(s)) return NaN;
    return parseFloat(s);
  }
  function upNum(el, id) {
    el.classList.add("q");
    tag(el, "Calcula");
    const a = parseFloat(el.dataset.a);
    const tol = el.dataset.tol ? parseFloat(el.dataset.tol) : Math.max(0.01, Math.abs(a) * 0.005);
    const row = document.createElement("div");
    row.className = "num-row";
    row.innerHTML = `<input type="text" inputmode="decimal" aria-label="Tu respuesta" placeholder="Tu resultado"> ${el.dataset.unit ? '<span class="unit">' + esc(el.dataset.unit) + "</span>" : ""}<button class="btn primary">Comprobar</button><button class="btn small" data-show>Ver respuesta</button>`;
    const why = $(".why", el);
    why ? el.insertBefore(row, why) : el.appendChild(row);
    const inp = $("input", row);
    const check = () => {
      const v = parseNum(inp.value);
      if (isNaN(v)) { feedback(el, false, "Escribe un número (puedes usar coma decimal o una fracción como 7/3)."); el.classList.remove("answered"); return; }
      const ok = Math.abs(v - a) <= tol;
      inp.style.borderColor = ok ? "var(--ok)" : "var(--bad)";
      feedback(el, ok, ok ? "¡Correcto!" : "Todavía no. Revisa el planteamiento o mira la explicación.");
      mark(id, ok);
    };
    $("button.primary", row).addEventListener("click", check);
    inp.addEventListener("keydown", e => { if (e.key === "Enter") check(); });
    $("[data-show]", row).addEventListener("click", () => {
      const shown = el.dataset.show || String(a).replace(".", ",");
      feedback(el, false, "Respuesta: " + shown);
      mark(id, false);
    });
  }

  function addRetry(el, row, reset) {
    if ($("[data-retry]", row)) return;
    const b = document.createElement("button");
    b.className = "btn small"; b.dataset.retry = "1"; b.textContent = "Reintentar";
    b.addEventListener("click", () => {
      reset(); el.classList.remove("answered");
      const fb = $(".fb", el); if (fb) fb.remove();
      b.remove();
    });
    row.appendChild(b);
  }

  function upSteps(el) {
    el.classList.add("q");
    tag(el, "Ejemplo resuelto paso a paso");
    const steps = $$(".step", el);
    steps.forEach((s, i) => s.dataset.n = "Paso " + (i + 1));
    let n = 0;
    const row = document.createElement("div");
    row.className = "q-actions";
    row.innerHTML = `<button class="btn primary">Siguiente paso (1/${steps.length})</button><button class="btn small">Ver todo</button>`;
    el.appendChild(row);
    const [next, all] = $$("button", row);
    const upd = () => {
      if (n >= steps.length) { next.disabled = true; next.textContent = "Resuelto"; all.disabled = true; }
      else next.textContent = `Siguiente paso (${n + 1}/${steps.length})`;
    };
    next.addEventListener("click", () => { if (n < steps.length) { steps[n].classList.add("shown"); n++; upd(); } });
    all.addEventListener("click", () => { steps.forEach(s => s.classList.add("shown")); n = steps.length; upd(); });
  }

  function upProb(el, id) {
    el.classList.add("q");
    tag(el, el.dataset.tag || "Problema");
    const hint = $(".hint", el), sol = $(".sol", el);
    const row = document.createElement("div");
    row.className = "q-actions";
    row.innerHTML = (hint ? '<button class="btn small" data-h>Pista</button>' : "") +
      (sol ? '<button class="btn primary small" data-sl>Ver solución</button>' : "") +
      '<span class="self"><button class="btn small" data-ok title="Lo he resuelto bien">Me salió</button><button class="btn small" data-rev title="Tengo que repasarlo">Repasar</button><span class="badge" data-st></span></span>';
    if (hint) el.insertBefore(row, hint); else if (sol) el.insertBefore(row, sol); else el.appendChild(row);
    const st = $("[data-st]", row);
    const paint = () => {
      const v = store.p[id];
      st.className = "badge" + (v === "ok" ? " ok" : v === "rev" ? " rev" : "");
      st.textContent = v === "ok" ? "Hecho" : v === "rev" ? "Para repasar" : "Pendiente";
    };
    paint();
    row.addEventListener("click", e => {
      const b = e.target.closest("button"); if (!b) return;
      if (b.hasAttribute("data-h")) { hint.classList.toggle("shown"); b.textContent = hint.classList.contains("shown") ? "Ocultar pista" : "Pista"; }
      if (b.hasAttribute("data-sl")) { sol.classList.toggle("shown"); b.textContent = sol.classList.contains("shown") ? "Ocultar solución" : "Ver solución"; }
      if (b.hasAttribute("data-ok")) { store.p[id] = "ok"; save(); paint(); refreshProgress(); toast("Marcado como hecho"); }
      if (b.hasAttribute("data-rev")) { store.p[id] = "rev"; save(); paint(); refreshProgress(); toast("Guardado para repasar"); }
    });
  }

  function upgrade(root, prefix, tg) {
    let qi = 0, pi = 0;
    tg = tg || "";
    $$(".tf, .mc, .num, .steps, .prob", root).forEach(el => {
      if (el.dataset.up) return; el.dataset.up = "1";
      const qid = el.dataset.qid || (prefix ? prefix + tg + "q" + (qi) : null);
      if (el.classList.contains("tf")) { upTF(el, qid); qi++; }
      else if (el.classList.contains("mc")) { upMC(el, qid); qi++; }
      else if (el.classList.contains("num")) { upNum(el, qid); qi++; }
      else if (el.classList.contains("steps")) upSteps(el);
      else if (el.classList.contains("prob")) { upProb(el, el.dataset.qid || (prefix ? prefix + tg + "p" + pi : "x")); pi++; }
    });
    $$("table", root).forEach(t => {
      if (t.parentElement.classList.contains("tw")) return;
      const w = document.createElement("div"); w.className = "tw";
      t.parentNode.insertBefore(w, t); w.appendChild(t);
    });
  }

  /* Refresca barras de progreso visibles sin re-renderizar la página */
  let curRoute = {};
  function refreshProgress() {
    renderNav(curRoute.s, curRoute.t);
    const pl = $("#topicProgress");
    if (pl && curRoute.s && curRoute.t && curRoute.t.id) pl.innerHTML = progressLine(curRoute.s, curRoute.t);
  }
  function progressLine(s, t) {
    const p = topicProgress(s, t);
    return `<span class="bar" aria-hidden="true"><i style="width:${p.pct}%"></i></span><span>${p.qok}/${p.qs} preguntas acertadas</span>${p.ps ? `<span>${p.pok}/${p.ps} problemas hechos</span>` : ""}`;
  }

  /* ---------- Páginas ---------- */
  function setPage(html, s, cls) {
    main.innerHTML = `<div class="page ${cls || ""}">${html}</div>`;
    if (s) main.setAttribute("data-s", s.id); else main.removeAttribute("data-s");
  }

  function nextExam() {
    const list = (store.exams || []).filter(e => daysTo(e.date) >= 0).sort((a, b) => a.date.localeCompare(b.date));
    return list[0] || null;
  }

  function pageHome() {
    curRoute = {};
    renderNav(null, null);
    const ex = nextExam();
    let headline;
    if (ex) {
      const d = daysTo(ex.date);
      headline = d === 0 ? `Hoy es el ${esc(ex.name.toLowerCase())}. Repasa con calma.`
        : `Faltan <span class="count">${d}</span> ${d === 1 ? "día" : "días"} para el ${esc(ex.name.charAt(0).toLowerCase() + ex.name.slice(1))}.`;
    } else headline = "Elige una asignatura y ponte a ello.";
    const exS = ex && SUBJ[ex.s];
    const last = store.last && SUBJ[store.last.s] && SUBJ[store.last.s].topics.find(t => t.id === store.last.t);

    const folders = S.map(s => {
      const pct = subjectProgress(s);
      return `<a class="folder" data-s="${s.id}" data-tab="${esc(s.short || s.name)}" href="#/s/${s.id}">
        <h3>${esc(s.name)}</h3><p>${esc(s.desc)}</p>
        <span class="meta"><span>${s.topics.length} temas</span><span class="bar"><i style="width:${pct}%"></i></span><span>${pct}%</span></span></a>`;
    }).join("");

    const exams = (store.exams || []).slice().sort((a, b) => a.date.localeCompare(b.date)).map((e, i) => {
      const d = daysTo(e.date);
      const left = d < 0 ? "pasado" : d === 0 ? "hoy" : d === 1 ? "mañana" : `en ${d} días`;
      return `<li data-s="${e.s || ""}"><span class="d">${fmtDate(e.date)}</span><span>${esc(e.name)}</span><span class="left" style="color:var(--c)">${left}</span><button class="x" data-del="${esc(e.name)}|${e.date}" aria-label="Quitar ${esc(e.name)}">×</button></li>`;
    }).join("");

    setPage(`
      <section class="hero" ${exS ? `data-s="${exS.id}"` : ""}>
        <h1>${headline}</h1>
        <p class="lead">Teoría explicada en limpio, preguntas rápidas mientras lees y problemas de examen con pista y solución. Tu progreso se guarda en este navegador.</p>
        <div class="hero-actions">
          ${exS ? `<a class="btn primary" href="#/s/${exS.id}">Estudiar ${esc(exS.name)}</a>` : ""}
          <a class="btn" href="#/repaso">Repaso relámpago: 10 preguntas mezcladas</a>
          ${last ? `<a class="btn" data-s="${store.last.s}" href="#/s/${store.last.s}/${last.id}">Seguir: ${esc(last.title)}</a>` : ""}
        </div>
      </section>
      <h2 style="margin-top:0">Asignaturas</h2>
      <div class="folders">${folders}</div>
      <div class="two">
        <section class="panel">
          <h2>Tus exámenes</h2>
          <ul class="exams">${exams || '<li>No hay exámenes apuntados.</li>'}</ul>
          <form class="exam-form" id="examForm">
            <input name="name" required placeholder="Nombre (p. ej. Parcial Física)" aria-label="Nombre del examen">
            <input name="date" type="date" required aria-label="Fecha">
            <select name="s" aria-label="Asignatura">${S.map(s => `<option value="${s.id}">${esc(s.short || s.name)}</option>`).join("")}</select>
            <button class="btn small">Añadir examen</button>
          </form>
        </section>
        <section class="panel">
          <h2>Cómo sacarle partido</h2>
          <p style="font-size:16px">Cada tema tiene dos pestañas: <strong>Apuntes completos</strong> (toda la teoría, explicada con calma) y <strong>Resumen y práctica</strong> (lo esencial y los problemas de examen).</p><p style="font-size:16px"><strong>¿No entiendes algo?</strong> Selecciona el trozo de texto (o la fórmula, o el código) y pulsa <strong>Explícamelo</strong>: el asistente te lo explica con más detalle y un ejemplo.</p><p style="font-size:16px">Lee un apartado y contesta las preguntas que aparecen: solo cuentan como hechas cuando aciertas. En los problemas, intenta primero sin mirar, usa la pista si te atascas y marca <em>Me salió</em> o <em>Repasar</em>. Antes del examen, usa el repaso aleatorio de la asignatura.</p>
          <p style="font-size:16px"><button class="link-btn" id="resetAll">Borrar mi progreso</button></p>
        </section>
      </div>`);
    $("#examForm").addEventListener("submit", e => {
      e.preventDefault();
      const f = new FormData(e.target);
      store.exams = (store.exams || []).concat([{ name: f.get("name").trim(), date: f.get("date"), s: f.get("s") }]);
      save(); pageHome(); toast("Examen añadido");
    });
    $$("[data-del]").forEach(b => b.addEventListener("click", () => {
      const [n, d] = b.dataset.del.split("|");
      store.exams = store.exams.filter(x => !(x.name === n && x.date === d));
      save(); pageHome();
    }));
    $("#resetAll").addEventListener("click", () => {
      if (confirm("¿Borrar todas las respuestas y problemas marcados?")) { store.q = {}; store.p = {}; save(); pageHome(); toast("Progreso borrado"); }
    });
  }

  function pageSubject(s) {
    curRoute = { s, t: null };
    renderNav(s, null);
    const list = s.topics.map((t, i) => {
      const p = topicProgress(s, t);
      return `<li><a href="#/s/${s.id}/${t.id}"><span class="num">${i + 1}</span><span><span class="t">${esc(t.title)}</span><span class="d">${esc(t.desc || "")}</span></span><span class="p">${p.qs} preg. · ${p.ps} prob.<span class="bar"><i style="width:${p.pct}%"></i></span></span></a></li>`;
    }).join("");
    setPage(`
      <div class="crumbs"><a href="#/">Inicio</a> / ${esc(s.name)}</div>
      <div class="topic-head"><h1>${esc(s.name)}</h1></div>
      <p class="lead">${esc(s.intro || s.desc)}</p>
      <div class="hero-actions"><a class="btn primary" href="#/s/${s.id}/${s.topics[0].id}">Empezar por el tema 1</a><a class="btn" href="#/s/${s.id}/repaso">Repaso aleatorio de ${esc(s.short || s.name)}</a>${(window.EXAMS || {})[s.id] ? `<a class="btn" href="#/s/${s.id}/examenes">Exámenes de prueba</a>` : ""}</div>
      <ol class="topic-list">${list}</ol>
      ${s.sources ? `<p class="crumbs">Basado en tus materiales: ${esc(s.sources)}</p>` : ""}`, s);
  }

  function pageTopic(s, t, tab) {
    curRoute = { s, t };
    store.last = { s: s.id, t: t.id }; save();
    renderNav(s, t);
    const prev = s.topics[t.idx - 1], next = s.topics[t.idx + 1];
    const hasT = !!t.theory;
    setPage(`
      <div class="crumbs"><a href="#/">Inicio</a> / <a href="#/s/${s.id}">${esc(s.name)}</a> / Tema ${t.idx + 1}</div>
      <div class="topic-head"><h1>${esc(t.title)}</h1></div>
      ${t.desc ? `<p class="lead">${esc(t.desc)}</p>` : ""}
      <div class="progress-line" id="topicProgress">${progressLine(s, t)}</div>
      ${hasT ? `<div class="tabs" role="tablist" aria-label="Partes del tema">
        <button role="tab" id="tabT" aria-controls="teoria">Apuntes completos</button>
        <button role="tab" id="tabP" aria-controls="content">Resumen y práctica</button></div>` : ""}
      <nav class="toc" id="toc" aria-label="Apartados"></nav>
      ${hasT ? `<article id="teoria" class="pane" role="tabpanel">${prep(t.theory)}</article>` : ""}
      <article id="content" class="pane" role="tabpanel">${prep(t.html)}</article>
      <nav class="pager">
        ${prev ? `<a href="#/s/${s.id}/${prev.id}"><small>Anterior</small>${esc(prev.title)}</a>` : "<span></span>"}
        ${next ? `<a class="next" href="#/s/${s.id}/${next.id}"><small>Siguiente</small>${esc(next.title)}</a>` : `<a class="next" href="#/s/${s.id}/repaso"><small>Para terminar</small>Repaso aleatorio</a>`}
      </nav>`, s);
    const panes = [["teoria", "teo-", "t"], ["content", "sec-", ""]];
    panes.forEach(([pid, pre, tg]) => {
      const el = document.getElementById(pid); if (!el) return;
      $$("h2", el).forEach((h, i) => { h.id = pre + (i + 1); });
      renderMath(el);
      if (window.MESA_PLOT) window.MESA_PLOT.upgrade(el);
      upgrade(el, s.id + "/" + t.id + "/", tg);
    });
    showTab(hasT ? (tab || store.tab || "teoria") : "content");
    if (hasT) {
      $("#tabT").addEventListener("click", () => { store.tab = "teoria"; save(); showTab("teoria"); });
      $("#tabP").addEventListener("click", () => { store.tab = "content"; save(); showTab("content"); });
    }
  }
  function showTab(which) {
    const s = curRoute.s, t = curRoute.t;
    ["teoria", "content"].forEach(id => { const el = document.getElementById(id); if (el) el.hidden = id !== which; });
    const tT = $("#tabT"), tP = $("#tabP");
    if (tT) { tT.setAttribute("aria-selected", which === "teoria"); tP.setAttribute("aria-selected", which === "content"); }
    const pane = document.getElementById(which);
    const hs = pane ? $$("h2", pane) : [];
    $("#toc").innerHTML = hs.map(h => `<a href="#/s/${s.id}/${t.id}/${h.id}">${esc(h.textContent)}</a>`).join("");
  }

  /* ---------- Exámenes de prueba ---------- */
  function pageExamList(s) {
    curRoute = { s, t: "examenes" };
    renderNav(s, "examenes");
    const list = (window.EXAMS || {})[s.id] || [];
    setPage(`
      <div class="crumbs"><a href="#/">Inicio</a> / <a href="#/s/${s.id}">${esc(s.name)}</a> / Exámenes de prueba</div>
      <div class="topic-head"><h1>Exámenes de prueba</h1></div>
      <p class="lead">Tres simulacros con el formato y el nivel de los exámenes reales, con preguntas nuevas. Hazlos con el tiempo indicado, en papel, y después corrígete con el solucionario.</p>
      <div class="exam-cards">${list.map((e, i) => `
        <div class="exam-card">
          <div class="exam-card-n">${i + 1}</div>
          <div><h3>${esc(e.title)}</h3><p>${esc(e.desc)}</p><p class="exam-meta">${esc(e.dur)} · ${esc(e.pts)}</p>
          <div class="hero-actions"><a class="btn primary" href="#/s/${s.id}/examen/${i + 1}">Ver examen</a><a class="btn" href="#/s/${s.id}/examen/${i + 1}/solucion">Solucionario</a></div></div>
        </div>`).join("")}</div>
      <div class="tip"><span class="label">Consejo</span><p>Con el botón <strong>Imprimir / guardar PDF</strong> de cada examen obtienes una hoja A4 limpia para hacerlo a mano, como el día del examen.</p></div>`, s);
  }
  function pageExam(s, n, sol) {
    const list = (window.EXAMS || {})[s.id] || [];
    const e = list[n - 1];
    if (!e) return pageExamList(s);
    curRoute = { s, t: "examenes" };
    renderNav(s, "examenes");
    const base = `#/s/${s.id}/examen/${n}`;
    setPage(`
      <div class="exam-bar">
        <a class="crumbs" href="#/s/${s.id}/examenes">← Exámenes de ${esc(s.short || s.name)}</a>
        <div class="seg" role="tablist">
          <a role="tab" href="${base}" aria-selected="${!sol}">Enunciado</a>
          <a role="tab" href="${base}/solucion" aria-selected="${!!sol}">Solucionario</a>
        </div>
        <button class="btn small" id="printBtn">Imprimir / guardar PDF</button>
      </div>
      <article class="sheet">
        <header class="sheet-head">
          <div class="sheet-top"><span>Mesa de estudio · Examen de prueba (no oficial)</span><span>${esc(s.name)}</span></div>
          <h1>${sol ? "Solucionario · " : ""}${esc(e.title)}</h1>
          <p class="sheet-sub">${esc(e.sub)}</p>
          ${sol ? "" : `<table class="sheet-id"><tr><td>Apellidos y nombre:</td><td class="line"></td><td>DNI:</td><td class="line short"></td></tr></table>`}
          <p class="sheet-info"><span>Duración: ${esc(e.dur)}</span><span>${esc(e.pts)}</span></p>
          ${!sol && e.instr ? `<div class="sheet-instr">${e.instr}</div>` : ""}
        </header>
        <div class="sheet-body">${prep(sol ? e.sol : e.exam)}</div>
        <footer class="sheet-foot">${sol ? "Fin del solucionario" : "Fin del examen"}</footer>
      </article>`, s, "wide");
    const sheet = $(".sheet");
    renderMath(sheet);
    if (window.MESA_PLOT) window.MESA_PLOT.upgrade(sheet);
    $("#printBtn").addEventListener("click", () => window.print());
  }

  /* Repaso: extrae preguntas de los temas */
  function collectQuestions(subjects) {
    const box = document.createElement("div");
    const out = [];
    subjects.forEach(s => s.topics.forEach(t => {
      [[t.theory, "t"], [t.html, ""]].forEach(([html, tg]) => {
        if (!html) return;
        box.innerHTML = prep(html);
        let qi = 0;
        $$(".tf, .mc, .num, .steps, .prob", box).forEach(el => {
          const isQ = el.classList.contains("tf") || el.classList.contains("mc") || el.classList.contains("num");
          if (isQ) { out.push({ s, t, id: s.id + "/" + t.id + "/" + tg + "q" + qi, html: el.outerHTML }); qi++; }
        });
      });
    }));
    return out;
  }
  function pageQuiz(subjects, title, s) {
    curRoute = { s, t: "repaso" };
    renderNav(s, s ? "repaso" : null);
    const all = collectQuestions(subjects);
    // Prioriza las no acertadas
    const pending = all.filter(q => store.q[q.id] !== 1), done = all.filter(q => store.q[q.id] === 1);
    const pick = shuffle(pending).concat(shuffle(done)).slice(0, 10);
    shuffle(pick);
    setPage(`
      <div class="crumbs"><a href="#/">Inicio</a>${s ? ` / <a href="#/s/${s.id}">${esc(s.name)}</a>` : ""} / Repaso</div>
      <div class="topic-head"><h1>${esc(title)}</h1></div>
      <p class="lead">10 preguntas al azar, primero las que todavía no has acertado. Quedan ${pending.length} de ${all.length} por acertar.</p>
      <div class="quiz-top"><span class="score" id="score">0 / ${pick.length}</span><button class="btn" id="again">Otras 10 preguntas</button></div>
      <div id="quiz">${pick.map(q => `<div data-s="${q.s.id}"><div class="from">${esc(q.s.short || q.s.name)} · ${esc(q.t.title)}</div>${q.html.replace(/^<div /, `<div data-qid="${q.id}" `)}</div>`).join("")}</div>`, s);
    const quiz = $("#quiz");
    renderMath(quiz);
    upgrade(quiz, null);
    const score = () => {
      const ok = $$(".fb.ok", quiz).length;
      $("#score").textContent = `${ok} / ${pick.length} acertadas`;
    };
    quiz.addEventListener("click", () => setTimeout(score, 0));
    quiz.addEventListener("keydown", () => setTimeout(score, 0));
    $("#again").addEventListener("click", () => pageQuiz(subjects, title, s));
  }

  /* ---------- Router ---------- */
  function route() {
    openMenu(false);
    const h = location.hash.replace(/^#\/?/, "");
    const parts = h.split("/").filter(Boolean);
    let anchor = null;
    if (parts[0] === "s" && SUBJ[parts[1]]) {
      const s = SUBJ[parts[1]];
      if (!parts[2]) pageSubject(s);
      else if (parts[2] === "repaso") pageQuiz([s], "Repaso de " + s.name, s);
      else if (parts[2] === "examenes") pageExamList(s);
      else if (parts[2] === "examen") pageExam(s, parseInt(parts[3], 10) || 1, parts[4] === "solucion");
      else {
        const t = s.topics.find(x => x.id === parts[2]);
        if (t) {
          anchor = parts[3];
          const wantTab = anchor && anchor.startsWith("teo-") ? "teoria" : anchor && anchor.startsWith("sec-") ? "content" : null;
          if (!(curRoute.s === s && curRoute.t === t && $("#content"))) pageTopic(s, t, wantTab);
          else if (wantTab && document.getElementById(wantTab)) showTab(wantTab);
        } else pageSubject(s);
      }
    } else if (parts[0] === "repaso") pageQuiz(S, "Repaso relámpago", null);
    else pageHome();
    if (anchor) { const el = document.getElementById(anchor); if (el) { el.scrollIntoView(); return; } }
    window.scrollTo(0, 0);
    main.focus({ preventScroll: true });
  }
  // Para el chat: qué asignatura y tema se está viendo
  window.MESA = { current: () => ({ s: curRoute.s || null, t: (curRoute.t && curRoute.t.id) ? curRoute.t : null }) };

  window.addEventListener("hashchange", route);
  route();
})();
