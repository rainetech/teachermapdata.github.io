// Reading practice booklet, Grade 2 expectations. English-only: see AUTHORING.md for the format.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const en = (question, answer) => it(question, answer, question, answer);
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });
const exEn = (question, steps, answer) => ex(question, steps, answer, question, steps, answer);

module.exports = {
  subject: "rd",
  grade: 2,
  framework: "CCSS.ELA",
  englishOnly: true,
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "fnd",
      standards: ["RF.2.3a", "RF.2.3b", "RF.2.3d", "RF.2.3e", "RF.2.3f", "RF.2.4c"],
      example: exEn(
        "Split the word \"basket\" into syllables.",
        ["Clap the word as you say it: bas-ket. You clap two times.", "Each clap is one syllable, and each syllable has a vowel sound."],
        "bas-ket (2 syllables)"
      ),
      items: [
        en("Which word has the long e sound spelled with the vowel team \"ea\": bread, bead or bear?", "bead (in \"bread\" the ea says a short e, and in \"bear\" it says air)."),
        en("Which vowel team is in the word \"boat\"?", "oa (the letters o and a work together to say a long o)."),
        en("Which word has the same vowel sound as \"farm\": cart, cat or cake?", "cart (the letters ar in both words make the same r-controlled sound)."),
        en("Which word has the same vowel sound as \"bird\": hurt, hot or hat?", "hurt (ir and ur both make the same sound)."),
        en("How many syllables are in the word \"camel\"?", "2 (cam-el)."),
        en("Split the word \"market\" into its two syllables.", "mar-ket."),
        en("What is the prefix in the word \"unlock\"?", "un- (it comes at the start of the word and means not or the opposite)."),
        en("What is the suffix in the word \"helpful\"?", "-ful (it comes at the end of the word)."),
        en("Which common word does not follow the usual sound pattern: said, sad or sand?", "said (the ai in said makes a short e sound, not a long a)."),
        en("Which word ends in the sound /t/ when you say the -ed ending: jumped, wanted or played?", "jumped (wanted ends in the sound /id/ and played ends in /d/)."),
        en("You read a sentence aloud and one word does not make sense. What should you do?", "Go back and reread the sentence, looking at the word again, until it makes sense.")
      ]
    },
    {
      area: "cmp",
      standards: ["RL.2.1", "RL.2.2", "RL.2.3", "RL.2.5"],
      passage: {
        title: "Dates for Eid",
        text: "On Friday morning, Maryam and her cousin Hamdan went with Grandmother to a date farm in Al Ain. The air was warm. The palm trees stood in long, straight rows. Grandmother wanted to pick dates to make sweets for Eid. Maryam carried a basket, and Hamdan held a small ladder.\n\n\"Pick only the soft, brown dates,\" said Grandmother. The children worked carefully and filled the basket. Soon it was heavy.\n\nThen Hamdan saw a tired little bird sitting in the shade. It looked thirsty. He did not touch it. Instead, he called Grandmother, and she poured some water into a small dish. The bird drank, rested, and flew away.\n\n\"That was kind and gentle,\" said Grandmother. \"When we help quietly, we make the world better.\"\n\nThe children carried the heavy basket home, smiling all the way."
      },
      example: exEn(
        "Read: \"Noura put on her coat because the desert night was cold.\" Why did Noura put on her coat?",
        ["Find the word because. It tells us the reason.", "The reason comes after because: the desert night was cold."],
        "Because the desert night was cold."
      ),
      items: [
        en("Who went to the date farm with Grandmother?", "Maryam and her cousin Hamdan."),
        en("Where is the date farm?", "In Al Ain."),
        en("When did they go to the farm?", "On a Friday morning."),
        en("What did Grandmother want to make with the dates?", "Sweets for Eid."),
        en("What did Hamdan hold while they worked?", "A small ladder."),
        en("What did Hamdan see in the shade?", "A tired, thirsty little bird."),
        en("Why did Grandmother pour water into a small dish?", "Because the bird looked thirsty."),
        en("How did the children pick the dates?", "Carefully (they picked only the soft, brown ones)."),
        en("What happened after the bird drank?", "It rested and then flew away."),
        en("Which sentence tells the main idea of the story: (a) Dates grow in Al Ain. (b) Two cousins helped a thirsty bird while they picked dates. (c) Eid sweets are made with dates.", "(b) (it tells what the whole story is about, not just one detail)."),
        en("What lesson does Grandmother teach at the end of the story?", "When we help others quietly and kindly, we make the world better (be kind and helpful)."),
        en("Put these in the order they happen: the bird drinks water; the children pick dates; the children carry the basket home.", "1. The children pick dates. 2. The bird drinks water. 3. The children carry the basket home.")
      ]
    },
    {
      area: "voc",
      standards: ["L.2.4a", "L.2.4b", "L.2.4d", "L.2.5b"],
      example: exEn(
        "Read: \"The path was narrow, so only one camel could walk on it at a time.\" What does narrow mean?",
        ["Look for clues near the word. Only one camel could fit on the path.", "A path where only one fits is not wide."],
        "Narrow means not wide."
      ),
      items: [
        en("\"The soup was scalding. Layla waited because it could burn her tongue.\" What does scalding mean?", "Very hot (the clue is that it could burn her tongue)."),
        en("What does the word \"unhappy\" mean?", "Not happy (the prefix un- means not)."),
        en("What does the word \"unlock\" mean?", "To open a lock, to undo locking (the prefix un- means the opposite of)."),
        en("What does the word \"rewrite\" mean?", "To write again (the prefix re- means again)."),
        en("Omar will reread his book tonight. What will he do?", "Read his book again."),
        en("Which two small words make the compound word \"sandstorm\"?", "sand and storm."),
        en("Which word is a compound word: sandy, sandcastle or sandal?", "sandcastle (it is made of sand and castle)."),
        en("Which word means almost the same as \"huge\": tiny, giant or quiet?", "giant."),
        en("Which word is the opposite of \"empty\": full, open or small?", "full."),
        en("Put these words in order from least hot to most hot: boiling, warm, hot.", "warm, hot, boiling."),
        en("Which word shows the fastest way to move: stroll, hurry or wander?", "hurry (stroll and wander are relaxed ways of moving)."),
        en("Explain why \"happy\" and \"unhappy\" are opposites. What does the prefix do?", "Un- means not, so unhappy means not happy, the opposite of happy.")
      ]
    },
    {
      area: "wl",
      standards: ["L.2.1b", "L.2.1f", "L.2.2a", "L.2.2b", "L.2.2c", "W.2.3"],
      example: exEn(
        "Write the plural of the word \"foot\".",
        ["Most plurals add s, but some words change a different way.", "We do not say foots. The word changes inside: foot becomes feet."],
        "feet"
      ),
      items: [
        en("Rewrite this sentence with the correct capital letters: omar visited abu dhabi on friday.", "Omar visited Abu Dhabi on Friday."),
        en("Add the missing comma to the end of this letter closing: Your friend", "Your friend,"),
        en("Rewrite with the correct capital letters: the children celebrated eid in sharjah.", "The children celebrated Eid in Sharjah."),
        en("Add the missing comma to the start of this letter: Dear Layla", "Dear Layla,"),
        en("Write \"do not\" as one word, using an apostrophe.", "don't."),
        en("Write \"we are\" as one word, using an apostrophe.", "we're."),
        en("Use an apostrophe to show that the bag belongs to Noura.", "Noura's bag."),
        en("Write the plural of \"child\".", "children."),
        en("Write the plural of \"tooth\".", "teeth."),
        en("Which is a complete sentence: (a) The big camel. (b) The camel drank water.", "(b) (it tells who and what happened; (a) is only part of a sentence)."),
        en("Which sentence is the best way to make \"The boy ran.\" longer: (a) The boy ran. (b) The happy boy ran quickly to the souq. (c) Ran quickly the.", "(b) (it adds a describing word, how he ran and where)."),
        en("Put these sentences in order to tell a story: Finally he said thank you. First Salem washed his hands. Then Salem ate his lunch.", "First Salem washed his hands. Then Salem ate his lunch. Finally he said thank you.")
      ]
    }
  ]
};
