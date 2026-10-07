# content: 01fe04a758c1
# pc-induction: Mathematical Induction
from precalc import *

# plain
check("plain", induction_ok(lambda m: m, n*(n + 1)/2), "sum of first n")
same("plain", [m*(m + 1)/2 for m in range(1, 5)], [1, 3, 6, 10])
same("plain", [sum(range(1, m + 1)) for m in range(1, 5)], [1, 3, 6, 10])
same("plain", simplify(k*(k + 1)/2 + (k + 1) - (k + 1)*(k + 2)/2), 0)
same("plain", [2, 1**2 + 1 + 1], [2, 3])
check("plain", all(sum(2*j for j in range(1, m + 1)) != m**2 + m + 1 for m in range(1, 50)), "false for every n")
same("plain", expand((k**2 + k + 1) + 2*(k + 1) - ((k + 1)**2 + (k + 1) + 1)), 0)
# formal
check("formal", induction_ok(lambda m: m**2, n*(n + 1)*(2*n + 1)/6), "squares")
check("formal", all(induction_ok(lambda m, R=R: R**(m - 1), (R**n - 1)/(R - 1)) for R in [2, 3, 5, Rational(1, 2), -2]), "geometric")
same("formal", simplify((r**k - 1)/(r - 1) + r**k - (r**(k + 1) - 1)/(r - 1)), 0)
check("formal", all((m**3 - m) % 3 == 0 for m in range(1, 200)), "3 | n^3 - n")
check("formal", all(2**m > m**2 for m in range(5, 200)), "2^n > n^2, n >= 5")
same("formal", [2**m > m**2 for m in range(1, 6)], [True, False, False, False, True])
check("formal", all(2*m**2 >= (m + 1)**2 for m in range(3, 200)) and all(2*m**2 < (m + 1)**2 for m in [1, 2]), "2k^2 >= (k+1)^2 iff k >= 3")
# example
same("example", [1**2, Rational(1*2*3, 6)], [1, 1])
same("example", factor(k*(2*k + 1) + 6*(k + 1)), (k + 2)*(2*k + 3))
same("example", expand(k*(2*k + 1) + 6*(k + 1)), 2*k**2 + 7*k + 6)
same("example", simplify(k*(k + 1)*(2*k + 1)/6 + (k + 1)**2 - (k + 1)*(k + 2)*(2*k + 3)/6), 0)
same("example", sum(j**2 for j in range(1, 11)), 385)
same("example", Rational(10*11*21, 6), 385)
# why: 1^2 + ... + n^2 over n^3 -> 1/3 (area under x^2)
same("why", limit(n*(n + 1)*(2*n + 1)/6/n**3, n, oo), Rational(1, 3))
# life: Hanoi
check("life", induction_ok(lambda m: 2**(m - 1), 2**n - 1), "2^n - 1")
# mistakes
same("mistakes", [m for m in range(1, 41) if not isprime(m**2 - m + 41)], [])
same("mistakes", [41**2 - 41 + 41, 41**2], [1681, 1681])
check("mistakes", not isprime(1681), "1681 composite")
check("mistakes", induction_ok(lambda m: 2*m, n**2 + n), "true formula n^2 + n")
# practice
same("practice[0]", [1, 1**2], [1, 1])
check("practice[1]", induction_ok(lambda m: 2*m - 1, n**2), "odd sum")
same("practice[1]", expand(k**2 + (2*k + 1) - (k + 1)**2), 0)
same("practice[2]", 1**3 - 1, 0)
same("practice[2]", expand((k + 1)**3 - (k + 1) - ((k**3 - k) + 3*(k**2 + k))), 0)
same("practice[3]", [2**5, 5**2], [32, 25])
check("practice[3]", all(2*m**2 >= m**2 + 5*m and m**2 + 5*m > m**2 + 2*m + 1 for m in range(5, 500)), "k >= 5 chain")
same("practice[3]", expand(k**2 + 2*k + 1 - (k + 1)**2), 0)
