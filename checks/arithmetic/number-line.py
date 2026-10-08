# content: 6e0ed168f3f6
# number-line: Comparing & the Number Line
check("example", 18 > 11, "18 > 11")
same("example", Abs(18 - 11), 7)
check("practice[0]", 406 < 460, "406 < 460")
same("practice[1]", Abs(91 - 38), 53)
check("practice[2]", sorted([1209, 1092, 1290, 1029]) == [1029, 1092, 1209, 1290], "order")
same("practice[3]", Rational(36 + 84, 2), 60)
check("practice[3]", 60 - 36 == 24 and 84 - 60 == 24, "equal distances 24")

# practice[0]: hundreds match, tens decide
check("practice[0]", (406 // 100) == (460 // 100) and (406 // 10) % 10 == 0 and (460 // 10) % 10 == 6, "tens 0 < 6")

# practice[4]: thermometer
same("practice[4]", 72 - 47, 25)
same("practice[4]", 47 + 25, 72)

# mistakes: distance has no direction
same("mistakes", 11 - 18, -7)
same("mistakes", Abs(11 - 18), 7)
same("mistakes", 7 - 3, 4)

# layers (concept examples, build tasks, formal setup): numbers stated on the page
check("layers.examples", 104 > 99 and 70 <= 99, "104 above range 70..99")
same("layers.examples", 104 - 99, 5)
check("layers.examples", 53 > 52, "53 > 52")
same("layers.examples", 53 - 52, 1)
same("layers.examples", 15 * 100 + 20, 1520)
same("layers.examples", 12 * 100 + 50, 1250)
same("layers.examples", 1520 - 1250, 270)
check("layers.examples", sorted([4870, 4780, 4807]) == [4780, 4807, 4870], "bid order")
same("layers.examples", 4807 - 4780, 27)
same("layers.examples", 35000 - 33000, 2000)
check("layers.examples", 2000 > 1000, "separation above minimum")
check("layers.steps", 1000 > 999 and 100 > 99 and 10 > 9, "step reasons")
check("layers.tasks", 1209 < 1290 and (1209 // 10) % 10 == 0 and (1290 // 10) % 10 == 9, "tens decide 0 < 9")
same("layers.tasks", 7 - 3, 4)
check("layers.tasks", 62 < 65, "62 < 65")
same("layers.tasks", 65 - 62, 3)
same("layers.tasks", 18 - 11, 7)
same("layers.setup", 11 + 7, 18)
same("layers.setup", [1*10 + 8, 1*10 + 1], [18, 11])
same("layers.setup", Abs(18 - 11), Abs(11 - 18))
same("layers.setup", Abs(18 - 11), 7)
