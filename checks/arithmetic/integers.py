# content: 4233a2f8e7ac
# integers: Integers & Negative Numbers
same("formal", -3 - 5, -3 + (-5))
same("formal", (-3)*(-4), 12)
check("formal", Rational(1, 2).is_integer is False, "1/2 should not be an integer")
# example: -8 +15 -11
noon = -8 + 15
same("example", noon, 7)
same("example", noon - 11, -4)
same("practice[0]", -5 + 9, 4)
same("practice[1]", 3 - 10, -7)
same("practice[2]", -6 - (-14), 8)
same("practice[3]", (-4)*(-7), 28)
same("practice[3]", (-3)*5, -15)
same("practice[3]", (-4)*(-7) - (-3)*5, 43)

# plain / why (rewritten)
same("plain", 40 - 65, -25); same("plain", abs(-25), 25); same("plain", 4*(-3), -12); same("plain", 25 + (-25), 0)
same("why", 4 - (-9), 13); same("why", 13 - 9, 4)

# practice[4]: x - 65 = -25
same("practice[4]", solve(Eq(a - 65, -25), a), [40]); same("practice[4]", -25 + 65, 40)
# practice[3] intermediate
same("practice[3]", 28 - (-15), 28 + 15)

# mistakes (added)
same("mistakes", -9 - 4, -13)

# layers (concept examples, formal setup, build tasks)
same("layers.examples", 12000 - 4500 - 2000 + 7500, 13000)
same("layers.examples", -9 - 4, -13)
same("layers.examples", -5 - (-18), 13); same("layers.examples", -5 + 18, 13)
same("layers.examples", 5 - (-5), 10)
same("layers.examples", 10000 + 800 + (-1200) + 650, 10250); same("layers.examples", 10250 - 10000, 250)
same("layers.examples", 6*(-800), -4800); same("layers.examples", 11000 - 4800, 6200)
same("layers.setup", -8 + 15 - 11, -4); same("layers.setup", -8 + 15 + (-11), -4)
same("layers.setup", -8 + 15, 7); same("layers.setup", 7 + (-11), -4)
same("layers.setup", -8 + (-11), -19); same("layers.setup", 15 + (-19), -4)
same("layers.build", 40 + (-65), -25); same("layers.build", -4 - 7, -11); same("layers.build", -2 + 1 - 3, -4)
same("layers.build", 3 - (-2), 5); same("layers.build", -120 + 200, 80); same("layers.build", 3 + 5, 8)
