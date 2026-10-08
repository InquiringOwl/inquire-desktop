# content: 2f19b104782c
# proportions: Proportions
R = Rational
# formal: cross-product property on a sample
check("formal", (R(3, 5) == R(24, 40)) and 3*40 == 5*24, "cross products")

# example: 9 gal / 252 mi = x / 420
same("example", 9*420, 3780)
solves("example", Eq(R(9, 252), x/420), x, {15})
same("example", R(3780, 252), 15)
same("example", R(252, 9), 28)
same("example", R(420, 15), 28)

# practice[0]: 3/5 = x/40
same("practice[0]", 3*40, 120)
solves("practice[0]", Eq(R(3, 5), x/40), x, {24})
# practice[1]: 7/x = 21/12
same("practice[1]", 7*12, 84)
solves("practice[1]", Eq(7/x, R(21, 12)), x, {4})
# practice[2]: 4 notebooks $10, 14 notebooks
same("practice[2]", 10*14, 140)
solves("practice[2]", Eq(R(10, 4), x/14), x, {35})
# practice[3]: 1 cm : 2.5 km, 18.4 km
solves("practice[3]", Eq(1/R(5, 2), x/R(184, 10)), x, {R(736, 100)})

# plain / why / mistakes
same("plain", 9*420, 3780)
same("mistakes", 3*6, 18)
same("mistakes", R(18, 6), 3)
same("mistakes", R(18400, R(5, 2)), 7360)
same("mistakes", R(184, 10) / R(5, 2), R(736, 100))

# practice[4]: 148/8 = p/30
same("practice[4]", 148*30, 4440)
solves("practice[4]", Eq(R(148, 8), x/30), x, {555})

# layers (concept examples, formal setup)
same("layers.examples", 5*400, 2000)
solves("layers.examples", Eq(R(250, 5), 400/x), x, {8})
solves("layers.examples", Eq(60/x, R(12, 50)), x, {250})
same("layers.examples", R(60*50, 12), 250)
same("layers.examples", R(65, 10) / R(1, 4), 26)
solves("layers.examples", Eq(R(2, 100), x/250), x, {5})
same("layers.examples", R(230, 1) / R(92, 100), 250)
same("layers.examples", R(1080*800, 1920), 450)
same("layers.examples", R(1920, 1080), R(800, 450))
same("layers.setup", R(9, 252), R(1, 28))
same("layers.setup", 9*420, 3780)
same("layers.setup", R(3780, 252), 15)
same("layers.setup", R(420, 15), 28)
