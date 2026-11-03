// Reading practice booklet, Grade 1 expectations. English-only: see AUTHORING.md for the format.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const en = (question, answer) => it(question, answer, question, answer);
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });
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
      standards: ["RF.1.3a", "RF.1.3b", "RF.1.3c", "RF.1.3d", "RF.1.4a"],
      example: exEn(
        "Which word has the long a sound: cap, cake or cat?",
        ["Say each word slowly: cap, cake, cat.", "A long vowel says its own name. In cake, the letter a says \"ay\".", "Cap and cat have the short a sound, as in \"apple\"."],
        "cake"
      ),
      items: [
        en("Which word has the long a sound: can, cake or cat?", "cake (the a says its name, helped by the silent e)."),
        en("Which word has the short i sound: kite, sit or bike?", "sit (kite and bike have the long i sound)."),
        en("Which word begins with the sound sh: ship, chip or thin?", "ship."),
        en("Which word begins with the sound ch: shop, chop or this?", "chop."),
        en("Which word ends with the sound th: bath, back or bag?", "bath."),
        en("Add a silent e to the word hop. What new word do you make?", "hope (the e is silent and makes the o say its name)."),
        en("Which two letters make the blend at the start of the word frog?", "fr."),
        en("How many syllables (beats) are in the word basket? Clap it: bas-ket.", "2."),
        en("Which word has the long o sound: hot, home or hop?", "home."),
        en("Read this sentence: The big red bus can go. Which word names something we ride in?", "bus."),
        en("Which word rhymes with cake: lake, lock or luck?", "lake (cake and lake end with the same sound).")
      ]
    },
    {
      area: "cmp",
      standards: ["RL.1.1", "RL.1.2", "RL.1.3", "RF.1.4a"],
      passage: {
        title: "A Day at the Souq",
        text: "Maryam and Hamdan go to the souq with Mama. The souq is big and busy. Maryam sees red dates in a box. Hamdan sees a green hat on a shelf. Mama buys a bag of dates and a jug of milk. Then they sit on a bench. Maryam gives a date to Hamdan. He gives one to Mama. They all smile. The sun is hot, so they go home in a cab."
      },
      example: exEn(
        "Who goes to the souq with Mama?",
        ["Read the first sentence again.", "It names the children who go: Maryam and Hamdan."],
        "Maryam and Hamdan."
      ),
      items: [
        en("Who goes to the souq with Mama?", "Maryam and Hamdan."),
        en("Where does the story happen?", "At the souq."),
        en("What colour are the dates that Maryam sees?", "Red."),
        en("What does Hamdan see on a shelf?", "A green hat."),
        en("What does Mama buy? Name one thing.", "A bag of dates or a jug of milk (either one is right)."),
        en("Where do they sit?", "On a bench."),
        en("Who gives a date to Hamdan?", "Maryam."),
        en("Why do they go home?", "The sun is hot."),
        en("How do they go home?", "In a cab."),
        en("What happens first: Mama buys the dates and milk, or they sit on a bench?", "Mama buys the dates and milk."),
        en("Tell the story again in two short sentences.", "Any retelling in order, for example: Maryam, Hamdan and Mama go to the souq and Mama buys dates and milk. They sit on a bench, share dates, and go home in a cab.")
      ]
    },
    {
      area: "voc",
      standards: ["L.1.4a", "L.1.5a", "L.1.5b", "L.1.5c"],
      example: exEn(
        "What is the opposite of hot?",
        ["Opposite words are as different as they can be.", "Think of how a cup of ice feels, not hot at all."],
        "cold"
      ),
      items: [
        en("What is the opposite of up?", "down."),
        en("What is the opposite of happy?", "sad."),
        en("What is the opposite of full?", "empty."),
        en("Which word does not belong: apple, banana, chair or grape?", "chair (the others are fruit)."),
        en("Camel, oryx and falcon are all kinds of what?", "animals."),
        en("Which word is an action word: jump, tree or red?", "jump."),
        en("Find the action word in this sentence: Salem kicks the ball.", "kicks."),
        en("The bag is heavy. Omar cannot lift it. Does heavy mean easy to lift or hard to lift?", "hard to lift."),
        en("Sort the words into two groups, clothes and animals: sock, cat, shoe, fish.", "Clothes: sock, shoe. Animals: cat, fish."),
        en("Which word fits: I wear a ___ on my head. hat, cat or bat?", "hat."),
        en("What is the opposite of day?", "night.")
      ]
    },
    {
      area: "wl",
      standards: ["L.1.1b", "L.1.2a", "L.1.2b", "L.1.2d", "W.1.2"],
      example: exEn(
        "Which sentence is written correctly: the cat sat. or The cat sat.?",
        ["A sentence starts with a capital letter.", "A sentence ends with a full stop.", "Only the second one has both."],
        "The cat sat."
      ),
      items: [
        en("Which sentence begins correctly: the sun is hot. or The sun is hot.?", "The sun is hot."),
        en("What mark goes at the end of this sentence: Hind has a red bag", "A full stop."),
        en("Write more than one: one date (the fruit), two ___.", "dates."),
        en("Add -s to make the word mean more than one: one book, two ___.", "books."),
        en("Add -s to make the word mean more than one: one cup, three ___.", "cups."),
        en("In the sentence The camel eats, which word is the naming word?", "camel."),
        en("In the sentence The camel eats, which word is the action word?", "eats."),
        en("Fix this sentence: maryam has a hat", "Maryam has a hat."),
        en("Put the words in order to make a sentence: dates likes Noura", "Noura likes dates."),
        en("Fill in the missing letter: The opposite of cold is h_t.", "o (hot)."),
        en("Write one complete sentence about a falcon. Start with a capital letter and end with a full stop.", "Any complete sentence about a falcon, for example: The falcon can fly.")
      ]
    }
  ]
};
