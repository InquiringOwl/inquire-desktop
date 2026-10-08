# content: bc20cfd2ae38
# fractions: Fractions & Equivalence
R = Rational

# example
same("example", igcd(18, 24), 6)
same("example", R(18, 24), R(3, 4))
same("example", igcd(20, 25), 5)
same("example", R(20, 25), R(4, 5))
same("example", (R(3, 4) * 20, R(4, 5) * 20), (15, 16))
check("example", R(18, 24) < R(20, 25), "second office should have the larger share")

# practice[0]
solves("practice[0]", Eq(R(2, 5), n / 15), n, {6})
# practice[1]
same("practice[1]", igcd(42, 56), 14)
same("practice[1]", R(42, 56), R(3, 4))
# practice[2]
same("practice[2]", (9 * 20, 12 * 15), (180, 180))
check("practice[2]", R(9, 12) == R(15, 20) == R(3, 4), "equivalent, both 3/4")
# practice[3]
same("practice[3]", sorted([R(5, 8), R(2, 3), R(7, 12)]), [R(7, 12), R(5, 8), R(2, 3)])
same("practice[3]", [R(7, 12) * 24, R(5, 8) * 24, R(2, 3) * 24], [14, 15, 16])

# practice[0] reworded: 2 of 5 customers -> of 15
same("practice[0]", 2 * 3, 6)
same("practice[0]", R(2, 5) * 15, 6)
# practice[4]: n/16 = 5/8
solves("practice[4]", Eq(n / 16, R(5, 8)), n, {10})
same("practice[4]", 5 * 16, 80)
solves("practice[4]", Eq(8 * n, 80), n, {10})

# mistakes: 30 of 50 vs 18 of 24
same("mistakes", (R(30, 50), R(30, 50) * 20, R(18, 24) * 20), (R(3, 5), 12, 15))
same("mistakes", R(12, 24), R(1, 2))

# plain
check("plain", R(3, 4) == R(6, 8) == R(12, 16), "tape marks")

# layers (concept examples, history, formal setup)
same("layers.examples", R(3, 4), R(12, 16))
same("layers.examples", R(3 * 4, 4 * 4), R(12, 16))
same("layers.examples", R(1, 2), R(2, 4))
same("layers.examples", 2 * R(1, 4), R(1, 2))
same("layers.examples", R(25, 50), R(1, 2))
same("layers.examples", R(5, 16), R(10, 32))
same("layers.examples", R(5, 16) - R(9, 32), R(1, 32))
same("layers.examples", (R(240, 600), R(2, 5) * 50), (R(2, 5), 20))
same("layers.examples", R(210, 500), R(21, 50))
check("layers.examples", R(240, 600) < R(210, 500), "second group higher")
same("layers.history", R(2, 3) + R(1, 30), R(7, 10))
same("layers.history", R(2, 10), R(1, 5))
same("layers.setup", (igcd(18, 24), R(18, 24)), (6, R(3, 4)))
same("layers.setup", (igcd(20, 25), R(20, 25)), (5, R(4, 5)))
same("layers.setup", (R(3 * 5, 4 * 5), R(4 * 4, 5 * 4)), (R(15, 20), R(16, 20)))
check("layers.setup", 3 * 5 == 15 and 4 * 4 == 16 and 15 < 16 and R(3, 4) < R(4, 5), "cross products")
# build tasks
same("layers.tasks", (R(2, 4), R(18, 24) * 1, igcd(18, 24)), (R(1, 2), R(3, 4), 6))
check("layers.tasks", R(1, 3) == R(4, 12) and R(1, 4) == R(3, 12) and R(1, 3) > R(1, 4), "third off saves more")
same("layers.tasks", R(45, 60), R(3, 4))
same("layers.tasks", R(6, 8), R(3, 4))
