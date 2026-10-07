# content: 6f6dd67616e9
# pc-parent-functions: The Parent Function Library & Symmetry
from algebra import *
from precalc import *

def parity(f, var=x):
    e = simplify(f.subs(var, -var) - f) == 0
    o = simplify(f.subs(var, -var) + f) == 0
    return 'both' if e and o else 'even' if e else 'odd' if o else 'neither'

# formal: parent library verdicts
cc = Symbol('cc', real=True)
for f in [cc + 0*x, x**2, Abs(x), 1/x**2]:
    same("formal: even parent", parity(f), 'even')
for f in [x, x**3, real_root(x, 3), 1/x]:
    same("formal: odd parent", parity(f), 'odd')
same("formal: e^x neither", parity(exp(x)), 'neither')
same("formal: 2^x neither", parity(2**x), 'neither')
same("formal: zero is both", parity(0*x), 'both')
same("formal: sqrt domain", solveset(x >= 0, x, S.Reals), Interval(0, oo))
same("formal: ln domain", solveset(x > 0, x, S.Reals), Interval.open(0, oo))
# sums/products of even/odd (generic witnesses)
E1, E2, O1, O2 = x**2, Abs(x), x**3, real_root(x, 3)
same("formal: even+even", parity(E1 + E2), 'even'); same("formal: odd+odd", parity(O1 + O2), 'odd')
same("formal: even*even", parity(E1 * E2), 'even'); same("formal: odd*odd", parity(O1 * O2), 'even')
same("formal: even*odd", parity(E1 * O1), 'odd')
same("formal: e^x split", simplify((exp(x) + exp(-x))/2 + (exp(x) - exp(-x))/2 - exp(x)), 0)
same("formal: even part even", parity((exp(x) + exp(-x))/2), 'even')
same("formal: odd part odd", parity((exp(x) - exp(-x))/2), 'odd')
same("plain: sqrt points", (sqrt(1), sqrt(4)), (1, 2))
same("plain: (2,8) on x^3", 2**3, 8)

# example
f = x**3 - 4*x
same("example", expand(f.subs(x, -x)), -x**3 + 4*x)
same("example", expand(-f), -x**3 + 4*x)
same("example", parity(f), 'odd')
same("example", (f.subs(x, 1), f.subs(x, -1)), (-3, 3))
same("example", factor(f), x*(x - 2)*(x + 2))
same("example", real_solutions(Eq(f, 0)), {-2, 0, 2})
same("example", (f.subs(x, 3), f.subs(x, -3)), (15, -15))

# practice
g = 1/x**2
same("practice[0]", domain_excluded(g), [0])
same("practice[0]", imageset(Lambda(x, 1/x**2), Union(Interval.open(-oo, 0), Interval.open(0, oo))), Interval.open(0, oo))
same("practice[0]", parity(g), 'even')
same("practice[1]", parity(x**2 + 3*Abs(x)), 'even')
h = x**3 + 1
same("practice[2]", (h.subs(x, 1), h.subs(x, -1)), (2, 0))
same("practice[2]", parity(h), 'neither')
p = x**2 * real_root(x, 3)
same("practice[3]", parity(p), 'odd')
same("practice[3]", p.subs(x, 8), 128)
same("practice[3]", p.subs(x, -8), -128)
