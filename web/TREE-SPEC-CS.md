# Tree spec: Computer Science · Programming Fundamentals (CS1, Python)

Reference: OpenStax *Introduction to Python Programming* (2024) and ACM/IEEE CS2023 (SDF: fundamental programming concepts, data structures, algorithms, development methods). Python 3; terms: "expression", "statement", "evaluate", "assignment", "name bound to an object", "mutable/immutable", "call stack", "frame", "argument/parameter", "return value", "base case", "exception", "method", "instance", "attribute". Field `programming-1` (data: `web/src/data-cs.js`). Ids `cs-*`. 24 nodes, 8 writer batches of 3.

**Colour keys, the same on every CS page and lab** (legend must use them): c1 amber = line about to run · c2 cyan = variable that just changed · c3 pink = output · c4 violet = references / objects · c5 green = return values. A topic may reuse a colour for its own key only if the lab does too (e.g. bars marks).

**Lab archetypes** (all on `web/kits/subjects/cs.js`; programs are real Python in `web/cs-src/<id>.py`, traced by `tools/pytrace.py`):
- **T · Trace**: `k.trace({programs, narr})` code + variables + output, stepped.
- **M · Memory**: `k.trace({view: "memory"})` names → objects with arrows (aliasing, mutation, objects).
- **S · Stack**: `k.trace` on programs with calls; frames stack in the variables pane, return values in c5.
- **A · Array**: `k.trace({view: "vars+bars", bars: {name, marks}})` a list as bars, indices marked by loop variables.
- **P · Predict**: `k.predict({items})` pick the output, then see Python's.
- **B · Bits**: `k.bits({width, signed, extra})`.
Each lab = 2–3 modes via `k.csModes`; programs short (≤ 12 lines, ≤ 600 steps), each mode a different idea.

## Eras (columns)
Basics 0–2 · Control flow 3–5 · Functions 6–8 · Data 9–10 · Objects & design 11–12

## Nodes
Format: id (col,row) Title — pre · math refs (informational, `mathWhy` on the page) · lab: modes and programs.

### Batch 1 · Basics
- **cs-programs** (0,4) Programs, Algorithms and the Interpreter — pre: none · math: none · lab: T "hello" (three prints run top to bottom; a comment is skipped), T "runtime error" (NameError stops the program after earlier lines ran), P (order of output).
- **cs-binary** (1,2) Bits and Data Representation — pre: cs-programs · math: place-value, exponents · lab: B unsigned 8-bit (place values, hex), B signed (two's complement, `extra` shows the range −128…127), T `bin(13)`, `int("1101", 2)`, `ord("A")`, `"é".encode()` (UTF-8 bytes).
- **cs-types** (1,5) Values, Types and Expressions — pre: cs-programs · math: order-ops, decimals, integers · lab: T expressions with `type()` (int, float, str, bool; `7 / 2`, `7 // 2`, `7 % 2`, `-7 // 2`, `2 ** 10`, `0.1 + 0.2`), P precedence and floor division.

### Batch 2 · Basics → Control
- **cs-variables** (2,5) Variables and Assignment — pre: cs-types · math: pa-variables, pa-evaluate · lab: T swap with a temp and with tuple assignment, M rebinding (`x = 5; y = x; x = 7` leaves y = 5), P.
- **cs-io** (2,7) Input, Output and Formatting — pre: cs-types · math: rounding · lab: T with `# @input` (input() is a str; `int()` converts; `"3" + "4"` vs `3 + 4`), T f-strings (`:.2f`, `sep`, `end`), P.
- **cs-booleans** (3,3) Booleans and Comparisons — pre: cs-variables, cs-binary · math: pa-inequalities · lab: T comparisons and chained `0 < x < 10`, T short-circuit (`and`/`or` skip the right side; a call that never runs), P truthiness (`bool("")`, `bool(0.0)`).

### Batch 3 · Control flow
- **cs-conditionals** (4,4) Conditionals — pre: cs-booleans, cs-io · math: a1-piecewise · lab: T one grade program traced with three inputs (programs select: 92, 85, 59) to show which branch runs, T nested if vs elif, P.
- **cs-while** (5,2) While Loops — pre: cs-conditionals · math: none · lab: T countdown, T digit sum (`n % 10`, `n // 10`), P off-by-one (`<` vs `<=`), readout row: loop count.
- **cs-for** (5,5) For Loops and Ranges — pre: cs-conditionals · math: a1-sequences · lab: T accumulator sum over `range(1, 6)`, T `range(10, 0, -3)`, P what `range` produces.

### Batch 4 · Functions
- **cs-nested-loops** (6,7) Nested Loops — pre: cs-for · math: multiplication · lab: T multiplication table (inner loop restarts), T triangle of stars, P count of prints.
- **cs-functions** (6,3) Functions — pre: cs-while, cs-for · math: pa-functions, a1-functions · lab: S define then call (`def` only binds a name; the body runs on call), S return vs print (`None`), P.
- **cs-scope** (7,2) Scope and the Call Stack — pre: cs-functions · math: none · lab: S local shadows global, S parameters are new names (rebinding inside does not change the caller), T UnboundLocalError, P.

### Batch 5 · Functions → Data
- **cs-recursion** (8,2) Recursion — pre: cs-scope · math: a1-sequences · lab: S `fact(4)` (stack grows to the base case and unwinds with c5 returns), S `fib(4)` (repeated calls), P.
- **cs-testing** (7,5) Testing and Debugging — pre: cs-functions · math: none · lab: T a buggy `average` caught by `assert` (AssertionError at the end), T the fixed version passing, P which test fails.
- **cs-strings** (8,6) Strings — pre: cs-for, cs-functions · math: none · lab: T indexing and slicing (`s[1:4]`, `s[::-1]`, `s[-1]`), T loop counting vowels, P (strings are immutable: `s.upper()` returns a new string).

### Batch 6 · Data
- **cs-lists** (9,5) Lists, Mutability and Aliasing — pre: cs-strings · math: none · lab: M alias vs copy (`ys = xs`, `xs[:]`), M `append` vs `xs = xs + [4]` inside a function, P.
- **cs-search-sort** (10,3) Searching and Simple Sorting — pre: cs-lists, cs-nested-loops · math: none · lab: A linear search (mark `i`), A selection sort (marks `i`: c1, `m`: c2), A insertion sort (`j`), readout row: comparisons (a `comps` counter in the program). Binary search is CS2; mention only in `beyond`.
- **cs-dicts-sets** (10,6) Dictionaries, Sets and Tuples — pre: cs-lists · math: none · lab: M word count dict, T set operations (`|`, `&`, `-`, duplicates vanish), P (tuple immutability, dict key lookup).

### Batch 7 · Data → Objects
- **cs-2d-data** (10,8) Tables and 2-D Data — pre: cs-lists, cs-nested-loops · math: pa-coordinate · lab: M the `[[0] * 3] * 3` trap vs a comprehension, T row and column sums, P.
- **cs-files** (9,8) Files and Exceptions — pre: cs-strings, cs-testing · math: none · lab: T read a `# @file` line by line (`int(line)` with the newline), T try/except ValueError on a bad line, P.
- **cs-classes** (11,5) Classes — pre: cs-dicts-sets, cs-functions · math: none · lab: M `Point` instances (two objects, one class), S `__init__` with `self`, P.

### Batch 8 · Objects & design
- **cs-objects** (12,5) Objects, Methods and Encapsulation — pre: cs-classes · math: none · lab: M a `BankAccount` with methods changing state, S method call (`acct.deposit(5)` is `BankAccount.deposit(acct, 5)`), T inheritance (`Savings(BankAccount)` overrides one method), P.
- **cs-efficiency** (11,2) Counting Steps: a First Look at Efficiency — pre: cs-search-sort, cs-recursion · math: a1-exp-functions · lab: A linear search on n = 4, 8, 16 (programs select; readout: comparisons), T nested-loop pairs count n², P which grows faster.
- **cs-modules** (12,8) Modules and Libraries — pre: cs-files, cs-2d-data · math: none · lab: T `import math` (`math.sqrt`, `math.pi`), T `random.seed(1)` makes `random.randint` repeatable, T `if __name__ == "__main__":`, P.

## Unlocks into other fields
Last nodes feed `data-structures` (cs-lists, cs-recursion, cs-efficiency, cs-classes) and `computer-systems` (cs-binary, cs-types). Write `unlocksWhy` only for written nodes.
