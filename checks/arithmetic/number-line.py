# content: 7a139553be45
# number-line: Comparing & the Number Line
# The situation through all three tabs: you at mile 0, gas station a = 11, rest stop b = 18.

def _cmp(x, y):
    return '<' if x < y else '>' if x > y else '='

def _digits(n):
    return [int(d) for d in str(n)]

def _first_diff(x, y):
    """Digit method: index of the first place from the left where equal-length numbers differ."""
    dx, dy = _digits(x), _digits(y)
    for i, (p, q) in enumerate(zip(dx, dy)):
        if p != q:
            return i, p, q
    return None

_GAS, _REST = 11, 18
_LAB = range(0, 21)          # the lab's sliders a, b run 0..20

# example (same numbers as the walk)
same("example", _first_diff(_GAS, _REST), (1, 1, 8))
text("example", _cmp(_GAS, _REST), '<')
same("example", _REST - _GAS, 7)
same("example", Abs(_GAS - _REST), 7)

# Concept walk: highway, frames of the line demo
same("concept.walk demo dist", Abs(_GAS - _REST), 7)
check("concept.walk demo", all(v in _LAB for v in (_GAS, _REST)), "both stops fit the line 0..20")
check("concept.walk predict[1]", _REST > _GAS and abs(_REST - 0) > abs(_GAS - 0), "rest stop at 18 is farther from mile 0")
text("concept.walk predict[2]", _cmp(_GAS, _REST), '<')
same("concept.walk predict[3]", len(range(_GAS, _REST)), 7)          # one-mile hops counted up from 11
same("concept.walk predict[3]", _REST - _GAS, 7)
same("concept.walk markers", len(range(_GAS, _REST + 1)), 8)         # the trap: markers 11..18
same("concept.walk markers", len(range(_GAS, _REST + 1)) - 1, _REST - _GAS)
same("concept.walk predict[5]", Abs(_GAS - _REST), Abs(_REST - _GAS))
same("concept.walk predict[5]", Abs(_GAS - _REST), 7)

# layers.concept: question figure, idea cards, stakes
check("layers.concept ideas", 15 > 4 and all(v in _LAB for v in (4, 15)), "idea 1: 15 is right of 4, both in lab range")
text("layers.concept ideas", _cmp(13, 6), '>')
same("layers.concept ideas", Abs(6 - 13), 7)
same("layers.concept ideas", Abs(13 - 6), Abs(6 - 13))
check("layers.concept ideas", all(v in _LAB for v in (13, 6)), "idea chips in lab range")
same("layers.concept stakes", _first_diff(406, 460), (1, 0, 6))
text("layers.concept stakes", _cmp(406, 460), '<')
text("layers.concept stakes", _cmp(3, 7), '<')
same("layers.concept stakes", len(range(3, 8)), 5)
same("layers.concept stakes", 7 - 3, 4)
same("layers.concept stakes", Abs(11 - 18), 7)

# layers.examples (tiles)
check("layers.examples", 104 > 99 and 70 <= 99, "104 above range 70..99")
same("layers.examples", 104 - 99, 5)
check("layers.examples", 53 > 52 and 48 < 52, "53 > 52")
same("layers.examples", 53 - 52, 1)
same("layers.examples", 15 * 100 + 20, 1520)
same("layers.examples", 12 * 100 + 50, 1250)
same("layers.examples", 1520 - 1250, 270)
check("layers.examples", sorted([4870, 4780, 4807]) == [4780, 4807, 4870], "bid order")
same("layers.examples", 4807 - 4780, 27)
same("layers.examples", 35000 - 33000, 2000)
check("layers.examples", 2000 > 1000, "separation above minimum")
same("layers.examples", 19 - 4, 15)
same("layers.examples", Abs(4 - 19), 15)
check("layers.examples", 4 in _LAB and 19 in _LAB, "driver tile chip fits the lab")

# Intermediate: method reasons, key chips, goals
check("layers.steps", 1000 > 999 and 100 > 99 and 10 > 9 and 1002 > 998, "step reasons")
check("layers.build chips", all(v in _LAB for v in (5, 16, 9, 9, 12, 16, 12)), "chips in lab range")
same("layers.build chips", _first_diff(16, 12), (1, 6, 2))
check("layers.build chips", len(str(9)) < len(str(12)) and 9 < 12, "more digits is greater")
same("build.stepGoal[1]", _first_diff(19, 20), (0, 1, 2))
text("build.stepGoal[1]", _cmp(19, 20), '<')
check("build.stepGoal[1]", 20 in _LAB and 19 in _LAB, "b = 20 reachable")
same("build.stepGoal[3]", _first_diff(14, 17), (1, 4, 7))
same("build.stepGoal[3]", 17 - 14, 3)
check("build.stepGoal[3]", any(abs(x - y) == 3 for x in _LAB for y in _LAB), "dist = 3 reachable")
check("build.stepGoal[4]", any(abs(x - y) == 0 for x in _LAB for y in _LAB), "dist = 0 reachable")
same("build.stepGoal[4]", Abs(9 - 9), 0)

# Everyday tasks
same("build.tasks[0].lines", _first_diff(1209, 1290), (2, 0, 9))
text("build.tasks[0].lines", _cmp(1209, 1290), '<')
same("build.tasks[0].check", 1290 - 1209, 81)
same("build.tasks[0].predict", [_digits(1209)[2], _digits(1290)[2]], [0, 9])
same("build.tasks[0].demo", Abs(1209 - 1290), 81)
check("build.tasks[0].demo", 1200 <= 1209 <= 1300 and 1200 <= 1290 <= 1300, "points on the line")

same("build.tasks[1].lines", list(range(3, 8)), [3, 4, 5, 6, 7])
same("build.tasks[1].lines", len(range(3, 8)) - 1, 4)
same("build.tasks[1].check", 7 - 3, 4)
same("build.tasks[1].predict", len(range(3, 7)), 4)
same("build.tasks[1].demo", Abs(3 - 7), 4)

same("build.tasks[2].lines", _first_diff(62, 65), (1, 2, 5))
text("build.tasks[2].lines", _cmp(62, 65), '<')
same("build.tasks[2].check", 65 - 62, 3)
same("build.tasks[2].predict", max(62, 65), 65)
same("build.tasks[2].demo", Abs(62 - 65), 3)

_hops = [4, 30, 3]
same("build.tasks[3].lines", [46 + 4, 50 + 30, 80 + 3], [50, 80, 83])
same("build.tasks[3].lines", sum(_hops), 37)
same("build.tasks[3].check", 83 - 46, 37)
same("build.tasks[3].predict", 80 - 50, 30)
same("build.tasks[3].demo", 46 + sum(_hops), 83)
check("build.tasks[3].demo", 40 <= 46 and 83 <= 90 and 50 <= 90, "hops stay on 40..90")

_w = [14, 9, 17, 11]
same("build.tasks[4].lines", sorted(_w), [9, 11, 14, 17])
same("build.tasks[4].check", (min(_w), max(_w), max(_w) - min(_w)), (9, 17, 8))
same("build.tasks[4].predict", min(_w), 9)
check("build.tasks[4].demo", all(v in _LAB for v in _w), "weights fit 0..20 and the chip a:9,b:17")

# Formal: matters chips, setup
same("layers.formal matters", len([x for x in range(0, 100) if x < 7]), 7)
same("layers.formal matters", len([x for x in range(0, 100) if x <= 7]), 8)
same("layers.setup", _GAS + 7, _REST)
check("layers.setup", 7 >= 1, "k = 7 is a natural number at least 1")
same("layers.setup", [1 * 10 + 1, 1 * 10 + 8], [_GAS, _REST])
same("layers.setup", Abs(_GAS - _REST), Abs(_REST - _GAS))
same("layers.setup", _GAS - _REST, -7)
same("layers.setup", Abs(-7), 7)

# practice
text("practice[0]", _cmp(406, 460), '<')
same("practice[0]", _first_diff(406, 460), (1, 0, 6))
same("practice[0]", max(406, 460), 460)
same("practice[0]", 460 - 406, 54)
same("practice[1]", Abs(91 - 38), 53)
_q = [1209, 1092, 1290, 1029]
same("practice[2]", sorted(_q), [1029, 1092, 1209, 1290])
same("practice[2]", [_digits(x)[1] for x in sorted(_q)], [0, 0, 2, 2])
same("practice[2]", (min(_q), max(_q)), (1029, 1290))
same("practice[3]", 36 + 84, 120)
same("practice[3]", Rational(36 + 84, 2), 60)
check("practice[3]", 60 - 36 == 24 and 84 - 60 == 24, "equal distances 24")
solves("practice[4]", Eq(47 + d, 72), d, [25])

# mistakes
same("mistakes", 11 - 18, -7)
same("mistakes", Abs(11 - 18), 7)
same("mistakes", 7 - 3, 4)
same("mistakes", len(range(3, 8)), 5)
# goals keyed on the lab's `pair` value (100·a + b): both points at once
same("build.stepGoal[1]", 100 * 19 + 20, 1920)
same("build.stepGoal[3]", 100 * 14 + 17, 1417)
