# content: 571a3b8f27b9
# integers: Integers & Negative Numbers
from itertools import product as _prod
_R = range(-10, 11)
def _lab(a, op, b): return a + b if op == 0 else a - b if op == 1 else a * b
def _reach(v): return any(_lab(a, op, b) == v for a in _R for b in _R for op in (0, 1, 2))

same("formal", -3 - 5, -3 + (-5))
same("formal", (-3)*(-4), 12)
check("formal", Rational(1, 2).is_integer is False, "1/2 should not be an integer")
check("formal", all(a + (-a) == 0 for a in range(-50, 51)), "a + (-a) = 0")
check("formal", all(a - b == a + (-b) and (-a)*b == -(a*b) and (-a)*(-b) == a*b for a in range(-12, 13) for b in range(-12, 13)), "display identities")

# example: the winter day (-6, +9, -7), same numbers as the walk
_dawn = -6; _noon = _dawn + 9; _mid = _noon - 7
same("example", _noon, 3)
same("example", 9 - 6, 3)
same("example", _mid, -4); same("example", 3 + (-7), -4); same("example", 7 - 3, 4)
same("example", _noon - _dawn, 9); same("example", 3 + 6, 9); same("example", 3 - 6, -3)

same("practice[0]", -5 + 9, 4); same("practice[0]", 9 - 5, 4)
same("practice[1]", 3 - 10, -7); same("practice[1]", 3 + (-10), -7); same("practice[1]", 10 - 3, 7); same("practice[1]", abs(3 - 10), 7)
same("practice[2]", -6 - (-14), 8); same("practice[2]", -6 + 14, 8); same("practice[2]", 14 - 6, 8)
same("practice[3]", (-4)*(-7), 28)
same("practice[3]", (-3)*5, -15)
same("practice[3]", (-4)*(-7) - (-3)*5, 43)
same("practice[3]", 28 - (-15), 28 + 15)
same("practice[4]", solve(Eq(a - 65, -25), a), [40]); same("practice[4]", -25 + 65, 40)

# plain / why
same("plain", 40 - 65, -25); same("plain", abs(-25), 25); same("plain", 4*(-3), -12); same("plain", 25 + (-25), 0)
same("plain", 0 - (-4), 0 + 4)
same("why", 4 - (-9), 13); same("why", 13 - 9, 4)

# mistakes
same("mistakes", 4 - (-6), 10); same("mistakes", 4 + 6, 10)
same("mistakes", -3 - 5, -8); same("mistakes", -3 + (-5), -8)
check("mistakes", -9 < -2, "-9 < -2")
same("mistakes", (-3)*(-4), 12)
same("mistakes", -9 - 4, -13)

# Concept walk: dawn -6, +9 -> 3, -7 -> -4; trap 3 - 6 = -3, fix 3 - (-6) = 9
same("concept.walk dawn", abs(-6), 6)
same("concept.walk predict[1]", -6 + 9, 3)
same("concept.walk line 2", (0 - (-6), 9 - 6), (6, 3))
check("concept.walk predict[2]", 3 - 7 == 3 + (-7) and 7 - 3 == 4 and 3 + 7 == 10 and 3 + 7 > 3, "3 - 7 = 3 + (-7); wrong picks 7 - 3 = 4 and 3 + 7 = 10")
same("concept.walk predict[3]", 3 + (-7), -4)
same("concept.walk line 4", (0 - 3, 7 - 3), (-3, 4))
same("concept.walk trap", 3 - 6, -3)
same("concept.walk predict[4] wrong", -6 - 3, -9)
same("concept.walk predict[5]", 3 - (-6), 9); same("concept.walk fix", 3 + 6, 9)
same("concept.walk demo", -6 + 9 + (-7), -4)
check("concept.walk demo", -8 <= min(-6, 3, -4) and max(-6, 3, -4) <= 6, "walk points fit the line -8..6")
check("concept.walk lab", _lab(3, 0, -7) == -4, "the lab starts on 3 + (-7) = -4, the walk's midnight line")

# Concept idea cards, stakes (layers.concept)
same("layers.concept", abs(-6), 6); same("layers.concept", abs(6), 6); same("layers.concept", -6 + 6, 0)
same("layers.concept", 3 - (-6), 3 + 6); same("layers.concept", 3 + 6, 9)
same("layers.concept", (-2)*(-4), 8); same("layers.concept", 4*2, 8)
same("layers.concept", 4 - (-6), 10)
same("layers.concept", -9 - 4, -13); same("layers.concept", abs(-9 - 4), 13)
same("layers.concept", (-3)*(-4), 12)

# Concept tiles (layers.examples)
same("layers.examples", 12000 - 4500 - 2000 + 7500, 13000)
same("layers.examples", -9 - 4, -13)
same("layers.examples", -5 - (-18), 13); same("layers.examples", -5 + 18, 13)
same("layers.examples", 5 - (-5), 10)
same("layers.examples", 10000 + 800 + (-1200) + 650, 10250); same("layers.examples", 10250 - 10000, 250)
same("layers.examples", 6*(-800), -4800); same("layers.examples", 11000 - 4800, 6200)

# Formal setup: T = -6 + 9 - 7
same("layers.setup", -6 + 9 - 7, -4); same("layers.setup", -6 + 9 + (-7), -4)
same("layers.setup", -6 + 9, 3); same("layers.setup", 3 + (-7), -4)
check("layers.setup", abs(9) > abs(-6) and abs(-7) > abs(3), "larger absolute value sets the sign")
same("layers.setup", -6 + (-7), -13); same("layers.setup", 9 + (-13), -4)
same("layers.setup", 3 - (-6), 9)

# Formal vocab / matters
same("layers.formal", -5 - 2, -7); same("layers.formal", 2 - (-5), 7); same("layers.formal", -(-5), 5)

# Intermediate: stepWhy, step chips, key chips
same("layers.build", 3 + 5, 8); same("layers.build", -6 + 9, 3)
same("layers.build", 6 - (-2), 8); same("layers.build", -8 + 5, -3); same("layers.build", -9 + 9, 0)

# Everyday tasks
same("build.tasks[0]", 40 - 65, -25); same("build.tasks[0]", 40 + (-65), -25); same("build.tasks[0]", 65 - 40, 25)
same("build.tasks[0].demo", 40 + (-65), -25)
same("build.tasks[1]", -9 - 4, -13); same("build.tasks[1]", -9 + (-4), -13); same("build.tasks[1]", abs(-13), 13)
same("build.tasks[1]", 4 + 9, 13); same("build.tasks[1].demo", abs(4 - (-9)), 13)
same("build.tasks[2]", -2 + 1, -1); same("build.tasks[2]", 2 - 1, 1); same("build.tasks[2]", -1 + (-3), -4)
same("build.tasks[2]", -2 + 1 + (-3), -4); same("build.tasks[2].demo", 0 - 2 + 1 - 3, -4)
same("build.tasks[3]", 3 - (-2), 5); same("build.tasks[3]", 3 + 2, 5); same("build.tasks[3]", 3 - 2, 1)
same("build.tasks[3].demo", abs(3 - (-2)), 5); check("build.tasks[3]", _lab(3, 1, -2) == 5, "chip a:3,op:1,b:-2 shows 5")
same("build.tasks[4]", -120 + 200, 80); same("build.tasks[4]", 200 - 120, 80)
same("build.tasks[4]", 80 + (-95), -15); same("build.tasks[4]", 95 - 80, 15)
same("build.tasks[4].demo", -120 + 200 - 95, -15)

# Your move goals: targets, reachable in the lab (-10..10), and not left by any chip or the walk
_chips = [(-6, 0, 0), (-6, 0, 6), (3, 1, -6), (-2, 2, -4), (4, 1, -6), (5, 1, -5),
          (-6, 0, 9), (3, 0, -7), (-9, 0, 9), (6, 1, -2), (-8, 0, 5), (3, 1, -2)]
_chipEnds = {_lab(*c) for c in _chips} | {-4}
_walk = {-6, 9, 3, -7, -4, 6, -3}
for _i, (_v, _a, _op, _b) in [(1, (-13, -5, 0, -8)), (3, (-5, 4, 0, -9)), (4, (32, -4, 2, -8))]:
    _lbl = "build.stepGoal[%d]" % _i
    same(_lbl, _lab(_a, _op, _b), _v)
    check(_lbl, _a in _R and _b in _R and _reach(_v), "goal reachable in the lab's range")
    check(_lbl, _v not in _chipEnds and _v not in _walk, "no chip or walk number leaves the goal value")
