# content: 510e7f9eed3e
# subtraction: Subtraction

def _colsub(a, b):
    """Column subtraction with borrowing: returns (regrouped top digits, per-column (top, bottom, digit), borrow count)."""
    n = len(str(a)); top = [int(c) for c in str(a).zfill(n)][::-1]; bot = [int(c) for c in str(b).zfill(n)][::-1]
    cols, borrows = [], 0
    for i in range(n):
        if top[i] < bot[i]:
            j = i + 1
            while top[j] == 0: j += 1
            top[j] -= 1
            for q in range(j - 1, i, -1): top[q] = 9
            top[i] += 10; borrows += 1
        cols.append((top[i], bot[i], top[i] - bot[i]))
    val = sum(d * 10**i for i, (_, _, d) in enumerate(cols))
    assert val == a - b
    return cols, borrows

check("formal", (5 - 3) != (3 - 5) and (10 - 4) - 3 != 10 - (4 - 3), "not commutative/associative")
same("formal", (10 - 4) - 3, 3); same("formal", 10 - (4 - 3), 9); same("formal", 3 - 10, -7)

# example: 603 - 248
check("example", 5*100 + 9*10 + 13 == 603 and 5*100 + 10*10 + 3 == 603, "regrouped 5 10 3 and 5 9 13 = 603")
same("example", _colsub(603, 248)[0], [(13, 8, 5), (9, 4, 5), (5, 2, 3)])
same("example", 603 - 248, 355); same("example", 355 + 248, 603)
same("example", 85 - 27, 58); same("example", 15 - 7, 8); same("example", 58 + 27, 85)
# practice[0]
check("practice[0]", 7*10 + 12 == 82, "regroup 82")
same("practice[0]", _colsub(82, 37)[0], [(12, 7, 5), (7, 3, 4)])
same("practice[0]", 82 - 37, 45); same("practice[0]", 45 + 37, 82)
# practice[1]
check("practice[1]", 6*100 + 9*10 + 10 == 700, "regroup 700")
same("practice[1]", _colsub(700, 264)[0], [(10, 4, 6), (9, 6, 3), (6, 2, 4)])
same("practice[1]", 700 - 264, 436)
# practice[2]
check("practice[2]", 4*1000 + 9*100 + 9*10 + 13 == 5003, "regroup 5003")
same("practice[2]", _colsub(5003, 1847)[0], [(13, 7, 6), (9, 4, 5), (9, 8, 1), (4, 1, 3)])
same("practice[2]", 5003 - 1847, 3156); same("practice[2]", 3156 + 1847, 5003)
# practice[3]
same("practice[3]", 3000 - 1762, 1238); same("practice[3]", 1238 + 1762, 3000)
# practice[4]: budget, m + 1875 = 2400
m = symbols("m")
same("practice[4]", solve(Eq(m + 1875, 2400), m), [525]); same("practice[4]", 525 + 1875, 2400)

# mistakes
same("mistakes", 52 - 17, 35)
check("mistakes", 50 - 10 + (7 - 2) == 45, "smaller-from-larger slip: tens 5-1=4, ones 7-2=5 -> 45")
check("mistakes", (6 - 2)*100 + (9 - 4)*10 + (13 - 8) == 455, "across-zero slip keeps 6 hundreds -> 455")
same("mistakes", 10 - 3, 7); same("mistakes", 3 - 10, -7)

# Concept walk: 603 - 248 bagels
cols, br = _colsub(603, 248)
same("concept.walk", br, 1)
same("concept.walk predict[2] tens left", 10 - 1, 9)
same("concept.walk line 3", 13 - 8, 5)
same("concept.walk line 4", (9 - 4, 5 - 2), (5, 3))
same("concept.walk predict[4]", 603 - 248, 355)
same("concept.walk trap", (6 - 2)*100 + 5*10 + 5, 455); same("concept.walk trap", 455 - 355, 100)
same("concept.walk predict[6]", 355 + 248, 603)
same("concept.walk predict[6] hint", (5 + 8, 1 + 5 + 4, 1 + 3 + 2), (13, 10, 6))
check("concept.walk demo", cols[-1][2] == 3 and len(cols) == 3, "columns sub [603, 248]: 3 columns, then 355")
check("concept.walk choices", 8 - 3 == 5 and (8 - 3) + 40 + 400 == 445, "turning the ones around is the smaller-from-larger slip")

# layers.concept: idea cards and stakes
same("layers.concept", 85 - 27, 58); same("layers.concept", 58 + 27, 85)
same("layers.concept", _colsub(86, 25)[0], [(6, 5, 1), (8, 2, 6)]); same("layers.concept", 86 - 25, 61)
same("layers.concept", _colsub(52, 17)[0], [(12, 7, 5), (4, 1, 3)]); same("layers.concept", 52 - 17, 35)
same("layers.concept", 12 - 7, 5)
check("layers.concept", 5*10 - 1*10 + (7 - 2) == 45, "stakes: 52 - 17 slip -> 45")
check("layers.concept", 603 - 248 == 355 and 248 - 603 == -355, "order flipped")

# layers.examples: Where you will meet it tiles
same("layers.examples", Rational(35, 100) + 7 + 10, Rational(1735, 100))
same("layers.examples", 50 - Rational(3265, 100), Rational(1735, 100))
check("layers.examples", Rational(3265, 100) + Rational(35, 100) == 33 and 33 + 7 == 40 and 40 + 10 == 50, "count-up steps")
same("layers.examples", 240 - 90 - 60, 90)
same("layers.examples", 84500 - 67850, 16650)
same("layers.examples", 6200 - 4750, 1450); same("layers.examples", 1450 - 1200, 250)
same("layers.examples", Rational(2540, 100) - 25, Rational(40, 100))
same("layers.examples", 21 - (-4), 25)
check("layers.examples", 84500 <= 999999 and 6200 <= 999999, "tile chips fit the lab range")

# layers.setup
same("layers.setup", 6*10**2 + 0*10 + 3, 603); same("layers.setup", 5*10**2 + 9*10 + 13, 603)
same("layers.setup", (5 - 2)*10**2 + (9 - 4)*10 + (13 - 8), 355)
same("layers.setup", 3*10**2 + 5*10 + 5, 355)
same("layers.setup", 355 + 248, 603)

# Intermediate: task figure (lab start 5,203 - 1,867), step reasons, goals
same("build.task figure", _colsub(5203, 1867)[1], 2); same("build.task figure", 5203 - 1867, 3336)
check("build.stepWhy", 7*10 + 12 == 82, "7 tens 12 ones is 82")
same("build.stepGoal[2]", 91 - 45, 46); same("build.stepGoal[2]", _colsub(91, 45)[0], [(11, 5, 6), (8, 4, 4)])
check("build.stepGoal[2]", 0 <= 45 <= 91 <= 999999, "reachable in the lab")
same("build.stepGoal[3]", 400 - 158, 242); same("build.stepGoal[3]", _colsub(400, 158)[0], [(10, 8, 2), (9, 5, 4), (3, 1, 2)])
check("build.stepGoal[3]", 0 <= 158 <= 400 <= 999999, "reachable in the lab")
_chips = [(85, 27), (86, 25), (603, 248), (84500, 67850), (6200, 4750), (5203, 1867), (50, 32), (2000, 1365), (75, 48), (1250, 875), (2026, 1987)]
check("build.stepGoal", all(a - b not in (46, 242) for a, b in _chips), "no chip leaves a goal's result in the lab")

# Everyday tasks
same("build.tasks[0]", 50 - 32, 18); same("build.tasks[0].lines", (32 + 8, 40 + 10, 8 + 10), (40, 50, 18))
same("build.tasks[1]", 2000 - 1365, 635)
same("build.tasks[1].lines", _colsub(2000, 1365)[0], [(10, 5, 5), (9, 6, 3), (9, 3, 6), (1, 1, 0)])
same("build.tasks[1].lines", 635 + 1365, 2000)
same("build.tasks[2]", (8*60 + 15) - (7*60 + 48), 27); same("build.tasks[2].lines", 60 + 15, 75)
same("build.tasks[2].lines", _colsub(75, 48)[0], [(15, 8, 7), (6, 4, 2)]); same("build.tasks[2]", 75 - 48, 27)
same("build.tasks[3]", 1250 - 875, 375)
same("build.tasks[3].lines", _colsub(1250, 875)[0], [(10, 5, 5), (14, 7, 7), (11, 8, 3), (0, 0, 0)])
same("build.tasks[4]", 2026 - 1987, 39); same("build.tasks[4].lines", 39 - 1, 38)
same("build.tasks[4].lines", _colsub(2026, 1987)[0], [(16, 7, 9), (11, 8, 3), (9, 9, 0), (1, 1, 0)])
same("build.tasks[4].lines", 39 + 1987, 2026)

# Formal vocab and matters
same("layers.formal", 603 - 248, 355); same("layers.formal", 248 - 603, -355)
