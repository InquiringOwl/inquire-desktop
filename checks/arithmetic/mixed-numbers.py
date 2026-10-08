# content: f9eab4351886
# mixed-numbers: Mixed Numbers & Improper Fractions
amt = 2 + Rational(2, 3)
same("example", amt, Rational(8, 3))
same("example", amt / Rational(1, 3), 8)
check("example", divmod(8, 3) == (2, 2), "8 ÷ 3 should be 2 R 2")
same("practice[0]", 3 + Rational(1, 4), Rational(13, 4))
check("practice[1]", divmod(17, 5) == (3, 2), "17 ÷ 5 should be 3 R 2")
same("practice[1]", Rational(17, 5), 3 + Rational(2, 5))
check("practice[2]", divmod(45, 6) == (7, 3), "45 ÷ 6 should be 7 R 3")
same("practice[2]", Rational(45, 6), 7 + Rational(1, 2))
same("practice[3]", Rational(29, 7), 4 + Rational(1, 7))
check("practice[3]", 4 + Rational(1, 3) > Rational(29, 7), "4 1/3 should be longer")

# practice[0]: 13 quarter-cup scoops
same("practice[0]", (3 + Rational(1, 4)) / Rational(1, 4), 13)
same("practice[0]", 3*4 + 1, 13)
# practice[2]: 45 boards of 1/6 ft
same("practice[2]", 45 * Rational(1, 6), Rational(45, 6))
same("practice[2]", Rational(3, 6), Rational(1, 2))
# practice[4]: (3/4) b = 5 1/4
same("practice[4]", 5 + Rational(1, 4), Rational(21, 4))
b_ = symbols("b_")
same("practice[4]", solve(Eq(Rational(3, 4)*b_, Rational(21, 4)), b_), [7])
same("practice[4]", solve(Eq(3*b_, 21), b_), [7])
# mistakes: 1 3/4 + 1 3/4
same("mistakes", (1 + Rational(3, 4))*2, 3 + Rational(1, 2))
same("mistakes", Rational(6, 4), 1 + Rational(1, 2))

# why: doubling 1 1/2 cups; 150 min; 75 in
same("why", 2*(1 + Rational(1, 2)), 3)
check("why", divmod(150, 60) == (2, 30) and divmod(75, 12) == (6, 3), "150 min = 2 h 30 min, 75 in = 6 ft 3 in")

# layers (concept examples, formal setup, build tasks): numbers stated on the page
same("layers.examples", 3 + Rational(5, 8), Rational(29, 8))
same("layers.examples", 2 + Rational(3, 4), Rational(22, 8))
same("layers.examples", Rational(29, 8) + Rational(22, 8), Rational(51, 8))
same("layers.examples", Rational(51, 8), 6 + Rational(3, 8))
same("layers.examples", Rational(3, 2)*3, Rational(9, 2))
same("layers.examples", Rational(9, 2), 4 + Rational(1, 2))
same("layers.examples", 4*Rational(5, 8), Rational(20, 8))
same("layers.examples", Rational(20, 8), 2 + Rational(1, 2))
same("layers.examples", 3*(2 + Rational(1, 4)), Rational(27, 4))
same("layers.examples", Rational(27, 4), 6 + Rational(3, 4))
same("layers.examples", 10 - Rational(27, 4), 3 + Rational(1, 4))
same("layers.examples", (3 + Rational(1, 2)) / Rational(1, 2), 7)
same("layers.tasks", (1 + Rational(1, 2)) / Rational(1, 2), 3)
same("layers.tasks", Rational(150, 60), 2 + Rational(1, 2))
same("layers.tasks", Rational(30, 60), Rational(1, 2))
same("layers.setup", 2*3 + 2, 8)
same("layers.setup", 2 + Rational(2, 3), Rational(8, 3))
check("layers.setup", divmod(8, 3) == (2, 2), "8 = 3·2 + 2")
same("layers.setup", Rational(8, 3) / Rational(1, 3), 8)
