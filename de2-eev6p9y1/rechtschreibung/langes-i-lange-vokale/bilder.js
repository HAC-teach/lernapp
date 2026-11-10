// Dieses Lernspiel hat keine Beschriftungsaufgaben, darum ist IMAGES leer.
const IMAGES = {};

// Motive pro Thema (viewBox 0 0 48 48, nur Linien)
const TOPIC_ICONS = {
  // Strich für „lang“ über i und e
  langi: `<path d="M8 8h32"/><circle cx="14" cy="17" r="1.4"/><path d="M14 24v16"/><path d="M24 31h15c0-5-3-8-7.5-8S24 26.500 24 31.500s3 8.500 8 8.500c2.500 0 4.500-1 6-2.500"/>`,
  // Strich für „lang“ über zwei gleichen Selbstlauten (oo)
  lang: `<path d="M8 12h32"/><circle cx="15" cy="30" r="8"/><circle cx="33" cy="30" r="8"/>`
};
