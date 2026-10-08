# content: fcb5c0db7e63
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

# layers (concept examples, formal setup, build tasks): numbers stated on the page
same("layers.examples", R(5, 10)*R(6022, 1000)*Integer(10)**23, R(3011, 1000)*Integer(10)**23)
ly = R(424, 100)*R(946, 100)*Integer(10)**15
c_ly, n_ly = sci(ly)
same("layers.examples", n_ly, 16)
check("layers.examples", abs(N(c_ly) - 4.01) < 0.005, "4.24 ly ≈ 4.01e16 m")
same("layers.examples", 24 / (R(1, 10)*Integer(10)**-6), R(24, 10)*Integer(10)**8)
same("layers.examples", 10*Integer(10)**3, Integer(10)**4)
same("layers.examples", 100*Integer(10)**-12, Integer(10)**-10)
same("layers.examples", Integer(10)**4 * Integer(10)**-10, Integer(10)**-6)
same("layers.examples", Integer(10)**200 * Integer(10)**200, Integer(10)**400)
dmax = (2 - Rational(1, 2**52)) * Integer(2)**1023
check("layers.examples", abs(N(dmax / (R(18, 10)*Integer(10)**308)) - 1) < 0.01, "double max ≈ 1.8e308")
same("layers.examples", 2*R(35, 10)*Integer(10)**-6, 7*Integer(10)**-6)
same("layers.examples", 7*Integer(10)**-6 * Integer(10)**6, 7)
same("layers.tasks", Integer(10)**12 / (5*Integer(10)**6), R(2, 10)*Integer(10)**6)
same("layers.tasks", sci(Integer(10)**12 / (5*Integer(10)**6)), (2, 5))
same("layers.tasks", sci(250), (R(25, 10), 2))
same("layers.tasks", R(250, 1000), R(25, 10)*Integer(10)**-1)
same("layers.setup", sci(R(4987, 10000)*Integer(10)**3), (R(4987, 1000), 2))
check("layers.setup", abs(N(R(1496, 1000)/3) - 0.4987) < 0.00005, "1.496/3 ≈ 0.4987")
same("layers.setup", 11 - 8, 3)
check("layers.setup", abs(499/60 - 8.3) < 0.05, "499/60 ≈ 8.3")
