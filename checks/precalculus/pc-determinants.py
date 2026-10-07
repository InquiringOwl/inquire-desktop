# content: 6d3268fd3fd2
# pc-determinants: Determinants & Cramer's Rule
from precalc import *
R = Rational
# hero
same("hero", det_of([[3, 1], [2, 4]]), 10); same("hero", 3*4 - 1*2, 10)
# formal: properties on a sample and in general
a_, b_, c_, d_, e_, f_, g_, h_, i_ = symbols('a_ b_ c_ d_ e_ f_ g_ h_ i_')
G = Matrix([[a_, b_, c_], [d_, e_, f_], [g_, h_, i_]])
check("formal", simplify(Matrix([[a_, b_], [c_, d_]]).det() - (a_*d_ - b_*c_)) == 0, "2x2 formula")
check("formal", all(simplify(sum(G[r, j]*(-1)**(r + j)*G.minor(r, j) for j in range(3)) - G.det()) == 0 for r in range(3)), "row expansions")
check("formal", all(simplify(sum(G[r, j]*(-1)**(r + j)*G.minor(r, j) for r in range(3)) - G.det()) == 0 for j in range(3)), "column expansions")
Gs = G.copy(); Gs.row_swap(0, 1); check("formal", simplify(Gs.det() + G.det()) == 0, "swap changes sign")
check("formal", simplify(row_op(G, 'scale', 1, None, k).det() - k*G.det()) == 0, "scale")
check("formal", simplify(row_op(G, 'add', 2, 0, k).det() - G.det()) == 0, "add unchanged")
same("formal", Matrix([[a_, b_, c_], [0, 0, 0], [g_, h_, i_]]).det(), 0)
same("formal", Matrix([[a_, b_, c_], [a_, b_, c_], [g_, h_, i_]]).det(), 0)
check("formal", simplify(Matrix([[a_, b_, c_], [0, e_, f_], [0, 0, i_]]).det() - a_*e_*i_) == 0, "triangular")
H = Matrix([[1, 2, 0], [3, -1, 4], [2, 2, 1]]); K = Matrix([[0, 1, 1], [2, 5, -1], [1, 0, 3]])
same("formal", (H*K).det(), H.det()*K.det())
check("formal", inv_of([[2, 4], [1, 2]]) is None and det_of([[2, 4], [1, 2]]) == 0, "det 0 singular")
# example
A = [[1, 1, 1], [2, -1, 1], [1, 2, -1]]; bb = [6, 3, 2]
D, Ds, xs = cramer(A, bb)
same("example", D, 7); same("example", 1*(1 - 2) - 1*(-2 - 1) + 1*(4 + 1), 7)
same("example", Ds, [7, 14, 21])
same("example", (6*(-1) - 1*(-5) + 1*8, 1*(-5) - 6*(-3) + 1*1, 1*(-8) - 1*1 + 6*5), (7, 14, 21))
same("example", det_of([[3, -1], [2, 2]]), 8); same("example", det_of([[2, 1], [1, -1]]), -3); same("example", det_of([[2, 3], [1, 2]]), 1)
same("example", xs, [1, 2, 3]); same("example", tuple(solve_system([r + [v] for r, v in zip(A, bb)])['x']), (1, 2, 3))
same("example", 1 + 4 - 3, 2)
# practice
same("practice[0]", det_of([[5, -2], [3, 4]]), 26)
M2 = [[2, 0, 1], [3, 0, -1], [4, 5, 2]]
same("practice[1]", det_of(M2), 25); same("practice[1]", -5*det_of([[2, 1], [3, -1]]), 25); same("practice[1]", det_of([[2, 1], [3, -1]]), -5)
D, Ds, xs = cramer([[3, 2], [1, -1]], [7, -1])
same("practice[2]", (D, Ds[0], Ds[1]), (-5, -5, -10)); same("practice[2]", xs, [1, 2])
T = [[1, 1, 1], [4, 2, 1], [2, 5, 1]]
same("practice[3]", det_of(T), 11); same("practice[3]", 1*(2 - 5) - 1*(4 - 2) + 1*(20 - 4), 11)
same("practice[3]", abs(Polygon(Point(1, 1), Point(4, 2), Point(2, 5)).area), R(11, 2))
