# content: 06cab4cf3c3e
# pc-partial-fractions: Partial Fraction Decomposition
from precalc import *
R = Rational
def eqx(label, got, want): check(label, simplify(got - want) == 0, f'{got} == {want}')
# hero
eqx("hero", partial((5*x - 4)/((x - 2)*(x + 1))), 2/(x - 2) + 3/(x + 1))
eqx("hero", 2*(x + 1) + 3*(x - 2), 5*x - 4)
# formal example
eqx("formal", partial((x + 7)/((x - 1)*(x + 3))), 2/(x - 1) - 1/(x + 3))
# example
f = (x**2 + 4*x + 5)/((x - 1)*(x**2 + 4))
check("example", discriminant(x**2 + 4, x) < 0, "x^2+4 irreducible")
A_, B_, C_ = symbols('A_ B_ C_')
rhs = expand(A_*(x**2 + 4) + (B_*x + C_)*(x - 1))
eqx("example", rhs, (A_ + B_)*x**2 + (C_ - B_)*x + (4*A_ - C_))
same("example", (1 + 4 + 5), 10); same("example", R(10, 5), 2)
s = solve_system([[1, 1, 0, 1], [0, -1, 1, 4], [4, 0, -1, 5]])
same("example", tuple(s['x']), (2, -1, 3))
same("example", (1 - 2, 4*2 - 5, -(-1) + 3), (-1, 3, 4))
eqx("example", partial(f), 2/(x - 1) + (3 - x)/(x**2 + 4))
eqx("example", expand(2*(x**2 + 4) + (3 - x)*(x - 1)), x**2 + 4*x + 5)
# practice
eqx("practice[0]", partial((x + 7)/((x - 1)*(x + 3))), 2/(x - 1) - 1/(x + 3))
same("practice[0]", (1 + 7, -3 + 7), (8, 4))
eqx("practice[1]", partial((3*x + 5)/(x + 1)**2), 3/(x + 1) + 2/(x + 1)**2)
eqx("practice[2]", partial((x**2 + 1)/(x*(x - 1)**2)), 1/x + 2/(x - 1)**2)
eqx("practice[2]", expand((x - 1)**2 + 2*x), x**2 + 1)
q_, r_ = div(x**3 + 2, x**2 - 1, x)
eqx("practice[3]", q_, x); eqx("practice[3]", r_, x + 2)
eqx("practice[3]", partial((x**3 + 2)/(x**2 - 1)), x + R(3, 2)/(x - 1) - R(1, 2)/(x + 1))
