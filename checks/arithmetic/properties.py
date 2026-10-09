# content: dadc7aa4fe7d
# properties: Laws of Arithmetic

# formal: the laws as identities in symbols
same("formal", a + b, b + a); same("formal", a*b, b*a)
same("formal", (a + b) + c, a + (b + c)); same("formal", (a*b)*c, a*(b*c))
same("formal", a*(b + c), a*b + a*c)
same("formal", a + 0, a); same("formal", a*1, a); same("formal", a + (-a), 0)
same("formal", simplify(a*(1/a)), 1)

# example: the movie night (6 friends, $7 ticket, $3 popcorn)
same("example", 6*(7 + 3), 6*7 + 6*3)
same("example", [6*7, 6*3], [42, 18])
same("example", 42 + 18, 60)
same("example", 6*7 + 3, 45)
same("example", 6*(7 + 3) - (6*7 + 3), 15)
same("example", (7 + 3, 6*10), (10, 60))

# plain / why
same("plain", (18 + 7) + 3, 18 + (7 + 3)); same("plain", 18 + 7 + 3, 28); same("plain", 7 + 3, 10)
same("plain", 6*10 + 6*4, 84); same("plain", 6*14, 84); same("plain", 4 - 10, -6); same("plain", 10 - 4, 6)
same("why", 600 - 6, 594); same("why", 6*99, 594)

# practice
check("practice[0]", 5 + (3 + 9) == (5 + 3) + 9, "associative example holds")
same("practice[0]", 5 + (3 + 9), 17); same("practice[0]", (5 + 3) + 9, 17)
same("practice[1]", 6*10 + 6*4, 84); same("practice[1]", 6*14, 84)
same("practice[2]", (25*4)*17, 1700); same("practice[2]", 25*17*4, 1700)
same("practice[3]", 8*100 - 8*3, 776); same("practice[3]", 8*97, 776)
same("practice[4]", 7*11 + 7*3, 98); same("practice[4]", 7*(11 + 3), 98); same("practice[4]", 7*14, 98)

# mistakes
same("mistakes", 6*(10 + 4), 84); same("mistakes", 6*10 + 4, 64)
same("mistakes", (10 - 4) - 3, 3); same("mistakes", 10 - (4 - 3), 9)
same("mistakes", 2*(3*5), 30); same("mistakes", (2*3)*(2*5), 60)
same("mistakes", Rational(100, 4 + 1), 20); same("mistakes", Rational(100, 4) + Rational(100, 1), 125)
same("mistakes", Rational(100 + 20, 4), 30); same("mistakes", Rational(100, 4) + Rational(20, 4), 30)

# Concept walk: "Rearrange it together: a movie night"
same("concept.walk predict[1]", 6*7, 42)
same("concept.walk predict[2]", 6*3, 18)
same("concept.walk predict[3]", 42 + 18, 60)
same("concept.walk predict[4] trap", (6*7 + 3, 60 - (6*7 + 3)), (45, 15))
same("concept.walk predict[5]", 6*(7 + 3), 60)
check("concept.walk choices", 7*3 == 21 and 6*3 == 18, "wrong choice 7 x 3 = 21; right 6 x 3 = 18")
check("concept.walk demo", sum([42, 18]) == 60, "bar parts 42 + 18 = 60")
check("concept.walk", 6*(7 + 3) == 6*7 + 6*3 == 60, "answer sentence")

# Concept idea cards, stakes, question figure (lab starts at a = 3, b = 5, c = 4, commutative)
same("layers.concept", 3*5, 15); same("layers.concept", 5*3, 15)
same("layers.concept", (8 + 7) + 3, 18); same("layers.concept", 8 + (7 + 3), 18); same("layers.concept", 7 + 3, 10)
same("layers.concept", 3*(5 + 4), 27); same("layers.concept", 3*5 + 3*4, 27); same("layers.concept", [3*5, 3*4], [15, 12])
same("layers.concept", 6*7 + 3, 45); same("layers.concept", 6*(7 + 3), 60)
same("layers.concept", 10 - 4, 6); same("layers.concept", 4 - 10, -6)
same("layers.concept", (10 - 4) - 3, 3); same("layers.concept", 10 - (4 - 3), 9)
same("layers.concept", Rational(100, 4 + 1), 20); same("layers.concept", Rational(100, 4) + Rational(100, 1), 125)
check("layers.concept", 1843 - 1814 == 29 and 1844 >= 1843, "timeline in order")

# Concept example tiles
same("layers.examples", (25 + 75) + 17, 117); same("layers.examples", 25 + 17 + 75, 117)
same("layers.examples", 2150 + 1980, 4130); same("layers.examples", 2430 + 1840, 4270)
same("layers.examples", 4130 + 4270, 8400); same("layers.examples", 2150 + 1980 + 2430 + 1840, 8400)
same("layers.examples", 4*5 + 4*3, 32); same("layers.examples", 4*(5 + 3), 32); same("layers.examples", [4*5, 4*3], [20, 12])
same("layers.examples", Rational(8, 100)*40, Rational(320, 100)); same("layers.examples", Rational(8, 100)*35, Rational(280, 100)); same("layers.examples", Rational(8, 100)*25, 2)
same("layers.examples", Rational(320 + 280 + 200, 100), 8); same("layers.examples", Rational(8, 100)*(40 + 35 + 25), 8)
same("layers.examples", Rational(2, 100)*(350000 + 150000), 10000); same("layers.examples", Rational(2, 100)*350000 + Rational(2, 100)*150000, 10000)

# Intermediate: steps, stepWhy, key chips
same("layers.build", 25*4, 100); same("layers.build", 100 - 2, 98); same("layers.build", (25*4)*17, 25*17*4)
same("layers.build", 6*(7 + 3), 60)

# Intermediate goals: value = a+b+c (associative) or a*(b+c) (distributive); a, b, c in 1..9
def _reach(v):
    out = set()
    for A in range(1, 10):
        for B in range(1, 10):
            for C in range(1, 10):
                out.add(("comm", A*B)); out.add(("assoc", A + B + C)); out.add(("dist", A*(B + C)))
    return {m for (m, x) in out if x == v}
same("build.stepGoal[2]", (9 + 6) + 4, 19); same("build.stepGoal[2]", 9 + (6 + 4), 19)
check("build.stepGoal[2]", _reach(19) == {"assoc"}, "19 is reachable, and only in Associative mode")
same("build.stepGoal[3]", 8*9 + 8*3, 96); same("build.stepGoal[3]", [8*9, 8*3], [72, 24]); same("build.stepGoal[3]", 8*12, 96)
check("build.stepGoal[3]", _reach(96) == {"dist"} and 9 + 3 == 12, "96 = 8 x (9 + 3) is reachable, only in Distributive mode")
same("build.stepGoal[4]", 7*(8 + 2), 70); same("build.stepGoal[4]", [7*8, 7*2], [56, 14]); same("build.stepGoal[4]", 7*10, 70)
check("build.stepGoal[4]", _reach(70) == {"dist"}, "70 is reachable, only in Distributive mode")
# no chip on the page and no walk number leaves the lab at a goal value
_chips = [3*5, 8 + 7 + 3, 3*(5 + 4), 6*(7 + 3), 4*(5 + 3), 9*(5 + 4), 3*(8 + 4), 3*(5 + 1), 6 + 9 + 1, 4*9, 3*4, 15]
check("build.stepGoal", not ({19, 96, 70} & (set(_chips) | {6, 7, 3, 42, 18, 60, 45, 10})), "goal values differ from chip end states and walk numbers")

# Everyday tasks
same("build.tasks[0].check", 6*99, 594)
same("build.tasks[0].lines", (100 - 1, 6*100, 6*1, 600 - 6), (99, 600, 6, 594))
same("build.tasks[0].demo", 600 - 6, 594)
same("build.tasks[1].check", 6 + 9 + 4 + 1, 20)
same("build.tasks[1].lines", ((6 + 4) + (9 + 1), 10 - 9), (20, 1))
same("build.tasks[1].demo", sum([6, 4, 9, 1]), 20)
same("build.tasks[2].check", Rational(20, 100)*(18 + 22 + 10), 10)
same("build.tasks[2].lines", (18 + 22 + 10, Rational(50, 5)), (50, 10))
same("build.tasks[2].lines", [Rational(20, 100)*18, Rational(20, 100)*22, Rational(20, 100)*10], [Rational(360, 100), Rational(440, 100), 2])
same("build.tasks[2].lines", Rational(360 + 440 + 200, 100), 10)
same("build.tasks[3].check", 2*(3 + 2 + 1), 12)
same("build.tasks[3].lines", (2*3, 2*2, 2*1, 6 + 4 + 2, 2*6), (6, 4, 2, 12, 12))
same("build.tasks[4].check", Rational(12, 4), 3)
same("build.tasks[4].lines", (12*25, (3*4)*25, 3*(4*25), 4*25, 3*100), (300, 300, 300, 100, 300))
same("build.tasks[4].demo", 3*4, 12)

# Formal: why exact words matter, setup
same("layers.concept formal", 2*(3 + 5), 2*3 + 2*5); same("layers.concept formal", 2*(3 + 5), 16)
same("layers.concept formal", 2 + (3*5), 17); same("layers.concept formal", (2 + 3)*(2 + 5), 35)
same("layers.setup", 6*7 + 6*3, 6*(7 + 3)); same("layers.setup", 6*(7 + 3), 60); same("layers.setup", 6*10, 60)
same("layers.setup", 42 + 18, 60); same("layers.setup", a*b + a*c, a*(b + c))
