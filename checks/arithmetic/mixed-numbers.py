# content: 45baa3e2cb2c
# mixed-numbers: Mixed Numbers & Improper Fractions
R = Rational

def to_mixed(n, d):
    w, r = divmod(n, d)
    return w, r

def to_improper(w, r, d):
    return w * d + r

# example: 2 2/3 cups with a 1/3-cup scoop
amt = 2 + R(2, 3)
same("example", amt, R(8, 3))
same("example", 2 * 3, 6)
same("example", 6 + 2, 8)
same("example", amt / R(1, 3), 8)
same("example", to_mixed(8, 3), (2, 2))

# practice
same("practice[0]", 3 + R(1, 4), R(13, 4))
same("practice[0]", to_improper(3, 1, 4), 13)
same("practice[0]", (3 + R(1, 4)) / R(1, 4), 13)
same("practice[1]", to_mixed(17, 5), (3, 2))
same("practice[1]", R(17, 5), 3 + R(2, 5))
same("practice[2]", 45 * R(1, 6), R(45, 6))
same("practice[2]", to_mixed(45, 6), (7, 3))
same("practice[2]", 45, 6 * 7 + 3)
same("practice[2]", R(3, 6), R(1, 2))
same("practice[2]", R(45, 6), 7 + R(1, 2))
same("practice[2]", 2 * 45, 90)   # 45 boards of 2 in = 90 in
same("practice[2]", R(90, 12), R(45, 6))
same("practice[3]", to_mixed(29, 7), (4, 1))
same("practice[3]", R(29, 7), 4 + R(1, 7))
check("practice[3]", R(1, 7) < R(1, 3) and 4 + R(1, 3) > R(29, 7), "4 1/3 m is longer")
same("practice[4]", 5 + R(1, 4), R(21, 4))
same("practice[4]", solve(Eq(R(3, 4) * b, R(21, 4)), b), [7])
same("practice[4]", solve(Eq(3 * b, 21), b), [7])

# mistakes
same("mistakes", 2 + R(3, 4), R(11, 4))
same("mistakes", 2 * R(3, 4), R(6, 4))
same("mistakes", 3 * 1 + 4, 7)
same("mistakes", 3 * 4 + 1, 13)
same("mistakes", -(2 + R(1, 3)), -R(7, 3))
same("mistakes", 2 * (1 + R(3, 4)), 3 + R(1, 2))
same("mistakes", R(6, 4), 1 + R(2, 4))
same("mistakes", R(2, 4), R(1, 2))

# why
same("why", 2 * (1 + R(1, 2)), 3)
same("why", 2 * 1 + R(1, 2), R(5, 2))
same("why", 1 + R(1, 2), R(3, 2))
check("why", divmod(150, 60) == (2, 30) and divmod(75, 12) == (6, 3), "150 min = 2 h 30 min, 75 in = 6 ft 3 in")

# Concept walk: 2 2/3 cups of broth, 1/3-cup scoop; demo fraction n=8, d=3
same("concept.walk predict[1]", R(1) / R(1, 3), 3)
same("concept.walk predict[2]", 2 * 3, 6)
same("concept.walk predict[3]", R(2, 3) / R(1, 3), 2)
same("concept.walk lines", 6 + 2, 8)
same("concept.walk lines", 2 + R(2, 3), R(8, 3))
same("concept.walk trap", 2 * 2 + 3, 7)
same("concept.walk trap", R(8, 3) - R(7, 3), R(1, 3))   # a third of a cup short
same("concept.walk check", to_mixed(8, 3), (2, 2))
check("concept.walk demo", ceiling(R(8, 3)) <= 4 and 3 <= 12, "8/3 fits the fraction storyboard (3 bars)")
same("concept.walk demo frames", 8 + 2, 10)   # frames 0..8 lit, 9 = label; lines use frames 0,3,6,8,9,7,9

# Concept ideas and stakes
same("layers.concept ideas", to_mixed(11, 4), (2, 3))
same("layers.concept ideas", to_mixed(7, 3), (2, 1))
same("layers.concept ideas", R(5, 2), 2 + R(1, 2))
same("layers.concept stakes", to_improper(3, 1, 4), 13)
same("layers.concept stakes", 3 * 1 + 4, 7)
same("layers.concept stakes", 2 * (1 + R(1, 2)), 3)
same("layers.concept stakes", 2 * 1 + R(1, 2), 2 + R(1, 2))
same("layers.concept stakes", 2 + R(6, 4), 3 + R(1, 2))
same("layers.concept stakes", 2 * R(3, 4), R(6, 4))
same("layers.concept stakes", 2 + R(3, 4), R(11, 4))
same("layers.concept figure", to_mixed(11, 4), (2, 3))   # lab starts at 11/4: whole 2, rem 3

# Concept example tiles
same("layers.examples", 3 + R(5, 8), R(29, 8))
same("layers.examples", 2 + R(3, 4), R(22, 8))
same("layers.examples", R(29, 8) + R(22, 8), R(51, 8))
same("layers.examples", R(51, 8), 6 + R(3, 8))
same("layers.examples", 1 + R(1, 2), R(3, 2))
same("layers.examples", R(3, 2) * 3, R(9, 2))
same("layers.examples", R(9, 2), 4 + R(1, 2))
same("layers.examples", 4 * R(5, 8), R(20, 8))
same("layers.examples", R(20, 8), 2 + R(4, 8))
same("layers.examples", R(20, 8), 2 + R(1, 2))
same("layers.examples", 2 + R(1, 4), R(9, 4))
same("layers.examples", 3 * R(9, 4), R(27, 4))
same("layers.examples", R(27, 4), 6 + R(3, 4))
same("layers.examples", 10 - R(27, 4), 3 + R(1, 4))
same("layers.examples", 3 + R(1, 2), R(7, 2))
same("layers.examples", (3 + R(1, 2)) / R(1, 2), 7)

# Formal setup
same("layers.setup", 2 * 3 + 2, 8)
same("layers.setup", 2 + R(2, 3), R(8, 3))
same("layers.setup", 3 * 2 + 2, 8)
same("layers.setup", R(8, 3) / R(1, 3), 8)
check("layers.setup", all(w + R(r, d) == R(w * d + r, d) for w in range(1, 10) for d in range(1, 10) for r in range(d)), "w r/d = (wd + r)/d")

# Formal matters
same("layers.formal matters", 2 + R(3, 4), R(11, 4))
same("layers.formal matters", 2 * R(3, 4), 1 + R(1, 2))
check("layers.formal matters", R(11, 4) - R(6, 4) > 1, "the readings differ by more than a whole")

# Intermediate goals: numerator only; lab range 1..40, d 2..8
same("build.stepGoal[0]", 2 * 8, 16)
same("build.stepGoal[0]", to_mixed(16, 8), (2, 0))
check("build.stepGoal[0]", 1 <= 16 <= 40 and 2 <= 8 <= 8, "16/8 reachable in the lab")
same("build.stepGoal[1]", to_improper(3, 1, 6), 19)
same("build.stepGoal[1]", R(19, 6), 3 + R(1, 6))
check("build.stepGoal[1]", 1 <= 19 <= 40 and 2 <= 6 <= 8, "19/6 reachable in the lab")
same("build.stepGoal[3]", to_improper(4, 3, 5), 23)
same("build.stepGoal[3]", to_mixed(23, 5), (4, 3))
check("build.stepGoal[3]", 1 <= 23 <= 40 and 2 <= 5 <= 8, "23/5 reachable in the lab")
_chips = [11, 7, 5, 9, 20, 12, 13, 17, 10, 3, 8]   # every chip numerator on the page, plus the walk's 8 and the start 11
check("build.stepGoal[0]", all(g not in _chips for g in (16, 19, 23)), "no chip or walk number ticks a goal")
same("build.stepTry", (to_mixed(17, 5), to_mixed(10, 4), R(2, 4)), ((3, 2), (2, 2), R(1, 2)))
same("build.keyTry", (to_mixed(12, 4), to_mixed(13, 4), to_mixed(11, 8)), ((3, 0), (3, 1), (1, 3)))

# Everyday tasks
same("build.tasks[0].check", (1 + R(1, 2)) / R(1, 2), 3)
same("build.tasks[0].lines", (1 * 2, 2 + 1), (2, 3))
same("build.tasks[0].lines", 1 + R(1, 2), R(3, 2))
same("build.tasks[0].predict", to_improper(1, 1, 2), 3)

same("build.tasks[1].check", ((1 + R(5, 8)) + (1 + R(7, 8))) * 8, 28)
same("build.tasks[1].check", to_mixed(28, 8), (3, 4))
same("build.tasks[1].lines", (to_improper(1, 5, 8), to_improper(1, 7, 8)), (13, 15))
same("build.tasks[1].lines", R(13, 8) + R(15, 8), R(28, 8))
same("build.tasks[1].lines", 3 + R(4, 8), 3 + R(1, 2))
same("build.tasks[1].predict", to_improper(1, 7, 8), 15)
check("build.tasks[1].demo", ceiling(R(28, 8)) <= 4, "28/8 fits 4 bars")

same("build.tasks[2].check", divmod(150, 60), (2, 30))
same("build.tasks[2].lines", R(150, 15), 10)
same("build.tasks[2].lines", to_mixed(10, 4), (2, 2))
same("build.tasks[2].lines", 2 + R(2, 4), 2 + R(1, 2))
same("build.tasks[2].lines", R(150, 60), 2 + R(1, 2))
same("build.tasks[2].predict", 10 // 4, 2)

same("build.tasks[3].check", to_mixed(13, 4), (3, 1))
same("build.tasks[3].lines", R(13, 4), 3 + R(1, 4))
same("build.tasks[3].lines", 3 * 4 + 1, 13)
same("build.tasks[3].predict", 13 - 3 * 4, 1)

same("build.tasks[4].check", to_mixed(11, 3), (3, 2))
same("build.tasks[4].lines", R(11, 3), 3 + R(2, 3))
same("build.tasks[4].lines", (R(2, 3), R(1, 2)), (R(4, 6), R(3, 6)))
check("build.tasks[4].lines", 3 + R(2, 3) > 3 + R(1, 2), "3 2/3 > 3 1/2")
same("build.tasks[4].lines", (3 + R(2, 3)) - (3 + R(1, 2)), R(1, 6))
same("build.tasks[4].predict", R(2, 3) * 6, 4)
