# content: 6d792ad3cbb7
# exponents: Exponents & Powers

# formal
check("formal", 2**3 != 3**2, "2^3 vs 3^2")
same("formal", Integer(2)**(3**2), 512)

# example: 50 bacteria doubling every 30 min for 3 h
same("example", Rational(3 * 60, 30), 6)
same("example", 2**6, 64)
same("example", [2**k for k in range(1, 7)], [2, 4, 8, 16, 32, 64])
same("example", 50 * 2**3, 400)
same("example", 50 * 2**Rational(180, 30), 3200)
same("example", 50 * 2**3, 50 * 2**Rational(90, 30))   # 400 is the count after 1.5 h (3 doublings)

# plain / why
same("plain", 2**5, 32)
same("plain", [3**k for k in range(1, 4)], [3, 9, 27])
same("plain", 3**6, 729)
same("plain", Integer(2)**3 * Integer(2)**4, Integer(2)**7)
same("plain", Integer(2)**-3, Rational(1, 8))
check("why", abs(Rational(107, 100)**10 - Rational(197, 100)) < Rational(1, 100), "1.07^10 ~ 1.97")

# mistakes
same("mistakes", 2 * 2 * 2, 8)
same("mistakes", -3**2, -9)
same("mistakes", (-3)**2, 9)
same("mistakes", 2**3 * 2**4, 2**7)
same("mistakes", 2**7, 128)
same("mistakes", (3 + 4)**2, 49)
same("mistakes", 3**2 + 4**2, 25)
same("mistakes", Rational(180, 30), 6)
same("mistakes", 2**6, 64)

# practice[0]
same("practice[0]", 3**4, 81)
same("practice[0]", 3 * 3 * 3 * 3, 81)
# practice[1]
same("practice[1]", 2**5 * 2**3, 2**8)
same("practice[1]", 5 + 3, 8)
same("practice[1]", 2**5 * 2**3, 256)
# practice[2]
same("practice[2]", (-2)**4, 16)
same("practice[2]", -2**4, -16)
same("practice[2]", -(2**4), -16)
# practice[3]
same("practice[3]", (Integer(2)**3)**2, 2**6)
same("practice[3]", Integer(2)**6 * Integer(2)**-4, Integer(2)**2)
same("practice[3]", (Integer(2)**3)**2 * Integer(2)**-4, 4)
# practice[4]
same("practice[4]", Rational(18, 6), 3)
same("practice[4]", 640 * Rational(1, 2)**3, 80)
same("practice[4]", Rational(640, 8), 80)

# layers.examples (Concept tiles)
same("layers.examples", Rational(106, 100)**3, Rational(1191016, 1000000))
same("layers.examples", 5000 * Rational(106, 100)**3, Rational(595508, 100))
same("layers.examples", 5000 + 5000 * Rational(6, 100) * 3, 5900)
same("layers.examples", 5 * 2**4, 80)
same("layers.examples", 2**32, 4294967296)
check("layers.examples", round(2**32 / 10**8) == 43, "about 4.3 billion")
same("layers.examples", 2**64, (2**32)**2)
same("layers.examples", Rational(30, 10), 3)
same("layers.examples", 10**3, 1000)
same("layers.examples", Rational(1, 10)**6, Integer(10)**-6)
same("layers.examples", 45 * 10**6, 45000000)
same("layers.examples", Rational(24, 6), 4)
same("layers.examples", 800 * Rational(1, 2)**4, 50)

# layers.concept (question figure, idea cards, stakes, timeline)
same("layers.concept figure", 2**5, 32)                 # lab starts at b = 2, n = 5
same("layers.concept idea base", 3**2, 9)
same("layers.concept idea base", [3 * r for r in (1, 2, 3)], [3, 6, 9])
same("layers.concept idea exponent", 2 * 2 * 2 * 2, 16)
same("layers.concept idea exponent", 1 + 1 + 2 + 4 + 8, 2**4)
same("layers.concept idea exponent", [2**k for k in range(1, 5)], [2, 4, 8, 16])
same("layers.concept idea power", 10**6, 1000000)
check("layers.concept idea power", str(10**6).count("0") == 6, "six zeros after the 1")
same("layers.concept idea negative", Integer(2)**0, 1)
same("layers.concept idea negative", Integer(2)**-3, Rational(1, 8))
same("layers.concept stakes", 50 * 2**3, 400)
same("layers.concept stakes", 50 * 2**6, 3200)
same("layers.concept stakes", 2**3, 8)
same("layers.concept stakes", -3**2, -9)
same("layers.concept stakes", (-3)**2, 9)
check("layers.concept stakes", round(float(Rational(107, 100)**10 - 1) * 100) == 97, "7% for 10 years compounds to about 97% more")
same("layers.concept stakes", 7 * 10, 70)
check("layers.concept timeline", 10**4 == 10000, "a myriad is 10,000")

# Concept walk: 50 bacteria, doubling every 30 minutes, 3 hours
_jumps = [50, 100, 200, 400, 800, 1600]
_pos = [50]
for j in _jumps: _pos.append(_pos[-1] + j)
same("concept.walk demo", _pos, [50 * 2**k for k in range(0, 7)])
same("concept.walk demo end", _pos[-1], 3200)
same("concept.walk predict[1]", 50 * 2, 100)
same("concept.walk line 3", 50 * 2 * 2, 200)
same("concept.walk predict[3]", Rational(3 * 60, 30), 6)
same("concept.walk predict[4]", 2**6, 64)
same("concept.walk predict[4] wrong", (2 * 6, 6 * 6), (12, 36))
same("concept.walk predict[5] trap", 50 * 2**3, 400)
same("concept.walk predict[5] trap", 50 * 2**3, _pos[3])                     # frame 3: after 3 doublings
same("concept.walk predict[5] trap", Rational(3 * 30, 60), Rational(3, 2))  # = an hour and a half
same("concept.walk predict[6]", 50 * 64, 3200)
same("concept.walk predict[6] hint", Rational(100 * 64, 2), 3200)

# Intermediate: method text and goals
same("layers.build", (2 * 5)**3, 1000)
same("layers.build", 2**3 * 2**4, 2**7)
same("layers.build", Integer(2)**3 / Integer(2)**3, Integer(2)**0)
same("layers.build", Integer(2)**0 / Integer(2)**3, Rational(1, 8))
same("layers.build", -3**2, -9)
same("layers.build", (-3)**2, 9)
same("layers.build", 2**6, 64)
same("layers.build keyTry", (6**2, 3**6, 4**4), (36, 729, 256))
same("build.stepGoal[2]", Integer(2)**3 * Integer(2)**4, Integer(2)**(3 + 4))
same("build.stepGoal[2]", 2**7, 128)
check("build.stepGoal[2]", 0 <= 2 <= 10 and -3 <= 7 <= 8, "b = 2, n = 7 is inside the lab's sliders")
same("build.stepGoal[3]", Integer(2)**0 / Integer(2)**2, Integer(2)**(0 - 2))
same("build.stepGoal[3]", Integer(2)**-2, Rational(1, 4))
check("build.stepGoal[3]", 2.0**-2 == 0.25 and -3 <= -2 <= 8, "2^-2 is exactly 0.25 in floating point; n = -2 is in range")
same("build.stepGoal[4]", [3**k for k in range(1, 6)], [3, 9, 27, 81, 243])
same("build.stepGoal[4]", 3**5, 243)
check("build.stepGoal[4]", -3 <= 5 <= 8, "n = 5 is in range")
# goals differ from every chip end state, the walk and the lab's start (2^5 = 32)
_chips = [3**2, 2**4, 10**6, Rational(1, 8), 2**3, 10**3, 6**2, 3**6, 4**4, 2**8, 5**3, 2**5]
check("build.stepGoal[2]", 128 not in _chips and 128 not in _pos, "goal 128 is no chip's end state")
check("build.stepGoal[3]", Rational(1, 4) not in _chips, "goal 0.25 is no chip's end state")
check("build.stepGoal[4]", 243 not in _chips and 243 not in _pos, "goal 243 is no chip's end state")
check("build.stepGoal[4]", all(b**n != 243 for b in range(1, 11) for n in range(-3, 9) if (b, n) != (3, 5)), "only 3^5 makes 243 in the lab")
check("build.stepGoal[2]", all(b**n != 128 for b in range(0, 11) for n in range(0, 9) if (b, n) != (2, 7)), "only 2^7 makes 128 in the lab")

# Everyday tasks
same("build.tasks[0].check", 1000 * Rational(11, 10)**3, 1331)
same("build.tasks[0].lines", (1000 * Rational(11, 10), 1100 * Rational(11, 10), 1210 * Rational(11, 10)), (1100, 1210, 1331))
same("build.tasks[0].predict", 1100 + Rational(1100, 10), 1210)
same("build.tasks[0].demo", (1000 + 331, 1331 - 1000), (1331, 331))
same("build.tasks[1].check", log(256, 2), 8)
same("build.tasks[1].lines", [2**k for k in range(0, 9)], [1, 2, 4, 8, 16, 32, 64, 128, 256])
same("build.tasks[1].predict", 2**4, 16)
same("build.tasks[1].demo", 1 + sum([1, 2, 4, 8, 16, 32, 64, 128]), 256)
same("build.tasks[2].check", 10**3, 1000)
same("build.tasks[2].lines", (10 * 10, 100 * 10), (100, 1000))
same("build.tasks[2].predict", 10 * 10, 100)
same("build.tasks[2].demo", 10 * 10, 100)
same("build.tasks[3].check", 5**3, 125)
same("build.tasks[3].lines", (5, 5 * 5, 25 * 5), (5**1, 5**2, 5**3))
same("build.tasks[3].predict", 5 * 5, 25)
same("build.tasks[3].demo", 5 * 25, 125)

# Formal setup
same("layers.setup", Rational(180, 30), 6)
same("layers.setup", 2**3 * 2**3, 2**6)
same("layers.setup", 8 * 8, 64)
same("layers.setup", 50 * 64, 3200)
