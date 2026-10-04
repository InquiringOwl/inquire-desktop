# content: b03bfb40c333
# eng-clauses: Independent & Dependent Clauses
import re
plain = lambda h: re.sub(r"<[^>]+>", "", h)

def tags(tokens):
    out = []
    for t in tokens.split():
        m = re.match(r"^(.*?)_([a-z]+)\*?(#[a-z0-9]+)?$", t)
        if m: out.append((m.group(1), m.group(2)))
    return out

def W(tokens, *tg):
    """words carrying any of the given tags, in order, as one string"""
    return " ".join(w for w, t in tags(tokens) if t in tg)

S = page["stories"]

WALDEN = "When I wrote the following pages, or rather the bulk of them, I lived alone, in the woods, a mile from any neighbor, in a house which I had built myself, on the shore of Walden Pond, in Concord, Massachusetts, and earned my living by the labor of my hands only."
SOURCES = [
    WALDEN,  # Walden, Project Gutenberg #205, Economy, first sentence
    # Adventures of Huckleberry Finn, Project Gutenberg #76, ch. I
    "You don’t know about me without you have read a book by the name of The Adventures of Tom Sawyer; but that ain’t no matter.",
    # Pride and Prejudice, Project Gutenberg #1342, ch. I, first two sentences
    "It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife. However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered as the rightful property of some one or other of their daughters.",
]
check("formal", len(S) == len(SOURCES), "one source per story")
for i, src in enumerate(SOURCES):
    quote(f"story[{i}]", S[i]["tokens"], src)
    check(f"story[{i}]", S[i]["year"] <= 1930, "public domain")
t = [s["tokens"] for s in S]
# Walden: finite verbs wrote, lived, earned, had built -> 3 clauses (lived/earned share I)
check("story[0]", W(t[0], "mk") == "When which", "markers")
check("story[0]", W(t[0], "dc") == "I wrote the following pages or rather the bulk of them I had built myself", "dependent clauses (adverb clause of time; relative clause)")
check("story[0]", W(t[0], "ic") == "I lived alone in the woods a mile from any neighbor in a house on the shore of Walden Pond in Concord Massachusetts and earned my living by the labor of my hands only", "independent clause with compound predicate")
check("story[0]", len(re.findall(r"\bI\b", W(t[0], "ic"))) == 1 and {"lived", "earned"} <= set(W(t[0], "ic").split()), "one subject I, two verbs lived/earned: one independent clause; with the two dependent clauses, three clauses in all")
# Huck
check("story[1]", W(t[1], "mk") == "without", "dialect subordinator without = unless")
check("story[1]", W(t[1], "dc") == "you have read a book by the name of The Adventures of Tom Sawyer", "dependent clause")
check("story[1]", W(t[1], "ic") == "You don’t know about me that ain’t no matter", "two independent clauses; but does not subordinate")
# P&P: 2 IC + 3 DC = five clauses
check("story[2]", W(t[2], "mk") == "that However that", "markers")
check("story[2]", W(t[2], "ic") == "It is a truth universally acknowledged this truth is so well fixed in the minds of the surrounding families", "independent clauses")
check("story[2]", W(t[2], "dc") == "a single man in possession of a good fortune must be in want of a wife little known the feelings or views of such a man may be on his first entering a neighbourhood he is considered as the rightful property of some one or other of their daughters", "three dependent clauses")
check("story[2]", len(W(t[2], "mk").split()) == 3 and 2 + 3 == 5, "2 independent + 3 dependent = five clauses (entering is a gerund, no clause)")

a = plain(page["example"]["answer"])
check("example", a.startswith("[Because the fog was thick], [we tied up at the island [where Jim had hidden the canoe]]."), "bracketing")
check("example", "One independent clause, two dependent clauses" in a and "adverb clause" in a and "adjective clause" in a, "count and jobs")
pa = [plain(p["a"]) for p in page["practice"]]
check("practice[0]", pa[0].startswith("Two:") and "When the mail came is dependent" in pa[0] and "the dog barked is independent" in pa[0], "dog barked / when mail came")
check("practice[1]", pa[1].startswith("No.") and "present participle" in pa[1] and "no subject" in pa[1], "hoping for a letter: not a clause in traditional grammar")
check("practice[2]", pa[2].startswith("[The students [who finished early] left [before the bell rang]].") and "Three clauses" in pa[2], "bracketing of the students sentence")
check("practice[3]", pa[3].startswith("[I wonder [whether the man [who sold us the raft] knew [that it leaked]]].") and "Four clauses, one independent" in pa[3], "four clauses")
