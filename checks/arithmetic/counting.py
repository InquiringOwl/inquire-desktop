# content: 998a2f93a985
# counting: Counting & the Natural Numbers

# example: seats 14..22
_seats = list(range(14, 23))
same("example", _seats, [14, 15, 16, 17, 18, 19, 20, 21, 22])
same("example", len(_seats), 9)
same("example", 22 - 14, 8)
same("example", 22 - 14 + 1, 9)
check("example", len(_seats) == 9, "row should have exactly 9 seats for 9 students")

# practice[0]
_fives = list(range(5, 41, 5))
same("practice[0]", _fives, [5, 10, 15, 20, 25, 30, 35, 40])
same("practice[0]", len(_fives), 8)
same("practice[0]", Rational(40, 5), 8)

# practice[1]
same("practice[1]", 99 + 1, 100)
same("practice[1]", 1000 - 1, 999)

# practice[2]
same("practice[2]", len(range(7, 32)), 25)
same("practice[2]", 31 - 7 + 1, 25)

# practice[3]
same("practice[3]", len(range(45, 113)), 68)
same("practice[3]", 112 - 45 + 1, 68)

# practice[4]: rooms 101..136
same("practice[4]", len(range(101, 137)), 36)
same("practice[4]", 136 - 101, 35)
same("practice[4]", 136 - 101 + 1, 36)

# mistakes: fence posts
same("mistakes", Rational(40, 10), 4)
same("mistakes", len(range(0, 41, 10)), 5)

# layers (concept examples, build tasks, formal setup): numbers stated on the page
same("layers.examples", 18 * 5, 90)
same("layers.examples", 17 * 5, 85)
same("layers.examples", 90 - 85, 5)
same("layers.examples", 4 * 12, 48)
same("layers.examples", 48 + 9, 57)
same("layers.examples", 60 - 57, 3)
same("layers.examples", 20 - 19, 1)
same("layers.examples", 12 * 20 + 15 * 10 + 8 * 5, 430)
same("layers.examples", [12 * 20, 15 * 10, 8 * 5], [240, 150, 40])
same("layers.examples", 14 + 9 + 22, 45)
same("layers.examples", Rational(45, 3), 15)
same("layers.examples", 24 * 50 + 14, 1214)
same("layers.tasks", len(range(3, 11)), 8)
same("layers.tasks", 10 - 3 + 1, 8)
same("layers.tasks", 4 * 10 + 7, 47)
check("layers.setup", [s - 13 for s in range(14, 23)] == list(range(1, 10)), "f(s) = s - 13 maps 14..22 onto 1..9")
check("layers.setup", all(len(range(a, b + 1)) == b - a + 1 for a in range(0, 30) for b in range(a, 40)), "range rule")
check("layers.setup", all([s - (a - 1) for s in range(a, b + 1)] == list(range(1, b - a + 2)) for a in range(1, 20) for b in range(a, 30)), "subtract a-1 matches to 1..b-a+1")
same("layers.setup", 22 - 14 + 1, 9)

# layers.concept blocks (ideas, stakes, tiles): numbers stated on the page
same("layers.concept", 99 + 1, 100)
same("layers.concept", 1000000 + 1, 1000001)
same("layers.concept", 20 - 19, 1)
same("layers.concept", len(range(14, 23)), 9)
same("layers.concept", 22 - 14, 8)
same("layers.concept", len(range(1, 13)), 12)

# Intermediate checkers (layers.build: predict, stepGoal, tasks[].check)
same("build.predict[1]", len(range(14, 23)), 9)
same("build.predict[3]", 22 - 14, 8)
same("build.stepGoal[4]", 3 * 10 + 4, 34)
same("build.tasks[0].check", len(range(12, 41)), 29)
same("build.tasks[1].check", len(range(3, 11)), 8)
same("build.tasks[3].check", divmod(47, 10), (4, 7))
same("build.tasks[4].check", len(range(5, 46, 5)), 9)
