# content: 766c420ef547
# eng-nouns-pronouns: Nouns & Pronouns
# Language checks. Story passages are compared with the verbatim source text (checked against the
# Project Gutenberg editions named below; straight quotes normalised to curly). Tagging, plurals,
# possessives and answers are compared with an independent analysis written here.
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
    # Little Women, Project Gutenberg #514, Chapter One "Playing Pilgrims" (first four paragraphs)
    "“Christmas won’t be Christmas without any presents,” grumbled Jo, lying on the rug.\n"
    "“It’s so dreadful to be poor!” sighed Meg, looking down at her old dress.\n"
    "“I don’t think it’s fair for some girls to have plenty of pretty things, and other girls nothing at all,” added little Amy, with an injured sniff.\n"
    "“We’ve got Father and Mother, and each other,” said Beth contentedly from her corner.",
    # Jane Eyre: An Autobiography, Project Gutenberg #1260, Chapter I (first paragraph)
    "There was no possibility of taking a walk that day. We had been wandering, indeed, in the leafless shrubbery an hour in the morning; but since dinner (Mrs. Reed, when there was no company, dined early) the cold winter wind had brought with it clouds so sombre, and a rain so penetrating, that further outdoor exercise was now out of the question.",
    # Pride and Prejudice, Project Gutenberg #1342, Chapter 1 ("Do not you" is this edition's reading; "You" italic)
    "“My dear Mr. Bennet,” said his lady to him one day, “have you heard that Netherfield Park is let at last?”\n"
    "Mr. Bennet replied that he had not.\n"
    "“But it is,” returned she; “for Mrs. Long has just been here, and she told me all about it.”\n"
    "Mr. Bennet made no answer.\n"
    "“Do not you want to know who has taken it?” cried his wife, impatiently.\n"
    "“You want to tell me, and I have no objection to hearing it.”",
]
check("formal", len(S) == len(SOURCES), "one verified source per story")
for i, src in enumerate(SOURCES):
    quote(f"story[{i}]", S[i]['tokens'], src)
    check(f"story[{i}]", S[i]['year'] <= 1930, "published before 1931: US public domain in 2026")

# Independent tagging: every tagged word, in order, with its tag.
TRUTH = [
    [("Christmas", "pn"), ("Christmas", "pn"), ("presents", "cn"), ("Jo", "pn"), ("rug", "cn"), ("It", "pr"), ("Meg", "pn"), ("her", "pr"), ("dress", "cn"),
     ("I", "pr"), ("it", "pr"), ("girls", "cn"), ("plenty", "cn"), ("things", "cn"), ("girls", "cn"), ("nothing", "pr"), ("Amy", "pn"), ("sniff", "cn"),
     ("We", "pr"), ("Father", "pn"), ("Mother", "pn"), ("each", "pr"), ("other", "pr"), ("Beth", "pn"), ("her", "pr"), ("corner", "cn")],
    [("possibility", "ab"), ("walk", "ab"), ("day", "ab"), ("shrubbery", "co"), ("hour", "ab"), ("morning", "ab"), ("dinner", "ab"), ("(Mrs.", "pn"), ("Reed", "pn"),
     ("company", "co"), ("winter", "ab"), ("wind", "co"), ("clouds", "co"), ("rain", "co"), ("exercise", "ab"), ("question", "ab")],
    [("My", "ps"), ("Mr.", "an"), ("Bennet", "an"), ("his", "ps"), ("lady", "an"), ("him", "pr"), ("you", "pr"), ("Netherfield", "an"), ("Park", "an"),
     ("Mr.", "an"), ("Bennet", "an"), ("he", "pr"), ("it", "pr"), ("she", "pr"), ("Mrs.", "an"), ("Long", "an"), ("she", "pr"), ("me", "pr"), ("it", "pr"),
     ("Mr.", "an"), ("Bennet", "an"), ("you", "pr"), ("who", "pr"), ("it", "pr"), ("his", "ps"), ("You", "pr"), ("me", "pr"), ("I", "pr"), ("it", "pr")],
]
for i, want in enumerate(TRUTH):
    got = tags(S[i]['tokens'])
    check(f"story[{i}]", got == want, f"tags differ: page {got}")

# Claims in the story notes
LW = tags(S[0]['tokens'])
check("story[0]", [w for w, t in LW if t == 'pn' and w in ('Jo', 'Meg', 'Amy', 'Beth')] == ['Jo', 'Meg', 'Amy', 'Beth'], "four heroines named in order Jo, Meg, Amy, Beth")
check("story[0]", all(w in [x for x, t in LW if t == 'cn'] for w in ['presents', 'rug', 'dress', 'things', 'corner']), "common nouns listed in the note")
check("story[0]", all(w in [x for x, t in LW if t == 'pr'] for w in ['I', 'We', 'her', 'nothing', 'each', 'other']), "pronouns listed in the note")
JE = tags(S[1]['tokens'])
first = S[1]['tokens'].split(' . ')[0]
check("story[1]", [w for w, t in tags(first)] == ['possibility', 'walk', 'day'] and all(t == 'ab' for _, t in tags(first)), "first sentence: three nouns, all abstract")
check("story[1]", all((w, 'ab') in JE for w in ['hour', 'morning', 'exercise', 'question']) and all((w, 'co') in JE for w in ['shrubbery', 'wind', 'clouds', 'rain']), "abstract and concrete nouns as listed")
check("story[1]", 'a rain_co' in S[1]['tokens'] and 'no company_co' in S[1]['tokens'], "rain used with a; company after no")
PP = tags(S[2]['tokens'])
check("story[2]", [w for w, t in PP if t == 'pr' and w.lower() in ('he', 'she', 'him')] == ['him', 'he', 'she', 'she'], "third-person personal pronouns: him, he, she, she")
check("story[2]", S[2]['tokens'].index('she_pr#she1') < S[2]['tokens'].index('Long_an') < S[2]['tokens'].index('she_pr#she2'), "second she follows Mrs. Long")

# Plurals and possessives used on the page (independent table)
PL = {"church": "churches", "city": "cities", "day": "days", "knife": "knives", "child": "children", "criterion": "criteria", "sheep": "sheep", "mother-in-law": "mothers-in-law",
      "box": "boxes", "wife": "wives", "leaf": "leaves", "roof": "roofs", "man": "men", "foot": "feet", "ox": "oxen", "scarf": "scarves", "passer-by": "passers-by", "toothbrush": "toothbrushes", "phenomenon": "phenomena"}
def poss(word, plural):
    return word + ('’' if plural and word.endswith('s') else '’s')
check("formal", poss("sister", True) == "sister’s" and poss("sisters", True) == "sisters’" and poss("children", True) == "children’s", "possessive rule")
p0 = plain(page['practice'][0]['a'])
for part, sg in zip("abcdefgh", ["church", "city", "day", "knife", "child", "criterion", "sheep", "mother-in-law"]):
    check("practice[0]", re.search(rf"\({part}\) {re.escape(PL[sg])}\b", p0) is not None, f"plural of {sg} should be {PL[sg]}")
p1 = plain(page['practice'][1]['a'])
for part, want in zip("abc", [poss("boss", False), poss("bosses", True), poss("women", True)]):
    check("practice[1]", f"({part}) the {want}" in p1, f"({part}) should be the {want}")
check("practice[1]", "James’s in Chicago" in p1 and "James’ in AP" in p1, "James: Chicago James’s, AP James’")
check("practice[1]", "Jo and Meg’s house" in p1, "joint possession: one ’s on the last name")
STEPS = page['steps']['items'] if isinstance(page['steps'], dict) else page['steps']
txt = plain(' '.join(STEPS) + page['formal'] + ' '.join(m['fix'] for m in page['mistakes']))
for sg in ["church", "city", "wife", "man", "foot", "child", "criterion", "sheep", "box", "day"]:
    if re.search(rf"\b{sg}\b", txt):
        check("formal", PL[sg] in txt, f"{sg} appears with its plural {PL[sg]}")
for bad in ["wifes", "leafs", "childs", "foots", "criterias", "phenomenons", "citys", "dayes", "sheeps", "mother-in-laws"]:
    check("formal", not re.search(rf"\b{bad}\b", plain(txt + page['example']['answer'])), f"wrong plural {bad} in the text")

# Pronoun paradigm in the formal display
disp = plain(page['formal'])
for row in ["I · me · my · mine · myself", "you · you · your · yours · yourself", "we · us · our · ours · ourselves", "you · you · your · yours · yourselves", "they · them · their · theirs · themselves"]:
    check("formal", row in disp, f"paradigm row {row}")
check("formal", "he / she / it · him / her / it · his / her / its · his / hers / (its) · himself / herself / itself" in disp, "3rd singular row")

# Worked example: Jo and Meg's mother knitted herself a scarf, and the girls admired it.
ans = plain(page['example']['answer'])
check("example", "herself, reflexive, antecedent Jo and Meg’s mother" in ans, "herself is reflexive, antecedent the mother")
check("example", "it, personal (3rd person singular, objective), antecedent a scarf" in ans, "it is personal, objective, antecedent a scarf")
check("example", all(n in ans for n in ["Jo", "Meg’s", "mother", "scarf", "girls"]) and "joint possessive" in ans, "nouns listed, joint possession")
check("example", "scarves (or scarfs)" in plain(' '.join(l['note'] for l in page['example']['lines'])), "plural of scarf")

# Practice 2: noun classification
p2 = plain(page['practice'][2]['a'])
for w, cls in [("committee", "common, concrete, count, collective"), ("courage", "common, abstract, noncount"), ("members", "common, concrete, count"), ("coffee", "common, concrete, noncount"), ("Boston", "proper, concrete")]:
    check("practice[2]", f"{w}: {cls}" in p2, f"{w} should be {cls}")
check("practice[2]", "Its is a possessive pronoun" in p2 and "antecedent is the committee" in p2, "its: possessive pronoun, antecedent the committee")

# Practice 3: pronoun types
p3 = plain(page['practice'][3]['a'])
for w, cls in [("Who", "interrogative"), ("you", "personal"), ("that", "demonstrative"), ("Nobody", "indefinite"), ("themselves", "intensive"), ("each other", "reciprocal"), ("who", "relative")]:
    check("practice[3]", re.search(rf"\b{w}: {cls}", p3) is not None, f"{w} should be {cls}")
