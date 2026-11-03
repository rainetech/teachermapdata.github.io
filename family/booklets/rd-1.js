// Reading practice booklet, Grade 1 expectations. English-only: see AUTHORING.md for the format.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const en = (question, answer) => it(question, answer, question, answer);
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });
const mc = (qEn, optsEn, correct, whyEn) => ({ q: T(qEn, qEn), a: T(whyEn, whyEn), options: { en: optsEn, ar: optsEn }, correct });
const exEn = (question, steps, answer) => ex(question, steps, answer, question, steps, answer);

module.exports = {
  subject: "rd",
  grade: 1,
  framework: "CCSS.ELA",
  englishOnly: true,
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "fnd",
      standards: ["RF.1.1", "RF.1.2", "RF.1.3a", "RF.1.3b", "RF.1.3c", "RF.1.3d", "RF.1.4a", "RF.1.4b"],
      example: exEn(
        "Which word has the long a sound: cap, cake or cat?",
        ["Say each word slowly: cap, cake, cat.", "A long vowel says its own name. In cake, the letter a says \"ay\".", "Cap and cat have the short a sound, as in \"apple\"."],
        "cake"
      ),
      items: [
        mc("Which word has the long a sound: can, cake or cat?", ["can","cake","cat"], 1, "cake (the a says its name, helped by the silent e)."),
        mc("Which word has the short i sound: kite, sit or bike?", ["kite","bike","sit"], 2, "sit (kite and bike have the long i sound)."),
        mc("Which word begins with the sound sh: ship, chip or thin?", ["ship","chip","thin"], 0, "ship."),
        en("Which word begins with the sound ch: shop, chop or this?", "chop."),
        mc("Which word ends with the sound th: bath, back or bag?", ["back","bag","bath"], 2, "bath."),
        en("Add a silent e to the word hop. What new word do you make?", "hope (the e is silent and makes the o say its name)."),
        en("Which two letters make the blend at the start of the word frog?", "fr."),
        en("How many syllables (beats) are in the word basket? Clap it: bas-ket.", "2."),
        mc("Which word has the long o sound: hot, home or hop?", ["home","hot","hop"], 0, "home (the silent e makes the o say its name)."),
        en("Read this sentence: The big red bus can go. Which word names something we ride in?", "bus."),
        mc("Which word rhymes with cake: lake, lock or luck?", ["lock","lake","luck"], 1, "lake (cake and lake end with the same sound)."),
        en("Read this sentence: Hind has a red hat. Which word do you read first?", "Hind (we read English from left to right)."),
        en("How many words are in this sentence: Omar can run fast.", "4 (the spaces show where one word ends and the next begins)."),
        en("Blend the sounds s, u, n. What word do they make?", "sun."),
        en("How many sounds are in the word ship? Say it slowly: sh, i, p.", "3 (sh counts as one sound)."),
        mc("What is the middle sound in the word dog?", ["a","o","u"], 1, "o (the short o sound, as in \"hot\")."),
        en("Fluency: read these two sentences aloud, twice. Maryam has a big red bag. She puts dates in it. Then say who has the bag and what goes in it.", "Maryam has the bag and dates go in it. (The second reading should sound smoother: words read correctly, a short stop at each full stop.)")
      ]
    },
    {
      area: "cmp",
      standards: ["RL.1.1", "RL.1.2", "RL.1.3", "RL.1.5", "RL.1.6", "RL.1.7", "RL.1.9", "RI.1.1", "RI.1.2", "RI.1.3", "RI.1.4", "RI.1.5", "RI.1.6", "RI.1.7", "RI.1.8", "RI.1.9"],
      passage: [
        {
          title: "Text A: A Day at the Souq",
          text: "Maryam and Hamdan go to the souq with Mama. The souq is big and busy. Maryam sees red dates in a box. Hamdan sees a green hat on a shelf. Mama buys a bag of dates and a jug of milk. Then they sit on a bench. Maryam gives a date to Hamdan. He gives one to Mama. They all smile. The sun is hot, so they go home in a cab."
        },
        {
          title: "Text B: Dates from the Palm",
          text: "Dates grow on tall palm trees. The trees like hot, sunny places like the UAE. The dates grow in big bunches high up in the tree. In autumn the dates are ripe, so a farmer climbs up and cuts the bunches down. Then the dates dry in the sun and turn soft and sweet.\n\n[Picture: A farmer stands on a ladder by a tall palm tree and cuts a big bunch of yellow dates. His two sons wait below with a basket.]\n\nWords to know: A bunch is a group of dates that grow together. Ripe means ready to pick."
        },
        {
          title: "Text C: Eating Dates",
          text: "Many families in the UAE love dates. A date is soft and sweet. Dates make a good snack because they are sweet and easy to carry. Cooks put dates in cakes and cookies. When guests visit, a family may give them dates with a cup of karak. Dates are a tasty treat for everyone."
        },
        {
          title: "Text D: Layla and the Red Kite",
          text: "Layla and her cousin Noura made a red kite. They took it to the park by the creek. The wind blew and the kite flew up, up, up. Layla felt proud. Then the wind stopped and the kite fell to the grass. Layla felt sad. Noura gave her a hug and said, \"We can try again.\" They ran with the kite and it flew once more. Layla smiled and felt happy.\n\n[Picture: Layla stands on the grass with a big smile. She looks up at the red kite high in the sky.]"
        },
        {
          title: "Text E: My Hill",
          text: "I am Omar. Last Friday I went to the Hajar mountains with my father and my brother Salem. We walked up a big hill. My legs felt tired, but I did not stop. Salem said, \"Keep going!\" At the top I saw the whole valley. I felt brave and happy. I called out, \"I did it!\""
        }
      ],
      example: exEn(
        "Who goes to the souq with Mama?",
        ["Read the first sentence again.", "It names the children who go: Maryam and Hamdan."],
        "Maryam and Hamdan."
      ),
      items: [
        mc("Text A: Who goes to the souq with Mama?", ["Maryam and Hamdan","Maryam and Layla","Hamdan and Salem"], 0, "Maryam and Hamdan."),
        en("Text A: What does Hamdan see on a shelf?", "A green hat."),
        en("Text A: What does Mama buy? Name one thing.", "A bag of dates or a jug of milk (either one is right)."),
        mc("Text A: Why do they go home?", ["They are hungry","The sun is hot","It is night"], 1, "The sun is hot."),
        en("Text A: What happens first, Mama buys the dates and milk, or they sit on a bench?", "Mama buys the dates and milk."),
        en("Text A: Tell the story again in two short sentences.", "Any retelling in order, for example: Maryam, Hamdan and Mama go to the souq and Mama buys dates and milk. They sit on a bench, share dates, and go home in a cab."),
        mc("Text B: What is Text B mostly about?", ["How families eat dates","How to bake a cake","How dates grow"], 2, "How dates grow (on palm trees, and how they are picked and dried)."),
        mc("Text B: Why does the farmer cut the bunches down in autumn?", ["The sun is hot","The dates are ripe","The dates are dry"], 1, "The dates are ripe (ready to pick)."),
        mc("Text B: At the end is a list called Words to know. Use it to say what a bunch is.", ["A group of dates that grow together","A tall palm tree","A sweet snack"], 0, "A group of dates that grow together (it says so in Words to know)."),
        en("Text B: The picture is described in words. What do the farmer's two sons have with them? Does the picture or the writing tell you this?", "A basket. The picture tells us (the writing does not say it)."),
        mc("One of these texts is a made-up story and the others give facts. Which text is the story?", ["Text A","Text B","Text C"], 0, "Text A (it has characters and something that happens to them; Text B teaches facts)."),
        en("Text C: What do cooks put dates in? Name one thing.", "Cakes or cookies (either one is right)."),
        mc("Text C: What reason does Text C give for dates being a good snack?", ["They grow on palm trees","They are put in cakes","They are sweet and easy to carry"], 2, "They are sweet and easy to carry."),
        en("Text B tells how dates grow. Which text tells how families eat and use dates, Text B or Text C?", "Text C."),
        en("Text D: How did Layla feel when the wind stopped and the kite fell?", "Sad."),
        mc("Text D: What did Noura do to help Layla?", ["She took the kite home","She gave her a hug and said they could try again","She told her to stop"], 1, "She gave her a hug and said they could try again."),
        en("Text D: The picture is described in words. Where is Layla looking in the picture?", "Up at the red kite in the sky."),
        en("Text E: Who is telling Text E, Omar or someone outside the story? How can you tell?", "Omar (he says I, as in \"I am Omar\")."),
        mc("Layla in Text D and Omar in Text E each have a hard time. How are they alike? Both of them ___ (kept trying, gave up or went home).", ["gave up","kept trying","went home"], 1, "kept trying (Layla tried the kite again and Omar did not stop climbing)."),
        mc("Text E: How did Omar feel at the top of the hill?", ["Tired and sad","Cross and hot","Brave and happy"], 2, "Brave and happy.")
      ]
    },
    {
      area: "voc",
      standards: ["L.1.4a", "L.1.5a", "L.1.5b", "L.1.5c", "L.1.5d", "RL.1.4"],
      example: exEn(
        "What is the opposite of hot?",
        ["Opposite words are as different as they can be.", "Think of how a cup of ice feels, not hot at all."],
        "cold"
      ),
      items: [
        en("What is the opposite of up?", "down."),
        mc("What is the opposite of happy?", ["glad","sad","funny"], 1, "sad."),
        en("What is the opposite of full?", "empty."),
        en("What is the opposite of day?", "night."),
        mc("Which word does not belong: apple, banana, chair or grape?", ["chair","banana","grape"], 0, "chair (the others are fruit)."),
        en("Camel, oryx and falcon are all kinds of what?", "animals."),
        en("Sort the words into two groups, clothes and animals: sock, cat, shoe, fish.", "Clothes: sock, shoe. Animals: cat, fish."),
        mc("The bag is heavy. Omar cannot lift it. Does heavy mean easy to lift or hard to lift?", ["easy to lift","hard to lift","very small"], 1, "hard to lift."),
        en("Which word fits: I wear a ___ on my head. hat, cat or bat?", "hat."),
        mc("Layla's kite fell to the grass and she felt sad. Which word tells a feeling: kite, sad or grass?", ["sad","kite","grass"], 0, "sad."),
        en("Omar got to the top of the hill and felt proud. Which word tells a feeling: top, proud or hill?", "proud."),
        mc("Which word shows the most cold: cool, warm or freezing?", ["cool","warm","freezing"], 2, "freezing."),
        en("A bike is a thing with wheels that you ___. ride, eat or wear.", "ride."),
        en("Which goes with a hot day: a cold drink or a warm coat?", "a cold drink."),
        mc("Layla said her kite was as light as a feather. Does that mean it was heavy or light?", ["heavy","big","light"], 2, "light.")
      ]
    },
    {
      area: "wl",
      standards: ["L.1.1b", "L.1.1c", "L.1.1j", "L.1.2a", "L.1.2b", "L.1.2d", "W.1.2"],
      example: exEn(
        "Which sentence is written correctly: the cat sat. or The cat sat.?",
        ["A sentence starts with a capital letter.", "A sentence ends with a full stop.", "Only the second one has both."],
        "The cat sat."
      ),
      items: [
        mc("Which sentence begins correctly: the sun is hot. or The sun is hot.?", ["The sun is hot.","the sun is hot.","The sun is Hot."], 0, "The sun is hot."),
        mc("What mark goes at the end of this sentence: Hind has a red bag", ["A comma","A full stop","A capital letter"], 1, "A full stop."),
        en("Add -s to make the word mean more than one: one book, two ___.", "books."),
        mc("Add -s to make the word mean more than one: one cup, three ___.", ["cups","cup","cupes"], 0, "cups."),
        en("In the sentence The camel eats, which word is the naming word?", "camel."),
        en("In the sentence The camel eats, which word is the action word?", "eats."),
        mc("Which word is an action word: jump, tree or red?", ["tree","red","jump"], 2, "jump."),
        mc("Find the action word in this sentence: Salem kicks the ball.", ["Salem","ball","kicks"], 2, "kicks."),
        en("Fix this sentence: maryam has a hat", "Maryam has a hat."),
        en("Put the words in order to make a sentence: dates likes Noura", "Noura likes dates."),
        en("Fill in the missing letter: The opposite of cold is h_t.", "o (hot)."),
        en("Write one complete sentence about a falcon. Start with a capital letter and end with a full stop.", "Any complete sentence about a falcon, for example: The falcon can fly.")
      ]
    }
  ]
};
