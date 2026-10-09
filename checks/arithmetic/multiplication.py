# content: 5913c7a87c59
# multiplication: Multiplication

def parts(n):
    """place-value split of a two-digit number, as the lab draws it"""
    return [n - n % 10, n % 10] if n >= 10 and n % 10 else [n]

def boxes(a, b):
    return [p * q for p in parts(a) for q in parts(b)]

def pairs(p):
    """factor pairs (a, b) with both factors in the lab's 1..99 range"""
    return [(a, p // a) for a in range(1, 100) if p % a == 0 and 1 <= p // a <= 99]

# example: concert hall 23 rows of 47 seats
same("example", parts(23), [20, 3]); same("example", parts(47), [40, 7])
same("example", 20*40, 800); same("example", 20*7, 140)
same("example", 3*40, 120); same("example", 3*7, 21)
same("example", 800 + 140 + 120 + 21, 1081)
same("example", 23*47, 1081)
same("example", 20*50, 1000)

# practice
same("practice[0]", 7*8, 56)
same("practice[1]", 30*5 + 6*5, 180); same("practice[1]", (30*5, 6*5), (150, 30)); same("practice[1]", 36*5, 180)
same("practice[2]", 40*20 + 40*5 + 8*20 + 8*5, 1200); same("practice[2]", 48*25, 1200)
check("practice[2]", (40*20, 40*5, 8*20, 8*5) == (800, 200, 160, 40), "partial products")
same("practice[3]", 124*30, 3720); same("practice[3]", 124*7, 868)
same("practice[3]", 3720 + 868, 4588); same("practice[3]", 124*37, 4588)
same("practice[4]", 10*26, 260); same("practice[4]", 8*26, 208)
same("practice[4]", 260 + 208, 468); same("practice[4]", 18*26, 468)

# mistakes
same("mistakes", 800 + 21, 821); same("mistakes", 20*40, 2*4*10*10); same("mistakes", 7*0, 0)
same("mistakes", 12*30, 360); same("mistakes", Rational(30, 12), Rational(5, 2)); same("mistakes", 12*Rational(5, 2), 30)

# Concept walk: 23 x 47, bar parts and frames
same("concept.walk split", (parts(23), parts(47)), ([20, 3], [40, 7]))
same("concept.walk boxes", boxes(23, 47), [800, 140, 120, 21])
same("concept.walk predict[1]", parts(47), [40, 7])
same("concept.walk predict[2]", 20*40, 800); same("concept.walk", 2*4, 8)
same("concept.walk trap", 800 + 21, 821)
same("concept.walk trap gap", 23*47 - 821, 260); same("concept.walk trap gap", 140 + 120, 260)
same("concept.walk predict[4]", 3*7, 21)
same("concept.walk predict[5]", sum(boxes(23, 47)), 1081); same("concept.walk", 800 + 140, 940)
same("concept.walk estimate", 20*50, 1000)
same("concept.walk predict[3] wrong", 23 + 47, 70)
same("concept.walk demo total", sum([800, 140, 120, 21]), 23*47)

# Concept idea cards and stakes
same("layers.concept ideas", 4*6, 24); same("layers.concept ideas", 6*4, 24)
same("layers.concept ideas", boxes(23, 14), [200, 80, 30, 12]); same("layers.concept ideas", sum(boxes(23, 14)), 322)
same("layers.concept ideas", 12*10, 120); same("layers.concept ideas", (parts(23), parts(14)), ([20, 3], [10, 4]))
same("layers.concept figure", 23*14, 322)   # lab starts at a = 23, b = 14
same("layers.concept stakes", 800 + 21, 821); same("layers.concept stakes", 140 + 120, 260)
same("layers.concept stakes", 20*40, 800); same("layers.concept stakes", Rational(800, 80), 10)
check("layers.concept stakes", Rational(22046, 10000) > 2, "1 kg is about 2.2 lb, so a pounds figure more than doubles the dose")
same("layers.concept stakes", 12*30, 360); same("layers.concept stakes", 12*Rational(5, 2), 30)

# Concept tiles
same("layers.examples", 5*24, 120); same("layers.examples", 12*10, 120)
same("layers.examples", 15*42, 630)
same("layers.examples", Rational(125, 10)*120, 1500)
same("layers.examples", 14*12, 168)
same("layers.examples", 168*Rational(11, 10), Rational(1848, 10))
check("layers.examples", round(168*Rational(11, 10)) == 185, "about 185")
same("layers.examples", Rational(3, 2)*22, 33)
same("layers.examples", 40*22, 880); same("layers.examples", 6*33, 198)
same("layers.examples", 880 + 198, 1078)
same("layers.examples", 12 // 4, 3); same("layers.examples", 3*3, 9)
same("layers.examples", 48*37, 1776)

# Intermediate goals: target values, reachable in the lab, and pinned to one factor pair
same("build.stepGoal[1]", 31*43, 1333); same("build.stepGoal[1]", boxes(31, 43), [1200, 90, 40, 3]); same("build.stepGoal[1]", sum(boxes(31, 43)), 1333)
same("build.stepGoal[1]", pairs(1333), [(31, 43), (43, 31)])
same("build.stepGoal[3]", 29*53, 1537); same("build.stepGoal[3]", boxes(29, 53), [1000, 60, 450, 27]); same("build.stepGoal[3]", sum(boxes(29, 53)), 1537)
same("build.stepGoal[3]", pairs(1537), [(29, 53), (53, 29)])
same("build.stepGoal[4]", 19*41, 779); same("build.stepGoal[4]", 20*40, 800)
same("build.stepGoal[4]", pairs(779), [(19, 41), (41, 19)])
# no chip on the page leaves the lab at a goal value
_chips = [(4, 6), (6, 4), (23, 14), (12, 10), (23, 47), (15, 42), (14, 12), (48, 37),
          (35, 12), (18, 25), (46, 28), (9, 7), (20, 40), (13, 11)]
check("build.stepGoal[1]", all(1 <= a <= 99 and 1 <= b <= 99 for a, b in _chips), "chips in range")
check("build.stepGoal[1]", not any(a*b in (1333, 1537, 779) for a, b in _chips), "no chip ticks a goal")
check("build.stepGoal[1]", 1081 not in (1333, 1537, 779), "goals differ from the walk")

# Intermediate tasks
same("build.tasks[0]", parts(23), [20, 3]); same("build.tasks[0]", (6*20, 6*3), (120, 18)); same("build.tasks[0]", 120 + 18, 138); same("build.tasks[0]", 6*23, 138)
same("build.tasks[1]", parts(38), [30, 8]); same("build.tasks[1]", (30*25, 8*25), (750, 200)); same("build.tasks[1]", 750 + 200, 950); same("build.tasks[1]", 38*25, 950)
same("build.tasks[1]", 4*25, 100)
same("build.tasks[2]", 3*4, 12); same("build.tasks[2]", 3*6, 18); same("build.tasks[2]", [4, 8, 12], [4*k for k in range(1, 4)])
same("build.tasks[3]", (13*10, 13*1), (130, 13)); same("build.tasks[3]", 130 + 13, 143); same("build.tasks[3]", 13*11, 143)
same("build.tasks[4]", 2*6, 12); same("build.tasks[4]", (9*10, 9*2), (90, 18)); same("build.tasks[4]", 90 + 18, 108); same("build.tasks[4]", 9*2*6, 108)
same("build.tasks", 23*47, 1081)

# Formal: setup and matters
same("layers.setup", 20*40 + 20*7 + 3*40 + 3*7, 1081)
same("layers.setup", (20 + 3)*(40 + 7), 23*47)
same("layers.formal matters", 40 + 3, 43); same("layers.formal matters", 40*3, 120)
same("layers.formal matters", 6 + 4, 10); same("layers.formal matters", 6*4, 24)
