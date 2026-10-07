# content: 40a1bbc7e6f3
# pc-polar-conics: Conics in Polar Coordinates
from precalc import *
R = Rational
X, Y, th = symbols('X Y th', real=True)
def rect(e, p, trig='cos', sign=1):
    """rectangular polynomial of r = ep/(1 + sign e trig): r = ep - sign e (x or y), squared"""
    u = X if trig == 'cos' else Y
    e, p = nsimplify(e), nsimplify(p)
    return expand(X**2 + Y**2 - (e * p - sign * e * u)**2)

# formal: r = ep/(1 + e cos th) is PF = e PD with directrix x = p (PF = r, PD = p - r cos th)
e_, p_ = symbols('e_ p_', positive=True)
r_ = e_ * p_ / (1 + e_ * cos(th))
same("formal", simplify(r_ - e_ * (p_ - r_ * cos(th))), 0)
r_ = e_ * p_ / (1 - e_ * sin(th))
same("formal", simplify(r_ - e_ * (p_ + r_ * sin(th))), 0)
# perihelion a(1 - e), aphelion a(1 + e), ep = a(1 - e^2)
a_ = symbols('a_', positive=True); ep = a_ * (1 - e_**2)
same("formal", (simplify(ep / (1 + e_)), simplify(ep / (1 - e_))), (a_ * (1 - e_), a_ * (1 + e_)))

# example: r = 15/(3 - 2 cos th)
r = 15 / (3 - 2 * cos(th))
same("example", simplify(r - 5 / (1 - R(2, 3) * cos(th))), 0)
E = polar_conic(R(2, 3), R(15, 2), 'cos', -1)
same("example", E['type'], 'ellipse'); same("example", E['directrix'], ('x', -R(15, 2)))
same("example", (r.subs(th, 0), r.subs(th, pi)), (15, 3))
same("example", sorted(E['vertices']), [(-3, 0), (15, 0)])
same("example", (E['center'], E['a'], E['c'], E['b2']), ((6, 0), 9, 6, 45))
same("example", expand(9 * (X**2 + Y**2) - (15 + 2 * X)**2), expand(5 * (X - 6)**2 + 9 * Y**2 - 405))
same("example", expand(rect(R(2, 3), R(15, 2), 'cos', -1) * 9 / 405), expand((X - 6)**2 / 81 + Y**2 / 45 - 1))

# practice
P0 = polar_conic(1, 4, 'cos', 1)
same("practice[0]", (P0['type'], P0['directrix'], P0['vertices']), ('parabola', ('x', 4), [(2, 0)]))
r1 = 6 / (2 + sin(th)); same("practice[1]", simplify(r1 - 3 / (1 + R(1, 2) * sin(th))), 0)
P1 = polar_conic(R(1, 2), 6, 'sin', 1)
same("practice[1]", (P1['type'], P1['directrix']), ('ellipse', ('y', 6)))
same("practice[1]", (r1.subs(th, pi / 2), r1.subs(th, 3 * pi / 2)), (2, 6))
same("practice[1]", sorted(P1['vertices']), [(0, -6), (0, 2)])
r2 = 3 * 2 / (1 - 3 * sin(th))
same("practice[2]", (r2.subs(th, pi / 2), r2.subs(th, 3 * pi / 2)), (-3, R(3, 2)))
P2 = polar_conic(3, 2, 'sin', -1)
same("practice[2]", (P2['type'], P2['directrix'], sorted(P2['vertices'])), ('hyperbola', ('y', -2), [(0, -3), (0, -R(3, 2))]))
e3 = R(9, 10); ep3 = 1 * (1 + e3)
r3 = ep3 / (1 + e3 * cos(th))
same("practice[3]", (ep3, simplify(r3 - 19 / (10 + 9 * cos(th)))), (R(19, 10), 0))
same("practice[3]", (r3.subs(th, 0), r3.subs(th, pi), (r3.subs(th, 0) + r3.subs(th, pi)) / 2), (1, 19, 10))
