// Lernkarten zu „Anleitungen“ – Spielanleitungen (nach der Checkliste „Anleitungen schreiben – Rezept und Spielanleitung“)
// LESSONS[topicId] = Liste von Karten: { title, points: [...], tip? }
// Die Karten werden vor dem Quiz zum Durchklicken angezeigt. Höchstens 5 Karten pro Thema.

const LESSONS = {
  aufbau: [
    { title: "Vorbereitung",
      points: [
        "alle Materialien nennen (Karten, Würfel, Stühle …)",
        "die richtige Reihenfolge des Spiels kennen"
      ] },
    { title: "Aufbau einer Spielanleitung",
      points: [
        "Überschrift: Name des Spiels",
        "Material und Anzahl der Spieler",
        "Vorbereitung: mischen, verteilen, aufstellen",
        "Spielablauf: wer beginnt, was man tut",
        "Spielende: Wer gewinnt?"
      ] },
    { title: "Der Text",
      points: [
        "sachlich geschrieben",
        "alle Schritte in der richtigen Reihenfolge und genau beschrieben",
        "abwechslungsreiche Satzanfänge: Zuerst, Danach, Am Ende",
        "Wortwiederholungen vermeiden, übersichtlich gegliedert"
      ] },
    { title: "Zeitform, Sprache, Stil",
      points: [
        "Präsens: Jeder Spieler bekommt …",
        "man-Form, Infinitiv, Vorgangspassiv oder Imperativ",
        "Präpositionen: auf den Stapel, in die Mitte",
        "objektiv: keine Meinung, keine Erlebnisse"
      ] }
  ],
  karten: [
    { title: "So ordnest du eine Spielanleitung",
      points: [
        "Was braucht man? → ganz vorne",
        "Was muss vor dem Spiel passieren? → danach",
        "Wer beginnt? Was tut man? → Spielablauf",
        "Wer gewinnt? → ganz am Schluss"
      ],
      tip: "Frag dich bei jedem Abschnitt: Was muss vorher schon passiert sein?" },
    { title: "Wörter bei Karten- und Würfelspielen",
      points: [
        "mischen, verteilen (austeilen)",
        "verdeckter Stapel, offene Karte",
        "ziehen, ablegen, an der Reihe sein",
        "würfeln, reihum, abwechselnd"
      ] }
  ],
  gruppe: [
    { title: "So ordnest du eine Spielanleitung",
      points: [
        "Aufstellung oder Material → ganz vorne",
        "Wer beginnt? Was passiert zuerst?",
        "Was passiert, wenn …? → im Spielablauf",
        "Wer gewinnt? Wie geht es weiter? → am Schluss"
      ],
      tip: "Wörter wie „Danach“, „Dabei“ oder „Jetzt“ verraten, dass vorher schon etwas passiert ist." },
    { title: "Wörter bei Spielen in der Gruppe",
      points: [
        "im Kreis sitzen, eine Reihe bilden",
        "der Fänger, fangen, befreien",
        "ausscheiden, übrig bleiben",
        "Startlinie, Ziellinie, Startsignal"
      ] }
  ]
};
