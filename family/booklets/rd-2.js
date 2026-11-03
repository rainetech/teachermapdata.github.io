// Reading practice booklet, Grade 2 expectations. English-only: see AUTHORING.md for the format.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const en = (question, answer) => it(question, answer, question, answer);
const mc = (qEn, optsEn, correct, whyEn) => ({ q: T(qEn, qEn), a: T(whyEn, whyEn), options: { en: optsEn, ar: optsEn }, correct });
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
      standards: ["RF.2.3a", "RF.2.3b", "RF.2.3c", "RF.2.3d", "RF.2.3e", "RF.2.3f", "RF.2.4c"],
      example: exEn(
        "Split the word \"basket\" into syllables.",
        ["Clap the word as you say it: bas-ket. You clap two times.", "Each clap is one syllable, and each syllable has a vowel sound."],
        "bas-ket (2 syllables)"
      ),
      items: [
        mc("Which word has the long e sound spelled with the vowel team \"ea\"?", ["bread", "bead", "bear"], 1, "bead (in \"bread\" the ea says a short e, and in \"bear\" it says air)."),
        en("Which vowel team is in the word \"boat\"?", "oa (the letters o and a work together to say a long o)."),
        mc("Which word has the same vowel sound as \"farm\"?", ["cat", "cake", "cart"], 2, "cart (the letters ar in both words make the same r-controlled sound)."),
        mc("Which word has the same vowel sound as \"bird\"?", ["hot", "hurt", "hat"], 1, "hurt (ir and ur both make the same sound)."),
        en("How many syllables are in the word \"camel\"?", "2 (cam-el)."),
        en("Split the word \"market\" into its two syllables.", "mar-ket."),
        mc("What is the prefix in the word \"unlock\"?", ["un-", "lock", "-ock"], 0, "un- (it comes at the start of the word and means not or the opposite)."),
        en("What is the suffix in the word \"helpful\"?", "-ful (it comes at the end of the word)."),
        mc("Which common word does not follow the usual sound pattern?", ["sad", "sand", "said"], 2, "said (the ai in said makes a short e sound, not a long a)."),
        mc("Which word ends in the sound /t/ when you say the -ed ending?", ["jumped", "wanted", "played"], 0, "jumped (wanted ends in the sound /id/ and played ends in /d/)."),
        en("You read a sentence aloud and one word does not make sense. What should you do?", "Go back and reread the sentence, looking at the word again, until it makes sense."),
      ]
    },
    {
      area: "cmp",
      standards: ["RL.2.1", "RL.2.2", "RL.2.3", "RL.2.5", "RI.2.1", "RI.2.2", "RI.2.3", "RL.2.6", "RL.2.7", "RL.2.9", "RI.2.7", "RI.2.8", "RI.2.9"],
      passage: [
        {
          title: "Text A: Dates for Eid",
          text: "On Friday morning, Maryam and her cousin Hamdan went with Grandmother to a date farm in Al Ain. The air was warm. The palm trees stood in long, straight rows. Grandmother wanted to pick dates to make sweets for Eid. Maryam carried a basket, and Hamdan held a small ladder.\n\n\"Pick only the soft, brown dates,\" said Grandmother. The children worked carefully and filled the basket. Soon it was heavy.\n\nThen Hamdan saw a tired little bird sitting in the shade. It looked thirsty. He did not touch it. Instead, he called Grandmother, and she poured some water into a small dish. The bird drank, rested, and flew away.\n\n\"That was kind and gentle,\" said Grandmother. \"When we help quietly, we make the world better.\"\n\nThe children carried the heavy basket home, smiling all the way."
        },
        {
          title: "Text B: The Date Palm",
          text: "The date palm is a tall tree that grows well in hot, dry places. Its long roots reach deep underground to find water.\n\nHow Dates Grow\nFirst, small flowers open on the tree in spring. Next, the flowers turn into green dates. Then the dates change colour as they get bigger. Last, they become soft and brown, and farmers harvest them.\n\nMany Uses\nFor many years, people in the Emirates have used every part of the palm. The fruit is food. The leaves can be woven into mats and fans. The trunk gives wood for building.\n\nGlossary\nharvest: to pick a crop when it is ready"
        },
        {
          title: "Text C: The Lost Kite (Salem and Noura)",
          text: "Salem and his sister Noura flew a red kite on the beach in Sharjah while Mother sat on a bench nearby. The wind was strong. It pulled the string out of Salem's hand, and the kite landed at the top of a tall palm tree.\n\n\"Oh no, my kite is lost!\" said Salem. He felt very worried.\n\n\"Don't worry,\" said Noura in a happy voice. \"We can get it back.\"\n\nMother found a long stick and reached up. The kite came down, and Salem held the string tight. \"Thank you,\" he said. \"Next time I will hold it with both hands.\""
        },
        {
          title: "Text D: The Lost Kite (Hamdan and Layla)",
          text: "Hamdan and his cousin Layla flew a green kite in the desert near Hatta while Grandfather sat in the shade of a ghaf tree. The wind was strong. It pulled the string out of Hamdan's hand, and the kite landed on a branch of the ghaf tree.\n\n\"I think it is too high,\" said Layla in a small voice.\n\n\"Let us try,\" said Hamdan in a brave voice. \"We will find a way.\"\n\nGrandfather found a long stick and reached up. The kite came down, and Hamdan held the string tight. \"Thank you,\" he said. \"Next time I will hold it with both hands.\""
        },
        {
          title: "Text E: Solar Parks",
          text: "A solar park is a large place filled with rows of solar panels. Solar panels catch sunlight and turn it into electricity. Homes, schools and shops use that electricity for lights and fans.\n\nThe UAE is a good place for solar parks because it has many sunny days. Solar panels use sunlight, so they make electricity without making smoke. This helps keep the air clean, so solar parks are a good choice for the country."
        }
      ],
      example: exEn(
        "Read: \"Noura put on her coat because the desert night was cold.\" Why did Noura put on her coat?",
        ["Find the word because. It tells us the reason.", "The reason comes after because: the desert night was cold."],
        "Because the desert night was cold."
      ),
      items: [
        mc("Who went to the date farm with Grandmother?", ["Maryam and her cousin Hamdan", "Salem and his sister Noura", "Hamdan and his cousin Layla"], 0, "Maryam and her cousin Hamdan went with Grandmother."),
        mc("Where is the date farm?", ["In Sharjah", "In Al Ain", "In Hatta"], 1, "The story says the date farm is in Al Ain."),
        en("What did Hamdan see in the shade?", "A tired, thirsty little bird."),
        mc("Why did Grandmother pour water into a small dish?", ["Because the basket was heavy", "Because the day was warm", "Because the bird looked thirsty"], 2, "Because the bird looked thirsty."),
        en("How did the children pick the dates?", "Carefully (they picked only the soft, brown ones)."),
        en("Which sentence tells the main idea of the story: (a) Dates grow in Al Ain. (b) Two cousins helped a thirsty bird while they picked dates. (c) Eid sweets are made with dates.", "(b) (it tells what the whole story is about, not just one detail)."),
        mc("What lesson does Grandmother teach at the end of the story?", ["When we help quietly and kindly, we make the world better", "Dates are best when they are soft and brown", "A ladder is needed to pick dates"], 0, "Grandmother says that helping quietly makes the world better (be kind and helpful)."),
        en("Put these in the order they happen: the bird drinks water; the children pick dates; the children carry the basket home.", "1. The children pick dates. 2. The bird drinks water. 3. The children carry the basket home."),
        mc("Read Text B. Why can the date palm grow well in hot, dry places?", ["Its leaves make a lot of shade", "Its long roots reach deep underground to find water", "Its dates are sweet and soft"], 1, "Its long roots reach deep underground to find water."),
        en("What is the main topic of Text B: (a) how to bake Eid sweets, (b) the date palm, how it grows and how it is used, or (c) a trip to a farm in Al Ain?", "(b) (the whole text tells facts about the date palm)."),
        mc("In Text B, what happens right after the small flowers open?", ["They turn soft and brown", "Farmers harvest them", "They turn into green dates"], 2, "They turn into green dates (the word next shows the order)."),
        mc("Text A and Text B are both about dates. Which idea is in Text B but not in Text A?", ["Dates are soft and brown when ready.", "Palm leaves can be woven into mats and fans.", "Children can help pick dates."], 1, "Text A tells about soft, brown dates and children picking them, but only Text B tells about using the leaves."),
        en("In Text C, who feels worried at first, and who feels sure the kite can be saved?", "Salem feels worried, and Noura feels sure (she says \"Don't worry\" in a happy voice)."),
        en("In Text D, which character says the kite is too high, and which character wants to try?", "Layla says it is too high, and Hamdan wants to try (each character has a different point of view)."),
        en("A picture next to Text C shows a red kite stuck at the top of a tall palm tree, with Salem pointing up and Mother holding a long stick. Which part of the story does the picture match best: (a) the kite landing in the tree and the plan to reach it, (b) Salem saying thank you, or (c) the children arriving at the beach?", "(a) (the picture shows the kite in the tree and the long stick, so it helps us see the problem and how it will be solved)."),
        en("Text C and Text D are two versions of the same story. What happens to the kite in both of them?", "The wind pulls the string away and the kite lands in a tree, then a long stick is used to bring it down."),
        en("Text C and Text D are two versions of the same story. Name one way Text D is different from Text C.", "Any one of these: it is set in the desert near Hatta, not on a beach in Sharjah; the children are Hamdan and Layla, not Salem and Noura; the kite is green, not red; Grandfather helps, not Mother."),
        mc("A diagram below Text E shows the sun at the top, an arrow down to a solar panel, and a second arrow from the panel to a light bulb. What does the second arrow show?", ["The electricity made by the panel goes to the light bulb", "The sun gets hotter near the bulb", "The light bulb makes new sunlight"], 0, "The electricity made by the panel goes to the light bulb (it gives the bulb power)."),
        en("A photo beside Text E shows many flat panels in long rows, all tilted to face the sun. Which part of the text does the photo match best: (a) the first sentence about rows of solar panels, or (b) the last sentence about clean air?", "(a) (the photo shows what a solar park looks like, with panels in rows)."),
        en("What reason does the author give for the UAE being a good place for solar parks?", "It has many sunny days.")
      ]
    },
    {
      area: "voc",
      standards: ["L.2.4a", "L.2.4b", "L.2.4d", "L.2.5b", "RL.2.4", "RI.2.4", "RI.2.5", "RI.2.6"],
      passage: [
        {
          title: "Text A: Rain in the Desert",
          text: "Drip, drip, drop, the rain comes down,\nOver the sand and the sleepy town.\nDrip, drip, drop, on the palm tree tall,\nThe thirsty ground drinks it all.\nSplash, splash, splash, the puddles play,\nThe sun comes out and we cheer, hooray!"
        },
        {
          title: "Text B: The Hope Probe",
          text: "A Journey to Mars\nThe Hope Probe is a spacecraft built in the United Arab Emirates. In 2021 it reached Mars and began to circle the planet. It is an orbiter, which means it travels around a planet instead of landing on it.\n\nWhat Hope Studies\nThe probe uses special tools to study the weather and the air of Mars. Scientists share what it finds so that people everywhere can learn about the red planet.\n\nGlossary\norbiter: a spacecraft that circles a planet"
        }
      ],
      example: exEn(
        "Read: \"The path was narrow, so only one camel could walk on it at a time.\" What does narrow mean?",
        ["Look for clues near the word. Only one camel could fit on the path.", "A path where only one fits is not wide."],
        "Narrow means not wide."
      ),
      items: [
        mc("\"The soup was scalding. Layla waited because it could burn her tongue.\" What does scalding mean?", ["Very cold", "Very hot", "Very salty"], 1, "Very hot (the clue is that it could burn her tongue)."),
        en("What does the word \"unhappy\" mean?", "Not happy (the prefix un- means not)."),
        mc("What does the word \"unlock\" mean?", ["To close a lock", "To lock again", "To open a lock"], 2, "To open a lock, to undo locking (the prefix un- means the opposite of)."),
        mc("What does the word \"rewrite\" mean?", ["To write again", "To write less", "To not write"], 0, "To write again (the prefix re- means again)."),
        en("Omar will reread his book tonight. What will he do?", "Read his book again."),
        en("Which two small words make the compound word \"sandstorm\"?", "sand and storm."),
        mc("Which word is a compound word?", ["sandy", "sandcastle", "sandal"], 1, "sandcastle (it is made of sand and castle)."),
        en("Which word means almost the same as \"huge\": tiny, giant or quiet?", "giant."),
        mc("Which word is the opposite of \"empty\"?", ["open", "small", "full"], 2, "full."),
        en("Put these words in order from least hot to most hot: boiling, warm, hot.", "warm, hot, boiling."),
        en("Which word shows the fastest way to move: stroll, hurry or wander?", "hurry (stroll and wander are relaxed ways of moving)."),
        en("Explain why \"happy\" and \"unhappy\" are opposites. What does the prefix do?", "Un- means not, so unhappy means not happy, the opposite of happy."),
        en("In the poem in Text A, which word at the end of line 2 rhymes with \"down\" at the end of line 1? What does the repeated \"drip, drip, drop\" help you hear?", "town rhymes with down. The repeated words give a steady beat and help you hear raindrops falling."),
        mc("In Text B, what does the word \"orbiter\" mean?", ["A spacecraft that circles a planet", "A spacecraft that lands on a planet", "A tool that studies the weather"], 0, "A spacecraft that circles (travels around) a planet. The text and the glossary both say so."),
        en("Which part of Text B would you read to find out what the Hope Probe studies: the heading \"A Journey to Mars\", the heading \"What Hope Studies\" or the Glossary?", "The heading \"What Hope Studies\" (headings tell what each part is about)."),
        mc("What is the main purpose of Text B?", ["To make you laugh", "To ask you to buy something", "To tell you facts about the Hope Probe"], 2, "The author wants to explain and describe the Hope Probe."),
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
        mc("Which is \"do not\" written as one word with an apostrophe?", ["don't", "dont", "do'nt"], 0, "don't."),
        en("Write \"we are\" as one word, using an apostrophe.", "we're."),
        mc("Which shows that the bag belongs to Noura?", ["Nouras bag", "Nouras' bag", "Noura's bag"], 2, "Noura's bag (add an apostrophe and s to one person's name)."),
        mc("Which is the plural of \"child\"?", ["childs", "children", "childes"], 1, "children."),
        en("Write the plural of \"tooth\".", "teeth."),
        mc("Which is a complete sentence?", ["The camel drank water.", "The big camel.", "Drank water."], 0, "The camel drank water (it tells who and what happened; the others are only part of a sentence)."),
        en("Which sentence is the best way to make \"The boy ran.\" longer: (a) The boy ran. (b) The happy boy ran quickly to the souq. (c) Ran quickly the.", "(b) (it adds a describing word, how he ran and where)."),
        en("Put these sentences in order to tell a story: Finally he said thank you. First Salem washed his hands. Then Salem ate his lunch.", "First Salem washed his hands. Then Salem ate his lunch. Finally he said thank you."),
      ]
    }
  ]
};
