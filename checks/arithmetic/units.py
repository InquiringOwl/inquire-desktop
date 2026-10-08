# content: 01d1ca934005
# units: Units & Dimensional Analysis
R = Rational
same("formal", R(3048, 10000)**2, R(9290304, 100000000))

# example
kg = 22 / R(22, 10)
same("example", kg, 10)
mg = kg * 15
same("example", mg, 150)
ml = mg * R(5, 160)
same("example", mg*5, 750)
same("example", ml, R(750, 160))
same("example", ml, R(46875, 10000))
check("example", abs(N(ml) - 4.7) < 0.05, "≈ 4.7 mL")
same("example", 22 / R(22, 10) * 15 * R(5, 160), R(46875, 10000))
# practice
same("practice[0]", R(35, 10)*12, 42)
same("practice[1]", R(25, 10)*1000, 2500)
same("practice[2]", 45*1000, 45000)
same("practice[2]", R(45*1000, 3600), R(125, 10))
same("practice[3]", R(3048, 10000)**2, R(9290304, 100000000))
check("practice[3]", abs(N(150*R(3048, 10000)**2) - 13.9) < 0.05, "≈ 13.9 m²")

# practice[4]: 100 km/h in mi/h
v_mph = 100 / R(1609344, 1000000)
check("practice[4]", abs(N(v_mph) - 62.1) < 0.05, "≈ 62.1 mi/h")
check("tasks", abs(N(v_mph) - 62) < 0.5, "about 62 mi/h")

# plain / why / mistakes
same("plain", R(60*5280, 3600), 88)
same("mistakes", 22*15, 330)
same("mistakes", R(330, 150), R(22, 10))
same("why", R(22*15, 22 / R(22, 10) * 15), R(22, 10))

# layers (concept examples, history, formal setup)
same("layers.examples", R(1000, 8), 125)
same("layers.examples", 36 * R(1, 18), 2)
check("layers.examples", abs(2*6.022e23 - 1.2e24) / 1.2e24 < 0.01, "≈ 1.2 × 10^24 molecules")
check("layers.examples", abs(float(R(3048, 10000) * R(45359237, 100000000) * R(980665, 100000)) - 1.356) < 0.0005, "1 ft·lbf ≈ 1.356 N·m")
check("layers.examples", abs(25*1.356 - 33.9) < 0.005, "25 × 1.356 ≈ 33.9")
gal_per_ft3 = R(12**3, 231)
check("layers.examples", abs(N(gal_per_ft3) - 7.48) < 0.005, "1 ft³ ≈ 7.48 gal")
same("layers.examples", R(748, 100)*10*60, 4488)
check("layers.examples", abs(N(10*60*gal_per_ft3) - 4488) < 1, "true value ≈ 4,488")
check("layers.examples", abs(float(R(236588, 1000)) - 236.6) < 0.05 and abs(float(8*R(295735295625, 10**10)) - 236.6) < 0.05, "US cup ≈ 236.6 mL")
check("layers.examples", abs(500/236.6 - 2.11) < 0.005, "≈ 2.11 cups")
same("layers.examples", 120*R(1852, 1000), R(22224, 100))
same("layers.history", R(9144, 10000)/36, R(254, 10000))
check("layers.history", abs(float(R(45359237, 100000000) * R(980665, 100000)) - 4.45) < 0.005, "1 lbf·s ≈ 4.45 N·s")
same("layers.setup", 22*15*5, 1650)
same("layers.setup", R(22, 10)*160, 352)
same("layers.setup", R(1650, 352), R(46875, 10000))
check("layers.setup", abs(N(R(1650, 352)) - 4.7) < 0.05, "≈ 4.7 mL")
