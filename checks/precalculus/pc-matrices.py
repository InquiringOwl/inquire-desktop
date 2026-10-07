# content: d00bab3a6841
# pc-matrices: Matrices & Matrix Operations
from precalc import *
R = Rational
def meq(label, got, want): check(label, simplify(Matrix(got) - Matrix(want)).is_zero_matrix, f'{got} == {want}')
A0, B0 = mat([[1, 2], [3, 4]]), mat([[2, 0], [1, 3]])
# hero / formal: AB vs BA, entrywise product (mistake) differs
meq("formal", A0*B0, mat([[4, 6], [10, 12]]))
meq("formal", B0*A0, mat([[2, 4], [10, 14]]))
check("formal", A0*B0 != B0*A0, "AB != BA")
meq("formal", A0.multiply_elementwise(B0), mat([[2, 0], [3, 12]]))
# formal: properties on symbolic 2x2 matrices
Ms = [Matrix(2, 2, symbols(p + '0:4')) for p in 'pqr']
P_, Q_, R_ = Ms
meq("formal", expand((P_*Q_)*R_ - P_*(Q_*R_)), zeros(2, 2))
meq("formal", expand(P_*(Q_ + R_) - (P_*Q_ + P_*R_)), zeros(2, 2))
meq("formal", P_*eye(2), P_)
check("formal", expand((P_ + Q_)**2 - (P_**2 + P_*Q_ + Q_*P_ + Q_**2)) == zeros(2, 2), "(A+B)^2 expansion")
check("formal", expand((P_ + Q_)**2 - (P_**2 + 2*P_*Q_ + Q_**2)) != zeros(2, 2), "(A+B)^2 != A^2+2AB+B^2 in general")

# example
A, B = mat([[2, -1, 0], [1, 3, 4]]), mat([[1, 2], [0, -1], [3, 1]])
same("example", A.shape, (2, 3)); same("example", B.shape, (3, 2))
AB = A*B
meq("example", AB, mat([[2, 5], [13, 3]]))
same("example", (2*1 + (-1)*0 + 0*3, 2*2 + (-1)*(-1) + 0*1, 1*1 + 3*0 + 4*3, 1*2 + 3*(-1) + 4*1), (2, 5, 13, 3))
meq("example", B*A, mat([[4, 5, 8], [-1, -3, -4], [7, 0, 4]]))
same("example", (B*A).shape, (3, 3))

# practice
Ap, Bp = mat([[3, -1], [0, 2]]), mat([[1, 4], [-2, 5]])
meq("practice[0]", 2*Ap, mat([[6, -2], [0, 4]]))
meq("practice[0]", 2*Ap - Bp, mat([[5, -6], [2, -1]]))
X, Y = zeros(2, 3), zeros(3, 4)
same("practice[1]", (X*Y).shape, (2, 4))
try:
    Y*X; ok = False
except Exception:
    ok = True
check("practice[1]", ok, "BA undefined")
A3, B3 = mat([[1, 2], [3, 4]]), mat([[0, 1], [1, 0]])
meq("practice[2]", A3*B3, mat([[2, 1], [4, 3]]))
meq("practice[2]", B3*A3, mat([[3, 4], [1, 2]]))
meq("practice[2]", A3*B3, A3[:, [1, 0]])
meq("practice[2]", B3*A3, A3[[1, 0], :])
Qd, Pd = mat([[10, 4, 6], [8, 12, 5]]), mat([[3, 1], [2, 1], [6, 3]])
T = Qd*Pd
meq("practice[3]", T, mat([[74, 32], [78, 35]]))
same("practice[3]", (T[0, 0] - T[0, 1], T[1, 0] - T[1, 1]), (42, 43))
