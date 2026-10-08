# content: a30a508d6f91
# subtraction: Subtraction
check("formal", (5 - 3) != (3 - 5) and (10 - 4) - 3 != 10 - (4 - 3), "not commutative/associative")

# example: 603 - 248
check("example", 5*100 + 9*10 + 13 == 603, "regrouped 5 9 13 = 603")
same("example", 13 - 8, 5); same("example", 9 - 4, 5); same("example", 5 - 2, 3)
same("example", 603 - 248, 355)
same("example", 355 + 248, 603)
# practice[0]
check("practice[0]", 7*10 + 12 == 82, "regroup 82")
same("practice[0]", 12 - 7, 5); same("practice[0]", 7 - 3, 4)
same("practice[0]", 82 - 37, 45); same("practice[0]", 45 + 37, 82)
# practice[1]
check("practice[1]", 6*100 + 9*10 + 10 == 700, "regroup 700")
same("practice[1]", 10 - 4, 6); same("practice[1]", 9 - 6, 3); same("practice[1]", 6 - 2, 4)
same("practice[1]", 700 - 264, 436)
# practice[2]
check("practice[2]", 4*1000 + 9*100 + 9*10 + 13 == 5003, "regroup 5003")
same("practice[2]", 13 - 7, 6); same("practice[2]", 9 - 4, 5); same("practice[2]", 9 - 8, 1); same("practice[2]", 4 - 1, 3)
same("practice[2]", 5003 - 1847, 3156); same("practice[2]", 3156 + 1847, 5003)
# practice[3]
same("practice[3]", 3000 - 1762, 1238); same("practice[3]", 1238 + 1762, 3000)
# practice[4]: budget
same("practice[4]", 2400 - 1875, 525); same("practice[4]", 525 + 1875, 2400)

# layers (concept examples, build tasks, formal setup): numbers stated on the page
same("layers.examples", 85 - 27, 58); same("layers.examples", 15 - 7, 8); same("layers.examples", 58 + 27, 85)
same("layers.examples", Rational(35, 100) + 7 + 10, Rational(1735, 100))
same("layers.examples", 50 - Rational(3265, 100), Rational(1735, 100))
check("layers.examples", Rational(3265, 100) + Rational(35, 100) == 33 and 33 + 7 == 40 and 40 + 10 == 50, "count-up steps")
same("layers.examples", 240 - 90 - 60, 90)
same("layers.examples", 84500 - 67850, 16650)
same("layers.examples", 6200 - 4750, 1450); same("layers.examples", 1450 - 1200, 250)
same("layers.examples", Rational(2540, 100) - 25, Rational(40, 100))
same("layers.examples", 21 - (-4), 25)
same("layers.examples", 2000 - 1365, 635); same("layers.examples", 635 + 1365, 2000)
same("layers.examples", (8*60 + 15) - (7*60 + 48), 27); same("layers.examples", 75 - 48, 27)
same("layers.examples", 603 - 248, 355)
same("layers.examples", 2026 - 1987, 39)
check("layers.examples", 7*10 + 12 == 82, "7 tens 12 ones is 82")
same("layers.setup", 6*10**2 + 0*10 + 3, 603); same("layers.setup", 5*10**2 + 9*10 + 13, 603)
same("layers.setup", (5 - 2)*10**2 + (9 - 4)*10 + (13 - 8), 355)
same("layers.setup", 355 + 248, 603)
