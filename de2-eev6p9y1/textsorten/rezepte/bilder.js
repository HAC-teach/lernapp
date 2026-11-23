// Selbst gezeichnete Bilder für „Rezepte“ (Deutsch, 2. Klasse) – nichts aus Büchern oder Folien übernommen.
// ICON[name] = Zeichnung in einem 100×100-Feld (Küchengeräte, Lebensmittel, Zeichen).
// use(name, x, y, s, r) setzt ein Icon mit Mittelpunkt (x|y), Größe s und Drehung r.
// REZEPT_BILDER[id] = Bildrezept wie im Kochbuch (ohne Zutatenliste – die sollen die Kinder selbst herauslesen).

const INK = "#3b3328";
const ICON = {};
const T = (x, y, t, size = 13, extra = "") =>
  `<text x="${x}" y="${y}" text-anchor="middle" font-size="${size}" font-weight="700" fill="${INK}" stroke="none" font-family="system-ui, sans-serif" ${extra}>${t}</text>`;

// ---------- Küchengeräte ----------
ICON.topf = `<path d="M18 38h64v38a10 10 0 0 1-10 10H28a10 10 0 0 1-10-10z" fill="#c9d3db"/>
  <path d="M12 38h76" stroke-width="4"/><path d="M18 45h-8a3.5 3.5 0 0 0 0 7h8M82 45h8a3.5 3.5 0 0 1 0 7h-8" fill="${INK}"/>
  <path d="M26 48v26" stroke="#ffffff" stroke-width="4" opacity=".8"/>`;
ICON.pfanne = `<path d="M4 56h62l-5 15a7 7 0 0 1-7 5H16a7 7 0 0 1-7-5z" fill="#4a4f55"/><path d="M2 56h66" stroke-width="3.5"/>
  <path d="M66 61l30-11" stroke="#7a4b2a" stroke-width="8"/>`;
ICON.schuessel = `<path d="M8 44h84a42 38 0 0 1-84 0z" fill="#d6e6f2"/><path d="M36 82h28" stroke-width="4"/>
  <ellipse cx="50" cy="44" rx="42" ry="7" fill="#f3f8fc"/>`;
ICON.schneebesen = `<rect x="45" y="60" width="10" height="34" rx="5" fill="#e0533f"/>
  <path d="M50 60C24 46 26 6 50 5C74 6 76 46 50 60"/><path d="M50 60C37 46 37 8 50 5C63 8 63 46 50 60"/><path d="M50 60V5"/>`;
ICON.kochloeffel = `<path d="M26 94L57 40" stroke="#9a6a3c" stroke-width="7"/>
  <ellipse cx="64" cy="26" rx="11" ry="17" transform="rotate(30 64 26)" fill="#d9a066"/>`;
ICON.messer = `<path d="M6 54h60V42C42 40 18 44 6 54z" fill="#e3e8ec"/><path d="M14 50h44" stroke="#ffffff" stroke-width="2"/>
  <rect x="66" y="41" width="30" height="13" rx="5" fill="#7a4b2a"/>
  <circle cx="75" cy="47.5" r="1.8" fill="#ffffff" stroke="none"/><circle cx="87" cy="47.5" r="1.8" fill="#ffffff" stroke="none"/>`;
ICON.brett = `<rect x="4" y="28" width="74" height="48" rx="8" fill="#e2b47c"/><path d="M78 43h9a9 9 0 0 1 0 18h-9" fill="#e2b47c"/>
  <circle cx="86" cy="52" r="3"/><path d="M14 40h44M18 54h48M12 66h30" stroke="#c48e52" stroke-width="2"/>`;
ICON.schaeler = `<rect x="44" y="50" width="12" height="44" rx="6" fill="#5fa04e"/><path d="M36 52V14h28v38" stroke-width="3.5"/>
  <rect x="40" y="22" width="20" height="9" rx="2" fill="#e3e8ec"/><path d="M43 26.5h14" stroke-width="1.5"/>`;
ICON.reibe = `<path d="M30 26h40l10 68H20z" fill="#e3e8ec"/><path d="M38 26v-9a5 5 0 0 1 5-5h14a5 5 0 0 1 5 5v9" stroke-width="4"/>
  ${[38, 50, 62, 74, 86].map((y, r) => [0, 1, 2, 3].map(c => `<path d="M${30 + c * 12 - (y - 26) / 7 + (r % 2) * 4} ${y}h5" stroke-width="2"/>`).join("")).join("")}`;
ICON.sieb = `<path d="M8 40h58a29 30 0 0 1-58 0z" fill="#eef2f5"/>
  <path d="M14 50h46M18 60h38M26 68h22" stroke-dasharray="2 3.5" stroke-width="2.2"/><path d="M24 46v18M37 46v26M50 46v20" stroke-dasharray="2 3.5" stroke-width="2.2"/>
  <path d="M66 42l30-8" stroke-width="5"/><path d="M8 40l-6 1" stroke-width="4"/>`;
ICON.messbecher = `<path d="M22 20h50v64a6 6 0 0 1-6 6H28a6 6 0 0 1-6-6z" fill="#eaf4fb"/><path d="M22 20l-9-6"/>
  <path d="M72 32h9a6 6 0 0 1 6 6v26a6 6 0 0 1-6 6h-9" stroke-width="4.5"/>
  <path d="M22 36h12M22 48h16M22 60h12M22 72h16" stroke-width="2"/>`;
ICON.waage = `<path d="M10 52h80" stroke-width="5"/><rect x="12" y="56" width="76" height="32" rx="8" fill="#f2f2f2"/>
  <rect x="30" y="64" width="40" height="16" rx="3" fill="#bfe3c9"/>${T(50, 76.5, "000 g", 11)}`;
ICON.nudelholz = `<g transform="rotate(-22 50 50)"><rect x="24" y="40" width="52" height="20" rx="7" fill="#e2b47c"/>
  <rect x="5" y="45" width="19" height="10" rx="4" fill="#c48e52"/><rect x="76" y="45" width="19" height="10" rx="4" fill="#c48e52"/></g>`;
ICON.backblech = `<path d="M18 36h76l-12 40H6z" fill="#9aa6b0"/><path d="M24 42h62l-8 28H16z" fill="#c9d3db"/>`;
ICON.backrohr = `<rect x="10" y="8" width="80" height="86" rx="6" fill="#f3f3f3"/><path d="M10 26h80"/>
  ${[24, 38, 62, 76].map(x => `<circle cx="${x}" cy="17" r="4" fill="${INK}"/>`).join("")}
  <path d="M24 33h52" stroke-width="4"/><rect x="20" y="40" width="60" height="44" rx="5" fill="#4a4f55"/>
  <rect x="26" y="46" width="48" height="32" rx="3" fill="#f2a65a" stroke="none" opacity=".9"/>`;
ICON.herd = `<path d="M18 14h64l10 20H8z" fill="#dcdfe3"/><ellipse cx="34" cy="24" rx="12" ry="4.5" fill="${INK}"/><ellipse cx="66" cy="24" rx="12" ry="4.5" fill="${INK}"/>
  <rect x="8" y="34" width="84" height="60" rx="3" fill="#f3f3f3"/><path d="M8 46h84"/>
  ${[22, 36, 64, 78].map(x => `<circle cx="${x}" cy="40" r="3" fill="${INK}"/>`).join("")}
  <path d="M24 53h52" stroke-width="4"/><rect x="18" y="58" width="64" height="30" rx="4" fill="#4a4f55"/>`;
ICON.herdplatte = `<ellipse cx="50" cy="50" rx="44" ry="13" fill="#4a4f55"/><ellipse cx="50" cy="50" rx="30" ry="8" fill="none" stroke="#e0533f" stroke-width="3"/>`;
ICON.pfannenwender = `<rect x="30" y="6" width="40" height="36" rx="6" fill="#4a4f55"/><path d="M41 15v18M50 15v18M59 15v18" stroke="#ffffff" stroke-width="3"/>
  <path d="M50 42v52" stroke-width="7"/>`;
ICON.schoepfer = `<path d="M66 6c4 0 6 4 3 8L53 62" stroke-width="5"/><path d="M26 60h50a25 22 0 0 1-50 0z" fill="#c9d3db"/>`;
ICON.stabmixer = `<rect x="37" y="4" width="26" height="42" rx="11" fill="#f3f3f3"/><circle cx="50" cy="20" r="4" fill="#e0533f"/>
  <rect x="45" y="46" width="10" height="34" fill="#c9d3db"/><path d="M34 80h32l-5 13H39z" fill="#c9d3db"/>`;
ICON.essloeffel = `<ellipse cx="50" cy="26" rx="14" ry="19" fill="#e3e8ec"/><path d="M50 45v48" stroke-width="5.5"/>`;
ICON.teeloeffel = `<ellipse cx="50" cy="44" rx="8" ry="11" fill="#e3e8ec"/><path d="M50 55v30" stroke-width="3.5"/>`;
ICON.gabel = `<path d="M40 6v22M47 6v22M53 6v22M60 6v22" stroke-width="3"/><path d="M40 28c0 9 20 9 20 0"/><path d="M50 35v58" stroke-width="5.5"/>`;
ICON.muffinform = `<path d="M14 34h80l-10 46H4z" fill="#9aa6b0"/>
  ${[[34, 46], [56, 46], [78, 46], [26, 66], [48, 66], [70, 66]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="9" ry="5.5" fill="#f6c6c6"/>`).join("")}`;
ICON.teller = `<ellipse cx="50" cy="60" rx="46" ry="17" fill="#ffffff"/><ellipse cx="50" cy="58" rx="29" ry="9" stroke-width="1.5"/>`;
ICON.zitronenpresse = `<ellipse cx="50" cy="72" rx="40" ry="13" fill="#eaf4fb"/><path d="M34 70L50 28L66 70" fill="#eaf4fb"/>
  <path d="M50 30v38M42 50l-3 18M58 50l3 18" stroke-width="1.8"/>`;
ICON.wasserhahn = `<path d="M14 16h44a12 12 0 0 1 12 12v14H58V30H14z" fill="#c9d3db"/><path d="M30 6h16M38 6v10" stroke-width="4"/>
  ${[[62, 54], [66, 64], [60, 72], [65, 84], [61, 94]].map(([x, y]) => `<path d="M${x} ${y - 5}v6" stroke="#5aa9dd" stroke-width="3"/>`).join("")}`;

// ---------- Lebensmittel ----------
ICON.tomate = `<circle cx="50" cy="56" r="26" fill="#e0533f"/><path d="M50 32l-8-7M50 32l8-7M50 32l-12 1M50 32l12 1M50 32v-10" stroke="#3d7a2a" stroke-width="3"/>`;
ICON.zwiebel = `<path d="M50 18C70 38 80 56 72 72a24 20 0 0 1-44 0C20 56 30 38 50 18z" fill="#e7b46a"/>
  <path d="M50 22C44 40 42 60 48 86M50 22C58 40 62 60 56 86" stroke-width="1.8"/><path d="M44 89l-3 6M50 90v6M56 89l3 6" stroke-width="2"/>`;
ICON.knoblauch = `<path d="M50 20C66 34 82 48 74 70a26 22 0 0 1-48 0C18 48 34 34 50 20z" fill="#f6f1e6"/>
  <path d="M50 22C42 40 40 62 46 88M50 22C60 40 62 62 56 88M38 40c-6 14-6 30 0 44M62 40c6 14 6 30 0 44" stroke-width="1.6"/>`;
ICON.ei = `<ellipse cx="50" cy="54" rx="22" ry="29" fill="#f6ead2"/>`;
ICON.mehl = `<path d="M26 26h48l5 66H21z" fill="#f4efe2"/><path d="M26 26l6-10h36l6 10" fill="#f4efe2"/>${T(50, 64, "Mehl", 17)}`;
ICON.zucker = `<path d="M26 26h48l5 66H21z" fill="#ffffff"/><path d="M26 26l6-10h36l6 10" fill="#ffffff"/>${T(50, 64, "Zucker", 14)}`;
ICON.staubzucker = `<path d="M26 26h48l5 66H21z" fill="#fde9f1"/><path d="M26 26l6-10h36l6 10" fill="#fde9f1"/>${T(50, 56, "Staub-", 13)}${T(50, 72, "zucker", 13)}`;
ICON.milch = `<path d="M26 34h48v58H26z" fill="#ffffff"/><path d="M26 34l10-16h28l10 16" fill="#dbeefa"/><path d="M36 18v-6h28v6"/>
  <path d="M26 46h48" stroke="#5aa9dd" stroke-width="3"/>${T(50, 72, "Milch", 15)}`;
ICON.butter = `<path d="M10 52l20-16h60L70 52z" fill="#fff1a8"/><path d="M10 52h60v24H10z" fill="#ffe680"/><path d="M70 52l20-16v24L70 76z" fill="#f2d35b"/>${T(40, 69, "Butter", 13)}`;
ICON.salz = `<path d="M34 34h32v52a6 6 0 0 1-6 6H40a6 6 0 0 1-6-6z" fill="#ffffff"/><path d="M34 34c0-12 32-12 32 0" fill="#c9d3db"/>
  <circle cx="44" cy="28" r="1.6" fill="${INK}"/><circle cx="50" cy="26" r="1.6" fill="${INK}"/><circle cx="56" cy="28" r="1.6" fill="${INK}"/>${T(50, 70, "Salz", 12)}`;
ICON.pfeffer = `<path d="M34 34h32v52a6 6 0 0 1-6 6H40a6 6 0 0 1-6-6z" fill="#6b5a4a"/><path d="M34 34c0-12 32-12 32 0" fill="#c9d3db"/>
  <circle cx="44" cy="28" r="1.6" fill="${INK}"/><circle cx="50" cy="26" r="1.6" fill="${INK}"/><circle cx="56" cy="28" r="1.6" fill="${INK}"/>${T(50, 70, "Pfeffer", 10, 'fill="#ffffff"')}`;
ICON.oel = `<path d="M44 6h12v18c12 6 16 14 16 26v38a6 6 0 0 1-6 6H34a6 6 0 0 1-6-6V50c0-12 4-20 16-26z" fill="#f7e08a"/>
  <rect x="42" y="2" width="16" height="8" rx="2" fill="#5fa04e"/>${T(50, 70, "Öl", 16)}`;
ICON.apfel = `<path d="M50 34c-10-8-34-6-34 18c0 24 18 40 34 32c16 8 34-8 34-32c0-24-24-26-34-18z" fill="#e0533f"/>
  <path d="M50 34c0-8 2-14 6-18"/><path d="M54 24c8-8 18-6 20-2c-8 6-14 6-20 2z" fill="#6cb04e"/>`;
ICON.banane = `<path d="M14 34C22 70 68 80 90 44C74 62 32 62 18 30z" fill="#f7d54a"/><path d="M18 38C30 62 64 70 86 48" stroke-width="1.5"/><path d="M16 32l-5-9" stroke="#7d8a3a" stroke-width="5"/><path d="M90 44l3-3" stroke-width="4"/>`;
ICON.erdbeere = `<path d="M50 88C30 74 22 56 26 44c4-12 18-14 24-10c6-4 20-2 24 10c4 12-4 30-24 44z" fill="#e0453a"/>
  <path d="M50 36l-12-8M50 36l12-8M50 36l-4-12M50 36l4-12" stroke="#3d7a2a" stroke-width="3.5"/>
  ${[[40, 50], [56, 48], [48, 62], [38, 64], [60, 62], [50, 76]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.6" fill="#fff3b0" stroke="none"/>`).join("")}`;
ICON.zitrone = `<path d="M14 54c4-18 20-28 36-28s32 10 36 28c-4 18-20 28-36 28S18 72 14 54z" fill="#f7e24a"/><path d="M14 54l-6-2M86 54l6-2" stroke-width="3"/>`;
ICON.halbezitrone = `<path d="M12 50h76a38 34 0 0 1-76 0z" fill="#f7e24a"/><ellipse cx="50" cy="50" rx="38" ry="9" fill="#fff6a8"/>
  <path d="M50 50l-20-5M50 50l20-5M50 50v-8" stroke-width="1.5"/>`;
ICON.joghurt = `<path d="M24 32h52l-7 58H31z" fill="#ffffff"/><rect x="20" y="24" width="60" height="10" rx="3" fill="#bfe0f2"/>${T(50, 66, "Joghurt", 12)}`;
ICON.honig = `<path d="M28 34h44v50a8 8 0 0 1-8 8H36a8 8 0 0 1-8-8z" fill="#f5b938"/><rect x="26" y="22" width="48" height="12" rx="3" fill="#c9893a"/>
  <rect x="34" y="52" width="32" height="20" rx="3" fill="#ffffff"/>${T(50, 66, "Honig", 11)}`;
ICON.marmelade = `<path d="M28 34h44v50a8 8 0 0 1-8 8H36a8 8 0 0 1-8-8z" fill="#c8323e"/><rect x="26" y="22" width="48" height="12" rx="3" fill="#f2f2f2"/>
  <rect x="32" y="52" width="36" height="20" rx="3" fill="#ffffff"/>${T(50, 66, "Marmelade", 8.5)}`;
ICON.spaghetti = `<path d="M30 92L58 8M36 92L62 8M42 92L66 8M48 92L70 8M54 92L74 8" stroke="#e5b54d" stroke-width="3"/>
  <path d="M38 56c8 3 16 6 24 6" stroke="#4a6fb0" stroke-width="7"/>`;
ICON.tomatendose = `<rect x="24" y="22" width="52" height="66" rx="4" fill="#c9d3db"/><ellipse cx="50" cy="22" rx="26" ry="7" fill="#e3e8ec"/>
  <rect x="24" y="36" width="52" height="38" fill="#e0533f"/><circle cx="50" cy="55" r="11" fill="#f7a08f"/>`;
ICON.schokolade = `<g transform="rotate(-12 50 50)"><rect x="12" y="30" width="76" height="42" rx="3" fill="#6b3e26"/>
  <path d="M31 30v42M50 30v42M69 30v42M12 51h76" stroke="#4a2a18" stroke-width="2"/><path d="M60 30h28v42H54z" fill="#c9d3db"/></g>`;
ICON.backpulver = `<rect x="22" y="22" width="56" height="60" rx="3" fill="#ffffff"/><path d="M22 34h56" stroke="#e0533f" stroke-width="5"/>
  ${T(50, 56, "Back-", 13)}${T(50, 71, "pulver", 13)}`;
ICON.kaese = `<path d="M12 68l60-36 18 14v24z" fill="#ffd34d"/><path d="M12 68h78v14H12z" fill="#f2c234"/><path d="M72 32l18 14" />
  <circle cx="48" cy="58" r="4" fill="#e8b21f"/><circle cx="68" cy="54" r="3" fill="#e8b21f"/><circle cx="34" cy="75" r="3" fill="#e8b21f"/>`;
ICON.basilikum = `<path d="M50 92V40" stroke="#3d7a2a" stroke-width="3"/>
  <path d="M50 46c-22-2-30-22-26-30c14 0 26 12 26 30z" fill="#6cb04e"/><path d="M50 56c22-2 30-22 26-30c-14 0-26 12-26 30z" fill="#6cb04e"/>
  <path d="M50 72c-18 0-26-14-24-22c12 0 22 8 24 22z" fill="#6cb04e"/>`;
ICON.muffin = `<path d="M24 52h52l-7 36H31z" fill="#f6c6c6"/><path d="M33 56l2 30M43 56l1 30M57 56l-1 30M67 56l-2 30" stroke-width="1.5"/>
  <path d="M20 54c-4-18 10-30 30-30s34 12 30 30z" fill="#7a4b2a"/>`;
ICON.palatschinke = `<ellipse cx="50" cy="55" rx="40" ry="11" fill="#f2cf7d"/><circle cx="36" cy="54" r="3" fill="#d9a54a" stroke="none"/><circle cx="62" cy="57" r="4" fill="#d9a54a" stroke="none"/>`;
ICON.rolle = `<rect x="14" y="44" width="72" height="22" rx="11" fill="#f2cf7d"/><ellipse cx="80" cy="55" rx="6" ry="11" fill="#c8323e"/>`;

// ---------- Zeichen ----------
ICON.uhr = `<circle cx="50" cy="50" r="38" fill="#ffffff" stroke-width="4"/><path d="M50 22v28l16 10" stroke-width="4"/>
  ${[0, 90, 180, 270].map(a => `<path d="M50 16v6" transform="rotate(${a} 50 50)"/>`).join("")}`;
ICON.dampf = `<path d="M30 80c-8-12 8-18 0-30s8-18 0-30M50 80c-8-12 8-18 0-30s8-18 0-30M70 80c-8-12 8-18 0-30s8-18 0-30" stroke="#9aa6b0" stroke-width="3"/>`;
ICON.flamme = `<path d="M50 90c-20 0-28-16-20-32c4 8 10 10 10 10c-4-20 6-36 18-46c-2 14 18 24 18 44c0 14-10 24-26 24z" fill="#f5a23a"/>
  <path d="M50 90c-8 0-12-8-8-16c4 4 8 4 8 4c0-8 4-14 8-18c2 10 6 14 6 20c0 6-6 10-14 10z" fill="#f7e24a"/>`;
ICON.wasser = `${[[30, 20], [56, 14], [44, 44], [70, 40], [36, 70], [62, 68]].map(([x, y]) => `<path d="M${x} ${y}c-6 10-8 14-8 18a8 8 0 0 0 16 0c0-4-2-8-8-18z" fill="#8cc8ef"/>`).join("")}`;
ICON.pfeil = `<path d="M20 50h50M56 34l18 16-18 16" stroke-width="6"/>`;
ICON.kreisel = `<path d="M74 34a28 22 0 1 0 6 20" stroke-width="5"/><path d="M84 30l-8 6-6-10" stroke-width="5"/>`; // Rührbewegung

// Icon setzen: Mittelpunkt (x|y), Größe s (1 = 100 Einheiten), Drehung r
const use = (k, x, y, s = 1, r = 0) =>
  `<g transform="translate(${x} ${y}) rotate(${r}) scale(${s}) translate(-50 -50)" fill="none" stroke="${INK}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">${ICON[k]}</g>`;
// Handschriftliche Beschriftung im Bildrezept
const L = (x, y, t, size = 15, color = "#9b2f24") =>
  `<text x="${x}" y="${y}" text-anchor="middle" font-size="${size}" font-weight="700" fill="${color}" font-family="'Segoe Print', 'Comic Sans MS', 'Chalkboard SE', cursive" stroke="#ffffff" stroke-width="3" paint-order="stroke">${t}</text>`;

// Einzelbild (Wortschatz): Icon mittig in einem quadratischen Feld
const einzelBild = (k, s = .82, r = 0) => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">${use(k, 50, 50, s, r)}</svg>`;

// ---------- Tätigkeiten beim Kochen (je ein Bild, 100×100) ----------
const TAETIG = {
  schaelen: use("apfel", 40, 58, .6) + `<path d="M55 44c5 7 6 16 3 26" stroke="#f7efc8" stroke-width="6" fill="none"/>` + use("schaeler", 76, 50, .5, -100) + `<path d="M64 56c6 10 14 12 18 24" stroke="#e0533f" stroke-width="4" fill="none"/>`,
  schneiden: use("brett", 46, 60, .9) + use("tomate", 36, 50, .38) + `<path d="M50 44v24M56 44v24" stroke="#e0533f" stroke-width="5"/>` + use("messer", 66, 34, .55, 50),
  wuerfeln: use("brett", 46, 60, .9) + [[28, 52], [38, 52], [48, 52], [33, 62], [43, 62], [53, 62]].map(([x, y]) => `<rect x="${x}" y="${y}" width="7" height="7" fill="#e7b46a" stroke="${INK}" stroke-width="1.5"/>`).join("") + use("messer", 72, 36, .55, 50),
  reiben: use("teller", 50, 76, .9) + use("reibe", 42, 44, .55) + use("kaese", 74, 40, .38) + [[34, 74], [44, 78], [54, 74], [62, 78]].map(([x, y]) => `<path d="M${x} ${y}l5-3" stroke="#e8b21f" stroke-width="3"/>`).join(""),
  ruehren: use("topf", 50, 62, .8) + use("kochloeffel", 56, 42, .6, 180) + use("kreisel", 28, 30, .35),
  verquirlen: use("schuessel", 50, 64, .85) + `<ellipse cx="50" cy="60" rx="30" ry="4" fill="#f7d54a" stroke="${INK}" stroke-width="1.2"/>` + use("schneebesen", 54, 34, .55, 192),
  ausrollen: `<ellipse cx="50" cy="66" rx="40" ry="14" fill="#f2deb0" stroke="${INK}" stroke-width="2"/>` + use("nudelholz", 50, 50, .75),
  kochen: use("herdplatte", 50, 86, .9) + use("topf", 50, 58, .8) + use("dampf", 50, 18, .38),
  braten: use("herdplatte", 40, 86, .9) + use("pfanne", 50, 62, .9) + `<ellipse cx="34" cy="62" rx="14" ry="4" fill="#ffffff" stroke="${INK}" stroke-width="1.5"/><circle cx="34" cy="61" r="3.5" fill="#f5b938"/>` + use("dampf", 34, 34, .3),
  backen: use("backrohr", 50, 50, .85) + use("muffin", 50, 56, .28),
  abgiessen: use("sieb", 46, 70, .7) + use("topf", 40, 26, .55, 60) + use("wasser", 46, 48, .3),
  puerieren: use("topf", 50, 66, .8) + use("stabmixer", 54, 30, .55),
  abwiegen: use("waage", 50, 64, .85) + use("mehl", 50, 34, .45),
  auspressen: use("zitronenpresse", 50, 62, .85) + use("halbezitrone", 50, 30, .45, 180)
};
const taetigBild = k => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">${TAETIG[k]}</svg>`;

// ---------- Bildrezepte ----------
// zeilen = Arbeitsschritte, je Zeile 3 Kreise; jeder Kreis: Zeichnung um den Mittelpunkt (0|0), Radius 80
function rezeptBild(titel, farbe, hell, zeilen, untertitel) {
  const W = 600, R = 80, TOP = 84, ROW = 196, H = TOP + zeilen.length * ROW + 10;
  let s = `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg"><rect width="${W}" height="${H}" fill="#fffdf8"/>`;
  s += `<text x="${W / 2}" y="46" text-anchor="middle" font-size="36" font-weight="800" fill="${farbe}" font-family="'Segoe Print', 'Comic Sans MS', 'Chalkboard SE', cursive">${titel}</text>`;
  if (untertitel) s += L(W / 2, 72, untertitel, 15, "#5a5246");
  zeilen.forEach((z, r) => {
    const cy = TOP + r * ROW + ROW / 2;
    s += `<circle cx="26" cy="${cy - 74}" r="17" fill="#ffffff" stroke="${farbe}" stroke-width="3"/>` +
      `<text x="26" y="${cy - 67}" text-anchor="middle" font-size="19" font-weight="800" fill="${farbe}" font-family="system-ui, sans-serif">${r + 1}.</text>`;
    z.forEach((st, i) => {
      const cx = 112 + i * 188;
      s += `<circle cx="${cx}" cy="${cy}" r="${R}" fill="${hell}"/><g transform="translate(${cx} ${cy})">${st}</g>`;
      if (i < z.length - 1) s += `<path d="M${cx + R + 5} ${cy - 8}h12v-8l14 16-14 16v-8h-12z" fill="#f6c08a" stroke="#d98a3a" stroke-width="1.5" stroke-linejoin="round"/>`;
    });
  });
  return s + `</svg>`;
}

const REZEPT_BILDER = {
  // Palatschinken: Mehl, Milch, Eier, Salz, Öl, Marmelade, Staubzucker · Schüssel, Schneebesen, Herd(platte), Pfanne, Schöpfer, Pfannenwender, Teller, Esslöffel
  palatschinken: rezeptBild("Palatschinken", "#c8483b", "#fdecdc", [
    [
      use("schuessel", 0, 42, .85) + use("mehl", -27, -16, .62, 18) + use("milch", 28, -16, .62, -18) + L(-30, -54, "250 g") + L(32, -54, "500 ml"),
      use("schuessel", 0, 44, .8) + use("ei", -36, -8, .42) + use("ei", -12, -14, .42) + use("salz", 30, -10, .56, -25) + L(-22, -48, "2 Eier") + L(34, -50, "1 Prise"),
      use("schuessel", 0, 36, .95) + `<ellipse cx="0" cy="30" rx="36" ry="6" fill="#f7e3a0" stroke="${INK}" stroke-width="2"/>` + use("schneebesen", 8, -2, .72, 200) + L(0, 74, "glatt rühren", 14)
    ],
    [
      use("schuessel", -28, 38, .62) + use("uhr", 24, -6, .74) + L(24, -46, "10 Min.") + L(0, 72, "rasten lassen", 14),
      use("herdplatte", 0, 46, 1.1) + use("pfanne", 6, 24, 1.05) + use("oel", -28, -28, .6, 50) + L(32, -36, "1 TL Öl"),
      use("herdplatte", 0, 46, 1.1) + use("pfanne", 6, 24, 1.05) + use("schoepfer", -8, -24, .78, -45) + L(36, -50, "1 Schöpfer", 13) + L(36, -34, "Teig", 13)
    ],
    [
      use("herdplatte", 0, 46, 1.1) + use("pfanne", 6, 30, 1.05) + use("palatschinke", -10, -12, .7, -20) + use("pfannenwender", 34, -14, .6, 35) + L(0, -52, "nach 1 Min.", 14) + L(0, 74, "wenden", 14),
      use("teller", 0, 32, 1.25) + use("palatschinke", 0, 32, .9) + use("marmelade", -36, -22, .58) + use("essloeffel", 26, -14, .6, 40) + L(0, -58, "bestreichen", 14),
      use("teller", 0, 32, 1.25) + use("rolle", 0, 30, .9) + use("staubzucker", 32, -26, .58, -40) + `<path d="M-20 20l2 2M-6 16l2 2M8 20l2 2M20 16l2 2" stroke="#ffffff" stroke-width="3"/>` + L(-28, -36, "einrollen", 14) + L(0, 76, "Mahlzeit!", 16)
    ]
  ], "für 8 Stück · ca. 30 Min."),

  // Obstsalat: Äpfel, Bananen, Erdbeeren, Zitrone, Honig, Joghurt · Schneidebrett, Messer, Schüssel, Zitronenpresse, Esslöffel, Teller
  obstsalat: rezeptBild("Obstsalat mit Joghurt", "#4e8a2c", "#e9f3dc", [
    [
      use("wasserhahn", -12, -30, .78) + use("apfel", -28, 32, .44) + use("apfel", 4, 36, .44) + use("erdbeere", 34, 26, .38) + use("erdbeere", 48, 44, .32) + L(-2, 74, "Obst waschen", 13),
      use("banane", -6, -8, .78, -10) + use("banane", 4, 24, .78, -10) + L(0, -48, "2 Bananen") + L(0, 68, "schälen", 14),
      use("brett", 0, 24, 1.2) + use("apfel", -30, -34, .44) + L(26, -44, "2 Äpfel") + [[-26, 20], [-12, 24], [2, 18], [-18, 34], [-4, 36]].map(([x, y]) => `<path d="M${x} ${y}l8-6 4 8z" fill="#f7efc8" stroke="${INK}" stroke-width="1.5"/>`).join("") + use("messer", 26, 12, .62, 30) + L(0, 74, "in Stücke schneiden", 13)
    ],
    [
      use("brett", 0, 26, 1.2) + use("erdbeere", -24, 18, .4) + `<path d="M2 34a11 13 0 0 1 0-26z" fill="#e0453a" stroke="${INK}" stroke-width="1.5"/><path d="M10 34a11 13 0 0 0 0-26z" fill="#f59a8f" stroke="${INK}" stroke-width="1.5"/>` + use("messer", 30, 4, .6, 30) + L(0, -40, "250 g Erdbeeren", 13) + L(0, 74, "halbieren", 14),
      use("schuessel", 0, 32, 1.15) + [[-24, -4, "#f7efc8"], [-8, -8, "#f7d54a"], [8, -4, "#e0453a"], [22, -8, "#f7efc8"], [-14, 0, "#e0453a"], [14, 0, "#f7d54a"]].map(([x, y, c]) => `<circle cx="${x}" cy="${y}" r="8" fill="${c}" stroke="${INK}" stroke-width="1.5"/>`).join("") + L(0, -46, "alles in eine", 13) + L(0, -30, "Schüssel", 13),
      use("zitronenpresse", 0, 30, 1) + use("halbezitrone", 0, -8, .58, 180) + L(0, -52, "Saft von", 13) + L(0, -36, "½ Zitrone", 13)
    ],
    [
      use("schuessel", 0, 38, .95) + use("honig", -32, -18, .58, 25) + use("essloeffel", 20, -14, .56, 30) + L(22, -54, "1 EL Honig", 13) + L(0, 76, "umrühren", 14),
      use("schuessel", -6, 38, .95) + use("joghurt", 30, -18, .62, -35) + L(-24, -38, "200 g", 15) + L(0, 76, "Joghurt darauf", 13),
      use("teller", 0, 44, 1.15) + use("schuessel", 0, 22, .8) + `<ellipse cx="0" cy="17" rx="31" ry="5" fill="#ffffff" stroke="${INK}" stroke-width="1.5"/>` + use("erdbeere", 0, 6, .28) + L(0, -42, "Guten", 16) + L(0, -24, "Appetit!", 16)
    ]
  ], "für 4 Personen · ca. 20 Min."),

  // Spaghetti: Salz, Spaghetti, Zwiebel, Knoblauch, Öl, Tomaten (Dose), Pfeffer, Basilikum, Käse · Herd(platte), Topf, Schneidebrett, Messer, Pfanne, Kochlöffel, Sieb, Teller, Reibe
  spaghetti: rezeptBild("Spaghetti mit Tomatensoße", "#c76a14", "#fdf0dd", [
    [
      use("herdplatte", 0, 54, 1.1) + use("topf", 0, 22, 1) + use("salz", 40, -32, .55, -40) + use("dampf", -8, -40, .38) + L(-38, -50, "Wasser", 13) + L(38, 76, "salzen", 12),
      use("herdplatte", 0, 54, 1.1) + use("topf", 0, 22, 1) + use("spaghetti", -6, -20, .66, 10) + use("uhr", 46, -12, .4) + L(0, -58, "400 g Spaghetti", 13) + L(44, -32, "10 Min.", 12),
      use("brett", 0, 24, 1.2) + use("zwiebel", -24, -26, .52) + use("knoblauch", 32, -26, .42) + [[-24, 20], [-14, 24], [-20, 30], [-6, 18]].map(([x, y]) => `<rect x="${x}" y="${y}" width="6" height="6" fill="#e7b46a" stroke="${INK}" stroke-width="1.2"/>`).join("") + use("messer", 22, 12, .6, 30) + L(-24, -58, "1 Zwiebel", 12) + L(34, -52, "1 Zehe", 12) + L(0, 74, "fein schneiden", 13)
    ],
    [
      use("herdplatte", 0, 54, 1.1) + use("pfanne", 6, 30, 1.05) + use("oel", -30, -22, .58, 50) + [[-26, 28], [-14, 30], [-4, 27]].map(([x, y]) => `<rect x="${x}" y="${y}" width="6" height="5" fill="#f3d89a" stroke="${INK}" stroke-width="1.2"/>`).join("") + L(32, -34, "2 EL Öl", 13) + L(0, -58, "anbraten", 14),
      use("herdplatte", 0, 54, 1.1) + use("pfanne", 6, 30, 1.05) + use("tomatendose", -16, -22, .6, 60) + `<path d="M-2 -8c4 10 2 20 0 30" stroke="#e0533f" stroke-width="6" fill="none"/>` + L(32, -48, "1 Dose", 13) + L(32, -32, "Tomaten", 13),
      use("herdplatte", 0, 54, 1.1) + use("pfanne", 6, 30, 1.05) + use("salz", -42, -18, .48, 30) + use("pfeffer", -18, -32, .48, 20) + use("basilikum", 36, -26, .55) + use("kochloeffel", 10, 10, .55, 180) + L(0, -60, "würzen", 13) + L(0, 76, "10 Min. köcheln", 12)
    ],
    [
      use("sieb", 0, 38, .92) + use("topf", -12, -24, .62, 60) + use("wasser", -4, 8, .36) + L(34, -46, "abgießen", 13),
      use("teller", 0, 34, 1.3) + `<ellipse cx="0" cy="30" rx="34" ry="9" fill="#efd17a" stroke="${INK}" stroke-width="1.5"/><path d="M-30 30c10-6 20 6 30 0s20 6 30 0" stroke="${INK}" stroke-width="1.2" fill="none"/><ellipse cx="0" cy="24" rx="18" ry="5" fill="#e0533f" stroke="${INK}" stroke-width="1.5"/>` + L(0, -26, "Soße auf die", 13) + L(0, -10, "Nudeln geben", 13),
      use("teller", 0, 44, 1.2) + `<ellipse cx="0" cy="40" rx="28" ry="7" fill="#e0533f" stroke="${INK}" stroke-width="1.5"/>` + use("reibe", -8, -4, .62, -15) + use("kaese", 34, -22, .44) + L(-30, -48, "Käse", 13) + L(0, 76, "Mahlzeit!", 15)
    ]
  ], "für 4 Personen · ca. 30 Min."),

  // Schoko-Muffins: Butter, Schokolade, Eier, Zucker, Mehl, Backpulver, Milch · Backrohr, Muffinform, Herd(platte), Topf, Schüssel, Schneebesen, Küchenwaage, Messbecher, Esslöffel, Teller
  muffins: rezeptBild("Schoko-Muffins", "#7a4b2a", "#f6ebe0", [
    [
      use("backrohr", -4, 8, 1) + L(0, -58, "vorheizen", 14) + L(0, 74, "180 °C", 15),
      use("muffinform", 0, 28, 1.25) + L(0, -30, "Papierförmchen", 13) + L(0, -14, "einlegen", 13),
      use("herdplatte", 0, 54, 1.1) + use("topf", 0, 24, 1) + use("butter", -30, -30, .5) + use("schokolade", 28, -32, .5) + L(-30, -56, "100 g", 13) + L(28, -58, "100 g", 13) + L(0, 78, "schmelzen", 13)
    ],
    [
      use("schuessel", 0, 42, .85) + use("ei", -38, -10, .4) + use("ei", -16, -18, .4) + use("zucker", 32, -18, .56, -30) + use("schneebesen", 4, 8, .55, 200) + L(-26, -50, "2 Eier", 13) + L(36, -54, "150 g", 13),
      use("waage", 0, 36, 1) + use("mehl", -8, -6, .62) + use("backpulver", 42, -14, .42) + L(-8, -56, "200 g", 14) + L(44, -44, "1 Pkg.", 12),
      use("schuessel", 6, 40, .85) + use("messbecher", -34, -12, .58, 40) + use("topf", 34, -12, .52, -55) + L(-22, -56, "150 ml Milch", 12) + L(0, 76, "verrühren", 13)
    ],
    [
      use("muffinform", 0, 36, 1.1) + use("essloeffel", 14, -12, .62, 25) + `<ellipse cx="2" cy="-30" rx="7" ry="5" fill="#7a4b2a" stroke="${INK}" stroke-width="1.5"/>` + L(-24, -42, "Teig", 13) + L(-24, -26, "einfüllen", 13),
      use("backrohr", -10, 12, .95) + use("uhr", 44, -36, .42) + L(0, -60, "20 Min.", 15) + L(0, 76, "backen", 14),
      use("teller", 0, 42, 1.2) + use("muffin", -22, 18, .48) + use("muffin", 22, 18, .48) + use("muffin", 0, 2, .48) + L(0, -42, "auskühlen lassen", 13) + L(0, 78, "Guten Appetit!", 14)
    ]
  ], "für 12 Stück · ca. 45 Min.")
};

// Bild für Wortschatz-Aufgaben: Tätigkeit (TAETIG) oder einzelnes Gerät (ICON)
const bildVon = k => TAETIG[k] ? taetigBild(k) : einzelBild(k);

// Keine Beschriftungsaufgaben (label), darum ist IMAGES leer.
const IMAGES = {};

// Motive pro Thema (viewBox 0 0 48 48, nur Linien)
const TOPIC_ICONS = {
  // Checkliste mit Häkchen
  merkmale: `<rect x="10" y="5" width="28" height="38" rx="2"/><path d="M15 15l3 3 5-6M15 27l3 3 5-6M15 38h4M27 16h6M27 28h6M24 38h9"/>`,
  // zwei Bildkreise mit Pfeil
  lesen: `<circle cx="12" cy="24" r="9"/><circle cx="36" cy="24" r="9"/><path d="M21.5 24h5M24 21l3 3-3 3"/><path d="M8 27h8M34 20v8"/>`,
  // Schneebesen
  geraete: `<path d="M24 29C14 23 14 7 24 5c10 2 10 18 0 24z"/><path d="M24 29c-4-7-4-19 0-24c4 5 4 17 0 24M24 29v14"/>`,
  // Topf mit Dampf
  woerter: `<path d="M10 22h28v14a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4z"/><path d="M6 22h36M18 16c-2-3 2-5 0-8M30 16c-2-3 2-5 0-8M24 15c-2-3 2-5 0-8"/>`
};
