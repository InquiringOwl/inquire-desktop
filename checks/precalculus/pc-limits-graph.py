# content: af50b4dde254
# content: unstamped
from precalc import *
from algebra import *

# formal: floor jump, 1/x^2, sin(1/x) values
same("formal", (lim(floor(x), 2, '-'), lim(floor(x), 2, '+')), (1, 2))
check("formal", lim(1/x**2, 0) == oo, "1/x^2 → ∞ from both sides")
k_ = symbols('k_', integer=True, nonnegative=True)
same("formal", simplify(sin(1/(2/((4*k_ + 1)*pi)))), 1)
same("formal", simplify(sin(1/(2/((4*k_ + 3)*pi)))), -1)
check("formal", all(isinstance(lim(sin(1/x), 0, d), AccumBounds) for d in "+-"), "sin(1/x) keeps every value in [−1, 1] near 0: no limit")

# example
f = (x**2 - 4)/(x - 2)
same("example", [f.subs(x, Rational(v)) for v in ('1.9', '1.99', '1.999')], [Rational(v) for v in ('3.9', '3.99', '3.999')])
same("example", [f.subs(x, Rational(v)) for v in ('2.1', '2.01', '2.001')], [Rational(v) for v in ('4.1', '4.01', '4.001')])
same("example", (lim(f, 2, '-'), lim(f, 2, '+'), lim(f, 2)), (4, 4, 4))
check("example", 2 in domain_excluded(f), "f(2) undefined")
same("example", cancel(f), x + 2)
same("example", holes(f), [(2, 4)])

# practice[0]
g = (x**2 - 9)/(x - 3)
same("practice[0]", [g.subs(x, Rational(v)) for v in ('2.99', '2.999', '3.01', '3.001')], [Rational(v) for v in ('5.99', '5.999', '6.01', '6.001')])
same("practice[0]", lim(g, 3), 6)
check("practice[0]", 3 in domain_excluded(g), "g(3) undefined")

# practice[1]
same("practice[1]", (lim(floor(x), 2, '-'), lim(floor(x), 2, '+')), (1, 2))
same("practice[1]", lim(floor(x), Rational(5, 2)), 2)

# practice[2]
pw = [(x + 1, x < 2), (1, Eq(x, 2)), (-x + 5, x > 2)]
same("practice[2]", continuous_at(pw, 2), (3, 3, 1, 'removable'))

# practice[3]
same("practice[3]", simplify(sin(1/(2/((4*k_ + 1)*pi)))), 1)
same("practice[3]", simplify(sin(1/(2/((4*k_ + 3)*pi)))), -1)
check("practice[3]", lim(1/x, 0, '-') == -oo and lim(1/x, 0, '+') == oo, "1/x: −∞ and ∞")
check("practice[3]", lim(1/x**2, 0, '-') == oo and lim(1/x**2, 0, '+') == oo, "1/x^2: ∞ both sides")
check("practice[3]", all(isinstance(lim(sin(1/x), 0, d), AccumBounds) for d in "+-"), "sin(1/x) oscillates")
