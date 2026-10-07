# content: 033eae501488
# pc-gaussian: Gaussian & Gauss-Jordan Elimination
from precalc import *
R = Rational
def meq(label, got, want): check(label, simplify(Matrix(got) - Matrix(want)).is_zero_matrix, f'{got} == {want}')
# hero
meq("hero", rref_of([[1, 2, 5], [3, -1, 1]])[0], mat([[1, 0, 1], [0, 1, 2]]))
# formal: dependent example
F = [[1, 0, -1, 1], [0, 1, 2, 2], [1, 1, 1, 3]]
meq("formal", rref_of(F)[0], mat([[1, 0, -1, 1], [0, 1, 2, 2], [0, 0, 0, 0]]))
s = solve_system(F)
same("formal", s['kind'], 'infinite')
T_ = symbols('T_')
check("formal", all(simplify(r[0]*(1 + T_) + r[1]*(2 - 2*T_) + r[2]*T_ - r[3]) == 0 for r in F), "(1+t, 2-2t, t) solves")

# example
E0 = [[1, 2, 1, 1], [2, 3, -1, -3], [3, -1, 2, 8]]
M = mat(E0)
M = row_op(M, 'add', 1, 0, -2); M = row_op(M, 'add', 2, 0, -3)
meq("example", M, mat([[1, 2, 1, 1], [0, -1, -3, -5], [0, -7, -1, 5]]))
M = row_op(M, 'scale', 1, None, -1)
meq("example", M, mat([[1, 2, 1, 1], [0, 1, 3, 5], [0, -7, -1, 5]]))
M = row_op(M, 'add', 2, 1, 7)
meq("example", M, mat([[1, 2, 1, 1], [0, 1, 3, 5], [0, 0, 20, 40]]))
M = row_op(M, 'scale', 2, None, R(1, 20))
meq("example", M, mat([[1, 2, 1, 1], [0, 1, 3, 5], [0, 0, 1, 2]]))
same("example", (5 - 3*2, 1 - 2*(-1) - 2), (-1, 1))
same("example", solve_system(E0)['kind'], 'unique'); same("example", tuple(solve_system(E0)['x']), (1, -1, 2))
same("example", 3*1 - (-1) + 2*2, 8)

# practice
meq("practice[0]", row_op(mat([[1, 2, 5], [3, -1, 1]]), 'add', 1, 0, -3), mat([[1, 2, 5], [0, -7, -14]]))
same("practice[0]", tuple(solve_system([[1, 2, 5], [3, -1, 1]])['x']), (1, 2))
meq("practice[1]", row_op(mat([[1, 1, 3], [2, 2, 7]]), 'add', 1, 0, -2), mat([[1, 1, 3], [0, 0, 1]]))
same("practice[1]", solve_system([[1, 1, 3], [2, 2, 7]])['kind'], 'none')
P2 = [[1, 1, 1, 3], [0, 1, -1, -1], [2, 1, 3, 7]]
M = row_op(row_op(mat(P2), 'add', 2, 0, -2), 'add', 2, 1, 1)
meq("practice[2]", M.row(2), zeros(1, 4))
M = row_op(M, 'add', 0, 1, -1)
meq("practice[2]", M, mat([[1, 0, 2, 4], [0, 1, -1, -1], [0, 0, 0, 0]]))
same("practice[2]", solve_system(P2)['kind'], 'infinite')
check("practice[2]", all(simplify(r[0]*(4 - 2*T_) + r[1]*(-1 + T_) + r[2]*T_ - r[3]) == 0 for r in P2), "(4-2t, -1+t, t) solves")
P3 = [[1, 1, 1, 2], [4, 2, 1, 3], [1, -1, 1, 6]]
same("practice[3]", tuple(solve_system(P3)['x']), (1, -2, 3))
same("practice[3]", [(x0**2 - 2*x0 + 3) for x0 in (1, 2, -1)], [2, 3, 6])
