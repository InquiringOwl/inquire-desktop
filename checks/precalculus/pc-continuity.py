# content: 58b6c9e9ba68
from precalc import *
from algebra import *
from sympy.calculus.util import continuous_domain

# formal: examples of removable and infinite discontinuities
r1 = (x**2 - 1)/(x - 1)
same("formal", lim(r1, 1), 2)
check("formal", 1 in domain_excluded(r1), "undefined at 1")
same("formal", continuous_at([(r1, x < 1), (r1, x > 1)], 1)[3], 'removable')
check("formal", lim(1/(x - 2)**2, 2, '-') == oo and lim(1/(x - 2)**2, 2, '+') == oo, "infinite at 2")
same("formal", continuous_at([(1/(x - 2)**2, x < 2), (1/(x - 2)**2, x > 2)], 2)[3], 'infinite')

# example: kx - 1 (x < 3), x^2 - k (x >= 3)
kk = symbols('kk')
sol = solve(Eq(3*kk - 1, 9 - kk), kk)
same("example", sol, [Rational(5, 2)])
K = Rational(5, 2)
pw = [(K*x - 1, x < 3), (x**2 - K, x >= 3)]
same("example", continuous_at(pw, 3), (Rational(13, 2), Rational(13, 2), Rational(13, 2), 'continuous'))
same("example", 3*K - 1, Rational(13, 2))
same("example", 9 - K, Rational(13, 2))

# practice[0]
f0 = (x + 1)/(x**2 - 4)
same("practice[0]", sorted(domain_excluded(f0)), [-2, 2])
same("practice[0]", continuous_domain(f0, x, Reals), Union(Interval.open(-oo, -2), Interval.open(-2, 2), Interval.open(2, oo)))

# practice[1]
g = (x**2 - x - 6)/(x - 3)
same("practice[1]", factor(x**2 - x - 6), (x - 3)*(x + 2))
same("practice[1]", lim(g, 3), 5)
check("practice[1]", 3 in domain_excluded(g), "g(3) undefined")
same("practice[1]", continuous_at([(g, x < 3), (g, x > 3)], 3)[3], 'removable')

# practice[2]
pw2 = [(2*x + 1, x < 1), (x**2 + 4, x >= 1)]
same("practice[2]", continuous_at(pw2, 1), (3, 5, 5, 'jump'))

# practice[3]
A_, B_ = symbols('A_ B_')
s3 = solve([Eq(1 + 1, A_ + B_), Eq(3*A_ + B_, 3**2 - 5)], [A_, B_])
same("practice[3]", (s3[A_], s3[B_]), (1, 1))
pw3 = [(x + 1, x < 1), (x + 1, (x >= 1) & (x < 3)), (x**2 - 5, x >= 3)]
same("practice[3]", continuous_at(pw3, 1)[3], 'continuous')
same("practice[3]", continuous_at(pw3, 3)[3], 'continuous')
