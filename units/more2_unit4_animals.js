/* =====================================================================
   MORE! 2 – Unit 4: Animals
   Unit-Datei für den Englisch-Lerntrainer (Format siehe ANLEITUNG.md)
   Grammatik: Komparativ, Superlativ, as … as / not as … as
   Lesetexte sind selbst geschrieben (nicht aus dem Buch).
   ===================================================================== */
registerUnit({
  id: 'more2-u4-animals',
  book: 'MORE! 2',
  title: 'Unit 4 – Animals',

  normalize: [["\\bisn't as\\b", "is not as"], ["\\baren't as\\b", "are not as"], ["\\bwasn't as\\b", "was not as"]],

  // falsche Bausteine für die Hilfe-Stufe 3 (typische Verwechslungen)
  distract: ['than', 'as', 'more', 'most', 'the', 'then'],

  /* ---------- Wortschatz ---------- */
  words: {
    // Tiere (Word File)
    giraffe:    {en: 'giraffe', de: 'Giraffe'},
    antelope:   {en: 'antelope', de: 'Antilope'},
    chimpanzee: {en: 'chimpanzee', de: 'Schimpanse'},
    bat:        {en: 'bat', de: 'Fledermaus'},
    rhino:      {en: 'rhino', de: 'Nashorn'},
    cheetah:    {en: 'cheetah', de: 'Gepard'},
    dolphin:    {en: 'dolphin', de: 'Delfin'},
    whale:      {en: 'whale', de: 'Wal'},
    mosquito:   {en: 'mosquito', de: 'Stechmücke, Gelse'},
    pigeon:     {en: 'pigeon', de: 'Taube'},
    parrot:     {en: 'parrot', de: 'Papagei'},
    ostrich:    {en: 'ostrich', de: 'Strauß (Vogel)'},
    anaconda:   {en: 'anaconda', de: 'Anakonda', skipGen: true},
    crocodile:  {en: 'crocodile', de: 'Krokodil'},
    // Adjektive
    hairy:      {en: 'hairy', de: 'haarig, stark behaart'},
    heavy:      {en: 'heavy', de: 'schwer'},
    dangerous:  {en: 'dangerous', de: 'gefährlich'},
    strong:     {en: 'strong', de: 'stark'},
    clever:     {en: 'clever', de: 'klug'},
    fast:       {en: 'fast', de: 'schnell'},
    smart:      {en: 'smart', de: 'schlau'},
    intelligent:{en: 'intelligent', de: 'intelligent', skipGen: true},
    powerful:   {en: 'powerful', de: 'mächtig, kräftig'},
    venomous:   {en: 'venomous', de: 'giftig'},
    incredible: {en: 'incredible', de: 'unglaublich'},
    // Wortliste
    ago:        {en: 'ago', de: 'vor (zeitlich, z. B. vor zwei Tagen)'},
    farmer:     {en: 'farmer', de: 'Bauer, Bäuerin'},
    human:      {en: 'human', de: 'Mensch'},
    female:     {en: 'female', de: 'weiblich; Weibchen'},
    male:       {en: 'male', de: 'männlich; Männchen'},
    nobody:     {en: 'nobody', de: 'niemand'},
    scientist:  {en: 'scientist', de: 'Wissenschaftler/in'},
    dieout:     {en: 'die out', de: 'aussterben'},
    less:       {en: 'less', de: 'weniger'},
    carry:      {en: 'carry', de: 'tragen'},
    desert:     {en: 'desert', de: 'Wüste'},
    die:        {en: 'die', de: 'sterben'},
    mammal:     {en: 'mammal', de: 'Säugetier'},
    weigh:      {en: 'weigh', de: 'wiegen'},
    length:     {en: 'length', de: 'Länge'},
    speed:      {en: 'speed', de: 'Geschwindigkeit'},
    reason:     {en: 'reason', de: 'Grund'},
    share:      {en: 'share', de: 'teilen'},
    luck:       {en: 'luck', de: 'Glück (Glück haben)'},
    forever:    {en: 'forever', de: 'für immer'},
    protect:    {en: 'protect', de: 'beschützen, schützen'},
    truck:      {en: 'truck', de: 'Lastwagen'},
    ton:        {en: 'ton', de: 'Tonne (1000 kg)'},
    climatechange: {en: 'climate change', de: 'Klimawandel'}
  },

  /* ---------- Typische Fehler → Hinweis ---------- */
  errors: [
    {re: "\\b(more|most) (?!clever\\b)\\w+(er|est)\\b", hint: 'Entweder -er/-est oder more/most – nie beides (z. B. bigger, nicht more bigger).'},
    {re: "\\b(gooder|goodest|badder|baddest|bader|badest|worser|worsest|bestest|more good|most good|more bad|most bad)\\b", hint: 'Ausnahmen: good – better – the best, bad – worse – the worst.'},
    {re: "\\b(biger|bigest|hoter|hotest|fater|fatest|thiner|thinest|sader|sadest)\\b", hint: 'Achtung Schreibweise: Der letzte Buchstabe wird verdoppelt – big, bigger, the biggest.'},
    {re: "\\b(heavy|angry|hungry|happy|hairy|funny|easy|busy|ugly|tidy|lazy|noisy|pretty|dirty|sunny|crazy|early)(er|est)\\b", hint: 'Bei Adjektiven auf -y wird y zu i: heavy – heavier – the heaviest.'},
    {re: "\\b(dangerous|intelligent|powerful|interesting|beautiful|colourful|incredible|venomous|difficult|expensive|important)(er|est)\\b", hint: 'Lange Adjektive steigerst du mit more / the most: more dangerous, the most dangerous.'},
    {re: "\\b((?!clever\\b|never\\b)\\w+er|more \\w+|less \\w+) as\\b", hint: 'Nach einem Vergleich mit -er oder more steht than, nicht as.'},
    {re: "\\b(\\w+er|more \\w+) then\\b", hint: 'Fast! „als“ heißt than (mit a) – then heißt „dann“.'},
    {re: "\\bas \\w+ than\\b", hint: 'Bei as … as steht zweimal as – nicht than.'},
    {re: "\\b(is|are|was|were) (most \\w+|(?!honest\\b)\\w+est|best|worst)\\b", hint: 'Beim Superlativ steht the davor: the biggest, the most dangerous, the best.'},
    {re: "\\b(bringed|buyed|catched|teached|thinked|fighted|sleeped|feeled|spended|leaved|losed|builded|bended)\\b", hint: 'Das ist ein unregelmäßiges Verb – schau in der Verbliste nach (z. B. bring – brought).'},
    {re: "\\b(brougth|bougth|caugth|taugth|thougth|fougth|brougt|bougt|caugt|taugt|thougt)\\b", hint: 'Achtung Schreibweise: brought, bought, caught, taught, thought – immer mit „ght“.'}
  ],

  /* ---------- Lesetexte ---------- */
  readings: {
    zoo: {
      title: 'A Day at the Zoo',
      imgs: ['units/bilder/u4-giraffe.jpg', 'units/bilder/u4-anaconda.jpg', 'units/bilder/u4-chimpanzee.jpg'],
      text: `Last Saturday, Emma and her grandpa went to the zoo. First, they visited the giraffes. “Look how tall they are!” said Emma. Next to the giraffes, there was a big grey rhino. It was very heavy, and Grandpa said it was also very strong.

Then they went to the reptile house. Behind thick glass, there was a long green anaconda and a crocodile with sharp teeth. “Crocodiles are dangerous,” said Grandpa. “Never put your hand near the water!”

After lunch, they watched the chimpanzees. One chimpanzee was very hairy and very clever. It opened a box with a stick and found some fruit inside. A scientist told them that chimpanzees are very intelligent animals.

At the end of the day, Emma bought a small toy parrot in the zoo shop. “That was a great day!” she said.`,
      gloss: 'tall = groß (Körpergröße) · sharp teeth = scharfe Zähne · stick = Stock · toy = Spielzeug',
      questions: [
        {q: 'What did Emma and her grandpa visit first?', right: 'The giraffes.', wrong: ['The crocodiles.', 'The chimpanzees.', 'The zoo shop.'], tip: 'Lies den ersten Absatz.'},
        {q: 'The rhino was small and weak.', tf: false, tip: 'Das Nashorn war schwer (heavy) und stark (strong) – erster Absatz.'},
        {q: 'Where did they see the anaconda?', right: 'In the reptile house.', wrong: ['Next to the giraffes.', 'In the zoo shop.', 'Near the chimpanzees.'], tip: 'Lies den zweiten Absatz.'},
        {q: 'How did the chimpanzee get the fruit?', right: 'It opened a box with a stick.', wrong: ['A scientist gave it the fruit.', 'It took the fruit from Emma.', 'It found the fruit in the water.'], tip: 'Lies den dritten Absatz.'},
        {q: 'Emma bought a toy parrot.', tf: true, tip: 'Das steht im letzten Absatz.'}
      ]
    },
    olympics: {
      title: 'The Animal Olympics',
      text: `Every year, the animals in the forest have their own Olympics. This year, Cheetah, Ostrich, Elephant and Chimpanzee took part.

The first event was a race. Ostrich was fast, but Cheetah was faster. “Nobody is faster than me!” Cheetah shouted. Elephant was much slower than the others, but he didn’t care.

The second event was weightlifting. Chimpanzee lifted a big piece of wood, but Elephant lifted a whole tree! He was much stronger than the others. Cheetah was weaker than Chimpanzee and couldn’t lift anything.

The last event was a puzzle. The animals had to open a box with a banana inside. Cheetah and Ostrich tried for twenty minutes, but they couldn’t open it. Chimpanzee opened the box in two minutes. “Chimpanzees are more intelligent than cheetahs,” he laughed.

In the end, everybody got a medal. “Who is the winner?” asked Ostrich. “All of us,” said Elephant. “We are all good at different things.”`,
      gloss: 'take part = teilnehmen · race = Wettrennen · weightlifting = Gewichtheben · whole = ganz · weak = schwach',
      questions: [
        {q: 'Who won the race?', right: 'Cheetah.', wrong: ['Ostrich.', 'Elephant.', 'Chimpanzee.'], tip: 'Zweiter Absatz: Wer war schneller als Ostrich?'},
        {q: 'Elephant was stronger than Chimpanzee.', tf: true, tip: 'Dritter Absatz: Elephant lifted a whole tree.'},
        {q: 'Cheetah was stronger than Chimpanzee.', tf: false, tip: 'Dritter Absatz: Cheetah was weaker than Chimpanzee.'},
        {q: 'How long did Chimpanzee need to open the box?', right: 'Two minutes.', wrong: ['Twenty minutes.', 'Ten minutes.', 'One hour.'], tip: 'Lies den vierten Absatz.'},
        {q: 'What does Elephant say at the end?', right: 'All animals are good at different things.', wrong: ['Elephant is the winner.', 'Cheetah is the winner.', 'Nobody got a medal.'], tip: 'Lies den letzten Absatz.'}
      ]
    },
    records: {
      title: 'Animal Record Breakers',
      imgs: ['units/bilder/u4-whale.jpg', 'units/bilder/u4-cheetah.jpg', 'units/bilder/u4-giraffe.jpg'],
      text: `Which animal is the biggest, the fastest or the most dangerous? Here are some amazing animal records.

The blue whale is the biggest and heaviest animal in the world. It can be 30 metres long and weigh up to 150 tons – that is heavier than 20 elephants!

The cheetah is the fastest land animal. It can run more than 100 km/h, but only for a short time. An antelope is not as fast as a cheetah, but it can run for much longer.

The giraffe is the tallest animal. Some giraffes are almost six metres tall.

And the most dangerous animal? It isn’t the crocodile or the shark. It is the small mosquito! Mosquitoes carry malaria, and every year hundreds of thousands of people die from it.

The ostrich is the biggest bird in the world, but it can’t fly. It also lays the biggest eggs of all birds.`,
      gloss: 'amazing = erstaunlich · record = Rekord · land animal = Landtier · lay eggs = Eier legen',
      questions: [
        {q: 'How heavy can a blue whale be?', right: 'Up to 150 tons.', wrong: ['Up to 30 tons.', 'Up to 20 tons.', 'Up to 100 kilograms.'], tip: 'Lies den zweiten Absatz.'},
        {q: 'An antelope is as fast as a cheetah.', tf: false, tip: 'Dritter Absatz: An antelope is not as fast as a cheetah.'},
        {q: 'A cheetah can run fast for a long time.', tf: false, tip: 'Dritter Absatz: … but only for a short time.'},
        {q: 'Which animal is the most dangerous?', right: 'The mosquito.', wrong: ['The crocodile.', 'The shark.', 'The cheetah.'], tip: 'Lies den fünften Absatz.'},
        {q: 'What is special about the ostrich?', right: 'It is the biggest bird, but it can’t fly.', wrong: ['It is the fastest animal in the world.', 'It is the smallest bird.', 'It can fly very high.'], tip: 'Lies den letzten Absatz.'}
      ]
    },
    friendship: {
      title: 'Farmer and Rhino: An Incredible Friendship',
      imgs: ['units/bilder/u4-farmer.jpg', 'units/bilder/u4-rhino.jpg'],
      text: `KENYA – Eight years ago, farmer Joseph found a baby rhino near his field. Its mother was dead, and the little rhino was very weak. “I couldn’t leave it there,” Joseph says. “It needed help.”

He carried the baby rhino to his house and gave it milk every three hours. He even slept next to it in the barn. He called her Bahati – that means “luck” in Swahili.

Today, Bahati weighs more than two tons. She is much bigger and stronger than Joseph, but she still follows him like a dog. Every morning, they walk around the farm together.

“People think rhinos are dangerous,” Joseph says. “But Bahati is gentle. I wanted to show her that not all humans are bad.” Rhinos are in danger because some people kill them for their horns. Now Joseph wants to protect other rhinos, too.

“Bahati is my best friend,” he says. “We will be friends forever.”`,
      gloss: 'baby rhino = Nashornbaby · barn = Stall · gentle = sanft · horn = Horn',
      questions: [
        {q: 'When did Joseph find the baby rhino?', right: 'Eight years ago.', wrong: ['Two years ago.', 'Last week.', 'Eighteen years ago.'], tip: 'Die Antwort steht im ersten Satz.'},
        {q: 'Joseph left the baby rhino near the field.', tf: false, tip: 'Zweiter Absatz: He carried the baby rhino to his house.'},
        {q: 'What does the name Bahati mean?', right: 'Luck.', wrong: ['Friend.', 'Strong.', 'Forever.'], tip: 'Lies das Ende des zweiten Absatzes.'},
        {q: 'Today Bahati is bigger than Joseph.', tf: true, tip: 'Dritter Absatz: much bigger and stronger than Joseph.'},
        {q: 'Why are rhinos in danger?', right: 'Some people kill them for their horns.', wrong: ['They have no food.', 'Farmers don’t like them.', 'It is too hot in Kenya.'], tip: 'Lies den vierten Absatz.'}
      ]
    },
    dodo: {
      title: 'The Dodo – Gone Forever',
      text: `Have you ever heard of the dodo? It was a big bird that lived on Mauritius, a small island in the Indian Ocean. Dodos were about one metre tall and weighed about 15 kilograms.

Dodos couldn’t fly. They lived on the ground and built their nests there. For a long time, they had no enemies, so they were not afraid of anything.

In 1598, sailors from Europe came to the island. They brought dogs, pigs, cats and rats with them. These animals caught the dodos and ate their eggs. The sailors hunted the birds, too.

About 80 years later, the last dodo died. Nobody knows exactly when. Today, scientists can only learn about dodos from old pictures and bones.

The dodo is a famous example of an animal that died out. Its story shows us that humans must protect animals – before it is too late.`,
      gloss: 'island = Insel · enemy = Feind · sailor = Seemann · hunt = jagen · bones = Knochen',
      questions: [
        {q: 'Where did the dodo live?', right: 'On a small island in the Indian Ocean.', wrong: ['In a desert in Africa.', 'In a forest in Europe.', 'In the sea near Australia.'], tip: 'Lies den ersten Absatz.'},
        {q: 'Dodos could fly very well.', tf: false, tip: 'Zweiter Absatz: Dodos couldn’t fly.'},
        {q: 'What did the animals from the ships do?', right: 'They caught the dodos and ate their eggs.', wrong: ['They protected the dodos.', 'They built nests for the dodos.', 'They brought food for the dodos.'], tip: 'Lies den dritten Absatz.'},
        {q: 'Scientists know the exact year when the last dodo died.', tf: false, tip: 'Vierter Absatz: Nobody knows exactly when.'},
        {q: 'What does the dodo’s story show us?', right: 'Humans must protect animals.', wrong: ['Dodos were dangerous.', 'Sailors were good friends of the dodos.', 'All birds can fly.'], tip: 'Lies den letzten Satz.'}
      ]
    }
  },

  /* ---------- Bilder: [Emoji, x %, y %, Größe, Ebene] – nur ältere Emojis, die auf allen Geräten funktionieren ---------- */
  scenes: {
    savanna: {sky: 'linear-gradient(#7ec8f0,#d6eef9 75%)', ground: '#c9a35a', items: [['🌞',88,14,10],['🌳',12,48,22,1],['🦒',32,50,26,2],['🐘',63,58,24,2],['🦏',87,72,15,3],['🐊',52,88,13,4],['🐍',14,86,10,3]]},
    compare:  {sky: 'linear-gradient(#bfe3c4,#e9f6ea 75%)', ground: '#7fb36a', items: [['🌳',85,45,18,1],['🐘',32,56,34,2],['🐁',68,84,9,3]]}
  },

  /* ---------- Hausübungen ---------- */
  homeworks: [
    /* ===== HÜ 1 – Wortschatz ===== */
    {
      title: 'Animals and Adjectives',
      control: {words: 5},
      tasks: [
        {t: 'intro', title: 'Tiere und Adjektive', text: 'Heute lernst du die Tiere der Unit und Adjektive, mit denen du Tiere beschreibst.\n\n- Bei Auswahlaufgaben hast du **einen** Versuch – lies genau.\n- Beim Schreiben bekommst du Hilfen, wenn es nicht gleich klappt.\n- Wörter, bei denen du Fehler machst, kommen später noch einmal – in einer anderen Aufgabe.'},
        {t: 'match', words: ['giraffe', 'cheetah', 'dolphin', 'whale', 'ostrich', 'crocodile']},
        {t: 'odd', items: ['dolphin', 'whale', 'bat', 'parrot'], odd: 'parrot', why: 'dolphin, whale und bat sind Säugetiere (mammals) – parrot ist ein Vogel.', w: ['parrot']},
        {t: 'sort', q: 'Zu welcher Tiergruppe gehört jedes Tier?', groups: ['mammals', 'birds', 'reptiles', 'insects'],
         items: [['giraffe', 0], ['bat', 0], ['chimpanzee', 0], ['ostrich', 1], ['pigeon', 1], ['parrot', 1], ['anaconda', 2], ['crocodile', 2], ['mosquito', 3]],
         why: 'Die Fledermaus (bat) kann fliegen, ist aber ein Säugetier.', w: ['bat', 'chimpanzee', 'pigeon', 'mosquito']},
        {t: 'mc', q: 'A ___ is a big grey animal with a horn on its nose.', right: 'rhino', wrong: ['giraffe', 'chimpanzee', 'dolphin'], why: 'rhino = Nashorn.', w: ['rhino']},
        {t: 'mc', q: 'This insect is very small, but it can carry malaria. It is a ___.', right: 'mosquito', wrong: ['pigeon', 'bat', 'parrot'], why: 'mosquito = Stechmücke, Gelse.', w: ['mosquito']},
        {t: 'mc', img: 'units/bilder/u4-antelope.jpg', q: 'Welches Tier ist das?', right: 'antelope', wrong: ['cheetah', 'giraffe', 'chimpanzee'], why: 'antelope = Antilope.', w: ['antelope']},
        {t: 'letters', img: 'units/bilder/u4-cheetah.jpg', word: 'cheetah', de: 'Gepard', w: ['cheetah']},
        {t: 'match', words: ['hairy', 'heavy', 'strong', 'dangerous', 'fast', 'powerful']},
        {t: 'pic', scene: 'savanna', topic: 'vocabulary', caps: false,
         q: 'Welche Tiere siehst du auf dem Bild? Schreibe drei Tiere auf Englisch, durch Kommas getrennt.',
         model: 'giraffe, elephant, rhino',
         rules: [{type: 'count', res: ["\\bgiraffes?\\b", "\\belephants?\\b", "\\brhinos?\\b", "\\bcrocodiles?\\b", "\\bsnakes?\\b|\\banacondas?\\b"], n: 3, hint: 'Du hast {found} passende Tiere. Du brauchst drei – achte auch auf die Rechtschreibung.'}],
         hint2: 'Schau auch ganz unten ins Bild – dort liegen zwei Tiere am Boden.'},
        {t: 'reading', reading: 'zoo'},
        {t: 'gap', img: 'units/bilder/u4-ostrich.jpg', q: 'An ___ is a big bird, but it cannot fly. (Strauß)', ans: ['ostrich'], w: ['ostrich']},
        {t: 'gap', q: 'Be careful! Crocodiles are very ___. (gefährlich)', ans: ['dangerous'], w: ['dangerous']},
        {t: 'gap', q: 'My dog has got lots of fur. It is very ___. (haarig)', ans: ['hairy'], w: ['hairy']},
        {t: 'listen', say: 'chimpanzee', de: 'Schimpanse', w: ['chimpanzee']},
        {t: 'cloze', title: 'Lückentext: Tier-Steckbriefe',
         text: 'Dolphins can learn tricks. They are very [intelligent|hairy|venomous] animals.\nA rhino weighs more than two tons. It is very [heavy|smart|female].\nSome snakes can kill other animals with poison. They are [venomous|hairy|intelligent].\nA [bat|pigeon|parrot] is a mammal, but it can fly.',
         why: 'Lies jeden Satz bis zum Ende – der zweite Teil verrät dir das passende Wort.', w: ['venomous', 'heavy', 'bat']},
        {t: 'find', topic: 'vocabulary', sentence: 'A cheetah can run very *fat*.', fix: ['fast'], why: 'fast = schnell. fat = dick.', w: ['fast']},
        {t: 'sent', topic: 'writing', q: 'Übersetze ins Englische: Ein Gepard ist sehr schnell.', ans: ['A cheetah is very fast.', 'The cheetah is very fast.'], w: ['cheetah', 'fast']},
        {t: 'open',
         imgs: ['units/bilder/u4-rhino.jpg', 'units/bilder/u4-giraffe.jpg', 'units/bilder/u4-parrot.jpg'],
         q: 'Beschreibe ein Tier in ZWEI Sätzen (wie es aussieht oder was es kann) – z. B. eines von den Bildern. Verwende mindestens ein Adjektiv aus der Unit.',
         model: 'A rhino is very heavy. It has got a horn on its nose.',
         rules: [{type: 'sentences', min: 2, hint: 'Schreibe zwei Sätze und beende jeden Satz mit einem Punkt.'},
                 {type: 'count', res: ["\\b(giraffes?|antelopes?|chimpanzees?|bats?|rhinos?|cheetahs?|dolphins?|whales?|mosquito(e)?s?|pigeons?|parrots?|ostrich(es)?|anacondas?|crocodiles?)\\b"], n: 1, hint: 'Nenne ein Tier aus der Unit (z. B. cheetah, rhino, dolphin …).'},
                 {type: 'count', res: ["\\b(small|big|hairy|heavy|dangerous|strong|clever|fast|smart|intelligent|powerful|venomous|incredible|tall|long)\\b"], n: 1, hint: 'Verwende ein Adjektiv aus der Unit, z. B. heavy, fast, dangerous, hairy …'},
                 {type: 'eachSentence', re: "\\b(is|are|can|has|have|lives|live|eats|eat|runs|run|got)\\b", hint: 'Jeder Satz braucht ein Verb, z. B. is, can oder has got.'},
                 {type: 'wordsPerSentence', min: 4, hint: 'Schreibe ganze Sätze mit mindestens vier Wörtern.'}]}
      ]
    },

    /* ===== HÜ 2 – Komparativ ===== */
    {
      title: 'Bigger, Faster, Stronger',
      control: {words: 3, nSentences: 2, sentences: [
        {de: 'Ein Wal ist größer als ein Delfin.', ans: ['A whale is bigger than a dolphin.']},
        {de: 'Ein Krokodil ist gefährlicher als ein Papagei.', ans: ['A crocodile is more dangerous than a parrot.']},
        {de: 'Mein Hund ist schwerer als meine Katze.', ans: ['My dog is heavier than my cat.']},
        {de: 'Heute ist das Wetter schlechter als gestern.', ans: ['Today the weather is worse than yesterday.', 'The weather is worse today than yesterday.', 'Today the weather is worse than it was yesterday.']}
      ]},
      tasks: [
        {t: 'intro', title: 'Komparativ – zwei Dinge vergleichen', text: 'Wenn du zwei Dinge vergleichst, verwendest du den **Komparativ** und **than** (= als).\n\n- Kurze Adjektive: **-er** anhängen – *fast → faster*: A cheetah is **faster than** an ostrich.\n- Achtung Schreibweise: *big → bigger, hot → hotter* (Buchstabe verdoppeln) · *heavy → heavier* (y wird zu i)\n- Lange Adjektive: **more** davor – *dangerous → more dangerous*\n- Ausnahmen: *good → better, bad → worse*\n\nNie beides: ✘ ~~more bigger~~ · und nach dem Vergleich steht **than**, nicht ~~as~~ oder ~~then~~.'},
        {t: 'mc', rule: 'Steigerung: -er/-est oder more/most', topic: 'grammar', q: 'A whale is ___ than a dolphin.', right: 'bigger', wrong: ['biger', 'more big', 'big'], why: 'big → bigger: Der letzte Buchstabe wird verdoppelt.'},
        {t: 'sort', rule: 'Steigerung: -er/-est oder more/most', topic: 'grammar', q: 'Wie wird das Adjektiv gesteigert?', groups: ['mit -er', 'mit more'],
         items: [['fast', 0], ['heavy', 0], ['small', 0], ['strong', 0], ['dangerous', 1], ['intelligent', 1], ['powerful', 1], ['interesting', 1]],
         why: 'Kurze Adjektive (eine Silbe oder -y am Ende) bekommen -er, lange Adjektive more.'},
        {t: 'mc', rule: 'Schreibweise: bigger, heavier, the biggest', topic: 'grammar', q: 'An ostrich is ___ than a pigeon.', right: 'heavier', wrong: ['heavyer', 'more heavy', 'heavyier'], why: 'heavy → heavier: Das y wird zu i.'},
        {t: 'gap', imgs: ['units/bilder/u4-cheetah.jpg', 'units/bilder/u4-antelope.jpg'], rule: 'Steigerung: -er/-est oder more/most', topic: 'grammar', q: 'A cheetah is ___ than an antelope. (fast)', ans: ['faster'], tip: 'Kurzes Adjektiv: -er anhängen.'},
        {t: 'gap', imgs: ['units/bilder/u4-rhino.jpg', 'units/bilder/u4-chimpanzee.jpg'], rule: 'Schreibweise: bigger, heavier, the biggest', topic: 'grammar', q: 'A rhino is ___ than a chimpanzee. (heavy)', ans: ['heavier'], tip: 'Achte auf das y am Ende.'},
        {t: 'gap', rule: 'Schreibweise: bigger, heavier, the biggest', topic: 'grammar', q: 'In Africa, it is ___ than in Austria. (hot)', ans: ['hotter'], tip: 'Kurzes Wort mit einem Selbstlaut: Buchstabe verdoppeln.'},
        {t: 'order', rule: 'Steigerung: -er/-est oder more/most', tiles: ['A crocodile', 'is', 'more dangerous', 'than', 'a parrot']},
        {t: 'find', rule: 'Schreibweise: bigger, heavier, the biggest', sentence: 'An elephant is *heavyer* than a rhino.', fix: ['heavier'], why: 'heavy → heavier: Das y wird zu i.'},
        {t: 'reading', reading: 'olympics'},
        {t: 'cloze', rule: 'Steigerung: -er/-est oder more/most', title: 'Lückentext: Mein Haustier ist …',
         text: 'Ben: My dog is [bigger|more big|biger] than your cat.\nLisa: Yes, but my cat is [cleverer|more clever as|clever] than your dog!\nBen: No way! My dog is [more intelligent|intelligenter|more intelligenter] than all the cats in the street.\nLisa: OK, but my parrot can talk. It’s [better|gooder|more good] than both of them!',
         why: 'Kurz: -er · lang: more · Ausnahme: good → better.'},
        {t: 'mc', rule: 'good – better – best / bad – worse – worst', topic: 'grammar', q: 'My English is good, but Lisa’s English is even ___.', right: 'better', wrong: ['gooder', 'more good', 'best'], why: 'Ausnahme: good → better.'},
        {t: 'gap', rule: 'good – better – best / bad – worse – worst', topic: 'grammar', q: 'The weather today is bad, but yesterday it was even ___. (bad)', ans: ['worse'], tip: 'Ausnahme – ein ganz neues Wort.'},
        {t: 'transform', rule: 'Steigerung: -er/-est oder more/most', q: 'Mach aus den zwei Sätzen EINEN Satz mit einem Vergleich (… than …).', from: 'A dolphin is fast. A whale is not so fast.', imgs: ['units/bilder/u4-dolphin.jpg', 'units/bilder/u4-whale.jpg'], ans: ['A dolphin is faster than a whale.', 'A whale is slower than a dolphin.'], model: 'A dolphin is faster than a whale.'},
        {t: 'transform', rule: 'Steigerung: -er/-est oder more/most', q: 'Mach aus den zwei Sätzen EINEN Satz mit einem Vergleich (… than …).', from: 'A mosquito is dangerous. A pigeon is not very dangerous.', imgs: ['units/bilder/u4-mosquito.jpg', 'units/bilder/u4-pigeon.jpg'], ans: ['A mosquito is more dangerous than a pigeon.', 'A pigeon is less dangerous than a mosquito.'], model: 'A mosquito is more dangerous than a pigeon.'},
        {t: 'correct', rule: 'Steigerung: -er/-est oder more/most', sentence: 'An elephant is more heavy as a rhino.', n: 2, mark: ['more', 'heavy', 'as'], ans: ['An elephant is heavier than a rhino.']},
        {t: 'sent', rule: 'Steigerung: -er/-est oder more/most', q: 'Übersetze ins Englische: Ein Gepard ist schneller als ein Strauß.', ans: ['A cheetah is faster than an ostrich.', 'The cheetah is faster than the ostrich.'], w: ['cheetah', 'ostrich']},
        {t: 'open',
         q: 'Vergleiche Tiere in ZWEI Sätzen. In jedem Satz soll ein Vergleich mit than vorkommen. Verwende verschiedene Adjektive.',
         model: 'A whale is bigger than a dolphin. A dolphin is more intelligent than a crocodile.',
         rules: [{type: 'sentences', min: 2, hint: 'Schreibe zwei Sätze und beende jeden Satz mit einem Punkt.'},
                 {type: 'eachSentence', re: "\\b(\\w+er|more \\w+|less \\w+) than\\b", hint: 'Jeder Satz braucht einen Vergleich mit than, z. B. bigger than oder more dangerous than.'},
                 {type: 'differentStarts', words: 3, hint: 'Vergleiche in den beiden Sätzen verschiedene Tiere oder verwende verschiedene Adjektive.'},
                 {type: 'wordsPerSentence', min: 5, hint: 'Schreibe ganze Sätze, z. B. „A whale is bigger than a dolphin.“'}]}
      ]
    },

    /* ===== HÜ 3 – Superlativ und as … as ===== */
    {
      title: 'The Biggest and the Best',
      control: {words: 3, nSentences: 2, sentences: [
        {de: 'Der Gepard ist das schnellste Tier.', ans: ['The cheetah is the fastest animal.']},
        {de: 'Ein Delfin ist so klug wie ein Schimpanse.', ans: ['A dolphin is as intelligent as a chimpanzee.', 'A dolphin is as smart as a chimpanzee.', 'A dolphin is as clever as a chimpanzee.']},
        {de: 'Das ist der schlechteste Film.', ans: ['This is the worst film.', 'That is the worst film.', 'This is the worst movie.', 'That is the worst movie.']},
        {de: 'Eine Taube ist nicht so schnell wie ein Gepard.', ans: ['A pigeon is not as fast as a cheetah.']}
      ]},
      tasks: [
        {t: 'intro', title: 'Superlativ und as … as', text: 'Mit dem **Superlativ** sagst du, wer am größten, schnellsten … ist. Davor steht immer **the**.\n\n- Kurze Adjektive: **the …-est** – *the fastest, the biggest, the heaviest*\n- Lange Adjektive: **the most** – *the most dangerous*\n- Ausnahmen: *the best, the worst*\n\nMit **as … as** sagst du, dass zwei gleich sind: *A dolphin is **as** intelligent **as** a chimpanzee.*\nMit **not as … as** sagst du, dass sie nicht gleich sind: *A pigeon is **not as** fast **as** a cheetah.*'},
        {t: 'mc', rule: 'Schreibweise: bigger, heavier, the biggest', topic: 'grammar', q: 'The blue whale is ___ animal in the world.', right: 'the biggest', wrong: ['the bigest', 'the most big', 'bigger'], why: 'big → the biggest: the + verdoppelter Buchstabe + -est.'},
        {t: 'odd', rule: 'Steigerung: -er/-est oder more/most', topic: 'grammar', q: 'Welche Form passt nicht zu den anderen?', items: ['bigger', 'faster', 'the strongest', 'heavier'], odd: 'the strongest', why: 'bigger, faster und heavier sind Komparative (zwei vergleichen) – the strongest ist ein Superlativ.'},
        {t: 'sort', rule: 'Steigerung: -er/-est oder more/most', topic: 'grammar', q: 'Komparativ oder Superlativ?', groups: ['Komparativ', 'Superlativ'],
         items: [['faster', 0], ['the fastest', 1], ['more dangerous', 0], ['the most dangerous', 1], ['better', 0], ['the best', 1], ['worse', 0], ['the worst', 1]],
         why: 'Komparativ = zwei vergleichen (than) · Superlativ = der/die/das …ste (the).'},
        {t: 'gap', img: 'units/bilder/u4-cheetah.jpg', rule: 'Steigerung: -er/-est oder more/most', topic: 'grammar', q: 'The cheetah is ___ land animal in the world. (fast)', ans: ['the fastest'], tip: 'Superlativ: the + Adjektiv + -est.'},
        {t: 'gap', rule: 'Steigerung: -er/-est oder more/most', topic: 'grammar', q: 'The mosquito is ___ animal in the world. (dangerous)', ans: ['the most dangerous'], tip: 'Langes Adjektiv: the most + Adjektiv.'},
        {t: 'mc', rule: 'good – better – best / bad – worse – worst', topic: 'grammar', q: 'Lisa scores a lot of goals. She is ___ player in our team.', right: 'the best', wrong: ['the goodest', 'the most good', 'the better'], why: 'Ausnahme: good → better → the best.'},
        {t: 'cloze', rule: 'as … as / not as … as', title: 'Lückentext: Gleich oder nicht gleich?',
         text: 'An antelope is fast, but it is not [as fast as|faster as|as fast than] a cheetah.\nA dolphin is [as intelligent as|as intelligent than|intelligenter as] a chimpanzee – both are very clever.\nA pigeon is not [as heavy as|heavier as|as heavier as] an ostrich.',
         why: 'as + Grundform + as – nie than und nie -er dazwischen.'},
        {t: 'order', rule: 'as … as / not as … as', tiles: ['A pigeon', 'is not', 'as fast as', 'a cheetah']},
        {t: 'reading', reading: 'records'},
        {t: 'listen', rule: 'Steigerung: -er/-est oder more/most', say: 'The giraffe is the tallest animal in the world.', de: 'Die Giraffe ist das größte Tier der Welt.'},
        {t: 'transform', rule: 'as … as / not as … as', q: 'Sag mit as … as, dass beide gleich sind. Schreibe EINEN Satz.', from: 'A dolphin is intelligent. A chimpanzee is intelligent, too.', imgs: ['units/bilder/u4-dolphin.jpg', 'units/bilder/u4-chimpanzee.jpg'], ans: ['A dolphin is as intelligent as a chimpanzee.', 'A chimpanzee is as intelligent as a dolphin.'], model: 'A dolphin is as intelligent as a chimpanzee.'},
        {t: 'transform', rule: 'as … as / not as … as', q: 'Sag mit not as … as, dass die beiden nicht gleich sind. Schreibe EINEN Satz.', from: 'A pigeon is small. An ostrich is much bigger.', imgs: ['units/bilder/u4-pigeon.jpg', 'units/bilder/u4-ostrich.jpg'], ans: ['A pigeon is not as big as an ostrich.', 'An ostrich is not as small as a pigeon.', 'A pigeon is not as heavy as an ostrich.'], model: 'A pigeon is not as big as an ostrich.'},
        {t: 'find', rule: 'good – better – best / bad – worse – worst', sentence: 'Monday was the *baddest* day of my week.', fix: ['worst'], why: 'Ausnahme: bad → worse → the worst.'},
        {t: 'correct', rule: 'Steigerung: -er/-est oder more/most', sentence: 'The blue whale is the most heavy animal of the world.', n: 2, mark: ['most', 'heavy', 'of'], ans: ['The blue whale is the heaviest animal in the world.']},
        {t: 'sent', img: 'units/bilder/u4-whale.jpg', rule: 'Schreibweise: bigger, heavier, the biggest', q: 'Übersetze ins Englische: Der Wal ist das schwerste Tier der Welt.', ans: ['The whale is the heaviest animal in the world.', 'The blue whale is the heaviest animal in the world.'], w: ['whale']},
        {t: 'cloze', rule: 'Steigerung: -er/-est oder more/most', title: 'Lückentext zum Schreiben',
         text: 'The cheetah is [[the fastest]] (fast) animal on land.\nElephants are [[heavier]] (heavy) than rhinos.\nA parrot is not as [[big]] (big) as an ostrich.\nFor me, dolphins are [[the most interesting]] (interesting) animals of all.'},
        {t: 'open',
         q: 'Schreibe ZWEI Sätze über Tiere: einen mit einem Superlativ (the …-est / the most …) und einen mit as … as oder not as … as.',
         model: 'The cheetah is the fastest animal in the world. A pigeon is not as fast as a cheetah.',
         rules: [{type: 'sentences', min: 2, hint: 'Schreibe zwei Sätze und beende jeden Satz mit einem Punkt.'},
                 {type: 'someSentence', re: "\\bthe (\\w+est|most \\w+|best|worst)\\b", hint: 'Ein Satz braucht einen Superlativ mit the, z. B. the biggest oder the most dangerous.'},
                 {type: 'someSentence', re: "\\bas \\w+ as\\b", hint: 'Ein Satz braucht as … as, z. B. as fast as.'},
                 {type: 'wordsPerSentence', min: 5, hint: 'Schreibe ganze Sätze mit mindestens fünf Wörtern.'}]}
      ]
    },

    /* ===== HÜ 4 – Lesen, Schreiben, Anwenden ===== */
    {
      title: 'Animal Stories',
      control: {words: 4, nSentences: 1, sentences: [
        {de: 'Der Bauer hat den Fisch gefangen.', ans: ['The farmer caught the fish.']},
        {de: 'Gestern habe ich ein Buch gekauft.', ans: ['Yesterday I bought a book.', 'I bought a book yesterday.']},
        {de: 'Viele Tiere sterben aus.', ans: ['Many animals are dying out.', 'Lots of animals are dying out.', 'A lot of animals are dying out.']}
      ]},
      tasks: [
        {t: 'intro', title: 'Tiergeschichten', text: 'Heute liest du einen Zeitungsartikel über eine besondere Freundschaft und einen Magazin-Artikel über ein ausgestorbenes Tier. (Die Geschichte von Joseph und Bahati ist erfunden.)\n\nDu übst dabei auch die **unregelmäßigen Verben** in der Vergangenheit: *bring → brought, catch → caught, buy → bought …*\n\nAm Ende schreibst du selbst ein paar Sätze für ein Tier-Magazin.'},
        {t: 'reading', reading: 'friendship'},
        {t: 'dialog', title: 'Gruppendiskussion: Welches Tier nehmen wir?', lines: [
          'A: Let’s write our article about the cheetah. It’s the fastest animal!',
          'B: Hmm, I think the blue whale is more interesting.',
          'A: Why do you think that?',
          'B: Because it’s the biggest animal in the world – even bigger than a dinosaur!',
          'A: OK, you’re right. Let’s write about the blue whale.']},
        {t: 'cloze', rule: 'unregelmäßige Verben (Past Simple)', title: 'Lückentext: Ferien auf dem Bauernhof',
         text: 'Last summer, Tom [spent|spended|spend] two weeks on a farm.\nThe farmer [taught|teached|teach] him a lot about animals.\nOne night, Tom [slept|sleeped|sleep] in the barn with the cows.\nOn the last day, he [felt|feeled|fell] sad because he had to go home.',
         why: 'Das sind unregelmäßige Verben – schau in der Verbliste nach.'},
        {t: 'gap', rule: 'unregelmäßige Verben (Past Simple)', topic: 'grammar', q: 'Yesterday Mum ___ a new cage for our bird. (buy)', ans: ['bought'], tip: 'buy – ? – ? (unregelmäßig)'},
        {t: 'reading', reading: 'dodo'},
        {t: 'sort', q: 'Was passt zu welchem Tier? Denk an die Texte.', groups: ['cheetah', 'dodo'],
         items: [['It couldn’t fly.', 1], ['It is the fastest land animal.', 0], ['It died out more than 300 years ago.', 1], ['It can run more than 100 km/h.', 0], ['It lived on an island.', 1], ['It is still alive today.', 0]],
         why: 'Der Dodo ist ausgestorben – darum steht bei ihm alles in der Vergangenheit.'},
        {t: 'transform', rule: 'unregelmäßige Verben (Past Simple)', q: 'Schreib den Satz in der Vergangenheit (Past Simple).', from: 'The farmer brings food for the rhino.',
         accept: ["^(yesterday,? )?the farmer brought (some )?food for the rhino( yesterday)?$"], model: 'The farmer brought food for the rhino.'},
        {t: 'correct', rule: 'unregelmäßige Verben (Past Simple)', sentence: 'Two days ago, the farmer catched a fish and bringed it home.', n: 2, mark: ['catched', 'bringed'], ans: ['Two days ago, the farmer caught a fish and brought it home.', 'Two days ago the farmer caught a fish and brought it home.']},
        {t: 'cloze', rule: 'unregelmäßige Verben (Past Simple)', title: 'Lückentext zum Schreiben: Was geschah mit dem Dodo?',
         text: 'In 1598, sailors [[brought]] (bring) dogs, pigs and rats to the island.\nThe animals [[caught]] (catch) the birds and ate their eggs.\nFor a long time, people [[thought]] (think) there were lots of dodos.\nBut about 80 years later, the last dodo [[died]] (die).'},
        {t: 'sent', q: 'Übersetze ins Englische: Vor zwei Tagen habe ich ein Krokodil gesehen.', ans: ['Two days ago, I saw a crocodile.', 'I saw a crocodile two days ago.', 'Two days ago I saw a crocodile.'], w: ['ago', 'crocodile']},
        {t: 'pic', scene: 'compare', topic: 'grammar', rule: 'Steigerung: -er/-est oder more/most',
         q: 'Vergleiche die zwei Tiere auf dem Bild in EINEM ganzen Satz mit than.',
         model: 'The elephant is bigger than the mouse.',
         rules: [{type: 'match', re: "\\belephants?\\b", hint: 'Nenne den Elefanten (elephant).'},
                 {type: 'match', re: "\\b(mouse|mice)\\b", hint: 'Nenne die Maus (mouse).'},
                 {type: 'match', re: "\\b(\\w+er|more \\w+|less \\w+) than\\b", hint: 'Verwende einen Vergleich mit than, z. B. bigger than oder heavier than.'},
                 {type: 'words', min: 6, hint: 'Schreibe einen ganzen Satz, z. B. „The elephant is … than the mouse.“'}],
         hint2: 'So kann der Satz beginnen: „The elephant is …“'},
        {t: 'open',
         q: 'Schreibe ZWEI Sätze für ein Tier-Magazin über ein Tier deiner Wahl: einen mit einem Superlativ (the …-est / the most …) und einen mit einem Vergleich (… than … oder as … as).',
         model: 'The blue whale is the biggest animal in the world. It is heavier than twenty elephants.',
         rules: [{type: 'sentences', min: 2, hint: 'Schreibe zwei Sätze und beende jeden Satz mit einem Punkt.'},
                 {type: 'someSentence', re: "\\bthe (\\w+est|most \\w+|best|worst)\\b", hint: 'Ein Satz braucht einen Superlativ mit the, z. B. the biggest oder the most dangerous.'},
                 {type: 'someSentence', re: "\\b((\\w+er|more \\w+|less \\w+) than|as \\w+ as)\\b", hint: 'Ein Satz braucht einen Vergleich: … than … oder as … as.'},
                 {type: 'wordsPerSentence', min: 5, hint: 'Schreibe ganze Sätze mit mindestens fünf Wörtern.'}]}
      ]
    }
  ],

  /* ---------- Zusatzaufgaben (Wiederholungen nach Fehlern und Zusatzrunde; minHw = ab welcher HÜ) ---------- */
  extras: [
    // --- Wortschatz (ab HÜ 1) ---
    {t: 'odd', items: ['cheetah', 'antelope', 'giraffe', 'mosquito'], odd: 'mosquito', why: 'cheetah, antelope und giraffe sind Säugetiere aus Afrika – mosquito ist ein Insekt.', w: ['mosquito']},
    {t: 'odd', items: ['heavy', 'strong', 'powerful', 'pigeon'], odd: 'pigeon', why: 'heavy, strong und powerful sind Adjektive – pigeon ist ein Tier (Taube).', w: ['pigeon']},
    {t: 'letters', img: 'units/bilder/u4-dolphin.jpg', word: 'dolphin', de: 'Delfin', w: ['dolphin']},
    {t: 'letters', img: 'units/bilder/u4-parrot.jpg', word: 'parrot', de: 'Papagei', w: ['parrot']},
    {t: 'mc', img: 'units/bilder/u4-bat.jpg', q: 'Welches Tier ist das?', right: 'bat', wrong: ['parrot', 'pigeon', 'mosquito'], why: 'bat = Fledermaus.', w: ['bat']},
    {t: 'mc', img: 'units/bilder/u4-chimpanzee.jpg', q: 'Welches Tier ist das?', right: 'chimpanzee', wrong: ['antelope', 'rhino', 'cheetah'], why: 'chimpanzee = Schimpanse.', w: ['chimpanzee']},
    {t: 'gap', img: 'units/bilder/u4-crocodile.jpg', q: 'Wie heißt dieses Tier auf Englisch?', ans: ['crocodile'], w: ['crocodile']},
    {t: 'gap', img: 'units/bilder/u4-giraffe.jpg', q: 'Wie heißt dieses Tier auf Englisch?', ans: ['giraffe'], w: ['giraffe']},
    {t: 'mc', img: 'units/bilder/u4-venomous.jpg', q: 'This snake can kill other animals with poison. It is ___.', right: 'venomous', wrong: ['hairy', 'female', 'smart'], why: 'venomous = giftig.', w: ['venomous']},
    {t: 'mc', img: 'units/bilder/u4-mammal.jpg', q: 'A lion mother feeds her baby with milk. Lions are ___.', right: 'mammals', wrong: ['reptiles', 'birds', 'insects'], why: 'Tiere, die ihre Babys mit Milch füttern, sind Säugetiere (mammals).', w: ['mammal']},
    {t: 'gap', img: 'units/bilder/u4-desert.jpg', q: 'There is very little water in the ___. (Wüste)', ans: ['desert'], w: ['desert']},
    {t: 'letters', word: 'heavy', de: 'schwer', w: ['heavy']},
    {t: 'mc', q: 'This bird lives in cities and you can often see it in parks. It is a ___.', right: 'pigeon', wrong: ['ostrich', 'bat', 'whale'], why: 'pigeon = Taube.', w: ['pigeon']},
    {t: 'mc', q: 'This animal can fly, but it is a mammal. It sleeps during the day. It is a ___.', right: 'bat', wrong: ['parrot', 'pigeon', 'mosquito'], why: 'bat = Fledermaus.', w: ['bat']},
    {t: 'gap', q: 'A ___ is a very big animal that lives in the sea. (Wal)', ans: ['whale'], w: ['whale']},
    {t: 'gap', q: 'The ___ is a very long snake. (Anakonda)', ans: ['anaconda'], w: ['anaconda']},
    {t: 'gap', q: 'He can lift 100 kg. He is very ___. (stark)', ans: ['strong'], w: ['strong']},
    {t: 'gap', q: 'A ___ can learn to say words. (Papagei)', ans: ['parrot'], w: ['parrot']},
    {t: 'gap', minHw: 4, img: 'units/bilder/u4-farmer.jpg', q: 'The ___ has got cows, pigs and a big field. (Bauer)', ans: ['farmer'], w: ['farmer']},
    {t: 'gap', minHw: 4, img: 'units/bilder/u4-protect.jpg', q: 'We must ___ animals that are in danger. (beschützen)', ans: ['protect'], w: ['protect']},
    {t: 'gap', minHw: 4, img: 'units/bilder/u4-luck.jpg', q: 'Good ___ with your test tomorrow! (Glück)', ans: ['luck'], w: ['luck']},
    {t: 'mc', minHw: 4, img: 'units/bilder/u4-climate-change.jpg', q: 'Many animals are in danger because of ___.', right: 'climate change', wrong: ['luck', 'speed', 'length'], why: 'climate change = Klimawandel.', w: ['climatechange']},
    {t: 'listen', say: 'crocodile', de: 'Krokodil', w: ['crocodile']},
    {t: 'listen', say: 'giraffe', de: 'Giraffe', w: ['giraffe']},

    // --- Komparativ (ab HÜ 2) ---
    {t: 'gap', minHw: 2, img: 'units/bilder/u4-weigh.jpg', q: 'This melon ___ three kilograms. (wiegt)', ans: ['weighs'], w: ['weigh']},
    {t: 'mc', minHw: 2, img: 'units/bilder/u4-ton.jpg', q: 'This big stone weighs 1000 kg. That is one ___.', right: 'ton', wrong: ['centimetre', 'speed', 'length'], why: 'ton = Tonne (1000 kg).', w: ['ton']},
    {t: 'mc', minHw: 2, imgs: ['units/bilder/u4-crocodile.jpg', 'units/bilder/u4-dolphin.jpg'], rule: 'Steigerung: -er/-est oder more/most', topic: 'grammar', q: 'A crocodile is ___ than a dolphin.', right: 'more dangerous', wrong: ['dangerouser', 'more dangerouser', 'dangerous'], why: 'Langes Adjektiv: more + Adjektiv.'},
    {t: 'mc', minHw: 2, rule: 'Steigerung: -er/-est oder more/most', topic: 'grammar', q: 'Which sentence is correct?', right: 'A rhino is stronger than a dog.', wrong: ['A rhino is more stronger than a dog.', 'A rhino is stronger as a dog.', 'A rhino is strong than a dog.'], why: 'strong → stronger + than.'},
    {t: 'gap', minHw: 2, rule: 'Steigerung: -er/-est oder more/most', topic: 'grammar', q: 'A giraffe is ___ than a horse. (tall)', ans: ['taller'], tip: 'Kurzes Adjektiv: -er anhängen.'},
    {t: 'gap', minHw: 2, rule: 'Steigerung: -er/-est oder more/most', topic: 'grammar', q: 'Dolphins are ___ than sharks. (intelligent)', ans: ['more intelligent'], tip: 'Langes Adjektiv: zwei Wörter.'},
    {t: 'gap', minHw: 2, rule: 'Steigerung: -er/-est oder more/most', topic: 'grammar', q: 'A rhino is ___ than a crocodile. (powerful)', ans: ['more powerful'], tip: 'Langes Adjektiv: zwei Wörter.'},
    {t: 'gap', minHw: 2, rule: 'Schreibweise: bigger, heavier, the biggest', topic: 'grammar', q: 'An elephant is ___ than a horse. (big)', ans: ['bigger'], tip: 'Buchstabe verdoppeln.'},
    {t: 'gap', minHw: 2, rule: 'Schreibweise: bigger, heavier, the biggest', topic: 'grammar', q: 'A chimpanzee is ___ than a dolphin. (hairy)', ans: ['hairier'], tip: 'Achte auf das y am Ende.'},
    {t: 'gap', minHw: 2, rule: 'Schreibweise: bigger, heavier, the biggest', topic: 'grammar', q: 'After the long walk, I was ___ than my sister. (hungry)', ans: ['hungrier'], tip: 'Achte auf das y am Ende.'},
    {t: 'gap', minHw: 2, rule: 'good – better – best / bad – worse – worst', topic: 'grammar', q: 'My new phone is ___ than my old one. (good)', ans: ['better'], tip: 'Ausnahme – ein ganz neues Wort.'},
    {t: 'find', minHw: 2, rule: 'Schreibweise: bigger, heavier, the biggest', sentence: 'A whale is *biger* than a shark.', fix: ['bigger'], why: 'big → bigger: Der letzte Buchstabe wird verdoppelt.'},
    {t: 'find', minHw: 2, rule: 'Steigerung: -er/-est oder more/most', sentence: 'A cheetah is faster *as* an ostrich.', fix: ['than'], why: 'Nach dem Komparativ steht than.'},
    {t: 'find', minHw: 2, rule: 'good – better – best / bad – worse – worst', sentence: 'My dog is *gooder* at catching balls than my cat.', fix: ['better'], why: 'Ausnahme: good → better.'},
    {t: 'order', minHw: 2, rule: 'Steigerung: -er/-est oder more/most', tiles: ['A rhino', 'is', 'heavier', 'than', 'a crocodile']},
    {t: 'order', minHw: 2, rule: 'Steigerung: -er/-est oder more/most', tiles: ['Chimpanzees', 'are', 'more intelligent', 'than', 'pigeons']},
    {t: 'sent', minHw: 2, rule: 'Steigerung: -er/-est oder more/most', q: 'Übersetze ins Englische: Ein Delfin ist intelligenter als ein Fisch.', ans: ['A dolphin is more intelligent than a fish.']},
    {t: 'sent', minHw: 2, rule: 'Schreibweise: bigger, heavier, the biggest', q: 'Übersetze ins Englische: Ein Nashorn ist schwerer als ein Pferd.', ans: ['A rhino is heavier than a horse.']},
    {t: 'sent', minHw: 2, rule: 'good – better – best / bad – worse – worst', q: 'Übersetze ins Englische: Mein Englisch ist besser als mein Französisch.', ans: ['My English is better than my French.']},
    {t: 'transform', minHw: 2, rule: 'good – better – best / bad – worse – worst', q: 'Mach aus den zwei Sätzen EINEN Satz mit einem Vergleich (… than …).', from: 'Today the weather is bad. Yesterday it was not so bad.', ans: ['Today the weather is worse than yesterday.', 'The weather is worse today than yesterday.', 'Yesterday the weather was better than today.'], model: 'Today the weather is worse than yesterday.'},
    {t: 'correct', minHw: 2, rule: 'Steigerung: -er/-est oder more/most', sentence: 'A crocodile is dangerouser then a parrot.', n: 2, mark: ['dangerouser', 'then'], ans: ['A crocodile is more dangerous than a parrot.']},
    {t: 'cloze', minHw: 2, rule: 'Steigerung: -er/-est oder more/most', text: 'An ostrich is [bigger|more big|biger] than a pigeon. But a pigeon can fly, so for me it is [more interesting|interestinger|more interestinger].'},

    // --- Superlativ und as … as (ab HÜ 3) ---
    {t: 'mc', minHw: 3, rule: 'Steigerung: -er/-est oder more/most', topic: 'grammar', q: 'The mosquito is ___ animal in the world.', right: 'the most dangerous', wrong: ['the dangerousest', 'most dangerous', 'the more dangerous'], why: 'Langes Adjektiv: the most + Adjektiv.'},
    {t: 'mc', minHw: 3, rule: 'as … as / not as … as', topic: 'grammar', q: 'Which sentence is correct?', right: 'A dog is not as big as a horse.', wrong: ['A dog is not as big than a horse.', 'A dog is not as bigger as a horse.', 'A dog is not so bigger than a horse.'], why: 'not as + Grundform + as.'},
    {t: 'gap', minHw: 3, rule: 'Steigerung: -er/-est oder more/most', topic: 'grammar', q: 'The giraffe is ___ animal in the world. (tall)', ans: ['the tallest'], tip: 'Superlativ: the + Adjektiv + -est.'},
    {t: 'gap', minHw: 3, rule: 'Schreibweise: bigger, heavier, the biggest', topic: 'grammar', q: 'The blue whale is ___ animal in the world. (heavy)', ans: ['the heaviest'], tip: 'the … und achte auf das y.'},
    {t: 'gap', minHw: 3, rule: 'Schreibweise: bigger, heavier, the biggest', topic: 'grammar', q: 'Today is ___ day of the year. (hot)', ans: ['the hottest'], tip: 'the … und Buchstabe verdoppeln.'},
    {t: 'gap', minHw: 3, rule: 'good – better – best / bad – worse – worst', topic: 'grammar', q: 'This is ___ pizza in town – I love it! (good)', ans: ['the best'], tip: 'Ausnahme mit the.'},
    {t: 'gap', minHw: 3, rule: 'as … as / not as … as', topic: 'grammar', q: 'A cat is not as ___ as a dog. (big)', ans: ['big'], tip: 'Zwischen as … as steht die Grundform.'},
    {t: 'find', minHw: 3, rule: 'as … as / not as … as', sentence: 'A pigeon is not as fast *than* a cheetah.', fix: ['as'], why: 'as … as – zweimal as.'},
    {t: 'find', minHw: 3, rule: 'Steigerung: -er/-est oder more/most', sentence: 'The cheetah is the *fastes* animal on land.', fix: ['fastest'], why: 'Superlativ: the fast-est.'},
    {t: 'order', minHw: 3, rule: 'as … as / not as … as', tiles: ['A dolphin', 'is', 'as clever as', 'a chimpanzee']},
    {t: 'order', minHw: 3, rule: 'Steigerung: -er/-est oder more/most', tiles: ['The mosquito', 'is', 'the most dangerous', 'animal']},
    {t: 'gap', minHw: 3, img: 'units/bilder/u4-truck.jpg', rule: 'as … as / not as … as', topic: 'grammar', q: 'An elephant is as heavy as a small ___. (Lastwagen)', ans: ['truck'], w: ['truck']},
    {t: 'sent', minHw: 3, rule: 'as … as / not as … as', q: 'Übersetze ins Englische: Eine Maus ist nicht so groß wie ein Elefant.', ans: ['A mouse is not as big as an elephant.', 'A mouse is not as large as an elephant.']},
    {t: 'sent', minHw: 3, rule: 'as … as / not as … as', q: 'Übersetze ins Englische: Mein Bruder ist so groß wie ich.', ans: ['My brother is as tall as me.', 'My brother is as tall as I am.', 'My brother is as big as me.', 'My brother is as big as I am.']},
    {t: 'sent', minHw: 3, rule: 'Steigerung: -er/-est oder more/most', q: 'Übersetze ins Englische: Der Gepard ist das schnellste Landtier.', ans: ['The cheetah is the fastest land animal.']},
    {t: 'transform', minHw: 3, rule: 'as … as / not as … as', q: 'Sag mit not as … as, dass die beiden nicht gleich sind. Schreibe EINEN Satz.', from: 'A crocodile is dangerous. A parrot is not dangerous.', ans: ['A parrot is not as dangerous as a crocodile.'], model: 'A parrot is not as dangerous as a crocodile.'},
    {t: 'transform', minHw: 3, rule: 'Steigerung: -er/-est oder more/most', q: 'Schreib einen Satz mit dem Superlativ (the …-est).', from: 'The cheetah is faster than all other land animals.', ans: ['The cheetah is the fastest land animal.', 'The cheetah is the fastest of all land animals.', 'The cheetah is the fastest animal on land.'], model: 'The cheetah is the fastest land animal.'},
    {t: 'correct', minHw: 3, rule: 'Steigerung: -er/-est oder more/most', sentence: 'The ostrich is biggest bird of the world.', n: 2, mark: ['biggest', 'of'], ans: ['The ostrich is the biggest bird in the world.']},

    // --- Unregelmäßige Verben (ab HÜ 4) ---
    {minHw: 4, t: 'match', words: ['farmer', 'human', 'protect', 'carry', 'luck', 'forever']},
    {minHw: 4, t: 'gap', rule: 'unregelmäßige Verben (Past Simple)', topic: 'grammar', q: 'Our cat ___ a mouse last night. (catch)', ans: ['caught'], tip: 'catch – ? – ? (unregelmäßig)'},
    {minHw: 4, t: 'letters', img: 'units/bilder/u4-scientist.jpg', word: 'scientist', de: 'Wissenschaftler/in', w: ['scientist']},
    {minHw: 4, t: 'mc', img: 'units/bilder/u4-die-out.jpg', q: 'Many animals are ___ because of climate change.', right: 'dying out', wrong: ['carrying', 'sharing', 'protecting'], why: 'die out = aussterben.', w: ['dieout']},
    {t: 'mc', minHw: 4, rule: 'unregelmäßige Verben (Past Simple)', topic: 'grammar', q: 'Last year, Mr Brown ___ us English.', right: 'taught', wrong: ['teached', 'teach', 'thought'], why: 'teach – taught – taught.'},
    {t: 'gap', minHw: 4, rule: 'unregelmäßige Verben (Past Simple)', topic: 'grammar', q: 'Last summer we ___ a tree house. (build)', ans: ['built'], tip: 'build – ? – ? (unregelmäßig)'},
    {t: 'gap', minHw: 4, rule: 'unregelmäßige Verben (Past Simple)', topic: 'grammar', q: 'Grandpa ___ us a big cake on Sunday. (bring)', ans: ['brought'], tip: 'bring – ? – ? (mit „ght“)'},
    {t: 'gap', minHw: 4, rule: 'unregelmäßige Verben (Past Simple)', topic: 'grammar', q: 'Yesterday I ___ my keys. I can’t find them. (lose)', ans: ['lost'], tip: 'lose – ? – ? (unregelmäßig)'},
    {t: 'gap', minHw: 4, rule: 'unregelmäßige Verben (Past Simple)', topic: 'grammar', q: 'The bus ___ at eight o’clock this morning. (leave)', ans: ['left'], tip: 'leave – ? – ? (unregelmäßig)'},
    {t: 'find', minHw: 4, rule: 'unregelmäßige Verben (Past Simple)', sentence: 'Last night I *sleeped* for ten hours.', fix: ['slept'], why: 'sleep – slept – slept.'},
    {t: 'find', minHw: 4, rule: 'unregelmäßige Verben (Past Simple)', sentence: 'The two dogs *fighted* in the garden.', fix: ['fought'], why: 'fight – fought – fought.'},
    {t: 'transform', minHw: 4, rule: 'unregelmäßige Verben (Past Simple)', q: 'Schreib den Satz in der Vergangenheit (Past Simple).', from: 'I think the snake is dangerous.', ans: ['I thought the snake was dangerous.'], model: 'I thought the snake was dangerous.'},
    {t: 'sent', minHw: 4, rule: 'unregelmäßige Verben (Past Simple)', q: 'Übersetze ins Englische: Letzte Woche habe ich einen Papagei gekauft.', ans: ['Last week I bought a parrot.', 'I bought a parrot last week.', 'Last week, I bought a parrot.']}
  ],

  /* ---------- Vokabeltraining: 29 fett gedruckte Wörter + 16 unregelmäßige Verben ---------- */
  vocab: {
    title: 'Vokabeln – Unit 4',
    items: [
      {img: 'units/bilder/u4-ago.jpg', en: 'ago', de: 'vor (zeitlich, z. B. vor zwei Tagen)', ex: 'Two days ___, I saw a crocodile at the river.', wrong: ['tomorrow', 'next', 'soon'], trap: {before: 'Fast – „vor zwei Tagen“ heißt two days ago. Das Wort steht nach der Zeitangabe.'}},
      {img: 'units/bilder/u4-farmer.jpg', pic: true, en: 'farmer', de: 'Bauer, Bäuerin', ex: 'The ___ has got cows, pigs and a big field.', wrong: ['scientist', 'desert', 'reason']},
      {img: 'units/bilder/u4-human.jpg', en: 'human', de: 'Mensch', ex: 'A chimpanzee is very clever, but a ___ is even more intelligent.', wrong: ['desert', 'luck', 'speed'], trap: {person: 'Gute Übersetzung! Gesucht ist aber das Wort aus der Unit: h…', people: 'Gute Übersetzung! Gesucht ist aber das Wort aus der Unit: h…'}},
      {img: 'units/bilder/u4-incredible.jpg', en: 'incredible', de: 'unglaublich', ex: 'A dog that can talk? That’s ___!', wrong: ['female', 'hairy', 'less'], trap: {unbelievable: 'Gute Übersetzung! Gesucht ist aber das Wort aus der Unit: inc…'}},
      {img: 'units/bilder/u4-dangerous.jpg', en: 'dangerous', de: 'gefährlich', ex: 'Crocodiles can kill people. They are very ___.', wrong: ['hairy', 'female', 'less']},
      {img: 'units/bilder/u4-hairy.jpg', pic: true, en: 'hairy', de: 'haarig, stark behaart', ex: 'My dog has got lots of fur. It is very ___.', wrong: ['female', 'smart', 'less']},
      {img: 'units/bilder/u4-heavy.jpg', en: 'heavy', de: 'schwer', ex: 'This bag is too ___. I can’t carry it.', wrong: ['fast', 'smart', 'hairy']},
      {img: 'units/bilder/u4-strong.jpg', pic: true, en: 'strong', de: 'stark', ex: 'He can lift 100 kg. He is very ___.', wrong: ['hairy', 'smart', 'female']},
      {img: 'units/bilder/u4-fast.jpg', en: 'fast', de: 'schnell', ex: 'Cheetahs can run very ___.', wrong: ['heavy', 'hairy', 'dangerous'], trap: {quick: 'Gute Übersetzung! Gesucht ist aber das Wort aus der Unit: f…'}},
      {img: 'units/bilder/u4-female.jpg', en: 'female', de: 'weiblich; Weibchen (bei Tieren)', ex: 'The ___ lion is smaller than the male lion.', wrong: ['incredible', 'hairy', 'heavy'], avoid: ['male'], trap: {male: 'Fast – male heißt männlich. Gesucht ist weiblich.'}},
      {img: 'units/bilder/u4-male.jpg', en: 'male', de: 'männlich; Männchen (bei Tieren)', ex: 'The ___ bird has got colourful feathers, but the female bird is brown.', wrong: ['dangerous', 'heavy', 'less'], avoid: ['female'], trap: {female: 'Fast – female heißt weiblich. Gesucht ist männlich.'}},
      {img: 'units/bilder/u4-nobody.jpg', en: 'nobody', de: 'niemand', ex: '___ knows exactly when the last dodo died.', target: 'Nobody', wrong: ['Forever', 'Less', 'Luck'], trap: {'no one': 'Gute Übersetzung! Gesucht ist aber das Wort aus der Unit: nob…', noone: 'Gesucht ist das Wort aus der Unit: nob…'}},
      {img: 'units/bilder/u4-scientist.jpg', pic: true, en: 'scientist', de: 'Wissenschaftler/in', ex: 'A ___ studies animals and plants.', wrong: ['desert', 'reason', 'luck']},
      {img: 'units/bilder/u4-die-out.jpg', en: 'die out', de: 'aussterben', ex: 'Many animals ___ because of climate change.', wrong: ['carry', 'share', 'protect'], avoid: ['die'], trap: {die: 'Fast – die heißt sterben. Gesucht ist aussterben: die …'}},
      {img: 'units/bilder/u4-less.jpg', en: 'less', de: 'weniger', ex: 'A pigeon eats ___ food than an ostrich.', wrong: ['nobody', 'forever', 'ago']},
      {img: 'units/bilder/u4-carry.jpg', pic: true, en: 'carry', de: 'tragen', ex: 'Can you help me? I can’t ___ this heavy box alone.', wrong: ['die', 'share', 'die out']},
      {img: 'units/bilder/u4-centimetre.jpg', en: 'centimetre', de: 'Zentimeter', alt: ['centimeter'], ex: 'This little snake is only 30 ___ long.', target: 'centimetres', wrong: ['tons', 'speeds', 'deserts']},
      {img: 'units/bilder/u4-desert.jpg', pic: true, en: 'desert', de: 'Wüste', ex: 'There is very little water in the ___.', wrong: ['human', 'scientist', 'reason'], trap: {dessert: 'Fast! dessert (mit ss) ist die Nachspeise. Wüste = desert.'}},
      {img: 'units/bilder/u4-die.jpg', en: 'die', de: 'sterben', ex: 'Plants ___ without water.', wrong: ['carry', 'share', 'protect'], avoid: ['die out']},
      {img: 'units/bilder/u4-length.jpg', en: 'length', de: 'Länge', ex: 'The ___ of this crocodile is six metres.', wrong: ['speed', 'luck', 'reason'], trap: {lenght: 'Fast! Achte auf die Reihenfolge der Buchstaben am Ende: …g-t-h.'}},
      {img: 'units/bilder/u4-speed.jpg', en: 'speed', de: 'Geschwindigkeit, Tempo', ex: 'A cheetah can reach a ___ of 100 km/h.', wrong: ['length', 'reason', 'desert']},
      {img: 'units/bilder/u4-intelligent.jpg', en: 'intelligent', de: 'intelligent', ex: 'Dolphins can learn tricks. They are very ___ animals.', wrong: ['hairy', 'female', 'less']},
      {img: 'units/bilder/u4-reason.jpg', en: 'reason', de: 'Grund', ex: 'Is there a ___ why you are late?', wrong: ['luck', 'speed', 'length']},
      {img: 'units/bilder/u4-share.jpg', en: 'share', de: 'teilen', ex: 'I’ve got two apples. I can ___ them with you.', wrong: ['die', 'die out', 'weigh']},
      {img: 'units/bilder/u4-luck.jpg', en: 'luck', de: 'Glück (Glück haben)', ex: 'Good ___ with your test tomorrow!', wrong: ['speed', 'reason', 'length'], trap: {happiness: 'Fast – happiness ist das Glücksgefühl. „Viel Glück!“ heißt Good luck!'}},
      {img: 'units/bilder/u4-powerful.jpg', en: 'powerful', de: 'mächtig, kräftig', ex: 'Rhinos are big and ___ animals.', wrong: ['female', 'less', 'nobody']},
      {img: 'units/bilder/u4-smart.jpg', en: 'smart', de: 'schlau', ex: 'Cats are very ___. They know how to open doors.', wrong: ['heavy', 'hairy', 'female'], trap: {clever: 'Gute Übersetzung! Gesucht ist aber das Wort aus der Unit: sm…', intelligent: 'Gute Übersetzung! Gesucht ist aber das kürzere Wort: sm…'}},
      {img: 'units/bilder/u4-forever.jpg', en: 'forever', de: 'für immer', ex: 'We will be best friends ___!', wrong: ['ago', 'less', 'nobody']},
      {img: 'units/bilder/u4-protect.jpg', en: 'protect', de: 'beschützen, schützen', ex: 'Elephant mothers ___ their babies from lions.', wrong: ['share', 'die', 'die out']},

      {img: 'units/bilder/u4-bend.jpg', forms: ['bend', 'bent', 'bent'], de: 'biegen, (sich) beugen', ex: 'Yesterday I ___ down to pick up my pen.', target: 'bent', wrong: ['bend', 'bended', 'bending']},
      {img: 'units/bilder/u4-bring.jpg', forms: ['bring', 'brought', 'brought'], de: 'bringen', ex: 'Last week Grandpa ___ us a cake.', target: 'brought', wrong: ['bringed', 'brang', 'bring']},
      {img: 'units/bilder/u4-build.jpg', forms: ['build', 'built', 'built'], de: 'bauen', ex: 'Last summer we ___ a tree house.', target: 'built', wrong: ['builded', 'build', 'building']},
      {img: 'units/bilder/u4-buy.jpg', forms: ['buy', 'bought', 'bought'], de: 'kaufen', ex: 'Yesterday I ___ a new bike.', target: 'bought', wrong: ['buyed', 'buy', 'buying']},
      {img: 'units/bilder/u4-catch.jpg', forms: ['catch', 'caught', 'caught'], de: 'fangen', ex: 'The cat ___ a mouse last night.', target: 'caught', wrong: ['catched', 'catch', 'catching']},
      {img: 'units/bilder/u4-dream.jpg', forms: ['dream', 'dreamt', 'dreamt'], alt: ['dream dreamed dreamed'], de: 'träumen', ex: 'Last night I ___ about a big crocodile.', target: 'dreamt', wrong: ['dream', 'dreaming', 'dreams']},
      {img: 'units/bilder/u4-feel.jpg', forms: ['feel', 'felt', 'felt'], de: 'fühlen', ex: 'After the long walk, I ___ very tired.', target: 'felt', wrong: ['feeled', 'feel', 'feeling']},
      {img: 'units/bilder/u4-fight.jpg', forms: ['fight', 'fought', 'fought'], de: 'kämpfen', ex: 'The two dogs ___ in the garden yesterday.', target: 'fought', wrong: ['fighted', 'fight', 'fighting']},
      {img: 'units/bilder/u4-learn.jpg', forms: ['learn', 'learnt', 'learnt'], alt: ['learn learned learned'], de: 'lernen', ex: 'Last year I ___ to swim.', target: 'learnt', wrong: ['learn', 'learning', 'learns']},
      {img: 'units/bilder/u4-leave.jpg', forms: ['leave', 'left', 'left'], de: 'verlassen, weggehen', ex: 'The bus ___ at eight o’clock this morning.', target: 'left', wrong: ['leaved', 'leave', 'leaving']},
      {img: 'units/bilder/u4-lose.jpg', forms: ['lose', 'lost', 'lost'], de: 'verlieren', ex: 'Yesterday I ___ my keys.', target: 'lost', wrong: ['losed', 'lose', 'loosed']},
      {img: 'units/bilder/u4-sleep.jpg', forms: ['sleep', 'slept', 'slept'], de: 'schlafen', ex: 'Last night I ___ for ten hours.', target: 'slept', wrong: ['sleeped', 'sleep', 'sleeping']},
      {img: 'units/bilder/u4-smell.jpg', forms: ['smell', 'smelt', 'smelt'], alt: ['smell smelled smelled'], de: 'riechen', ex: 'The kitchen ___ of fresh bread this morning.', target: 'smelt', wrong: ['smell', 'smelling', 'smells']},
      {img: 'units/bilder/u4-spend.jpg', forms: ['spend', 'spent', 'spent'], de: 'verbringen; (Geld) ausgeben', ex: 'Last summer we ___ two weeks in Italy.', target: 'spent', wrong: ['spended', 'spend', 'spending']},
      {img: 'units/bilder/u4-teach.jpg', forms: ['teach', 'taught', 'taught'], de: 'unterrichten, lehren', ex: 'Last year Mr Brown ___ us English.', target: 'taught', wrong: ['teached', 'teach', 'teaching']},
      {img: 'units/bilder/u4-think.jpg', forms: ['think', 'thought', 'thought'], de: 'denken, glauben', ex: 'Yesterday I ___ about you.', target: 'thought', wrong: ['thinked', 'think', 'thinking']}
    ]
  }
});
