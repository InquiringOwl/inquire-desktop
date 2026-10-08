# content: 1c98f8ff1337
# percent-apps: Percent Change, Tax & Interest
P, r_ = 2000, Rational(5, 100)
same("example", P*r_*3, 300)
same("example", P*(1 + r_*3), 2300)
same("example", (1 + r_)**3, 1.157625)
same("example", P*(1 + r_)**3, 2315.25)
same("example", P*(1 + r_)**3 - P*(1 + r_*3), 15.25)
same("practice[0]", Rational(46 - 40, 40), Rational(15, 100))
same("practice[1]", 68*Rational(1075, 1000), 73.10)
same("practice[2]", 1200*Rational(4, 100)*5, 240)
same("practice[2]", 1200 + 1200*Rational(4, 100)*5, 1440)
bal = 5000*(1 + Rational(6, 100)/12)**24
check("practice[3]", abs(bal.evalf() - 5635.80) < 0.005, f"balance {bal.evalf()}")

# plain / why numbers
same("plain", 80*Rational(70, 100), 56)
same("plain", 56*Rational(108, 100), Rational(6048, 100))
same("plain", Rational(1260 - 1200, 1200), Rational(5, 100))
same("why", Rational(80, 100)**2, Rational(64, 100))
check("why", Rational(107, 100)**30 > 7, "1.07^30 > 7")

# practice[4]: 1.08 p = 27
solves("practice[4]", Eq(Rational(108, 100)*x, 27), x, {25})

# layers (concept examples, formal setup)
same("layers.examples", 10000*Rational(7, 100)*3, 2100)
same("layers.examples", 10000*Rational(107, 100)**3, Rational(1225043, 100))
same("layers.examples", 10000*Rational(107, 100)**3 - 10000, Rational(225043, 100))
check("layers.examples", round(float(10000*Rational(107, 100)**30)) == 76123, "1.07^30 * 10000 ~ 76123")
same("layers.examples", 40*Rational(150, 100), 60)
same("layers.examples", 60*Rational(75, 100), 45)
same("layers.examples", 45 - 40, 5)
same("layers.examples", 250*Rational(65, 1000), Rational(1625, 100))
same("layers.examples", 250 + Rational(1625, 100), Rational(26625, 100))
check("layers.examples", abs(float(10000/Rational(104, 100)**5) - 8219.27) < 0.005, "PV 8219.27")
same("layers.examples", Rational(260 - 250, 250), Rational(4, 100))
same("layers.setup", 2000*Rational(105, 100), 2100)
same("layers.setup", 2100*Rational(105, 100), 2205)
same("layers.setup", 2205*Rational(105, 100), Rational(231525, 100))
same("layers.setup", Rational(231525, 100) / 2000 - 1, Rational(157625, 1000000))
same("layers.setup", 2000*Rational(105, 100)**3 - 2000*(1 + Rational(5, 100)*3), Rational(1525, 100))
