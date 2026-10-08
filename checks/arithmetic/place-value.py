# content: 8a277d990e1a
# place-value: Place Value & Base Ten
check("example", [int(ch) for ch in "4306"] == [4, 3, 0, 6], "digits")
same("example", 4*1000 + 3*100 + 0*10 + 6*1, 4306)
check("example", (4306 // 10) % 10 == 0, "tens digit is 0")
check("practice[0]", (3782 // 100) % 10 == 7, "7 is in hundreds place")
same("practice[0]", 7*100, 700)
same("practice[1]", 5*1000 + 0*100 + 4*10 + 9*1, 5049)
check("practice[1]", [int(ch) for ch in "5049"] == [5, 0, 4, 9], "digits of 5049")
same("practice[2]", 3*1000 + 14*100 + 2*10 + 5, 4425)
same("practice[3]", 4560 // 10, 456)
check("practice[3]", 4560 % 10 == 0, "exact number of tens")

# practice[1] words, practice[3] none left, practice[4]
same("practice[3]", 4560 % 10, 0)
same("practice[4]", 6*1000 + 0*100 + 9*10 + 3*1, 6093)
same("practice[4]", 6000 + 0 + 90 + 3, 6093)

# mistakes / why: extra zero is tenfold
same("mistakes", 10 * 1250, 12500)
same("why", Rational(5, 1) / Rational(1, 2), 10)

# layers (concept examples, build tasks, formal setup): numbers stated on the page
same("layers.examples", Rational(5) / Rational(5, 10), 10)
same("layers.examples", 12500 - 1250, 11250)
same("layers.examples", Rational(11250, 9), 1250)
same("layers.examples", int("1011", 2), 11)
same("layers.examples", 8 + 0 + 2 + 1, 11)
same("layers.examples", int("FF", 16), 255)
same("layers.examples", 15 * 16 + 15, 255)
same("layers.examples", 1*1000 + 0*100 + 4*10 + 5, 1045)
same("layers.examples", Rational(1240 - 1237, 1000), Rational(3, 1000))
same("layers.examples", Rational(1) + Rational(2, 10) + Rational(3, 100) + Rational(7, 1000), Rational(1237, 1000))
same("layers.tasks", 10 * 129, 1290)
same("layers.tasks", 300 + 14 * 10 + 2, 442)
same("layers.tasks", 49980 + 20, 50000)
check("layers.tasks", 389000 < 398000 and (389000 // 10000) % 10 == 8 and (398000 // 10000) % 10 == 9, "ten-thousands digit decides")
check("layers.setup", [(4306 // 10**i) % 10 for i in range(4)] == [6, 0, 3, 4], "d0..d3 of 4306")
same("layers.setup", [10**i for i in range(4)], [1, 10, 100, 1000])
same("layers.setup", sum(((4306 // 10**i) % 10) * 10**i for i in range(4)), 4306)
same("layers.setup", 4*10**3 + 3*10**2 + 0*10 + 6, 4306)
