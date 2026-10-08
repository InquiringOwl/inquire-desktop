# content: 1bdf935d22e6
# averages: Mean, Median & Mode
from statistics import median as _med, multimode as _modes

# formal: deviations from the mean sum to zero
_d = [22, 25, 34, 28, 25, 90, 31]
_m = Rational(sum(_d), len(_d))
same("formal", sum(v - _m for v in _d), 0)

# example
same("example", sorted(_d), [22, 25, 25, 28, 31, 34, 90])
same("example", len(_d), 7)
same("example", sum(_d), 255)
check("example", abs(float(_m) - 36.4) < 0.05, f"mean {float(_m)} should round to 36.4")
same("example", sorted(_d)[3], 28)
same("example", Rational(_med(_d)), 28)
same("example", _modes(_d), [25])
check("example", sum(1 for v in _d if v < _m) == 6, "mean should exceed six of seven values")

# practice[0]
same("practice[0]", 4 + 8 + 9 + 11, 32)
same("practice[0]", Rational(4 + 8 + 9 + 11, 4), 8)

# practice[1]
_p = [13, 7, 21, 9, 15, 4]
same("practice[1]", sorted(_p), [4, 7, 9, 13, 15, 21])
same("practice[1]", Rational(_med(_p)), 11)

# practice[2]
_q = [3, 5, 5, 6, 8, 8, 8, 10]
same("practice[2]", _modes(_q), [8])
same("practice[2]", _q.count(8), 3)

# practice[3]: solve (82+90+76+88+s)/5 = 85
same("practice[3]", 85 * 5, 425)
same("practice[3]", 82 + 90 + 76 + 88, 336)
solves("practice[3]", Eq((82 + 90 + 76 + 88 + s) / 5, 85), s, {89})

# plain / mistakes
check("plain", abs(float(Rational(255, 7)) - 36.4) < 0.05, "255/7 ~ 36.4")
same("mistakes", Rational(120 + 90, 2), 105)
same("mistakes", Rational(120 + 0 + 90, 3), 70)

# practice[4]: (42+55+38+t)/4 = 50
same("practice[4]", 42 + 55 + 38, 135)
same("practice[4]", 50*4, 200)
solves("practice[4]", Eq((42 + 55 + 38 + x) / 4, 50), x, {65})

# layers (concept examples, formal setup)
_h = [310000, 325000, 330000, 340000, 1200000]
same("layers.examples", Rational(_med(_h)), 330000)
same("layers.examples", sum(_h), 2505000)
same("layers.examples", Rational(sum(_h), 5), 501000)
_t = [72, 85, 90, 64, 89]
same("layers.examples", sum(_t), 400)
same("layers.examples", Rational(sum(_t), 5), 80)
same("layers.examples", sorted(_t), [64, 72, 85, 89, 90])
same("layers.examples", Rational(_med(_t)), 85)
same("layers.examples", Rational(2550, 30), 85)
_sal = [48, 52, 55, 61, 64, 250]
same("layers.examples", Rational(_med(_sal)), 58)
same("layers.examples", sum(_sal), 530)
check("layers.examples", abs(float(Rational(530, 6)) - 88.3) < 0.05, "530/6 ~ 88.3")
_b = [Rational(1002, 100), Rational(998, 100), Rational(1005, 100), Rational(1003, 100)]
same("layers.examples", sum(_b), Rational(4008, 100))
same("layers.examples", sum(_b) / 4, Rational(1002, 100))
_sz = {8: 14, 9: 22, 10: 17}
same("layers.examples", max(_sz, key=_sz.get), 9)
same("layers.setup", sum(v - _m for v in _d), 0)
same("layers.setup", 255 - 7 * Rational(255, 7), 0)
same("layers.setup", Rational(7 + 1, 2), 4)
same("layers.setup", sorted(_d)[3], 28)
