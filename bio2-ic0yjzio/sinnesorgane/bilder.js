// Bilder für die Beschriftungsaufgaben (Fragetyp "label")
// Alle Bilder sind selbst gezeichnete SVGs mit viewBox 0 0 400 260.
// Die Marker-Koordinaten in questions.js beziehen sich auf diese 400 × 260 Einheiten.

// Kreisbogen um (cx, cy) mit Radius r von Winkel a0 bis a1 (in Grad)
function arc(cx, cy, r, a0, a1) {
  const p = a => [(cx + r * Math.cos(a * Math.PI / 180)).toFixed(1), (cy + r * Math.sin(a * Math.PI / 180)).toFixed(1)];
  const [x0, y0] = p(a0), [x1, y1] = p(a1);
  return `M${x0} ${y0}A${r} ${r} 0 0 1 ${x1} ${y1}`;
}
// Spirale (Schnecke im Innenohr) um (cx, cy), beginnt außen beim Winkel a0 (in Grad)
function spiral(cx, cy, r0, turns, a0) {
  const steps = turns * 36;
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const a = (a0 + i * 10) * Math.PI / 180, r = r0 * (1 - i / steps * .85);
    d += `${i ? "L" : "M"}${(cx + r * Math.cos(a)).toFixed(1)} ${(cy + r * Math.sin(a)).toFixed(1)}`;
  }
  return d;
}

// Herz in anatomischer Form (Vorderansicht, Spitze zeigt nach links unten im Körper = rechts im Bild),
// mit oberer Hohlvene, Aorta, Lungenarterie und Herzkranzgefäßen; Mittelpunkt bei 0,0, ca. 40 Einheiten breit
const HEART = `<path d="M-9-7V-20" stroke="#4a6ad0" stroke-width="5" fill="none"/>
  <path d="M-1-8V-16C-1-23 10-23 10-16V-11" stroke="#c84a46" stroke-width="5.5" fill="none"/>
  <path d="M1-20l-1-5M5-22v-5" stroke="#c84a46" stroke-width="2.5" fill="none"/>
  <path d="M-14-8C-19-1-17 9-8 14C-1 17 8 19 15 19C17 12 19 3 15-4C13-8 9-10 4-10C-3-11-10-11-14-8z" fill="#d0504a" stroke="#8a2a2a" stroke-width="2"/>
  <path d="M-12-8C-19-8-21 2-16 5C-14 3-13-3-12-8z" fill="#b8403c" stroke="#8a2a2a" stroke-width="1.5"/>
  <path d="M10-8C15-10 18-5 14-2C13-4 12-6 10-8z" fill="#b8403c" stroke="#8a2a2a" stroke-width="1.5"/>
  <path d="M3-9C3-14 8-16 12-14" stroke="#5a78c8" stroke-width="5" fill="none" stroke-linecap="round"/>
  <path d="M2-9C4 2 8 10 13 17M-13 2C-9 8-3 10 2 9" stroke="#f2a8a0" stroke-width="1.6" fill="none" stroke-linecap="round"/>`;

const IMAGES = {
  // Organe im Körper: Gehirn, Lunge, Herz, Leber, Magen, Darm
  koerper: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Organe des Menschen">
    <rect width="400" height="260" fill="#f3f7fb"/>
    <g stroke-linecap="round" fill="none">
      <path d="M150 98Q124 150 116 230M250 98Q276 150 284 230" stroke="#b9785a" stroke-width="24"/>
      <path d="M150 98Q124 150 116 230M250 98Q276 150 284 230" stroke="#f6dcc6" stroke-width="18"/></g>
    <rect x="189" y="68" width="22" height="24" fill="#f6dcc6" stroke="#b9785a" stroke-width="3"/>
    <path d="M146 94Q200 80 254 94L264 262H136Z" fill="#f6dcc6" stroke="#b9785a" stroke-width="3"/>
    <circle cx="200" cy="40" r="32" fill="#f6dcc6" stroke="#b9785a" stroke-width="3"/>
    <path d="M176 38c0-14 10-22 24-22s24 8 24 22c0 9-9 13-24 13s-24-4-24-13z" fill="#f4b6c8" stroke="#c2577a" stroke-width="2.5"/>
    <path d="M184 32c4-6 8 4 12-2s8 4 12-2s6 4 8 0M186 42c4-4 8 3 12-1s8 3 12-1" stroke="#c2577a" stroke-width="1.8" fill="none"/>
    <path d="M200 88v22M200 108l-14 8M200 108l14 8" stroke="#c9a0a0" stroke-width="5" fill="none" stroke-linecap="round"/>
    <ellipse cx="174" cy="132" rx="21" ry="33" fill="#f59ab0" stroke="#c2577a" stroke-width="2.5"/>
    <ellipse cx="226" cy="132" rx="21" ry="33" fill="#f59ab0" stroke="#c2577a" stroke-width="2.5"/>
    <g transform="translate(204 150) scale(.78)">${HEART}</g>
    <path d="M150 174c10-10 40-12 52-6 2 10-10 20-30 20-14 0-24-4-22-14z" fill="#9a5a3a" stroke="#6a3a22" stroke-width="2"/>
    <path d="M214 170c12-4 30 0 30 14 0 14-14 22-28 18-6-2-4-8 2-10 8-2 12-6 10-12-2-4-10-4-14-4z" fill="#f2b48a" stroke="#c4702a" stroke-width="2"/>
    <path d="M168 208h64c9 0 9 12 0 12h-62c-9 0-9 12 0 12h62c9 0 9 12 0 12h-64" stroke="#d4875a" stroke-width="9" fill="none" stroke-linecap="round"/>
    <path d="M168 208h64c9 0 9 12 0 12h-62c-9 0-9 12 0 12h62c9 0 9 12 0 12h-64" stroke="#f2c49a" stroke-width="5" fill="none" stroke-linecap="round"/>
  </svg>`,

  // Auge im Querschnitt (Licht kommt von links): Hornhaut, Linse, Netzhaut, Sehnerv
  auge: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Aufbau des Auges">
    <rect width="400" height="260" fill="#f3f7fb"/>
    <rect x="300" y="113" width="100" height="36" rx="6" fill="#f2c46b" stroke="#c4902a" stroke-width="2.5"/>
    <path d="M330 122h66M330 131h66M330 140h66" stroke="#c4902a" stroke-width="1.2"/>
    <circle cx="230" cy="130" r="95" fill="#eef6fb" stroke="#8a96a8" stroke-width="5"/>
    <path d="${arc(230, 130, 87, -75, 75)}" stroke="#e07a6a" stroke-width="8" fill="none" stroke-linecap="round"/>
    <path d="M152 80Q96 130 152 180" fill="#dff0fb" stroke="#5a9bd0" stroke-width="5"/>
    <g stroke="#e0a800" stroke-width="2.5" stroke-dasharray="7 5" fill="none" opacity=".85">
      <path d="M6 76L172 112L318 130"/><path d="M6 130H318"/><path d="M6 184L172 148L318 130"/></g>
    <rect x="156" y="84" width="9" height="28" rx="3" fill="#7a5a3a"/>
    <rect x="156" y="148" width="9" height="28" rx="3" fill="#7a5a3a"/>
    <ellipse cx="174" cy="130" rx="13" ry="30" fill="#f6e7a8" stroke="#c4a02a" stroke-width="3" opacity=".9"/>
  </svg>`,

  // Ohr im Querschnitt: Ohrmuschel, Gehörgang, Trommelfell, Gehörknöchelchen, Bogengänge, Schnecke, Hörnerv
  ohr: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Aufbau des Ohres">
    <rect width="400" height="260" fill="#f3f7fb"/>
    <path d="M86 44C40 28 12 70 20 112C26 142 46 150 44 178C42 204 62 226 88 216Z" fill="#f2c4a8" stroke="#b9785a" stroke-width="3"/>
    <path d="M74 68C48 64 38 98 54 122M70 150c-8 10-6 30 6 40" stroke="#b9785a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M86 116L188 110V150L86 144Z" fill="#fbe3d3" stroke="#b9785a" stroke-width="3"/>
    <rect x="196" y="90" width="68" height="80" rx="14" fill="#fff7ec" stroke="#c9b7a0" stroke-width="2" stroke-dasharray="6 4"/>
    <ellipse cx="192" cy="130" rx="5" ry="22" fill="#f5b7a0" stroke="#b04a3a" stroke-width="3"/>
    <path d="M197 130L212 108L230 104L240 122L254 126" stroke="#9a7450" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M252 116h14v20h-14" stroke="#9a7450" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <g stroke="#9a7ad0" stroke-width="6" fill="none">
      <ellipse cx="274" cy="92" rx="13" ry="24" transform="rotate(-20 274 92)"/>
      <ellipse cx="300" cy="80" rx="24" ry="13"/>
      <ellipse cx="310" cy="104" rx="11" ry="19" transform="rotate(30 310 104)"/></g>
    <ellipse cx="284" cy="132" rx="16" ry="13" fill="#e3d6f5" stroke="#9a7ad0" stroke-width="3"/>
    <path d="${spiral(306, 178, 32, 2.5, -110)}" stroke="#9a7ad0" stroke-width="9" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M328 164C350 156 370 146 398 140" stroke="#e0b040" stroke-width="11" fill="none" stroke-linecap="round"/>
    <path d="M330 164C352 156 372 146 398 140" stroke="#f6d77a" stroke-width="3" fill="none"/>
  </svg>`,

  // Haut im Querschnitt: Oberhaut, Lederhaut, Unterhaut (mit Haar, Blutgefäßen, Nervenende, Schweißdrüse, Fettzellen)
  haut: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schichten der Haut">
    <rect width="400" height="260" fill="#f3f7fb"/>
    <path d="M0 160H400V260H0Z" fill="#fbe9b0"/>
    <g fill="#fdf3c8" stroke="#e0c070" stroke-width="2">
      ${[[40, 196], [80, 222], [118, 190], [196, 214], [232, 186], [262, 232], [342, 200], [376, 232], [20, 240], [160, 240]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="16"/>`).join("")}</g>
    <path d="M0 50H400V160H0Z" fill="#f2b8a8"/>
    <path d="M0 36C40 30 80 42 120 36S200 30 240 36S320 42 400 34V68C320 74 280 62 240 68S160 74 120 68S40 62 0 68Z" fill="#f6d8c2" stroke="#c98a6a" stroke-width="2"/>
    <path d="M0 160H400" stroke="#d6a07a" stroke-width="2" stroke-dasharray="7 5"/>
    <path d="M10 118c60-24 100 18 160 0s110 18 220-2" stroke="#d04a4a" stroke-width="4" fill="none"/>
    <path d="M10 134c60-24 100 18 160 0s110 18 220-2" stroke="#4a6ad0" stroke-width="4" fill="none"/>
    <path d="M150 154L128 0" stroke="#5a3a2a" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="150" cy="150" rx="8" ry="12" fill="#c98a6a" transform="rotate(-8 150 150)"/>
    <path d="M300 190c-14-6-2-16 6-10s-4 16-12 8 4-14 10-6M300 180V36" stroke="#7fb0d6" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M250 150C256 120 262 100 262 78M262 78l-8-6M262 78l2-9M262 78l8-4" stroke="#e0b040" stroke-width="3" fill="none" stroke-linecap="round"/>
  </svg>`
};

// Motive für die Themen (viewBox 0 0 48 48, nur Linien)
const TOPIC_ICONS = {
  ebenen: `<circle cx="9" cy="36" r="3" /><circle cx="21" cy="33" r="6" /><circle cx="37" cy="27" r="9" /><path d="M5 44h38" /><path d="M33 26a4 4 0 0 1 8 0" />`,
  nerven: `<circle cx="16" cy="17" r="5" /><path d="M12 13L7 8M11 19l-6 2M16 12V5M19 13l4-5M20 21l14 14" /><path d="M34 35l6-1M34 35l1 6M34 35l5 4" />`,
  auge: `<path d="M4 24C10 14 17 10 24 10s14 4 20 14c-6 10-13 14-20 14S10 34 4 24z" /><circle cx="24" cy="24" r="7" /><circle cx="24" cy="24" r="2.5" />`,
  ohr: `<path d="M14 20c0-8 6-14 13-14s13 6 13 14c0 6-4 9-7 12s-3 6-3 8c0 4-3 6-6 6s-5-2-6-4" /><path d="M21 20c0-4 3-7 6-7s6 3 6 7c0 3-3 4-5 6" />`,
  haut: `<path d="M14 27V13a3 3 0 0 1 6 0v9M20 21V9a3 3 0 0 1 6 0v12M26 21V11a3 3 0 0 1 6 0v12M32 23v-6a3 3 0 0 1 6 0v12c0 8-6 14-13 14h-2c-5 0-8-3-11-7l-5-8a3 3 0 0 1 5-3l2 3" />`
};
