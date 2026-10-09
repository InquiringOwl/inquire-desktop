# content: e22df7707cd8
# fractions: Fractions & Equivalence
R = Rational

# example: Sam 3 of 4 slices, Ana 6 of 8 slices, same-size pizzas
check("example", R(3, 4) == R(3 * 2, 4 * 2), "renaming keeps the amount")
same("example", (3 * 2, 4 * 2), (6, 8))
same("example", (3 * 8, 4 * 6), (24, 24))
same("example", R(6, 8), R(3, 4))

# practice[0]
solves("practice[0]", Eq(R(2, 5), n / 15), n, {6})
same("practice[0]", (15 // 5, 2 * 3), (3, 6))
# practice[1]
same("practice[1]", igcd(42, 56), 14)
same("practice[1]", (42 // 14, 56 // 14), (3, 4))
same("practice[1]", R(42, 56), R(3, 4))
# practice[2]
same("practice[2]", (9 * 20, 12 * 15), (180, 180))
check("practice[2]", R(9, 12) == R(15, 20) == R(3, 4), "equivalent, both 3/4")
# practice[3]
same("practice[3]", sorted([R(5, 8), R(2, 3), R(7, 12)]), [R(7, 12), R(5, 8), R(2, 3)])
same("practice[3]", ilcm(8, 3, 12), 24)
same("practice[3]", [R(7, 12) * 24, R(5, 8) * 24, R(2, 3) * 24], [14, 15, 16])
# practice[4]: n/16 = 5/8
solves("practice[4]", Eq(n / 16, R(5, 8)), n, {10})
same("practice[4]", 5 * 16, 80)
solves("practice[4]", Eq(8 * n, 80), n, {10})

# mistakes
same("mistakes", (3 * 8, 4 * 6), (24, 24))
check("mistakes", R(2, 3) != R(3, 4) and R(2, 3) == R(4, 6), "adding is not renaming")
check("mistakes", R(1, 8) < R(1, 4), "bigger denominator, smaller part")
same("mistakes", (R(12, 24), igcd(12, 24)), (R(1, 2), 12))
same("mistakes", (R(30, 50), R(30, 50) * 20, R(18, 24), R(18, 24) * 20), (R(3, 5), 12, R(3, 4), 15))

# plain
check("plain", R(3, 4) == R(6, 8) == R(12, 16), "tape marks")

# concept.walk: 3/4 split into 2 -> 6/8
same("concept.walk predict[1]", (3, 4), (3, 4))
same("concept.walk predict[2]", 3 * 2, 6)
same("concept.walk", 4 * 2, 8)
check("concept.walk", R(6, 7) > R(3, 4) and R(3, 8) == R(3, 4) / 2, "wrong choices really change the amount")
same("concept.walk", R(3 * 2, 4 * 2), R(6, 8))
same("concept.walk", R(3, 4), R(6, 8))
check("concept.walk demo", 3 <= 4 * 4 and 2 * 4 <= 24, "fraction demo n/d/split in range")

# layers.concept: idea cards, stakes, figures
same("layers.concept", R(1 * 3, 2 * 3), R(3, 6))
same("layers.concept", R(1, 2), R(3, 6))
check("layers.concept", R(1, 8) < R(1, 4), "1/8 < 1/4")
check("layers.concept", R(2 + 1, 3 + 1) == R(3, 4) and R(3, 4) > R(2, 3), "adding 1 gives more")
same("layers.concept", R(2, 4), R(1, 2))
same("layers.concept", float(R(3, 4)), 0.75)

# layers.examples
same("layers.examples", R(3 * 4, 4 * 4), R(12, 16))
same("layers.examples", R(1, 2), R(2, 4))
same("layers.examples", 2 * R(1, 4), R(1, 2))
same("layers.examples", R(25, 50), R(1, 2))
same("layers.examples", R(5, 16), R(10, 32))
same("layers.examples", R(5, 16) - R(9, 32), R(1, 32))
same("layers.examples", (R(240, 600), R(2, 5) * 50), (R(2, 5), 20))
same("layers.examples", R(210, 500), R(21, 50))
check("layers.examples", R(240, 600) < R(210, 500), "second group higher")

# layers.history (timeline + history)
same("layers.history", R(2, 3) + R(1, 30), R(7, 10))

# layers.setup
same("layers.setup", ilcm(4, 8), 8)
same("layers.setup", R(3 * 2, 4 * 2), R(6, 8))
same("layers.setup", (3 * 8, 4 * 6), (24, 24))
same("layers.setup", (igcd(6, 8), R(6, 8)), (2, R(3, 4)))
same("layers.setup", (6 // 2, 8 // 2), (3, 4))

# layers.formal matters: $12 reduced by a third vs to a third
same("layers.formal", (12 - R(12, 3), 12 * R(2, 3), R(12, 3)), (8, 8, 4))

# build: task figure (lab start n=3, d=4, k=2), stepWhy, steps
same("layers.build", (3 * 2, 4 * 2), (6, 8))

# build.stepGoal[2]: 4/10 -> 2/5, value 0.4
same("build.stepGoal[2]", igcd(4, 10), 2)
same("build.stepGoal[2]", R(4, 10), R(2, 5))
check("build.stepGoal[2]", 4 / 10 == 0.4 and 0 <= 4 <= 12 and 1 <= 10 <= 12, "4/10 reachable, publishes exactly 0.4")
# build.stepGoal[3]: 5/6 -> 10/12, top 10
same("build.stepGoal[3]", 12 // 6, 2)
same("build.stepGoal[3]", (5 * 2, 6 * 2), (10, 12))
check("build.stepGoal[3]", 1 <= 2 <= 6 and 5 <= 12 and 6 <= 12, "n=5, d=6, k=2 in the lab's range")

# goals must not be left by any chip: (n, d, k) end states of every chip on the page
_chips = [(1, 8, 1), (5, 8, 1), (1, 2, 3), (2, 3, 2), (3, 4, 4), (1, 2, 2), (7, 12, 1), (3, 6, 1), (3, 4, 3), (6, 9, 1),
          (2, 3, 4), (8, 12, 1), (3, 8, 2), (2, 3, 2), (4, 12, 1), (1, 3, 4), (9, 12, 1), (3, 4, 2)]
check("build.stepGoal[2]", all(R(a, b) != R(2, 5) for a, b, k in _chips), "no chip shows value 0.4")
check("build.stepGoal[3]", all(a * k != 10 for a, b, k in _chips), "no chip shows top 10")

# build.tasks[0]: 3/8 = 6/16
same("build.tasks[0]", 16 // 8, 2)
same("build.tasks[0]", R(3 * 2, 8 * 2), R(6, 16))
same("build.tasks[0]", R(3, 8) * 16, 6)
# build.tasks[1]: 2/3 cup with 1/6 scoop
same("build.tasks[1]", R(1, 3) / R(1, 6), 2)
same("build.tasks[1]", R(1, 3), R(2, 6))
same("build.tasks[1]", R(2, 3) / R(1, 6), 4)
same("build.tasks[1]", R(2 * 2, 3 * 2), R(4, 6))
# build.tasks[2]: 4/12 -> 1/3
same("build.tasks[2]", igcd(4, 12), 4)
same("build.tasks[2]", (4 // 4, 12 // 4), (1, 3))
same("build.tasks[2]", R(4, 12), R(1, 3))
# build.tasks[3]: a third vs a quarter in twelfths
same("build.tasks[3]", (R(1, 3) * 12, R(1, 4) * 12), (4, 3))
same("build.tasks[3]", (1 * 4, 3 * 4, 1 * 3, 4 * 3), (4, 12, 3, 12))
check("build.tasks[3]", R(1, 3) > R(1, 4), "a third off saves more")
# build.tasks[4]: 45 minutes
same("build.tasks[4]", (45 // 5, 60 // 5), (9, 12))
same("build.tasks[4]", 9 * 5, 45)
same("build.tasks[4]", igcd(9, 12), 3)
same("build.tasks[4]", R(45, 60), R(3, 4))
same("build.tasks[4]", (9 // 3, 12 // 3), (3, 4))
