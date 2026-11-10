// Dieses Lernspiel hat keine Beschriftungsaufgaben, darum ist IMAGES leer.
const IMAGES = {};

// Motive pro Thema (viewBox 0 0 48 48, nur Linien)
const TOPIC_ICONS = {
  // Lupe: Aktiv oder Passiv erkennen
  erkennen: `<circle cx="20" cy="20" r="13"/><path d="M30 30l13 13"/><path d="M14 20h12"/><path d="M22 15l5 5-5 5"/>`,
  // Zwei Pfeile im Tausch: Objekt wird Subjekt
  bilden: `<path d="M6 16h34"/><path d="M33 9l7 7-7 7"/><path d="M42 32H8"/><path d="M15 25l-7 7 7 7"/>`
};
