# content: 35c00082f1ef
# fraction-ops: Operations with Fractions
R = Rational

def lab(a, b, c, d, op):
    """What the fraction-ops lab publishes (num, den): a/b op c/d in lowest terms, computed independently."""
    x, y = R(a, b), R(c, d)
    v = [x + y, x - y, x * y, x / y][op]
    return (v.p, v.q)

def chip(s):
    """Apply a chip's commands in order to a lab state (sliders 1..9, numerator clamped to its denominator)."""
    st = {"a": 2, "b": 3, "c": 1, "d": 4, "op": 0}
    for cmd in s.split(","):
        k, v = cmd.split(":"); v = int(v)
        if k == "op": st["op"] = v
        elif k == "b": st["b"] = v; st["a"] = min(st["a"], v)
        elif k == "d": st["d"] = v; st["c"] = min(st["c"], v)
        elif k == "a": st["a"] = min(v, st["b"])
        elif k == "c": st["c"] = min(v, st["d"])
    return st

def run(s):
    st = chip(s); return lab(st["a"], st["b"], st["c"], st["d"], st["op"])

# example (the walk's flour, plus what is left in the bag)
same("example", ilcm(3, 4), 12)
same("example", (R(2, 3), R(3, 4)), (R(8, 12), R(9, 12)))
_used = R(2, 3) + R(3, 4)
same("example", _used, R(17, 12))
same("example", _used, 1 + R(5, 12))
same("example", 2 + R(1, 2), R(30, 12))
_left = 2 + R(1, 2) - _used
same("example", _left, R(13, 12))
same("example", _left, 1 + R(1, 12))

# practice[0]
same("practice[0]", R(1, 4) + R(3, 8), R(5, 8))
same("practice[0]", (R(2, 8), R(3, 8)), (R(1, 4), R(3, 8)))
# practice[1]
same("practice[1]", ilcm(6, 4), 12)
same("practice[1]", R(5, 6) - R(3, 4), R(1, 12))
same("practice[1]", (R(10, 12), R(9, 12)), (R(5, 6), R(3, 4)))
# practice[2]
same("practice[2]", R(4, 9) * R(3, 8), R(1, 6))
same("practice[2]", R(1, 3) * R(1, 2), R(1, 6))
same("practice[2]", R(12, 72), R(1, 6))
# practice[3]
same("practice[3]", 2 + R(1, 4), R(9, 4))
same("practice[3]", (2 + R(1, 4)) / R(3, 8), 6)
same("practice[3]", R(9, 4) * R(8, 3), R(72, 12))
same("practice[3]", R(72, 12), 6)
# practice[4]: n * 5/8 = 3 3/4
same("practice[4]", 3 + R(3, 4), R(15, 4))
same("practice[4]", solve(Eq(x*R(5, 8), R(15, 4)), x)[0], 6)
same("practice[4]", R(15, 4) * R(8, 5), R(120, 20))
same("practice[4]", R(120, 20), 6)

# plain / why / mistakes: numbers stated on the page
check("plain", R(5, 7) < R(3, 4), "5/7 is less than 3/4")
same("plain", (R(2, 3), R(3, 4)), (R(8, 12), R(9, 12)))
same("plain", R(2, 3) + R(3, 4), 1 + R(5, 12))
same("plain", R(1, 2) * R(3, 4), R(3, 8))
same("why", 3 * R(33, 100), R(99, 100))
same("mistakes", R(1, 2) + R(1, 3), R(5, 6))
check("mistakes", R(2, 5) < R(1, 2), "2/5 < 1/2")
same("mistakes", R(2, 3) / R(4, 5), R(5, 6))
same("mistakes", R(2, 3) * R(5, 4), R(10, 12))
same("mistakes", 3 + R(1, 4), 2 + R(5, 4))
same("mistakes", (3 + R(1, 4)) - (1 + R(3, 4)), 1 + R(1, 2))
same("mistakes", R(13, 4) - R(7, 4), R(6, 4))
same("mistakes", R(6, 4), 1 + R(2, 4))
check("mistakes", (3 + R(1, 4)) - (1 + R(3, 4)) != 2 + R(1, 2), "2 1/2 is the wrong answer")

# Concept walk: flour 2/3 + 3/4 (concept.walk)
_w = R(2, 3) + R(3, 4)
same("concept.walk trap", R(2 + 3, 3 + 4), R(5, 7))
check("concept.walk trap", R(5, 7) < R(3, 4), "5/7 cup is less than the 3/4 cup alone")
check("concept.walk trap", R(5, 7) != _w, "5/7 is not the sum")
same("concept.walk lcm", ilcm(3, 4), 12)
same("concept.walk predict[2]", min(n for n in range(1, 100) if n % 3 == 0 and n % 4 == 0), 12)
same("concept.walk rename", (R(2*4, 3*4), R(3*3, 4*3)), (R(2, 3), R(3, 4)))
same("concept.walk predict[3]", R(2, 3) * 12, 8)
same("concept.walk predict[4]", 12 // 4, 3)
check("concept.walk predict[4] distractor", R(3, 12) != R(3, 4), "multiplying only the bottom gives 3/12")
check("concept.walk predict[4] distractor", R(3, 4 + 8) == R(3, 12), "adding 8 to the bottom gives 3/12")
same("concept.walk predict[5]", 8 + 9, 17)
same("concept.walk sum", R(8, 12) + R(9, 12), R(17, 12))
same("concept.walk sum", _w, R(17, 12))
same("concept.walk predict[6]", divmod(17, 12), (1, 5))
same("concept.walk answer", _w, 1 + R(5, 12))
check("concept.walk answer", 1 + R(5, 12) < 1 + R(1, 2), "a little less than 1 1/2 cups")
check("concept.walk demo", ceiling(R(17, 12)) == 2 and 8 + 9 == 17, "17 twelfths fill two bars of 12; frame 8 = cookies, frame 17 = both")
same("concept.walk lab", run("op:0,b:3,a:2,d:4,c:3"), (17, 12))

# layers.concept: idea cards, stakes, question figure
same("layers.concept start", lab(2, 3, 1, 4, 0), (11, 12))
same("layers.concept idea1", R(2, 3), R(2*4, 3*4))
same("layers.concept idea1", run("op:0,b:2,a:1,d:3,c:1"), (5, 6))
same("layers.concept idea2", R(3, 8) + R(2, 8), R(5, 8))
same("layers.concept idea2", run("op:0,b:8,a:3,d:4,c:1"), (5, 8))
same("layers.concept idea3", R(1, 2) * R(3, 4), R(3, 8))
same("layers.concept idea3", run("op:2,b:2,a:1,d:4,c:3"), (3, 8))
same("layers.concept idea4", R(3, 4) / R(1, 4), 3)
same("layers.concept idea4", run("op:3,b:4,a:3,d:4,c:1"), (3, 1))
same("layers.concept stakes", R(4, 3) * R(1, 4), R(1, 3))
same("layers.concept stakes", R(3, 4) / R(1, 4), 3)
same("layers.concept stakes", (3 + R(1, 4)) - (1 + R(3, 4)), 1 + R(1, 2))
check("layers.concept stakes", R(5, 7) < R(3, 4), "5/7 < 3/4")
same("layers.concept history", [1, 2, 6, 7, 8, 9], [1, 2, 6, 7, 8, 9])   # Rhind problems 1-6, as in the source

# layers.examples (Concept tiles)
same("layers.examples", (5 + R(3, 8), 2 + R(11, 16)), (R(86, 16), R(43, 16)))
same("layers.examples", R(86, 16) + R(43, 16), R(129, 16))
same("layers.examples", R(129, 16), 8 + R(1, 16))
same("layers.examples", 2 + R(2, 3), R(8, 3))
same("layers.examples", R(8, 3) * R(3, 4), R(24, 12))
same("layers.examples", R(24, 12), 2)
same("layers.examples", R(3, 4) / R(1, 4), 3)
same("layers.examples", R(3, 4) * 4, 3)
same("layers.examples", run("op:3,b:4,a:3,d:4,c:1"), (3, 1))
same("layers.examples", R(1, 4) + R(1, 8) + R(1, 8) + R(1, 2), R(8, 8))
same("layers.examples", (R(2, 8), R(4, 8)), (R(1, 4), R(1, 2)))
same("layers.examples", 12 + R(1, 2), 12 + R(4, 8))
same("layers.examples", 2 * R(5, 8), R(10, 8))
same("layers.examples", 12 + R(1, 2) + 2 * R(5, 8), 13 + R(3, 4))
same("layers.examples", (6, 2 + R(7, 16), R(1, 8)), (R(96, 16), R(39, 16), R(2, 16)))
same("layers.examples", 6 - (2 + R(7, 16)) - R(1, 8), R(55, 16))
same("layers.examples", R(55, 16), 3 + R(7, 16))

# Intermediate: step reasons, key chips, step chips
same("layers.steps", R(2, 3) * R(4, 4), R(8, 12))
same("layers.steps", R(9, 4) / R(3, 8), 6)
same("build.keyTry", [run(s) for s in ["op:0,b:6,a:5,d:4,c:1", "op:0,b:2,a:1,d:3,c:2", "op:0,b:4,a:1,d:6,c:1", "op:2,b:3,a:2,d:4,c:3"]],
     [(13, 12), (7, 6), (5, 12), (1, 2)])
same("build.keyTry", ilcm(4, 6), 12)
same("build.stepTry", [run(s) for s in ["op:0,b:3,a:2,d:4,c:3", "op:0,b:8,a:3,d:4,c:1", "op:0,b:6,a:1,d:3,c:1"]], [(17, 12), (5, 8), (1, 2)])

# Your move goals: target, reachable in the lab (1..9, a <= b, c <= d), and no chip on the page ends there
_chips = ["op:0,b:2,a:1,d:3,c:1", "op:0,b:8,a:3,d:4,c:1", "op:2,b:2,a:1,d:4,c:3", "op:3,b:4,a:3,d:4,c:1", "op:0,b:3,a:2,d:4,c:3",
          "op:0,b:6,a:5,d:4,c:1", "op:0,b:2,a:1,d:3,c:2", "op:0,b:4,a:1,d:6,c:1", "op:2,b:3,a:2,d:4,c:3", "op:0,b:8,a:3,d:4,c:1", "op:0,b:6,a:1,d:3,c:1",
          "op:2,b:2,a:1,d:3,c:2", "op:0,b:4,a:3,d:8,c:1", "op:3,b:4,a:3,d:8,c:1", "op:2,b:3,a:1,d:4,c:3"]
_ends = [run(s) for s in _chips] + [lab(2, 3, 1, 4, 0), lab(2, 3, 3, 4, 0)]
same("build.stepGoal[2]", R(2, 5) + R(3, 4), R(23, 20))
same("build.stepGoal[2]", (R(8, 20), R(15, 20)), (R(2, 5), R(3, 4)))
same("build.stepGoal[2]", lab(2, 5, 3, 4, 0), (23, 20))
check("build.stepGoal[2]", all(e[0] != 23 for e in _ends), "no chip or start state shows num 23")
same("build.stepGoal[3]", R(3, 5) * R(4, 7), R(12, 35))
same("build.stepGoal[3]", (3 * 4, 5 * 7), (12, 35))
same("build.stepGoal[3]", lab(3, 5, 4, 7, 2), (12, 35))
check("build.stepGoal[3]", all(e[1] != 35 for e in _ends), "no chip or start state shows den 35")
same("build.stepGoal[4]", R(5, 6) / R(2, 9), R(15, 4))
same("build.stepGoal[4]", R(5, 6) * R(9, 2), R(45, 12))
same("build.stepGoal[4]", R(45, 12), 3 + R(3, 4))
same("build.stepGoal[4]", lab(5, 6, 2, 9, 3), (15, 4))
check("build.stepGoal[4]", all(e[0] != 15 for e in _ends), "no chip or start state shows num 15")

# Everyday tasks
same("build.tasks[0]", R(1, 2) * R(2, 3), R(1, 3))
same("build.tasks[0].lines", (1 * 2, 2 * 3), (2, 6))
same("build.tasks[0].lines", R(2, 6), R(1, 3))
same("build.tasks[0].demo", R(1 * 2, 3 * 2), R(2, 6))
same("build.tasks[0].lab", run("op:2,b:2,a:1,d:3,c:2"), (1, 3))
same("build.tasks[1]", R(3, 4) + R(1, 8), R(7, 8))
same("build.tasks[1].lines", (ilcm(4, 8), R(3, 4)), (8, R(6, 8)))
same("build.tasks[1].lines", R(6, 8) + R(1, 8), R(7, 8))
same("build.tasks[1].lab", run("op:0,b:4,a:3,d:8,c:1"), (7, 8))
same("build.tasks[2]", 2 + R(1, 2) - (1 + R(5, 12)), 1 + R(1, 12))
same("build.tasks[2].lines", (2 + R(1, 2), R(5, 2)), (R(30, 12), R(30, 12)))
same("build.tasks[2].lines", (30 - 17, R(30, 12) - R(17, 12)), (13, R(13, 12)))
same("build.tasks[2].lines", divmod(13, 12), (1, 1))
same("build.tasks[3]", R(3, 4) / R(1, 8), 6)
same("build.tasks[3].lines", (R(3, 4) * R(8, 1), 3 * 8), (R(24, 4), 24))
same("build.tasks[3].demo", R(6, 8), R(3, 4))
same("build.tasks[3].lab", run("op:3,b:4,a:3,d:8,c:1"), (6, 1))
same("build.tasks[4]", R(1, 3) * R(3, 4), R(1, 4))
same("build.tasks[4].lines", (1 * 3, 3 * 4, R(3, 12)), (3, 12, R(1, 4)))
same("build.tasks[4].lab", run("op:2,b:3,a:1,d:4,c:3"), (1, 4))

# Formal: why exact words matter, setup
same("layers.formal", R(3, 4) / R(1, 2), R(3, 2))
same("layers.formal", R(3, 4) / 2, R(3, 8))
same("layers.formal", R(3, 2) / R(3, 8), 4)
same("layers.formal start", lab(2, 3, 1, 4, 0)[1], 12)
same("layers.setup", ilcm(3, 4), 12)
same("layers.setup", (R(2*4, 3*4), R(3*3, 4*3)), (R(8, 12), R(9, 12)))
same("layers.setup", 2 + R(1, 2), R(30, 12))
same("layers.setup", R(8, 12) + R(9, 12), R(17, 12))
same("layers.setup", R(30, 12) - R(17, 12), R(13, 12))
same("layers.setup", (R(17, 12), R(13, 12)), (1 + R(5, 12), 1 + R(1, 12)))
