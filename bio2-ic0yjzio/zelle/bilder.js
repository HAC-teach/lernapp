// Bilder für die Beschriftungsaufgaben (Fragetyp "label")
// Alle Bilder sind selbst gezeichnete SVGs mit viewBox 0 0 400 260.
// Die Marker-Koordinaten in questions.js beziehen sich auf diese 400 × 260 Einheiten.

// Kreisbogen um (cx, cy) mit Radius r von Winkel a0 bis a1 (in Grad)
function arc(cx, cy, r, a0, a1) {
  const p = a => [(cx + r * Math.cos(a * Math.PI / 180)).toFixed(1), (cy + r * Math.sin(a * Math.PI / 180)).toFixed(1)];
  const [x0, y0] = p(a0), [x1, y1] = p(a1);
  return `M${x0} ${y0}A${r} ${r} 0 0 1 ${x1} ${y1}`;
}
// Mitochondrium mit gefalteter Innenhaut
const mito = (x, y, rot) => `<g transform="translate(${x} ${y}) rotate(${rot})">
  <ellipse rx="22" ry="10" fill="#f0a04b" stroke="#c4702a" stroke-width="2"/>
  <path d="M-15 0l4-6 4 12 4-12 4 12 4-12 4 6" stroke="#fde3c0" stroke-width="2" fill="none" stroke-linejoin="round"/></g>`;
// Chloroplast mit Streifen
const chloro = (x, y, rot) => `<g transform="translate(${x} ${y}) rotate(${rot})">
  <ellipse rx="15" ry="8" fill="#4f9a3a" stroke="#3a7a2a" stroke-width="1.5"/>
  <path d="M-8-3h16M-10 1h20M-7 5h14" stroke="#8cc96e" stroke-width="1.6"/></g>`;
// kleine Punkte (Ribosomen)
const dots = (list, c) => list.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.6" fill="${c}"/>`).join("");

const IMAGES = {
  // Tierzelle: Zellmembran, Zellplasma, Zellkern, Mitochondrien, netzartige Kanäle
  tierzelle: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tierzelle">
    <rect width="400" height="260" fill="#f3f7fb"/>
    <path d="M58 132C54 72 122 34 202 38C292 41 348 82 344 138C340 196 280 228 196 225C110 222 62 190 58 132Z" fill="#f8d3dc" stroke="#c2577a" stroke-width="5"/>
    <g stroke="#6a8fd0" stroke-width="4" fill="none" stroke-linecap="round">
      <path d="${arc(192, 128, 52, 175, 285)}"/><path d="${arc(192, 128, 62, 180, 280)}"/><path d="${arc(192, 128, 72, 188, 272)}"/>
      <path d="${arc(192, 128, 52, 20, 75)}"/><path d="${arc(192, 128, 62, 25, 70)}"/></g>
    <circle cx="192" cy="128" r="38" fill="#b493d4" stroke="#7b56a8" stroke-width="3"/>
    <circle cx="200" cy="120" r="10" fill="#7b56a8"/>
    ${mito(284, 88, 20)}${mito(286, 170, -30)}${mito(108, 178, 12)}
    ${dots([[120, 110], [132, 150], [250, 120], [262, 140], [240, 82], [160, 192], [318, 128], [96, 140], [210, 64], [176, 210]], "#8a4a6a")}
  </svg>`,

  // Pflanzenzelle: Zellwand, Zellmembran, Zellplasma, Zellkern, Vakuole, Chloroplasten
  pflanzenzelle: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pflanzenzelle">
    <rect width="400" height="260" fill="#f3f7fb"/>
    <rect x="42" y="24" width="316" height="212" rx="14" fill="#8fbf5a" stroke="#5f8f35" stroke-width="3"/>
    <rect x="60" y="42" width="280" height="176" rx="8" fill="#e6f4d2" stroke="#4f7a2a" stroke-width="2.5"/>
    <path d="M178 88C210 70 286 74 298 112C310 152 284 188 240 186C196 184 168 170 166 138C164 112 162 98 178 88Z" fill="#cfe6f7" stroke="#7fb0d6" stroke-width="3"/>
    <circle cx="108" cy="92" r="26" fill="#b493d4" stroke="#7b56a8" stroke-width="3"/>
    <circle cx="114" cy="86" r="7" fill="#7b56a8"/>
    ${chloro(88, 178, 20)}${chloro(136, 200, -10)}${chloro(318, 78, 70)}${chloro(320, 172, 80)}${chloro(176, 60, 0)}${chloro(252, 58, 10)}${chloro(205, 204, 5)}
    ${dots([[150, 120], [90, 132], [150, 168], [320, 120], [282, 204], [214, 52]], "#5a7a3a")}
  </svg>`,

  // Lichtmikroskop von der Seite: Okular, Tubus, Objektivrevolver, Objektive, Objekttisch mit Klemme,
  // Blende, Lichtquelle, Grobtrieb, Feintrieb, Stativ, Fuß
  mikroskop: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lichtmikroskop">
    <rect width="400" height="260" fill="#f3f7fb"/>
    <rect x="100" y="226" width="200" height="24" rx="8" fill="#5b6b7f" stroke="#3a4656" stroke-width="2"/>
    <path d="M118 228V150Q118 74 172 52H200V78H172Q146 90 146 150V228Z" fill="#7a8a9f" stroke="#3a4656" stroke-width="2"/>
    <rect x="198" y="30" width="38" height="72" rx="3" fill="#dfe5ec" stroke="#3a4656" stroke-width="2"/>
    <rect x="205" y="6" width="24" height="26" rx="3" fill="#3a4656"/>
    <path d="M190 100h54l-7 16h-40z" fill="#5b6b7f" stroke="#3a4656" stroke-width="2"/>
    <g fill="#c9d2dc" stroke="#3a4656" stroke-width="2">
      <rect x="210" y="116" width="14" height="28" rx="2"/>
      <rect x="194" y="112" width="11" height="22" rx="2" transform="rotate(25 199 114)"/>
      <rect x="230" y="112" width="12" height="26" rx="2" transform="rotate(-25 236 114)"/></g>
    <rect x="146" y="156" width="138" height="10" rx="2" fill="#3a4656"/>
    <rect x="196" y="151" width="48" height="5" fill="#cfe6f7" stroke="#7fb0d6" stroke-width="1.5"/>
    <path d="M168 150h22v6" stroke="#c9d2dc" stroke-width="4" fill="none" stroke-linecap="round"/>
    <rect x="204" y="168" width="30" height="8" rx="2" fill="#5b6b7f"/>
    <rect x="214" y="212" width="10" height="16" fill="#5b6b7f"/>
    <path d="M206 214h26v-8a13 13 0 0 0-26 0z" fill="#f5d76e" stroke="#c4a02a" stroke-width="2"/>
    <g stroke="#f5d76e" stroke-width="2.5" stroke-linecap="round"><path d="M219 186v-4M206 190l-3-3M232 190l3-3"/></g>
    <circle cx="132" cy="112" r="15" fill="#5b6b7f" stroke="#3a4656" stroke-width="2"/>
    <circle cx="132" cy="147" r="9" fill="#5b6b7f" stroke="#3a4656" stroke-width="2"/>
  </svg>`,

  // Bakterium: Schleimhülle, Zellwand, Zellhaut, Zellplasma, Erbmaterial, Geißeln
  bakterium: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Aufbau eines Bakteriums">
    <rect width="400" height="260" fill="#f3f7fb"/>
    <g stroke="#9a8a5a" stroke-width="3" fill="none" stroke-linecap="round">
      <path d="M114 112c-12-14-22 14-34 0s-22 14-34 0s-22 14-34 0"/>
      <path d="M112 130c-12-14-22 14-34 0s-22 14-34 0s-22 14-34 0"/>
      <path d="M114 148c-12-14-22 14-34 0s-22 14-34 0s-22 14-34 0"/></g>
    <rect x="110" y="58" width="270" height="144" rx="72" fill="#fbf1cc" stroke="#e0c46e" stroke-width="2" stroke-dasharray="6 5"/>
    <rect x="126" y="74" width="238" height="112" rx="56" fill="#e0a542" stroke="#a87420" stroke-width="2.5"/>
    <rect x="136" y="84" width="218" height="92" rx="46" fill="#fdf0c8" stroke="#c4553a" stroke-width="3"/>
    <path d="M176 130c8-22 18 22 28 0s18 22 28 0s18 22 28 0s18 22 28 0" stroke="#3a6fc4" stroke-width="4.5" fill="none" stroke-linecap="round"/>
    ${dots([[160, 108], [164, 150], [300, 150], [296, 104], [330, 136], [210, 98], [256, 160]], "#b08a3a")}
  </svg>`
};

// Motive für die Themen (viewBox 0 0 48 48, nur Linien)
const TOPIC_ICONS = {
  zellen: `<path d="M7 24c0-10 8-17 18-16s16 8 15 17-8 16-17 15S7 34 7 24z" /><circle cx="22" cy="23" r="5.5" /><path d="M30 31c2-1.5 4.5-1 5.5 1M29 14c2 0 4 1 5 3" />`,
  zellbau: `<rect x="7" y="9" width="34" height="30" rx="3" /><rect x="11" y="13" width="26" height="22" rx="2" /><circle cx="19" cy="21" r="4" /><ellipse cx="29" cy="29" rx="4" ry="2.4" /><ellipse cx="30" cy="18" rx="3" ry="1.8" />`,
  mikroskop: `<path d="M20 6h8v8h-8zM18 14h12v14H18zM22 28v5M26 28v5" /><path d="M14 36h22M17 12C9 16 8 30 12 42M8 43h28" />`,
  mikro: `<rect x="14" y="17" width="26" height="14" rx="7" /><path d="M14 24c-2-3-4 3-6 0s-3-3-5 0" /><path d="M20 24c2.5-3 5 3 7.5 0s5 3 7.5 0" />`,
  bakterien: `<circle cx="24" cy="24" r="17" /><circle cx="24" cy="24" r="13" /><rect x="14" y="17" width="9" height="5" rx="2.5" /><rect x="25" y="27" width="9" height="5" rx="2.5" /><circle cx="30" cy="18" r="1.8" /><circle cx="17" cy="30" r="1.8" />`
};
