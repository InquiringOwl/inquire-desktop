/* ============ Labs: Algebra II, batch B7 (rational functions, horizontal/slant asymptotes, variation) ============ */
(function(){
const L = window.LABS;
const MI = "−";
const MRx = () => window.MathRules;

/* ---------- DOM-free helpers: sign chart, crossing the asymptote and variation are in MathRules (web/kits/subjects/math.js) ---------- */
const signIntervals = R => MRx().signIntervals(R);
const asymCross = R => MRx().asymCross(R);
const variation = (type, x0, y0) => MRx().variation(type, x0, y0);
const VAR = window.MathRules.VARIATION;

/* ---------- shared formatting ---------- */
const ix = "<i>x</i>";
const frH = (a, b) => `<span class="fr"><span>${a}</span><span>${b}</span></span>`;
const qh = q => { q = MRx().Q(q); return q.d === 1 ? MRx().sg(q.n) : `${q.n < 0 ? MI : ""}${frH(Math.abs(q.n), q.d)}`; };
const numT = z => (z.q ? MRx().qT(z.q) : MRx().fmtN(z.x, 3));
// (x − r) as HTML, r a rational (Q) or integer; bare x for r = 0
function linH(r){ const { Q } = MRx(); r = Q(r); if (r.n === 0) return ix; const a = Q.abs(r);
  return r.d === 1 ? `(${ix} ${r.n < 0 ? "+" : MI} ${a.n})` : `(${a.d}${ix} ${r.n < 0 ? "+" : MI} ${a.n})`; }
// Polynomial as a product of rational linear factors and an irreducible rest, HTML.
function factorH(p){
  const { Q, Poly, polyH } = MRx(), { roots, rest } = Poly.ratRoots(p);
  let den = Q(1); const parts = roots.map(({ r, m }) => { den = Q.mul(den, Q.pow(Q(Q(r).d), m)); return linH(r) + (m > 1 ? `<sup>${m}</sup>` : ""); });
  const restS = Poly.scale(rest, Q.inv(den));
  if (Poly.deg(restS) >= 1) { const lead = Poly.lead(restS), mon = Poly.scale(restS, Q.inv(lead)), c = Q.eq(lead, 1) ? "" : Q.eq(lead, -1) ? MI : qh(lead);
    return c + (parts.length || c ? `(${polyH(mon)})` : polyH(mon)) + parts.join(""); }
  const c = restS[0];
  if (!parts.length) return qh(c);
  const s = parts.length === 1 && parts[0][0] === "(" && Q.eq(c, 1) ? parts[0].slice(1, -1) : parts.join("");
  return (Q.eq(c, 1) ? "" : Q.eq(c, -1) ? MI : qh(c)) + (Q.eq(c, 1) ? s : parts.join(""));
}
// domain as interval notation from sorted excluded values [{x, q}]
function domH(ex){
  if (!ex.length) return `(${MI}∞, ∞)`;
  const pts = ex.map(numT); let s = `(${MI}∞, ${pts[0]})`;
  for (let i = 1; i < pts.length; i++) s += ` ∪ (${pts[i - 1]}, ${pts[i]})`;
  return s + ` ∪ (${pts[pts.length - 1]}, ∞)`;
}
// a point of y = f(x) well inside the window, searched from the right (for a label on a line or curve)
function onLine(P, f, at = 0.85){ const my = (P.ymax - P.ymin) * 0.1; for (let t = at; t > 0.08; t -= 0.03) { const x = P.xmin + (P.xmax - P.xmin) * t, y = f(x); if (isFinite(y) && y > P.ymin + my && y < P.ymax - my) return { x, y }; } return null; }
const inf = s => (s > 0 ? "∞" : `${MI}∞`);
const big = v => (!isFinite(v) ? "undefined" : Math.abs(v) >= 100 ? MRx().fmtN(v, 1) : MRx().fmtN(v, 4));
const CSS7 = `.b7-row{display:flex;flex-wrap:wrap;align-items:center;gap:0;margin:2px 0 6px}
.b7-lab{width:100%;font:600 10.5px/1.6 var(--ui);letter-spacing:.14em;text-transform:uppercase;color:var(--faint)}
.b7-note{font:12.5px/1.4 var(--sans);color:var(--faint);margin:4px 0 8px}
button.mk-chip{cursor:pointer;background:none;margin:2px 4px 2px 0}
table.b7-t{border-collapse:collapse;font:400 16px/1.4 var(--math);margin:4px 0}
table.b7-t td,table.b7-t th{padding:1px 9px;text-align:right;white-space:nowrap}
table.b7-t th{font:600 10.5px/1.6 var(--ui);letter-spacing:.12em;text-transform:uppercase;color:var(--faint)}
table.b7-t tr.on td,table.b7-t td.on{color:var(--amber)} table.b7-t th{text-transform:none;font:italic 13px var(--math);letter-spacing:0} table.b7-t tr.mid td{border-top:1px solid var(--line-2);border-bottom:1px solid var(--line-2)}`;
function css(){ if (!document.getElementById("b7-css")) { const s = document.createElement("style"); s.id = "b7-css"; s.textContent = CSS7; document.head.appendChild(s); } }

/* ================= Rational functions: domain, holes, vertical asymptotes (B · Features) ================= */
L["a2-rational-func"] = k => {
  MathKit.attach(k); css();
  const { C, F } = k, MR = k.MR, Q = MR.Q, Poly = MR.Poly, c = k.canvas(), host = k.dom();
  const ROOTS = [-3, -1, 0, 2, 3], START = { num: { "-3": 1, "3": 1 }, den: { "-1": 1, "3": 1 } };
  let mult = JSON.parse(JSON.stringify(START)), mode = "graph", P = null, R = null, tblLast = "";
  const probe = { x: 1.5, y: 0, fixY: true, clamp: [-5.95, 5.95, 0, 0] };
  const AV = [-4, -3, -2, -1, -0.5, 0.5, 1, 2, 3, 4];
  const T = { a: 1, h: 0, kk: 0, p: 1 };
  const chips = document.createElement("div"), tbl = document.createElement("div"); host.append(chips, tbl);
  const polyOf = s => Poly.fromRoots(ROOTS.flatMap(r => Array(mult[s][r] || 0).fill(r)));
  const sideH = s => { const fs = ROOTS.filter(r => mult[s][r]).map(r => linH(r) + (mult[s][r] === 2 ? "<sup>2</sup>" : "")); return fs.length ? (fs.length === 1 && fs[0][0] === "(" && mult[s][ROOTS.find(r => mult[s][r])] === 1 ? fs[0].slice(1, -1) : fs.join("")) : "1"; };
  function rebuild(){
    R = MR.rational(polyOf("num"), polyOf("den"));
    const row = s => `<div class="b7-row"><span class="b7-lab">${s === "num" ? "numerator factors" : "denominator factors"}</span>${ROOTS.map(r => {
      const m = mult[s][r] || 0, other = mult[s === "num" ? "den" : "num"][r] || 0, col = !m ? C.faint : other ? C.amber : s === "num" ? C.green : C.violet;
      return `<button type="button" class="mk-chip" data-s="${s}" data-r="${r}" aria-pressed="${m > 0}" style="color:${col};border-color:${col};background:${m ? k.alpha(col, 0.14) : "none"}">${linH(r).replace(/^\((.*)\)$/, "$1")}${m === 2 ? "<sup>2</sup>" : ""}</button>`; }).join("")}</div>`;
    chips.innerHTML = row("num") + row("den") + `<div class="b7-note">Tap a factor: off, on, squared, off. Amber = on top and bottom.</div>`;
  }
  chips.addEventListener("click", e => { const b = e.target.closest("button[data-s]"); if (!b) return; const s = b.dataset.s, r = b.dataset.r; mult[s][r] = ((mult[s][r] || 0) + 1) % 3; rebuild(); });
  rebuild();
  const nearest = () => R.excluded.reduce((b, e) => (!b || Math.abs(e.x - probe.x) < Math.abs(b.x - probe.x) ? e : b), null);
  function closer(){ const e = nearest(); if (!e) { k.hint("No excluded values: add a denominator factor."); return; } const sd = probe.x >= e.x ? 1 : -1, dd = Math.abs(probe.x - e.x);
    probe.x = e.x + sd * (dd > 0.1 + 1e-9 ? 0.1 : Math.max(0.001, Math.round(dd * 1e4) / 1e5)); }
  function other(){ const e = nearest(); if (e) probe.x = 2 * e.x - probe.x; }
  k.drag(c, () => (mode === "transform" ? null : P), [probe], () => {});
  k.group("graph", () => { k.button("Example", () => { mult = JSON.parse(JSON.stringify(START)); probe.x = 1.5; rebuild(); }, "btn"); });
  k.group("table", () => { k.button("Closer", closer, "btn"); k.button("Other side", other, "btn ghost"); });
  k.group("transform", () => {
    k.select("Parent", [["1", "y = 1/x"], ["2", "y = 1/x²"]], "1", v => { T.p = +v; });
    k.slider(`<span class="c3"><i>a</i></span>`, 0, AV.length - 1, 1, AV.indexOf(T.a), v => { T.a = AV[v]; }, v => MR.fmtN(AV[v]));
    k.slider(`<i>h</i>`, -4, 4, 1, T.h, v => { T.h = v; }, v => MR.sg(v));
    k.slider(`<i>k</i>`, -4, 4, 1, T.kk, v => { T.kk = v; }, v => MR.sg(v));
  });
  const HINT = { graph: "Tap factors in the panel; drag the white marker on the x-axis", table: "Closer: 10 times nearer the excluded value", transform: "Move h, k and a; the asymptotes move with the graph" };
  function setMode(m){ mode = m; k.showGroup(m); k.guard([]); k.hint(HINT[m]); if (m === "table") { const e = R.vas[0] || nearest(); probe.x = e ? e.x + 0.1 : 1.5; } }
  k.modes([["graph", "Graph"], ["table", "Table"], ["transform", "Transform 1/x"]], mode, setMode);
  setMode(mode);

  k.loop(() => {
    c.begin(); const d = c.d;
    const pad = k.split(c, host, mode === "transform" ? { off: true } : { side: "left", frac: 0.34, hfrac: mode === "table" ? 0.32 : 0.3 });
    const narrow = c.w < 600, hideChips = mode === "table" && narrow;
    if (chips.__h !== hideChips) { chips.style.display = hideChips ? "none" : ""; chips.__h = hideChips; }
    P = k.plane(c, { xmin: -6, xmax: 6, ymin: -8, ymax: 8, xstep: narrow && c.w < 420 ? 2 : 1, ystep: 2, xlabel: "x", ylabel: "y", pad });
    P.grid(); P.axes();
    const labels = [];
    if (mode === "transform") { drawT(labels); P.labels(labels); return; }
    R.vas.forEach(v => { P.vasym(v.x, C.violet, 1.8); labels.push({ text: `x = ${numT(v)}`, x: v.x, y: 6.6, color: C.violet, font: `13px ${F.mono}` }); });
    P.curve(R.f, C.cyan, { breaks: R.excluded.map(e => e.x), w: 2.6 });
    R.zeros.forEach(z => P.dot(z.x, 0, C.green, 5));
    R.holes.forEach(h => { P.hole(h.x, h.y, C.amber, 5.5); labels.push({ text: `(${numT(h)}, ${h.yq ? MR.qT(h.yq) : MR.fmtN(h.y, 3)})`, x: h.x, y: h.y, color: C.amber, font: `13px ${F.mono}` }); });
    if (R.yint && Math.abs(Q.val(R.yint)) < 8) P.dot(0, Q.val(R.yint), C.cyan, 4);
    const fx = R.f(probe.x), shown = isFinite(fx) && fx > P.ymin && fx < P.ymax;
    P.line(probe.x, P.ymin, probe.x, P.ymax, k.alpha(C.text, 0.28), 1, [3, 4]);
    if (shown) P.dot(probe.x, fx, C.text, 4.5);
    d.circle(P.X(probe.x), P.Y(0), 7, C.ink, C.text, 2.2);
    labels.push({ text: `f(${MR.fmtN(probe.x, 3)}) = ${big(fx)}`, x: probe.x, y: shown ? fx : fx > 0 ? 7.4 : -7.4, color: C.text, font: `12px ${F.mono}` });
    P.labels(labels);

    const e = nearest(), dist = e ? Math.abs(probe.x - e.x) : Infinity, va = e && R.vas.find(v => Math.abs(v.x - e.x) < 1e-9), hole = e && R.holes.find(h => Math.abs(h.x - e.x) < 1e-9);
    const fH = `<i>f</i>(<i>x</i>) = ${ROOTS.some(r => mult.den[r]) ? frH(sideH("num"), sideH("den")) : sideH("num")}`;
    const vaT = R.vas.map(v => `${ix} = ${numT(v)}`).join(", "), hoT = R.holes.map(h => `(${numT(h)}, ${h.yq ? qh(h.yq) : MR.fmtN(h.y, 3)})`).join(", ");
    let landmark;
    if (va && dist < 0.3) {
      const m = va.m, a = numT(va);
      landmark = { hit: true, big: `${ix} → ${a}<sup>${MI}</sup>: ${inf(va.left)} &nbsp; ${ix} → ${a}<sup>+</sup>: ${inf(va.right)}`,
        note: `${linH(va.q || va.x).replace(/<\/?i>/g, "")} appears to the power ${m} in the reduced denominator: ${m % 2 ? "an odd power, so the sign flips across the asymptote" : "an even power, so both sides go the same way"}.` };
    } else if (hole && dist < 0.3) {
      landmark = { hit: true, big: `hole at (${numT(hole)}, ${hole.yq ? qh(hole.yq) : MR.fmtN(hole.y, 3)})`, note: `The factor cancels completely, so near x = ${numT(hole)} the values approach ${hole.yq ? MR.qT(hole.yq) : MR.fmtN(hole.y, 3)}, but f(${numT(hole)}) itself is undefined.` };
    } else landmark = { hit: false, big: "Cancel first, then read the denominator", note: "A factor that cancels completely leaves a hole. A factor still in the reduced denominator makes a vertical asymptote." };

    if (mode === "graph") {
      tbl.innerHTML !== "" && (tbl.innerHTML = ""); tblLast = "";
      k.readout({ title: "Domain, holes and asymptotes", big: fH,
        rows: [{ lhs: "domain", v: domH(R.excluded), cls: "c2" },
          { lhs: "holes", v: hoT || "none", cls: "c1" },
          { lhs: "vertical asymptotes", v: vaT || "none", cls: "c4" },
          { lhs: "zeros", v: R.zeros.map(numT).join(", ") || "none", cls: "c5" },
          { lhs: "<i>y</i>-intercept", v: R.yint ? qh(R.yint) : "none (0 is excluded)" }],
        landmark, narr: "Drag the marker toward a dashed line. Then square a denominator factor and compare the two sides." });
    } else {
      // table of values on both sides of the nearest excluded value
      let html = `<div class="b7-note">no excluded values</div>`;
      if (e) {
        const cell = x => `<td${Math.abs(x - probe.x) < 1e-9 ? ' class="on"' : ""}>${MR.fmtN(x, 3)}</td><td${Math.abs(x - probe.x) < 1e-9 ? ' class="on"' : ""}>${big(R.f(x))}</td>`;
        html = `<table class="b7-t"><tr><th>${ix} &lt; ${numT(e)}</th><th><i>f</i>(${ix})</th><th>${ix} &gt; ${numT(e)}</th><th><i>f</i>(${ix})</th></tr>${[0.1, 0.01, 0.001].map(h => `<tr>${cell(e.x - h)}${cell(e.x + h)}</tr>`).join("")}</table><div class="b7-note">At ${ix} = ${numT(e)} itself, <i>f</i> is undefined.</div>`;
      }
      if (html !== tblLast) { tbl.innerHTML = html; tblLast = html; }
      k.readout({ title: e ? `Approaching x = ${numT(e)}` : "Approaching an excluded value", big: fH,
        rows: [{ lhs: `<i>f</i>(${MR.fmtN(probe.x, 4)})`, v: big(fx), cls: "c2" },
          { lhs: "distance", v: e ? MR.fmtN(dist, 4) : "none", lbl: e ? (va ? "vertical asymptote" : "hole") : "" }],
        landmark, narr: "Press Closer three times, then Other side. A hole gives values that settle; an asymptote gives values that explode." });
    }
  });

  function drawT(labels){
    const { a, h, kk, p } = T, f = p === 1 ? x => a / (x - h) + kk : x => a / ((x - h) * (x - h)) + kk;
    P.curve(p === 1 ? x => 1 / x : x => 1 / (x * x), k.alpha(C.text, 0.35), { breaks: [0], dash: [5, 5], w: 1.6 });
    P.vasym(h, C.violet, 1.8); P.hasym(kk, C.violet, 1.4);
    P.curve(f, C.cyan, { breaks: [h], w: 2.8 });
    [h - 1, h + 1].forEach(x => { const y = f(x); P.dot(x, y, C.cyan, 4.5); labels.push({ text: `(${MR.fmtN(x)}, ${MR.fmtN(y)})`, x, y, color: C.cyan, font: `12px ${F.mono}` }); });
    labels.push({ text: `x = ${MR.sg(h)}`, x: h, y: 7, color: C.violet, font: `13px ${F.mono}` }, { text: `y = ${MR.sg(kk)}`, x: 4.6, y: kk, color: C.violet, font: `13px ${F.mono}` });
    const aH = Number.isInteger(a) ? String(Math.abs(a)) : MR.fmtN(Math.abs(a)), inner = h === 0 ? ix : `${ix} ${h > 0 ? MI : "+"} ${Math.abs(h)}`;
    const den = p === 1 ? inner : h === 0 ? `${ix}<sup>2</sup>` : `(${inner})<sup>2</sup>`;
    const eq = `<i>y</i> = ${a < 0 ? MI : ""}${frH(`<span class="c3">${aH}</span>`, den)}${kk === 0 ? "" : ` ${kk > 0 ? "+" : MI} ${Math.abs(kk)}`}`;
    const moves = [Math.abs(a) === 1 ? "" : Math.abs(a) > 1 ? `stretch ×${MR.fmtN(Math.abs(a))}` : `compress ×${MR.fmtN(Math.abs(a))}`, a < 0 ? "reflect in the x-axis" : "", h ? `${h > 0 ? "right" : "left"} ${Math.abs(h)}` : "", kk ? `${kk > 0 ? "up" : "down"} ${Math.abs(kk)}` : ""].filter(Boolean).join(", ") || "none: the parent itself";
    const K = MR.sg(kk), rng = p === 1 ? `(${MI}∞, ${K}) ∪ (${K}, ∞)` : a > 0 ? `(${K}, ∞)` : `(${MI}∞, ${K})`;
    k.readout({ title: `Transform y = 1/x${p === 2 ? "²" : ""}`, big: eq,
      rows: [{ lhs: "vertical asymptote", v: `${ix} = ${MR.sg(h)}`, cls: "c4" }, { lhs: "horizontal asymptote", v: `<i>y</i> = ${K}`, cls: "c4" },
        { lhs: "domain", v: `(${MI}∞, ${MR.sg(h)}) ∪ (${MR.sg(h)}, ∞)`, cls: "c2" }, { lhs: "range", v: rng, cls: "c2" }, { lhs: "moves", v: moves }],
      landmark: a < 0 ? { hit: true, big: `<span class="c3"><i>a</i> = ${MR.fmtN(a)}</span> &lt; 0: reflected`, note: p === 1 ? "The branches swap to the other two corners formed by the asymptotes." : "Both branches now point down: as x → h from either side, y → −∞." }
        : { hit: false, big: `<i>x</i> = <i>h</i> and <i>y</i> = <i>k</i>`, note: "Shifts move the asymptotes with the graph. Stretches and reflections leave them in place." },
      narr: "Make a negative, then switch the parent to 1/x² and compare the two sides of the asymptote." });
  }
};

/* ================= Horizontal & slant asymptotes; graphing (B · Features) ================= */
L["a2-rational-asym"] = k => {
  MathKit.attach(k); css();
  const { C, F } = k, MR = k.MR, Q = MR.Q, Poly = MR.Poly, c = k.canvas(), host = k.dom();
  const SP = k.stepsPanel(host);
  const AV = [-3, -2, -1, 1, 2, 3], ZV = [6, 12, 25, 50, 100];
  const DENS = { lin: [-1, 1], quad: [-3, -2, 1], irr: [1, 0, 1] };
  const E = { n: 2, a: 2, c: -4, den: "quad", b: 1, z: 0 };
  // Graph it: exact cases [numerator, denominator], coefficients lowest degree first
  const CASES = [[[-4, -2, 2], [-9, 0, 1]], [[-6, -1, 1], [-1, 1]], [[3, 3], [-4, 0, 1]], [[-1, 0, 1], [-6, 1, 1]], [[-2, 1, 1], [2, -3, 1]], [[-3, 5, 2], [2, 1]]];
  let mode = "explore", P = null, ci = 0, s = 0, st = null, view = {};
  const num = () => { const p = Array(E.n + 1).fill(0); p[E.n] += E.a; if (E.n > 0) p[0] += E.c; return Poly(p); };
  const den = () => Poly.scale(Poly(DENS[E.den]), E.b);
  const asymH = R => (R.asym.type === "horizontal" ? `<i>y</i> = ${qh(R.asym.y)}` : `<i>y</i> = ${MR.polyH(R.asym.poly)}`);
  const asymF = R => (R.asym.type === "horizontal" ? () => Q.val(R.asym.y) : Poly.fn(R.asym.poly));
  k.group("explore", () => {
    k.select("Numerator degree <i>n</i>", [[0, "0"], [1, "1"], [2, "2"], [3, "3"]], E.n, v => { E.n = +v; });
    k.slider(`lead <i>a</i>`, 0, AV.length - 1, 1, AV.indexOf(E.a), v => { E.a = AV[v]; }, v => MR.sg(AV[v]));
    k.slider(`constant <i>c</i>`, -9, 9, 1, E.c, v => { E.c = v; }, v => MR.sg(v));
    k.select("Denominator", [["lin", "b(x − 1)"], ["quad", "b(x² − 2x − 3)"], ["irr", "b(x² + 1)"]], E.den, v => { E.den = v; });
    k.slider(`<i>b</i>`, 0, AV.length - 1, 1, AV.indexOf(E.b), v => { E.b = AV[v]; }, v => MR.sg(AV[v]));
    k.slider(`zoom out`, 0, ZV.length - 1, 1, E.z, v => { E.z = v; }, v => `±${ZV[v]}`);
  });
  k.group("graph", () => { k.button("New problem", () => { ci = (ci + 1) % CASES.length; st.reset(); guard(); }, "btn"); st = k.stepper(() => 6, v => { s = v; if (mode === "graph") k.hint(v ? "" : "Predict each feature, then press Step"); }, { ms: 1500 }); });
  function caseR(){ const [n, d] = CASES[ci]; return MR.rational(Poly(n), Poly(d)); }
  function guard(){ const R = caseR(), out = R.vas.map(v => `x = ${numT(v)}`); out.push(R.asym.type === "horizontal" ? `y = ${MR.qT(R.asym.y)}` : `y = ${MR.polyT(R.asym.poly)}`); k.guard(out); }
  function setMode(m){ mode = m; k.showGroup(m); if (st) st.reset(); if (m === "graph") { guard(); k.hint("Predict each feature, then press Step"); } else { k.guard([]); k.hint("Change the degrees, then zoom out"); } }
  k.modes([["explore", "Explore"], ["graph", "Graph it"]], mode, setMode);
  setMode(mode);

  k.loop(dt => {
    c.begin();
    if (mode === "explore") explore(dt); else graphIt();
  });

  function explore(dt){
    const R = MR.rational(num(), den()), W = ZV[E.z], A = R.asym, has = A.type === "horizontal" || A.type === "slant";
    const yc = A.type === "horizontal" ? Q.val(A.y) : 0, yh = Math.max(7, W * (A.type === "horizontal" ? 0.5 : 1));
    k.smooth(view, { W, yc, yh }, dt);
    const pad = k.split(c, host, { off: true });
    P = k.plane(c, { xmin: -view.W, xmax: view.W, ymin: view.yc - view.yh, ymax: view.yc + view.yh, xlabel: "x", ylabel: "y", pad });
    P.grid(); P.axes();
    const labels = [], af = A.type === "horizontal" || A.type === "slant" || A.type === "polynomial" ? asymF(R) : null;
    if (A.type === "horizontal") P.hasym(Q.val(A.y), C.violet, 1.8); else P.asym(af, C.violet, 1.8);
    R.vas.forEach(v => P.vasym(v.x, C.pink, 1.6));
    P.curve(R.f, C.cyan, { breaks: R.excluded.map(e => e.x), w: 2.6 });
    R.holes.forEach(h => P.hole(h.x, h.y, C.cyan, 5));
    R.zeros.forEach(z => P.dot(z.x, 0, C.green, 4.5));
    if (R.yint) P.dot(0, Q.val(R.yint), C.green, 4.5);
    const cross = asymCross(R); cross.forEach(z => P.dot(z.x, af(z.x), C.violet, 5));
    const al = af && onLine(P, af);
    if (al) labels.push({ text: A.type === "horizontal" ? `y = ${MR.qT(A.y)}` : `y = ${MR.polyT(A.poly)}`, x: al.x, y: al.y, color: C.violet, font: `13px ${F.mono}` });
    R.vas.forEach(v => labels.push({ text: `x = ${numT(v)}`, x: v.x, y: P.ymax - (P.ymax - P.ymin) * 0.1, color: C.pink, font: `12px ${F.mono}` }));
    P.labels(labels);
    const n = Poly.deg(R.reduced.num) < 0 ? 0 : Poly.deg(R.reduced.num), m = Poly.deg(R.reduced.den);
    const rule = A.type === "horizontal" ? (n < m ? "n < m: the bottom wins, y = 0" : `n = m: ratio of leading coefficients`) : A.type === "slant" ? "n = m + 1: quotient of the division" : "n > m + 1: no horizontal or slant asymptote";
    const rem = Poly.divmod(R.reduced.num, R.reduced.den).r, gx = W * 0.9, gap = af ? R.f(gx) - af(gx) : NaN;
    k.readout({ title: "End behaviour", big: `<i>f</i>(<i>x</i>) = ${frH(MR.polyH(num()), MR.polyH(den()))}`,
      rows: [{ lhs: `<i>n</i> = ${n}, <i>m</i> = ${m}`, lbl: rule + (R.holes.length ? " (after cancelling the common factor)" : "") },
        { lhs: A.type === "polynomial" ? "ends follow" : A.type === "slant" ? "slant asymptote" : "horizontal asymptote", v: asymH(R), cls: "c4" },
        { lhs: "vertical asymptotes", v: R.vas.map(v => `${ix} = ${numT(v)}`).join(", ") || "none", cls: "c3" },
        R.holes.length ? { lhs: "hole", v: R.holes.map(h => `(${numT(h)}, ${h.yq ? qh(h.yq) : MR.fmtN(h.y, 3)})`).join(", ") } : null,
        has ? { lhs: "crosses the asymptote", v: cross.map(z => `${ix} = ${numT(z)}`).join(", ") || "never", lbl: `remainder ${MR.polyH(rem)}` } : null],
      landmark: has && W >= 50 ? { hit: true, big: `gap at <i>x</i> = ${MR.fmtN(gx)}: ${MR.fmtN(gap, 5)}`, note: "Zoomed out, the curve and the line are almost one: the gap remainder ÷ denominator shrinks toward 0 at both ends." }
        : { hit: false, big: has ? "Zoom out to see the ends" : "No line to hug", note: has ? "In the middle the curve may cross a horizontal or slant asymptote; only vertical asymptotes are never crossed." : "When n > m + 1 the ends follow the polynomial quotient, drawn dashed." },
      narr: "Try n = 1 with b(x² − 2x − 3), then n = 3. Set n = 1, c = −1 over b(x − 1) to make a hole." });
  }

  function graphIt(){
    const R = caseR(), [nc, dc] = CASES[ci], N = Poly(nc), D = Poly(dc), A = R.asym, af = asymF(R), cross = asymCross(R), SI = signIntervals(R);
    const pad = k.split(c, host, { side: "left", frac: 0.47, hfrac: 0.5 });
    P = k.plane(c, { xmin: -9, xmax: 9, ymin: -8, ymax: 8, xstep: c.w < 600 ? 3 : 1, ystep: 2, xlabel: "x", ylabel: "y", pad });
    P.grid(); P.axes();
    const labels = [];
    if (s >= 1) R.holes.forEach(h => { P.hole(h.x, h.y, C.cyan, 5.5); labels.push({ text: `(${numT(h)}, ${MR.qT(h.yq)})`, x: h.x, y: h.y, color: C.cyan, font: `12px ${F.mono}` }); });
    if (s >= 2) R.vas.forEach(v => { P.vasym(v.x, C.pink, 1.8); labels.push({ text: `x = ${numT(v)}`, x: v.x, y: 6.8, color: C.pink, font: `12px ${F.mono}` }); });
    if (s >= 3) { if (A.type === "horizontal") P.hasym(Q.val(A.y), C.violet, 1.8); else P.asym(af, C.violet, 1.8);
      const al = onLine(P, af); if (al) labels.push({ text: A.type === "horizontal" ? `y = ${MR.qT(A.y)}` : `y = ${MR.polyT(A.poly)}`, x: al.x, y: al.y, color: C.violet, font: `13px ${F.mono}` }); }
    if (s >= 6) P.curve(R.f, C.cyan, { breaks: R.excluded.map(e => e.x), w: 2.6 });
    if (s >= 4) { R.zeros.forEach(z => P.dot(z.x, 0, C.green, 5)); if (R.yint) P.dot(0, Q.val(R.yint), C.green, 5); }
    if (s >= 5) cross.forEach(z => { P.dot(z.x, af(z.x), C.violet, 5.5); labels.push({ text: `(${numT(z)}, ${MR.fmtN(af(z.x), 3)})`, x: z.x, y: af(z.x), color: C.violet, font: `12px ${F.mono}` }); });
    if (s >= 6) SI.forEach(I => { const lo = I.lo === null ? P.xmin : I.lo, hi = I.hi === null ? P.xmax : I.hi; P.line(lo, P.ymin + 0.25, hi, P.ymin + 0.25, I.s > 0 ? C.cyan : k.alpha(C.text, 0.3), 4, I.s > 0 ? null : [5, 4]); });
    P.labels(labels);

    const n = Poly.deg(R.reduced.num), m = Poly.deg(R.reduced.den);
    const ex = R.excluded.map(numT).join(", ");
    const holeW = R.holes.length ? `${R.holes.map(h => linH(h.q)).join("")} cancels: hole at ${R.holes.map(h => `(${numT(h)}, ${qh(h.yq)})`).join(", ")}.` : "No common factor, so no holes.";
    const ruleEq = A.type === "horizontal" ? (n < m ? `<i>n</i> = ${n} &lt; <i>m</i> = ${m} ⇒ ${asymH(R)}` : `<i>n</i> = <i>m</i> = ${n} ⇒ ${asymH(R)}`) : `<i>n</i> = ${n} = <i>m</i> + 1 ⇒ ${asymH(R)}`;
    const ruleW = A.type === "horizontal" ? (n < m ? "The denominator has the higher degree, so f → 0." : "Equal degrees: divide the leading coefficients.") : `Divide: the quotient is ${MR.polyT(A.poly)}, the remainder is ${MR.polyT(Poly.divmod(R.reduced.num, R.reduced.den).r)}.`;
    const ints = [...R.zeros.map(z => `(${numT(z)}, 0)`), R.yint ? `(0, ${qh(R.yint)})` : null].filter(Boolean).join(", ");
    const rem = Poly.divmod(R.reduced.num, R.reduced.den).r;
    const crossEq = cross.length ? cross.map(z => `${ix} = ${numT(z)}`).join(", ") : "never";
    const critT = x => numT([...R.zeros, ...R.vas].find(z => Math.abs(z.x - x) < 1e-9));
    const signEq = SI.map((I, i) => `${i ? `<span class="dim"> | ${critT(I.lo)} | </span>` : ""}${I.s > 0 ? "+" : MI}`).join("");
    SP.set([
      { tag: "factor", eq: `<i>f</i>(<i>x</i>) = ${frH(factorH(N), factorH(D))}`, why: `Excluded: ${ex}. ${holeW}` },
      { tag: "vertical", eq: R.vas.map(v => `<span class="c3">${ix} = ${numT(v)}</span>`).join(", "), why: "Zeros of the reduced denominator." },
      { tag: "end", eq: `<span class="c4">${ruleEq}</span>`, why: ruleW },
      { tag: "intercepts", eq: `<span class="c5">${ints}</span>`, why: "Zeros of the reduced numerator, and f(0)." },
      { tag: "crossing", eq: `<span class="c4">${crossEq}</span>`, why: `Remainder ${MR.polyT(rem)} = 0${cross.length ? "" : " has no solution in the domain"}.` },
      { tag: "signs", eq: signEq, why: "One test value per interval: + above the x-axis, − below. The bar under the graph shows them." }
    ].map((l, i) => ({ ...l, tag: `${i + 1} · ${l.tag}` })), s - 1);
    if (host.__s !== s) { host.__s = s; const cur = host.querySelector(".st.cur"); host.scrollTop = cur ? Math.max(0, cur.offsetTop + cur.offsetHeight - host.clientHeight + 8) : 0; }
    k.readout({ title: "Graph it", big: `<i>f</i>(<i>x</i>) = ${frH(MR.polyH(N), MR.polyH(D))}`,
      rows: [{ lhs: "step", v: `${s} of 6`, lbl: ["predict every feature first", "domain and holes", "vertical asymptotes", "horizontal or slant asymptote", "intercepts", "where it meets the asymptote", "sign chart and curve"][s] }],
      landmark: s >= 6 ? { hit: true, big: "Every feature found", note: "The curve passes through the intercepts, follows the signs, and hugs the asymptotes at the ends." } : { hit: false, big: "Holes, asymptotes, intercepts, signs", note: "Each step adds one feature to the graph." },
      narr: "Press Step to add one feature at a time. New problem picks another function." });
  }
};

/* ================= Direct, inverse & joint variation (E · Model) ================= */
L["a2-variation"] = k => {
  MathKit.attach(k); css();
  const { C, F } = k, MR = k.MR, Q = MR.Q, c = k.canvas(), host = k.dom();
  const NAMES = { direct: ["y = kx", "direct", "Direct variation"], inverse: ["y = k/x", "inverse", "Inverse variation"], square: ["y = kx²", "square", "Direct variation, square"], invsq: ["y = k/x²", "inverse square", "Inverse-square variation"] };
  let mode = "model", type = "inverse", P = null, tblLast = "";
  const pt = { x: 2, y: 6, snap: 0.5, clamp: [0.5, 9.5, 0.5, 11.5] };
  const G = { V: 6, kk: 600, V0: 6 }, gp = { x: 6, y: 100, fixY: true, snap: 0.5, clamp: [1, 10, 0, 1300] };
  const tbl = document.createElement("div"); host.appendChild(tbl);
  const parts = Array.from({ length: 42 }, (_, i) => ({ u: ((i * 37) % 41) / 41, v: ((i * 23) % 43) / 43, du: Math.cos(i * 2.4) * 0.5, dv: Math.sin(i * 2.4) * 0.5 }));
  let vSl = null, kSl = null, cyl = null, dragCyl = false;
  k.group("model", () => { k.select("Type", Object.entries(NAMES).map(([key, v]) => [key, `${v[0]} (${v[1]})`]), type, v => { type = v; }); });
  k.group("scenario", () => {
    vSl = k.slider(`<span class="c2"><i>V</i></span> (L)`, 1, 10, 0.5, G.V, v => { G.V = v; }, v => MR.fmtN(v));
    kSl = k.slider(`<span class="c1"><i>k</i> = <i>PV</i></span>`, 200, 1200, 100, G.kk, v => { G.kk = v; }, v => String(v));
  });
  k.drag(c, () => (mode === "model" ? P : null), [pt], () => {});
  k.drag(c, () => (mode === "scenario" ? P : null), [gp], (i, p) => { G.V = p.x; vSl.set(G.V); });
  const setV = e => { if (!cyl) return; const q = c.xy(e), v = Math.round(((cyl.bot - q.y) / cyl.H * 10) * 2) / 2; G.V = Math.max(1, Math.min(10, v)); vSl.set(G.V); };
  c.cv.addEventListener("pointerdown", e => { if (mode !== "scenario" || !cyl) return; const q = c.xy(e); if (q.x >= cyl.x - 10 && q.x <= cyl.x + cyl.w + 10 && q.y >= cyl.top - 20 && q.y <= cyl.bot) { dragCyl = true; c.cv.setPointerCapture(e.pointerId); setV(e); } });
  c.cv.addEventListener("pointermove", e => { if (dragCyl) setV(e); });
  c.cv.addEventListener("pointerup", () => { dragCyl = false; });
  function setMode(m){ mode = m; k.showGroup(m); k.guard([]); k.hint(m === "model" ? "Drag the amber point to set k; change the type" : "Drag the piston or the point on the graph"); }
  k.modes([["model", "Model"], ["scenario", "Scenario"]], mode, setMode);
  setMode(mode);
  const fct = q => (Q.isInt(q) ? `×${q.n}` : `×${q.n}/${q.d}`);

  k.loop(dt => { c.begin(); if (mode === "model") model(); else scenario(dt); });

  function model(){
    const T = VAR[type], V = variation(type, pt.x, pt.y), f = V.f;
    const pad = k.split(c, host, { side: "left", frac: 0.26, hfrac: 0.34 });
    P = k.plane(c, { xmin: 0, xmax: 10, ymin: 0, ymax: 12, xstep: 1, ystep: 2, xlabel: "x", ylabel: "y", pad });
    P.grid(); P.axes();
    const labels = [];
    P.curve(f, C.text, { from: 0.03, w: 2.6 });
    // doubling pair
    const x1 = pt.x * 2 <= 10 ? pt.x : pt.x / 2, x2 = 2 * x1, y1 = f(x1), y2 = f(x2);
    if (y1 <= 12 && y2 <= 12) {
      P.seg(x1, 0, x1, y1, k.alpha(C.cyan, 0.6), 1.4, [4, 4]); P.seg(x2, 0, x2, y2, k.alpha(C.cyan, 0.6), 1.4, [4, 4]);
      P.seg(0, y1, x1, y1, k.alpha(C.pink, 0.6), 1.4, [4, 4]); P.seg(0, y2, x2, y2, k.alpha(C.pink, 0.6), 1.4, [4, 4]);
      c.d.arrow(P.X(x1), P.Y(0) - 8, P.X(x2), P.Y(0) - 8, C.cyan, 2);
      if (Math.abs(P.Y(y1) - P.Y(y2)) > 14) c.d.arrow(P.X(0) + 9, P.Y(y1), P.X(0) + 9, P.Y(y2), C.pink, 2);
      P.dot(x2, y2, C.text, 4.5);
      labels.push({ text: "x × 2", x: (x1 + x2) / 2, y: 0.9, color: C.cyan, font: `13px ${F.mono}` }, { text: `y ${fct(V.dbl).replace("×", "× ")}`, x: 0.4, y: (y1 + y2) / 2, color: C.pink, font: `13px ${F.mono}` });
    }
    P.dot(pt.x, pt.y, C.amber, 7);
    labels.push({ text: `(${MR.fmtN(pt.x)}, ${MR.fmtN(pt.y)})`, x: pt.x, y: pt.y, color: C.amber, font: `13px ${F.mono}` });
    P.labels(labels);
    // doubling table x = 1, 2, 4, 8
    const xs = [1, 2, 4, 8], html = `<table class="b7-t"><tr><th>${ix}</th><th><i>y</i></th><th></th></tr>${xs.map((x, i) => `<tr${x === pt.x ? ' class="on"' : ""}><td class="c2">${x}</td><td class="c3">${qh(V.y(x))}</td><td>${i ? fct(V.dbl) : ""}</td></tr>`).join("")}</table><div class="b7-note">Each row doubles x, so y changes by the same factor every time.</div>`;
    if (html !== tblLast) { tbl.innerHTML = html; tblLast = html; }
    const kH = `<span class="c1">${qh(V.k)}</span>`, xp = T.n === 2 ? `<span class="c2"><i>x</i></span><sup>2</sup>` : `<span class="c2"><i>x</i></span>`;
    const eq = T.inv ? `<span class="c3"><i>y</i></span> = ${frH(kH, xp)}` : `<span class="c3"><i>y</i></span> = ${kH}${xp}`;
    const kCalc = T.inv ? `<i>k</i> = <i>y</i> · <i>x</i>${T.n === 2 ? "<sup>2</sup>" : ""} = ${MR.fmtN(pt.y)} · ${MR.fmtN(pt.x)}${T.n === 2 ? "<sup>2</sup>" : ""}` : `<i>k</i> = <i>y</i>/<i>x</i>${T.n === 2 ? "<sup>2</sup>" : ""} = ${MR.fmtN(pt.y)}/${MR.fmtN(pt.x)}${T.n === 2 ? "<sup>2</sup>" : ""}`;
    const onRow = xs.includes(pt.x);
    k.readout({ title: NAMES[type][2], big: eq,
      rows: [{ lhs: kCalc, v: qh(V.k), cls: "c1", lbl: "one data point fixes k" },
        { lhs: "<i>x</i> × 2", v: `<i>y</i> ${fct(V.dbl)}`, cls: "c3", lbl: T.inv ? `dividing by ${T.n === 2 ? "2² = 4" : "2"}` : `multiplying by ${T.n === 2 ? "2² = 4" : "2"}` },
        T.inv && T.n === 1 ? { lhs: "<i>x</i> · <i>y</i>", v: qh(V.k), lbl: "the product stays the same at every point" } : { lhs: `<i>y</i>/<i>x</i>${T.n === 2 ? "<sup>2</sup>" : ""}`, v: T.inv ? "not constant" : qh(V.k), lbl: T.inv ? "" : "the ratio stays the same at every point" }],
      landmark: onRow ? { hit: true, big: `(${MR.fmtN(pt.x)}, ${MR.fmtN(pt.y)}) is a table row`, note: `Moving one row down doubles x and multiplies y by ${MR.qT(V.dbl)}, whatever k is.` }
        : { hit: false, big: `<i>x</i> × <i>c</i> ⇒ <i>y</i> × <i>c</i><sup>${T.inv ? MI : ""}${T.n}</sup>`, note: "Drag the point onto x = 1, 2, 4 or 8 to see it in the table." },
      narr: "Switch the type and watch the doubling factor: ×2, ×1/2, ×4, ×1/4." });
  }

  function scenario(dt){
    const top = (() => { const mb = k.stage.querySelector(".modes"); return mb ? mb.offsetTop + mb.offsetHeight + 8 : 8; })(), wide = c.w >= 600, d = c.d;
    k.split(c, host, { off: true });
    const reg = wide ? { x: 16, y: top + 6, w: Math.round(c.w * 0.26), h: c.h - top - 40 } : { x: 16, y: top + 4, w: c.w - 32, h: Math.round((c.h - top) * 0.36) };
    const pad = wide ? { l: reg.x + reg.w + 64, r: 18, t: top + 12, b: 34 } : { l: 52, r: 16, t: reg.y + reg.h + 18, b: 30 };
    P = k.plane(c, { xmin: 0, xmax: 11, ymin: 0, ymax: 1300, xstep: 1, ystep: wide ? 200 : 400, xlabel: "V (L)", ylabel: "P (kPa)", pad });
    P.grid(); P.axes();
    const f = v => G.kk / v, Pq = Q.div(Q(G.kk), Q(G.V)), Pv = Q.val(Pq), P0 = G.kk / G.V0;
    // cylinder
    const cw = Math.min(reg.w * (wide ? 0.6 : 0.34), 130), cx = wide ? reg.x + (reg.w - cw) / 2 : reg.x + 8, ch = reg.h - 40, bot = reg.y + reg.h - 8, H = ch * 0.9;
    cyl = { x: cx, w: cw, bot, H, top: bot - ch };
    const gy = bot - H * G.V / 10;
    d.rect(cx, bot - ch, cw, ch, null, k.alpha(C.text, 0.5), 2);
    d.rect(cx + 2, gy, cw - 4, bot - gy - 2, k.alpha(C.cyan, 0.1));
    parts.forEach(p => { p.u += p.du * dt; p.v += p.dv * dt; if (p.u < 0 || p.u > 1) { p.du *= -1; p.u = Math.max(0, Math.min(1, p.u)); } if (p.v < 0 || p.v > 1) { p.dv *= -1; p.v = Math.max(0, Math.min(1, p.v)); }
      d.circle(cx + 6 + p.u * (cw - 12), gy + 6 + p.v * (bot - gy - 12), 2.2, k.alpha(C.cyan, 0.8)); });
    d.rect(cx + 1, gy - 9, cw - 2, 9, C.muted); d.rect(cx + cw / 2 - 4, bot - ch - 14, 8, gy - 9 - (bot - ch - 14), k.alpha(C.muted, 0.8));
    const lx = wide ? reg.x + 2 : cx + cw + 18, ly = wide ? bot - ch - 22 : reg.y + 22;
    if (wide) { d.text(`V = ${MR.fmtN(G.V)} L`, cx + cw / 2, bot + 18, { font: `14px ${F.mono}`, color: C.cyan, align: "center" }); d.text(`P = ${MR.fmtN(Pv, 1)} kPa`, cx + cw / 2, ly, { font: `14px ${F.mono}`, color: C.pink, align: "center" }); }
    else { d.text(`V = ${MR.fmtN(G.V)} L`, lx, ly, { font: `14px ${F.mono}`, color: C.cyan }); d.text(`P = ${MR.fmtN(Pv, 1)} kPa`, lx, ly + 22, { font: `14px ${F.mono}`, color: C.pink }); d.text(`PV = ${G.kk}`, lx, ly + 44, { font: `14px ${F.mono}`, color: C.amber }); }
    // graph
    const labels = [];
    P.curve(f, C.text, { from: 0.4, w: 2.4 });
    P.dot(G.V0, P0, k.alpha(C.amber, 0.6), 4.5); labels.push({ text: "start", x: G.V0, y: P0, color: C.amber, font: `12px ${F.ui}` });
    P.seg(G.V, 0, G.V, Pv, k.alpha(C.cyan, 0.6), 1.4, [4, 4]); P.seg(0, Pv, G.V, Pv, k.alpha(C.pink, 0.6), 1.4, [4, 4]);
    gp.x = G.V; gp.y = Pv; P.dot(G.V, Pv, C.pink, 6.5);
    labels.push({ text: `(${MR.fmtN(G.V)}, ${MR.fmtN(Pv, 1)})`, x: G.V, y: Pv, color: C.pink, font: `12px ${F.mono}` });
    P.labels(labels);
    const r = Q.div(Q(G.V), Q(G.V0)), hit = [Q(1, 2), Q(2), Q(1, 3), Q(3)].some(q => Q.eq(q, r));
    k.readout({ title: "Boyle's law · constant temperature", big: `<span class="c3"><i>P</i></span> = ${frH(`<span class="c1">${G.kk}</span>`, `<span class="c2"><i>V</i></span>`)}`,
      rows: [{ lhs: `<i>P</i> = ${G.kk}/${MR.fmtN(G.V)}`, v: Q.isInt(Pq) ? `${Pq.n} kPa` : `${qh(Pq)} ≈ ${MR.fmtN(Pv, 1)} kPa`, cls: "c3" },
        { lhs: "<i>P</i> · <i>V</i>", v: `${G.kk} kPa·L`, cls: "c1", lbl: "the same at every point of the curve" },
        { lhs: `<i>V</i> ÷ <i>V</i><sub>0</sub>`, v: `${fct(r)}`, cls: "c2", lbl: `pressure ${fct(Q.inv(r))} compared with the start (6 L)` }],
      landmark: hit ? { hit: true, big: `<span class="c2"><i>V</i> ${fct(r)}</span> ⇒ <span class="c3"><i>P</i> ${fct(Q.inv(r))}</span>`, note: "The gas is squeezed into a fraction of the space, so the molecules hit the piston that much more often." }
        : { hit: false, big: "<i>P</i> varies inversely as <i>V</i>", note: "Halve or triple the volume from the start at 6 L to see the factor." },
      narr: "Drag the piston down to 3 L, then to 2 L. Change k to add or remove gas." });
  }
};
})();
