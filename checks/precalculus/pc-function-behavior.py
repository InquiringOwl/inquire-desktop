# content: 7532e5c4b626
# pc-function-behavior: Rates of Change & Behaviour of Graphs
from algebra import *
from precalc import *

# plain: odometer
same("plain: 60 km/h", Rational(160 - 40, 3 - 1), 60)

# formal / example
f = x**3 - 3*x
same("example", (f.subs(x, 0), f.subs(x, 2)), (0, 2))
same("example", avg_rate(f, 0, 2), 1)
same("example", real_solutions(Eq(diff(f, x), 0)), {-1, 1})
same("example", (f.subs(x, -1), f.subs(x, 1)), (2, -2))
same("example", [f.subs(x, t) for t in (-2, 0, 2)], [-2, 0, 2])
same("example", inc_dec(f), [(-oo, -1, 'inc'), (-1, 1, 'dec'), (1, oo, 'inc')])
same("example", extrema(f), [(-1, 2, 'max'), (1, -2, 'min')])
same("example", (f.subs(x, 3), f.subs(x, -3)), (18, -18))
same("formal: cubic unbounded", (limit(f, x, oo), limit(f, x, -oo)), (oo, -oo))
check("example: dips below axis on (0,2)", f.subs(x, 1) < 0)

# practice
same("practice[0]", avg_rate(x**2, 1, 4), 5)
same("practice[1]", Rational(15600 - 12400, 2020 - 2010), 320)
g = -x**2 + 6*x - 5
same("practice[2]", extrema(g), [(3, 4, 'max')])
same("practice[2]", inc_dec(g), [(-oo, 3, 'inc'), (3, oo, 'dec')])
same("practice[2]", maximum(g, x, S.Reals), 4)
h = Symbol('h')
same("practice[3]", expand(((1 + h)**3 - 1)/h), 3 + 3*h + h**2)
same("practice[3]", expand(((1 + h)**3 - 1)), 3*h + 3*h**2 + h**3)
same("practice[3]", limit(((1 + h)**3 - 1)/h, h, 0), 3)
