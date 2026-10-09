# content: acf70a866824
# real-numbers: The Real Number System
R = Rational
from decimal import Decimal as _D, getcontext as _gc
_gc().prec = 40

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
check("example", str(N(sqrt(50), 10)).startswith("7.0710678"), "calculator 7.0710678…")
same("example", 4*sqrt(50), 20*sqrt(2))
check("example", abs(N(20*sqrt(2)) - 28.28) < 0.005 and abs(N(20*sqrt(2)) - 28.3) < 0.05, "≈ 28.28 ≈ 28.3")

# practice[0]: -12 in Z, Q, R (3 of the 5 sets), not N, not W
v = Integer(-12)
_sets = [S.Naturals, S.Naturals0, S.Integers, S.Rationals, S.Reals]
same("practice[0]", sum(1 for X in _sets if v in X), 3)
check("practice[0]", v in S.Integers and v in S.Rationals and v in S.Reals, "in Z, Q, R")
check("practice[0]", v not in S.Naturals and v not in S.Naturals0, "not natural/whole")
# practice[1]: sqrt 45 (patio)
same("practice[1]", sqrt(45), 3*sqrt(5))
check("practice[1]", sqrt(45).is_irrational, "irrational")
check("practice[1]", 6**2 == 36 and 7**2 == 49 and 36 < 45 < 49 and 6 < sqrt(45) < 7, "between 6 and 7")
check("practice[1]", abs(N(sqrt(45)) - 6.708) < 0.0005, "≈ 6.708")
# practice[2]: 0.3636... = 4/11
xv = R(36, 100) / (1 - R(1, 100))
same("practice[2]", 100*xv - xv, 36)
same("practice[2]", xv, R(36, 99))
same("practice[2]", R(36, 99), R(4, 11))
check("practice[2]", gcd(4, 11) == 1, "lowest terms")
# practice[3]: 2.14545... = 2.1 + 0.04545...
truth = R(21, 10) + R(45, 1000)/(1 - R(1, 100))
same("practice[3]", 1000*truth - 10*truth, 2124)
check("practice[3]", str(N(1000*truth, 8)).startswith("2145.45") and str(N(10*truth, 6)).startswith("21.45"), "1000x = 2145.45…, 10x = 21.45…")
same("practice[3]", R(2124, 990), R(118, 55))
same("practice[3]", truth, R(118, 55))
check("practice[3]", gcd(118, 55) == 1, "118/55 in lowest terms")
# practice[4]: s^2 = 2 (tablecloth)
solves("practice[4]", Eq(s**2, 2), s, {sqrt(2)}, domain=Interval(0, oo))
check("practice[4]", sqrt(2).is_irrational, "sqrt 2 irrational")
same("practice[4]", R(141, 100)**2, R(19881, 10000))
same("practice[4]", R(142, 100)**2, R(20164, 10000))
check("practice[4]", R(141, 100) < sqrt(2) < R(142, 100) and sqrt(2) - R(141, 100) < R(142, 100) - sqrt(2), "s ≈ 1.41")

# mistakes: calculator sqrt 2, 22/7, 1/7
same("mistakes", R(1414213562, 10**9)**2, R(1414213562**2, 10**18))
check("mistakes", str(_D("1.414213562")**2).startswith("1.99999999894"), "1.414213562² = 1.99999999894…")
check("mistakes", str(N(R(22, 7), 8)).startswith("3.142857") and str(N(pi, 8)).startswith("3.141592"), "22/7 vs π")
check("mistakes", str(N(R(1, 7), 14)).startswith("0.142857142857"), "1/7 repeats")
same("mistakes", sqrt(49), 7)

# plain / why text numbers
same("plain", R(10, 3), R(10, 3))
check("plain", str(N(R(10, 3), 5)).startswith("3.333"), "10/3 = 3.333…")
check("plain", abs(N(sqrt(2)) - 1.41421) < 0.000005, "sqrt 2 ≈ 1.41421")
check("why", abs(float(1 - 3/pi) - 0.045) < 0.0005, "pi -> 3 short by about 4.5%")

# ---- Concept walk: square garden of 50 m² ----
same("concept.walk line1", (7*7, 8*8), (49, 64))
check("concept.walk line2", 49 < 50 < 64 and 7 < sqrt(50) < 8 and integer_nthroot(50, 2)[1] is False, "no whole side")
same("concept.walk line3", R(707, 100)**2, R(499849, 10000))
same("concept.walk line3", R(708, 100)**2, R(501264, 10000))
check("concept.walk line3", R(499849, 10000) < 50 < R(501264, 10000), "7.07 a hair under, 7.08 a hair over")
check("concept.walk line4", str(N(sqrt(50), 10)).startswith("7.0710678"), "screen 7.0710678")
check("concept.walk line4", str(_D("7.0710678")**2).startswith("49.99999983"), "7.0710678² = 49.99999983…")
check("concept.walk line4", _D("7.0710678")**2 != 50, "not 50")
check("concept.walk line5", sqrt(50).is_irrational and round(float(N(sqrt(50))), 2) == 7.07, "√50 irrational ≈ 7.07")
same("concept.walk line5", 4*R(707, 100), R(2828, 100))
check("concept.walk line5", round(4*7.07, 1) == 28.3 and abs(N(4*sqrt(50)) - 28.3) < 0.05, "fence ≈ 28.3")
same("concept.walk predict[1]", 8*8, 64)
check("concept.walk predict[2]", 7 < sqrt(50) < 8 and 25*25 == 625 and 25 == 50/2, "between 7 and 8; 25 × 25 = 625")
check("concept.walk predict[3]", R(499849, 10000) < 50, "7.07 a bit short")
check("concept.walk predict[5]", round(28.28, 1) == 28.3, "28.28 → 28.3")
check("concept.walk demo", 6 <= 7 <= 9 and 6 <= 8 <= 9 and abs(7.0710678 - float(N(sqrt(50)))) < 1e-7, "line points 7, 8, √50 inside 6..9")

# ---- layers.concept: idea cards and stakes ----
same("layers.concept ideas", R(3, 4), R(75, 100))
check("layers.concept ideas", str(N(R(1, 3), 4)).startswith("0.333"), "1/3 = 0.333…")
check("layers.concept ideas", sqrt(1**2 + 1**2) == sqrt(2) and sqrt(2).is_irrational and abs(1.41421356 - float(N(sqrt(2)))) < 1e-8, "1 m tile diagonal √2")
check("layers.concept ideas", Integer(-40) in S.Integers and Integer(-12) in S.Integers, "negatives are integers")
same("layers.concept stakes", sqrt(9), 3)
check("layers.concept stakes", str(N(sqrt(50), 10)).startswith("7.0710678"), "√50 screen")
check("layers.concept stakes", nsimplify(R(3, 10)/(1 - R(1, 10))) == R(1, 3), "0.333… = 1/3")
check("layers.concept stakes", repr(0.1 + 0.2) == "0.30000000000000004", "float 0.1 + 0.2")
check("layers.concept timeline", abs(N(1 + R(24, 60) + R(51, 3600) + R(10, 216000)) - 1.414213) < 5e-7, "YBC ≈ 1.414213")

# ---- layers.examples (Concept tiles) ----
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
check("layers.history", 1872 - 1858 == 14 and 2026 - (-1800) > 3800, "nearly 4,000 years")

# ---- layers.setup (Formal write-up) ----
same("layers.setup", sqrt(50), sqrt(25)*sqrt(2))
same("layers.setup", sqrt(50), 5*sqrt(2))
same("layers.setup", R(707, 100)**2, R(499849, 10000))
same("layers.setup", R(708, 100)**2, R(501264, 10000))
same("layers.setup", 4*5*sqrt(2), 20*sqrt(2))
check("layers.setup", abs(N(20*sqrt(2)) - 28.28) < 0.005 and abs(N(20*sqrt(2)) - 28.3) < 0.05, "≈ 28.28 ≈ 28.3")
solves("layers.formal matters", Eq(x**2, 2), x, {sqrt(2), -sqrt(2)})
check("layers.formal matters", not any(r.is_rational for r in [sqrt(2), -sqrt(2)]), "no rational solution")

# ---- Intermediate goals: the lab's examples (pick index → value) ----
_EX = [Integer(7), Integer(1), Integer(42), sqrt(9), Integer(0), Integer(-3), Integer(-12), R(3, 4), R(-5, 2), R(1, 3), R(1, 8), sqrt(2), pi, E, -sqrt(5), None]
check("build.stepGoal[0]", 0 <= 3 <= 15 and _EX[3] == 3 and _EX[3] in S.Naturals, "pick 3 = √9 = 3, natural")
_ROOTS = {3: sqrt(9), 11: sqrt(2), 14: -sqrt(5)}   # the lab's examples written with a root sign
check("build.stepGoal[0]", [i for i, r in _ROOTS.items() if r in S.Naturals] == [3], "only √9 is a root sign hiding a counting number")
same("build.stepGoal[3]", R(125, 1000), R(1, 8))
check("build.stepGoal[3]", 0 <= 10 <= 15 and _EX[10] == R(1, 8), "pick 10 = 0.125 = 1/8")
check("build.stepGoal[4]", 0 <= 14 <= 15 and _EX[14].is_irrational and _EX[14] < 0 and integer_nthroot(5, 2)[1] is False, "pick 14 = −√5, negative irrational")
check("build.stepGoal[4]", [i for i, v in enumerate(_EX) if v is not None and v.is_irrational and v < 0] == [14], "the only negative irrational")

# ---- Intermediate tasks ----
same("build.tasks[0].check", sqrt(9*9 + 12*12), 15)
same("build.tasks[0].lines", (9*9, 12*12, 81 + 144, 15*15), (81, 144, 225, 225))
same("build.tasks[0].predict", 81 + 144, 225)
same("build.tasks[0].demo", sum([81, 144]), 225)
check("build.tasks[1].check", round(float(N(sqrt(2))), 2) == 1.41 and str(N(sqrt(2), 10)).startswith("1.414213562"), "√2 → 1.41")
check("build.tasks[1].lines", R(141, 100) < sqrt(2) < R(142, 100), "1.41 < √2 < 1.42")
check("build.tasks[1].predict", abs(N(R(142, 100) - sqrt(2)) - 0.006) < 0.0005 and abs(N(sqrt(2) - R(141, 100)) - 0.004) < 0.0005, "≈ 0.006 vs ≈ 0.004")
check("build.tasks[1].demo", 1.4 <= 1.41421356 <= 1.43, "√2 inside 1.40..1.43")
same("build.tasks[2].check", (R(333, 100), 1000 - 3*333), (R(333, 100), 1))
check("build.tasks[2].lines", str(N(R(10, 3), 6)).startswith("3.3333") and 3*R(333, 100) == R(999, 100) and R(1000, 100) - R(999, 100) == R(1, 100) and R(999, 100) + R(1, 100) == 10, "10/3, 9.99, 0.01")
same("build.tasks[2].lines", R(333, 100) + R(1, 100), R(334, 100))
same("build.tasks[2].predict", 3*R(333, 100), R(999, 100))
same("build.tasks[2].demo", (10 // 3, 10 % 3), (3, 1))
same("build.tasks[3].check", ceiling(R(130, 48)), 3)
check("build.tasks[3].lines", str(N(R(130, 48), 5)).startswith("2.708") and 2*48 == 96 and 3*48 == 144 and 144 - 130 == 14, "130/48, 96, 144, 14 spare")
same("build.tasks[3].predict", 2*48, 96)
same("build.tasks[3].demo", 48 + 48 + 34, 130)
same("build.tasks[4].check", 4 - 9, -5)
check("build.tasks[4].lines", Integer(-5) in S.Integers and Integer(-5) not in S.Naturals0 and Integer(-5) in S.Rationals, "−5 in Z, Q, R")
check("build.tasks[4].demo", -6 <= 4 <= 6 and -6 <= 4 - 9 <= 6, "line 4 → −5 inside −6..6")
# the lab's examples written as decimals: −2.5 (8), 0.333… (9), 0.125 (10), 0.101001… (15); only 0.125 is positive and ends
_DEC = {8: (R(-5, 2), True), 9: (R(1, 3), False), 10: (R(1, 8), True), 15: (None, False)}
check("build.stepGoal[3]", [i for i, (v, ends) in _DEC.items() if ends and v > 0] == [10], "0.125 is the only positive decimal that ends")
check("build.stepGoal[3]", all(p in (2, 5) for p in factorint(8)) and not all(p in (2, 5) for p in factorint(3)), "1/8 terminates, 1/3 repeats")
