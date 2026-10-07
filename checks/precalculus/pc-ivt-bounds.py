# content: 21636351f197
# content: unstamped
from precalc import *
from algebra import *

P = x**3 - 2*x - 5
# formal: Descartes counts for x^3 − 2x − 5
same("formal", descartes(P), (1, 2))
same("formal", expand(P.subs(x, -x)), -x**3 + 2*x - 5)

# example
same("example", descartes(P), (1, 2))
same("example", synth([1, 0, -2, -5], 3), ([1, 3, 7], 16))
check("example", upper_bound_ok(P, 3), "3 is an upper bound")
same("example", synth([1, 0, -2, -5], -2), ([1, -2, 2], -9))
same("example", [P.subs(x, v) for v in (-2, -1, 0, 1, 2, 3)], [-9, -4, -5, -6, -1, 16])
same("example", P.subs(x, Rational(5, 2)), Rational(45, 8))       # 5.625
same("example", P.subs(x, Rational(9, 4)), Rational(121, 64))      # 1.890625
same("example", Rational(121, 64), Rational(1890625, 1000000))
near("example", P.subs(x, Rational(17, 8)), 0.3457)
near("example", P.subs(x, Rational(33, 16)), -0.3513)
check("example", P.subs(x, Rational(33, 16)) < 0 < P.subs(x, Rational(17, 8)), "sign change on [2.0625, 2.125]")
same("example", Rational(17, 8) - Rational(33, 16), Rational(1, 16))
r = real_solutions(Eq(P, 0))
check("example", len(r) == 1, "exactly one real zero")
z = list(r)[0]
check("example", Rational(33, 16) < z < Rational(17, 8), "zero in [2.0625, 2.125]")
near("example", z, 2.0946)
check("example", all(P.subs(x, v) <= -1 for v in [Rational(k, 100) for k in range(-200, 1)]), "p ≤ −1 on [−2, 0]")
check("example", maximum(P, x, Interval(-2, 0)) <= -1, "bound p ≤ 0 + 4 − 5 = −1")

# practice[0]
f0 = x**3 + x - 1
same("practice[0]", (f0.subs(x, 0), f0.subs(x, 1)), (-1, 1))

# practice[1]
p1 = x**4 - 3*x**3 + 2*x**2 - x + 5
same("practice[1]", descartes(p1), (4, 0))
same("practice[1]", expand(p1.subs(x, -x)), x**4 + 3*x**3 + 2*x**2 + x + 5)

# practice[2]
p2 = x**3 - 2*x**2 - 5*x + 6
same("practice[2]", synth([1, -2, -5, 6], 4), ([1, 2, 3], 18))
check("practice[2]", upper_bound_ok(p2, 4), "4 is an upper bound")
same("practice[2]", synth([1, -2, -5, 6], -3), ([1, -5, 10], -24))
same("practice[2]", real_solutions(Eq(p2, 0)), {-2, 1, 3})

# practice[3]
g = x**2 - 2
same("practice[3]", [g.subs(x, v) for v in (Rational(3, 2), Rational(5, 4), Rational(11, 8))], [Rational(1, 4), Rational(-7, 16), Rational(-7, 64)])
same("practice[3]", [Rational(-7, 16), Rational(-7, 64)], [Rational(-4375, 10000), Rational(-109375, 1000000)])
check("practice[3]", Rational(1, 2**10) <= Rational(1, 1000) < Rational(1, 2**9), "n = 10 is the least")
same("practice[3]", 2**10, 1024)
