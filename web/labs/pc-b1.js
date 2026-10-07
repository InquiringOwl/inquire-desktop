/* ============ Labs: Precalculus, batch B1 (parent functions and symmetry, piecewise and absolute value, rates and behaviour) ============ */
(function(){
const L = window.LABS;
const MI = "−", INF = "∞";
const MRf = () => window.MathRules;

/* ---------- KIT CANDIDATES (DOM-free; small pure rules this batch needed) ---------- */
// KIT CANDIDATE: text of p + sgn·s√t (a root from quadRoots), or of an exact Q when t = 1
const rootT = (p, s, t, sgn) => { const MR = MRf(), Q = MR.Q; if (t === 1) return MR.qT(Q.add(p, Q.mul(sgn, s))); const r = MR.radStr(s, t); return Q.val(p) === 0 ? (sgn < 0 ? MI : "") + r : `${MR.qT(p)} ${sgn < 0 ? MI : "+"} ${r}`; };
// KIT CANDIDATE: union of open intervals [{lo, hi}] (null = ∞) as text: "(−∞, −1) ∪ (1, ∞)"; "∅" when empty
const ivUnion = (ivs, T) => ivs.length ? ivs.map(v => `(${v.lo === null ? MI + INF : T(v.lo)}, ${v.hi === null ? INF : T(v.hi)})`).join(" ∪ ") : "∅";
// KIT CANDIDATE: a y-window that keeps the listed y-values in view with a margin (span ≥ min)
const yWin = (ys, min = 4, cap = 40) => { ys = ys.filter(isFinite).map(v => Math.max(-cap, Math.min(cap, v))); let lo = Math.min(...ys, 0), hi = Math.max(...ys, 0); const m = Math.max(1, (hi - lo) * 0.3); lo -= m; hi += m; if (hi - lo < min) { const c = (hi + lo) / 2; lo = c - min / 2; hi = c + min / 2; } return { ymin: lo, ymax: hi }; };
// "+ 3" / "− 3" tokens for coefficients after the first term
const par = t => (t.startsWith(MI) ? `(${t})` : t);
const sg = v => (v < 0 ? `${MI} ` : "+ ") + MRf().fmtN(Math.abs(v));
const opendot = (k, c, P, x, y, color) => { if (y >= P.ymin && y <= P.ymax && x >= P.xmin && x <= P.xmax) c.d.circle(P.X(x), P.Y(y), 4.5, k.C.ink, color, 2); };

/* ================= pc-parent-functions ================= */
L["pc-parent-functions"] = k => {
  MathKit.attach(k);
  const { C, F } = k, MR = k.MR, Q = MR.Q, c = k.canvas(), qT = MR.qT, R = `(${MI}${INF}, ${INF})`;
  let mode = "lib", pk = "sq", fam = "cubic", picked = null, P = null, moved = false;
  const S = k.vars([
    { key: "c", value: 2, min: -4, max: 4, step: 0.5, cls: "c3", label: "constant c" },
    { key: "b", value: 2, min: 0.25, max: 5, step: 0.25, cls: "c3", label: "base b" },
    { key: "A", value: 1, min: -3, max: 3, step: 1, cls: "c3", label: "coefficient of x cubed", px: 10 },
    { key: "B", value: 0, min: -3, max: 3, step: 1, cls: "c3", label: "coefficient of x squared", px: 10 },
    { key: "C", value: -3, min: -6, max: 6, step: 1, cls: "c3", label: "coefficient of x", px: 10 },
    { key: "D", value: 0, min: -4, max: 4, step: 1, cls: "c3", label: "constant term", px: 10 },
    { key: "a", value: 1, min: -3, max: 3, step: 0.5, cls: "c3", label: "a" },
    { key: "h", value: 0, min: -4, max: 4, step: 1, cls: "c3", label: "h", fmt: v => (v < 0 ? "+ " : `${MI} `) + Math.abs(v) },
    { key: "k", value: 1, min: -4, max: 4, step: 1, cls: "c3", label: "k" }
  ], (key, v) => { if (key === "b" && v === 1) S.set("b", 1.25); picked = null; reguard(); });
  // parent library: formula html, f, exact value (Q or text) or null, domain/range bars, intercepts, key points, verdict
  const sqQ = x => { const r = MR.sqrtQ(Q(x)); return r.t === 1 ? qT(r.s) : MR.radStr(r.s, r.t); };
  const iv = (lo, hi, li, hi2) => ({ lo, hi, li, hi2 });
  const ALL = [iv(-Infinity, Infinity)], POS = [iv(0, Infinity, true)], POS0 = [iv(0, Infinity, false)], NZ = [iv(-Infinity, 0, false, false), iv(0, Infinity, false)];
  const LIB = {
    c:   { t: () => S.html("c"), f: () => S.c, ex: () => Q(S.c), D: ALL, Rg: () => [iv(S.c, S.c, true, true)], dT: "ℝ", rT: () => `{${MR.fmtN(S.c)}}`, ints: () => S.c === 0 ? "every point of the x-axis" : `(0, ${MR.fmtN(S.c)})`, keys: () => "(−1, c), (0, c), (1, c)", v: () => S.c === 0 ? "both" : "even" },
    x:   { t: () => "<i>x</i>", f: x => x, ex: x => Q(x), D: ALL, Rg: () => ALL, dT: "ℝ", rT: () => "ℝ", ints: () => "(0, 0)", keys: () => "(−1, −1), (1, 1)", v: () => "odd" },
    sq:  { t: () => "<i>x</i><sup>2</sup>", f: x => x * x, ex: x => Q.mul(Q(x), Q(x)), D: ALL, Rg: () => POS, dT: "ℝ", rT: () => `[0, ${INF})`, ints: () => "(0, 0)", keys: () => "(±1, 1), (±2, 4)", v: () => "even" },
    cube:{ t: () => "<i>x</i><sup>3</sup>", f: x => x * x * x, ex: x => Q.pow(Q(x), 3), D: ALL, Rg: () => ALL, dT: "ℝ", rT: () => "ℝ", ints: () => "(0, 0)", keys: () => "(−1, −1), (1, 1), (2, 8)", v: () => "odd" },
    sqrt:{ t: () => "√<span class=\"mk-ol\"><i>x</i></span>", f: x => (x < 0 ? NaN : Math.sqrt(x)), ex: x => (x < 0 ? null : sqQ(x)), D: POS, Rg: () => POS, dT: `[0, ${INF})`, rT: () => `[0, ${INF})`, ints: () => "(0, 0)", keys: () => "(1, 1), (4, 2)", v: () => "neither", lo: 0 },
    cbrt:{ t: () => "∛<span class=\"mk-ol\"><i>x</i></span>", f: Math.cbrt, ex: x => { const r = Math.round(Math.cbrt(x)); return r ** 3 === x ? Q(r) : null; }, D: ALL, Rg: () => ALL, dT: "ℝ", rT: () => "ℝ", ints: () => "(0, 0)", keys: () => "(±1, ±1), (8, 2)", v: () => "odd" },
    abs: { t: () => "|<i>x</i>|", f: Math.abs, ex: x => Q.abs(Q(x)), D: ALL, Rg: () => POS, dT: "ℝ", rT: () => `[0, ${INF})`, ints: () => "(0, 0)", keys: () => "(±1, 1), (±3, 3)", v: () => "even" },
    rec: { t: () => "1/<i>x</i>", f: x => 1 / x, ex: x => (x === 0 ? null : Q.inv(Q(x))), D: NZ, Rg: () => NZ, dT: `ℝ, <i>x</i> ≠ 0`, rT: () => "ℝ, y ≠ 0", ints: () => "none", keys: () => "(1, 1), (2, 1/2), (−1, −1)", v: () => "odd", asym: true },
    rec2:{ t: () => "1/<i>x</i><sup>2</sup>", f: x => 1 / (x * x), ex: x => (x === 0 ? null : Q.inv(Q.mul(Q(x), Q(x)))), D: NZ, Rg: () => POS0, dT: `ℝ, <i>x</i> ≠ 0`, rT: () => `(0, ${INF})`, ints: () => "none", keys: () => "(±1, 1), (±2, 1/4)", v: () => "even", asym: true },
    exp: { t: () => "<i>e</i><sup><i>x</i></sup>", f: Math.exp, ex: x => (x === 0 ? Q(1) : null), D: ALL, Rg: () => POS0, dT: "ℝ", rT: () => `(0, ${INF})`, ints: () => "(0, 1)", keys: () => "(0, 1), (1, e)", v: () => "neither" },
    bx:  { t: () => `${S.html("b")}<sup><i>x</i></sup>`, f: x => Math.pow(S.b, x), ex: x => (Number.isInteger(x) ? Q.pow(Q(S.b), x) : null), D: ALL, Rg: () => POS0, dT: "ℝ", rT: () => `(0, ${INF})`, ints: () => "(0, 1)", keys: () => `(0, 1), (1, ${MR.fmtN(S.b)})`, v: () => "neither" },
    ln:  { t: () => "ln <i>x</i>", f: x => (x <= 0 ? NaN : Math.log(x)), ex: x => (x === 1 ? Q(0) : null), D: POS0, Rg: () => ALL, dT: `(0, ${INF})`, rT: () => "ℝ", ints: () => "(1, 0)", keys: () => "(1, 0), (e, 1)", v: () => "neither", lo: 0.25 }
  };
  const NAMES = [["c", "constant c"], ["x", "identity x"], ["sq", "square x²"], ["cube", "cube x³"], ["sqrt", "square root √x"], ["cbrt", "cube root ∛x"], ["abs", "absolute value |x|"], ["rec", "reciprocal 1/x"], ["rec2", "reciprocal squared 1/x²"], ["exp", "natural exponential eˣ"], ["bx", "exponential bˣ"], ["ln", "natural log ln x"]];
  const TT = { c: "constant", x: "identity", sq: "square", cube: "cube", sqrt: "square root", cbrt: "cube root", abs: "absolute value", rec: "reciprocal", rec2: "reciprocal squared", exp: "natural exponential", bx: "exponential", ln: "natural logarithm" };
  // the testable families (Test / Your turn)
  const famF = () => fam === "cubic" ? (x => ((S.A * x + S.B) * x + S.C) * x + S.D) : (x => S.a * Math.abs(x - S.h) + S.k);
  const famT = () => fam === "cubic" ? `${S.term("A", { v: "<i>x</i><sup>3</sup>", first: true })}${S.term("B", { v: "<i>x</i><sup>2</sup>" })}${S.term("C", { v: "<i>x</i>" })}${S.term("D")}` : `${S.html("a")}|<i>x</i> ${S.html("h")}|${S.term("k")}`;
  function verdict(){
    if (fam === "cubic") { const ev = S.A === 0 && S.C === 0, od = S.B === 0 && S.D === 0; return ev && od ? "both" : ev ? "even" : od ? "odd" : "neither"; }
    const ev = S.a === 0 || S.h === 0, od = S.a === 0 && S.k === 0; return ev && od ? "both" : ev ? "even" : od ? "odd" : "neither";
  }
  const VT = { even: "f is even", odd: "f is odd", neither: "f is neither even nor odd", both: "f is both even and odd (f = 0)" };
  // f(−x) and −f(x) simplified, as html
  function algebra(){
    if (fam === "cubic") { const p = MR.Poly([S.D, -S.C, S.B, -S.A]), n = MR.Poly([-S.D, -S.C, -S.B, -S.A]); return [MR.polyH(p) || "0", MR.polyH(n) || "0"]; }
    const inn = h => (h === 0 ? "<i>x</i>" : `<i>x</i> ${sg(h)}`), tail = v => (v === 0 ? "" : ` ${sg(v)}`);
    return [`${MR.fmtN(S.a)}|${inn(S.h)}|${tail(S.k)}`, `${MR.fmtN(-S.a)}|${inn(-S.h)}|${tail(-S.k)}`];
  }
  const famQ = x => fam === "cubic" ? MR.Poly.eval(MR.Poly([S.D, S.C, S.B, S.A]), Q(x)) : Q.add(Q.mul(Q(S.a), Q.abs(Q.sub(Q(x), Q(S.h)))), Q(S.k));
  const reguard = () => k.guard(mode === "turn" && !picked ? [VT[verdict()]] : []);
  const cur = () => mode === "lib" ? LIB[pk].f : famF();
  const pts = [{ x: 1.5, y: 0, color: C.amber, name: "point (x, f(x))", snap: 0.25, on: x => cur()(x) }];
  const D = k.drag(c, () => P, pts, () => { if (!moved) { moved = true; k.hint(""); } }, { label: "Parent function" });
  function placeHandle(){ const lo = mode === "lib" ? (LIB[pk].lo ?? -6) : -6; pts[0].clamp = [lo, 6, -1e9, 1e9]; if (pts[0].x < lo || !isFinite(cur()(pts[0].x))) pts[0].x = 1.5; pts[0].y = cur()(pts[0].x); }
  function newFn(){
    const r = n => Math.floor(Math.random() * n), kind = r(3);
    if (fam === "cubic") { const v = () => [-3, -2, -1, 1, 2, 3][r(6)]; ["A", "B", "C", "D"].forEach(q => S.set(q, 0));
      if (kind === 0) { S.set("B", v()); S.set("D", v()); } else if (kind === 1) { S.set("A", v()); S.set("C", v() * 2); } else { S.set("A", v()); S.set("B", v()); S.set("C", r(2) ? v() : 0); } }
    else { S.set("a", [-2, -1, 1, 2, 0.5][r(5)]); S.set("h", kind === 0 ? 0 : [-2, -1, 1, 2][r(4)]); S.set("k", [-2, -1, 1, 2][r(4)]); }
    picked = null; placeHandle(); reguard();
  }
  let ans = []; const fs = [], FAMS = [["cubic", "ax³ + bx² + cx + d"], ["abs", "a|x − h| + k"]];
  k.group("lib", () => k.select("Parent", NAMES, pk, v => { pk = v; placeHandle(); }));
  k.group("fam", () => {
    fs.push(k.select("Family", FAMS, fam, v => { fam = v; fs.forEach(o => o.set(v)); picked = null; placeHandle(); reguard(); }));
  });
  k.group("turn", () => {
    fs.push(k.select("Family", FAMS, fam, v => { fam = v; fs.forEach(o => o.set(v)); newFn(); }));
    ans = ["even", "odd", "neither"].map(v => k.button(v[0].toUpperCase() + v.slice(1), () => { if (!picked) { picked = v; k.guard([]); } }, "btn ghost"));
    k.button("New function", newFn, "btn-s");
  });
  function setMode(m){ mode = m; picked = null; k.showGroup(m === "lib" ? "lib" : m === "test" ? "fam" : "turn"); if (m === "turn") newFn(); else placeHandle(); reguard(); }
  k.modes([["lib", "Library"], ["test", "Test"], ["turn", "Your turn"]], mode, setMode);
  setMode("lib"); k.hint("Drag the amber point along the curve");

  function bars(P, list, axis){ const col = k.alpha(C.violet, 0.55);
    list.forEach(v => { const lo = Math.max(v.lo, axis ? P.xmin : P.ymin), hi = Math.min(v.hi, axis ? P.xmax : P.ymax);
      if (axis) P.seg(lo, 0, hi, 0, col, 6); else P.seg(0, lo, 0, hi, col, 6);
      [[v.lo, v.li], [v.hi, v.hi2]].forEach(([e, inc]) => { if (!isFinite(e)) return; const [x, y] = axis ? [e, 0] : [0, e]; if (inc) P.dot(x, y, C.violet, 4.5); else opendot(k, c, P, x, y, C.violet); }); });
  }
  const valT = (fn, ex, x) => { const e = ex ? ex(x) : null, v = fn(x); if (!isFinite(v)) return "undefined"; if (e !== null && e !== undefined) return typeof e === "string" ? e : qT(e); return "≈ " + MR.fmtN(+v.toFixed(3)); };

  k.loop(() => {
    c.begin();
    const f = cur(), lib = mode === "lib" ? LIB[pk] : null, wide = c.w > 520;
    const yr = mode === "lib" ? { ymin: -4, ymax: 5 } : yWin([f(-2), f(-1), f(0), f(1), f(2)], 6, 12);
    P = k.plane(c, { xmin: wide ? -6 : -4, xmax: wide ? 6 : 4, ymin: yr.ymin, ymax: yr.ymax, xlabel: "x", ylabel: "y" });
    P.grid(); P.axes();
    if (lib) { bars(P, lib.D, true); bars(P, lib.Rg(), false); if (lib.asym) { P.vasym(0); P.hasym(0); } }
    const hide = mode === "turn" && !picked;
    if (!lib && !hide) P.curve(x => f(-x), C.cyan, { dash: [7, 6], w: 2, breaks: lib && lib.asym ? [0] : [] });
    if (!lib || pk !== "sqrt" && pk !== "ln") P.curve(f, C.pink, { w: 3, breaks: lib && lib.asym ? [0] : [] });
    else P.curve(f, C.pink, { w: 3, from: lib.lo === 0 ? 0 : 0.01 });
    pts[0].y = f(pts[0].x);
    const x = pts[0].x, y = pts[0].y, ym = f(-x), lab = [];
    // the two candidates for the partner of (x, f(x)): mirror (−x, f(x)) and half turn (−x, −f(x))
    if (x !== 0) { opendot(k, c, P, -x, y, k.alpha(C.text, 0.5)); opendot(k, c, P, -x, -y, k.alpha(C.text, 0.5)); }
    if (isFinite(ym) && !hide) { P.seg(x, y, -x, ym, k.alpha(C.cyan, 0.6), 1.5, [4, 4]); P.dot(-x, ym, C.cyan, 6); lab.push({ text: "(−x, f(−x))", x: -x, y: ym, color: C.cyan, font: `13px ${F.math}` }); }
    P.seg(x, 0, x, y, k.alpha(C.amber, 0.5), 1.5, [3, 4]);
    D.draw(P);
    lab.push({ text: "(x, f(x))", x, y, color: C.pink, font: `13px ${F.math}` });
    P.labels(lab);

    const xt = qT(Q(x)), mx = qT(Q(-x));
    if (lib) {
      k.eqline(`<span class="c3"><i>f</i>(<i>x</i>) = ${lib.t()}</span>`, "parent");
      const v = lib.v();
      k.readout({ title: TT[pk] + " function", rows: [
        { lhs: `<span class="c4">D = ${lib.dT}, &nbsp;R = ${lib.rT()}</span>`, lbl: "domain, range" },
        { lhs: lib.ints(), lbl: "intercepts" }, { lhs: lib.keys(), lbl: "key points" },
        { lhs: `<span class="c3"><i>f</i>(<span class="c1">${xt}</span>) = ${valT(f, lib.ex, x)}</span>`, lbl: "" },
        { lhs: `<span class="c2"><i>f</i>(<span class="c1">${mx}</span>) = ${valT(f, lib.ex, -x)}</span>`, lbl: isFinite(ym) ? "" : `${mx} is outside the domain` }],
        landmark: { hit: v !== "neither", big: `<span class="c5">${v === "neither" ? "neither even nor odd" : v === "both" ? "even and odd" : v}</span>`, note: v === "even" ? "f(−x) = f(x): the cyan partner is the mirror image" : v === "odd" ? "f(−x) = −f(x): the partner is the half-turn image" : v === "both" ? "only f = 0 is both" : "the partner is neither ring" },
        narr: "The two grey rings are where the partner would sit for an even or an odd function. Try every parent." });
    } else {
      k.eqline(`<span class="c3"><i>f</i>(<i>x</i>) = ${famT()}</span>`, mode === "turn" ? "your turn" : "test");
      const [fm, nf] = algebra(), v = verdict();
      const rows = [{ lhs: `<span class="c3"><i>f</i>(<span class="c1">${xt}</span>) = ${qT(famQ(x))}</span>, &nbsp;<span class="c2"><i>f</i>(<span class="c1">${mx}</span>) = ${qT(famQ(-x))}</span>` }];
      if (!hide) rows.push({ lhs: `<span class="c2"><i>f</i>(−<i>x</i>) = ${fm}</span>` }, { lhs: `−<i>f</i>(<i>x</i>) = ${nf}` });
      const right = picked && (picked === v || v === "both");
      k.readout({ title: mode === "turn" ? "Even, odd or neither?" : "Symmetry test", rows,
        landmark: hide ? { hit: false, big: "?", note: "Pick even, odd or neither below" } : { hit: v !== "neither", big: `<span class="c5">${VT[v]}</span>`, note: picked ? (right ? "Right." : `Not quite: you picked ${picked}.`) : v === "even" ? "f(−x) = f(x) for every x" : v === "odd" ? "f(−x) = −f(x) for every x" : "f(−x) matches neither f(x) nor −f(x)" },
        narr: hide ? "Change any number in the equation if you like, then decide." : fam === "cubic" ? "Even uses only even powers (b, d); odd only odd powers (a, c). Scrub them." : "Move h off 0 and the V leaves the y-axis." });
      ans.forEach(b => { b.disabled = !!picked; });
    }
  });
};

/* ================= pc-piecewise-abs ================= */
L["pc-piecewise-abs"] = k => {
  MathKit.attach(k);
  const { C, F } = k, MR = k.MR, Q = MR.Q, qT = MR.qT, c = k.canvas(), dom = k.dom();
  let mode = "pieces", own = ["R", "L"], show = "abs", P = null, moved = false, lastH = "";
  k.css("pcb1-pw", `.pcb1 table{border-collapse:collapse;margin:6px 0 0;border-left:2px solid var(--text);border-radius:10px}.pcb1 td{padding:3px 10px;white-space:nowrap;font:400 17px/1.4 var(--math)}.pcb1 button.rel{all:unset;cursor:pointer;padding:0 5px;border:1px solid var(--line, #445);border-radius:5px;color:var(--violet, #B49BFF)}.pcb1 button.rel:focus-visible{outline:2px solid var(--violet, #B49BFF)}.pcb1 .hd{font:600 11px/1.3 var(--ui);letter-spacing:.12em;text-transform:uppercase;opacity:.6;margin-top:8px}.pcb1 tr.on td{background:rgba(242,184,75,.12)}`);
  dom.className += " pcb1";
  const S = k.vars([
    { key: "m1", value: 1, min: -4, max: 4, step: 0.5, cls: "c2", label: "slope of piece 1" }, { key: "q1", value: 3, min: -8, max: 8, step: 0.5, cls: "c2", label: "intercept of piece 1" },
    { key: "a2", value: 1, min: -3, max: 3, step: 0.5, cls: "c3", label: "x squared coefficient of piece 2" }, { key: "m2", value: 0, min: -4, max: 4, step: 0.5, cls: "c3", label: "x coefficient of piece 2" }, { key: "q2", value: 0, min: -8, max: 8, step: 0.5, cls: "c3", label: "constant of piece 2" },
    { key: "m3", value: -1, min: -4, max: 4, step: 0.5, cls: "c2", label: "slope of piece 3" }, { key: "q3", value: 6, min: -8, max: 8, step: 0.5, cls: "c2", label: "intercept of piece 3" },
    { key: "b1", value: -1, min: -5, max: 4.5, step: 0.5, cls: "c4", label: "break point 1" }, { key: "b2", value: 2, min: -4.5, max: 5, step: 0.5, cls: "c4", label: "break point 2" },
    { key: "pa", value: 1, min: -3, max: 3, step: 0.5, cls: "c3", label: "a" }, { key: "ph", value: 2, min: -4, max: 4, step: 0.5, cls: "c1", label: "h", fmt: v => (v < 0 ? "+ " : `${MI} `) + MR.fmtN(Math.abs(v)) }, { key: "pk", value: -4, min: -6, max: 6, step: 0.5, cls: "c3", label: "k" },
    { key: "F1", value: 4, min: 0.5, max: 20, step: 0.5, cls: "c2", label: "first hour fee" }, { key: "R", value: 2, min: 0, max: 10, step: 0.5, cls: "c3", label: "fee per extra hour" }, { key: "M", value: 15, min: 1, max: 60, step: 1, cls: "c4", label: "daily maximum" }
  ], (key, v) => {
    if (key === "b1" && v > S.b2 - 0.5) S.set("b1", S.b2 - 0.5); if (key === "b2" && v < S.b1 + 0.5) S.set("b2", S.b1 + 0.5);
    if (key === "pa" && v === 0) S.set("pa", 0.5); sync();
  });
  // pieces (numbers and exact Q)
  const fs = [x => S.m1 * x + S.q1, x => (S.a2 * x + S.m2) * x + S.q2, x => S.m3 * x + S.q3];
  const fq = [x => Q.add(Q.mul(Q(S.m1), x), Q(S.q1)), x => MR.Poly.eval(MR.Poly([S.q2, S.m2, S.a2]), x), x => Q.add(Q.mul(Q(S.m3), x), Q(S.q3))];
  const which = x => (x < S.b1 || (x === S.b1 && own[0] === "L") ? 0 : x < S.b2 || (x === S.b2 && own[1] === "L") ? 1 : 2);
  const pw = x => fs[which(x)](x);
  // parabola for |f| and f(|x|)
  const g = x => S.pa * (x - S.ph) ** 2 + S.pk, gq = x => Q.add(Q.mul(Q(S.pa), Q.pow(Q.sub(Q(x), Q(S.ph)), 2)), Q(S.pk));
  const gT = (v = "<i>x</i>") => `${S.html("pa")}(${v} ${S.html("ph")})<sup>2</sup>${S.term("pk")}`;
  // parking fee step function
  const cost = t => (t <= 0 ? NaN : Math.min(S.F1 + S.R * (Math.ceil(t - 1e-9) - 1), S.M));
  const pts = [
    { x: -1, y: 0, fixY: true, snapX: 0.5, color: C.violet, name: "break point b₁" }, { x: 2, y: 0, fixY: true, snapX: 0.5, color: C.violet, name: "break point b₂" },
    { x: 1.5, y: 0, snap: 0.25, color: C.amber, name: "input a", on: x => cur()(x) },
    { x: 2, y: -4, snap: 0.5, color: C.amber, name: "vertex (h, k)", clamp: [-4, 4, -6, 6] }, { x: 3, y: -3, fixX: true, snapY: 0.5, color: C.pink, name: "point at x = h + 1 (sets a)", clamp: [-6, 6, -9, 9] }
  ];
  const cur = () => (mode === "steps" ? cost : pw);
  function sync(){ pts[0].x = S.b1; pts[1].x = S.b2; pts[3].x = S.ph; pts[3].y = S.pk; pts[4].x = S.ph + 1; pts[4].y = S.pk + S.pa; }
  const D = k.drag(c, () => P, pts, (i, p) => {
    if (!moved) { moved = true; k.hint(""); }
    if (i === 0) S.set("b1", Math.min(p.x, S.b2 - 0.5)); if (i === 1) S.set("b2", Math.max(p.x, S.b1 + 0.5));
    if (i === 3) { S.set("ph", p.x); S.set("pk", p.y); } if (i === 4) S.set("pa", p.y - S.pk || (p.y >= S.pk ? 0.5 : -0.5));
    sync();
  }, { label: "Piecewise graph" });
  function setMode(m){ mode = m; k.showGroup(m); const on = m === "pieces" ? [0, 1, 2] : m === "abs" ? [3, 4] : [2]; pts.forEach((p, i) => p.off = !on.includes(i));
    pts[2].clamp = m === "steps" ? [0.25, 10, -1e9, 1e9] : [-6, 6, -1e9, 1e9]; pts[2].x = m === "steps" ? 3.25 : 1.5; sync(); k.guard([]); lastH = "";
    moved = false; k.hint(m === "pieces" ? "Drag the violet break points or the amber input; click a ≤ or < to switch it" : m === "abs" ? "Drag the vertex or the pink point" : "Drag the amber point along the steps"); }
  k.group("abs", () => k.select("Graph", [["abs", "y = |f(x)|"], ["fabs", "y = f(|x|)"]], show, v => show = v));
  k.modes([["pieces", "Pieces"], ["abs", "|f| and f(|x|)"], ["steps", "Steps"]], mode, setMode);
  setMode("pieces");
  dom.addEventListener("click", e => { const b = e.target.closest("[data-own]"); if (!b) return; const i = +b.dataset.own; own[i] = own[i] === "L" ? "R" : "L"; lastH = ""; });
  const rel = (i, side) => `<button class="rel" data-own="${i}" aria-label="switch which piece owns break point ${i + 1}">${(own[i] === "L") === (side === "L") ? "≤" : "&lt;"}</button>`;
  const brk = i => { const b = Q(i ? S.b2 : S.b1), l = fq[i](b), r = fq[i + 1](b), bt = qT(b), lo = own[i] === "L";
    return Q.eq(l, r) ? `<span class="c4"><i>x</i> = ${bt}</span>: pieces meet at (${bt}, ${qT(l)})` : `<span class="c4"><i>x</i> = ${bt}</span>: jump from ${qT(l)} ${lo ? "●" : "○"} to ${qT(r)} ${lo ? "○" : "●"}`; };
  const dots = (P, x, yv, closed, col) => { if (closed) P.dot(x, yv, col, 4.5); else opendot(k, c, P, x, yv, col); };

  k.loop(() => {
    c.begin(); const wide = c.w > 560, lab = [];
    const pad = k.split(c, dom, { side: "left", frac: 0.4, hfrac: mode === "abs" ? 0.001 : 0.42, off: mode === "abs" });
    if (mode === "pieces") {
      const h = `<div class="hd">the function</div><table><tr><td class="c2">${S.term("m1", { v: "<i>x</i>", first: true })}${S.term("q1")}</td><td>if <i>x</i> ${rel(0, "L")} ${S.html("b1")}</td></tr><tr><td class="c3">${S.term("a2", { v: "<i>x</i><sup>2</sup>", first: true })}${S.term("m2", { v: "<i>x</i>" })}${S.term("q2")}</td><td>if ${S.html("b1")} ${rel(0, "R")} <i>x</i> ${rel(1, "L")} ${S.html("b2")}</td></tr><tr><td class="c2">${S.term("m3", { v: "<i>x</i>", first: true })}${S.term("q3")}</td><td>if <i>x</i> ${rel(1, "R")} ${S.html("b2")}</td></tr></table><div class="hd">break points</div><div class="m">${brk(0)}</div><div class="m">${brk(1)}</div>`;
      if (h !== lastH) { dom.innerHTML = h; lastH = h; }
      const xs = [-6, S.b1, S.b2, 6, pts[2].x].flatMap(x => [fs[0](Math.min(x, S.b1)), fs[1](Math.max(S.b1, Math.min(x, S.b2))), fs[2](Math.max(x, S.b2))]);
      const yr = yWin(xs, 6, 14);
      P = k.plane(c, { xmin: wide ? -6 : -5, xmax: wide ? 6 : 5, ymin: yr.ymin, ymax: yr.ymax, xlabel: "x", ylabel: "y", pad });
      P.grid(); P.axes();
      [S.b1, S.b2].forEach(b => P.seg(b, P.ymin, b, P.ymax, k.alpha(C.violet, 0.35), 1.5, [5, 5]));
      P.curve(fs[0], C.cyan, { to: S.b1, w: 3 }); P.curve(fs[1], C.pink, { from: S.b1, to: S.b2, w: 3 }); P.curve(fs[2], C.cyan, { from: S.b2, w: 3 });
      dots(P, S.b1, fs[0](S.b1), own[0] === "L", C.cyan); dots(P, S.b1, fs[1](S.b1), own[0] === "R", C.pink);
      dots(P, S.b2, fs[1](S.b2), own[1] === "L", C.pink); dots(P, S.b2, fs[2](S.b2), own[1] === "R", C.cyan);
    } else if (mode === "steps") {
      const h = `<div class="hd">rate table</div><table><tr><td>first hour or part</td><td>$${S.html("F1")}</td></tr><tr><td>each extra hour or part</td><td>$${S.html("R")}</td></tr><tr><td>daily maximum</td><td>$${S.html("M")}</td></tr></table><div class="hd">cost by hours started</div><table>${(wide ? [1, 2, 3, 4, 5, 6, 7, 8] : [1, 2, 3, 4, 5, 6]).map(n => `<tr${n === Math.ceil(pts[2].x - 1e-9) ? ' class="on"' : ""}><td>${n - 1} &lt; <i>t</i> ≤ ${n}</td><td class="${n % 2 ? "c2" : "c3"}">$${MR.fmtN(cost(n))}</td></tr>`).join("")}</table>`;
      if (h !== lastH) { dom.innerHTML = h; lastH = h; }
      P = k.plane(c, { xmin: 0, xmax: 10.5, ymin: 0, ymax: Math.max(cost(10), 4) * 1.18 + 1, xlabel: "t (h)", ylabel: "$", pad });
      P.grid(); P.axes();
      P.seg(0, S.M, 10.5, S.M, k.alpha(C.violet, 0.5), 1.5, [6, 5]);
      for (let n = 1; n <= 10; n++) { const v = cost(n), col = n % 2 ? C.cyan : C.pink; P.seg(n - 1, v, n, v, col, 3); opendot(k, c, P, n - 1, v, col); P.dot(n, v, col, 4.5); }
      lab.push({ text: "daily max", x: 9.5, y: S.M, color: C.violet, font: `12px ${F.ui}` });
    } else {
      const yr = yWin([g(S.ph), g(S.ph - 3), g(S.ph + 3), g(0), -g(S.ph), S.pk + S.pa], 6, 12);
      P = k.plane(c, { xmin: wide ? -7 : -5, xmax: wide ? 7 : 5, ymin: yr.ymin, ymax: yr.ymax, xlabel: "x", ylabel: "y", pad });
      P.grid(); P.axes();
      P.curve(g, k.alpha(C.text, 0.5), { dash: [6, 5], w: 1.8 });
      if (show === "abs") { P.curve(x => Math.abs(g(x)), C.pink, { w: 3 }); }
      else { P.seg(0, P.ymin, 0, P.ymax, k.alpha(C.violet, 0.45), 1.5, [5, 5]); P.curve(x => g(Math.abs(x)), C.cyan, { w: 3 }); }
      const r = -S.pk / S.pa; if (r > 0) [-1, 1].forEach(s => P.dot(S.ph + s * Math.sqrt(r), 0, C.violet, 5));
      lab.push({ text: "f", x: S.ph + 2.2, y: g(S.ph + 2.2), color: C.muted, font: `italic 15px ${F.math}` });
    }
    if (mode !== "abs") { const a = pts[2].x, v = cur()(a); pts[2].y = v; P.seg(a, 0, a, v, k.alpha(C.amber, 0.6), 1.5, [3, 4]); P.seg(P.xmin, v, a, v, k.alpha(C.green, 0.6), 1.5, [3, 4]); }
    D.draw(P); P.labels(lab);

    if (mode === "pieces") {
      const a = pts[2].x, i = which(a), aq = Q(a), at = qT(aq), v = qT(fq[i](aq)), onB = a === S.b1 || a === S.b2;
      const ivT = [`<i>x</i> ${own[0] === "L" ? "≤" : "&lt;"} ${qT(Q(S.b1))}`, `${qT(Q(S.b1))} ${own[0] === "R" ? "≤" : "&lt;"} <i>x</i> ${own[1] === "L" ? "≤" : "&lt;"} ${qT(Q(S.b2))}`, `<i>x</i> ${own[1] === "R" ? "≥" : "&gt;"} ${qT(Q(S.b2))}`][i];
      k.eqline(`<span class="c5"><i>f</i>(<span class="c1">${at}</span>) = ${v}</span>`, "value");
      k.readout({ title: "Evaluate", rows: [{ lhs: `<span class="c1"><i>a</i> = ${at}</span> lies in piece ${i + 1}: ${ivT}` }, { lhs: `<span class="c5"><i>f</i>(${at}) = ${v}</span>`, lbl: `use only formula ${i + 1}` }],
        landmark: { hit: onB, big: onB ? `<span class="c5"><i>f</i>(${at}) = ${v}</span>` : "On a break point?", note: onB ? `The break point belongs to piece ${i + 1}: its dot is closed.` : "Slide a onto a violet break point to see which piece owns it." },
        narr: "Click a ≤ or < in the definition to hand a break point to the other piece. Make the pieces meet to remove a jump." });
    } else if (mode === "steps") {
      const t = pts[2].x, n = Math.ceil(t - 1e-9), raw = S.F1 + S.R * (n - 1), capN = S.R > 0 ? Math.max(1, Math.ceil((S.M - S.F1) / S.R + 1 - 1e-9)) : null;
      k.eqline(`<i>C</i>(<i>t</i>) = min(${S.html("F1")} + ${S.html("R")}(⌈<i>t</i>⌉ − 1), ${S.html("M")})`, "fee");
      k.readout({ title: "Parking fee", rows: [{ lhs: `<span class="c1"><i>t</i> = ${MR.fmtN(t)}</span> h`, lbl: `hours started ⌈t⌉ = ${n}` },
        { lhs: `${MR.fmtN(S.F1)} + ${MR.fmtN(S.R)} · ${n - 1} = ${MR.fmtN(raw)}`, lbl: raw > S.M ? "over the cap" : "" }, { lhs: `<span class="c5"><i>C</i>(${MR.fmtN(t)}) = $${MR.fmtN(cost(t))}</span>` }],
        landmark: { hit: raw >= S.M, big: capN && S.F1 < S.M ? `cap from hour ${capN}` : S.F1 >= S.M ? "cap from the first hour" : "no cap reached", note: "Every step is closed on the right: 3 h exactly costs the same as 2 h 1 min." },
        narr: "Change the fees in the table or the equation; drag t across a whole hour and watch the jump." });
    } else {
      const a = Q(S.pa), hq = Q(S.ph), kq = Q(S.pk), r = Q.div(Q.neg(kq), a), rv = Q.val(r), f0 = gq(0);
      k.eqline(`<span class="c3"><i>f</i>(<i>x</i>) = ${gT()}</span>`, "parabola");
      let rows, lm;
      if (show === "abs") {
        const sq = rv > 0 ? MR.sqrtQ(r) : null, r1 = sq ? rootT(hq, sq.s, sq.t, -1) : "", r2 = sq ? rootT(hq, sq.s, sq.t, 1) : "";
        const neg = rv > 0 ? (S.pa > 0 ? `(${r1}, ${r2})` : `(${MI}${INF}, ${r1}) ∪ (${r2}, ${INF})`) : (S.pa < 0 && rv < 0 ? "ℝ" : "nowhere");
        rows = [{ lhs: rv > 0 ? `<span class="c4">zeros ${r1}, ${r2}</span>` : rv === 0 ? `<span class="c4">one zero, ${qT(hq)} (a touch)</span>` : "no zeros", lbl: "where f changes sign" },
          { lhs: `|<i>f</i>(<i>x</i>)| = −<i>f</i>(<i>x</i>) on ${neg}`, lbl: "the reflected part" }, { lhs: "|<i>f</i>(<i>x</i>)| = <i>f</i>(<i>x</i>) elsewhere" }];
        lm = { hit: neg !== "nowhere", big: S.pa * S.pk < 0 ? `vertex (${qT(hq)}, ${qT(kq)}) → (${qT(hq)}, ${qT(Q.abs(kq))})` : "nothing to reflect at the vertex", note: "Outputs below the x-axis flip up; the inputs do not change." };
      } else {
        rows = [{ lhs: `<i>x</i> ≥ 0: <i>f</i>(<i>x</i>)`, lbl: "right half kept" }, { lhs: `<i>x</i> &lt; 0: <i>f</i>(−<i>x</i>) = ${MR.fmtN(S.pa)}(<i>x</i> ${sg(S.ph)})<sup>2</sup> ${sg(S.pk)}`, lbl: "its mirror image" },
          { lhs: S.ph > 0 ? `turning points (±${qT(hq)}, ${qT(kq)}), corner (0, ${qT(f0)})` : S.ph < 0 ? `one turning point, the corner (0, ${qT(f0)})` : `vertex (0, ${qT(kq)})` }];
        lm = { hit: true, big: "f(|x|) is even", note: "f(|−x|) = f(|x|): the left half is the mirror of the right half." };
      }
      k.readout({ title: show === "abs" ? "Reflect the outputs" : "Mirror the inputs", rows, landmark: lm, narr: "Drag the vertex, or the pink point above x = h + 1 to change a." });
    }
  });
};

/* ================= pc-function-behavior ================= */
L["pc-function-behavior"] = k => {
  MathKit.attach(k);
  const { C, F } = k, MR = k.MR, Q = MR.Q, qT = MR.qT, c = k.canvas();
  let mode = "secant", P = null, moved = false, picked = null, opts = [], btns = [];
  const view = { ymin: -4, ymax: 4 };
  const S = k.vars([
    { key: "A", value: 1, min: -3, max: 3, step: 0.5, cls: "c3", label: "coefficient of x cubed", px: 10 },
    { key: "B", value: 0, min: -9, max: 9, step: 0.5, cls: "c3", label: "coefficient of x squared", px: 8 },
    { key: "C", value: -3, min: -27, max: 27, step: 0.5, cls: "c3", label: "coefficient of x", px: 6 },
    { key: "D", value: 0, min: -10, max: 10, step: 0.5, cls: "c3", label: "constant term", px: 8 },
    { key: "a", value: 0, min: -4, max: 4, step: 0.5, cls: "c1", label: "a" }, { key: "b", value: 2, min: -4, max: 4, step: 0.5, cls: "c2", label: "b" }
  ], () => { picked = null; sync(); });
  const poly = () => MR.Poly([S.D, S.C, S.B, S.A]), f = x => ((S.A * x + S.B) * x + S.C) * x + S.D, fq = x => MR.Poly.eval(poly(), Q(x));
  // turning points (exact text) → intervals of increase/decrease
  function behaviour(){
    let crit = [];
    if (S.A !== 0) { const r = MR.quadRoots(3 * S.A, 2 * S.B, S.C); if (r.kind === "two rational") crit = r.exact.map(q => ({ x: Q.val(q), q, t: qT(q) })); else if (r.kind === "two irrational") crit = [-1, 1].map(sn => ({ x: Q.val(r.p) + sn * Q.val(r.s) * Math.sqrt(r.t), q: null, t: rootT(r.p, r.s, r.t, sn) })); }
    else if (S.B !== 0) { const q = Q.div(Q(-S.C), Q(2 * S.B)); crit = [{ x: Q.val(q), q, t: qT(q) }]; }
    const d = x => (3 * S.A * x + 2 * S.B) * x + S.C, cuts = [null, ...crit, null], ivs = [];
    for (let i = 0; i < cuts.length - 1; i++) { const lo = cuts[i], hi = cuts[i + 1], tx = lo && hi ? (lo.x + hi.x) / 2 : lo ? lo.x + 1 : hi ? hi.x - 1 : 0, dv = d(tx); ivs.push({ lo, hi, dir: dv > 0 ? "inc" : dv < 0 ? "dec" : "const" }); }
    const ext = crit.map((cp, i) => ({ ...cp, kind: ivs[i].dir === "inc" ? "max" : "min", y: cp.q ? qT(fq(cp.q)) : "≈ " + MR.fmtN(+f(cp.x).toFixed(3)) }));
    const T = ivs.filter(v => v.dir === "inc").map(v => ({ lo: v.lo && v.lo.t, hi: v.hi && v.hi.t })), Dn = ivs.filter(v => v.dir === "dec").map(v => ({ lo: v.lo && v.lo.t, hi: v.hi && v.hi.t }));
    return { crit, ivs, ext, inc: ivUnion(T, t => t), dec: ivUnion(Dn, t => t) };
  }
  const pts = [
    { x: 0, y: 0, snap: 0.5, color: C.amber, name: "point A at x = a", on: f, clamp: [-4, 4, -1e9, 1e9] }, { x: 2, y: 0, snap: 0.5, color: C.cyan, name: "point B at x = b", on: f, clamp: [-4, 4, -1e9, 1e9] },
    { x: 0.5, y: 0, snap: 0.25, color: C.amber, name: "trace point", on: f, clamp: [-4, 4, -1e9, 1e9] }
  ];
  function sync(){ pts[0].x = S.a; pts[1].x = S.b; pts.forEach(p => p.y = f(p.x)); if (mode === "turn") setOpts(); }
  const D = k.drag(c, () => P, pts, (i, p) => { if (!moved) { moved = true; k.hint(""); } if (i === 0) S.set("a", p.x); if (i === 1) S.set("b", p.x); }, { label: "Cubic graph" });
  function setOpts(){
    const B = behaviour(), ex = B.ext.filter(e => e.q).sort((u, v) => f(u.x) - f(v.x));
    const decoy = ex.length === 2 ? `(${ex[0].y}, ${ex[1].y})` : `(0, ${INF})`;
    const cand = [B.inc, B.dec === "∅" ? "nowhere" : B.dec, decoy, `(${MI}${INF}, ${INF})`, "(0, ∞)"].map(v => v === "∅" ? "nowhere" : v);
    const set = [...new Set(cand)].slice(0, 3); opts = k.shuffle(set);
    btns.forEach((b, i) => { b.textContent = opts[i] || ""; b.style.display = opts[i] ? "" : "none"; b.disabled = false; });
    k.guard(picked ? [] : [B.inc === "∅" ? "nowhere" : B.inc]);
  }
  function newFn(){
    const r = n => Math.floor(Math.random() * n), A = [1, -1][r(2)]; let p0 = r(6) - 3, q0 = r(6) - 3; if (p0 === q0) q0 = p0 + 1 + r(2);
    S.set("A", A); S.set("B", -1.5 * A * (p0 + q0)); S.set("C", 3 * A * p0 * q0); S.set("D", r(5) - 2); picked = null; sync();
  }
  k.group("turn", () => { btns = [0, 1, 2].map(i => k.button("", () => { if (picked) return; picked = opts[i]; btns.forEach(b => b.disabled = true); k.guard([]); }, "btn ghost")); k.button("New function", newFn, "btn-s"); });
  function setMode(m){ mode = m; picked = null; k.showGroup(m); moved = false; k.hint(m === "secant" ? "Drag A and B along the curve" : "Drag the amber point along the curve"); if (m === "turn") newFn(); else { k.guard([]); sync(); } }
  k.modes([["secant", "Secant"], ["behave", "Behaviour"], ["turn", "Your turn"]], mode, setMode);
  setMode("secant");

  k.loop(dt => {
    c.begin(); const wide = c.w > 560, B = behaviour(), xr = wide ? 4.5 : 4;
    const cx = B.crit.map(cp => cp.x), ys = mode === "secant" ? [f(S.a), f(S.b), f(0)] : cx.length ? [f(pts[2].x), f(0), f(Math.min(...cx) - 1), f(Math.max(...cx) + 1)] : [f(pts[2].x), f(-2), f(2)];
    k.smooth(view, yWin([...ys, ...B.crit.map(cp => f(cp.x))], 6, 40), dt);
    P = k.plane(c, { xmin: -xr, xmax: xr, ymin: view.ymin, ymax: view.ymax, xlabel: "x", ylabel: "y" });
    P.grid(); P.axes(); pts.forEach(p => p.off = mode === "secant" ? p === pts[2] : p !== pts[2]); pts.forEach(p => p.y = f(p.x));
    const lab = [], hide = mode === "turn" && !picked;
    if (mode === "secant") {
      const a = S.a, b = S.b, fa = f(a), fb = f(b);
      if (a !== b) { const m = (fb - fa) / (b - a); P.seg(-xr, fa + m * (-xr - a), xr, fa + m * (xr - a), C.violet, 2); }
      P.curve(f, C.pink, { w: 3 });
      P.seg(a, fa, b, fa, k.alpha(C.amber, 0.8), 1.8, [5, 4]); P.seg(b, fa, b, fb, k.alpha(C.cyan, 0.8), 1.8, [5, 4]);
      lab.push({ text: `Δx = ${qT(Q(b - a))}`, x: (a + b) / 2, y: fa, color: C.amber, font: `13px ${F.math}`, prefer: "s" }, { text: `Δy = ${qT(Q.sub(fq(b), fq(a)))}`, x: b, y: (fa + fb) / 2, color: C.cyan, font: `13px ${F.math}`, prefer: "e" },
        { text: "A", x: a, y: fa, color: C.amber, font: `italic 15px ${F.math}`, prefer: "nw" }, { text: "B", x: b, y: fb, color: C.cyan, font: `italic 15px ${F.math}`, prefer: "ne" });
    } else {
      const x0 = pts[2].x, iv = B.ivs.find(v => (!v.lo || x0 >= v.lo.x) && (!v.hi || x0 <= v.hi.x));
      if (iv && !hide) { const lo = iv.lo ? iv.lo.x : -xr, hi = iv.hi ? iv.hi.x : xr; P.curve(f, k.alpha(C.amber, 0.35), { from: lo, to: hi, w: 9 }); P.seg(lo, 0, hi, 0, k.alpha(C.amber, 0.7), 5); }
      P.curve(f, C.pink, { w: 3 });
      B.ext.forEach(e => { P.dot(e.x, f(e.x), C.green, 5.5); if (!hide) lab.push({ text: `${e.kind} (${e.t}, ${e.y})`, x: e.x, y: f(e.x), color: C.green, font: `12px ${F.math}`, prefer: e.kind === "max" ? "n" : "s" }); });
    }
    D.draw(P); P.labels(lab);

    const eq = `<span class="c3"><i>f</i>(<i>x</i>) = ${S.term("A", { v: "<i>x</i><sup>3</sup>", first: true })}${S.term("B", { v: "<i>x</i><sup>2</sup>" })}${S.term("C", { v: "<i>x</i>" })}${S.term("D")}</span>`;
    if (mode === "secant") {
      k.eqline(`${eq} &nbsp;on&nbsp; [${S.html("a")}, ${S.html("b")}]`, "secant");
      const a = Q(S.a), b = Q(S.b), fa = fq(S.a), fb = fq(S.b), same = S.a === S.b, rate = same ? null : MR.avgRate(poly(), a, b);
      k.readout({ title: "Average rate of change", rows: [
        { lhs: `<span class="c1"><i>f</i>(${qT(a)}) = ${qT(fa)}</span>, &nbsp;<span class="c2"><i>f</i>(${qT(b)}) = ${qT(fb)}</span>` },
        { lhs: same ? "b = a: no secant" : `<span class="c5">Δ<i>y</i>/Δ<i>x</i> = (${qT(fb)} − ${par(qT(fa))})/(${qT(b)} − ${par(qT(a))}) = ${qT(rate)}</span>`, lbl: "slope of the secant" }],
        landmark: { hit: !!rate && rate.n === 0, big: same ? "pick two inputs" : `<span class="c5">rate ${qT(rate)}</span>`, note: !rate ? "" : rate.n === 0 ? "f(a) = f(b): a horizontal secant" : rate.n > 0 ? "f rose overall between a and b" : "f fell overall between a and b" },
        narr: "Drag B toward A: the secant turns into the tangent and the rate settles on the slope at A." });
    } else {
      k.eqline(eq, mode === "turn" ? "your turn" : "behaviour");
      const x0 = pts[2].x, iv = B.ivs.find(v => (!v.lo || x0 >= v.lo.x) && (!v.hi || x0 <= v.hi.x)), cc = 6 * S.A * x0 + 2 * S.B, onCrit = B.crit.some(cp => Math.abs(cp.x - x0) < 1e-9);
      const here = onCrit ? "a turning point" : iv.dir === "inc" ? "increasing" : iv.dir === "dec" ? "decreasing" : "constant";
      const rows = [{ lhs: `<span class="c1"><i>x</i> = ${qT(Q(x0))}</span>: ${hide ? "rising or falling?" : here}${cc > 0 ? ", concave up" : cc < 0 ? ", concave down" : ""}` }];
      if (!hide) rows.push({ lhs: `increasing on ${B.inc === "∅" ? "no interval" : B.inc}` }, { lhs: `decreasing on ${B.dec === "∅" ? "no interval" : B.dec}` },
        { lhs: B.ext.length ? B.ext.map(e => `local ${e.kind} ${e.y} at <i>x</i> = ${e.t}`).join("; ") : "no turning points", lbl: S.A === 0 && S.B !== 0 ? "a parabola: this extreme is absolute" : S.A !== 0 ? "a cubic has no absolute extremes" : "" });
      const right = picked && picked === (B.inc === "∅" ? "nowhere" : B.inc);
      k.readout({ title: mode === "turn" ? "Where is f increasing?" : "Behaviour", rows,
        landmark: hide ? { hit: false, big: "?", note: "Pick the set of x-values below." } : picked ? { hit: right, big: right ? "Right" : "Not quite", note: `f increases on ${B.inc === "∅" ? "no interval" : B.inc}; intervals use x-values.` } : { hit: onCrit, big: onCrit ? "turning point" : here, note: "The amber band is the interval the trace point is on." },
        narr: mode === "turn" ? "You may change the numbers first; the choices follow." : "Scrub the coefficients: the turning points and intervals move with them." });
    }
  });
};
})();
