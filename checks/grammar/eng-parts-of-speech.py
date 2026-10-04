# content: 6bd09323b03d
# eng-parts-of-speech: The Parts of Speech
# Language checks. Story passages are compared with the verbatim source text (checked against the
# Project Gutenberg editions named below; curly quotes and apostrophes normalised). Tagging and answers
# are compared with an independent analysis written here.
import re
plain = lambda h: re.sub(r'<[^>]+>', '', h)

def tags(tokens):
    out = []
    for t in tokens.split():
        m = re.match(r'^(.*?)_([a-z]+)\*?(#[a-z0-9]+)?$', t)
        if m: out.append((m.group(1), m.group(2)))
    return out

S = page['stories']
SOURCES = [
    # Pride and Prejudice, Project Gutenberg #1342, ch. 1
    "It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife.",
    # Moby-Dick, Project Gutenberg #2701, ch. 1
    "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    # A Christmas Carol, Project Gutenberg #46, Stave One
    "“A merry Christmas, uncle! God save you!” cried a cheerful voice. It was the voice of Scrooge’s nephew, who came upon him so quickly that this was the first intimation he had of his approach.\n“Bah!” said Scrooge, “Humbug!”",
    # The Great Gatsby, Project Gutenberg #64317, ch. I (US public domain since 2021)
    "In my younger and more vulnerable years my father gave me some advice that I’ve been turning over in my mind ever since.",
    # Alice's Adventures in Wonderland, Project Gutenberg #11, ch. I ("never" is italic in the source)
    "Down, down, down. Would the fall never come to an end? “I wonder how many miles I’ve fallen by this time?” she said aloud.",
    # Narrative of the Life of Frederick Douglass, Project Gutenberg #23, ch. I
    "I was born in Tuckahoe, near Hillsborough, and about twelve miles from Easton, in Talbot county, Maryland.",
]
check("formal", len(S) == len(SOURCES), "one verified source per story")
for i, src in enumerate(SOURCES):
    quote(f"story[{i}]", S[i]['tokens'], src)
    check(f"story[{i}]", S[i]['year'] <= 1930, "published before 1931: US public domain in 2026")

# Independent tagging (traditional eight; ar = article). Compared word by word with the page's tokens.
TRUTH = [
    "pr v ar n av v cj ar aj n p n p ar aj n v v p n p ar n",
    "v pr n aj n av av v av av av v aj cj aj n p pr n cj pr aj v v pr p n pr v pr v v av ar n cj v ar aj n p ar n",
    "ar aj n n n v pr v ar aj n pr v ar n p n n pr v p pr av av cj pr v ar aj n pr v p pr n ij v n ij",
    "p pr aj cj av aj n pr n v pr aj n pr pr v v v av p pr n av av",
    "av av av v ar n av v p ar n pr v av aj n pr v v p aj n pr v av",
    "pr v v p n p n cj av aj n p n p n n n",
]
for i, want in enumerate(TRUTH):
    got = [t for _, t in tags(S[i]['tokens'])]
    check(f"story[{i}]", got == want.split(), f"tags differ: page {' '.join(got)}")

# Claims in the story notes
nouns = [w for w, t in tags(S[0]['tokens']) if t == 'n']
check("story[0]", nouns == ['truth', 'man', 'possession', 'fortune', 'want', 'wife'], "six nouns as listed")
check("story[1]", [w for w, t in tags(S[1]['tokens']) if t == 'pr'] == ['me', 'my', 'nothing', 'me', 'I', 'I'], "pronouns as listed")
check("story[2]", [w for w, t in tags(S[2]['tokens']) if t == 'v' and w != 'save'] == ['cried', 'was', 'came', 'was', 'had', 'said'], "narrative verbs as listed")
check("story[3]", not any(t == 'ar' for _, t in tags(S[3]['tokens'])), "the Gatsby sentence has no article")
advs = [w for w, t in tags(S[4]['tokens']) if t == 'av']
check("story[4]", advs == ['Down', 'down', 'down', 'never', 'how', 'aloud'] and not any(w.endswith('ly') for w in advs), "adverbs as listed, none in -ly")
check("story[5]", [w for w, t in tags(S[5]['tokens']) if t == 'p'] == ['in', 'near', 'from', 'in'], "four prepositions as listed")

# Worked example: The old man the boats.
ans = plain(page['example']['answer'])
for w, cls in [("The", "article"), ("old", "adjective used as a noun"), ("man", "verb"), ("boats", "noun")]:
    check("example", re.search(rf"\b{w}: {cls}", ans) is not None, f"{w} should be {cls}")

# Practice
pa = [plain(p['a']) for p in page['practice']]
for part, cls in zip("abcd", ["adverb", "adjective", "noun", "verb"]):
    check("practice[0]", f"({part}) {cls}" in pa[0], f"fast ({part}) should be {cls}")
for w, cls in [("Alas", "interjection"), ("old", "adjective"), ("ship", "noun"), ("sank", "verb"), ("slowly", "adverb"), ("beneath", "preposition"), ("waves", "noun")]:
    check("practice[1]", re.search(rf"\b{w} {cls}", pa[1]) is not None, f"{w} should be {cls}")
check("practice[2]", "(a) preposition" in pa[2] and "(b) adverb" in pa[2], "up: preposition, then adverb particle")
for part, cls in zip("abcd", ["adjective", "pronoun", "conjunction", "pronoun"]):
    check("practice[3]", f"({part}) {cls}" in pa[3], f"that ({part}) should be {cls}")
