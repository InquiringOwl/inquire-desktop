/* ============ Subject kit: Precalculus (loads after subjects/math.js; extends MathRules and MathKit) ============
   1. MathRules additions (DOM-free, tested in tests/precalc.test.js):
      matrices MR.Mat (exact Q: arithmetic, det with cofactor steps, rref with a row-operation log, inverse, Cramer, rank),
      linear programming MR.lp, partial fractions MR.partialFractions, function behaviour (avgRate, incDec, symmetry,
      diffQuot, slopeAt), zeros (descartes, boundTest, bisect), models (logistic, logisticWhen, fit), conics
      (eccentricity, polarConic, rotateConic), parametric (projectile, cycloid), counting (fact, nPr, multiset, probQ,
      inclExcl) and limits (ratLimit, limInf, limTable, pieceAt, continuityAt).
   2. MathKit.attach(k) also adds: k.matH(S, grid, opt) (matrix HTML whose entries can be scrubbable k.vars numbers),
      P.feasible(constraints, color), P.secant(f, a, b, color), P.paramTrace(fx, fy, t0, t1, t, color).
   API summary: docs/subjects/MATH.md § Precalculus. */
(function(){
const W = typeof window !== "undefined" ? window : globalThis;
const MR = W.MathRules, { Q, Poly } = MR, MI = "−";
const SUB = "₀₁₂₃₄₅₆₇₈₉";
const sub = n => String(n).split("").map(d => SUB[+d] || d).join("");

/* ---------------- matrices (entries are Q) ---------------- */
const Mat = {};
Mat.of = rows => rows.map(r => r.map(v => Q(v)));
Mat.dims = M => [M.length, M[0] ? M[0].length : 0];
Mat.id = n => Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => Q(i === j ? 1 : 0)));
Mat.zero = (m, n) => Array.from({ length: m }, () => Array.from({ length: n }, () => Q(0)));
Mat.eq = (A, B) => A.length === B.length && A.every((r, i) => r.length === B[i].length && r.every((v, j) => Q.eq(v, B[i][j])));
Mat.add = (A, B) => { A = Mat.of(A); B = Mat.of(B); if (A.length !== B.length || A[0].length !== B[0].length) return null; return A.map((r, i) => r.map((v, j) => Q.add(v, B[i][j]))); };
Mat.sub = (A, B) => { A = Mat.of(A); B = Mat.of(B); if (A.length !== B.length || A[0].length !== B[0].length) return null; return A.map((r, i) => r.map((v, j) => Q.sub(v, B[i][j]))); };
Mat.scale = (c, A) => Mat.of(A).map(r => r.map(v => Q.mul(c, v)));
Mat.T = A => Mat.of(A)[0].map((_, j) => A.map(r => Q(r[j])));
// Product AB (null when the inner dimensions differ)
Mat.mul = (A, B) => { A = Mat.of(A); B = Mat.of(B); if (A[0].length !== B.length) return null; return A.map(r => B[0].map((_, j) => r.reduce((s, v, k) => Q.add(s, Q.mul(v, B[k][j])), Q(0)))); };
// The terms of entry (i, j) of AB: [{a, b}] (row i of A · column j of B)
Mat.dotTerms = (A, B, i, j) => Mat.of(A)[i].map((a, k) => ({ a, b: Q(B[k][j]) }));
Mat.minor = (A, i, j) => Mat.of(A).filter((_, r) => r !== i).map(r => r.filter((_, c) => c !== j));
const detRec = A => { const n = A.length; if (n === 1) return A[0][0]; if (n === 2) return Q.sub(Q.mul(A[0][0], A[1][1]), Q.mul(A[0][1], A[1][0]));
  let s = Q(0); for (let j = 0; j < n; j++) if (A[0][j].n !== 0) s = (j % 2 ? Q.sub : Q.add)(s, Q.mul(A[0][j], detRec(Mat.minor(A, 0, j)))); return s; };
Mat.det = A => { A = Mat.of(A); if (A.length !== A[0].length) return null; if (A.length <= 5) return detRec(A);
  const M = A.map(r => r.slice()); let d = Q(1); const n = M.length;
  for (let c = 0; c < n; c++) { const p = M.findIndex((r, i) => i >= c && r[c].n !== 0); if (p < 0) return Q(0); if (p !== c) { [M[p], M[c]] = [M[c], M[p]]; d = Q.neg(d); }
    d = Q.mul(d, M[c][c]); for (let i = c + 1; i < n; i++) { const f = Q.div(M[i][c], M[c][c]); M[i] = M[i].map((v, j) => Q.sub(v, Q.mul(f, M[c][j]))); } } return d; };
Mat.cofactor = (A, i, j) => { const m = Mat.det(Mat.minor(A, i, j)); return (i + j) % 2 ? Q.neg(m) : m; };
// Cofactor expansion along row i (by: "row") or column i (by: "col"): {terms: [{i, j, a, sign, minor, M, term}], det}
Mat.expand = (A, by = "row", idx = 0) => { A = Mat.of(A); const n = A.length, terms = [];
  for (let t = 0; t < n; t++) { const i = by === "row" ? idx : t, j = by === "row" ? t : idx, minor = Mat.minor(A, i, j), M = Mat.det(minor), sign = (i + j) % 2 ? -1 : 1;
    terms.push({ i, j, a: A[i][j], sign, minor, M, term: Q.mul(Q.mul(sign, A[i][j]), M) }); }
  return { terms, det: terms.reduce((s, t) => Q.add(s, t.term), Q(0)) }; };
// Row reduction with a log. aug = number of columns right of the bar (0 for a plain matrix).
// opt.reduced (default true) = Gauss–Jordan; false = Gaussian (row-echelon). Pivot choice: a row with a ±1 in the column
// if there is one (fewer fractions, as by hand), else the first nonzero. Each step: {op, M (after), pivot: [r, c], phase}.
// op: {type: "swap", i, j} | {type: "scale", i, c} | {type: "add", i, j, c} meaning Ri → Ri + c·Rj.
Mat.rref = (A, opt = {}) => {
  const aug = opt.aug ?? 0, reduced = opt.reduced !== false; let M = Mat.of(A).map(r => r.slice());
  const m = M.length, n = M[0].length, vars = n - aug, steps = [], pivots = [];
  const log = (op, pivot, phase) => steps.push({ op, M: M.map(r => r.slice()), pivot, phase });
  let row = 0;
  for (let c = 0; c < vars && row < m; c++) {
    const cand = []; for (let i = row; i < m; i++) if (M[i][c].n !== 0) cand.push(i); if (!cand.length) continue;
    const p = cand.find(i => Math.abs(M[i][c].n) === 1 && M[i][c].d === 1) ?? cand[0];
    if (p !== row) { [M[p], M[row]] = [M[row], M[p]]; log({ type: "swap", i: row, j: p }, [row, c], "forward"); }
    const pv = M[row][c]; if (!(pv.n === 1 && pv.d === 1)) { const f = Q.inv(pv); M[row] = M[row].map(v => Q.mul(v, f)); log({ type: "scale", i: row, c: f }, [row, c], "forward"); }
    for (let i = row + 1; i < m; i++) if (M[i][c].n !== 0) { const f = Q.neg(M[i][c]); M[i] = M[i].map((v, j) => Q.add(v, Q.mul(f, M[row][j]))); log({ type: "add", i, j: row, c: f }, [row, c], "forward"); }
    pivots.push([row, c]); row++;
  }
  if (reduced) for (let t = pivots.length - 1; t >= 0; t--) { const [r, c] = pivots[t];
    for (let i = r - 1; i >= 0; i--) if (M[i][c].n !== 0) { const f = Q.neg(M[i][c]); M[i] = M[i].map((v, j) => Q.add(v, Q.mul(f, M[r][j]))); log({ type: "add", i, j: r, c: f }, [r, c], "back"); } }
  const rank = pivots.length, out = { steps, M, rank, pivots };
  if (aug) {
    const bad = M.some(r => r.slice(0, vars).every(v => v.n === 0) && r.slice(vars).some(v => v.n !== 0));
    if (bad) out.kind = "none";
    else if (rank < vars) { out.kind = "infinite"; const free = []; for (let c = 0; c < vars; c++) if (!pivots.some(p => p[1] === c)) free.push(c); out.free = free;
      if (reduced) out.param = Array.from({ length: vars }, (_, c) => { if (free.includes(c)) return { c: Q(0), coef: { [c]: Q(1) } }; const pr = pivots.find(p => p[1] === c)[0]; const coef = {}; free.forEach(f => { if (M[pr][f].n !== 0) coef[f] = Q.neg(M[pr][f]); }); return { c: M[pr][vars], coef }; }); }
    else { out.kind = "unique"; if (reduced) out.x = Array.from({ length: vars }, (_, c) => M[pivots.find(p => p[1] === c)[0]][vars]); }
  }
  return out;
};
Mat.rank = A => Mat.rref(A).rank;
Mat.solve = (A, b) => Mat.rref(Mat.of(A).map((r, i) => [...r, Q(b[i])]), { aug: 1 });
// Inverse by row reducing [A | I]: {inv | null, steps, singular}
Mat.inverse = A => { A = Mat.of(A); const n = A.length; if (n !== A[0].length) return { inv: null, singular: true, steps: [] };
  const R = Mat.rref(A.map((r, i) => [...r, ...Mat.id(n)[i]]), { aug: n }); const left = R.M.map(r => r.slice(0, n));
  return Mat.eq(left, Mat.id(n)) ? { inv: R.M.map(r => r.slice(n)), singular: false, steps: R.steps } : { inv: null, singular: true, steps: R.steps }; };
// Cramer's rule: {D, Ds: [D₁, …], x: [Q] | null}
Mat.cramer = (A, b) => { A = Mat.of(A); const D = Mat.det(A), Ds = A[0].map((_, j) => Mat.det(A.map((r, i) => r.map((v, c) => (c === j ? Q(b[i]) : v)))));
  return { D, Ds, x: D.n === 0 ? null : Ds.map(d => Q.div(d, D)) }; };
// Solution of an rref() result as text: "(1, −1, 2)", "∅", or parametric "(4 − 2s − 3t, s, t)" (free variables named
// one → t, two → s, t, three → r, s, t, more → t₁ …)
Mat.solText = R => { if (R.kind === "unique") return `(${R.x.map(MR.qT).join(", ")})`; if (R.kind === "none") return "∅"; if (!R.param) return "";
  const pool = "rst", nm = R.free.map((_, i) => (R.free.length <= 3 ? pool[3 - R.free.length + i] : "t" + (i + 1))), name = f => nm[R.free.indexOf(+f)];
  return "(" + R.param.map(p => { let s = p.c.n ? MR.qT(p.c) : ""; Object.keys(p.coef).forEach(f => { const q = p.coef[f], a = Q.abs(q), neg = q.n < 0, co = a.n === 1 && a.d === 1 ? "" : a.d === 1 ? MR.qT(a) : `(${MR.qT(a)})`;
    s += s ? ` ${neg ? MI : "+"} ${co}${name(f)}` : `${neg ? MI : ""}${co}${name(f)}`; }); return s || "0"; }).join(", ") + ")"; };
Mat.apply = (M, [x, y]) => { const a = Mat.of(M).map(r => r.map(Q.val)); return [a[0][0] * x + a[0][1] * y, a[1][0] * x + a[1][1] * y]; };
// "R₂ → R₂ − 3R₁", "R₁ ↔ R₂", "R₂ → (1/2)R₂" (text) or HTML (o.html: fractions stacked)
const coefT = (c, html) => { c = Q(c); const a = Q.abs(c); if (a.n === 1 && a.d === 1) return ""; return a.d === 1 ? String(a.n) : html ? MR.qH(a).replace(/^<span class="m">|<\/span>$/g, "") : `(${MR.qT(a)})`; };
const rowOpT = (op, html) => { const R = i => (html ? `<i>R</i>${sub(i + 1)}` : `R${sub(i + 1)}`);
  if (op.type === "swap") return `${R(op.i)} ↔ ${R(op.j)}`;
  if (op.type === "scale") { const c = Q(op.c); return `${R(op.i)} → ${c.n < 0 ? MI : ""}${coefT(c, html) || (c.n < 0 ? "" : "1")}${R(op.i)}`.replace("→ 1R", "→ R"); }
  const c = Q(op.c); return `${R(op.i)} → ${R(op.i)} ${c.n < 0 ? MI : "+"} ${coefT(c, html)}${R(op.j)}`; };
// Matrix as HTML (span.mat): o.aug = columns after the bar; o.det = determinant bars; o.cls(i, j) → class; o.cell(i, j, v) → html
const matH = (M, o = {}) => { const n = M[0].length, cls0 = o.cls || (() => ""), bar = o.aug ? n - o.aug - 1 : -1, cls = (i, j) => [cls0(i, j), j === bar ? "bar" : ""].filter(Boolean).join(" ");
  const rows = M.map((r, i) => `<tr>${r.map((v, j) => { const c = cls(i, j); const h = o.cell ? o.cell(i, j, v) : (v && v.isQ ? MR.qH(v).replace(/^<span class="m">|<\/span>$/g, "") : String(v).replace("-", MI)); return `<td${c ? ` class="${c}"` : ""}>${h}</td>`; }).join("")}</tr>`).join("");
  return `<span class="mat${o.det ? " det" : ""}"><table>${rows}</table></span>`; };

/* ---------------- linear programming ---------------- */
// constraints: [{a, b, c, rel: "<=" | ">="}] meaning a x + b y rel c (exact Q). objective {a, b} for z = a x + b y.
// → {empty, bounded, vertices: [{x, y, q: [Q, Q], z}] counter-clockwise, max, min: {z, at: [vertex…]} | null (unbounded), on: [i, j] boundaries}
function lp(constraints, objective, o = {}){
  const cs = constraints.map(k => ({ a: Q(k.a), b: Q(k.b), c: Q(k.c), rel: k.rel || "<=" }));
  const BIG = Q(o.big || 100000), box = [{ a: Q(1), b: Q(0), c: BIG, rel: "<=" }, { a: Q(1), b: Q(0), c: Q.neg(BIG), rel: ">=" }, { a: Q(0), b: Q(1), c: BIG, rel: "<=" }, { a: Q(0), b: Q(1), c: Q.neg(BIG), rel: ">=" }];
  const all = [...cs, ...box], ok = (x, y) => cs.every(k => { const v = Q.sub(Q.add(Q.mul(k.a, x), Q.mul(k.b, y)), k.c); return k.rel === "<=" ? v.n <= 0 : v.n >= 0; }) && box.every(k => { const v = Q.sub(Q.add(Q.mul(k.a, x), Q.mul(k.b, y)), k.c); return k.rel === "<=" ? v.n <= 0 : v.n >= 0; });
  const pts = [];
  for (let i = 0; i < all.length; i++) for (let j = i + 1; j < all.length; j++) { const A = all[i], B = all[j], D = Q.sub(Q.mul(A.a, B.b), Q.mul(A.b, B.a)); if (D.n === 0) continue;
    const x = Q.div(Q.sub(Q.mul(A.c, B.b), Q.mul(A.b, B.c)), D), y = Q.div(Q.sub(Q.mul(A.a, B.c), Q.mul(A.c, B.a)), D);
    if (!ok(x, y)) continue; if (pts.some(p => Q.eq(p.q[0], x) && Q.eq(p.q[1], y))) continue; pts.push({ q: [x, y], x: Q.val(x), y: Q.val(y), onBox: i >= cs.length || j >= cs.length, on: [i, j] }); }
  if (!pts.length) return { empty: true, bounded: true, vertices: [], max: null, min: null };
  const cx = pts.reduce((s, p) => s + p.x, 0) / pts.length, cy = pts.reduce((s, p) => s + p.y, 0) / pts.length;
  pts.sort((p, q) => Math.atan2(p.y - cy, p.x - cx) - Math.atan2(q.y - cy, q.x - cx));
  const bounded = !pts.some(p => p.onBox), real = pts.filter(p => !p.onBox), ob = objective ? { a: Q(objective.a), b: Q(objective.b) } : null;
  const zq = p => Q.add(Q.mul(ob.a, p.q[0]), Q.mul(ob.b, p.q[1]));
  if (ob) pts.forEach(p => { p.z = zq(p); });
  const best = (dir) => { if (!ob || !real.length) return null; const all2 = pts, top = all2.reduce((m, p) => (Q.cmp(p.z, m) * dir > 0 ? p.z : m), all2[0].z);
    const at = real.filter(p => Q.eq(p.z, top)); if (!at.length) return null; /* the box beats every real vertex: unbounded that way */ return { z: top, at }; };
  return { empty: false, bounded, vertices: real, polygon: pts, max: best(1), min: best(-1) };
}

/* ---------------- partial fractions ---------------- */
// N(x) / Π p_i(x)^{m_i} with p_i linear or irreducible quadratic (Poly). → {poly (quotient when improper, else null),
// terms: [{den: p, power, num: Poly, names}], rows (the coefficient system, unknowns in order), unknowns: ["A", "B", …], sol}
function partialFractions(N, factors){
  N = Poly(N); const fs = factors.map(f => ({ p: Poly(f.p), m: f.m || 1 }));
  const D = fs.reduce((acc, f) => Poly.mul(acc, Poly.pow(f.p, f.m)), Poly([1]));
  let poly = null, R = N; if (Poly.deg(N) >= Poly.deg(D)) { const dm = Poly.divmod(N, D); poly = dm.q; R = dm.r; }
  const letters = "ABCDEFGHJKLMNPQRSTUVW".split(""), unknowns = [], basis = [], terms = [];
  fs.forEach(f => { for (let k = 1; k <= f.m; k++) { const other = Poly.divmod(D, Poly.pow(f.p, k)).q, t = { den: f.p, power: k, names: [] };
    if (Poly.deg(f.p) === 1) { const nm = letters[unknowns.length]; unknowns.push(nm); basis.push(other); t.names.push(nm); }
    else { const nb = letters[unknowns.length], nc = letters[unknowns.length + 1]; unknowns.push(nb, nc); basis.push(Poly.mul(other, Poly([0, 1])), other); t.names.push(nb, nc); }
    terms.push(t); } });
  const n = Poly.deg(D), rows = [];
  for (let d = 0; d < n; d++) rows.push([...basis.map(b => b[d] || Q(0)), R[d] || Q(0)]);
  const sol = MR.linSolve(rows);
  if (sol.kind === "unique") { let u = 0; terms.forEach(t => { t.num = Poly.deg(t.den) === 1 ? Poly([sol.x[u++]]) : (() => { const b = sol.x[u++], c = sol.x[u++]; return Poly([c, b]); })(); }); }
  return { poly, R, D, terms, rows: rows.reverse(), unknowns, sol };
}

/* ---------------- function behaviour ---------------- */
const isPoly = f => Array.isArray(f);
// (f(b) − f(a))/(b − a): exact Q when f is a Poly and a, b rational, else a number
const avgRate = (f, a, b) => isPoly(f) ? Q.div(Q.sub(Poly.eval(f, Q(b)), Poly.eval(f, Q(a))), Q.sub(Q(b), Q(a))) : (f(b) - f(a)) / (b - a);
// Intervals of increase/decrease of a polynomial and its local extrema: {ivs: [{lo, hi, dir: "inc"|"dec"|"const"}], ext: [{x, q, y, kind}]}
function incDec(p){
  p = Poly(p); const d = Poly.deriv(p); if (Poly.deg(p) < 1) return { ivs: [{ lo: null, hi: null, dir: "const" }], ext: [] };
  const crit = Poly.realRoots(d), cuts = crit.map(c => c.x), ivs = [], ends = [null, ...cuts, null];
  for (let i = 0; i < ends.length - 1; i++) { const lo = ends[i], hi = ends[i + 1], t = lo === null && hi === null ? 0 : lo === null ? hi - 1 : hi === null ? lo + 1 : (lo + hi) / 2, s = Poly.evalN(d, t);
    const last = ivs[ivs.length - 1], dir = s > 0 ? "inc" : "dec"; if (last && last.dir === dir) last.hi = hi; else ivs.push({ lo, hi, dir }); }
  const ext = crit.filter(c => c.m % 2 === 1).map(c => ({ x: c.x, q: c.q, y: c.q ? Poly.eval(p, c.q) : Poly.evalN(p, c.x), kind: Poly.evalN(d, c.x - 1e-4) > 0 ? "max" : "min" }));
  return { ivs, ext };
}
// "even" | "odd" | "neither" for any function, by sampling where f(x) and f(−x) are both defined
function symmetry(f, lo = -6, hi = 6, n = 61){ let ev = true, od = true, cnt = 0;
  for (let i = 0; i < n; i++) { const x = lo + (hi - lo) * (i + 0.37) / n, a = f(x), b = f(-x); if (!isFinite(a) || !isFinite(b)) continue; cnt++; const tol = 1e-9 * (1 + Math.abs(a));
    if (Math.abs(a - b) > tol) ev = false; if (Math.abs(a + b) > tol) od = false; }
  return !cnt ? "neither" : ev && od ? "both" : ev ? "even" : od ? "odd" : "neither"; }
// (p(a + h) − p(a))/h as a Poly in h (exact), and the slope at a = its value at h = 0
const diffQuot = (p, a) => { p = Poly(p); const s = Poly.compose(p, Poly([Q(a), 1])), dq = s.slice(1); return dq.length ? Poly(dq) : Poly([0]); };
const slopeAt = (p, a) => Poly.eval(Poly.deriv(Poly(p)), Q(a));

/* ---------------- locating zeros ---------------- */
const signChanges = cs => { const s = cs.map(c => Math.sign(Q.val(c))).filter(x => x !== 0); let n = 0; for (let i = 1; i < s.length; i++) if (s[i] !== s[i - 1]) n++; return n; };
// Descartes' rule of signs: {pos, neg (sign changes of p(x), p(−x)), posCounts, negCounts (possible numbers), zeroRoot (multiplicity of x = 0)}
function descartes(p){ p = Poly(p); let z = 0; while (p.length > 1 && p[z] && p[z].n === 0) z++; const q = p.slice(z), pm = q.map((c, i) => ((i + z) % 2 ? Q.neg(c) : c));
  const pos = signChanges(q), neg = signChanges(pm), counts = v => { const r = []; for (let k = v; k >= 0; k -= 2) r.push(k); return r; };
  return { pos, neg, posCounts: counts(pos), negCounts: counts(neg), zeroRoot: z }; }
// Upper/lower bound test by synthetic division at c: upper when c > 0 and the bottom row has no negative entry;
// lower when c < 0 and the bottom row alternates in sign (a zero may count as either sign).
function boundTest(p, c){ p = Poly(p); c = Q(c); const S = Poly.synth(p, c), row = S.bottom.map(Q.val);
  const upper = Q.val(c) > 0 && (row.every(v => v >= 0) || row.every(v => v <= 0));
  let lower = false; if (Q.val(c) < 0) { lower = true; let prev = 0; for (const v of row) { if (v === 0) { prev = -prev; continue; } const s = Math.sign(v); if (prev && s === prev) { lower = false; break; } prev = s; } }
  return { upper, lower, row: S.bottom, synth: S }; }
// Bisection on [a, b] (f(a), f(b) of opposite signs): n halvings or until width ≤ tol. → steps [{a, b, m, fa, fb, fm}], root (midpoint)
function bisect(f, a, b, o = {}){ const steps = []; let fa = f(a), fb = f(b); if (!(fa * fb <= 0)) return { steps, root: null, bad: true };
  const n = o.n ?? 60, tol = o.tol ?? 0;
  for (let i = 0; i < n; i++) { const m = (a + b) / 2, fm = f(m); steps.push({ a, b, m, fa, fb, fm }); if (fm === 0) { a = b = m; break; } if (fa * fm < 0) { b = m; fb = fm; } else { a = m; fa = fm; } if (b - a <= tol) break; }
  return { steps, root: (a + b) / 2, a, b }; }

/* ---------------- models ---------------- */
// f(t) = c / (1 + a e^(−bt)): {f, y0, inflection: {t, y}}
const logistic = (c, a, b) => ({ f: t => c / (1 + a * Math.exp(-b * t)), y0: c / (1 + a), inflection: { t: Math.log(a) / b, y: c / 2 } });
// Time when the logistic model reaches y (0 < y < c): t = ln(a y / (c − y)) / b
const logisticWhen = (c, a, b, y) => (y <= 0 || y >= c ? null : Math.log(a * y / (c - y)) / b);
// Least-squares fit. kind: "linear" (y = a + b x), "exp" (y = a·bˣ, via ln y), "log" (y = a + b ln x), "power" (y = a·xᵇ, via ln–ln).
// → {kind, a, b, r, r2 (of the fitted line in the transformed variables), f, X, Y (transformed data)} or null (a point outside the model's domain)
function fit(kind, pts){
  const tx = { linear: [x => x, y => y], exp: [x => x, y => Math.log(y)], log: [x => Math.log(x), y => y], power: [x => Math.log(x), y => Math.log(y)] }[kind];
  if (!tx || pts.length < 2) return null; const X = pts.map(p => tx[0](p[0])), Y = pts.map(p => tx[1](p[1])); if (![...X, ...Y].every(isFinite)) return null;
  const n = X.length, mx = X.reduce((s, v) => s + v, 0) / n, my = Y.reduce((s, v) => s + v, 0) / n; let sxx = 0, sxy = 0, syy = 0;
  for (let i = 0; i < n; i++) { sxx += (X[i] - mx) ** 2; sxy += (X[i] - mx) * (Y[i] - my); syy += (Y[i] - my) ** 2; }
  if (sxx === 0) return null; const m = sxy / sxx, c0 = my - m * mx, r = syy === 0 ? 1 : sxy / Math.sqrt(sxx * syy);
  let a, b, f; if (kind === "linear") { a = c0; b = m; f = x => a + b * x; } else if (kind === "exp") { a = Math.exp(c0); b = Math.exp(m); f = x => a * b ** x; } else if (kind === "log") { a = c0; b = m; f = x => a + b * Math.log(x); } else { a = Math.exp(c0); b = m; f = x => a * x ** b; }
  return { kind, a, b, r, r2: r * r, f, X, Y, slope: m, intercept: c0 }; }

/* ---------------- conics ---------------- */
// Polar conic with a focus at the pole: r = e p / (1 + s·e·trig θ), trig "cos" | "sin", s = ±1. Exact (Q) when e, p rational.
// → {type, e, p, directrix: {x} | {y}, vertices: [[x, y]…] (Q pairs), center, a, b2, c (Q, ellipse/hyperbola), r: θ → r}
function polarConic(e, p, trig = "cos", s = 1){
  e = Q(e); p = Q(p); const ep = Q.mul(e, p), ev = Q.val(e), type = ev === 0 ? "circle" : ev < 1 ? "ellipse" : ev === 1 ? "parabola" : "hyperbola";
  const r = t => Q.val(ep) / (1 + s * ev * (trig === "cos" ? Math.cos(t) : Math.sin(t)));
  const along = v => (trig === "cos" ? [v, Q(0)] : [Q(0), v]);   // a point on the axis through the focus
  const directrix = trig === "cos" ? { x: s > 0 ? p : Q.neg(p) } : { y: s > 0 ? p : Q.neg(p) };
  const r0 = Q.div(ep, Q.add(1, e)), out = { type, e, p, directrix, r, axis: trig === "cos" ? "x" : "y" };
  const v1 = Q.mul(s, r0);                                         // θ = 0 (or π/2): r0 in the +s direction
  if (type === "parabola") { out.vertices = [along(Q.mul(s, Q.div(p, 2)))]; return out; }   // r = p/(1 + s cos θ): vertex halfway to the directrix
  const r1 = Q.div(ep, Q.sub(1, e)), v2 = Q.mul(-s, r1);           // θ = π (or 3π/2): r1 in the −s direction (r1 < 0 for e > 1)
  const cen = Q.div(Q.add(v1, v2), 2), a = Q.abs(Q.div(Q.sub(v1, v2), 2)), c = Q.abs(cen);
  const b2 = type === "hyperbola" ? Q.sub(Q.mul(c, c), Q.mul(a, a)) : Q.sub(Q.mul(a, a), Q.mul(c, c));
  return Object.assign(out, { vertices: [along(v1), along(v2)], center: along(cen), a, c, b2 });
}
// Rotation of axes for Ax² + Bxy + Cy² + Dx + Ey + F = 0. → {disc, type, theta (rad, in [0, π/2)), cot2 (Q or null),
//   cos, sin (numbers), exact: {cos2, sin2: Q} when √((A − C)² + B²) is rational, coef: {A, C, D, E, F} after rotation (numbers),
//   coefQ: {A, C} exact when available}
function rotateConic(k){
  const A = Q(k.A || 0), B = Q(k.B || 0), C = Q(k.C || 0), D = Q(k.D || 0), E = Q(k.E || 0), F = Q(k.F || 0);
  const disc = Q.sub(Q.mul(B, B), Q.mul(4, Q.mul(A, C))), dv = Q.val(disc);
  const type = B.n === 0 && A.n === 0 && C.n === 0 ? "line" : dv < 0 ? (B.n === 0 && Q.eq(A, C) ? "circle" : "ellipse") : dv === 0 ? "parabola" : "hyperbola";
  const a = Q.val(A), b = Q.val(B), c = Q.val(C); let theta = 0, cot2 = null;
  if (B.n !== 0) { theta = Math.atan2(b, a - c) / 2; if (theta < 0) theta += Math.PI / 2; cot2 = Q.div(Q.sub(A, C), B); }
  const cs = Math.cos(theta), sn = Math.sin(theta);
  const coef = { A: a * cs * cs + b * cs * sn + c * sn * sn, B: 0, C: a * sn * sn - b * sn * cs + c * cs * cs, D: Q.val(D) * cs + Q.val(E) * sn, E: -Q.val(D) * sn + Q.val(E) * cs, F: Q.val(F) };
  const out = { disc, type, theta, cot2, cos: cs, sin: sn, coef };
  if (B.n !== 0) { const R2 = Q.add(Q.mul(Q.sub(A, C), Q.sub(A, C)), Q.mul(B, B)), sq = MR.sqrtQ(R2);
    if (sq.t === 1) { const R = sq.s, cos2 = Q.div(Q.sub(A, C), R), sin2 = Q.div(B, R); const sgn = Q.val(sin2) < 0 ? -1 : 1;
      const c2 = Q.mul(sgn, cos2), s2 = Q.mul(sgn, sin2);  // 2θ in (0, π): sin 2θ > 0
      out.exact = { cos2: c2, sin2: s2, cos2th: Q.div(Q.add(1, c2), 2), sin2th: Q.div(Q.sub(1, c2), 2) };
      const cc = out.exact.cos2th, ss = out.exact.sin2th, sc = Q.div(s2, 2);
      out.coefQ = { A: Q.add(Q.add(Q.mul(A, cc), Q.mul(B, sc)), Q.mul(C, ss)), C: Q.add(Q.sub(Q.mul(A, ss), Q.mul(B, sc)), Q.mul(C, cc)) }; } }
  else out.coefQ = { A, C };
  return out;
}
// Eccentricity of a conic() result: {e (number), e2 (Q) , directrices: [{x}|{y}] (numbers)}
function eccentricity(cn){ if (!cn) return null; if (cn.type === "parabola") return { e: 1, e2: Q(1), directrices: [cn.directrix] }; if (cn.type === "circle") return { e: 0, e2: Q(0), directrices: [] };
  if (cn.type !== "ellipse" && cn.type !== "hyperbola") return null; const e2 = Q.div(cn.c2, cn.a2), e = Math.sqrt(Q.val(e2)), d = cn.a * cn.a / cn.c, hz = cn.axis === "horizontal";
  return { e, e2, directrices: hz ? [{ x: cn.center[0] - d }, { x: cn.center[0] + d }] : [{ y: cn.center[1] - d }, { y: cn.center[1] + d }] }; }

/* ---------------- parametric ---------------- */
// Projectile launched at speed v0, angle θ (degrees), height h0, gravity g: {x(t), y(t), vx, vy, T (flight time to y = 0), range, apex: {t, x, y}}
function projectile(v0, deg, h0 = 0, g = 9.8){ const th = deg * Math.PI / 180, vx = v0 * Math.cos(th), vy = v0 * Math.sin(th);
  const T = (vy + Math.sqrt(vy * vy + 2 * g * h0)) / g, ta = Math.max(0, vy / g);
  return { x: t => vx * t, y: t => h0 + vy * t - g * t * t / 2, vx, vy, T, range: vx * T, apex: { t: ta, x: vx * ta, y: h0 + vy * ta - g * ta * ta / 2 } }; }
// Point at distance d from the centre of a wheel of radius r rolling along the x-axis (d = r: cycloid; d < r curtate; d > r prolate)
const cycloid = (r, d = r) => ({ x: t => r * t - d * Math.sin(t), y: t => r - d * Math.cos(t) });

/* ---------------- counting and probability (exact while results stay below 2⁵³) ---------------- */
const safe = v => { if (!Number.isSafeInteger(v)) throw new Error("MathRules: count too large for exact arithmetic"); return v; };
const fact = n => { if (!Number.isInteger(n) || n < 0) return NaN; let r = 1; for (let i = 2; i <= n; i++) r = safe(r * i); return r; };
const nPr = (n, r) => { if (r < 0 || r > n) return 0; let v = 1; for (let i = 0; i < r; i++) v = safe(v * (n - i)); return v; };
// Arrangements of n objects with groups of identical ones of sizes ks: n!/(k₁!k₂!…)
const multiset = (n, ks) => { let v = 1, left = n; for (const k of ks) { v = safe(v * MR.nCr(left, k)); left -= k; } return v; };
const probQ = (fav, total) => (total ? Q(fav, total) : null);
// Inclusion–exclusion: n(A ∪ B) = n(A) + n(B) − n(A ∩ B); with N (sample space) → probabilities as Q
const inclExcl = (nA, nB, nAB, N) => { const u = nA + nB - nAB; return { union: u, onlyA: nA - nAB, onlyB: nB - nAB, neither: N == null ? null : N - u, pUnion: N ? Q(u, N) : null }; };

/* ---------------- limits ---------------- */
// lim_{x→a} num/den for polynomials, exactly. → {kind: "value" (continuous) | "hole" (0/0 removable) | "vertical", value: Q | "∞" | "−∞" | "DNE",
//   left, right (Q or "∞"/"−∞"), g (common factor), n1, d1 (reduced), zeroOverZero}
function ratLimit(num, den, a){
  num = Poly(num); den = Poly(den); a = Q(a); const g = Poly.gcd(num, den), n1 = Poly.divmod(num, g).q, d1 = Poly.divmod(den, g).q;
  const zz = Poly.eval(num, a).n === 0 && Poly.eval(den, a).n === 0, dv = Poly.eval(d1, a);
  if (dv.n !== 0) { const v = Q.div(Poly.eval(n1, a), dv); return { kind: zz ? "hole" : "value", value: v, left: v, right: v, g, n1, d1, zeroOverZero: zz }; }
  const f = x => Poly.evalN(n1, x) / Poly.evalN(d1, x), x0 = Q.val(a), eps = 1e-6, sL = Math.sign(f(x0 - eps)), sR = Math.sign(f(x0 + eps));
  const left = sL > 0 ? "∞" : MI + "∞", right = sR > 0 ? "∞" : MI + "∞";
  return { kind: "vertical", value: left === right ? left : "DNE", left, right, g, n1, d1, zeroOverZero: zz };
}
// lim_{x→±∞} num/den (sign = +1 or −1): Q, "∞" or "−∞", with the degrees used
function limInf(num, den, sign = 1){ num = Poly(num); den = Poly(den); const n = Poly.deg(num), m = Poly.deg(den), r = Q.div(Poly.lead(num), Poly.lead(den));
  if (n < m) return { value: Q(0), n, m, case: "lower" }; if (n === m) return { value: r, n, m, case: "equal" };
  const s = Math.sign(Q.val(r)) * ((n - m) % 2 && sign < 0 ? -1 : 1); return { value: s > 0 ? "∞" : MI + "∞", n, m, case: "higher" }; }
// x approaching a from one side: [{x, y}] with x = a ∓ 10⁻ᵏ, k = 1 … n
const limTable = (f, a, side = 1, n = 5) => Array.from({ length: n }, (_, i) => { const x = a + side * 10 ** -(i + 1); return { x, y: f(x) }; });
// Piecewise function: pieces [{p (Poly) | f (function), lo, hi, loIn, hiIn}] (lo/hi null = unbounded). Value at a, and the
// one-sided limits (each from the piece that covers the side; exact when the piece is a Poly and a is rational).
function pieceAt(pieces, a){ const x = Q.val(Q(a)), ev = (pc, at) => (pc.p ? Poly.eval(Poly(pc.p), Q(at)) : pc.f(Q.val(Q(at))));
  const cover = (t, incl) => pieces.find(pc => (pc.lo === null || pc.lo === undefined || t > pc.lo || (incl && pc.loIn && t === pc.lo)) && (pc.hi === null || pc.hi === undefined || t < pc.hi || (incl && pc.hiIn && t === pc.hi)));
  const at = cover(x, true), L = cover(x - 1e-9, false), R = cover(x + 1e-9, false);
  const val = v => (v === undefined ? undefined : v && v.isQ ? v : v);
  return { value: at ? val(ev(at, a)) : undefined, left: L ? ev(L, a) : undefined, right: R ? ev(R, a) : undefined, pieceAt: at, pieceL: L, pieceR: R }; }
const qnum = v => (v && v.isQ ? Q.val(v) : v);
// The three conditions at a, and the type of discontinuity: "continuous" | "removable" | "jump" | "infinite" | "undefined"
function continuityAt(pieces, a, o = {}){ const r = pieceAt(pieces, a), l = qnum(r.left), rr = qnum(r.right), v = qnum(r.value), tol = o.tol ?? 1e-9;
  const inf = [l, rr].some(z => z === undefined || !isFinite(z)); const limExists = !inf && Math.abs(l - rr) <= tol, defined = v !== undefined && isFinite(v), equal = defined && limExists && Math.abs(v - l) <= tol;
  const type = equal ? "continuous" : inf ? "infinite" : !limExists ? "jump" : "removable";
  return { defined, limExists, equal, type, left: r.left, right: r.right, value: r.value }; }

Object.assign(MR, { Mat, rowOpT, matH, lp, partialFractions, avgRate, incDec, symmetry, diffQuot, slopeAt, signChanges, descartes, boundTest, bisect,
  logistic, logisticWhen, fit, polarConic, rotateConic, eccentricity, projectile, cycloid, fact, nPr, multiset, probQ, inclExcl,
  ratLimit, limInf, limTable, pieceAt, continuityAt });

/* ---------------- drawing (needs a DOM) ---------------- */
if (typeof document === "undefined" || !W.MathKit) return;
const attach0 = W.MathKit.attach;
W.MathKit.attach = k => {
  attach0(k); const { C } = k;
  // Matrix HTML whose entries can be scrubbable numbers: grid[i][j] = a k.vars key (string) or a fixed value (Q / number / html).
  // opt: {aug, det, cls(i, j)}; returns HTML (put it in a readout, steps panel, DOM panel or k.eqline).
  // opt.cls(i, j) colours the scrubbable number; opt.td(i, j) is a class for the table cell itself (highlight a row/column).
  k.matH = (S, grid, opt = {}) => matH(grid, Object.assign({}, opt, { cls: opt.td, cell: (i, j, v) => (typeof v === "string" && S && S.defs && S.defs[v] ? S.html(v, { cls: opt.cls ? opt.cls(i, j) || "c1" : undefined }) : v && v.isQ ? MR.qH(v).replace(/^<span class="m">|<\/span>$/g, "") : String(v).replace("-", MI)) }));
  const plane0 = k.plane;
  k.plane = (c, o = {}) => { const P = plane0(c, o), g = c.g;
    // Shade the feasible region of constraints [{a, b, c, rel}] (clipped to the window); returns the lp() result for the window
    P.feasible = (cons, color = k.alpha(C.green, .16), stroke) => { const win = [{ a: 1, b: 0, c: P.xmax, rel: "<=" }, { a: 1, b: 0, c: P.xmin, rel: ">=" }, { a: 0, b: 1, c: P.ymax, rel: "<=" }, { a: 0, b: 1, c: P.ymin, rel: ">=" }].map(w => ({ a: w.a, b: w.b, c: MR.Q(+w.c.toFixed(6)), rel: w.rel }));
      const R = lp([...cons, ...win], null); if (R.empty || !R.polygon) return R; const poly = R.polygon.length ? R.polygon : R.vertices;
      P.clip(() => { g.save(); g.fillStyle = color; g.beginPath(); poly.forEach((p, i) => (i ? g.lineTo(P.X(p.x), P.Y(p.y)) : g.moveTo(P.X(p.x), P.Y(p.y)))); g.closePath(); g.fill(); if (stroke) { g.strokeStyle = stroke; g.lineWidth = 1.5; g.stroke(); } g.restore(); });
      return R; };
    // Secant line of f through x = a and x = b, drawn across the window (opt.seg: only between the points)
    P.secant = (f, a, b, color = C.violet, opt = {}) => { const ya = f(a), yb = f(b); if (!isFinite(ya) || !isFinite(yb) || a === b) return null; const m = (yb - ya) / (b - a);
      if (opt.seg) P.seg(a, ya, b, yb, color, opt.w || 2, opt.dash); else P.seg(P.xmin, ya + m * (P.xmin - a), P.xmax, ya + m * (P.xmax - a), color, opt.w || 2, opt.dash); return m; };
    // Parametric curve with direction arrows (opt.arrows, default 4) and the point at parameter t; returns that point {x, y}
    P.paramTrace = (fx, fy, t0, t1, t, color = C.amber, opt = {}) => { P.param(fx, fy, t0, t1, color, opt.w || 2.5, opt.dash); const na = opt.arrows ?? 4;
      for (let i = 1; i <= na; i++) { const s = t0 + (t1 - t0) * i / (na + 1), e = (t1 - t0) * 1e-3, x0 = P.X(fx(s - e)), y0 = P.Y(fy(s - e)), x1 = P.X(fx(s + e)), y1 = P.Y(fy(s + e)), an = Math.atan2(y1 - y0, x1 - x0), px = P.X(fx(s)), py = P.Y(fy(s));
        if (![x0, y0, x1, y1].every(isFinite)) continue; g.save(); g.fillStyle = color; g.beginPath(); g.moveTo(px + 7 * Math.cos(an), py + 7 * Math.sin(an)); g.lineTo(px - 6 * Math.cos(an - .55), py - 6 * Math.sin(an - .55)); g.lineTo(px - 6 * Math.cos(an + .55), py - 6 * Math.sin(an + .55)); g.closePath(); g.fill(); g.restore(); }
      return t === undefined || t === null ? null : { x: fx(t), y: fy(t) }; };
    return P; };
  return k;
};
})();
