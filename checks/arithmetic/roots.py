# content: 316cab5c164d
# roots: Square Roots & Perfect Squares
R = Rational
bab = lambda A, g: (g + R(A) / g) / 2
def lab_guesses(A, n=6):
    """The lab's guesses: start at floor(sqrt A) + 1 (or the exact root), then Babylonian steps."""
    f = int(floor(sqrt(A)))
    g = R(f) if f * f == A else R(f + 1)
    out = [g]
    for _ in range(n):
        g = bab(A, g); out.append(g)
    return out
def nearly(x, v, places):
    return abs(N(x, 30) - v) <= R(1, 2) * R(1, 10**places) + R(1, 10**12)

check("formal", sqrt(2*3) == sqrt(2)*sqrt(3) and sqrt(x**2) == Abs(x), "root rules")
check("formal", sqrt(R(9, 4)) == sqrt(9)/sqrt(4), "quotient rule sample")

# example (= the walk): garden plot of 60 m²
check("example", 7**2 == 49 and 8**2 == 64 and 49 < 60 < 64, "7 < √60 < 8")
same("example", R(60, 8), R(15, 2))
same("example", bab(60, R(8)), R(31, 4))
check("example", nearly(bab(60, R(31, 4)), 7.7460, 4), "x2 ≈ 7.7460")
same("example", sqrt(60), 2*sqrt(15))
same("example", 4*15, 60)
check("example", nearly(sqrt(60), 7.746, 3) and nearly(sqrt(60), 7.75, 2), "√60 ≈ 7.746 ≈ 7.75")
check("example", nearly(4*R(7746, 1000), 30.98, 2) and nearly(4*sqrt(60), 31, 0), "4 × 7.746 ≈ 30.98 ≈ 31")

# concept.walk: same plot
same("concept.walk lines", (7*7, 8*8), (49, 64))
check("concept.walk lines", 7 < sqrt(60) < 8, "side between 7 and 8")
same("concept.walk trap", (R(60, 2), 30*30), (30, 900))
check("concept.walk trap", 30**2 != 60, "halving is not the root")
same("concept.walk predict[1]", 8*8, 64)
same("concept.walk predict[3]", R(60, 8), R(15, 2))
check("concept.walk predict[3]", 8*7 == 56 and 60 - 56 == 4 and R(4, 8) == R(1, 2), "hint 8×7=56, 4 left is half of 8")
check("concept.walk predict[3]", R(60, 8) < sqrt(60) < 8, "8 too big so 7.5 too small")
same("concept.walk predict[4]", (8 + R(15, 2)) / 2, R(31, 4))
same("concept.walk predict[4] why", (R(15, 2)**2, 8**2), (R(225, 4), 64))
check("concept.walk predict[4] why", R(225, 4) == R(5625, 100) and R(225, 4) < 60 < 64, "7.5² = 56.25 too small, 8² too big")
same("concept.walk check", R(31, 4)**2, R(600625, 10000))
same("concept.walk predict[6]", 4*R(31, 4), 31)
check("concept.walk predict[6]", 4*7 == 28 and 4*R(3, 4) == 3, "hint 28 and 3")
same("concept.walk lab", lab_guesses(60)[:2], [8, R(31, 4)])
check("concept.walk demo", all(7 <= v <= 8 for v in [7, 8, R(15, 2), R(31, 4)]), "demo points on the 7..8 line")

# layers.concept: idea cards, stakes, figures
same("layers.concept ideas", 6*6, 36)
same("layers.concept ideas", [sqrt(16), sqrt(25), sqrt(36)], [4, 5, 6])
same("layers.concept ideas", R(10, 4), R(5, 2))
same("layers.concept ideas", bab(10, R(4)), R(13, 4))
same("layers.concept ideas", lab_guesses(10)[:2], [4, R(13, 4)])
same("layers.concept stakes", (sqrt(16), R(16, 2), 8*8), (4, 8, 64))
same("layers.concept stakes", (sqrt(9 + 16), sqrt(9) + sqrt(16)), (5, 7))
same("layers.concept stakes", sqrt(100), 10)
same("layers.concept stakes", 12*12, 144)
check("layers.concept figure", 1 <= 50 <= 150 and int(floor(sqrt(50))) == 7, "lab starts at A = 50, floor 7")
check("layers.concept chips", all(1 <= v <= 150 for v in [36, 81, 10, 16, 100, 144, 2, 20]), "chip areas in the lab's range")

# layers.examples (tiles)
same("layers.examples", sqrt(6**2 + 8**2), 10)
check("layers.examples", 10*12 + 1 > 10*12, "10 ft 1 in is longer than 10 ft")
same("layers.examples", sqrt(144), 12)
same("layers.examples", 4*12, 48)
check("layers.examples", abs(N(120*sqrt(2)) - 170) < 0.5, "120√2 ≈ 170 (169.7)")
same("layers.examples", sqrt(16), 4)
same("layers.examples", sqrt(5**2 + 12**2), 13)
same("layers.examples", 5**2 + 12**2, 169)
check("layers.examples", 13 < 15, "inside 15-unit range")
same("layers.examples", 120**2 + 50**2, 16900)
same("layers.examples", sqrt(16900), 130)

# history: YBC 7289 and Heron's 720
ybc = 1 + R(24, 60) + R(51, 3600) + R(10, 216000)
check("layers.history", nearly(ybc, 1.414213, 6), "1;24,51,10 ≈ 1.414213")
check("layers.history", abs(N(ybc) - N(sqrt(2))) < 1e-6, "about six decimal places")
same("layers.history", 27**2, 729)
same("layers.history", R(720, 27), 26 + R(2, 3))
same("layers.history", (27 + R(720, 27)) / 2, 26 + R(5, 6))
check("layers.history", 2026 - (-1800) > 3600, "about 4,000 years (1800–1600 BCE)")

# layers.setup: the plot, formally
check("layers.setup", 49 < 60 < 64 and 7 < sqrt(60) < 8, "bracket")
same("layers.setup", sqrt(60), sqrt(4)*sqrt(15))
same("layers.setup", sqrt(4)*sqrt(15), 2*sqrt(15))
same("layers.setup", bab(60, R(8)), R(31, 4))
check("layers.setup", nearly(bab(60, bab(60, R(8))), 7.7460, 4), "x2 ≈ 7.7460")
check("layers.setup", nearly(2*sqrt(15), 7.746, 3) and nearly(8*sqrt(15), 30.98, 2), "7.746 and 30.98")
check("layers.setup", nearly(sqrt(60), 7.75, 2) and nearly(8*sqrt(15), 31, 0), "7.75 m and 31 m")

# build: figure, step chips, goals
check("build.task figure", int(floor(sqrt(50))) == 7, "floor(√50) = 7 at the lab's start")
same("build.stepWhy", (7**2, 8**2), (49, 64))
same("build.stepTry", lab_guesses(20)[:2], [5, R(9, 2)])
same("build.stepGoal[0]", max(A for A in range(1, 151) if sqrt(A) < 10), 99)
same("build.stepGoal[0]", (9*9, 99 - 81, 10*10), (81, 18, 100))
check("build.stepGoal[0]", int(floor(sqrt(99))) == 9 and 1 <= 99 <= 150, "reachable, floor 9")
same("build.stepGoal[1]", min(range(49, 65), key=lambda A: abs(N(sqrt(A), 30) - R(15, 2))), 56)
same("build.stepGoal[1]", R(15, 2)**2, R(5625, 100))
check("build.stepGoal[1]", nearly(sqrt(56), 7.483, 3) and 1 <= 56 <= 150, "√56 ≈ 7.483, reachable")
chip_ends = [36, 81, 10, 16, 100, 144, 2, 20]
walk_nums = [60, 49, 64, 30, 900, 8, 31]
check("build.stepGoal[0]", 99 not in chip_ends + walk_nums, "no chip or walk number leaves 99")
check("build.stepGoal[1]", 56 not in chip_ends + walk_nums, "no chip or walk number leaves 56")

# build.tasks
same("build.tasks[0].lines", (9*9, 10*10, sqrt(100)), (81, 100, 10))
check("build.tasks[0].lines", 81 < 100, "9 too small")
same("build.tasks[0].predict", 10*10, 100)
same("build.tasks[0].demo", 10*10, 100)
same("build.tasks[0].check", sqrt(100), 10)

same("build.tasks[1].lines", (4*4, 5*5), (16, 25))
check("build.tasks[1].lines", 16 < 20 < 25, "bracket 4..5")
same("build.tasks[1].lines", R(20, 5), 4)
same("build.tasks[1].lines", R(5 + 4, 2), R(9, 2))
same("build.tasks[1].lines", R(9, 2)**2, R(2025, 100))
same("build.tasks[1].check", bab(20, R(5)), R(9, 2))
same("build.tasks[1].lab", lab_guesses(20)[1], R(9, 2))

same("build.tasks[2].lines", (48**2, 27**2, 48**2 + 27**2), (2304, 729, 3033))
same("build.tasks[2].lines", (55**2, 56**2), (3025, 3136))
check("build.tasks[2].lines", 3025 < 3033 < 3136 and nearly(sqrt(3033), 55.07, 2), "√3,033 ≈ 55.07")
same("build.tasks[2].check", int(N(sqrt(3033)).round()), 55)
same("build.tasks[2].predict", (2304 + 700, 3004 + 29), (3004, 3033))

same("build.tasks[3].lines", (9**2, 12**2, 81 + 144), (81, 144, 225))
same("build.tasks[3].check", sqrt(9**2 + 12**2), 15)
same("build.tasks[3].predict", 80 + 144 + 1, 225)

same("build.tasks[4].lines", (60**2, 80**2, 3600 + 6400), (3600, 6400, 10000))
same("build.tasks[4].check", (sqrt(10000), 60 + 80 - 100), (100, 40))
same("build.tasks[4].predict", (36 + 64) * 100, 10000)
same("build.tasks[4].demo", 140 - 100, 40)

# practice
same("practice[0]", sqrt(144), 12)
check("practice[1]", 7 < sqrt(50) < 8 and 49 < 50 < 64, "between 7 and 8")
check("practice[1]", sqrt(50) - 7 < 8 - sqrt(50), "closer to 7")
check("practice[1]", nearly(sqrt(50), 7.07, 2), "≈ 7.07")
same("practice[2]", sqrt(72), 6*sqrt(2))
same("practice[2]", 36*2, 72)
same("practice[3]", bab(10, R(3)), R(19, 6))
check("practice[3]", nearly(R(19, 6), 3.17, 2), "≈ 3.17")
check("practice[3]", nearly(sqrt(10), 3.1623, 4), "√10 ≈ 3.1623")
solves("practice[4]", Eq(s**2, 225), s, {-15, 15})
check("practice[4]", sqrt(225) == 15, "principal root 15")
same("practice[4]", 4*15, 60)

# plain: 20 ft² square
check("plain", 4 < sqrt(20) < 5 and nearly(sqrt(20), 4.47, 2), "√20 ≈ 4.47")
same("plain", 5**2, 25)

# mistakes
same("mistakes", (sqrt(16), 8*8), (4, 64))
same("mistakes", sqrt(9 + 16), 5)
