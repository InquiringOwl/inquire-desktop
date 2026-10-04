# content: 17a9f1173dbf
# eng-function-words: Prepositions & Conjunctions
# Language checks. Story passages are compared with the verbatim source text (checked against the
# Project Gutenberg editions named below; straight quotes and apostrophes normalised to curly, and
# Gutenberg's "--" to an em dash). Tagging and answers are compared with an independent analysis written here.
import re
plain = lambda h: re.sub(r'<[^>]+>', '', h)

def tags(tokens):
    out = []
    for t in tokens.split():
        m = re.match(r'^(.*?)_([a-z]+)\*?(#[a-z0-9]+)?$', t)
        if m: out.append((m.group(1).replace('~', ' '), m.group(2)))
    return out

S = page['stories']
SOURCES = [
    # Emma, Project Gutenberg #158, Chapter I, first paragraph
    "Emma Woodhouse, handsome, clever, and rich, with a comfortable home and happy disposition, seemed to unite some of the best blessings of existence; and had lived nearly twenty-one years in the world with very little to distress or vex her.",
    # Abraham Lincoln's Second Inaugural Address, Project Gutenberg #8, final paragraph (that edition uses semicolons after "none" and "all"; "--" before "to do")
    "With malice toward none; with charity for all; with firmness in the right, as God gives us to see the right, let us strive on to finish the work we are in; to bind up the nation’s wounds; to care for him who shall have borne the battle, and for his widow, and his orphan—to do all which may achieve and cherish a just and lasting peace among ourselves, and with all nations.",
    # Alice's Adventures in Wonderland, Project Gutenberg #11, Chapter I, first paragraph
    "Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, “and what is the use of a book,” thought Alice “without pictures or conversations?”",
    # Moby Dick; Or, The Whale, Project Gutenberg #2701, Chapter 1 (Loomings), first paragraph, from its fourth sentence
    "Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people’s hats off—then, I account it high time to get to sea as soon as I can.",
]
check("formal", len(S) == len(SOURCES), "one verified source per story")
for i, src in enumerate(SOURCES):
    quote(f"story[{i}]", S[i]['tokens'], src)
    check(f"story[{i}]", S[i]['year'] <= 1930, "published before 1931: US public domain in 2026")

def tagged(i, t):
    return [w for w, g in tags(S[i]['tokens']) if g == t]

# --- Emma: independent analysis. Prepositions and their objects; coordinating conjunctions.
check("story[0]", tagged(0, 'p') == ['with', 'of', 'of', 'in', 'with'], "five prepositions: with, of, of, in, with")
check("story[0]", tagged(0, 'cc') == ['and', 'and', 'and', 'or'], "four coordinating conjunctions")
OBJ0 = "a comfortable home happy disposition the best blessings existence the world very little to distress vex her"
check("story[0]", ' '.join(tagged(0, 'o')) == OBJ0, "objects of the prepositions")
n0 = plain(S[0]['note'])
check("story[0]", "five prepositions and four coordinating conjunctions" in n0, "note's counts")

# --- Lincoln: eleven prepositions (on, up = particles; to + verb = infinitive marker; as = subordinator).
P1 = ['With', 'toward', 'with', 'for', 'with', 'in', 'in', 'for', 'for', 'among', 'with']
check("story[1]", tagged(1, 'p') == P1, f"prepositions: {tagged(1, 'p')}")
words1 = [w for w, _ in tags(S[1]['tokens'])]
untagged = [t for t in S[1]['tokens'].split() if '_' not in t]
for w in ['on', 'up', 'to', 'as']:
    check("story[1]", w in untagged, f"{w} must not be tagged as a preposition")
OBJ1 = "malice none charity all firmness the right him who shall have borne the battle his widow his orphan ourselves all nations"
check("story[1]", ' '.join(tagged(1, 'o')) == OBJ1, "objects of the prepositions")
check("story[1]", S[1]['tokens'].split().index('in_p#instr') + 1 < len(S[1]['tokens'].split()) and S[1]['tokens'].split()[S[1]['tokens'].split().index('in_p#instr') + 1] == ';', "stranded in ends its clause")
check("story[1]", "eleven prepositions" in plain(S[1]['note']) and len(P1) == 11, "note's count")

# --- Alice: coordinating conjunctions and the two independent clauses joined by but.
check("story[2]", tagged(2, 'cc') == ['and', 'or', 'but', 'or', 'and', 'or'], "six coordinating conjunctions")
check("story[2]", ' '.join(tagged(2, 'a')) == "once twice she had peeped into the book her sister was reading", "first clause (or untagged)")
check("story[2]", ' '.join(tagged(2, 'b')) == "it had no pictures conversations in it", "second clause (or untagged)")
check("story[2]", "she had peeped into the book" in plain(S[2]['note']) and "it had no pictures" in plain(S[2]['note']), "note names the clauses")

# --- Moby-Dick: four whenever-clauses before the main clause; that (result) and as soon as (time).
check("story[3]", tagged(3, 'sc') == ['Whenever', 'whenever', 'whenever', 'whenever', 'that', 'as soon as'], f"subordinators: {tagged(3, 'sc')}")
check("story[3]", tagged(3, 'cc') == ['and', 'and', 'and'], "three coordinating conjunctions")
check("story[3]", ' '.join(tagged(3, 'mc')) == "then I account it high time to get to sea", "main clause")
toks3 = tags(S[3]['tokens'])
first_mc = next(j for j, (_, g) in enumerate(toks3) if g == 'mc')
check("story[3]", sum(1 for w, g in toks3[:first_mc] if w.lower() == 'whenever') == 4, "four whenever-clauses before the main clause")
check("story[3]", "Four dependent clauses" in plain(S[3]['note']), "note's count")

# --- Worked example: Although the tide was turning, the crew waited for the captain; however, he did not come, so they sailed without him.
ans = plain(page['example']['answer'])
for w, cls in [("Although", "subordinating conjunction"), ("for", "preposition, object the captain"), ("however", "conjunctive adverb"), ("so", "coordinating conjunction"), ("without", "preposition, object him")]:
    check("example", re.search(rf"\b{w}: {cls}", ans) is not None, f"{w} should be {cls}")
check("example", "Four finite verbs" in page['example']['lines'][0]['note'], "four clauses")

# --- Practice
pa = [plain(p['a']) for p in page['practice']]
for part, cls in zip("abcd", ["preposition", "subordinating conjunction", "coordinating conjunction", "conjunctive adverb"]):
    check("practice[0]", f"({part}) {cls}" in pa[0], f"({part}) should be {cls}")
check("practice[1]", "The bridge was closed; therefore, we took the ferry." in pa[1], "semicolon + conjunctive adverb + comma")
check("practice[1]", "Because the bridge was closed, we took the ferry." in pa[1], "comma after introductory clause")
check("practice[1]", "We took the ferry because the bridge was closed." in pa[1], "no comma when the clause is last")
check("practice[2]", "Neither the mate nor the sailors saw the reef." in pa[2], "neither … nor")
check("practice[2]", "comma splice" in pa[2] and "The tide was high, so the boats left early." in pa[2], "fix the comma splice")
check("practice[2]", "She plays not only the violin but also the cello." in pa[2], "correlative placement")
check("practice[3]", "(a) at; its object is what" in pa[3] and "(b) from; its object is the omitted relative pronoun" in pa[3], "stranded prepositions and their objects")
check("practice[3]", "This is the harbour from which we sailed." in pa[3] and "At what are you looking?" in pa[3], "pied-piped rewrites")
