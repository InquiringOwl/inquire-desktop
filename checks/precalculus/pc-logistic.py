# content: 434d1d3d22c1
# pc-logistic: Logistic Growth Models
from precalc import *

def dec(label, expr, val, places):
    """The page's rounded decimal `val` is expr rounded to `places` decimals."""
    check(label, abs(N(expr, 20) - val) <= Rational(1, 2) * Rational(1, 10**places) + Rational(1, 10**12), f'{N(expr, 12)} vs {val}')

R = Rational
T = Symbol('T', real=True)
def L(c_, a_, b_):
    return c_ / (1 + a_ * exp(-b_ * T))

# formal: general facts
cc, aa, bb = symbols('cc aa bb', positive=True)
F = L(cc, aa, bb)
same("formal: f(0) = c/(1+a)", simplify(F.subs(T, 0) - cc / (1 + aa)), 0)
same("formal: a = (c - f0)/f0", simplify((cc - cc / (1 + aa)) / (cc / (1 + aa)) - aa), 0)
same("formal: limit is c", limit(F, T, oo), cc)
ti = log(aa) / bb
same("formal: f(ln a / b) = c/2", simplify(F.subs(T, ti)), cc / 2)
same("formal: f'' = 0 at ln a / b", simplify(diff(F, T, 2).subs(T, ti)), 0)
same("formal: max rate bc/4", simplify(diff(F, T).subs(T, ti)), bb * cc / 4)
same("formal: relative rate b(1 - f/c)", simplify(diff(F, T) / F - bb * (1 - F / cc)), 0)
Lv = Symbol('Lv', positive=True)
same("formal: time to level", simplify(F.subs(T, log(aa * Lv / (cc - Lv)) / bb) - Lv), 0)
check("formal: f(t) = c never solved", solve(Eq(1 + 39 * exp(-R(4, 5) * T), 1), T) == [])

# hero / plain / example: 1200/(1+39e^{-0.8t})
f = L(1200, 39, R(4, 5))
same("plain/example: f(0) = 30", f.subs(T, 0), 30)
dec("example", log(39) / R(4, 5), 4.58, 2)
same("example", simplify(f.subs(T, log(39) / R(4, 5))), 600)
same("example", R(4, 5) * 1200 / 4, 240)
same("example", R(1200, 900), R(4, 3))
same("example", R(4, 3) - 1, R(1, 3))
same("example", R(1, 3) / 39, R(1, 117))
sol = solve(Eq(f, 900), T)
check("example", len(sol) == 1)
same("example", simplify(sol[0] - log(117) / R(4, 5)), 0)
dec("example", log(117) / R(4, 5), 5.953, 3)
dec("answer: 5.95", log(117) / R(4, 5), 5.95, 2)

# practice
p1 = L(500, 4, R(3, 10))
same("practice[0]", limit(p1, T, oo), 500)
same("practice[0]", p1.subs(T, 0), 100)
p2 = L(1000, 9, R(1, 2))
same("practice[1]", simplify(log(9) / R(1, 2) - 4 * log(3)), 0)
dec("practice[1]", 4 * log(3), 4.394, 3)
same("practice[1]", simplify(p2.subs(T, 4 * log(3))), 500)
same("practice[2]", R(1000, 800), R(5, 4))
same("practice[2]", (R(5, 4) - 1) / 9, R(1, 36))
s3 = solve(Eq(p2, 800), T)
same("practice[2]", simplify(s3[0] - 4 * log(6)), 0)
same("practice[2]", simplify(2 * log(36) - 4 * log(6)), 0)
dec("practice[2]", 4 * log(6), 7.167, 3)
same("practice[3]", R(2000 - 50, 50), 39)
same("practice[3]", R(2000, 200), 10)
same("practice[3]", R(9, 39), R(3, 13))
B = Symbol('B', positive=True)
sb = solve(Eq(L(2000, 39, B).subs(T, 4), 200), B)
same("practice[3]", simplify(sb[0] - log(R(13, 3)) / 4), 0)
dec("practice[3]", log(R(13, 3)) / 4, 0.3666, 4)
