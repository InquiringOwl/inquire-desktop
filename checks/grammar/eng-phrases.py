# content: eb57fd957f50
# eng-phrases: Phrases
# Language checks. Story passages are compared with the verbatim source text (checked against the
# Project Gutenberg editions named below with WebFetch; straight quotes and apostrophes normalised to
# curly ones). Tagging, the counts claimed in the story notes, the worked example and the practice
# answers are compared with an independent analysis written here.
import re
plain = lambda h: re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', h))

def tagged(tokens):
    out = []
    for t in tokens.split():
        m = re.match(r'^(.*?)_([a-z]+)\*?(#[a-z0-9]+)?$', t)
        if m: out.append((m.group(1).replace('~', ' '), m.group(2)))
    return out

def spans(tokens):
    """Runs of consecutive tokens with the same tag; any untagged token (word or punctuation) ends a run."""
    out, prev = [], None
    for tok in tokens.split():
        m = re.match(r'^(.*?)_([a-z]+)\*?(#[a-z0-9]+)?$', tok)
        if not m:
            prev = None
            continue
        w, t = m.group(1), m.group(2)
        if prev == t: out[-1] = (t, out[-1][1] + ' ' + w)
        else: out.append((t, w))
        prev = t
    return out

words = lambda text: re.findall(r"[A-Za-z][A-Za-z.’'-]*", text)

S = page['stories']
SOURCES = [
    # The Legend of Sleepy Hollow, Project Gutenberg #41, first sentence of the story
    "In the bosom of one of those spacious coves which indent the eastern shore of the Hudson, at that broad expansion of the river denominated by the ancient Dutch navigators the Tappan Zee, and where they always prudently shortened sail and implored the protection of St. Nicholas when they crossed, there lies a small market town or rural port, which by some is called Greensburgh, but which is more generally and properly known by the name of Tarry Town.",
    # Narrative of the Life of Frederick Douglass, Project Gutenberg #23, Chapter I, second sentence
    "I have no accurate knowledge of my age, never having seen any authentic record containing it.",
    # Alice's Adventures in Wonderland, Project Gutenberg #11, Chapter I, second paragraph
    "So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.",
    # A Christmas Carol, Project Gutenberg #46, Stave One (consecutive sentences)
    "Oh! But he was a tight-fisted hand at the grind-stone, Scrooge! a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner! Hard and sharp as flint, from which no steel had ever struck out generous fire; secret, and self-contained, and solitary as an oyster.",
]
check("formal", len(S) == len(SOURCES), "one verified source per story")
for i, src in enumerate(SOURCES):
    quote(f"story[{i}]", S[i]['tokens'], src)
    check(f"story[{i}]", S[i]['year'] <= 1930, "published before 1931: US public domain in 2026")
    check(f"story[{i}]", all(t in S[i]['tags'] for _, t in tagged(S[i]['tokens'])), "every tag is defined in the story's tag set")
    check(f"story[{i}]", all(f in S[i]['tags'] for f in S[i]['focus']), "focus tags are defined")

# Colours follow the page legend: c1 noun phrase (and noun heads), c2 VP, c3 adjective phrase (and
# determiners / pre-modifiers), c4 adverb phrase, c5 prepositional phrase (prepositions, post-modifiers).
COL = {'np': 'c1', 'app': 'c1', 'oh': 'c1', 'hd': 'c1', 'vp': 'c2', 'ajp': 'c3', 'dt': 'c3', 'pm': 'c3',
       'avp': 'c4', 'ph': 'c5', 'po': 'c5'}
for i, st in enumerate(S):
    check(f"story[{i}]", all(COL[k] == v['c'] for k, v in st['tags'].items()), "tag colours match the legend")

# Independent analysis, as spans.
TRUTH = [
    # every preposition (head of a PP) and the head of its object
    [('ph', 'In'), ('oh', 'bosom'), ('ph', 'of'), ('oh', 'one'), ('ph', 'of'), ('oh', 'coves'), ('ph', 'of'), ('oh', 'Hudson'),
     ('ph', 'at'), ('oh', 'expansion'), ('ph', 'of'), ('oh', 'river'), ('ph', 'by'), ('oh', 'navigators'),
     ('ph', 'of'), ('oh', 'St. Nicholas'), ('ph', 'by'), ('oh', 'some'), ('ph', 'by'), ('oh', 'name'), ('ph', 'of'), ('oh', 'Tarry Town')],
    # anatomy of the two object noun phrases
    [('dt', 'no'), ('pm', 'accurate'), ('hd', 'knowledge'), ('po', 'of my age'),
     ('dt', 'any'), ('pm', 'authentic'), ('hd', 'record'), ('po', 'containing it')],
    # adjective and adverb phrases
    [('ajp', 'own'), ('avp', 'as well as she could'), ('ajp', 'hot'), ('ajp', 'very sleepy and stupid'),
     ('ajp', 'worth the trouble of getting up and picking the daisies'), ('avp', 'suddenly'), ('ajp', 'pink'), ('avp', 'close by her')],
    # noun phrases, the appositive, and the verbless adjective phrases
    [('np', 'he'), ('np', 'a tight-fisted hand at the grind-stone'), ('np', 'Scrooge'),
     ('app', 'a squeezing'), ('app', 'wrenching'), ('app', 'grasping'), ('app', 'scraping'), ('app', 'clutching'), ('app', 'covetous'), ('app', 'old sinner'),
     ('ajp', 'Hard and sharp as flint'), ('ajp', 'from which no steel had ever struck out generous fire'),
     ('ajp', 'secret'), ('ajp', 'and self-contained'), ('ajp', 'and solitary as an oyster')],
]
for i, want in enumerate(TRUTH):
    got = spans(S[i]['tokens'])
    check(f"story[{i}]", got == want, f"spans differ: page {got}")

# Claims in the notes
preps = [w for w, t in tagged(S[0]['tokens']) if t == 'ph']
check("story[0]", len(preps) == 11, "eleven prepositional phrases")
first_pp = SOURCES[0].split(',')[0]
check("story[0]", len(words(first_pp)) == 17 and first_pp.endswith('of the Hudson'), "the first PP is seventeen words long")
before_main = SOURCES[0].split(', there lies')[0]
check("story[0]", len(words(before_main)) == 50, "the main clause arrives at the fifty-first word")
check("story[0]", words(SOURCES[0].split('the ancient')[0])[-1] == 'by' and 'the ancient Dutch navigators' in SOURCES[0], "navigators has three pre-modifiers: the, ancient, Dutch")
sp1 = spans(S[1]['tokens'])
check("story[1]", [t for t, _ in sp1] == ['dt', 'pm', 'hd', 'po'] * 2, "two noun phrases with the same anatomy")
sp2 = dict((w, t) for t, w in spans(S[2]['tokens']))
worth = 'worth the trouble of getting up and picking the daisies'
check("story[2]", sp2.get(worth) == 'ajp' and len(worth.split()) == 10, "the worth phrase is an adjective phrase ten words long")
check("story[2]", all(sp2.get(w) == 'ajp' for w in ['own', 'hot', 'pink']), "own, hot and pink are one-word adjective phrases")
check("story[2]", all(sp2.get(w) == 'avp' for w in ['as well as she could', 'suddenly', 'close by her']), "three adverb phrases")
app = [w for w, t in tagged(S[3]['tokens']) if t == 'app']
check("story[3]", app[-1] == 'sinner' and app[0] == 'a' and len(app[1:-1]) == 7, "seven pre-modifiers before the head sinner")
check("story[3]", [w for w in app[1:6] if w.endswith('ing')] == app[1:6], "five participial adjectives in -ing")
check("story[3]", not any(t == 'ajp' and w in ('was', 'is', 'were') for w, t in tagged(S[3]['tokens'])), "the adjective phrases have no main verb")

# ---- example: The keeper of the lighthouse saw a ship with torn sails ----
ex = plain(page['example']['answer'])
HEADS = [('keeper', 'NP'), ('of', 'PP'), ('lighthouse', 'NP'), ('saw', 'VP'), ('ship', 'NP'), ('with', 'PP'), ('sails', 'NP'), ('torn', 'AjP')]
for h, cat in HEADS:
    check("example", f"{h} ({cat})" in ex, f"{h} should head a {cat}")
check("example", "[a ship [with [torn sails]]]" in ex, "with torn sails sits inside the object NP")
check("example", "adjectival, inside the NP headed by ship" in ex, "PP attachment stated")
lines = ' '.join(plain(l['math']) + ' ' + l['note'] for l in page['example']['lines'])
check("example", "saw it with a telescope" in lines, "contrast: an adverbial PP stays outside the NP")

# ---- practice ----
pa = [plain(p['a']) for p in page['practice']]
for part, typ, head in [("a", "noun phrase", "trees"), ("b", "adjective phrase", "proud"), ("c", "adverb phrase", "carefully"),
                        ("d", "prepositional phrase", "under")]:
    check("practice[0]", f"({part}) {typ}, head {head}" in pa[0], f"({part}) {typ} headed by {head}")
check("practice[0]", "(e) verb phrase; its head is the verb string has been sleeping" in pa[0], "(e) VP headed by the verb string, as formal says")
check("practice[1]", "On the hill is adjectival" in pa[1] and "In the night is adverbial" in pa[1], "on the hill adjectival, in the night adverbial")
check("practice[1]", "It burned in the night" in pa[1], "pronoun test")
for part, ans in [("a", "absolute phrase"), ("b", "appositive noun phrase"), ("c", "clause"), ("d", "phrase")]:
    check("practice[2]", f"({part}) {ans}" in pa[2], f"({part}) should be {ans}")
check("practice[2]", "finite verb (passed)" in pa[2], "after the storm passed has a finite verb")
check("practice[3]", "[hit [the man] [with the umbrella]]" in pa[3] and "[hit [the man [with the umbrella]]]" in pa[3], "both bracketings")
check("practice[3]", "She hit him with the umbrella" in pa[3] and "(She hit him)" in pa[3], "pronoun test separates them")
