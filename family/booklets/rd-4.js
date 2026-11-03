// Reading practice booklet, Grade 4 expectations. English only. See AUTHORING.md for the format.
const T = (en, ar) => ({ en, ar });
const en = (question, answer) => ({ q: T(question, question), a: T(answer, answer) });
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });

const vocText = "Salem and his grandfather walked into the oasis at dawn. The morning air was cool, but Salem knew the day would be scorching, so hot that the sand would burn bare feet by noon. Grandfather carried a long knife and a basket. \"Today we harvest,\" he said. \"The dates are ripe, which means they are ready to be picked.\"\n\nSalem looked up. The palm trees were tall giants, and their branches waved like green flags in the breeze. Heavy bunches of golden dates hung just below the leaves. Salem raised his palm to shade his eyes. \"How do we reach them?\" he asked.\n\nGrandfather smiled and tied a rope around the trunk and his waist. He leaned back and climbed, one careful step after another, until he was among the leaves. A bunch dropped into a net below. Salem sorted the fruit. Some dates were plump and glossy. Others were shriveled, wrinkled and dry from too little water. He put those aside.\n\nBy noon the sun was a blazing coin in the sky. Salem's shirt was soaked with sweat, and his throat was parched. Grandfather poured him a cup of cold water from a clay jar. Salem drank it quickly, and it felt like a miracle.\n\n\"You worked hard,\" said Grandfather. \"A farmer must be patient. A good harvest cannot be rushed.\"\n\nSalem bit into a soft date. It was so sweet that he nearly laughed. \"I would work all day for this,\" he said. Grandfather chuckled. \"Then you are a true farmer.\"";

const infText = "The Arabian oryx is a tall, graceful antelope with a white coat and two long, straight horns. It once roamed across the deserts of the Arabian Peninsula. By the 1970s, hunting had left none living in the wild. Thankfully, people worked together to save it.\n\nConservationists gathered a small group of oryx and cared for them in protected places. They bred the animals carefully, and the herds grew. In 1982, oryx were returned to the wild in Oman. Later, herds were also released in protected reserves in the United Arab Emirates, where they now live in the open desert.\n\nThe oryx is wonderfully suited to desert life. Its pale coat reflects the sunlight, which helps keep the animal cool. Its wide hooves spread out like paddles, so the oryx does not sink into soft sand. It can also go for many days without drinking. It gets much of its water from the plants it eats, and it often feeds at night and in the early morning, when the air is cooler. During the hottest hours of the day, it rests in the shade.\n\nToday, the Arabian oryx is a symbol of hope. Rangers watch over the herds and count them each year, and the numbers are growing. The story of the oryx shows that when people care and work together, an animal that was almost lost can come back.";

const litText = "On a breezy Saturday afternoon, Omar carried his new red kite down to the beach. The sea sparkled, and the sand was warm under his feet. His cousin Hind was already flying a yellow kite high above the waves.\n\n\"Watch this,\" said Omar. He ran across the sand and let go of the string. The kite wobbled, spun around and fell. He tried again. It crashed into the sand. The third time, it tangled in the string. Omar threw the spool down and folded his arms. \"This kite is broken,\" he grumbled. \"I give up.\"\n\nHind came over and looked at the kite carefully. \"It is not broken,\" she said. \"It just needs a longer tail. The tail keeps it steady, like a rudder on a boat.\" She took a strip of cloth from her bag and tied it on.\n\nOmar sighed, but he picked up the string. This time he waited for a strong gust of wind before he let go. The kite rose, wobbled once, and then climbed steadily. Soon it was gliding near Hind's yellow one, two bright spots against the blue sky.\n\nOmar laughed so hard he almost forgot to hold on. \"I nearly quit,\" he said.\n\n\"Everyone's first tries are bumpy,\" said Hind. \"You just have to keep trying and fix one small thing at a time.\"\n\nAs the sun sank toward the water, Omar watched his kite. He decided that tomorrow he would teach his little brother Khalid how to fly one too.";

module.exports = {
  subject: "rd",
  grade: 4,
  framework: "CCSS.ELA",
  englishOnly: true,
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "voc",
      standards: ["L.4.4", "L.4.4a", "L.4.5", "L.4.5a", "RL.4.4"],
      passage: { title: "The Date Harvest", text: vocText },
      example: ex(
        "In the story, \"The dates are ripe, which means they are ready to be picked.\" What does ripe mean?",
        ["Look for a clue near the word. The sentence says \"which means they are ready to be picked.\"", "So ripe must mean fully grown and ready to eat or harvest."],
        "Ripe means fully grown and ready to be picked.",
        "In the story, \"The dates are ripe, which means they are ready to be picked.\" What does ripe mean?",
        ["Look for a clue near the word. The sentence says \"which means they are ready to be picked.\"", "So ripe must mean fully grown and ready to eat or harvest."],
        "Ripe means fully grown and ready to be picked."
      ),
      items: [
        en("The story says the day would be \"scorching, so hot that the sand would burn bare feet.\" What does scorching mean?", "Extremely hot (the clue is \"so hot that the sand would burn\")."),
        en("Salem \"raised his palm to shade his eyes.\" Does palm mean the inside of the hand or a kind of tree here? How can you tell?", "The inside of the hand: he used it to shade his eyes."),
        en("The branches \"waved like green flags in the breeze.\" What two things are being compared?", "The palm branches and green flags."),
        en("What does shriveled mean in \"shriveled, wrinkled and dry\"? Use the clues around the word.", "Shrunk and wrinkled from losing water."),
        en("Salem's \"throat was parched.\" What does parched tell you about how he felt?", "Parched means very dry, so he was very thirsty."),
        en("The author writes, \"the sun was a blazing coin in the sky.\" What does this metaphor help you picture?", "A bright, round, very hot sun."),
        en("The cold water \"felt like a miracle.\" What does this phrase tell you about the water?", "It felt wonderful and was just what he needed."),
        en("Grandfather says, \"A good harvest cannot be rushed.\" What does rushed mean here?", "Done too quickly, in a hurry."),
        en("Grandfather says a farmer must be patient. What does patient mean? Give a clue from the story.", "Able to wait calmly without hurrying (for example, carefully climbing one step at a time)."),
        en("Which word from the story is the opposite of plump: glossy, shriveled or ripe?", "Shriveled."),
        en("Write your own sentence using palm to mean a kind of tree.", "Answers vary. Example: A tall palm grew beside the well."),
        en("Explain, in your own words, what Grandfather means by \"Then you are a true farmer.\"", "Salem is willing to work hard and be patient for something good, as a real farmer is.")
      ]
    },
    {
      area: "inf",
      standards: ["RI.4.1", "RI.4.2", "RI.4.3", "RI.4.5", "RI.4.8", "L.4.4"],
      passage: { title: "The Return of the Arabian Oryx", text: infText },
      example: ex(
        "What is the main idea of the first paragraph?",
        ["Ask what the whole paragraph is mostly about.", "It describes the oryx, says hunting left none in the wild, and says people worked to save it.", "Put that into one sentence."],
        "The Arabian oryx was lost from the wild, but people worked together to save it.",
        "What is the main idea of the first paragraph?",
        ["Ask what the whole paragraph is mostly about.", "It describes the oryx, says hunting left none in the wild, and says people worked to save it.", "Put that into one sentence."],
        "The Arabian oryx was lost from the wild, but people worked together to save it."
      ),
      items: [
        en("What is the main idea of the whole text?", "The Arabian oryx, once gone from the wild, was saved by people and is well suited to desert life."),
        en("What caused the oryx to disappear from the wild?", "Hunting."),
        en("What did conservationists do to help the oryx?", "They cared for a small group in protected places and bred them so the herds grew."),
        en("When were oryx first returned to the wild, and in which country?", "In 1982, in Oman."),
        en("How does the oryx's pale coat help it?", "It reflects sunlight and keeps the animal cool."),
        en("Why are the oryx's hooves wide?", "So it does not sink into soft sand."),
        en("How can the oryx go many days without drinking?", "It gets much of its water from the plants it eats."),
        en("Why does the oryx often feed at night and early morning?", "The air is cooler then."),
        en("The text has a problem and a solution. What is the problem? What is the solution?", "Problem: no oryx were left in the wild. Solution: people bred them and returned them to the wild."),
        en("From the text, what do you think conservationists means?", "People who work to protect animals and nature."),
        en("Give two details from the text that show the oryx is \"wonderfully suited to desert life.\"", "Any two: pale coat reflects sun; wide hooves; goes days without drinking; feeds when cooler; rests in shade."),
        en("Why does the author call the oryx \"a symbol of hope\"?", "Because an animal almost lost has come back, showing that people can make a difference.")
      ]
    },
    {
      area: "lit",
      standards: ["RL.4.1", "RL.4.2", "RL.4.3", "RL.4.4", "RL.4.6", "L.4.5a"],
      passage: { title: "Omar's Kite", text: litText },
      example: ex(
        "Where and when does the story begin?",
        ["Look at the first sentence for time and place clues.", "It says \"a breezy Saturday afternoon\" and \"down to the beach.\""],
        "On a breezy Saturday afternoon, at the beach.",
        "Where and when does the story begin?",
        ["Look at the first sentence for time and place clues.", "It says \"a breezy Saturday afternoon\" and \"down to the beach.\""],
        "On a breezy Saturday afternoon, at the beach."
      ),
      items: [
        en("Why is the beach a good place to fly a kite? Use a detail from the story.", "It is breezy (there is wind)."),
        en("How does Omar feel after his third try? Give a detail that shows it.", "Frustrated; he throws the spool down, folds his arms and says \"I give up.\""),
        en("What does Hind notice is wrong with the kite?", "It needs a longer tail."),
        en("What does the tail do for the kite?", "It keeps the kite steady."),
        en("What does the phrase \"like a rudder on a boat\" compare?", "A kite's tail and a boat's rudder, since both keep things steady."),
        en("What did Omar do differently on his last try?", "He waited for a strong gust of wind before letting go."),
        en("Describe Hind in one or two words and give a detail that shows it.", "Helpful or kind: she fixes the kite with a strip of cloth."),
        en("How is Omar different at the end of the story from the beginning?", "At first he wants to give up; at the end he is happy and wants to teach his brother."),
        en("Who is telling the story: a character in it, or a narrator outside it? How can you tell?", "A narrator outside it, using names and words like he and she."),
        en("What is the theme (the lesson) of the story?", "Keep trying and fix one small thing at a time instead of giving up."),
        en("Which words from the story best support that theme?", "Hind says, \"You just have to keep trying and fix one small thing at a time.\""),
        en("Why do you think Omar wants to teach Khalid tomorrow?", "He is proud and happy and wants to share what he learned.")
      ]
    }
  ]
};
