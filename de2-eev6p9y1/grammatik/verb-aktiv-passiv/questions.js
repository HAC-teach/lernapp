// Fragen zu „Das Verb: Aktiv/Passiv“ (Deutsch, 2. Klasse)
// Fragetypen:
//   mc    – Multiple Choice: options[], answer = Index der richtigen Antwort
//   tf    – Richtig/Falsch: answer = true | false
//   order – Reihenfolge: items[] in der richtigen Reihenfolge (werden gemischt angezeigt)
//   match – Zuordnen: pairs[] = [[Begriff, Erklärung], ...]
//   multi – Mehrfachauswahl: options[], answers[] = Indizes ALLER richtigen Antworten
//   gap   – Lückentext: text mit {Lücken}, extra[] = zusätzliche falsche Wörter zur Auswahl
// Die Millionenshow verwendet nur mc-Fragen (mindestens 15 im Spiel).
// "info" wird nach dem Beantworten als Erklärung angezeigt.
// 15 Fragen pro Thema (wie beim Lernspiel „Modus und Modalverben“). Regeln aus dem Schulbuch, alle Beispiele selbst ausgedacht.
// Aufgabenmuster aus dem Buch: Aktiv oder Passiv zuordnen (Thema I), Sätze ins Vorgangspassiv setzen (Thema II).

const TOPICS = [
  { id: "erkennen", title: "I. Aktiv und Passiv erkennen", color: "#c9742a" },
  { id: "bilden", title: "II. Das Vorgangspassiv bilden", color: "#5a6fb8" }
];

const QUESTIONS = [
  // ---------- I. Aktiv und Passiv erkennen ----------
  { topic: "erkennen", type: "mc", q: "Was steht beim Aktiv im Mittelpunkt?",
    options: ["die handelnden Personen", "der Ort", "die Zeit", "das Satzzeichen"], answer: 0,
    info: "Beim Aktiv stehen die handelnden Personen im Mittelpunkt: Wer tut etwas?" },
  { topic: "erkennen", type: "mc", q: "Was rückt beim Passiv ins Zentrum?",
    options: ["die handelnde Person", "die Handlung oder der Zustand", "die Zukunft", "die Anrede"], answer: 1,
    info: "Beim Passiv ist wichtig, was geschieht. Wer es tut, ist nicht so wichtig." },
  { topic: "erkennen", type: "match", q: "Aktiv oder Passiv? Ordne zu.",
    pairs: [
      ["Die Kinder bauen eine Sandburg.", "Aktiv"],
      ["Danach wird die Tafel gelöscht.", "Passiv"],
      ["Meine Schwester wird morgen den Rasen mähen.", "Aktiv"],
      ["Dann streut man etwas Zimt auf den Brei.", "Aktiv"],
      ["Die Suppe wird langsam erwärmt.", "Passiv"]
    ],
    info: "Passiv: werden + Partizip II (wird gelöscht, wird erwärmt). „wird … mähen“ ist Futur I und damit Aktiv." },
  { topic: "erkennen", type: "multi", q: "Welche Sätze stehen im Passiv?",
    options: ["Die Hefte werden eingesammelt.", "Im Zoo werden die Löwen gefüttert.", "Der Hund bellt laut.", "Wir werden einen Ausflug machen.", "Das Auto wird gewaschen."], answers: [0, 1, 4],
    info: "Im Passiv steht „werden“ mit dem Partizip II: eingesammelt, gefüttert, gewaschen." },
  { topic: "erkennen", type: "tf", q: "Im Passivsatz wird das Objekt des Aktivsatzes zum Subjekt.", answer: true,
    info: "Stimmt: Die Katze jagt die Maus. → Die Maus wird gejagt." },
  { topic: "erkennen", type: "mc", q: "Was passiert im Passiv mit dem Subjekt des Aktivsatzes?",
    options: ["Es bleibt das Subjekt.", "Es wird zum Prädikat.", "Es wird zum Objekt oder fällt weg.", "Es steht immer am Satzanfang."], answer: 2,
    info: "Das Subjekt wird zum Objekt (mit „von“) oder es wird weggelassen." },
  { topic: "erkennen", type: "mc", q: "Wie heißen die zwei Arten des Passivs?",
    options: ["Vorgangspassiv und Zustandspassiv", "Aktivpassiv und Futurpassiv", "Einzahlpassiv und Mehrzahlpassiv", "Befehlspassiv und Fragepassiv"], answer: 0,
    info: "Man unterscheidet das Vorgangspassiv und das Zustandspassiv." },
  { topic: "erkennen", type: "mc", q: "Was beschreibt das Vorgangspassiv?",
    options: ["wer etwas tun will", "was morgen passiert", "wo etwas liegt", "was getan wird"], answer: 3,
    info: "Das Vorgangspassiv beschreibt, was getan wird." },
  { topic: "erkennen", type: "mc", q: "„Das Fenster wird geputzt.“ Welche zwei Wörter bilden das Passiv?",
    options: ["das + Fenster", "wird + geputzt", "Fenster + wird", "das + geputzt"], answer: 1,
    info: "„wird“ ist eine Form von „werden“, „geputzt“ ist das Partizip II." },
  { topic: "erkennen", type: "match", q: "Passiv oder Futur I? Ordne zu.",
    pairs: [
      ["Die Mauer wird gestrichen.", "Passiv"],
      ["Er wird die Mauer streichen.", "Futur I"],
      ["Die Äpfel werden gepflückt.", "Passiv"],
      ["Wir werden die Äpfel pflücken.", "Futur I"]
    ],
    info: "Passiv: werden + Partizip II (gestrichen). Futur I: werden + Nennform (streichen)." },
  { topic: "erkennen", type: "mc", q: "„Der Hund wird gebürstet.“ Wer bürstet den Hund?",
    options: ["der Hund selbst", "die Bürste", "Das steht nicht im Satz.", "niemand"], answer: 2,
    info: "Im Passiv fehlt die handelnde Person oft. Wichtig ist nur, was geschieht." },
  { topic: "erkennen", type: "tf", q: "„Die Lehrerin wird das Heft suchen.“ Dieser Satz steht im Passiv.", answer: false,
    info: "Falsch: „wird … suchen“ ist Futur I. Die Lehrerin handelt selbst, der Satz steht im Aktiv." },
  { topic: "erkennen", type: "mc", q: "„Das Paket wird vom Boten gebracht.“ Was ist das Subjekt?",
    options: ["vom Boten", "gebracht", "wird", "das Paket"], answer: 3,
    info: "Frage: Wer oder was wird gebracht? Das Paket. Der Bote ist die handelnde Person, aber nicht das Subjekt." },
  { topic: "erkennen", type: "multi", q: "Welche Wörter stehen im Partizip II?",
    options: ["gemalt", "geschrieben", "verkauft", "malen", "schreibt", "verkaufen"], answers: [0, 1, 2],
    info: "Das Partizip II beginnt oft mit ge- und endet auf -t oder -en: gemalt, geschrieben. Bei „verkauft“ fehlt das ge-." },
  { topic: "erkennen", type: "mc", q: "Mit welchem Wort nennst du im Passivsatz die handelnde Person?",
    options: ["von", "für", "mit", "ohne"], answer: 0,
    info: "Zum Beispiel: Die Maus wird von der Katze gejagt." },

  // ---------- II. Das Vorgangspassiv bilden ----------
  { topic: "bilden", type: "gap", q: "So bildest du das Vorgangspassiv. Ergänze.",
    text: "Du brauchst eine Form von {werden} und das {Partizip II}. Dabei steht „werden“ in der {Personalform}.",
    extra: ["haben", "Nennform", "Befehlsform"],
    info: "Beispiel: Der Brief wird geschrieben. „wird“ = Personalform von „werden“, „geschrieben“ = Partizip II." },
  { topic: "bilden", type: "mc", q: "„Die Fenster ___ geputzt.“ Welche Form von „werden“ passt?",
    options: ["wird", "wirst", "werden", "werdet"], answer: 2,
    info: "„Die Fenster“ ist Mehrzahl, darum heißt es: Die Fenster werden geputzt." },
  { topic: "bilden", type: "match", q: "Ordne das Partizip II zu.",
    pairs: [
      ["schreiben", "geschrieben"],
      ["essen", "gegessen"],
      ["schneiden", "geschnitten"],
      ["aufräumen", "aufgeräumt"],
      ["reparieren", "repariert"]
    ],
    info: "Das Partizip II brauchst du für jeden Passivsatz. Bei Verben auf -ieren gibt es kein ge-." },
  { topic: "bilden", type: "mc", q: "„Er hängt das Bild an die Wand.“ Wie lautet der Satz im Vorgangspassiv?",
    options: ["Das Bild wird an die Wand hängen.", "Das Bild wird an die Wand gehängt.", "Das Bild hängt an der Wand.", "Er wird das Bild an die Wand hängen."], answer: 1,
    info: "Das Objekt „das Bild“ wird zum Subjekt, dazu kommt wird + Partizip II: wird gehängt." },
  { topic: "bilden", type: "mc", q: "„Die Kinder schmücken den Baum.“ Wie lautet der Satz im Vorgangspassiv?",
    options: ["Der Baum wird von den Kindern geschmückt.", "Den Baum wird von den Kindern geschmückt.", "Der Baum werden von den Kindern geschmückt.", "Der Baum wird die Kinder schmücken."], answer: 0,
    info: "Aus „den Baum“ wird das Subjekt „der Baum“. Es ist Einzahl, darum „wird“." },
  { topic: "bilden", type: "order", q: "Ordne die Wörter zu einem Passivsatz.",
    items: ["Die", "Blumen", "werden", "jeden", "Tag", "gegossen."],
    info: "„werden“ steht an zweiter Stelle, das Partizip II „gegossen“ am Satzende." },
  { topic: "bilden", type: "mc", q: "„Wir singen heute.“ Der Satz hat kein Objekt. Wie lautet das Passiv?",
    options: ["Wir werden heute gesungen.", "Heute wird singen.", "Es werden heute singen.", "Es wird heute gesungen."], answer: 3,
    info: "Ohne Objekt gibt es im Passiv kein Subjekt. Dann steht „es“ am Satzanfang." },
  { topic: "bilden", type: "multi", q: "Welche Sätze sind Passivsätze ohne Subjekt?",
    options: ["Es wird viel gelacht.", "Im Turnsaal wird getanzt.", "Wir lachen viel.", "Es wird bald regnen."], answers: [0, 1],
    info: "Das „es“ kann am Satzanfang stehen oder ganz wegfallen. „Es wird bald regnen.“ ist Futur I." },
  { topic: "bilden", type: "mc", q: "Welches Wort kann am Anfang eines Passivsatzes ohne Subjekt stehen?",
    options: ["man", "es", "sie", "wir"], answer: 1,
    info: "Zum Beispiel: Es wird geklatscht." },
  { topic: "bilden", type: "mc", q: "„Wir müssen die Tafel löschen.“ Wie lautet der Satz im Passiv?",
    options: ["Die Tafel muss löschen werden.", "Die Tafel wird löschen müssen.", "Die Tafel muss gelöscht werden.", "Die Tafel muss gelöscht."], answer: 2,
    info: "Mit Modalverb: Modalverb + Partizip II + werden. „werden“ steht in der Nennform am Satzende." },
  { topic: "bilden", type: "mc", q: "„Die Tischlerin baut zwei Regale.“ Wie lautet der Satz im Vorgangspassiv?",
    options: ["Zwei Regale wird gebaut.", "Zwei Regale werden bauen.", "Zwei Regale sind bauen.", "Zwei Regale werden gebaut."], answer: 3,
    info: "„Zwei Regale“ ist Mehrzahl, darum „werden“. Die Tischlerin kann wegfallen." },
  { topic: "bilden", type: "tf", q: "Im Passivsatz steht das Partizip II meist am Satzende.", answer: true,
    info: "Stimmt: Das Geschenk wird schön verpackt." },
  { topic: "bilden", type: "mc", q: "„Man sperrt das Schwimmbad um 19 Uhr zu.“ Wie lautet der Satz im Vorgangspassiv?",
    options: ["Das Schwimmbad wird um 19 Uhr zugesperrt.", "Das Schwimmbad wird von man um 19 Uhr zugesperrt.", "Man wird das Schwimmbad um 19 Uhr zusperren.", "Das Schwimmbad sperrt um 19 Uhr zu."], answer: 0,
    info: "Das Wort „man“ fällt im Passiv einfach weg." },
  { topic: "bilden", type: "gap", q: "Setze die Sätze ins Vorgangspassiv. Ergänze.",
    text: "Aktiv: Der Koch schneidet das Gemüse. Passiv: Das Gemüse {wird} vom Koch {geschnitten}. Aktiv: Die Schüler sammeln die Hefte ein. Passiv: Die Hefte {werden} von den Schülern {eingesammelt}.",
    extra: ["schneidet", "einsammeln", "werdet"],
    info: "Einzahl: wird. Mehrzahl: werden. Am Satzende steht das Partizip II." },
  { topic: "bilden", type: "mc", q: "„Der Brief wird von der Oma geschrieben.“ Wie lautet der Satz im Aktiv?",
    options: ["Die Oma wird den Brief geschrieben.", "Die Oma schreibt den Brief.", "Der Brief schreibt die Oma.", "Der Brief wird die Oma schreiben."], answer: 1,
    info: "Im Aktiv steht die handelnde Person als Subjekt: Die Oma schreibt den Brief." }
];
