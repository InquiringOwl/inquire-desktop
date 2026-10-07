"""Independent Precalculus helpers for check files:  from precalc import *
Written with sympy, separately from the lab kit (web/kits/subjects/precalc.js). The check environment already has every
sympy name (Matrix, Rational, limit, oo, apart, binomial, factorial, …) and the real symbols a…z.

    mat(rows) → sympy Matrix of exact Rationals          rref_of(rows) == (Matrix, pivots)   det_of(rows)   inv_of(rows) (None if singular)
    solve_system(rows_with_rhs) == {'kind': 'unique', 'x': [..]} | {'kind': 'none'} | {'kind': 'infinite', 'param': {symbol: expr}}
    cramer(A, b) == (D, [D1, …], [x1, …])     row_op(M, 'add', i, j, c) / ('swap', i, j) / ('scale', i, c) → new Matrix (0-based rows)
    lp_corners(cons, z) → (corners sorted, {corner: z}, best_max, best_min)   cons = [(a, b, c, '<=' or '>='), …] for a x + b y rel c (bounded regions)
    partial(expr) == sympy apart(expr, x)                avg_rate(f, a, b)   diff_quot(f, a) (simplified in h)   slope_at(f, a)
    extrema(f) == list of (x, f(x), 'max'|'min') of a polynomial or smooth f (real critical points)   inc_dec(f) == list of (lo, hi, 'inc'|'dec')
    descartes(poly) == (positive sign changes, negative sign changes)   upper_bound_ok(poly, c) (synthetic-division test)
    logistic_t(c, a, b, y) (time to reach y)   fit_exp(points) == (a, b, r2)   fit_power(points)   fit_log(points)   fit_linear(points)
    polar_conic(e, p, trig='cos', sign=1) == dict(type, vertices, center, a, c, b2, directrix)
    rotation_angle(A, B, C) == θ (exact where sympy can)  rotated(A, B, C, D, E, F) == dict of A′…F′ (simplified)  conic_type(A, B, C) (by B² − 4AC)
    projectile(v0, deg, h0, g) == dict(T, range, apex_t, apex_y) (exact sympy expressions)
    perm(n, r)  comb(n, r)  multiset(n, *ks)  prob(fav, total) == Rational
    lim(expr, a, dir='+-')   (sympy limit; dir '+', '-' or two-sided; returns oo / -oo / None for DNE)   lim_inf(expr, sign=1)
    continuous_at(pieces, a) with pieces = [(expr, cond), …] as for sympy Piecewise → (left, right, value, 'continuous'|'removable'|'jump'|'infinite')
    induction_ok(lhs_sum_term, rhs, n0=1, upto=12) checks Σ_{k=n0}^{n} term(k) == rhs(n) for n up to `upto`, and the inductive step symbolically
Compare exact values with same()/check(); use near() only for rounded numbers on the page.
"""
import sympy as sp

x, h, t, k, n = sp.symbols('x h t k n', real=True)


def mat(rows):
    return sp.Matrix([[sp.nsimplify(v) for v in r] for r in rows])


def rref_of(rows):
    return mat(rows).rref()


def det_of(rows):
    return mat(rows).det()


def inv_of(rows):
    M = mat(rows)
    return None if M.det() == 0 else M.inv()


def solve_system(rows):
    M = mat(rows); A, b = M[:, :-1], M[:, -1]; xs = sp.symbols('x1:%d' % (A.shape[1] + 1))
    sol = sp.linsolve((A, b), *xs)
    if sol == sp.EmptySet:
        return {'kind': 'none'}
    s = list(sol)[0]
    if all(v.free_symbols.isdisjoint(xs) for v in s):
        return {'kind': 'unique', 'x': list(s)}
    return {'kind': 'infinite', 'param': dict(zip(xs, s))}


def cramer(A, b):
    A = mat(A); D = A.det(); Ds = []
    for j in range(A.shape[1]):
        Aj = A.copy(); Aj[:, j] = sp.Matrix([sp.nsimplify(v) for v in b]); Ds.append(Aj.det())
    return D, Ds, (None if D == 0 else [d / D for d in Ds])


def row_op(M, kind, i, j=None, c=None):
    M = sp.Matrix(M).copy()
    if kind == 'swap':
        M.row_swap(i, j)
    elif kind == 'scale':
        M[i, :] = sp.nsimplify(c) * M[i, :]
    else:
        M[i, :] = M[i, :] + sp.nsimplify(c) * M[j, :]
    return M


def lp_corners(cons, z):
    """corners of a bounded feasible region; z = (p, q) for p x + q y"""
    X, Y = sp.symbols('X Y', real=True)
    lines = [(sp.nsimplify(a), sp.nsimplify(b), sp.nsimplify(c), rel) for a, b, c, rel in cons]
    def ok(px, py):
        return all((a * px + b * py - c <= 0) if rel == '<=' else (a * px + b * py - c >= 0) for a, b, c, rel in lines)
    pts = set()
    for i in range(len(lines)):
        for j in range(i + 1, len(lines)):
            a1, b1, c1, _ = lines[i]; a2, b2, c2, _ = lines[j]
            s = sp.solve([sp.Eq(a1 * X + b1 * Y, c1), sp.Eq(a2 * X + b2 * Y, c2)], [X, Y], dict=True)
            if len(s) == 1 and X in s[0] and Y in s[0] and ok(s[0][X], s[0][Y]):
                pts.add((s[0][X], s[0][Y]))
    p, q = (sp.nsimplify(v) for v in z)
    vals = {pt: p * pt[0] + q * pt[1] for pt in pts}
    corners = sorted(pts, key=lambda pt: (float(pt[0]), float(pt[1])))
    mx = max(vals.values()) if vals else None; mn = min(vals.values()) if vals else None
    return corners, vals, mx, mn


def partial(expr):
    return sp.apart(sp.together(expr), x)


def avg_rate(f, a, b):
    return sp.nsimplify((f.subs(x, b) - f.subs(x, a)) / (sp.nsimplify(b) - sp.nsimplify(a)))


def diff_quot(f, a):
    return sp.simplify((f.subs(x, a + h) - f.subs(x, a)) / h)


def slope_at(f, a):
    return sp.diff(f, x).subs(x, a)


def extrema(f):
    out = []
    for c in sorted(sp.solveset(sp.diff(f, x), x, sp.S.Reals), key=float):
        d2 = sp.diff(f, x, 2).subs(x, c)
        if d2 != 0:
            out.append((c, sp.simplify(f.subs(x, c)), 'max' if d2 < 0 else 'min'))
        else:
            l, r = sp.diff(f, x).subs(x, c - sp.Rational(1, 1000)), sp.diff(f, x).subs(x, c + sp.Rational(1, 1000))
            if l * r < 0:
                out.append((c, sp.simplify(f.subs(x, c)), 'max' if l > 0 else 'min'))
    return out


def inc_dec(f):
    cs = sorted(sp.solveset(sp.diff(f, x), x, sp.S.Reals), key=float); ends = [-sp.oo] + cs + [sp.oo]; out = []
    for lo, hi in zip(ends, ends[1:]):
        tv = (lo + hi) / 2 if lo.is_finite and hi.is_finite else (hi - 1 if lo == -sp.oo and hi.is_finite else (lo + 1 if hi == sp.oo and lo.is_finite else 0))
        d = 'inc' if sp.diff(f, x).subs(x, tv) > 0 else 'dec'
        if out and out[-1][2] == d:
            out[-1] = (out[-1][0], hi, d)
        else:
            out.append((lo, hi, d))
    return out


def descartes(poly):
    P = sp.Poly(poly, x)
    def changes(cs):
        s = [sp.sign(c) for c in cs if c != 0]
        return sum(1 for i in range(1, len(s)) if s[i] != s[i - 1])
    return changes(P.all_coeffs()), changes(sp.Poly(poly.subs(x, -x), x).all_coeffs())


def upper_bound_ok(poly, c):
    q, r = sp.div(sp.Poly(poly, x), sp.Poly(x - c, x))
    row = q.all_coeffs() + [r.as_expr()]
    return all(v >= 0 for v in row) or all(v <= 0 for v in row)


def logistic_t(c, a, b, y):
    return sp.log(sp.nsimplify(a) * y / (c - y)) / sp.nsimplify(b)


def _ls(X, Y):
    n = len(X); mx = sum(X) / n; my = sum(Y) / n
    sxx = sum((u - mx)**2 for u in X); sxy = sum((u - mx) * (v - my) for u, v in zip(X, Y)); syy = sum((v - my)**2 for v in Y)
    m = sxy / sxx; c = my - m * mx; r2 = 1.0 if syy == 0 else sxy * sxy / (sxx * syy)
    return c, m, r2


def fit_linear(pts):
    c, m, r2 = _ls([float(p[0]) for p in pts], [float(p[1]) for p in pts]); return c, m, r2


def fit_exp(pts):
    import math
    c, m, r2 = _ls([float(p[0]) for p in pts], [math.log(float(p[1])) for p in pts]); return math.exp(c), math.exp(m), r2


def fit_power(pts):
    import math
    c, m, r2 = _ls([math.log(float(p[0])) for p in pts], [math.log(float(p[1])) for p in pts]); return math.exp(c), m, r2


def fit_log(pts):
    import math
    c, m, r2 = _ls([math.log(float(p[0])) for p in pts], [float(p[1]) for p in pts]); return c, m, r2


def polar_conic(e, p, trig='cos', sign=1):
    e, p = sp.nsimplify(e), sp.nsimplify(p); th = sp.Symbol('th', real=True)
    r = e * p / (1 + sign * e * (sp.cos(th) if trig == 'cos' else sp.sin(th)))
    typ = 'circle' if e == 0 else 'ellipse' if e < 1 else 'parabola' if e == 1 else 'hyperbola'
    on = (lambda v: (v, 0)) if trig == 'cos' else (lambda v: (0, v))
    d = {'type': typ, 'directrix': (('x' if trig == 'cos' else 'y'), sign * p)}
    r0 = sp.simplify(r.subs(th, 0 if trig == 'cos' else sp.pi / 2)); v1 = r0 if trig == 'cos' else r0
    v1 = r.subs(th, 0) if trig == 'cos' else r.subs(th, sp.pi / 2)
    p1 = (v1, 0) if trig == 'cos' else (0, v1)
    if typ == 'parabola':
        d['vertices'] = [p1]; return d
    v2 = r.subs(th, sp.pi) if trig == 'cos' else r.subs(th, 3 * sp.pi / 2)
    p2 = (-v2, 0) if trig == 'cos' else (0, -v2)
    d['vertices'] = [tuple(sp.simplify(c) for c in p1), tuple(sp.simplify(c) for c in p2)]
    ax = 0 if trig == 'cos' else 1
    c1, c2 = d['vertices'][0][ax], d['vertices'][1][ax]; cen = (c1 + c2) / 2; a = abs(c1 - c2) / 2; c = abs(cen)
    d.update(center=on(cen), a=a, c=c, b2=(c**2 - a**2) if typ == 'hyperbola' else (a**2 - c**2))
    return d


def conic_type(A, B, C):
    D = sp.nsimplify(B)**2 - 4 * sp.nsimplify(A) * sp.nsimplify(C)
    return 'ellipse' if D < 0 else 'parabola' if D == 0 else 'hyperbola'


def rotation_angle(A, B, C):
    A, B, C = (sp.nsimplify(v) for v in (A, B, C))
    if B == 0:
        return sp.Integer(0)
    th = sp.atan2(B, A - C) / 2
    th = sp.simplify(th + sp.pi / 2) if th.evalf() < 0 else sp.simplify(th)
    return th


def rotated(A, B, C, D=0, E=0, F=0, theta=None):
    A, B, C, D, E, F = (sp.nsimplify(v) for v in (A, B, C, D, E, F))
    th = rotation_angle(A, B, C) if theta is None else theta
    X, Y = sp.symbols('X Y', real=True); c, s = sp.cos(th), sp.sin(th)
    xx, yy = X * c - Y * s, X * s + Y * c
    expr = sp.expand(A * xx**2 + B * xx * yy + C * yy**2 + D * xx + E * yy + F)
    P = sp.Poly(expr, X, Y)
    g = lambda i, j: sp.nsimplify(sp.simplify(P.coeff_monomial(X**i * Y**j)))
    return {'A': g(2, 0), 'B': g(1, 1), 'C': g(0, 2), 'D': g(1, 0), 'E': g(0, 1), 'F': g(0, 0)}


def projectile(v0, deg_, h0=0, g=sp.Rational(98, 10)):
    v0, h0, g = sp.nsimplify(v0), sp.nsimplify(h0), sp.nsimplify(g); th = sp.nsimplify(deg_) * sp.pi / 180
    vx, vy = v0 * sp.cos(th), v0 * sp.sin(th); T = (vy + sp.sqrt(vy**2 + 2 * g * h0)) / g; ta = vy / g
    return {'T': sp.simplify(T), 'range': sp.simplify(vx * T), 'apex_t': sp.simplify(ta), 'apex_y': sp.simplify(h0 + vy * ta - g * ta**2 / 2)}


def perm(n_, r_):
    return sp.factorial(n_) / sp.factorial(n_ - r_) if 0 <= r_ <= n_ else 0


def comb(n_, r_):
    return sp.binomial(n_, r_)


def multiset(n_, *ks):
    out = sp.factorial(n_)
    for q in ks:
        out /= sp.factorial(q)
    return out


def prob(fav, total):
    return sp.Rational(fav, total)


def lim(expr, a, dir='+-'):
    if dir in ('+', '-'):
        return sp.limit(expr, x, a, dir)
    L, R = sp.limit(expr, x, a, '-'), sp.limit(expr, x, a, '+')
    return L if L == R else None


def lim_inf(expr, sign=1):
    return sp.limit(expr, x, sp.oo if sign > 0 else -sp.oo)


def continuous_at(pieces, a):
    """pieces as for sympy Piecewise [(expr, cond), …] (first true condition wins). One-sided limits come from the piece
    that holds just left/right of a (sympy's own Piecewise limits are unreliable at a boundary)."""
    a = sp.nsimplify(a); eps = sp.Rational(1, 10**9)
    def piece(at):
        for e, c in pieces:
            cc = c if isinstance(c, bool) else c.subs(x, at)
            if cc == True:
                return e
        return None
    eL, eR, eV = piece(a - eps), piece(a + eps), piece(a)
    L = sp.limit(eL, x, a, '-') if eL is not None else None
    R = sp.limit(eR, x, a, '+') if eR is not None else None
    v = None
    if eV is not None:
        v = sp.sympify(eV).subs(x, a)
        if v.has(sp.nan) or v in (sp.zoo, sp.oo, -sp.oo):
            v = None
    if any(q in (sp.oo, -sp.oo, sp.zoo, None) for q in (L, R)):
        kind = 'infinite'
    elif sp.simplify(L - R) != 0:
        kind = 'jump'
    elif v is None or sp.simplify(v - L) != 0:
        kind = 'removable'
    else:
        kind = 'continuous'
    return L, R, v, kind


def induction_ok(term, rhs, n0=1, upto=12):
    """term, rhs: functions of an integer (or sympy expressions in n). Checks the closed form for n0…upto and the step
    rhs(n) + term(n + 1) == rhs(n + 1) symbolically."""
    T = term if callable(term) else (lambda m: term.subs(n, m)); Rh = rhs if callable(rhs) else (lambda m: rhs.subs(n, m))
    s = 0
    for m in range(n0, upto + 1):
        s += T(m)
        if sp.nsimplify(sp.sympify(s - Rh(m))) != 0:
            return False
    return sp.nsimplify(sp.simplify(Rh(n) + T(n + 1) - Rh(n + 1))) == 0


if __name__ == '__main__':
    assert det_of([[2, -3, 1], [2, 0, -1], [1, 4, 5]]) == 49
    assert solve_system([[1, 1, 1, 6], [2, -1, 1, 3], [1, 2, -1, 2]]) == {'kind': 'unique', 'x': [1, 2, 3]}
    assert solve_system([[1, 1, 2], [1, 1, 3]])['kind'] == 'none' and solve_system([[1, 2, -1, 3], [2, 4, -2, 6], [0, 1, 1, 1]])['kind'] == 'infinite'
    assert inv_of([[4, 7], [2, 6]]) == sp.Matrix([[sp.Rational(3, 5), sp.Rational(-7, 10)], [sp.Rational(-1, 5), sp.Rational(2, 5)]]) and inv_of([[1, 2], [2, 4]]) is None
    assert cramer([[2, 1], [1, -1]], [5, 1]) == (-3, [-6, -3], [2, 1])
    cs, vals, mx, mn = lp_corners([(1, 0, 0, '>='), (0, 1, 0, '>='), (1, 1, 4, '<='), (1, 3, 6, '<=')], (3, 2)); assert mx == 12 and mn == 0 and len(cs) == 4
    assert partial((3 * x + 1) / ((x - 1) * (x + 2))) == sp.Rational(4, 3) / (x - 1) + sp.Rational(5, 3) / (x + 2)
    assert avg_rate(x**2, 1, 3) == 4 and diff_quot(x**2, 3) == h + 6 and slope_at(x**3 + 1, 2) == 12
    assert [e[2] for e in extrema(x**3 - 3 * x)] == ['max', 'min'] and [d for _, _, d in inc_dec(x**3 - 3 * x)] == ['inc', 'dec', 'inc']
    assert descartes(x**3 - 6 * x**2 + 11 * x - 6) == (3, 0) and upper_bound_ok(x**3 - 6 * x**2 + 11 * x - 6, 6) and not upper_bound_ok(x**3 - 6 * x**2 + 11 * x - 6, 4)
    a_, b_, r2 = fit_exp([(0, 3), (1, 6), (2, 12)]); assert abs(a_ - 3) < 1e-9 and abs(b_ - 2) < 1e-9 and abs(r2 - 1) < 1e-12
    E = polar_conic(sp.Rational(1, 2), 6); assert E['type'] == 'ellipse' and E['vertices'] == [(2, 0), (-6, 0)] and E['a'] == 4 and E['c'] == 2 and E['b2'] == 12
    H = polar_conic(2, 3, 'sin', -1); assert sorted(H['vertices']) == [(0, -6), (0, -2)] and H['type'] == 'hyperbola'
    assert rotation_angle(1, 1, 1) == sp.pi / 4 and rotated(1, 1, 1, 0, 0, -1) == {'A': sp.Rational(3, 2), 'B': 0, 'C': sp.Rational(1, 2), 'D': 0, 'E': 0, 'F': -1}
    assert rotation_angle(7, -6 * sp.sqrt(3), 13) == sp.pi / 6 and rotated(7, -6 * sp.sqrt(3), 13, 0, 0, -16)['A'] == 4
    P = projectile(20, 30, 0, 10); assert P['T'] == 2 and P['apex_y'] == 5 and P['range'] == 20 * sp.sqrt(3)
    assert perm(10, 3) == 720 and comb(52, 5) == 2598960 and multiset(11, 4, 4, 2, 1) == 34650 and prob(4, 52) == sp.Rational(1, 13)
    assert lim((x**2 - 4) / (x - 2), 2) == 4 and lim(1 / (x - 2), 2) is None and lim(1 / (x - 2)**2, 2) == sp.oo and lim_inf((3 * x**2 + 1) / (6 * x**2 + x + 2)) == sp.Rational(1, 2)
    assert continuous_at([(x + 1, x < 2), (3, sp.Eq(x, 2)), (2 * x - 1, True)], 2)[3] == 'continuous'
    assert continuous_at([(x, x <= 0), (1, True)], 0)[3] == 'jump' and continuous_at([(x, x < 1), (5, sp.Eq(x, 1)), (x, True)], 1)[3] == 'removable'
    assert induction_ok(lambda m: m, lambda m: m * (m + 1) / 2) and induction_ok(lambda m: m**2, n * (n + 1) * (2 * n + 1) / 6) and not induction_ok(lambda m: m, lambda m: m * m)
    print('precalc.py self-test: ok')
