# content: cd30271c1f17
# sci-notation: Scientific Notation
R = Rational
def sci(v):
    v = nsimplify(v)
    n = floor(log(abs(v), 10))
    return v / Integer(10)**n, n

# example
t_ = R(1496, 1000) * 10**11 / (R(300, 100) * 10**8)
check("example", abs(N(R(1496, 1000)/3) - 0.4987) < 0.00005, "1.496/3 ≈ 0.4987")
same("example", 11 - 8, 3)
c_, n_ = sci(t_)
same("example", n_, 2)
check("example", abs(N(c_) - 4.99) < 0.005, "coefficient ≈ 4.99 (3 s.f.)")
check("example", abs(N(t_/60) - 8.3) < 0.05, "≈ 8.3 min")
check("example", abs(499/60 - 8.3) < 0.05, "499/60 ≈ 8.3")
check("example", 8 < t_/60 < 9, "a little over 8 minutes")

# practice[0]
same("practice[0]", sci(45000000), (R(45, 10), 7))
# practice[1]
same("practice[1]", sci(R(32, 100000)), (R(32, 10), -4))
# practice[2]
p = 3*Integer(10)**5 * 4*Integer(10)**-2
same("practice[2]", p, 12*10**3)
same("practice[2]", sci(p), (R(12, 10), 4))
# practice[3]
q = R(63, 10)*Integer(10)**8 / (9*Integer(10)**3)
same("practice[3]", q, R(7, 10)*10**5)
same("practice[3]", sci(q), (7, 4))

# practice[4]: 2.0e3 light-years in metres
d_ = R(20, 10)*Integer(10)**3 * R(946, 100)*Integer(10)**15
same("practice[4]", R(2)*R(946, 100), R(1892, 100))
same("practice[4]", d_, R(1892, 100)*Integer(10)**18)
same("practice[4]", sci(d_), (R(1892, 1000), 19))
check("practice[4]", abs(N(d_/Integer(10)**19) - 1.9) < 0.05, "≈ 1.9e19 (2 s.f.)")
same("practice[3]", 7*10**4, 70000)

# mistakes
same("mistakes", sci(149600000000), (R(1496, 1000), 11))
same("mistakes", sci(45*Integer(10)**6), (R(45, 10), 7))
same("mistakes", sci(R(32, 100000)), (R(32, 10), -4))
same("mistakes", 5 + (-2), 3)
same("mistakes", 3*10*Integer(10)**8, 3*Integer(10)**9)

# layers.examples (Concept tiles)
same("layers.examples", R(5, 10)*R(6022, 1000)*Integer(10)**23, R(3011, 1000)*Integer(10)**23)
ly = R(424, 100)*R(946, 100)*Integer(10)**15
c_ly, n_ly = sci(ly)
same("layers.examples", n_ly, 16)
check("layers.examples", abs(N(c_ly) - 4.01) < 0.005, "4.24 ly ~ 4.01e16 m")
check("layers.examples", abs(N(R(946, 100)*Integer(10)**15 / 9.4607304725808e15) - 1) < 0.001, "1 ly ~ 9.46e15 m")
same("layers.examples", 24 / (R(1, 10)*Integer(10)**-6), R(24, 10)*Integer(10)**8)
same("layers.examples", 10*Integer(10)**3, Integer(10)**4)
same("layers.examples", 100*Integer(10)**-12, Integer(10)**-10)
same("layers.examples", Integer(10)**4 * Integer(10)**-10, Integer(10)**-6)
same("layers.examples", Integer(10)**200 * Integer(10)**200, Integer(10)**400)
dmax = (2 - Rational(1, 2**52)) * Integer(2)**1023
check("layers.examples", abs(N(dmax / (R(18, 10)*Integer(10)**308)) - 1) < 0.01, "double max ~ 1.8e308")
same("layers.examples", 2*R(35, 10)*Integer(10)**-6, 7*Integer(10)**-6)
same("layers.examples", 7*Integer(10)**-6 * Integer(10)**6, 7)

# layers.setup (Formal write-up: sunlight time)
same("layers.setup", sci(149600000000), (R(1496, 1000), 11))
same("layers.setup", sci(R(4987, 10000)*Integer(10)**3), (R(4987, 1000), 2))
check("layers.setup", abs(N(R(1496, 1000)/3) - 0.4987) < 0.00005, "1.496/3 ~ 0.4987")
same("layers.setup", 11 - 8, 3)
check("layers.setup", abs(N(t_) - 499) < 0.5, "t ~ 499 s")
check("layers.setup", abs(499/60 - 8.3) < 0.05, "499/60 ~ 8.3")

# layers.concept (ideas, stakes, timeline numbers)
same("layers.concept", sci(R(25, 1)), (R(25, 10), 1))            # blue whale 25 m: coefficient 2.5
check("layers.concept", 1 <= R(25, 10) < 10, "2.5 between 1 and 10")
same("layers.concept", sci(8849), (R(8849, 1000), 3))             # Everest
same("layers.concept", sci(R(5, 10000)), (5, -4))                  # grain of sand
same("layers.concept", sci(R(1496, 1000)*Integer(10)**8), (R(1496, 1000), 8))
same("layers.concept", R(1496, 1000)*Integer(10)**8, 149600000)
same("layers.concept", Integer(10)**3, 1000)                       # micro vs milli
same("layers.concept", 9 - 6, 3)                                   # billions vs millions
same("layers.concept", 10**4 * 10**4, 10**8)                       # myriad myriad
check("layers.concept", N(log(R(25, 1), 10)) > 1 and N(log(8849, 10)) < 4, "lab objects in range")

# concept.walk: 149,600,000,000 m, Sun distance
D = 149600000000
same("concept.walk", len(str(D)), 12)
same("concept.walk", str(D).count("0"), 8)
same("concept.walk predict[2] places", len(str(D)) - 1, 11)
same("concept.walk", sci(D), (R(1496, 1000), 11))
same("concept.walk demo", sum([1]*11), 11)
same("concept.walk trap", R(1496, 1000)*Integer(10)**8, 149600000)
same("concept.walk trap", D / (R(1496, 1000)*Integer(10)**8), 1000)
check("concept.walk trap", R(1496, 1000)*Integer(10)**8 < R(1, 2)*384400000, "1.496e8 m is less than halfway to the Moon (3.844e8 m)")
same("concept.walk fix", R(1496, 1000)*Integer(10)**11, D)
same("concept.walk predict[5]", len(str(10**11)) - 1, 11)
check("concept.walk predict[1]", not (1 <= R(1496, 100) < 10) and not (1 <= R(1496, 10000) < 10) and 1 <= R(1496, 1000) < 10, "only 1.496 is a valid coefficient")

# build.stepGoal: targets and reachability (lab range -15..27, exp = floor(log10 x))
def lab_exp(x): return floor(log(nsimplify(x), 10))
same("build.stepGoal[1]", sci(R(2, 1000000)), (2, -6))
same("build.stepGoal[1]", lab_exp(R(2, 1000000)), -6)
p1 = 5*Integer(10)**3 * 1*Integer(10)**-4
same("build.stepGoal[2]", p1, R(5, 10))
same("build.stepGoal[2]", 3 + (-4), -1)
same("build.stepGoal[2]", lab_exp(R(5, 10)), -1)
p2 = 3*Integer(10)**1 * 4*Integer(10)**2
same("build.stepGoal[3]", p2, 12*Integer(10)**3)
same("build.stepGoal[3]", 30*400, 12000)
same("build.stepGoal[3]", sci(p2), (R(12, 10), 4))
same("build.stepGoal[3]", lab_exp(12000), 4)
for g in (-6, -1, 4):
    check("build.stepGoal[1]", -15 <= g <= 26, "goal in lab range")
# no chip on the page lands on a goal exponent: jump objects used (whale, Everest, sand, Moon, light-year, H atom, Earth, Earth-Sun)
objs = {9: 25, 11: 8849, 6: R(5, 10000), 13: 384400000, 16: R(9461, 1000)*Integer(10)**15, 1: R(106, 1000)*Integer(10)**-9, 12: 12742000, 15: 149600000000}
chip_exps = {int(lab_exp(v)) for v in objs.values()}
check("build.stepGoal[2]", chip_exps.isdisjoint({-6, -1, 4, 0}), "chips never land on a goal exponent")

# build.tasks
same("build.tasks[0]", R(25, 10)*Integer(10)**6, 2500000)
same("build.tasks[0].lines", sci(2500000), (R(25, 10), 6))
same("build.tasks[0].demo", sum([1]*6), 6)
same("build.tasks[1]", 12 - 4, 8)
same("build.tasks[1].lines", Integer(10)**8, 100000000)
same("build.tasks[1].lines", R(68, 10)*Integer(10)**12 / (R(68, 10)*Integer(10)**4), Integer(10)**8)
photos = Integer(10)**12 / (5*Integer(10)**6)
same("build.tasks[2]", photos, 200000)
same("build.tasks[2].lines", (R(1, 5), 12 - 6), (R(2, 10), 6))
same("build.tasks[2].lines", sci(photos), (2, 5))
same("build.tasks[3]", R(250, 1000), R(25, 100))
same("build.tasks[3].lines", sci(250), (R(25, 10), 2))
same("build.tasks[3].lines", 2 - 3, -1)
same("build.tasks[3].lines", R(25, 10)*Integer(10)**-1, R(25, 100))
same("build.tasks[3].demo", 2 + (-3), -1)
moon = R(384, 100)*Integer(10)**8 / (R(30, 10)*Integer(10)**8)
same("build.tasks[4]", moon, R(128, 100))
same("build.tasks[4].lines", 8 - 8, 0)
same("build.tasks[4].demo", R(30, 10) + R(84, 100), R(384, 100))
check("build.tasks[4]", abs(N(3.844e8/2.998e8) - 1.28) < 0.01, "real light time to Moon ~ 1.28 s")
