/* ============ Story art: Pronoun Case & Reference (inline SVG, offline) ============
   Original scenes drawn for Inquire, 480 × 180: baker-street (The Adventures of Sherlock Holmes),
   wuthering-moor (Wuthering Heights). */
(function(){
window.DB = window.DB || {};
const S = DB.scenes = DB.scenes || {};
const svg = body => `<svg viewBox="0 0 480 180" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">${body}</svg>`;

/* Baker Street: a lamplit sitting room on a foggy night. A sash window shows a gas lamp and a hansom cab
   in yellow fog; a fire burns in the grate; an armchair with a violin across its seat, a pipe rack on the
   mantel, and a framed portrait of a woman (the woman) above it. */
S["baker-street"] = svg(`
<defs><linearGradient id="baker-street-wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#231b1c"/><stop offset="1" stop-color="#3a2a22"/></linearGradient>
<linearGradient id="baker-street-fog" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5b5a4a"/><stop offset=".7" stop-color="#a99a64"/><stop offset="1" stop-color="#c8b276"/></linearGradient>
<radialGradient id="baker-street-lamp" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffe7a0" stop-opacity=".9"/><stop offset="1" stop-color="#ffe7a0" stop-opacity="0"/></radialGradient>
<radialGradient id="baker-street-fire" cx=".5" cy=".7" r=".6"><stop offset="0" stop-color="#ffcf6a"/><stop offset=".5" stop-color="#e2602a"/><stop offset="1" stop-color="#5a1a10" stop-opacity="0"/></radialGradient>
<linearGradient id="baker-street-floor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4a2a1e"/><stop offset="1" stop-color="#1e1210"/></linearGradient></defs>
<rect width="480" height="180" fill="url(#baker-street-wall)"/>
<g stroke="#4a3830" stroke-width="1" opacity=".5"><path d="M0 30 H480 M0 60 H480"/></g>
<rect x="40" y="18" width="120" height="112" fill="url(#baker-street-fog)"/>
<circle cx="80" cy="66" r="26" fill="url(#baker-street-lamp)"/>
<path d="M79 70 V128 M74 128 H84" stroke="#2a2a26" stroke-width="2.5"/>
<path d="M72 62 L86 62 L83 72 L75 72Z" fill="#fff0b8" stroke="#2a2a26" stroke-width="1.5"/>
<g fill="#3c3a30" opacity=".75"><rect x="104" y="96" width="34" height="20" rx="3"/><circle cx="112" cy="118" r="8"/><path d="M138 100 L156 90" stroke="#3c3a30" stroke-width="2"/><rect x="98" y="104" width="10" height="8"/></g>
<g stroke="#5a4232" stroke-width="5" fill="none"><rect x="40" y="18" width="120" height="112"/><path d="M100 18 V130 M40 74 H160"/></g>
<rect x="34" y="128" width="132" height="8" fill="#5a4232"/>
<path d="M30 14 Q36 70 30 140 L22 140 Q28 70 22 14Z M170 14 Q164 70 170 140 L178 140 Q172 70 178 14Z" fill="#5c1e22"/>
<rect x="262" y="70" width="140" height="10" fill="#6a4a36"/>
<rect x="270" y="80" width="124" height="74" fill="#2c1f1a"/>
<rect x="296" y="102" width="72" height="52" fill="#120c0a"/>
<ellipse cx="332" cy="138" rx="34" ry="22" fill="url(#baker-street-fire)"/>
<path d="M314 150 Q322 126 330 146 Q336 120 344 148 Q350 132 354 150Z" fill="#ffd27a" opacity=".85"/>
<rect x="300" y="148" width="64" height="5" fill="#2a2420"/>
<rect x="306" y="16" width="52" height="46" fill="#7a5a30"/>
<rect x="311" y="21" width="42" height="36" fill="#d8c8a8"/>
<ellipse cx="332" cy="36" rx="9" ry="11" fill="#5a3a30"/>
<path d="M318 57 Q332 40 346 57Z" fill="#3a3a5a"/>
<g fill="#9a8a70"><rect x="272" y="60" width="4" height="10"/><rect x="282" y="58" width="4" height="12"/><path d="M378 64 q8 -10 14 0 v6 h-14z"/></g>
<path d="M0 154 H480 V180 H0Z" fill="url(#baker-street-floor)"/>
<g fill="#6a2a26"><path d="M188 92 Q186 70 206 68 L246 68 Q262 70 260 92 L262 150 L186 150Z"/><rect x="180" y="100" width="18" height="44" rx="6"/><rect x="250" y="100" width="18" height="44" rx="6"/></g>
<path d="M196 116 H252 V138 H196Z" fill="#7e3430"/>
<g transform="rotate(-14 224 118)"><ellipse cx="214" cy="118" rx="16" ry="9" fill="#a8582a"/><ellipse cx="232" cy="118" rx="12" ry="8" fill="#a8582a"/><rect x="242" y="116" width="28" height="4" fill="#2a1a10"/><path d="M206 118 H262" stroke="#e8d8b0" stroke-width=".6"/></g>
<path d="M414 154 L420 120 L452 120 L458 154" fill="#3a2a22"/><ellipse cx="436" cy="118" rx="22" ry="5" fill="#5a4232"/>
<path d="M428 114 q8 -14 18 -2 l-4 4 q-6 -6 -12 0z" fill="#6a5a40"/>`);

/* Wuthering Heights: a squat stone farmhouse high on a moor under a racing grey sky; a row of stunted firs
   and gaunt thorns lean one way before the north wind; a walled track climbs through heather towards the
   gate, where a lone visitor in a long coat and hat walks up. */
S["wuthering-moor"] = svg(`
<defs><linearGradient id="wuthering-moor-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2c3340"/><stop offset=".6" stop-color="#5d6672"/><stop offset="1" stop-color="#8c8e88"/></linearGradient>
<linearGradient id="wuthering-moor-hill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4c4a3a"/><stop offset="1" stop-color="#2a2620"/></linearGradient>
<linearGradient id="wuthering-moor-near" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5a3a46"/><stop offset="1" stop-color="#241a1e"/></linearGradient>
<linearGradient id="wuthering-moor-stone" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#6e6a62"/><stop offset="1" stop-color="#4a4640"/></linearGradient></defs>
<rect width="480" height="180" fill="url(#wuthering-moor-sky)"/>
<g fill="#9aa0a6" opacity=".35"><path d="M20 40 Q80 26 150 38 Q110 46 20 40Z"/><path d="M190 22 Q270 10 360 24 Q300 32 190 22Z"/><path d="M330 56 Q400 44 470 54 Q420 62 330 56Z"/></g>
<g stroke="#c8ccd0" stroke-width="1" opacity=".35" fill="none"><path d="M40 70 q30 -4 60 0"/><path d="M380 84 q24 -4 48 0"/><path d="M150 60 q20 -3 40 0"/></g>
<path d="M0 120 Q90 104 180 96 Q260 88 330 92 Q420 98 480 110 V180 H0Z" fill="url(#wuthering-moor-hill)"/>
<g fill="url(#wuthering-moor-stone)"><path d="M228 66 L300 66 L312 82 L216 82Z" fill="#3a3632"/><rect x="220" y="82" width="88" height="22"/><rect x="292" y="58" width="9" height="14"/></g>
<rect x="236" y="88" width="8" height="8" fill="#e8c878" opacity=".8"/><rect x="284" y="88" width="8" height="8" fill="#2a2622"/>
<rect x="258" y="88" width="12" height="16" fill="#2a2420"/>
<path d="M256 86 H272" stroke="#8a847a" stroke-width="2"/>
<g fill="#26302a"><path d="M200 104 L196 74 Q200 66 212 62 Q206 74 212 104Z"/><path d="M188 104 L186 82 Q190 76 200 72 Q194 84 198 104Z"/><path d="M312 104 L316 80 Q320 72 332 70 Q324 84 322 104Z"/><path d="M326 102 L330 86 Q334 80 342 78 Q336 88 334 102Z"/></g>
<g stroke="#2a2420" stroke-width="2" fill="none" stroke-linecap="round"><path d="M352 104 Q356 86 372 76 M362 88 l14 -4 M358 96 l12 0"/><path d="M168 108 Q170 92 184 84 M174 98 l10 -4"/></g>
<path d="M0 150 Q100 132 200 128 Q270 124 330 130 Q410 138 480 146 V180 H0Z" fill="url(#wuthering-moor-near)"/>
<path d="M262 104 Q250 120 232 134 Q206 156 190 180 L214 180 Q226 156 244 138 Q262 122 268 104Z" fill="#6a6250"/>
<g stroke="#4a4840" stroke-width="3" stroke-dasharray="6 3" fill="none"><path d="M256 104 Q238 126 210 150 Q190 166 176 180"/><path d="M272 104 Q262 128 240 150 Q226 166 220 180"/></g>
<g fill="#7a4e66" opacity=".7"><circle cx="40" cy="160" r="3"/><circle cx="70" cy="152" r="2.5"/><circle cx="120" cy="164" r="3"/><circle cx="340" cy="156" r="2.5"/><circle cx="400" cy="162" r="3"/><circle cx="450" cy="154" r="2.5"/><circle cx="300" cy="168" r="3"/></g>
<g fill="#151214"><path d="M224 150 L222 136 Q222 128 228 128 Q234 128 234 136 L234 150 L230 150 L229 141 L228 150Z"/><circle cx="228" cy="124" r="3.5"/><path d="M222 121 H234 L232 118 H224Z"/><path d="M233 132 L242 136" stroke="#151214" stroke-width="1.5"/></g>
<g stroke="#2a2620" stroke-width="1" opacity=".5"><path d="M10 172 l6 -10 M30 176 l4 -9 M440 172 l5 -10 M460 176 l4 -8 M100 178 l5 -10"/></g>`);
})();
