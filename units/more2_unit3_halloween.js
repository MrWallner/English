/* =====================================================================
   MORE! 2 – Unit 3: Halloween
   Unit-Datei für den Englisch-Lerntrainer (Format siehe ANLEITUNG_neue_Unit.md)
   ===================================================================== */
registerUnit({
  id: 'more2-u3-halloween',
  book: 'MORE! 2',
  title: 'Unit 3 – Halloween',

  // gleichwertige Schreibweisen (zusätzlich zu den eingebauten Kurzformen wie should not = shouldn't)
  normalize: [["\\bon your own\\b", "alone"]],

  /* ---------- Wortschatz ---------- */
  words: {
    costume:      {en: 'costume', de: 'Kostüm'},
    graveyard:    {en: 'graveyard', de: 'Friedhof'},
    stairs:       {en: 'stairs', de: 'Treppe'},
    frontwindow:  {en: 'front window', de: 'Vorderfenster'},
    sticker:      {en: 'sticker', de: 'Aufkleber'},
    witch:        {en: 'witch', de: 'Hexe'},
    vampire:      {en: 'vampire', de: 'Vampir'},
    ghost:        {en: 'ghost', de: 'Gespenst'},
    pumpkin:      {en: 'pumpkin', de: 'Kürbis'},
    superheroine: {en: 'superheroine', de: 'Superheldin'},
    sweets:       {en: 'sweets', de: 'Süßigkeiten', alt: ['candy']},
    bag:          {en: 'bag', de: 'Tasche'},
    knife:        {en: 'knife', de: 'Messer'},
    proud:        {en: 'proud', de: 'stolz'},
    cute:         {en: 'cute', de: 'süß, niedlich'},
    sick:         {en: 'sick', de: 'krank', alt: ['ill']},
    scared:       {en: 'scared', de: 'ängstlich, verängstigt'},
    wild:         {en: 'wild', de: 'wild', skipGen: true},
    scare:        {en: 'scare', de: 'erschrecken, Angst machen'},
    keep:         {en: 'keep', de: 'behalten, aufheben'},
    lose:         {en: 'lose', de: 'verlieren'},
    knock:        {en: 'knock', de: 'klopfen'},
    dressas:      {en: 'dress as', de: 'sich verkleiden als'},
    polite:       {en: 'polite', de: 'höflich'},
    invite:       {en: 'invite', de: 'einladen'},
    trickortreat: {en: 'trick or treat', de: 'Süßes oder Saures'},
    applebobbing: {en: 'apple bobbing', de: 'Äpfel mit dem Mund aus dem Wasser fischen (Spiel)'}
  },

  /* ---------- Typische Fehler → Hinweis (gilt für alle Schreibaufgaben dieser Unit) ---------- */
  errors: [
    {re: "\\bshouldnt\\b", hint: 'Fast! Achte auf den Apostroph: shouldn’t.'},
    {re: "\\bshould(n't)? to\\b", hint: 'Nach should / shouldn’t steht das Verb ohne „to“.'},
    {re: "\\bshould(n't)? (?!bring\\b|sing\\b|ring\\b|swing\\b)\\w+ing\\b", hint: 'Nach should steht die Grundform, nicht die -ing-Form.'},
    {re: "\\bshould(n't)? (wears|eats|goes|stays|knocks|scares|rests|watches|says|keeps|loses|tells|makes|buys|gets|plays|comes|takes|puts|helps|tries|visits|invites|brings|sits|runs|looks|finds|wants)\\b", hint: 'Nach should steht die Grundform ohne -s (z. B. wear, nicht wears).'}
  ],

  /* ---------- Lesetexte ---------- */
  readings: {
    plan: {
      title: 'The Halloween Plan',
      text: `On Friday afternoon, Mia and Leo are getting ready for Halloween. Mia wants to wear her witch costume, but she cannot find her black hat. She looks in her room and under the stairs. Leo is dressed as a vampire. He thinks his costume looks very scary, but his little sister says it is cute.

At six o’clock, their friends come to the house. They want to go trick-or-treating. Before they leave, Mia’s mum gives them some advice. “You should stay together. You shouldn’t go into a house you don’t know. And you should be polite when people give you sweets.”

At the first house, an old man opens the door. The children shout, “Trick or treat!” He gives them some sweets and smiles. Later, they see a house with pumpkins in every front window. Leo wants to knock on the door, but Mia notices a sign: “No visitors tonight.” She says, “We shouldn’t knock here.”

When they get home, Mia finds her witch hat. It was in her costume bag all the time!`,
      gloss: 'polite = höflich · notice = bemerken · sign = Schild',
      questions: [
        {q: 'Where does Mia look for her hat?', right: 'In her room and under the stairs.', wrong: ['In the garden.', 'At school.', 'In Leo’s room.'], tip: 'Lies den ersten Absatz und suche die Orte.'},
        {q: 'Leo thinks his costume is cute.', tf: false, tip: 'Leo findet sein Kostüm gruselig (scary) – nur seine Schwester findet es süß.'},
        {q: 'The old man gives the children some sweets.', tf: true, tip: 'Das steht im dritten Absatz.'},
        {q: 'Why don’t the children knock at the house with the pumpkins?', right: 'A sign says “No visitors tonight.”', wrong: ['They are too tired.', 'They have no sweets.', 'They lost their costumes.'], tip: 'Suche die Stelle mit dem Schild (sign).'},
        {q: 'Where was Mia’s hat all the time?', right: 'In her costume bag.', wrong: ['Under the stairs.', 'At the first house.', 'In the front window.'], tip: 'Die Antwort steht im letzten Satz.'}
      ]
    },
    night: {
      title: 'A Strange Night',
      text: `Sam is twelve and loves Halloween stories. This year he wants to visit the old house near the graveyard with his friend Ruby. Ruby thinks the house is scary. “We shouldn’t go there at night,” she says. “We can walk past it in the afternoon.” Sam agrees.

On Saturday, they put on their costumes. Sam is a ghost and Ruby is a superheroine. They walk up the stairs to Ruby’s front door to get a bag for their sweets. Ruby’s little brother wants to come too, but he is sick. “You should stay at home and rest,” Ruby tells him.

In the afternoon, Sam and Ruby walk past the old house. There is a pumpkin in the front window. Suddenly they hear a loud noise. Sam is scared, but Ruby sees a small cat behind the door. The cat jumps out and runs away. They both laugh.

Later, they meet their friends for apple bobbing. Sam cannot get an apple and feels upset. Ruby says, “You should try again.” This time Sam gets one. He is very proud of himself. At the end of the day, Ruby says it was her favourite Halloween.`,
      gloss: 'rest = sich ausruhen · noise = Geräusch · suddenly = plötzlich · upset = enttäuscht',
      questions: [
        {q: 'When do Sam and Ruby walk past the old house?', right: 'In the afternoon.', wrong: ['At midnight.', 'In the morning.', 'On Friday evening.'], tip: 'Ruby will nicht in der Nacht hin – lies den ersten und dritten Absatz.'},
        {q: 'Ruby’s little brother goes with them.', tf: false, tip: 'Er ist krank und soll zu Hause bleiben.'},
        {q: 'What makes the loud noise?', right: 'A cat.', wrong: ['A vampire.', 'A witch.', 'A pumpkin.'], tip: 'Lies, was Ruby hinter der Tür sieht.'},
        {q: 'Sam gets an apple on his first try.', tf: false, tip: 'Beim ersten Versuch schafft er es nicht und ist enttäuscht (upset).'},
        {q: 'Why is Sam proud at the end?', right: 'He gets an apple.', wrong: ['He finds a costume.', 'He visits the graveyard.', 'He scares Ruby.'], tip: 'Achte auf die Stelle mit apple bobbing.'}
      ]
    },
    email: {
      title: 'An Email About a Party',
      text: `Hi Alex,

I’m having a Halloween party next Saturday and I hope you can come! The party starts at five o’clock at my house. You don’t need to bring any sweets because my dad is making a big cake. But you should wear a costume. I’m going to dress as a vampire. My sister is making a witch costume, and she is very proud of it.

We want to play games in the garden, but if it rains, we can stay inside. My friend Ben wants to watch a scary film. I think we shouldn’t watch it because my little brother is only seven. We could tell funny Halloween stories instead.

Can you bring your favourite game? You should also tell me if you want to invite a friend. Please write back before Thursday so I know how many people are coming.

See you soon,
Jamie

P.S. The house with the big pumpkin in the front window is ours!`,
      gloss: 'instead = stattdessen · invite = einladen · write back = zurückschreiben',
      questions: [
        {q: 'When does the party start?', right: 'At five o’clock.', wrong: ['At four o’clock.', 'At six o’clock.', 'At seven o’clock.'], tip: 'Suche die Uhrzeit am Anfang der E-Mail.'},
        {q: 'Alex should bring some sweets.', tf: false, tip: 'Jamies Papa macht einen Kuchen – Alex muss keine Süßigkeiten mitbringen.'},
        {q: 'Why doesn’t Jamie want to watch the scary film?', right: 'Jamie’s little brother is only seven.', wrong: ['The TV is broken.', 'Jamie hates all films.', 'The party is too short.'], tip: 'Lies den Satz mit „because“.'},
        {q: 'If it rains, the children can stay inside.', tf: true, tip: 'Das steht im zweiten Absatz.'},
        {q: 'What should Alex do before Thursday?', right: 'Write back to Jamie.', wrong: ['Buy a pumpkin.', 'Make a witch costume.', 'Go to Jamie’s house.'], tip: 'Suche nach „before Thursday“.'}
      ]
    }
  },

  /* ---------- Bilder: [Emoji, x %, y %, Größe, Ebene] ---------- */
  scenes: {
    house:     {sky: 'linear-gradient(#1f2b52,#4f3f6e 75%)', ground: '#26372a', items: [['🌙',10,15,10],['🦇',78,12,6],['🦇',89,22,5],['🏚️',50,44,30,1],['🎃',50,76,13,3],['👻',15,55,14],['🧙‍♀️',85,60,16]]},
    party:     {sky: 'linear-gradient(#5a2f6e,#8a4a7a 75%)', ground: '#6b4a3a', items: [['🎈',8,16,9],['🎈',17,11,8],['🧛',24,58,21],['🦸‍♀️',47,58,21],['🎂',71,70,12],['🐈',88,74,11],['🎃',86,28,11]]},
    graveyard: {sky: 'linear-gradient(#141c38,#34355a 75%)', ground: '#1f2f22', items: [['🌕',86,15,10],['🌲',8,52,16],['🪦',22,74,11],['🪦',38,76,11],['🪦',54,74,11],['👻',38,40,13],['🧒',76,72,13],['👧',89,72,13]]}
  },

  /* ---------- Hausübungen ---------- */
  homeworks: [
    {
      title: 'Halloween Words',
      control: {words: 5},
      tasks: [
        {t: 'intro', title: 'Halloween-Wörter im Zusammenhang', text: 'Du lernst die Halloween-Wörter zuerst in Sätzen kennen. Danach schreibst du sie selbst.\n\n- Bei Auswahlaufgaben hast du **einen** Versuch – lies genau.\n- Beim Schreiben bekommst du nach einem Fehler eine Hilfe.\n- Wörter, bei denen du Fehler machst, kommen später noch einmal – in einer anderen Aufgabe.'},
        {t: 'mc', q: 'The children put on their ___ before the Halloween party.', right: 'costumes', wrong: ['stairs', 'stickers', 'knives'], why: 'costume = Kostüm. Vor der Party ziehen die Kinder ihre Kostüme an.', w: ['costume']},
        {t: 'mc', q: 'A ___ is a place with graves.', right: 'graveyard', wrong: ['front window', 'sticker', 'stairs'], why: 'graveyard = Friedhof.', w: ['graveyard']},
        {t: 'mc', q: 'The children ring the doorbell and shout: “___!”', right: 'Trick or treat', wrong: ['Apple bobbing', 'Happy birthday', 'Good night'], why: '„Trick or treat!“ = „Süßes oder Saures!“', w: ['trickortreat']},
        {t: 'mc', q: 'She can’t come to the party. She is ___ and has a bad cold.', right: 'sick', wrong: ['cute', 'proud', 'wild'], why: 'sick = krank.', w: ['sick']},
        {t: 'mc', q: 'Mia’s bedroom is on the first floor. She walks up the ___.', right: 'stairs', wrong: ['sweets', 'stickers', 'costumes'], why: 'stairs = Treppe.', w: ['stairs']},
        {t: 'match', words: ['costume', 'graveyard', 'stairs', 'sick', 'ghost', 'pumpkin']},
        {t: 'mc', q: 'You can see a big pumpkin from the street. It is in the ___ of the house.', right: 'front window', wrong: ['graveyard', 'costume', 'knife'], why: 'front window = Vorderfenster.', w: ['frontwindow']},
        {t: 'mc', q: 'Leo made his vampire costume himself. He is very ___ of it.', right: 'proud', wrong: ['sick', 'scared', 'cute'], why: 'be proud of = stolz sein auf.', w: ['proud']},
        {t: 'mc', q: 'The little ghost has big eyes and a smile. It isn’t scary – it looks ___.', right: 'cute', wrong: ['wild', 'sick', 'proud'], why: 'cute = süß, niedlich.', w: ['cute']},
        {t: 'reading', reading: 'plan'},
        {t: 'mc', q: 'Don’t eat all the sweets! ___ some for your little brother.', right: 'Keep', wrong: ['Lose', 'Scare', 'Knock'], why: 'keep = behalten, aufheben.', w: ['keep']},
        {t: 'mc', q: 'Leo hides behind the door. He wants to ___ his sister.', right: 'scare', wrong: ['keep', 'lose', 'dress'], why: 'scare = erschrecken, Angst machen.', w: ['scare']},
        {t: 'gap', q: 'The children wear Halloween ___. (Kostüme)', ans: ['costumes'], w: ['costume']},
        {t: 'gap', q: 'The old house is near the ___. (Friedhof)', ans: ['graveyard'], w: ['graveyard']},
        {t: 'gap', q: 'Leo is ___ of his vampire costume. (stolz)', ans: ['proud'], w: ['proud']},
        {t: 'pic', scene: 'house', topic: 'vocabulary', caps: false,
         q: 'Was siehst du auf dem Bild? Schreibe drei englische Wörter, durch Kommas getrennt.',
         model: 'ghost, moon, pumpkin',
         rules: [{type: 'count', res: ["\\bghosts?\\b", "\\bpumpkins?\\b", "\\bhouses?\\b", "\\bwitch(es)?\\b", "\\bbats?\\b", "\\bmoon\\b"], n: 3, hint: 'Du hast {found} passende Wörter. Du brauchst drei – achte auch auf die Rechtschreibung.'}],
         hint2: 'Schau auch auf den Himmel und links und rechts neben das Haus.'},
        {t: 'gap', q: 'Mia looks for her hat under the ___. (Treppe)', ans: ['stairs'], w: ['stairs']},
        {t: 'find', topic: 'vocabulary', sentence: 'The children are very proud *on* their costumes.', fix: ['of'], why: 'Es heißt: be proud of = stolz sein auf.', w: ['proud']},
        {t: 'match', words: ['proud', 'cute', 'scared', 'keep', 'lose', 'knock']},
        {t: 'pic', scene: 'house',
         q: 'Wo steht der Kürbis? Beschreibe seine Position im Verhältnis zum Haus in einem ganzen englischen Satz.',
         model: 'The pumpkin is in front of the house.',
         accept: ["^the pumpkin is in front of the (old |haunted )?house$"],
         rules: [{type: 'match', re: "^the pumpkin is\\b", hint: 'Beginne deinen Satz mit „The pumpkin is …“.'},
                 {type: 'match', re: "\\bthe (old |haunted )?house$", hint: 'Sag, wo der Kürbis im Verhältnis zum Haus steht – dein Satz endet mit „… the house“.'}],
         else: 'Schau noch einmal genau hin: Steht der Kürbis neben, hinter oder vor dem Haus?',
         hint2: 'in front of = vor'},
        {t: 'sent', topic: 'writing', q: 'Übersetze ins Englische: Das kleine Gespenst ist süß.', ans: ['The little ghost is cute.', 'The small ghost is cute.'], hint2: 'Satzbau: The little ghost + is + … (süß = cute)', w: ['cute']}
      ]
    },
    {
      title: 'Should or Shouldn’t?',
      control: {words: 3, nSentences: 2, sentences: [
        {de: 'Ihr solltet zusammenbleiben.', ans: ['You should stay together.']},
        {de: 'Du solltest nicht so viele Süßigkeiten essen.', ans: ["You shouldn't eat so many sweets.", "You shouldn't eat too many sweets."]},
        {de: 'Du solltest höflich sein.', ans: ['You should be polite.']},
        {de: 'Du solltest nicht allein in das alte Haus gehen.', ans: ["You shouldn't go into the old house alone.", "You shouldn't go in the old house alone."]}
      ]},
      tasks: [
        {t: 'intro', title: 'should / shouldn’t – einen Rat geben', text: 'Mit **should** gibst du einen Rat:\n*You should stay together.* = Ihr solltet zusammenbleiben.\n\nMit **shouldn’t** rätst du von etwas ab:\n*You shouldn’t go alone.* = Du solltest nicht allein gehen.\n\nNach should / shouldn’t steht das Verb in der **Grundform**: kein *to*, kein *-s*, kein *-ing*.\n✔ You should wear … ✘ You should ~~to wear~~ / ~~wears~~ / ~~wearing~~ …'},
        {t: 'mc', topic: 'grammar', q: 'It is dark and the old house is dangerous. You ___ go in alone.', right: 'shouldn’t', wrong: ['should', 'should to', 'shouldn’t to'], why: 'Es ist gefährlich – du rätst ab: shouldn’t.'},
        {t: 'mc', topic: 'grammar', q: 'Your friend is sick. What is good advice?', right: 'You should rest.', wrong: ['You shouldn’t rest.', 'You should to rest.', 'You should resting.'], why: 'should + Grundform: You should rest.'},
        {t: 'mc', topic: 'grammar', q: 'Which sentence is correct?', right: 'You should stay together.', wrong: ['You should to stay together.', 'You should staying together.', 'You should stays together.'], why: 'Nach should steht die Grundform: stay.'},
        {t: 'gap', topic: 'grammar', q: 'You ___ wear a costume to the Halloween party. It’s fun! (Rat)', ans: ['should'], tip: 'Du empfiehlst etwas.'},
        {t: 'gap', topic: 'grammar', q: 'You ___ go into a stranger’s house. (Abraten)', ans: ["shouldn't"], tip: 'Du rätst von etwas ab.'},
        {t: 'order', tiles: ['You', 'should', 'stay', 'together']},
        {t: 'find', sentence: 'You should *wears* a costume to the party.', fix: ['wear'], why: 'Nach should steht die Grundform ohne -s: wear.'},
        {t: 'mc', topic: 'grammar', q: 'The children have lots of sweets. What is good advice?', right: 'You shouldn’t eat too many sweets.', wrong: ['You should eat them all at once.', 'You shouldn’t to eat sweets.', 'You should eating sweets.'], why: 'Ein sinnvoller Rat: shouldn’t + Grundform.'},
        {t: 'mc', topic: 'grammar', q: 'What does “You shouldn’t go on your own” mean?', right: 'Du solltest nicht allein gehen.', wrong: ['Du solltest allein gehen.', 'Du darfst nie gehen.', 'Du gehst allein.'], why: 'on your own = allein.'},
        {t: 'reading', reading: 'night'},
        {t: 'gap', topic: 'grammar', q: 'Ruby’s brother is sick. He should ___ at home. (bleiben)', ans: ['stay'], tip: 'Nach should steht die Grundform.'},
        {t: 'gap', topic: 'grammar', q: 'Hold your bag! You shouldn’t ___ your sweets. (verlieren)', ans: ['lose'], w: ['lose']},
        {t: 'order', tiles: ['You', 'shouldn’t', 'scare', 'little children']},
        {t: 'find', sentence: 'You shouldn’t *going* into the old house.', fix: ['go'], why: 'Nach shouldn’t steht die Grundform: go – nicht going.'},
        {t: 'mc', topic: 'grammar', q: 'Someone gives you sweets. You ___ say “Thank you”.', right: 'should', wrong: ['shouldn’t', 'should to', 'shouldn’t to'], why: 'Sich bedanken ist ein guter Rat: should.'},
        {t: 'sent', q: 'Übersetze ins Englische: Du solltest dich ausruhen.', ans: ['You should rest.', 'You should relax.', 'You should have a rest.'],
         rules: [{type: 'notMatch', re: "\\bshouldn't\\b", hint: 'Hier gibst du einen Rat, was man tun soll – du brauchst should.'}, {type: 'match', re: "\\bshould\\b", hint: 'Verwende should.'}]},
        {t: 'sent', q: 'Übersetze ins Englische: Du solltest nicht alleine gehen.', ans: ["You shouldn't go alone."],
         rules: [{type: 'match', re: "\\bshouldn't\\b", hint: 'Hier rätst du von etwas ab – du brauchst shouldn’t.'}]},
        {t: 'sent', q: 'Dein Freund hat Fieber, möchte aber unbedingt zur Halloween-Party gehen. Gib ihm einen Rat mit shouldn’t.',
         model: "You shouldn't go to the party.",
         accept: ["^you shouldn't go (to the (halloween )?party|out|to jamie's party)( today| tonight)?$"],
         rules: [{type: 'match', re: "\\bshouldn't\\b", hint: 'Hier rätst du von etwas ab – du brauchst shouldn’t.'}],
         else: 'Was sollte dein Freund nicht tun? Beginne mit „You shouldn’t go …“.'},
        {t: 'pic', scene: 'graveyard', topic: 'grammar',
         q: 'Zwei Kinder wollen nachts allein auf den Friedhof gehen. Gib ihnen einen Rat mit shouldn’t. Schreibe einen ganzen Satz.',
         model: "You shouldn't go to the graveyard alone.",
         accept: ["^you shouldn't go (to|into|in) the graveyard( alone)?( at night)?( alone)?$", "^you shouldn't go (there |out )?alone( at night)?$", "^you shouldn't go there( at night)?$"],
         rules: [{type: 'match', re: "\\bshouldn't\\b", hint: 'Hier rätst du von etwas ab – du brauchst shouldn’t.'}],
         else: 'Was sollten die Kinder nicht tun? Beginne mit „You shouldn’t go …“.'},
        {t: 'order', tiles: ['You', 'should', 'be', 'polite']}
      ]
    },
    {
      title: 'Read, Write, Give Advice',
      control: {words: 3, nSentences: 2, sentences: [
        {de: 'Du solltest ein Kostüm tragen.', ans: ['You should wear a costume.']},
        {de: 'Wir sollten an die Tür klopfen.', ans: ['We should knock on the door.', 'We should knock at the door.']},
        {de: 'Du solltest deine Tasche nicht verlieren.', ans: ["You shouldn't lose your bag."]},
        {de: 'Du solltest Jamie einladen.', ans: ['You should invite Jamie.']}
      ]},
      tasks: [
        {t: 'intro', title: 'Lesen, schreiben, Ratschläge geben', text: 'Heute liest du eine E-Mail und verwendest die Wörter und **should / shouldn’t** in neuen Situationen.\n\nAm Ende schreibst du selbst zwei kurze Tipps.'},
        {t: 'reading', reading: 'email'},
        {t: 'match', words: ['dressas', 'knock', 'sweets', 'polite', 'witch', 'invite']},
        {t: 'mc', q: 'Leo has a black cape and big white teeth. He is dressed as a ___.', right: 'vampire', wrong: ['witch', 'ghost', 'superheroine'], why: 'vampire = Vampir.', w: ['vampire']},
        {t: 'mc', q: 'Ruby wears a cape and a mask. In the story she can fly. She is a ___.', right: 'superheroine', wrong: ['witch', 'vampire', 'graveyard'], why: 'superheroine = Superheldin.', w: ['superheroine']},
        {t: 'mc', q: 'The children try to get apples out of a bowl of water with their mouths. This game is called ___.', right: 'apple bobbing', wrong: ['trick or treat', 'hide and seek', 'dress up'], why: 'apple bobbing = Äpfel mit dem Mund aus dem Wasser fischen.', w: ['applebobbing']},
        {t: 'mc', q: 'The children run, jump and shout all evening. It is a very ___ party.', right: 'wild', wrong: ['cute', 'sick', 'polite'], why: 'wild = wild.', w: ['wild']},
        {t: 'gap', q: 'Lara wants to ___ as a witch. (sich verkleiden)', ans: ['dress'], w: ['dressas']},
        {t: 'gap', q: 'There’s no doorbell. Let’s ___ on the door! (klopfen)', ans: ['knock'], w: ['knock']},
        {t: 'gap', q: 'Mum needs a big ___ to cut the pumpkin. (Messer)', ans: ['knife'], w: ['knife']},
        {t: 'find', sentence: 'We should *knocks* on the door.', fix: ['knock'], why: 'Nach should steht die Grundform ohne -s: knock.'},
        {t: 'pic', scene: 'party',
         q: 'Wo steht der Vampir? Beschreibe seine Position im Verhältnis zur Superheldin in einem ganzen englischen Satz.',
         model: 'The vampire is next to the superheroine.',
         accept: ["^the vampire is (next to|beside) the (superheroine|super heroine|super-heroine|girl)$"],
         rules: [{type: 'match', re: "^the vampire is\\b", hint: 'Beginne deinen Satz mit „The vampire is …“.'},
                 {type: 'match', re: "\\bthe (superheroine|super heroine|super-heroine|girl)$", hint: 'Sag, wo der Vampir im Verhältnis zur Superheldin steht – dein Satz endet mit „… the superheroine“.'}],
         else: 'Schau noch einmal genau hin: Steht der Vampir vor, hinter oder neben der Superheldin?',
         hint2: 'next to = neben'},
        {t: 'sent', q: 'Dein Freund möchte zu Jamies Party gehen, hat aber kein Kostüm. Gib ihm einen Rat mit should.',
         model: 'You should make a costume.',
         rules: [{type: 'notMatch', re: "\\bshouldn't\\b", hint: 'Hier gibst du einen Rat, was man tun soll – du brauchst should.'},
                 {type: 'match', re: "^(you|we) should \\w+", hint: 'Beginne mit „You should …“.'},
                 {type: 'match', re: "costume|\\bdress (up )?as\\b", hint: 'Dein Rat soll mit einem Kostüm zu tun haben (costume) – oder mit „dress as …“.'},
                 {type: 'words', min: 4, hint: 'Schreibe einen ganzen Satz.'}]},
        {t: 'order', tiles: ['You', 'should', 'write back', 'before Thursday']},
        {t: 'sent', q: 'Deine kleine Schwester ist sechs und will einen sehr gruseligen Film schauen. Gib ihr einen Rat mit shouldn’t.',
         model: "You shouldn't watch the scary film.",
         accept: ["^(you|she) shouldn't watch\\b.*\\b(film|movie)s?\\b", "^(you|she) shouldn't watch (it|this|that)$"],
         rules: [{type: 'match', re: "\\bshouldn't\\b", hint: 'Hier rätst du von etwas ab – du brauchst shouldn’t.'}],
         else: 'Was sollte deine Schwester nicht tun? … shouldn’t watch …'},
        {t: 'pic', scene: 'party', topic: 'writing', multi: true,
         q: 'Schreibe ZWEI Sätze über das Bild. In einem Satz soll eine Ortsangabe vorkommen (in front of, next to, near). Beginne die beiden Sätze unterschiedlich.',
         model: 'The cat is next to the cake. There are two balloons in the picture.',
         rules: [{type: 'sentences', min: 2, hint: 'Schreibe zwei Sätze und beende jeden Satz mit einem Punkt.'},
                 {type: 'wordsPerSentence', min: 3, hint: 'Schreibe ganze Sätze mit mindestens drei Wörtern.'},
                 {type: 'count', res: ["\\bvampires?\\b", "\\bsuper ?-?heroines?\\b|\\bgirls?\\b", "\\bcakes?\\b", "\\bcats?\\b", "\\bpumpkins?\\b", "\\bballoons?\\b"], n: 2, hint: 'Nenne mindestens zwei verschiedene Dinge vom Bild auf Englisch (z. B. vampire, cake, cat …).'},
                 {type: 'match', re: "\\b(in front of|next to|near)\\b", hint: 'Ein Satz braucht eine Ortsangabe: in front of, next to oder near.'},
                 {type: 'eachSentence', re: "\\b(is|are|has|have|can|looks|sits|stands|wears|eats|flies)\\b", hint: 'Jeder Satz braucht ein Verb, z. B. is, are oder has.'},
                 {type: 'differentStarts', words: 2, hint: 'Beginne die beiden Sätze unterschiedlich, z. B. „The cat is …“ und „There is …“.'}]},
        {t: 'order', topic: 'picture', tiles: ['The cat', 'is', 'next to', 'the cake']},
        {t: 'open',
         q: 'Jamie bittet um Tipps für die Party. Schreibe ZWEI Sätze: einen Rat mit should und einen mit shouldn’t.',
         model: "You should play games in the garden. You shouldn't watch a scary film.",
         rules: [{type: 'sentences', min: 2, hint: 'Schreibe zwei Sätze und beende jeden Satz mit einem Punkt.'},
                 {type: 'eachSentence', re: "\\bshould", hint: 'Jeder deiner Sätze soll should oder shouldn’t enthalten.'},
                 {type: 'someSentence', re: "\\bshould\\b", hint: 'Ein Satz braucht should – ein Rat, was man tun soll.'},
                 {type: 'someSentence', re: "\\bshouldn't\\b", hint: 'Ein Satz braucht shouldn’t – wovon du abrätst.'},
                 {type: 'wordsPerSentence', min: 4, hint: 'Schreibe ganze Sätze mit mindestens vier Wörtern.'}]}
      ]
    }
  ],

  /* ---------- Zusatzaufgaben (nur wenn noch Lernzeit fehlt; minHw = ab welcher HÜ) ---------- */
  extras: [
    {t: 'mc', topic: 'grammar', minHw: 2, q: 'The sign says “No visitors”. We ___ knock on the door.', right: 'shouldn’t', wrong: ['should', 'should to', 'shouldn’t to'], why: 'Das Schild sagt „Keine Besucher“ – also shouldn’t.'},
    {t: 'mc', topic: 'grammar', minHw: 2, q: 'Your costume is great! You ___ wear it to the party.', right: 'should', wrong: ['shouldn’t', 'should to', 'shouldn’t to'], why: 'Ein guter Rat: should.'},
    {t: 'mc', topic: 'grammar', minHw: 2, q: 'The film is very scary and your brother is only six. He ___ watch it.', right: 'shouldn’t', wrong: ['should', 'shouldn’t to', 'should to'], why: 'Für einen Sechsjährigen ist der Film zu gruselig: shouldn’t.'},
    {t: 'mc', topic: 'grammar', minHw: 2, q: 'It’s cold outside. You ___ wear a warm jacket.', right: 'should', wrong: ['shouldn’t', 'should to', 'shouldn’t to'], why: 'Ein guter Rat: should.'},
    {t: 'mc', topic: 'grammar', minHw: 2, q: 'Which sentence is correct?', right: 'We shouldn’t stay out late.', wrong: ['We shouldn’t to stay out late.', 'We shouldn’t staying out late.', 'We shouldn’t stays out late.'], why: 'Nach shouldn’t steht die Grundform: stay.'},
    {t: 'find', minHw: 2, sentence: 'She should *rests* at home.', fix: ['rest'], why: 'Nach should steht die Grundform ohne -s: rest.'},
    {t: 'find', minHw: 2, sentence: 'You shouldn’t *eats* so many sweets.', fix: ['eat'], why: 'Nach shouldn’t steht die Grundform ohne -s: eat.'},
    {t: 'find', minHw: 2, sentence: 'They shouldn’t *scaring* the little children.', fix: ['scare'], why: 'Nach shouldn’t steht keine -ing-Form: scare.'},
    {t: 'find', minHw: 2, sentence: 'You should *wearing* a warm jacket.', fix: ['wear'], why: 'Nach should steht keine -ing-Form: wear.'},
    {t: 'find', topic: 'vocabulary', sentence: 'Mia looks for her hat under the *stair*.', fix: ['stairs'], why: 'Treppe heißt auf Englisch stairs – immer mit s.', w: ['stairs']},
    {t: 'sent', minHw: 2, q: 'Übersetze ins Englische: Du solltest nicht so laut sein.', ans: ["You shouldn't be so loud.", "You shouldn't be too loud."]},
    {t: 'sent', minHw: 2, q: 'Übersetze ins Englische: Ihr solltet an die Tür klopfen.', ans: ['You should knock on the door.', 'You should knock at the door.']},
    {t: 'sent', minHw: 2, q: 'Übersetze ins Englische: Du solltest kleine Kinder nicht erschrecken.', ans: ["You shouldn't scare little children.", "You shouldn't scare small children.", "You shouldn't scare young children."]},
    {t: 'sent', minHw: 2, q: 'Übersetze ins Englische: Wir sollten zusammenbleiben.', ans: ['We should stay together.']},
    {t: 'sent', minHw: 2, q: 'Übersetze ins Englische: Du solltest nicht zu spät nach Hause kommen.', ans: ["You shouldn't come home too late.", "You shouldn't come home late.", "You shouldn't get home too late.", "You shouldn't get home late."]},
    {t: 'sent', minHw: 2, q: 'Übersetze ins Englische: Ihr solltet nicht in das alte Haus gehen.', ans: ["You shouldn't go into the old house.", "You shouldn't go in the old house."]},
    {t: 'order', minHw: 2, tiles: ['You', 'should', 'knock on', 'the door']},
    {t: 'order', minHw: 2, tiles: ['We', 'shouldn’t', 'stay out', 'late']},
    {t: 'order', minHw: 2, tiles: ['You', 'should', 'keep', 'some sweets', 'for later']},
    {t: 'gap', q: 'The witch puts a ___ on the front window. (Aufkleber)', ans: ['sticker'], w: ['sticker']},
    {t: 'gap', q: 'Lara feels ___ because the film is very scary. (ängstlich)', ans: ['scared'], w: ['scared']},
    {t: 'gap', q: 'The children ring the bell and shout: “___!” (Süßes oder Saures)', ans: ['trick or treat'], w: ['trickortreat']},
    {t: 'gap', minHw: 3, q: 'Jamie wants to ___ Alex to the party. (einladen)', ans: ['invite'], w: ['invite']},
    {t: 'gap', minHw: 3, q: 'You should be ___ and say “Thank you”. (höflich)', ans: ['polite'], w: ['polite']},
    {t: 'gap', q: 'All my sweets are in my ___. (Tasche)', ans: ['bag'], w: ['bag']},
    {t: 'mc', minHw: 2, q: 'The children walk past the graveyard. What does “walk past” mean?', right: 'vorbeigehen', wrong: ['hineingehen', 'weglaufen', 'stehen bleiben'], why: 'walk past = vorbeigehen.'},
    {t: 'mc', minHw: 2, q: 'Ruby says: “You should try again.” What does she mean?', right: 'Sam should do it one more time.', wrong: ['Sam should stop now.', 'Sam should go home.', 'Sam should eat an apple.'], why: 'try again = es noch einmal versuchen.'}
  ]
});
