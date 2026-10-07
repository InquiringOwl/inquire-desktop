// Logic tests for the Precalculus rules (web/kits/subjects/precalc.js → MathRules additions).
const MR = load(...kits(), 'web/kits/subjects/math.js', 'web/kits/subjects/precalc.js').MathRules;
const { Q, Poly, Mat } = MR;
const S = q => (q && q.isQ ? q.toString() : q), M2 = M => M.map(r => r.map(S));
const near = (a, b, what, tol = 1e-9) => ok(Math.abs(a - b) < tol, `${what}: got ${a}, want ${b}`);

test('matrices: add, scale, multiply, transpose, dot terms', () => {
  const A = [[1, 2], [3, 4]], B = [[0, 1], [1, 0]];
  eq(M2(Mat.add(A, B)), [['1', '3'], ['4', '4']], 'A + B'); eq(Mat.add(A, [[1, 2, 3]]), null, 'size mismatch');
  eq(M2(Mat.scale(Q(1, 2), A)), [['1/2', '1'], ['3/2', '2']], '½A');
  eq(M2(Mat.mul(A, B)), [['2', '1'], ['4', '3']], 'AB'); eq(M2(Mat.mul(B, A)), [['3', '4'], ['1', '2']], 'BA ≠ AB');
  eq(M2(Mat.mul([[1, 2, 3]], [[4], [5], [6]])), [['32']], '1×3 · 3×1'); eq(Mat.mul([[1, 2]], [[1, 2]]), null, 'undefined product');
  eq(M2(Mat.T([[1, 2, 3], [4, 5, 6]])), [['1', '4'], ['2', '5'], ['3', '6']], 'transpose');
  eq(Mat.dotTerms(A, B, 1, 0).map(t => [S(t.a), S(t.b)]), [['3', '0'], ['4', '1']], 'row 2 of A · column 1 of B');
});
test('determinants: 2×2, 3×3, cofactor expansion along any row/column, 4×4', () => {
  eq(S(Mat.det([[3, 8], [4, 6]])), '-14', '2×2'); const A = [[2, -3, 1], [2, 0, -1], [1, 4, 5]];
  eq(S(Mat.det(A)), '49', '3×3');
  for (let i = 0; i < 3; i++) { eq(S(Mat.expand(A, 'row', i).det), '49', 'row ' + i); eq(S(Mat.expand(A, 'col', i).det), '49', 'col ' + i); }
  const e = Mat.expand(A, 'row', 0).terms; eq(e.map(t => t.sign), [1, -1, 1], 'sign pattern'); eq(e.map(t => S(t.M)), ['4', '11', '8'], 'minors');
  eq(S(Mat.det([[1, 2, 3, 4], [0, 1, 0, 2], [2, 0, 1, 1], [1, 1, 1, 1]])), S(Q(Mat.expand([[1, 2, 3, 4], [0, 1, 0, 2], [2, 0, 1, 1], [1, 1, 1, 1]], 'row', 1).det)), '4×4 two ways');
  eq(S(Mat.det([[1, 2], [2, 4]])), '0', 'singular');
});
test('rref: unique, inconsistent, dependent (parametric), steps replay to the result', () => {
  const R = Mat.rref([[1, 1, 1, 6], [2, -1, 1, 3], [1, 2, -1, 2]], { aug: 1 });
  eq(R.kind, 'unique', 'kind'); eq(R.x.map(S), ['1', '2', '3'], 'x, y, z');
  let M = Mat.of([[1, 1, 1, 6], [2, -1, 1, 3], [1, 2, -1, 2]]);
  for (const st of R.steps) { const o = st.op; if (o.type === 'swap') [M[o.i], M[o.j]] = [M[o.j], M[o.i]]; else if (o.type === 'scale') M[o.i] = M[o.i].map(v => Q.mul(v, o.c)); else M[o.i] = M[o.i].map((v, j) => Q.add(v, Q.mul(o.c, M[o.j][j]))); ok(Mat.eq(M, st.M), 'step replays: ' + MR.rowOpT(o)); }
  eq(Mat.rref([[1, 1, 2], [1, 1, 3]], { aug: 1 }).kind, 'none', 'parallel lines');
  const Dp = Mat.rref([[1, 2, -1, 3], [2, 4, -2, 6], [0, 1, 1, 1]], { aug: 1 }); eq(Dp.kind, 'infinite', 'dependent'); eq(Dp.free, [2], 'z free');
  eq(Dp.param.map(p => [S(p.c), Object.fromEntries(Object.entries(p.coef).map(([k, v]) => [k, S(v)]))]), [['1', { 2: '3' }], ['1', { 2: '-1' }], ['0', { 2: '1' }]], 'x = 1 + 3t, y = 1 − t, z = t');
  const G = Mat.rref([[2, 4, 6], [1, 3, 4]], { aug: 1, reduced: false }); ok(G.steps.every(s => s.phase === 'forward'), 'Gaussian has no back phase'); eq(M2(G.M), [['1', '3', '4'], ['0', '1', '1']], 'row-echelon with leading 1s (pivot row with a 1 chosen first)');
});
test('row operation text', () => {
  eq(MR.rowOpT({ type: 'add', i: 1, j: 0, c: Q(-3) }), 'R₂ → R₂ − 3R₁', 'add'); eq(MR.rowOpT({ type: 'swap', i: 0, j: 2 }), 'R₁ ↔ R₃', 'swap');
  eq(MR.rowOpT({ type: 'scale', i: 0, c: Q(1, 2) }), 'R₁ → (1/2)R₁', 'scale'); eq(MR.rowOpT({ type: 'add', i: 0, j: 1, c: Q(1) }), 'R₁ → R₁ + R₂', 'plus one');
  eq(MR.rowOpT({ type: 'scale', i: 1, c: Q(-1) }), 'R₂ → −R₂', 'negate');
});
test('inverse, solve, Cramer', () => {
  const I = Mat.inverse([[4, 7], [2, 6]]); eq(M2(I.inv), [['3/5', '-7/10'], ['-1/5', '2/5']], '2×2 inverse'); ok(Mat.eq(Mat.mul([[4, 7], [2, 6]], I.inv), Mat.id(2)), 'A·A⁻¹ = I');
  eq(Mat.inverse([[1, 2], [2, 4]]).singular, true, 'singular');
  const A3 = [[1, 2, 3], [0, 1, 4], [5, 6, 0]], I3 = Mat.inverse(A3); eq(M2(I3.inv), [['-24', '18', '5'], ['20', '-15', '-4'], ['-5', '4', '1']], '3×3 inverse');
  const C = Mat.cramer([[2, 1], [1, -1]], [5, 1]); eq([S(C.D), ...C.Ds.map(S), ...C.x.map(S)], ['-3', '-6', '-3', '2', '1'], 'Cramer 2×2');
  eq(Mat.cramer([[1, 2], [2, 4]], [1, 2]).x, null, 'D = 0'); eq(Mat.solve([[1, 1], [1, -1]], [4, 2]).x.map(S), ['3', '1'], 'solve');
  eq(Mat.rank([[1, 2], [2, 4]]), 1, 'rank'); eq(Mat.apply([[0, -1], [1, 0]], [1, 0]), [0, 1], 'rotate 90°');
});
test('linear programming: bounded max/min, unbounded, empty', () => {
  const cons = [{ a: 1, b: 0, c: 0, rel: '>=' }, { a: 0, b: 1, c: 0, rel: '>=' }, { a: 1, b: 1, c: 4 }, { a: 1, b: 3, c: 6 }];
  const R = MR.lp(cons, { a: 3, b: 2 }); eq(R.bounded, true, 'bounded'); eq(R.vertices.length, 4, '4 corners');
  eq(S(R.max.z), '12', 'max 3x + 2y'); eq(R.max.at.map(p => p.q.map(S)), [['4', '0']], 'at (4, 0)'); eq(S(R.min.z), '0', 'min at origin');
  ok(R.vertices.some(p => S(p.q[0]) === '3' && S(p.q[1]) === '1'), 'corner (3, 1) from x + y = 4 and x + 3y = 6');
  const U = MR.lp([{ a: 1, b: 0, c: 0, rel: '>=' }, { a: 0, b: 1, c: 0, rel: '>=' }, { a: 1, b: 1, c: 2, rel: '>=' }], { a: 1, b: 1 });
  eq(U.bounded, false, 'unbounded region'); eq(U.max, null, 'no maximum'); eq(S(U.min.z), '2', 'minimum still exists');
  eq(MR.lp([{ a: 1, b: 0, c: 1 }, { a: 1, b: 0, c: 2, rel: '>=' }], { a: 1, b: 0 }).empty, true, 'empty');
});
test('partial fractions: distinct linear, repeated, irreducible quadratic, improper', () => {
  const t = r => r.terms.map(x => [MR.polyT(x.num), MR.polyT(x.den), x.power]);
  eq(t(MR.partialFractions([1, 3], [{ p: [-1, 1] }, { p: [2, 1] }])), [['4/3', 'x − 1', 1], ['5/3', 'x + 2', 1]], '(3x+1)/((x−1)(x+2))');
  eq(t(MR.partialFractions([0, 1], [{ p: [-1, 1], m: 2 }])), [['1', 'x − 1', 1], ['1', 'x − 1', 2]], 'x/(x−1)²');
  eq(t(MR.partialFractions([2, 0, 1], [{ p: [0, 1] }, { p: [1, 0, 1] }])), [['2', 'x', 1], ['−x', 'x² + 1', 1]], '(x² + 2)/(x(x² + 1))');
  const I = MR.partialFractions([1, 0, 0, 1], [{ p: [-1, 1] }, { p: [1, 1] }]); eq(MR.polyT(I.poly), 'x', 'improper: quotient x'); eq(t(I), [['1', 'x − 1', 1], ['0', 'x + 1', 1]], 'remainder x+1 over (x−1)(x+1)');
  eq(MR.partialFractions([1, 3], [{ p: [-1, 1] }, { p: [2, 1] }]).unknowns, ['A', 'B'], 'unknown names');
});
test('function behaviour: average rate, increasing/decreasing, extrema, symmetry, difference quotient', () => {
  eq(S(MR.avgRate(Poly([0, 0, 1]), 1, 3)), '4', 'x² on [1, 3]'); near(MR.avgRate(x => x * x, 1, 3), 4, 'numeric');
  const D = MR.incDec([0, -3, 0, 1]); eq(D.ivs.map(v => v.dir), ['inc', 'dec', 'inc'], 'x³ − 3x'); eq(D.ext.map(e => [e.kind, S(e.q), S(e.y)]), [['max', '-1', '2'], ['min', '1', '-2']], 'extrema');
  eq(MR.incDec([0, 0, 0, 1]).ext, [], 'x³ has no extremum'); eq(MR.incDec([0, 0, 0, 1]).ivs.map(v => v.dir), ['inc'], 'x³ always increasing');
  eq(MR.symmetry(x => x ** 4 - x * x), 'even', 'even'); eq(MR.symmetry(x => x ** 3 - x), 'odd', 'odd'); eq(MR.symmetry(x => x * x + x), 'neither', 'neither'); eq(MR.symmetry(Math.sqrt), 'neither', 'one-sided domain');
  eq(MR.polyT(MR.diffQuot([0, 0, 1], 3)), 'x + 6', '(f(3 + h) − f(3))/h for x² is 6 + h'); eq(S(MR.slopeAt([1, 0, 0, 1], 2)), '12', "slope of x³ + 1 at 2");
});
test('zeros: Descartes, bounds, bisection', () => {
  const d = MR.descartes([-6, 11, -6, 1]); eq([d.pos, d.neg], [3, 0], 'x³ − 6x² + 11x − 6'); eq(d.posCounts, [3, 1], 'possible positive');
  eq(MR.descartes([0, 0, 1, -1]).zeroRoot, 2, 'x²(… ) zero root multiplicity');
  eq(MR.boundTest([-6, 11, -6, 1], 6).upper, true, '6 passes the upper-bound test'); eq(MR.boundTest([-6, 11, -6, 1], 4).upper, false, '4 is a bound but the test is inconclusive (row 1, −2, 3, 6)');
  eq(MR.boundTest([-6, 11, -6, 1], -1).lower, true, '−1 is a lower bound');
  const B = MR.bisect(x => x * x - 2, 1, 2, { tol: 1e-6 }); near(B.root, Math.SQRT2, '√2', 1e-6); ok(B.steps.length > 15, 'enough halvings'); eq(MR.bisect(x => x * x + 1, -1, 1).bad, true, 'no sign change');
});
test('models: logistic and least-squares fits', () => {
  const L = MR.logistic(1000, 9, 0.5); near(L.y0, 100, 'initial'); near(L.inflection.t, Math.log(9) / 0.5, 'inflection t'); near(L.f(L.inflection.t), 500, 'half capacity');
  near(MR.logisticWhen(1000, 9, 0.5, 500), Math.log(9) / 0.5, 'when half'); eq(MR.logisticWhen(1000, 9, 0.5, 1000), null, 'never reaches c');
  const E = MR.fit('exp', [[0, 3], [1, 6], [2, 12], [3, 24]]); near(E.a, 3, 'a'); near(E.b, 2, 'b'); near(E.r2, 1, 'perfect fit');
  const P = MR.fit('power', [[1, 2], [2, 16], [3, 54]]); near(P.a, 2, 'power a'); near(P.b, 3, 'power b');
  const G = MR.fit('log', [[1, 5], [Math.E, 7], [Math.E ** 2, 9]]); near(G.a, 5, 'log a'); near(G.b, 2, 'log b');
  const Ln = MR.fit('linear', [[0, 1], [1, 3], [2, 4], [3, 7]]); near(Ln.b, 1.9, 'slope'); near(Ln.a, 0.9, 'intercept'); ok(Ln.r2 < 1 && Ln.r2 > 0.95, 'r² below 1');
  eq(MR.fit('exp', [[0, -1], [1, 2]]), null, 'negative y refused for exp');
});
test('conics: polar form, eccentricity, rotation of axes', () => {
  const E = MR.polarConic(Q(1, 2), 6, 'cos', 1); eq(E.type, 'ellipse', 'e = 1/2'); eq(E.vertices.map(v => v.map(S)), [['2', '0'], ['-6', '0']], 'vertices r(0) = 2, r(π) = 6');
  eq([S(E.a), S(E.c), S(E.b2)], ['4', '2', '12'], 'a, c, b²'); eq(E.center.map(S), ['-2', '0'], 'centre'); eq(S(E.directrix.x), '6', 'directrix x = 6');
  const H = MR.polarConic(2, 3, 'sin', -1); eq(H.type, 'hyperbola', 'e = 2'); eq(H.vertices.map(v => v.map(S)), [['0', '-2'], ['0', '-6']], 'vertices on the y-axis'); eq(S(H.directrix.y), '-3', 'directrix y = −3');
  eq(MR.polarConic(1, 4, 'cos', 1).vertices.map(v => v.map(S)), [['2', '0']], 'parabola vertex halfway to x = 4');
  const cn = MR.conic({ A: 9, C: 25, F: -225 }), ec = MR.eccentricity(cn); eq(S(ec.e2), '16/25', 'e² = c²/a²'); near(ec.directrices[1].x, 25 / 4, 'x = a²/c');
  const R = MR.rotateConic({ A: 1, B: 1, C: 1, F: -1 }); eq(R.type, 'ellipse', 'x² + xy + y² = 1'); near(R.theta, Math.PI / 4, 'θ = π/4'); eq([S(R.coefQ.A), S(R.coefQ.C)], ['3/2', '1/2'], 'A′, C′ exact');
  const R2 = MR.rotateConic({ A: 7, B: -6 * Math.sqrt(3), C: 13, F: -16 }); near(R2.theta, Math.PI / 6, 'θ = 30°: cot 2θ = 1/√3'); near(R2.coef.A, 4, 'A′'); near(R2.coef.C, 16, 'C′');
  const R3 = MR.rotateConic({ A: 0, B: 1, C: 0, F: -1 }); eq(R3.type, 'hyperbola', 'xy = 1'); eq([S(R3.coefQ.A), S(R3.coefQ.C)], ['1/2', '-1/2'], 'x′²/2 − y′²/2 = 1');
  const R4 = MR.rotateConic({ A: 16, B: -24, C: 9, D: -30, E: -40 }); eq(R4.type, 'parabola', 'disc 0'); eq([S(R4.exact.cos2th), S(R4.exact.sin2th)], ['9/25', '16/25'], 'cos θ = 3/5, sin θ = 4/5'); eq([S(R4.coefQ.A), S(R4.coefQ.C)], ['0', '25'], 'A′ = 0, C′ = 25');
});
test('parametric: projectile and cycloid', () => {
  const P = MR.projectile(20, 30, 0, 10); near(P.T, 2, 'flight time'); near(P.range, 20 * Math.sqrt(3), 'range', 1e-9); near(P.apex.y, 5, 'apex height');
  const P2 = MR.projectile(10, 0, 20, 10); near(P2.T, 2, 'thrown flat from 20 m'); near(P2.range, 20, 'range');
  const cy = MR.cycloid(1); near(cy.x(Math.PI), Math.PI, 'x(π)'); near(cy.y(Math.PI), 2, 'top of the arch');
});
test('counting and probability', () => {
  eq([MR.fact(0), MR.fact(5), MR.nPr(10, 3), MR.nPr(5, 6), MR.nCr(52, 5)], [1, 120, 720, 0, 2598960], 'basics');
  eq(MR.multiset(11, [4, 4, 2, 1]), 34650, 'MISSISSIPPI'); eq(S(MR.probQ(4, 52)), '1/13', 'an ace');
  eq(MR.inclExcl(13, 4, 1, 52).union, 16, 'heart or king'); eq(S(MR.inclExcl(13, 4, 1, 52).pUnion), '4/13', 'P');
  let threw = false; try { MR.fact(25); } catch (e) { threw = true; } ok(threw, 'too large for exact Number arithmetic');
});
test('limits: rational limits, at infinity, piecewise continuity', () => {
  const h = MR.ratLimit([-4, 0, 1], [-2, 1], 2); eq([h.kind, S(h.value)], ['hole', '4'], '(x² − 4)/(x − 2) → 4');
  const v = MR.ratLimit([1], [-2, 1], 2); eq([v.kind, v.left, v.right, v.value], ['vertical', '−∞', '∞', 'DNE'], '1/(x − 2)');
  eq(MR.ratLimit([1], [4, -4, 1], 2).value, '∞', '1/(x − 2)²'); eq(S(MR.ratLimit([1, 1], [1], 3).value), '4', 'polynomial: substitute');
  eq(S(MR.limInf([1, 0, 3], [2, 1, 6], 1).value), '1/2', 'equal degrees'); eq(S(MR.limInf([1], [0, 0, 1]).value), '0', 'lower'); eq(MR.limInf([0, 0, 0, 1], [0, 1], -1).value, '∞', 'x³/x at −∞'); eq(MR.limInf([0, 0, 0, 1], [1], -1).value, '−∞', 'x³ at −∞');
  const T = MR.limTable(x => (x * x - 1) / (x - 1), 1, 1, 3); near(T[2].y, 2.001, 'table from the right');
  const pcs = [{ p: [1, 1], lo: null, hi: 2, hiIn: false }, { p: [3], lo: 2, hi: 2, loIn: true, hiIn: true }, { p: [-1, 2], lo: 2, hi: null, loIn: false }];
  const c = MR.continuityAt(pcs, 2); eq([c.type, S(c.left), S(c.right), S(c.value)], ['continuous', '3', '3', '3'], 'continuous at 2');
  const jump = [{ p: [0, 1], lo: null, hi: 0, hiIn: true }, { p: [1], lo: 0, hi: null, loIn: false }]; eq(MR.continuityAt(jump, 0).type, 'jump', 'jump at 0');
  const rem = [{ p: [0, 1], lo: null, hi: 1, hiIn: false }, { p: [5], lo: 1, hi: 1, loIn: true, hiIn: true }, { p: [0, 1], lo: 1, hi: null }]; eq(MR.continuityAt(rem, 1).type, 'removable', 'removable at 1');
  const inf = [{ f: x => 1 / x, lo: null, hi: 0 }, { f: x => 1 / x, lo: 0, hi: null }]; eq(MR.continuityAt(inf, 0).type, 'infinite', '1/x at 0');
});

test('solution text of an rref result', () => {
  eq(Mat.solText(Mat.rref([[1, 1, 1, 6], [2, -1, 1, 3], [1, 2, -1, 2]], { aug: 1 })), '(1, 2, 3)', 'unique');
  eq(Mat.solText(Mat.rref([[1, 1, 2], [1, 1, 3]], { aug: 1 })), '∅', 'none');
  eq(Mat.solText(Mat.rref([[1, 2, -1, 3], [2, 4, -2, 6], [0, 1, 1, 1]], { aug: 1 })), '(1 + 3t, 1 − t, t)', 'one free variable');
  eq(Mat.solText(Mat.rref([[1, 2, 3, 4]], { aug: 1 })), '(4 − 2s − 3t, s, t)', 'two free variables');
});
