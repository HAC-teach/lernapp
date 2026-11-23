// Fragen zu „Anleitungen“ – Spielanleitungen (Deutsch, 2. Klasse)
// Fragetypen:
//   mc    – Multiple Choice: options[], answer = Index der richtigen Antwort
//   tf    – Richtig/Falsch: answer = true | false
//   order – Reihenfolge: items[] in der richtigen Reihenfolge (werden gemischt angezeigt; lange Abschnitte stehen untereinander)
//   match – Zuordnen: pairs[] = [[Begriff, Erklärung], ...]
//   multi – Mehrfachauswahl: options[], answers[] = Indizes ALLER richtigen Antworten
//   gap   – Lückentext: text mit {Lücken}, extra[] = zusätzliche falsche Wörter zur Auswahl
// "info" wird nach dem Beantworten als Erklärung angezeigt.
// Thema I folgt der Checkliste „Anleitungen schreiben – Rezept und Spielanleitung“ aus dem Unterricht.
// Themen II und III: Spielanleitungen in die richtige Reihenfolge bringen (Aufgabenmuster wie die UNO-Spielregeln im Buch).
// Alle Spielanleitungen sind selbst geschrieben (bekannte, freie Spiele). Keine Millionenshow – fast nur Reihenfolge-Aufgaben.

const TOPICS = [
  { id: "aufbau", title: "I. Aufbau einer Spielanleitung", color: "#c8483b" },
  { id: "karten", title: "II. Karten-, Würfel- und Papierspiele", color: "#3a86b0" },
  { id: "gruppe", title: "III. Spiele in der Gruppe und im Freien", color: "#5f9a3a" }
];

const QUESTIONS = [
  // ---------- I. Aufbau einer Spielanleitung ----------
  { topic: "aufbau", type: "order", q: "In welcher Reihenfolge stehen die Teile einer Spielanleitung?",
    items: ["Name des Spiels", "Material und Anzahl der Spieler", "Vorbereitung", "Spielablauf", "Spielende: Wer gewinnt?"],
    info: "Zuerst kommt, was man braucht und vorbereitet. Dann wird erklärt, wie man spielt. Am Ende steht, wer gewinnt." },
  { topic: "aufbau", type: "match", q: "Zu welchem Teil der Spielanleitung gehört der Satz?",
    pairs: [
      ["Man braucht 32 Spielkarten und 2 bis 4 Spieler.", "Material"],
      ["Die Karten werden gemischt und verteilt.", "Vorbereitung"],
      ["Der jüngste Spieler beginnt und legt eine Karte ab.", "Spielablauf"],
      ["Wer zuerst keine Karten mehr hat, gewinnt.", "Spielende"]
    ],
    info: "Material – Vorbereitung – Spielablauf – Spielende: So ist eine Spielanleitung gegliedert." },
  { topic: "aufbau", type: "order", q: "Schere, Stein, Papier: Bring die Spielanleitung in die richtige Reihenfolge.",
    items: [
      "Zwei Spieler stehen sich gegenüber und halten eine Hand hinter dem Rücken.",
      "Beide sagen gemeinsam „Schere, Stein, Papier“ und zeigen beim letzten Wort gleichzeitig ihre Hand.",
      "Eine Faust ist der Stein, eine flache Hand ist das Papier, zwei gespreizte Finger sind die Schere.",
      "Der Stein schleift die Schere, die Schere schneidet das Papier, das Papier wickelt den Stein ein. Wer das stärkere Zeichen hat, bekommt einen Punkt.",
      "Wer zuerst drei Punkte hat, gewinnt."
    ],
    info: "Zuerst die Aufstellung, dann das Zeigen, dann was die Zeichen bedeuten und wer den Punkt bekommt – zum Schluss das Spielende." },
  { topic: "aufbau", type: "mc", q: "In welcher Zeitform schreibt man eine Spielanleitung?",
    options: ["im Präsens (Gegenwart)", "im Präteritum (Vergangenheit)", "im Perfekt", "im Futur (Zukunft)"], answer: 0,
    info: "Spielanleitungen stehen im Präsens: Jeder Spieler bekommt fünf Karten." },
  { topic: "aufbau", type: "mc", q: "Welcher Satz passt in eine Spielanleitung?",
    options: ["Jeder Spieler bekommt fünf Karten.", "Gestern habe ich fünf Karten bekommen.", "Fünf Karten sind voll cool!", "Ich glaube, fünf Karten wären nett."], answer: 0,
    info: "Eine Spielanleitung ist sachlich, im Präsens und ohne eigene Meinung." },
  { topic: "aufbau", type: "tf", q: "Wer das Spiel gewinnt, steht ganz am Anfang der Spielanleitung.", answer: false,
    info: "Falsch: Das Spielende – wer gewinnt – steht am Schluss." },
  { topic: "aufbau", type: "mc", q: "Warum ist die richtige Reihenfolge in einer Spielanleitung so wichtig?",
    options: ["Sonst wissen die Spieler nicht, was sie zuerst tun sollen.", "Damit der Text länger wird.", "Damit niemand das Spiel versteht.", "Die Reihenfolge ist egal."], answer: 0,
    info: "Nur wenn alle Schritte in der richtigen Reihenfolge stehen, kann man das Spiel ohne Hilfe spielen." },
  { topic: "aufbau", type: "multi", q: "Woran erkennst du, welcher Abschnitt am Anfang steht?",
    options: ["Er nennt das Material, das man braucht.", "Er beschreibt die Vorbereitung, z. B. Karten mischen.", "Er sagt, wer gewonnen hat.", "Er beschreibt, was man tut, wenn man keine passende Karte hat."], answers: [0, 1],
    info: "Material und Vorbereitung stehen vorne. Sonderfälle im Spiel und das Spielende kommen später." },
  { topic: "aufbau", type: "match", q: "Welche Form hat der Satz?",
    pairs: [
      ["Man würfelt einmal.", "man-Form"],
      ["Würfle einmal!", "Imperativ"],
      ["Einmal würfeln.", "Infinitiv"],
      ["Es wird einmal gewürfelt.", "Vorgangspassiv"]
    ],
    info: "Auch in Spielanleitungen passen diese vier Formen. Bleib in einer Anleitung bei einer Form." },
  { topic: "aufbau", type: "gap", q: "Setze passende Satzanfänge ein.",
    text: "{Zuerst} mischt man die Karten. {Danach} bekommt jeder Spieler sechs Karten. {Am Ende} gewinnt, wer die meisten Paare hat.",
    extra: ["Gestern", "Plötzlich"],
    info: "Abwechslungsreiche Satzanfänge zeigen die Reihenfolge: Zuerst – Danach – Am Ende." },

  // ---------- II. Karten-, Würfel- und Papierspiele ----------
  { topic: "karten", type: "order", q: "Mau-Mau: Bring die Spielanleitung in die richtige Reihenfolge.",
    items: [
      "Man mischt 32 Spielkarten. Jeder Spieler bekommt fünf Karten.",
      "Die übrigen Karten liegen verdeckt als Stapel in der Mitte. Die oberste Karte wird umgedreht und offen daneben gelegt.",
      "Der Spieler links vom Geber beginnt. Er legt eine Karte mit der gleichen Farbe oder dem gleichen Wert auf die offene Karte.",
      "Wer keine passende Karte hat, zieht eine Karte vom verdeckten Stapel. Dann ist der nächste Spieler an der Reihe.",
      "Wer seine vorletzte Karte ablegt, ruft „Mau“. Wer die letzte Karte ablegt, ruft „Mau-Mau“ und hat gewonnen."
    ],
    info: "Erst mischen und verteilen, dann den Stapel vorbereiten. Dann wird erklärt, was passt und was man tut, wenn nichts passt. Zum Schluss: Wer gewinnt?" },
  { topic: "karten", type: "order", q: "Paare finden: Bring die Spielanleitung in die richtige Reihenfolge.",
    items: [
      "Man braucht Kartenpaare mit gleichen Bildern, zum Beispiel 20 Paare.",
      "Alle Karten werden gemischt und verdeckt in Reihen auf den Tisch gelegt.",
      "Der jüngste Spieler beginnt. Er dreht zwei Karten um, sodass alle sie sehen können.",
      "Zeigen beide Karten das gleiche Bild, darf er das Paar behalten und weitermachen. Sonst dreht er sie wieder um und der nächste Spieler ist dran.",
      "Wenn alle Paare gefunden sind, ist das Spiel aus. Wer die meisten Paare hat, gewinnt."
    ],
    info: "Material – Karten auflegen – zwei Karten umdrehen – gleiche Bilder? – Spielende." },
  { topic: "karten", type: "order", q: "Schwarzer Peter: Bring die Spielanleitung in die richtige Reihenfolge.",
    items: [
      "Man braucht Kartenpaare und eine einzelne Karte, den Schwarzen Peter.",
      "Alle Karten werden gemischt und an alle Spieler verteilt.",
      "Jeder legt seine Paare offen vor sich ab.",
      "Dann zieht jeder reihum eine Karte vom linken Nachbarn, ohne sie vorher zu sehen. Hat er nun ein Paar, legt er es ab.",
      "Am Ende bleibt nur der Schwarze Peter übrig. Wer ihn hat, verliert."
    ],
    info: "Paare kann man erst ablegen, wenn die Karten verteilt sind. Der Schwarze Peter bleibt ganz am Schluss übrig." },
  { topic: "karten", type: "order", q: "Quartett: Bring die Spielanleitung in die richtige Reihenfolge.",
    items: [
      "Ein Quartett besteht aus vier Karten, die zusammengehören. Man mischt alle Karten und verteilt sie an die Spieler.",
      "Der erste Spieler fragt einen Mitspieler nach einer Karte, die ihm für ein Quartett noch fehlt.",
      "Hat der Mitspieler diese Karte, muss er sie hergeben und der Spieler darf weiterfragen. Sonst ist der Mitspieler mit dem Fragen dran.",
      "Wer vier zusammengehörige Karten hat, legt dieses Quartett offen vor sich ab.",
      "Wenn alle Quartette abgelegt sind, gewinnt der Spieler mit den meisten Quartetten."
    ],
    info: "Zuerst muss man wissen, was ein Quartett ist. Dann wird gefragt. Wer vier passende Karten hat, legt ab – und am Ende werden die Quartette gezählt." },
  { topic: "karten", type: "order", q: "Hausnummer (Würfelspiel): Bring die Spielanleitung in die richtige Reihenfolge.",
    items: [
      "Jeder Spieler zeichnet drei Kästchen nebeneinander auf einen Zettel. Man braucht einen Würfel.",
      "Der erste Spieler würfelt einmal.",
      "Er schreibt die gewürfelte Zahl in eines seiner drei Kästchen. Eine Zahl darf man danach nicht mehr ändern.",
      "Dann würfelt er noch zweimal und füllt so die anderen beiden Kästchen. Danach ist der nächste Spieler dran.",
      "Wenn alle fertig sind, liest jeder seine dreistellige Zahl vor. Die höchste Hausnummer gewinnt."
    ],
    info: "Erst die Kästchen zeichnen, dann würfeln, eintragen, weiterwürfeln – und zum Schluss die Hausnummern vergleichen." },
  { topic: "karten", type: "order", q: "Kreis und Kreuz: Bring die Spielanleitung in die richtige Reihenfolge.",
    items: [
      "Man zeichnet ein Spielfeld mit 3 mal 3 Kästchen. Ein Spieler bekommt das Kreuz, der andere den Kreis.",
      "Der Spieler mit dem Kreuz beginnt und zeichnet sein Zeichen in ein freies Kästchen.",
      "Danach zeichnet der andere Spieler einen Kreis in ein freies Kästchen. So geht es abwechselnd weiter.",
      "Wer zuerst drei eigene Zeichen in einer Reihe hat – waagrecht, senkrecht oder schräg –, gewinnt."
    ],
    info: "Spielfeld zeichnen – das Kreuz beginnt – abwechselnd weiter – drei in einer Reihe gewinnen." },
  { topic: "karten", type: "order", q: "Buchstaben raten: Bring die Spielanleitung in die richtige Reihenfolge.",
    items: [
      "Ein Spieler denkt sich ein Wort aus. Für jeden Buchstaben zeichnet er einen Strich auf ein Blatt.",
      "Die anderen Spieler nennen nacheinander einen Buchstaben.",
      "Kommt der Buchstabe im Wort vor, schreibt der Spieler ihn auf den passenden Strich. Sonst zeichnet er einen Teil einer Blume.",
      "Wer das Wort errät, bevor die Blume fertig ist, gewinnt und darf sich das nächste Wort ausdenken."
    ],
    info: "Zuerst braucht man das Wort mit den Strichen, dann wird geraten. Am Ende steht, wer gewinnt." },
  { topic: "karten", type: "order", q: "Stadt, Land, Fluss: Bring die Spielanleitung in die richtige Reihenfolge.",
    items: [
      "Jeder Spieler zeichnet eine Tabelle mit den Spalten Stadt, Land, Fluss und Punkte.",
      "Ein Spieler sagt still im Kopf das Alphabet auf. Ein anderer ruft „Stopp!“.",
      "Mit dem Buchstaben, bei dem gestoppt wurde, sucht jetzt jeder so schnell wie möglich eine Stadt, ein Land und einen Fluss.",
      "Wer zuerst alle Spalten ausgefüllt hat, ruft „Fertig!“. Dann dürfen alle nicht mehr schreiben.",
      "Für jedes richtige Wort gibt es Punkte. Nach mehreren Runden gewinnt, wer die meisten Punkte hat."
    ],
    info: "Tabelle – Buchstaben finden – Wörter suchen – „Fertig!“ – Punkte zählen." },
  { topic: "karten", type: "match", q: "Mau-Mau: Zu welchem Teil der Anleitung gehört der Satz?",
    pairs: [
      ["Man braucht 32 Spielkarten.", "Material"],
      ["Jeder Spieler bekommt fünf Karten.", "Vorbereitung"],
      ["Wer keine passende Karte hat, zieht eine Karte.", "Spielablauf"],
      ["Wer die letzte Karte ablegt, hat gewonnen.", "Spielende"]
    ],
    info: "Auch in einer gemischten Anleitung findest du so die Reihenfolge: Material – Vorbereitung – Spielablauf – Spielende." },
  { topic: "karten", type: "mc", q: "Welcher Abschnitt steht in der Anleitung zu „Paare finden“ ganz am Schluss?",
    options: ["Wer die meisten Paare hat, gewinnt.", "Alle Karten werden gemischt.", "Der jüngste Spieler beginnt.", "Man braucht Kartenpaare mit gleichen Bildern."], answer: 0,
    info: "Das Spielende – wer gewinnt – steht immer zum Schluss." },

  // ---------- III. Spiele in der Gruppe und im Freien ----------
  { topic: "gruppe", type: "order", q: "Reise nach Jerusalem: Bring die Spielanleitung in die richtige Reihenfolge.",
    items: [
      "Man stellt Stühle in einer Reihe auf – immer einen Stuhl weniger, als Kinder mitspielen.",
      "Jemand spielt Musik ab. Solange die Musik läuft, gehen alle Kinder um die Stühle herum.",
      "Hört die Musik auf, setzt sich jedes Kind schnell auf einen Stuhl.",
      "Wer keinen Stuhl bekommt, scheidet aus. Danach wird ein Stuhl weggenommen.",
      "Das Spiel geht so lange weiter, bis nur noch ein Kind sitzt. Es hat gewonnen."
    ],
    info: "Stühle aufstellen – Musik – hinsetzen – ausscheiden – ein Kind bleibt übrig." },
  { topic: "gruppe", type: "order", q: "Ochs am Berg: Bring die Spielanleitung in die richtige Reihenfolge.",
    items: [
      "Ein Kind ist der Ochs. Es steht mit dem Gesicht zur Wand. Die anderen stehen weit hinter ihm an einer Startlinie.",
      "Der Ochs ruft: „Ochs am Berg, eins, zwei, drei!“ Währenddessen schleichen die anderen nach vorne.",
      "Nach dem Ruf dreht sich der Ochs schnell um. Jetzt müssen alle stillstehen.",
      "Wen der Ochs noch bei einer Bewegung sieht, der muss zurück an die Startlinie.",
      "Wer zuerst die Wand berührt, hat gewonnen und ist in der nächsten Runde der Ochs."
    ],
    info: "Aufstellung – Ruf und Schleichen – Umdrehen – zurück an den Start – wer die Wand berührt, gewinnt." },
  { topic: "gruppe", type: "order", q: "Topfschlagen: Bring die Spielanleitung in die richtige Reihenfolge.",
    items: [
      "Einem Kind werden die Augen verbunden. Es bekommt einen Kochlöffel.",
      "Jetzt stellt jemand einen umgedrehten Topf irgendwo in den Raum. Darunter liegt eine kleine Überraschung.",
      "Das Kind krabbelt los und klopft mit dem Kochlöffel auf den Boden, um den Topf zu finden.",
      "Dabei rufen die anderen „heiß“, wenn es nah am Topf ist, und „kalt“, wenn es weit weg ist.",
      "Trifft das Kind den Topf, darf es die Überraschung behalten. Dann ist das nächste Kind dran."
    ],
    info: "Erst werden die Augen verbunden, dann wird der Topf versteckt. Während das Kind sucht, helfen die anderen mit „heiß“ und „kalt“." },
  { topic: "gruppe", type: "order", q: "Versteinern: Bring die Spielanleitung in die richtige Reihenfolge.",
    items: [
      "Ein Kind wird zum Fänger bestimmt. Die anderen laufen im Spielfeld davon.",
      "Wen der Fänger berührt, der ist versteinert. Er bleibt mit gegrätschten Beinen stehen.",
      "Ein anderes Kind kann ihn befreien, indem es durch seine Beine krabbelt.",
      "Sind alle Kinder versteinert, ist das Spiel aus. Das zuletzt gefangene Kind ist der neue Fänger."
    ],
    info: "Fänger bestimmen – versteinert werden – befreien – Spielende." },
  { topic: "gruppe", type: "order", q: "Ich packe meinen Koffer: Bring die Spielanleitung in die richtige Reihenfolge.",
    items: [
      "Alle Kinder sitzen im Kreis.",
      "Das erste Kind sagt: „Ich packe meinen Koffer und nehme … mit.“ Es nennt einen Gegenstand.",
      "Das nächste Kind wiederholt den Satz mit dem ersten Gegenstand und fügt einen neuen hinzu.",
      "So geht es reihum weiter. Die Liste der Gegenstände wird immer länger.",
      "Wer einen Gegenstand vergisst oder die Reihenfolge vertauscht, scheidet aus. Wer übrig bleibt, gewinnt."
    ],
    info: "Im Kreis sitzen – der erste Gegenstand – wiederholen und ergänzen – reihum weiter – ausscheiden und gewinnen." },
  { topic: "gruppe", type: "order", q: "Plumpsack: Bring die Spielanleitung in die richtige Reihenfolge.",
    items: [
      "Alle Kinder sitzen im Kreis und schauen nach innen. Ein Kind bekommt ein verknotetes Tuch.",
      "Das Kind mit dem Tuch läuft außen um den Kreis. Die anderen dürfen sich nicht umdrehen.",
      "Heimlich legt es das Tuch hinter ein sitzendes Kind und läuft weiter.",
      "Merkt dieses Kind das Tuch, springt es auf und versucht, den Läufer zu fangen.",
      "Kommt der Läufer zum freien Platz, ohne gefangen zu werden, setzt er sich hin. Das andere Kind läuft jetzt mit dem Tuch."
    ],
    info: "Erst wird das Tuch hingelegt, dann merkt es jemand und die Jagd beginnt. Am Ende geht eine neue Runde los." },
  { topic: "gruppe", type: "order", q: "Eierlauf: Bring die Spielanleitung in die richtige Reihenfolge.",
    items: [
      "Man legt eine Start- und eine Ziellinie fest. Jedes Kind bekommt einen Löffel und ein Ei.",
      "Alle stellen sich an die Startlinie und legen das Ei auf den Löffel.",
      "Auf das Startsignal laufen alle los. Das Ei darf man nicht mit der Hand festhalten.",
      "Fällt das Ei hinunter, muss man es wieder auf den Löffel legen und zurück an den Start.",
      "Wer zuerst mit dem Ei auf dem Löffel ins Ziel kommt, gewinnt."
    ],
    info: "Material und Start – loslaufen – was passiert, wenn das Ei fällt – Ziel." },
  { topic: "gruppe", type: "order", q: "Ich sehe was, was du nicht siehst: Bring die Spielanleitung in die richtige Reihenfolge.",
    items: [
      "Ein Kind sucht sich heimlich einen Gegenstand im Raum aus.",
      "Es sagt: „Ich sehe was, was du nicht siehst, und das ist rot.“ Dabei nennt es die Farbe des Gegenstands.",
      "Die anderen raten nacheinander, welcher Gegenstand gemeint ist.",
      "Wer den Gegenstand errät, darf sich als Nächstes etwas aussuchen."
    ],
    info: "Aussuchen – Farbe nennen – raten – wer errät, ist als Nächstes dran." },
  { topic: "gruppe", type: "match", q: "Reise nach Jerusalem: Zu welchem Teil der Anleitung gehört der Satz?",
    pairs: [
      ["Man braucht Stühle und Musik.", "Material"],
      ["Die Stühle werden in einer Reihe aufgestellt.", "Vorbereitung"],
      ["Hört die Musik auf, setzt sich jedes Kind schnell hin.", "Spielablauf"],
      ["Das Kind, das zuletzt sitzt, hat gewonnen.", "Spielende"]
    ],
    info: "Material – Vorbereitung – Spielablauf – Spielende: So findest du die Reihenfolge." },
  { topic: "gruppe", type: "mc", q: "Welcher Satz ist sachlich und passt in die Anleitung zu „Ochs am Berg“?",
    options: ["Wer sich noch bewegt, muss zurück an die Startlinie.", "Ochs am Berg ist mein absolutes Lieblingsspiel!", "Letzte Woche war Tim der Ochs.", "Das Umdrehen war echt lustig."], answer: 0,
    info: "Eine Spielanleitung erklärt sachlich im Präsens, was man tut. Meinungen und Erlebnisse gehören nicht hinein." }
];
