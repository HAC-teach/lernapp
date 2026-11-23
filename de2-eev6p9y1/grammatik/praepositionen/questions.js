// Fragen zu „Präpositionen“ (Deutsch, 2. Klasse)
// Fragetypen:
//   mc    – Multiple Choice: options[], answer = Index der richtigen Antwort
//   tf    – Richtig/Falsch: answer = true | false
//   order – Reihenfolge: items[] in der richtigen Reihenfolge (werden gemischt angezeigt)
//   match – Zuordnen: pairs[] = [[Begriff, Erklärung], ...]
//   multi – Mehrfachauswahl: options[], answers[] = Indizes ALLER richtigen Antworten
//   gap   – Lückentext: text mit {Lücken}, extra[] = zusätzliche falsche Wörter zur Auswahl
// Die Millionenshow verwendet nur mc-Fragen (mindestens 15 im Spiel).
// "info" wird nach dem Beantworten als Erklärung angezeigt.
// 15 Fragen pro Thema (wie bei den anderen Grammatik-Lernspielen). Regeln aus dem Schulbuch, alle Beispiele selbst ausgedacht.
// Aufgabenmuster aus dem Buch: Präpositionen finden, Art bestimmen, Präpositionen in eine Spielanleitung einsetzen (Thema I),
// Fall bestimmen, Wechselpräpositionen Wo?/Wohin? (Thema II). Die Listen, welche Präposition welchen Fall verlangt, gehen über das Buch hinaus.

const TOPICS = [
  { id: "arten", title: "I. Arten von Präpositionen", color: "#2f8f7a" },
  { id: "fall", title: "II. Präpositionen und Fall", color: "#b8577a" }
];

const QUESTIONS = [
  // ---------- I. Arten von Präpositionen ----------
  { topic: "arten", type: "mc", q: "Was ist die Aufgabe von Präpositionen?",
    options: ["Sie nennen eine Tätigkeit.", "Sie drücken ein Verhältnis aus und stellen Verbindungen her.", "Sie beschreiben, wie etwas aussieht.", "Sie ersetzen ein Nomen."], answer: 1,
    info: "Präpositionen (Vorwörter) zeigen ein Verhältnis: wo, wann, warum oder wie etwas ist." },
  { topic: "arten", type: "mc", q: "Worauf beziehen sich Präpositionen?",
    options: ["auf ein Verb", "auf ein Adjektiv", "auf ein Nomen (mit Begleiter) oder ein Pronomen", "auf das Satzzeichen"], answer: 2,
    info: "Zum Beispiel: auf dem Dach (Nomen mit Begleiter), mit ihr (Pronomen)." },
  { topic: "arten", type: "tf", q: "Präpositionen heißen auch Vorwörter, weil sie meistens vor dem Nomen stehen.", answer: true,
    info: "Stimmt: hinter dem Haus, nach der Schule, ohne Jacke." },
  { topic: "arten", type: "match", q: "Welches Fragewort gehört zu welcher Art?",
    pairs: [
      ["lokal (Ort)", "Wo?"],
      ["temporal (Zeit)", "Wann?"],
      ["kausal (Grund)", "Warum?"],
      ["modal (Art und Weise)", "Wie?"]
    ],
    info: "Mit dem Fragewort findest du heraus, zu welcher Art eine Präposition gehört." },
  { topic: "arten", type: "multi", q: "Welche Wörter sind Präpositionen?",
    options: ["unter", "schnell", "wegen", "Tisch", "mit", "laufen", "seit"], answers: [0, 2, 4, 6],
    info: "unter, wegen, mit und seit sind Präpositionen. „schnell“ ist ein Adjektiv, „Tisch“ ein Nomen, „laufen“ ein Verb." },
  { topic: "arten", type: "multi", q: "„Nach dem Training fährt Mia mit dem Bus zu ihrer Oma.“ Welche Wörter sind Präpositionen?",
    options: ["Nach", "Training", "fährt", "mit", "Bus", "zu"], answers: [0, 3, 5],
    info: "Die Präpositionen sind: nach (dem Training), mit (dem Bus), zu (ihrer Oma)." },
  { topic: "arten", type: "mc", q: "„Die Katze schläft unter dem Sofa.“ Zu welcher Art gehört „unter“?",
    options: ["lokal", "temporal", "kausal", "modal"], answer: 0,
    info: "Frage: Wo schläft die Katze? Unter dem Sofa. Es geht um einen Ort, also lokal." },
  { topic: "arten", type: "mc", q: "„Nach der Pause lesen wir weiter.“ Zu welcher Art gehört „nach“?",
    options: ["lokal", "temporal", "kausal", "modal"], answer: 1,
    info: "Frage: Wann lesen wir weiter? Nach der Pause. Es geht um die Zeit, also temporal." },
  { topic: "arten", type: "mc", q: "„Wegen des Sturms fällt das Fußballtraining aus.“ Zu welcher Art gehört „wegen“?",
    options: ["lokal", "temporal", "kausal", "modal"], answer: 2,
    info: "Frage: Warum fällt das Training aus? Wegen des Sturms. Es geht um einen Grund, also kausal." },
  { topic: "arten", type: "mc", q: "„Lukas löst die Rechnung ohne Taschenrechner.“ Zu welcher Art gehört „ohne“?",
    options: ["lokal", "temporal", "kausal", "modal"], answer: 3,
    info: "Frage: Wie löst er die Rechnung? Ohne Taschenrechner. Es geht um die Art und Weise, also modal." },
  { topic: "arten", type: "match", q: "Bestimme die Art der Präposition.",
    pairs: [
      ["Seit Montag regnet es.", "temporal"],
      ["Der Ball liegt hinter dem Tor.", "lokal"],
      ["Aus Angst versteckt sich der Hund.", "kausal"],
      ["Sie klettert mit viel Mut auf den Baum.", "modal"],
      ["Bis Freitag bringe ich das Buch zurück.", "temporal"]
    ],
    info: "Frag nach: Wo? → lokal, Wann? → temporal, Warum? → kausal, Wie? → modal." },
  { topic: "arten", type: "mc", q: "Mit welchem Fragewort findest du eine kausale Präposition?",
    options: ["Wo?", "Wann?", "Warum?", "Wie?"], answer: 2,
    info: "Kausale Präpositionen nennen einen Grund: Warum? – aufgrund der Verspätung." },
  { topic: "arten", type: "multi", q: "Welche Präpositionen sind hier temporal?",
    options: ["während der Ferien", "seit drei Tagen", "neben der Tür", "wegen der Hitze", "durch den Wald", "ohne Brille"], answers: [0, 1],
    info: "Frage: Wann? – während der Ferien, seit drei Tagen. „neben“ und „durch“ sind lokal, „wegen“ kausal, „ohne“ modal." },
  { topic: "arten", type: "mc", q: "„Vor dem Essen waschen wir die Hände.“ Zu welcher Art gehört „vor“ hier?",
    options: ["lokal", "temporal", "kausal", "modal"], answer: 1,
    info: "Frage: Wann? Vor dem Essen. „vor“ kann auch lokal sein: Das Rad steht vor dem Haus. Frag immer nach!" },
  { topic: "arten", type: "gap", q: "Lies die Spielanleitung zu „Stille Post“. Ergänze die Präpositionen.",
    text: "Alle Kinder sitzen {in} einem Kreis. Das erste Kind flüstert ein Wort {in} das Ohr seines Nachbarn. Die anderen dürfen {während} des Flüsterns nicht zuhören. So wandert das Wort {von} Kind {zu} Kind. Das letzte Kind sagt das Wort {zum} Schluss laut.",
    extra: ["gegen", "ohne", "bei"],
    info: "in einem Kreis, in das Ohr, während des Flüsterns, von Kind zu Kind, zum Schluss." },

  // ---------- II. Präpositionen und Fall ----------
  { topic: "fall", type: "mc", q: "Was bestimmt eine Präposition?",
    options: ["die Zeitform des Verbs", "den Fall des Nomens oder Pronomens", "die Länge des Satzes", "das Satzzeichen"], answer: 1,
    info: "Präpositionen bestimmen den Fall: mit dem Hund (3. Fall), für den Hund (4. Fall)." },
  { topic: "fall", type: "mc", q: "Mit welcher Frage findest du den 4. Fall (Akkusativ)?",
    options: ["Wer oder was?", "Wessen?", "Wem?", "Wen oder was?"], answer: 3,
    info: "2. Fall: Wessen? · 3. Fall: Wem? · 4. Fall: Wen oder was?" },
  { topic: "fall", type: "mc", q: "„mit dem Fahrrad“ – In welchem Fall steht das Nomen?",
    options: ["2. Fall (Genitiv)", "3. Fall (Dativ)", "4. Fall (Akkusativ)", "1. Fall (Nominativ)"], answer: 1,
    info: "„mit“ verlangt immer den 3. Fall: mit dem Fahrrad, mit der Bahn." },
  { topic: "fall", type: "mc", q: "„für meinen Bruder“ – In welchem Fall steht das Nomen?",
    options: ["2. Fall (Genitiv)", "3. Fall (Dativ)", "4. Fall (Akkusativ)", "1. Fall (Nominativ)"], answer: 2,
    info: "„für“ verlangt immer den 4. Fall: für meinen Bruder, für dich." },
  { topic: "fall", type: "mc", q: "„während der Ferien“ – In welchem Fall steht das Nomen?",
    options: ["2. Fall (Genitiv)", "3. Fall (Dativ)", "4. Fall (Akkusativ)", "1. Fall (Nominativ)"], answer: 0,
    info: "„während“ verlangt den 2. Fall: Wessen? – während der Ferien, während des Spiels." },
  { topic: "fall", type: "match", q: "Welchen Fall verlangt die Präposition?",
    pairs: [
      ["aus", "3. Fall (Dativ)"],
      ["durch", "4. Fall (Akkusativ)"],
      ["wegen", "2. Fall (Genitiv)"],
      ["ohne", "4. Fall (Akkusativ)"],
      ["bei", "3. Fall (Dativ)"]
    ],
    info: "Immer 3. Fall: aus, bei, mit, nach, seit, von, zu. Immer 4. Fall: durch, für, gegen, ohne, um. 2. Fall: wegen, während, aufgrund, trotz." },
  { topic: "fall", type: "mc", q: "Welcher Satz ist richtig?",
    options: ["Ich gehe ohne meinem Hund spazieren.", "Ich gehe ohne meinen Hund spazieren.", "Ich gehe mit meinen Hund spazieren.", "Ich gehe mit meines Hundes spazieren."], answer: 1,
    info: "„ohne“ verlangt den 4. Fall: ohne meinen Hund. Mit „mit“ hieße es: mit meinem Hund (3. Fall)." },
  { topic: "fall", type: "gap", q: "Ergänze den richtigen Begleiter.",
    text: "Ich fahre mit {dem} Bus. Das Geschenk ist für {den} Opa. Während {des} Films essen wir Popcorn. Ohne {die} Jacke ist es draußen zu kalt.",
    extra: ["der"],
    info: "mit → 3. Fall (dem Bus), für → 4. Fall (den Opa), während → 2. Fall (des Films), ohne → 4. Fall (die Jacke)." },
  { topic: "fall", type: "mc", q: "Was ist das Besondere an Wechselpräpositionen?",
    options: ["Sie stehen immer am Satzende.", "Sie verlangen immer den 2. Fall.", "Ihr Fall wechselt je nach Frage: Wo? oder Wohin?", "Sie werden großgeschrieben."], answer: 2,
    info: "Wo? → 3. Fall (Dativ). Wohin? → 4. Fall (Akkusativ)." },
  { topic: "fall", type: "multi", q: "Welche Wörter sind Wechselpräpositionen?",
    options: ["an", "in", "mit", "über", "für", "neben"], answers: [0, 1, 3, 5],
    info: "Wechselpräpositionen: an, auf, hinter, in, neben, über, unter, vor, zwischen. „mit“ verlangt immer den 3. Fall, „für“ immer den 4. Fall." },
  { topic: "fall", type: "match", q: "Wo? oder Wohin? Ordne zu.",
    pairs: [
      ["Das Bild hängt an der Wand.", "Wo? → 3. Fall"],
      ["Ich hänge das Bild an die Wand.", "Wohin? → 4. Fall"],
      ["Der Hund liegt unter dem Tisch.", "Wo? → 3. Fall"],
      ["Der Hund kriecht unter den Tisch.", "Wohin? → 4. Fall"]
    ],
    info: "Ruhe an einem Ort (Wo?) → 3. Fall. Bewegung zu einem Ziel (Wohin?) → 4. Fall." },
  { topic: "fall", type: "mc", q: "„Die Katze springt auf ___ Sessel.“ Welcher Begleiter passt?",
    options: ["der", "dem", "den", "des"], answer: 2,
    info: "Frage: Wohin springt die Katze? → 4. Fall: auf den Sessel." },
  { topic: "fall", type: "mc", q: "„Das Buch liegt auf ___ Regal.“ (das Regal) – Welcher Begleiter passt?",
    options: ["das", "dem", "den", "der"], answer: 1,
    info: "Frage: Wo liegt das Buch? → 3. Fall: auf dem Regal." },
  { topic: "fall", type: "tf", q: "Nach einer Wechselpräposition steht bei der Frage „Wo?“ der 4. Fall.", answer: false,
    info: "Falsch: Wo? → 3. Fall (in der Küche). Wohin? → 4. Fall (in die Küche)." },
  { topic: "fall", type: "mc", q: "„zum“ ist eine Kurzform. Wofür steht sie?",
    options: ["zu den", "zu der", "zu dem", "zu das"], answer: 2,
    info: "zum = zu dem, zur = zu der, im = in dem, ins = in das, am = an dem, beim = bei dem, vom = von dem." }
];
