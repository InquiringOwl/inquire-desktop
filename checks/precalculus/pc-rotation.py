# content: d9bf805cb596
# pc-rotation: Rotation of Axes & the Discriminant
from precalc import *
R = Rational
X, Y = symbols('X Y', real=True)
def delta(A, B, C, D, E, F):
    return Matrix([[A, R(B, 1) / 2 if not isinstance(B, Expr) else B / 2, nsimplify(D) / 2], [nsimplify(B) / 2, C, nsimplify(E) / 2], [nsimplify(D) / 2, nsimplify(E) / 2, F]]).det()

# hero / formal: rotation formulas, coefficient formulas, invariants
A, B, C, D, E, F, t_ = symbols('A B C D E F t_', real=True)
xs, ys = X * cos(t_) - Y * sin(t_), X * sin(t_) + Y * cos(t_)
Pl = Poly(expand(A * xs**2 + B * xs * ys + C * ys**2 + D * xs + E * ys + F), X, Y)
co = lambda i, j: Pl.coeff_monomial(X**i * Y**j)
Ap = A * cos(t_)**2 + B * sin(t_) * cos(t_) + C * sin(t_)**2
Cp = A * sin(t_)**2 - B * sin(t_) * cos(t_) + C * cos(t_)**2
Bp = B * cos(2 * t_) + (C - A) * sin(2 * t_)
same("formal", simplify(co(2, 0) - Ap), 0); same("formal", simplify(co(0, 2) - Cp), 0); same("formal", simplify(co(1, 1) - Bp), 0)
same("formal", simplify(co(1, 0) - (D * cos(t_) + E * sin(t_))), 0); same("formal", simplify(co(0, 1) - (-D * sin(t_) + E * cos(t_))), 0); same("formal", co(0, 0), F)
same("formal", simplify(Bp**2 - 4 * Ap * Cp - (B**2 - 4 * A * C)), 0)
same("formal", simplify(Ap + Cp - (A + C)), 0)
# cot 2θ = (A − C)/B makes B' = 0
same("formal", simplify(Bp.subs(t_, acot((A - C) / B) / 2).subs({A: 8, B: -12, C: 17})), 0)
same("formal", factor(X**2 - Y**2), (X - Y) * (X + Y))
same("formal", (conic_type(1, 0, 1), conic_type(1, 2, 1), conic_type(1, 3, 1)), ('ellipse', 'parabola', 'hyperbola'))

# example: 8x^2 - 12xy + 17y^2 = 20
same("example", (-12)**2 - 4 * 8 * 17, -400)
th = rotation_angle(8, -12, 17)
same("example", simplify(cot(2 * th)), R(3, 4)); same("example", simplify(cos(2 * th)), R(3, 5))
same("example", (sqrt((1 + R(3, 5)) / 2), sqrt((1 - R(3, 5)) / 2)), (2 / sqrt(5), 1 / sqrt(5)))
check("example", abs(N(cos(th) - 2 / sqrt(5), 40)) < 1e-30 and abs(N(sin(th) - 1 / sqrt(5), 40)) < 1e-30, 'cos θ, sin θ')
near("example", float(th * 180 / pi), 26.57)
Rr = rotated(8, -12, 17, 0, 0, -20)
same("example", (Rr['A'], Rr['B'], Rr['C'], Rr['F']), (5, 0, 20, -20))
same("example", (R(32 - 24 + 17, 5), R(8 + 24 + 68, 5)), (5, 20))
same("example", -4 * 5 * 20, -400)
check("example", conic_type(8, -12, 17) == 'ellipse')

# practice
same("practice[0]", [B_**2 - 4 * A_ * C_ for A_, B_, C_ in [(2, -5, 2), (1, 4, 4), (3, 2, 1)]], [9, 0, -8])
same("practice[0]", [conic_type(*v) for v in [(2, -5, 2), (1, 4, 4), (3, 2, 1)]], ['hyperbola', 'parabola', 'ellipse'])
check("practice[0]", all(delta(*v) != 0 for v in [(2, -5, 2, 0, 0, 7), (1, 4, 4, 1, 0, -3), (3, 2, 1, 0, 0, -5)]), 'none degenerate')
check("practice[0]", (3 + 1) * delta(3, 2, 1, 0, 0, -5) < 0, 'real ellipse')
same("practice[1]", rotation_angle(0, 1, 0), pi / 4)
check("practice[1]", rotated(0, 1, 0, 0, 0, -8) == {'A': R(1, 2), 'B': 0, 'C': -R(1, 2), 'D': 0, 'E': 0, 'F': -8}, 'x′²/2 − y′²/2 = 8')
same("practice[1]", expand((X**2 / 2 - Y**2 / 2 - 8) / 8), expand(X**2 / 16 - Y**2 / 16 - 1))
same("practice[2]", rotation_angle(13, -6 * sqrt(3), 7), pi / 3)
same("practice[2]", simplify(cot(2 * pi / 3) - 6 / (-6 * sqrt(3))), 0)
R2 = rotated(13, -6 * sqrt(3), 7, 0, 0, -16)
same("practice[2]", (R2['A'], R2['B'], R2['C'], R2['F']), (4, 0, 16, -16))
same("practice[2]", (R(13 - 18 + 21, 4), R(39 + 18 + 7, 4)), (4, 16))
same("practice[3]", rotation_angle(1, -2, 1), pi / 4)
R3 = rotated(1, -2, 1, -sqrt(2), -sqrt(2), 0)
check("practice[3]", R3 == {'A': 0, 'B': 0, 'C': 2, 'D': -2, 'E': 0, 'F': 0}, '2y′² − 2x′ = 0')
same("practice[3]", conic_type(1, -2, 1), 'parabola')
same("formal", (16 - 4, conic_type(1, 4, 1)), (12, "hyperbola"))
