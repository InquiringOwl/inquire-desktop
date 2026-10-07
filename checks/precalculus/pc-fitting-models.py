# content: 1756f837a829
# pc-fitting-models: Fitting Exponential, Log & Power Models
from precalc import *
import math

def dec(label, expr, val, places):
    """The page's rounded decimal `val` is expr rounded to `places` decimals."""
    check(label, abs(N(expr, 20) - val) <= Rational(1, 2) * Rational(1, 10**places) + Rational(1, 10**12), f'{N(expr, 12)} vs {val}')

R = Rational
# formal: linearising identities
A, B, X = symbols('A B X', positive=True)
same("formal: ln(a b^x)", expand_log(log(A * B**X), force=True), log(A) + X * log(B))
same("formal: ln(a x^b)", expand_log(log(A * X**B), force=True), log(A) + B * log(X))
# least squares formula agrees with calculus minimisation
xs, ys = [0, 1, 2, 3], [1, 3, 4, 7]
cc, mm = symbols('cc mm', real=True)
S = sum((yv - cc - mm * xv)**2 for xv, yv in zip(xs, ys))
sol = solve([diff(S, cc), diff(S, mm)], [cc, mm])
xb, yb = R(sum(xs), 4), R(sum(ys), 4)
mf = sum((xv - xb) * (yv - yb) for xv, yv in zip(xs, ys)) / sum((xv - xb)**2 for xv in xs)
same("formal: slope formula", sol[mm], mf)
same("formal: intercept formula", sol[cc], yb - mf * xb)

# hero + example
pts = [(0, 120), (1, 190), (2, 290), (3, 470), (4, 720)]
Ys = [log(v) for _, v in pts]
for (xv, yv), page_v in zip(pts, [4.787, 5.247, 5.670, 6.153, 6.579]):
    dec("example", log(yv), page_v, 3)
Yb = sum(Ys) / 5
dec("example", Yb, 5.6873, 4)
same("example", sum((xv - 2)**2 for xv, _ in pts), 10)
Sxy = sum((xv - 2) * (Y - Yb) for (xv, _), Y in zip(pts, Ys))
dec("example", Sxy, 4.4892, 4)
m_ = Sxy / 10
dec("example", m_, 0.4489, 4)
c_ = Yb - 2 * m_
dec("example", c_, 4.7894, 4)
a_, b_, r2 = fit_exp(pts)
dec("example", a_, 120.2, 1)
dec("example", b_, 1.567, 3)
dec("example", exp(c_), 120.2, 1)
dec("example", r2, 0.9997, 4)
dec("example", a_ * b_**6, 1778, 0)
dec("example: 56.7%", (b_ - 1) * 100, 56.7, 1)
dec("hero: 120.2", a_, 120.2, 1)

# practice
dec("practice[0]", exp(R(7, 10)), 2.014, 3)
dec("practice[0]", exp(R(405, 1000)), 1.499, 3)
dec("practice[1]", exp(R(11, 10)), 3.004, 3)
P3 = [(1, 3), (math.e, 5), (math.e**2, 7), (math.e**3, 9)]
a3, b3, r3 = fit_log(P3)
check("practice[2]", abs(a3 - 3) < 1e-9 and abs(b3 - 2) < 1e-9 and abs(r3 - 1) < 1e-12)
same("practice[2]", [3 + 2 * log(E**k_) for k_ in range(4)], [3, 5, 7, 9])
dec("practice[2]", 3 + 2 * log(20), 8.991, 3)
K = [(0.387, 0.241), (0.723, 0.615), (1, 1), (1.524, 1.881), (5.203, 11.862)]
ak, bk, rk = fit_power(K)
dec("practice[3]", bk, 1.499, 3)
dec("practice[3]", math.log(ak), 0.000, 3)
dec("practice[3]", ak, 1.000, 3)
dec("practice[3]", ak * 9.537**bk, 29.42, 2)
