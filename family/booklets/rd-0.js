// Reading practice booklet, KG2 (Kindergarten) expectations. English-only: see AUTHORING.md for the format.
// A parent reads each question aloud; the child answers aloud or points.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const mc = (qEn, optsEn, correct, whyEn) => ({ q: T(qEn, qEn), a: T(whyEn, whyEn), options: { en: optsEn, ar: optsEn }, correct });
const en = (question, answer) => it(question, answer, question, answer);
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });
const exEn = (question, steps, answer) => ex(question, steps, answer, question, steps, answer);

module.exports = {
  subject: "rd",
  grade: 0,
  framework: "CCSS.ELA",
  englishOnly: true,
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "fnd",
      standards: ["RF.K.1d", "RF.K.2a", "RF.K.2b", "RF.K.2c", "RF.K.2d", "RF.K.3a", "RF.K.3c"],
      example: exEn(
        "Parent says: \"Listen to the word sun. What sound do you hear at the start of sun?\"",
        ["Say the word slowly: sss-un.", "The first sound you hear is /s/.", "The letter that makes this sound is s."],
        "The first sound in sun is /s/."
      ),
      items: [
        en("Parent writes a capital B and a small b. Ask: \"Are these the same letter?\"", "Yes, they are the same letter: one is the capital (big) form and one is the small form."),
        mc("Say the word sun. Which letter does sun begin with?", ["n", "s", "u"], 1, "The letter s. It makes the sound /s/."),
        en("What sound does the letter m make, as in moon?", "/m/ (a humming \"mmm\" sound)."),
        mc("Which word rhymes with cat?", ["sun", "pen", "hat"], 2, "Hat. Cat and hat end with the same sound."),
        mc("Listen to bed, red, bus. Which word does not rhyme with the others?", ["bus", "bed", "red"], 0, "Bus. Bed and red rhyme."),
        mc("Clap the parts of the word camel (cam-el). How many claps?", ["One", "Two", "Three"], 1, "Two claps (cam-el)."),
        en("What is the first sound in the word pen?", "/p/."),
        mc("What is the last sound in the word sun?", ["/s/", "/u/", "/n/"], 2, "/n/."),
        en("Put these sounds together: /k/ /a/ /t/. What word do they make?", "Cat."),
        en("What is the middle sound in the word pen?", "/e/ (the short e sound, as in egg)."),
        en("Parent writes three words: the, and, is. Ask the child to point to the word \"and\".", "The middle word (the second one)."),
        en("Say the word hen. Now change the first sound /h/ to /p/. What new word do you make?", "Pen.")
      ]
    },
    {
      area: "cmp",
      standards: ["RL.K.1", "RL.K.2", "RL.K.3", "SL.K.2"],
      passage: {
        title: "A Day at the Souq",
        text: "Maryam and her little brother Hamdan went to the souq with their grandmother. It was a hot day in Dubai. First, they bought a bag of sweet dates. Next, they went to the shop with the shiny lamps. Hamdan wanted a blue lamp, but Maryam liked the red one. Grandmother bought the red lamp for the home. Then the children drank cold juice under a big tree. They were happy, and they all went home together."
      },
      example: exEn(
        "Parent reads the story aloud, then asks: \"Who went to the souq with Maryam and Hamdan?\"",
        ["Listen for the words about who went.", "The story says they went with their grandmother."],
        "Their grandmother went with them."
      ),
      items: [
        mc("Where did the children go?", ["To the souq", "To the beach", "To school"], 0, "To the souq."),
        en("Who went to the souq with Maryam and Hamdan?", "Their grandmother."),
        mc("What was the weather like?", ["Cold", "Hot", "Rainy"], 1, "It was hot."),
        mc("What did the family buy first?", ["A red lamp", "Cold juice", "A bag of sweet dates"], 2, "A bag of sweet dates."),
        en("After they bought the dates, where did they go next?", "To the shop with the shiny lamps."),
        mc("Which colour of lamp did Hamdan want?", ["A blue lamp", "A red lamp", "A green lamp"], 0, "A blue lamp."),
        mc("Which lamp did Grandmother buy?", ["The blue lamp", "The green lamp", "The red lamp"], 2, "The red lamp."),
        en("Who is Hamdan's sister?", "Maryam."),
        en("What did the children drink?", "Cold juice."),
        en("Where did the children drink their juice?", "Under a big tree."),
        en("Which happened first: buying the dates or drinking the juice?", "Buying the dates happened first."),
        en("What did they do at the end of the story?", "They all went home together.")
      ]
    },
    {
      area: "voc",
      standards: ["L.K.5a", "L.K.5b", "L.K.5c"],
      example: exEn(
        "Parent asks: \"What is the opposite of hot?\"",
        ["Think of how ice or cold juice feels.", "Hot and cold are opposites."],
        "Cold."
      ),
      items: [
        mc("What is the opposite of big?", ["Tall", "Small", "Loud"], 1, "Small (or little)."),
        en("What is the opposite of up?", "Down."),
        mc("What is the opposite of wet?", ["Cold", "Muddy", "Dry"], 2, "Dry."),
        en("What is the opposite of full? Think of an empty cup.", "Empty."),
        en("What is the opposite of open?", "Close (or shut)."),
        mc("Apple, banana and grapes all belong to one group. What is the group called?", ["Fruit", "Animals", "Toys"], 0, "Fruit."),
        en("Red, blue and green are all kinds of what?", "Colours."),
        en("Car, bus and spoon: which one does not belong with the others, and why?", "Spoon: a car and a bus are vehicles you ride in, but a spoon is not."),
        mc("Which word is an action word?", ["red", "jump", "tree"], 1, "Jump."),
        en("A falcon can fly. A fish can swim. Which word tells what a fish does?", "Swim."),
        en("A creek is a narrow stretch of water where boats can go. Where could a boat go: on a creek or on a street?", "On a creek."),
        mc("Tiny means very, very small. Which one is tiny?", ["A camel", "A house", "An ant"], 2, "An ant.")
      ]
    },
    {
      area: "wl",
      standards: ["L.K.1a", "L.K.2a", "L.K.2b", "L.K.5a", "SL.K.1"],
      example: exEn(
        "Parent asks: \"Which is written the right way, salem or Salem?\"",
        ["A name starts with a capital letter.", "Salem has a capital S at the start."],
        "Salem."
      ),
      items: [
        mc("Does the first letter of a name, like Maryam, start with a capital (big) letter or something else?", ["A small letter", "A number", "A capital letter"], 2, "A capital letter."),
        mc("Which name is written correctly?", ["noura", "Noura", "nOura"], 1, "Noura. It starts with a capital N."),
        en("Parent writes: the sun is hot. and The sun is hot. Which sentence starts the right way?", "The second one: The sun is hot. (A sentence starts with a capital letter.)"),
        en("Parent writes: Thesunishot and The sun is hot. Which one has spaces between the words?", "The second one: The sun is hot."),
        mc("What small mark goes at the end of a sentence that tells something?", ["A comma", "A question mark", "A full stop"], 2, "A full stop (a dot)."),
        en("Put these words in order to make a sentence: cat, The, sat.", "The cat sat."),
        mc("How many words are in this sentence: I like dates.", ["Three", "Two", "Four"], 0, "Three words."),
        en("Parent writes b and d. Which letter has a tall line with a round belly on the right side?", "The letter b."),
        en("Camel, dates, falcon and bread. Which two are animals?", "Camel and falcon."),
        en("Car, bus and bike are all ways to do what?", "Travel (they are things that take us places)."),
        mc("Which one can you wear?", ["A tree", "A shoe", "A cloud"], 1, "A shoe."),
        en("When a friend is telling you something, what should you do?", "Listen and wait for your turn to talk.")
      ]
    }
  ]
};
