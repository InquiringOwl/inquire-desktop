/* ============ Story art: Verbs: Tense, Aspect & Mood (inline SVG, offline) ============
   Original scenes drawn for Inquire, 480 × 180: two-cities (A Tale of Two Cities), battlefield (Gettysburg Address). */
(function(){
window.DB = window.DB || {};
const S = DB.scenes = DB.scenes || {};
const svg = (id, body) => `<svg viewBox="0 0 480 180" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">${body}</svg>`;

/* A Tale of Two Cities: one sky split in two. London on the left under cold fog and a pale moon
   (a domed cathedral, chimneys, the river); Paris on the right under a burning sunset (twin-towered
   cathedral, a barricade of carts). A road runs between them. */
S["two-cities"] = svg("tc", `
<defs><linearGradient id="tc-cold" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0f1a2c"/><stop offset=".6" stop-color="#34506a"/><stop offset="1" stop-color="#7d93a3"/></linearGradient>
<linearGradient id="tc-hot" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a0f1a"/><stop offset=".55" stop-color="#a8392c"/><stop offset="1" stop-color="#f2a35a"/></linearGradient>
<linearGradient id="tc-river" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5a7488"/><stop offset="1" stop-color="#101a26"/></linearGradient>
<linearGradient id="tc-road" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a2e2a"/><stop offset="1" stop-color="#120c0a"/></linearGradient>
<linearGradient id="tc-fog" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#c9d4dc" stop-opacity=".28"/><stop offset="1" stop-color="#c9d4dc" stop-opacity="0"/></linearGradient>
<clipPath id="tc-l"><path d="M0 0 H262 L218 180 H0Z"/></clipPath><clipPath id="tc-r"><path d="M262 0 H480 V180 H218Z"/></clipPath></defs>
<g clip-path="url(#tc-l)"><rect width="480" height="180" fill="url(#tc-cold)"/>
<circle cx="70" cy="38" r="13" fill="#e8eef2" opacity=".85"/><circle cx="70" cy="38" r="30" fill="#e8eef2" opacity=".1"/>
<g fill="#0e1622"><path d="M96 124 V92 h8 V80 q16 -26 32 0 V92 h8 V124Z"/><rect x="117" y="44" width="6" height="12"/><circle cx="120" cy="58" r="5"/><path d="M110 80 q10 -22 20 0Z"/>
<rect x="0" y="104" width="34" height="22"/><rect x="38" y="98" width="26" height="28"/><rect x="66" y="108" width="28" height="18"/><rect x="150" y="100" width="30" height="26"/><rect x="182" y="106" width="34" height="20"/>
<rect x="8" y="92" width="4" height="12"/><rect x="46" y="86" width="4" height="12"/><rect x="56" y="88" width="3" height="10"/><rect x="160" y="88" width="4" height="12"/><rect x="196" y="94" width="4" height="12"/></g>
<g fill="#f0d68a" opacity=".75"><rect x="44" y="106" width="3" height="4"/><rect x="72" y="114" width="3" height="4"/><rect x="158" y="108" width="3" height="4"/><rect x="190" y="112" width="3" height="4"/></g>
<rect x="0" y="126" width="262" height="54" fill="url(#tc-river)"/>
<g stroke="#9db2c0" stroke-width="1" opacity=".45"><line x1="10" y1="140" x2="70" y2="140"/><line x1="90" y1="150" x2="170" y2="150"/><line x1="30" y1="162" x2="110" y2="162"/></g>
<rect x="0" y="70" width="262" height="40" fill="url(#tc-fog)"/><rect x="0" y="116" width="262" height="18" fill="#c9d4dc" opacity=".12"/></g>
<g clip-path="url(#tc-r)"><rect width="480" height="180" fill="url(#tc-hot)"/>
<circle cx="420" cy="104" r="26" fill="#ffd38a" opacity=".55"/><circle cx="420" cy="104" r="60" fill="#ffb060" opacity=".14"/>
<g fill="#1a0a0c"><path d="M318 126 V60 h6 V52 h20 V60 h6 V126Z"/><path d="M362 126 V60 h6 V52 h20 V60 h6 V126Z"/><rect x="350" y="76" width="12" height="50"/><circle cx="356" cy="92" r="6" fill="#3a1414"/>
<rect x="250" y="102" width="62" height="24"/><rect x="400" y="98" width="80" height="28"/><rect x="268" y="90" width="4" height="12"/><rect x="430" y="86" width="4" height="12"/></g>
<g fill="#ffcf7a" opacity=".7"><rect x="324" y="70" width="3" height="6"/><rect x="342" y="70" width="3" height="6"/><rect x="368" y="70" width="3" height="6"/><rect x="386" y="70" width="3" height="6"/></g>
<rect x="218" y="126" width="262" height="54" fill="#1a0c0c"/>
<g fill="#2a1410" stroke="#0a0404" stroke-width="1"><circle cx="420" cy="140" r="12" fill="none" stroke="#4a2418" stroke-width="3"/><path d="M380 150 l70 -20 l6 10 l-70 20Z"/><path d="M398 156 l40 -32 l6 6 l-40 32Z"/><rect x="440" y="140" width="34" height="14"/></g>
<g fill="#f2a35a" opacity=".5"><circle cx="300" cy="40" r="1.4"/><circle cx="332" cy="28" r="1.2"/><circle cx="452" cy="46" r="1.5"/><circle cx="410" cy="22" r="1"/></g></g>
<path d="M232 180 L254 126 H270 L262 180Z" fill="url(#tc-road)" opacity=".9"/>
<line x1="262" y1="0" x2="218" y2="180" stroke="#e6dccb" stroke-width="1.5" opacity=".55"/>
<g fill="#0a0808"><rect x="236" y="138" width="22" height="12" rx="2"/><circle cx="240" cy="152" r="4"/><circle cx="254" cy="152" r="4"/><path d="M258 142 l10 -4 l2 6 l-10 4Z"/></g>`);

/* The Gettysburg Address: a November field at dusk. Low hills, a split-rail fence, rows of plain
   headstones on the slope, a bare tree, and a small speakers' platform with a flag. */
S["battlefield"] = svg("bf", `
<defs><linearGradient id="bf-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1b2236"/><stop offset=".55" stop-color="#5d5a6e"/><stop offset="1" stop-color="#d8a77a"/></linearGradient>
<linearGradient id="bf-far" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4a4a52"/><stop offset="1" stop-color="#2e3036"/></linearGradient>
<linearGradient id="bf-near" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4a4630"/><stop offset="1" stop-color="#1a1a12"/></linearGradient>
<radialGradient id="bf-sun" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffe0a8" stop-opacity=".9"/><stop offset="1" stop-color="#ffe0a8" stop-opacity="0"/></radialGradient></defs>
<rect width="480" height="180" fill="url(#bf-sky)"/>
<circle cx="110" cy="96" r="40" fill="url(#bf-sun)"/><circle cx="110" cy="96" r="10" fill="#ffe6b8" opacity=".9"/>
<g fill="#9a8ea0" opacity=".35"><ellipse cx="300" cy="40" rx="70" ry="7"/><ellipse cx="360" cy="54" rx="50" ry="5"/><ellipse cx="150" cy="30" rx="60" ry="5"/></g>
<path d="M0 104 Q60 88 130 98 T260 92 T380 96 T480 88 V180 H0Z" fill="url(#bf-far)"/>
<path d="M0 128 Q90 108 200 120 T400 112 T480 118 V180 H0Z" fill="url(#bf-near)"/>
<g fill="#cfc8b8" opacity=".85">${Array.from({length:4},(_,r)=>Array.from({length:11},(_,i)=>{const x=200+i*22+r*6, y=126+r*12+Math.round(Math.sin(i*.7)*2); return `<path d="M${x} ${y} v-${7+r} q0 -4 4 -4 q4 0 4 4 v${7+r}z"/>`;}).join("")).join("")}</g>
<g stroke="#2a2416" stroke-width="2.4" stroke-linecap="round"><path d="M0 150 L36 144 M8 158 L44 146 M36 144 L76 150 M44 146 L80 158 M76 150 L116 144 M80 158 L120 146 M116 144 L156 150 M120 146 L160 158"/></g>
<g stroke="#1a160e" stroke-width="2"><line x1="36" y1="138" x2="40" y2="160"/><line x1="78" y1="142" x2="80" y2="164"/><line x1="118" y1="138" x2="120" y2="160"/></g>
<g stroke="#15130c" fill="none" stroke-linecap="round"><path d="M430 124 V70" stroke-width="5"/><path d="M430 92 L410 72 M410 72 L398 66 M410 72 L404 58 M430 84 L452 64 M452 64 L466 60 M452 64 L448 50 M430 74 L424 52 M430 74 L440 54" stroke-width="2.2"/></g>
<g fill="#151410"><rect x="150" y="112" width="44" height="6"/><rect x="152" y="118" width="3" height="12"/><rect x="189" y="118" width="3" height="12"/><rect x="170" y="118" width="3" height="12"/>
<rect x="182" y="92" width="6" height="20"/><rect x="180" y="86" width="10" height="6" rx="1"/><rect x="183.5" y="76" width="3" height="10"/><rect x="179.5" y="74" width="11" height="3"/></g>
<line x1="154" y1="112" x2="154" y2="66" stroke="#151410" stroke-width="1.6"/>
<path d="M154 67 q5 -2.5 10 0 t10 0 v10 q-5 -2.5 -10 0 t-10 0z" fill="#8a2a30" opacity=".9"/><rect x="154" y="67" width="8" height="5" fill="#2a3a6a" opacity=".9"/>`);
})();
