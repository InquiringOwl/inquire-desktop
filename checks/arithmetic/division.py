# content: db6262995d6f
# division: Division

# example: 347 eggs, cartons of 12
same("example", divmod(34, 12), (2, 10))
same("example", 2 * 12, 24)
same("example", 10 * 10 + 7, 107)
same("example", divmod(107, 12), (8, 11))
same("example", 8 * 12, 96)
same("example", 9 * 12, 108)
same("example", divmod(347, 12), (28, 11))
same("example", 12 * 28 + 11, 347)
same("example", 12 * 28, 336)

# practice[0]
same("practice[0]", Rational(56, 7), 8)
# practice[1]
same("practice[1]", divmod(97, 4), (24, 1))
same("practice[1]", 4 * 24, 96)
# practice[2]
same("practice[2]", divmod(100, 12), (8, 4))
same("practice[2]", Rational(1008, 12), 84)
same("practice[2]", 12 * 84, 1008)
# practice[3]: vans needed = ceil(500/12)
same("practice[3]", divmod(500, 12), (41, 8))
same("practice[3]", ceiling(Rational(500, 12)), 42)

# plain / why (rewritten)
same("plain", Rational(96, 4), 24); same("plain", 4*24, 96)
same("plain", divmod(50, 12), (4, 2)); same("plain", 12*4 + 2, 50)
same("why", ceiling(Rational(500, 12)), 42); same("why", 500 - 12*41, 8)

# practice[4]: 12n = 156
same("practice[4]", divmod(15, 12), (1, 3)); same("practice[4]", 3*10 + 6, 36)
same("practice[4]", Rational(156, 12), 13); same("practice[4]", 12*13, 156)
same("practice[4]", solve(Eq(12*a, 156), a), [13])

# mistakes (added): remainder as a fraction of the divisor
check("mistakes", abs(Rational(11, 12) - Rational(92, 100)) < Rational(1, 200), "11/12 is about 0.92")
check("mistakes", abs(Rational(347, 12) - Rational(2892, 100)) < Rational(1, 200), "347/12 is about 28.92")

# layers (concept examples, formal setup)
same("layers.examples", Rational(250, 125), 2); same("layers.examples", 2*5, 10)
same("layers.examples", divmod(150, 8), (18, 6)); same("layers.examples", 8*18 + 6, 150); same("layers.examples", ceiling(Rational(150, 8)), 19)
same("layers.examples", Rational(1860, 300), Rational(62, 10))
same("layers.examples", Rational(480, 100)/24, Rational(20, 100)); same("layers.examples", Rational(576, 100)/32, Rational(18, 100))
same("layers.examples", divmod(1037, 25), (41, 12)); same("layers.examples", 25*41 + 12, 1037); same("layers.examples", ceiling(Rational(1037, 25)), 42)
same("layers.examples", Rational(180, 3), 60)
same("layers.setup", 347 - 12*20, 107); same("layers.setup", divmod(107, 12), (8, 11)); same("layers.setup", 12*28 + 11, 347)
check("layers.setup", 0 <= 11 < 12, "remainder condition")
same("layers.build", 2*12*10, 240); same("layers.build", 10*10 + 7, 107); same("layers.build", Rational(1008, 12), 84)

# ---- block lesson (1.18.5 layers): every number a learner reads or types ----


def _partial(a, chunks):
    """repeated subtraction of chunks; returns the landing points"""
    out, at = [], a
    for c in chunks:
        at -= c; out.append(at)
    return out

# Concept walk: 347 eggs, cartons of 12 (line demo start 347, jumps -240, -96)
same("concept.walk", 10 * 12, 120)
same("concept.walk", 20 * 12, 240)
same("concept.walk predict[1]", 2 * 120, 240)
same("concept.walk", 347 - 240, 107)
same("concept.walk predict[2]", 347 - 240, 107)
same("concept.walk predict[2] wrong", (347 - 20, 240 + 127), (327, 367))
same("concept.walk", 9 * 12, 108)
check("concept.walk", 108 > 107 and 96 <= 107, "9 cartons too many, 8 fit")
same("concept.walk predict[3]", 107 // 12, 8)
same("concept.walk", 8 * 12, 96)
same("concept.walk", 107 - 96, 11)
check("concept.walk predict[4]", 107 - 96 < 12, "11 eggs cannot fill a carton")
same("concept.walk trap", 27 * 12, 324)
same("concept.walk trap", 347 - 324, 23)
check("concept.walk trap", 23 >= 12, "23 left fills another carton")
same("concept.walk predict[6]", 20 + 8, 28)
same("concept.walk", divmod(347, 12), (28, 11))
same("concept.walk", 12 * 28 + 11, 347)
same("concept.walk demo", _partial(347, [240, 96]), [107, 11])
check("concept.walk demo", 0 <= 347 <= 360 and all(0 <= v <= 360 for v in [107, 11]), "jumps stay on 0..360")

# Concept idea cards and stakes (layers.concept)
same("layers.concept", divmod(24, 4), (6, 0)); same("layers.concept", [6 * r for r in range(1, 5)], [6, 12, 18, 24])
same("layers.concept", divmod(20, 5), (4, 0)); same("layers.concept", _partial(20, [5] * 4), [15, 10, 5, 0])
same("layers.concept", divmod(50, 12), (4, 2)); same("layers.concept", 4 * 12, 48); same("layers.concept", _partial(50, [12] * 4)[-1], 2)
same("layers.concept", 347 - 27 * 12, 23)
same("layers.concept", ceiling(Rational(500, 12)), 42); same("layers.concept", 500 - 41 * 12, 8)
same("layers.concept", divmod(1236, 12), (103, 0)); check("layers.concept", 1236 // 12 != 13, "skipped zero gives 13")
same("layers.concept figure", divmod(1357, 6), (226, 1))

# Intermediate: stepWhy, task figure (lab start 1357 / 6 → r = 1)
same("layers.build", 2 * 12, 24); same("layers.build", 24 * 10, 240); same("layers.build", 10 * 10 + 7, 107)
same("layers.build figure", 1357 % 6, 1)
same("layers.build chips", [divmod(347, 9), divmod(348, 12), divmod(347, 12)], [(38, 5), (29, 0), (28, 11)])

# Your move goals: reachable in the lab (dividend 1..99999, divisor 1..99) and not left by any chip
_chip_results = {6, 4, 28, 29, 18, 60, 12, 95, 7}   # results of every play chip on the page
_chip_dividends = {24, 20, 50, 500, 150, 180, 347, 348, 1357, 96, 576, 1140, 30}
same("build.stepGoal[3]", 500 // 12, 41); same("build.stepGoal[3]", 500 % 12, 8); same("build.stepGoal[3]", ceiling(Rational(500, 12)), 42)
check("build.stepGoal[3]", 1 <= 500 <= 99999 and 41 not in _chip_results, "41 reachable, no chip leaves it")
same("build.stepGoal[4]", divmod(1236, 12), (103, 0))
check("build.stepGoal[4]", 103 not in _chip_results and 1236 <= 99999, "103 reachable, no chip leaves it")
same("build.stepGoal[5]", 7 * 9 + 5, 68); same("build.stepGoal[5]", divmod(68, 7), (9, 5))
check("build.stepGoal[5]", 68 not in _chip_dividends, "no chip sets dividend 68")

# Everyday tasks
same("build.tasks[0]", Rational(96, 8), 12); same("build.tasks[0]", (8 * 10, 96 - 80), (80, 16)); same("build.tasks[0]", Rational(16, 8), 2)
same("build.tasks[0]", (10 + 2, 8 * 12), (12, 96)); same("build.tasks[0] demo", [12 * r for r in (1, 2, 3, 8)], [12, 24, 36, 96])
same("build.tasks[1]", Rational(576, 32), 18); same("build.tasks[1]", (32 * 10, 576 - 320, 32 * 8), (320, 256, 256))
same("build.tasks[1]", Rational(480, 24), 20); same("build.tasks[1] demo", _partial(576, [320, 256]), [256, 0])
same("build.tasks[2]", divmod(75, 12), (6, 3)); same("build.tasks[2]", (12 * 6, 75 - 72), (72, 3)); same("build.tasks[2]", ceiling(Rational(75, 12)), 7)
same("build.tasks[2] demo", _partial(75, [12] * 6)[-1], 3)
same("build.tasks[3]", Rational(1140, 12), 95); same("build.tasks[3]", divmod(114, 12), (9, 6)); same("build.tasks[3]", 9 * 12, 108)
same("build.tasks[3]", 6 * 10 + 0, 60); same("build.tasks[3]", Rational(60, 12), 5); same("build.tasks[3]", 12 * 95, 1140)
check("build.tasks[3]", 11 < 12, "12 does not fit into 11")
same("build.tasks[3] demo", (90 * 12, 5 * 12, _partial(1140, [1080, 60])), (1080, 60, [60, 0]))
same("build.tasks[4]", divmod(30, 4), (7, 2)); same("build.tasks[4]", (4 * 7, 4 * 8, 30 - 28), (28, 32, 2))
same("build.tasks[4] demo", [7 * r for r in range(1, 5)], [7, 14, 21, 28])

# Formal: matters, vocab
same("formal", divmod(12, 347), (0, 12)); same("formal", 12 * 27 + 23, 347)
same("formal checks", [8, (24, 1), 84, 42, 13], [Rational(56, 7), divmod(97, 4), Rational(1008, 12), ceiling(Rational(500, 12)), Rational(156, 12)])
