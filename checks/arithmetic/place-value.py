# content: 77e06d813031
# place-value: Place Value & Base Ten

def _digits(n, k=4):
    """Digits of n from the thousands down (k places)."""
    return [(n // 10**i) % 10 for i in reversed(range(k))]

def _expand(n):
    return sum(d * 10**i for i, d in enumerate(reversed([int(c) for c in str(n)])))

# example: check for $4,306
check("example", [int(ch) for ch in "4306"] == [4, 3, 0, 6], "digits")
same("example", 4*1000 + 3*100 + 0*10 + 6*1, 4306)
check("example", (4306 // 10) % 10 == 0, "tens digit is 0")

# practice
check("practice[0]", (3782 // 100) % 10 == 7, "7 is in hundreds place")
same("practice[0]", 7*100, 700)
same("practice[1]", 5*1000 + 0*100 + 4*10 + 9*1, 5049)
check("practice[1]", [int(ch) for ch in "5049"] == [5, 0, 4, 9], "digits of 5049")
same("practice[1]", ((5049 // 10) % 10) * 10, 40)
same("practice[2]", 3*1000 + 14*100 + 2*10 + 5, 4425)
same("practice[2]", 14*100, 1400)
same("practice[3]", 4560 // 10, 456)
same("practice[3]", 4560 % 10, 0)
same("practice[4]", 6*1000 + 0*100 + 9*10 + 3*1, 6093)
same("practice[4]", 6000 + 0 + 90 + 3, 6093)

# mistakes / why
same("mistakes", 4*1000 + 0*100 + 0*10 + 6, 4006)
same("mistakes", 4560, 456 * 10)
same("mistakes", 10 * 1250, 12500)
same("mistakes", 4*100 + 3*10 + 6, 436)
check("mistakes", _expand(4306) != _expand(436) and _expand(4306) == 4306, "dropping the 0 changes the number")
same("why", Rational(5, 1) / Rational(1, 2), 10)

# Concept walk: Place it together, a check for a used car ($4,306)
_w = _digits(4306)
same("concept.walk digits", _w, [4, 3, 0, 6])
same("concept.walk predict[1]", _w[0] * 1000, 4000)
same("concept.walk predict[2]", _w[1] * 100, 300)
check("concept.walk predict[2] distractors", 300 != 3 and 300 != 3000, "3 and 3,000 are wrong")
same("concept.walk predict[3]", _w[2], 0)
same("concept.walk line4", (_w[2] * 10, _w[3] * 1), (0, 6))
same("concept.walk trap", int("".join(str(d) for d in _w if d != 0)), 436)
check("concept.walk trap", 436 != 4306, "436 is not 4,306")
same("concept.walk predict[5]", 4000 + 300 + 0 + 6, 4306)
same("concept.walk demo", _expand(4306), 4306)

# layers.concept: idea cards, stakes, figure (lab starts at 2,354)
same("layers.concept", 9 + 1, 10)
same("layers.concept", [3 * 10**i for i in range(4)], [3, 30, 300, 3000])
same("layers.concept", _expand(3333), 3333)
same("layers.concept", _digits(306, 3), [3, 0, 6])
check("layers.concept", 306 != 36, "306 and 36 differ")
same("layers.concept", Rational(5) / Rational(1, 2), 10)
same("layers.concept", Rational(12500, 1250), 10)
same("layers.concept", ((3782 // 100) % 10) * 100, 700)
same("layers.concept", Rational(700, 7), 100)
check("layers.concept", 0 <= 2354 <= 9999 and 0 <= 436 <= 9999, "figure and stakes chip fit the lab")

# layers.examples (tiles)
same("layers.examples", Rational(5) / Rational(5, 10), 10)
same("layers.examples", 12500 - 1250, 11250)
same("layers.examples", Rational(11250, 9), 1250)
same("layers.examples", int("1011", 2), 11)
same("layers.examples", 8 + 0 + 2 + 1, 11)
same("layers.examples", int("FF", 16), 255)
same("layers.examples", 15 * 16 + 15, 255)
same("layers.examples", 1*1000 + 0*100 + 4*10 + 5, 1045)
same("layers.examples", _digits(1045), [1, 0, 4, 5])
same("layers.examples", Rational(1240 - 1237, 1000), Rational(3, 1000))
same("layers.examples", Rational(1) + Rational(2, 10) + Rational(3, 100) + Rational(7, 1000), Rational(1237, 1000))

# layers.setup
check("layers.setup", [(4306 // 10**i) % 10 for i in range(4)] == [6, 0, 3, 4], "d0..d3 of 4306")
same("layers.setup", [10**i for i in range(4)], [1, 10, 100, 1000])
same("layers.setup", sum(((4306 // 10**i) % 10) * 10**i for i in range(4)), 4306)
same("layers.setup", 4*10**3 + 3*10**2 + 0*10 + 6, 4306)
check("layers.setup", all(sum(((n // 10**i) % 10) * 10**i for i in range(5)) == n for n in range(100000)), "expansion is exact")

# build tasks
same("build.tasks[0].check", ((2050 // 10) % 10) * 10, 50)
same("build.tasks[0].lines", (2*1000, 0*100, 5*10, 2000 + 0 + 50 + 0), (2000, 0, 50, 2050))
same("build.tasks[0].predict", (2050 // 100) % 10, 0)
same("build.tasks[0].demo", _digits(2050), [2, 0, 5, 0])
same("build.tasks[1].check", Rational(1290, 129), 10)
same("build.tasks[1].lines", (1*100 + 2*10 + 9, 1*1000 + 2*100 + 9*10 + 0, 129*10), (129, 1290, 1290))
same("build.tasks[1].predict", len(str(1290)), 4)
same("build.tasks[1].demo", _digits(1290), [1, 2, 9, 0])
same("build.tasks[2].check", 3*100 + 14*10 + 2*1, 442)
same("build.tasks[2].lines", (3*100, 14*10, 300 + 140 + 2), (300, 140, 442))
same("build.tasks[2].predict", 14 * 10, 140)
same("build.tasks[2].demo", sum([300, 140, 2]), 442)
same("build.tasks[3].check", 9980 + 20, 10000)
same("build.tasks[3].lines", (9980 + 10, 9990 + 10, len(str(10000))), (9990, 10000, 5))
same("build.tasks[3].predict", 9990 + 10, 10000)
check("build.tasks[3].demo", 9960 <= 9980 <= 10000 and 9960 <= 9980 + 10 + 10 <= 10000, "jumps stay on the line")
same("build.tasks[4].check", min(8950, 8590), 8590)
check("build.tasks[4].lines", _digits(8950)[0] == _digits(8590)[0] == 8 and _digits(8950)[1] == 9 and _digits(8590)[1] == 5, "thousands tie, hundreds decide")
same("build.tasks[4].lines", 8950 - 8590, 360)
same("build.tasks[4].predict", [i for i in range(4) if _digits(8950)[i] != _digits(8590)[i]][0], 1)
same("build.tasks[4].demo", _digits(8590), [8, 5, 9, 0])

# build goals (lab: 0..9999)
same("build.stepGoal[1]", 99 + 1, 100)
check("build.stepGoal[1]", 0 <= 99 <= 9999 and 0 <= 100 <= 9999, "reachable in the lab")
same("build.stepGoal[2]", (3782 // 100) % 10, 7)
same("build.stepGoal[2]", 7 * 100, 700)
check("build.stepGoal[2]", any((n // 100) % 10 == 7 for n in range(10000)), "a hundreds digit of 7 is reachable")
same("build.stepGoal[3]", 0 + 4*1000 + 3*100 + 6*1, 4306)
check("build.stepGoal[3]", 0 <= 4306 <= 9999, "reachable in the lab")
same("build", [5049 <= 9999, 4006 <= 9999, 9 + 1], [True, True, 10])
