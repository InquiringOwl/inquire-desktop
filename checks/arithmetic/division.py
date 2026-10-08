# content: 883fb26012cc
# division: Division

# example: 347 eggs, cartons of 12
same("example", divmod(34, 12), (2, 10))
same("example", 2 * 12, 24)
same("example", 10 * 10 + 7, 107)
same("example", divmod(107, 12), (8, 11))
same("example", 8 * 12, 96)
same("example", 9 * 12, 108)
same("example", divmod(347, 12), (28, 11))
same("example", 12 * 28 + 11, 347)
same("example", 12 * 28, 336)

# practice[0]
same("practice[0]", Rational(56, 7), 8)
# practice[1]
same("practice[1]", divmod(97, 4), (24, 1))
same("practice[1]", 4 * 24, 96)
# practice[2]
same("practice[2]", divmod(100, 12), (8, 4))
same("practice[2]", Rational(1008, 12), 84)
same("practice[2]", 12 * 84, 1008)
# practice[3]: vans needed = ceil(500/12)
same("practice[3]", divmod(500, 12), (41, 8))
same("practice[3]", ceiling(Rational(500, 12)), 42)

# plain / why (rewritten)
same("plain", Rational(96, 4), 24); same("plain", 4*24, 96)
same("plain", divmod(50, 12), (4, 2)); same("plain", 12*4 + 2, 50)
same("why", ceiling(Rational(500, 12)), 42); same("why", 500 - 12*41, 8)

# practice[4]: 12n = 156
same("practice[4]", divmod(15, 12), (1, 3)); same("practice[4]", 3*10 + 6, 36)
same("practice[4]", Rational(156, 12), 13); same("practice[4]", 12*13, 156)
same("practice[4]", solve(Eq(12*a, 156), a), [13])

# mistakes (added): remainder as a fraction of the divisor
check("mistakes", abs(Rational(11, 12) - Rational(92, 100)) < Rational(1, 200), "11/12 is about 0.92")
check("mistakes", abs(Rational(347, 12) - Rational(2892, 100)) < Rational(1, 200), "347/12 is about 28.92")

# layers (concept examples, formal setup)
same("layers.examples", Rational(250, 125), 2); same("layers.examples", 2*5, 10)
same("layers.examples", divmod(150, 8), (18, 6)); same("layers.examples", 8*18 + 6, 150); same("layers.examples", ceiling(Rational(150, 8)), 19)
same("layers.examples", Rational(1860, 300), Rational(62, 10))
same("layers.examples", Rational(480, 100)/24, Rational(20, 100)); same("layers.examples", Rational(576, 100)/32, Rational(18, 100))
same("layers.examples", divmod(1037, 25), (41, 12)); same("layers.examples", 25*41 + 12, 1037); same("layers.examples", ceiling(Rational(1037, 25)), 42)
same("layers.examples", Rational(180, 3), 60)
same("layers.setup", 347 - 12*20, 107); same("layers.setup", divmod(107, 12), (8, 11)); same("layers.setup", 12*28 + 11, 347)
check("layers.setup", 0 <= 11 < 12, "remainder condition")
same("layers.build", 2*12*10, 240); same("layers.build", 10*10 + 7, 107); same("layers.build", Rational(1008, 12), 84)
