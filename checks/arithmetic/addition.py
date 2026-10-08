# content: e328d15149c5
# addition: Addition

# formal: commutativity / associativity / identity
check("formal", simplify((a + b) - (b + a)) == 0 and simplify(((a + b) + c) - (a + (b + c))) == 0 and a + 0 == a, "laws fail")

# example: 478 + 356
same("example", 8 + 6, 14)
same("example", 1 + 7 + 5, 13)
same("example", 1 + 4 + 3, 8)
same("example", 478 + 356, 834)
same("example", 500 + 400, 900)
check("example", round(478, -2) == 500 and round(356, -2) == 400, "rounded addends")

# practice[0]
same("practice[0]", 6 + 7, 13)
same("practice[0]", 1 + 3 + 4, 8)
same("practice[0]", 36 + 47, 83)

# practice[1]
same("practice[1]", 9 + 7, 16)
same("practice[1]", 1 + 0 + 8, 9)
same("practice[1]", 5 + 2, 7)
same("practice[1]", 509 + 287, 796)

# practice[2]
same("practice[2]", 8 + 6, 14)
same("practice[2]", 1 + 4 + 9, 14)
same("practice[2]", 1 + 7 + 3, 11)
same("practice[2]", 1 + 2 + 1, 4)
same("practice[2]", 2748 + 1396, 4144)

# practice[3]
same("practice[3]", 1875 + 2409, 4284)
same("practice[3]", 4284 + 638, 4922)
same("practice[3]", 1875 + 2409 + 638, 4922)

# practice[4]
same("practice[4]", 500 + 240, 740)
same("practice[4]", 740 + 120, 860)

# layers (concept examples, formal setup): numbers stated on the page
same("layers.examples", 12 + 3 + 8, 23)
same("layers.examples", 49 + 75 + 20, 144)
same("layers.examples", Rational(1249 + 375 + 820, 100), Rational(2444, 100))
same("layers.examples", 40 + 6 + 8, 54)
same("layers.examples", 84 + 84 + 38, 206)
check("layers.examples", 17 * 12 < 206 < 18 * 12, "206 in is a little over 17 ft")
same("layers.examples", 1250 + 980 + 1475, 3705)
same("layers.examples", 1320 + 985 + 1140, 3445)
same("layers.setup", 7 * 10**2 + 12 * 10 + 14, 834)
same("layers.setup", 8 * 10**2 + 3 * 10 + 4, 834)
same("layers.setup", (4*100 + 7*10 + 8) + (3*100 + 5*10 + 6), 834)
