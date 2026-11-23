// Lernkarten zu „Präpositionen“ (Regeln aus dem Schulbuch, alle Beispiele selbst ausgedacht)
// LESSONS[topicId] = Liste von Karten: { title, points: [...], tip? }
// Die Karten werden vor dem Quiz zum Durchklicken angezeigt. Höchstens 5 Karten pro Thema.
// Über das Buch hinaus: Listen, welche Präposition welchen Fall verlangt, Kurzformen (zum, im, ins …), „vor“ lokal oder temporal.

const LESSONS = {
  arten: [
    { title: "Präpositionen (Vorwörter)",
      points: [
        "drücken ein Verhältnis aus",
        "stellen Verbindungen her",
        "beziehen sich auf ein Nomen (mit Begleiter) oder Pronomen",
        "stehen meist davor: auf dem Dach, mit ihr"
      ] },
    { title: "Lokal – Wo?",
      points: [
        "nennen einen Ort",
        "unter dem Bett",
        "neben der Tür",
        "hinter den Bäumen"
      ] },
    { title: "Temporal – Wann?",
      points: [
        "nennen eine Zeit",
        "nach dem Frühstück",
        "seit Montag",
        "während der Pause"
      ] },
    { title: "Kausal – Warum? · Modal – Wie?",
      points: [
        "kausal: nennen einen Grund",
        "wegen des Gewitters, aufgrund der Verspätung",
        "modal: nennen die Art und Weise",
        "ohne Brille, mit viel Mut"
      ] },
    { title: "Frag nach!",
      points: [
        "Manche Präpositionen passen zu mehreren Arten.",
        "vor dem Haus → Wo? → lokal",
        "vor dem Essen → Wann? → temporal"
      ],
      tip: "Stell immer die Frage: Wo? Wann? Warum? Wie?" }
  ],
  fall: [
    { title: "Präpositionen bestimmen den Fall",
      points: [
        "2. Fall (Genitiv): Wessen?",
        "3. Fall (Dativ): Wem?",
        "4. Fall (Akkusativ): Wen oder was?",
        "mit dem Hund – für den Hund"
      ] },
    { title: "Immer 3. Fall (Dativ)",
      points: [
        "aus, bei, mit, nach, seit, von, zu",
        "mit dem Rad",
        "bei der Oma",
        "seit einem Jahr"
      ] },
    { title: "Immer 4. Fall · 2. Fall",
      points: [
        "4. Fall: durch, für, gegen, ohne, um",
        "durch den Tunnel, ohne die Mütze",
        "2. Fall: wegen, während, aufgrund, trotz",
        "wegen des Regens, während des Spiels"
      ] },
    { title: "Wechselpräpositionen",
      points: [
        "an, auf, hinter, in, neben, über, unter, vor, zwischen",
        "Wo? → 3. Fall: Die Tasche liegt auf dem Stuhl.",
        "Wohin? → 4. Fall: Ich lege die Tasche auf den Stuhl."
      ],
      tip: "Wo? = Ruhe an einem Ort. Wohin? = Bewegung zu einem Ziel." },
    { title: "Kurzformen",
      points: [
        "am = an dem, im = in dem, ins = in das",
        "beim = bei dem, vom = von dem",
        "zum = zu dem, zur = zu der"
      ] }
  ]
};
