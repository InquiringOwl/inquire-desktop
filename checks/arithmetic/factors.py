# content: 23d06f880731
# factors: Factors, Multiples & Divisibility

# example: 84 chairs, rows of 6..15
same("example", divisors(84), [1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 84])
same("example", len(divisors(84)), 12)
same("example", 8 + 4, 12)
check("example", 84 % 5 != 0 and 84 % 8 != 0 and 84 % 9 != 0, "5, 8, 9 should not divide 84")
same("example", (8 * 8, 9 * 9, 10 * 10), (64, 81, 100))
_rows = [dd for dd in divisors(84) if 6 <= dd <= 15]
same("example", _rows, [6, 7, 12, 14])
same("example", [84 // dd for dd in _rows], [14, 12, 7, 6])

# practice[0]
same("practice[0]", divisors(18), [1, 2, 3, 6, 9, 18])
check("practice[0]", 1 * 18 == 2 * 9 == 3 * 6 == 18, "factor pairs")
# practice[1]
same("practice[1]", [7 * k for k in range(1, 6)], [7, 14, 21, 28, 35])
# practice[2]
same("practice[2]", 2 + 3 + 4, 9)
check("practice[2]", 234 % 3 == 0 and 234 % 9 == 0, "234 divisible by 3 and 9")
same("practice[2]", Rational(234, 3), 78)
same("practice[2]", Rational(234, 9), 26)
# practice[3]
check("practice[3]", 16 % 4 == 0 and 7416 % 4 == 0, "divisible by 4")
same("practice[3]", 7 + 4 + 1 + 6, 18)
check("practice[3]", 7416 % 6 == 0 and 7416 % 9 == 0, "divisible by 6 and 9")
same("practice[3]", Rational(7416, 9), 824)

# plain / why / mistakes (rewritten)
same("plain", divisors(24), [1, 2, 3, 4, 6, 8, 12, 24])
same("plain", 24 % 5, 4)
same("plain", [6 * k for k in range(1, 5)], [6, 12, 18, 24])
check("plain", 1 * 24 == 2 * 12 == 3 * 8 == 4 * 6 == 24, "factor pairs of 24")
same("plain", 1 + 2 + 3 + 6, 12)
check("plain", 1236 % 3 == 0, "1,236 divisible by 3")
check("mistakes", 12 % 2 == 0 and 12 % 4 == 0 and 12 % 8 != 0, "12 not divisible by 8")
same("mistakes", Rational(12, 8), Rational(3, 2))

# practice[4]
same("practice[4]", Rational(96, 12), 8)
check("practice[4]", 96 % 12 == 0, "12 divides 96")
same("practice[3]", Rational(7416, 9), 824)

# layers (concept examples, formal setup, build): numbers stated on the page
same("layers.history", divisors(60), [1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60])
same("layers.history", len(divisors(60)), 12)
same("layers.history", 6 * 60, 360)
same("layers.examples", Rational(144, 12), 12)
same("layers.examples", Rational(144, 16), 9)
same("layers.examples", 14 * 10 + 4, 144)
same("layers.examples", 4 * 7, 28)
same("layers.examples", 5 * 5, 25)
same("layers.examples", 28 - 25, 3)
same("layers.examples", Rational(150, 10), 15)
same("layers.examples", 18 * 8, 144)
same("layers.examples", 150 - 144, 6)
same("layers.examples", 9 * 10 + 5, 95)
same("layers.examples", Rational(960, 12), 80)
same("layers.examples", Rational(960, 16), 60)
check("layers.examples", 960 % 7 != 0 and floor(Rational(96000, 7)) == 13714, "960/7 = 137.14...")
same("layers.build", Rational(84, 4), 21)
same("layers.build", 10 * 10, 100)
check("layers.build", 9 * 9 <= 84 < 10 * 10, "search ends after 9")
same("layers.build", [dd for dd in divisors(96) if 2 <= dd <= 12], [2, 3, 4, 6, 8, 12])
check("layers.build", 4 * 6 == 3 * 8 == 24, "photo grids")
check("layers.build", 2028 % 4 == 0 and 28 % 4 == 0, "2028 leap-year test")
same("layers.build", ilcm(8, 10), 40)
same("layers.build", (Rational(40, 8), Rational(40, 10)), (5, 4))
same("layers.build", Rational(84, 12), 7)
same("layers.setup", 8 * 10 + 4, 84)
same("layers.setup", 8 * 9 + (8 + 4), 84)
check("layers.setup", 12 % 3 == 0 and 84 % 3 == 0, "3 | 12 and 3 | 84")
same("layers.setup", [dd for dd in divisors(84) if 6 <= dd <= 15], [6, 7, 12, 14])
