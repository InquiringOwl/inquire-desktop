# content: eead25108ac5
# decimal-ops: Operations with Decimals
R = Rational

def dec(s):
    """A decimal string as an exact rational."""
    return R(s)

def places(s):
    return len(s.split(".")[1]) if "." in s else 0

# ---- the lab (L["decimal-ops"]): what it can show ----
# Multiply: x, y in 1..10 tenths, result = x*y/100.  Add: x, y in 0..100 hundredths, result = (x+y)/100.
MUL = {(a, b): R(a * b, 100) for a in range(1, 11) for b in range(1, 11)}
ADD = {(a, b): R(a + b, 100) for a in range(0, 101) for b in range(0, 101)}
REACH = set(MUL.values()) | set(ADD.values())
START = MUL[(3, 4)]   # the lab opens in Multiply at 0.3 x 0.4
# every chip on the page, as its end state (mode, x, y)
CHIPS = {
    "idea 1": ADD[(45, 30)], "idea 2": MUL[(3, 4)], "idea 3": MUL[(5, 5)], "idea 4": MUL[(2, 3)],
    "stakes": MUL[(6, 4)],
    "keyTry x": MUL[(7, 4)], "keyTry y": MUL[(7, 2)], "keyTry product": MUL[(10, 4)], "keyTry sum": ADD[(65, 50)],
    "stepTry 0": ADD[(40, 5)], "stepTry 2": MUL[(9, 6)],
}
WALK_NUMBERS = {R(6, 10), R(4, 10), R(24, 100), R(24, 10), R(25, 100), R(5, 10)}

# formal: 1 / 0.3 = 3.333...
same("formal", R(1) / dec("0.3"), R(10, 3))

# example and concept.walk: planter box 0.6 m by 0.4 m
same("example", 6 * 4, 24)
same("example", places("0.6") + places("0.4"), 2)
same("example", dec("0.6") * dec("0.4"), dec("0.24"))
check("example", dec("0.6") * dec("0.4") != dec("2.4") and dec("2.4") > 1, "2.4 m^2 exceeds the 1 m^2 square")
same("example", dec("0.5") * dec("0.5"), dec("0.25"))
same("concept.walk predict[1]", 6 * 4, 24)
same("concept.walk predict[2]", dec("0.6") * dec("0.4"), R(24, 10**(places("0.6") + places("0.4"))))
check("concept.walk predict[3]", dec("0.6") * dec("0.4") < 1 and dec("0.6") < 1 and dec("0.4") < 1, "both sides under 1 m, area under 1 m^2")
same("concept.walk predict[4]", dec("0.5") * dec("0.5"), dec("0.25"))
check("concept.walk", abs(dec("0.25") - dec("0.24")) <= dec("0.01"), "estimate 0.25 is close to 0.24")
same("concept.walk demo", [6 * r for r in range(1, 5)], [6, 12, 18, 24])
same("concept.walk demo", R(4 * 6, 100), dec("0.6") * dec("0.4"))

# practice
same("practice[0]", dec("4.7") + dec("12.35"), dec("17.05"))
same("practice[1]", 10 - dec("3.46"), dec("6.54"))
same("practice[2]", 6 * 25, 150)
same("practice[2]", places("0.06") + places("2.5"), 3)
same("practice[2]", dec("0.06") * dec("2.5"), dec("0.15"))
same("practice[3]", dec("7.56") / dec("0.36"), 21)
same("practice[3]", R(756, 36), 21)
same("practice[4]", solve(Eq(12*x, dec("43.20")), x)[0], dec("3.60"))

# plain / mistakes / why: numbers stated on the page
same("plain", dec("3.49") + dec("2.75"), dec("6.24"))
same("plain", dec("0.3") * dec("0.4"), dec("0.12"))
same("plain", 3 * 4, 12)
same("mistakes", dec("0.6") * dec("0.4"), R(24, 100))
same("mistakes", dec("0.47") + dec("12.35"), dec("12.82"))
same("mistakes", dec("4.70") + dec("12.35"), dec("17.05"))
same("mistakes", R(756, 36), 21)
same("mistakes", dec("0.2") * dec("0.3"), dec("0.06"))
same("why", dec("5") / dec("0.5"), 10)

# layers.concept: idea cards, stakes, question figure
same("layers.concept", dec("0.45") + dec("0.30"), dec("0.75"))
same("layers.concept", dec("0.3"), dec("0.30"))
same("layers.concept", dec("0.3") * dec("0.4"), dec("0.12"))
same("layers.concept", dec("0.5") * dec("0.5"), dec("0.25"))
same("layers.concept", dec("0.2") * dec("0.3"), dec("0.06"))
same("layers.concept", [4 * 3, 5 * 5, 3 * 2], [12, 25, 6])
same("layers.concept", dec("4.7") + dec("12.35"), dec("17.05"))
same("layers.concept", dec("0.47") + dec("12.35"), dec("12.82"))
same("layers.concept", dec("7.56") / dec("0.36"), 21)
same("layers.concept", dec("5") / dec("0.5"), 10)
same("layers.concept figure", START, dec("0.12"))

# layers.examples (tiles)
same("layers.examples", dec("1248.75") - dec("300.50"), dec("948.25"))
same("layers.examples", dec("1.250") - dec("0.375"), dec("0.875"))
same("layers.examples", dec("0.75") / dec("0.25"), 3)
same("layers.examples", R(75, 25), 3)
same("layers.examples", 375 * 2280, 855000)
same("layers.examples", places("37.5") + places("22.80"), 3)
same("layers.examples", dec("37.5") * dec("22.80"), 855)
same("layers.examples", R(855000, 1000), 855)
same("layers.examples", dec("4.2") / dec("0.25"), dec("16.8"))
same("layers.examples", R(420, 25), dec("16.8"))
same("layers.examples", 240 * dec("3.85"), 924)
same("layers.examples", 240 * 4, 960)

# layers.steps (stepWhy)
same("layers.steps", dec("4.7"), dec("4.70"))
same("layers.steps", 10 * 10, 100)
same("layers.steps", dec("7.56") / dec("0.36"), R(756, 36))

# build.stepGoal: targets, reachable, and no chip or walk number leaves them in the lab
GOALS = {1: (dec("0.68") + dec("0.57"), dec("1.25"), ADD[(68, 57)]),
         3: (dec("0.8") * dec("0.7"), dec("0.56"), MUL[(8, 7)]),
         5: (dec("0.9") * dec("0.9"), dec("0.81"), MUL[(9, 9)])}
for i, (truth, page, lab) in GOALS.items():
    lbl = "build.stepGoal[%d]" % i
    same(lbl, truth, page)
    same(lbl, lab, page)
    check(lbl, page in REACH, "the lab can show it")
    check(lbl, page not in CHIPS.values() and page != START, "no chip end state or the starting state shows it")
    check(lbl, page not in WALK_NUMBERS, "differs from the walk's numbers")
same("build.stepGoal[1]", [8 + 7, 6 + 5 + 1], [15, 12])
same("build.stepGoal[3]", 8 * 7, 56)
check("build.stepGoal[5]", dec("0.81") < 1, "a little less than 1")

# build.tasks
# [0] receipt
same("build.tasks[0].check", dec("3.49") + dec("2.75"), dec("6.24"))
same("build.tasks[0].check", dec("10.00") - dec("6.24"), dec("3.76"))
same("build.tasks[0].lines", [9 + 5, dec("6.24") + dec("3.76")], [14, 10])
same("build.tasks[0].predict", dec("7.00") - dec("6.24") + 3, dec("3.76"))
same("build.tasks[0].demo", 10 - dec("6.24"), dec("3.76"))
# [1] cheese
same("build.tasks[1].check", dec("2.75") * dec("6.20"), dec("17.05"))
same("build.tasks[1].check", 20 - dec("17.05"), dec("2.95"))
same("build.tasks[1].lines", 275 * 620, 170500)
same("build.tasks[1].lines", R(170500, 10**4), dec("17.0500"))
same("build.tasks[1].lines", 3 * 6, 18)
same("build.tasks[1].predict", places("2.75") + places("6.20"), 4)
same("build.tasks[1].demo", 20 - dec("17.05"), dec("2.95"))
# [2] bill split
same("build.tasks[2].check", dec("86.52") / 4, dec("21.63"))
same("build.tasks[2].lines", [R(88, 4), 4 * dec("21.63")], [22, dec("86.52")])
same("build.tasks[2].predict", [divmod(8, 4), divmod(6, 4), divmod(25, 4), divmod(12, 4)], [(2, 0), (1, 2), (6, 1), (3, 0)])
same("build.tasks[2].demo", 4 * dec("21.63"), dec("86.52"))
# [3] doses
same("build.tasks[3].check", 100 / dec("2.5"), 40)
same("build.tasks[3].lines", [R(1000, 25), R(100, 25)], [40, 4])
same("build.tasks[3].predict", 100 * 10, 1000)
same("build.tasks[3].demo", [10 * r for r in range(1, 5)], [10, 20, 30, 40])

# layers.setup: planter box, textbook form
same("layers.setup", R(6, 10) * R(4, 10), R(24, 10**(1 + 1)))
same("layers.setup", R(24, 100), dec("0.24"))
check("layers.setup", 0 < dec("0.24") < dec("0.4") < dec("0.6"), "product below each factor")
check("layers.setup", all(R(a, 10) * R(b, 10) < min(R(a, 10), R(b, 10)) for a in range(1, 10) for b in range(1, 10)), "0<x,y<1 implies xy<min(x,y)")

# formal.matters: rounding 0.0456
same("formal.matters", round(dec("0.0456"), 2), dec("0.05"))
same("formal.matters", round(dec("0.0456") * 1000) / R(1000), dec("0.046"))
