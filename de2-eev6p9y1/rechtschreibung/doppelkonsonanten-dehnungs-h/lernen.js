// Lernkarten zu „Doppelkonsonanten und Dehnungs-h“ (übliches Schulwissen, alle Beispiele selbst ausgedacht)
// LESSONS[topicId] = Liste von Karten: { title, points: [...], tip? }. Höchstens 5 Karten pro Thema.

const LESSONS = {
  doppel: [
    { title: "Kurz oder lang?",
      points: [
        "Selbstlaute: a, e, i, o, u (auch ä, ö, ü)",
        "kurz gesprochen: Ball, Kiste",
        "lang gesprochen: Tal, Hose",
        "Sprich das Wort deutlich und hör genau hin!"
      ] },
    { title: "Die Regel",
      points: [
        "nach kurzem Selbstlaut",
        "und nur EIN Mitlaut folgt → verdoppeln",
        "Sonne, Mutter, Teller, Kamm, Suppe",
        "zwei verschiedene Mitlaute → nicht verdoppeln:",
        "Hand, Kiste, Wolke"
      ],
      tip: "Klatsch das Wort in Silben: Son-ne. Hörst du den Mitlaut am Ende der ersten und am Anfang der zweiten Silbe? Dann verdoppeln!" },
    { title: "ck und tz",
      points: [
        "statt kk schreibt man ck: Zucker, Decke",
        "statt zz schreibt man tz: Katze, Platz",
        "nach l, n, r nie ck oder tz: Wolke, Onkel, Herz, Pilz",
        "Trennen: Zu-cker, aber Kat-ze"
      ] },
    { title: "Tricks",
      points: [
        "Verlängern: Ball → Bälle, Bett → Betten",
        "Wortfamilie: kennen → er kennt → bekannt",
        "Mehrzahl: Lehrerin → Lehrerinnen",
        "Zeugnis → Zeugnisse"
      ] },
    { title: "Achtung",
      points: [
        "nach langem Selbstlaut nie verdoppeln: Haken, Dose",
        "nach ei, au, eu nie: Heizung, Schaukel, Kreuz",
        "kurze Merkwörter mit einem Mitlaut:",
        "in, an, ab, um, mit, bis"
      ] }
  ],
  dehnung: [
    { title: "Lange Selbstlaute",
      points: [
        "Meist steht nur der Selbstlaut: Tal, Name, Hose",
        "Manchmal steht ein Dehnungs-h: Zahl, Sohn",
        "Man hört das h nicht.",
        "Es zeigt nur: Der Selbstlaut ist lang."
      ] },
    { title: "Wann kommt ein Dehnungs-h?",
      points: [
        "nur nach langem Selbstlaut",
        "meistens vor l, m, n, r",
        "Zahl, nehmen, Bohne, Uhr",
        "aber nicht immer: Schal, Name, Ton, Tor"
      ],
      tip: "Wörter mit Dehnungs-h musst du dir merken. Schreib sie auf Lernkärtchen und übe sie oft." },
    { title: "Meist kein Dehnungs-h",
      points: [
        "am Wortanfang nach gr, kr, qu, sch, sp, t",
        "Gras, Krone, Qual, Schule, Spur, Tal",
        "Ausnahme zum Merken: Strahl",
        "auch nicht nach kurzem Selbstlaut: Hand, Wind"
      ] },
    { title: "Wortfamilien",
      points: [
        "Das h bleibt in der ganzen Wortfamilie.",
        "fahren – Fahrt – Fahrrad – gefährlich",
        "wohnen – Wohnung – bewohnt",
        "zählen – Zahl – unzählig"
      ] },
    { title: "Andere lange Selbstlaute",
      points: [
        "langes i: meist ie (Biene, Spiel)",
        "ih nur bei: ihm, ihn, ihr, ihnen",
        "doppelter Selbstlaut: Meer, Boot, Haar, Tee",
        "Bei ge-hen, Schu-he hört man das h – das ist kein Dehnungs-h."
      ] }
  ]
};
