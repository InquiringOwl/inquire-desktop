# content: 7483f406c89f
# units: Units & Dimensional Analysis (block lesson; one situation: a 22 lb child, 15 mg/kg, 160 mg per 5 mL)
R = Rational
LB = R(45359237, 100000000)          # 1 lb in kg, exact (1959)
IN = R(254, 100)                     # 1 in in cm, exact
MI = R(1609344, 1000)                # 1 mi in m, exact
FT = R(3048, 10000)                  # 1 ft in m, exact

def lab(value, factors, d):
    """The units lab: result = value, then * num / den per factor in floating point, then +toFixed(d)."""
    r = float(value)
    for num_, den_ in factors:
        r = r * num_ / den_
    return round(r, d)

LAB = {0: ([(1609.344, 1), (1, 3600)], 2), 1: ([(1000, 1), (1, 3600)], 2), 2: ([(0.45359237, 1), (15, 1)], 1),
       3: ([(3.785411784, 1), (60, 1)], 2), 4: ([(2.54, 1)], 2), 5: ([(365.25, 1), (24, 1), (60, 1), (60, 1)], 0)}
DEFAULT = {0: 65, 1: 90, 2: 44, 3: 3, 4: 70, 5: 1}

same("formal", FT**2, R(9290304, 100000000))

# example (and the Concept walk): 22 lb child, 15 mg per kg, 160 mg per 5 mL, 1 kg = 2.2 lb
kg = 22 / R(22, 10)
same("example", kg, 10)
mg = kg * 15
same("example", mg, 150)
ml = mg * R(5, 160)
same("example", mg*5, 750)
same("example", ml, R(750, 160))
same("example", ml, R(46875, 10000))
check("example", abs(N(ml) - R(47, 10)) < R(5, 100), "≈ 4.7 mL")
same("example", 22 / R(22, 10) * 15 * R(5, 160), R(46875, 10000))

# concept.walk: lines, predicts, demo
W = page['layers']['concept']['walk']
same("concept.walk predict[2]", 22 / R(22, 10), W['predict'][2]['parts'][0]['ans'])
same("concept.walk predict[3]", 10 * 15, W['predict'][3]['parts'][0]['ans'])
same("concept.walk predict[5]", R(round(float(150 * R(5, 160)) * 10), 10), R(str(W['predict'][5]['parts'][0]['ans'])))
same("concept.walk line 3 exact kg", round(float(22 * LB), 2), 9.98)
same("concept.walk trap", 22 * 15, 330)
same("concept.walk trap ratio", R(330, 150), R(22, 10))
same("concept.walk line 6", 150 * 5, 750)
same("concept.walk line 6", R(750, 160), R(46875, 10000))
same("concept.walk demo", sum(W['demo']['jumps']), 150)
same("concept.walk demo", (len(W['demo']['jumps']), W['demo']['jumps'][0]), (10, 15))
check("concept.walk demo frames", max(l['frame'] for l in W['lines']) == len(W['demo']['jumps']) + 1, "the last frame (11) is the end value")
check("concept.walk orientation", True, "1 kg / 2.2 lb cancels lb; 2.2 lb / 1 kg would leave lb²/kg")

# layers.concept: ideas, question figure, stakes
same("layers.concept idea A", R(12, 12), 1)
same("layers.concept idea B", 3 * 12, 36)
same("layers.concept idea C", 3 * 1000, 3000)
same("layers.concept idea C", lab(65, *LAB[0]), 29.06)
check("layers.concept idea C", round(float(65 * MI / 3600)) == 29, "65 mi/h is about 29 m/s")
same("layers.concept figure", DEFAULT[0], int(page['layers']['concept']['question']['figure']['value']))
same("layers.concept stakes", (22 * 15, R(22 * 15, 150)), (330, R(22, 10)))
same("layers.concept stakes", 3 * 3, 9)
same("layers.concept stakes try", lab(22, *LAB[2]), 149.7)
same("layers.concept history", R(9144, 10000) / 36, IN / 100)
check("layers.concept history", abs(float(LB * R(980665, 100000)) - 4.45) < 0.005, "1 lbf·s ≈ 4.45 N·s")
same("layers.history", R(9144, 10000) / 36, R(254, 10000))

# layers.examples
same("layers.examples", R(1000, 8), 125)
same("layers.examples", 36 * R(1, 18), 2)
check("layers.examples", abs(2*6.022e23 - 1.2e24) / 1.2e24 < 0.01, "≈ 1.2 × 10^24 molecules")
check("layers.examples", abs(float(FT * LB * R(980665, 100000)) - 1.356) < 0.0005, "1 ft·lbf ≈ 1.356 N·m")
check("layers.examples", abs(25*1.356 - 33.9) < 0.005, "25 × 1.356 ≈ 33.9")
gal_per_ft3 = R(12**3, 231)
check("layers.examples", abs(N(gal_per_ft3) - 7.48) < 0.005, "1 ft³ ≈ 7.48 gal")
same("layers.examples", R(748, 100)*10*60, 4488)
check("layers.examples", abs(N(10*60*gal_per_ft3) - 4488) < 1, "true value ≈ 4,488")
check("layers.examples", abs(float(8*R(295735295625, 10**10)) - 236.6) < 0.05, "US cup ≈ 236.6 mL")
check("layers.examples", abs(500/236.6 - 2.11) < 0.005, "≈ 2.11 cups")
same("layers.examples", 120*R(1852, 1000), R(22224, 100))
check("layers.examples", round(float(120*R(1852, 1000))) == 222, "about 222 km/h")

# Intermediate goals (build.stepGoal): the target, reachable in the lab, and left by no chip on the page
T = page['layers']['build']
chip_ends = {lab(DEFAULT[0], *LAB[0]), lab(DEFAULT[1], *LAB[1]), lab(22, *LAB[2]), lab(DEFAULT[2], *LAB[2])}
same("build.stepGoal[3]", 72 * R(1000, 3600), 20)
same("build.stepGoal[3] lab", lab(72, *LAB[1]), T['stepGoal'][3]['eq'])
same("build.stepGoal[4]", round(float(33 * LB), 2), 14.97)
same("build.stepGoal[4] lab", lab(33, *LAB[2]), T['stepGoal'][4]['eq'])
same("build.stepGoal[5]", 72 * IN, R(18288, 100))
same("build.stepGoal[5] lab", lab(72, *LAB[4]), T['stepGoal'][5]['eq'])
check("build.stepGoal[5] trap", round(float(72 / IN)) == 28, "72 ÷ 2.54 ≈ 28")
check("build.stepGoal[3] chips", not ({20, 224.5, 182.88} & chip_ends), f"no chip leaves a goal value (chip ends {sorted(chip_ends)})")
check("build.stepGoal[3] range", all(0 <= v <= 1000000 for v in (72, 33)), "values fit the value box 0 to 1,000,000")
check("build.stepGoal[4] walk", 224.5 not in (150, 149.7, 330), "the goal differs from the walk's numbers")

# build.tasks
same("build.tasks[0].check", 90 * R(1000, 3600), T['tasks'][0]['check']['parts'][0]['ans'])
same("build.tasks[0].lines", (90 * 1000, R(90000, 3600), 25 * 2), (90000, 25, 50))
same("build.tasks[0].predict", 90 * 1000, T['tasks'][0]['predict'][1]['parts'][0]['ans'])
same("build.tasks[0].demo", sum(T['tasks'][0]['demo']['jumps']), 4 * 25)
same("build.tasks[0].try", lab(DEFAULT[1], *LAB[1]), 25)
same("build.tasks[1].check", R(12 * 9, 9), T['tasks'][1]['check']['parts'][0]['ans'])
same("build.tasks[1].lines", (12 * 9, 3 * 3, R(108, 9), R(108, 3)), (108, 9, 12, 36))
same("build.tasks[1].predict", 3 * 3, T['tasks'][1]['predict'][1]['parts'][0]['ans'])
same("build.tasks[1].demo", T['tasks'][1]['demo']['rows'] * T['tasks'][1]['demo']['cols'], 9)
same("build.tasks[2].check", (16 * 15, 240 * R(5, 160)), (240, R(15, 2)))
same("build.tasks[2].check", R(15, 2), R(str(T['tasks'][2]['check']['parts'][0]['ans'])))
same("build.tasks[2].lines", (240 * 5, R(1200, 160)), (1200, R(75, 10)))
same("build.tasks[2].predict", 240 * 5, T['tasks'][2]['predict'][1]['parts'][0]['ans'])
same("build.tasks[2].demo", (160 + 80, R(80, 160) * 5), (240, R(25, 10)))
same("build.tasks[3].check", 2 * 3, T['tasks'][3]['check']['parts'][0]['ans'])
same("build.tasks[3].lines", 2 * 3, 6)
same("build.tasks[3].demo", T['tasks'][3]['demo']['rows'] * T['tasks'][3]['demo']['cols'], 6)

# practice
P = page['layers']['formal']['checks']
same("practice[0]", R(35, 10)*12, P[0]['parts'][0]['ans'])
same("practice[1]", R(25, 10)*1000, P[1]['parts'][0]['ans'])
same("practice[2]", 45*1000, 45000)
same("practice[2]", R(45*1000, 3600), R(str(P[2]['parts'][0]['ans'])))
same("practice[3]", FT**2, R(9290304, 100000000))
same("practice[3]", R(round(float(150*FT**2) * 10), 10), R(str(P[3]['parts'][0]['ans'])))
v_mph = 100 / R(1609344, 1000000)
same("practice[4]", R(round(float(v_mph) * 10), 10), R(str(P[4]['parts'][0]['ans'])))

# plain / why / mistakes / formal matters
same("plain", R(60*5280, 3600), 88)
same("mistakes", 22*15, 330)
same("mistakes", R(330, 150), R(22, 10))
same("mistakes", 3**2, 9)
same("mistakes", (2*12, 2*12 + 6), (24, 30))
same("why", R(22*15, 22 / R(22, 10) * 15), R(22, 10))
same("layers.formal matters", R(1, 1000) / R(1, 1000000), 1000)

# layers.setup
same("layers.setup", 22*15*5, 1650)
same("layers.setup", R(22, 10)*160, 352)
same("layers.setup", R(1650, 352), R(46875, 10000))
check("layers.setup", abs(N(R(1650, 352)) - R(47, 10)) < R(5, 100), "≈ 4.7 mL")
