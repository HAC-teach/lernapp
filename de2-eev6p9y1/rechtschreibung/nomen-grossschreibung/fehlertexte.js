// Fehlertexte zu „Nomen und Großschreibung“ (Deutsch, 2. Klasse, Rechtschreibung)
// Alle Texte selbst ausgedacht. Jeder Text hat etwa 250 Wörter und genau 10 Fehler – nur Fehler aus dem Thema des Textes.
// Im Text: [falsch|richtig|Erklärung]. Absätze sind durch eine Leerzeile getrennt. Alles andere muss richtig geschrieben sein.
// topic = id aus TOPICS (questions.js), title = Überschrift, hint = Hinweis, worauf die Kinder achten sollen.
const FEHLERTEXTE = [
  // ---------- I. Nomen erkennen ----------
  { topic: "erkennen", title: "Ein Tag im Tierpark", hint: "Achte nur auf groß und klein: Nomen schreibt man groß, Verben und Adjektive klein.",
    text: `
Am Samstag fuhr unsere Klasse mit dem Zug in den Tierpark. Schon am [bahnhof|Bahnhof|der Bahnhof → Nomen] waren alle sehr aufgeregt. Unsere Lehrerin zählte uns zweimal, dann stiegen wir ein. Die Fahrt dauerte nur eine halbe Stunde. Aus dem [fenster|Fenster|das Fenster → Nomen] sahen wir Felder, kleine Dörfer und einen breiten Fluss.

Beim Eingang bekam jedes Kind einen Plan. Zuerst gingen wir zu den Affen. Ein kleiner Affe [Kletterte|kletterte|klettern ist ein Verb → klein] bis ganz nach oben und warf eine Banane auf den Boden. Wir mussten laut lachen. Danach besuchten wir die Elefanten. Der größte [elefant|Elefant|der Elefant → Nomen] spritzte mit seinem Rüssel Wasser in die Luft. Ein paar Tropfen landeten auf meiner [jacke|Jacke|die Jacke → Nomen].

Zu Mittag setzten wir uns auf eine Wiese und packten unsere Jause aus. Ich hatte ein Brot mit Käse und einen [Roten|roten|rot ist ein Adjektiv → klein] Apfel dabei. Plötzlich kam eine freche Ente und stahl meinem [freund|Freund|der Freund → Nomen] ein Stück Semmel. Er war zuerst böse, aber dann lachte er auch.

Am Nachmittag sahen wir noch die Löwen. Sie lagen faul in der [sonne|Sonne|die Sonne → Nomen] und schliefen. Nur ein junger Löwe spielte mit einem alten Ball. Im Streichelzoo durften wir die Ziegen füttern. Eine Ziege knabberte sogar an meinem [rucksack|Rucksack|der Rucksack → Nomen]. Das fand ich lustig.

Am Abend waren wir müde, aber glücklich. Im Zug schliefen einige Kinder sofort ein. Zu Hause erzählte ich meiner [familie|Familie|die Familie → Nomen] alles von diesem schönen Tag. In der Nacht träumte ich von einem Affen, der mit mir in die Schule ging und neben mir in der Bank saß.` },

  { topic: "erkennen", title: "Der verschwundene Schlüssel", hint: "Achte nur auf groß und klein: Nomen schreibt man groß, Verben und Adjektive klein.",
    text: `
Gestern war bei uns große Aufregung. Meine Mutter suchte ihren [schlüssel|Schlüssel|der Schlüssel → Nomen] und konnte ihn nirgends finden. Zuerst schaute sie in ihre Tasche, dann in alle Laden in der [küche|Küche|die Küche → Nomen]. Mein Vater kroch sogar unter das Sofa. Dort fand er aber nur einen alten Socken und zwei Münzen.

Ich wollte helfen und suchte in meinem Zimmer. Unter dem [bett|Bett|das Bett → Nomen] lagen ein Buch, ein Lineal und viel Staub. Der Schlüssel war nicht dabei. Meine kleine Schwester [Lachte|lachte|lachen ist ein Verb → klein] die ganze Zeit. Das kam mir komisch vor. Ich fragte sie, ob sie etwas wisse. Sie schüttelte nur den Kopf und lief in den [garten|Garten|der Garten → Nomen].

Dort saß unser Hund vor seiner Hütte. Er wedelte mit dem Schwanz und bellte [Laut|laut|laut ist ein Adjektiv → klein]. Ich ging näher hin und schaute in die Hütte. Auf seiner [decke|Decke|die Decke → Nomen] lagen ein Knochen, ein Schuh von meinem Vater und der Schlüssel! Unser Hund sammelt nämlich alles, was auf dem Boden liegt.

Ich rannte ins [haus|Haus|das Haus → Nomen] und rief die ganze Familie. Meine Mutter war sehr froh. Sie gab mir einen Kuss auf die Stirn und dem Hund trotzdem ein Stück [wurst|Wurst|die Wurst → Nomen]. Mein Vater holte seinen Schuh und schimpfte ein bisschen. Dann musste er aber selbst lachen.

Seit diesem Tag hängt der Schlüssel an einem Haken neben der Tür. Der Haken ist so hoch, dass kein Hund ihn erreichen kann. Meine Schwester hat später zugegeben, dass sie alles gesehen hat. Zur [strafe|Strafe|die Strafe → Nomen] musste sie eine Woche lang den Tisch decken. Der Hund bekam einen neuen Ball. Jetzt trägt er hoffentlich nur noch sein eigenes Spielzeug in die Hütte.` },

  // ---------- II. Typische Nomenendungen ----------
  { topic: "endungen", title: "Unsere Klassenzeitung", hint: "Achte auf die Endungen: -ung, -heit, -keit, -schaft, -nis und -tum machen ein Wort zum Nomen. Wörter auf -ig, -lich und -isch sind Adjektive.",
    text: `
In unserer Klasse gibt es seit dem Herbst eine eigene Zeitung. Die Idee kam von einer [mannschaft|Mannschaft|Endung -schaft → Nomen] aus vier Kindern, die gerne schreiben. Am Anfang gab es eine lange [besprechung|Besprechung|Endung -ung → Nomen]. Jedes Kind durfte seine Meinung sagen. Die Entscheidung war nicht leicht, aber am Ende waren alle zufrieden.

Jede Woche gibt es nun eine neue [überraschung|Überraschung|Endung -ung → Nomen]. Einmal stand in der Zeitung ein Bericht über die [freundschaft|Freundschaft|Endung -schaft → Nomen] zwischen zwei Hunden. Ein anderes Mal ging es um die Gesundheit und um gutes Essen in der Pause. Besonders [Lustig|lustig|Endung -ig → Adjektiv, klein] war ein Rätsel, bei dem man ein Geheimnis lösen musste. Die Lösung stand erst in der nächsten Ausgabe.

Für die Zeitung braucht man viel Geduld. Zuerst sammeln wir Ideen. Dann schreibt jede Gruppe ihren Text. Dabei ist [genauigkeit|Genauigkeit|Endung -keit → Nomen] wichtig, denn Fehler sollen nicht in der Zeitung stehen. Zum Schluss prüft noch jemand die Rechtschreibung. Das ist manchmal ein [hindernis|Hindernis|Endung -nis → Nomen], weil niemand diese Aufgabe gerne macht.

Die [erfahrung|Erfahrung|Endung -ung → Nomen] zeigt, dass es gemeinsam besser geht. Wer gut zeichnen kann, macht die Bilder. Wer [Neugierig|neugierig|Endung -ig → Adjektiv, klein] ist, stellt Fragen und führt ein Gespräch mit einer Lehrerin oder mit dem Schulwart. So hat jedes Kind eine Aufgabe.

Vor den Ferien planen wir eine große Ausgabe mit vielen Seiten. Darin soll es um die [vergangenheit|Vergangenheit|Endung -heit → Nomen] unserer Schule gehen. Wir suchen alte Fotos und fragen Leute, die früher hier gelernt haben. Das ist ein Erlebnis für die ganze Klasse. Vielleicht entsteht daraus sogar eine Ausstellung im Schulhaus. Der Reichtum an Ideen ist auf jeden Fall groß.` },

  { topic: "endungen", title: "Die Wanderung", hint: "Achte auf die Endungen: -ung, -heit, -keit, -schaft, -nis und -tum machen ein Wort zum Nomen. Wörter auf -ig, -lich und -isch sind Adjektive.",
    text: `
Am letzten Schultag vor den Ferien machte unsere Klasse eine [wanderung|Wanderung|Endung -ung → Nomen]. Schon in der Früh war die Stimmung gut. Die Lehrerin gab uns eine kurze Erklärung zum Weg, dann gingen wir los. Zuerst führte der Weg durch eine kleine [ortschaft|Ortschaft|Endung -schaft → Nomen]. Die [freundlichkeit|Freundlichkeit|Endung -keit → Nomen] der Leute dort fiel uns sofort auf, denn alle grüßten uns.

Nach einer Stunde kamen wir in den Wald. Hier war es kühl und [Schattig|schattig|Endung -ig → Adjektiv, klein]. Die Dunkelheit zwischen den hohen Bäumen fand ich ein bisschen unheimlich. An einer Kreuzung wussten wir nicht weiter. Ein Schild fehlte, und die Karte war ungenau. Das war ein echtes [ärgernis|Ärgernis|Endung -nis → Nomen]. Zum Glück kannte ein Bub die richtige Richtung.

Zu Mittag erreichten wir eine Hütte. Dort gab es als [belohnung|Belohnung|Endung -ung → Nomen] Suppe und Saft für alle. Die [müdigkeit|Müdigkeit|Endung -keit → Nomen] war schnell vergessen. Von der Hütte hatten wir eine [Herrliche|herrliche|Endung -lich → Adjektiv, klein] Aussicht auf das Tal. Die Landschaft sah aus wie auf einem Gemälde. Ein Mädchen machte viele Fotos als Erinnerung.

Am Nachmittag passierte noch ein kleines Missgeschick. Ein Bub rutschte auf einem nassen Stein aus. Zur Sicherheit schaute die Lehrerin sein Knie genau an. Es war aber keine Verletzung zu sehen, und er konnte weitergehen. Seine [tapferkeit|Tapferkeit|Endung -keit → Nomen] wurde von allen gelobt.

Beim Abstieg sangen wir Lieder. Die Gemeinschaft in der Klasse war an diesem Tag besonders stark. Unten im Tal wartete schon der Bus. Auf der Heimfahrt war es sehr ruhig, weil viele Kinder schliefen. Für mich war dieser Ausflug ein tolles [erlebnis|Erlebnis|Endung -nis → Nomen]. In meinem Zeugnis stand eine gute Note, aber die Wanderung hat mir noch mehr Freude gemacht.` },

  // ---------- III. Verben und Adjektive als Nomen ----------
  { topic: "nominal", title: "Mein Wochenende", hint: "Achte auf Verben und Adjektive: Nach das, beim, zum, vom oder nach etwas, nichts, viel werden sie zu Nomen. Sonst bleiben sie klein.",
    text: `
Am Wochenende war bei uns viel los. Am Samstag weckte mich das laute [singen|Singen|das Singen → Verb als Nomen] der Vögel schon um sechs Uhr. Ich wollte eigentlich noch schlafen, aber das ging nicht mehr. Also stand ich auf und half meinem Vater beim [kochen|Kochen|beim = bei dem → Nomen]. Er machte Palatschinken, und ich durfte den Teig rühren. Das Rühren war anstrengend, aber es hat sich gelohnt.

Nach dem Frühstück fuhren wir an den See. Meine Schwester kann sehr gut [Schwimmen|schwimmen|Sie kann schwimmen: hier ein Verb → klein]. Ich finde das Tauchen viel spannender. Unter Wasser sah ich etwas [glänzendes|Glänzendes|etwas + Adjektiv → Nomen]. Es war leider nur eine alte Dose. Beim Spielen am Ufer bauten wir dann eine große Burg aus Sand.

Zum [essen|Essen|zum = zu dem → Nomen] gingen wir in ein Gasthaus. Dort gab es viel [gutes|Gutes|viel + Adjektiv → Nomen]: Schnitzel, Nudeln und Eis. Mein Bruder erzählte einen Witz, und wir mussten alle [Lachen|lachen|Wir mussten lachen: hier ein Verb → klein]. Vom vielen Lachen tat mir sogar der Bauch weh.

Am Sonntag regnete es. Wir blieben zu Hause und räumten den Keller auf. Dabei fanden wir nichts [besonderes|Besonderes|nichts + Adjektiv → Nomen], nur alte Schachteln. Das [aufräumen|Aufräumen|das Aufräumen → Verb als Nomen] dauerte trotzdem drei Stunden. Danach waren wir müde.

Am Abend spielten wir Karten. Das Mischen übernahm meine Mutter, weil sie das am besten kann. Mein Vater wollte unbedingt gewinnen. Beim Zählen der Punkte machte er aber einen Fehler. Am Ende gewann meine Schwester. Das [schönste|Schönste|das Schönste → Adjektiv als Nomen] an diesem Wochenende war aber, dass wir alle zusammen waren. Am Montag gibt es in der Schule sicher wieder viel zu lernen. Ich freue mich trotzdem schon auf das nächste Wochenende.` },

  { topic: "nominal", title: "Der Sporttag", hint: "Achte auf Verben und Adjektive: Nach das, beim, zum, vom oder nach etwas, nichts, viel, alles werden sie zu Nomen. Sonst bleiben sie klein.",
    text: `
Morgen ist an unserer Schule Sporttag. Alle freuen sich schon auf das [laufen|Laufen|das Laufen → Verb als Nomen], das Springen und das Werfen. Unsere Klasse hat lange geübt. Beim [üben|Üben|beim = bei dem → Nomen] ist am Anfang viel schiefgegangen. Einmal fiel sogar der ganze Stapel mit den Hütchen um.

Ich bin für den Staffellauf eingeteilt. Dabei muss man schnell [Rennen|rennen|Man muss rennen: hier ein Verb → klein] und den Stab gut übergeben. Das Übergeben ist das Schwierige daran. Wenn der Stab hinunterfällt, verliert man viel Zeit. Unser Turnlehrer sagt, dass man zum [gewinnen|Gewinnen|zum = zu dem → Nomen] vor allem Ruhe braucht.

Meine Freundin macht beim Weitsprung mit. Sie kann sehr weit [Springen|springen|Sie kann springen: hier ein Verb → klein]. Im Training hat sie etwas [neues|Neues|etwas + Adjektiv → Nomen] ausprobiert, und es hat gut geklappt. Jetzt hofft sie auf eine Medaille. Ein Bub aus unserer Klasse macht beim Werfen mit. Wir wünschen ihm alles [gute|Gute|alles + Adjektiv → Nomen].

Am Sporttag gibt es auch eine Jause. Die Eltern bringen viel [leckeres|Leckeres|viel + Adjektiv → Nomen] mit: Kuchen, Obst und Saft. Nach dem Essen geht es weiter. Das lange [warten|Warten|das Warten → Verb als Nomen] zwischen den Bewerben ist leider ein bisschen langweilig. Wir vertreiben uns die Zeit mit Singen und Klatschen.

Am Ende werden die Sieger geehrt. Für mich ist das Gewinnen aber nicht das [wichtigste|Wichtigste|das Wichtigste → Adjektiv als Nomen]. Viel schöner ist es, gemeinsam zu spielen und zu lachen. Beim Anfeuern bin ich immer besonders laut. Im letzten Jahr war ich danach ganz heiser. Meine Mutter hat gesagt, ich soll heuer weniger schreien. Das wird mir aber schwerfallen. Hoffentlich scheint morgen die Sonne, denn bei Regen findet alles im Turnsaal statt. Dort ist zu wenig Platz zum Laufen.` }
];
