/* ============ Story art: original illustrated scenes (inline SVG, offline) ============
   DB.scenes[key] = svg string. Banner shape 480 × 180. Used by story panels on English topic pages.
   Every scene is drawn for Inquire: no book covers, film stills or other artists' illustrations. */
(function(){
window.DB = window.DB || {};
const S = DB.scenes = DB.scenes || {};
const svg = (id, body) => `<svg viewBox="0 0 480 180" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">${body}</svg>`;

/* Pride and Prejudice: a Regency drawing room at evening, tall sash window onto the park. */
S["drawing-room"] = svg("dr", `
<defs><linearGradient id="dr-wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a1d2e"/><stop offset="1" stop-color="#170f1b"/></linearGradient>
<linearGradient id="dr-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f3b779"/><stop offset=".55" stop-color="#d97a83"/><stop offset="1" stop-color="#6c4c7c"/></linearGradient>
<radialGradient id="dr-glow" cx=".5" cy=".45" r=".6"><stop offset="0" stop-color="#ffcf8a" stop-opacity=".35"/><stop offset="1" stop-color="#ffcf8a" stop-opacity="0"/></radialGradient>
<linearGradient id="dr-floor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a2618"/><stop offset="1" stop-color="#1a110b"/></linearGradient></defs>
<rect width="480" height="180" fill="url(#dr-wall)"/>
<g stroke="#4a3550" stroke-width="1" opacity=".55">${Array.from({length:16},(_,i)=>`<line x1="${15+i*30}" y1="0" x2="${15+i*30}" y2="140"/>`).join("")}</g>
<rect x="190" y="14" width="100" height="120" fill="url(#dr-sky)"/>
<path d="M190 112 Q215 92 240 104 T290 98 V134 H190Z" fill="#3c3048"/>
<g fill="#2b2238"><ellipse cx="208" cy="104" rx="14" ry="12"/><ellipse cx="226" cy="99" rx="10" ry="9"/><ellipse cx="272" cy="100" rx="13" ry="11"/></g>
<g stroke="#e9dccb" stroke-width="2.5" fill="none"><rect x="190" y="14" width="100" height="120"/><line x1="240" y1="14" x2="240" y2="134"/><line x1="190" y1="54" x2="290" y2="54"/><line x1="190" y1="94" x2="290" y2="94"/></g>
<path d="M176 8 Q186 70 180 140 L198 140 Q194 70 204 8Z" fill="#7a2e4a"/><path d="M304 8 Q294 70 300 140 L282 140 Q286 70 276 8Z" fill="#7a2e4a"/>
<rect x="170" y="4" width="140" height="8" fill="#b88a4a"/>
<rect x="0" y="140" width="480" height="40" fill="url(#dr-floor)"/><rect x="0" y="138" width="480" height="4" fill="#5a3e2a"/>
<ellipse cx="240" cy="90" rx="200" ry="80" fill="url(#dr-glow)"/>
<g><rect x="54" y="34" width="62" height="78" fill="#3a2a1e" stroke="#c49a52" stroke-width="3"/><ellipse cx="85" cy="66" rx="16" ry="20" fill="#6b4a3a"/><path d="M62 112 Q85 82 108 112Z" fill="#4d2f3e"/></g>
<g fill="#120b10"><path d="M352 150 q0 -48 22 -54 q24 -4 26 54z"/><rect x="348" y="146" width="60" height="10" rx="3"/><rect x="352" y="154" width="4" height="18"/><rect x="400" y="154" width="4" height="18"/>
<path d="M128 150 q-2 -40 18 -46 q20 -2 22 46z"/><rect x="122" y="146" width="54" height="10" rx="3"/><rect x="126" y="154" width="4" height="18"/><rect x="168" y="154" width="4" height="18"/></g>
<g><rect x="430" y="70" width="6" height="40" fill="#c9a35a"/><ellipse cx="433" cy="64" rx="3" ry="6" fill="#ffd27a"/><ellipse cx="433" cy="64" rx="14" ry="14" fill="#ffd27a" opacity=".18"/></g>`);

/* Moby-Dick: a three-masted whaler at dusk on a long swell; a fluke breaks the water. */
S["whaler"] = svg("wh", `
<defs><linearGradient id="wh-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d1a33"/><stop offset=".6" stop-color="#2d4f72"/><stop offset="1" stop-color="#d08a5a"/></linearGradient>
<linearGradient id="wh-sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1d3b55"/><stop offset="1" stop-color="#07121f"/></linearGradient></defs>
<rect width="480" height="180" fill="url(#wh-sky)"/>
<circle cx="380" cy="40" r="14" fill="#f1e6c8"/><circle cx="380" cy="40" r="34" fill="#f1e6c8" opacity=".12"/>
<g fill="#cfe2ef" opacity=".7"><circle cx="40" cy="20" r="1"/><circle cx="110" cy="34" r="1.2"/><circle cx="210" cy="16" r="1"/><circle cx="300" cy="28" r="1"/><circle cx="450" cy="18" r="1.1"/></g>
<rect y="118" width="480" height="62" fill="url(#wh-sea)"/>
<rect y="116" width="480" height="3" fill="#e9a874" opacity=".55"/>
<g fill="#0a1626"><path d="M120 120 L250 120 L236 134 L132 134Z"/>
<rect x="148" y="40" width="3" height="82"/><rect x="186" y="28" width="3.5" height="94"/><rect x="222" y="46" width="3" height="76"/>
<path d="M136 120 L148 60 L150 118Z" opacity=".9"/></g>
<g fill="#d9d2bf" opacity=".85"><path d="M151 48 Q166 60 151 76Z"/><path d="M151 80 Q170 92 151 108Z"/><path d="M190 36 Q210 52 190 70Z"/><path d="M190 74 Q214 90 190 110Z"/><path d="M225 54 Q240 66 225 82Z"/><path d="M225 86 Q244 98 225 114Z"/></g>
<g stroke="#0a1626" stroke-width=".8"><line x1="120" y1="122" x2="187" y2="30"/><line x1="250" y1="122" x2="187" y2="30"/></g>
<path d="M344 132 q8 -22 0 -40 q-10 -6 -26 -4 q12 4 16 14 q-10 0 -22 8 q16 -2 24 4 q4 10 -2 18z" fill="#0c1b2c"/>
<path d="M330 134 q14 -6 28 0" stroke="#bfe1f2" stroke-width="1.5" fill="none" opacity=".7"/>
<g stroke="#5c88a8" stroke-width="1.2" fill="none" opacity=".6"><path d="M0 142 q30 -6 60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0"/><path d="M0 158 q30 -6 60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0"/><path d="M-30 172 q30 -6 60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0"/></g>`);

/* Alice's Adventures in Wonderland: falling down a deep well lined with shelves, jars and maps. */
S["rabbit-hole"] = svg("rh", `
<defs><radialGradient id="rh-deep" cx=".5" cy=".95" r=".9"><stop offset="0" stop-color="#05030a"/><stop offset=".6" stop-color="#1c1235"/><stop offset="1" stop-color="#3a2560"/></radialGradient>
<linearGradient id="rh-wall" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#2a1a14"/><stop offset="1" stop-color="#4a2e20"/></linearGradient>
<radialGradient id="rh-light" cx=".5" cy="0" r=".7"><stop offset="0" stop-color="#ffe2a8" stop-opacity=".45"/><stop offset="1" stop-color="#ffe2a8" stop-opacity="0"/></radialGradient></defs>
<rect width="480" height="180" fill="url(#rh-deep)"/>
<path d="M0 0 H150 Q128 90 160 180 H0Z" fill="url(#rh-wall)"/><path d="M480 0 H330 Q352 90 320 180 H480Z" fill="url(#rh-wall)"/>
<rect width="480" height="180" fill="url(#rh-light)"/>
<g fill="#6a4632"><rect x="40" y="38" width="92" height="5"/><rect x="34" y="104" width="98" height="5"/><rect x="346" y="58" width="94" height="5"/><rect x="350" y="128" width="94" height="5"/></g>
<g><rect x="52" y="20" width="12" height="18" rx="2" fill="#c8a24a"/><rect x="54" y="16" width="8" height="5" fill="#e9e1c9"/>
<rect x="74" y="24" width="10" height="14" fill="#7aa0c8"/><rect x="88" y="22" width="9" height="16" fill="#a05a7a"/><rect x="99" y="25" width="8" height="13" fill="#5f8a60"/>
<rect x="48" y="86" width="40" height="18" fill="#d9c79c"/><path d="M52 92 h14 M54 98 h22 M70 90 v10" stroke="#7a6640" stroke-width="1"/>
<circle cx="380" cy="47" r="10" fill="#d8c08a" stroke="#6a4a22" stroke-width="2"/><path d="M380 47 V40 M380 47 h5" stroke="#3a2a12" stroke-width="1.5"/>
<rect x="400" y="44" width="11" height="14" rx="2" fill="#c97a4a"/><rect x="402" y="40" width="7" height="5" fill="#eee"/>
<rect x="362" y="112" width="34" height="16" fill="#3e5f86"/><rect x="404" y="114" width="20" height="14" fill="#8a3a4a"/></g>
<g transform="translate(240 96) rotate(-14)">
<path d="M-24 -6 Q0 -20 24 -6 L16 20 Q0 26 -16 20Z" fill="#7fb6e6"/><path d="M-18 16 Q0 22 18 16 L14 22 Q0 28 -14 22Z" fill="#f2f2f2"/>
<rect x="-6" y="-26" width="12" height="20" rx="5" fill="#f2f2f2"/><circle cx="0" cy="-34" r="9" fill="#f0d2b4"/><path d="M-10 -36 Q0 -52 10 -36 Q12 -24 16 -18 Q4 -30 0 -40 Q-4 -30 -16 -18 Q-12 -24 -10 -36Z" fill="#e8c35a"/>
<path d="M-6 -20 L-30 -40" stroke="#f0d2b4" stroke-width="4" stroke-linecap="round"/><path d="M6 -20 L30 -36" stroke="#f0d2b4" stroke-width="4" stroke-linecap="round"/>
<path d="M-7 24 L-12 44" stroke="#f0d2b4" stroke-width="4" stroke-linecap="round"/><path d="M7 24 L14 42" stroke="#f0d2b4" stroke-width="4" stroke-linecap="round"/></g>
<g opacity=".8"><path d="M300 30 q6 -8 12 0 v8 h-12z" fill="#e9e1c9"/><path d="M304 38 q4 4 0 8" stroke="#e9e1c9" fill="none"/>
<rect x="170" y="140" width="22" height="16" rx="3" fill="#c8a24a" transform="rotate(20 181 148)"/><circle cx="300" cy="150" r="5" fill="#d84a5a"/></g>
<g stroke="#ffe2a8" stroke-width="1" opacity=".25"><line x1="232" y1="0" x2="236" y2="52"/><line x1="250" y1="0" x2="246" y2="50"/></g>`);
})();
