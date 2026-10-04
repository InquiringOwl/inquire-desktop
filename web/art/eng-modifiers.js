/* ============ Story art: Adjectives & Adverbs (eng-modifiers) ============
   Original inline-SVG scenes drawn for Inquire, 480 × 180. Gradient ids are prefixed with the scene key. */
(function(){
window.DB = window.DB || {};
const S = DB.scenes = DB.scenes || {};
const svg = body => `<svg viewBox="0 0 480 180" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">${body}</svg>`;

/* A Descent into the Maelstrom: two small figures on the summit of a black crag above a vast whirlpool,
   under a low moon and torn cloud on the Norwegian coast. */
S["maelstrom"] = svg(`
<defs><linearGradient id="maelstrom-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#070b16"/><stop offset=".55" stop-color="#1b2a44"/><stop offset="1" stop-color="#3d5068"/></linearGradient>
<radialGradient id="maelstrom-pool" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#010307"/><stop offset=".35" stop-color="#0a1626"/><stop offset=".8" stop-color="#1f3a52"/><stop offset="1" stop-color="#2c4c66" stop-opacity="0"/></radialGradient>
<linearGradient id="maelstrom-sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#20384f"/><stop offset="1" stop-color="#08121d"/></linearGradient>
<radialGradient id="maelstrom-moon" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#f4ecd2" stop-opacity=".5"/><stop offset="1" stop-color="#f4ecd2" stop-opacity="0"/></radialGradient></defs>
<rect width="480" height="180" fill="url(#maelstrom-sky)"/>
<circle cx="392" cy="34" r="40" fill="url(#maelstrom-moon)"/><circle cx="392" cy="34" r="11" fill="#efe6c8"/>
<g fill="#0e1828" opacity=".85"><path d="M300 30 q30 -14 64 -4 q26 -10 54 2 q22 0 30 10 q-60 8 -148 -8z"/><path d="M180 52 q40 -12 80 0 q30 -6 52 6 q-70 8 -132 -6z" opacity=".7"/></g>
<rect y="92" width="480" height="88" fill="url(#maelstrom-sea)"/>
<rect y="91" width="480" height="2" fill="#9fb6c8" opacity=".35"/>
<ellipse cx="300" cy="134" rx="150" ry="36" fill="url(#maelstrom-pool)"/>
<g fill="none" stroke-linecap="round">
<path d="M300 134 m-140 0 a140 33 0 0 1 280 -2" stroke="#8fb3cc" stroke-width="1.6" opacity=".55"/>
<path d="M300 134 m-112 2 a112 26 0 0 1 226 -4" stroke="#a8c8dc" stroke-width="1.4" opacity=".6"/>
<path d="M300 134 m118 -1 a118 27 0 0 1 -236 3" stroke="#6f93ad" stroke-width="1.2" opacity=".5"/>
<path d="M300 134 m-84 1 a84 19 0 0 1 170 -3" stroke="#c4dbe8" stroke-width="1.2" opacity=".55"/>
<path d="M300 134 m88 0 a88 20 0 0 1 -176 2" stroke="#7fa3bd" stroke-width="1" opacity=".5"/>
<path d="M300 134 m-56 1 a56 12 0 0 1 114 -2" stroke="#d9e8f0" stroke-width="1" opacity=".5"/>
<path d="M300 134 m30 0 a30 6 0 0 1 -60 1" stroke="#d9e8f0" stroke-width=".8" opacity=".4"/></g>
<ellipse cx="300" cy="135" rx="16" ry="3.5" fill="#000"/>
<g fill="#0b1522" opacity=".9"><path d="M206 126 l14 -3 l8 3 l-20 2z"/></g>
<path d="M208 125 l2 -9" stroke="#0b1522" stroke-width="1"/>
<g stroke="#5d7f99" stroke-width="1" fill="none" opacity=".5"><path d="M0 108 q20 -4 40 0 t40 0 t40 0"/><path d="M0 124 q20 -4 40 0 t40 0"/><path d="M420 112 q15 -4 30 0 t30 0"/><path d="M440 158 q15 -4 30 0 t30 0"/></g>
<path d="M0 180 L0 70 L16 62 L30 68 L46 56 L64 54 L96 52 L112 60 L126 78 L140 96 L152 118 L166 146 L178 180Z" fill="#05080f"/>
<path d="M96 52 L112 60 L126 78 L116 76 L104 62Z" fill="#141c2a"/><path d="M30 68 L46 56 L52 72 L40 76Z" fill="#111827"/>
<g fill="#070a12"><circle cx="70" cy="37" r="4.2"/><path d="M64 54 q-1 -10 3 -13 l7 0 q4 3 3 13z"/><path d="M66 43 l-6 6 M75 43 l5 5" stroke="#070a12" stroke-width="2.2" stroke-linecap="round"/>
<circle cx="88" cy="35" r="4"/><path d="M83 54 q-1 -11 2 -15 l6 0 q3 4 3 15z"/><path d="M85 42 q-6 2 -9 8" stroke="#070a12" stroke-width="2" fill="none" stroke-linecap="round"/></g>
<g fill="#dfe6ee" opacity=".85"><path d="M66.5 34.5 q3.5 -4.5 7 0 q-1 -2 -3.5 -2 q-2.5 0 -3.5 2z"/></g>
<g fill="#cfe0ec" opacity=".35"><circle cx="210" cy="104" r="1"/><circle cx="380" cy="112" r="1.2"/><circle cx="440" cy="128" r="1"/></g>`);

/* The Picture of Dorian Gray: an artist's studio in summer. An easel holds a portrait; through the open
   door, lilac and the yellow chains of a laburnum; a divan with a thin curl of cigarette smoke; roses. */
S["studio-roses"] = svg(`
<defs><linearGradient id="studio-roses-wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2b2420"/><stop offset="1" stop-color="#171210"/></linearGradient>
<linearGradient id="studio-roses-garden" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfe6c4"/><stop offset=".5" stop-color="#7fae74"/><stop offset="1" stop-color="#3f6a3e"/></linearGradient>
<linearGradient id="studio-roses-floor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b2a1e"/><stop offset="1" stop-color="#1a120c"/></linearGradient>
<linearGradient id="studio-roses-shaft" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffe9b0" stop-opacity=".32"/><stop offset="1" stop-color="#ffe9b0" stop-opacity="0"/></linearGradient>
<linearGradient id="studio-roses-canvas" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4a3c33"/><stop offset="1" stop-color="#2a201b"/></linearGradient></defs>
<rect width="480" height="180" fill="url(#studio-roses-wall)"/>
<g stroke="#3a302a" stroke-width="1" opacity=".6">${Array.from({length:12},(_,i)=>`<line x1="${20+i*40}" y1="0" x2="${20+i*40}" y2="140"/>`).join("")}</g>
<rect x="44" y="20" width="84" height="120" fill="url(#studio-roses-garden)"/>
<g fill="#5b8a52"><ellipse cx="60" cy="96" rx="22" ry="18"/><ellipse cx="112" cy="90" rx="24" ry="22"/></g>
<g fill="#b89ad8">${[[54,84],[62,78],[48,92],[66,90],[58,96]].map(([x,y])=>`<ellipse cx="${x}" cy="${y}" rx="4" ry="6"/>`).join("")}</g>
<g fill="#9a7cc4">${[[57,88],[51,80],[64,84]].map(([x,y])=>`<ellipse cx="${x}" cy="${y}" rx="3" ry="5"/>`).join("")}</g>
<path d="M100 30 q12 10 26 4" stroke="#4d6a3c" stroke-width="2" fill="none"/>
<g fill="#f2cf3c">${[[104,34,14],[112,38,18],[120,36,12],[96,32,10]].map(([x,y,l])=>`<path d="M${x} ${y} q2 ${l/2} 0 ${l} q-2 -${l/2} 0 -${l}z" transform="translate(0 0)"/><ellipse cx="${x}" cy="${y+l}" rx="2.4" ry="3"/>`).join("")}</g>
<g fill="#e8eef2" opacity=".55"><path d="M70 60 q3 -2 6 0 q-3 2 -6 0z"/></g>
<rect x="40" y="16" width="92" height="126" fill="none" stroke="#c9b48a" stroke-width="3"/>
<path d="M132 18 L160 26 L160 136 L132 142Z" fill="#4a3a2c" stroke="#c9b48a" stroke-width="1.5"/><circle cx="154" cy="84" r="1.8" fill="#d9c08a"/>
<path d="M44 20 L128 20 L250 180 L60 180Z" fill="url(#studio-roses-shaft)"/>
<rect x="0" y="140" width="480" height="40" fill="url(#studio-roses-floor)"/><rect x="0" y="138" width="480" height="3" fill="#5a4330"/>
<path d="M178 150 Q240 136 300 150 L292 162 Q240 152 186 162Z" fill="#5a2a34" opacity=".55"/>
<g stroke="#6e5236" stroke-width="3" stroke-linecap="round"><line x1="300" y1="38" x2="282" y2="160"/><line x1="320" y1="38" x2="340" y2="160"/><line x1="310" y1="44" x2="312" y2="168"/></g>
<rect x="276" y="112" width="70" height="5" fill="#6e5236"/>
<rect x="272" y="26" width="78" height="88" fill="url(#studio-roses-canvas)" stroke="#d9c08a" stroke-width="3"/>
<g><circle cx="311" cy="50" r="8" fill="#e6c9a8"/><path d="M303 48 q8 -12 16 0 q-2 -8 -8 -8 q-6 0 -8 8z" fill="#c69a5a"/>
<path d="M298 112 q2 -36 13 -52 q11 16 13 52z" fill="#1c2430"/><path d="M306 62 l5 6 l5 -6z" fill="#f2efe8"/></g>
<g fill="#130e0c"><path d="M372 150 q-4 -26 10 -30 l70 0 q14 4 14 30z"/><rect x="368" y="146" width="104" height="10" rx="4"/><rect x="374" y="154" width="5" height="16"/><rect x="460" y="154" width="5" height="16"/></g>
<g fill="#6e3d52"><ellipse cx="392" cy="128" rx="12" ry="6"/><ellipse cx="446" cy="126" rx="10" ry="6"/></g>
<path d="M422 118 q-6 -10 2 -18 q8 -8 0 -18 q-6 -8 4 -16" stroke="#cfd6de" stroke-width="1.2" fill="none" opacity=".45"/>
<circle cx="421" cy="119" r="1.6" fill="#ff9a4a"/>
<g><rect x="210" y="118" width="16" height="22" rx="3" fill="#5f7f8a"/><path d="M214 118 q-10 -12 -6 -22 M220 118 q2 -14 8 -20 M218 118 q-2 -16 0 -26" stroke="#3f6a3e" stroke-width="1.6" fill="none"/>
<g fill="#d94a64"><circle cx="208" cy="96" r="5"/><circle cx="228" cy="98" r="5"/><circle cx="218" cy="91" r="5.5"/></g>
<g fill="#f08aa0"><circle cx="208" cy="95" r="2"/><circle cx="228" cy="97" r="2"/><circle cx="218" cy="90" r="2.2"/></g>
<circle cx="240" cy="160" r="2.4" fill="#d94a64" opacity=".8"/></g>`);
})();
