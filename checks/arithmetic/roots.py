# content: 2ae7e68229bd
# roots: Square Roots & Perfect Squares
R = Rational
check("formal", sqrt(2*3) == sqrt(2)*sqrt(3) and sqrt(x**2) == Abs(x), "root rules")

# example: area 200
check("example", 14**2 == 196 and 15**2 == 225 and 196 < 200 < 225, "between 14 and 15")
bab = lambda A, g: (g + A/g)/2
x1 = bab(200, R(14))
check("example", abs(N(R(200, 14)) - 14.2857) < 0.00005, "200/14 ≈ 14.2857")
check("example", abs(N(x1) - 14.1429) < 0.00005, "x1 ≈ 14.1429")
x2 = bab(200, R(141429, 10000))
check("example", abs(N(x2) - 14.1421) < 0.00005, "x2 ≈ 14.1421")
same("example", sqrt(200), 10*sqrt(2))
check("example", abs(N(sqrt(200)) - 14.142) < 0.0005, "≈ 14.142")
check("example", abs(N(sqrt(200)) - 14.14) < 0.005, "≈ 14.14")
check("example", abs(4*14.142 - 56.57) < 0.005, "4 × 14.142 ≈ 56.57")
check("example", abs(N(40*sqrt(2)) - 56.6) < 0.05, "perimeter ≈ 56.6")

# practice[0]
same("practice[0]", sqrt(144), 12)
# practice[1]
check("practice[1]", 7 < sqrt(50) < 8 and 49 < 50 < 64, "between 7 and 8")
check("practice[1]", sqrt(50) - 7 < 8 - sqrt(50), "closer to 7")
check("practice[1]", abs(N(sqrt(50)) - 7.07) < 0.005, "≈ 7.07")
# practice[2]
same("practice[2]", sqrt(72), 6*sqrt(2))
same("practice[2]", 36*2, 72)
# practice[3]
same("practice[3]", bab(10, R(3)), R(19, 6))
check("practice[3]", abs(N(R(19, 6)) - 3.1667) < 0.00005, "≈ 3.1667")
check("practice[3]", abs(N(sqrt(10)) - 3.1623) < 0.00005, "√10 ≈ 3.1623")

# practice[4]: lawn 225 m²
solves("practice[4]", Eq(s**2, 225), s, {-15, 15})
check("practice[4]", sqrt(225) == 15, "principal root 15")
same("practice[4]", 4*15, 60)

# plain: 20 ft² square
check("plain", 4 < sqrt(20) < 5 and abs(N(sqrt(20)) - 4.47) < 0.005, "√20 ≈ 4.47")

# layers (concept examples, history, formal setup)
same("layers.examples", sqrt(6**2 + 8**2), 10)
check("layers.examples", 10*12 + 1 > 10*12, "10 ft 1 in is longer than 10 ft")
same("layers.examples", sqrt(144), 12)
same("layers.examples", 4*12, 48)
check("layers.examples", abs(N(120*sqrt(2)) - 170) < 0.5, "120√2 ≈ 170 (169.7)")
same("layers.examples", sqrt(16), 4)
same("layers.examples", sqrt(5**2 + 12**2), 13)
check("layers.examples", 13 < 15, "inside 15-unit range")
same("layers.examples", 120**2 + 50**2, 16900)
same("layers.examples", sqrt(16900), 130)
# history: YBC 7289 and Heron's 720
ybc = 1 + R(24, 60) + R(51, 3600) + R(10, 216000)
check("layers.history", abs(N(ybc) - 1.414213) < 0.0000005, "1;24,51,10 ≈ 1.414213")
same("layers.history", 27**2, 729)
same("layers.history", R(720, 27), 26 + R(2, 3))
same("layers.history", (27 + R(720, 27)) / 2, 26 + R(5, 6))
# setup
same("layers.setup", sqrt(200), sqrt(100)*sqrt(2))
same("layers.setup", sqrt(100)*sqrt(2), 10*sqrt(2))
check("layers.setup", abs(N(bab(200, R(14))) - 14.1429) < 0.00005, "x1 ≈ 14.1429")
check("layers.setup", abs(N(bab(200, bab(200, R(14)))) - 14.1421) < 0.00005, "x2 ≈ 14.1421")
check("layers.setup", abs(N(10*sqrt(2)) - 14.14) < 0.005 and abs(N(40*sqrt(2)) - 56.6) < 0.05, "14.14 and 56.6")
# build tasks
check("layers.tasks", 14**2 == 196 and 14 < sqrt(200) < 15, "a little over 14")
same("layers.tasks", sqrt(20000), 100*sqrt(2))
same("layers.tasks", sqrt(20000), 10*sqrt(200))
check("layers.tasks", abs(N(100*sqrt(2)) - 141) < 0.5, "≈ 141")
