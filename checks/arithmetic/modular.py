# content: 977c6ae117cf
# modular: Remainders & Clock Arithmetic
total = 19 + 58
same("example", total, 77)
check("example", divmod(total, 24) == (3, 5), "77 = 24*3 + 5")
days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
check("example", days[(days.index("Fri") + total // 24) % 7] == "Mon", "should arrive Monday")
same("practice[0]", 17 % 5, 2)
check("practice[0]", divmod(17, 5) == (3, 2), "3 full boxes, 2 left")
check("practice[1]", 8 + 50 == 58 and divmod(58, 24) == (2, 10), "58 = 24*2 + 10")
same("practice[1]", (8 + 50) % 24, 10)
same("practice[2]", Mod(-11, 4), 1)
check("practice[2]", "ABCD"[(0 - 11) % 4] == "B", "11 days before crew A is crew B")
check("practice[2]", 4*(-3) + 1 == -11, "-11 = 4(-3) + 1")
same("practice[3]", 3**20, 3486784401)
same("practice[3]", 3**20 % 10, 1)
check("practice[3]", [3**k % 10 for k in range(1, 5)] == [3, 9, 7, 1] and 20 % 4 == 0, "cycle 3,9,7,1")

# practice[4]: dose every 8 h from 22:00, fifth dose
same("practice[4]", 22 + 4*8, 54)
check("practice[4]", divmod(54, 24) == (2, 6), "54 = 24*2 + 6")
same("practice[4]", [(22 + 8*k) % 24 for k in range(5)][4], 6)

# layers (concept examples, formal setup)
same("layers.examples", [(22 + 8*k) % 24 for k in range(4)], [22, 6, 14, 22])
same("layers.examples", 22 + 8, 30)
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
check("layers.examples", "ABCD"[(30 - 1) % 4] == "B" and (30 - 1) % 4 == 1, "week 30 is shift B")
same("layers.examples", (7 + 7) % 12, 2)
check("layers.examples", ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"].index("G") == 7, "G is pitch class 7")
same("layers.examples", 4**3, 64)
same("layers.examples", 4**3 % 33, 31)
same("layers.examples", pow(31, 7, 33), 4)
check("layers.examples", (3 * 7) % ((3 - 1) * (11 - 1)) == 1 and 3 * 11 == 33, "e=3, d=7 valid for n=33")
same("layers.history", [t for t in range(1, 106) if t % 3 == 2 and t % 5 == 3 and t % 7 == 2], [23])
same("layers.setup", 19 + 58, 77)
check("layers.setup", divmod(77, 24) == (3, 5), "77 = 24*3 + 5")
check("layers.setup", divmod(58, 24) == (2, 10), "58 = 24*2 + 10")
same("layers.setup", 19 + 10, 29)
same("layers.setup", 29 % 24, 5)
# build tasks
check("layers.tasks", divmod(100, 7) == (14, 2), "100 = 7*14 + 2")
check("layers.tasks", ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"][(4 + 100) % 7] == "Sun", "100 days after Friday is Sunday")
same("layers.tasks", (20 + 6) % 24, 2)
