# content: d76ea25fe654
# properties: Laws of Arithmetic
same("formal", a*(b + c), a*b + a*c)
same("example", 8*(50 - 1), 8*50 - 8*1)
same("example", 8*50 - 8, 392)
same("example", 8*49, 392)
check("practice[0]", 5 + (3 + 9) == (5 + 3) + 9, "associative example holds")
skip("practice[0]", "naming the law (associative) is vocabulary; numeric identity checked above")
same("practice[1]", 6*10 + 6*4, 84); same("practice[1]", 6*14, 84)
same("practice[2]", (25*4)*17, 1700); same("practice[2]", 25*17*4, 1700)
same("practice[3]", 8*100 - 8*3, 776); same("practice[3]", 8*97, 776)

# plain / why (rewritten)
same("plain", (18 + 7) + 3, 18 + (7 + 3)); same("plain", 18 + 7 + 3, 28)
same("plain", 6*10 + 6*4, 84); same("plain", 4 - 10, -6)
same("why", 600 - 6, 594); same("why", 6*99, 594)

# practice (reworded) and practice[4]
same("practice[0]", 5 + (3 + 9), 17); same("practice[0]", (5 + 3) + 9, 17)
same("practice[4]", 7*11 + 7*3, 98); same("practice[4]", 7*(11 + 3), 98); same("practice[4]", 7*14, 98)

# mistakes (added): division does not distribute over a sum in the divisor
same("mistakes", Rational(100, 4 + 1), 20); same("mistakes", Rational(100, 4) + Rational(100, 1), 125)
same("mistakes", Rational(100 + 20, 4), 30); same("mistakes", Rational(100, 4) + Rational(20, 4), 30)

# layers (concept examples, formal setup)
same("layers.examples", (25 + 75) + 17, 117); same("layers.examples", 25 + 17 + 75, 117)
same("layers.examples", 2150 + 1980, 4130); same("layers.examples", 2430 + 1840, 4270)
same("layers.examples", 4130 + 4270, 8400); same("layers.examples", 2150 + 1980 + 2430 + 1840, 8400)
same("layers.examples", 4*12 + 4*9, 84); same("layers.examples", 4*(12 + 9), 84); same("layers.examples", 4*12, 48); same("layers.examples", 4*9, 36)
same("layers.examples", Rational(8, 100)*40, Rational(320, 100)); same("layers.examples", Rational(8, 100)*35, Rational(280, 100)); same("layers.examples", Rational(8, 100)*25, 2)
same("layers.examples", Rational(320 + 280 + 200, 100), 8); same("layers.examples", Rational(8, 100)*(40 + 35 + 25), 8)
same("layers.examples", Rational(2, 100)*(350000 + 150000), 10000); same("layers.examples", Rational(2, 100)*350000 + Rational(2, 100)*150000, 10000)
same("layers.setup", 50 - 1, 49)
same("layers.setup", (25*17)*4, 1700); same("layers.setup", 25*(17*4), 1700); same("layers.setup", 25*(4*17), 1700); same("layers.setup", (25*4)*17, 1700)
same("layers.setup", a*(b - c), a*b - a*c)
same("layers.setup", 8*50 - 8*1, 392); same("layers.setup", 8*49, 392)
same("layers.build", 25*4, 100); same("layers.build", 100 - 2, 98)
