# content: 7efcd8e11167
# proportions: Proportions
R = Rational
d_lab = lambda a, b, c: R(b * c, a)          # the lab's published d = b·c/a
# formal: cross-product property on a sample
check("formal", (R(3, 5) == R(24, 40)) and 3*40 == 5*24, "cross products")

# example (= the walk): 3 cups / 36 cookies = 8 cups / x
same("example", 36*8, 288)
solves("example", Eq(R(3, 36), 8/x), x, {96})
same("example", R(288, 3), 96)
same("example", R(36, 3), 12)
same("example", R(96, 8), 12)

# practice[0]: 3/5 = x/40
same("practice[0]", 3*40, 120)
solves("practice[0]", Eq(R(3, 5), x/40), x, {24})
# practice[1]: 7/x = 21/12
same("practice[1]", 7*12, 84)
solves("practice[1]", Eq(7/x, R(21, 12)), x, {4})
# practice[2]: 4 notebooks $10, 14 notebooks
same("practice[2]", 10*14, 140)
solves("practice[2]", Eq(R(10, 4), x/14), x, {35})
# practice[3]: 1 cm : 2.5 km, 18.4 km
solves("practice[3]", Eq(1/R(5, 2), x/R(184, 10)), x, {R(736, 100)})
# practice[4]: 148/8 = p/30
same("practice[4]", 148*30, 4440)
solves("practice[4]", Eq(R(148, 8), x/30), x, {555})

# plain / mistakes
same("plain", 9*420, 3780)
same("plain", R(3780, 252), 15)
same("plain", R(252, 9), 28)
same("mistakes", 36 + (8 - 3), 41)
same("mistakes", R(36, 3), 12)
solves("mistakes", Eq(R(3, 36), 8/x), x, {96})
same("mistakes", 3*6, 18)
same("mistakes", R(18, 6), 3)
same("mistakes", R(18400, R(5, 2)), 7360)
same("mistakes", R(184, 10) / R(5, 2), R(736, 100))

# Concept walk: 3 cups -> 36 cookies, 8 cups -> x
same("concept.walk predict[1]", R(36, 3), 12)
same("concept.walk predict[2]", 8 * 12, 96)
same("concept.walk trap", (36 + (8 - 3), 4 * 12), (41, 48))
check("concept.walk trap", R(41, 8) != R(36, 3) and abs(R(41, 8) - 5) < R(1, 2), "41 for 8 cups is about 5 a cup, not 12")
solves("concept.walk proportion", Eq(R(3, 36), 8/x), x, {96})
same("concept.walk predict[5]", 36 * 8, 288)
same("concept.walk", R(288, 3), 96)
same("concept.walk demo", [r * 12 for r in (1, 3, 4, 8)], [12, 36, 48, 96])
same("concept.walk lab", d_lab(3, 36, 8), 96)

# layers.concept: question figure, ideas, stakes
same("layers.concept figure", d_lab(3, 36, 5), 60)
same("layers.concept ideas", (d_lab(3, 36, 1), d_lab(3, 36, 6), 36 + 36), (12, 72, 72))
same("layers.concept ideas", (R(3, 4) == R(6, 8), 3 * 8, 4 * 6), (True, 24, 24))
same("layers.concept ideas", d_lab(2, 15, 7), R(105, 2))
same("layers.concept stakes", (36 + 5, 8 * 12), (41, 96))
same("layers.concept stakes", (R(3 * 6, 6), 6 * 2), (3, 12))
same("layers.concept stakes", R(7360, R(736, 100)), 1000)

# layers.examples: concept tiles
same("layers.examples", 250*8, 2000)
solves("layers.examples", Eq(R(250, 5), 400/x), x, {8})
solves("layers.examples", Eq(60/x, R(12, 50)), x, {250})
same("layers.examples", R(60*50, 12), 250)
same("layers.examples", R(65, 10) / R(1, 4), 26)
solves("layers.examples", Eq(R(2, 100), x/250), x, {5})
same("layers.examples", R(230, 1) / R(92, 100), 250)
same("layers.examples", R(1080*800, 1920), 450)
same("layers.examples", R(1920, 1080), R(800, 450))

# layers.setup: the walk in textbook form
same("layers.setup", R(36, 3), 12)
same("layers.setup", 36*8, 288)
same("layers.setup", R(288, 3), 96)
same("layers.setup", R(96, 8), 12)

# Intermediate goals: d = b·c/a reachable with a, b, c in 1..40 and not left by any chip
_chips = [d_lab(*v) for v in [(3, 36, 5), (3, 36, 1), (3, 36, 6), (2, 15, 7), (3, 36, 8), (4, 118, 11), (3, 36, 10), (4, 118, 8), (4, 118, 9), (2, 15, 6)]]
_walk = {3, 36, 8, 12, 96, 41, 48, 288, 5}
for _i, (_abc, _goal) in {2: ((3, 36, 7), 84), 3: ((4, 30, 10), 75), 5: ((2, 25, 8), 100)}.items():
    same("build.stepGoal[%d]" % _i, d_lab(*_abc), _goal)
    check("build.stepGoal[%d]" % _i, all(1 <= v <= 40 for v in _abc), "goal settings fit the lab's 1..40 range")
    check("build.stepGoal[%d]" % _i, _goal not in _chips and _goal not in _walk, "no chip and no walk number leaves the goal value")
same("build.stepGoal[3]", 30 * 10, 300)
same("build.stepGoal[5]", (R(25, 2), R(100, 8)), (R(25, 2), R(25, 2)))

# Everyday tasks
same("build.tasks[0].check", R(9 * 420, 252), 15)
same("build.tasks[0].lines", (9 * 420, R(3780, 252), R(252, 9), R(420, 15)), (3780, 15, 28, 28))
same("build.tasks[0].lab", (d_lab(4, 118, 11), d_lab(4, 118, 8), d_lab(4, 118, 9)), (R(649, 2), 236, R(531, 2)))
solves("build.tasks[1].check", Eq(R(6, 4), x/10), x, {15})
same("build.tasks[1].lines", (6 * 10, R(60, 4), R(6, 4), R(15, 10)), (60, 15, R(3, 2), R(3, 2)))
same("build.tasks[1].demo", (6 + 6 + 3, 4 + 4 + 2), (15, 10))
solves("build.tasks[2].check", Eq(R(10, 9), x/27), x, {30})
same("build.tasks[2].lines", (10 * 27, R(270, 9)), (270, 30))
same("build.tasks[2].demo", (9 * 3, 10 * 3), (27, 30))
solves("build.tasks[3].check", Eq(R(6, 4), 15/x), x, {10})
same("build.tasks[3].lines", (4 * 15, R(60, 6), R(15, 10), R(6, 4)), (60, 10, R(3, 2), R(3, 2)))
same("build.tasks[3].demo", (4 + 4 + 2, 6 + 6 + 3), (10, 15))
solves("build.tasks[4].check", Eq(R(2, 15), 6/x), x, {45})
same("build.tasks[4].lines", (15 * 6, R(90, 2), R(15, 2), R(45, 6)), (90, 45, R(15, 2), R(15, 2)))
same("build.tasks[4].demo", 15 * 3, 45)
same("build.tasks[4].lab", d_lab(2, 15, 6), 45)

# formal: exact words (3 painters, 6 hours)
same("layers.formal", (R(6 * 6, 3), R(3 * 6, 6)), (12, 3))
