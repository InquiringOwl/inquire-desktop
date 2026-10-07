# content: 8fb9abde611c
# pc-matrix-inverse: Inverse Matrices & AX = B
from precalc import *
R = Rational
def meq(label, got, want): check(label, simplify(Matrix(got) - Matrix(want)).is_zero_matrix, f'{got} == {want}')
# hero
same("hero", det_of([[2, 1], [5, 3]]), 1); meq("hero", inv_of([[2, 1], [5, 3]]), mat([[3, -1], [-5, 2]]))
# formal
a_, b_, c_, d_ = symbols('a_ b_ c_ d_')
G = Matrix([[a_, b_], [c_, d_]])
check("formal", simplify(G.inv() - Matrix([[d_, -b_], [-c_, a_]])/(a_*d_ - b_*c_)) == zeros(2, 2), "2x2 formula")
H = mat([[1, 2, 0], [3, -1, 4], [2, 2, 1]]); K = mat([[0, 1, 1], [2, 5, -1], [1, 0, 3]])
meq("formal", (H*K).inv(), K.inv()*H.inv()); meq("formal", H.inv().inv(), H); same("formal", H.inv().det(), 1/H.det())
meq("formal", inv_of([[4, 7], [2, 6]]), mat([[6, -7], [-2, 4]])/10)
# example
A = [[2, 3], [1, 2]]
same("example", det_of(A), 1)
M = mat([[2, 3, 1, 0], [1, 2, 0, 1]])
M = row_op(M, 'swap', 0, 1); meq("example", M, mat([[1, 2, 0, 1], [2, 3, 1, 0]]))
M = row_op(M, 'add', 1, 0, -2); meq("example", M, mat([[1, 2, 0, 1], [0, -1, 1, -2]]))
M = row_op(M, 'scale', 1, None, -1); meq("example", M, mat([[1, 2, 0, 1], [0, 1, -1, 2]]))
M = row_op(M, 'add', 0, 1, -2); meq("example", M, mat([[1, 0, 2, -3], [0, 1, -1, 2]]))
meq("example", inv_of(A), mat([[2, -3], [-1, 2]]))
meq("example", inv_of(A)*mat([[4], [1]]), mat([[5], [-2]])); same("example", (2*4 + (-3)*1, (-1)*4 + 2*1), (5, -2))
same("example", (2*5 + 3*(-2), 5 + 2*(-2)), (4, 1))
# practice
same("practice[0]", det_of([[4, 7], [2, 6]]), 10)
meq("practice[0]", inv_of([[4, 7], [2, 6]]), mat([[R(3, 5), R(-7, 10)], [R(-1, 5), R(2, 5)]]))
same("practice[1]", det_of([[2, 4], [3, 6]]), 0); check("practice[1]", inv_of([[2, 4], [3, 6]]) is None, "singular")
A3 = [[1, 2, 3], [0, 1, 4], [5, 6, 0]]
same("practice[2]", det_of(A3), 1); same("practice[2]", 1*(-24) - 2*(-20) + 3*(-5), 1)
meq("practice[2]", inv_of(A3), mat([[-24, 18, 5], [20, -15, -4], [-5, 4, 1]]))
meq("practice[2]", mat(A3)*inv_of(A3), eye(3))
C = [[1, 2], [1, 3]]
same("practice[3]", det_of(C), 1); meq("practice[3]", inv_of(C), mat([[3, -2], [-1, 1]]))
meq("practice[3]", inv_of(C)*mat([[26], [35]]), mat([[8], [9]])); same("practice[3]", (78 - 70, -26 + 35), (8, 9))
meq("practice[3]", mat(C)*mat([[8], [9]]), mat([[26], [35]]))
same("practice[3]", chr(64 + 8) + chr(64 + 9), "HI")
