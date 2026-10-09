# content: 47e586e8cd03
# order-ops: Order of Operations
from fractions import Fraction as _F

def _ltr(tokens):
    """Strictly left to right, ignoring precedence (the classic slip)."""
    v = _F(tokens[0])
    for i in range(1, len(tokens), 2):
        o, b = tokens[i], _F(tokens[i + 1])
        v = {"+": v + b, "-": v - b, "*": v * b, "/": v / b}[o]
    return v

# formal statement
same("formal", 2**(3**2), 2**9)
same("formal", Rational(6 + 4, 2), 5)

# example: museum trip (the walk's situation)
same("example", 2*12, 24); same("example", 3*7, 21)
same("example", 24 + 21, 45); same("example", 45 - 5, 40)
same("example", 2*12 + 3*7 - 5, 40)
same("example", _ltr([2, "*", 12, "+", 3, "*", 7, "-", 5]), 184)

# practice
same("practice[0]", 8 + 2*5, 18); same("practice[0]", 8 + 10, 18)
same("practice[1]", (8 + 2)*5, 50); same("practice[1]", 10*5, 50)
same("practice[2]", 20 - Rational(12, 4)*2, 14); same("practice[2]", Rational(12, 4), 3); same("practice[2]", 3*2, 6); same("practice[2]", 20 - 6, 14)
same("practice[3]", Rational(48, 2 + 6)*3 - 5, 13); same("practice[3]", 2 + 6, 8); same("practice[3]", Rational(48, 8), 6); same("practice[3]", 6*3, 18); same("practice[3]", 18 - 5, 13)
C = symbols("C")
solves("practice[4]", Eq(C, 25 + 30*6), C, {205})
same("practice[4]", 30*6, 180); same("practice[4]", 25 + 180, 205)
# formal checkers: every ans equals its practice answer
same("layers.formal checks", [18, 50, 14, 13, 205], [8 + 2*5, (8 + 2)*5, 20 - Rational(12, 4)*2, Rational(48, 8)*3 - 5, 25 + 30*6])

# plain / why / mistakes
same("plain", 3 + 4*2, 11)
same("plain", _ltr([3, "+", 4, "*", 2]), 14)
same("plain", (3 + 4)*2, 2*3 + 4*2)   # left to right charges the $3 fee twice
same("plain", Rational(12, 3)*2, 8)
same("why", (2*12) + (3*7), 2*12 + 3*7)
same("mistakes", _ltr([3, "+", 4, "*", 2]), 14); same("mistakes", 3 + 8, 11)
same("mistakes", Rational(12, 3*2), 2); same("mistakes", Rational(12, 3)*2, 8)
same("mistakes", 10 - (3 + 2), 5); same("mistakes", 10 - 3 + 2, 9)
same("mistakes", 6 + Rational(4, 2), 8)
same("mistakes", Rational(6 + 4, 2), 5)

# Concept walk: 2 x 12 + 3 x 7 - 5
same("concept.walk", 2*12, 24)
same("concept.walk", 3*7, 21)
same("concept.walk", 24 + 21, 45)
same("concept.walk", 45 - 5, 40)
same("concept.walk", 2*12 + 3*7 - 5, 40)
same("concept.walk trap", [2*12, 24 + 3, 27*7, 189 - 5], [24, 27, 189, 184])
same("concept.walk trap", _ltr([2, "*", 12, "+", 3, "*", 7, "-", 5]), 184)
same("concept.walk predict", [10 - 3 + 2, 10 - (3 + 2)], [9, 5])
same("concept.walk predict", [7, 14, 21], [7*1, 7*2, 7*3])
same("concept.walk demo", [2*12, 3*7, 2*12 + 3*7], [24, 21, 45])

# Concept idea cards and stakes
same("layers.concept", 4*2, 8); same("layers.concept", 3 + 4*2, 11)
same("layers.concept", 3 + 4, 7); same("layers.concept", (3 + 4)*2, 14); same("layers.concept", 2*7, 14)
same("layers.concept", 7 - 2 - 1, 4); same("layers.concept", [7 - 2, 5 - 1], [5, 4])
same("layers.concept", _ltr([3, "+", 4, "*", 2]), 14)
same("layers.concept", Rational(12, 3)*2, 8); same("layers.concept", Rational(12, 3*2), 2)
same("layers.concept", Rational(6 + 4, 2), 5); same("layers.concept", 6 + Rational(4, 2), 8)

# Concept example tiles
same("layers.examples", 15*4 + 8, 68)
same("layers.examples", 15*(4 + 8), 180)
same("layers.examples", 2000*(1 + Rational(5, 100)) - 150, 1950)
same("layers.examples", 2000*1 + Rational(5, 100) - 150, Rational(185005, 100))
same("layers.examples", Rational(250, 500)*10, 5)
same("layers.examples", Rational(250, 500), Rational(1, 2))
same("layers.examples", Rational(1, 6) + Rational(1, 3), Rational(1, 2))
same("layers.examples", 1 / (Rational(1, 6) + Rational(1, 3)), 2)
same("layers.examples", 120*4 + 200, 680)
same("layers.examples", 680*Rational(115, 100), 782)
same("layers.examples", 120*4 + 200*Rational(115, 100), 710)
same("layers.examples", 782 - 710, 72)

# Intermediate: stepWhy, matters
same("layers.build", 2*3**2, 18); same("layers.build", 2*9, 18)
same("layers.build", Rational(12, 3)*2, 8); same("layers.build", Rational(12, 3*2), 2)
same("layers.build", 10 - 3 + 2, 9); same("layers.build", 10 - (3 + 2), 5)
same("layers.build", 2*12, 24)

# Intermediate tasks
same("build.tasks[0]", 3*15 + 2*9 - 10, 53)
same("build.tasks[0].lines", [3*15, 2*9, 45 + 18, 63 - 10], [45, 18, 63, 53])
same("build.tasks[0].demo", 45 + 18, 63)
same("build.tasks[1]", 5 + 3*4, 17)
same("build.tasks[1].lines", [3*4, 5 + 12, (5 + 3)*4], [12, 17, 32])
same("build.tasks[1].lines", _ltr([5, "+", 3, "*", 4]), 32)
same("build.tasks[1].lines", (5 + 3)*4, 5*4 + 3*4)   # start fee charged 4 times
same("build.tasks[2]", (60 + 25)*4, 340)
same("build.tasks[2].lines", [60 + 25, 85*4, 60 + 25*4, 340 - 160], [85, 340, 160, 180])
same("build.tasks[2].demo", 85*4, 340)
same("build.tasks[3]", (50 - 10)*Rational(105, 100), 42)
same("build.tasks[3].lines", [50 - 10, 40*Rational(105, 100), 50 - 10*Rational(105, 100)], [40, 42, Rational(3950, 100)])
same("build.tasks[3].demo", [40*Rational(5, 100), 40 + 2], [2, 42])
same("build.tasks[4]", 2*3 + 1, 7)
same("build.tasks[4].lines", [2*3, 6 + 1, 2*(3 + 1)], [6, 7, 8])
same("build.tasks[4].demo", 3 + 3 + 1, 7)

# Intermediate goals: the lab's presets, evaluated independently
_presets = {
    0: 3 + 4*2,
    1: (3 + 4)*2,
    2: 20 - Rational(12, 4)*2,
    3: Rational(8, 2)*(2 + 2),
    4: Rational(48, 6 - 2) + 3*5,
    5: 2*(3 + 5)**2 - 10,
    6: 7 - 2 - 1,
    7: 5 + 2*(9 - 3**2) + Rational(6, 3),
}
same("build.stepGoal[0]", _presets[3], 16)
same("build.stepGoal[0]", [2 + 2, Rational(8, 2), 4*4], [4, 4, 16])
same("build.stepGoal[1]", _presets[5], 118)
same("build.stepGoal[1]", [3 + 5, 8**2, 2*64, 128 - 10], [8, 64, 128, 118])
# reachable, and no chip on the page leaves these results (chips play presets 0, 1, 2, 6, 7)
_chip_results = {_presets[i] for i in (0, 1, 2, 6, 7)}
check("build.stepGoal[0]", 16 not in _chip_results and list(_presets.values()).count(16) == 1, "16 is reached only by preset 3")
check("build.stepGoal[1]", 118 not in _chip_results and list(_presets.values()).count(118) == 1, "118 is reached only by preset 5")
check("build.stepGoal[0]", 16 not in {2, 12, 3, 7, 5, 24, 21, 45, 40, 27, 189, 184}, "goal differs from the walk's numbers")
check("build.stepGoal[1]", 118 not in {2, 12, 3, 7, 5, 24, 21, 45, 40, 27, 189, 184}, "goal differs from the walk's numbers")
same("build.stepTry", [_presets[2], _presets[6], _presets[7]], [14, 4, 7])

# Formal: vocab, matters, setup
same("layers.formal", 2*3**2, 18)
same("layers.formal", Rational(12, 3)*2, 8); same("layers.formal", Rational(12, 3*2), 2)
same("layers.setup", ((2*12) + (3*7)) - 5, 2*12 + 3*7 - 5)
same("layers.setup", 2*12 + 3*(7 - 5), 30)
same("layers.setup", 24 + 21 - 5, 40)
same("layers.setup", 2*12 + 3*7 - 5, 40)
