# content: 10b7692e7c95
# ratios: Ratios & Rates
R = Rational
# formal: scaling
check("formal", R(2, 5) == R(2*3, 5*3), "scaling preserves ratio")

# example: 2:5, 21 cups
same("example", 2 + 5, 7)
k_ = R(21, 2 + 5)
same("example", k_, 3)
same("example", 2*k_, 6)
same("example", 5*k_, 15)
check("example", R(6, 15) == R(2, 5) and 6 + 15 == 21, "6:15 = 2:5, total 21")

# practice[0]
same("practice[0]", gcd(18, 24), 6)
same("practice[0]", R(18, 24), R(3, 4))
check("practice[0]", gcd(3, 4) == 1, "simplest form")
# practice[1]
same("practice[1]", 12 + 15, 27)
same("practice[1]", R(12, 27), R(4, 9))
check("practice[1]", gcd(4, 9) == 1, "simplest form")
# practice[2]
same("practice[2]", R(222, 6), 37)
# practice[3]
p1, p2 = R(348, 100)/12, R(540, 100)/20
same("practice[3]", p1, R(29, 100))
same("practice[3]", p2, R(27, 100))
check("practice[3]", p2 < p1, "20 oz box cheaper per ounce")
# practice[4]: 45 pages in 3 min, 240 pages in m min
m_ = symbols("m_")
same("practice[4]", 3*240, 720)
same("practice[4]", solve(Eq(45*m_, 3*240), m_), [16])
check("practice[4]", R(45, 3) == R(240, 16), "45:3 = 240:16")

# mistakes
check("mistakes", abs(40*1.609344 - 64) < 0.5 and 40*1.609344 > 60, "40 mi/h ≈ 64 km/h > 60 km/h")
same("mistakes", R(12, 15), R(4, 5))
same("mistakes", (2 + 7, 5 + 7), (9, 12))
same("mistakes", R(9, 12), R(3, 4))
check("mistakes", R(9, 12) != R(2, 5), "9:12 is a different mix from 2:5")
same("mistakes", R(2, 2 + 5), R(2, 7))

# Concept walk: 2:5 lemonade, 21 cups (array 3 x 7)
_batch = 2 + 5
same("concept.walk batch", _batch, 7)
same("concept.walk predict[1]", R(21, _batch), 3)
same("concept.walk demo", [(r + 1)*_batch for r in range(3)], [7, 14, 21])
same("concept.walk demo", 3*7, 21)
same("concept.walk predict[2]", (3*2, 3*5), (6, 15))
same("concept.walk trap", (2 + 7, 5 + 7, 9 + 12), (9, 12, 21))
same("concept.walk trap", 21 - _batch, 14)
same("concept.walk trap", R(9, 12), R(3, 4))
check("concept.walk trap", R(9, 12) != R(2, 5) and R(9, 21) > R(6, 21), "9:12 is stronger than 2:5")
same("concept.walk check", (R(6, 3), R(15, 3)), (2, 5))
same("concept.walk check", 6 + 15, 21)
same("concept.walk choices", 15 - 6, 9)
same("concept.walk choices", 5 - 2, 3)

# layers.concept: ideas, stakes, timeline
same("layers.concept", (2*2, 5*2, 2*3, 5*3), (4, 10, 6, 15))
same("layers.concept", [(r + 1)*7 for r in range(4)], [7, 14, 21, 28])
same("layers.concept", R(222, 6), 37)
same("layers.concept", 6*37, 222)
same("layers.concept", R(9, 12), R(3, 4))
same("layers.concept", R(12, 4), 3)
same("layers.concept", 6*R(12, 4), 18)
check("layers.concept", 355 < 408, "Eudoxus 408 to 355 BCE")

# layers.examples (concept tiles)
same("layers.examples", 1 + 4, 5)
same("layers.examples", R(250, 5), 50)
same("layers.examples", 4*50, 200)
same("layers.examples", R(10, 4), R(25, 10))
same("layers.examples", 6*R(25, 10), 15)
same("layers.examples", 5*24000, 120000)
same("layers.examples", R(120000, 100*1000), R(12, 10))
same("layers.examples", R(252, 144), R(175, 100))
same("layers.examples", R(340, 200), R(170, 100))
same("layers.examples", R(175, 100) - R(170, 100), R(5, 100))
same("layers.examples", 1 + 2 + 3, 6)
same("layers.examples", R(3, 6), R(1, 2))
check("layers.examples", (1*R(1, 2), 2*R(1, 2), 3*R(1, 2)) == (R(1, 2), 1, R(3, 2)), "0.5 / 1 / 1.5 cu yd")
same("layers.examples", R(54, 45)*9, R(108, 10))

# layers.setup (formal write-up)
kk = symbols("kk")
same("layers.setup", solve(Eq(2*kk + 5*kk, 21), kk), [3])
same("layers.setup", (2*3, 5*3), (6, 15))
check("layers.setup", 6*5 == 15*2 == 30 and 6 + 15 == 21, "cross products 30, total 21")

# layers.formal: matters (part-to-part vs part-to-whole)
same("layers.formal", 21*R(2, 7), 6)
same("layers.formal", 21*R(2, 5), R(84, 10))

# Intermediate goals: lab sliders a, b in 1..8, k in 1..6; first = a*k, second = b*k, total = (a+b)*k
_lab = [(a, b, k) for a in range(1, 9) for b in range(1, 9) for k in range(1, 7)]
same("build.stepGoal[1]", gcd(35, 20), 5)
same("build.stepGoal[1]", (R(35, 5), R(20, 5)), (7, 4))
same("build.stepGoal[1]", sorted({(a, k) for a, b, k in _lab if a*k == 35}), [(7, 5)])
same("build.stepGoal[1]", (7*5, 4*5), (35, 20))
same("build.stepGoal[2]", (8*6, 3*6), (48, 18))
same("build.stepGoal[2]", sorted({(a, k) for a, b, k in _lab if a*k == 48}), [(8, 6)])
same("build.stepGoal[3]", 3 + 4, 7)
same("build.stepGoal[3]", R(35, 7), 5)
same("build.stepGoal[3]", (3*5, 4*5), (15, 20))
same("build.stepGoal[3]", sorted({(a + b, k) for a, b, k in _lab if (a + b)*k == 35}), [(7, 5)])
# no chip on the page leaves a goal value in the lab (chips set a, b, k)
_chips = [(2, 5, 1), (2, 5, 4), (6, 2, 1), (3, 4, 3), (6, 5, 1), (2, 7, 1), (2, 5, 6), (1, 2, 4), (5, 2, 1), (8, 2, 1), (1, 3, 4), (2, 3, 3), (3, 2, 4)]
check("build.stepGoal[1]", all(a*k != 35 for a, b, k in _chips), "no chip shows first = 35")
check("build.stepGoal[2]", all(a*k != 48 for a, b, k in _chips), "no chip shows first = 48")
check("build.stepGoal[3]", all((a + b)*k != 35 for a, b, k in _chips), "no chip shows total = 35")

# Everyday tasks
same("build.tasks[0].check", (R(400, 16), R(644, 28)), (25, 23))
same("build.tasks[0].lines", 25 - 23, 2)
same("build.tasks[0].predict", 28*20, 560)
same("build.tasks[1].check", (1*R(16, 1 + 3), 3*R(16, 1 + 3)), (4, 12))
same("build.tasks[1].lines", (1 + 3, R(16, 4)), (4, 4))
same("build.tasks[1].demo", 4 + 12, 16)
same("build.tasks[2].check", (R(300, 10), R(252, 7)), (30, 36))
same("build.tasks[2].lines", 36 - 30, 6)
same("build.tasks[2].predict", 7*30, 210)
same("build.tasks[3].check", (R(12, 4)*2, R(12, 4)*3), (6, 9))
same("build.tasks[3].lines", R(12, 4), 3)
same("build.tasks[3].link", (12 - 4, 2 + 8, 3 + 8), (8, 10, 11))
same("build.tasks[3].demo", [3*(r + 1) for r in range(3)], [3, 6, 9])
same("build.tasks[4].check", (6*R(50000, 100), 6*R(50000, 100*1000)), (3000, 3))
same("build.tasks[4].lines", R(50000, 100), 500)
same("build.tasks[4].demo", 6*500, 3000)
