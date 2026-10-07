/* ============ Music Theory ============
   A standard college music-theory program (the theory and aural-skills core of a Bachelor of Music,
   NASM-accredited sequence; AP Music Theory covers Fundamentals plus most of Theory I).
   Music theory pages have no story panels: like math and physics, each page is a definition, a worked
   analysis and practice. Nodes list the mathematics (`math`) and physics (`physics`) they draw on;
   both are informational and never lock a node. Fields live in DB.fields with subject: "music-theory".
   Spec: web/TREE-SPEC-MUSIC.md · brief: web/WRITER-PACK-MUSIC.md · lab kit: web/kits/subjects/music.js */
(function(){
const sub = DB.subjects.find(s => s.id === "music-theory");
if (sub) Object.assign(sub, { status: "open", note: "16 fields · Music Fundamentals begun" });

DB.subjectMaps["music-theory"] = { name: "Music Theory", glyph: "♪", accent: "magenta", mapLine: "From reading notes to the composition studio",
  mapSub: "The standard college theory sequence: fundamentals, the four-semester core of harmony and aural skills, then counterpoint, form, post-tonal theory and specialisations. Arrows show the usual prerequisites; each field lists the mathematics and physics it needs.",
  groups: [
    { name: "Foundations", ids: ["music-fundamentals","musical-acoustics","diatonic-harmony","aural-skills-1"] },
    { name: "Core Sequence", ids: ["chromatic-harmony","species-counterpoint","aural-skills-2","jazz-harmony","form-analysis","tonal-counterpoint","post-tonal","orchestration"] },
    { name: "Upper Division", ids: ["schenkerian","math-music","music-cognition","composition"] }
  ],
  eras: [
    { name: "Foundations", from: 0, to: 1 },
    { name: "Core Sequence", from: 2, to: 3 },
    { name: "Upper Division", from: 4, to: 5 }
  ] };

Object.assign(DB.fields, {
  "music-fundamentals": { subject: "music-theory", name: "Music Fundamentals", icon: "♩", level: "College MUS 1xx · rudiments (AP Music Theory units 1–3)", col: 0, row: 4, pre: [], math: ["arithmetic"], status: "charted",
    blurb: "The rudiments every later course assumes: reading pitch and rhythm on the staff, meter, major and minor scales and keys, intervals, triads and seventh chords, and the physics of musical sound.",
    topics: [] },
  "musical-acoustics": { subject: "music-theory", name: "Musical Acoustics", icon: "∿", level: "College MUS/PHYS 2xx · physics of music", col: 1, row: 1, pre: ["music-fundamentals"], math: ["algebra-2","trigonometry"], physics: ["waves"], status: "planned",
    blurb: "How instruments and voices make sound and how we hear it: vibration and resonance, the harmonic series, spectra and timbre, tuning systems, loudness and room acoustics.",
    topics: ["Vibration and simple harmonic motion","Waves, frequency and wavelength","Standing waves in strings and air columns","The harmonic series and overtones","Spectra, timbre and Fourier analysis","Loudness, intensity and decibels","The ear and pitch perception","Consonance, beats and roughness","Tuning systems: Pythagorean, just, meantone, equal","Instruments: strings, winds, brass, percussion","The voice","Room acoustics and recording"] },
  "diatonic-harmony": { subject: "music-theory", name: "Theory I: Diatonic Harmony", icon: "I–V", level: "College MUS 1xx · Theory I–II", col: 1, row: 4, pre: ["music-fundamentals"], status: "planned",
    blurb: "Tonal harmony within a key: four-part writing and voice leading, harmonic function, cadences and phrases, inversions, non-chord tones, and the dominant seventh.",
    topics: ["Four-part chorale texture and spacing","Voice-leading rules: parallels and motion","Root-position part writing","Harmonic function: tonic, predominant, dominant","Cadences and the phrase","First-inversion triads","Six-four chords","Non-chord tones","The dominant seventh and its inversions","Leading-tone chords","Diatonic sequences","Harmonising a melody"] },
  "aural-skills-1": { subject: "music-theory", name: "Aural Skills I", icon: "𝄞", level: "College MUS 1xx · sight-singing and ear training", col: 1, row: 6, pre: ["music-fundamentals"], status: "planned",
    blurb: "Hearing what you read and writing what you hear: sight-singing with solfège, rhythm reading, and melodic, harmonic and rhythmic dictation.",
    topics: ["Solfège and scale-degree numbers","Singing major and minor scales","Rhythm reading in simple and compound meter","Interval singing and identification","Triad quality by ear","Melodic dictation","Rhythmic dictation","Bass-line dictation","Hearing cadences","Sight-singing diatonic melodies"] },
  "chromatic-harmony": { subject: "music-theory", name: "Theory II: Chromatic Harmony", icon: "V/V", level: "College MUS 2xx · Theory III", col: 2, row: 4, pre: ["diatonic-harmony"], status: "planned",
    blurb: "Harmony that reaches outside the key: secondary dominants, modulation, modal mixture, the Neapolitan and augmented sixth chords, and enharmonic tricks of the nineteenth century.",
    topics: ["Secondary dominants","Secondary leading-tone chords","Tonicisation and modulation to closely related keys","Modal mixture","The Neapolitan sixth","Augmented sixth chords","Chromatic sequences","Common-tone diminished sevenths","Enharmonic modulation","Chromatic mediants"] },
  "species-counterpoint": { subject: "music-theory", name: "Species Counterpoint", icon: "1:1", level: "College MUS 2xx · modal counterpoint", col: 2, row: 2, pre: ["diatonic-harmony"], status: "planned",
    blurb: "Fux's method for writing independent lines against a cantus firmus, species by species: the classical training in consonance, dissonance and voice independence.",
    topics: ["The cantus firmus","First species: note against note","Second species: two notes against one","Third species: four notes against one","Fourth species: suspensions","Fifth species: florid counterpoint","Three-voice counterpoint","Modal counterpoint in Palestrina's style"] },
  "aural-skills-2": { subject: "music-theory", name: "Aural Skills II", icon: "♫", level: "College MUS 2xx · advanced ear training", col: 2, row: 6, pre: ["aural-skills-1","diatonic-harmony"], status: "planned",
    blurb: "Ear training for chromatic music: singing and hearing modulation, chromatic chords, harder rhythms, and four-part harmonic dictation.",
    topics: ["Four-part harmonic dictation","Hearing inversions and seventh chords","Chromatic melodies","Secondary dominants by ear","Hearing modulation","Syncopation and changing meter","Two-voice dictation","Sight-singing in clefs","Atonal melodies and intervals"] },
  "jazz-harmony": { subject: "music-theory", name: "Jazz & Popular Harmony", icon: "ii7–V7", level: "College MUS 2xx · jazz theory", col: 2, row: 8, pre: ["diatonic-harmony"], status: "planned",
    blurb: "Harmony in jazz and popular music: chord symbols and extensions, the ii–V–I, chord-scale theory, substitutions, the blues and song forms.",
    topics: ["Chord symbols and extensions","The ii–V–I progression","Chord-scale theory","Guide tones and voicings","Tritone substitution","The blues","AABA and other song forms","Reharmonisation","Popular-music harmony and loops"] },
  "form-analysis": { subject: "music-theory", name: "Form & Analysis", icon: "A B A", level: "College MUS 3xx", col: 3, row: 4, pre: ["chromatic-harmony"], status: "planned",
    blurb: "How whole movements are built: phrase and period, sentence, binary and ternary forms, rondo, variations, sonata form and the fugue.",
    topics: ["Motive, phrase and cadence","Period and sentence","Binary forms","Ternary form","Rondo","Theme and variations","Sonata form","Concerto and sonata-rondo","Fugue","Song forms and the art song"] },
  "tonal-counterpoint": { subject: "music-theory", name: "Tonal Counterpoint & Fugue", icon: "BWV", level: "College MUS 3xx · 18th-century counterpoint", col: 3, row: 2, pre: ["species-counterpoint","chromatic-harmony"], status: "planned",
    blurb: "Counterpoint in Bach's style: two-part inventions, invertible counterpoint, canon, chorale preludes and the fugue.",
    topics: ["Tonal counterpoint versus species","Implied harmony in two voices","The invention","Invertible counterpoint","Canon","The chorale prelude","Fugue subject and answer","Countersubject and episodes","Writing a fugal exposition"] },
  "post-tonal": { subject: "music-theory", name: "Post-Tonal Theory", icon: "{0,1,4}", level: "College MUS 3xx · Theory IV", col: 3, row: 6, pre: ["chromatic-harmony"], math: ["arithmetic"], status: "planned",
    blurb: "Tools for twentieth-century music: pitch-class sets, normal and prime form, interval vectors, transposition and inversion in mod-12 arithmetic, and twelve-tone rows.",
    topics: ["Pitch class and integer notation","Intervals and interval classes","Normal form and prime form","Interval-class vectors","Transposition and inversion","Set classes and the Forte list","Octatonic, whole-tone and other collections","Twelve-tone rows and the row matrix","Serialism","Rhythm and meter after 1900"] },
  "orchestration": { subject: "music-theory", name: "Orchestration", icon: "Vln", level: "College MUS 3xx · instrumentation", col: 3, row: 8, pre: ["diatonic-harmony"], status: "planned",
    blurb: "Writing for real instruments: ranges, transpositions and timbres of the orchestral families, and how to score a texture for strings, winds, brass and full orchestra.",
    topics: ["Ranges and registers","Transposing instruments","The string section","Woodwinds","Brass","Percussion and keyboards","Scoring melody and accompaniment","Doubling and balance","Scoring for full orchestra"] },
  "schenkerian": { subject: "music-theory", name: "Schenkerian Analysis", icon: "3̂–2̂–1̂", level: "College MUS 4xx", col: 4, row: 3, pre: ["form-analysis","tonal-counterpoint"], status: "planned",
    blurb: "Heinrich Schenker's theory of tonal structure: prolongation, voice-leading reduction and the levels from foreground to background.",
    topics: ["Prolongation and structural levels","Reduction and graphing notation","Neighbour and passing motions","Arpeggiation and unfolding","The fundamental structure (Ursatz)","Interruption","Analysing a phrase","Analysing a whole movement"] },
  "math-music": { subject: "music-theory", name: "Mathematical Music Theory", icon: "ℤ₁₂", level: "College MUS/MATH 4xx · graduate", col: 4, row: 5, pre: ["post-tonal","musical-acoustics"], math: ["abstract-algebra","linear-algebra"], status: "planned",
    blurb: "Music through the lens of algebra and geometry: groups acting on pitch classes, transformational and neo-Riemannian theory, voice-leading spaces, and rhythm as necklaces.",
    topics: ["The cyclic group Z12","Transposition and inversion as a group","Transformational theory","Neo-Riemannian P, L and R","The Tonnetz","Voice-leading geometry","Maximally even sets and scales","Rhythmic necklaces and Euclidean rhythms","Tuning lattices"] },
  "music-cognition": { subject: "music-theory", name: "Music Perception & Cognition", icon: "◉", level: "College MUS/PSYC 4xx", col: 4, row: 7, pre: ["aural-skills-2","musical-acoustics"], math: ["statistics"], status: "planned",
    blurb: "How listeners hear and remember music: pitch and timbre perception, tonal hierarchies, expectation, rhythm and beat, and the experimental methods that measure them.",
    topics: ["Auditory perception and the ear","Pitch perception","Timbre perception","Consonance and dissonance","Tonal hierarchies and key-finding","Expectation and surprise","Beat perception and entrainment","Musical memory","Emotion and meaning","Experimental methods"] },
  "composition": { subject: "music-theory", name: "Composition", icon: "Op. 1", level: "College MUS 3xx–4xx · studio", col: 5, row: 5, pre: ["form-analysis","post-tonal","orchestration"], status: "planned",
    blurb: "The composition studio: developing material, building form, writing for performers, and finishing pieces in tonal and post-tonal languages.",
    topics: ["Generating and developing material","Melody writing","Harmonic language","Texture and orchestration in practice","Building form","Writing for solo instruments","Writing for ensembles","Notation and score preparation","The portfolio and premiere"] }
});

/* Music Fundamentals. `planned` nodes show the rest of the tree (dashed) until their pages are written.
   To write one, move it to `nodes` (keep id, col, row, icon, chips, pre, math, physics) and add its page, lab and check. */
DB.trees["music-fundamentals"] = {
  eras: [
    { name: "Notation", from: 0, to: 1 },
    { name: "Meter & Scales", from: 2, to: 3 },
    { name: "Keys & Intervals", from: 4, to: 5 },
    { name: "Chords & Melody", from: 6, to: 7 },
    { name: "Toward Harmony", from: 8, to: 9 }
  ],
  nodes: [
    { id: "mus-pitch", col: 0, row: 2, icon: "C♯", chips: ["C–B","♯ ♭","½ step"], pre: [], math: ["modular"] },
    { id: "mus-durations", col: 0, row: 6, icon: "♩", chips: ["𝅗𝅥","♩","♪"], pre: [], math: ["fractions","fraction-ops"] },
    { id: "mus-sound", col: 1, row: 0, icon: "Hz", chips: ["440","2:1","f, 2f, 3f"], pre: ["mus-pitch"], math: ["ratios","exponents","trig-sin-cos-graphs"],
      physics: ["waves:Simple harmonic motion","waves:Superposition, interference and standing waves","waves:Sound: intensity, decibels and the Doppler effect"] },
    { id: "mus-staff", col: 1, row: 3, icon: "𝄞", chips: ["treble","bass","C clef"], pre: ["mus-pitch"] },
    { id: "mus-simple-meter", col: 1, row: 6, icon: "4/4", chips: ["2/4","3/4","4/4"], pre: ["mus-durations"], math: ["fraction-ops"] }
  ],
  planned: [
    { id: "mus-major-scales", label: "Major Scales & Scale Degrees", col: 2, row: 3, icon: "1̂–8̂", chips: ["W W H","tonic"], pre: ["mus-staff"] },
    { id: "mus-expression", label: "Tempo, Dynamics & Articulation", col: 2, row: 5, icon: "𝆑", chips: ["p","f","♩=60"], pre: ["mus-staff","mus-simple-meter"] },
    { id: "mus-compound-meter", label: "Compound Meter", col: 2, row: 7, icon: "6/8", chips: ["6/8","9/8","♩."], pre: ["mus-simple-meter"], math: ["fraction-ops"] },
    { id: "mus-key-sigs", label: "Key Signatures & the Circle of Fifths", col: 3, row: 2, icon: "♯♯", chips: ["FCGDAEB","circle"], pre: ["mus-major-scales"], math: ["modular"] },
    { id: "mus-syncopation", label: "Syncopation, Tuplets & Asymmetric Meter", col: 3, row: 7, icon: "3:2", chips: ["triplet","5/8"], pre: ["mus-compound-meter"], math: ["ratios"] },
    { id: "mus-minor", label: "Minor Scales & Keys", col: 4, row: 1, icon: "♭3̂", chips: ["natural","harmonic","melodic"], pre: ["mus-key-sigs"] },
    { id: "mus-intervals", label: "Intervals: Size & Quality", col: 4, row: 4, icon: "M3", chips: ["P5","M3","m6"], pre: ["mus-major-scales","mus-key-sigs"] },
    { id: "mus-modes", label: "Modes & Other Scales", col: 5, row: 0, icon: "Dor", chips: ["Dorian","penta"], pre: ["mus-minor"] },
    { id: "mus-interval-inversion", label: "Inversion, Compound Intervals & Consonance", col: 5, row: 3, icon: "M3↔m6", chips: ["9","12"], pre: ["mus-intervals"], math: ["modular"] },
    { id: "mus-tuning", label: "Tuning & Temperament", col: 5, row: 5, icon: "¹²√2", chips: ["3:2","cents"], pre: ["mus-sound","mus-intervals"], math: ["ratios","a1-rational-exp","a2-log-props"], physics: ["waves:Beats and resonance in pipes and strings"] },
    { id: "mus-triads", label: "Triads", col: 6, row: 2, icon: "135", chips: ["M","m","°","+"], pre: ["mus-intervals"] },
    { id: "mus-melody", label: "Melody: Contour, Motive & Phrase", col: 6, row: 6, icon: "∿♪", chips: ["step","leap"], pre: ["mus-intervals","mus-syncopation"] },
    { id: "mus-triad-inversion", label: "Triad Inversion & Figured Bass", col: 7, row: 1, icon: "6/4", chips: ["5/3","6","6/4"], pre: ["mus-triads"] },
    { id: "mus-diatonic-triads", label: "Diatonic Triads & Roman Numerals", col: 7, row: 3, icon: "I IV V", chips: ["I","ii","V"], pre: ["mus-triads","mus-minor"] },
    { id: "mus-texture", label: "Texture & Timbre", col: 7, row: 5, icon: "≡", chips: ["mono","homo","poly"], pre: ["mus-melody","mus-sound"], physics: ["waves:Superposition, interference and standing waves"] },
    { id: "mus-sevenths", label: "Seventh Chords", col: 8, row: 2, icon: "7", chips: ["Mm7","ø7","°7"], pre: ["mus-triad-inversion","mus-diatonic-triads"] },
    { id: "mus-lead-sheet", label: "Lead-Sheet Chord Symbols", col: 9, row: 3, icon: "Cmaj7", chips: ["Am7","G7"], pre: ["mus-sevenths"] },
    { id: "mus-cadences", label: "Harmonic Function & Cadences", col: 9, row: 5, icon: "V–I", chips: ["PAC","HC"], pre: ["mus-sevenths","mus-melody"] }
  ]
};
})();
