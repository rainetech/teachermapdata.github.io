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
        en("Parent writes a capital B and a small b. Ask: \"Are these the same letter?\"", "Yes. Capital B and small b are the same letter in two sizes. Ask: which one is the big one, and which is the small one?"),
        mc("Say the word sun. Which letter does sun begin with?", ["n", "s", "u"], 1, "The letter s, because sun starts with the sound /s/. If your child chose n, they picked the last sound, not the first."),
        en("What sound does the letter m make, as in moon?", "A good answer says /m/, like the start of moon. Say it with a humming mouth. Ask: can you hum it for me?"),
        mc("Which word rhymes with cat?", ["sun", "pen", "hat"], 2, "Hat, because cat and hat end with the same sound, at. If your child chose sun, they listened to the wrong part of the word."),
        mc("Listen to bed, red, bus. Which word does not rhyme with the others?", ["bus", "bed", "red"], 0, "Bus, because bed and red end the same way and bus does not. If your child chose bed, they may have matched the first sound b, not the ending."),
        mc("Clap the parts of the word camel (cam-el). How many claps?", ["One", "Two", "Three"], 1, "claps, one for cam and one for el. If your child chose Three, they may have clapped for every sound, not every part."),
        en("What is the first sound in the word pen?", "A good answer is /p/, the sound at the very start. Say pen slowly. Ask: what do your lips do for the first sound?"),
        mc("What is the last sound in the word sun?", ["/s/", "/u/", "/n/"], 2, "because sun ends with n. If your child chose /s/, they gave the first sound, not the last one."),
        en("Put these sounds together: /k/ /a/ /t/. What word do they make?", "Cat. A good answer blends the three sounds smoothly: k, then a, then t. Ask: can you say it faster?"),
        en("What is the middle sound in the word pen?", "A good answer is /e/, the sound in the middle of pen. Ask: what sound do you hear between p and n?"),
        en("Parent writes three words: the, and, is. Ask the child to point to the word \"and\".", "The middle word, the second one. A good answer points to the word with a, n and d. Ask: which letter does it start with?"),
        en("Say the word hen. Now change the first sound /h/ to /p/. What new word do you make?", "Pen. A good answer changes only the first sound, h to p, and keeps en. Ask: which sound is the same in both words?")
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
        mc("Where did the children go?", ["To the souq", "To the beach", "To school"], 0, "because the story says Maryam and Hamdan went to the souq. If your child chose the beach, they may have guessed from the hot day."),
        en("Who went to the souq with Maryam and Hamdan?", "Their grandmother. A good answer names the person from the first sentence. Ask: which words in the story tell you that?"),
        mc("What was the weather like?", ["Cold", "Hot", "Rainy"], 1, "because the story says it was a hot day in Dubai. If your child chose Cold, they may have remembered the cold juice."),
        mc("What did the family buy first?", ["A red lamp", "Cold juice", "A bag of sweet dates"], 2, "because the story says First, they bought dates. If your child chose Cold juice, they picked something from the end."),
        en("After they bought the dates, where did they go next?", "The shop with the shiny lamps, because the story says Next. A good answer uses that word. Ask: what did they buy there?"),
        mc("Which colour of lamp did Hamdan want?", ["A blue lamp", "A red lamp", "A green lamp"], 0, "because the story says Hamdan wanted a blue lamp. If your child chose A red lamp, they mixed him up with Maryam."),
        mc("Which lamp did Grandmother buy?", ["The blue lamp", "The green lamp", "The red lamp"], 2, "because Grandmother bought the red lamp for the home. If your child chose The blue lamp, they picked the lamp Hamdan wanted."),
        en("Who is Hamdan's sister?", "Maryam. A good answer names the girl who went with her little brother. Ask: which words tell you she is his sister?"),
        en("What did the children drink?", "Cold juice. A good answer names what they drank, near the end of the story. Ask: where in the story did you hear that?"),
        en("Where did the children drink their juice?", "Under a big tree. A good answer says where, and the story tells us near the end. Ask: what did the tree give them?"),
        en("Which happened first: buying the dates or drinking the juice?", "Buying the dates came first, because the story says First, they bought dates. Ask: which word tells you it was first?"),
        en("What did they do at the end of the story?", "They all went home together. A good answer tells the last thing that happened. Ask: how did they feel at the end?")
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
        mc("What is the opposite of big?", ["Tall", "Small", "Loud"], 1, "because it is the opposite of big. If your child chose Tall, they picked another size word that is not the opposite."),
        en("What is the opposite of up?", "Down. A good answer says the word that is as different from up as can be. Ask: can you point up, then point down?"),
        mc("What is the opposite of wet?", ["Cold", "Muddy", "Dry"], 2, "because wet and dry are opposites. If your child chose Cold, they thought of how wet things feel, not the opposite."),
        en("What is the opposite of full? Think of an empty cup.", "Empty. A good answer is the word for a cup with nothing in it. Ask: what is in a full cup, and what is in this one?"),
        en("What is the opposite of open?", "Close or shut. A good answer says what you do to a door that is open. Ask: what do you do to a door to shut it?"),
        mc("Apple, banana and grapes all belong to one group. What is the group called?", ["Fruit", "Animals", "Toys"], 0, "because apples, bananas and grapes are all fruit. If your child chose Toys, they may have thought of things to play with, not to eat."),
        en("Red, blue and green are all kinds of what?", "Colours. A good answer names the group that red, blue and green all belong to. Ask: can you name another colour?"),
        en("Car, bus and spoon: which one does not belong with the others, and why?", "Spoon, because a car and a bus carry people and a spoon does not. Ask: how do we use a spoon, and how do we use a bus?"),
        mc("Which word is an action word?", ["red", "jump", "tree"], 1, "Jump, because it is something you do. If your child chose tree, they picked a thing, not an action."),
        en("A falcon can fly. A fish can swim. Which word tells what a fish does?", "Swim. A good answer finds what the fish does in the sentence. Ask: which words tell you that a fish swims?"),
        en("A creek is a narrow stretch of water where boats can go. Where could a boat go: on a creek or on a street?", "On a creek, because a creek is water and a boat floats on water. Ask: why can a boat not go on a street?"),
        mc("Tiny means very, very small. Which one is tiny?", ["A camel", "A house", "An ant"], 2, "because an ant is very, very small. If your child chose A house, they picked something big, not tiny.")
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
        mc("Does the first letter of a name, like Maryam, start with a capital (big) letter or something else?", ["A small letter", "A number", "A capital letter"], 2, "because names start with a big letter. If your child chose A small letter, they forgot that names are special."),
        mc("Which name is written correctly?", ["noura", "Noura", "nOura"], 1, "because the N is a capital and the other letters are small. If your child chose nOura, they put the capital in the wrong place."),
        en("Parent writes: the sun is hot. and The sun is hot. Which sentence starts the right way?", "The second one, because a sentence starts with a capital letter. Ask: which letter is big at the start of The?"),
        en("Parent writes: Thesunishot and The sun is hot. Which one has spaces between the words?", "The second one, because it has a gap between each word. Ask: can you touch each gap with your finger?"),
        mc("What small mark goes at the end of a sentence that tells something?", ["A comma", "A question mark", "A full stop"], 2, "a little dot, because a sentence that tells something ends with it. If your child chose A question mark, they picked the mark for asking."),
        en("Put these words in order to make a sentence: cat, The, sat.", "The cat sat. A good answer starts with The, then says who, then what they did. Ask: does it sound right when you read it?"),
        mc("How many words are in this sentence: I like dates.", ["Three", "Two", "Four"], 0, "words: I, like and dates. If your child chose Two, they may have missed the little word I."),
        en("Parent writes b and d. Which letter has a tall line with a round belly on the right side?", "The letter b. The tall line is on the left and the belly is on the right. Ask: which letter has its belly on the other side?"),
        en("Camel, dates, falcon and bread. Which two are animals?", "Camel and falcon, because they are living animals and dates and bread are food. Ask: which two can we eat?"),
        en("Car, bus and bike are all ways to do what?", "Travel. A good answer says these things take us to places. Ask: how did you come here today?"),
        mc("Which one can you wear?", ["A tree", "A shoe", "A cloud"], 1, "because you put it on your foot. If your child chose A cloud, they picked something in the sky, not something to wear."),
        en("When a friend is telling you something, what should you do?", "Listen and wait for your turn to talk. A good answer says to be quiet and look at them. Ask: what do you do with your ears?")
      ]
    }
  ]
};
