// Fragen zu „Das Verb: Modus und Modalverben“ (Deutsch, 2. Klasse)
// Fragetypen:
//   mc    – Multiple Choice: options[], answer = Index der richtigen Antwort
//   tf    – Richtig/Falsch: answer = true | false
//   order – Reihenfolge: items[] in der richtigen Reihenfolge (werden gemischt angezeigt)
//   match – Zuordnen: pairs[] = [[Begriff, Erklärung], ...]
//   multi – Mehrfachauswahl: options[], answers[] = Indizes ALLER richtigen Antworten
//   gap   – Lückentext: text mit {Lücken}, extra[] = zusätzliche falsche Wörter zur Auswahl
// Die Millionenshow verwendet nur mc-Fragen (mindestens 15 im Spiel).
// "info" wird nach dem Beantworten als Erklärung angezeigt.
// 15 Fragen pro Thema (auf Wunsch der Lehrkraft). Regeln aus dem Schulbuch, alle Beispiele selbst ausgedacht.

const TOPICS = [
  { id: "imperativ", title: "I. Der Imperativ", color: "#c8483b" },
  { id: "modalverben", title: "II. Modalverben", color: "#2f7f9e" }
];

const QUESTIONS = [
  // ---------- I. Der Imperativ ----------
  { topic: "imperativ", type: "mc", q: "Was gibt der Modus eines Verbs an?",
    options: ["die Aussageweise", "die Zeitform", "die Person", "den Fall"], answer: 0,
    info: "Der Modus ändert die Aussageweise. Der Grundsinn des Satzes bleibt gleich." },
  { topic: "imperativ", type: "mc", q: "In welchem Modus stehen Verben im normalen Aussagesatz?",
    options: ["im Imperativ", "im Indikativ", "im Infinitiv", "im Plural"], answer: 1,
    info: "Der Indikativ ist die Grundform. Er steht im normalen Aussagesatz." },
  { topic: "imperativ", type: "match", q: "Indikativ oder Imperativ? Ordne zu.",
    pairs: [
      ["Du räumst das Regal ein.", "Indikativ"],
      ["Räum das Regal ein!", "Imperativ"],
      ["Er spielt Klavier.", "Indikativ"],
      ["Hör mir zu!", "Imperativ"],
      ["Wir schreiben einen Brief.", "Indikativ"]
    ],
    info: "Der Imperativ beginnt mit dem Verb und endet meist mit einem Rufzeichen." },
  { topic: "imperativ", type: "multi", q: "Was drückst du mit dem Imperativ aus?",
    options: ["Wünsche", "Aufforderungen", "Befehle", "was gestern passiert ist"], answers: [0, 1, 2],
    info: "Mit dem Imperativ drückst du Wünsche, Aufforderungen und Befehle aus." },
  { topic: "imperativ", type: "tf", q: "Im Imperativ steht das Prädikat immer an erster Stelle im Satz.", answer: true,
    info: "Stimmt: Zum Beispiel „Pack deine Sachen ein!“. Das Verb steht ganz vorne." },
  { topic: "imperativ", type: "mc", q: "Welches Satzzeichen steht meist am Ende eines Imperativsatzes?",
    options: ["ein Punkt", "ein Beistrich", "ein Rufzeichen", "ein Fragezeichen"], answer: 2,
    info: "Am Ende eines Imperativsatzes steht meist ein Rufzeichen." },
  { topic: "imperativ", type: "mc", q: "„Du singst ein Lied.“ Wie lautet der Satz im Imperativ?",
    options: ["Singst ein Lied!", "Du sing ein Lied!", "Ein Lied sing!", "Sing ein Lied!"], answer: 3,
    info: "„du“ und die Endung -st fallen weg, das Verb steht vorne: Sing ein Lied!" },
  { topic: "imperativ", type: "gap", q: "So bildest du den Imperativ. Ergänze.",
    text: "Du suchst die {Du-Form} des Verbs. Das Wort {du} und die Endung {-st} fallen weg. Das Verb steht an {erster} Stelle.",
    extra: ["Sie-Form", "-en", "letzter"],
    info: "Beispiel: du malst → Mal ein Bild!" },
  { topic: "imperativ", type: "match", q: "Bei diesen Verben wird e zu i. Ordne den Imperativ zu.",
    pairs: [
      ["du liest", "Lies!"],
      ["du nimmst", "Nimm!"],
      ["du hilfst", "Hilf!"],
      ["du sprichst", "Sprich!"],
      ["du isst", "Iss!"]
    ],
    info: "Bei diesen Verben bleibt das i aus der Du-Form auch im Imperativ." },
  { topic: "imperativ", type: "mc", q: "„Du fährst mit dem Rad.“ Wie lautet der Imperativ?",
    options: ["Fähr mit dem Rad!", "Fahr mit dem Rad!", "Fährst mit dem Rad!", "Fahren mit dem Rad!"], answer: 1,
    info: "Der Umlaut aus der Du-Form fällt weg: du fährst → Fahr!" },
  { topic: "imperativ", type: "mc", q: "„Du sammelst Kastanien.“ Wie lautet der Imperativ?",
    options: ["Sammelst Kastanien!", "Sammeln Kastanien!", "Sammle Kastanien!", "Du sammle Kastanien!"], answer: 2,
    info: "Bei Verben auf -eln heißt es: Sammle! Genauso: du bastelst → Bastle!" },
  { topic: "imperativ", type: "mc", q: "„Du wartest an der Haltestelle.“ Wie lautet der Imperativ?",
    options: ["Warte an der Haltestelle!", "Wartest an der Haltestelle!", "Warten an der Haltestelle!", "Du warte an der Haltestelle!"], answer: 0,
    info: "Wenn der Stamm auf -t oder -d endet, bleibt das -e: Warte! Finde!" },
  { topic: "imperativ", type: "order", q: "Ordne die Wörter zu einem Imperativsatz.",
    items: ["Zeig", "mir", "dein", "neues", "Fahrrad!"],
    info: "Das Prädikat „Zeig“ steht an erster Stelle, am Ende steht ein Rufzeichen." },
  { topic: "imperativ", type: "multi", q: "Welche Sätze sind höfliche Imperativsätze?",
    options: ["Mach bitte das Licht aus!", "Bitte mach das Licht aus!", "Mach das Licht aus!", "Du machst das Licht aus."], answers: [0, 1],
    info: "Mit dem Wort „bitte“ klingt der Imperativ höflicher. Es kann nach dem Verb oder ganz vorne stehen." },
  { topic: "imperativ", type: "mc", q: "Du sprichst mit mehreren Kindern: „Ihr putzt die Tafel.“ Wie lautet der Imperativ?",
    options: ["Putz ihr die Tafel!", "Putzen die Tafel!", "Putzt die Tafel!", "Ihr putzt die Tafel!"], answer: 2,
    info: "Bei mehreren Personen nimmst du die Ihr-Form ohne „ihr“: Putzt die Tafel!" },

  // ---------- II. Modalverben ----------
  { topic: "modalverben", type: "multi", q: "Welche Wörter sind Modalverben?",
    options: ["müssen", "dürfen", "können", "wollen", "springen", "lachen"], answers: [0, 1, 2, 3],
    info: "Die Modalverben sind müssen, sollen, wollen, mögen, dürfen und können." },
  { topic: "modalverben", type: "mc", q: "Was verändern Modalverben in einem Satz?",
    options: ["die Rechtschreibung", "wie der Satz verstanden wird", "die Zahl der Personen", "das Satzzeichen am Ende"], answer: 1,
    info: "Modalverben verändern die Art und Weise, wie der Satz verstanden wird." },
  { topic: "modalverben", type: "match", q: "Freiwillig oder unfreiwillig? Ordne zu.",
    pairs: [
      ["müssen", "unfreiwillig"],
      ["sollen", "unfreiwillig"],
      ["wollen", "freiwillig"],
      ["mögen", "freiwillig"]
    ],
    info: "Müssen und sollen zeigen: unfreiwillig. Wollen und mögen zeigen: freiwillig." },
  { topic: "modalverben", type: "mc", q: "Vergleiche: „Ich soll den Hund ausführen.“ – „Ich möchte den Hund ausführen.“ Was ändert sich?",
    options: ["Satz 1 ist unfreiwillig, Satz 2 freiwillig.", "Satz 1 ist freiwillig, Satz 2 unfreiwillig.", "Satz 2 spielt in der Zukunft.", "Es ändert sich nichts."], answer: 0,
    info: "„sollen“ zeigt: Jemand verlangt es. „möchten“ kommt von „mögen“ und zeigt: Ich mache es gern." },
  { topic: "modalverben", type: "match", q: "Regel oder Fähigkeit? Ordne zu.",
    pairs: [
      ["Ich darf heute länger aufbleiben.", "Regel (von jemand anderem erlaubt)"],
      ["Sie kann sehr schnell rechnen.", "Fähigkeit („von mir selbst“ erlaubt)"],
      ["Wir dürfen in der Pause ins Freie.", "Regel (von jemand anderem erlaubt)"],
      ["Er kann auf einem Bein stehen.", "Fähigkeit („von mir selbst“ erlaubt)"]
    ],
    info: "„dürfen“ heißt: Jemand anderer erlaubt es. „können“ heißt: Ich bin dazu fähig." },
  { topic: "modalverben", type: "gap", q: "Welches Modalverb passt? Ergänze.",
    text: "Laut Schulregel {darf} man im Gang nicht rennen. Das hat sie gelernt: Meine Schwester {kann} schon bis zwanzig zählen. Ich freue mich: In den Ferien {will} ich zelten. Es ist Pflicht: Ich {muss} heute die Hausübung fertig machen.",
    info: "darf = Regel, kann = Fähigkeit, will = freiwillig, muss = unfreiwillig." },
  { topic: "modalverben", type: "mc", q: "Wo steht das zweite Verb in einem Aussagesatz mit Modalverb?",
    options: ["am Satzanfang, in der Personalform", "an zweiter Stelle, in der Du-Form", "am Satzende, in der Nennform", "am Satzende, im Imperativ"], answer: 2,
    info: "Das Modalverb steht an zweiter Stelle, das zweite Verb in der Nennform am Satzende." },
  { topic: "modalverben", type: "mc", q: "„Ich lese einen Krimi.“ Wie lautet der Satz mit „wollen“?",
    options: ["Ich wollen einen Krimi lesen.", "Ich lese einen Krimi wollen.", "Ich will einen Krimi liest.", "Ich will einen Krimi lesen."], answer: 3,
    info: "„will“ richtet sich nach der Person, „lesen“ steht in der Nennform am Ende." },
  { topic: "modalverben", type: "order", q: "Ordne die Wörter zu einem Aussagesatz.",
    items: ["Wir", "sollen", "einen", "Zirkel", "mitbringen."],
    info: "Das Modalverb „sollen“ steht an zweiter Stelle, „mitbringen“ am Satzende." },
  { topic: "modalverben", type: "tf", q: "„Ich muss im Garten helfen.“ und „Ich will im Garten helfen.“ bedeuten dasselbe.", answer: false,
    info: "Falsch: „muss“ zeigt unfreiwillig, „will“ zeigt freiwillig. Das Modalverb ändert, wie der Satz verstanden wird." },
  { topic: "modalverben", type: "multi", q: "Lies den Text: „Mein Onkel möchte nach Italien reisen. Dafür muss er Geld sparen. Er kann schon ein wenig Italienisch sprechen.“ Welche Wörter sind Modalverben?",
    options: ["möchte", "muss", "kann", "reisen", "sparen", "sprechen"], answers: [0, 1, 2],
    info: "Modalverben stehen hier in der Personalform: möchte, muss, kann. Die anderen Verben stehen in der Nennform." },
  { topic: "modalverben", type: "mc", q: "„Du ___ im Kino neben mir sitzen.“ Welche Form von „dürfen“ passt?",
    options: ["dürfst", "darfst", "darf", "dürfen"], answer: 1,
    info: "Es heißt: ich darf, du darfst, er darf." },
  { topic: "modalverben", type: "mc", q: "Bei welcher Satzart helfen Modalverben besonders, höflich zu sein?",
    options: ["bei Überschriften", "bei Aufzählungen", "bei Fragen", "bei Befehlen"], answer: 2,
    info: "Vor allem Fragen werden mit Modalverben höflicher." },
  { topic: "modalverben", type: "multi", q: "Du willst, dass dir jemand das Fenster aufmacht. Welche Sätze sind höflich mit Modalverb formuliert?",
    options: ["Kannst du mir das Fenster aufmachen?", "Möchtest du mir das Fenster aufmachen?", "Darf ich dich bitten, mir das Fenster aufzumachen?", "Mach das Fenster auf!", "Du machst mir das Fenster auf."], answers: [0, 1, 2],
    info: "Mit „können“, „möchten“ oder „Darf ich dich bitten …“ klingt die Frage höflich." },
  { topic: "modalverben", type: "mc", q: "„Leihst du mir dein Lineal?“ Welche höfliche Form ist richtig gebildet?",
    options: ["Darf ich dich bitten, mir dein Lineal zu leihen?", "Darf ich dich bitten, du leihst mir dein Lineal?", "Darf ich dich bitten, mir dein Lineal leihst?", "Darfst du mir dein Lineal bitten?"], answer: 0,
    info: "Nach „Darf ich dich bitten“ folgt ein Beistrich, dann steht „zu“ + Nennform am Ende." }
];
