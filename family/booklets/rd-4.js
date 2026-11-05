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
        mc("The story says the day would be \"scorching, so hot that the sand would burn bare feet.\" What does scorching mean?", ["Pleasantly warm", "Extremely hot", "Slightly cool", "Very bright"], 1, "B. Extremely hot. The clue is in the same sentence: \"so hot that the sand would burn bare feet.\" If your child chose A, they read scorching as a mild word, so ask them to find the clue first."),
        mc("Salem \"raised his palm to shade his eyes.\" What does palm mean here?", ["A kind of tree", "A kind of fruit", "A bunch of dates", "The inside of the hand"], 3, "D. The inside of the hand. He raised it to shade his eyes, and only a hand can do that. If your child chose A, they used the tree meaning, but a tree cannot shade eyes."),
        mc("The branches \"waved like green flags in the breeze.\" What two things are being compared?", ["Palm branches and green flags", "Salem and Grandfather", "Dates and leaves", "The breeze and the sand"], 0, "A. The word like shows the branches are being compared to flags. If your child chose C, they picked two things that are both in the story but are not compared to each other."),
        mc("What does shriveled mean in \"shriveled, wrinkled and dry\"?", ["Large and sweet", "Soft and sticky", "Shrunk and wrinkled", "Ripe and glossy"], 2, "C. Shrunk and wrinkled. The sentence says the dates were dry from too little water, so they shrank. If your child chose A, they picked the opposite, because plump and glossy dates are the good ones."),
        mc("Salem's \"throat was parched.\" How did he feel?", ["Tired of climbing", "Very hungry", "Afraid of the heat", "Very thirsty"], 3, "D. Parched means very dry, and a dry throat means thirst. He then drank the water quickly, which fits. If your child chose C, they guessed from the heat alone."),
        en("The author writes, \"the sun was a blazing coin in the sky.\" What does this metaphor help you picture?", "A good answer says the sun looked bright, round and shiny, like a hot coin. Ask: which word tells you it was hot? (blazing)."),
        en("The cold water \"felt like a miracle.\" What does this phrase tell you about the water?", "A good answer says the water felt wonderful and was exactly what he needed after a hot, thirsty morning. Ask: why would cold water feel so special to Salem?"),
        mc("Grandfather says, \"A good harvest cannot be rushed.\" What does rushed mean here?", ["Done too quickly", "Done with great care", "Shared with others", "Carried in a basket"], 0, "A. Rushed means done in a hurry, and the sentence says a good harvest needs patience. If your child chose B, they picked the opposite meaning."),
        en("Grandfather says a farmer must be patient. What does patient mean? Give a clue from the story.", "A good answer says patient means able to wait calmly, and gives a clue such as climbing one careful step at a time. Ask: which part of the story shows Grandfather being patient?"),
        mc("Which word from the story is the opposite of plump?", ["Glossy", "Ripe", "Shriveled", "Sweet"], 2, "C. Plump means full and round, so the opposite is shriveled, which means shrunk. If your child chose A, they picked a word that goes with plump, because the good dates were also glossy."),
        en("Write your own sentence using palm to mean a kind of tree.", "Answers vary. A good sentence uses palm as a tree, for example: A tall palm grew beside the well. Ask: does your sentence still make sense if you swap in the word tree?"),
        en("Explain, in your own words, what Grandfather means by \"Then you are a true farmer.\"", "A good answer says Salem is willing to work hard and be patient for something good, just as a real farmer is. Ask: what did Salem say that shows he would work hard?"),
        en("Say the word miracle slowly and split it into syllables. How many syllables does it have?", "Three: mir-a-cle. Clap once for each beat as you say it slowly. Ask: can you clap it again and count the claps?"),
        en("Split these two words from the story into syllables: shriveled and scorching.", "A good answer says shriv-eled has two syllables and scorch-ing has two syllables. Ask: how many times does your chin drop when you say each word?"),
        en("Grandfather takes \"one careful step after another.\" The word careful is made from care and the ending -ful. What does the ending -ful mean, and so what does careful mean?", "The ending -ful means full of, so careful means full of care. A good answer says that in the child's own words. Ask: what other words end in -ful, like helpful?"),
        en("Fluency task: read the paragraph that begins \"By noon\" aloud to a grown-up, twice, in a clear voice. What should the grown-up listen for?", "A good answer listens for most words read correctly, a steady pace, a pause at each comma and full stop, and a voice that shows who is speaking. Ask: which reading sounded smoother, the first or the second?")
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
        mc("What is the main idea of the whole of Text A?", ["Oryx are the fastest animals in the desert.", "Rangers count oryx every year in Oman.", "The oryx was saved by people and is suited to desert life.", "Hunting is the best way to protect animals."], 2, "C. The whole text tells how the oryx was lost, how people saved it, and how it lives in the desert. If your child chose B, they picked one small detail, not the main idea."),
        mc("What caused the oryx to disappear from the wild?", ["Hunting", "A lack of plants to eat", "Too much sunlight", "Trucks in the desert"], 0, "A. The first paragraph says hunting left none living in the wild. If your child chose D, they picked something from the release story, which did not cause the loss."),
        en("What did conservationists do to help the oryx?", "A good answer says they cared for a small group of oryx in protected places and bred them so the herds grew. Ask: what happened to the herds because of that care?"),
        mc("When were oryx first returned to the wild, and in which country?", ["In the 1970s, in the United Arab Emirates", "In 1982, in the United Arab Emirates", "In the 1970s, in Oman", "In 1982, in Oman"], 3, "D. The text says \"In 1982, oryx were returned to the wild in Oman.\" If your child chose C, they matched Oman with the 1970s, which is when the oryx were lost, not returned."),
        mc("How does the oryx's pale coat help it?", ["It hides the oryx from hunters.", "It reflects sunlight and keeps it cool.", "It stops the oryx sinking in sand.", "It gives the oryx water."], 1, "B. The text says the pale coat reflects the sunlight, which helps keep the animal cool. If your child chose C, they mixed it up with the wide hooves, which stop it sinking."),
        en("Why are the oryx's hooves wide?", "A good answer says the hooves are wide so the oryx does not sink into soft sand. Ask: which words in the text compare the hooves to something?"),
        en("How can the oryx go many days without drinking?", "A good answer says it gets much of its water from the plants it eats. Ask: which sentence in the third paragraph tells you that?"),
        mc("Why does the oryx often feed at night and in the early morning?", ["It cannot see in the day.", "Rangers bring food then.", "The air is cooler then.", "It drinks water then."], 2, "C. The text says it feeds then \"when the air is cooler.\" If your child chose D, they picked a detail about water, but the text does not say it drinks at those times."),
        en("The text has a problem and a solution. What is the problem? What is the solution?", "A good answer names the problem, no oryx left in the wild because of hunting, and the solution, people bred them and returned them. Ask: which sentence tells you the problem and which tells you the fix?"),
        mc("From Text A, what do conservationists do?", ["Work to protect animals and nature", "Hunt animals in the desert", "Count the cars at a reserve", "Sell plants to farmers"], 0, "A. In the text, conservationists cared for and bred the oryx to save the animal. If your child chose B, they picked a harmful job that is the opposite of what the text shows."),
        en("Give two details from Text A that show the oryx is \"wonderfully suited to desert life.\"", "A good answer gives any two details, such as the pale coat, wide hooves, going days without drinking, or resting in the shade. Ask: how does each detail help in the desert?"),
        en("Why does the author call the oryx \"a symbol of hope\"?", "A good answer says an animal that was almost lost has come back, so it gives people hope. Ask: what in the last paragraph shows that people made a difference?"),
        en("In Text A, \"They bred the animals carefully, and the herds grew.\" What does bred mean here? Which clue helps you?", "A good answer says bred means helped the animals have young, and the clue is \"the herds grew.\" Ask: what happened to the herds after the oryx were bred?"),
        mc("Text A and Text B both tell about a release of oryx. Which one is a firsthand account?", ["Text A, because it gives facts", "Text C, because it has a table", "Text A, because it names Oman", "Text B, because the ranger who was there tells it with I and my"], 3, "D. Text B uses I and my, so the writer was there. Text A gives facts from outside, which is secondhand. If your child chose A, they thought facts make an account firsthand."),
        mc("Use the table in Text C. How many more oryx were counted in Year 4 than in Year 1?", ["17", "27", "37", "107"], 1, "B. Find Year 4 (67) and Year 1 (40) in the table: 67 minus 40 is 27. If your child chose D, they added 67 and 40 instead of subtracting."),
        en("Text A says only that \"the numbers are growing.\" What does the table in Text C add to this?", "A good answer says the table gives the exact number each year, from 40 to 67 in four years, while Text A only says the numbers are growing. Ask: how much did the herd grow in total?")
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
        mc("Why is the beach a good place to fly a kite? Use a detail from Text A.", ["The sand is warm.", "The sea sparkles.", "Hind is there.", "It is breezy, so there is wind."], 3, "D. A kite needs wind, and Text A begins \"On a breezy Saturday afternoon.\" If your child chose A, they picked a true detail that has nothing to do with flying."),
        en("How does Omar feel after his third try? Give a detail that shows it.", "A good answer says Omar feels frustrated and gives a detail, such as throwing down the spool, folding his arms or saying \"I give up.\" Ask: what did his actions show that his words did not?"),
        mc("What does Hind notice is wrong with the kite?", ["It needs a longer tail.", "The string is tangled.", "The kite is broken.", "The kite is too heavy."], 0, "A. Hind says \"It just needs a longer tail.\" If your child chose C, they believed Omar, who said it was broken, but Hind says it is not."),
        en("What does the tail do for the kite?", "A good answer says the tail keeps the kite steady. Ask: what happened to the kite on the first tries without a longer tail?"),
        mc("What does the phrase \"like a rudder on a boat\" compare?", ["The wind and the sea", "A kite's tail and a boat's rudder", "Omar and Hind", "A kite and a boat"], 1, "B. The tail and the rudder both keep something steady. If your child chose D, they picked a whole kite and a whole boat, but only one part of each is compared."),
        mc("What did Omar do differently on his last try?", ["He used a new kite.", "He ran faster across the sand.", "He waited for a strong gust of wind.", "He asked Khalid to help."], 2, "C. The text says he waited for a strong gust of wind before he let go. If your child chose B, they picked something he did on his earlier tries, when the kite still fell."),
        en("Describe Hind in one or two words and give a detail that shows it.", "A good answer gives a word such as helpful or kind, plus a detail like tying a strip of cloth on the kite. Ask: what did Hind do that shows that word?"),
        en("How is Omar different at the end of Text A from the beginning?", "A good answer says at first he wants to give up, and at the end he is happy and wants to teach his brother. Ask: which words show how his feelings changed?"),
        mc("Who is telling Text A?", ["Omar, a character in it", "A narrator outside it", "Hind, a character in it", "Grandmother"], 1, "B. The narrator uses names and words like he and she, not I. If your child chose A, they thought the main character must be the one telling the story."),
        mc("What is the theme (the lesson) of Text A?", ["Kites fly best at the beach.", "Cousins should share kites.", "Tails are more important than wind.", "Keep trying and fix one small thing at a time."], 3, "D. Hind says it near the end: keep trying and fix one small thing at a time. If your child chose A, they picked a setting detail, not a lesson."),
        en("Which words from Text A best support that theme?", "A good answer quotes Hind: \"You just have to keep trying and fix one small thing at a time.\" Ask: how does Omar's last try show this?"),
        en("Why do you think Omar wants to teach Khalid tomorrow?", "A good answer says Omar is proud and happy and wants to share what he learned. Ask: how would you feel if you had just learned something new?"),
        mc("Text A and Text B are different stories. What theme do they share?", ["Do not give up: keep trying and change one small thing at a time.", "Ask an adult to do the work for you.", "Gardens are harder than kites.", "Wind and sun help us most."], 0, "A. Omar and Maryam both nearly quit, then changed one thing and succeeded. If your child chose C, they compared the topics, but a theme is a lesson, not a topic."),
        en("In Text A, Omar gets help from Hind to fix his problem. How does Maryam solve her problem in Text B?", "A good answer says Grandmother gave only a hint, and Maryam worked it out herself by noticing the sun and the dry soil, then moving the pot into shade. Ask: who solved the problem in each story?"),
        en("Read this poem.\nThe sun climbs up from the sea so blue,\nThe wind comes in and the kite flies too.\nI tug, I run, and I let it go,\nA bright red spot where the soft clouds flow.\nWhich word at the end of a line rhymes with blue, and what do we call a group of lines like these in a poem?", "Too rhymes with blue, and a group of lines in a poem is a stanza (a verse). A good answer names both. Ask: which other two words at the ends of lines rhyme?"),
        en("Read this part of a play.\nCast: Maryam, a girl; Grandmother.\nSetting: A kitchen in Sharjah.\nMARYAM (looking at a tray of cookies, sadly): My cookies are too dark!\nGRANDMOTHER (smiling kindly): We will bake them again together.\nName two features that show this is a play and not a story.", "A good answer names any two features: a list of the cast, a setting at the start, speaker names before each line, or stage directions in brackets. Ask: which words in brackets tell the actor how to speak?")
      ]
    }
  ]
};
