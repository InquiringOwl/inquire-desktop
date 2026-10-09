# content: 146b37e3c338
# addition: Addition

def _cols(x, y):
    """Column addition from the right: list of (column total incl. carry-in, digit written, carry out)."""
    out, carry = [], 0
    while x or y or carry:
        t = x % 10 + y % 10 + carry
        out.append((t, t % 10, t // 10))
        carry = t // 10
        x //= 10; y //= 10
    return out

def _carries(x, y):
    return sum(c for _, _, c in _cols(x, y))

def _nocarry(x, y):
    """The dropped-carry slip: each column's ones digit, no carries passed on."""
    r, p = 0, 1
    while x or y:
        r += ((x % 10 + y % 10) % 10) * p
        x //= 10; y //= 10; p *= 10
    return r

# formal: commutativity / associativity / identity
check("formal", simplify((a + b) - (b + a)) == 0 and simplify(((a + b) + c) - (a + (b + c))) == 0 and a + 0 == a, "laws fail")

# example: 478 + 356
same("example", 8 + 6, 14)
same("example", 1 + 7 + 5, 13)
same("example", 1 + 4 + 3, 8)
same("example", 478 + 356, 834)
same("example", 500 + 400, 900)
check("example", round(478, -2) == 500 and round(356, -2) == 400, "rounded addends")
same("example", _cols(478, 356), [(14, 4, 1), (13, 3, 1), (8, 8, 0)])

# practice[0]
same("practice[0]", 6 + 7, 13)
same("practice[0]", 1 + 3 + 4, 8)
same("practice[0]", 36 + 47, 83)

# practice[1]
same("practice[1]", 9 + 7, 16)
same("practice[1]", 1 + 0 + 8, 9)
same("practice[1]", 5 + 2, 7)
same("practice[1]", 509 + 287, 796)

# practice[2]
same("practice[2]", 8 + 6, 14)
same("practice[2]", 1 + 4 + 9, 14)
same("practice[2]", 1 + 7 + 3, 11)
same("practice[2]", 1 + 2 + 1, 4)
same("practice[2]", 2748 + 1396, 4144)
same("practice[2]", [t for t, _, _ in _cols(2748, 1396)], [14, 14, 11, 4])

# practice[3]
same("practice[3]", 1875 + 2409, 4284)
same("practice[3]", 4284 + 638, 4922)
same("practice[3]", 1875 + 2409 + 638, 4922)

# practice[4]
same("practice[4]", 500 + 240, 740)
same("practice[4]", 740 + 120, 860)
same("practice[4]", 500 + 240 + 120, 860)

# mistakes
same("mistakes", _nocarry(478, 356), 724)
same("mistakes", 24 + 6, 30)
same("mistakes", 2 * 12, 24)

# layers (concept examples, formal setup): numbers stated on the page
same("layers.examples", 12 + 3 + 8, 23)
same("layers.examples", 49 + 75 + 20, 144)
same("layers.examples", Rational(144, 100), Rational(144, 100))
same("layers.examples", 23 + Rational(144, 100), Rational(2444, 100))
same("layers.examples", Rational(1249 + 375 + 820, 100), Rational(2444, 100))
same("layers.examples", 40 + 6 + 8, 54)
same("layers.examples", 500 + 240 + 120, 860)
same("layers.examples", 84 + 84 + 38, 206)
check("layers.examples", 17 * 12 < 206 < 18 * 12, "206 in is a little over 17 ft")
same("layers.examples", 1250 + 980 + 1475, 3705)
check("layers.examples", 3705 < 4000, "under the 4,000 lb limit")
same("layers.examples", 1320 + 985 + 1140, 3445)
same("layers.setup", 7 * 10**2 + 12 * 10 + 14, 834)
same("layers.setup", 8 * 10**2 + 3 * 10 + 4, 834)
same("layers.setup", (4*100 + 7*10 + 8) + (3*100 + 5*10 + 6), 834)
same("layers.setup", 478 + 356, 834)

# layers.concept: idea cards, stakes, matters (formal matters numbers too)
same("layers.concept", 40 + 25, 65)
same("layers.concept", 25 + 40, 65)
same("layers.concept", 325 + 142, 467)
same("layers.concept", _carries(325, 142), 0)
same("layers.concept", 58 + 36, 94)
same("layers.concept", _cols(58, 36)[0], (14, 4, 1))
same("layers.concept", 356 + 478, 834)
same("layers.concept", 834 - _nocarry(478, 356), 110)
same("layers.concept", 356 + 42, 398)
same("layers.concept", 356 + 420, 776)
same("layers.concept", 2 * 12 + 6, 30)
same("layers.concept", 478 - 356, 122)
same("layers.concept", 9 + 8, 17)

# Concept walk "Add it together: two days on the road": 478 + 356
same("concept.walk", _cols(478, 356), [(14, 4, 1), (13, 3, 1), (8, 8, 0)])
same("concept.walk predict[1]", (8 + 6) % 10, 4)
same("concept.walk predict[2]", 1 + 7 + 5, 13)
same("concept.walk predict[3]", 478 + 356, 834)
same("concept.walk predict[3] wrong", 834 - 100, 734)
same("concept.walk predict[3] wrong", int("7" + "12" + "14"), 71214)
same("concept.walk predict[4]", _nocarry(478, 356), 724)
same("concept.walk predict[4]", 356 + 478, 834)
same("concept.walk predict[5]", round(478, -2) + round(356, -2), 900)
same("concept.walk demo", _carries(478, 356), 2)
same("concept.walk demo frames", len(_cols(478, 356)) + 2, 5)

# Intermediate: stepGoals (lab range 0..999999)
same("build.stepGoal[3]", 267 + 158, 425)
same("build.stepGoal[3]", _carries(267, 158), 2)
check("build.stepGoal[3]", 0 <= 267 <= 999999 and 0 <= 158 <= 999999, "267 and 158 fit the lab inputs")
same("build.stepGoal[4]", 999 + 1, 1000)
same("build.stepGoal[4]", _carries(999, 1), 3)
same("build.stepGoal[4]", len(_cols(999, 1)), 4)
check("build.stepGoal[4]", 0 <= 999 <= 999999 and 0 <= 1 <= 999999, "999 and 1 fit the lab inputs")

# Intermediate everyday tasks
same("build.tasks[0]", 27 + 15 + 8, 50)
same("build.tasks[0].lines", (7 + 5, 1 + 2 + 1, 27 + 15, 2 + 8, 42 + 8), (12, 4, 42, 10, 50))
same("build.tasks[1]", 8 + 7 + 9 + 6 + 8, 38)
same("build.tasks[1].lines", (8 + 7, 15 + 9, 24 + 6, 30 + 8), (15, 24, 30, 38))
same("build.tasks[1].predict", 15 + 9, 24)
same("build.tasks[2]", 1150 + 375, 1525)
same("build.tasks[2].lines", [t for t, _, _ in _cols(1150, 375)], [5, 12, 5, 1])
same("build.tasks[2].predict", 5 + 7, 12)
same("build.tasks[3]", (2 * 60 + 45) + (1 * 60 + 30), 4 * 60 + 15)
same("build.tasks[3].lines", (45 + 30, divmod(75, 60), 2 + 1 + 1), (75, (1, 15), 4))
same("build.tasks[3].demo", (2 * 60 + 45, 1 * 60 + 30, 165 + 90), (165, 90, 255))
same("build.tasks[4]", 120 + 45 + 38, 203)
same("build.tasks[4].lines", (120 + 45, 165 + 38, [t for t, _, _ in _cols(165, 38)]), (165, 203, [13, 10, 2]))
same("build.tasks[4].link", 170 + 40, 210)
