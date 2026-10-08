# content: 386fce3f610c
# rounding: Rounding & Estimation
def rhu(v, u):
    L = (v // u) * u
    return L if v < L + Rational(u, 2) else L + u
def rhe(v, u):
    return int(round(Rational(v, u))) * u   # python round() on Rational: half to even
check("formal", rhe(4350, 100) == 4400 and rhe(4250, 100) == 4200, "banker's examples")
check("formal", all(abs(rhu(v, 100) - v) <= 50 for v in range(0, 2000)), "error ≤ u/2")

# example
same("example", rhu(387, 100), 400)
same("example", rhu(214, 100), 200)
same("example", rhu(529, 100), 500)
same("example", 400 + 200 + 500, 1100)
same("example", 387 + 214 + 529, 1130)
same("example", 1130 - 1100, 30)
# practice
same("practice[0]", rhu(67, 10), 70)
same("practice[1]", rhu(4351, 100), 4400)
same("practice[2]", rhu(2450, 100), 2500)
same("practice[2]", rhe(2450, 100), 2400)
same("practice[3]", rhu(612, 100) + rhu(287, 100) + rhu(405, 100), 1300)
same("practice[3]", 612 + 287 + 405, 1304)

# practice[4]: road trip 187, 242, 316
same("practice[4]", rhu(187, 100) + rhu(242, 100) + rhu(316, 100), 700)
same("practice[4]", 187 + 242 + 316, 745)
same("practice[4]", 745 - 700, 45)

# layers (concept examples, formal setup, history): numbers stated on the page
same("layers.examples", rhu(Rational(5840, 100), 10), 60)
same("layers.examples", Rational(10, 100) * 60, 6)
same("layers.examples", 2 * 6, 12)
same("layers.examples", Rational(20, 100) * Rational(5840, 100), Rational(1168, 100))
same("layers.examples", 40 * 24, 960)
check("layers.examples", rhu(38, 10) == 40 and 24 > Rational(2375, 100) and 40 > 38, "38 -> 40, 23.75 -> 24, both up")
same("layers.examples", 38 * Rational(2375, 100), Rational(90250, 100))
same("layers.examples", rhu(2847300000, 100000000), 2800000000)
check("layers.examples", (2847300000 // 10000000) % 10 == 4, "deciding digit 4")
same("layers.examples", rhu(736, 10), 740)
same("layers.examples", rhu(2345, 10), 2350)
same("layers.examples", rhe(2345, 10), 2340)
same("layers.examples", rhu(1999, 100), 2000)
same("layers.examples", rhu(287, 100), 300)
same("layers.examples", Rational(300, 60), 5)
same("layers.examples", rhu(4372, 100), 4400)
check("layers.examples", (4372 // 10) % 10 == 7, "tens digit of 4372 is 7")
check("layers.examples", Rational(223, 71) < pi < Rational(22, 7), "Archimedes' bounds")
same("layers.examples", 3 + Rational(10, 71), Rational(223, 71))
same("layers.examples", round(float(Rational(223, 71)), 4), 3.1408)
same("layers.examples", round(float(Rational(22, 7)), 4), 3.1429)
check("layers.examples", 1098.892 - 524.811 > 500, "VSE correction size")
same("layers.setup", (387 // 100) * 100, 300)
same("layers.setup", 300 + 50, 350)
check("layers.setup", 387 >= 350, "387 past halfway")
same("layers.setup", rhu(387, 100) + rhu(214, 100) + rhu(529, 100), 1100)
same("layers.setup", 3 * 50, 150)
same("layers.setup", abs(1100 - 1130), 30)
check("layers.setup", all(abs(sum(rhu(v, 100) for v in t) - sum(t)) <= 150 for t in [(387, 214, 529), (350, 350, 350), (349, 349, 349)]), "n*u/2 bound")
