/* =====================================================================
   BEISPIEL – alle neuen Aufgabentypen (nur zur Vorschau auf der Lehrerseite)
   Wortschatz aus Unit 3, damit die Aufgaben vertraut wirken.
   ===================================================================== */
registerUnit({
  id: 'beispiel-aufgabentypen',
  demo: true,                      // erscheint nur auf der Lehrerseite (Vorschau), nicht bei den Links
  book: 'Beispiel',
  title: 'Neue Aufgabentypen',
  normalize: [["\\bon (her|his|your) own\\b", "alone"]],
  distract: ['to', 'wears', 'going', 'goes'],   // falsche Bausteine für die Hilfe-Stufe 3

  words: {
    costume:   {en: 'costume', de: 'Kostüm'},
    graveyard: {en: 'graveyard', de: 'Friedhof'},
    pumpkin:   {en: 'pumpkin', de: 'Kürbis'},
    witch:     {en: 'witch', de: 'Hexe'},
    ghost:     {en: 'ghost', de: 'Gespenst'},
    vampire:   {en: 'vampire', de: 'Vampir'},
    sweets:    {en: 'sweets', de: 'Süßigkeiten', alt: ['candy']},
    stairs:    {en: 'stairs', de: 'Treppe'},
    scare:     {en: 'scare', de: 'erschrecken, Angst machen'},
    polite:    {en: 'polite', de: 'höflich'}
  },

  errors: [
    {re: "\\bshouldnt\\b", hint: 'Fast! Achte auf den Apostroph: shouldn’t.'},
    {re: "\\bshould(n't)? to\\b", hint: 'Nach should / shouldn’t steht das Verb ohne „to“.'},
    {re: "\\bshould(n't)? (?!bring\\b|sing\\b|ring\\b)\\w+ing\\b", hint: 'Nach should steht die Grundform, nicht die -ing-Form.'},
    {re: "\\bshould(n't)? (wears|eats|goes|stays|knocks|scares|says|keeps|loses|makes|gets|comes|takes)\\b", hint: 'Nach should steht die Grundform ohne -s.'}
  ],

  readings: {},
  scenes: {},

  homeworks: [
    {
      title: 'Alle neuen Aufgabentypen',
      control: {words: 3},
      tasks: [
        {t: 'intro', title: 'Neue Aufgabentypen – von leicht bis schwer', text: 'Diese Beispiel-HÜ zeigt alle neuen Aufgabentypen der Reihe nach: zuerst leichte, dann mittlere, am Ende schwere.\n\n- Bei Schreibaufgaben mit Sätzen gibt es jetzt eine **Hilfe-Treppe**: 1. Fehler → Hinweis · 2. Fehler → Satzgerüst · 3. Fehler → Bausteine.\n- Probier ruhig absichtlich falsche Antworten aus, um die Hilfen zu sehen.'},

        // ---------- leicht ----------
        {t: 'odd', items: ['witch', 'ghost', 'vampire', 'sweets'], odd: 'sweets', why: 'witch, ghost und vampire sind Halloween-Figuren – sweets sind Süßigkeiten.', w: ['sweets']},
        {t: 'letters', word: 'graveyard', de: 'Friedhof', w: ['graveyard']},
        {t: 'letters', word: 'pumpkin', de: 'Kürbis', w: ['pumpkin']},

        // ---------- mittel ----------
        {t: 'sort', q: 'Guter oder schlechter Rat für Halloween?', groups: ['guter Rat 👍', 'schlechter Rat 👎'],
         items: [['You should stay together.', 0], ['You should be polite.', 0], ['You shouldn’t go into a stranger’s house.', 0],
                 ['You should eat all your sweets at once.', 1], ['You shouldn’t say “Thank you”.', 1], ['You should scare little children.', 1]],
         why: 'Ein guter Rat hilft – ein schlechter Rat bringt Ärger.'},
        {t: 'cloze', rule: 'should / shouldn’t + Grundform', title: 'Lückentext: Am Telefon',
         text: 'Mia: Hi Leo! Are you coming to the party tonight?\nLeo: Yes! But I don’t have a costume. What [should|shoulds|should to] I do?\nMia: You [should make|should to make|should makes] one. You can dress as a ghost.\nLeo: Good idea! And what about sweets?\nMia: You [shouldn’t bring|shouldn’t to bring|shouldn’t brings] any. My dad is making a big cake.'},
        {t: 'dialog', lines: ['A: Trick or treat!', 'B: Oh, hello! What great costumes!', 'A: Thank you! Can we have some sweets, please?', 'B: Of course. Here you are.', 'A: Thank you very much! Happy Halloween!']},
        {t: 'listen', say: 'costume', de: 'Kostüm', w: ['costume']},
        {t: 'listen', rule: 'should / shouldn’t + Grundform', say: 'You should stay together.', de: 'Ihr solltet zusammenbleiben.'},

        // ---------- schwer ----------
        {t: 'transform', rule: 'should / shouldn’t + Grundform', q: 'Mach den Satz verneinend (shouldn’t).', from: 'You should go into the old house.', ans: ["You shouldn't go into the old house."]},
        {t: 'transform', rule: 'should / shouldn’t + Grundform', q: 'Mach aus dem Satz eine Frage.', from: 'We should knock on the door.', ans: ['Should we knock on the door?', 'Should we knock at the door?']},
        {t: 'correct', rule: 'should / shouldn’t + Grundform', sentence: 'She should goes to the party with her friends.', n: 1, mark: ['goes'], ans: ['She should go to the party with her friends.']},
        {t: 'correct', rule: 'should / shouldn’t + Grundform', sentence: 'You shouldn’t eats so many sweet.', n: 2, mark: ['eats', 'sweet'], ans: ["You shouldn't eat so many sweets."], w: ['sweets']},
        {t: 'cloze', title: 'Lückentext zum Schreiben',
         text: 'At Halloween, children wear [[costumes]]. They knock on doors and shout “Trick or [[treat]]!” You [[should]] say “Thank you”, and you [[shouldn’t|should not]] eat all your sweets at once.', w: ['costume']},
        {t: 'sent', rule: 'should / shouldn’t + Grundform', q: 'Übersetze ins Englische: Du solltest nicht allein auf den Friedhof gehen.', ans: ["You shouldn't go to the graveyard alone.", "You shouldn't go alone to the graveyard."], w: ['graveyard']},
        {t: 'open',
         q: 'Dein Freund geht zum ersten Mal Süßes-oder-Saures sammeln. Schreibe ZWEI Tipps: einen mit should und einen mit shouldn’t.',
         model: "You should stay with your friends. You shouldn't eat all the sweets at once.",
         rules: [{type: 'sentences', min: 2, hint: 'Schreibe zwei Sätze und beende jeden Satz mit einem Punkt.'},
                 {type: 'eachSentence', re: "\\bshould", hint: 'Jeder deiner Sätze soll should oder shouldn’t enthalten.'},
                 {type: 'someSentence', re: "\\bshould\\b", hint: 'Ein Satz braucht should – ein Rat, was man tun soll.'},
                 {type: 'someSentence', re: "\\bshouldn't\\b", hint: 'Ein Satz braucht shouldn’t – wovon du abrätst.'},
                 {type: 'wordsPerSentence', min: 4, hint: 'Schreibe ganze Sätze mit mindestens vier Wörtern.'}]}
      ]
    }
  ],

  extras: [
    {t: 'odd', items: ['pumpkin', 'ghost', 'stairs', 'witch'], odd: 'stairs', why: 'stairs (Treppe) hat nichts mit Halloween zu tun.', w: ['stairs']},
    {t: 'letters', word: 'polite', de: 'höflich', w: ['polite']},
    {t: 'letters', word: 'vampire', de: 'Vampir', w: ['vampire']},
    {t: 'gap', q: 'Mia walks up the ___ to her room. (Treppe)', ans: ['stairs'], w: ['stairs']},
    {t: 'mc', rule: 'should / shouldn’t + Grundform', topic: 'grammar', q: 'Which sentence is correct?', right: 'You shouldn’t scare your sister.', wrong: ['You shouldn’t to scare your sister.', 'You shouldn’t scares your sister.', 'You shouldn’t scaring your sister.'], why: 'Nach shouldn’t steht die Grundform: scare.'},
    {t: 'transform', rule: 'should / shouldn’t + Grundform', q: 'Mach den Satz bejahend (should).', from: "You shouldn't wear a costume.", ans: ['You should wear a costume.']},
    {t: 'transform', rule: 'should / shouldn’t + Grundform', q: 'Mach den Satz verneinend (shouldn’t).', from: 'We should watch the scary film.', ans: ["We shouldn't watch the scary film."]},
    {t: 'correct', rule: 'should / shouldn’t + Grundform', sentence: 'He should to be polite.', n: 1, mark: ['to'], ans: ['He should be polite.'], w: ['polite']},
    {t: 'cloze', rule: 'should / shouldn’t + Grundform', text: 'It’s dark outside. You [shouldn’t go|shouldn’t to go|shouldn’t goes] out alone. You [should take|should taking|should takes] a torch.'},
    {t: 'sent', rule: 'should / shouldn’t + Grundform', q: 'Übersetze ins Englische: Wir sollten höflich sein.', ans: ['We should be polite.'], w: ['polite']},
    {t: 'order', rule: 'should / shouldn’t + Grundform', tiles: ['You', 'shouldn’t', 'scare', 'the cat']}
  ]
});
