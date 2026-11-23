// Dieses Lernspiel hat keine Beschriftungsaufgaben, darum ist IMAGES leer.
const IMAGES = {};

// Motive pro Thema (viewBox 0 0 48 48, nur Linien)
const TOPIC_ICONS = {
  // Kiste mit Ball darauf, daneben und darunter: Wo liegt der Ball?
  arten: `<rect x="14" y="20" width="20" height="16"/><circle cx="24" cy="13" r="5"/><circle cx="7" cy="31" r="4"/><path d="M8 42h32"/>`,
  // Pfeil in eine Schachtel (Wohin?) und Punkt darin (Wo?)
  fall: `<path d="M22 12v28h20V12"/><path d="M4 22h14"/><path d="M13 17l5 5-5 5"/><circle cx="32" cy="32" r="3"/>`
};
