# content: 0103e8136245
# content: 0
# percent-apps: Percent Change, Tax & Interest
R = Rational
def money(v):
    """Round an exact value to the cent, half up (as the page and the lab do)."""
    return floor(v * 100 + R(1, 2)) / R(100)

# example: $2,000 at 5% for 3 years (same situation as the walk and the setup)
P, r_ = 2000, R(5, 100)
same("example", P*r_*3, 300)
same("example", P*(1 + r_*3), 2300)
same("example", (1 + r_)**3, R(1157625, 1000000))
same("example", P*(1 + r_)**3, R(231525, 100))
same("example", P*(1 + r_)**3 - P*(1 + r_*3), R(1525, 100))

# practice
same("practice[0]", R(46 - 40, 40), R(15, 100))
same("practice[0]", 100*R(46 - 40, 40), 15)
same("practice[1]", 68*R(1075, 1000), R(7310, 100))
same("practice[2]", 1200*R(4, 100)*5, 240)
same("practice[2]", 1200 + 1200*R(4, 100)*5, 1440)
same("practice[3]", 1 + R(6, 100)/12, R(1005, 1000))
same("practice[3]", money(5000*(1 + R(6, 100)/12)**24), R(563580, 100))
solves("practice[4]", Eq(R(108, 100)*x, 27), x, {25})

# plain / why / mistakes numbers
same("plain", 80*R(70, 100), 56)
same("plain", 56*R(108, 100), R(6048, 100))
same("plain", R(1260 - 1200, 1200), R(5, 100))
same("why", R(80, 100)**2, R(64, 100))
same("why", 1 - R(80, 100)**2, R(36, 100))
check("why", R(107, 100)**30 > 7, "1.07^30 > 7")
same("mistakes", R(80, 100)*R(120, 100), R(96, 100))
same("mistakes", R(6, 40), R(15, 100))
check("mistakes", abs(float(R(6, 46)) - 0.13) < 0.005, "6/46 ~ 13%")
same("mistakes", 1 + R(6, 100)/12, R(1005, 1000))
same("mistakes", R(50, 1) / R(125, 100), 40)
same("mistakes", 50*R(75, 100), R(75, 2))
same("mistakes", 2000*R(115, 100), 2300)
same("mistakes", 2000*R(105, 100)**3, R(231525, 100))
same("mistakes", 100*((1 + r_)**3 - 1), R(157625, 10000))

# Concept walk: $2,000 at 5% a year for 3 years
y1 = 2000*r_; b1 = 2000 + y1
y2 = b1*r_;   b2 = b1 + y2
y3 = b2*r_;   b3 = b2 + y3
same("concept.walk lines", (y1, b1, y2, b2, y3, b3), (100, 2100, 105, 2205, R(11025, 100), R(231525, 100)))
same("concept.walk shortcut", (5*3, 2000*R(15, 100)), (15, 300))
same("concept.walk gap", b3 - 2000 - 300, R(1525, 100))
same("concept.walk fix", 2000*R(105, 100)**3, b3)
same("concept.walk predict[1]", 2000*R(5, 100), 100)
same("concept.walk predict[1] hint", (2000*R(1, 100), 5*2000*R(1, 100)), (20, 100))
same("concept.walk predict[2]", (b1*r_, 2000*r_, 2000*R(10, 100)), (105, 100, 200))
same("concept.walk predict[3]", 2205 + R(11025, 100), R(231525, 100))
same("concept.walk predict[5]", 1 + r_, R(105, 100))
same("concept.walk demo", (y1 + y2 + y3, [y1, y2, y3]), (R(31525, 100), [100, 105, R(11025, 100)]))
same("concept.walk answer", b3 - 2000, R(31525, 100))

# layers.concept: question figure (lab start P=1000, r=5%, t=10, monthly), idea cards, stakes
same("layers.concept start", money(1000*(1 + R(5, 100)/12)**120), R(164701, 100))
same("layers.concept start interest", money(1000*(1 + R(5, 100)/12)**120 - 1000), R(64701, 100))
same("layers.concept ideas", (100*(1 + r_), 1 - R(30, 100)), (105, R(70, 100)))
same("layers.concept ideas simple", (1000*r_, 3*1000*r_), (50, 150))
same("layers.concept ideas compound", (1000*R(10, 100), 1100*R(10, 100), 1210*R(10, 100)), (100, 110, 121))
same("layers.concept ideas compound total", 1000*R(11, 10)**3 - 1000, 331)
same("layers.concept ideas change", (1050 - 1000, R(50, 1000)), (50, R(5, 100)))
same("layers.concept stakes", 2000*(1 + r_)**3 - 2000*(1 + 3*r_), R(1525, 100))
same("layers.concept stakes", 1 - R(80, 100)**2, R(36, 100))
same("layers.concept stakes", R(21 - 20, 20), R(5, 100))
check("layers.concept stakes", abs(100*float(R(1, 21)) - 4.8) < 0.05, "1/21 ~ 4.8%")
same("layers.concept timeline", R(72, 5), R(144, 10))

# Where you will meet it
same("layers.examples", 10000*R(7, 100)*3, 2100)
same("layers.examples", 10000*R(107, 100)**3, R(1225043, 100))
same("layers.examples", 10000*R(107, 100)**3 - 10000, R(225043, 100))
same("layers.examples", round(10000*R(107, 100)**30), 76123)
same("layers.examples", 40*R(150, 100), 60)
same("layers.examples", 60*R(75, 100), 45)
same("layers.examples", 45 - 40, 5)
same("layers.examples", 250*R(65, 1000), R(1625, 100))
same("layers.examples", 250 + R(1625, 100), R(26625, 100))
same("layers.examples", money(10000/R(104, 100)**5), R(821927, 100))
same("layers.examples", round(10000/R(104, 100)**5), 8219)
same("layers.examples", R(260 - 250, 250), R(4, 100))

# Formal setup
same("layers.setup", 2000*R(105, 100), 2100)
same("layers.setup", 2100*R(105, 100), 2205)
same("layers.setup", 2205*R(105, 100), R(231525, 100))
same("layers.setup", R(231525, 100) / 2000 - 1, R(157625, 1000000))
same("layers.setup", 2000*R(105, 100)**3 - 2000*(1 + R(5, 100)*3), R(1525, 100))
# formal matters: percentage points
same("layers.formal matters", (R(5 - 4, 4), 4*R(101, 100)), (R(25, 100), R(404, 100)))

# Intermediate: step reasons, goals, tasks
same("build.stepWhy", (R(5, 100), R(6, 40), 2000*r_, 3*2000*r_), (R(5, 100), R(15, 100), 100, 300))

def lab_amount(P, r, t, n):
    a = P*(1 + R(r)/100/n)**(n*t)
    return money(a), money(a - P)
def in_lab(P, r, t):
    return 100 <= P <= 10000 and P % 100 == 0 and 0 <= r <= 15 and (R(r)*4).q == 1 and 0 <= t <= 40 and int(t) == t

same("build.stepGoal[1]", lab_amount(2500, 8, 1, 1)[0], 2700)
same("build.stepGoal[1]", 2500*R(108, 100), 2700)
check("build.stepGoal[1]", in_lab(2500, 8, 1), "P=2500, r=8, t=1 is on the lab's sliders")
same("build.stepGoal[3]", lab_amount(4000, 7, 1, 1)[1], 280)
same("build.stepGoal[3]", (4000*R(7, 100), R(280, 4000)), (280, R(7, 100)))
check("build.stepGoal[3]", in_lab(4000, 7, 1), "P=4000, r=7, t=1 is on the lab's sliders")
same("build.stepGoal[4]", lab_amount(3000, 4, 5, 1)[0], R(364996, 100))
check("build.stepGoal[4]", in_lab(3000, 4, 5), "P=3000, r=4, t=5 is on the lab's sliders")
# no chip on the page can leave a goal value in the lab (chip values only)
_hits = [(P, r, t, n) for P in (1000, 2000, 5000, 10000) for r in (5, 7, R(15, 2), 8, 10) for t in (1, 3, 10, 20, 30, 40) for n in (1, 4, 12, 365)
         if lab_amount(P, r, t, n)[0] in (2700, R(364996, 100)) or lab_amount(P, r, t, n)[1] == 280]
check("build.stepGoal[4]", _hits == [], f"chip settings reach a goal: {_hits}")

same("build.tasks[0]", (1 - R(30, 100), 80*R(70, 100), 80*R(30, 100), 80 - 24), (R(7, 10), 56, 24, 56))
same("build.tasks[0].lines", 100 - 30, 70)
same("build.tasks[1]", (1 + R(8, 100), 56*R(108, 100), 56*R(8, 100)), (R(108, 100), R(6048, 100), R(448, 100)))
same("build.tasks[1].demo", 56 + R(448, 100), R(6048, 100))
same("build.tasks[2]", (54600 - 52000, 100*R(2600, 52000)), (2600, 5))
check("build.tasks[2].link", abs(100*float(R(2600, 54600)) - 4.8) < 0.05, "2600/54600 ~ 4.8%")
same("build.tasks[3]", (1000*R(51, 1000), money(1000*(1 + R(5, 100)/12)**12)), (51, R(105116, 100)))
same("build.tasks[3]", money(1000*(1 + R(5, 100)/12)**12) - 1000, R(5116, 100))
check("build.tasks[3]", abs(100*float((1 + R(5, 100)/12)**12 - 1) - 5.12) < 0.005, "APY ~ 5.12%")
check("build.tasks[3]", R(5116, 100) > 51, "Bank A pays more")
same("build.tasks[3].try", lab_amount(1000, 5, 1, 12)[0], R(105116, 100))
same("build.tasks[4]", (R(24, 12), 1 + R(2, 100)), (2, R(102, 100)))
check("build.tasks[4]", abs(float(R(102, 100)**12) - 1.268242) < 5e-7, "1.02^12 ~ 1.268242")
same("build.tasks[4]", money(1000*R(102, 100)**12), R(126824, 100))
same("build.tasks[4].demo", money(1000*R(102, 100)**12) - 1000, R(26824, 100))
same("build.tasks[4].lines", money(1000*R(102, 100)**12) - 1000*(1 + R(24, 100)), R(2824, 100))
