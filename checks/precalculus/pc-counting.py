# content: 4ec034eceefc
# pc-counting: Counting Principles: Permutations & Combinations
from precalc import *
from itertools import permutations as _perms, combinations as _combs

# hero and plain
same("hero", perm(10, 3), 720)
same("hero", Rational(720, factorial(3)), comb(10, 3))
same("hero", comb(10, 3), 120)
same("plain", len([(s, m) for s in range(4) for m in range(3)]), 12)
same("plain", 4 + 3, 7)
same("plain", factorial(5), 120)
same("plain", len(list(_perms(range(10), 3))), 720)
same("plain", len(list(_combs(range(10), 3))), 120)
same("plain", factorial(3), 6)
same("plain", len(set(_perms("LEVEL"))), 30)
same("plain", multiset(5, 2, 2, 1), 30)
same("plain", factorial(2)*factorial(2), 4)
# formal
check("formal", all(perm(m, q) == prod(range(m - q + 1, m + 1)) for m in range(12) for q in range(m + 1)), "P(n, r) product form")
check("formal", all(comb(m, q) == perm(m, q)/factorial(q) for m in range(15) for q in range(m + 1)), "C = P / r!")
check("formal", all(comb(m, q) == comb(m, m - q) for m in range(15) for q in range(m + 1)), "symmetry")
check("formal", all(sum(comb(m, q) for q in range(m + 1)) == 2**m for m in range(15)), "2^n subsets")
check("formal", all(expand((x + y)**m).coeff(x, m - q).coeff(y, q) == comb(m, q) for m in range(8) for q in range(m + 1)), "binomial coefficient")
same("formal", factorial(0), 1)

# example
same("example", 52*51*50*49*48, 311875200)
same("example", comb(52, 5), Rational(311875200, 120))
same("example", comb(52, 5), 2598960)
same("example", 48*47*46*45*44, 205476480)
same("example", comb(48, 5), 1712304)
same("example", comb(52, 5) - comb(48, 5), 886656)
same("example", sum(comb(4, a)*comb(48, 5 - a) for a in range(1, 5)), 886656)
same("example", 4*comb(51, 4), 999600)
# why
same("why", 62**8, 218340105584896)
near("why", 62**8/1e14, 2.18)
same("why", factorial(10), 3628800)
# careers
same("careers", 4**3, 64)
# mistakes
same("mistakes", [10*9*8, 720/6], [720, 120])
same("mistakes", 3*4, 12)
same("mistakes", comb(5, 5), 1)
# practice
same("practice[0]", factorial(6), 720)
same("practice[1]", perm(12, 3), 1320)
same("practice[2]", factorial(11), 39916800)
same("practice[2]", factorial(4)*factorial(4)*factorial(2), 1152)
same("practice[2]", multiset(11, 1, 4, 4, 2), 34650)
same("practice[2]", [ "MISSISSIPPI".count(ch) for ch in "MISP"], [1, 4, 4, 2])
same("practice[3]", [comb(10, 5), comb(6, 5)], [252, 6])
same("practice[3]", sum(comb(4, m)*comb(6, 5 - m) for m in range(1, 5)), 246)
