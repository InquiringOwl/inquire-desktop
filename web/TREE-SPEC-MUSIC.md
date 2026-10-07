# Tree spec: Music Theory

Data: `web/src/data-music.js` (subject map, 16 fields, the Music Fundamentals tree). Arts & Humanities, magenta accent.
Standard: the theory and aural-skills core of a NASM-accredited Bachelor of Music; Fundamentals ≈ AP Music Theory units 1–3 and the rudiments chapters of Clendinning & Marvin, *The Musician's Guide to Fundamentals*, and Kostka, Payne & Almén, *Tonal Harmony* part 1.
**No story panels.** Music theory is a formal system, taught like math and physics: definition, worked analysis, practice. Musical examples are notated on the page or in the lab, never narrative passages.

## Field map
- **Foundations**: Music Fundamentals → Theory I: Diatonic Harmony; Fundamentals → Aural Skills I; Fundamentals → Musical Acoustics (needs Algebra II, Trigonometry, Physics: Waves & Fluids).
- **Core Sequence**: Theory I → Theory II: Chromatic Harmony, Species Counterpoint, Jazz & Popular Harmony; Aural Skills I + Theory I → Aural Skills II; Theory II → Form & Analysis, Post-Tonal Theory (mod-12 arithmetic); Species + Theory II → Tonal Counterpoint & Fugue; Theory I → Orchestration.
- **Upper Division**: Form + Tonal Counterpoint → Schenkerian Analysis; Post-Tonal + Acoustics → Mathematical Music Theory (Abstract Algebra, Linear Algebra); Aural Skills II + Acoustics → Music Perception & Cognition (Statistics); Form + Post-Tonal + Orchestration → Composition.

## Mathematics and physics
Nodes list `math` (charted math topic ids or `field:Topic`) and `physics` (`waves:Topic` from the planned Waves & Fluids field). Both are informational, shown under Learning path, and never lock. Each needs a `mathWhy[ref]` sentence on the page.
- Fundamentals needs only arithmetic: fractions and fraction sums (note values, meter), ratios (frequency ratios, tuplets), mod-12 counting (pitch class, circle of fifths). All are charted in Arithmetic.
- Acoustics nodes (`mus-sound`, `mus-tuning`, `mus-texture`) also point to exponents, rational exponents and logarithms (equal temperament, cents), sine graphs, and Waves & Fluids. They are taught self-contained at an introductory level; the full treatment is the Musical Acoustics field.

## Music Fundamentals tree (`DB.trees["music-fundamentals"]`)
Eras: Notation (cols 0–1) · Meter & Scales (2–3) · Keys & Intervals (4–5) · Chords & Melody (6–7) · Toward Harmony (8–9).
Written (wave 1): `mus-pitch`, `mus-durations`, `mus-sound`, `mus-staff`, `mus-simple-meter`. The other 18 are in `planned` (dashed). To write one, move it from `planned` to `nodes` (keep every key) and add page, lab and check.

| id | title | pre |
| --- | --- | --- |
| mus-pitch | Pitch, Notes & the Keyboard | — |
| mus-durations | Note Values & Rests | — |
| mus-sound | Sound: Frequency, Pitch & the Harmonic Series | mus-pitch |
| mus-staff | The Staff, Clefs & Ledger Lines | mus-pitch |
| mus-simple-meter | Beat, Meter & Simple Time Signatures | mus-durations |
| mus-major-scales | Major Scales & Scale Degrees | mus-staff |
| mus-expression | Tempo, Dynamics & Articulation | mus-staff, mus-simple-meter |
| mus-compound-meter | Compound Meter | mus-simple-meter |
| mus-key-sigs | Key Signatures & the Circle of Fifths | mus-major-scales |
| mus-syncopation | Syncopation, Tuplets & Asymmetric Meter | mus-compound-meter |
| mus-minor | Minor Scales & Keys | mus-key-sigs |
| mus-intervals | Intervals: Size & Quality | mus-major-scales, mus-key-sigs |
| mus-modes | Modes & Other Scales | mus-minor |
| mus-interval-inversion | Inversion, Compound Intervals & Consonance | mus-intervals |
| mus-tuning | Tuning & Temperament | mus-sound, mus-intervals |
| mus-triads | Triads | mus-intervals |
| mus-melody | Melody: Contour, Motive & Phrase | mus-intervals, mus-syncopation |
| mus-triad-inversion | Triad Inversion & Figured Bass | mus-triads |
| mus-diatonic-triads | Diatonic Triads & Roman Numerals | mus-triads, mus-minor |
| mus-texture | Texture & Timbre | mus-melody, mus-sound |
| mus-sevenths | Seventh Chords | mus-triad-inversion, mus-diatonic-triads |
| mus-lead-sheet | Lead-Sheet Chord Symbols | mus-sevenths |
| mus-cadences | Harmonic Function & Cadences | mus-sevenths, mus-melody |

Suggested writer batches (2–3 related nodes each, one brief read): {major-scales, key-sigs, minor} · {compound-meter, syncopation, expression} · {intervals, interval-inversion, tuning} · {modes, melody, texture} · {triads, triad-inversion, diatonic-triads} · {sevenths, lead-sheet, cadences}.

## Labs and colour keys (wave 1)
Every lab uses `web/kits/subjects/music.js` (`MusicKit.attach(k)`), plays sound only from a button or key press, and returns `mk.cleanup`.
- **mus-pitch** (`web/labs/mus-1.js`): modes *Keyboard* (click a key: its letter name, every enharmonic spelling, octave number, plays it), *Steps* (from a start key, step by H or W; hops drawn over the keys and counted in half steps), *Octaves* (every key of one pitch class lit, octave numbers, middle C marked). Selected note c1 amber, enharmonic spelling c2 cyan, half step c3 pink, whole step c4 violet, same pitch class / octave c5 green.
- **mus-staff** (`mus-1.js`): modes *Read* (pick a clef, move a note up and down the staff: name, line or space, ledger lines, matching key below), *Grand staff* (click the keyboard; the note appears on the right staff, middle C on its ledger between them), *Quiz* (name the note; score). Note c1 amber, line notes c2 cyan, space notes c3 pink, ledger lines c4 violet, middle C c5 green.
- **mus-sound** (`mus-1.js`): modes *Wave* (frequency slider on a log scale, amplitude slider; period, nearest note and cents; play; show the octave 2f), *Harmonics* (fundamental with partials 1–8: string modes, spectrum bars, summed wave; toggle partials; nearest notes with cents). Fundamental f c1 amber, frequency/period c2 cyan, amplitude c3 pink, overtones c4 violet, summed wave c5 green.
- **mus-durations** (`web/labs/mus-2.js`): modes *Note tree* (whole → 16 sixteenths, notes and rests, play each row against a steady beat), *Dots & ties* (build a value from a base note, dots and ties; exact fraction sum and a proportional bar), *Rests* (each rest beside its note). Value being built c1 amber, dot additions c2 cyan, ties c3 pink, rests c4 violet, total c5 green.
- **mus-simple-meter** (`mus-2.js`): modes *Meter* (2/4, 3/4, 4/4, 2/2, 3/8; metronome with strong and weak beats; beat grid), *Fill the bar* (add note values; each measure shows its exact sum, full, short or over), *Classify* (a signature or a heard pattern → duple, triple or quadruple). Beat c1 amber, strong beat c2 cyan, bar line / measure c3 pink, beat division c4 violet, full measure c5 green.

## Saved text for later
`unlocksWhy` sentences to add to existing pages when these planned nodes are written:
- mus-simple-meter → mus-compound-meter: "Compound meter keeps the same idea of beats per measure but uses a dotted beat that divides into three, so 6/8 and 3/4 hold the same total with different beats."
- mus-simple-meter → mus-expression: "Tempo marks such as ♩ = 60 count beats per minute, so they need to know which value is the beat in the time signature."
- mus-staff → mus-major-scales, mus-expression; mus-sound → mus-tuning, mus-texture: write when those nodes are written.
