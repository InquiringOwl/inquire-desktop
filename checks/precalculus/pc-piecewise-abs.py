# content: e4555b686055
# pc-piecewise-abs: Piecewise & Absolute-Value Functions
from algebra import *
from precalc import *

# plain / formal
same("plain: floor 2.7", floor(Rational(27, 10)), 2)
same("plain: floor -2.3", floor(Rational(-23, 10)), -3)
same("formal: |x| pieces", (Piecewise((x, x >= 0), (-x, True)) - Abs(x)).subs(x, -5), 0)
check("formal: |x| = piecewise", all(Piecewise((x, x >= 0), (-x, True)).subs(x, v) == Abs(v) for v in range(-6, 7)))
check("formal: f(|x|) even", simplify((x**2 - 4*Abs(x)).subs(x, -x) - (x**2 - 4*Abs(x))) == 0)
check("formal: floor on [n, n+1)", all(floor(n + Rational(k, 10)) == n for n in range(-3, 4) for k in range(10)))
check("formal: ceiling", ceiling(Rational(10, 3)) == 4 and ceiling(4) == 4)
# V shape: a|x-h|+k, vertex (h,k), slopes ±a
A, H, K = 3, 2, -1
v = A*Abs(x - H) + K
same("formal: vertex", v.subs(x, H), K)
same("formal: slopes", (v.subs(x, H + 1) - v.subs(x, H), v.subs(x, H) - v.subs(x, H - 1)), (A, -A))

# example
f = Piecewise((x + 3, x < -1), (x**2, x <= 2), (6 - x, True))
same("example", [f.subs(x, t) for t in (-3, -1, 2, 5)], [0, 1, 4, 1])
same("example", limit(x + 3, x, -1), 2)
same("example", continuous_at([(x + 3, x < -1), (x**2, x <= 2), (6 - x, True)], -1), (2, 1, 1, 'jump'))
same("example", continuous_at([(x + 3, x < -1), (x**2, x <= 2), (6 - x, True)], 2), (4, 4, 4, 'continuous'))

# practice
g = Piecewise((2*x - 1, x <= 1), (5 - x, True))
same("practice[0]", (g.subs(x, 1), g.subs(x, 3)), (1, 2))
p2 = Piecewise((x - 3, x >= 3), (3 - x, True))
check("practice[1]", all(p2.subs(x, Rational(t, 2)) == Abs(Rational(t, 2) - 3) for t in range(-20, 21)))
C = lambda t: Min(4 + 2*(ceiling(t) - 1), 15)
same("practice[2]", C(3 + Rational(1, 3)), 10)
same("practice[2]", 4 + 2*7, 18)
same("practice[2]", C(Rational(15, 2)), 15)
same("practice[2]", ceiling(3 + Rational(1, 3)), 4)
fx = x**2 - 4*x
same("practice[3]", ineq(fx < 0), Interval.open(0, 4))
same("practice[3]", factor(fx), x*(x - 4))
same("practice[3]", extrema(-fx), [(2, 4, 'max')])
fa = x**2 - 4*x   # x >= 0 branch of f(|x|)
same("practice[3]", extrema(fa), [(2, -4, 'min')])
same("practice[3]", (x**2 - 4*Abs(x)).subs(x, -2), -4)
check("practice[3]", minimum(x**2 - 4*Abs(x), x, Interval(-10, 10)) == -4)
