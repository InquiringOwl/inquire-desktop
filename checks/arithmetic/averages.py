# content: 3f4f57d2ed4d
# averages: Mean, Median & Mode
from statistics import median as _med, multimode as _modes
import math as _math


def _mean(v):
    return Rational(sum(v), len(v))


def _lab_mean(v):
    # the lab publishes Math.round(mean * 100) / 100
    return _math.floor(float(_mean(v)) * 100 + 0.5) / 100


def _lab(v):
    s = sorted(v)
    return (len(s), _lab_mean(s), Rational(_med(s)))


# ---- the one situation: 10 bus waits = the lab's nine starting values, then the 20-minute outlier ----
_START = [3, 5, 5, 6, 8, 9, 12, 5, 7]
_w = _START + [20]
_ws = sorted(_w)

# formal: deviations from the mean sum to zero
same("formal", sum(v - _mean(_w) for v in _w), 0)

# example (same numbers as the walk)
same("example", _ws, [3, 5, 5, 5, 6, 7, 8, 9, 12, 20])
same("example", len(_w), 10)
same("example", sum(_w), 80)
same("example", _mean(_w), 8)
same("example", (_ws[4], _ws[5]), (6, 7))
same("example", Rational(_med(_w)), Rational(13, 2))
same("example", _modes(_w), [5])
same("example", _w.count(5), 3)
check("example", all(_w.count(v) == 1 for v in set(_w) - {5}), "no other value repeats")
same("example", sum(1 for v in _w if v < _mean(_w)), 6)

# plain: same numbers
same("plain", sum(_w) / Integer(10), 8)
same("plain", Rational(6 + 7, 2), Rational(13, 2))

# concept.walk: every line, predict answer and the demo
same("concept.walk lines[0]", _ws, [3, 5, 5, 5, 6, 7, 8, 9, 12, 20])
same("concept.walk lines[1] predict[1]", sum(_w), 80)
same("concept.walk hint", sum(_START), 60)
same("concept.walk lines[2] predict[2]", Rational(80, 10), 8)
same("concept.walk lines[3] predict[3]", Rational(_ws[4] + _ws[5], 2), Rational(13, 2))
check("concept.walk predict[3] trap", (_w[4], _w[5]) == (8, 9), "the middle two of the list as written are 8 and 9")
same("concept.walk lines[4] predict[4]", _modes(_w), [5])
same("concept.walk lines[5]", sum(_START), 60)
check("concept.walk lines[5]", round(float(Rational(60, 9)), 1) == 6.7, "60/9 ~ 6.7")
same("concept.walk lines[5] predict[5]", Rational(_med(_START)), 6)
same("concept.walk lines[6]", _mean(_w) - Rational(_med(_w)), Rational(3, 2))
same("concept.walk lines[6]", sum(1 for v in _w if v < 8), 6)
same("concept.walk demo", [8, Rational(13, 2), 5, 20], [_mean(_w), Rational(_med(_w)), _modes(_w)[0], max(_w)])
same("concept.walk demo dist", abs(8 - Rational(13, 2)), Rational(3, 2))
# the walk's state is the lab's reset,addoutlier: count 10, mean 8, median 6.5
same("concept.walk lab", _lab(_START + [20]), (10, 8.0, Rational(13, 2)))

# layers.concept: figure, ideas, stakes
same("layers.concept figure", _lab(_START), (9, 6.67, 6))
same("layers.concept ideas[0]", 4 + 8 + 6, 18)
same("layers.concept ideas[0]", Rational(18, 3), 6)
same("layers.concept ideas[0] demo", 3 * 6, 18)
same("layers.concept ideas[1]", Rational(_med([2, 4, 6, 9, 15])), 6)
same("layers.concept ideas[2]", max({8: 14, 9: 22, 10: 17}.items(), key=lambda kv: kv[1])[0], 9)
same("layers.concept ideas[2] demo", 14 + 22 + 17, 53)
same("layers.concept ideas[3]", _mean([4, 5, 6]), 5)
same("layers.concept ideas[3]", _mean([4, 5, 6, 25]), 10)
same("layers.concept ideas[3]", Rational(_med([4, 5, 6, 25])), Rational(11, 2))
same("layers.concept ideas[3] demo", 10 - 5, 5)
same("layers.concept stakes", Rational(120 + 0 + 90, 3), 70)
same("layers.concept stakes", Rational(120 + 90, 2), 105)
same("layers.concept stakes", Rational(80 + 90, 2), 85)

# mistakes
same("mistakes", Rational(_med(_w)), Rational(13, 2))
same("mistakes", sorted([13, 7, 21, 9, 15, 4]), [4, 7, 9, 13, 15, 21])
same("mistakes", Rational(9 + 13, 2), 11)
same("mistakes", Rational(10 * 80 + 30 * 90, 40), Rational(175, 2))
same("mistakes", (10 * 80, 30 * 90), (800, 2700))
same("mistakes", _modes([3, 5, 5, 6, 8, 8, 8, 10]), [8])
same("mistakes", Rational(120 + 90, 2), 105)
same("mistakes", Rational(120 + 0 + 90, 3), 70)

# practice[0]
same("practice[0]", 4 + 8 + 9 + 11, 32)
same("practice[0]", Rational(32, 4), 8)
# practice[1]
_p = [13, 7, 21, 9, 15, 4]
same("practice[1]", sorted(_p), [4, 7, 9, 13, 15, 21])
same("practice[1]", Rational(_med(_p)), 11)
# practice[2]
_q = [3, 5, 5, 6, 8, 8, 8, 10]
same("practice[2]", _modes(_q), [8])
same("practice[2]", _q.count(8), 3)
# practice[3]
same("practice[3]", 85 * 5, 425)
same("practice[3]", 82 + 90 + 76 + 88, 336)
solves("practice[3]", Eq((82 + 90 + 76 + 88 + s) / 5, 85), s, {89})
# practice[4]
same("practice[4]", 42 + 55 + 38, 135)
same("practice[4]", 50 * 4, 200)
solves("practice[4]", Eq((42 + 55 + 38 + t) / 4, 50), t, {65})

# layers.examples (concept tiles)
_h = [310000, 325000, 330000, 340000, 1200000]
same("layers.examples", Rational(_med(_h)), 330000)
same("layers.examples", sum(_h), 2505000)
same("layers.examples", Rational(sum(_h), 5), 501000)
check("layers.examples", Rational(501000 - 330000, 330000) > Rational(1, 2), "more than half")
_t = [72, 85, 90, 64, 89]
same("layers.examples", sum(_t), 400)
same("layers.examples", Rational(sum(_t), 5), 80)
same("layers.examples", sorted(_t), [64, 72, 85, 89, 90])
same("layers.examples", Rational(_med(_t)), 85)
same("layers.examples", Rational(2550, 30), 85)
_sal = [48, 52, 55, 61, 64, 250]
same("layers.examples", Rational(_med(_sal)), 58)
same("layers.examples", sum(_sal), 530)
check("layers.examples", round(float(Rational(530, 6)), 1) == 88.3, "530/6 ~ 88.3")
_b = [Rational(1002, 100), Rational(998, 100), Rational(1005, 100), Rational(1003, 100)]
same("layers.examples", sum(_b), Rational(4008, 100))
same("layers.examples", sum(_b) / 4, Rational(1002, 100))
same("layers.examples", max({8: 14, 9: 22, 10: 17}.items(), key=lambda kv: kv[1])[0], 9)

# layers.setup (formal write-up of the bus waits)
same("layers.setup", _ws, [3, 5, 5, 5, 6, 7, 8, 9, 12, 20])
same("layers.setup", sum(_w), 80)
same("layers.setup", 80 - 10 * 8, 0)
same("layers.setup", sum(v - _mean(_w) for v in _w), 0)
same("layers.setup", Rational(_ws[4] + _ws[5], 2), Rational(13, 2))
same("layers.setup", _modes(_w), [5])

# build.tasks[0]: quizzes 78, 84, 91, target mean 85 over 4
same("build.tasks[0].lines", 85 * 4, 340)
same("build.tasks[0].lines predict", 78 + 84 + 91, 253)
same("build.tasks[0].lines hint", 78 + 84, 162)
solves("build.tasks[0].check", Eq((78 + 84 + 91 + x) / 4, 85), x, {87})
same("build.tasks[0].demo", 340 - (78 + 84 + 91), 87)

# build.tasks[1]: home prices (thousands)
_hp = [210, 240, 250, 265, 900]
same("build.tasks[1].check", Rational(_med(_hp)), 250)
same("build.tasks[1].lines", sorted(_hp), _hp)
same("build.tasks[1].lines", sum(_hp), 1865)
same("build.tasks[1].lines predict", Rational(sum(_hp), 5), 373)
same("build.tasks[1].lines demo", 373 - 250, 123)

# build.tasks[2]: grocery spending
_g = [310, 285, 342, 299]
same("build.tasks[2].lines predict demo", sum(_g), 1236)
same("build.tasks[2].hint", (310 + 285, 342 + 299), (595, 641))
same("build.tasks[2].check", Rational(sum(_g), 4), 309)
same("build.tasks[2].lines", 309 * 4, 1236)

# build.tasks[3]: two clinics
_A, _B = [12, 15, 14, 60, 13], [18, 20, 19, 21, 22]
same("build.tasks[3].lines", sorted(_A), [12, 13, 14, 15, 60])
same("build.tasks[3].lines", sorted(_B), [18, 19, 20, 21, 22])
same("build.tasks[3].check", (Rational(_med(_A)), Rational(_med(_B))), (14, 20))
same("build.tasks[3].lines", (sum(_A), sum(_B)), (114, 100))
same("build.tasks[3].lines predict", _mean(_A), Rational(228, 10))
same("build.tasks[3].lines", _mean(_B), 20)
same("build.tasks[3].demo link", 20 - 14, 6)


# ---- Your move goals: reachable by dragging dots (0..20) from Reset, and never left by a chip ----
def _drag(v, frm, to):
    v = list(v); v[v.index(frm)] = to; return v


_chips = {   # every chip on the page (Concept + Intermediate), all start from Reset
    "reset": _START,
    "reset,remove": _START[:-1],
    "reset,remove,remove": _START[:-2],
    "reset,addoutlier": _START + [20],
    "reset,addoutlier,addoutlier": _START + [20] * 2,
    "reset,addoutlier,addoutlier,addoutlier": _START + [20] * 3,
}
_chip_states = {k: _lab(v) for k, v in _chips.items()}
same("layers.concept chips", _chip_states["reset,addoutlier,addoutlier,addoutlier"], (12, 10.0, Rational(15, 2)))
same("layers.concept chips", sorted(_modes(_chips["reset,addoutlier,addoutlier,addoutlier"])), [5, 20])
same("layers.concept chips", _modes(_chips["reset,addoutlier,addoutlier"]), [5])
same("layers.concept chips", _chip_states["reset,remove"][2], Rational(11, 2))


def _path_means(v, frm, to):   # means the lab shows while one dot is dragged step by step
    out, cur = [], list(v)
    step = 1 if to > frm else -1
    for x in range(frm + step, to + step, step):
        cur = _drag(cur, x - step, x); out.append(_lab_mean(cur))
    return out, cur


# stepGoal[1]: Reset, drag 12 -> 3: mean 51/9 = 5.67
_g1 = _drag(_START, 12, 3)
same("build.stepGoal[1]", sum(_g1), 51)
same("build.stepGoal[1]", _lab_mean(_g1), 5.67)
same("build.stepGoal[1]", _lab_mean(_START) - _lab_mean(_g1), 1.0)
check("build.stepGoal[1]", all(st[1] != 5.67 for st in _chip_states.values()), "no chip leaves mean 5.67")
# stepGoal[2]: Reset, drag 6 -> 8 and one 5 -> 8: median 8
_g2 = _drag(_drag(_START, 6, 8), 5, 8)
same("build.stepGoal[2]", sorted(_g2), [3, 5, 5, 7, 8, 8, 8, 9, 12])
same("build.stepGoal[2]", Rational(_med(_g2)), 8)
same("build.stepGoal[2]", _modes(_g2), [8])
check("build.stepGoal[2]", all(st[2] != 8 for st in _chip_states.values()), "no chip leaves median 8")
# stepGoal[4]: Reset, drag 12 -> 20: mean 68/9 = 7.56, median stays 6
_g4 = _drag(_START, 12, 20)
same("build.stepGoal[4]", sum(_g4), 68)
same("build.stepGoal[4]", _lab_mean(_g4), 7.56)
same("build.stepGoal[4]", Rational(_med(_g4)), 6)
check("build.stepGoal[4]", all(st[1] != 7.56 for st in _chip_states.values()), "no chip leaves mean 7.56")
# drag paths of one goal never pass another goal's value
_p1, _ = _path_means(_START, 12, 3)
_p4, _ = _path_means(_START, 12, 20)
_p2a, _mid = _path_means(_START, 6, 8)
_p2b, _ = _path_means(_mid, 5, 8)
check("build.stepGoal[1]", 7.56 not in _p1, "dragging 12 to 3 never shows 7.56")
check("build.stepGoal[4]", 5.67 not in _p4, "dragging 12 to 20 never shows 5.67")
check("build.stepGoal[2]", not ({5.67, 7.56} & set(_p2a + _p2b)), "the median move never shows a mean goal")
check("build.stepGoal[2]", all(0 <= x <= 20 for x in _g2 + _g1 + _g4), "every dragged value inside 0..20")
