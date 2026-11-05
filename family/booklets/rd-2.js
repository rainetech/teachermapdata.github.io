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
        mc("Which word has the long e sound spelled with the vowel team \"ea\"?", ["bread", "bead", "bear"], 1, "B. bead. In bead the ea says a long e, like in \"read\" a book. If your child chose A (bread), the ea there says a short e. If they chose C (bear), it says air."),
        en("Which vowel team is in the word \"boat\"?", "oa. The o and a sit side by side and say one long o sound, as in boat. Ask: what other words have oa, like coat or goat?"),
        mc("Which word has the same vowel sound as \"farm\"?", ["cat", "cake", "cart"], 2, "C. cart. Cart and farm both have ar, which makes the same sound. If your child chose B (cake), they matched a long a sound, not the ar sound."),
        mc("Which word has the same vowel sound as \"bird\"?", ["hot", "hurt", "hat"], 1, "B. hurt. The ur in hurt and the ir in bird make the same sound. If your child chose C (hat), they matched a short a, not the ir sound."),
        en("How many syllables are in the word \"camel\"?", "2 syllables: cam-el. Clap it as you say it and count the claps. Ask: can you clap the word market for me?"),
        en("Split the word \"market\" into its two syllables.", "mar-ket. Clap it as you say it: two claps, so two parts. Ask: where do you hear the break between the parts?"),
        mc("What is the prefix in the word \"unlock\"?", ["un-", "lock", "-ock"], 0, "A. un-. A prefix comes at the start of a word and changes its meaning, and un- means not. If your child chose B (lock), they picked the base word, not the part added to the front."),
        en("What is the suffix in the word \"helpful\"?", "-ful. It is added at the end of help and means full of. Ask: what word do you get if you take -ful away?"),
        mc("Which common word does not follow the usual sound pattern?", ["sad", "sand", "said"], 2, "C. said. The ai in said makes a short e sound, so it breaks the usual pattern. If your child chose B (sand), they picked a word that follows the usual pattern."),
        mc("Which word ends in the sound /t/ when you say the -ed ending?", ["jumped", "wanted", "played"], 0, "A. jumped. Say it aloud and you hear a t sound at the end. If your child chose B (wanted), they heard the ending as id. If they chose C (played), they heard a d sound."),
        en("You read a sentence aloud and one word does not make sense. What should you do?", "A good answer says to stop, go back and reread the sentence, then look at the odd word again. Ask: which word did not make sense, and what could it be?"),
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
        mc("Who went to the date farm with Grandmother?", ["Maryam and her cousin Hamdan", "Salem and his sister Noura", "Hamdan and his cousin Layla"], 0, "A. The first sentence of Text A says Maryam and her cousin Hamdan went with Grandmother. If your child chose B or C, they picked names from the kite stories, Text C and Text D."),
        mc("Where is the date farm?", ["In Sharjah", "In Al Ain", "In Hatta"], 1, "B. The first sentence of Text A says the date farm is in Al Ain. If your child chose A (Sharjah), they picked the beach from the kite story, Text C."),
        en("What did Hamdan see in the shade?", "A good answer says a tired, thirsty little bird sitting in the shade. Ask: which words in the story tell you the bird needed help?"),
        mc("Why did Grandmother pour water into a small dish?", ["Because the basket was heavy", "Because the day was warm", "Because the bird looked thirsty"], 2, "C. The story says the bird looked thirsty, so Grandmother poured water into a dish. If your child chose B (the day was warm), they picked a true detail that is not the reason."),
        en("How did the children pick the dates?", "A good answer says carefully, and may add that they picked only the soft, brown dates. Ask: what did Grandmother say about how to pick?"),
        en("Which sentence tells the main idea of the story: (a) Dates grow in Al Ain. (b) Two cousins helped a thirsty bird while they picked dates. (c) Eid sweets are made with dates.", "(b). It tells what the whole story is about: two cousins helping a thirsty bird while they pick dates. Ask: why is each of the other two only one small detail?"),
        mc("What lesson does Grandmother teach at the end of the story?", ["When we help quietly and kindly, we make the world better", "Dates are best when they are soft and brown", "A ladder is needed to pick dates"], 0, "A. At the end of Text A, Grandmother says that helping quietly makes the world better. If your child chose B (dates are best soft and brown), they picked a detail, not the lesson."),
        en("Put these in the order they happen: the bird drinks water; the children pick dates; the children carry the basket home.", "First the children pick dates, then the bird drinks water, and last they carry the basket home. Ask: which part of the story tells you what came first?"),
        mc("Read Text B. Why can the date palm grow well in hot, dry places?", ["Its leaves make a lot of shade", "Its long roots reach deep underground to find water", "Its dates are sweet and soft"], 1, "B. Text B says the long roots reach deep underground to find water. If your child chose C (its dates are sweet and soft), they picked a true fact that does not explain growing in dry places."),
        en("What is the main topic of Text B: (a) how to bake Eid sweets, (b) the date palm, how it grows and how it is used, or (c) a trip to a farm in Al Ain?", "(b). Every part of Text B is about the date palm, how it grows and how it is used. Ask: what do the headings tell you about the topic?"),
        mc("In Text B, what happens right after the small flowers open?", ["They turn soft and brown", "Farmers harvest them", "They turn into green dates"], 2, "C. Text B says next, the flowers turn into green dates. If your child chose A or B, they picked a step that comes later in the order."),
        mc("Text A and Text B are both about dates. Which idea is in Text B but not in Text A?", ["Dates are soft and brown when ready.", "Palm leaves can be woven into mats and fans.", "Children can help pick dates."], 1, "B. Only Text B says the leaves can be woven into mats and fans. If your child chose A, that idea is in both texts. If they chose C, it is only in Text A."),
        en("In Text C, who feels worried at first, and who feels sure the kite can be saved?", "Salem feels worried, and Noura feels sure. A good answer uses her words, Don't worry, said in a happy voice. Ask: which words show how each one feels?"),
        en("In Text D, which character says the kite is too high, and which character wants to try?", "Layla says it is too high, and Hamdan wants to try. A good answer names both characters and what each one says. Ask: who sounds more hopeful, and how do you know?"),
        en("A picture next to Text C shows a red kite stuck at the top of a tall palm tree, with Salem pointing up and Mother holding a long stick. Which part of the story does the picture match best: (a) the kite landing in the tree and the plan to reach it, (b) Salem saying thank you, or (c) the children arriving at the beach?", "(a). The picture shows the kite in the tree and the long stick, which is the problem and the plan to solve it. Ask: what in the picture matches the words in the story?"),
        en("Text C and Text D are two versions of the same story. What happens to the kite in both of them?", "A good answer says the wind pulls the string away, the kite lands in a tree, and a long stick brings it down. Ask: what happens first, next and last in both stories?"),
        en("Text C and Text D are two versions of the same story. Name one way Text D is different from Text C.", "A good answer names one real difference, such as the place, the children, the colour of the kite or who helps. Ask: what is the same and what is different in the two stories?"),
        mc("A diagram below Text E shows the sun at the top, an arrow down to a solar panel, and a second arrow from the panel to a light bulb. What does the second arrow show?", ["The electricity made by the panel goes to the light bulb", "The sun gets hotter near the bulb", "The light bulb makes new sunlight"], 0, "A. The second arrow goes from the panel to the bulb, so it shows electricity going to the bulb. If your child chose B, they thought the arrows show heat. If they chose C, they read the arrow backwards."),
        en("A photo beside Text E shows many flat panels in long rows, all tilted to face the sun. Which part of the text does the photo match best: (a) the first sentence about rows of solar panels, or (b) the last sentence about clean air?", "(a). The photo shows panels in long rows, which is what the first sentence describes. Ask: which words in the first sentence can you see in the photo?"),
        en("What reason does the author give for the UAE being a good place for solar parks?", "It has many sunny days. The second paragraph gives the sun as the reason. Ask: where in the text does it say so?")
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
        mc("\"The soup was scalding. Layla waited because it could burn her tongue.\" What does scalding mean?", ["Very cold", "Very hot", "Very salty"], 1, "B. Very hot. The clue is that it could burn her tongue, so Layla waited. If your child chose A (very cold), they read the clue the wrong way round."),
        en("What does the word \"unhappy\" mean?", "Not happy. The prefix un- means not, so unhappy is the opposite of happy. Ask: what does the word unkind mean?"),
        mc("What does the word \"unlock\" mean?", ["To close a lock", "To lock again", "To open a lock"], 2, "C. To open a lock. The prefix un- means to undo or the opposite. If your child chose A (to close a lock), they heard lock and forgot that un- changes it."),
        mc("What does the word \"rewrite\" mean?", ["To write again", "To write less", "To not write"], 0, "A. To write again. The prefix re- means again. If your child chose C (to not write), they mixed re- up with un-, which means not."),
        en("Omar will reread his book tonight. What will he do?", "Read his book again. The prefix re- means again, so reread is read again. Ask: what would you call building a tower again?"),
        en("Which two small words make the compound word \"sandstorm\"?", "sand and storm. Put the two small words together and you get the compound word. Ask: which two words make the word sunshine?"),
        mc("Which word is a compound word?", ["sandy", "sandcastle", "sandal"], 1, "B. sandcastle. It joins two whole words, sand and castle. If your child chose A (sandy), they picked sand with an ending, not a second word."),
        en("Which word means almost the same as \"huge\": tiny, giant or quiet?", "giant. Huge and giant both mean very big. Tiny is the opposite, and quiet is about sound, not size."),
        mc("Which word is the opposite of \"empty\"?", ["open", "small", "full"], 2, "C. full. Empty means nothing inside, and full means no room left inside. If your child chose B (small), they thought of size, not what is inside."),
        en("Put these words in order from least hot to most hot: boiling, warm, hot.", "warm, hot, boiling. Warm is a little heat, hot is more, and boiling is the most. Ask: which word could go before warm?"),
        en("Which word shows the fastest way to move: stroll, hurry or wander?", "hurry. It means to move fast, while stroll and wander mean to move in a relaxed way. Ask: when do you hurry?"),
        en("Explain why \"happy\" and \"unhappy\" are opposites. What does the prefix do?", "A good answer says un- means not, so unhappy means not happy. Ask: what other word can you put un- in front of to make an opposite?"),
        en("In the poem in Text A, which word at the end of line 2 rhymes with \"down\" at the end of line 1? What does the repeated \"drip, drip, drop\" help you hear?", "town rhymes with down, because they sound the same at the end. A good answer says the repeated words make a steady beat like raindrops. Ask: what sound do you hear?"),
        mc("In Text B, what does the word \"orbiter\" mean?", ["A spacecraft that circles a planet", "A spacecraft that lands on a planet", "A tool that studies the weather"], 0, "A. The text says an orbiter travels around a planet instead of landing, and the glossary says so too. If your child chose B, they picked the opposite meaning, landing."),
        en("Which part of Text B would you read to find out what the Hope Probe studies: the heading \"A Journey to Mars\", the heading \"What Hope Studies\" or the Glossary?", "The heading What Hope Studies. Headings tell what each part is about, and this one names what the probe studies. Ask: what would you find under A Journey to Mars?"),
        mc("What is the main purpose of Text B?", ["To make you laugh", "To ask you to buy something", "To tell you facts about the Hope Probe"], 2, "C. The text gives facts about the Hope Probe, so it is there to inform. If your child chose A (to make you laugh), they looked for a feeling, not the facts."),
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
        en("Rewrite this sentence with the correct capital letters: omar visited abu dhabi on friday.", "Omar visited Abu Dhabi on Friday. Names of people, places and days start with a capital letter. Ask: which three words needed a capital?"),
        en("Add the missing comma to the end of this letter closing: Your friend", "Your friend, with a comma at the end. A letter closing is followed by a comma before the name. Ask: where do you write your name?"),
        en("Rewrite with the correct capital letters: the children celebrated eid in sharjah.", "The children celebrated Eid in Sharjah. The sentence, Eid and Sharjah all start with a capital. Ask: why does Eid need a capital letter?"),
        en("Add the missing comma to the start of this letter: Dear Layla", "Dear Layla, with a comma after the name. A greeting in a letter ends with a comma. Ask: how does the letter closing end?"),
        mc("Which is \"do not\" written as one word with an apostrophe?", ["don't", "dont", "do'nt"], 0, "A. don't. The apostrophe sits where the o in not is left out. If your child chose B (dont), they forgot the apostrophe."),
        en("Write \"we are\" as one word, using an apostrophe.", "we're. The apostrophe takes the place of the missing letter a in are. Ask: what letter did the apostrophe replace?"),
        mc("Which shows that the bag belongs to Noura?", ["Nouras bag", "Nouras' bag", "Noura's bag"], 2, "C. Noura's bag. For one owner, add an apostrophe and s to the name. If your child chose A (Nouras), they left out the apostrophe."),
        mc("Which is the plural of \"child\"?", ["childs", "children", "childes"], 1, "B. children. Child is an irregular word, so it does not just add s. If your child chose A (childs), they added s as for most words."),
        en("Write the plural of \"tooth\".", "teeth. Tooth changes inside the word to make its plural, like foot and feet. Ask: what is the plural of goose?"),
        mc("Which is a complete sentence?", ["The camel drank water.", "The big camel.", "Drank water."], 0, "A. The camel drank water. It says who did something and what happened. If your child chose B (The big camel), they picked a group of words with no action."),
        en("Which sentence is the best way to make \"The boy ran.\" longer: (a) The boy ran. (b) The happy boy ran quickly to the souq. (c) Ran quickly the.", "(b). It adds a describing word, how he ran and where he ran. Ask: which words did we add to the short sentence?"),
        en("Put these sentences in order to tell a story: Finally he said thank you. First Salem washed his hands. Then Salem ate his lunch.", "First Salem washed his hands. Then Salem ate his lunch. Finally he said thank you. The words first, then and finally show the order. Ask: which word tells you what comes last?"),
      ]
    }
  ]
};
