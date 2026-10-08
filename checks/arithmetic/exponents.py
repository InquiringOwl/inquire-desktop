# content: 91a0cc62ec07
# exponents: Exponents & Powers

# formal
check("formal", 2**3 != 3**2, "2^3 vs 3^2")
same("formal", Integer(2)**(3**2), 512)

# example: 50 bacteria doubling every 20 min for 3 h
same("example", Rational(3 * 60, 20), 9)
same("example", 2**9, 512)
same("example", [2**k for k in range(1, 10)], [2, 4, 8, 16, 32, 64, 128, 256, 512])
same("example", 50 * 2**Rational(180, 20), 25600)

# plain / why
same("plain", 2**5, 32)
same("plain", [3**k for k in range(1, 4)], [3, 9, 27])
same("plain", 3**6, 729)
same("plain", Integer(2)**3 * Integer(2)**4, Integer(2)**7)
same("plain", Integer(2)**-3, Rational(1, 8))
check("why", abs(Rational(107, 100)**10 - Rational(197, 100)) < Rational(1, 100), "1.07^10 ~ 1.97")

# mistakes (added)
same("mistakes", Rational(180, 20), 9)
same("mistakes", 2**9, 512)

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

# layers (concept examples, formal setup, build): numbers stated on the page
same("layers.examples", Rational(106, 100)**3, Rational(1191016, 1000000))
same("layers.examples", 5000 * Rational(106, 100)**3, Rational(595508, 100))
same("layers.examples", 5000 + 5000 * Rational(6, 100) * 3, 5900)
same("layers.examples", 5 * 2**4, 80)
same("layers.examples", 2**32, 4294967296)
check("layers.examples", round(2**32 / 10**8) == 43, "about 4.3 billion")
same("layers.examples", 2**64, (2**32)**2)
same("layers.examples", 10**3, 1000)
same("layers.examples", Rational(1, 10)**6, Integer(10)**-6)
same("layers.examples", 45 * 10**6, 45000000)
same("layers.examples", Rational(24, 6), 4)
same("layers.examples", 800 * Rational(1, 2)**4, 50)
same("layers.build", (2 * 5)**3, 1000)
same("layers.build", 2**3 * 2**4, 2**7)
same("layers.build", Integer(2)**3 / Integer(2)**3, Integer(2)**0)
same("layers.build", Integer(2)**0 / Integer(2)**3, Rational(1, 8))
same("layers.build", 2**8, 256)
same("layers.build", 10**3, 1000)
same("layers.build", 10**1 * 10**1, 10**2)
same("layers.build", 10**2, 100)
same("layers.build", -3**2, -9)
same("layers.build", (-3)**2, 9)
same("layers.setup", Rational(180, 20), 9)
same("layers.setup", 2**4 * 2**5, 2**9)
same("layers.setup", 16 * 32, 512)
same("layers.setup", 50 * 512, 25600)
