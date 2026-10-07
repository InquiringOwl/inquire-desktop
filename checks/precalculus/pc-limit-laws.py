# content: b33d72b43cfd
from precalc import *
from algebra import *

# hero
same("hero", lim((x**2 - 9)/(x - 3), 3), 6)
same("hero", cancel((x**2 - 9)/(x - 3)), x + 3)

# plain
same("plain", (3*x**2 - x + 5).subs(x, 2), 15)
same("plain", ((x**2 - 9).subs(x, 3), (x - 3).subs(x, 3)), (0, 0))

# formal: squeeze examples
check("formal", lim(-Abs(x), 0) == 0 and lim(Abs(x), 0) == 0, "both bounds → 0")
same("formal", lim(x*sin(1/x), 0), 0)
same("formal", lim(sin(x)/x, 0), 1)
check("formal", all(Abs(v*sin(1/v)) <= Abs(v) for v in [Rational(1, n) for n in range(1, 30)] + [Rational(-3, 7), Rational(5, 2)]), "−|x| ≤ x sin(1/x) ≤ |x|")
# origin: Archimedes' bounds
check("origin", Rational(223, 71) < pi < Rational(22, 7), "223/71 < π < 22/7")

# example
f = (x**2 + 5*x + 6)/(x**2 - 4)
same("example", ((x**2 + 5*x + 6).subs(x, -2), (x**2 - 4).subs(x, -2)), (0, 0))
same("example", factor(x**2 + 5*x + 6), (x + 2)*(x + 3))
same("example", factor(x**2 - 4), (x - 2)*(x + 2))
same("example", cancel(f), (x + 3)/(x - 2))
same("example", lim(f, -2), Rational(-1, 4))
same("example", holes(f), [(-2, Rational(-1, 4))])

# practice[0]: laws with L = 4, M = -2
L_, M_ = 4, -2
same("practice[0]", L_**2 - 3*M_, 22)
same("practice[0]", L_ + M_, 2)
same("practice[0]", Rational(L_**2 - 3*M_, L_ + M_), 11)

# practice[1]
g = (x**2 - 2*x - 15)/(x - 5)
same("practice[1]", ((x**2 - 2*x - 15).subs(x, 5), (x - 5).subs(x, 5)), (0, 0))
same("practice[1]", factor(x**2 - 2*x - 15), (x - 5)*(x + 3))
same("practice[1]", lim(g, 5), 8)

# practice[2]
h_ = (sqrt(x) - 3)/(x - 9)
same("practice[2]", simplify((sqrt(x) - 3)*(sqrt(x) + 3) - (x - 9)), 0)
same("practice[2]", simplify(h_ - 1/(sqrt(x) + 3)), 0)
same("practice[2]", lim(h_, 9), Rational(1, 6))

# practice[3]
q_ = (1/x - Rational(1, 3))/(x - 3)
same("practice[3]", simplify(1/x - Rational(1, 3) - (3 - x)/(3*x)), 0)
same("practice[3]", simplify(q_ + 1/(3*x)), 0)
same("practice[3]", lim(q_, 3), Rational(-1, 9))
