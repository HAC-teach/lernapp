// Dieses Lernspiel hat keine Beschriftungsaufgaben, darum ist IMAGES leer.
const IMAGES = {};

// Motive pro Thema (viewBox 0 0 48 48, nur Linien)
const TOPIC_ICONS = {
  // Lupe mit N
  erkennen: `<circle cx="20" cy="20" r="13"/><path d="M29.5 29.5L42 42"/><path d="M15 26V14l10 12V14"/>`,
  // Wortbaustein + Endung
  endungen: `<rect x="3" y="15" width="24" height="18" rx="2"/><rect x="30" y="15" width="15" height="18" rx="2"/><path d="M8 24h14"/><path d="M34 24h7"/>`,
  // kleines a wird zu großem A
  nominal: `<circle cx="10" cy="29" r="5.5"/><path d="M15.5 23.5V35"/><path d="M20 29h7"/><path d="M24 26l3 3-3 3"/><path d="M31 37l6-24 6 24"/><path d="M33.5 28h7"/>`
};
