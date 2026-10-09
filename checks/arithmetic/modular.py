# content: 44483280d513
# modular: Remainders & Clock Arithmetic
DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
def after(day, n): return DAYS[(DAYS.index(day) + n) % 7]

# example = the walk's situation: Friday 19:00 + 30 hours
total = 19 + 30
same("example", total, 49)
same("example", 49 - 24, 25)
check("example", divmod(total, 24) == (2, 1), "49 = 24*2 + 1")
same("example", Mod(total, 24), 1)
check("example", after("Fri", total // 24) == "Sun", "should arrive Sunday")

# Concept walk: lines, predicts, demo (line from 0 to 50, start 19, jumps 5, 24, 1, midnights 24 and 48)
same("concept.walk predict[1]", 19 + 30, 49)
same("concept.walk trap", 49 - 24, 25)
check("concept.walk trap", 49 - 24 > 24, "one day off still leaves more than a day")
same("concept.walk predict[3]", divmod(49, 24), (2, 1))
same("concept.walk mod", 49 % 24, 1)
check("concept.walk predict[5]", after("Fri", 2) == "Sun" and after("Fri", 1) == "Sat", "two midnights: Sunday")
same("concept.walk demo", 19 + 5 + 24 + 1, 49)
check("concept.walk demo", 19 + 5 == 24 and 24 + 24 == 48 and [24, 48] == [24 * k for k in (1, 2)], "hops land on the midnights")
check("concept.walk demo", 5 + 24 + 1 == 30 and 30 - 5 == 25, "jumps sum to the 30-hour trip; 25 h left after first midnight")
check("concept.walk lab", (19 + 30) % 24 == 1 and 0 <= 19 <= 40 and 0 <= 30 <= 40, "the trip fits the lab (a, b in 0..40)")

# layers.concept: question figure, idea cards, stakes, chips
same("layers.concept", (9 + 8) % 12, 5)          # lab start m=12, a=9, b=8 -> figure value 5
same("layers.concept", len(range(0, 12)), 12)    # spots 0..11 on a 12-hour clock
same("layers.concept", divmod(47, 10), (4, 7))   # 47 is 4 tens, 7 left
same("layers.concept", (40 + 7) % 10, 7)
same("layers.concept", 5 + 12, 17)
check("layers.concept", 17 % 12 == 5 % 12, "5 and 17 share a spot on a 12-hour clock")
same("layers.concept", 22 + 8, 30)
same("layers.concept", (22 + 8) % 24, 6)
same("layers.concept", divmod(49, 24), (2, 1))
check("layers.concept", all(r < 12 for r in range(0, 100) for r in [r % 12]), "remainders mod 12 run 0..11")
same("layers.history", [t for t in range(1, 106) if t % 3 == 2 and t % 5 == 3 and t % 7 == 2], [23])

# layers.examples (concept tiles)
same("layers.examples", [(22 + 8*k) % 24 for k in range(4)], [22, 6, 14, 22])
same("layers.examples", 1234 % 100, 34)
def luhn_sum(payload):
    t = 0
    for i, ch in enumerate(reversed(payload)):
        d_ = int(ch)
        if i % 2 == 0:
            d_ *= 2
            if d_ > 9: d_ -= 9
        t += d_
    return t
same("layers.examples", luhn_sum("7992739871"), 67)
same("layers.examples", (10 - 67 % 10) % 10, 3)
same("layers.examples", (67 + 3) % 10, 0)
def luhn_ok(num):
    t = 0
    for i, ch in enumerate(reversed(num)):
        d_ = int(ch)
        if i % 2 == 1:
            d_ *= 2
            if d_ > 9: d_ -= 9
        t += d_
    return t % 10 == 0
check("layers.examples", luhn_ok("79927398713"), "full number passes Luhn")
check("layers.examples", not luhn_ok("79927398714"), "a mistyped digit fails")
check("layers.examples", "ABCD"[(30 - 1) % 4] == "B" and (30 - 1) % 4 == 1 and 29 % 4 == 1, "week 30 is shift B; chip 29 mod 4 = 1")
same("layers.examples", (7 + 7) % 12, 2)
check("layers.examples", ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"].index("G") == 7 and ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"][2] == "D", "G is 7, D is 2")
same("layers.examples", 4**3, 64)
same("layers.examples", 4**3 % 33, 31)
same("layers.examples", pow(31, 7, 33), 4)
check("layers.examples", (3 * 7) % ((3 - 1) * (11 - 1)) == 1 and 3 * 11 == 33, "e=3, d=7 valid for n=33")

# Intermediate: chips' end states vs goals (every chip sets m, a, b, op)
chips = [(24,9,8,0),(10,40,7,0),(12,5,12,0),(24,19,30,0),(24,22,8,0),(4,29,0,0),(12,7,7,0),   # concept
         (12,9,0,0),(12,9,5,0),(24,9,5,0),(5,17,0,0),                                         # keyTry, stepTry
         (24,21,15,0),(7,10,10,1),(24,20,6,0),(12,40,0,0)]                                    # task chips
res = lambda m, a, b, op: (a + b if op == 0 else a * b) % m
ends = [res(*c) for c in chips] + [res(12, 9, 8, 0)]
check("build.stepGoal[1]", 11 not in ends and 11 not in (49, 1, 2, 25, 30, 19), "goal 11 is no chip's end state or a walk number")
check("build.stepGoal[3]", 8 not in ends and 8 not in (49, 1, 2, 25, 30, 19), "goal 8 is no chip's end state or a walk number")
check("build.stepGoal[2]", all(c[0] != 2 for c in chips) and 12 != 2, "no chip leaves m = 2")
check("build.stepGoal[1]", all(0 <= v <= 40 for v in (20, 15)) and 2 <= 24 <= 24, "goal settings in lab range")
same("build.stepGoal[1]", 20 + 15, 35)
same("build.stepGoal[1]", 35 - 24 * 1, 11)
same("build.stepGoal[1]", res(24, 20, 15, 0), 11)
check("build.stepGoal[2]", 2 <= 2 <= 24 and {r % 2 for r in range(0, 81)} == {0, 1}, "m = 2 reachable; only spots 0 and 1")
same("build.stepGoal[3]", 27 * 34, 918)
same("build.stepGoal[3]", 918 % 10, 8)
same("build.stepGoal[3]", (27 % 10) * (34 % 10), 28)
same("build.stepGoal[3]", res(10, 27, 34, 1), 8)
check("build.stepGoal[3]", 0 <= 27 <= 40 and 0 <= 34 <= 40, "goal settings in lab range")
same("build.stepTry", divmod(17, 5), (3, 2))
same("build.keyTry", [res(12,9,0,0), res(12,9,5,0), res(24,9,5,0)], [9, 2, 14])

# Everyday tasks
same("build.tasks[0].check", (21 + 15) % 24, 12)
same("build.tasks[0].lines", (21 + 15, divmod(36, 24)), (36, (1, 12)))
same("build.tasks[0].demo", 21 + 3 + 12, 36)
check("build.tasks[0].demo", 21 + 3 == 24 and 36 - 24 == 12, "first hop reaches midnight; noon")
same("build.tasks[0] predict", 36 - 24, 12)
same("build.tasks[1].check", divmod(100, 7), (14, 2))
same("build.tasks[1].lines", 7 * 14, 98)
same("build.tasks[1].lines", 100 % 7, 2)
check("build.tasks[1].lines", after("Fri", 100) == "Sun", "100 days after Friday is Sunday")
same("build.tasks[1].demo", 100 - 98, 2)
same("build.tasks[1] try", res(7, 10, 10, 1), 2)
same("build.tasks[2].check", divmod(37, 2), (18, 1))
same("build.tasks[2].lines", 2 * 18 + 1, 37)
same("build.tasks[2].demo", 37 - 36, 1)
check("build.tasks[2].lines", 37 % 2 == 1, "37 is odd")
same("build.tasks[3].check", [(20 + 6) % 24, (20 + 12) % 24], [2, 8])
same("build.tasks[3].lines", (20 + 6, 26 % 24, 2 + 6), (26, 2, 8))
same("build.tasks[3].demo", 20 + 6 + 6, 32)
same("build.tasks[3].demo", 32 - 24, 8)
same("build.tasks[4].check", divmod(40, 12), (3, 4))
same("build.tasks[4].lines", 12 * 3, 36)
same("build.tasks[4].demo", 40 - 36, 4)
same("build.tasks[4].link", divmod(49, 24), (2, 1))

# Formal setup (the walk's trip)
same("layers.setup", 19 + 30, 49)
check("layers.setup", divmod(49, 24) == (2, 1), "49 = 24*2 + 1")
check("layers.setup", divmod(30, 24) == (1, 6), "30 = 24*1 + 6")
same("layers.setup", 19 + 6, 25)
same("layers.setup", 25 % 24, 1)
check("layers.setup", after("Fri", 2) == "Sun", "q = 2 days -> Sunday")

# Formal matters: -11 mod 4
same("layers.formal", Mod(-11, 4), 1)
check("layers.formal", -11 - 4 * int(-11 / 4) == -3 and (-11) % 4 == 1, "truncated remainder -3; Python % gives 1")
check("layers.formal", (1 - (-3)) % 4 == 0, "1 and -3 congruent mod 4")

# mistakes
check("mistakes", -11 == 4 * (-3) + 1, "-11 = 4(-3) + 1")
check("mistakes", (2 * 3) % 6 == (2 * 6) % 6 and 3 % 6 != 6 % 6, "cannot cancel 2 mod 6")

# Practice
same("practice[0]", 17 % 5, 2)
check("practice[0]", divmod(17, 5) == (3, 2), "3 full boxes, 2 left")
check("practice[1]", 8 + 50 == 58 and divmod(58, 24) == (2, 10), "58 = 24*2 + 10")
same("practice[1]", (8 + 50) % 24, 10)
same("practice[2]", Mod(-11, 4), 1)
check("practice[2]", "ABCD"[(0 - 11) % 4] == "B", "11 days before crew A is crew B")
check("practice[2]", 4*(-3) + 1 == -11, "-11 = 4(-3) + 1")
same("practice[3]", 3**20, 3486784401)
same("practice[3]", 3**20 % 10, 1)
check("practice[3]", [3**k % 10 for k in range(1, 5)] == [3, 9, 7, 1] and 20 % 4 == 0 and 3**4 == 81, "cycle 3,9,7,1")
same("practice[4]", 22 + 4*8, 54)
check("practice[4]", divmod(54, 24) == (2, 6), "54 = 24*2 + 6")
same("practice[4]", [(22 + 8*k) % 24 for k in range(5)][4], 6)
