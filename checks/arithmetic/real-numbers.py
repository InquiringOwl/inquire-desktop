# content: 3112ba34b807
# real-numbers: The Real Number System
R = Rational
# formal: sqrt(n) rational only for perfect squares (sample)
check("formal", all(sqrt(n).is_rational == (integer_nthroot(n, 2)[1]) for n in range(1, 50)), "sqrt n rational iff square")
check("formal", sqrt(2).is_irrational, "sqrt 2 irrational")

# example: s^2 = 50
solves("example", Eq(s**2, 50), s, {5*sqrt(2)}, domain=Interval(0, oo))
same("example", sqrt(50), 5*sqrt(2))
check("example", sqrt(50).is_irrational, "sqrt 50 irrational")
check("example", 7**2 == 49 and 8**2 == 64 and 49 < 50 < 64, "between 7 and 8")
same("example", R(707, 100)**2, R(499849, 10000))
same("example", R(708, 100)**2, R(501264, 10000))
check("example", R(707, 100) < sqrt(50) < R(708, 100), "between 7.07 and 7.08")
check("example", sqrt(50) - R(707, 100) < R(708, 100) - sqrt(50), "closer to 7.07")
check("example", abs(N(sqrt(50)) - 7.071) < 0.0005, "s ≈ 7.071")
check("example", abs(N(sqrt(50)) - 7.07) < 0.005, "s ≈ 7.07")
same("example", 4*sqrt(50), 20*sqrt(2))
check("example", abs(N(20*sqrt(2)) - 28.28) < 0.005, "≈ 28.28")
check("example", abs(N(20*sqrt(2)) - 28.3) < 0.05, "≈ 28.3")

# practice[0]: -12 in Z, Q, R, not N, not W
v = -12
check("practice[0]", Integer(v) in S.Integers and Integer(v) in S.Rationals and Integer(v) in S.Reals, "in Z, Q, R")
check("practice[0]", Integer(v) not in S.Naturals and Integer(v) not in S.Naturals0, "not natural/whole")
# practice[1]: 0.3636...
xv = R(36, 99)
check("practice[1]", 100*xv - xv == 36, "100x - x = 36")
same("practice[1]", xv, R(4, 11))
same("practice[1]", nsimplify(R(36, 100)/(1 - R(1, 100))), R(4, 11))
# practice[2]: sqrt 45
same("practice[2]", sqrt(45), 3*sqrt(5))
check("practice[2]", sqrt(45).is_irrational, "irrational")
check("practice[2]", 36 < 45 < 49 and 6 < sqrt(45) < 7, "between 6 and 7")
check("practice[2]", abs(N(sqrt(45)) - 6.708) < 0.0005, "≈ 6.708")
# practice[3]: 2.14545... = 2.1 + 0.04545...
truth = R(21, 10) + R(45, 1000)/(1 - R(1, 100))
check("practice[3]", 990*truth == 2124, "990x = 2124")
same("practice[3]", R(2124, 990), R(118, 55))
same("practice[3]", truth, R(118, 55))

# practice[4]: s^2 = 2 (tablecloth)
solves("practice[4]", Eq(s**2, 2), s, {sqrt(2)}, domain=Interval(0, oo))
check("practice[4]", sqrt(2).is_irrational, "sqrt 2 irrational")
same("practice[4]", R(141, 100)**2, R(19881, 10000))
same("practice[4]", R(142, 100)**2, R(20164, 10000))
check("practice[4]", R(141, 100) < sqrt(2) < R(142, 100) and sqrt(2) - R(141, 100) < R(142, 100) - sqrt(2), "s ≈ 1.41")
# practice[3]: gear ratio as tooth counts 118 and 55 (lowest terms)
check("practice[3]", gcd(118, 55) == 1, "118/55 in lowest terms")

# plain / why text numbers
same("plain", R(10, 3), R(10, 3))
check("plain", abs(N(sqrt(2)) - 1.41421) < 0.000005, "sqrt 2 ≈ 1.41421")
check("why", abs(float(1 - 3/pi) - 0.045) < 0.0005, "pi -> 3 short by about 4.5%")

# layers (concept examples, history, formal setup): numbers stated on the page
check("layers.examples", repr(0.1 + 0.2) == "0.30000000000000004", "float 0.1 + 0.2")
same("layers.examples", 10 + 20, 30)
check("layers.examples", abs(N(36*sqrt(2)) - 50.91) < 0.005, "36√2 ≈ 50.91")
same("layers.examples", Integer(round(N(36*sqrt(2))*16)), 815)
same("layers.examples", 50 + R(15, 16), R(815, 16))
same("layers.examples", 120**2 + 50**2, 16900)
same("layers.examples", sqrt(16900), 130)
check("layers.examples", abs(N(100*sqrt(2)) - 141.42) < 0.005, "100√2 ≈ 141.42")
check("layers.examples", (100*sqrt(2)).is_irrational, "100√2 irrational")
check("layers.examples", abs(N(2*pi) - 6.2832) < 0.00005, "2π ≈ 6.2832")
same("layers.examples", 2*R(314, 100), R(628, 100))
check("layers.examples", abs(N(2*pi) - 6.28 - 0.003) < 0.0005 and N(2*pi) - 6.28 > 3*0.001, "off by about 0.003, more than 3x 0.001")
check("layers.examples", str(N(R(22, 7), 15)).startswith("3.14285714285714"), "22/7 = 3.142857 142857…")
check("layers.examples", abs(N(R(22, 7) - pi) - 0.0013) < 0.00005 and R(22, 7) > pi, "22/7 exceeds π by about 0.0013")
check("layers.examples", str(N(pi, 10)).startswith("3.14159"), "π = 3.14159…")
ybc = 1 + R(24, 60) + R(51, 60**2) + R(10, 60**3)
check("layers.history", abs(N(ybc) - 1.414213) < 0.0000005, "1;24,51,10 ≈ 1.414213")
check("layers.history", abs(N((ybc - sqrt(2))/sqrt(2))) < R(1, 2000000), "within one part in two million")
check("layers.history", str(N(sqrt(2), 12)).startswith("1.414213562"), "calculator √2")
same("layers.setup", sqrt(50), sqrt(25)*sqrt(2))
same("layers.setup", sqrt(50), 5*sqrt(2))
same("layers.setup", R(707, 100)**2, R(499849, 10000))
same("layers.setup", R(708, 100)**2, R(501264, 10000))
same("layers.setup", 4*5*sqrt(2), 20*sqrt(2))
check("layers.setup", abs(N(20*sqrt(2)) - 28.28) < 0.005 and abs(N(20*sqrt(2)) - 28.3) < 0.05, "≈ 28.28 ≈ 28.3")
