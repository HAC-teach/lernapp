# Lernapps

Statische Lernseiten für den Unterricht. Keine Abhängigkeiten, kein Build-Schritt.

## Aufbau

Jeder Jahrgang (pro Fach) hat einen eigenen Ordner mit schwer erratbarem Namen. Die Startseite verlinkt keinen Jahrgang – die Schüler brauchen den Link von der Lehrkraft.

```
index.html                  neutrale Startseite („Link von der Lehrkraft verwenden“)
robots.txt                  Suchmaschinen aussperren
bio3-pnnstwfb/              Biologie 3. Klasse
  index.html                Kapitelübersicht
  gewaesser/                Kapitel „1. Gewässer“
    index.html              Lernkarten + Quiz
    lernen.js               Lernkarten pro Thema
    questions.js            Quizfragen
```

Link für die Schüler: `https://hac-teach.github.io/lernapp/bio3-pnnstwfb/`

## Neues Kapitel

Einen Kapitelordner kopieren (z. B. `gewaesser/`), `lernen.js` und `questions.js` anpassen und in der Kapitelübersicht des Jahrgangs einen Link ergänzen.

## Neuer Jahrgang / neues Fach

Einen neuen Ordner mit zufälligem Namen anlegen (z. B. `bio4-` + 8 zufällige Zeichen) und nur diesen Link an die Klasse weitergeben.

## Wichtig

Das ist keine echte Zugangssperre: Wer das öffentliche GitHub-Repository ansieht, sieht alle Ordner. Es verhindert nur, dass Schüler sich durch die Seite zu anderen Jahrgängen klicken oder sie per Google finden.

## Veröffentlichen

**Settings → Pages → Deploy from a branch**, Branch `main`, Ordner `/ (root)`. Lokal testen über einen kleinen HTTP-Server (nicht per `file://`).
