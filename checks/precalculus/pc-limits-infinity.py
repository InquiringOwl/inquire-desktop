# content: d06e24807509
# content: unstamped
from precalc import *
from algebra import *

# hero
same("hero", lim_inf((3*x**2 - x + 1)/(x**2 + 4)), 3)
check("hero", lim(1/(x - 2), 2, '+') == oo, "∞")

# formal: basic limits
n_ = symbols('n_', positive=True)
same("formal", (lim(1/x, 0, '+'), lim(1/x, 0, '-'), lim(1/x**2, 0, '+'), lim(1/x**2, 0, '-')), (oo, -oo, oo, oo))
same("formal", (lim_inf(1/x**n_), lim_inf(1/x**3, -1), lim_inf(1/x**2, -1)), (0, 0, 0))
same("formal", (lim_inf(exp(x)), lim_inf(exp(x), -1), lim_inf(exp(-x)), lim_inf(exp(-x), -1)), (oo, 0, 0, oo))
same("formal", (lim_inf(log(x)), limit(log(x), x, 0, '+')), (oo, -oo))
# formal: degree rule, checked on one case of each kind (both directions)
same("formal", (lim_inf((5*x + 1)/(2*x**2 - 3)), lim_inf((5*x + 1)/(2*x**2 - 3), -1)), (0, 0))
same("formal", (lim_inf((6*x**2 - x)/(2*x**2 + 3)), lim_inf((6*x**2 - x)/(2*x**2 + 3), -1)), (3, 3))
same("formal", (lim_inf((x**3 + 1)/(4*x + 2)), lim_inf((x**3 + 1)/(4*x + 2), -1)), (oo, oo))
same("formal", (lim_inf((x**2 + 1)/(x - 1)), lim_inf((x**2 + 1)/(x - 1), -1)), (oo, -oo))
# formal: polynomial end behaviour example
same("formal", (lim_inf(-2*x**3 + x), lim_inf(-2*x**3 + x, -1)), (-oo, oo))

# example: f(x) = (x − 1)/(x² − 4)
f = (x - 1)/(x**2 - 4)
same("example", factor(x**2 - 4), (x - 2)*(x + 2))
same("example", sorted(vas(f)), [-2, 2])
check("example", holes(f) == [], "no common factor, no holes")
same("example", (lim(f, 2, '-'), lim(f, 2, '+')), (-oo, oo))
same("example", (lim(f, -2, '-'), lim(f, -2, '+')), (-oo, oo))
same("example", ((x - 1).subs(x, 2), (x + 2).subs(x, 2), (x - 1).subs(x, -2), (x - 2).subs(x, -2)), (1, 4, -3, -4))
same("example", simplify((1/x - 1/x**2)/(1 - 4/x**2) - f), 0)
same("example", (lim_inf(f), lim_inf(f, -1)), (0, 0))
same("example", hasym(f), 0)

# practice[0]
p0 = (4*x**3 - x)/(2*x**3 + 7)
same("practice[0]", simplify((4 - 1/x**2)/(2 + 7/x**3) - p0), 0)
same("practice[0]", lim_inf(p0), 2)

# practice[1]
p1 = (2*x**2 + 1)/(3 - x)
same("practice[1]", simplify((2*x + 1/x)/(3/x - 1) - p1), 0)
check("practice[1]", lim_inf(p1, -1) == oo, "∞")
check("practice[1]", lim_inf(p1) == -oo, "-∞")

# practice[2]
p2 = (x + 1)/(x - 3)**2
same("practice[2]", (lim(p2, 3, '-'), lim(p2, 3, '+'), lim(p2, 3)), (oo, oo, oo))
same("practice[2]", (x + 1).subs(x, 3), 4)
same("practice[2]", vas(p2), [3])

# practice[3]
p3 = (3*exp(x) + 2)/(exp(x) - 1)
same("practice[3]", simplify((3 + 2*exp(-x))/(1 - exp(-x)) - p3), 0)
same("practice[3]", (lim_inf(p3), lim_inf(p3, -1)), (3, -2))

# plain: table values and x = 1000
same("plain", [1/(Rational(v) - 2) for v in ('2.01', '2.001', '2.0001')], [100, 1000, 10000])
near("plain", ((3*x**2 - x + 1)/(x**2 + 4)).subs(x, 1000), 2.999)
check("plain", lim(1/(x - 2), 2, '-') == -oo, "-∞")

# mistakes
check("mistakes", lim((x - 3)/(x - 2), 2, '+') == -oo, "-∞")
check("mistakes", lim_inf((x**2 + 1)/(x - 1)) == oo, "∞")
