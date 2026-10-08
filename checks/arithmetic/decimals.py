# content: f6058f6162fe
# decimals: Decimals
R = Rational

# formal: lowest-terms fraction terminates iff denominator has only primes 2, 5
check("formal", set(factorint(8)) <= {2, 5} and not set(factorint(12)) <= {2, 5}, "termination criterion")

# example
same("example", R(3, 8), R(375, 1000))
_b = [R(4, 10), R(38, 100), R(375, 1000)]
check("example", [v for v in _b if v == R(3, 8)] == [R(375, 1000)], "only 0.375 matches 3/8")
same("example", sorted(_b), [R(375, 1000), R(38, 100), R(4, 10)])

# practice[0]
same("practice[0]", 3 + R(7, 100), R(307, 100))

# practice[1]
_v = [R(6, 10), R(6, 100), R(66, 100), R(606, 1000)]
same("practice[1]", sorted(_v), [R(6, 100), R(6, 10), R(606, 1000), R(66, 100)])

# practice[2]
same("practice[2]", R(7, 20), R(35, 100))
same("practice[2]", R(7 * 5, 20 * 5), R(35, 100))

# practice[3]: 5/12 = 0.41666...
same("practice[3]", R(5, 12), R(41, 100) + R(6, 1000) / (1 - R(1, 10)))
check("practice[3]", factorint(12) == {2: 2, 3: 1}, "12 = 2^2 * 3")
check("practice[3]", not set(factorint(R(5, 12).q)) <= {2, 5}, "5/12 should not terminate")

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
