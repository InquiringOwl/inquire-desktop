# content: 2b4e2f03d8b9
# pc-eccentricity: Focus, Directrix & Eccentricity
from precalc import *
R = Rational
X, Y = symbols('X Y', real=True)
def locus(F, line, e):
    """points with PF^2 = e^2 PD^2; line = ('x', d) or ('y', d); returns the polynomial PF^2 - e^2 PD^2"""
    pd = (X - line[1]) if line[0] == 'x' else (Y - line[1])
    return expand((X - F[0])**2 + (Y - F[1])**2 - nsimplify(e)**2 * pd**2)
def ecc(a2, b2, kind):
    c2 = a2 - b2 if kind == 'ell' else a2 + b2
    return sqrt(c2), sqrt(R(c2, a2)), R(a2) / sqrt(c2)

# formal: e = c/a, directrices a/e = a^2/c, and PF = e PD with focus (ae, 0), directrix x = a/e gives the standard forms
a_, e_ = symbols('a_ e_', positive=True)
G = expand((X - a_ * e_)**2 + Y**2 - e_**2 * (X - a_ / e_)**2)
same("formal", simplify(G - (X**2 * (1 - e_**2) + Y**2 - a_**2 * (1 - e_**2))), 0)
for a2, b2, kind in [(25, 9, 'ell'), (9, 16, 'hyp'), (4, 3, 'ell')]:
    c, e, d = ecc(a2, b2, kind)
    a = sqrt(a2); check("formal", (e < 1) if kind == 'ell' else (e > 1), f'{kind} e = {e}')
    # every point of the curve satisfies PF = e PD with the right focus and directrix (sample points)
    for t0 in [R(1, 3), R(7, 5), 2]:
        if kind == 'ell': px, py = a * cos(t0), sqrt(b2) * sin(t0)
        else: px, py = a * cosh(t0), sqrt(b2) * sinh(t0)
        pf = sqrt((px - c)**2 + py**2); pd = Abs(px - d)
        check("formal", abs(N(pf - e * pd, 30)) < 1e-20, f'PF = e PD at t = {t0}')
check("formal", conic_type(1, 0, 1) == 'ellipse')

# example: F = (1, 0), directrix x = 4, e = 1/2 -> x^2/4 + y^2/3 = 1
Gx = locus((1, 0), ('x', 4), R(1, 2))
same("example", expand(Gx), expand(X**2 - 2*X + 1 + Y**2 - R(1, 4)*(X**2 - 8*X + 16)))
same("example", expand(Gx), expand(R(3, 4)*X**2 + Y**2 - 3))
same("example", expand(Gx / 3), expand(X**2/4 + Y**2/3 - 1))
c, e, d = ecc(4, 3, 'ell'); same("example", (c, e, d), (1, R(1, 2), 4))

# practice
c, e, d = ecc(25, 16, 'ell'); same("practice[0]", (c, e, d), (3, R(3, 5), R(25, 3)))
c, e, d = ecc(9, 16, 'hyp'); same("practice[1]", (c, e, d), (5, R(5, 3), R(9, 5)))
Gp = locus((0, 0), ('y', -2), 1)
same("practice[2]", expand(Gp), expand(X**2 - 4*Y - 4))
same("practice[2]", solve(Gp.subs(X, 0), Y), [-1])
Gh = locus((0, 0), ('x', 3), 2)
same("practice[3]", expand(-Gh), expand(3*X**2 - 24*X + 36 - Y**2))
same("practice[3]", expand(-Gh), expand(3*(X - 4)**2 - Y**2 - 12))
same("practice[3]", expand(-Gh / 12), expand((X - 4)**2/4 - Y**2/12 - 1))
same("practice[3]", sqrt(4 + 12) / 2, 2)
