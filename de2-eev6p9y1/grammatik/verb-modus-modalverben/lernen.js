// Lernkarten zu „Das Verb: Modus und Modalverben“ (Regeln aus dem Schulbuch, alle Beispiele selbst ausgedacht)
// LESSONS[topicId] = Liste von Karten: { title, points: [...], tip? }
// Die Karten werden vor dem Quiz zum Durchklicken angezeigt. Höchstens 5 Karten pro Thema.
// Die Bildungs-Karten gehen auf Wunsch der Lehrkraft über das Buch hinaus: Ihr-Form, Sonderfälle, Stellung der Nennform.

const LESSONS = {
  imperativ: [
    { title: "Was ist ein Modus?",
      points: [
        "Modus (Mehrzahl: Modi) = Aussageweise des Verbs",
        "Der Grundsinn des Satzes bleibt gleich.",
        "Indikativ (Grundform): normaler Aussagesatz",
        "Imperativ: Befehlsform"
      ] },
    { title: "Der Imperativ",
      points: [
        "drückt Wünsche, Aufforderungen und Befehle aus",
        "Prädikat steht immer an erster Stelle",
        "am Ende meist ein Rufzeichen",
        "Indikativ: Du öffnest das Fenster.",
        "Imperativ: Öffne das Fenster!"
      ] },
    { title: "Bildung Schritt für Schritt",
      points: [
        "1. Du-Form suchen: du singst",
        "2. „du“ und Endung -st weglassen: Sing!",
        "Mit -e geht es auch: Singe!",
        "3. Verb an den Satzanfang: Sing ein Lied!",
        "Mehrere Personen: ihr singt → Singt!"
      ] },
    { title: "Bildung: Sonderfälle",
      points: [
        "e wird zu i, das i bleibt: du nimmst → Nimm!",
        "auch: du liest → Lies!",
        "Umlaut fällt weg: du fährst → Fahr!",
        "Verben auf -eln: du sammelst → Sammle!",
        "Stamm auf -t oder -d, das -e bleibt: du wartest → Warte!"
      ] },
    { title: "Höflich mit „bitte“",
      points: [
        "„bitte“ macht den Imperativ höflicher",
        "Schließ die Tür! → Schließ bitte die Tür!",
        "oder: Bitte schließ die Tür!"
      ],
      tip: "Sprich den Satz einmal mit und einmal ohne „bitte“. Du hörst den Unterschied sofort." }
  ],
  modalverben: [
    { title: "Was sind Modalverben?",
      points: [
        "müssen, sollen, wollen, mögen, dürfen, können",
        "verändern, wie ein Satz verstanden wird",
        "zeigen: Geschieht etwas freiwillig oder unfreiwillig?"
      ] },
    { title: "Bildung mit Modalverb",
      points: [
        "Modalverb richtet sich nach der Person: ich will, du willst",
        "Es steht im Aussagesatz an zweiter Stelle.",
        "Zweites Verb: Nennform (Infinitiv), am Satzende",
        "Ich lese ein Buch. → Ich will ein Buch lesen."
      ] },
    { title: "Freiwillig oder unfreiwillig?",
      points: [
        "unfreiwillig: müssen, sollen",
        "Ich muss mein Zimmer aufräumen.",
        "freiwillig: wollen, mögen",
        "Ich will mein Zimmer aufräumen."
      ] },
    { title: "Wer erlaubt es?",
      points: [
        "dürfen: von jemand anderem erlaubt (Regeln)",
        "Wir dürfen im Hof spielen.",
        "können: „von mir selbst“ erlaubt (Fähigkeit)",
        "Ich kann Gitarre spielen."
      ] },
    { title: "Höflich fragen",
      points: [
        "Modalverben machen vor allem Fragen höflicher.",
        "Öffnest du mir die Tür?",
        "→ Kannst du mir die Tür öffnen?",
        "→ Möchtest du mir die Tür öffnen?",
        "→ Darf ich dich bitten, mir die Tür zu öffnen?"
      ] }
  ]
};
