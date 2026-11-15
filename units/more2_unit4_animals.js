/* =====================================================================
   MORE! 2 – Unit 4: Animals
   Unit-Datei für den Englisch-Lerntrainer (Format siehe ANLEITUNG.md)
   Grammatik: Komparativ, Superlativ, as … as / not as … as
   Lesetexte sind selbst geschrieben (nicht aus dem Buch).
   ===================================================================== */
/* Tiere (und Menschen) für das freie Schreiben – so zählen nur Sätze über echte Lebewesen */
const U4_ANIMALS = ["\\b(giraffes?)\\b", "\\b(antelopes?)\\b", "\\b(chimpanzees?)\\b", "\\b(chimps?)\\b", "\\b(bats?)\\b", "\\b(rhinos?)\\b", "\\b(cheetahs?)\\b", "\\b(dolphins?)\\b", "\\b(whales?)\\b", "\\b(mosquito(e)?s?)\\b", "\\b(pigeons?)\\b", "\\b(parrots?)\\b", "\\b(ostrich(es)?)\\b", "\\b(anacondas?)\\b", "\\b(crocodiles?)\\b", "\\b(elephants?)\\b", "\\b(lions?)\\b", "\\b(tigers?)\\b", "\\b(dogs?)\\b", "\\b(cats?)\\b", "\\b(mouse)\\b", "\\b(mice)\\b", "\\b(horses?)\\b", "\\b(cows?)\\b", "\\b(pigs?)\\b", "\\b(sheep)\\b", "\\b(birds?)\\b", "\\b(fish(es)?)\\b", "\\b(snakes?)\\b", "\\b(sharks?)\\b", "\\b(monkeys?)\\b", "\\b(bears?)\\b", "\\b(rabbits?)\\b", "\\b(hamsters?)\\b", "\\b(spiders?)\\b", "\\b(frogs?)\\b", "\\b(ducks?)\\b", "\\b(chickens?)\\b", "\\b(wolf)\\b", "\\b(wolves)\\b", "\\b(fox(es)?)\\b", "\\b(zebras?)\\b", "\\b(hippos?)\\b", "\\b(kangaroos?)\\b", "\\b(penguins?)\\b", "\\b(eagles?)\\b", "\\b(turtles?)\\b", "\\b(goats?)\\b", "\\b(donkeys?)\\b", "\\b(camels?)\\b", "\\b(dinosaurs?)\\b", "\\b(bees?)\\b", "\\b(butterfl(y|ies))\\b", "\\b(insects?)\\b", "\\b(gorillas?)\\b", "\\b(pandas?)\\b", "\\b(koalas?)\\b", "\\b(deer)\\b", "\\b(owls?)\\b", "\\b(rats?)\\b", "\\b(hedgehogs?)\\b", "\\b(snails?)\\b", "\\b(dodos?)\\b", "\\b(humans?)\\b", "\\b(people)\\b", "\\b(man)\\b", "\\b(men)\\b", "\\b(woman)\\b", "\\b(women)\\b", "\\b(boys?)\\b", "\\b(girls?)\\b"];

registerUnit({
  id: 'more2-u4-animals',
  book: 'MORE! 2',
  title: 'Unit 4 – Animals',

  normalize: [["\\bisn't as\\b", "is not as"], ["\\baren't as\\b", "are not as"], ["\\bwasn't as\\b", "was not as"]],

  // falsche Bausteine für die Hilfe-Stufe 3 (typische Verwechslungen)
  distract: ['than', 'as', 'more', 'most', 'the', 'then'],

  /* ---------- Wortschatz ---------- */
  // Bild zum Wort für die Hilfe bei Schreib-Wiederholungen (erscheint erst nach dem 1. Fehler)
  // Die HÜs dieser Unit heißen HÜ 4 bis HÜ 7 (Unit 3 war HÜ 1 bis 3)
  hwStart: 4,
  wordImg: 'units/bilder/u4-{id}.jpg',
  words: {
    // Tiere (Word File)
    giraffe:    {en: 'giraffe', de: 'Giraffe', ex: ['The ___ has got a very long neck and eats leaves from tall trees.', 'With its long neck, the ___ is the tallest animal in the world.'], cat: 'animal'},
    antelope:   {en: 'antelope', de: 'Antilope', ex: ['An ___ is a fast animal with horns. Lions and cheetahs hunt it.', 'The lions are hungry. They are hunting an ___ with two long horns.'], cat: 'animal'},
    chimpanzee: {en: 'chimpanzee', de: 'Schimpanse', ex: ['A ___ looks a bit like a human and can use sticks as tools.', 'The ___ in the zoo is hairy and very clever. It opened a box with a stick.'], cat: 'animal'},
    bat:        {en: 'bat', de: 'Fledermaus', ex: ['A ___ sleeps during the day and flies at night.', 'A ___ is a mammal, but it has got wings and can fly in the dark.'], cat: 'animal'},
    rhino:      {en: 'rhino', de: 'Nashorn', ex: ['The ___ is very heavy and has got a big horn on its nose.', 'A ___ is big, grey and strong. It can weigh more than two tons.'], cat: 'animal'},
    cheetah:    {en: 'cheetah', de: 'Gepard', ex: ['The ___ has got black spots and is the fastest land animal.', 'No land animal is faster than the ___. It can run more than 100 km/h.'], cat: 'animal'},
    dolphin:    {en: 'dolphin', de: 'Delfin', ex: ['A ___ lives in the sea, is very intelligent and loves to jump.', 'A ___ is much smaller than a whale. It is very clever and loves to jump out of the water.'], cat: 'animal', avoid: ['whale']},
    whale:      {en: 'whale', de: 'Wal', ex: ['The blue ___ is the biggest animal in the world.', 'A ___ lives in the sea and can be 30 metres long. It is much bigger than a dolphin.'], cat: 'animal', avoid: ['dolphin']},
    mosquito:   {en: 'mosquito', de: 'Stechmücke, Gelse', ex: ['A ___ is a small insect. Its bite can make you sick.', 'I can’t sleep! A ___ is flying around my bed and wants to bite me.'], cat: 'animal'},
    pigeon:     {en: 'pigeon', de: 'Taube', ex: ['There are lots of grey ___ in the city park.', 'A ___ is a grey bird. You can see it on the streets of every big city.'], exAns: ['pigeons', 'pigeon'], cat: 'animal'},
    parrot:     {en: 'parrot', de: 'Papagei', ex: ['My grandma has got a colourful ___ that can say “Hello”.', 'A ___ is a bird with red, green and blue feathers. Some of them can talk.'], cat: 'animal'},
    ostrich:    {en: 'ostrich', de: 'Strauß (Vogel)', ex: ['An ___ is a very big bird. It can’t fly, but it can run fast.', 'The ___ is the biggest bird in the world and lays very big eggs.'], cat: 'animal'},
    anaconda:   {en: 'anaconda', de: 'Anakonda', ex: ['The ___ is a very long green snake from South America.', 'The ___ is not venomous, but this big snake is very strong.'], cat: 'animal'},
    crocodile:  {en: 'crocodile', de: 'Krokodil', ex: ['The ___ lives in rivers and has got lots of sharp teeth.', 'A ___ is a dangerous reptile. It waits in the river with its mouth open.'], cat: 'animal'},
    // Adjektive
    hairy:      {en: 'hairy', de: 'haarig, stark behaart', ex: 'Chimpanzees have got lots of dark hair. They are very ___.', cat: 'adj'},
    heavy:      {en: 'heavy', de: 'schwer', ex: 'An elephant weighs about six tons. It is very ___.', cat: 'adj', avoid: ['strong', 'powerful']},
    dangerous:  {en: 'dangerous', de: 'gefährlich', ex: 'Don’t swim in this river! There are crocodiles – it’s ___.', cat: 'adj', avoid: ['venomous', 'powerful']},
    strong:     {en: 'strong', de: 'stark', ex: 'An elephant can lift a whole tree. It is very ___.', cat: 'adj', avoid: ['powerful', 'heavy']},
    clever:     {en: 'clever', de: 'klug', ex: ['My sister always knows the answer. She is very ___.', 'Chimpanzees can use tools and solve puzzles. They are very ___ animals.'], cat: 'adj', noImg: true, avoid: ['smart', 'intelligent']},
    fast:       {en: 'fast', de: 'schnell', ex: 'A cheetah can run 100 km/h. It is very ___.', cat: 'adj'},
    smart:      {en: 'smart', de: 'schlau', ex: 'Our dog can open the fridge. It is really ___!', cat: 'adj', avoid: ['clever', 'intelligent']},
    intelligent:{en: 'intelligent', de: 'intelligent', skipGen: true},
    powerful:   {en: 'powerful', de: 'mächtig, kräftig', ex: 'A rhino is big and ___. Nobody wants to make it angry.', cat: 'adj', avoid: ['strong', 'heavy', 'dangerous']},
    venomous:   {en: 'venomous', de: 'giftig', ex: ['Be careful! This snake is ___. Its bite can kill you.', 'Some spiders are ___. One bite can make you very sick.'], cat: 'adj', avoid: ['dangerous']},
    incredible: {en: 'incredible', de: 'unglaublich', ex: 'A blue whale can be 30 metres long. That’s ___!', cat: 'adj', avoid: ['dangerous', 'heavy', 'powerful']},
    // Wortliste
    ago:        {en: 'ago', de: 'vor (zeitlich, z. B. vor zwei Tagen)', ex: 'I saw a real whale three years ___.', cat: 'other'},
    farmer:     {en: 'farmer', de: 'Bauer, Bäuerin', ex: 'The ___ gets up at five o’clock to feed his cows.', cat: 'noun'},
    human:      {en: 'human', de: 'Mensch', ex: 'A ___ can talk, but an animal can’t.', avoid: ['farmer', 'scientist'], cat: 'noun'},
    female:     {en: 'female', de: 'weiblich; Weibchen', ex: 'The ___ chicken lays the eggs.', avoid: ['male'], cat: 'sex'},
    male:       {en: 'male', de: 'männlich; Männchen', ex: 'Tom is a boy, so he is ___.', avoid: ['human', 'female'], cat: 'sex'},
    nobody:     {en: 'nobody', de: 'niemand', ex: '___ was at home, so I went back to school.', exAns: 'Nobody', cat: 'other'},
    scientist:  {en: 'scientist', de: 'Wissenschaftler/in', ex: 'The ___ looks at the insects under a microscope.', cat: 'noun'},
    dieout:     {en: 'die out', de: 'aussterben', ex: 'If we don’t protect them, many animals will ___.', avoid: ['die'], cat: 'verb'},
    less:       {en: 'less', de: 'weniger', ex: 'A mouse eats ___ food than a horse.', cat: 'other'},
    carry:      {en: 'carry', de: 'tragen', ex: 'Can you ___ my bag, please? It’s very heavy.', cat: 'verb'},
    desert:     {en: 'desert', de: 'Wüste', ex: 'Camels can live in the ___ because they need very little water.', cat: 'noun'},
    die:        {en: 'die', de: 'sterben', ex: 'Flowers ___ when it is too cold.', avoid: ['dieout'], cat: 'verb'},
    mammal:     {en: 'mammal', de: 'Säugetier', ex: ['A dolphin is not a fish – it is a ___.', 'A whale lives in the sea, but it feeds its baby with milk. It is a ___.'], cat: 'noun'},
    weigh:      {en: 'weigh', de: 'wiegen', ex: ['How much do you ___? – About 40 kilograms.', 'An elephant is very heavy. It can ___ six tons.'], cat: 'verb', avoid: ['carry']},
    length:     {en: 'length', de: 'Länge', ex: 'The ___ of an anaconda can be six metres.', cat: 'noun'},
    speed:      {en: 'speed', de: 'Geschwindigkeit', ex: 'This train can reach a ___ of 300 km/h.', cat: 'noun'},
    reason:     {en: 'reason', de: 'Grund', ex: 'What is the ___ why the dodo died out?', cat: 'noun'},
    share:      {en: 'share', de: 'teilen', ex: 'Let’s ___ the pizza – you get half and I get half.', cat: 'verb'},
    luck:       {en: 'luck', de: 'Glück (Glück haben)', ex: 'I found ten euros on the street. What ___!', cat: 'noun', noPl: true},
    forever:    {en: 'forever', de: 'für immer', ex: 'I will remember this wonderful day ___.', cat: 'other'},
    protect:    {en: 'protect', de: 'beschützen, schützen', ex: 'A helmet can ___ your head when you ride a bike.', cat: 'verb'},
    truck:      {en: 'truck', de: 'Lastwagen', ex: ['The big ___ carries wood from the forest to the town.', 'My uncle drives a big ___. He brings fruit to the supermarkets.'], cat: 'noun', avoid: ['farmer']},
    ton:        {en: 'ton', de: 'Tonne (1000 kg)', ex: ['A rhino can weigh more than two ___.', 'One ___ is 1000 kilograms.'], exAns: ['tons', 'ton'], cat: 'noun', avoid: ['truck']},
    climatechange: {en: 'climate change', de: 'Klimawandel', img: 'units/bilder/u4-climate-change.jpg', ex: ['Because of ___, the ice at the North Pole is melting.', 'It is getting hotter and hotter on Earth. This is called ___.'], exAns: 'climate change', cat: 'noun', noPl: true}
  },

  /* ---------- Typische Fehler → Hinweis ---------- */
  errors: [
    {re: "\\bmore (big|small|tall|fast|slow|heavy|strong|hot|cold|long|short|old|young|hairy|hungry|happy|fat|thin|weak)\\b", hint: 'Kurze Adjektive steigerst du mit -er, nicht mit more – z. B. taller, heavier, bigger.'},
    {re: "\\bmost (big|small|tall|fast|slow|heavy|strong|hot|cold|long|short|old|young|hairy|hungry|happy|fat|thin|weak)\\b", hint: 'Kurze Adjektive: the …-est, nicht most – z. B. the tallest, the heaviest, the biggest.'},
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
      imgs: ['units/bilder/u4-chimpanzee.jpg', 'units/bilder/u4-anaconda.jpg', 'units/bilder/u4-giraffe.jpg'],
      text: `Last Saturday, Emma and her grandpa went to the zoo. First, they visited the giraffes. “Look how tall they are!” said Emma. Next to the giraffes, there was a big grey rhino. It was very heavy, and Grandpa said it was also very strong.

Then they went to the reptile house. Behind thick glass, there was a long green anaconda and a crocodile with sharp teeth. “Crocodiles are dangerous,” said Grandpa. “Never put your hand near the water!”

After lunch, they watched the chimpanzees. One chimpanzee was very hairy and very clever. It opened a box with a stick and found some fruit inside. A scientist told them that chimpanzees are very intelligent animals.

At the end of the day, Emma bought a small toy parrot in the zoo shop. “That was a great day!” she said.`,
      // Wort-Hilfe im Zusammenhang (antippen / Maus darüber). Unit-Wörter bewusst nicht übersetzt.
      glosses: {'Look how tall they are!': 'Schau, wie groß sie sind!', 'Next to': 'neben', 'grey': 'grau', 'reptile house': 'Reptilienhaus', 'Behind thick glass': 'hinter dickem Glas', 'sharp teeth': 'scharfe Zähne', 'Never put your hand near the water!': 'Steck deine Hand nie in die Nähe des Wassers!', 'After lunch': 'nach dem Mittagessen', 'with a stick': 'mit einem Stock', 'found some fruit inside': 'fand etwas Obst darin', 'told them': 'erzählte ihnen', 'At the end of the day': 'am Ende des Tages', 'toy': 'Spielzeug-', 'zoo shop': 'Zoo-Laden'},
      gist: [
        {q: 'Who went to the zoo?', right: 'Emma and her grandpa.', wrong: ['Emma and her mum.', 'Emma and her class.', 'Grandpa and a scientist.'], tip: 'Gleich im ersten Satz steht, wer in den Zoo gegangen ist.'}
      ],
      questions: [
        {q: 'Which animals did Emma and Grandpa see at the beginning?', right: 'The giraffes.', wrong: ['The rhinos.', 'The crocodiles.', 'The chimpanzees.'], tip: 'Lies den ersten Absatz: Was haben sie zuerst besucht?', ref: 'First, they visited the giraffes.'},
        {q: 'What did Grandpa say about the rhino?', right: 'It is very strong.', wrong: ['It is very dangerous.', 'It is very clever.', 'It is very tall.'], tip: 'Gefährlich (dangerous) hat Grandpa über die Krokodile gesagt – über das Nashorn sagt er etwas anderes.', ref: 'It was very heavy, and Grandpa said it was also very strong.'},
        {q: 'Grandpa told Emma that chimpanzees are very intelligent.', tf: false, tip: 'Das hat nicht Grandpa gesagt, sondern ein Wissenschaftler (a scientist).', ref: 'A scientist told them that chimpanzees are very intelligent animals.'},
        {q: 'How did the chimpanzee get its food?', right: 'It used a stick to open a box.', wrong: ['A scientist gave it the food.', 'It took the food from Emma.', 'It found the food behind the glass.'], tip: 'Lies den dritten Absatz.', ref: 'It opened a box with a stick and found some fruit inside.'},
        {q: 'What did Emma take home from the zoo?', right: 'A small toy parrot.', wrong: ['A small toy rhino.', 'A picture of a giraffe.', 'A box of fruit.'], tip: 'Lies den letzten Absatz: Was hat Emma im Zoo-Shop gekauft?', ref: 'Emma bought a small toy parrot in the zoo shop.'}
      ]
    },
    olympics: {
      title: 'The Animal Olympics',
      text: `Every year, the animals in the forest have their own Olympics. This year, Cheetah, Ostrich, Elephant and Chimpanzee took part.

The first event was a race around the lake. Cheetah was much faster than the others at the start. “Nobody is faster than me!” he shouted. But after one minute, he was tired and had to stop. Ostrich was slower, but she didn’t stop. In the end, Ostrich won the race. Elephant was much slower than the others, but he didn’t care.

The second event was weightlifting. Chimpanzee lifted a big piece of wood, but Elephant lifted a whole tree! He was much stronger than the others. Cheetah was weaker than Chimpanzee and couldn’t lift anything.

The last event was a puzzle. The animals had to open a box with a banana inside. Cheetah and Ostrich tried for twenty minutes, but they couldn’t open it. Chimpanzee opened the box in two minutes. “Chimpanzees are more intelligent than cheetahs,” he laughed.

In the end, everybody got a medal. “Who is the winner?” asked Ostrich. “All of us,” said Elephant. “We are all good at different things.”`,
      // Wort-Hilfe im Zusammenhang (antippen / Maus darüber). Unit-Wörter bewusst nicht übersetzt.
      glosses: {'their own Olympics': 'ihre eigenen Olympischen Spiele', 'took part': 'nahmen teil', 'event': 'Wettbewerb', 'race around the lake': 'Rennen rund um den See', 'at the start': 'am Anfang', 'shouted': 'rief', 'he was tired': 'war er müde', 'had to stop': 'musste stehen bleiben', 'didn’t stop': 'blieb nicht stehen', 'In the end': 'am Ende, schließlich', 'won the race': 'gewann das Rennen', 'much slower than': 'viel langsamer als', 'he didn’t care': 'es war ihm egal', 'weightlifting': 'Gewichtheben', 'lifted': 'hob hoch', 'a big piece of wood': 'ein großes Stück Holz', 'a whole tree': 'einen ganzen Baum', 'weaker than': 'schwächer als', 'couldn’t lift anything': 'konnte gar nichts heben', 'puzzle': 'Rätsel', 'had to open': 'mussten öffnen', 'tried for twenty minutes': 'versuchten es zwanzig Minuten lang', 'laughed': 'lachte', 'everybody got a medal': 'jeder bekam eine Medaille', 'All of us': 'wir alle', 'good at different things': 'gut in verschiedenen Dingen'},
      gist: [
        {q: 'Which event was NOT part of the Animal Olympics?', right: 'Swimming.', wrong: ['A race.', 'Weightlifting.', 'A puzzle.'], tip: 'Im Text gab es drei Wettbewerbe: ein Rennen, Gewichtheben und ein Rätsel.'}
      ],
      questions: [
        {q: 'Who won the race?', right: 'Ostrich.', wrong: ['Cheetah.', 'Elephant.', 'Chimpanzee.'], tip: 'Achtung: Cheetah war am Anfang am schnellsten, musste aber stehen bleiben. Lies den zweiten Absatz bis zum Ende.', ref: 'In the end, Ostrich won the race.'},
        {q: 'Why didn’t Cheetah win the race?', right: 'He got tired after one minute.', wrong: ['He was slower than Elephant.', 'He didn’t want to run.', 'He fell into the lake.'], tip: 'Lies den zweiten Absatz: Was passierte nach einer Minute?', ref: 'But after one minute, he was tired and had to stop.'},
        {q: 'What did Chimpanzee lift?', right: 'A big piece of wood.', wrong: ['A whole tree.', 'The box with the banana.', 'Nothing.'], tip: 'Den ganzen Baum hat Elephant gehoben. Lies den dritten Absatz.', ref: 'Chimpanzee lifted a big piece of wood'},
        {q: 'How long did Cheetah and Ostrich try to open the box?', right: 'For twenty minutes.', wrong: ['For two minutes.', 'For one minute.', 'For one hour.'], tip: 'Zwei Minuten hat Chimpanzee gebraucht. Lies den vierten Absatz genau.', ref: 'Cheetah and Ostrich tried for twenty minutes'},
        {q: 'Who is the winner, says Elephant?', right: 'All the animals.', wrong: ['Chimpanzee.', 'Ostrich.', 'Elephant himself.'], tip: 'Lies den letzten Absatz: „All of us“ – alle zusammen.', ref: '“All of us,” said Elephant.'}
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
      // Wort-Hilfe im Zusammenhang (antippen / Maus darüber). Unit-Wörter bewusst nicht übersetzt.
      glosses: {'amazing': 'erstaunlich', 'records': 'Rekorde', 'up to': 'bis zu', 'land animal': 'Landtier', 'only for a short time': 'nur für kurze Zeit', 'for much longer': 'viel länger', 'almost': 'fast, beinahe', 'shark': 'Hai', 'carry malaria': 'übertragen Malaria', 'hundreds of thousands of people': 'Hunderttausende Menschen', 'die from it': 'sterben daran', 'lays the biggest eggs': 'legt die größten Eier'},
      gist: [
        {q: 'Which animal is NOT in the text?', right: 'The dolphin.', wrong: ['The mosquito.', 'The ostrich.', 'The antelope.'], tip: 'Im Text kommen Blauwal, Gepard, Antilope, Giraffe, Stechmücke und Strauß vor – kein Delfin.'}
      ],
      questions: [
        {q: 'A blue whale is heavier than how many elephants?', right: '20.', wrong: ['30.', '150.', '100.'], tip: '30 ist die Länge in Metern, 150 das Gewicht in Tonnen. Lies den zweiten Absatz genau.', ref: 'that is heavier than 20 elephants'},
        {q: 'Which animal can run for a longer time than a cheetah?', right: 'The antelope.', wrong: ['The giraffe.', 'The ostrich.', 'The blue whale.'], tip: 'Lies den dritten Absatz: Wer ist langsamer, kann aber länger laufen?', ref: 'An antelope is not as fast as a cheetah, but it can run for much longer.'},
        {q: 'How tall are some giraffes?', right: 'Almost six metres.', wrong: ['About 30 metres.', 'About one metre.', 'More than 100 metres.'], tip: '30 Meter lang ist der Blauwal. Lies den vierten Absatz.', ref: 'Some giraffes are almost six metres tall.'},
        {q: 'Why are mosquitoes so dangerous?', right: 'They carry an illness.', wrong: ['They are bigger than crocodiles.', 'They attack sharks.', 'They eat birds’ eggs.'], tip: 'Lies den fünften Absatz: Mosquitoes carry malaria – Malaria ist eine Krankheit.', ref: 'Mosquitoes carry malaria'},
        {q: 'What else is special about the ostrich?', right: 'It lays the biggest eggs of all birds.', wrong: ['It can run more than 100 km/h.', 'It is almost six metres tall.', 'It can weigh up to 150 tons.'], tip: 'Die anderen Antworten gehören zu Gepard, Giraffe und Blauwal. Lies den letzten Absatz.', ref: 'It also lays the biggest eggs of all birds.'}
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
      // Wort-Hilfe im Zusammenhang (antippen / Maus darüber). Unit-Wörter bewusst nicht übersetzt.
      glosses: {'near his field': 'in der Nähe seines Feldes', 'Its mother was dead': 'Seine Mutter war tot', 'weak': 'schwach', 'I couldn’t leave it there': 'Ich konnte es nicht dort lassen', 'It needed help': 'Es brauchte Hilfe', 'every three hours': 'alle drei Stunden', 'even slept': 'schlief sogar', 'barn': 'Stall', 'called her': 'nannte sie', 'still follows him like a dog': 'folgt ihm immer noch wie ein Hund', 'walk around the farm': 'gehen auf dem Bauernhof herum', 'gentle': 'sanft', 'not all humans are bad': 'nicht alle Menschen sind schlecht', 'in danger': 'in Gefahr', 'kill them for their horns': 'töten sie wegen ihrer Hörner', 'other rhinos, too': 'auch andere Nashörner'},
      gist: [
        {q: 'Who are Joseph and Bahati?', right: 'A farmer and a rhino.', wrong: ['A farmer and his dog.', 'A scientist and a rhino.', 'Two brothers from Kenya.'], tip: 'Joseph ist der Bauer, Bahati ist das Nashorn.'}
      ],
      questions: [
        {q: 'How long have Joseph and Bahati known each other?', right: 'For eight years.', wrong: ['For two years.', 'For three years.', 'For eighteen years.'], tip: 'Die Antwort steht im ersten Satz.', ref: 'Eight years ago'},
        {q: 'How often did Joseph give the baby rhino milk?', right: 'Every three hours.', wrong: ['Every eight hours.', 'Every morning.', 'Twice a day.'], tip: 'Lies den zweiten Absatz.', ref: 'gave it milk every three hours'},
        {q: 'What does the rhino’s name mean in English?', right: 'Luck.', wrong: ['Friend.', 'Strong.', 'Forever.'], tip: 'Lies das Ende des zweiten Absatzes.', ref: 'that means “luck” in Swahili'},
        {q: 'What do Joseph and Bahati do every morning?', right: 'They walk around the farm.', wrong: ['They sleep in the barn.', 'They drink milk together.', 'They look for other rhinos.'], tip: 'Lies den dritten Absatz.', ref: 'Every morning, they walk around the farm together.'},
        {q: 'Joseph thinks that Bahati is not dangerous.', tf: true, tip: 'Joseph sagt: Die Leute glauben, Nashörner sind gefährlich – aber Bahati ist sanft (gentle).', ref: 'But Bahati is gentle.'}
      ]
    },
    dodo: {
      title: 'The Dodo – Gone Forever',
      text: `Have you ever heard of the dodo? It was a big bird that lived on Mauritius, a small island in the Indian Ocean. Dodos were about one metre tall and weighed about 15 kilograms.

Dodos couldn’t fly. They lived on the ground and built their nests there. For a long time, they had no enemies, so they were not afraid of anything.

In 1598, sailors from Europe came to the island. They brought dogs, pigs, cats and rats with them. These animals caught the dodos and ate their eggs. The sailors hunted the birds, too.

About 80 years later, the last dodo died. Nobody knows exactly when. Today, scientists can only learn about dodos from old pictures and bones.

The dodo is a famous example of an animal that died out. Its story shows us that humans must protect animals – before it is too late.`,
      // Wort-Hilfe im Zusammenhang (antippen / Maus darüber). Unit-Wörter bewusst nicht übersetzt.
      glosses: {'Have you ever heard of': 'Hast du schon einmal gehört von', 'island': 'Insel', 'Indian Ocean': 'Indischer Ozean', 'about one metre tall': 'ungefähr einen Meter groß', 'on the ground': 'auf dem Boden', 'built their nests': 'bauten ihre Nester', 'enemies': 'Feinde', 'were not afraid of anything': 'hatten vor nichts Angst', 'sailors': 'Seeleute', 'ate their eggs': 'fraßen ihre Eier', 'hunted': 'jagten', 'About 80 years later': 'ungefähr 80 Jahre später', 'exactly': 'genau', 'bones': 'Knochen', 'famous example': 'berühmtes Beispiel', 'before it is too late': 'bevor es zu spät ist'},
      gist: [
        {q: 'What is the text mainly about?', right: 'How a bird disappeared from an island.', wrong: ['How sailors found a new island.', 'Why birds build their nests on the ground.', 'How scientists look for old bones.'], tip: 'Denk an den ganzen Text: Es geht um den Dodo und warum es ihn nicht mehr gibt.'}
      ],
      questions: [
        {q: 'Where was the dodo’s home?', right: 'On an island in the Indian Ocean.', wrong: ['On an island near Europe.', 'In a forest in Africa.', 'On a ship from Europe.'], tip: 'Lies den ersten Absatz.', ref: 'a small island in the Indian Ocean'},
        {q: 'Why weren’t the dodos afraid of anything?', right: 'For a long time, they had no enemies.', wrong: ['They were bigger than the sailors.', 'They could run very fast.', 'Their nests were high in the trees.'], tip: 'Lies den zweiten Absatz.', ref: 'For a long time, they had no enemies'},
        {q: 'What happened to the dodos’ eggs?', right: 'Animals from the ships ate them.', wrong: ['The sailors took them to Europe.', 'Scientists put them in a museum.', 'The dodos left them in the trees.'], tip: 'Lies den dritten Absatz.', ref: 'These animals caught the dodos and ate their eggs.'},
        {q: 'Nobody can say exactly when the last dodo died.', tf: true, tip: 'Vierter Absatz: Niemand weiß genau, wann.', ref: 'Nobody knows exactly when.'},
        {q: 'How do scientists learn about dodos today?', right: 'From old pictures and bones.', wrong: ['From dodos in zoos.', 'From old dodo eggs.', 'From sailors on Mauritius.'], tip: 'Lies den vierten Absatz.', ref: 'old pictures and bones'}
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
    /* ===== HÜ 4 (1. HÜ dieser Unit) – Wortschatz ===== */
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
        {t: 'mc', img: 'units/bilder/u4-antelope.jpg', q: 'Welches Tier ist das?', right: 'antelope', wrong: ['cheetah', 'giraffe', 'chimpanzee'], why: 'antelope = Antilope.', w: ['antelope']},
        {t: 'letters', img: 'units/bilder/u4-cheetah.jpg', word: 'cheetah', de: 'Gepard', w: ['cheetah']},
        {t: 'match', words: ['hairy', 'heavy', 'strong', 'dangerous', 'fast', 'powerful']},
        {t: 'pic', scene: 'savanna', topic: 'vocabulary', caps: false,
         q: 'Welche Tiere siehst du auf dem Bild? Schreibe drei Tiere auf Englisch, durch Kommas getrennt.',
         model: 'giraffe, elephant, rhino',
         rules: [{type: 'count', res: ["\\bgiraffes?\\b", "\\belephants?\\b", "\\brhinos?\\b", "\\bcrocodiles?\\b", "\\bsnakes?\\b|\\banacondas?\\b"], n: 3, hint: 'Du hast {found} passende Tiere. Du brauchst drei – achte auch auf die Rechtschreibung.'}],
         hint2: 'Schau auch ganz unten ins Bild – dort liegen zwei Tiere am Boden.'},
        {t: 'reading', reading: 'zoo'},
        {t: 'gap', img: 'units/bilder/u4-ostrich.jpg', q: 'An ___ is a big bird, but it cannot fly.', first: true, ans: ['ostrich'], w: ['ostrich']},
        {t: 'gap', q: 'Be careful! Crocodiles can kill people. They are very ___.', first: true, ans: ['dangerous'], w: ['dangerous']},
        {t: 'gap', q: 'My dog has got lots of fur. It is very ___.', first: true, ans: ['hairy'], w: ['hairy']},
        {t: 'listen', say: 'chimpanzee', de: 'Schimpanse', w: ['chimpanzee']},
        {t: 'cloze', title: 'Lückentext: Tier-Steckbriefe',
         text: 'Dolphins can learn tricks. They are very [intelligent|hairy|venomous] animals.\nA rhino weighs more than two tons. It is very [heavy|smart|female].\nSome snakes can kill other animals with poison. They are [venomous|hairy|intelligent].\nA [bat|pigeon|parrot] is a mammal, but it can fly.',
         why: 'Lies jeden Satz bis zum Ende – der zweite Teil verrät dir das passende Wort.', w: ['venomous', 'heavy', 'bat']},
        {t: 'find', topic: 'vocabulary', sentence: 'A cheetah can run very *fat*.', fix: ['fast'], why: 'fast = schnell. fat = dick.', w: ['fast']},
        {t: 'sent', stair: true, lvl: 1, topic: 'writing', head: 'Schreibtreppe · Stufe 1 von 3', q: 'Schreib den Satz noch einmal – aber mit rhino statt cheetah und heavy statt fast.', from: 'A cheetah is very fast.', ans: ['A rhino is very heavy.', 'The rhino is very heavy.'], w: ['rhino', 'heavy']},
        {t: 'sent', stair: true, lvl: 2, topic: 'writing', head: 'Schreibtreppe · Stufe 2 von 3', q: 'Schreib einen ganzen Satz mit diesen Wörtern.', keys: ['giraffe', 'has got', 'long neck'], show: 'A ___ has got a ___ ___.', ans: ['A giraffe has got a long neck.', 'The giraffe has got a long neck.', 'A giraffe has a long neck.', 'The giraffe has a long neck.'], w: ['giraffe']},
        {t: 'open', head: 'Schreibtreppe · Stufe 3 von 3: deine eigenen Sätze',
         imgs: ['units/bilder/u4-rhino.jpg', 'units/bilder/u4-giraffe.jpg', 'units/bilder/u4-parrot.jpg'],
         q: 'Beschreibe ein Tier in ZWEI Sätzen (wie es aussieht oder was es kann) – z. B. eines von den Bildern. Verwende mindestens ein Adjektiv aus der Unit.',
         easy: {q: 'Beschreibe ein Tier in EINEM Satz. Verwende ein Adjektiv aus der Unit.', model: 'A rhino is very heavy.',
                rules: [{type: 'count', res: ["\\b(giraffes?|antelopes?|chimpanzees?|bats?|rhinos?|cheetahs?|dolphins?|whales?|mosquito(e)?s?|pigeons?|parrots?|ostrich(es)?|anacondas?|crocodiles?)\\b"], n: 1, hint: 'Nenne ein Tier aus der Unit (z. B. cheetah, rhino, dolphin …).'},
                        {type: 'count', res: ["\\b(small|big|hairy|heavy|dangerous|strong|clever|fast|smart|intelligent|powerful|venomous|incredible|tall|long)\\b"], n: 1, hint: 'Verwende ein Adjektiv aus der Unit, z. B. heavy, fast, dangerous, hairy …'},
                        {type: 'eachSentence', re: "\\b(is|are|can|has|have|lives|live|eats|eat|runs|run|got)\\b", hint: 'Dein Satz braucht ein Verb, z. B. is.'},
                        {type: 'words', min: 4, hint: 'Schreibe einen ganzen Satz mit mindestens vier Wörtern.'}]},
         plan: {example: 'My brother is very tall. He can run fast.', about: 'Du schreibst gleich über ein Tier aus der Unit.',
                s1: 'Satz 1: Welches Tier beschreibst du – und wie ist es?',
                slots: [{name: 'Tier', from: ['rhino', 'giraffe', 'parrot', 'cheetah', 'dolphin', 'crocodile', 'chimpanzee', 'whale']},
                        {name: 'Adjektiv (wie ist es?)', from: ['heavy', 'strong', 'fast', 'dangerous', 'hairy', 'clever', 'big', 'small']}],
                frame: '{A0} is ____.', frame2: 'It can … / It has got …',
                bank: {label: 'Ideen für Satz 2 (Was kann es? Wie sieht es aus?)', words: ['can run fast', 'can swim', 'can fly', 'can’t fly', 'has got a long neck', 'has got a horn', 'has got sharp teeth', 'lives in the sea', 'eats leaves']}},
         model: 'A rhino is very heavy. It has got a horn on its nose.',
         rules: [{type: 'sentences', min: 2, hint: 'Schreibe zwei Sätze und beende jeden Satz mit einem Punkt.'},
                 {type: 'count', res: ["\\b(giraffes?|antelopes?|chimpanzees?|bats?|rhinos?|cheetahs?|dolphins?|whales?|mosquito(e)?s?|pigeons?|parrots?|ostrich(es)?|anacondas?|crocodiles?)\\b"], n: 1, hint: 'Nenne ein Tier aus der Unit (z. B. cheetah, rhino, dolphin …).'},
                 {type: 'count', res: ["\\b(small|big|hairy|heavy|dangerous|strong|clever|fast|smart|intelligent|powerful|venomous|incredible|tall|long)\\b"], n: 1, hint: 'Verwende ein Adjektiv aus der Unit, z. B. heavy, fast, dangerous, hairy …'},
                 {type: 'eachSentence', re: "\\b(is|are|can|has|have|lives|live|eats|eat|runs|run|got)\\b", hint: 'Jeder Satz braucht ein Verb, z. B. is, can oder has got.'},
                 {type: 'wordsPerSentence', min: 4, hint: 'Schreibe ganze Sätze mit mindestens vier Wörtern.'}]}
      ]
    },

    /* ===== HÜ 5 (2.) – Komparativ ===== */
    {
      title: 'Bigger, Faster, Stronger',
      control: {words: 3, nSentences: 2, sentences: [
        {de: 'Ein Wal ist größer als ein Delfin.', ans: ['A whale is bigger than a dolphin.']},
        {de: 'Ein Krokodil ist gefährlicher als ein Papagei.', ans: ['A crocodile is more dangerous than a parrot.']},
        {de: 'Mein Hund ist schwerer als meine Katze.', ans: ['My dog is heavier than my cat.']},
        {de: 'Heute ist das Wetter schlechter als gestern.', ans: ['Today the weather is worse than yesterday.', 'The weather is worse today than yesterday.', 'Today the weather is worse than it was yesterday.']}
      ]},
      tasks: [
        {t: 'intro', title: 'Zwei Tiere vergleichen', steps: [
          {imgs: ['units/bilder/u4-cheetah.jpg', 'units/bilder/u4-ostrich.jpg'], text: 'Schau dir die zwei Tiere an:\n\n**A cheetah is faster than an ostrich.**\n= Ein Gepard ist schneller als ein Strauß.',
           check: {q: 'Welches Wort bedeutet „als“?', right: 'than', wrong: ['then', 'as', 'that'], why: 'than = als. Merk dir: than mit a – then (mit e) heißt „dann“.'},
           check2: {q: 'Welcher Satz ist richtig?', right: 'A dog is faster than a cat.', wrong: ['A dog is faster then a cat.', 'A dog is faster as a cat.'], why: 'Nach dem Vergleich steht than (= als).'}},
          {text: 'Bei **kurzen** Adjektiven hängst du **-er** an:\n\n- fast → fast**er**\n- small → small**er**\n- strong → strong**er**',
           check: {q: 'tall → ?', right: 'taller', wrong: ['more tall', 'tallest', 'talller'], why: 'tall ist kurz: einfach -er anhängen.'},
           check2: {q: 'long → ?', right: 'longer', wrong: ['more long', 'longest', 'longger'], why: 'long ist kurz: einfach -er anhängen.'}}],
         summary: 'Kurzes Adjektiv + **-er** + **than**:\n*A cheetah is fast**er than** an ostrich.*'},
        {t: 'gap', imgs: ['units/bilder/u4-cheetah.jpg', 'units/bilder/u4-antelope.jpg'], rule: 'Komparativ: -er + than', topic: 'grammar', q: 'A cheetah is ___ than an antelope. (fast or slow?)', ans: ['faster'], tip: 'Kurzes Adjektiv: -er anhängen.', else: 'Lies den Satz genau: Welches der beiden Adjektive passt zu den Tieren?'},
        {t: 'intro', title: 'Achtung Schreibweise', steps: [
          {text: 'Kurze Wörter mit **einem** Selbstlaut und **einem** Mitlaut am Ende: Den Mitlaut **verdoppeln**.\n\n- bi**g** → bi**gg**er\n- ho**t** → ho**tt**er',
           check: {q: 'fat → ?', right: 'fatter', wrong: ['fater', 'more fat', 'fatest'], why: 'fat: ein Selbstlaut (a) und t am Ende → t verdoppeln: fatter.'},
           check2: {q: 'thin → ?', right: 'thinner', wrong: ['thiner', 'more thin', 'thinnest'], why: 'thin: ein Selbstlaut (i) und n am Ende → n verdoppeln: thinner.'}},
          {text: 'Wörter mit **-y** am Ende: Das y wird zu **i**.\n\n- heav**y** → heav**ier**\n- happ**y** → happ**ier**',
           check: {q: 'funny → ?', right: 'funnier', wrong: ['funnyer', 'more funny', 'funnyier'], why: 'funny endet auf -y: y wird zu i → funnier.'},
           check2: {q: 'hungry → ?', right: 'hungrier', wrong: ['hungryer', 'more hungry', 'hungryier'], why: 'hungry endet auf -y: y wird zu i → hungrier.'}}],
         summary: 'big → bi**gg**er · hot → ho**tt**er · heavy → heav**ier**'},
        {t: 'mc', rule: 'Schreibweise: bigger, heavier, the biggest', topic: 'grammar', q: 'A whale is ___ than a dolphin.', right: 'bigger', wrong: ['biger', 'more big', 'big'], why: 'big → bigger: Der letzte Buchstabe wird verdoppelt.'},
        {t: 'gap', imgs: ['units/bilder/u4-rhino.jpg', 'units/bilder/u4-chimpanzee.jpg'], rule: 'Schreibweise: bigger, heavier, the biggest', topic: 'grammar', q: 'A rhino is ___ than a chimpanzee. (heavy or hairy?)', ans: ['heavier'], tip: 'Achte auf das y am Ende.', else: 'Lies den Satz genau: Welches der beiden Adjektive passt zu den Tieren?'},
        {t: 'gap', rule: 'Schreibweise: bigger, heavier, the biggest', topic: 'grammar', q: 'In Africa, it is ___ than in Austria. (hot or cold?)', ans: ['hotter'], tip: 'Kurzes Wort mit einem Selbstlaut: Buchstabe verdoppeln.', else: 'Lies den Satz genau: Welches der beiden Adjektive passt?'},
        {t: 'intro', title: 'Lange Adjektive', steps: [
          {text: 'Bei **langen** Adjektiven schreibst du **more** davor:\n\n- dangerous → **more** dangerous\n- intelligent → **more** intelligent\n\n*A crocodile is **more dangerous than** a parrot.*',
           check: {q: 'intelligent → ?', right: 'more intelligent', wrong: ['intelligenter', 'more intelligenter', 'most intelligent'], why: 'intelligent ist lang: more davor, das Wort bleibt gleich.'},
           check2: {q: 'powerful → ?', right: 'more powerful', wrong: ['powerfuler', 'more powerfuler', 'most powerful'], why: 'powerful ist lang: more davor, das Wort bleibt gleich.'}},
          {text: '**Nie beides!** Entweder -er **oder** more.\n\n- ✘ more bigger → ✔ bigger\n- ✘ more dangerouser → ✔ more dangerous',
           check: {q: 'Welche Form ist richtig?', right: 'stronger', wrong: ['more stronger', 'more strong', 'strongger'], why: 'strong ist kurz: nur -er, kein more.'},
           check2: {q: 'Welche Form ist richtig?', right: 'more interesting', wrong: ['interestinger', 'more interestinger', 'most interesting'], why: 'interesting ist lang: nur more, kein -er.'}}],
         summary: 'kurz: fast**er** · lang: **more** dangerous · nie beides'},
        {t: 'sort', rule: 'lange Adjektive: more / the most', topic: 'grammar', q: 'Wie wird das Adjektiv gesteigert?', groups: ['mit -er', 'mit more'],
         items: [['fast', 0], ['heavy', 0], ['small', 0], ['strong', 0], ['dangerous', 1], ['intelligent', 1], ['powerful', 1], ['interesting', 1]],
         why: 'Kurze Adjektive (eine Silbe oder -y am Ende) bekommen -er, lange Adjektive more.'},
        {t: 'order', rule: 'lange Adjektive: more / the most', tiles: ['A crocodile', 'is', 'more dangerous', 'than', 'a parrot']},
        {t: 'reading', reading: 'olympics'},
        {t: 'intro', title: 'Zwei Ausnahmen: good und bad', steps: [
          {text: 'good und bad sind **Ausnahmen** – sie bekommen ein ganz neues Wort:\n\n- good → **better**\n- bad → **worse**\n\n*My English is good, but your English is **better**.*',
           check: {q: 'bad → ?', right: 'worse', wrong: ['badder', 'more bad', 'worst'], why: 'Ausnahme: bad → worse.'},
           check2: {q: 'good → ?', right: 'better', wrong: ['gooder', 'more good', 'best'], why: 'Ausnahme: good → better.'}}],
         summary: '- kurz: fast**er** than\n- Schreibweise: bi**gg**er, heav**ier**\n- lang: **more** dangerous than\n- Ausnahmen: good → **better**, bad → **worse**'},
        {t: 'gap', rule: 'good – better – best / bad – worse – worst', topic: 'grammar', q: 'The weather today is bad, but yesterday it was even ___. (bad)', ans: ['worse'], tip: 'Ausnahme – ein ganz neues Wort.'},
        {t: 'cloze', rule: 'good – better – best / bad – worse – worst', title: 'Lückentext: Mein Haustier ist …',
         text: 'Ben: My dog is [bigger|more big|biger] than your cat.\nLisa: Yes, but my cat is [cleverer|more clever as|clever] than your dog!\nBen: No way! My dog is [more intelligent|intelligenter|more intelligenter] than all the cats in the street.\nLisa: OK, but my parrot can talk. It’s [better|gooder|more good] than both of them!',
         why: 'Kurz: -er · lang: more · Ausnahme: good → better.'},
        {t: 'correct', rule: 'lange Adjektive: more / the most', sentence: 'An elephant is more heavy as a rhino.', n: 2, mark: ['more', 'heavy', 'as'], ans: ['An elephant is heavier than a rhino.']},
        {t: 'sent', stair: true, lvl: 1, rule: 'Komparativ: -er + than', head: 'Schreibtreppe · Stufe 1 von 4', q: 'Schreib den Satz noch einmal – aber mit shark statt dolphin.', from: 'A whale is bigger than a dolphin.', ans: ['A whale is bigger than a shark.', 'The whale is bigger than the shark.']},
        {t: 'sent', stair: true, lvl: 2, rule: 'Komparativ: -er + than', head: 'Schreibtreppe · Stufe 2 von 4', q: 'Vergleiche die zwei Tiere. Schreib einen ganzen Satz mit diesen Wörtern.', keys: ['giraffe', 'tall', 'horse'], show: 'A ___ is ___ than a ___.', ans: ['A giraffe is taller than a horse.', 'The giraffe is taller than the horse.', 'Giraffes are taller than horses.']},
        {t: 'sent', stair: true, lvl: 2, rule: 'lange Adjektive: more / the most', head: 'Schreibtreppe · Stufe 3 von 4', q: 'Vergleiche die zwei Tiere. Schreib einen ganzen Satz mit diesen Wörtern – diesmal ohne Gerüst.', keys: ['mosquito', 'dangerous', 'pigeon'], ans: ['A mosquito is more dangerous than a pigeon.', 'The mosquito is more dangerous than the pigeon.', 'Mosquitoes are more dangerous than pigeons.', 'Mosquitos are more dangerous than pigeons.']},
        {t: 'open', head: 'Schreibtreppe · Stufe 4 von 4: deine eigenen Sätze',
         q: 'Vergleiche Tiere in ZWEI Sätzen. In jedem Satz soll ein Vergleich mit than vorkommen. Verwende verschiedene Adjektive.',
         easy: {q: 'Vergleiche zwei Tiere in EINEM Satz mit than.', model: 'A whale is bigger than a dolphin.',
                rules: [{type: 'eachSentence', re: "\\b(\\w+er|more \\w+|less \\w+) than\\b", hint: 'Dein Satz braucht einen Vergleich mit than, z. B. bigger than oder more dangerous than.'},
                        {type: 'count', res: U4_ANIMALS, n: 2, hint: 'Vergleiche zwei echte Tiere miteinander, z. B. whale, dolphin, cheetah, crocodile …'},
                        {type: 'words', min: 6, hint: 'Schreibe einen ganzen Satz, z. B. „A whale is bigger than a dolphin.“'}]},
         plan: {example: 'A plane is faster than a car. Football is more interesting than golf.', about: 'Du vergleichst gleich Tiere – so wie hier Dinge verglichen werden.',
                s1: 'Satz 1: Welche zwei Tiere vergleichst du – und mit welchem Adjektiv?',
                slots: [{name: 'Tier 1', from: ['whale', 'cheetah', 'rhino', 'crocodile', 'dolphin', 'giraffe', 'chimpanzee', 'pigeon']},
                        {name: 'Adjektiv', from: ['big', 'fast', 'heavy', 'strong', 'small', 'dangerous', 'intelligent']},
                        {name: 'Tier 2', from: ['whale', 'cheetah', 'rhino', 'crocodile', 'dolphin', 'giraffe', 'chimpanzee', 'pigeon'], not: 0}],
                frame: '{A0} is ____ than {a2}.', frame2: '… is ____ than …',
                bank: {label: 'Für Satz 2: andere Tiere und ein anderes Adjektiv', words: ['ostrich', 'parrot', 'mosquito', 'antelope', 'bat', 'tall', 'hairy', 'clever', 'powerful', 'good']}},
         model: 'A whale is bigger than a dolphin. A dolphin is more intelligent than a crocodile.',
         rules: [{type: 'sentences', min: 2, hint: 'Schreibe zwei Sätze und beende jeden Satz mit einem Punkt.'},
                 {type: 'eachSentence', re: "\\b(\\w+er|more \\w+|less \\w+) than\\b", hint: 'Jeder Satz braucht einen Vergleich mit than, z. B. bigger than oder more dangerous than.'},
                 {type: 'count', res: U4_ANIMALS, n: 2, hint: 'Vergleiche echte Tiere miteinander, z. B. whale, dolphin, cheetah, crocodile …'},
                 {type: 'differentStarts', words: 3, hint: 'Vergleiche in den beiden Sätzen verschiedene Tiere oder verwende verschiedene Adjektive.'},
                 {type: 'wordsPerSentence', min: 5, hint: 'Schreibe ganze Sätze, z. B. „A whale is bigger than a dolphin.“'}]}
      ]
    },

    /* ===== HÜ 6 (3.) – Superlativ und as … as ===== */
    {
      title: 'The Biggest and the Best',
      control: {words: 3, nSentences: 2, sentences: [
        {de: 'Der Gepard ist das schnellste Tier.', ans: ['The cheetah is the fastest animal.']},
        {de: 'Ein Delfin ist so klug wie ein Schimpanse.', ans: ['A dolphin is as intelligent as a chimpanzee.', 'A dolphin is as smart as a chimpanzee.', 'A dolphin is as clever as a chimpanzee.']},
        {de: 'Das ist der schlechteste Film.', ans: ['This is the worst film.', 'That is the worst film.', 'This is the worst movie.', 'That is the worst movie.']},
        {de: 'Eine Taube ist nicht so schnell wie ein Gepard.', ans: ['A pigeon is not as fast as a cheetah.']}
      ]},
      tasks: [
        {t: 'intro', title: 'Der Superlativ – am …sten', steps: [
          {img: 'units/bilder/u4-whale.jpg', text: 'Mit dem **Superlativ** sagst du: Das ist **am** größten, **am** schnellsten … von **allen**.\n\n**The blue whale is the biggest animal in the world.**\n= Der Blauwal ist das größte Tier der Welt.',
           check: {q: 'Welches Wort steht immer vor dem Superlativ?', right: 'the', wrong: ['a', 'than', 'as'], why: 'Beim Superlativ steht immer the davor: the biggest.'},
           check2: {q: 'Welcher Satz ist richtig?', right: 'It is the fastest animal.', wrong: ['It is fastest animal.', 'It is a fastest animal.'], why: 'Vor dem Superlativ steht the.'}},
          {text: 'Kurze Adjektive: **the …-est**\n\n- fast → the fast**est**\n- big → the bi**gg**est\n- heavy → the heav**iest**\n\nDie Schreibweise ist wie beim Komparativ.',
           check: {q: 'tall → ?', right: 'the tallest', wrong: ['the most tall', 'the taller', 'tallest the'], why: 'tall ist kurz: the + tall + est.'},
           check2: {q: 'hot → ?', right: 'the hottest', wrong: ['the hotest', 'the most hot', 'the hotter'], why: 'hot: t verdoppeln wie bei hotter → the hottest.'}},
          {text: 'Lange Adjektive: **the most** …\n\n- dangerous → **the most** dangerous\n\nAusnahmen: good → **the best**, bad → **the worst**',
           check: {q: 'good → ?', right: 'the best', wrong: ['the goodest', 'the most good', 'the better'], why: 'Ausnahme: good → better → the best.'},
           check2: {q: 'intelligent → ?', right: 'the most intelligent', wrong: ['the intelligentest', 'the more intelligent', 'the most intelligentest'], why: 'intelligent ist lang: the most davor.'}}],
         summary: 'the fast**est** · the bi**gg**est · the **most** dangerous · the **best** · the **worst**'},
        {t: 'mc', rule: 'Schreibweise: bigger, heavier, the biggest', topic: 'grammar', q: 'The blue whale is ___ animal in the world.', right: 'the biggest', wrong: ['the bigest', 'the most big', 'bigger'], why: 'big → the biggest: the + verdoppelter Buchstabe + -est.'},
        {t: 'odd', rule: 'Superlativ: the …-est / the most', topic: 'grammar', q: 'Welche Form passt nicht zu den anderen?', items: ['bigger', 'faster', 'the strongest', 'heavier'], odd: 'the strongest', why: 'bigger, faster und heavier sind Komparative (zwei vergleichen) – the strongest ist ein Superlativ.'},
        {t: 'sort', rule: 'Superlativ: the …-est / the most', topic: 'grammar', q: 'Komparativ oder Superlativ?', groups: ['Komparativ', 'Superlativ'],
         items: [['faster', 0], ['the fastest', 1], ['more dangerous', 0], ['the most dangerous', 1], ['better', 0], ['the best', 1], ['worse', 0], ['the worst', 1]],
         why: 'Komparativ = zwei vergleichen (than) · Superlativ = der/die/das …ste (the).'},
        {t: 'gap', img: 'units/bilder/u4-cheetah.jpg', rule: 'Superlativ: the …-est / the most', topic: 'grammar', q: 'The cheetah is ___ land animal in the world. (fast)', ans: ['the fastest'], tip: 'Superlativ: the + Adjektiv + -est.'},
        {t: 'gap', rule: 'Superlativ: the …-est / the most', topic: 'grammar', q: 'The mosquito is ___ animal in the world. (dangerous)', ans: ['the most dangerous'], tip: 'Langes Adjektiv: the most + Adjektiv.'},
        {t: 'intro', title: 'as … as – gleich oder nicht gleich?', steps: [
          {imgs: ['units/bilder/u4-dolphin.jpg', 'units/bilder/u4-chimpanzee.jpg'], text: 'Mit **as … as** sagst du: Die zwei sind **gleich**.\n\n**A dolphin is as intelligent as a chimpanzee.**\n= Ein Delfin ist so klug wie ein Schimpanse.\n\nZwischen as und as steht die **Grundform** – kein -er!',
           check: {q: 'Welcher Satz ist richtig?', right: 'A cat is as fast as a dog.', wrong: ['A cat is as faster as a dog.', 'A cat is as fast than a dog.', 'A cat is fast as a dog.'], why: 'as + Grundform + as: as fast as.'},
           check2: {q: 'A rhino is as ___ as a car.', right: 'heavy', wrong: ['heavier', 'the heaviest', 'more heavy'], why: 'Zwischen as und as steht die Grundform: as heavy as.'}},
          {imgs: ['units/bilder/u4-pigeon.jpg', 'units/bilder/u4-cheetah.jpg'], text: 'Mit **not as … as** sagst du: Die zwei sind **nicht** gleich.\n\n**A pigeon is not as fast as a cheetah.**\n= Eine Taube ist nicht so schnell wie ein Gepard.',
           check: {q: '„A pigeon is not as fast as a cheetah.“ Was bedeutet das?', right: 'The cheetah is faster.', wrong: ['The pigeon is faster.', 'Both are equally fast.'], why: 'not as fast as = nicht so schnell wie → der Gepard ist schneller.'},
           check2: {q: '„A mouse is not as big as a cat.“ Was bedeutet das?', right: 'The cat is bigger.', wrong: ['The mouse is bigger.', 'Both are the same size.'], why: 'not as big as = nicht so groß wie → die Katze ist größer.'}}],
         summary: '**as** fast **as** = so schnell wie · **not as** fast **as** = nicht so schnell wie'},
        {t: 'cloze', rule: 'as … as / not as … as', title: 'Lückentext: Gleich oder nicht gleich?',
         text: 'An antelope is fast, but it is not [as fast as|faster as|as fast than] a cheetah.\nA dolphin is [as intelligent as|as intelligent than|intelligenter as] a chimpanzee – both are very clever.\nA pigeon is not [as heavy as|heavier as|as heavier as] an ostrich.',
         why: 'as + Grundform + as – nie than und nie -er dazwischen.'},
        {t: 'order', rule: 'as … as / not as … as', tiles: ['A pigeon', 'is not', 'as fast as', 'a cheetah']},
        {t: 'reading', reading: 'records'},
        {t: 'correct', rule: 'Superlativ: the …-est / the most', sentence: 'The blue whale is the most heavy animal of the world.', n: 2, mark: ['most', 'heavy', 'of'], ans: ['The blue whale is the heaviest animal in the world.']},
        {t: 'cloze', rule: 'as … as / not as … as', title: 'Lückentext zum Schreiben',
         text: 'The cheetah is [[the fastest]] (fast) animal on land.\nElephants are [[heavier]] (heavy) than rhinos.\nA parrot is not as [[big]] (big) as an ostrich.\nFor me, dolphins are [[the most interesting]] (interesting) animals of all.'},
        {t: 'sent', stair: true, lvl: 1, rule: 'Superlativ: the …-est / the most', head: 'Schreibtreppe · Stufe 1 von 4', q: 'Schreib den Satz noch einmal – aber mit heaviest statt biggest.', from: 'The blue whale is the biggest animal in the world.', ans: ['The blue whale is the heaviest animal in the world.']},
        {t: 'sent', stair: true, lvl: 2, rule: 'Superlativ: the …-est / the most', head: 'Schreibtreppe · Stufe 2 von 4', q: 'Schreib einen ganzen Satz mit einem Superlativ.', keys: ['giraffe', 'tall', 'animal in the world'], show: 'The ___ is the ___ animal in the world.', ans: ['The giraffe is the tallest animal in the world.']},
        {t: 'sent', stair: true, lvl: 2, rule: 'as … as / not as … as', head: 'Schreibtreppe · Stufe 3 von 4', q: 'Schreib einen ganzen Satz mit not as … as – diesmal ohne Gerüst.', keys: ['mouse', 'not as … as', 'big', 'cat'], ans: ['A mouse is not as big as a cat.', 'The mouse is not as big as the cat.', 'Mice are not as big as cats.']},
        {t: 'open', head: 'Schreibtreppe · Stufe 4 von 4: deine eigenen Sätze',
         q: 'Schreibe ZWEI Sätze über Tiere: einen mit einem Superlativ (the …-est / the most …) und einen mit as … as oder not as … as.',
         easy: {q: 'Schreibe EINEN Satz über ein Tier mit einem Superlativ (the …-est / the most …).', model: 'The cheetah is the fastest animal in the world.',
                rules: [{type: 'someSentence', re: "\\bthe (\\w+est|most \\w+|best|worst)\\b", hint: 'Dein Satz braucht einen Superlativ mit the, z. B. the biggest oder the most dangerous.'},
                        {type: 'count', res: U4_ANIMALS, n: 1, hint: 'Schreibe über ein Tier – nenne es, z. B. the cheetah, the blue whale …'},
                        {type: 'words', min: 5, hint: 'Schreibe einen ganzen Satz mit mindestens fünf Wörtern.'}]},
         plan: {example: 'Mount Everest is the highest mountain in the world. A car is not as fast as a plane.', about: 'Du schreibst gleich zwei solche Sätze über Tiere.',
                s1: 'Satz 1 (Superlativ): Welches Tier ist am …sten?',
                slots: [{name: 'Tier', from: ['cheetah', 'blue whale', 'giraffe', 'mosquito', 'ostrich', 'rhino', 'chimpanzee', 'dolphin']}, {name: 'Adjektiv', from: ['fast', 'big', 'heavy', 'tall', 'dangerous', 'strong', 'intelligent', 'small']}],
                frame: 'The {0} is the ____ animal in the world.', frame2: '… is (not) as ____ as …',
                bank: {label: 'Ideen für Satz 2 (as … as / not as … as)', words: ['pigeon', 'antelope', 'parrot', 'crocodile', 'bat', 'fast', 'big', 'heavy', 'clever', 'dangerous']}},
         model: 'The cheetah is the fastest animal in the world. A pigeon is not as fast as a cheetah.',
         rules: [{type: 'sentences', min: 2, hint: 'Schreibe zwei Sätze und beende jeden Satz mit einem Punkt.'},
                 {type: 'someSentence', re: "\\bthe (\\w+est|most \\w+|best|worst)\\b", hint: 'Ein Satz braucht einen Superlativ mit the, z. B. the biggest oder the most dangerous.'},
                 {type: 'someSentence', re: "\\bas \\w+ as\\b", hint: 'Ein Satz braucht as … as, z. B. as fast as.'},
                 {type: 'count', res: U4_ANIMALS, n: 1, hint: 'Schreibe über Tiere – nenne mindestens ein Tier, z. B. cheetah, pigeon, whale …'},
                 {type: 'wordsPerSentence', min: 5, hint: 'Schreibe ganze Sätze mit mindestens fünf Wörtern.'}]}
      ]
    },

    /* ===== HÜ 7 (4.) – Lesen, Schreiben, Anwenden ===== */
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
        {t: 'cloze', rule: 'unregelmäßige Verben (Past Simple)', title: 'Lückentext zum Schreiben: Was geschah mit dem Dodo?',
         text: 'In 1598, sailors [[brought]] (bring) dogs, pigs and rats to the island.\nThe animals [[caught]] (catch) the birds and ate their eggs.\nFor a long time, people [[thought]] (think) there were lots of dodos.\nBut about 80 years later, the last dodo [[died]] (die).'},
        {t: 'pic', scene: 'compare', topic: 'grammar', rule: 'Komparativ: -er + than',
         q: 'Vergleiche die zwei Tiere auf dem Bild in EINEM ganzen Satz mit than.',
         model: 'The elephant is bigger than the mouse.',
         rules: [{type: 'match', re: "\\belephants?\\b", hint: 'Nenne den Elefanten (elephant).'},
                 {type: 'match', re: "\\b(mouse|mice)\\b", hint: 'Nenne die Maus (mouse).'},
                 {type: 'match', re: "\\b(\\w+er|more \\w+|less \\w+) than\\b", hint: 'Verwende einen Vergleich mit than, z. B. bigger than oder heavier than.'},
                 {type: 'words', min: 6, hint: 'Schreibe einen ganzen Satz, z. B. „The elephant is … than the mouse.“'}],
         hint2: 'So kann der Satz beginnen: „The elephant is …“'},
        {t: 'sent', stair: true, lvl: 2, rule: 'Superlativ: the …-est / the most', head: 'Schreibtreppe · Stufe 1 von 3', q: 'Schreib einen ganzen Satz mit einem Superlativ.', keys: ['ostrich', 'big', 'bird in the world'], show: 'The ___ is the ___ bird in the world.', ans: ['The ostrich is the biggest bird in the world.']},
        {t: 'sent', stair: true, lvl: 2, rule: 'Komparativ: -er + than', head: 'Schreibtreppe · Stufe 2 von 3', q: 'Schreib einen ganzen Satz mit einem Vergleich (… than …) – diesmal ohne Gerüst.', keys: ['blue whale', 'heavy', 'twenty elephants'], ans: ['A blue whale is heavier than twenty elephants.', 'The blue whale is heavier than twenty elephants.', 'A blue whale is heavier than 20 elephants.', 'The blue whale is heavier than 20 elephants.', 'Blue whales are heavier than twenty elephants.']},
        {t: 'open', head: 'Schreibtreppe · Stufe 3 von 3: deine eigenen Sätze',
         q: 'Schreibe ZWEI Sätze für ein Tier-Magazin über ein Tier deiner Wahl: einen mit einem Superlativ (the …-est / the most …) und einen mit einem Vergleich (… than … oder as … as).',
         easy: {q: 'Schreibe EINEN Satz über ein Tier mit einem Superlativ (the …-est / the most …).', model: 'The cheetah is the fastest animal in the world.',
                rules: [{type: 'someSentence', re: "\\bthe (\\w+est|most \\w+|best|worst)\\b", hint: 'Dein Satz braucht einen Superlativ mit the, z. B. the biggest oder the most dangerous.'},
                        {type: 'count', res: U4_ANIMALS, n: 1, hint: 'Schreibe über ein Tier – nenne es, z. B. the cheetah, the blue whale …'},
                        {type: 'words', min: 5, hint: 'Schreibe einen ganzen Satz mit mindestens fünf Wörtern.'}]},
         plan: {example: 'The Nile is the longest river in Africa. It is longer than the Danube.', about: 'Du schreibst gleich zwei solche Sätze über ein Tier.',
                s1: 'Satz 1 (Superlativ): Über welches Tier schreibst du – und was ist besonders?',
                slots: [{name: 'Tier', from: ['cheetah', 'blue whale', 'giraffe', 'mosquito', 'ostrich', 'rhino', 'chimpanzee', 'dolphin']}, {name: 'Adjektiv', from: ['fast', 'big', 'heavy', 'tall', 'dangerous', 'strong', 'intelligent', 'small']}],
                frame: 'The {0} is the ____ animal in the world.', frame2: 'It is ____ than … / It is as ____ as …',
                bank: {label: 'Ideen für Satz 2 (Vergleich mit than oder as … as)', words: ['fast', 'big', 'heavy', 'dangerous', 'tall', 'an elephant', 'a horse', 'a lion', 'a car', 'a bus']}},
         model: 'The blue whale is the biggest animal in the world. It is heavier than twenty elephants.',
         rules: [{type: 'sentences', min: 2, hint: 'Schreibe zwei Sätze und beende jeden Satz mit einem Punkt.'},
                 {type: 'someSentence', re: "\\bthe (\\w+est|most \\w+|best|worst)\\b", hint: 'Ein Satz braucht einen Superlativ mit the, z. B. the biggest oder the most dangerous.'},
                 {type: 'someSentence', re: "\\b((\\w+er|more \\w+|less \\w+) than|as \\w+ as)\\b", hint: 'Ein Satz braucht einen Vergleich: … than … oder as … as.'},
                 {type: 'count', res: U4_ANIMALS, n: 1, hint: 'Schreibe über ein Tier – nenne es, z. B. the blue whale, the cheetah …'},
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
    {t: 'gap', img: 'units/bilder/u4-desert.jpg', q: 'There is very little water in the ___.', first: true, ans: ['desert'], w: ['desert']},
    {t: 'letters', word: 'heavy', de: 'schwer', w: ['heavy']},
    {t: 'mc', q: 'This bird lives in cities and you can often see it in parks. It is a ___.', right: 'pigeon', wrong: ['ostrich', 'bat', 'whale'], why: 'pigeon = Taube.', w: ['pigeon']},
    {t: 'mc', q: 'This animal can fly, but it is a mammal. It sleeps during the day. It is a ___.', right: 'bat', wrong: ['parrot', 'pigeon', 'mosquito'], why: 'bat = Fledermaus.', w: ['bat']},
    {t: 'gap', q: 'A ___ is a very big animal that lives in the sea.', first: true, ans: ['whale'], w: ['whale']},
    {t: 'gap', q: 'The ___ is a very long snake.', first: true, ans: ['anaconda'], w: ['anaconda']},
    {t: 'gap', q: 'He can lift 100 kg. He is very ___.', first: true, ans: ['strong'], w: ['strong']},
    {t: 'gap', q: 'A ___ can learn to say words.', first: true, ans: ['parrot'], w: ['parrot']},
    {t: 'gap', minHw: 4, img: 'units/bilder/u4-farmer.jpg', q: 'The ___ has got cows, pigs and a big field.', first: true, ans: ['farmer'], w: ['farmer']},
    {t: 'gap', minHw: 4, img: 'units/bilder/u4-protect.jpg', q: 'Some animals are in danger. We must ___ them.', first: true, ans: ['protect'], w: ['protect']},
    {t: 'gap', minHw: 4, img: 'units/bilder/u4-luck.jpg', q: 'Good ___ with your test tomorrow!', first: true, ans: ['luck'], w: ['luck']},
    {t: 'mc', minHw: 4, img: 'units/bilder/u4-climate-change.jpg', q: 'Many animals are in danger because of ___.', right: 'climate change', wrong: ['luck', 'speed', 'length'], why: 'climate change = Klimawandel.', w: ['climatechange']},
    {t: 'listen', say: 'crocodile', de: 'Krokodil', w: ['crocodile']},
    {t: 'listen', say: 'giraffe', de: 'Giraffe', w: ['giraffe']},

    {minHw: 1, t: 'sent', topic: 'writing', q: 'Übersetze ins Englische: Ein Gepard ist sehr schnell.', ans: ['A cheetah is very fast.', 'The cheetah is very fast.'], w: ['cheetah', 'fast']},
    {minHw: 1, t: 'mc', q: 'This insect is very small, but it can carry malaria. It is a ___.', right: 'mosquito', wrong: ['pigeon', 'bat', 'parrot'], why: 'mosquito = Stechmücke, Gelse.', w: ['mosquito']},
    // --- Komparativ (ab HÜ 2) ---
    {t: 'gap', minHw: 2, img: 'units/bilder/u4-weigh.jpg', q: 'Put the melon on the scales. It ___ three kilograms.', first: true, ans: ['weighs'], w: ['weigh']},
    {t: 'mc', minHw: 2, img: 'units/bilder/u4-ton.jpg', q: 'This big stone weighs 1000 kg. That is one ___.', right: 'ton', wrong: ['centimetre', 'speed', 'length'], why: 'ton = Tonne (1000 kg).', w: ['ton']},
    {t: 'mc', minHw: 2, imgs: ['units/bilder/u4-crocodile.jpg', 'units/bilder/u4-dolphin.jpg'], rule: 'lange Adjektive: more / the most', topic: 'grammar', q: 'A crocodile is ___ than a dolphin.', right: 'more dangerous', wrong: ['dangerouser', 'more dangerouser', 'dangerous'], why: 'Langes Adjektiv: more + Adjektiv.'},
    {t: 'mc', minHw: 2, rule: 'lange Adjektive: more / the most', topic: 'grammar', q: 'Which sentence is correct?', right: 'A rhino is stronger than a dog.', wrong: ['A rhino is more stronger than a dog.', 'A rhino is stronger as a dog.', 'A rhino is strong than a dog.'], why: 'strong → stronger + than.'},
    {t: 'gap', minHw: 2, rule: 'Komparativ: -er + than', topic: 'grammar', q: 'A giraffe is ___ than a horse. (tall or small?)', ans: ['taller'], tip: 'Kurzes Adjektiv: -er anhängen.', else: 'Lies den Satz genau: Welches der beiden Adjektive passt zu den Tieren?'},
    {t: 'gap', minHw: 2, rule: 'lange Adjektive: more / the most', topic: 'grammar', q: 'Dolphins are ___ than sharks. (intelligent or dangerous?)', ans: ['more intelligent'], tip: 'Langes Adjektiv: zwei Wörter.', else: 'Lies den Satz genau: Welches der beiden Adjektive passt zu den Tieren?'},
    {t: 'gap', minHw: 2, rule: 'lange Adjektive: more / the most', topic: 'grammar', q: 'A rhino is ___ than a crocodile. (powerful)', ans: ['more powerful'], tip: 'Langes Adjektiv: zwei Wörter.'},
    {t: 'gap', minHw: 2, rule: 'Schreibweise: bigger, heavier, the biggest', topic: 'grammar', q: 'An elephant is ___ than a horse. (big)', ans: ['bigger'], tip: 'Buchstabe verdoppeln.'},
    {t: 'gap', minHw: 2, rule: 'Schreibweise: bigger, heavier, the biggest', topic: 'grammar', q: 'A chimpanzee is ___ than a dolphin. (hairy)', ans: ['hairier'], tip: 'Achte auf das y am Ende.'},
    {t: 'gap', minHw: 2, rule: 'Schreibweise: bigger, heavier, the biggest', topic: 'grammar', q: 'After the long walk, I was ___ than my sister. (hungry)', ans: ['hungrier'], tip: 'Achte auf das y am Ende.'},
    {t: 'gap', minHw: 2, rule: 'good – better – best / bad – worse – worst', topic: 'grammar', q: 'My new phone is ___ than my old one. (good)', ans: ['better'], tip: 'Ausnahme – ein ganz neues Wort.'},
    {t: 'find', minHw: 2, rule: 'Schreibweise: bigger, heavier, the biggest', sentence: 'A whale is *biger* than a shark.', fix: ['bigger'], why: 'big → bigger: Der letzte Buchstabe wird verdoppelt.'},
    {t: 'find', minHw: 2, rule: 'Komparativ: -er + than', sentence: 'A cheetah is faster *as* an ostrich.', fix: ['than'], why: 'Nach dem Komparativ steht than.'},
    {t: 'find', minHw: 2, rule: 'good – better – best / bad – worse – worst', sentence: 'My dog is *gooder* at catching balls than my cat.', fix: ['better'], why: 'Ausnahme: good → better.'},
    {t: 'order', minHw: 2, rule: 'Schreibweise: bigger, heavier, the biggest', tiles: ['A rhino', 'is', 'heavier', 'than', 'a crocodile']},
    {t: 'order', minHw: 2, rule: 'lange Adjektive: more / the most', tiles: ['Chimpanzees', 'are', 'more intelligent', 'than', 'pigeons']},
    {t: 'sent', minHw: 2, rule: 'lange Adjektive: more / the most', q: 'Übersetze ins Englische: Ein Delfin ist intelligenter als ein Fisch.', ans: ['A dolphin is more intelligent than a fish.']},
    {t: 'sent', minHw: 2, rule: 'Schreibweise: bigger, heavier, the biggest', q: 'Übersetze ins Englische: Ein Nashorn ist schwerer als ein Pferd.', ans: ['A rhino is heavier than a horse.']},
    {t: 'sent', minHw: 2, rule: 'good – better – best / bad – worse – worst', q: 'Übersetze ins Englische: Mein Englisch ist besser als mein Französisch.', ans: ['My English is better than my French.']},
    {t: 'transform', minHw: 2, rule: 'good – better – best / bad – worse – worst', q: 'Mach aus den zwei Sätzen EINEN Satz mit einem Vergleich (… than …).', from: 'Today the weather is bad. Yesterday it was not so bad.', ans: ['Today the weather is worse than yesterday.', 'The weather is worse today than yesterday.', 'Yesterday the weather was better than today.'], model: 'Today the weather is worse than yesterday.'},
    {t: 'correct', minHw: 2, rule: 'lange Adjektive: more / the most', sentence: 'A crocodile is dangerouser then a parrot.', n: 2, mark: ['dangerouser', 'then'], ans: ['A crocodile is more dangerous than a parrot.']},
    {t: 'cloze', minHw: 2, rule: 'lange Adjektive: more / the most', text: 'An ostrich is [bigger|more big|biger] than a pigeon. But a pigeon can fly, so for me it is [more interesting|interestinger|more interestinger].'},

    {minHw: 2, t: 'transform', rule: 'lange Adjektive: more / the most', q: 'Mach aus den zwei Sätzen EINEN Satz mit einem Vergleich (… than …).', from: 'A mosquito is dangerous. A pigeon is not very dangerous.', imgs: ['units/bilder/u4-mosquito.jpg', 'units/bilder/u4-pigeon.jpg'], ans: ['A mosquito is more dangerous than a pigeon.', 'A pigeon is less dangerous than a mosquito.'], model: 'A mosquito is more dangerous than a pigeon.'},
    {minHw: 2, t: 'find', rule: 'Schreibweise: bigger, heavier, the biggest', sentence: 'An elephant is *heavyer* than a rhino.', fix: ['heavier'], why: 'heavy → heavier: Das y wird zu i.'},
    {minHw: 2, t: 'mc', rule: 'Schreibweise: bigger, heavier, the biggest', topic: 'grammar', q: 'An ostrich is ___ than a pigeon.', right: 'heavier', wrong: ['heavyer', 'more heavy', 'heavyier'], why: 'heavy → heavier: Das y wird zu i.'},
    {minHw: 2, t: 'mc', rule: 'good – better – best / bad – worse – worst', topic: 'grammar', q: 'My English is good, but Lisa’s English is even ___.', right: 'better', wrong: ['gooder', 'more good', 'best'], why: 'Ausnahme: good → better.'},
    {minHw: 2, t: 'transform', rule: 'Komparativ: -er + than', q: 'Mach aus den zwei Sätzen EINEN Satz mit einem Vergleich (… than …).', from: 'A dolphin is fast. A whale is not so fast.', imgs: ['units/bilder/u4-dolphin.jpg', 'units/bilder/u4-whale.jpg'], ans: ['A dolphin is faster than a whale.', 'A whale is slower than a dolphin.'], model: 'A dolphin is faster than a whale.'},
    {minHw: 2, t: 'sent', rule: 'Komparativ: -er + than', q: 'Übersetze ins Englische: Ein Gepard ist schneller als ein Strauß.', ans: ['A cheetah is faster than an ostrich.', 'The cheetah is faster than the ostrich.'], w: ['cheetah', 'ostrich']},
    // --- Superlativ und as … as (ab HÜ 3) ---
    {t: 'mc', minHw: 3, rule: 'Superlativ: the …-est / the most', topic: 'grammar', q: 'The mosquito is ___ animal in the world.', right: 'the most dangerous', wrong: ['the dangerousest', 'most dangerous', 'the more dangerous'], why: 'Langes Adjektiv: the most + Adjektiv.'},
    {t: 'mc', minHw: 3, rule: 'as … as / not as … as', topic: 'grammar', q: 'Which sentence is correct?', right: 'A dog is not as big as a horse.', wrong: ['A dog is not as big than a horse.', 'A dog is not as bigger as a horse.', 'A dog is not so bigger than a horse.'], why: 'not as + Grundform + as.'},
    {t: 'gap', minHw: 3, rule: 'Superlativ: the …-est / the most', topic: 'grammar', q: 'The giraffe is ___ animal in the world. (tall)', ans: ['the tallest'], tip: 'Superlativ: the + Adjektiv + -est.'},
    {t: 'gap', minHw: 3, rule: 'Schreibweise: bigger, heavier, the biggest', topic: 'grammar', q: 'The blue whale is ___ animal in the world. (heavy)', ans: ['the heaviest'], tip: 'the … und achte auf das y.'},
    {t: 'gap', minHw: 3, rule: 'Schreibweise: bigger, heavier, the biggest', topic: 'grammar', q: 'Today is ___ day of the year. (hot)', ans: ['the hottest'], tip: 'the … und Buchstabe verdoppeln.'},
    {t: 'gap', minHw: 3, rule: 'good – better – best / bad – worse – worst', topic: 'grammar', q: 'This is ___ pizza in town – I love it! (good)', ans: ['the best'], tip: 'Ausnahme mit the.'},
    {t: 'gap', minHw: 3, rule: 'as … as / not as … as', topic: 'grammar', q: 'A cat is not as ___ as a dog. (big)', ans: ['big'], tip: 'Zwischen as … as steht die Grundform.'},
    {t: 'find', minHw: 3, rule: 'as … as / not as … as', sentence: 'A pigeon is not as fast *than* a cheetah.', fix: ['as'], why: 'as … as – zweimal as.'},
    {t: 'find', minHw: 3, rule: 'Superlativ: the …-est / the most', sentence: 'The cheetah is the *fastes* animal on land.', fix: ['fastest'], why: 'Superlativ: the fast-est.'},
    {t: 'order', minHw: 3, rule: 'as … as / not as … as', tiles: ['A dolphin', 'is', 'as clever as', 'a chimpanzee']},
    {t: 'order', minHw: 3, rule: 'Superlativ: the …-est / the most', tiles: ['The mosquito', 'is', 'the most dangerous', 'animal']},
    {t: 'gap', minHw: 3, img: 'units/bilder/u4-truck.jpg', rule: 'as … as / not as … as', topic: 'grammar', q: 'An elephant is as heavy as a small ___.', first: true, ans: ['truck'], w: ['truck']},
    {t: 'sent', minHw: 3, rule: 'as … as / not as … as', q: 'Übersetze ins Englische: Eine Maus ist nicht so groß wie ein Elefant.', ans: ['A mouse is not as big as an elephant.', 'A mouse is not as large as an elephant.']},
    {t: 'sent', minHw: 3, rule: 'as … as / not as … as', q: 'Übersetze ins Englische: Mein Bruder ist so groß wie ich.', ans: ['My brother is as tall as me.', 'My brother is as tall as I am.', 'My brother is as big as me.', 'My brother is as big as I am.']},
    {t: 'sent', minHw: 3, rule: 'Superlativ: the …-est / the most', q: 'Übersetze ins Englische: Der Gepard ist das schnellste Landtier.', ans: ['The cheetah is the fastest land animal.']},
    {t: 'transform', minHw: 3, rule: 'as … as / not as … as', q: 'Sag mit not as … as, dass die beiden nicht gleich sind. Schreibe EINEN Satz.', from: 'A crocodile is dangerous. A parrot is not dangerous.', ans: ['A parrot is not as dangerous as a crocodile.'], model: 'A parrot is not as dangerous as a crocodile.'},
    {t: 'transform', minHw: 3, rule: 'Superlativ: the …-est / the most', q: 'Schreib einen Satz mit dem Superlativ (the …-est).', from: 'The cheetah is faster than all other land animals.', ans: ['The cheetah is the fastest land animal.', 'The cheetah is the fastest of all land animals.', 'The cheetah is the fastest animal on land.'], model: 'The cheetah is the fastest land animal.'},
    {t: 'correct', minHw: 3, rule: 'Superlativ: the …-est / the most', sentence: 'The ostrich is biggest bird of the world.', n: 2, mark: ['biggest', 'of'], ans: ['The ostrich is the biggest bird in the world.']},

    {minHw: 3, t: 'transform', rule: 'as … as / not as … as', q: 'Sag mit not as … as, dass die beiden nicht gleich sind. Schreibe EINEN Satz.', from: 'A pigeon is small. An ostrich is much bigger.', imgs: ['units/bilder/u4-pigeon.jpg', 'units/bilder/u4-ostrich.jpg'], ans: ['A pigeon is not as big as an ostrich.', 'An ostrich is not as small as a pigeon.', 'A pigeon is not as heavy as an ostrich.'], model: 'A pigeon is not as big as an ostrich.'},
    {minHw: 3, t: 'find', rule: 'good – better – best / bad – worse – worst', sentence: 'Monday was the *baddest* day of my week.', fix: ['worst'], why: 'Ausnahme: bad → worse → the worst.'},
    {minHw: 3, t: 'mc', rule: 'good – better – best / bad – worse – worst', topic: 'grammar', q: 'Lisa scores a lot of goals. She is ___ player in our team.', right: 'the best', wrong: ['the goodest', 'the most good', 'the better'], why: 'Ausnahme: good → better → the best.'},
    {minHw: 3, t: 'listen', rule: 'Superlativ: the …-est / the most', say: 'The giraffe is the tallest animal in the world.', de: 'Die Giraffe ist das größte Tier der Welt.'},
    {minHw: 3, t: 'transform', rule: 'as … as / not as … as', q: 'Sag mit as … as, dass beide gleich sind. Schreibe EINEN Satz.', from: 'A dolphin is intelligent. A chimpanzee is intelligent, too.', imgs: ['units/bilder/u4-dolphin.jpg', 'units/bilder/u4-chimpanzee.jpg'], ans: ['A dolphin is as intelligent as a chimpanzee.', 'A chimpanzee is as intelligent as a dolphin.'], model: 'A dolphin is as intelligent as a chimpanzee.'},
    {minHw: 3, t: 'sent', img: 'units/bilder/u4-whale.jpg', rule: 'Schreibweise: bigger, heavier, the biggest', q: 'Übersetze ins Englische: Der Wal ist das schwerste Tier der Welt.', ans: ['The whale is the heaviest animal in the world.', 'The blue whale is the heaviest animal in the world.'], w: ['whale']},
    // --- Unregelmäßige Verben (ab HÜ 4) ---
    {minHw: 4, t: 'match', words: ['farmer', 'human', 'protect', 'carry', 'luck', 'forever']},
    {minHw: 4, t: 'sent', q: 'Übersetze ins Englische: Vor zwei Tagen habe ich ein Krokodil gesehen.', ans: ['Two days ago, I saw a crocodile.', 'I saw a crocodile two days ago.', 'Two days ago I saw a crocodile.'], w: ['ago', 'crocodile']},
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
    {t: 'sent', minHw: 4, rule: 'unregelmäßige Verben (Past Simple)', q: 'Übersetze ins Englische: Letzte Woche habe ich einen Papagei gekauft.', ans: ['Last week I bought a parrot.', 'I bought a parrot last week.', 'Last week, I bought a parrot.']},
    {minHw: 4, t: 'correct', rule: 'unregelmäßige Verben (Past Simple)', sentence: 'Two days ago, the farmer catched a fish and bringed it home.', n: 2, mark: ['catched', 'bringed'], ans: ['Two days ago, the farmer caught a fish and brought it home.', 'Two days ago the farmer caught a fish and brought it home.']}
  ],

  /* ---------- Vokabeltraining: 29 fett gedruckte Wörter + 16 unregelmäßige Verben ---------- */
  vocab: {
    title: 'Vokabeln – Unit 4',
    // Verteiltes Lernen: an 1 Tag sicher = 80 %, an einem zweiten Tag noch gewusst = 100 % (siehe ANLEITUNG)
    // strenger: spaced: [70, 85, 100] (drei Tage) · aus: Zeile löschen
    spaced: [80, 100],
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
