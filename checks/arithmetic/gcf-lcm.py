# content: f4be543a9a2d
# gcf-lcm: GCF, LCM & the Euclidean Algorithm

# formal: gcd * lcm = ab; Bezout
check("formal", all(igcd(p, q) * ilcm(p, q) == p * q for p in range(1, 30) for q in range(1, 30)), "gcd·lcm = ab")
_u, _v, _g = gcdex(1071, 462)
check("formal", 1071 * _u + 462 * _v == _g == 21, "Bezout")

# example
same("example", divmod(1071, 462), (2, 147))
same("example", divmod(462, 147), (3, 21))
same("example", divmod(147, 21), (7, 0))
same("example", igcd(1071, 462), 21)
same("example", (21 * 51, 21 * 22), (1071, 462))
same("example", (1071 // 21) * (462 // 21), 1122)
same("example", Rational(1071 * 462, 21**2), 1122)

# practice[0]
same("practice[0]", igcd(12, 18), 6)
same("practice[0]", [dd for dd in divisors(12) if 18 % dd == 0], [1, 2, 3, 6])
# practice[1]
same("practice[1]", ilcm(6, 8), 24)
same("practice[1]", igcd(6, 8), 2)
same("practice[1]", 6 * 8, 48)
# practice[2]: next time both leave together
_m = ilcm(18, 24)
same("practice[2]", _m, 72)
same("practice[2]", igcd(18, 24), 6)
same("practice[2]", 7 * 60 + _m, 8 * 60 + 12)
# practice[3]
same("practice[3]", divmod(252, 198), (1, 54))
same("practice[3]", divmod(198, 54), (3, 36))
same("practice[3]", divmod(54, 36), (1, 18))
same("practice[3]", divmod(36, 18), (2, 0))
same("practice[3]", igcd(252, 198), 18)
same("practice[3]", ilcm(252, 198), 2772)

# reworded practice
same("practice[0]", (12 // 6, 18 // 6), (2, 3))
same("practice[1]", (24 // 6, 24 // 8), (4, 3))
# practice[4]: lights 15 s and 25 s
same("practice[4]", igcd(15, 25), 5)
same("practice[4]", 15 * 25, 375)
same("practice[4]", ilcm(15, 25), 75)
# plain / why / mistakes
same("plain", [dd for dd in divisors(12) if 18 % dd == 0][-1], 6)
same("plain", (divisors(12), divisors(18)), ([1, 2, 3, 4, 6, 12], [1, 2, 3, 6, 9, 18]))
same("plain", ilcm(6, 8), 24); same("plain", (24 // 6, 24 // 8), (4, 3))
same("why", Rational(462, 1071), Rational(22, 51)); same("why", (462 // 21, 1071 // 21), (22, 51))
same("mistakes", divmod(147, 21), (7, 0))

# layers (concept history numbers, examples, formal setup)
same("layers.history", ilcm(260, 365), 18980)
same("layers.history", 52 * 365, 18980)
same("layers.examples", igcd(120, 84), 12)
same("layers.examples", (120 // 12, 84 // 12, 10 * 7), (10, 7, 70))
same("layers.examples", ilcm(12, 20), 60)
same("layers.examples", 6 * 60 + 60, 7 * 60)
same("layers.examples", (61 - 1) * (53 - 1), 3120)
check("layers.examples", igcd(17, 3120) == 1 and mod_inverse(17, 3120) == 2753, "d = 17^-1 mod 3120 = 2753")
same("layers.examples", 17 * 2753, 46801)
same("layers.examples", 15 * 3120 + 1, 46801)
same("layers.examples", ilcm(10, 8), 40); same("layers.examples", (40 // 10, 40 // 8), (4, 5))
same("layers.examples", ilcm(3, 4), 12); same("layers.examples", (12 // 3, 12 // 4), (4, 3))
same("layers.examples", igcd(15, 40), 5)
same("layers.examples", len({(15 * k) % 40 for k in range(40)}), 40 // 5)
same("layers.examples", 40 // 5, 8)
check("layers.examples", igcd(15, 41) == 1 and len({(15 * k) % 41 for k in range(41)}) == 41, "15, 41 coprime: every tooth meets every tooth")
same("layers.stepWhy", 18 // 6 * 24, 72)
same("layers.setup", [igcd(1071, 462), igcd(462, 147), igcd(147, 21), igcd(21, 0)], [21, 21, 21, 21])
same("layers.setup", (1071 // 21) * (462 // 21), 1122)
same("layers.setup", 51 * 22, 1122)
same("layers.setup", ilcm(1071, 462), 23562)
same("layers.setup", 1071 * 462 // 21, 51 * 462)
same("layers.setup", 51 * 462, 23562)
