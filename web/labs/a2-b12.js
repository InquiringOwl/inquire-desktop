/* ============ Labs: Algebra II, batch B12 (logarithmic scales, equations in quadratic form, systems in three variables) ============ */
(function(){
const L = window.LABS;
const MI = "−";
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const MRf = () => window.MathRules;

/* ---------- DOM-free helpers: sci, radFrac, backSub and the 3 × 3 elimination plan are in MathRules (web/kits/subjects/math.js) ---------- */
const sci = (v, sig) => MRf().sci(v, sig);
const radQ = (s, t) => MRf().radFrac(s, t);
const backSub = (kind, r, h) => MRf().backSub(kind, r, h);
const combine = (A, B, i) => MRf().elimStep(A, B, i);
const elim3 = E => MRf().elim3(E);
// Polygon where the plane n·p = d meets the cube [−L, L]³ (3D points in order around the polygon; [] if it misses).
function planeBox(n, d, Lc){
  const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2], cr = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  const V = [0, 1, 2, 3, 4, 5, 6, 7].map(i => [i & 1 ? Lc : -Lc, i & 2 ? Lc : -Lc, i & 4 ? Lc : -Lc]), pts = [];
  const add = p => { if (!pts.some(q => Math.hypot(q[0] - p[0], q[1] - p[1], q[2] - p[2]) < 1e-9)) pts.push(p); };
  V.forEach(A => { if (Math.abs(dot(n, A) - d) < 1e-12) add(A); });
  for (let i = 0; i < 8; i++) for (const bit of [1, 2, 4]) { const j = i | bit; if (j === i) continue;
    const A = V[i], B = V[j], fa = dot(n, A) - d, fb = dot(n, B) - d;
    if (fa * fb < 0) { const t = fa / (fa - fb); add([0, 1, 2].map(m => A[m] + (B[m] - A[m]) * t)); } }
  if (pts.length < 3) return [];
  const cen = [0, 1, 2].map(m => pts.reduce((s, p) => s + p[m], 0) / pts.length), nl = Math.hypot(...n), nu = n.map(v => v / nl);
  let e1 = cr(nu, Math.abs(nu[0]) < 0.9 ? [1, 0, 0] : [0, 1, 0]); const l1 = Math.hypot(...e1); e1 = e1.map(v => v / l1); const e2 = cr(nu, e1);
  const ang = p => { const w = [0, 1, 2].map(m => p[m] - cen[m]); return Math.atan2(dot(w, e2), dot(w, e1)); };
  return pts.sort((a, b) => ang(a) - ang(b));
}
// Oblique view: turn by yaw about the z-axis, tilt by pitch; u right, v up, dep away from the viewer.
const prj = (p, yaw, pit) => { const x1 = p[0] * Math.cos(yaw) - p[1] * Math.sin(yaw), y1 = p[0] * Math.sin(yaw) + p[1] * Math.cos(yaw);
  return { u: x1, v: p[2] * Math.cos(pit) + y1 * Math.sin(pit), dep: y1 * Math.cos(pit) - p[2] * Math.sin(pit) }; };

/* ---------- small markup helpers ---------- */
const ix = "<i>x</i>";
const cl = (cls, s) => `<span class="${cls}">${s}</span>`;
const nw = s => `<span style="white-space:nowrap">${s}</span>`;
const sup = e => `<sup>${String(e).replace("-", MI)}</sup>`;

/* ================= Logarithmic scales (E · Model) ================= */
const LS = {
  sound: { title: "Sound intensity level", sym: "L", pre: "", post: " dB", min: 0, max: 140, step: 1, unit1: 10, ticks: [20, 10], E: v => v / 10, inv: e => 10 * e,
    qT: "I/I₀", qH: `<i>I</i>/<i>I</i><sub>0</sub>`, more: "the intensity of", lin: "intensity I/I₀",
    big: `${cl("c2", "<i>L</i>")} = 10 log ${cl("c1", "(<i>I</i>/<i>I</i><sub>0</sub>)")}`, start: [60, 110],
    items: [["Hearing threshold", 0], ["Whisper", 30], ["Conversation", 60], ["City traffic", 80], ["Rock concert", 110], ["Pain threshold", 130]],
    step1: "Every 10 dB multiplies the intensity by 10, wherever you start." },
  acid: { title: "Acidity: the pH scale", sym: "pH", pre: "pH ", post: "", min: 0, max: 14, step: 0.1, unit1: 1, ticks: [2, 1], E: v => -v, inv: e => -e,
    qT: "[H⁺]", qH: "[H<sup>+</sup>]", more: "the H⁺ concentration of", lin: "[H⁺] in mol/L",
    big: `${cl("c2", "pH")} = ${MI}log ${cl("c1", "[H<sup>+</sup>]")}`, start: [7, 2],
    items: [["Lemon juice", 2], ["Coffee", 5], ["Pure water", 7], ["Seawater", 8], ["Ammonia", 11], ["Bleach", 13]],
    step1: "One pH unit lower means 10 times the hydrogen-ion concentration." },
  quake: { title: "Earthquake magnitude", sym: "M", pre: "M ", post: "", min: 2, max: 10, step: 0.1, unit1: 1, ticks: [2, 1], E: v => 1.5 * v, inv: e => e / 1.5,
    qT: "E/E₀", qH: `<i>E</i>/<i>E</i><sub>0</sub>`, more: "the energy of", lin: "energy E/E₀",
    big: `${cl("c1", "<i>E</i>")} ∝ 10<sup class="c2">1.5<i>M</i></sup>`, start: [6.7, 9.1],
    items: [["Lightly felt", 3], ["Moderate", 5], ["Northridge 1994", 6.7], ["San Francisco 1906", 7.9], ["Tōhoku 2011", 9.1], ["Chile 1960", 9.5]],
    step1: "One magnitude step: 10 times the wave amplitude, 10¹·⁵ ≈ 31.6 times the energy." }
};
L["a2-log-scales"] = k => {
  MathKit.attach(k);
  const { C, F } = k, MR = k.MR, c = k.canvas(), host = k.dom();
  let mode = "sound", lin = 0, t = 0, P = null;
  const S = () => LS[mode], M = [{ x: 0, y: 0, fixY: true }, { x: 0, y: 0, fixY: true }], val = [0, 0], near = [null, null];
  const topE = () => Math.max(S().E(S().min), S().E(S().max));
  const uLog = v => (v - S().min) / (S().max - S().min), uLin = v => 10 ** (S().E(v) - topE());
  const pos = v => (1 - t) * uLog(v) + t * uLin(v);
  const vT = v => S().pre + MR.fmtN(v, 1) + S().post;
  const nameOf = v => { const it = S().items.find(q => Math.abs(q[1] - v) < 1e-9); return it ? it[0] : null; };
  const reset = () => { S().start.forEach((v, i) => { val[i] = v; near[i] = nameOf(v); }); };
  k.drag(c, () => P, M, (i, p) => {
    const s = S(); let v = lin ? s.inv(Math.log10(Math.max(p.x, 1e-30)) + topE()) : s.min + p.x * (s.max - s.min);
    v = +clamp(Math.round(v / s.step) * s.step, s.min, s.max).toFixed(2); near[i] = null;
    let best = 9; s.items.forEach(([nm, iv]) => { const dd = P ? Math.abs(P.X(pos(iv)) - P.X(p.x)) : 99; if (dd < best) { best = dd; v = iv; near[i] = nm; } });
    val[i] = v;
  });
  k.modes([["sound", "Sound"], ["acid", "Acids"], ["quake", "Quakes"]], mode, m => { mode = m; reset(); });
  const tb = k.button("Linear axis", () => { lin = 1 - lin; tb.textContent = lin ? "Log axis" : "Linear axis"; }, "btn");
  k.button("Reset markers", reset, "btn ghost");
  k.hint("Drag the markers A and B along the scale");
  k.guard([]); reset();

  k.loop(dt => {
    t = k.reduce ? lin : t + (lin - t) * Math.min(1, dt * 4); if (Math.abs(t - lin) < 2e-3) t = lin;
    c.begin(); const d = c.d, s = S(), N = s.items.length, narrow = c.w < 560, labels = [];
    k.split(c, host, { off: true });
    P = k.plane(c, { xmin: -0.02, xmax: 1.02, ymin: -0.2, ymax: N + 1.15, pad: { l: 16, r: 16, t: 16, b: 66 } });
    const y0 = P.Y(0), tf = `11px ${F.mono}`;
    d.line(P.X(0), y0, P.X(1), y0, C.muted, 1.5);
    const tick = (u, top, bot) => { const x = P.X(u); d.line(x, y0, x, y0 + 5, C.muted, 1);
      if (top) d.text(top, x, y0 + 17, { font: tf, color: C.cyan, align: "center" }); if (bot) d.text(bot, x, y0 + 33, { font: tf, color: C.amber, align: "center" }); };
    if (t < 0.5) {
      const st = narrow ? s.ticks[0] : s.ticks[1];
      for (let v = s.min; v <= s.max + 1e-9; v += st) { const e = +s.E(v).toFixed(6); tick(pos(v), MR.fmtN(v, 1), Number.isInteger(e) && (!narrow || mode !== "quake" || v % 2 === 0) ? "10" + MR.supT(String(e)) : ""); }
    } else {
      (narrow ? [0, 0.5, 1] : [0, 0.25, 0.5, 0.75, 1]).forEach(f => { const v = f ? s.inv(Math.log10(f) + topE()) : s.min;
        tick((1 - t) * uLog(clamp(v, s.min, s.max)) + t * f, f ? MR.fmtN(v, 1) : "", sci(f * 10 ** topE(), 2)); });
    }
    d.text(`${s.sym}${s.post ? " (dB)" : ""}`, P.X(0), y0 + 52, { font: `600 12px ${F.ui}`, color: C.cyan });
    d.text(t < 0.5 ? `${s.qT} at whole powers of 10 · log axis` : `${s.lin} · linear axis`, P.X(0) + d.width(s.sym + (s.post ? " (dB)" : ""), `600 12px ${F.ui}`) + 14, y0 + 52, { font: `600 12px ${F.ui}`, color: C.amber });
    s.items.forEach(([nm, v], i) => { const y = N - i, u = pos(v);
      P.seg(u, 0, u, y, k.alpha(C.amber, 0.25), 1, [2, 3]); P.dot(u, y, C.amber, 5);
      labels.push({ text: `${nm} · ${vT(v)}`, x: u, y, color: C.text, font: `13px ${F.sans}`, prefer: u > 0.6 ? "w" : "e" }); });
    const yM = N + 0.6, ux = val.map(pos), close = Math.abs(P.X(ux[0]) - P.X(ux[1])) < 20, yH = [yM, close ? yM - Math.max(0.45, 22 / (P.Y(0) - P.Y(1))) : yM];
    ux.forEach((u, i) => { M[i].x = u; M[i].y = yH[i]; P.seg(u, 0, u, yH[i], k.alpha(C.cyan, 0.75), 1.4, [5, 4]); });
    P.seg(ux[0], yH[0], ux[1], yH[1], C.pink, 2);
    ux.forEach((u, i) => { P.dot(u, yH[i], C.cyan, 8); d.text("AB"[i], P.X(u), P.Y(yH[i]) + 0.5, { font: `700 11px ${F.ui}`, color: C.ink, align: "center", base: "middle" }); });
    const eA = s.E(val[0]), eB = s.E(val[1]), dE = +(eB - eA).toFixed(4), dV = +(val[1] - val[0]).toFixed(4);
    const rT = "×" + sci(10 ** Math.abs(dE));
    if (Math.abs(ux[1] - ux[0]) > 0.002) labels.push({ text: dE === 0 ? "equal" : rT, x: (ux[0] + ux[1]) / 2, y: yM, color: C.pink, font: `600 13px ${F.mono}`, prefer: "n" });
    P.labels(labels);
    const pw = e => { const r = +e.toFixed(2); return `10${sup(r)}` + (Number.isInteger(r) ? "" : ` ≈ ${sci(10 ** r)}`); };
    const big = dE >= 0 ? "B" : "A", small = dE >= 0 ? "A" : "B", fac = sci(10 ** Math.abs(dE));
    const say = dE === 0 ? "A and B are the same" : `${big} has ${fac} times ${s.more} ${small}`;
    const step = dV !== 0 && Math.abs(dV / s.unit1 - Math.round(dV / s.unit1)) < 1e-9, n = Math.round(Math.abs(dV) / s.unit1);
    const rows = val.map((v, i) => ({ lhs: `${"AB"[i]}: ${cl("c2", vT(v))}`, v: cl("c1", `${s.qH} = ${pw(s.E(v))}`), lbl: near[i] || "between the reference points" }));
    rows.push({ lhs: `${mode === "quake" ? "energy" : "ratio"} B ÷ A`, v: cl("c3", `10${sup(dE)}`), lbl: say });
    if (mode === "quake") rows.push({ lhs: "amplitude B ÷ A", v: cl("c3", `10${sup(dV)}`), lbl: "wave amplitude grows 10 times per magnitude unit" });
    k.readout({ title: s.title, big: nw(s.big), rows,
      landmark: step ? { hit: true, big: `Δ${s.sym} = ${MR.fmtN(Math.abs(dV), 1)}: ${mode === "quake" ? "energy" : ""} ×10${sup(mode === "quake" ? 1.5 * n : n)}`, note: s.step1 }
        : { hit: false, big: `Δ${s.sym} = ${MR.fmtN(Math.abs(dV), 1)}`, note: `Set A and B exactly ${s.unit1}${s.post} apart, or a whole number of those steps.` },
      narr: lin ? "On the linear axis everything except the largest value is squeezed against 0. Press Log axis." : "Subtracting scale values compares the quantities by division. Press Linear axis to see why logs are used." });
  });
};

/* ================= Equations in quadratic form (C · Steps) ================= */
const U = cl("c1", "<i>u</i>"), X = cl("c2", ix);
const QK = {
  sq:   { uH: `${X}<sup>2</sup>`, uT: "x²", p2: () => `${X}<sup>4</sup>`, p1: () => `${X}<sup>2</sup>`, p2T: "x⁴", p1T: "x²", note: `${ix}<sup>4</sup> = (${ix}<sup>2</sup>)<sup>2</sup> = <i>u</i><sup>2</sup>`, pos: true,
    f: (p, x) => p.a * x ** 4 + p.b * x * x + p.c, fT: p => `y = ${termsT([[p.a, "x⁴"], [p.b, "x²"], [p.c, ""]])}` },
  lin:  { uH: p => `${X} ${p.h > 0 ? MI : "+"} ${Math.abs(p.h)}`, uT: "", p2: p => `(${X} ${p.h > 0 ? MI : "+"} ${Math.abs(p.h)})<sup>2</sup>`, p1: p => `(${X} ${p.h > 0 ? MI : "+"} ${Math.abs(p.h)})`, note: "The same expression appears squared and to the first power.",
    f: (p, x) => p.a * (x - p.h) ** 2 + p.b * (x - p.h) + p.c, fT: p => { const s = `(x ${p.h > 0 ? MI : "+"} ${Math.abs(p.h)})`; return `y = ${termsT([[p.a, s + "²"], [p.b, s], [p.c, ""]])}`; } },
  sqrt: { uH: `√<span class="mk-ol">${X}</span>`, uT: "√x", p2: () => X, p1: () => `√<span class="mk-ol">${X}</span>`, p2T: "x", p1T: "√x", note: `${ix} = (√<span class="mk-ol">${ix}</span>)<sup>2</sup> = <i>u</i><sup>2</sup> for ${ix} ≥ 0`, pos: true, dom0: true,
    f: (p, x) => (x < 0 ? NaN : p.a * x + p.b * Math.sqrt(x) + p.c), fT: p => `y = ${termsT([[p.a, "x"], [p.b, "√x"], [p.c, ""]])}` },
  cbrt: { uH: `${X}<sup>1/3</sup>`, uT: "x^(1/3)", p2: () => `${X}<sup>2/3</sup>`, p1: () => `${X}<sup>1/3</sup>`, p2T: "x^(2/3)", p1T: "x^(1/3)", note: `${ix}<sup>2/3</sup> = (${ix}<sup>1/3</sup>)<sup>2</sup> = <i>u</i><sup>2</sup>`,
    f: (p, x) => p.a * Math.cbrt(x) ** 2 + p.b * Math.cbrt(x) + p.c, fT: p => `y = ${termsT([[p.a, "x^(2/3)"], [p.b, "x^(1/3)"], [p.c, ""]])}` },
  inv:  { uH: `${X}<sup>${MI}1</sup>`, uT: "1/x", p2: () => `${X}<sup>${MI}2</sup>`, p1: () => `${X}<sup>${MI}1</sup>`, p2T: "x⁻²", p1T: "x⁻¹", note: `${ix}<sup>${MI}2</sup> = (${ix}<sup>${MI}1</sup>)<sup>2</sup> = <i>u</i><sup>2</sup>, and <i>u</i> = 1/${ix} ≠ 0`, zero: true,
    f: (p, x) => p.a / (x * x) + p.b / x + p.c, fT: p => `y = ${termsT([[p.a, "x⁻²"], [p.b, "x⁻¹"], [p.c, ""]])}` }
};
// "2u² − 7u + 3" from [[coef, power]] (text or HTML power strings)
function termsT(list){
  let s = ""; list.forEach(([c0, pw]) => { if (!c0) return; const a = Math.abs(c0), mag = pw && a === 1 ? "" : String(a); s += s ? (c0 < 0 ? " − " : " + ") : c0 < 0 ? MI : ""; s += mag + pw; }); return s || "0";
}
const QF = [{ kind: "sq", a: 1, b: -5, c: 4 }, { kind: "sq", a: 1, b: -3, c: -4 }, { kind: "sq", a: 2, b: -7, c: 3 }, { kind: "lin", a: 1, b: 3, c: -10, h: 2 },
  { kind: "sqrt", a: 1, b: -7, c: 10 }, { kind: "sqrt", a: 1, b: -1, c: -6 }, { kind: "cbrt", a: 1, b: 1, c: -6 }, { kind: "inv", a: 1, b: -1, c: -6 }];
function genQF(){
  const pick = a => a[Math.floor(Math.random() * a.length)], kind = pick(["sq", "sq", "lin", "sqrt", "cbrt", "inv"]);
  const pool = { sq: [-4, -1, 1, 2, 3, 4, 9], lin: [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5], sqrt: [-3, -2, -1, 1, 2, 3, 4, 5], cbrt: [-3, -2, -1, 1, 2, 3], inv: [-3, -2, -1, 1, 2, 3, 4] }[kind];
  let r1, r2; do { r1 = pick(pool); r2 = pick(pool); } while (r1 === r2 || r1 + r2 === 0 || Math.max(r1, r2) <= 0);
  return { kind, a: 1, b: -(r1 + r2), c: r1 * r2, h: kind === "lin" ? pick([-3, -2, -1, 1, 2, 3]) : 0 };
}
L["a2-quad-form-eq"] = k => {
  MathKit.attach(k);
  const { C, F } = k, MR = k.MR, Q = MR.Q, c = k.canvas(), host = k.dom(), SP = k.stepsPanel(host);
  let mode = "worked", pi = 0, p = QF[0], cur = 0, st = null, sel = null, D = null;
  const prep = () => {
    const K = QK[p.kind], R = MR.quadRoots(p.a, p.b, p.c), rs = R.exact.slice().sort(Q.cmp), bs = rs.map(r => backSub(p.kind, r, p.h));
    const xs = bs.flatMap(b => b.xs).sort((a, b) => a.v - b.v), setT = `{${xs.map(q => q.t).join(", ")}}`;
    D = { K, rs, bs, xs, setT, uT: rs.map(r => `u = ${MR.qT(r)}`).join(" or ") };
    k.guard([setT, D.uT]);
  };
  const load = q => { p = q; cur = 0; if (st) st.reset(); prep(); };
  const hints = { worked: "Step through: substitute, solve in u, back-substitute", turn: "Predict the u-roots before you step" };
  k.modes([["worked", "Worked"], ["turn", "Your turn"]], mode, m => { mode = m; k.showGroup(m); k.hint(hints[m]); load(m === "worked" ? QF[pi] : genQF()); });
  st = k.stepper(() => 5, v => cur = v, { ms: 1400 });
  k.group("worked", () => { sel = k.select("Equation", QF.map((q, i) => [i, `${i + 1}. ${QK[q.kind].fT(q).slice(4)} = 0`]), pi, v => { pi = +v; load(QF[pi]); }); });
  k.group("turn", () => k.button("New problem", () => load(genQF()), "btn ghost"));
  k.showGroup(mode); k.hint(hints[mode]); load(QF[0]);

  const facT = r => { if (r.n === 0) return "<i>u</i>"; const s = r.n < 0 ? "+" : MI, a = Math.abs(r.n); return r.d === 1 ? `(<i>u</i> ${s} ${a})` : `(${r.d}<i>u</i> ${s} ${a})`; };
  k.loop(() => {
    c.begin(); const d = c.d, K = D.K, rs = D.rs, labels = [], labX = [];
    const pad = k.split(c, host, { side: "left", frac: 0.42, hfrac: 0.4 });
    const uH = typeof K.uH === "function" ? K.uH(p) : K.uH, p2 = K.p2(p), p1 = K.p1(p);
    const xEq = `${termsT([[p.a, p2], [p.b, p1], [p.c, ""]])} = 0`, uEq = `${termsT([[p.a, U + "<sup>2</sup>"], [p.b, U], [p.c, ""]])} = 0`;
    const lead = Q.div(p.a, rs.reduce((m, r) => m * r.d, 1)), fac = (Q.eq(lead, 1) ? "" : MR.qT(lead)) + rs.map(facT).join("");
    const backLine = (b, r) => { const rT = MR.qT(r), eq0 = `${uH} = ${rT}`;
      if (b.rej) { const cand = b.cand ? ` (squaring would give ${ix} = ${MR.qT(b.cand)}, and ${MR.fmtN(K.f(p, Q.val(b.cand)), 3)} ≠ 0)` : "";
        return { tag: "reject", eq: cl("c3", `${eq0}: no real ${ix}`), why: `Rejected: ${b.rej}${cand}.` }; }
      return { tag: "back-sub", eq: `${eq0} &nbsp;⇒&nbsp; ${b.xs.length === 2 ? `${ix} = ±${b.xs[1].h}` : `${ix} = ${b.xs[0].h}`}`, why: p.kind === "sq" ? "Take both square roots." : p.kind === "lin" ? `Add ${MR.fmtN(p.h, 0)} to both sides.` : p.kind === "sqrt" ? "Square both sides." : p.kind === "cbrt" ? "Cube both sides." : "Take reciprocals." }; };
    const nrej = D.bs.filter(b => b.rej).length;
    SP.set([
      { tag: "equation", eq: xEq, why: p.kind === "lin" ? K.note : `The power ${K.p2T} is the square of ${K.p1T}.` },
      { tag: "substitute", eq: `${U} = ${uH} &nbsp;⇒&nbsp; ${uEq}`, why: K.note.startsWith("The") ? `Let u stand for the repeated expression.` : K.note + (K.pos ? ". So only u ≥ 0 can give a real x." : ".") },
      { tag: "solve in u", eq: `${fac} = 0 &nbsp;⇒&nbsp; ${D.uT.replace(/u/g, "<i>u</i>")}`, why: "An ordinary quadratic: factor it (or use the quadratic formula)." },
      backLine(D.bs[0], rs[0]), backLine(D.bs[1], rs[1]),
      { tag: "solution", eq: `${D.setT}`, why: nrej ? `${nrej} u-value rejected. Each x left checks in the original equation.` : "Each x checks in the original equation." }
    ], cur);
    // two linked plots: u-world (amber parabola) and x-world (cyan original)
    const L0 = pad.l, R0 = c.w - pad.r, T0 = pad.t, B0 = c.h - pad.b, aw = R0 - L0, ah = B0 - T0, side = ah < aw * 0.75;
    let pu, px;
    if (side) { const mid = L0 + aw / 2; pu = { l: L0, r: c.w - mid + 16, t: T0, b: pad.b + 16 }; px = { l: mid + 30, r: pad.r, t: T0, b: pad.b + 16 }; }
    else { const mid = T0 + ah / 2; pu = { l: L0, r: pad.r, t: T0, b: c.h - mid + 12 }; px = { l: L0, r: pad.r, t: mid + 22, b: pad.b + 16 }; }
    const rv = rs.map(Q.val), ulo = Math.min(0, ...rv) - 1.5, uhi = Math.max(0, ...rv) + 1.5, g = u => p.a * u * u + p.b * u + p.c, yv = g(-p.b / (2 * p.a));
    const uy1 = Math.max(2, Math.min(Math.max(g(ulo), g(uhi)), Math.max(-yv * 1.8, 5))), uy0 = Math.min(-1, yv * 1.25);
    const tk = (span, px0) => MR.niceStep(span, Math.max(3, Math.min(8, px0 / 55)));
    const Pu = k.plane(c, { xmin: ulo, xmax: uhi, ymin: uy0, ymax: uy1, pad: pu, xstep: tk(uhi - ulo, c.w - pu.l - pu.r), ystep: tk(uy1 - uy0, c.h - pu.t - pu.b), xlabel: "u", ylabel: "y" });
    Pu.grid(); Pu.axes();
    if (cur >= 1 && K.pos) { Pu.shade(() => Pu.ymax, () => Pu.ymin, Pu.xmin, 0, k.alpha(C.pink, 0.1)); labels.push({ text: "u < 0: no real x", x: Pu.xmin + 0.1, y: Pu.ymin + (Pu.ymax - Pu.ymin) * 0.12, color: C.pink, font: `12px ${F.sans}`, prefer: "e" }); }
    if (cur >= 1 && K.zero) { Pu.seg(0, Pu.ymin, 0, Pu.ymax, k.alpha(C.pink, 0.7), 1.4, [5, 4]); labels.push({ text: "u ≠ 0", x: 0, y: Pu.ymin + (Pu.ymax - Pu.ymin) * 0.12, color: C.pink, font: `12px ${F.sans}` }); }
    if (cur >= 1) { Pu.curve(g, C.amber, { w: 2.6 }); const a = Pu.onCurve(g, 0.9); if (a) labels.push({ text: `y = ${termsT([[p.a, "u²"], [p.b, "u"], [p.c, ""]])}`, x: a.x, y: a.y, color: C.amber, font: `italic 14px ${F.math}` }); }
    else labels.push({ text: "u-world: step to substitute", x: (ulo + uhi) / 2, y: uy1 * 0.6, color: C.muted, font: `13px ${F.sans}` });
    if (cur >= 2) rs.forEach((r, i) => { const rj = !!D.bs[i].rej, v = Q.val(r); Pu.dot(v, 0, rj ? C.pink : C.amber, 6); labels.push({ text: `u = ${MR.qT(r)}${rj && cur >= 3 + i ? " ✕" : ""}`, x: v, y: 0, color: rj ? C.pink : C.amber, font: `13px ${F.mono}` }); });
    Pu.labels(labels);
    // x-world
    const xv = D.xs.map(q => q.v), f = x => K.f(p, x);
    let xlo, xhi;
    if (K.dom0) { xhi = Math.max(4, ...xv) * 1.2 + 1; xlo = -xhi * 0.08; }
    else if (p.kind === "lin") { xlo = Math.min(p.h, ...xv) - 2; xhi = Math.max(p.h, ...xv) + 2; }
    else { const m = Math.max(p.kind === "inv" ? 1.2 : 1.5, ...xv.map(Math.abs)) * (p.kind === "inv" ? 1.7 : 1.3) + (p.kind === "inv" ? 0 : 0.5); xlo = -m; xhi = m; }
    let fmin = Infinity; for (let i = 0; i <= 240; i++) { const x = xlo + (xhi - xlo) * i / 240, y = f(x); if (isFinite(y) && Math.abs(x) > (xhi - xlo) * 0.02) fmin = Math.min(fmin, y); }
    const y1 = Math.max(3, -fmin * 1.6, Math.abs(p.c) * 1.3), y0x = Math.min(-1.5, fmin * 1.3);
    const Px = k.plane(c, { xmin: xlo, xmax: xhi, ymin: y0x, ymax: y1, pad: px, xstep: tk(xhi - xlo, c.w - px.l - px.r), ystep: tk(y1 - y0x, c.h - px.t - px.b), xlabel: "x", ylabel: "y" });
    Px.grid(); Px.axes();
    Px.curve(f, C.cyan, { w: 2.6, breaks: p.kind === "inv" ? [0] : [], from: K.dom0 ? 0 : xlo });
    const fa = Px.onCurve(f, K.dom0 ? 0.9 : 0.86, K.dom0 ? 0 : -Infinity); if (fa) labX.push({ text: K.fT(p), x: fa.x, y: fa.y, color: C.cyan, font: `italic 14px ${F.math}` });
    D.bs.forEach((b, i) => { if (cur < 3 + i) return; b.xs.forEach(q => { Px.dot(q.v, 0, C.cyan, 6); labX.push({ text: q.t, x: q.v, y: 0, color: C.cyan, font: `13px ${F.mono}`, prefer: "s" }); });
      if (b.rej) labX.push({ text: `u = ${MR.qT(rs[i])} gives no x`, x: xlo + (xhi - xlo) * 0.72, y: y1 * 0.72, color: C.pink, font: `12px ${F.sans}` }); });
    Px.labels(labX);
    k.readout({ title: "Equations in quadratic form", big: xEq,
      rows: [{ lhs: `${U} = ${uH}`, lbl: "the substitution turns it into a quadratic in u" },
        { lhs: cur >= 2 ? `${U}: ${rs.map(r => MR.qT(r)).join(", ")}` : `${U}: ?`, lbl: cur >= 2 ? `${nrej ? nrej + " rejected: " + D.bs.find(b => b.rej).rej : "both give real x"}` : "step to solve in u" }],
      landmark: { hit: cur >= 5, big: cur >= 5 ? `${ix} ∈ ${D.setT}` : `step ${cur + 1} of 6`, note: cur >= 5 ? `${D.xs.length} real solution${D.xs.length === 1 ? "" : "s"}: the cyan graph crosses the x-axis exactly there.${nrej ? " The rejected u-root gives no crossing." : ""}` : "Solve in u first, then turn each u back into x." },
      narr: mode === "worked" ? "Equation 2 and 6 each have a u-root that must be rejected." : "New problem picks another form: x⁴, (x − h), √x, x^(1/3) or x⁻¹." });
  });
};

/* ================= Linear systems in three variables (C · Steps + 3D view) ================= */
const VN = ["<i>x</i>", "<i>y</i>", "<i>z</i>"], EC = ["c1", "c2", "c3"];
// "2x − y + z = 3" (HTML)
const linH = e => { let s = ""; e.slice(0, 3).forEach((a, i) => { if (!a) return; const m = Math.abs(a) === 1 ? "" : Math.abs(a); s += s ? (a < 0 ? " − " : " + ") : a < 0 ? MI : ""; s += m + VN[i]; }); return `${s || "0"} = ${MR0().sg(e[3])}`; };
const MR0 = () => window.MathRules;
const combH = (o, A, B) => { if (o.p === 0) return `${B} as it is`; const t = (q, n, first) => (first ? (q < 0 ? MI : "") : q < 0 ? " − " : " + ") + (Math.abs(q) === 1 ? "" : Math.abs(q) + "·") + n;
  return t(o.p, A, true) + t(o.q, B, false) + (o.g > 1 ? `, then ÷ ${o.g}` : ""); };
const triT = (a, b, cc) => `(${[a, b, cc].map(v => MR0().qT(v)).join(", ")})`;
const S3 = [{ name: "One solution", E: [[1, 1, 1, 6], [2, -1, 1, 3], [1, 2, -1, 2]], kind: "one", pt: [1, 2, 3], work: [[`2·(1) − (2)`, `3<i>y</i> + <i>z</i> = 9`], [`(3) − (1)`, `<i>y</i> − 2<i>z</i> = ${MI}4`], [`then`, `<i>z</i> = 3, <i>y</i> = 2, <i>x</i> = 1`]], why: "The three planes meet in exactly one point." },
  { name: "No solution: parallel planes", E: [[1, 1, 1, 2], [1, 1, 1, 5], [1, -1, 1, 1]], kind: "none", work: [[`(2) − (1)`, `0 = 3`]], why: "Planes (1) and (2) have the same normal direction but different constants: they are parallel and never meet." },
  { name: "No solution: three lines", E: [[1, 1, 1, 2], [1, 2, 3, 4], [2, 3, 4, 9]], kind: "none", work: [[`(1) + (2) − (3)`, `0 = ${MI}3`]], why: "Each pair of planes meets in a line, but the three lines are parallel, like the edges of a prism." },
  { name: "Infinitely many: a line", E: [[1, 1, 1, 2], [1, 2, 3, 4], [2, 3, 4, 6]], kind: "many", work: [[`(2) − (1)`, `<i>y</i> + 2<i>z</i> = 2`], [`(1) + (2) − (3)`, `0 = 0`], [`let <i>z</i> = <i>t</i>`, `<i>y</i> = 2 − 2<i>t</i>, &nbsp;<i>x</i> = 2 − <i>y</i> − <i>z</i> = <i>t</i>`]],
    line: tt => [tt, 2 - 2 * tt, tt], ans: `(<i>t</i>, 2 − 2<i>t</i>, <i>t</i>)`, why: "Equation (3) is (1) + (2), so it adds no new condition. The three planes share one line." }];
function genSys(){
  const r = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  for (let n = 0; n < 400; n++) {
    const s = [r(-3, 3), r(-3, 3), r(-3, 3)], A = [[r(1, 2), r(-3, 3), r(-3, 3)], [r(-3, 3), r(-3, 3), r(-3, 3)], [r(-3, 3), r(-3, 3), r(-3, 3)]];
    if (Math.random() < 0.6) A[0][0] = 1;
    if (A.some(row => row.filter(v => v).length < 2) || A[1][0] === 0 || A[2][0] === 0) continue;
    const E = A.map(row => [...row, row[0] * s[0] + row[1] * s[1] + row[2] * s[2]]), pl = elim3(E);
    if (!pl || pl.s5.r[1] === 0 || [pl.s4, pl.s5, pl.s6].some(o => o.r.some(v => Math.abs(v) > 30)) || E.some(e => Math.abs(e[3]) > 15)) continue;
    return { E, kind: "one", pt: s };
  }
  return S3[0];
}
L["a2-sys-three"] = k => {
  MathKit.attach(k);
  const { C, F } = k, MR = k.MR, c = k.canvas(), host = k.dom(), rowsEl = document.createElement("div"); host.appendChild(rowsEl);
  const SP = k.stepsPanel(host), LC = 5;
  let mode = "elim", sys = S3[0], ci = 1, cur = 0, st = null, plan = null, yaw = -0.62, pit = 0.42, spin = true, P = null, lastRows = "";
  const load = s => { sys = s; plan = elim3(s.E); cur = 0; if (st) st.reset(); if (mode === "elim") k.guard([triT(plan.x, plan.y, plan.z)]); };
  // rotate the 3D view by dragging
  let dragAt = null;
  c.cv.addEventListener("pointerdown", e => { dragAt = c.xy(e); spin = false; c.cv.setPointerCapture(e.pointerId); });
  c.cv.addEventListener("pointermove", e => { if (!dragAt) return; const q = c.xy(e); yaw += (q.x - dragAt.x) * 0.01; pit = clamp(pit + (q.y - dragAt.y) * 0.01, -0.3, 1.35); dragAt = q; });
  const up = () => { dragAt = null; }; c.cv.addEventListener("pointerup", up); c.cv.addEventListener("pointercancel", up); c.cv.style.cursor = "grab"; c.cv.style.touchAction = "none";
  const hints = { elim: "Step through the elimination; drag the view to turn it", cases: "Pick a case; drag the view to turn it" };
  const setMode = m => { mode = m; k.showGroup(m); k.hint(hints[m]); if (m === "elim") load(sys); else k.guard([]); };
  k.modes([["elim", "Eliminate"], ["cases", "Cases"]], mode, setMode);
  k.group("elim", () => { st = k.stepper(() => 6, v => cur = v, { ms: 1500 }); k.button("New system", () => load(genSys()), "btn ghost"); });
  k.group("cases", () => k.select("Case", S3.map((s, i) => [i, s.name]), ci, v => { ci = +v; }));
  setMode(mode);

  k.loop(dt => {
    if (spin && !k.reduce) yaw += dt * 0.12;
    c.begin(); const d = c.d, g = c.g, labels = [];
    const S = mode === "elim" ? sys : S3[ci], E = S.E, pl = mode === "elim" ? plan : null;
    // DOM: the equations as rows, the pair being combined highlighted
    const pair = mode !== "elim" ? [] : [[], [0, 1], [0, 2], [3, 4], [3], [0], [1, 2]][cur];
    const rws = E.map((e, i) => [`(${i + 1})`, linH(e), EC[i]]);
    if (pl && cur >= 1) rws.push(["(4)", linH(pl.s4.r), ""]); if (pl && cur >= 2) rws.push(["(5)", linH(pl.s5.r), ""]);
    const rowsHtml = `<div style="display:grid;gap:2px;margin:2px 0 8px;font:400 18px/1.4 var(--math)">${rws.map(([n, h, cls], i) => `<div style="padding:2px 8px;border-radius:4px;${pair.includes(i) ? "background:rgba(242,184,75,.10);box-shadow:inset 2px 0 0 var(--amber)" : ""}"><span style="font:600 11px var(--ui);letter-spacing:.1em;color:var(--faint);display:inline-block;width:34px">${n}</span><span class="${cls}">${h}</span></div>`).join("")}</div>`;
    if (rowsHtml !== lastRows) { rowsEl.innerHTML = rowsHtml; lastRows = rowsHtml; }
    if (pl) {
      const { s4, s5, s6, x, y, z } = pl, zt = MR.qT(z), yt = MR.qT(y);
      SP.set([
        { tag: "plan", eq: `eliminate ${VN[0]} twice, then ${VN[1]}`, why: "Two equations without x make a 2 × 2 system in y and z." },
        { tag: "(1), (2) → (4)", eq: `(4) &nbsp;${linH(s4.r)}`, why: `${combH(s4, "(1)", "(2)")}: x drops out.` },
        { tag: "(1), (3) → (5)", eq: `(5) &nbsp;${linH(s5.r)}`, why: `${combH(s5, "(1)", "(3)")}: x drops out again.` },
        { tag: "(4), (5) → z", eq: `${linH(s6.r)} &nbsp;⇒&nbsp; ${VN[2]} = ${zt}`, why: `${combH(s6, "(4)", "(5)")}: y drops out.` },
        { tag: "back into (4)", eq: `${VN[1]} = ${yt}`, why: `Put z = ${zt} into (4) and solve for y.` },
        { tag: "back into (1)", eq: `${VN[0]} = ${MR.qT(x)}`, why: `Put y = ${yt} and z = ${zt} into (1) and solve for x.` },
        { tag: "solution", eq: cl("c5", triT(x, y, z)), why: "Check: the triple satisfies (2) and (3) as well." }], cur);
    } else SP.set([...S.work.map(([a, b]) => ({ tag: a, eq: b })), { tag: "result", eq: S.kind === "none" ? "no solution: ∅" : S.kind === "many" ? cl("c5", S.ans) : cl("c5", "(1, 2, 3)"), why: S.why }], 9);
    // 3D view: the three planes inside the cube [−5, 5]³
    const pad = k.split(c, host, { side: "left", frac: 0.42, hfrac: 0.44 }); pad.b += 14;
    P = k.plane(c, { xmin: -LC * 1.4, xmax: LC * 1.4, ymin: -LC * 1.4, ymax: LC * 1.4, equal: true, pad });
    const Pj = p => prj(p, yaw, pit), seg3 = (a, b, col, w, dash) => { const A = Pj(a), B = Pj(b); P.seg(A.u, A.v, B.u, B.v, col, w, dash); };
    for (let i = 0; i < 8; i++) for (const bit of [1, 2, 4]) { const j = i | bit; if (j === i) continue; const v = q => [q & 1 ? LC : -LC, q & 2 ? LC : -LC, q & 4 ? LC : -LC]; seg3(v(i), v(j), k.alpha(C.text, 0.12), 1); }
    [[1, 0, 0], [0, 1, 0], [0, 0, 1]].forEach((ax, i) => { const a = ax.map(v => -v * LC), b = ax.map(v => v * LC * 1.18); seg3(a, b, k.alpha(C.muted, 0.7), 1.2);
      const B = Pj(b); labels.push({ text: "xyz"[i], x: B.u, y: B.v, color: C.muted, font: `italic 15px ${F.math}` }); });
    const cols = [C.amber, C.cyan, C.pink], hi = pair.filter(i => i < 3);
    const polys = E.map((e, i) => ({ i, pts: planeBox(e.slice(0, 3), e[3], LC) })).map(o => Object.assign(o, { dep: o.pts.reduce((s, p) => s + Pj(p).dep, 0) / Math.max(1, o.pts.length) })).sort((a, b) => b.dep - a.dep);
    polys.forEach(({ i, pts }) => { if (!pts.length) return; const on = !hi.length || hi.includes(i), q = pts.map(Pj);
      g.save(); g.beginPath(); q.forEach((r, j) => (j ? g.lineTo(P.X(r.u), P.Y(r.v)) : g.moveTo(P.X(r.u), P.Y(r.v)))); g.closePath();
      g.fillStyle = k.alpha(cols[i], on ? 0.2 : 0.06); g.fill(); g.restore();
      q.forEach((r, j) => { const s = q[(j + 1) % q.length]; P.seg(r.u, r.v, s.u, s.v, k.alpha(cols[i], on ? 0.95 : 0.35), on && hi.length ? 2.4 : 1.4); });
      const m = q.reduce((a, r) => ({ u: a.u + r.u / q.length, v: a.v + r.v / q.length }), { u: 0, v: 0 }); labels.push({ text: `(${i + 1})`, x: m.u, y: m.v, color: cols[i], font: `600 13px ${F.mono}` }); });
    const showPt = S.kind === "one" && (mode === "cases" || cur >= 6);
    if (showPt) { const pt = mode === "elim" ? [pl.x, pl.y, pl.z].map(MR.Q.val) : S.pt, A = Pj(pt), F0 = Pj([pt[0], pt[1], -LC]);
      P.seg(A.u, A.v, F0.u, F0.v, k.alpha(C.green, 0.7), 1.4, [4, 4]); P.dot(F0.u, F0.v, k.alpha(C.green, 0.6), 3.5); P.dot(A.u, A.v, C.green, 7);
      labels.push({ text: mode === "elim" ? triT(pl.x, pl.y, pl.z) : "(1, 2, 3)", x: A.u, y: A.v, color: C.green, font: `600 14px ${F.mono}` }); }
    if (S.kind === "many") { const a = Pj(S.line(-1.5)), b = Pj(S.line(3.5)); P.seg(a.u, a.v, b.u, b.v, C.green, 3); }
    P.labels(labels);
    if (pl) {
      const what = ["Plan the elimination", "(1) and (2) combined: no x", "(1) and (3) combined: no x", "(4) and (5) combined: no y", "Back-substitute z", "Back-substitute y and z", "All three planes meet here"][cur];
      k.readout({ title: "Elimination in three variables", big: nw(`(${VN.join(", ")}) = ${cur >= 6 ? cl("c5", triT(pl.x, pl.y, pl.z)) : "?"}`),
        rows: [{ lhs: what, lbl: cur >= 1 && cur <= 3 ? "the highlighted planes are the pair being combined" : "each equation is a plane in space" }],
        landmark: { hit: cur >= 6, big: cur >= 6 ? `one solution ${cl("c5", triT(pl.x, pl.y, pl.z))}` : `step ${cur + 1} of 7`, note: cur >= 6 ? "The green point lies on all three planes: the ordered triple satisfies every equation." : "Each combination removes one variable; the planes stay the same, only the equations change." },
        narr: "Drag the view to turn it. New system makes another one with an integer solution." });
    } else k.readout({ title: "How three planes can meet", big: nw(S.kind === "none" ? "no solution: ∅" : S.kind === "many" ? `${cl("c5", S.ans)}, any real <i>t</i>` : cl("c5", "(1, 2, 3)")),
      rows: [{ lhs: S.work.slice(-1)[0][0] + ": " + S.work.slice(-1)[0][1], lbl: S.kind === "none" ? "a false statement: the system is inconsistent" : S.kind === "many" ? "a true statement: the system is dependent" : "back-substitution gives one triple" }],
      landmark: { hit: true, big: S.kind === "none" ? "Inconsistent" : S.kind === "many" ? "Dependent: infinitely many" : "Independent: one point", note: S.why },
      narr: "Turn the view until you can see why the planes have no common point, or share a whole line." });
  });
};
})();
