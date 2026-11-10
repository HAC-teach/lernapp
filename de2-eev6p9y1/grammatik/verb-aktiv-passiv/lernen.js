// Lernkarten zu „Das Verb: Aktiv/Passiv“ (Regeln aus dem Schulbuch, alle Beispiele selbst ausgedacht)
// LESSONS[topicId] = Liste von Karten: { title, points: [...], tip? }
// Die Karten werden vor dem Quiz zum Durchklicken angezeigt. Höchstens 5 Karten pro Thema.
// Die Bildungs-Karten gehen über den Merkkasten im Buch hinaus: Stellung des Partizips, „von“, „man“, den → der, Passiv mit Modalverb.

const LESSONS = {
  erkennen: [
    { title: "Aktiv und Passiv",
      points: [
        "Aktiv: Die handelnde Person steht im Mittelpunkt.",
        "Passiv: Die Handlung oder der Zustand steht im Zentrum.",
        "Aktiv: Der Gärtner gießt die Blumen.",
        "Passiv: Die Blumen werden gegossen."
      ] },
    { title: "Was passiert im Satz?",
      points: [
        "Das Objekt wird zum Subjekt.",
        "Das Subjekt wird zum Objekt (mit „von“) oder fällt weg.",
        "Aktiv: Die Katze jagt die Maus.",
        "Passiv: Die Maus wird (von der Katze) gejagt."
      ] },
    { title: "Zwei Arten des Passivs",
      points: [
        "Vorgangspassiv und Zustandspassiv",
        "Vorgangspassiv: beschreibt, was getan wird",
        "In diesem Lernspiel: das Vorgangspassiv"
      ] },
    { title: "So erkennst du das Passiv",
      points: [
        "Form von „werden“ + Partizip II",
        "Partizip II: gemalt, gebaut, geschrieben",
        "Die handelnde Person fehlt oft.",
        "Das Tor wird geöffnet."
      ],
      tip: "Frag dich: Tut das Subjekt selbst etwas? Dann ist es Aktiv." },
    { title: "Achtung: Passiv oder Futur I?",
      points: [
        "Beide haben eine Form von „werden“.",
        "Passiv: werden + Partizip II",
        "Die Mauer wird gestrichen.",
        "Futur I: werden + Nennform",
        "Er wird die Mauer streichen."
      ] }
  ],
  bilden: [
    { title: "Bildung",
      points: [
        "werden (Personalform) + Partizip II",
        "„werden“ richtet sich nach dem Subjekt.",
        "Einzahl: Der Brief wird geschrieben.",
        "Mehrzahl: Die Briefe werden geschrieben.",
        "Das Partizip II steht am Satzende."
      ] },
    { title: "Vom Aktiv zum Passiv",
      points: [
        "Aktiv: Sie repariert das Rad.",
        "1. Objekt suchen (Wen oder was?): das Rad",
        "2. Das Objekt wird Subjekt: Das Rad …",
        "3. werden + Partizip II: Das Rad wird repariert.",
        "4. Wer handelt? Weglassen oder mit „von“: von ihr"
      ] },
    { title: "Darauf musst du achten",
      points: [
        "den wird zu der: Er mäht den Rasen. → Der Rasen wird gemäht.",
        "Mehrzahl: werden statt wird",
        "„man“ fällt weg: Man öffnet das Tor. → Das Tor wird geöffnet."
      ] },
    { title: "Passiv ohne Subjekt",
      points: [
        "Kein Objekt im Aktivsatz → kein Subjekt im Passivsatz",
        "Aktiv: Wir tanzen heute.",
        "mit „es“ am Satzanfang: Es wird heute getanzt.",
        "oder ganz ohne „es“: Heute wird getanzt."
      ] },
    { title: "Passiv mit Modalverb",
      points: [
        "Modalverb + Partizip II + werden",
        "Aktiv: Wir müssen den Tisch decken.",
        "Passiv: Der Tisch muss gedeckt werden.",
        "„werden“ steht in der Nennform am Satzende."
      ] }
  ]
};
