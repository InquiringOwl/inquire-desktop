# content: 2f95598408cf
from precalc import *
from algebra import *

# plain: 120 miles in 2 hours
same("plain", Rational(120, 2), 60)

# formal: x^2 quotient 2a + h, slope 2a; ball velocity v0 - 32t
same("formal", expand(diff_quot(x**2, a)), 2*a + h)
same("formal", slope_at(x**2, a), 2*a)
s0, v0, t_ = symbols('s0 v0 t_')
pos = s0 + v0*x - 16*x**2
same("formal", simplify(slope_at(pos, t_) - (v0 - 32*t_)), 0)

# example: f = 2x^2 - x at a = 1
f = 2*x**2 - x
same("example", f.subs(x, 1), 1)
same("example", expand(f.subs(x, 1 + h)), 2*h**2 + 3*h + 1)
same("example", expand(diff_quot(f, 1)), 2*h + 3)
same("example", [(2*h + 3).subs(h, Rational(v)) for v in ('0.1', '0.01', '-0.01')], [Rational(v) for v in ('3.2', '3.02', '2.98')])
same("example", slope_at(f, 1), 3)
same("example", expand(1 + 3*(x - 1)), 3*x - 2)

# practice[0]
same("practice[0]", avg_rate(x**2, 1, 3), 4)

# practice[1]
g = x**2 + 4*x
same("practice[1]", g.subs(x, 1), 5)
same("practice[1]", expand(g.subs(x, 1 + h)), h**2 + 6*h + 5)
same("practice[1]", expand(diff_quot(g, 1)), h + 6)
same("practice[1]", slope_at(g, 1), 6)

# practice[2]
same("practice[2]", expand((2 + h)**3), h**3 + 6*h**2 + 12*h + 8)
same("practice[2]", expand(diff_quot(x**3, 2)), h**2 + 6*h + 12)
same("practice[2]", slope_at(x**3, 2), 12)
same("practice[2]", expand(8 + 12*(x - 2)), 12*x - 16)

# practice[3]
s = 64 + 48*x - 16*x**2
same("practice[3]", s.subs(x, 2), 96)
same("practice[3]", expand(s.subs(x, 2 + h)), 96 - 16*h - 16*h**2)
same("practice[3]", expand(diff_quot(s, 2)), -16 - 16*h)
same("practice[3]", slope_at(s, 2), -16)
