# content: 4bf60b2b19d2
# pc-matrix-transform: Matrices as Transformations of the Plane
from precalc import *
R = Rational
def meq(label, got, want): check(label, simplify(Matrix(got) - Matrix(want)).is_zero_matrix, f'{got} == {want}')
def rot(th): return Matrix([[cos(th), -sin(th)], [sin(th), cos(th)]])
# hero
H = mat([[2, 1], [0, 3]])
same("hero", (H*Matrix([1, 0]), H*Matrix([0, 1]), abs(H.det())), (Matrix([2, 0]), Matrix([1, 3]), 6))
# formal
meq("formal", rot(pi/6), Matrix([[sqrt(3)/2, -R(1, 2)], [R(1, 2), sqrt(3)/2]]))
meq("formal", rot(theta := symbols('theta'))*Matrix([1, 0]), Matrix([cos(theta), sin(theta)]))
Asym, Bsym = Matrix(2, 2, symbols('p0:4')), Matrix(2, 2, symbols('q0:4'))
v = Matrix([x, y])
meq("formal", expand(Bsym*(Asym*v) - (Bsym*Asym)*v), zeros(2, 1))
# unit square image area = |ad - bc|
a_, b_, c_, d_ = symbols('a_ b_ c_ d_')
pts = [Matrix([0, 0]), Matrix([a_, c_]), Matrix([a_ + b_, c_ + d_]), Matrix([b_, d_])]
shoelace = sum(pts[i][0]*pts[(i + 1) % 4][1] - pts[(i + 1) % 4][0]*pts[i][1] for i in range(4))/2
same("formal", expand(shoelace), a_*d_ - b_*c_)
meq("formal", mat([[1, 0], [0, -1]])*Matrix([x, y]), Matrix([x, -y]))
meq("formal", mat([[0, 1], [1, 0]])*Matrix([x, y]), Matrix([y, x]))

# example
Rm, Fm = rot(pi/2), mat([[1, 0], [0, -1]])
meq("example", Rm, mat([[0, -1], [1, 0]]))
meq("example", Fm*Rm, mat([[0, -1], [-1, 0]]))
meq("example", Fm*Rm*Matrix([3, 1]), Matrix([-1, -3]))
meq("example", Rm*Fm, mat([[0, 1], [1, 0]]))
meq("example", Rm*Fm*Matrix([3, 1]), Matrix([1, 3]))
meq("example", Fm*Rm*Matrix([x, y]), Matrix([-y, -x]))   # reflection in y = -x

# practice
meq("practice[0]", H*Matrix([1, -2]), Matrix([0, -6]))
A2 = mat([[3, -1], [1, 2]])
same("practice[1]", (A2*Matrix([1, 0]), A2*Matrix([0, 1])), (Matrix([3, 1]), Matrix([-1, 2])))
same("practice[1]", abs(A2.det()), 7)
meq("practice[2]", rot(pi/3), Matrix([[R(1, 2), -sqrt(3)/2], [sqrt(3)/2, R(1, 2)]]))
meq("practice[2]", rot(pi/3)*Matrix([2, 0]), Matrix([1, sqrt(3)]))
S_, D_ = mat([[1, 2], [0, 1]]), mat([[3, 0], [0, 1]])
meq("practice[3]", D_*S_, mat([[3, 6], [0, 1]]))
meq("practice[3]", S_*D_, mat([[3, 2], [0, 1]]))
same("practice[3]", (abs((D_*S_).det()), abs((S_*D_).det())), (3, 3))
