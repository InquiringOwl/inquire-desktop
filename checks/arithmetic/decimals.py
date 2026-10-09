# content: 6270052e90bb
# decimals: Decimals
R = Rational

# formal: lowest-terms fraction terminates iff denominator has only primes 2, 5
check("formal", set(factorint(8)) <= {2, 5} and not set(factorint(12)) <= {2, 5}, "termination criterion")

# example
same("example", R(3, 8), R(375, 1000))
_b = [R(4, 10), R(38, 100), R(375, 1000)]
check("example", [v for v in _b if v == R(3, 8)] == [R(375, 1000)], "only 0.375 matches 3/8")
same("example", sorted(_b), [R(375, 1000), R(38, 100), R(4, 10)])

# practice[0]: $3.07 = 307 hundredths
same("practice[0]", 3 + R(7, 100), R(307, 100))
same("practice[0]", (3 + R(7, 100)) * 100, 307)
same("practice[0]", 3 * 100, 300)

# practice[1]
_v = [R(6, 10), R(6, 100), R(66, 100), R(606, 1000)]
same("practice[1]", sorted(_v), [R(6, 100), R(6, 10), R(606, 1000), R(66, 100)])
same("practice[1]", (min(_v), max(_v)), (R(6, 100), R(66, 100)))
same("practice[1]", [v * 1000 for v in sorted(_v)], [60, 600, 606, 660])

# practice[2]
same("practice[2]", R(7, 20), R(35, 100))
same("practice[2]", R(7 * 5, 20 * 5), R(35, 100))

# practice[3]: 5/12 = 0.41666...
same("practice[3]", R(5, 12), R(41, 100) + R(6, 1000) / (1 - R(1, 10)))
check("practice[3]", factorint(12) == {2: 2, 3: 1}, "12 = 2^2 * 3")
check("practice[3]", not set(factorint(R(5, 12).q)) <= {2, 5}, "5/12 should not terminate")
_d = [int(c) for c in str(floor(R(5, 12) * 10**12))]
check("practice[3]", _d[:5] == [4, 1, 6, 6, 6] and all(x == 6 for x in _d[2:]), "5/12 = 0.41666..., the 6 repeats")

# practice[4]: 5/8 in vs 0.6 in
same("practice[4]", R(5, 8), R(625, 1000))
check("practice[4]", R(6, 10) < R(5, 8), "0.6 < 0.625")
same("practice[4]", R(5, 8) - R(6, 10), R(25, 1000))
# plain / why
same("plain", 3 + R(4, 10) + R(7, 100), R(347, 100))
check("plain", R(5, 10) == R(50, 100) and R(5, 10) > R(45, 100), "0.5 = 0.50 > 0.45")
same("plain", R(1, 3) - R(333, 1000), R(1, 3000))
same("why", R(5, 1) / R(5, 10), 10)
same("why", R(1500, 100) / R(150, 100), 10)

# layers (concept examples, formal setup)
same("layers.examples", R(25, 100) / R(125, 1000), 2)
same("layers.examples", R(25, 10) / R(125, 1000), 20)
same("layers.examples", (R(750, 1000) - R(5, 1000), R(750, 1000) + R(5, 1000)), (R(745, 1000), R(755, 1000)))
check("layers.examples", R(745, 1000) <= R(748, 1000) <= R(755, 1000) and R(757, 1000) > R(755, 1000), "0.748 passes, 0.757 fails")
same("layers.examples", 3 * 20 + 7 * R(25, 100) + 4 * R(10, 100), R(6215, 100))
same("layers.examples", (7 * R(25, 100), 4 * R(10, 100)), (R(175, 100), R(40, 100)))
same("layers.examples", sorted([R(245, 100), R(25, 10), R(238, 100)]), [R(238, 100), R(245, 100), R(250, 100)])
same("layers.examples", R(101, 10) - R(1009, 100), R(1, 100))
same("layers.setup", R(3 * 125, 8 * 125), R(375, 1000))
check("layers.setup", factorint(8) == {2: 3}, "8 = 2^3")
same("layers.setup", 3 * R(1, 10) + 7 * R(1, 100) + 5 * R(1, 1000), R(3, 8))
same("layers.setup", sorted([R(4, 10), R(38, 100), R(375, 1000)]), [R(375, 1000), R(380, 1000), R(400, 1000)])

# layers.concept: idea cards, stakes, matters numbers
same("layers.concept", R(4, 10), R(40, 100))
same("layers.concept", R(47, 100), 4 * R(1, 10) + 7 * R(1, 100))
same("layers.concept", (R(47, 100) * 100) // 10, 4)
check("layers.concept", R(5, 10) == R(50, 100) and R(45, 100) < R(50, 100), "0.5 = 0.50 > 0.45")
same("layers.concept", R(5, 1) / R(5, 10), 10)
same("layers.concept", R(1500, 100) / R(150, 100), 10)
same("layers.concept", R(7, 10) / R(7, 100), 10)
check("layers.concept", R(45, 100) * 100 < 5 * 10, "0.45 shades fewer than 5 columns")
for _v in (40, 7, 50, 45, 25, 30, 3, 1, 100, 4):
    check("layers.concept", 0 <= _v <= 100, f"chip value {_v} inside the slider range 0..100")
same("formal", R(100005, 1000), 100 + R(5, 1000))
same("formal", R(105, 1000), R(105, 1000))
check("formal", 900 < R(100005, 1000) / R(105, 1000) < 1100, "about a thousand times")
same("formal", 0 * R(1, 10**3), 0)

# concept.walk: bolts 0.4, 0.38, 0.375 for a 3/8 in hole
_bolts = [R(4, 10), R(38, 100), R(375, 1000)]
same("concept.walk", R(3, 8), R(375, 1000))
same("concept.walk predict[1]", 3 / R(8), R(375, 1000))
same("concept.walk", [b * 1000 for b in _bolts], [400, 380, 375])
same("concept.walk", [int(b * 10) for b in _bolts], [4, 3, 3])
same("concept.walk", max(_bolts), R(4, 10))
check("concept.walk", R(38, 100) > R(375, 1000) and 375 > 38, "375 > 38 yet 0.38 > 0.375 (the trap)")
same("concept.walk", [int(b * 100) % 10 for b in _bolts[1:]], [8, 7])
same("concept.walk", sorted(_bolts), [R(375, 1000), R(38, 100), R(4, 10)])
same("concept.walk predict[5]", (R(38, 100) - R(3, 8)) * 1000, 5)
check("concept.walk", [b for b in _bolts if b == R(3, 8)] == [R(375, 1000)], "only 0.375 fits")
same("concept.walk hint", R(1, 8) * 100, R(25, 2))
same("concept.walk hint", 3 * R(25, 2), R(375, 10))
check("concept.walk demo", all(R(35, 100) <= b <= R(45, 100) for b in _bolts), "points inside 0.35..0.45")
check("concept.walk", R(38, 1000) * 10 == R(38, 100), "0.038 is ten times smaller than 0.38")

# Intermediate goals (value is hundredths, slider 0..100)
_chips = {40, 7, 50, 45, 25, 30, 3, 1, 100, 4, 47}
for _i, _g in ((1, 70), (3, 60), (4, 9)):
    check(f"build.stepGoal[{_i}]", 0 <= _g <= 100 and _g not in _chips and _g not in (38, 40), f"goal {_g} reachable and left by no chip or walk number")
same("build.stepGoal[1]", R(7, 10), R(70, 100))
same("build.stepGoal[3]", max(R(6, 10), R(58, 100)) * 100, 60)
same("build.stepGoal[4]", min(R(9, 10), R(9, 100), R(19, 100)) * 100, 9)
same("build.stepGoal[4]", [int(x * 10) for x in (R(9, 10), R(9, 100), R(19, 100))], [9, 0, 1])

# Everyday tasks
same("build.tasks[0]", (R(3, 10) - R(25, 100)) * 100, 5)
check("build.tasks[0]", R(25, 100) < R(30, 100), "0.25 < 0.30")
same("build.tasks[0] predict", int(R(3, 10) * 10), 3)
same("build.tasks[1]", R(1004, 10) - R(10004, 100), R(36, 100))
check("build.tasks[1]", R(10004, 100) < R(1004, 10), "100.04 < 100.4")
same("build.tasks[1] demo", [int(x * 10) % 10 for x in (R(10004, 100), R(1004, 10))], [0, 4])
same("build.tasks[2]", 192 - 129, 63)
same("build.tasks[2] predict", R(192, 100) * 100, 192)
same("build.tasks[2]", R(63, 100), R(192, 100) - R(129, 100))
check("build.tasks[2]", R(192, 100) > R(129, 100), "1.92 > 1.29")
same("build.tasks[3]", R(35, 10) - R(3459, 1000), R(41, 1000))
same("build.tasks[3]", (R(35, 10) - R(3459, 1000)) * 100, R(41, 10))
check("build.tasks[3]", R(3459, 1000) < R(35, 10), "3.459 < 3.5")
same("build.tasks[4]", R(587, 10) - R(5869, 100), R(1, 100))
check("build.tasks[4]", R(5869, 100) < R(587, 10), "58.69 < 58.7")
