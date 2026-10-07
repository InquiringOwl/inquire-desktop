# content: 945a1242ece0
# pc-parametric: Parametric Equations
from precalc import *
from trig import *

T = Symbol('T', real=True)
X, Y = symbols('X Y', real=True)

def elim_linear_t(xe, ye):
    """Solve x = xe(T) for T (linear in T) and substitute into ye."""
    s = solve(Eq(X, xe), T)
    assert len(s) == 1
    return expand(ye.subs(T, s[0]))

# hero / example: x = 1 + 2t, y = t^2 - 3, -2 <= t <= 2
xe, ye = 1 + 2*T, T**2 - 3
pts = [(xe.subs(T, v), ye.subs(T, v)) for v in (-2, -1, 0, 1, 2)]
same("example", pts, [(-3, 1), (-1, -2), (1, -3), (3, -2), (5, 1)])
same("example", solve(Eq(X, xe), T), [(X - 1)/2])
same("example", simplify(elim_linear_t(xe, ye) - ((X - 1)**2/4 - 3)), 0)
same("example", (xe.subs(T, -2), xe.subs(T, 2)), (-3, 5))
check("example", diff(xe, T) > 0)
same("example", (xe.subs(T, 0), ye.subs(T, 0)), (1, -3))
check("example", -2 <= 0 <= 2)

# formal: ellipse elimination, segment endpoints, circle reparametrisations
h_, k_, a_, b_ = symbols('h_ k_ a_ b_', positive=True)
ex_, ey_ = h_ + a_*cos(T), k_ + b_*sin(T)
same("formal: ellipse identity", simplify((ex_ - h_)**2/a_**2 + (ey_ - k_)**2/b_**2), 1)
x0_, y0_, x1_, y1_ = symbols('x0_ y0_ x1_ y1_', real=True)
sx, sy = x0_ + (x1_ - x0_)*T, y0_ + (y1_ - y0_)*T
same("formal: segment at t=0", (sx.subs(T, 0), sy.subs(T, 0)), (x0_, y0_))
same("formal: segment at t=1", (simplify(sx.subs(T, 1)), simplify(sy.subs(T, 1))), (x1_, y1_))
same("formal: x=t, y=f(t) is the graph", (lambda f: simplify(f.subs(T, X)))(T**3 - T), X**3 - X)
same("formal: cos t, sin t starts (1,0)", (cos(0), sin(0)), (1, 0))
same("formal: cos 2t, sin 2t on unit circle", simplify(cos(2*T)**2 + sin(2*T)**2), 1)
# cos 2t over [0, 2pi] turns 4pi: twice around; counterclockwise (angle 2t increasing)
same("formal: cos 2t goes around twice", (2*2*pi)/(2*pi), 2)
same("formal: sin t, cos t starts (0,1)", (sin(0), cos(0)), (0, 1))
# clockwise: x = sin t, y = cos t has angle atan2(cos t, sin t) = pi/2 - t, decreasing
check("formal: sin t, cos t is clockwise", simplify(diff(atan2(cos(T), sin(T)), T).subs(T, pi/4)) == -1)

# mistakes: x = sqrt(t), y = t  -> y = x^2, x >= 0 ; 3cos, 2sin ellipse
same("mistake: sqrt elimination", (sqrt(T)**2).subs(T, 4), 4)
check("mistake: sqrt(t) >= 0", all(sqrt(v) >= 0 for v in (0, 1, 4, 9)))
same("mistake: x^2/9 + y^2/4 = 1", simplify((3*cos(T))**2/9 + (2*sin(T))**2/4), 1)

# practice 1
same("practice[0]", elim_linear_t(T + 2, 3*T - 1), 3*X - 7)
# practice 2: x = 4cos t, y = 4 sin t, 0..pi
same("practice[1]", simplify((4*cos(T))**2 + (4*sin(T))**2), 16)
check("practice[1]", all(4*sin(v) >= 0 for v in (0, pi/6, pi/2, 5*pi/6, pi)))
same("practice[1]", ((4*cos(0), 4*sin(0)), (4*cos(pi), 4*sin(pi))), ((4, 0), (-4, 0)))
# practice 3: segment (1,-2) -> (4,7)
px, py = 1 + (4 - 1)*T, -2 + (7 - (-2))*T
same("practice[2]", (px, py), (1 + 3*T, -2 + 9*T))
same("practice[2]", (px.subs(T, Rational(1, 2)), py.subs(T, Rational(1, 2))), (Rational(5, 2), Rational(5, 2)))
same("practice[2]", ((1 + 4)/S(2), (-2 + 7)/S(2)), (Rational(5, 2), Rational(5, 2)))
# practice 4: x = 1 + 2cos t, y = -3 + 5 sin t
qx, qy = 1 + 2*cos(T), -3 + 5*sin(T)
same("practice[3]", simplify((qx - 1)**2/4 + (qy + 3)**2/25), 1)
same("practice[3]", (qx.subs(T, pi/2), qy.subs(T, pi/2)), (1, 2))
check("practice[3]", 2*5 > 0)
