# Tree spec: English

Field map (`DB.subjectMaps.english`, fields in `DB.fields` with `subject: "english"`), 21 fields:
- **Language & Writing**: Grammar & Usage → Composition I → Composition II, Intro to Creative Writing, Intro to Literature; Grammar → Intro to English Linguistics; Grammar → Vocabulary & Word Study (field `vocabulary`, its own spec `web/TREE-SPEC-VOCAB.md`, data `web/src/data-vocabulary.js`).
- **Literature Surveys** (all ← Intro to Literature): British Lit I (to 1798), British Lit II (1798–now), American Lit I (to 1865), American Lit II (1865–now), World Literature.
- **Upper-Division Core**: Shakespeare ← Brit I; Literary Theory & Criticism ← Intro Lit + Comp II; Advanced Composition & Rhetoric ← Comp II; History of the English Language ← Linguistics + Brit I.
- **Specialisations & Capstone**: Drama ← Shakespeare; Poetry & Poetics ← Brit II + Theory; The Novel ← Theory; Advanced Creative Writing Workshop ← Creative Writing + Rhetoric; Senior Seminar ← Theory + Novel + Rhetoric.

Inquire field names for `beyond`: Composition I; Composition II; Introduction to Creative Writing; Introduction to Literature; Introduction to English Linguistics; British Literature I/II; American Literature I/II; World Literature; Shakespeare; Literary Theory & Criticism; Advanced Composition & Rhetoric; History of the English Language; Drama; Poetry & Poetics; The Novel; Advanced Creative Writing Workshop; Senior Seminar.

# Grammar & Usage tree (`DB.trees.grammar`, 21 nodes)

Eras: Words (cols 0–1) → The Simple Sentence (2–3) → Clauses & Sentences (4–5) → Usage & Mechanics (6–8).
Standard: a college grammar and usage course (the grammar chapters of a college handbook such as the *Little, Brown Handbook* / *Hacker's A Writer's Reference*, with the analysis of Huddleston & Pullum's *A Student's Introduction to English Grammar* noted where it differs). Traditional terminology first; modern analysis in `formal` where it matters.

Each node below lists: title · lab file · prerequisites → unlocks · scope · lab · colour keys (legend and lab must match) · stories (book, Project Gutenberg ebook #, scene key; **draw** = this node creates the scene in `web/art/<lab-file-stem>.js`, **reuse** = already exists or is drawn by an earlier node). Stories marked with a suggested passage: verify the exact text; if it is not in that edition, choose another well-known passage from the same book. Every story needs `tags` unless it uses parts of speech; suggested tag sets are given.

Existing scenes: `drawing-room` (Pride and Prejudice), `whaler` (Moby-Dick), `rabbit-hole` (Alice), `green-light` (The Great Gatsby), `counting-house` (A Christmas Carol), `tidewater` (Douglass's Narrative), `christmas-hearth` (Little Women), `moor-window` (Jane Eyre), `two-cities` (A Tale of Two Cities), `battlefield` (Gettysburg Address), `maelstrom` (Poe), `studio-roses` (Dorian Gray), `emma-hartfield` (Emma), `inaugural` (Lincoln's Second Inaugural, Gutenberg #8).

Source notes from earlier writers: Gutenberg cannot be reached with curl here, only WebFetch. WebFetch returns only the start of very long files (e.g. #2148 stops inside "A Descent into the Maelstrom"), so prefer passages near the start of a book or pick another passage. Gutenberg's Gettysburg Address (#4) prints "war. . .testing" with spaced dots, which tokens cannot reproduce; use other sentences from it. Gutenberg double hyphens "--" are written as em dashes (say so in the check file). All 21 Grammar & Usage pages are written.

---
## eng-parts-of-speech · The Parts of Speech · `web/labs/eng-1.js` (written)
→ eng-nouns-pronouns, eng-verbs, eng-modifiers, eng-function-words.

## WAVE 1

### eng-nouns-pronouns · Nouns & Pronouns · `web/labs/eng-nouns.js`
pre: eng-parts-of-speech → eng-subject-predicate, eng-pronoun-usage
Scope: common vs proper; concrete vs abstract; count vs noncount (mass); collective; compound nouns; plural formation (-s, -es, -ies, -ves, internal change *man/men*, zero plural *sheep*, foreign plurals *criteria*); possessive (singular *'s*, plural *s'*, joint vs individual possession); pronoun types: personal (person, number, gender, case), possessive (*my/mine*), reflexive and intensive, demonstrative, interrogative, relative, indefinite, reciprocal. Antecedents (introduced; agreement is a later node).
Lab: (1) noun inflector: pick or type from a list of nouns, see the plural and possessive forms with the rule that produced them; (2) personal-pronoun grid (person × number × case: subjective, objective, possessive determiner, possessive pronoun, reflexive) with a sentence frame that shows the chosen form in use.
Colours: c1 noun · c2 pronoun · c3 plural ending · c4 possessive / case form · c5 antecedent link.
Stories (tags: common noun / proper noun / pronoun, or count / noncount / abstract):
- Little Women (#514), opening "“Christmas won’t be Christmas without any presents,” grumbled Jo, lying on the rug." — proper vs common nouns · scene `christmas-hearth` **draw**
- Jane Eyre (#1260), opening "There was no possibility of taking a walk that day." — abstract nouns · scene `moor-window` **draw**
- Pride and Prejudice (#1342), another passage, e.g. Mr Bennet / Mrs Bennet dialogue in ch. 1 — pronouns and their antecedents · scene `drawing-room` reuse

### eng-verbs · Verbs: Tense, Aspect & Mood · `web/labs/eng-verbs.js`
pre: eng-parts-of-speech → eng-subject-predicate
Scope: main vs auxiliary (primary *be, have, do*; modals); action vs linking; transitive vs intransitive (introduced); the five forms (base, -s, past, past participle, present participle); regular vs irregular; the twelve tense–aspect combinations (simple, progressive, perfect, perfect progressive × past, present, future) and what each means (event time vs reference time); mood (indicative, imperative, subjunctive: *if I were*, *I insist that he be*); modals and their meanings.
Lab: tense–aspect machine: choose a verb (regular and irregular), a subject, a time (past / present / future) and an aspect; it builds the verb phrase with auxiliaries coloured and draws a timeline marking speech time, reference time and the event (a point, or a span for progressive; perfect shows completion before the reference point). Second mode: mood switcher on one clause.
Colours: c1 subject · c2 main verb · c3 auxiliary · c4 time marker (speech / reference time) · c5 event span.
Stories (tags: auxiliary / main verb / linking verb, or tense labels):
- A Tale of Two Cities (#98), opening "It was the best of times, it was the worst of times, …" (first clauses) — linking verb, past tense · scene `two-cities` **draw**
- The Gettysburg Address (#4) — "Four score and seven years ago our fathers brought forth …", "Now we are engaged in a great civil war, testing whether …" — past, present progressive, passive participles · scene `battlefield` **draw**
- A Christmas Carol (#46), Scrooge passage with modals or subjunctive — reuse `counting-house`

### eng-modifiers · Adjectives & Adverbs · `web/labs/eng-modifiers.js`
pre: eng-parts-of-speech → eng-phrases
Scope: attributive vs predicative adjectives; degree (positive, comparative, superlative; -er/-est vs more/most; irregular *good/better/best*, *bad/worse/worst*); absolute adjectives; order of adjectives (opinion, size, age, shape, colour, origin, material, purpose); coordinate vs cumulative adjectives (comma test, previewed); adverb types (manner, time, place, frequency, degree); what adverbs modify; flat adverbs; *good/well*, *bad/badly* after linking verbs; *-ly* adjectives.
Lab: (1) adjective-order arranger: pick adjectives from category bins for a noun; the lab arranges them in the standard order and labels each category (and flags a sequence a native speaker would reject); (2) comparison builder: choose an adjective or adverb and degree; shows the correct form and rule (syllable count, irregular).
Colours: c1 noun modified · c2 verb modified · c3 adjective · c4 adverb · c5 degree marker (-er, more, most).
Stories (parts of speech, focus aj/av, or own tags: attributive / predicative / adverb of degree):
- Poe, "A Descent into the Maelstrom" (Works, Raven Edition vol. 2, #2148) — written; scene `maelstrom`
- Wilde, The Picture of Dorian Gray (#174), opening "The studio was filled with the rich odour of roses, …" — attributive adjectives · scene `studio-roses` **draw**
- The Great Gatsby (#64317), another sentence — reuse `green-light`

### eng-function-words · Prepositions & Conjunctions · `web/labs/eng-joiners.js`
pre: eng-parts-of-speech → eng-phrases
Scope: prepositions (simple, compound/phrasal *because of, in spite of*); the prepositional object; preposition vs particle vs subordinator (*before* three ways); ending a sentence with a preposition (style myth); coordinating conjunctions (FANBOYS) and what each signals; correlative conjunctions (*either…or, neither…nor, both…and, not only…but also, whether…or*); subordinating conjunctions (time, cause, condition, concession, contrast, purpose); conjunctive adverbs (*however, therefore*) are adverbs, not conjunctions, and punctuation differs.
Lab: "joiner": two clauses on cards; choose a connector from coordinating / subordinating / conjunctive adverb lists; the lab shows the joined sentence with correct punctuation (comma + FANBOYS, subordinate clause first with comma or second without, semicolon + conjunctive adverb + comma), the logical relation (addition, contrast, cause, result, time, condition), and which clause is now dependent.
Colours: c1 first clause · c2 second clause · c3 prepositional object · c4 conjunctive adverb · c5 connector.
Stories (parts of speech focus p/cj, or own tags: coordinating / subordinating / preposition):
- Emma (#158), opening "Emma Woodhouse, handsome, clever, and rich, with a comfortable home and happy disposition, …" — prepositions and conjunctions · scene `emma-hartfield` **draw**
- Lincoln, Second Inaugural Address (find a public-domain edition on Gutenberg; if none, a National Archives / Library of Congress transcription, cited), "With malice toward none, with charity for all, …" — prepositional phrases · scene `inaugural` **draw**
- Alice (#11) or Moby-Dick (#2701) passage rich in *and/but/so* — reuse

## WAVE 2

### eng-subject-predicate · Subject & Predicate · `web/labs/eng-subject.js`
pre: eng-nouns-pronouns, eng-verbs → eng-agreement, eng-patterns, eng-phrases
Scope: the sentence as subject + predicate; complete vs simple subject; complete vs simple predicate (the verb phrase); compound subjects and predicates; the understood *you* of imperatives; inverted order (questions, *there is*, *here comes*, literary inversion); finding the subject (find the verb, ask who/what, test with a tag question *…, didn't he?*); subject vs the object of a preposition.
Lab: sentence splitter: choose a sentence; click the gap where the subject ends and the predicate begins; feedback; then reveal simple subject and simple predicate; includes questions, imperatives, there-sentences and a long subject with a prepositional phrase.
Colours: c1 complete subject · c2 complete predicate · c3 simple subject · c4 simple predicate (verb) · c5 understood / displaced subject.
Stories (tags: s subject, p predicate, or ss simple subject / sp simple predicate):
- Tom Sawyer (#74), ch. 2 "Tom appeared on the sidewalk with a bucket of whitewash and a long-handled brush." · scene `whitewash-fence` **draw**
- Walden (#205), "Where I Lived, and What I Lived For": "I went to the woods because I wished to live deliberately, …" (subject/predicate of the main clause) · scene `walden-pond` **draw**
- Moby-Dick (#2701) "Call me Ishmael." (understood you) — reuse `whaler`

### eng-agreement · Subject–Verb Agreement · `web/labs/eng-agreement.js`
pre: eng-subject-predicate → eng-pronoun-usage
Scope: agreement in number and person (present tense and *be*); intervening phrases (*the box of chocolates is*); compound subjects with *and* (plural, except a single idea), with *or/nor* (nearer subject); indefinite pronouns (always singular, always plural, and the SANAM group *some, any, none, all, most*); collective nouns (US vs British usage); *there is / there are*; inverted order; titles, amounts and *-ics* nouns; *each / every*; *one of those who*; linking verbs agree with the subject not the complement.
Lab: agreement engine: build a subject from parts (head noun, optional *of*-phrase, optional *and/or* second noun, indefinite pronoun or collective noun); the verb (is/are, has/have, -s/base) updates with the rule; an arrow runs from the verb to the word that controls it, skipping the greyed intervening phrase.
Colours: c1 head of the subject · c2 verb · c3 intervening words (ignored) · c4 rule-deciding word (and / or / each / there) · c5 agreement result.
Stories (own tags):
- A Tale of Two Cities (#98), ch. 1 "There were a king with a large jaw and a queen with a plain face, on the throne of England; …" — there + compound subject · reuse `two-cities`
- Gettysburg Address (#4) — "… that government of the people, by the people, for the people, shall not perish from the earth." (subject with prepositional phrases) · reuse `battlefield`
- The Hound of the Baskervilles (#2852), opening "Mr. Sherlock Holmes, who was usually very late in the mornings, …" — subject with a relative clause before the verb · scene `hound-moor` **draw**

### eng-patterns · Complements & Sentence Patterns · `web/labs/eng-patterns.js`
pre: eng-subject-predicate → eng-voice, eng-clauses
Scope: intransitive, transitive, linking, ditransitive and complex-transitive verbs; the basic patterns: S–V; S–V–DO; S–V–IO–DO; S–V–DO–OC (object complement, noun or adjective); S–LV–SC (predicate nominative / predicate adjective); S–V–Adverbial (*be* + place); tests (passive test for DO, *to/for* test for IO); the same verb in several patterns (*make, find, get*).
Lab: pattern builder: choose a verb; slots appear for its pattern; fill them from phrase cards; the sentence assembles and the pattern label (e.g. S–V–IO–DO) and complement names appear; mode to classify given sentences.
Colours: c1 subject · c2 verb · c3 direct object · c4 indirect object · c5 complement (subject or object).
Stories (tags: s, v, do, io, sc, oc as needed, within c1–c5):
- A Christmas Carol (#46), opening "Marley was dead: to begin with." — S–LV–SC · reuse `counting-house`
- Moby-Dick (#2701) "Call me Ishmael." — (you)–V–DO–OC · reuse `whaler`
- Frankenstein (#84), ch. 5 "It was on a dreary night of November that I beheld the accomplishment of my toils." or another S–V–DO sentence · scene `frankenstein-lab` **draw**

### eng-phrases · Phrases · `web/labs/eng-phrases.js`
pre: eng-subject-predicate, eng-modifiers, eng-function-words → eng-clauses, eng-verbals
Scope: phrase vs clause; the head of a phrase; noun phrase (determiner, pre-modifiers, head, post-modifiers), verb phrase, adjective phrase, adverb phrase, prepositional phrase (adjectival and adverbial uses); appositive phrases; absolute phrases (noun + participle); constituency tests (substitution by a pronoun, movement, question).
Lab: phrase bracketer: choose a sentence; brackets nest around phrases with the head word bold; step through levels from words to phrases to the clause; click a phrase to see its type, head and job.
Colours: c1 noun phrase · c2 verb phrase · c3 adjective phrase · c4 adverb phrase · c5 prepositional phrase.
Stories (own tags np/vp/ajp/avp/pp, or tag the heads):
- "The Legend of Sleepy Hollow" (The Sketch Book, #2048, or #41), opening "In the bosom of one of those spacious coves which indent the eastern shore of the Hudson, …" — chains of prepositional phrases · scene `sleepy-hollow` **draw**
- Douglass (#23), ch. 1, reuse `tidewater`
- Alice (#11), another passage, reuse `rabbit-hole`

## WAVE 3

### eng-voice · Active & Passive Voice · `web/labs/eng-voice.js`
pre: eng-patterns → (none in tree)
Scope: voice vs tense; forming the passive (be + past participle, in every tense); the agent by-phrase (optional); only transitive verbs passivise; get-passives; when the passive is the right choice (unknown or unimportant agent, focus on the receiver, scientific and legal writing) and when it hides responsibility; converting active ↔ passive; past participle vs past tense; stative passives (*the door was closed*).
Lab: voice transformer: choose an active sentence; toggle to passive and watch the object move to subject position, *be* appear in the right tense, the verb become a participle and the subject become an optional by-phrase; tense selector to show *is being taken / has been taken / will be taken*.
Colours: c1 agent (doer) · c2 main verb · c3 receiver (patient) · c4 *be* / *get* auxiliary · c5 by-phrase.
Stories (own tags):
- The Declaration of Independence (#1), "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, …" · scene `declaration` **draw**
- Douglass (#23) "I was born in Tuckahoe …" (passive with no agent) · reuse `tidewater`
- Gettysburg Address (#4), "… conceived in Liberty, and dedicated to the proposition …" · reuse `battlefield`

### eng-pronoun-usage · Pronoun Case & Reference · `web/labs/eng-pronouns.js`
pre: eng-agreement, eng-nouns-pronouns → (none in tree)
Scope: case (subjective, objective, possessive) and where each goes; compound constructions (*between you and me*, *She and I*); *who/whom* (and *whoever/whomever*) by substitution; comparisons with *than/as*; pronoun–antecedent agreement in number and gender, indefinite antecedents, and singular *they* (accepted by MLA, APA and Chicago style guides); collective-noun antecedents; vague, broad and ambiguous reference (*this, which, it*); reflexive misuse (*myself* as a subject).
Lab: (1) who/whom tester: a sentence with a gap; the lab isolates the clause and substitutes he/him to decide; (2) reference linker: arrows from each pronoun to candidate antecedents; flags ambiguous reference and offers a rewrite.
Colours: c1 antecedent · c2 pronoun · c3 subjective case · c4 objective case · c5 possessive case.
Stories:
- "A Scandal in Bohemia" (The Adventures of Sherlock Holmes, #1661), opening "To Sherlock Holmes she is always _the_ woman. I have seldom heard him mention her under any other name." · scene `baker-street` **draw**
- Wuthering Heights (#768), opening "1801.—I have just returned from a visit to my landlord—the solitary neighbour that I shall be troubled with." · scene `wuthering-moor` **draw**
- Little Women (#514) or Pride and Prejudice dialogue — reuse

### eng-clauses · Independent & Dependent Clauses · `web/labs/eng-clauses.js`
pre: eng-patterns, eng-phrases → eng-sentence-types, eng-subordinate
Scope: clause = subject + finite verb; independent (main) vs dependent (subordinate) clause; markers of dependence (subordinating conjunctions, relative pronouns, interrogative words, *that*); the stand-alone test; finite vs non-finite (verbal phrases are not clauses); clauses inside clauses (embedding); a preview of noun, adjective and adverb clauses.
Lab: clause finder: choose a sentence; each clause is bracketed and coloured, its subject and finite verb underlined and its marker word boxed; toggle "stand alone?" to see which pieces can be sentences on their own; a nesting view for embedded clauses.
Colours: c1 independent clause · c2 dependent clause · c3 marker (subordinator / relative pronoun) · c4 clause subject · c5 finite verb.
Stories (own tags ic/dc/mk):
- Walden (#205), "I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived." · reuse `walden-pond`
- Adventures of Huckleberry Finn (#76), opening "You don’t know about me without you have read a book by the name of The Adventures of Tom Sawyer; but that ain’t no matter." (dialect *without* = unless; note nonstandard usage respectfully) · scene `raft-river` **draw**
- Pride and Prejudice (#1342) opening (that-clause) · reuse `drawing-room`

### eng-verbals · Verbals: Gerunds, Participles & Infinitives · `web/labs/eng-verbals.js`
pre: eng-phrases → eng-parallelism, eng-modifier-placement
Scope: verbals are non-finite verb forms; gerunds (-ing as noun: subject, object, object of preposition), participles (present and past, as adjectives; participial phrases), infinitives (*to* + base: noun, adjective, adverb uses; bare infinitives after modals and *make/let*); verbal phrases with their own objects and modifiers; the -ing test (gerund vs participle vs progressive verb); possessive before a gerund (*his leaving*); split infinitives (acceptable; style note).
Lab: -ing / to- tester: a sentence with a highlighted verbal; the lab runs substitution tests (replace with *it* or *that* → noun job; with an adjective → participle; part of *be* + -ing → progressive verb, not a verbal) and labels the verbal and its phrase.
Colours: c1 gerund · c2 finite (main) verb · c3 participle · c4 infinitive · c5 verbal phrase span.
Stories (own tags g/pt/inf):
- Hamlet (#1524 or Gutenberg's Hamlet), "To be, or not to be, that is the question:" (and the next lines) · scene `elsinore` **draw**
- Moby-Dick (#2701), "having little or no money …" (participial phrase), "to interest me" (infinitive) · reuse `whaler`
- Jane Eyre (#1260), "There was no possibility of taking a walk that day." (gerund after *of*) · reuse `moor-window`

## WAVE 4

### eng-sentence-types · Simple, Compound & Complex Sentences · `web/labs/eng-sentences.js`
pre: eng-clauses → eng-fragments, eng-parallelism
Scope: structural types (simple, compound, complex, compound-complex) by counting independent and dependent clauses; a simple sentence can be long; compound predicates vs compound sentences; functional types (declarative, interrogative, imperative, exclamatory) and their end punctuation; using types for emphasis and variety.
Lab: sentence builder: drag clause cards and connectors into a frame; the lab counts independent and dependent clauses, names the structural type and punctuates correctly; second mode classifies given sentences by structure and function.
Colours: c1 independent clause · c2 dependent clause · c3 coordinating conjunction · c4 subordinator · c5 end punctuation / function.
Stories (own tags):
- A Tale of Two Cities (#98), the full first sentence (one long sentence of many clauses) · reuse `two-cities`
- Huckleberry Finn (#76) or Tom Sawyer (#74), a short compound sentence · reuse
- Gettysburg Address (#4), "It is altogether fitting and proper that we should do this." · reuse `battlefield`

### eng-subordinate · Relative, Noun & Adverb Clauses · `web/labs/eng-subclauses.js`
pre: eng-clauses → eng-modifier-placement, eng-commas
Scope: relative (adjective) clauses with *who, whom, whose, which, that*, and zero relative; restrictive vs nonrestrictive (commas; *that* vs *which* in US usage); noun clauses (*that, whether/if, wh-* words) as subject, object, complement; adverb clauses (time, place, cause, condition, concession, contrast, purpose, result, comparison); clause position and commas; reduced clauses.
Lab: clause-job tester: a dependent clause is highlighted; replace it with *it/something* (noun job), with an adjective (relative), or with *then/there/so* (adverb) and see which substitution keeps the sentence grammatical; toggle restrictive/nonrestrictive commas and read the change in meaning.
Colours: c1 noun clause · c2 main clause · c3 relative clause · c4 adverb clause · c5 marker word.
Stories (own tags):
- Pride and Prejudice (#1342) opening: noun clause (*that a single man …*) · reuse `drawing-room`
- Gettysburg Address (#4): "… dedicated to the proposition that all men are created equal." · reuse `battlefield`
- Hound of the Baskervilles (#2852) or Sherlock Holmes (#1661): relative clause, nonrestrictive · reuse

### eng-fragments · Fragments, Run-ons & Comma Splices · `web/labs/eng-fragments.js`
pre: eng-sentence-types → eng-commas
Scope: sentence fragments (missing subject, missing finite verb, dependent clause alone, verbal or appositive phrase alone) and tests for them; fused (run-on) sentences; comma splices; the five standard fixes (period; semicolon; comma + coordinating conjunction; subordinate one clause; semicolon + conjunctive adverb + comma); intentional fragments in literature and advertising, and when academic writing allows them.
Lab: fixer: a faulty item (fragment, splice or fused sentence) is shown with the break point marked; choose one of the fixes and see the result, its punctuation and whether the fix is grammatical; tally of which fixes work for each item.
Colours: c1 independent clause · c2 fragment · c3 splice / fusion point · c4 fix inserted · c5 connector.
Stories (own tags):
- Bleak House (#1023), opening "London. Michaelmas term lately over, and the Lord Chancellor sitting in Lincoln’s Inn Hall. Implacable November weather." — deliberate fragments · scene `bleak-fog` **draw**
- Alice (#11) "Down, down, down." · reuse `rabbit-hole`
- A Christmas Carol (#46) "Bah! Humbug!" or a deliberate fragment from Dickens · reuse

### eng-parallelism · Parallelism · `web/labs/eng-parallel.js`
pre: eng-sentence-types, eng-verbals → eng-style
Scope: parallel structure in series, pairs with coordinating and correlative conjunctions, comparisons (*than, as*), lists and headings; faulty parallelism and how to fix it; repeating function words for clarity; rhetorical parallelism: anaphora, antithesis, tricolon, isocolon.
Lab: aligner: list items are stacked with their grammatical form labelled (noun phrase, gerund, infinitive, clause); mismatches flash; choose the rewrite that makes them parallel; a view that aligns the repeated words of famous parallel passages column by column.
Colours: c1 shared frame / repeated word · c2 item in form A · c3 item in form B (mismatch) · c4 correlative pair · c5 parallel item after fix.
Stories (own tags):
- Gettysburg Address (#4) "… we can not dedicate—we can not consecrate—we can not hallow—this ground." and "government of the people, by the people, for the people" · reuse `battlefield`
- A Tale of Two Cities (#98), opening antitheses · reuse `two-cities`
- Lincoln, Second Inaugural, "With malice toward none, with charity for all, …" · reuse `inaugural`

## WAVE 5

### eng-modifier-placement · Misplaced & Dangling Modifiers · `web/labs/eng-modifiers-place.js`
pre: eng-verbals, eng-subordinate → eng-style
Scope: modifiers attach to the nearest plausible word; misplaced modifiers (phrases and clauses), limiting modifiers (*only, just, almost, even, nearly*) and how their position changes meaning; squinting modifiers; dangling modifiers (introductory participial, infinitive and elliptical phrases with no logical subject); fixes (move the modifier, supply the doer as subject, turn the phrase into a clause).
Lab: (1) *only* mover: slide *only* through every position of a sentence and read the meaning each time; (2) dangler detector: an introductory phrase and a main clause; the lab draws an arrow from the phrase to the subject of the main clause and shows what the sentence literally says, then offers fixes.
Colours: c1 modifier · c2 intended target · c3 wrong attachment · c4 limiting word · c5 fixed sentence.
Stories (own tags; show correct placement in the classics):
- Treasure Island (#120), opening "Squire Trelawney, Dr. Livesey, and the rest of these gentlemen having asked me to write down the whole particulars about Treasure Island, …" — absolute phrase, correctly attached · scene `admiral-benbow` **draw**
- Moby-Dick (#2701), "having little or no money in my purse, … I thought" (participial phrase attached to *I*) · reuse `whaler`
- A passage with a well-placed *only* or *almost* (e.g. Pride and Prejudice, Emma, Walden) · reuse

### eng-commas · Commas · `web/labs/eng-commas.js`
pre: eng-fragments, eng-subordinate → eng-punctuation, eng-style
Scope: the main rules: (1) before a coordinating conjunction joining independent clauses; (2) after introductory elements; (3) between items in a series (serial/Oxford comma: required by Chicago and MLA, optional in AP); (4) between coordinate adjectives (the *and* and reversal tests); (5) around nonrestrictive elements (clauses, phrases, appositives); (6) with transitional and parenthetical expressions, direct address, *yes/no*, tag questions, contrasted elements; (7) with quotations; (8) dates, addresses, numbers, titles; plus the common misuses (comma splice, between subject and verb, before a restrictive clause, after a coordinating conjunction).
Lab: comma placer: choose a sentence with its commas removed; click gaps to insert or remove commas; check shows each comma's rule number, marks missing and wrong ones, and explains each; scoring.
Colours: c1 rule 1 (compound sentence) · c2 rule 2 (introductory) · c3 rule 3–4 (series / coordinate adjectives) · c4 rule 5–6 (nonrestrictive / parenthetical) · c5 conventions (quotations, dates, addresses, direct address).
Stories (tags on the comma tokens, e.g. `,_ser`):
- Emma (#158) opening (series, appositive) · reuse `emma-hartfield`
- Douglass (#23) opening (addresses) · reuse `tidewater`
- A Christmas Carol (#46) "“A merry Christmas, uncle! …”" (direct address, quotation) · reuse `counting-house`

### eng-punctuation · Semicolons, Colons, Dashes & Apostrophes · `web/labs/eng-punctuation.js`
pre: eng-commas → (none in tree)
Scope: semicolon (between closely related independent clauses; before a conjunctive adverb; in a series with internal commas); colon (after an independent clause, introducing a list, explanation, quotation or appositive; capitalisation conventions; not after a verb or preposition); em dash (emphasis, interruption, appositive with commas inside) vs en dash (ranges) vs hyphen (compound modifiers before a noun, prefixes, word division); parentheses (brief); apostrophe (possession: singular, plural, irregular plurals, joint possession; contractions; *its/it's*, *whose/who's*; no apostrophe for ordinary plurals; letters and numerals as plurals per style guide).
Lab: (1) mark chooser: between two parts, choose ; : — , or . and see whether it is correct and why (some pairs allow more than one; the lab says how meaning or emphasis changes); (2) apostrophe builder: choose a noun (singular, regular plural, irregular plural, ending in s) and get the possessive with the rule; *its/it's* check.
Colours: c1 semicolon · c2 colon · c3 dash · c4 apostrophe · c5 hyphen / other mark.
Stories (tags on punctuation tokens):
- A Christmas Carol (#46) "Marley was dead: to begin with." (colon) · reuse `counting-house`
- Moby-Dick (#2701) "Some years ago—never mind how long precisely—" (paired dashes) · reuse `whaler`
- Emily Dickinson, "Because I could not stop for Death" (Poems by Emily Dickinson, Series One or Two, Gutenberg; quote that edition's text) — dashes as a poet's signature or, if that edition uses few dashes, another Dickinson poem from it · scene `dickinson-carriage` **draw**
- Little Women (#514) "Christmas won’t be Christmas" (apostrophe in a contraction) · reuse `christmas-hearth`

### eng-style · Concision & Sentence Variety · `web/labs/eng-style.js`
pre: eng-parallelism, eng-modifier-placement, eng-commas → (end of tree; feeds Composition I)
Scope: wordiness (redundant pairs, redundant modifiers, empty phrases *due to the fact that*, needless qualifiers, expletive *there is / it is* openings), nominalisations → verbs (*make a decision* → *decide*), strong verbs, active voice by default; sentence variety (length, openings, structure), cumulative vs periodic sentences, end focus and emphasis; revising for clarity (actors as subjects, actions as verbs, after Joseph Williams's *Style*).
Lab: (1) trimmer: a wordy sentence with every cut marked by type; toggle cuts and watch the word count fall while the meaning holds; (2) rhythm chart: sentence lengths of a chosen passage drawn as bars (the Gettysburg Address vs a uniform wordy paragraph), with average and range.
Colours: c1 kept words · c2 redundancy cut · c3 nominalisation → verb · c4 expletive / empty phrase · c5 sentence-length bars.
Stories (own tags):
- Walden (#205), "Our life is frittered away by detail. … Simplicity, simplicity, simplicity!" (or "Simplify, simplify.") · reuse `walden-pond`
- Gettysburg Address (#4), closing sentence (a long periodic sentence after short ones) · reuse `battlefield`
- A Christmas Carol (#46) "Marley was dead: to begin with." (a four-word opening sentence) · reuse `counting-house`
