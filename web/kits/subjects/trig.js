/* ============ Subject kit: Trigonometry (loads after subjects/math.js; extends MathRules and MathKit) ============
   1. MathRules (DOM-free, tested in tests/trig.test.js): angles as exact multiples of π (Q), degrees/DMS, quadrants,
      reference angles, exact values of all six functions at multiples of π/12, solving fn(B(x − C)) = k on an interval,
      triangle solving (SSS, SAS, ASA/AAS, SSA with 0/1/2 solutions), areas, vectors, polar ↔ rectangular, complex polar
      form, De Moivre powers and nth roots; plus helpers moved from the trig labs (right-triangle ratios, SSA case text,
      asymptote text, cable tensions, exact cis text, the polar-graph families).
   2. MathKit.attach(k) also adds: P.piAxes, P.angleArc, P.vec, P.tri, k.fit, k.unitCircle, k.polarPlane (+ P.polarCurve, P.pp, P.ray).
   API summary: docs/subjects/MATH.md § Trigonometry. The unit circle and polar plane are math-only for now; they move
   to the categorical plane kit once a second subject needs them. */
(function(){
const W = window, MR = W.MathRules, { Q } = MR, MI = "−", PI = Math.PI;
const TAU = 2 * PI, D2R = PI / 180;

/* ---------- angles: an angle is a Q multiple of π (Q(5, 6) = 5π/6) ---------- */
const piQ = (rad, maxDen = 12) => { const t = rad / PI; for (let d = 1; d <= maxDen; d++) { const n = Math.round(t * d); if (Math.abs(t - n / d) < 1e-9) return Q(n, d); } return null; };
const degQ = deg => Q(deg).isQ ? Q.div(Q(deg), 180) : null;                  // 150 → 5/6 (π)
const qDeg = q => Q.val(Q.mul(q, 180));                                       // 5/6 → 150
const qRad = q => Q.val(q) * PI;
const normQ = q => { q = Q(q); const r = ((q.n % (2 * q.d)) + 2 * q.d) % (2 * q.d); return Q(r, q.d); };   // into [0, 2)
const normDeg = d => ((d % 360) + 360) % 360;
// quadrant of an angle (Q·π or degrees with {deg: true}): 1–4, or 0 for a quadrantal angle (then .axis says which)
function quadrant(a, o = {}){ const d = o.deg ? normDeg(a) : qDeg(normQ(a)); if (Math.abs(d % 90) < 1e-9 || Math.abs(d % 90 - 90) < 1e-9) return 0; return 1 + Math.floor(d / 90); }
const axisOf = (a, o = {}) => { const d = Math.round(o.deg ? normDeg(a) : qDeg(normQ(a))) % 360; return ({ 0: "+x", 90: "+y", 180: "−x", 270: "−y" })[d] || null; };
// reference angle: Q·π in → Q·π in [0, 1/2]; degrees in (o.deg) → degrees
function refAngle(a, o = {}){
  if (o.deg) { const d = normDeg(a); return d <= 90 ? d : d <= 180 ? 180 - d : d <= 270 ? d - 180 : 360 - d; }
  const t = normQ(a); if (!Q.lt(Q(1, 2), t)) return t; if (!Q.lt(Q(1), t)) return Q.sub(1, t); if (!Q.lt(Q(3, 2), t)) return Q.sub(t, 1); return Q.sub(2, t);
}
const coterminal = (a, k, o = {}) => (o.deg ? a + 360 * k : Q.add(a, 2 * k));
// degrees ↔ degrees-minutes-seconds (seconds rounded to `sd` decimals)
function dms(deg, sd = 0){ const s = deg < 0 ? -1 : 1; let t = Math.abs(deg), d = Math.floor(t), mf = (t - d) * 60, m = Math.floor(mf + 1e-9), sec = +((mf - m) * 60).toFixed(sd);
  if (sec >= 60) { sec = 0; m++; } if (m >= 60) { m = 0; d++; } return { sign: s, d, m, s: sec, text: `${s < 0 ? MI : ""}${d}° ${m}′ ${sec}″` }; }
const fromDms = (d, m = 0, s = 0) => (d < 0 ? -1 : 1) * (Math.abs(d) + m / 60 + s / 3600);
// π text/HTML: Q(5,6) → "5π/6", Q(-1,2) → "−π/2", Q(2) → "2π", Q(0) → "0"
function piT(q){ q = Q(q); if (q.n === 0) return "0"; const n = Math.abs(q.n), s = q.n < 0 ? MI : ""; return s + (n === 1 ? "" : n) + "π" + (q.d === 1 ? "" : "/" + q.d); }
function piH(q, cls = ""){ q = Q(q); const c = cls ? " " + cls : ""; if (q.n === 0) return `<span class="m${c}">0</span>`; const n = Math.abs(q.n), s = q.n < 0 ? MI : "", top = (n === 1 ? "" : n) + "π";
  return `<span class="m${c}">${s}${q.d === 1 ? top : `<span class="fr"><span>${top}</span><span>${q.d}</span></span>`}</span>`; }
const degT = d => String(+(+d).toFixed(4)).replace("-", MI) + "°";

/* ---------- exact values: Σ sᵢ√tᵢ (s rational, t squarefree) ---------- */
// first-quadrant magnitudes at r·π/12, r = 0…6; null = undefined
const R2 = (a, t) => [Q(a), t];
const TAB = {
  sin: [[], [R2(1/4, 6), R2(-1/4, 2)], [R2(1/2, 1)], [R2(1/2, 2)], [R2(1/2, 3)], [R2(1/4, 6), R2(1/4, 2)], [R2(1, 1)]],
  cos: null, tan: [[], [R2(2, 1), R2(-1, 3)], [R2(1/3, 3)], [R2(1, 1)], [R2(1, 3)], [R2(2, 1), R2(1, 3)], null],
  cot: null, csc: [null, [R2(1, 6), R2(1, 2)], [R2(2, 1)], [R2(1, 2)], [R2(2/3, 3)], [R2(1, 6), R2(-1, 2)], [R2(1, 1)]], sec: null };
TAB.cos = TAB.sin.slice().reverse(); TAB.cot = TAB.tan.slice().reverse(); TAB.sec = TAB.csc.slice().reverse();
const FN = { sin: Math.sin, cos: Math.cos, tan: Math.tan, csc: t => 1 / Math.sin(t), sec: t => 1 / Math.cos(t), cot: t => Math.cos(t) / Math.sin(t) };
const exVal = terms => terms.reduce((s, [a, t]) => s + Q.val(a) * Math.sqrt(t), 0);
function exStr(terms, html){
  if (!terms) return "undefined"; if (!terms.length) return html ? '<span class="m">0</span>' : "0";
  const den = terms.reduce((l, [a]) => MR.lcm(l, a.d), 1); let nums = terms.map(([a, t]) => [a.n * den / a.d, t]);
  // a positive term first ("√2 − √6", "√3 − 2"); all negative and several terms → "−(…)"
  const allNeg = nums.length > 1 && nums.every(([n]) => n < 0); if (allNeg) nums = nums.map(([n, t]) => [-n, t]); else nums = nums.filter(([n]) => n > 0).concat(nums.filter(([n]) => n < 0));
  const r = t => (html ? `√<span class="mk-ol">${t}</span>` : "√" + t);
  const term = ([n, t], i) => { const s = n < 0 ? (i ? " " + MI + " " : MI) : (i ? " + " : ""), m = Math.abs(n); return s + (t === 1 ? String(m) : (m === 1 ? "" : m) + r(t)); };
  let top = nums.map(term).join(""); const neg = allNeg || (nums.length === 1 && nums[0][0] < 0);
  if (den === 1) { const tx = allNeg ? nums.map(([n, t]) => [-n, t]).map(term).join("") : top; return html ? `<span class="m">${tx}</span>` : tx; }
  if (neg && !allNeg) top = top.slice(1);
  if (html) return `<span class="m">${neg ? MI : ""}<span class="fr"><span>${top}</span><span>${den}</span></span></span>`;
  return (neg ? MI : "") + (nums.length > 1 ? "(" + top + ")" : top) + "/" + den;
}
// trigExact("sin", Q(5, 6)) → {terms, value: 0.5, text: "1/2", html}; at undefined points {undef: true, text: "undefined"}.
// Angle as Q·π, or degrees with {deg: true}. Returns null when the angle is not a multiple of π/12.
function trigExact(fn, a, o = {}){
  const q = o.deg ? degQ(a) : Q(a); if (!q || 12 % q.d) return null;
  const ref = refAngle(q), r = Q.val(Q.mul(ref, 12)), base = TAB[fn][Math.round(r)];
  if (base === null) return { undef: true, value: NaN, text: "undefined", html: '<span class="m">undefined</span>' };
  const num = FN[fn](qRad(q)), sgn = Math.abs(num) < 1e-9 ? 1 : Math.sign(num), terms = base.map(([s, t]) => [Q.mul(s, sgn), t]);
  return { terms, value: exVal(terms), text: exStr(terms), html: exStr(terms, true) };
}
// Find the angle(s) in [0, 2π) with fn = an exact value given as number: used to recognise "1/2", "√3/2" etc.
const exactOf = v => { for (const fn of ["sin", "tan"]) for (let r = 0; r <= 6; r++) { const t = TAB[fn][r]; if (t && Math.abs(Math.abs(v) - exVal(t)) < 1e-9) { const terms = t.map(([s, u]) => [Q.mul(s, v < 0 ? -1 : 1), u]); return { terms, text: exStr(terms), html: exStr(terms, true) }; } } return null; };

/* ---------- exact values from sides or a point (r may be a radical) ---------- */
const exObj = terms => ({ terms, value: exVal(terms), text: exStr(terms), html: exStr(terms, true) });
const UNDEF = { undef: true, value: NaN, text: "undefined", html: '<span class="m">undefined</span>' };
// √n2 as text: 41 → "√41", 8 → "2√2", 25 → "5"
const sideT = (n2, html) => { const [a, t] = MR.sqrtParts(n2); return exStr([[Q(a), t]], html); };
// ±√(P2 / Q2) rationalised (P2, Q2 rationals ≥ 0, Q2 > 0): sqrtRatio(9, 41) → 3√41/41
const sqrtRatio = (P2, Q2, sign = 1) => { const r = MR.sqrtQ(Q.div(Q(P2), Q(Q2))); return exObj(Q.val(r.s) === 0 ? [] : [[Q.mul(r.s, sign), r.t]]); };
// All six functions of the angle whose terminal side passes through (x, y) (integers or Q): r = √(x² + y²)
function sixFrom(x, y){ x = Q(x); y = Q(y); const r2 = Q.add(Q.mul(x, x), Q.mul(y, y)), sg = q => (q.n < 0 ? -1 : 1), sq = q => Q.mul(q, q);
  const rat = (num, den) => (den.n === 0 ? UNDEF : exObj(num.n === 0 ? [] : [[Q.div(num, den), 1]]));
  const over = (num, r) => (num.n === 0 ? exObj([]) : sqrtRatio(sq(num), r, sg(num)));       // num / r
  const rOver = num => (num.n === 0 ? UNDEF : sqrtRatio(r2, sq(num), sg(num)));             // r / num
  return { r2, r: { text: (() => { const t = MR.sqrtQ(r2); return exStr([[t.s, t.t]]); })(), value: Math.sqrt(Q.val(r2)) },
    sin: over(y, r2), cos: over(x, r2), tan: rat(y, x), csc: rOver(y), sec: rOver(x), cot: rat(x, y) }; }
// Exact terminal point of a multiple of π/12 on the unit circle: {x, y, text: "(−√3/2, 1/2)", html}
const ucPoint = q => { const x = trigExact("cos", q), y = trigExact("sin", q); if (!x) return null; return { x, y, text: `(${x.text}, ${y.text})`, html: `(${x.html}, ${y.html})` }; };

/* ---------- sinusoids and other trig graphs: y = A·fn(B(x − C)) + D ---------- */
const numT = (v, p = 3) => String(+(+v).toFixed(p)).replace("-", MI);
// x as "5π/6" when it is a multiple of π (denominator ≤ den), else a decimal
const piFmt = (x, den = 48) => { if (Math.abs(x) < 1e-12) return "0"; const q = piQ(x, den); return q ? piT(q) : numT(x); };
const sinusoid = (fn, A = 1, B = 1, C = 0, D = 0) => x => A * FN[fn](B * (x - C)) + D;
// equal (to 1e-6) at 401 points of [lo, hi], skipping points where either is undefined/huge
const sameCurve = (f, g, lo = -7, hi = 13) => { for (let i = 0; i <= 400; i++) { const x = lo + (hi - lo) * i / 400, a = f(x), b = g(x); if (!isFinite(a) || !isFinite(b) || Math.abs(a) > 1e6 || Math.abs(b) > 1e6) continue; if (Math.abs(a - b) > 1e-6) return false; } return true; };
// five key points of one period starting at x = C (sin, cos), or the three of tan/cot (−quarter, centre, +quarter)
const keyPts = (fn, A = 1, B = 1, C = 0, D = 0) => { const P = TAU / Math.abs(B);
  if (fn === "tan") { const p = PI / Math.abs(B); return [-1, 0, 1].map(s => ({ x: C + s * p / 4, y: D + A * s })); }
  if (fn === "cot") { const p = PI / Math.abs(B); return [1, 2, 3].map(i => ({ x: C + i * p / 4, y: D + A * (2 - i) })); }
  const h = fn === "cos" || fn === "sec" ? [1, 0, -1, 0, 1] : [0, 1, 0, -1, 0]; return h.map((v, i) => ({ x: C + i * P / 4, y: D + A * v })); };
const period = (fn, B = 1) => ((fn === "tan" || fn === "cot") ? PI : TAU) / Math.abs(B);
// vertical asymptotes of A·fn(B(x − C)) + D in [lo, hi] (tan, sec: cos = 0; cot, csc: sin = 0)
const asymptotes = (fn, B = 1, C = 0, lo = -10, hi = 10) => { if (fn === "sin" || fn === "cos" || !B || !isFinite(B)) return []; B = Math.abs(B); /* the set {off + nπ} is symmetric, so B < 0 gives the same lines as |B| */ const off = (fn === "tan" || fn === "sec") ? PI / 2 : 0, out = [];
  for (let n = Math.ceil((B * (lo - C) - off) / PI - 1e-9); ; n++) { const x = (off + n * PI) / B + C; if (x > hi + 1e-12) break; if (x >= lo - 1e-12) out.push(x); if (out.length > 400) break; } return out.sort((a, b) => a - b); };
// "y = 2 sin(3(x − π/4)) + 1" (factored B(x − C) form); o.html colours A c3, B c2, C c1, D c4
function sinEq(fn, A = 1, B = 1, C = 0, D = 0, o = {}){ const html = o.html, w = (s, cl) => (html ? `<span class="${cl}">${s}</span>` : s);
  const a = A === 1 ? "" : A === -1 ? MI : w(numT(A), "c3") + " ", bq = Q(B), b = B === 1 ? "" : w(bq.d === 1 ? String(bq.n).replace("-", MI) : `(${MR.qT(bq)})`, "c2");
  const x = html ? "<i>x</i>" : "x", inner = Math.abs(C) < 1e-12 ? x : `${x} ${C > 0 ? MI : "+"} ${w(piFmt(Math.abs(C)), "c1")}`;
  const arg = b && inner !== x ? `${b}(${inner})` : b + inner, d = Math.abs(D) < 1e-12 ? "" : ` ${D > 0 ? "+" : MI} ${w(numT(Math.abs(D)), "c4")}`;
  return `${html ? "<i>y</i>" : "y"} = ${a}${fn}(${arg})${d}`; }

/* ---------- equations: fn(B(x − C)) = k on [lo, hi) ---------- */
// Returns {base: [u in [0, 2π)], period (in x), sols: [{x, q (Q·π or null), u}], general: ["x = π/6 + 2πn", …] } or {none: true}
function trigSolve(fn, k, o = {}){
  const B = o.B || 1, C = o.C || 0, lo = o.lo ?? 0, hi = o.hi ?? TAU, P0 = (fn === "tan" || fn === "cot") ? PI : TAU;
  let kk = k; if (fn === "csc" || fn === "sec") { if (Math.abs(k) < 1) return { none: true, base: [], sols: [], general: [] }; kk = 1 / k; }
  if (fn === "cot") kk = Math.abs(k) < 1e-12 ? Infinity : 1 / k;
  const f0 = fn === "csc" ? "sin" : fn === "sec" ? "cos" : fn === "cot" ? "tan" : fn;
  if ((f0 === "sin" || f0 === "cos") && Math.abs(kk) > 1 + 1e-12) return { none: true, base: [], sols: [], general: [] };
  kk = Math.max(-1e15, Math.min(1e15, kk)); let us;
  if (f0 === "sin") { const a = Math.asin(Math.max(-1, Math.min(1, kk))); us = [a, PI - a]; }
  else if (f0 === "cos") { const a = Math.acos(Math.max(-1, Math.min(1, kk))); us = [a, TAU - a]; }
  else us = [kk === Infinity ? PI / 2 : Math.atan(kk)];
  const nrm = u => { let v = ((u % P0) + P0) % P0; if (P0 - v < 1e-12) v = 0; return v; };
  const base = [...new Set(us.map(u => +nrm(u).toFixed(12)))].sort((a, b) => a - b);
  const per = P0 / Math.abs(B), sols = [];
  for (const u of base) { const x0 = u / B + C; for (let n = Math.ceil((lo - x0) / per - 1e-9); x0 + n * per < hi - 1e-12; n++) { const x = x0 + n * per; if (x >= lo - 1e-12) sols.push({ x, q: piQ(x, 48), u: u + n * Math.abs(B) * per * Math.sign(B) }); } }
  sols.sort((a, b) => a.x - b.x);
  const perQ = piQ(per, 48), general = base.map(u => { const xq = piQ(u / B + C, 48); return "x = " + (xq ? piT(xq) : MR.fmtN(u / B + C, 4)) + " + " + (perQ ? (Q.eq(perQ, 1) ? "π" : piT(perQ)) : MR.fmtN(per, 4)) + "n"; });
  return { base, period: per, sols, general };
}

/* ---------- triangles (angles in degrees; sides a, b, c opposite A, B, C) ---------- */
const sinD = d => Math.sin(d * D2R), cosD = d => Math.cos(d * D2R), asinD = v => Math.asin(Math.max(-1, Math.min(1, v))) / D2R, acosD = v => Math.acos(Math.max(-1, Math.min(1, v))) / D2R;
const okTri = t => ["a", "b", "c", "A", "B", "C"].every(k => isFinite(t[k]) && t[k] > 1e-9) && Math.abs(t.A + t.B + t.C - 180) < 1e-6;
// solveTriangle({a: 7, b: 10, A: 40}) → {kind: "SSA", count, tris: [{a, b, c, A, B, C}], h (SSA only), note}
function solveTriangle(g){
  const S = ["a", "b", "c"].filter(k => g[k] != null), A = ["A", "B", "C"].filter(k => g[k] != null), up = s => s.toUpperCase(), lo = s => s.toLowerCase();
  const out = (kind, tris, extra = {}) => Object.assign({ kind, count: tris.filter(okTri).length, tris: tris.filter(okTri) }, extra);
  if (S.length + A.length < 3 || !S.length) return { kind: "AAA", count: Infinity, tris: [], note: "Angles alone fix the shape, not the size." };
  if (A.length >= 2) { // ASA / AAS
    const t = Object.assign({}, g); const miss = ["A", "B", "C"].find(k => t[k] == null); if (miss) t[miss] = 180 - ["A", "B", "C"].filter(k => k !== miss).reduce((s, k) => s + t[k], 0);
    if (t.A + t.B + t.C > 180 + 1e-9 || ["A", "B", "C"].some(k => t[k] <= 0)) return out("AAS", []);
    const s0 = S[0], ratio = t[s0] / sinD(t[up(s0)]); ["a", "b", "c"].forEach(s => { if (t[s] == null) t[s] = ratio * sinD(t[up(s)]); });
    const kind = S.length === 1 && A.length >= 2 && ["A", "B", "C"].filter(k => g[k] != null && k !== up(s0)).length === 2 && g[up(s0)] == null ? "ASA" : "AAS";
    return out(kind, [t]);
  }
  if (S.length === 3) { const t = Object.assign({}, g); const { a, b, c } = t;
    if (a + b <= c || a + c <= b || b + c <= a) return out("SSS", [], { note: "The sides fail the triangle inequality." });
    t.A = acosD((b * b + c * c - a * a) / (2 * b * c)); t.B = acosD((a * a + c * c - b * b) / (2 * a * c)); t.C = 180 - t.A - t.B; return out("SSS", [t]); }
  const ang = A[0], s1 = lo(ang);
  if (g[s1] == null) { // SAS: angle between the two given sides
    const [p, q] = S, t = Object.assign({}, g); t[s1] = Math.sqrt(t[p] ** 2 + t[q] ** 2 - 2 * t[p] * t[q] * cosD(t[ang]));
    t[up(p)] = acosD((t[q] ** 2 + t[s1] ** 2 - t[p] ** 2) / (2 * t[q] * t[s1])); t[up(q)] = 180 - t[ang] - t[up(p)]; return out("SAS", [t]); }
  // SSA: given angle X, its opposite side x and another side y
  const x = g[s1], ys = S.find(s => s !== s1), y = g[ys], X = g[ang], h = y * sinD(X), sY = y * sinD(X) / x, tris = [];
  const mk = Y => { const t = Object.assign({}, g); t[up(ys)] = Y; const zk = ["A", "B", "C"].find(k => k !== ang && k !== up(ys)); t[zk] = 180 - X - Y; t[lo(zk)] = x * sinD(t[zk]) / sinD(X); return t; };
  if (sY <= 1 + 1e-12) { const Y1 = asinD(sY); tris.push(mk(Y1)); if (Math.abs(sY - 1) > 1e-12 && 180 - Y1 + X < 180 - 1e-9) tris.push(mk(180 - Y1)); }
  return out("SSA", tris, { h, case: X >= 90 ? (x > y ? 1 : 0) : (x < h - 1e-12 ? 0 : Math.abs(x - h) < 1e-12 ? 1 : x >= y ? 1 : 2) });
}
// which law solves a case first: AAS/ASA/SSA → law of sines, SAS/SSS → law of cosines
const lawFor = kind => (kind === 'SAS' || kind === 'SSS' ? 'cosines' : kind === 'AAA' ? null : 'sines');
const heron = (a, b, c) => { const s = (a + b + c) / 2, v = s * (s - a) * (s - b) * (s - c); return v > 0 ? Math.sqrt(v) : 0; };
const triArea = (a, b, Cdeg) => 0.5 * a * b * sinD(Cdeg);

/* ---------- vectors [x, y] ---------- */
const V = {
  mag: v => Math.hypot(v[0], v[1]), dir: v => { if (!v[0] && !v[1]) return NaN; return normDeg(Math.atan2(v[1], v[0]) / D2R); },
  fromPolar: (m, deg) => [m * cosD(deg), m * sinD(deg)], add: (u, v) => [u[0] + v[0], u[1] + v[1]], sub: (u, v) => [u[0] - v[0], u[1] - v[1]],
  scale: (k, v) => [k * v[0], k * v[1]], dot: (u, v) => u[0] * v[0] + u[1] * v[1],
  angle: (u, v) => acosD(V.dot(u, v) / (V.mag(u) * V.mag(v))), unit: v => V.scale(1 / V.mag(v), v),
  comp: (u, v) => V.dot(u, v) / V.mag(v), proj: (u, v) => V.scale(V.dot(u, v) / V.dot(v, v), v),
  // naive tan⁻¹(y/x) in degrees, to show when it would be wrong (QII, QIII)
  naiveDir: v => Math.atan(v[1] / v[0]) / D2R,
  // bearing ↔ standard angle: "N 35° E" style is up to the lab; navigation bearing (clockwise from north) ↔ standard
  fromBearing: b => normDeg(90 - b), toBearing: d => normDeg(90 - d)
};

/* ---------- polar ---------- */
const toPolar = (x, y) => ({ r: Math.hypot(x, y), t: (Math.atan2(y, x) + TAU) % TAU });
const toRect = (r, t) => ({ x: r * Math.cos(t), y: r * Math.sin(t) });
// other names of the polar point (r, θ) with θ a Q·π: [(r, θ + 2πk), (−r, θ + π + 2πk)] for k in ks
const polarNames = (r, q, ks = [-1, 0, 1]) => ks.flatMap(k => [{ r, q: Q.add(q, 2 * k) }, { r: -r, q: Q.add(q, 2 * k + 1) }]);

/* ---------- complex numbers in polar form ---------- */
const C_ = {
  cis: (r, t) => ({ re: r * Math.cos(t), im: r * Math.sin(t) }), polar: z => toPolar(z.re, z.im),
  mul: (p, q) => ({ r: p.r * q.r, t: p.t + q.t }), div: (p, q) => ({ r: p.r / q.r, t: p.t - q.t }),
  pow: (p, n) => ({ r: Math.pow(p.r, n), t: p.t * n }),
  // n roots of r cis θ: r^(1/n) cis((θ + 2πk)/n); with θ as Q·π (o.q) the arguments are exact Q·π too
  roots: (r, t, n, q) => Array.from({ length: n }, (_, k) => ({ r: Math.pow(r, 1 / n), t: (t + TAU * k) / n, q: q != null ? Q.div(Q.add(q, 2 * k), n) : null }))
};
const cisT = (r, q, o = {}) => `${o.r || MR.fmtN(r, 4)}(cos ${piT(q)} + i sin ${piT(q)})`;

/* ---------- moved from the trig-b* labs (tested in tests/trig.test.js) ---------- */
// reduceDeg(θ) → {r, k}: the coterminal angle r in [0°, 360°) and the integer k with r = θ + 360k
const reduceDeg = th => { const r = +((((th % 360) + 360) % 360).toFixed(9)) % 360; return { r, k: Math.round((r - th) / 360) }; };
// Exact ratio √(P/Q2) of two sides given their squares (integers > 0), rationalised: ratioExact(9, 41) → {t: "3√41/41", v: 0.4685…}
function ratioExact(P, Q2){
  const r = MR.sqrtQ(Q(P, Q2)), s = r.s, t = r.t, v = Math.sqrt(P / Q2);
  if (t === 1) return { t: MR.qT(s), v };
  const num = (s.n === 1 ? "" : s.n) + "√" + t;
  return { t: s.d === 1 ? num : num + "/" + s.d, v };
}
// The six ratios of the acute angle whose opposite leg is o and adjacent leg a (integers), from the side squares:
// sixRatios(3, 4).sin → {num: "opp", den: "hyp", rawN: "3", rawD: "5", exact: "3/5", v: 0.6}; also hyp2, hypT
const RATIO = { sin: ["opp", "hyp"], cos: ["adj", "hyp"], tan: ["opp", "adj"], csc: ["hyp", "opp"], sec: ["hyp", "adj"], cot: ["adj", "opp"] };
function sixRatios(o, a){
  const sq = { opp: o * o, adj: a * a, hyp: o * o + a * a }, out = { hyp2: sq.hyp, hypT: sideT(sq.hyp) };
  for (const [fn, [n, d]] of Object.entries(RATIO)) { const ex = ratioExact(sq[n], sq[d]); out[fn] = { num: n, den: d, rawN: sideT(sq[n]), rawD: sideT(sq[d]), exact: ex.t, v: ex.v }; }
  return out;
}
// General vertical asymptote of A·fn(B(x − C)) + D as text (spacing π/|B|): asymGenT("tan", 2, 0) = "x = π/4 + nπ/2"
const asymGenT = (fn, B, C) => { const sp = Q.inv(Q(Math.abs(B))), x0 = asymptotes(fn, B, C, -1e-9, 40)[0], n = `${sp.n === 1 ? "" : sp.n}nπ${sp.d === 1 ? "" : "/" + sp.d}`;
  return Math.abs(x0) < 1e-9 ? `x = ${n}` : `x = ${piFmt(x0)} + ${n}`; };
// The other of sin/cos (fn names the one wanted) from an exact value v (Q) and the quadrant (1–4), by sin² + cos² = 1:
// a Q, or null unless 1 − v² is a rational square. otherSinCos(Q(3, 5), 2, "cos") = −4/5
function otherSinCos(v, quad, fn){ const r = MR.sqrtQ(Q.sub(1, Q.mul(v, v))); if (r.t !== 1) return null;
  const pos = fn === "cos" ? (quad === 1 || quad === 4) : (quad === 1 || quad === 2); return pos ? r.s : Q.neg(r.s); }
// Angle in radians as text: exact multiple of π (denominator ≤ 48) or 4 decimals
const angT = x => { const q = piQ(x, 48); return q ? piT(q) : x.toFixed(4); };
// Reference angle (radians) of fn x = k, and the quadrants where sin/cos/tan has the sign of k (SIGN_QUADS[fn][k > 0 ? 0 : 1])
const refOf = (fn, k) => fn === "sin" ? Math.asin(Math.min(1, Math.abs(k))) : fn === "cos" ? Math.acos(Math.min(1, Math.abs(k))) : Math.atan(Math.abs(k));
const SIGN_QUADS = { sin: ["I and II", "III and IV"], cos: ["I and IV", "II and III"], tan: ["I and III", "II and IV"] };
// SSA {A, a, b}: the case in words (by h = b sin A), with S = solveTriangle({A, a, b}): "h < a < b ⇒ 2 triangles" …
function ssaCase(g, S){
  if (g.A >= 90) return g.a > g.b ? "A ≥ 90°, a > b ⇒ 1 triangle" : "A ≥ 90°, a ≤ b ⇒ no triangle";
  if (S.count === 0) return "a < h ⇒ no triangle";
  if (Math.abs(g.a - S.h) < 1e-9) return "a = h ⇒ 1 right triangle";
  return S.count === 2 ? "h < a < b ⇒ 2 triangles" : "a ≥ b ⇒ 1 triangle";
}
// The correction tan⁻¹(b/a) needs to become the direction angle of ⟨a, b⟩: 0, 180 or 360 (degrees); null when a = 0
const dirFix = v => v[0] === 0 ? null : v[0] < 0 ? 180 : v[1] < 0 ? 360 : 0;
// Two cables at angles al, be (degrees above the horizontal, on either side) holding weight W: equilibrium tensions [T1, T2]
const tensions = (W, al, be) => { const r = PI / 180, s = Math.sin((al + be) * r); return [W * Math.cos(be * r) / s, W * Math.cos(al * r) / s]; };
// Exact terms of m·√s·fn(qπ) (m rational, s a positive integer), like terms merged; null if fn(qπ) is not exact here
function exTerms(fn, q, m, s = 1){ const e = trigExact(fn, q); if (!e || e.undef) return null; const out = [];
  e.terms.forEach(([a, t]) => { const [o, i] = MR.sqrtParts(t * s), v = Q.mul(a, Q.mul(Q(m), o)), f = out.find(u => u[1] === i); if (f) f[0] = Q.add(f[0], v); else out.push([v, i]); });
  return out.filter(([a]) => a.n !== 0); }
// a + bi text from exact term lists: exZStr([[−1, 3]], [[1, 1]]) → "−√3 + i"
function exZStr(re, im){ const val = ts => ts.reduce((s, [a, t]) => s + Q.val(a) * Math.sqrt(t), 0);
  if (!im.length) return exStr(re); const neg = val(im) < 0, at = exStr(neg ? im.map(([a, t]) => [Q.neg(a), t]) : im);
  const ip = at === "1" ? "i" : at.includes("/") ? `(${at})i` : at + "i"; return re.length ? `${exStr(re)} ${neg ? MI : "+"} ${ip}` : (neg ? MI : "") + ip; }
// r cis(qπ) with r = m√s in exact a + bi form (text), or null when qπ is not a multiple of π/12
const cisExact = (q, m, s = 1) => { const a = exTerms("cos", q, m, s), b = exTerms("sin", q, m, s); return a && b ? exZStr(a, b) : null; };
// Positive real nth root of an integer R as text: "2", "√2", "³√2"
const nthRootT = (R, n) => { const m = Math.round(Math.pow(R, 1 / n)); return Math.pow(m, n) === R ? String(m) : (n === 2 ? "" : MR.supT(n)) + "√" + R; };
// The polar families (OpenStax §10.4). polarFamily(id, a, b, n, fmt) → {eq, br: r(θ) branches, rb: branches for the rectangular
// graph (NaN where undefined), t1: one full trace from θ = 0, kind, sym, zeros, top: {r, at} | null, petals, ratio, note}.
// ids (POLAR_FAMILIES): o = circle, l = limaçon (+/−), r = rose, m = lemniscate, sp = spiral; second letter c/s = cos/sin.
const POLAR_FAMILIES = [["oc", "r = a cos θ"], ["os", "r = a sin θ"], ["lc+", "r = a + b cos θ"], ["lc-", "r = a − b cos θ"], ["ls+", "r = a + b sin θ"], ["ls-", "r = a − b sin θ"],
  ["rc", "r = a cos nθ"], ["rs", "r = a sin nθ"], ["mc", "r² = a² cos 2θ"], ["ms", "r² = a² sin 2θ"], ["sp", "r = aθ"]];
function polarFamily(id, a, b = 1, n = 2, fmt = String){
  const co = v => v === 1 ? "" : fmt(v) + " ", sg = id[2] === "-" ? -1 : 1, sn = id[1] === "s", fn = sn ? Math.sin : Math.cos, F = sn ? "sin" : "cos";
  const A3 = ["polar axis", "θ = π/2", "pole"], ax = sn ? ["θ = π/2"] : ["polar axis"], norm = t => ((t % TAU) + TAU) % TAU;
  const seq = (t0, st, t1) => { const o = []; for (let t = t0; t < t1 - 1e-9; t += st) o.push(t); return o; };
  if (id[0] === "o") return { eq: `r = ${co(a)}${F} θ`, br: [t => a * fn(t)], t1: PI, kind: `circle, diameter ${fmt(a)}`, sym: ax, zeros: [sn ? 0 : PI / 2], top: { r: a, at: [sn ? PI / 2 : 0] },
    note: `Centre ${sn ? `(0, ${fmt(a / 2)})` : `(${fmt(a / 2)}, 0)`} in x, y. One trace takes θ from 0 to π.` };
  if (id[0] === "l") { const q = a / b, v = -sg * q, z = [];
    if (q <= 1) { const u = sn ? Math.asin(v) : Math.acos(v); (sn ? [u, PI - u] : [u, TAU - u]).map(norm).forEach(t => { if (!z.some(w => Math.abs(w - t) < 1e-9)) z.push(t); }); z.sort((s, t) => s - t); }
    return { eq: `r = ${fmt(a)} ${sg > 0 ? "+" : MI} ${co(b)}${F} θ`, br: [t => a + sg * b * fn(t)], t1: TAU, ratio: q, sym: ax, zeros: z, top: { r: a + b, at: [norm((sn ? PI / 2 : 0) + (sg > 0 ? 0 : PI))] },
      kind: q < 1 ? "limaçon with an inner loop" : q === 1 ? "cardioid" : q < 2 ? "dimpled limaçon" : "convex limaçon",
      note: q < 1 ? "a/b < 1: r is negative for part of the turn, and those points form the inner loop." : q === 1 ? "a = b: r falls to 0 once, so the curve comes to a point at the pole."
        : q < 2 ? "1 < a/b < 2: r stays positive, but the curve bends inward where r is smallest." : "a/b ≥ 2: r stays far from 0 and the curve bulges outward everywhere." }; }
  if (id[0] === "r") { const t1 = n % 2 ? PI : TAU, p = n % 2 ? n : 2 * n;
    return { eq: `r = ${co(a)}${F} ${n}θ`, br: [t => a * fn(n * t)], t1, petals: p, kind: `rose, ${p} petals of length ${fmt(a)}`, sym: n % 2 ? ax : A3,
      zeros: seq(sn ? 0 : PI / (2 * n), PI / n, t1), top: { r: a, at: seq(sn ? PI / (2 * n) : 0, PI / n, t1) },
      note: n % 2 ? `n = ${n} is odd: ${n} petals, and θ from 0 to π traces the whole rose.` : `n = ${n} is even: 2n = ${p} petals, traced as θ runs from 0 to 2π.` }; }
  if (id[0] === "m") { const s = t => Math.sqrt(Math.max(0, fn(2 * t))), w = t => Math.sqrt(fn(2 * t));
    return { eq: `r² = ${fmt(a * a)} ${F} 2θ`, br: [t => a * s(t), t => -a * s(t)], rb: [t => a * w(t), t => -a * w(t)], t1: TAU, kind: "lemniscate", sym: sn ? ["pole"] : A3,
      zeros: seq(sn ? 0 : PI / 4, PI / 2, TAU), top: { r: a, at: sn ? [PI / 4, 5 * PI / 4] : [0, PI] }, note: `Points exist only where ${F} 2θ ≥ 0; there r = ±${fmt(a)}√(${F} 2θ).` }; }
  return { eq: `r = ${a === 1 ? "" : fmt(a)}θ`, br: [t => a * t], t1: 3 * PI, kind: "Archimedean spiral", sym: [], zeros: [0], top: null, note: `Each full turn adds 2π · ${fmt(a)} ≈ ${fmt(TAU * a, 2)} to r: the turns are evenly spaced.` };
}

Object.assign(MR, { piQ, degQ, qDeg, qRad, normQ, normDeg, quadrant, axisOf, refAngle, coterminal, dms, fromDms, piT, piH, degT,
  trigExact, exactOf, exStr, sideT, sqrtRatio, sixFrom, ucPoint, piFmt, sinusoid, sameCurve, keyPts, period, asymptotes, sinEq, trigSolve, solveTriangle, lawFor, heron, triArea, sinD, cosD, asinD, acosD, V, toPolar, toRect, polarNames, cplx: C_, cisT, TRIG_FN: FN,
  reduceDeg, ratioExact, RATIO_SIDES: RATIO, sixRatios, asymGenT, otherSinCos, angT, refOf, SIGN_QUADS, ssaCase, dirFix, tensions, exTerms, exZStr, cisExact, nthRootT, POLAR_FAMILIES, polarFamily });

/* ---------------- 2. drawing (needs a DOM) ---------------- */
if (!W.MathKit) return;
const attach0 = W.MathKit.attach;
W.MathKit.attach = k => {
  attach0(k); const { C, F } = k;
  const plane0 = k.plane;
  k.plane = (c, o = {}) => { const P = plane0(c, o), d = c.d, g = c.g;
    const rec = (px, py) => { if (px >= P.left && px <= P.left + P.width && py >= P.top && py <= P.top + P.height) P.pts.push([px, py]); };
    // Axes whose x ticks are multiples of π (o.xstep, default π/2) labelled "π/2", "π", … (y ticks numeric, o.ystep)
    P.piAxes = (opt = {}) => { P.axes(false); const sx = opt.xstep || o.xstep || PI / 2, sy = opt.ystep || o.ystep || MR.niceStep(P.ymax - P.ymin), tf = `12px ${F.math}`, nf = `11px ${F.mono}`;
      const ax = Math.min(Math.max(0, P.ymin), P.ymax), ay = Math.min(Math.max(0, P.xmin), P.xmax);
      for (let x = Math.ceil(P.xmin / sx - 1e-9) * sx; x <= P.xmax + 1e-9; x += sx) { if (Math.abs(x) < 1e-9) continue; const q = piQ(x, 48), s = q ? piT(q) : MR.fmtN(x, 2), w = d.width(s, tf), y = Math.min(P.top + P.height + 16, P.Y(ax) + 17);
        d.line(P.X(x), P.Y(ax) - 4, P.X(x), P.Y(ax) + 4, C.muted); d.text(s, P.X(x), y, { font: tf, color: C.faint, align: "center" }); P.boxes.push({ x: P.X(x) - w / 2 - 2, y: y - 12, w: w + 4, h: 16 }); }
      for (let y = Math.ceil(P.ymin / sy - 1e-9) * sy; y <= P.ymax + 1e-9; y += sy) { if (Math.abs(y) < 1e-9) continue; const s = MR.fmtN(y, 3), w = d.width(s, nf), xr = Math.max(P.left - 6, P.X(ay) - 7);
        d.line(P.X(ay) - 4, P.Y(y), P.X(ay) + 4, P.Y(y), C.muted); d.text(s, xr, P.Y(y), { font: nf, color: C.faint, align: "right", base: "middle" }); P.boxes.push({ x: xr - w - 2, y: P.Y(y) - 8, w: w + 4, h: 16 }); }
      const xl = opt.xlabel ?? o.xlabel, yl = opt.ylabel ?? o.ylabel, lf = `italic 14px ${F.math}`;
      if (xl) { const w = d.width(xl, lf); d.text(xl, P.left + P.width, P.Y(ax) - 8, { font: lf, color: C.muted, align: "right" }); P.boxes.push({ x: P.left + P.width - w - 2, y: P.Y(ax) - 24, w: w + 4, h: 19 }); }
      if (yl) { const w = d.width(yl, lf); d.text(yl, P.X(ay) + 8, P.top + 12, { font: lf, color: C.muted }); P.boxes.push({ x: P.X(ay) + 6, y: P.top - 3, w: w + 4, h: 19 }); } };
    // Angle arc at math point (x, y) from θ0 to θ1 (radians, counter-clockwise positive, may exceed 2π: drawn as a spiral),
    // radius rpx in pixels; opt {w, arrow: true, dash, fill}. Returns the math point at the arc's middle (a label anchor).
    P.angleArc = (x, y, rpx, t0, t1, color = C.amber, opt = {}) => { const cx = P.X(x), cy = P.Y(y), n = Math.max(8, Math.ceil(Math.abs(t1 - t0) * 24)), sp = opt.spiral ?? (Math.abs(t1 - t0) > TAU ? 3 : 0);
      const at = (i) => { const t = t0 + (t1 - t0) * i / n, r = rpx + sp * (t - t0) / TAU; return [cx + r * Math.cos(t), cy - r * Math.sin(t)]; };
      g.save(); if (opt.fill) { g.fillStyle = opt.fill; g.beginPath(); g.moveTo(cx, cy); for (let i = 0; i <= n; i++) g.lineTo(...at(i)); g.closePath(); g.fill(); }
      g.strokeStyle = color; g.lineWidth = opt.w || 2; if (opt.dash) g.setLineDash(opt.dash); g.beginPath(); for (let i = 0; i <= n; i++) { const [px, py] = at(i); i ? g.lineTo(px, py) : g.moveTo(px, py); if (i % 3 === 0) rec(px, py); } g.stroke(); g.restore();
      if (opt.arrow !== false && Math.abs(t1 - t0) > 0.15) { const [ex, ey] = at(n), [px, py] = at(n - 1), a = Math.atan2(ey - py, ex - px); g.save(); g.fillStyle = color; g.beginPath(); g.moveTo(ex, ey); g.lineTo(ex - 8 * Math.cos(a - .45), ey - 8 * Math.sin(a - .45)); g.lineTo(ex - 8 * Math.cos(a + .45), ey - 8 * Math.sin(a + .45)); g.closePath(); g.fill(); g.restore(); }
      const [mx, my] = at(n / 2); return P.inv(mx, my); };
    // Arrow from (x0, y0) to (x1, y1) in math coords; opt {w, dash, head: false}
    P.vec = (x0, y0, x1, y1, color = C.amber, opt = {}) => { const a = [P.X(x0), P.Y(y0)], b = [P.X(x1), P.Y(y1)]; if (Math.hypot(b[0] - a[0], b[1] - a[1]) < 1) return;
      if (opt.dash || opt.head === false) d.line(a[0], a[1], b[0], b[1], color, opt.w || 2.5, opt.dash); if (opt.head !== false) d.arrow(a[0], a[1], b[0], b[1], color, opt.w || 2.5);
      for (let i = 0; i <= 12; i++) rec(a[0] + (b[0] - a[0]) * i / 12, a[1] + (b[1] - a[1]) * i / 12); };
    // Triangle through math points A, B, C ([x, y] each); opt {colors: [cAB, cBC, cCA], fill, w, dash: [..]}. Sides recorded for labels.
    P.tri = (A, B, Cc, opt = {}) => { const cs = opt.colors || [C.muted, C.muted, C.muted];
      if (opt.fill) { g.save(); g.fillStyle = opt.fill; g.beginPath(); g.moveTo(P.X(A[0]), P.Y(A[1])); g.lineTo(P.X(B[0]), P.Y(B[1])); g.lineTo(P.X(Cc[0]), P.Y(Cc[1])); g.closePath(); g.fill(); g.restore(); }
      [[A, B], [B, Cc], [Cc, A]].forEach(([p, q], i) => P.seg(p[0], p[1], q[0], q[1], cs[i], opt.w || 2.5, opt.dash && opt.dash[i])); };
    // Interior angle at vertex V between the rays to p1 and p2 (math points), the short way; a right angle gets a square mark
    // when opt.right !== false. Returns the label anchor (math coords) just outside the arc.
    P.vertexArc = (V0, p1, p2, rpx = 26, color = C.amber, opt = {}) => { const a0 = Math.atan2(p1[1] - V0[1], p1[0] - V0[0]), a1 = Math.atan2(p2[1] - V0[1], p2[0] - V0[0]), dl = ((a1 - a0 + 3 * PI) % TAU) - PI;
      if (opt.right !== false && Math.abs(Math.abs(dl) - PI / 2) < 1e-6) { P.rightMark(V0, p1, p2, color, Math.min(14, rpx * .55)); }
      else P.angleArc(V0[0], V0[1], rpx, a0, a0 + dl, color, Object.assign({ arrow: false }, opt));
      const am = a0 + dl / 2, s = (P.X(1) - P.X(0)) || 1; return { x: V0[0] + (rpx + 12) / s * Math.cos(am), y: V0[1] + (rpx + 12) / s * Math.sin(am) }; };
    P.rightMark = (V0, p1, p2, color = C.muted, s = 10) => { const u = [P.X(p1[0]) - P.X(V0[0]), P.Y(p1[1]) - P.Y(V0[1])], v = [P.X(p2[0]) - P.X(V0[0]), P.Y(p2[1]) - P.Y(V0[1])], nu = Math.hypot(...u), nv = Math.hypot(...v); if (!nu || !nv) return;
      const o0 = [P.X(V0[0]), P.Y(V0[1])], a = [o0[0] + u[0] / nu * s, o0[1] + u[1] / nu * s], b = [o0[0] + v[0] / nv * s, o0[1] + v[1] / nv * s], m = [a[0] + v[0] / nv * s, a[1] + v[1] / nv * s];
      d.line(a[0], a[1], m[0], m[1], color, 1.5); d.line(b[0], b[1], m[0], m[1], color, 1.5); };
    return P; };
  // Window that fits math points with a margin fraction, for k.plane({...k.fit(pts), equal: true})
  k.fit = (pts, m = 0.18) => { const xs = pts.map(p => p[0]), ys = pts.map(p => p[1]), x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys), s = Math.max(x1 - x0, y1 - y0, 1e-6) * m;
    return { xmin: x0 - s, xmax: x1 + s, ymin: y0 - s, ymax: y1 + s }; };
  // Triangle vertices from a solved triangle {a, b, c, A, B, C}: C at the origin, B on the +x axis (side a), A above.
  k.triPts = t => [[t.b * cosD(t.C), t.b * sinD(t.C)], [t.a, 0], [0, 0]];

  // Unit circle. UC = k.unitCircle(c, {snap: π/12, onMove(t), ticks: true, r: 1.35 (window half-size)})
  // In the loop: const P = UC.plane(pad); UC.draw({t, proj: true, arc: true, ref: false, radius: true}); then P.labels([...]).
  // UC.t is the current angle (radians, any real; dragging keeps winding); UC.set(t). Colours: θ amber, cos cyan, sin pink, r violet.
  k.unitCircle = (c, o = {}) => { const st = { t: o.t ?? PI / 6, P: null, drag: false }, snap = o.snap ?? PI / 12, H = o.r || 1.35;
    const UC = { get t(){ return st.t; }, set(t){ st.t = t; }, get P(){ return st.P; },
      plane(pad){ st.P = k.plane(c, { xmin: -H, xmax: H, ymin: -H, ymax: H, equal: true, pad, xstep: 0.5, ystep: 0.5, modes: o.modes }); return st.P; },
      draw(opt = {}){ const P = st.P, d = c.d, t = opt.t ?? st.t, x = Math.cos(t), y = Math.sin(t);
        P.grid(); P.axes(opt.axisLabels !== false);
        P.clip(() => d.circle(P.X(0), P.Y(0), P.X(1) - P.X(0), null, k.alpha(C.violet, .7), 1.5)); for (let i = 0; i <= 72; i++) P.pts.push([P.X(Math.cos(i * TAU / 72)), P.Y(Math.sin(i * TAU / 72))]);
        if (opt.ticks ?? o.ticks ?? true) for (let i = 0; i < 24; i++) { const a = i * PI / 12, sp = i % 2 === 0 || i % 6 === 3; if (!sp) continue; d.line(P.X(.96 * Math.cos(a)), P.Y(.96 * Math.sin(a)), P.X(1.04 * Math.cos(a)), P.Y(1.04 * Math.sin(a)), C.faint, 1.2); }
        if (opt.arc !== false) P.angleArc(0, 0, Math.min(34, (P.X(1) - P.X(0)) * .28), 0, t, C.amber, { w: 2 });
        if (opt.ref) { const base = x >= 0 ? 0 : PI, end = Math.atan2(y, x), dl = ((end - base + 3 * PI) % TAU) - PI;   // to the nearest x-axis, the short way
          if (Math.abs(dl) > 1e-6) P.angleArc(0, 0, Math.min(52, (P.X(1) - P.X(0)) * .42), base, base + dl, C.amber, { dash: [4, 4], arrow: false }); }
        if (opt.proj !== false) { P.seg(0, 0, x, 0, C.cyan, 3); P.seg(x, 0, x, y, C.pink, 3); }
        if (opt.radius !== false) P.seg(0, 0, x, y, C.violet, 2);
        P.dot(x, y, C.text, 6); return { x, y }; } };
    const pick = e => { const P = st.P; if (!P) return null; const q = c.xy(e), m = P.inv(q.x, q.y); return m; };
    c.cv.addEventListener("pointerdown", e => { const m = pick(e); if (!m) return; const rr = Math.hypot(m.x, m.y); if (rr < 0.45 || rr > 1.6) return; st.drag = true; c.cv.setPointerCapture(e.pointerId); mv(e); e.preventDefault(); });
    const mv = e => { if (!st.drag) return; const m = pick(e); let a = Math.atan2(m.y, m.x); const cur = st.t, base = Math.round((cur - a) / TAU) * TAU; a += base; if (snap) a = Math.round(a / snap) * snap; st.t = +a.toFixed(12); if (o.onMove) o.onMove(st.t); };
    c.cv.addEventListener("pointermove", e => { if (st.drag) mv(e); else { const m = pick(e); c.cv.style.cursor = m && Math.abs(Math.hypot(m.x, m.y) - 1) < .15 ? "grab" : ""; } });
    const up = () => { st.drag = false; }; c.cv.addEventListener("pointerup", up); c.cv.addEventListener("pointercancel", up); c.cv.style.touchAction = "none";
    return UC; };

  // Polar plane: P = k.polarPlane(c, {rmax: 4, rstep: 1, tstep: π/6, pad}). Draws a polar grid (circles + rays) with
  // P.polarGrid(); P.pp(r, θ) → [x, y]; P.ray(θ, color); P.polarCurve(rf, θ0, θ1, color, {w, neg: colour for r < 0 parts, dash});
  k.polarPlane = (c, o = {}) => { const R = o.rmax || 4, P = k.plane(c, Object.assign({ xmin: -R * 1.12, xmax: R * 1.12, ymin: -R * 1.12, ymax: R * 1.12, equal: true }, o)), d = c.d, g = c.g;
    P.pp = (r, t) => [r * Math.cos(t), r * Math.sin(t)];
    P.polarGrid = (labels = true) => { const rs = o.rstep || MR.niceStep(R, 4), ts = o.tstep || PI / 6, f = `11px ${F.mono}`;
      P.clip(() => { for (let r = rs; r <= R + 1e-9; r += rs) d.circle(P.X(0), P.Y(0), P.X(r) - P.X(0), null, k.alpha(C.line2, .55), 1);
        for (let t = 0; t < TAU - 1e-9; t += ts) d.line(P.X(0), P.Y(0), P.X(R * Math.cos(t)), P.Y(R * Math.sin(t)), k.alpha(C.line2, .45), 1); });
      if (!labels) return;
      for (let r = rs; r <= R + 1e-9; r += rs) { const s = MR.fmtN(r, 2), w = d.width(s, f), px = P.X(r) + 2, py = P.Y(0) + 13; d.text(s, px, py, { font: f, color: C.faint }); P.boxes.push({ x: px - 1, y: py - 11, w: w + 2, h: 14 }); }
      for (let t = 0; t < TAU - 1e-9; t += ts) { const q = piQ(t, 48), s = q ? piT(q) : MR.fmtN(t, 2), tf = `12px ${F.math}`, w = d.width(s, tf), px = P.X(R * 1.06 * Math.cos(t)), py = P.Y(R * 1.06 * Math.sin(t));
        if (px - w / 2 < P.left || px + w / 2 > P.left + P.width || py < P.top + 6 || py > P.top + P.height - 4) continue; d.text(s, px, py, { font: tf, color: C.faint, align: "center", base: "middle" }); P.boxes.push({ x: px - w / 2 - 2, y: py - 8, w: w + 4, h: 16 }); } };
    P.ray = (t, color = C.amber, w = 1.5, dash = [5, 4]) => P.seg(0, 0, R * 1.1 * Math.cos(t), R * 1.1 * Math.sin(t), color, w, dash);
    P.polarCurve = (rf, t0, t1, color = C.green, opt = {}) => { const N = opt.n || Math.max(240, Math.ceil(Math.abs(t1 - t0) * 120)); P.clip(() => { g.save(); g.lineWidth = opt.w || 2.5; g.lineJoin = "round"; if (opt.dash) g.setLineDash(opt.dash);
      let prevNeg = null, pen = false; const stroke = () => { if (pen) g.stroke(); pen = false; };
      for (let i = 0; i <= N; i++) { const t = t0 + (t1 - t0) * i / N, r = rf(t); if (!isFinite(r)) { stroke(); continue; } const neg = r < 0 && !!opt.neg, px = P.X(r * Math.cos(t)), py = P.Y(r * Math.sin(t));
        if (neg !== prevNeg) { if (pen) { g.lineTo(px, py); stroke(); } g.strokeStyle = neg ? opt.neg : color; g.beginPath(); g.moveTo(px, py); pen = true; prevNeg = neg; } else { g.lineTo(px, py); }
        if (i % 4 === 0) rec(px, py); }
      stroke(); g.restore(); }); };
    const rec = (px, py) => { if (px >= P.left && px <= P.left + P.width && py >= P.top && py <= P.top + P.height) P.pts.push([px, py]); };
    return P; };
  return k;
};
})();
