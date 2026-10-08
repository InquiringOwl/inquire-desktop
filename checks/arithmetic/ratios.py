# content: ccacc77c99ae
# ratios: Ratios & Rates
R = Rational
# formal: scaling
check("formal", R(2, 5) == R(2*3, 5*3), "scaling preserves ratio")

# example: 2:5, 21 cups
same("example", 2 + 5, 7)
k_ = R(21, 2 + 5)
same("example", k_, 3)
same("example", 2*k_, 6)
same("example", 5*k_, 15)
check("example", R(6, 15) == R(2, 5) and 6 + 15 == 21, "6:15 = 2:5, total 21")

# practice[0]
same("practice[0]", gcd(18, 24), 6)
same("practice[0]", R(18, 24), R(3, 4))
check("practice[0]", gcd(3, 4) == 1, "simplest form")
# practice[1]
same("practice[1]", 12 + 15, 27)
same("practice[1]", R(12, 27), R(4, 9))
check("practice[1]", gcd(4, 9) == 1, "simplest form")
# practice[2]
same("practice[2]", R(222, 6), 37)
# practice[3]
p1, p2 = R(348, 100)/12, R(540, 100)/20
same("practice[3]", p1, R(29, 100))
same("practice[3]", p2, R(27, 100))
check("practice[3]", p2 < p1, "20 oz box cheaper per ounce")

# practice[4]: 45 pages in 3 min, 240 pages in m min
m_ = symbols("m_")
same("practice[4]", 3*240, 720)
same("practice[4]", solve(Eq(45*m_, 3*240), m_), [16])
check("practice[4]", R(45, 3) == R(240, 16), "45:3 = 240:16")

# mistakes: 40 mi/h vs 60 km/h
check("mistakes", abs(40*1.609344 - 64) < 0.5 and 40*1.609344 > 60, "40 mi/h ≈ 64 km/h > 60 km/h")
same("mistakes", R(12, 15), R(4, 5))

# layers (concept examples, formal setup): numbers stated on the page
same("layers.examples", 1 + 4, 5)
same("layers.examples", R(250, 5), 50)
same("layers.examples", 4*50, 200)
same("layers.examples", R(10, 4), R(25, 10))
same("layers.examples", 6*R(25, 10), 15)
same("layers.examples", 5*24000, 120000)
same("layers.examples", R(120000, 100*1000), R(12, 10))
same("layers.examples", R(252, 144), R(175, 100))
same("layers.examples", R(340, 200), R(170, 100))
same("layers.examples", R(175, 100) - R(170, 100), R(5, 100))
same("layers.examples", 1 + 2 + 3, 6)
same("layers.examples", R(3, 6), R(1, 2))
check("layers.examples", (1*R(1, 2), 2*R(1, 2), 3*R(1, 2)) == (R(1, 2), 1, R(3, 2)), "0.5 / 1 / 1.5 cu yd")
same("layers.examples", R(54, 45)*9, R(108, 10))
c_, w_, kk = symbols("c_ w_ kk")
same("layers.setup", solve(Eq(2*kk + 5*kk, 21), kk), [3])
same("layers.setup", (2*3, 5*3), (6, 15))
check("layers.setup", 6*5 == 15*2 == 30 and 6 + 15 == 21, "cross products 30, total 21")
same("layers.tasks", 2 + 5, 7)
same("layers.tasks", R(21, 7), 3)
