# content: 3e4f0def7e98
# decimal-ops: Operations with Decimals
R = Rational

# formal: 1 ÷ 0.3 = 3.333...
same("formal", R(1) / R(3, 10), R(10, 3))

# example
same("example", 275 * 640, 176000)
same("example", R(275, 100) * R(640, 100), R(17600, 1000))
same("example", R(275, 100) * R(640, 100), R(1760, 100))
same("example", 3 * 6, 18)
same("example", 20 - R(275, 100) * R(640, 100), R(240, 100))

# practice[0]
same("practice[0]", R(47, 10) + R(1235, 100), R(1705, 100))
# practice[1]
same("practice[1]", 10 - R(346, 100), R(654, 100))
# practice[2]
same("practice[2]", 6 * 25, 150)
same("practice[2]", R(6, 100) * R(25, 10), R(15, 100))
# practice[3]
same("practice[3]", R(756, 100) / R(36, 100), 21)
same("practice[3]", R(756, 36), 21)

# practice[4]: 12 p = 43.20
same("practice[4]", solve(Eq(12*x, R(4320, 100)), x)[0], R(360, 100))

# plain / mistakes: numbers stated on the page
same("plain", R(349, 100) + R(275, 100), R(624, 100))
same("plain", R(3, 10) * R(4, 10), R(12, 100))
same("plain", 3 * 4, 12)
same("mistakes", R(47, 100) + R(1235, 100), R(1282, 100))
same("mistakes", R(47, 10) + R(1235, 100), R(1705, 100))
same("mistakes", 756 / R(36), 21)
same("why", R(5) / R(5, 10), 10)

# layers (concept examples, build steps and tasks, formal setup)
same("layers.examples", R(124875, 100) - R(30050, 100), R(94825, 100))
same("layers.examples", R(1250, 1000) - R(375, 1000), R(875, 1000))
same("layers.examples", R(75, 100) / R(25, 100), 3)
same("layers.examples", R(75, 25), 3)
same("layers.examples", 375 * 2280, 855000)
same("layers.examples", R(375, 10) * R(2280, 100), 855)
same("layers.examples", R(855000, 1000), 855)
same("layers.examples", R(42, 10) / R(25, 100), R(168, 10))
same("layers.examples", R(420, 25), R(168, 10))
same("layers.examples", 240 * R(385, 100), 924)
same("layers.examples", 240 * 4, 960)
same("layers.steps", 100 * 100, 10000)
same("layers.steps", R(756, 100) / R(36, 100), R(756, 36))
same("layers.tasks", 126 * 349, 43974)
same("layers.tasks", R(126, 10) * R(349, 100), R(43974, 1000))
check("layers.tasks", abs(R(43974, 1000) - R(4397, 100)) < R(5, 1000), "about $43.97")
same("layers.tasks", 13 * R(350, 100), R(4550, 100))
same("layers.tasks", R(8640, 100) / 4, R(2160, 100))
same("layers.setup", R(275, 100) * R(640, 100), R(176000, 10000))
same("layers.setup", R(176000, 10000), R(1760, 100))
same("layers.setup", R(2000, 100) - R(1760, 100), R(240, 100))
