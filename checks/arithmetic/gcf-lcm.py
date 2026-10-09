# content: 7afdf54aabb0
# gcf-lcm: GCF, LCM & the Euclidean Algorithm

def _euclid(a, b):
    """The page's division lines a = b*q + r, larger first, until r = 0."""
    out = []
    a, b = max(a, b), min(a, b)
    while b:
        q, r = divmod(a, b)
        out.append((a, b, q, r))
        a, b = b, r
    return out

def _mults(n, upto):
    return [n * k for k in range(1, upto // n + 1)]

# formal: gcd * lcm = ab; Bezout
check("formal", all(igcd(p, q) * ilcm(p, q) == p * q for p in range(1, 30) for q in range(1, 30)), "gcd·lcm = ab")
_u, _v, _g = gcdex(1071, 462)
check("formal", 1071 * _u + 462 * _v == _g == 21, "Bezout")

# example = the walk's situation: buses every 24 and 18 minutes from 7:00
same("example", _euclid(24, 18), [(24, 18, 1, 6), (18, 6, 3, 0)])
same("example", igcd(24, 18), 6)
same("example", 24 * 18, 432)
same("example", Rational(432, 6), 72)
same("example", ilcm(24, 18), 72)
same("example", 7 * 60 + 72, 8 * 60 + 12)
same("example", divmod(72, 60), (1, 12))

# concept.walk: lists, trap, fix, predicts, demo points
same("concept.walk lists", _mults(24, 96), [24, 48, 72, 96])
same("concept.walk lists", _mults(18, 72), [18, 36, 54, 72])
same("concept.walk first shared", min(set(_mults(24, 500)) & set(_mults(18, 500))), 72)
same("concept.walk 8:12", 7 * 60 + 72, 8 * 60 + 12)
same("concept.walk trap", 24 * 18, 432)
check("concept.walk trap", 432 % 24 == 0 and 432 % 18 == 0 and 432 > 72, "432 is a shared time but not the first")
check("concept.walk trap", 432 - 7 * 60 > 0 and 432 // 60 == 7, "432 minutes is over 7 hours")
same("concept.walk euclid", _euclid(24, 18), [(24, 18, 1, 6), (18, 6, 3, 0)])
same("concept.walk sixes", (24 // 6, 18 // 6, 4 * 3 * 6), (4, 3, 72))
same("concept.walk fix", 432 // igcd(24, 18), 72)
same("concept.walk predict[1]", 54 + 18, 72)
check("concept.walk predict[2]", 48 % 18 != 0 and 6 < 18 and igcd(24, 18) == 6, "48 not on B's list; 6 before the first bus")
check("concept.walk predict[3]", 42 % 24 != 0 and 42 % 18 != 0 and (432 // 24, 432 // 18) == (18, 24), "42 on neither list; 432 = 18 trips of A, 24 of B")
same("concept.walk predict[4]", 24 - 18, 6)
same("concept.walk predict[5]", Rational(432, 6), 72)
same("concept.walk predict[5] hint", (420 // 6, 12 // 6), (70, 2))
same("concept.walk demo", sorted({24, 48, 72} | {18, 36, 54, 72}), [18, 24, 36, 48, 54, 72])

# layers.concept: idea cards, stakes
same("layers.concept", (24 // 6, 18 // 6, 24 % 6, 18 % 6), (4, 3, 0, 0))
same("layers.concept", ilcm(6, 8), 24)
same("layers.concept", (_mults(6, 24), _mults(8, 24)), ([6, 12, 18, 24], [8, 16, 24]))
same("layers.concept", _euclid(48, 18)[0], (48, 18, 2, 12))
same("layers.concept", 18 + 18 + 12, 48)
same("layers.concept", 6 * 8, 48)
check("layers.concept", 24 % 3 == 0 and 18 % 3 == 0 and igcd(24, 18) == 6 > 3, "3 is common, 6 is greatest")
check("layers.concept", igcd(6, 8) == 2 and 24 > 6, "GCF of 6, 8 is 2, not 24")
same("layers.concept", divmod(18, 6), (3, 0))
# lab start values shown on figures (a = 48, b = 18)
same("layers.concept", (igcd(48, 18), ilcm(48, 18)), (6, 144))

# layers.history / timeline
same("layers.history", ilcm(260, 365), 18980)
same("layers.history", 52 * 365, 18980)
same("layers.history", 73 * 260, 18980)

# layers.examples
same("layers.examples", _euclid(1071, 462), [(1071, 462, 2, 147), (462, 147, 3, 21), (147, 21, 7, 0)])
same("layers.examples", igcd(1071, 462), 21)
same("layers.examples", (1071 // 21, 462 // 21, 51 * 22), (51, 22, 1122))
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

# build: stepWhy, step goals (reachable with a, b in 1..60; no chip leaves these values)
same("layers.stepWhy", 18 // 6 * 24, 72)
_chips = [(36, 24), (8, 6), (48, 18), (20, 12), (10, 8), (4, 3), (40, 15), (54, 24), (56, 21), (35, 12), (15, 10),
          (50, 15), (57, 21), (24, 20), (6, 4), (60, 42), (12, 9)]
_chipg = {igcd(p, q) for p, q in _chips} | {6}
_chipl = {ilcm(p, q) for p, q in _chips} | {72}
same("build.stepGoal[1]", _euclid(39, 13), [(39, 13, 3, 0)])
same("build.stepGoal[1]", igcd(39, 13), 13)
check("build.stepGoal[1]", 1 <= 39 <= 60 and 13 not in _chipg, "13 reachable and no chip shows gcf 13")
same("build.stepGoal[3]", _euclid(51, 34), [(51, 34, 1, 17), (34, 17, 2, 0)])
same("build.stepGoal[3]", igcd(51, 34), 17)
check("build.stepGoal[3]", 1 <= 51 <= 60 and 17 not in _chipg, "17 reachable and no chip shows gcf 17")
same("build.stepGoal[4]", igcd(60, 45), 15)
same("build.stepGoal[4]", (60 // 15, 4 * 45), (4, 180))
same("build.stepGoal[4]", ilcm(60, 45), 180)
check("build.stepGoal[4]", 1 <= 60 <= 60 and 180 not in _chipl, "180 reachable and no chip shows lcm 180")

# build.tasks[0]: 20/24
same("build.tasks[0].lines", _euclid(24, 20), [(24, 20, 1, 4), (20, 4, 5, 0)])
same("build.tasks[0].check", (20 // igcd(24, 20), 24 // igcd(24, 20)), (5, 6))
same("build.tasks[0].check", Rational(20, 24), Rational(5, 6))
same("build.tasks[0].predict", 20 % 4, 0)
same("build.tasks[0].lines", Rational(10, 12), Rational(20, 24))
same("build.tasks[0].demo", (5 * 4, 6 * 4), (20, 24))
same("build.tasks[0].lines", igcd(5, 6), 1)
# build.tasks[1]: water every 4, feed every 6
same("build.tasks[1].check", ilcm(4, 6), 12)
same("build.tasks[1].lines", (_mults(4, 16), _mults(6, 18)), ([4, 8, 12, 16], [6, 12, 18]))
same("build.tasks[1].predict", 6 + 6, 12)
check("build.tasks[1].link", 4 * 6 == 24 and 24 % 4 == 0 and 24 % 6 == 0 and 24 > 12, "24 shared but not first")
# build.tasks[2]: boards 60 and 42
same("build.tasks[2].lines", _euclid(60, 42), [(60, 42, 1, 18), (42, 18, 2, 6), (18, 6, 3, 0)])
same("build.tasks[2].check", igcd(60, 42), 6)
same("build.tasks[2].check", (60 // 6, 42 // 6, 60 // 6 + 42 // 6), (10, 7, 17))
same("build.tasks[2].predict", (18 * 2, 42 - 36), (36, 6))
same("build.tasks[2].demo", 42 + 18, 60)
# build.tasks[3]: packs of 9 and 12
same("build.tasks[3].lines", _euclid(12, 9), [(12, 9, 1, 3), (9, 3, 3, 0)])
same("build.tasks[3].lines", 12 * 9, 108)
same("build.tasks[3].predict", Rational(108, 3), 36)
same("build.tasks[3].predict", (99 // 3, 9 // 3), (33, 3))
same("build.tasks[3].check", ilcm(12, 9), 36)
same("build.tasks[3].check", (36 // 9, 36 // 12), (4, 3))
same("build.tasks[3].demo", [9 * r for r in range(1, 5)], [9, 18, 27, 36])

# layers.setup: the buses, textbook form
same("layers.setup", [igcd(24, 18), igcd(18, 6), igcd(6, 0)], [6, 6, 6])
same("layers.setup", divmod(24, 18), (1, 6))
same("layers.setup", 24 * 18 // 6, 72)
same("layers.setup", (factorint(24), factorint(18)), ({2: 3, 3: 1}, {2: 1, 3: 2}))
same("layers.setup", (2**3 * 3**2, 2 * 3), (72, 6))
same("layers.setup", ilcm(24, 18), 72)
same("layers.setup", 7 * 60 + 72, 8 * 60 + 12)
same("layers.formal", [dd for dd in divisors(24) if 18 % dd == 0], [1, 2, 3, 6])

# practice[0]
same("practice[0]", igcd(12, 18), 6)
same("practice[0]", [dd for dd in divisors(12) if 18 % dd == 0], [1, 2, 3, 6])
same("practice[0]", (12 // 6, 18 // 6), (2, 3))
# practice[1]
same("practice[1]", ilcm(6, 8), 24)
same("practice[1]", igcd(6, 8), 2)
same("practice[1]", 6 * 8, 48)
same("practice[1]", (24 // 6, 24 // 8), (4, 3))
# practice[2]: runners 9 and 15 minutes
same("practice[2]", _euclid(15, 9), [(15, 9, 1, 6), (9, 6, 1, 3), (6, 3, 2, 0)])
same("practice[2]", igcd(9, 15), 3)
same("practice[2]", 9 * 15, 135)
same("practice[2]", ilcm(9, 15), 45)
# practice[3]
same("practice[3]", _euclid(252, 198), [(252, 198, 1, 54), (198, 54, 3, 36), (54, 36, 1, 18), (36, 18, 2, 0)])
same("practice[3]", igcd(252, 198), 18)
same("practice[3]", ilcm(252, 198), 2772)
same("practice[3]", 252 * 198 // 18, 2772)
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
same("mistakes", (6 * 4, 6 * 3), (24, 18))
