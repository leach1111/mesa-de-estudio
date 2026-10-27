/* Gráficas interactivas para los apuntes.
   Uso en el contenido:
   <div class="plot" data-x="-4,4" data-y="-2,2"
        data-f="sin(x); a*sin(b*x)"            funciones y = f(x), separadas por ;
        data-l="sin x; a·sin(bx)"              leyenda
        data-p="a=1,0,3,0.1; b=1,0.5,4,0.5"    deslizadores: nombre=valor,mín,máx,paso
        data-par="0,6.28|cos(t)|sin(t)"        curvas paramétricas tmin,tmax|x(t)|y(t)
        data-pol="0,6.28|1+cos(t)"             curvas polares tmin,tmax|r(t)
        data-pts="p|p^2"                       puntos x|y  (data-ptl: etiquetas)
        data-vec="0|0|1|2"                     flechas x1|y1|x2|y2 (data-vecl: etiquetas)
        data-fill="0|a|b"                      sombrea bajo f0 entre a y b (o 0|a|b|1 entre f0 y f1)
        data-info="Área=b^3/3"                 valores calculados que se actualizan
        data-equal                              misma escala en los dos ejes
        data-cap="Pie de figura"></div>
   El contenido es de la propia web (no lo escribe el usuario), por eso se compila con Function. */
(function () {
  "use strict";
  const COLORS = ["var(--s1)", "var(--s2)", "var(--s3)", "var(--s4)", "var(--s5)", "var(--s6)"];
  const fact = n => { let r = 1; for (let i = 2; i <= n; i++) r *= i; return r; };
  const H = {
    fact,
    tsin: (x, n) => { let s = 0; for (let k = 0; 2 * k + 1 <= n; k++) s += (k % 2 ? -1 : 1) * Math.pow(x, 2 * k + 1) / fact(2 * k + 1); return s; },
    tcos: (x, n) => { let s = 0; for (let k = 0; 2 * k <= n; k++) s += (k % 2 ? -1 : 1) * Math.pow(x, 2 * k) / fact(2 * k); return s; },
    texp: (x, n) => { let s = 0; for (let k = 0; k <= n; k++) s += Math.pow(x, k) / fact(k); return s; },
    tln: (x, n) => { let s = 0; for (let k = 1; k <= n; k++) s += (k % 2 ? 1 : -1) * Math.pow(x, k) / k; return s; },
    geo: (r, n) => { let s = 0; for (let k = 0; k <= n; k++) s += Math.pow(r, k); return s; },
    // polígono regular inscrito: vértices en los ángulos (a + 2πk)/n, radio R
    px: (t, n, R, a) => { const k = Math.floor(t), s = t - k, t0 = (a + 2 * Math.PI * k) / n, t1 = (a + 2 * Math.PI * (k + 1)) / n; return R * ((1 - s) * Math.cos(t0) + s * Math.cos(t1)); },
    py: (t, n, R, a) => { const k = Math.floor(t), s = t - k, t0 = (a + 2 * Math.PI * k) / n, t1 = (a + 2 * Math.PI * (k + 1)) / n; return R * ((1 - s) * Math.sin(t0) + s * Math.sin(t1)); },
    clamp: (v, a, b) => Math.min(b, Math.max(a, v))
  };
  const PRE = '"use strict";const {sin,cos,tan,asin,acos,atan,atan2,sinh,cosh,tanh,asinh,acosh,atanh,exp,sqrt,abs,floor,ceil,round,min,max,sign,pow,cbrt,hypot}=Math;const ln=Math.log,log=Math.log,log10=Math.log10,pi=Math.PI,E=Math.E;';
  function compile(expr, vars) {
    const src = String(expr).trim().replace(/\^/g, "**");
    try { return new Function("H", ...vars, PRE + "return (" + src + ");").bind(null, H); }
    catch (err) { console.warn("Expresión no válida:", expr, err); return () => NaN; }
  }
  const split = (s, sep) => (s || "").split(sep).map(x => x.trim()).filter(Boolean);
  const fmt = v => {
    if (!isFinite(v)) return v === Infinity ? "∞" : "—";
    const a = Math.abs(v);
    const d = a >= 1000 ? 0 : a >= 10 ? 2 : 3;
    const out = v.toLocaleString("es-ES", { maximumFractionDigits: d });
    return out === "-0" ? "0" : out;
  };
  function niceStep(range) {
    const raw = range / 8, p = Math.pow(10, Math.floor(Math.log10(raw))), m = raw / p;
    return (m < 1.5 ? 1 : m < 3.5 ? 2 : m < 7.5 ? 5 : 10) * p;
  }

  function build(el) {
    if (el.dataset.ready) return;
    el.dataset.ready = "1";
    const W = 640, Hh = +(el.dataset.h || 340);
    const params = split(el.dataset.p, ";").map(s => {
      const [name, rest] = s.split("=");
      const [v, lo, hi, st] = rest.split(",").map(Number);
      return { name: name.trim(), v, lo, hi, st: st || (hi - lo) / 100 };
    });
    const names = ["x", ...params.map(p => p.name)];
    const fns = split(el.dataset.f, ";").map(e => compile(e, names));
    const labels = split(el.dataset.l, ";");
    const tnames = ["t", ...params.map(p => p.name)], pnames = params.map(p => p.name);
    const pars = split(el.dataset.par, ";").map(s => { const [rng, xe, ye] = s.split("|"); const [a, b] = rng.split(","); return { a: compile(a, pnames), b: compile(b, pnames), x: compile(xe, tnames), y: compile(ye, tnames) }; });
    const pols = split(el.dataset.pol, ";").map(s => { const [rng, re] = s.split("|"); const [a, b] = rng.split(","); return { a: compile(a, pnames), b: compile(b, pnames), r: compile(re, tnames) }; });
    const pts = split(el.dataset.pts, ";").map(s => { const [xe, ye] = s.split("|"); return { x: compile(xe, pnames), y: compile(ye, pnames) }; });
    const ptl = (el.dataset.ptl || "").split(";").map(s => s.trim());
    const vecs = split(el.dataset.vec, ";").map(s => s.split("|").map(e => compile(e, pnames)));
    const vecl = (el.dataset.vecl || "").split(";").map(s => s.trim());
    const fills = split(el.dataset.fill, ";").map(s => { const q = s.split("|"); return { i: +q[0], lo: compile(q[1], pnames), hi: compile(q[2], pnames), j: q[3] != null ? +q[3] : null }; });
    // separa "etiqueta=expresión": el último "=" que no forma parte de ==, <=, >=, != ni va tras un espacio
    const cut = s => { let k = -1; for (let i = 1; i < s.length; i++) if (s[i] === "=" && !"=<>! ".includes(s[i - 1]) && s[i + 1] !== "=") k = i; return k; };
    const infos = split(el.dataset.info, ";").map(s => { const k = cut(s); return { label: s.slice(0, k), f: compile(s.slice(k + 1), pnames) }; });
    let [x0, x1] = (el.dataset.x || "-5,5").split(",").map(Number);
    let [y0, y1] = (el.dataset.y || "-3,3").split(",").map(Number);
    const equal = el.hasAttribute("data-equal");
    const pad = { l: 34, r: 12, t: 12, b: 26 };
    const pw = W - pad.l - pad.r, ph = Hh - pad.t - pad.b;
    if (equal) { const span = (x1 - x0) * ph / pw; if (y0 >= 0) { y1 = y0 + span; } else { const cy = (y0 + y1) / 2; y0 = cy - span / 2; y1 = cy + span / 2; } }
    const X = x => pad.l + (x - x0) / (x1 - x0) * pw, Y = y => pad.t + (y1 - y) / (y1 - y0) * ph;
    const uid = "c" + Math.random().toString(36).slice(2, 8);

    el.innerHTML = "";
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", `0 0 ${W} ${Hh}`);
    svg.setAttribute("class", "plot-svg");
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label", el.dataset.cap || "Gráfica");
    el.appendChild(svg);
    const legend = document.createElement("div"); legend.className = "plot-legend";
    const ctrls = document.createElement("div"); ctrls.className = "plot-ctrls";
    const info = document.createElement("div"); info.className = "plot-info";
    el.append(legend, ctrls, info);
    if (el.dataset.cap) { const c = document.createElement("div"); c.className = "plot-cap"; c.textContent = el.dataset.cap; el.appendChild(c); }
    const legendItems = labels.map((l, i) => `<span><i style="background:${COLORS[i % COLORS.length]}"></i>${l}</span>`);
    legend.innerHTML = legendItems.join("");
    if (!labels.length) legend.remove();

    params.forEach(p => {
      const lab = document.createElement("label");
      lab.innerHTML = `<span class="pn">${p.name}</span><input type="range" min="${p.lo}" max="${p.hi}" step="${p.st}" value="${p.v}" aria-label="Parámetro ${p.name}"><output>${fmt(p.v)}</output>`;
      const inp = lab.querySelector("input"), out = lab.querySelector("output");
      inp.addEventListener("input", () => { p.v = +inp.value; out.textContent = fmt(p.v); draw(); });
      ctrls.appendChild(lab);
    });
    if (!params.length) ctrls.remove();
    if (!infos.length) info.remove();

    function path(points) {
      let d = "", pen = false, prev = null;
      const big = (y1 - y0) * 4;
      for (const [x, y] of points) {
        if (!isFinite(x) || !isFinite(y) || Math.abs(y - (y0 + y1) / 2) > big || (prev && Math.abs(y - prev[1]) > (y1 - y0) * 1.5)) { pen = false; prev = isFinite(y) ? [x, y] : null; continue; }
        d += (pen ? "L" : "M") + X(x).toFixed(1) + " " + Y(y).toFixed(1);
        pen = true; prev = [x, y];
      }
      return d;
    }
    function draw() {
      const pv = params.map(p => p.v);
      let s = `<defs><clipPath id="${uid}"><rect x="${pad.l}" y="${pad.t}" width="${pw}" height="${ph}"/></clipPath>
        <marker id="${uid}a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="context-stroke"/></marker></defs>`;
      // rejilla y ejes
      const sx = niceStep(x1 - x0), sy = niceStep((y1 - y0) * pw / ph) * (equal ? 1 : 1);
      const syy = equal ? sx : niceStep(y1 - y0);
      s += `<g class="plot-grid">`;
      for (let x = Math.ceil(x0 / sx) * sx; x <= x1 + 1e-9; x += sx) s += `<line x1="${X(x)}" y1="${pad.t}" x2="${X(x)}" y2="${pad.t + ph}"/>`;
      for (let y = Math.ceil(y0 / syy) * syy; y <= y1 + 1e-9; y += syy) s += `<line x1="${pad.l}" y1="${Y(y)}" x2="${pad.l + pw}" y2="${Y(y)}"/>`;
      s += `</g><g class="plot-axis">`;
      if (y0 <= 0 && y1 >= 0) s += `<line x1="${pad.l}" y1="${Y(0)}" x2="${pad.l + pw}" y2="${Y(0)}"/>`;
      if (x0 <= 0 && x1 >= 0) s += `<line x1="${X(0)}" y1="${pad.t}" x2="${X(0)}" y2="${pad.t + ph}"/>`;
      s += `</g><g class="plot-ticks">`;
      const ty = (y0 <= 0 && y1 >= 0) ? Y(0) : pad.t + ph;
      for (let x = Math.ceil(x0 / sx) * sx; x <= x1 + 1e-9; x += sx) if (Math.abs(x) > 1e-9) s += `<text x="${X(x)}" y="${Math.min(ty + 14, Hh - 4)}" text-anchor="middle">${fmt(x)}</text>`;
      const tx = (x0 <= 0 && x1 >= 0) ? X(0) : pad.l;
      for (let y = Math.ceil(y0 / syy) * syy; y <= y1 + 1e-9; y += syy) if (Math.abs(y) > 1e-9) s += `<text x="${Math.max(tx - 4, 28)}" y="${Y(y) + 4}" text-anchor="end">${fmt(y)}</text>`;
      s += `</g><g clip-path="url(#${uid})">`;
      // sombreados
      fills.forEach(fl => {
        const lo = Math.max(x0, fl.lo(...pv)), hi = Math.min(x1, fl.hi(...pv));
        if (!(hi > lo)) return;
        const N = 300, top = [], bot = [];
        for (let k = 0; k <= N; k++) {
          const x = lo + (hi - lo) * k / N;
          const a = fns[fl.i](x, ...pv), b = fl.j == null ? 0 : fns[fl.j](x, ...pv);
          if (isFinite(a) && isFinite(b)) { top.push([x, a]); bot.push([x, b]); }
        }
        if (!top.length) return;
        const d = "M" + top.map(([x, y]) => X(x).toFixed(1) + " " + Y(H.clamp(y, y0 - 10, y1 + 10)).toFixed(1)).join("L") + "L" + bot.reverse().map(([x, y]) => X(x).toFixed(1) + " " + Y(H.clamp(y, y0 - 10, y1 + 10)).toFixed(1)).join("L") + "Z";
        s += `<path d="${d}" class="plot-fill" style="fill:${COLORS[fl.i % COLORS.length]}"/>`;
      });
      // funciones
      const N = +(el.dataset.n || 600);
      fns.forEach((f, i) => {
        const P = [];
        for (let k = 0; k <= N; k++) { const x = x0 + (x1 - x0) * k / N; P.push([x, f(x, ...pv)]); }
        s += `<path d="${path(P)}" class="plot-line" style="stroke:${COLORS[i % COLORS.length]}"/>`;
      });
      // paramétricas y polares
      const curve = (fx, fy, a, b, i) => {
        const P = [];
        for (let k = 0; k <= N; k++) { const t = a + (b - a) * k / N; P.push([fx(t, ...pv), fy(t, ...pv)]); }
        let d = "", pen = false, q = null;
        const jump = Math.max(x1 - x0, y1 - y0) * 0.5, far = Math.max(x1 - x0, y1 - y0) * 6;
        for (const [x, y] of P) {
          if (!isFinite(x) || !isFinite(y) || Math.abs(x) > far || Math.abs(y) > far || (q && Math.hypot(x - q[0], y - q[1]) > jump)) { pen = false; q = (isFinite(x) && isFinite(y)) ? [x, y] : null; continue; }
          d += (pen ? "L" : "M") + X(x).toFixed(1) + " " + Y(y).toFixed(1); pen = true; q = [x, y];
        }
        s += `<path d="${d}" class="plot-line" style="stroke:${COLORS[i % COLORS.length]}"/>`;
      };
      pars.forEach((c, i) => curve(c.x, c.y, c.a(...pv), c.b(...pv), fns.length + i));
      pols.forEach((c, i) => curve((t, ...q) => c.r(t, ...q) * Math.cos(t), (t, ...q) => c.r(t, ...q) * Math.sin(t), c.a(...pv), c.b(...pv), fns.length + pars.length + i));
      // vectores
      vecs.forEach((v, i) => {
        const [a, b, c, d] = v.map(f => f(...pv));
        const col = COLORS[(i + 1) % COLORS.length];
        s += `<line x1="${X(a)}" y1="${Y(b)}" x2="${X(c)}" y2="${Y(d)}" class="plot-vec" style="stroke:${col}" marker-end="url(#${uid}a)"/>`;
        if (vecl[i]) s += `<text x="${X(c) + 6}" y="${Y(d) - 6}" class="plot-lab" style="fill:${col}">${vecl[i]}</text>`;
      });
      // puntos
      pts.forEach((p, i) => {
        const x = p.x(...pv), y = p.y(...pv);
        if (!isFinite(x) || !isFinite(y)) return;
        s += `<circle cx="${X(x)}" cy="${Y(y)}" r="4.5" class="plot-pt"/>`;
        if (ptl[i]) s += `<text x="${X(x) + 7}" y="${Y(y) - 7}" class="plot-lab">${ptl[i]}</text>`;
      });
      s += `</g>`;
      svg.innerHTML = s;
      if (infos.length) info.innerHTML = infos.map(it => `<span>${it.label} = <strong>${fmt(it.f(...pv))}</strong></span>`).join("");
    }
    draw();
  }
  window.MESA_PLOT = { upgrade(root) { (root || document).querySelectorAll(".plot").forEach(build); } };
})();
