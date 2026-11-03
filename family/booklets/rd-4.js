// Reading practice booklet, Grade 4 expectations. English only. See AUTHORING.md for the format.
const T = (en, ar) => ({ en, ar });
const mc = (qEn, optsEn, correct, whyEn) => ({ q: T(qEn, qEn), a: T(whyEn, whyEn), options: { en: optsEn, ar: optsEn }, correct });
const en = (question, answer) => ({ q: T(question, question), a: T(answer, answer) });
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });

const vocText = "Salem and his grandfather walked into the oasis at dawn. The morning air was cool, but Salem knew the day would be scorching, so hot that the sand would burn bare feet by noon. Grandfather carried a long knife and a basket. \"Today we harvest,\" he said. \"The dates are ripe, which means they are ready to be picked.\"\n\nSalem looked up. The palm trees were tall giants, and their branches waved like green flags in the breeze. Heavy bunches of golden dates hung just below the leaves. Salem raised his palm to shade his eyes. \"How do we reach them?\" he asked.\n\nGrandfather smiled and tied a rope around the trunk and his waist. He leaned back and climbed, one careful step after another, until he was among the leaves. A bunch dropped into a net below. Salem sorted the fruit. Some dates were plump and glossy. Others were shriveled, wrinkled and dry from too little water. He put those aside.\n\nBy noon the sun was a blazing coin in the sky. Salem's shirt was soaked with sweat, and his throat was parched. Grandfather poured him a cup of cold water from a clay jar. Salem drank it quickly, and it felt like a miracle.\n\n\"You worked hard,\" said Grandfather. \"A farmer must be patient. A good harvest cannot be rushed.\"\n\nSalem bit into a soft date. It was so sweet that he nearly laughed. \"I would work all day for this,\" he said. Grandfather chuckled. \"Then you are a true farmer.\"";

const infText = "The Arabian oryx is a tall, graceful antelope with a white coat and two long, straight horns. It once roamed across the deserts of the Arabian Peninsula. By the 1970s, hunting had left none living in the wild. Thankfully, people worked together to save it.\n\nConservationists gathered a small group of oryx and cared for them in protected places. They bred the animals carefully, and the herds grew. In 1982, oryx were returned to the wild in Oman. Later, herds were also released in protected reserves in the United Arab Emirates. At one release, trucks carried a group of oryx to the reserve gate at sunrise. Rangers opened the crates, and the herd walked out into the open desert, where oryx now live.\n\nThe oryx is wonderfully suited to desert life. Its pale coat reflects the sunlight, which helps keep the animal cool. Its wide hooves spread out like paddles, so the oryx does not sink into soft sand. It can also go for many days without drinking. It gets much of its water from the plants it eats, and it often feeds at night and in the early morning, when the air is cooler. During the hottest hours of the day, it rests in the shade.\n\nToday, the Arabian oryx is a symbol of hope. Rangers watch over the herds and count them each year, and the numbers are growing. The story of the oryx shows that when people care and work together, an animal that was almost lost can come back.";

const infTextB = "I woke before sunrise on release day, too excited to eat breakfast. My team and I had waited many months for this morning. At the gate of the reserve, the trucks arrived, and I could hear the oryx moving inside their crates. My hands were shaking when I helped to slide the first door open.\n\nFor a moment, nothing happened. Then a young oryx stepped out, lifted her head and sniffed the desert air. My heart thumped. One by one, the others followed, their white coats glowing in the early light. They trotted across the sand, and soon they were small shapes beside a ghaf tree. I was so proud I could hardly speak. I know I will never forget this morning.";

const infTextC = "Rangers at a desert reserve in the United Arab Emirates count their oryx every year. The table below shows what they found over four years.\n\nYear | Oryx counted\nYear 1 | 40\nYear 2 | 46\nYear 3 | 55\nYear 4 | 67\n\nThe rangers say the herd is healthy because it is a little bigger each year.";

const litText = "On a breezy Saturday afternoon, Omar carried his new red kite down to the beach. The sea sparkled, and the sand was warm under his feet. His cousin Hind was already flying a yellow kite high above the waves.\n\n\"Watch this,\" said Omar. He ran across the sand and let go of the string. The kite wobbled, spun around and fell. He tried again. It crashed into the sand. The third time, it tangled in the string. Omar threw the spool down and folded his arms. \"This kite is broken,\" he grumbled. \"I give up.\"\n\nHind came over and looked at the kite carefully. \"It is not broken,\" she said. \"It just needs a longer tail. The tail keeps it steady, like a rudder on a boat.\" She took a strip of cloth from her bag and tied it on.\n\nOmar sighed, but he picked up the string. This time he waited for a strong gust of wind before he let go. The kite rose, wobbled once, and then climbed steadily. Soon it was gliding near Hind's yellow one, two bright spots against the blue sky.\n\nOmar laughed so hard he almost forgot to hold on. \"I nearly quit,\" he said.\n\n\"Everyone's first tries are bumpy,\" said Hind. \"You just have to keep trying and fix one small thing at a time.\"\n\nAs the sun sank toward the water, Omar watched his kite. He decided that tomorrow he would teach his little brother Khalid how to fly one too.";

const litTextB = "Maryam planted six mint seeds in a blue pot on the balcony of her family's flat in Dubai. She gave them a few drops of water every morning and waited. After a week, small green shoots appeared, but by the weekend they were drooping and yellow.\n\n\"It is no use,\" Maryam sighed. \"Gardening is too hard.\" She pushed the pot into the corner. Grandmother, who was sipping karak nearby, only smiled. \"Plants cannot talk, but they can show us what they need,\" she said.\n\nMaryam frowned at the sad shoots. She noticed that the afternoon sun hit the pot hard and that the soil was dry and cracked. Perhaps the sun was too fierce. She dragged the pot into the shade of the big wall and gave it a good drink of water.\n\nThe next morning, nothing had changed. The morning after that, a few leaves lifted. By the end of the week, the shoots were tall and green and smelled of fresh mint. Maryam grinned. \"I almost threw them away,\" she said. \"Next time, I will watch carefully and change one thing at a time.\" Grandmother laughed and poured her a cup of mint tea.";

module.exports = {
  subject: "rd",
  grade: 4,
  framework: "CCSS.ELA",
  englishOnly: true,
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "voc",
      standards: ["L.4.4", "L.4.4a", "L.4.5", "L.4.5a", "RL.4.4", "RF.4.3", "RF.4.4"],
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
        mc("The story says the day would be \"scorching, so hot that the sand would burn bare feet.\" What does scorching mean?", ["Pleasantly warm", "Extremely hot", "Slightly cool", "Very bright"], 1, "B. The clue is \"so hot that the sand would burn\"."),
        mc("Salem \"raised his palm to shade his eyes.\" What does palm mean here?", ["A kind of tree", "A kind of fruit", "A bunch of dates", "The inside of the hand"], 3, "D. He used it to shade his eyes, so it is part of his hand."),
        mc("The branches \"waved like green flags in the breeze.\" What two things are being compared?", ["Palm branches and green flags", "Salem and Grandfather", "Dates and leaves", "The breeze and the sand"], 0, "A. The branches are compared to flags."),
        mc("What does shriveled mean in \"shriveled, wrinkled and dry\"?", ["Large and sweet", "Soft and sticky", "Shrunk and wrinkled", "Ripe and glossy"], 2, "C. The dates lost water, so they shrank and wrinkled."),
        mc("Salem's \"throat was parched.\" How did he feel?", ["Tired of climbing", "Very hungry", "Afraid of the heat", "Very thirsty"], 3, "D. Parched means very dry, so he was very thirsty."),
        en("The author writes, \"the sun was a blazing coin in the sky.\" What does this metaphor help you picture?", "A bright, round, very hot sun."),
        en("The cold water \"felt like a miracle.\" What does this phrase tell you about the water?", "It felt wonderful and was just what he needed."),
        mc("Grandfather says, \"A good harvest cannot be rushed.\" What does rushed mean here?", ["Done too quickly", "Done with great care", "Shared with others", "Carried in a basket"], 0, "A. Rushed means done in a hurry."),
        en("Grandfather says a farmer must be patient. What does patient mean? Give a clue from the story.", "Able to wait calmly without hurrying (for example, carefully climbing one step at a time)."),
        mc("Which word from the story is the opposite of plump?", ["Glossy", "Ripe", "Shriveled", "Sweet"], 2, "C. Plump dates are full and round; shriveled dates are shrunk."),
        en("Write your own sentence using palm to mean a kind of tree.", "Answers vary. Example: A tall palm grew beside the well."),
        en("Explain, in your own words, what Grandfather means by \"Then you are a true farmer.\"", "Salem is willing to work hard and be patient for something good, as a real farmer is."),
        en("Say the word miracle slowly and split it into syllables. How many syllables does it have?", "Three: mir-a-cle."),
        en("Split these two words from the story into syllables: shriveled and scorching.", "shriv-eled (two syllables) and scorch-ing (two syllables)."),
        en("Grandfather takes \"one careful step after another.\" The word careful is made from care and the ending -ful. What does the ending -ful mean, and so what does careful mean?", "The ending -ful means full of, so careful means full of care (taking care)."),
        en("Fluency task: read the paragraph that begins \"By noon\" aloud to a grown-up, twice, in a clear voice. What should the grown-up listen for?", "Most words read correctly without long stops; a steady pace, not too fast or too slow; a short pause at each comma and full stop; a voice that shows what Grandfather and Salem say in the quotation marks; going back to fix a word that did not make sense. The second reading should sound smoother than the first.")
      ]
    },
    {
      area: "inf",
      standards: ["RI.4.1", "RI.4.2", "RI.4.3", "RI.4.5", "RI.4.8", "L.4.4", "RI.4.4", "RI.4.6", "RI.4.7"],
      passage: [
        { title: "Text A: The Return of the Arabian Oryx", text: infText },
        { title: "Text B: Release Day, from a Ranger's Diary", text: infTextB },
        { title: "Text C: Counting the Herd", text: infTextC }
      ],
      example: ex(
        "What is the main idea of the first paragraph?",
        ["Ask what the whole paragraph is mostly about.", "It describes the oryx, says hunting left none in the wild, and says people worked to save it.", "Put that into one sentence."],
        "The Arabian oryx was lost from the wild, but people worked together to save it.",
        "What is the main idea of the first paragraph?",
        ["Ask what the whole paragraph is mostly about.", "It describes the oryx, says hunting left none in the wild, and says people worked to save it.", "Put that into one sentence."],
        "The Arabian oryx was lost from the wild, but people worked together to save it."
      ),
      items: [
        mc("What is the main idea of the whole of Text A?", ["Oryx are the fastest animals in the desert.", "Rangers count oryx every year in Oman.", "The oryx was saved by people and is suited to desert life.", "Hunting is the best way to protect animals."], 2, "C. The text tells how the oryx was lost, saved and how it lives in the desert."),
        mc("What caused the oryx to disappear from the wild?", ["Hunting", "A lack of plants to eat", "Too much sunlight", "Trucks in the desert"], 0, "A. The text says hunting left none living in the wild."),
        en("What did conservationists do to help the oryx?", "They cared for a small group in protected places and bred them so the herds grew."),
        mc("When were oryx first returned to the wild, and in which country?", ["In the 1970s, in the United Arab Emirates", "In 1982, in the United Arab Emirates", "In the 1970s, in Oman", "In 1982, in Oman"], 3, "D. The text says 1982 and Oman."),
        mc("How does the oryx's pale coat help it?", ["It hides the oryx from hunters.", "It reflects sunlight and keeps it cool.", "It stops the oryx sinking in sand.", "It gives the oryx water."], 1, "B. A pale coat reflects the sunlight."),
        en("Why are the oryx's hooves wide?", "So it does not sink into soft sand."),
        en("How can the oryx go many days without drinking?", "It gets much of its water from the plants it eats."),
        mc("Why does the oryx often feed at night and in the early morning?", ["It cannot see in the day.", "Rangers bring food then.", "The air is cooler then.", "It drinks water then."], 2, "C. The text says the air is cooler at those times."),
        en("The text has a problem and a solution. What is the problem? What is the solution?", "Problem: no oryx were left in the wild. Solution: people bred them and returned them to the wild."),
        mc("From Text A, what do conservationists do?", ["Work to protect animals and nature", "Hunt animals in the desert", "Count the cars at a reserve", "Sell plants to farmers"], 0, "A. Conservationists cared for and bred the oryx to save it."),
        en("Give two details from Text A that show the oryx is \"wonderfully suited to desert life.\"", "Any two: pale coat reflects sun; wide hooves; goes days without drinking; feeds when cooler; rests in shade."),
        en("Why does the author call the oryx \"a symbol of hope\"?", "Because an animal almost lost has come back, showing that people can make a difference."),
        en("In Text A, \"They bred the animals carefully, and the herds grew.\" What does bred mean here? Which clue helps you?", "Bred means helped the animals to have young (the clue is \"the herds grew\")."),
        mc("Text A and Text B both tell about a release of oryx. Which one is a firsthand account?", ["Text A, because it gives facts", "Text C, because it has a table", "Text A, because it names Oman", "Text B, because the ranger who was there tells it with I and my"], 3, "D. Text B is written by someone who was there. Text A is secondhand."),
        mc("Use the table in Text C. How many more oryx were counted in Year 4 than in Year 1?", ["17", "27", "37", "107"], 1, "B. 67 minus 40 is 27."),
        en("Text A says only that \"the numbers are growing.\" What does the table in Text C add to this?", "It gives the exact number counted each year, so you can see how much the herd grew (from 40 to 67 in four years).")
      ]
    },
    {
      area: "lit",
      standards: ["RL.4.1", "RL.4.2", "RL.4.3", "RL.4.4", "RL.4.6", "L.4.5a", "RL.4.5", "RL.4.9"],
      passage: [
        { title: "Text A: Omar's Kite", text: litText },
        { title: "Text B: Maryam's Mint", text: litTextB }
      ],
      example: ex(
        "Where and when does Text A begin?",
        ["Look at the first sentence for time and place clues.", "It says \"a breezy Saturday afternoon\" and \"down to the beach.\""],
        "On a breezy Saturday afternoon, at the beach.",
        "Where and when does Text A begin?",
        ["Look at the first sentence for time and place clues.", "It says \"a breezy Saturday afternoon\" and \"down to the beach.\""],
        "On a breezy Saturday afternoon, at the beach."
      ),
      items: [
        mc("Why is the beach a good place to fly a kite? Use a detail from Text A.", ["The sand is warm.", "The sea sparkles.", "Hind is there.", "It is breezy, so there is wind."], 3, "D. A kite needs wind, and the afternoon is breezy."),
        en("How does Omar feel after his third try? Give a detail that shows it.", "Frustrated; he throws the spool down, folds his arms and says \"I give up.\""),
        mc("What does Hind notice is wrong with the kite?", ["It needs a longer tail.", "The string is tangled.", "The kite is broken.", "The kite is too heavy."], 0, "A. Hind says it just needs a longer tail."),
        en("What does the tail do for the kite?", "It keeps the kite steady."),
        mc("What does the phrase \"like a rudder on a boat\" compare?", ["The wind and the sea", "A kite's tail and a boat's rudder", "Omar and Hind", "A kite and a boat"], 1, "B. Both the tail and the rudder keep things steady."),
        mc("What did Omar do differently on his last try?", ["He used a new kite.", "He ran faster across the sand.", "He waited for a strong gust of wind.", "He asked Khalid to help."], 2, "C. He waited for a strong gust before letting go."),
        en("Describe Hind in one or two words and give a detail that shows it.", "Helpful or kind: she fixes the kite with a strip of cloth."),
        en("How is Omar different at the end of Text A from the beginning?", "At first he wants to give up; at the end he is happy and wants to teach his brother."),
        mc("Who is telling Text A?", ["Omar, a character in it", "A narrator outside it", "Hind, a character in it", "Grandmother"], 1, "B. The narrator uses names and words like he and she."),
        mc("What is the theme (the lesson) of Text A?", ["Kites fly best at the beach.", "Cousins should share kites.", "Tails are more important than wind.", "Keep trying and fix one small thing at a time."], 3, "D. Hind says this near the end."),
        en("Which words from Text A best support that theme?", "Hind says, \"You just have to keep trying and fix one small thing at a time.\""),
        en("Why do you think Omar wants to teach Khalid tomorrow?", "He is proud and happy and wants to share what he learned."),
        mc("Text A and Text B are different stories. What theme do they share?", ["Do not give up: keep trying and change one small thing at a time.", "Ask an adult to do the work for you.", "Gardens are harder than kites.", "Wind and sun help us most."], 0, "A. Omar and Maryam both nearly quit, then fixed one thing at a time and succeeded."),
        en("In Text A, Omar gets help from Hind to fix his problem. How does Maryam solve her problem in Text B?", "Grandmother gives only a hint, and Maryam works it out herself: she watches the shoots, notices the sun is too fierce and moves the pot into the shade."),
        en("Read this poem.\nThe sun climbs up from the sea so blue,\nThe wind comes in and the kite flies too.\nI tug, I run, and I let it go,\nA bright red spot where the soft clouds flow.\nWhich word at the end of a line rhymes with blue, and what do we call a group of lines like these in a poem?", "Too rhymes with blue. A group of lines in a poem is called a stanza (a verse)."),
        en("Read this part of a play.\nCast: Maryam, a girl; Grandmother.\nSetting: A kitchen in Sharjah.\nMARYAM (looking at a tray of cookies, sadly): My cookies are too dark!\nGRANDMOTHER (smiling kindly): We will bake them again together.\nName two features that show this is a play and not a story.", "Any two: a cast of characters is listed; the setting is described at the start; each line begins with the speaker's name; stage directions in brackets tell the actor how to act or speak.")
      ]
    }
  ]
};
