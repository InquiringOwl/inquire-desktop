# content: 2748bf7ebe1b
# pc-probability: Probability
from precalc import *
from itertools import product as _prod, combinations as _combs

deck = [(r, s) for r in range(1, 14) for s in "HDCS"]   # 11, 12, 13 = J, Q, K
def P_(ev, space): return Rational(sum(1 for o in space if ev(o)), len(space))
dice2 = list(_prod(range(1, 7), repeat=2))
# hero/formal: union rule on a check set
check("formal", all(P_(lambda o: A(o) or B(o), deck) == P_(A, deck) + P_(B, deck) - P_(lambda o: A(o) and B(o), deck)
      for A in [lambda o: o[1] == "H", lambda o: o[0] == 1] for B in [lambda o: o[0] > 10, lambda o: o[1] in "HD"]), "union rule")
# plain
same("plain", P_(lambda o: o % 2 == 0, range(1, 7)), Rational(1, 2))
same("plain", 1 - prob(1, 6), Rational(5, 6))
same("plain", 13 + 12 - 3, 22)
same("plain", P_(lambda o: o[1] == "H" or o[0] > 10, deck), Rational(11, 26))
same("plain", prob(22, 52), Rational(11, 26))
same("plain", P_(lambda o: o == ("H", "H"), list(_prod("HT", repeat=2))), Rational(1, 4))
# formal
same("formal", Rational(sum(range(1, 7)), 6), Rational(7, 2))
# example
same("example", comb(12, 4), 495)
same("example", Rational(12*11*10*9, factorial(4)), 495)
same("example", [comb(7, 2), comb(5, 2)], [21, 10])
same("example", comb(7, 2)*comb(5, 2), 210)
people = ["W"]*7 + ["M"]*5
same("example", P_(lambda s: sum(1 for i in s if people[i] == "W") == 2, list(_combs(range(12), 4))), Rational(14, 33))
same("example", prob(210, 495), Rational(14, 33))
near("example", N(Rational(14, 33)), 0.424)
# why
same("why", Rational(1, 100)**2, Rational(1, 10000))
same("why", comb(49, 6), 13983816)
# mistakes
same("mistakes", prob(13, 52) + prob(12, 52), Rational(25, 52))
same("mistakes", Rational(4, 52)*Rational(3, 51), Rational(1, 221))
same("mistakes", prob(comb(4, 2), comb(52, 2)), Rational(1, 221))
same("mistakes", P_(lambda o: o[0] + o[1] == 7, dice2), Rational(1, 6))
same("mistakes", len({a + b for a, b in dice2}), 11)
# practice
same("practice[0]", P_(lambda o: o > 4, range(1, 7)), Rational(1, 3))
same("practice[1]", P_(lambda o: o[0] + o[1] == 8, dice2), Rational(5, 36))
same("practice[1]", sorted(o for o in dice2 if sum(o) == 8), [(2, 6), (3, 5), (4, 4), (5, 3), (6, 2)])
same("practice[2]", P_(lambda o: o[0] == 13 or o[1] == "H", deck), Rational(4, 13))
same("practice[2]", prob(4 + 13 - 1, 52), Rational(4, 13))
same("practice[3]", comb(6, 5)*comb(43, 1), 258)
same("practice[3]", prob(comb(6, 5)*comb(43, 1), comb(49, 6)), Rational(43, 2330636))
near("practice[3]", N(Rational(43, 2330636))*1e5, 1.84)
