# Englisch-Lerntrainer – Anleitung

## Teil 1: Einmal einrichten (ca. 15 Minuten)

Der Lerntrainer besteht aus:

- `index.html` – das Programm (wird nie mehr verändert, außer der Unit-Liste ganz oben)
- `units/` – ein Ordner mit einer Datei pro Unit, z. B. `units/more2_unit3_halloween.js`

**Online stellen mit GitHub Pages (kostenlos):**

1. Auf github.com ein kostenloses Konto anlegen.
2. Oben rechts **+ → New repository**, Name z. B. `englisch`, **Public**, „Create repository“.
3. **Add file → Upload files**: `index.html` und den Ordner `units` hineinziehen → „Commit changes“.
4. **Settings → Pages** → bei „Branch“ `main` und `/ (root)` wählen → Save.
5. Nach 1–2 Minuten erscheint dort deine Adresse, z. B. `https://deinname.github.io/englisch/`.

**Deine Lehrerseite:** dieselbe Adresse mit `?lehrer=1` am Ende öffnen.
Dort findest du:
- **für jede Hausübung einen eigenen Link** mit Kopieren-Knopf – diesen Link stellst du in die jeweilige edhu-Aufgabe. Wer ihn öffnet, sieht nur diese eine HÜ.
- ein Feld **Abgabefrist** pro HÜ: Datum und Uhrzeit wählen, dann ändert sich der Link automatisch. Für eine andere Klasse mit anderer Frist einfach ein anderes Datum wählen und neu kopieren. Nur Links von der Lehrerseite funktionieren – wer die Frist in der Adresse ändert, macht den Link ungültig.
- ob alle Units fehlerfrei sind,
- die **Vorschau** jeder HÜ (ohne Zeitvorgabe, nichts wird gespeichert),
- die Kontrolle von **Prüfzeichen**.

Die Adresse ohne Zusatz zeigt den Kindern nur den Hinweis, den Link der Lehrkraft zu verwenden.

**Pausieren:** Mit **⏸ Pause** speichern die Kinder ihren Stand, die Uhr bleibt stehen. Später öffnen sie denselben Link auf demselben Gerät und machen genau dort weiter. Achtung: Auf iPad/iPhone (Safari) kann ein Stand verloren gehen, wenn die Seite länger als 7 Tage nicht geöffnet wurde – Fristen von höchstens einer Woche sind deshalb ideal.

**Was die Kinder am Ende abgeben:** eine Ergebniskarte (Screenshot) mit einem dieser Köpfe:
- **✓ Hausübung erledigt** – 100 %, mit Lernstand aus der Lernkontrolle
- **⏹ Vorzeitig beendet** – das Kind hat über „Hausübung beenden“ selbst abgeschlossen; die Karte zeigt den erreichten Prozentwert
- **⏰ Frist abgelaufen** – nicht fertig geworden; nach Fristende wird automatisch mit dem erreichten Prozentwert abgeschlossen

Nach Fristende kann niemand mehr starten oder weitermachen, die eigene Ergebniskarte bleibt aber abrufbar. Hinweis: Die Frist wird mit der Uhr des Geräts geprüft. Datum und Uhrzeit auf der Karte sind durch das Prüfzeichen geschützt – eine verspätete Abgabe ist also sichtbar.

**Datenschutz:** Die Seite sendet nichts ins Internet. Fortschritt und Ergebnisse liegen nur im Browser des Kindes. Zu dir kommen sie ausschließlich als Screenshot über edhu.

---

## Teil 2: Eine neue Unit hinzufügen

1. **Fotografiere die Seiten der Unit**: Wortliste (Vocabulary), Grammatik-Kasten, wichtige Texte/Übungen.
2. Öffne einen neuen Chat mit Claude, lade **diese Anleitung**, **die Unit-3-Datei als Beispiel** und **die Fotos** hoch und schreibe:

   > Erstelle aus diesen Buchseiten eine neue Unit-Datei für meinen Englisch-Lerntrainer. Halte dich genau an das Format und die Qualitätsregeln in ANLEITUNG.md, Teil 3. Die Datei für Unit 3 ist das Muster. Klasse: 2. Klasse Mittelschule/AHS, Buch: MORE! 2. Drei Hausübungen à ca. 10–12 Minuten.

3. Die fertige Datei (z. B. `more2_unit4_food.js`) auf GitHub in den Ordner `units` hochladen.
4. In `index.html` ganz oben in der Liste `units:` eine Zeile ergänzen – **neueste Unit zuerst**:
   ```js
   units: [
     'units/more2_unit4_food.js',
     'units/more2_unit3_halloween.js'
   ],
   ```
5. Lehrerseite (`?lehrer=1`) öffnen: Dort muss **✓ Datei in Ordnung** stehen. Dann jede HÜ einmal in der Vorschau durchklicken.

Steht dort ⚠, kopiere die Fehlermeldungen in den Chat und lass die Datei korrigieren.

---

## Teil 3: Format und Qualitätsregeln (für die KI, die die Unit erstellt)

### Grundgerüst

```js
registerUnit({
  id: 'more2-u4-food',            // eindeutig, nur a–z, 0–9, Bindestrich – NIE nachträglich ändern
  book: 'MORE! 2',
  title: 'Unit 4 – Food',
  normalize: [["\\bon your own\\b", "alone"]],   // optional: gleichwertige Formulierungen
  words: { … },
  errors: [ … ],
  readings: { … },
  scenes: { … },
  homeworks: [ {title, control, tasks:[…]}, … ],  // meist 3
  extras: [ … ]
});
```

Eingebaut (muss nicht angegeben werden): Groß-/Kleinschreibung, Satzzeichen am Ende, iPad-Apostroph (’) und Kurzformen wie *should not = shouldn't, do not = don't, cannot = can't* werden automatisch gleich behandelt.

### words – Wortschatz der Unit
```js
words: {
  costume: {en: 'costume', de: 'Kostüm'},
  sweets:  {en: 'sweets', de: 'Süßigkeiten', alt: ['candy']},   // alt = ebenfalls richtig
  wild:    {en: 'wild', de: 'wild', skipGen: true}             // skipGen: nicht automatisch abfragen (z. B. gleich auf Deutsch)
}
```
Wörter, die in Aufgaben vorkommen, werden über `w: ['costume']` verknüpft. Das steuert Wiederholungen, Zusatzaufgaben und die Lernkontrolle. Abgefragt werden automatisch nur Wörter, die in dieser oder einer früheren HÜ schon vorkamen.

### errors – typische Fehler der Grammatik dieser Unit
Regulärer Ausdruck (auf die kleingeschriebene Antwort) + Hinweis auf Deutsch.
```js
errors: [
  {re: "\\bshould(n't)? to\\b", hint: 'Nach should / shouldn’t steht das Verb ohne „to“.'}
]
```

### readings – Lesetexte
```js
readings: {
  plan: {
    title: 'The Halloween Plan',
    text: `…`,                      // Absätze mit Leerzeile
    gloss: 'polite = höflich · sign = Schild',
    questions: [
      {q: 'Where does Mia look for her hat?', right: 'In her room …', wrong: ['…','…','…'], tip: 'Lies den ersten Absatz.'},
      {q: 'Leo thinks his costume is cute.', tf: false, tip: 'Leo findet sein Kostüm gruselig …'}
    ]
  }
}
```

### scenes – Bilder aus Emojis
`[Emoji, x in %, y in %, Größe, Ebene]`. Höhere Ebene = weiter vorne (für „in front of“).
```js
scenes: { house: {sky: 'linear-gradient(#1f2b52,#4f3f6e 75%)', ground: '#26372a', items: [['🏚️',50,44,30,1],['🎃',50,76,13,3]]} }
```

### Aufgabentypen
Jede Aufgabe hat `t` (Typ). Optional `topic` ('vocabulary' | 'grammar' | 'reading' | 'picture' | 'writing') und `w` (Wort-ids).

| Typ | Felder | Hinweis |
|---|---|---|
| `intro` | `title`, `text` | Text: **fett**, *kursiv*, ~~durchgestrichen~~, Listen mit „- “, Leerzeile = Absatz |
| `mc` | `q`, `right`, `wrong` (3), `why` | ein Versuch; Reihenfolge wird gemischt |
| `gap` | `q` (mit ___ und deutschem Wort in Klammern), `ans` (Liste), `tip` | Hilfen in Stufen |
| `match` | `words` (4–6 Wort-ids) | Englisch ↔ Deutsch zuordnen |
| `order` | `tiles` (richtige Reihenfolge) | wird gemischt; ein Versuch |
| `find` | `sentence` mit genau einem `*falschen*` Wort, `fix` (Liste), `why` | Fehler antippen, dann richtig schreiben |
| `reading` | `reading` (id) | Fragen kommen aus `readings` |
| `sent` | `q`, entweder `ans` (Liste) oder `accept` (Muster) oder nur `rules`; `model`; optional `hint2`, `else` | Satz schreiben |
| `pic` | wie `sent` + `scene`; `multi: true` für mehrere Sätze | Bildaufgabe |
| `open` | `q`, `rules`, `model` | freies Schreiben (mehrere Sätze) |

**Wie Schreibaufgaben geprüft werden:**
- `ans`: Liste richtiger Lösungen (exakter Vergleich, siehe „eingebaut“).
- `accept`: Liste von regulären Ausdrücken auf die kleingeschriebene Antwort ohne Schlusspunkt, z. B. `"^you shouldn't go (to the )?party$"`.
- `rules`: Bedingungen. Gibt es weder `ans` noch `accept`, ist die Antwort richtig, wenn **alle** Regeln erfüllt sind (und kein `errors`-Treffer). Sonst liefern die Regeln nur die Hinweise.
  - `{type:'match', re, hint}` – muss vorkommen
  - `{type:'notMatch', re, hint}` – darf nicht vorkommen
  - `{type:'count', res:[…], n, hint}` – mindestens n der Muster (im Hinweis ersetzt `{found}` die Anzahl)
  - `{type:'sentences', min, hint}` · `{type:'words', min, hint}` · `{type:'wordsPerSentence', min, hint}`
  - `{type:'eachSentence', re, hint}` · `{type:'someSentence', re, hint}` · `{type:'differentStarts', words:2, hint}`
- `else`: Hinweis, wenn keine Regel greift. `hint2`: zweite Hilfestufe (sonst automatisch der Satzanfang von `model`). Nach dem 3. Fehlversuch wird `model` gezeigt.

### control – Lernkontrolle am Ende jeder HÜ
```js
control: {words: 3, nSentences: 2, sentences: [{de: 'Ihr solltet zusammenbleiben.', ans: ['You should stay together.']}]}
```
Wörter werden automatisch gewählt (zuerst die mit Fehlern). Ergebnis = Lernstand auf der Karte.

### extras – Zusatzaufgaben
Gleiche Aufgabentypen. `minHw: 2` = erst ab HÜ 2 (z. B. Grammatik, die erst in HÜ 2 eingeführt wird). Grammatik-Extras (`topic` grammar, `sent`, `find`, `order`) werden auch als Wiederholung nach Grammatikfehlern verwendet. Mindestens 20 Stück.

### Qualitätsregeln
1. **Aufbau jeder HÜ:** Intro → Erkennen (mc, match) → Lesen → selbst Schreiben (gap, find, sent) → Anwenden (pic, open). 18–24 Aufgaben, ca. 10–12 Minuten.
2. **HÜ 1** Wortschatz, **HÜ 2** Grammatik der Unit, **HÜ 3** Lesen/Schreiben/Anwenden. Keine Aufgabe wortgleich in zwei HÜs.
3. **Ablenker (wrong)** müssen grammatisch passen und plausibel sein, aber eindeutig falsch. Keine Ablenker, die auch richtig sein könnten.
4. **Lesetexte selbst neu schreiben** (ca. 150–200 Wörter, Niveau der Unit). **Keine Texte aus dem Buch abschreiben** – die Seite ist öffentlich im Internet.
5. Jede Lesefrage hat einen `tip`, der sagt, *wo* im Text die Antwort steht.
6. Schreibaufgaben: alle sinnvollen richtigen Varianten in `ans`/`accept` aufnehmen. `model` muss die eigene Prüfung bestehen.
7. Hinweise immer auf Deutsch, freundlich, ohne die Lösung direkt zu verraten.
8. Nur Wortschatz und Grammatik verwenden, die bis zu dieser Unit im Buch vorkommt.
9. Zum Schluss prüfen: Jede `w`-id existiert in `words`, jede `reading`- und `scene`-id existiert, Regex-Zeichen sind in JavaScript-Strings verdoppelt (`\\b`).
