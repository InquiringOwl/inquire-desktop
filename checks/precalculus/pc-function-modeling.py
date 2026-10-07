# content: 1d066dbd2bc7
# content: unstamped
from precalc import *
from algebra import *

# formal: the box model, its domain and its exact optimum (12 by 8 sheet)
V = x*(12 - 2*x)*(8 - 2*x)
same("formal", expand(V), 4*x**3 - 40*x**2 + 96*x)
same("formal", expand(diff(V, x)), 12*x**2 - 80*x + 96)
same("formal", reduce_inequalities([x > 0, 12 - 2*x > 0, 8 - 2*x > 0], x).as_set(), Interval.open(0, 4))
xs = (10 - 2*sqrt(7))/3
mx = [e for e in extrema(V) if e[2] == 'max']
check("formal", len(mx) == 1 and simplify(mx[0][0] - xs) == 0, "exact best cut (10 − 2√7)/3")
near("formal", xs, 1.57)
near("formal", V.subs(x, xs), 67.6)
check("formal", 0 < xs < 4, "optimum inside the domain")

# example: fence 120 m, wall, three widths
A = w*(120 - 3*w)
same("example", expand(A), -3*w**2 + 120*w)
same("example", reduce_inequalities([w > 0, 120 - 3*w > 0], w).as_set(), Interval.open(0, 40))
same("example", -120/(2*Integer(-3)), 20)
same("example", 120 - 3*20, 60)
same("example", A.subs(w, 20), 1200)
check("example", maximum(A, w, Interval.open(0, 40)) == 1200, "1200 is the maximum on the domain")

# practice[0]: perimeter 40
A0 = w*(20 - w)
same("practice[0]", reduce_inequalities([w > 0, 20 - w > 0], w).as_set(), Interval.open(0, 20))
same("practice[0]", solve(diff(A0, w), w), [10])
same("practice[0]", A0.subs(w, 10), 100)

# practice[1]: box values
same("practice[1]", V.subs(x, 1), 60)
same("practice[1]", V.subs(x, 2), 64)
check("practice[1]", 1 < xs < 2, "peak between 1 and 2")
near("practice[1]", xs, 1.57)
near("practice[1]", V.subs(x, xs), 67.6)

# practice[2]: profit
Pp = (p - 10)*(200 - 4*p)
same("practice[2]", expand(Pp), -4*p**2 + 240*p - 2000)
same("practice[2]", reduce_inequalities([p >= 0, 200 - 4*p >= 0], p).as_set(), Interval(0, 50))
same("practice[2]", solve(diff(Pp, p), p), [30])
same("practice[2]", Rational(240, 8), 30)
same("practice[2]", 200 - 4*30, 80)
same("practice[2]", Pp.subs(p, 30), 1600)

# practice[3]: closest point on y = √x to (3, 0)
d2 = (x - 3)**2 + x
same("practice[3]", expand(d2), x**2 - 5*x + 9)
same("practice[3]", solve(diff(d2, x), x), [Rational(5, 2)])
same("practice[3]", sqrt(Rational(5, 2)), sqrt(10)/2)
same("practice[3]", sqrt(d2.subs(x, Rational(5, 2))), sqrt(11)/2)
near("practice[3]", sqrt(11)/2, 1.66)
