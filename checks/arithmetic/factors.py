# content: 5ade5be4920f
# factors: Factors, Multiples & Divisibility

def _pairs(m):
    return [(dd, m // dd) for dd in divisors(m) if dd * dd <= m]

# example: 84 chairs, rows of 6..15
same("example", divisors(84), [1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 84])
same("example", len(divisors(84)), 12)
same("example", 8 + 4, 12)
check("example", 84 % 5 != 0 and 84 % 8 != 0 and 84 % 9 != 0, "5, 8, 9 should not divide 84")
same("example", (8 * 8, 9 * 9, 10 * 10), (64, 81, 100))
same("example", _pairs(84), [(1, 84), (2, 42), (3, 28), (4, 21), (6, 14), (7, 12)])
_rows = [dd for dd in divisors(84) if 6 <= dd <= 15]
same("example", _rows, [6, 7, 12, 14])
same("example", [84 // dd for dd in _rows], [14, 12, 7, 6])

# practice[0]: 18 players
same("practice[0]", divisors(18), [1, 2, 3, 6, 9, 18])
same("practice[0]", len(divisors(18)), 6)
same("practice[0]", _pairs(18), [(1, 18), (2, 9), (3, 6)])
# practice[1]: doses every 7 days
same("practice[1]", [7 * k for k in range(1, 6)], [7, 14, 21, 28, 35])
# practice[2]: 234 rolls
same("practice[2]", 2 + 3 + 4, 9)
check("practice[2]", 234 % 3 == 0 and 234 % 9 == 0, "234 divisible by 3 and 9")
same("practice[2]", Rational(234, 3), 78)
same("practice[2]", Rational(234, 9), 26)
# practice[3]: 7,416 items
check("practice[3]", 16 % 4 == 0 and 7416 % 4 == 0, "divisible by 4")
same("practice[3]", 7 + 4 + 1 + 6, 18)
check("practice[3]", 7416 % 2 == 0 and 7416 % 6 == 0 and 7416 % 9 == 0, "divisible by 2, 6 and 9")
same("practice[3]", Rational(7416, 9), 824)
# practice[4]: 12r = 96
solves("practice[4]", Eq(12 * r, 96), r, {8})
check("practice[4]", 96 % 12 == 0, "12 divides 96")

# plain / mistakes
same("plain", divisors(24), [1, 2, 3, 4, 6, 8, 12, 24])
same("plain", 24 % 5, 4)
same("plain", [6 * k for k in range(1, 5)], [6, 12, 18, 24])
same("plain", _pairs(24), [(1, 24), (2, 12), (3, 8), (4, 6)])
same("plain", 1 + 2 + 3 + 6, 12)
check("plain", 1236 % 3 == 0, "1,236 divisible by 3")
check("mistakes", 84 % 2 == 0 and 84 % 4 == 0 and 84 % 8 != 0, "84 not divisible by 8")
same("mistakes", (8 * 10, 84 - 80), (80, 4))
same("mistakes", divisors(6), [1, 2, 3, 6])
same("mistakes", _pairs(36), [(1, 36), (2, 18), (3, 12), (4, 9), (6, 6)])
same("mistakes", divisors(36), [1, 2, 3, 4, 6, 9, 12, 18, 36])
same("mistakes", (1 + 2 + 8, 128 % 2), (11, 0))

# Concept walk: 84 chairs, rows of 12 (array 7 x 12)
same("concept.walk predict[1]", 36 + 12, 48)
same("concept.walk frame 4", 4 * 12, 48)
same("concept.walk running totals", [12 * k for k in range(1, 8)], [12, 24, 36, 48, 60, 72, 84])
same("concept.walk predict[2]", Rational(84, 12), 7)
same("concept.walk lines", (12 * 7, 7 * 12), (84, 84))
check("concept.walk partner", 84 % 7 == 0 and 84 // 7 == 12, "rows of 7 give 12 rows")
check("concept.walk wrong choices", 84 % 6 == 0 and 84 % 24 == 12 and 84 // 24 == 3, "24 a row: 3 rows and 12 over")
same("concept.walk trap", (8 * 10, 84 - 8 * 10, 84 % 8), (80, 4, 4))
check("concept.walk trap", 84 % 2 == 0 and 84 % 4 == 0 and 84 % 8 != 0 and 88 == 8 * 11, "2 and 4 divide 84, 8 does not")
same("concept.walk predict[5]", len([dd for dd in range(6, 16) if 84 % dd == 0]), 4)
same("concept.walk answer", [(dd, 84 // dd) for dd in range(6, 16) if 84 % dd == 0], [(6, 14), (7, 12), (12, 7), (14, 6)])
check("concept.walk demo", 7 <= 10 and 12 <= 12 and 7 * 12 == 84, "array 7 x 12 fits the kit and makes 84")

# Concept ideas, stakes, timeline, history
same("layers.concept idea 1", (3 * 4, 12 % 5), (12, 2))
same("layers.concept idea 2", (3 * 8, 8 * 3), (24, 24))
same("layers.concept idea 3", [6 * k for k in range(1, 5)], [6, 12, 18, 24])
same("layers.concept stakes", [dd for dd in divisors(84) if dd > 7], [12, 14, 21, 28, 42, 84])
same("layers.concept stakes", divisors(6), [1, 2, 3, 6])
same("layers.concept figure", 36, 36)
same("layers.history", divisors(60), [1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60])
same("layers.history", len(divisors(60)), 12)
same("layers.history", 6 * 60, 360)

# Concept tiles
same("layers.examples", Rational(144, 12), 12)
same("layers.examples", Rational(144, 16), 9)
same("layers.examples", 14 * 10 + 4, 144)
same("layers.examples", 4 * 7, 28)
same("layers.examples", (5 * 5, 28 - 25), (25, 3))
same("layers.examples", Rational(150, 10), 15)
same("layers.examples", (18 * 8, 150 - 144), (144, 6))
same("layers.examples", 9 * 10 + 5, 95)
same("layers.examples", Rational(960, 12), 80)
same("layers.examples", Rational(960, 16), 60)
check("layers.examples", 960 % 7 != 0 and floor(Rational(96000, 7)) == 13714, "960/7 = 137.14...")
check("layers.examples", 1 <= 28 <= 100 and 1 <= 95 <= 100, "tile chips fit the lab range")

# Intermediate: figure, step reasons, goals
same("build.task figure", len(divisors(36)), 9)
same("build.stepWhy", (Rational(84, 4), 10 * 10), (21, 100))
check("build.stepWhy", 9 * 9 <= 84 < 10 * 10, "search ends after 9")
same("build.stepGoal[1]", (45 % 2, 45 % 3, 45 % 4, 45 % 5, 4 + 5), (1, 0, 1, 0, 9))
same("build.stepGoal[1]", (3 * 15, 5 * 9), (45, 45))
check("build.stepGoal[1]", 1 <= 45 <= 100, "45 is in the slider range 1..100")
same("build.stepGoal[3]", 10 * 10, 100)
check("build.stepGoal[3]", 1 <= 100 <= 100, "100 is in the slider range")
same("build.stepGoal[4]", max(pp for pp in range(1, 101) if isprime(pp)), 97)
same("build.stepGoal[4]", (divisors(97), 9 * 11, 2 * 49), ([1, 97], 99, 98))
check("build.stepGoal[4]", 1 <= 97 <= 100, "97 is in the slider range")
# goals must differ from every chip end state, the walk's numbers and the lab start (36)
_chips = {12, 24, 6, 84, 28, 95, 60, 36, 72, 30, 48, 96, 8, 42}
_walk = {84, 12, 7, 48, 6, 14, 8, 80, 4}
check("build.stepGoal[1]", 45 not in _chips | _walk, "goal 45 not left by a chip or the walk")
check("build.stepGoal[3]", 100 not in _chips | _walk, "goal 100 not left by a chip or the walk")
check("build.stepGoal[4]", 97 not in _chips | _walk, "goal 97 not left by a chip or the walk")

# Everyday tasks
same("build.tasks[0].check", Rational(96, 8), 12)
same("build.tasks[0].lines", (8 * 10, 96 - 80, Rational(16, 8), 10 + 2, 8 * 12), (80, 16, 2, 12, 96))
same("build.tasks[0].demo", 8 * 12, 96)
same("build.tasks[1].check", len(_pairs(24)), 4)
same("build.tasks[1].lines", (_pairs(24), 5 * 5, 24 % 5 != 0), ([(1, 24), (2, 12), (3, 8), (4, 6)], 25, True))
same("build.tasks[1].predict", min(dd for dd in divisors(24) if dd > 2), 3)
same("build.tasks[1].demo", 4 * 6, 24)
same("build.tasks[2].check", min(y for y in range(2027, 2040) if y % 4 == 0), 2028)
same("build.tasks[2].lines", (4 * 25, 4 * 6 + 3, 27 % 4, 4 * 7), (100, 27, 3, 28))
check("build.tasks[2].lines", 2100 % 4 == 0 and 2100 % 400 != 0, "2100 is a century year that is not a leap year")
same("build.tasks[2].demo", 2020 + 4 + 4, 2028)
same("build.tasks[3].check", ilcm(8, 10), 40)
same("build.tasks[3].check", (Rational(40, 8), Rational(40, 10)), (5, 4))
same("build.tasks[3].lines", ([8 * k for k in range(1, 6)], [10 * k for k in range(1, 5)]), ([8, 16, 24, 32, 40], [10, 20, 30, 40]))
same("build.tasks[3].demo", len(range(8, 41, 8)), 5)
same("build.tasks[4].check", [dd for dd in range(5, 9) if 42 % dd == 0], [6, 7])
same("build.tasks[4].lines", (divmod(42, 5), 6 * 7, 4 + 2, divmod(42, 8)), ((8, 2), 42, 6, (5, 2)))
same("build.tasks[4].demo", 7 * 6, 42)

# Formal: vocab, setup
same("formal.vocab", (12 % 3, 12 % 5, len(divisors(36))), (0, 2, 9))
check("formal.vocab", all((len(divisors(m)) % 2 == 1) == (int(m ** 0.5) ** 2 == m) for m in range(1, 2000)), "d(n) odd iff square")
check("formal.vocab", 10 % 3 == 1 and 10 % 9 == 1, "10 leaves remainder 1 mod 3 and 9")
same("layers.setup", 8 * 10 + 4, 84)
same("layers.setup", 8 * 9 + (8 + 4), 84)
check("layers.setup", 12 % 3 == 0 and 84 % 3 == 0, "3 | 12 and 3 | 84")
same("layers.setup", [dd for dd in divisors(84) if 6 <= dd <= 15], [6, 7, 12, 14])
same("layers.setup", [84 // dd for dd in [6, 7, 12, 14]], [14, 12, 7, 6])
