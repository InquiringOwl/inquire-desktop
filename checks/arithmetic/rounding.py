# content: 43a411e0022b
# rounding: Rounding & Estimation
def rhu(v, u):
    """round half up to a multiple of u (exact, works for Rationals)"""
    L = floor(Rational(v) / u) * u
    return L if v < L + Rational(u, 2) else L + u
def rhe(v, u):
    return int(round(Rational(v, u))) * u   # python round() on Rational: half to even
def lab_rounded(x, place):
    """what L["rounding"] publishes as `rounded` (x 0..999, place 10 or 100)"""
    lo = (x // place) * place
    return lo + place if x - lo >= place / 2 else lo
def digit(v, u):
    """the deciding digit: one place right of the rounding unit u"""
    return (v // (u // 10)) % 10

check("formal", rhe(4350, 100) == 4400 and rhe(4250, 100) == 4200, "banker's examples")
check("formal", all(abs(rhu(v, 100) - v) <= 50 for v in range(0, 2000)), "error <= u/2")
check("formal", all((v >= (v // u) * u + u // 2) == (digit(v, u) >= 5) for u in (10, 100, 1000) for v in range(0, 5000)), "x >= L+u/2 iff d >= 5")
check("formal", all(abs(rhe(v, 100) - v) <= 50 for v in range(0, 2000)), "half-even error <= u/2")
check("formal", rhu(4372, 100) == 4400 and rhu(4350, 100) == 4400 and 4300 + 50 == 4350, "plain: 4,372 and 4,350")

# example: fundraisers 347, 218, 462 (same as the walk)
same("example", rhu(347, 100), 300)
same("example", rhu(218, 100), 200)
same("example", rhu(462, 100), 500)
same("example", [digit(347, 100), digit(218, 100), digit(462, 100)], [4, 1, 6])
same("example", 300 + 200 + 500, 1000)
same("example", 347 + 218 + 462, 1027)
same("example", 1027 - 1000, 27)

# Concept walk: round it together
same("concept.walk landmarks", ((347 // 100) * 100, (347 // 100) * 100 + 100), (300, 400))
same("concept.walk predict[1] halfway", 300 + Rational(100, 2), 350)
check("concept.walk", 347 < 350, "347 short of halfway")
same("concept.walk predict[2] distances", (347 - 300, 400 - 347), (47, 53))
same("concept.walk round once", rhu(347, 100), 300)
same("concept.walk trap", rhu(rhu(347, 10), 100), 400)
same("concept.walk trap first step", rhu(347, 10), 350)
same("concept.walk predict[4]", rhu(462, 100), 500)
same("concept.walk line5", rhu(218, 100), 200)
same("concept.walk predict[5]", rhu(347, 100) + rhu(218, 100) + rhu(462, 100), 1000)
same("concept.walk predict[6]", 347 + 218 + 462, 1027)
same("concept.walk hint", 347 + 218, 565)
same("concept.walk demo", [300, 400, 347, 350], [(347 // 100) * 100, (347 // 100) * 100 + 100, 347, 300 + 50])

# layers.concept: idea cards and stakes
same("layers.concept idea1", ((263 // 10) * 10, (263 // 10) * 10 + 10), (260, 270))
same("layers.concept idea2", 260 + 5, 265)
same("layers.concept idea2", rhu(265, 10), 270)
same("layers.concept idea3", (digit(682, 100), rhu(682, 100)), (8, 700))
same("layers.concept stakes", rhu(rhu(347, 10), 100), 400)
same("layers.concept stakes", rhu(347, 100), 300)
same("layers.concept stakes", (rhu(4351, 100), digit(4351, 100)), (4400, 5))
same("layers.concept stakes", rhu(2961, 100), 3000)
same("layers.concept stakes", ceiling(Rational(43, 10)), 5)
same("layers.concept chips", [lab_rounded(263, 10), lab_rounded(265, 10), lab_rounded(682, 100), lab_rounded(347, 10)], [260, 270, 700, 350])
same("layers.concept figure", lab_rounded(347, 10), 350)   # the lab starts at x = 347, nearest ten

# layers.examples (tiles) and timeline/history numbers
same("layers.examples", rhu(Rational(5840, 100), 10), 60)
same("layers.examples", Rational(10, 100) * 60, 6)
same("layers.examples", 2 * 6, 12)
same("layers.examples", Rational(20, 100) * Rational(5840, 100), Rational(1168, 100))
same("layers.examples", 40 * 24, 960)
check("layers.examples", rhu(38, 10) == 40 and rhu(Rational(2375, 100), 1) == 24, "38 -> 40, 23.75 -> 24, both up")
same("layers.examples", 38 * Rational(2375, 100), Rational(90250, 100))
same("layers.examples", rhu(2847300000, 100000000), 2800000000)
check("layers.examples", digit(2847300000, 100000000) == 4, "deciding digit 4")
same("layers.examples", rhu(Rational(736, 100), Rational(1, 10)), Rational(74, 10))
same("layers.examples", rhu(Rational(2345, 1000), Rational(1, 100)), Rational(235, 100))
same("layers.examples", rhe(2345, 10), 2340)
same("layers.examples", [lab_rounded(58, 10), lab_rounded(38, 10)], [60, 40])
check("layers.examples", Rational(223, 71) < pi < Rational(22, 7), "Archimedes' bounds")
same("layers.examples", 3 + Rational(10, 71), Rational(223, 71))
same("layers.examples", 3 + Rational(1, 7), Rational(22, 7))
same("layers.examples", round(float(Rational(223, 71)), 4), 3.1408)
same("layers.examples", round(float(Rational(22, 7)), 4), 3.1429)
check("layers.examples", abs(524.811 / 1098.892 - 0.5) < 0.05, "VSE lost about half its value")

# layers.setup: the fundraisers, textbook form
same("layers.setup", (347 // 100) * 100, 300)
same("layers.setup", 300 + 100, 400)
same("layers.setup", 300 + 50, 350)
check("layers.setup", 347 < 350, "347 short of halfway")
same("layers.setup", [rhu(347, 100), rhu(218, 100), rhu(462, 100)], [300, 200, 500])
same("layers.setup", 3 * 50, 150)
same("layers.setup", rhu(347, 100) + rhu(218, 100) + rhu(462, 100), 1000)
same("layers.setup", abs(1000 - 1027), 27)
check("layers.setup", 27 <= 150, "within the bound")
check("layers.setup", all(abs(sum(rhu(v, 100) for v in t) - sum(t)) <= 150 for t in [(347, 218, 462), (350, 350, 350), (349, 349, 349)]), "n*u/2 bound")

# formal matters: round vs truncate, tie rule
same("formal matters", (rhu(382, 100), (382 // 100) * 100), (400, 300))
same("formal matters", (rhu(2450, 100), rhe(2450, 100)), (2500, 2400))

# Intermediate: keys and step chips (none may tick a goal)
same("build.keyTry", [lab_rounded(518, 10), lab_rounded(412, 100), lab_rounded(486, 100), lab_rounded(450, 100)], [520, 400, 500, 500])
same("build.stepTry", [lab_rounded(734, 100), lab_rounded(873, 100)], [700, 900])

# Your move goals (key x): unique answers, reachable on the slider (0..999)
same("build.stepGoal[1]", min(v for v in range(0, 1000) if lab_rounded(v, 100) == 600), 550)
same("build.stepGoal[2]", max(v for v in range(0, 1000) if lab_rounded(v, 100) == 600), 649)
same("build.stepGoal[2]", lab_rounded(650, 100), 700)
same("build.stepGoal[3]", min(v for v in range(0, 1000) if lab_rounded(v, 10) == 400), 395)
check("build.stepGoal[3]", digit(395, 10) == 5 and (395 // 10) % 10 == 9, "ones 5, tens 9 carries")
_chip_x = [347, 263, 265, 682, 58, 38, 518, 412, 486, 450, 734, 873, 296, 287]
check("build.stepGoal[1]", 0 <= 550 <= 999 and 550 not in _chip_x, "550 reachable, no chip leaves it")
check("build.stepGoal[2]", 0 <= 649 <= 999 and 649 not in _chip_x, "649 reachable, no chip leaves it")
check("build.stepGoal[3]", 0 <= 395 <= 999 and 395 not in _chip_x, "395 reachable, no chip leaves it")
check("build.stepGoal[1]", not {550, 649, 395} & {347, 218, 462, 300, 200, 500, 350, 400, 1000, 1027}, "goals differ from the walk")

# Everyday tasks
_p = [Rational(679, 100), Rational(325, 100), Rational(1150, 100)]
same("build.tasks[0].check", sum(rhu(v, 1) for v in _p), 22)
same("build.tasks[0].lines", [rhu(v, 1) for v in _p], [7, 3, 12])
same("build.tasks[0].lines", sum(_p), Rational(2154, 100))
same("build.tasks[0].demo", 7 + 3 + 12, 22)
same("build.tasks[1].check", rhu(296, 100) + rhu(418, 100), 700)
same("build.tasks[1].lines", (rhu(296, 100), rhu(418, 100), 296 + 418), (300, 400, 714))
check("build.tasks[1].lines", 1014 != 296 + 418, "the calculator's 1,014 is wrong")
same("build.tasks[1].predict", rhu(418, 100), 400)
same("build.tasks[1].try", lab_rounded(296, 100), 300)
same("build.tasks[2].check", 4 * rhu(Rational(1999, 100), 1), 80)
same("build.tasks[2].lines", 4 * Rational(1999, 100), Rational(7996, 100))
same("build.tasks[2].lines", 80 - Rational(7996, 100), Rational(4, 100))
same("build.tasks[2].demo", 20 * 4, 80)
same("build.tasks[3].check", rhu(287, 100) / 60, 5)
same("build.tasks[3].lines", round(287 / 60, 1), 4.8)
same("build.tasks[3].demo", 0 + 5 * 60, 300)
same("build.tasks[3].try", lab_rounded(287, 100), 300)

# practice
same("practice[0]", rhu(67, 10), 70)
same("practice[1]", rhu(4351, 100), 4400)
same("practice[2]", rhu(2450, 100), 2500)
same("practice[2]", rhe(2450, 100), 2400)
same("practice[3]", rhu(612, 100) + rhu(287, 100) + rhu(405, 100), 1300)
same("practice[3]", 612 + 287 + 405, 1304)
same("practice[4]", rhu(187, 100) + rhu(242, 100) + rhu(316, 100), 700)
same("practice[4]", 187 + 242 + 316, 745)
same("practice[4]", 745 - 700, 45)

# mistakes
same("mistakes", rhu(347, 100), 300)
same("mistakes", rhu(4351, 100), 4400)
same("mistakes", rhu(2961, 100), 3000)
