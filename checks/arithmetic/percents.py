# content: a89880eabcfe
# percents: Percents
pct = lambda p, B: Rational(p, 100) * B          # p% of B

# formal statement
same("formal", Rational(250, 100), 2.5)
same("formal", Rational(4, 10)/100, 0.004)

# example = the park vote: 30 of 40 neighbors, town of 2,000
rate = Rational(30, 40)
same("example", rate, 0.75)
same("example", rate*100, 75)
same("example", rate*2000, 1500)
same("example", rate*40, 30)

# practice
same("practice[0]", pct(20, 45), 9)
same("practice[1]", Rational(3, 8), 0.375)
same("practice[1]", Rational(3, 8)*100, 37.5)
same("practice[2]", Rational(18, 72), 0.25)
same("practice[2]", Rational(18, 72)*100, 25)
same("practice[3]", solve(Eq(Rational(12, 100)*x, 30), x)[0], 250)
same("practice[3]", pct(12, 250), 30)
same("practice[4]", solve(Eq(Rational(70, 100)*x, 63), x)[0], 90)
same("practice[4]", Rational(63, 1) / Rational(70, 100), 90)

# plain / why / mistakes: numbers stated on the page
same("plain", pct(8, 250), 20)
same("plain", Rational(42, 48)*100, 87.5)
same("plain", Rational(70, 80)*100, 87.5)
same("why", 100 + pct(50, 100), 150)
same("why", 150 - pct(50, 150), 75)
same("mistakes", Rational(72, 18), 4)
same("mistakes", Rational(18, 72)*100, 25)
same("mistakes", Rational(30, 40)*100, 75)
same("mistakes", Rational(5, 100), 0.05)
same("mistakes", Rational(1, 2)*100, 50)
same("mistakes", Rational(100, 40)*100, 250)
same("mistakes", 5 - 4, 1)
same("mistakes", Rational(5 - 4, 4), 0.25)

# concept.walk: 40 neighbors, 30 yes, town of 2,000
same("concept.walk groups of 10", Rational(40, 10), 4)
same("concept.walk predict[1]", Rational(30, 10), 3)
same("concept.walk 3/4", Rational(30, 40), Rational(3, 4))
same("concept.walk predict[2]", Rational(3, 4)*100, 75)
same("concept.walk quarter", Rational(100, 4), 25)
check("concept.walk trap", Rational(30, 40)*100 != 30, "30 of 40 is not 30%")
same("concept.walk hundreds", Rational(2000, 100), 20)
same("concept.walk predict[5]", 20*75, 1500)
same("concept.walk predict[5]", pct(75, 2000), 1500)
same("concept.walk demo", (Rational(3, 4), 3, 4), (Rational(30, 40), 3, 4))

# layers.concept: question figure, ideas, stakes
same("layers.concept", 35 + 65, 100)
same("layers.concept", pct(35, 100), 35)
same("layers.concept", pct(25, 80), 20)
same("layers.concept", 80 - 20, 60)
same("layers.concept", 100 - 25, 75)
same("layers.concept", 10*10, 100)
same("layers.concept", pct(100, 80), 80)
same("layers.concept", pct(35, 80), 28)                      # lab start: 35% of 80
same("layers.concept", pct(5, 40), 2)
same("layers.concept", Rational(5, 10)*40, 20)               # the 0.5 slip
same("layers.concept", 100 + pct(50, 100), 150)
same("layers.concept", 150 - pct(50, 150), 75)
same("layers.concept", Rational(5 - 4, 4)*100, 25)
same("layers.concept", 1435 - 1425, 10)
check("layers.concept", 2026 - 6 >= 2000, "about 2,000 years since 6 CE")

# layers.examples (tiles)
same("layers.examples", Rational(25, 1000)*340000, 8500)
same("layers.examples", 20*9, 180)
same("layers.examples", Rational(180, 600), 0.30)
same("layers.examples", pct(30, 600), 180)
same("layers.examples", Rational(540, 1200), 0.45)
same("layers.examples", pct(45, 1200), 540)
same("layers.examples", Rational(34, 40), 0.85)
same("layers.examples", pct(85, 40), 34)
same("layers.examples", Rational(35, 2500), 0.014)
check("layers.examples", Rational(35, 2500) < Rational(2, 100), "1.4% is inside a 2% target")
same("layers.examples", pct(10, 64), 6.4)
same("layers.examples", 2*pct(10, 64), 12.8)
same("layers.examples", pct(20, 64), 12.8)

# layers.steps (stepWhy numbers)
same("layers.steps", pct(20, 45), 9)
same("layers.steps", Rational(45, 5), 9)
same("layers.steps", Rational(75, 100), 0.75)
same("layers.steps", Rational(30, 40), 0.75)
same("layers.steps", 30 / Rational(12, 100), 250)

# Intermediate goals (key, eq) and that the lab (p 0..100 integer, whole 1..1,000,000) reaches them
same("build.stepGoal[2]", pct(45, 140), 63)
check("build.stepGoal[2]", 0 <= 45 <= 100 and 1 <= 140 <= 1000000, "45% of 140 reachable")
same("build.stepGoal[3]", Rational(12, 80)*100, 15)
same("build.stepGoal[3]", pct(15, 80), 12)
check("build.stepGoal[3]", 0 <= 15 <= 100, "p = 15 reachable")
same("build.stepGoal[4]", 18 / Rational(12, 100), 150)
same("build.stepGoal[4]", pct(12, 150), 18)
check("build.stepGoal[4]", 1 <= 150 <= 1000000, "whole = 150 reachable")
# goals must differ from every chip's end state (p, whole) on Concept + Intermediate, the lab start and the walk
_chips = [(35, 100), (25, 80), (100, 80), (5, 40), (30, 600), (45, 1200), (85, 40), (20, 64),
          (10, 80), (50, 80), (35, 500), (35, 200), (5, 80), (10, 640),
          (20, 65), (90, 30), (8, 250), (30, 2300), (80, 60), (35, 80), (75, 40), (75, 2000)]
check("build.stepGoal[2]", all(pct(p, B) != 63 for p, B in _chips), "no chip leaves part = 63")
check("build.stepGoal[3]", all(p != 15 for p, B in _chips), "no chip leaves p = 15")
check("build.stepGoal[4]", all(B != 150 for p, B in _chips), "no chip leaves whole = 150")

# Everyday tasks
same("build.tasks[0].check", pct(20, 65), 13)
same("build.tasks[0].lines", (pct(10, 65), 2*pct(10, 65)), (6.5, 13))
same("build.tasks[0].predict", Rational(65, 10), 6.5)
same("build.tasks[0].demo", (65 - pct(20, 65), pct(80, 65)), (52, 52))
same("build.tasks[1].check", Rational(27, 30)*100, 90)
same("build.tasks[1].lines", Rational(27, 30), 0.9)
same("build.tasks[1].demo", 27 + 3, 30)
same("build.tasks[1].try", pct(90, 30), 27)
same("build.tasks[2].check", (pct(8, 250), 250 + pct(8, 250)), (20, 270))
same("build.tasks[2].lines", Rational(8, 100), 0.08)
same("build.tasks[2].demo", 250 + 20, 270)
same("build.tasks[3].check", Rational(690, 2300)*100, 30)
same("build.tasks[3].lines", Rational(690, 2300), 0.3)
same("build.tasks[3].demo", 2300 - 690, 1610)
same("build.tasks[3].try", pct(30, 2300), 690)
same("build.tasks[4].check", solve(Eq(Rational(80, 100)*x, 48), x)[0], 60)
same("build.tasks[4].lines", (100 - 20, pct(80, 60)), (80, 48))
same("build.tasks[4].predict", Rational(48, 4)*5, 60)
same("build.tasks[4].demo", 60 - 48, 12)
same("build.tasks[4].link", 48 + pct(20, 48), 57.6)

# Formal: vocab, matters, setup (the park vote)
same("layers.formal", Rational(75, 100), 0.75)
same("layers.formal", Rational(5, 100), 0.05)
same("layers.formal", Rational(375, 1000)*100, 37.5)
same("layers.formal", 4 + 1, 5)
same("layers.formal", 4 + pct(1, 4), 4.04)
same("layers.formal", Rational(5 - 4, 4)*100, 25)
same("layers.setup", solve(Eq(30, x/100*40), x)[0], 75)
same("layers.setup", 100*Rational(30, 40), 75)
same("layers.setup", Rational(75, 100)*2000, 1500)
same("layers.setup", Rational(75, 100)*40, 30)
