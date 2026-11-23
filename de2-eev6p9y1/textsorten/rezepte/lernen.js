// Lernkarten zu „Rezepte“ (Thema I nach der Checkliste „Anleitungen schreiben – Rezept und Spielanleitung“, alle Beispiele selbst ausgedacht)
// LESSONS[topicId] = Liste von Karten: { title, points: [...], tip? }
// Die Karten werden vor dem Quiz zum Durchklicken angezeigt. Höchstens 5 Karten pro Thema.

const LESSONS = {
  merkmale: [
    { title: "Vorbereitung",
      points: [
        "alle Zutaten, Materialien und Geräte nennen",
        "die richtige Reihenfolge der Arbeitsschritte kennen"
      ] },
    { title: "Aufbau eines Rezepts",
      points: [
        "Überschrift: Name des Gerichts",
        "Zutatenliste mit genauen Mengen (250 g Mehl, 2 Eier)",
        "Materialliste: Küchengeräte",
        "Arbeitsschritte in der richtigen Reihenfolge",
        "übersichtlich gegliedert, z. B. nummeriert"
      ] },
    { title: "Der Text",
      points: [
        "sachlich geschrieben",
        "jeder Schritt genau beschrieben",
        "abwechslungsreiche Satzanfänge: Zuerst, Danach, Anschließend, Zum Schluss",
        "Wortwiederholungen vermeiden"
      ] },
    { title: "Zeitform und Sprache",
      points: [
        "Präsens: Man schneidet …",
        "klar und verständlich, mit Präpositionen: in die Schüssel, auf den Herd",
        "man-Form: Man schält die Äpfel.",
        "Infinitiv: Äpfel schälen.",
        "Vorgangspassiv: Die Äpfel werden geschält. · Imperativ: Schäle die Äpfel!"
      ],
      tip: "Bleib in einem Rezept bei einer Form." },
    { title: "Stil: objektiv und sachlich",
      points: [
        "keine Gefühle und Meinungen („Ich liebe …“, „mega lecker“)",
        "keine Erzählung in der Vergangenheit („Dann schnitt ich …“)",
        "genaue Angaben statt „ein bisschen“"
      ] }
  ],
  lesen: [
    { title: "Ein Bildrezept lesen",
      points: [
        "Überschrift: Was wird gekocht?",
        "darunter: für wie viele Personen, wie lange",
        "Nummern 1., 2., 3. und Pfeile zeigen die Reihenfolge",
        "Beschriftungen nennen Mengen und Zeiten"
      ] },
    { title: "Zutaten- und Materialliste erstellen",
      points: [
        "Zutaten: alles, was man isst – mit Menge",
        "Material: alle Küchengeräte, die man sieht",
        "Schritt für Schritt durchgehen, nichts auslassen",
        "Mengen genau abschreiben"
      ],
      tip: "Achte auf Zahlen: 2 Eier oder 4 Eier? 250 g oder 500 g?" }
  ],
  geraete: [
    { title: "Kochen und Braten",
      points: [
        "Herd, Kochtopf, Pfanne",
        "Kochlöffel zum Rühren",
        "Schöpfer für Suppe und Teig",
        "Pfannenwender zum Umdrehen"
      ] },
    { title: "Vorbereiten",
      points: [
        "Messer und Schneidebrett",
        "Sparschäler, Reibe",
        "Schüssel, Schneebesen",
        "Sieb, Zitronenpresse, Stabmixer"
      ] },
    { title: "Messen und Backen",
      points: [
        "Küchenwaage: Gramm (g)",
        "Messbecher: Milliliter (ml)",
        "Esslöffel (EL), Teelöffel (TL)",
        "Backrohr, Backblech, Muffinform, Nudelholz"
      ],
      tip: "Backrohr sagt man in Österreich, Backofen in Deutschland." }
  ],
  woerter: [
    { title: "Tätigkeiten beim Vorbereiten",
      points: [
        "schälen, schneiden, würfeln",
        "reiben, auspressen",
        "rühren, verquirlen",
        "ausrollen, abwiegen"
      ] },
    { title: "Tätigkeiten am Herd und im Backrohr",
      points: [
        "kochen (Topf), köcheln (kleine Hitze)",
        "braten (Pfanne)",
        "backen (Backrohr), vorheizen",
        "abgießen, pürieren, abschmecken"
      ] },
    { title: "Mengenangaben",
      points: [
        "g = Gramm, ml = Milliliter",
        "EL = Esslöffel, TL = Teelöffel",
        "Pkg. = Packung",
        "1 Prise = so viel, wie zwischen zwei Finger passt"
      ] }
  ]
};
