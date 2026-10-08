# content: 91ac18cbaf5a
# fraction-ops: Operations with Fractions
R = Rational

# example
same("example", ilcm(3, 4), 12)
same("example", (R(2, 3), R(3, 4)), (R(8, 12), R(9, 12)))
_used = R(2, 3) + R(3, 4)
same("example", _used, R(17, 12))
same("example", _used, 1 + R(5, 12))
same("example", 2 + R(1, 2), R(30, 12))
_left = 2 + R(1, 2) - _used
same("example", _left, R(13, 12))
same("example", _left, 1 + R(1, 12))

# practice[0]
same("practice[0]", R(1, 4) + R(3, 8), R(5, 8))
# practice[1]
same("practice[1]", ilcm(6, 4), 12)
same("practice[1]", R(5, 6) - R(3, 4), R(1, 12))
# practice[2]
same("practice[2]", R(4, 9) * R(3, 8), R(1, 6))
same("practice[2]", R(1, 3) * R(1, 2), R(1, 6))
same("practice[2]", R(12, 72), R(1, 6))
# practice[3]
same("practice[3]", 2 + R(1, 4), R(9, 4))
same("practice[3]", (2 + R(1, 4)) / R(3, 8), 6)
same("practice[3]", R(72, 12), 6)

# practice[4]: n * 5/8 = 3 3/4
same("practice[4]", 3 + R(3, 4), R(15, 4))
same("practice[4]", solve(Eq(x*R(5, 8), R(15, 4)), x)[0], 6)
same("practice[4]", R(15, 4) * R(8, 5), R(120, 20))
same("practice[4]", R(120, 20), 6)
same("practice[0]", (R(2, 8), R(3, 8)), (R(1, 4), R(3, 8)))
same("practice[1]", (R(10, 12), R(9, 12)), (R(5, 6), R(3, 4)))
same("practice[3]", R(9, 4) * R(8, 3), R(72, 12))

# plain / why / mistakes: numbers stated on the page
check("plain", R(5, 7) < R(3, 4), "5/7 is less than 3/4")
same("plain", (R(2, 3), R(3, 4)), (R(8, 12), R(9, 12)))
same("plain", R(2, 3) + R(3, 4), 1 + R(5, 12))
same("plain", R(1, 2) * R(3, 4), R(3, 8))
same("why", 3 * R(33, 100), R(99, 100))
same("mistakes", R(1, 2) + R(1, 3), R(5, 6))
check("mistakes", R(2, 5) < R(1, 2), "2/5 < 1/2")
same("mistakes", R(2, 3) / R(4, 5), R(5, 6))
same("mistakes", R(2, 3) * R(5, 4), R(10, 12))
same("mistakes", 3 + R(1, 4), 2 + R(5, 4))
same("mistakes", (3 + R(1, 4)) - (1 + R(3, 4)), 1 + R(1, 2))
same("mistakes", R(13, 4) - R(7, 4), R(6, 4))
same("mistakes", R(6, 4), 1 + R(2, 4))
check("mistakes", (3 + R(1, 4)) - (1 + R(3, 4)) != 2 + R(1, 2), "2 1/2 is the wrong answer")

# layers (concept examples, build steps and tasks, formal setup)
same("layers.examples", (5 + R(3, 8), 2 + R(11, 16)), (R(86, 16), R(43, 16)))
same("layers.examples", R(86, 16) + R(43, 16), R(129, 16))
same("layers.examples", R(129, 16), 8 + R(1, 16))
same("layers.examples", 2 + R(2, 3), R(8, 3))
same("layers.examples", R(8, 3) * R(3, 4), R(24, 12))
same("layers.examples", R(24, 12), 2)
same("layers.examples", R(3, 4) / R(1, 4), 3)
same("layers.examples", R(3, 4) * 4, 3)
same("layers.examples", R(1, 4) + R(1, 8) + R(1, 8) + R(1, 2), R(8, 8))
same("layers.examples", (R(2, 8), R(4, 8)), (R(1, 4), R(1, 2)))
same("layers.examples", 12 + R(1, 2), 12 + R(4, 8))
same("layers.examples", 2 * R(5, 8), R(10, 8))
same("layers.examples", 12 + R(1, 2) + 2 * R(5, 8), 13 + R(3, 4))
same("layers.examples", (6, 2 + R(7, 16), R(1, 8)), (R(96, 16), R(39, 16), R(2, 16)))
same("layers.examples", 6 - (2 + R(7, 16)) - R(1, 8), R(55, 16))
same("layers.examples", R(55, 16), 3 + R(7, 16))
same("layers.steps", R(2, 3) * R(4, 4), R(8, 12))
same("layers.steps", R(9, 4) / R(3, 8), 6)
same("layers.tasks", R(1, 2) * R(3, 4), R(3, 8))
same("layers.tasks", R(30, 12) - R(17, 12), R(13, 12))
same("layers.tasks", (2 + R(1, 4)) / R(3, 8), 6)
same("layers.tasks", R(3, 8) * R(4, 9), R(1, 6))
same("layers.setup", ilcm(3, 4), 12)
same("layers.setup", (R(2*4, 3*4), R(3*3, 4*3)), (R(8, 12), R(9, 12)))
same("layers.setup", 2 + R(1, 2), R(30, 12))
same("layers.setup", R(8, 12) + R(9, 12), R(17, 12))
same("layers.setup", R(30, 12) - R(17, 12), R(13, 12))
same("layers.setup", (R(17, 12), R(13, 12)), (1 + R(5, 12), 1 + R(1, 12)))
