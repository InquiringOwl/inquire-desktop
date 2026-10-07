# content: 681ac4905d84
# pc-parametric-motion: Parametric Graphs & Motion
from precalc import *
from trig import *

def dec(label, expr, val, places):
    check(label, abs(N(expr, 20) - val) <= Rational(1, 2) * Rational(1, 10**places) + Rational(1, 10**12), f'{N(expr, 12)} vs {val}')

T = Symbol('T', real=True)
v0, th, h0, g = symbols('v0 th h0 g', positive=True)
xg, yg = v0*cos(th)*T, h0 + v0*sin(th)*T - g*T**2/2

# formal
ta = solve(Eq(diff(yg, T), 0), T)
same("formal: apex time", ta, [v0*sin(th)/g])
same("formal: max height", simplify(yg.subs(T, ta[0]) - (h0 + (v0*sin(th))**2/(2*g))), 0)
y0g = yg.subs(h0, 0)
roots = solve(Eq(y0g, 0), T)
check("formal: T = 2 v0 sin th / g", any(simplify(r - 2*v0*sin(th)/g) == 0 for r in roots))
same("formal: R = v0^2 sin 2th / g", simplify(xg.subs(T, 2*v0*sin(th)/g) - v0**2*sin(2*th)/g), 0)
same("formal: max range at 45", solve(Eq(diff(sin(2*th), th), 0), th)[0], pi/4)
same("formal: 30 and 60 same range", sin(2*pi/6) - sin(2*pi/3), 0)
# target quadratic: y_T = h0 + x tan - g x^2 sec^2/(2 v0^2)
xT, yT, u = symbols('xT yT u', real=True)
a_ = g*xT**2/(2*v0**2)
yt_expr = h0 + xT*u - g*xT**2*(1 + u**2)/(2*v0**2)
same("formal: target quadratic", expand(-(yt_expr - yT) - (a_*u**2 - xT*u + (a_ + yT - h0))), 0)
same("formal: t at target", simplify(xg.subs(T, xT/(v0*cos(th)))), xT)
# cycloid
r_, d_ = symbols('r_ d_', positive=True)
cx, cy = r_*T - d_*sin(T), r_ - d_*cos(T)
same("formal: cycloid d=r", (simplify(cx.subs(d_, r_) - r_*(T - sin(T))), simplify(cy.subs(d_, r_) - r_*(1 - cos(T)))), (0, 0))
same("formal: cusp at 2pi n on ground", (cy.subs(d_, r_).subs(T, 2*pi), diff(cx.subs(d_, r_), T).subs(T, 2*pi), diff(cy.subs(d_, r_), T).subs(T, 2*pi)), (0, 0, 0))
same("formal: arch width 2 pi r", cx.subs(d_, r_).subs(T, 2*pi) - cx.subs(d_, r_).subs(T, 0), 2*pi*r_)
same("formal: arch height 2r", cy.subs(d_, r_).subs(T, pi), 2*r_)
# prolate loops: x'(t) = r - d cos t < 0 at t = 0 when d > r; curtate x' > 0 always
check("formal: prolate goes backward (loop)", (r_ - 2*r_*cos(0)) < 0)
check("formal: curtate always forward", simplify(diff(cx, T).subs(d_, r_/2)).subs(T, 0) > 0 and all((1 - Rational(1, 2)*cos(v)) > 0 for v in (0, 1, 2, 3)))
# beyond: arc length 8r and area 3 pi r^2 of one arch
r1 = symbols('r1', positive=True)
xc, yc = r1*(T - sin(T)), r1*(1 - cos(T))
sp_ = simplify(sqrt(diff(xc, T)**2 + diff(yc, T)**2))
same("beyond: arc length 8r", simplify(integrate(2*r1*sin(T/2), (T, 0, 2*pi))), 8*r1)
same("beyond: speed is 2r sin(t/2)", simplify(sp_.subs(T, pi/3) - 2*r1*sin(pi/6)), 0)
same("beyond: area 3 pi r^2", integrate(yc*diff(xc, T), (T, 0, 2*pi)), 3*pi*r1**2)

# example: 64 ft/s, 30 deg, 48 ft, g = 32
P = projectile(64, 30, 48, 32)
x1, y1 = 64*cos(pi/6)*T, 48 + 64*sin(pi/6)*T - 16*T**2
same("example", simplify(x1 - 32*sqrt(3)*T), 0)
same("example", expand(y1), 48 + 32*T - 16*T**2)
same("example", factor(16*T**2 - 32*T - 48), 16*(T - 3)*(T + 1))
same("example", P['T'], 3)
same("example", simplify(P['range']), 96*sqrt(3))
dec("example", 96*sqrt(3), 166.3, 1)
same("example", P['apex_t'], 1)
same("example", P['apex_y'], 64)
same("example", (simplify(x1.subs(T, 2)), y1.subs(T, 2)), (64*sqrt(3), 48))
dec("example", 64*sqrt(3), 110.9, 1)

# practice 1: 48 ft/s, 30 deg, ground
P1 = projectile(48, 30, 0, 32)
same("practice[0]", simplify(48*cos(pi/6) - 24*sqrt(3)), 0)
same("practice[0]", 48*sin(pi/6), 24)
same("practice[0]", P1['T'], Rational(3, 2))
same("practice[0]", simplify(P1['range']), 36*sqrt(3))
dec("practice[0]", 36*sqrt(3), 62.4, 1)
# practice 2: 80 ft/s, 45 deg, 6 ft
P2 = projectile(80, 45, 6, 32)
same("practice[1]", simplify(80*sin(pi/4)), 40*sqrt(2))
same("practice[1]", simplify(P2['apex_t']), 5*sqrt(2)/4)
dec("practice[1]", 5*sqrt(2)/4, 1.77, 2)
same("practice[1]", (40*sqrt(2))**2/64, 50)
same("practice[1]", simplify(P2['apex_y']), 56)
# practice 3: r = 2 cycloid
X3, Y3 = 2*T - 2*sin(T), 2 - 2*cos(T)
same("practice[2]", (X3.subs(T, pi/2), Y3.subs(T, pi/2)), (pi - 2, 2))
dec("practice[2]", pi - 2, 1.14, 2)
same("practice[2]", (X3.subs(T, pi), Y3.subs(T, pi)), (2*pi, 4))
# practice 4: collision
ax_, ay_, bx_, by_ = 2*T, T + 1, T + 3, T**2 - 5
same("practice[3]", solve(Eq(ax_, bx_), T), [3])
same("practice[3]", (ay_.subs(T, 3), by_.subs(T, 3)), (4, 4))
same("practice[3]", (ax_.subs(T, 3), ay_.subs(T, 3)), (6, 4))
Xs = Symbol('Xs', real=True)
same("practice[3]", sorted(solve(Eq(Xs/2 + 1, (Xs - 3)**2 - 5), Xs)), [Rational(1, 2), 6])
same("practice[3]", solve(Eq(ax_, Rational(1, 2)), T), [Rational(1, 4)])
same("practice[3]", solve(Eq(bx_, Rational(1, 2)), T), [Rational(-5, 2)])
same("practice[3]", (ay_.subs(T, Rational(1, 4)), by_.subs(T, Rational(-5, 2))), (Rational(5, 4), Rational(5, 4)))
