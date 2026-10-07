# content: dff933af0d4b
# pc-linear-programming: Systems of Inequalities & Linear Programming
from precalc import *

R = Rational
# hero + example
cons = [(3, 2, 24, '<='), (1, 2, 16, '<='), (1, 0, 0, '>='), (0, 1, 0, '>=')]
corners, vals, mx, mn = lp_corners(cons, (30, 50))
same("example", set(corners), {(0, 0), (8, 0), (0, 8), (4, 6)})
same("example", [vals[(0, 0)], vals[(8, 0)], vals[(0, 8)], vals[(4, 6)]], [0, 240, 400, 420])
same("example", mx, 420)
check("example", [p for p in corners if vals[p] == mx] == [(4, 6)])
X, Y = symbols('X Y')
check("example", solve([3 * X + 2 * Y - 24, X + 2 * Y - 16], [X, Y]) == {X: 4, Y: 6})
same("example", 30 * 4 + 50 * 6, 420)
same("hero", (4, 6), [p for p in corners if vals[p] == mx][0])
# practice
check("practice[0]", 2 + 3 <= 6 and 2 * 2 - 3 >= 0)
c2, v2, mx2, mn2 = lp_corners([(1, 0, 0, '>='), (0, 1, 0, '>='), (1, 1, 5, '<='), (1, 3, 9, '<=')], (4, 5))
same("practice[1]", set(c2), {(0, 0), (5, 0), (0, 3), (3, 2)})
same("practice[2]", sorted(v2.values()), [0, 15, 20, 22])
same("practice[2]", (mx2, [p for p in c2 if v2[p] == mx2]), (22, [(3, 2)]))
c4, v4, mx4, mn4 = lp_corners([(1, 1, 4, '>='), (1, 3, 6, '>='), (1, 0, 0, '>='), (0, 1, 0, '>=')], (3, 2))
same("practice[3]", set(c4), {(0, 4), (3, 1), (6, 0)})
same("practice[3]", [v4[(0, 4)], v4[(3, 1)], v4[(6, 0)]], [8, 11, 18])
same("practice[3]", mn4, 8)
# unbounded: (t, 4) is feasible for all t >= 4 and C = 3t + 8 grows without bound
tt = Symbol('tt', positive=True)
check("practice[3]", all(v >= 0 for v in [tt + 4 - 4]) and limit(3 * tt + 8, tt, oo) == oo)
check("practice[3]", (lambda q: q + 4 >= 4 and q + 12 >= 6)(10**6))
