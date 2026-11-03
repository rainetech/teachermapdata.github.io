// Reading practice booklet, Grade 5 expectations. English-only: see AUTHORING.md for the format.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const en = (question, answer) => it(question, answer, question, answer);
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });
const exEn = (question, steps, answer) => ex(question, steps, answer, question, steps, answer);

module.exports = {
  subject: "rd",
  grade: 5,
  framework: "CCSS.ELA",
  englishOnly: true,
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "voc",
      standards: ["RF.5.3", "RF.5.4", "RL.5.4", "L.5.4a", "L.5.4b", "L.5.5a", "L.5.5b", "L.5.5c"],
      passage: {
        title: "A Morning at the Souq",
        text: "Hamdan woke before the sun, as eager as a falcon waiting for its hood to be lifted. Today he was helping his grandfather at the old souq in Deira. The narrow lanes were a maze of colour, and the air was thick with the scent of cardamom and frankincense. Grandfather, a patient man, arranged baskets of dates on the front table, each one glossy and sweet.\n\n\"Do not rush,\" Grandfather said. \"A good trader is meticulous. He checks every basket carefully, so that no customer ever finds a bruised date.\"\n\nHamdan nodded and began to sort. The task was tedious, and soon his back ached. He felt as if the morning would never end. Then a mother and her young daughter stopped at the stall. The mother seemed hesitant, turning a jar of honey over and over, unsure whether to buy it. Grandfather smiled warmly. \"Try one,\" he said, offering her a date. Her face lit up. \"Delicious!\" she said, and bought three kilos.\n\nBy noon the souq was a beehive, humming with shoppers, and the heat was scorching. Hamdan was so tired that he could barely keep his eyes open, yet he was proud. The lane that had been silent at dawn was now a river of people, and he had helped to steer a few of them toward their stall.\n\nWhen the last customer left, Grandfather handed Hamdan a cold glass of laban. \"You kept your cool today,\" he said. \"That is a rare gift, and many adults never learn it.\" Hamdan laughed. Only that morning he had been tapping his fingers and counting the minutes. Now the sun was setting over the creek, and he did not want the day to end. It had been the opposite of boring. The lesson he carried home was a simple one: patient work, like a seed in the sand, can grow into something good."
      },
      example: exEn(
        "Read: \"After the storm, the road was a ribbon of mud.\" Is this a simile or a metaphor, and what does it tell us?",
        ["A simile compares using \"like\" or \"as\". A metaphor says one thing IS another.", "The sentence says the road \"was\" a ribbon, with no \"like\" or \"as\", so it is a metaphor.", "A ribbon is long and thin, so the road was a long, narrow strip covered in mud."],
        "A metaphor: it shows the road was a long, narrow strip of mud."
      ),
      items: [
        en("The grandfather says a good trader is \"meticulous\". Using the clue in the next sentence, what does meticulous mean?", "Very careful and exact (he checks every basket carefully)."),
        en("The first sentence says Hamdan was \"as eager as a falcon waiting for its hood to be lifted\". Is this a simile or a metaphor? How can you tell?", "A simile: it uses \"as ... as\" to compare."),
        en("What does that comparison tell you about how Hamdan felt that morning?", "He was very eager and excited, ready to begin."),
        en("The sorting task was \"tedious\". Which clues help you work out the meaning?", "His back ached and the morning seemed never to end, so tedious means boring and tiring."),
        en("The mother was \"hesitant\". What does hesitant mean here, and which words in the same sentence help?", "Unsure or unable to decide; \"unsure whether to buy it\" helps."),
        en("The prefix un- is in the word \"unsure\". What does the prefix un- mean, and what does unsure mean?", "Un- means \"not\"; unsure means not sure."),
        en("\"By noon the souq was a beehive.\" What does this metaphor suggest about the souq?", "It was very busy and crowded, full of people and noise."),
        en("The lane is called \"a river of people\". What picture does this give you?", "People moving along in a steady flow, like water."),
        en("Grandfather says, \"You kept your cool today.\" What does the idiom \"kept your cool\" mean?", "Stayed calm."),
        en("The passage says the lane was \"silent\" at dawn and later \"humming\". Are these words closer to synonyms or antonyms, and why?", "Antonyms: silent means no sound, while humming means full of sound."),
        en("Explain what the author means by comparing patient work to \"a seed in the sand\".", "Like a seed, patient work may take time and look small at first, but it can grow into something good."),
        en("Say the word \"meticulous\" aloud, tapping once for each syllable. How many syllables does it have, and how can you split it?", "4 syllables: me-tic-u-lous."),
        en("The word \"unforgettable\" is long. Split it into a prefix, a root and a suffix (the t doubles before the suffix), and say what the whole word means.", "Prefix un-, root forget, suffix -able. It means not able to be forgotten."),
        en("Find the word \"carefully\" in the passage. Split it into a root and its suffixes, then say how many syllables it has.", "Root care, plus the suffixes -ful and -ly. It has 3 syllables: care-ful-ly."),
        en("Fluency task: ask your child to read the first paragraph of the passage aloud twice. What should the parent listen for?", "Most words read correctly, a steady pace that is not rushed, pauses at commas and full stops, and some expression. The second reading should sound smoother than the first."),
        en("Fluency task: ask your child to read this sentence aloud: \"The narrow lanes were a maze of colour, and the air was thick with the scent of cardamom and frankincense.\" Where should the voice pause, and what else should the parent listen for?", "A short pause at the comma after \"colour\" and a full stop at the end. Listen for smooth reading of the long words (cardamom, frankincense) without stopping to sound them out.")
      ]
    },
    {
      area: "inf",
      standards: ["RI.5.1", "RI.5.2", "RI.5.3", "RI.5.4", "RI.5.5", "RI.5.6", "RI.5.7", "RI.5.8", "RI.5.9"],
      passage: [{
        title: "Text A: The Mangroves of the Gulf Coast",
        text: "Along the calm shores of the UAE grows a forest that stands in salt water. Mangrove trees live where the land meets the sea, and the most common kind here is the grey mangrove. Most plants would die in such salty water, so the mangrove has clever ways to survive. Its leaves push out extra salt, and you can sometimes see white crystals on them. Its roots also rise above the mud like small pencils. These roots take in air, because the mud around them holds very little oxygen.\n\nMangroves matter for two main reasons. First, they are a nursery. Young fish, shrimp and crabs hide among the tangled roots, where larger fish cannot easily reach them. Because the young are safe, more of them grow up, and fishermen later catch more fish in nearby waters. Birds such as herons and flamingos also feed in the shallow water around the trees.\n\nSecond, mangroves protect the coast. Waves lose their strength when they hit the thick roots, so the shore is washed away more gradually. A beach without mangroves can lose sand quickly in a storm, but a shore with mangroves loses much less. Mangroves also store carbon in their wood and mud, which helps to reduce the warming of the planet.\n\nSadly, many mangroves were cleared in the past to make room for roads and harbours. When the trees disappeared, the nurseries disappeared with them, and fish became harder to find. Today people are working to bring the forests back. Volunteers carry young trees to the shore, plant them in the mud at low tide, and check them as they grow. Scientists count crabs and birds each year to see whether the new forests are working.\n\nThe old and new ways of thinking differ clearly. In the past, many people saw the shore as empty land to build on. Now they see it as a living wall that feeds and protects. One lesson stands out: a place that looks muddy and plain may be doing a great deal of work."
      }, {
        title: "Text B: Saeed's Story",
        text: "I have fished the shallow waters of this coast since I was a boy. When I was young, my father and I rowed out each dawn, and our nets came back heavy with fish. We never wondered why. The mangrove trees stood along the shore like a green wall, and I thought they had simply always been there.\n\nThen the trees were cut down to make room for a new road. Within a few seasons, our nets came back light. Some days my brother and I caught only a handful of small fish, and we worried about feeding our families. I did not understand the link until a scientist visiting our village explained that the young fish had lost their hiding place.\n\nToday I am glad to say that things are changing. Last spring my grandson and I helped to plant seedlings in the mud at low tide. Already I see small fish darting around the young roots again, and my catch is growing. I wish everyone who lives by the sea could see what I have seen: when we look after the shore, the shore looks after us."
      }, {
        title: "Text C: Notice for Planting Day",
        text: "Volunteers are welcome to help plant young mangroves at the shore reserve on Saturday 14 November. Families are welcome, and children aged 8 and over may take part with a parent.\n\nLow tide: the water will be at its lowest at 9:30 a.m.\n\nArrival: please arrive at 9:00 a.m. to collect your seedlings and walk to the planting area.\n\nPlease bring: a hat, a bottle of water and old shoes that can get muddy.\n\nEach volunteer plants up to 5 seedlings. Scientists will check the seedlings every month and count the crabs and birds each year."
      }],
      example: exEn(
        "Read: \"The well ran dry because the rain did not come. The farmers then dug a deeper well.\" What was the cause and what was the effect of the well running dry?",
        ["Ask: what happened? The well ran dry.", "Ask: why did it happen? Because the rain did not come.", "The reason is the cause, and what happened is the effect."],
        "Cause: the rain did not come. Effect: the well ran dry."
      ),
      items: [
        en("In Text A: why do mangrove roots rise above the mud?", "To take in air, because the mud holds very little oxygen."),
        en("In Text A: how does the mangrove deal with the extra salt in the water?", "Its leaves push the extra salt out."),
        en("In Text A: why is a mangrove forest called a \"nursery\"? Use the text to explain.", "Young fish, shrimp and crabs hide safely among the roots while they grow up."),
        en("In Text A, what is the effect on fishermen of young fish being safe among the roots?", "More young fish grow up, so fishermen later catch more fish nearby."),
        en("In Text A: how do mangroves protect the shore?", "Waves lose their strength when they hit the thick roots, so less shore is washed away."),
        en("In Text A: what happened to the fish when many mangroves were cleared? Give the cause and the effect.", "Cause: the trees and their nurseries disappeared. Effect: fish became harder to find."),
        en("Text A says mangroves \"store carbon\". According to the text, what does this help to do?", "It helps to reduce the warming of the planet."),
        en("In Text A, paragraph 5 compares two ways of thinking. What are they?", "In the past, people saw the shore as empty land to build on. Now they see it as a living wall that feeds and protects."),
        en("Name two groups of people who help bring the mangroves back, and say what each one does.", "Volunteers plant and check young trees; scientists count crabs and birds each year to see whether the forests are working."),
        en("The author believes mangroves are valuable. Give two reasons from the passage that support this.", "Any two: they are a nursery for young sea animals, they protect the coast from waves, they store carbon, birds feed there."),
        en("What does the last sentence mean: \"a place that looks muddy and plain may be doing a great deal of work\"?", "Something that looks ordinary can still be very useful; mangroves look plain but shelter animals and protect the shore."),
        en("Text A and Text B are about the same topic. Who is telling each one, and how does each writer's point of view change what is told?", "Text A is told by an outside writer who gives facts and explains how mangroves work and why they matter. Text B is told by Saeed, a fisherman, in the first person (\"I\"), and tells what he saw and felt about his catch."),
        en("What do Text A and Text B both say happened to the fish after the mangroves were cleared?", "Fish became harder to find (Saeed's nets came back light), because the young fish lost their hiding place."),
        en("A family wants to join the planting day. Use Text C and Text A to say what time they should arrive and where the seedlings will be planted.", "They should arrive at 9:00 a.m. (Text C). The seedlings are planted at the shore reserve, in the mud at low tide, which is at 9:30 a.m. (Text C and Text A)."),
        en("Saeed says small fish are darting around the young roots again. Use Text A to explain why young fish would come back when the trees grow back.", "Text A says young fish hide among the tangled roots, where larger fish cannot easily reach them, so the new trees give them a safe nursery again."),
        en("Which text would you use to find out each of these? (a) How mangrove roots take in air. (b) What to bring on planting day. (c) How one fisherman felt when his nets came back light.", "(a) Text A. (b) Text C. (c) Text B.")
      ]
    },
    {
      area: "lit",
      standards: ["RL.5.1", "RL.5.2", "RL.5.3", "RL.5.4", "RL.5.5", "RL.5.6", "RL.5.7", "RL.5.9"],
      passage: [{
        title: "Text A: The Model Dhow",
        text: "I was sure my model dhow would win the school boat contest. I had spent two weeks on it, gluing the hull and painting the sail bright blue. Grandfather Khalid watched me work, but he said very little, which annoyed me. I wanted him to say it was the best boat he had ever seen.\n\nOn the morning of the contest, we carried our boats to the long water trough in the courtyard. My friend Omar's boat looked plain. Its sail was a scrap of white cloth, and the hull was narrow and low. I smirked. Mine was so much prettier.\n\nWhen the whistle blew, we each gave our boat a gentle push. Omar's glided across the water as smoothly as a gull. Mine wobbled, tipped to one side, and spun in a clumsy circle. The tall blue sail caught the breeze and dragged it sideways. Everyone laughed, and my cheeks burned.\n\nI wanted to hide among the palm trees. But Grandfather came and crouched beside me. \"Salem, do you know what Omar did last week?\" he asked. \"He tested his boat four times and changed the sail each time. He knew a boat must work well before it can look grand.\"\n\nI felt a flash of anger. Then I looked at my boat, and I looked at Omar's, and I saw that Grandfather was right. Omar had not just been lucky. He had been patient.\n\n\"Can you show me how you changed the sail?\" I asked Omar, even though my voice felt small.\n\nHe grinned. \"Of course. Come on.\"\n\nThat afternoon we sat together, trimming my sail lower and adding a small weight to the hull. When I tried again, my boat floated straight. It did not win, but it finished the course, and I was surprised to find that I was not upset at all. Grandfather winked at me from the shade. He did not need to say a word."
      }, {
        title: "Text B: The Solar Car",
        text: "Chapter 1: The Plan\n\nMaryam had a plan for the science fair at her school in Sharjah. Her little car would run on a solar panel and race along a ten-metre track in the courtyard. She stuck the panel on the roof and tied a tall red flag to the back. Then she decided there was no need to test it. \"It will work,\" she told her cousin Hind. \"I just know.\"\n\nChapter 2: The Test\n\nOn the day of the fair, the courtyard was bright and busy. Maryam placed her car on the line. It rolled forward, rolled a little more, and then stopped near the middle of the track. The red flag drooped. Some children whispered. Maryam's face went hot, and she picked up the car and turned away.\n\nHind came over. \"The flag is tall, and its shadow is lying across the panel,\" she said gently. \"Look.\" Maryam looked, and there it was, a dark stripe over the panel.\n\nChapter 3: The Second Try\n\nTogether they moved the flag to the front of the car, where it cast no shadow. Maryam set the car on the line again. This time it rolled all the way to the end of the track, and she let out a long breath. Mrs. Aisha, the judge, wrote something in her notebook. Maryam did not win first place, but she told Hind, \"Next time I will test it first, and I will ask you sooner.\"\n\nPicture at the end of the story: Two girls kneel beside a small car at the finish line, grinning. The red flag stands at the front of the car, and the sun is high above them."
      }],
      example: exEn(
        "Read: \"Layla felt her heart pound as she stepped onto the stage. She took a breath and began to read.\" Who is telling this story, and how do you know?",
        ["Look at the pronouns. The narrator says \"Layla\", \"she\" and \"her\", not \"I\".", "A narrator outside the story who uses \"he\" or \"she\" is using third-person point of view."],
        "Third person: an outsider tells the story, using \"she\" and Layla's name."
      ),
      items: [
        en("How did Salem feel about his model dhow before the contest?", "He was sure it would win; he was proud of it."),
        en("Who is telling this story, and which words show the point of view (first or third person)?", "Salem tells it in the first person, using \"I\", \"my\" and \"me\"."),
        en("At first, why did Salem smirk when he saw Omar's boat?", "He thought it looked plain and that his own was much prettier."),
        en("Why did Salem's boat tip and spin in a circle?", "The tall blue sail caught the breeze and dragged it sideways."),
        en("\"Omar's glided across the water as smoothly as a gull.\" What does this simile show?", "Omar's boat moved very smoothly and easily."),
        en("Why did Salem's cheeks burn?", "He was embarrassed because everyone laughed."),
        en("What did Omar do before the contest that helped his boat glide so well?", "He tested his boat four times and changed the sail each time."),
        en("How is Grandfather's point of view about the two boats different from Salem's at the start?", "Grandfather thinks a boat must work well before it looks grand; Salem cared most about how his boat looked."),
        en("Salem's voice \"felt small\" when he asked Omar for help. Why do you think so?", "He felt a little shy or embarrassed after smirking at Omar's plain boat and then needing his help."),
        en("Why did Grandfather wink and say nothing at the end?", "He was pleased and proud that Salem had learned the lesson without needing to be told again."),
        en("What is a theme of this story? Give one detail that supports it.", "Patience and careful testing matter more than looks (or: learn from mistakes and ask for help). Detail: Omar's plain boat glided well, and Salem's improved after he asked for help."),
        en("In both Text A and Text B, a character's plan goes wrong in front of others, and then another child helps. What lesson do both stories share?", "Learning from a mistake and accepting help can make your work better (or: testing and patience matter)."),
        en("Compare why the plan went wrong in Text A and in Text B.", "In Text A, Salem cared most about looks, and his tall sail made the boat tip. In Text B, Maryam skipped testing, and the flag's shadow covered the solar panel."),
        en("Text B is told in three chapters. Which chapter holds the problem, and how does the next chapter depend on it?", "Chapter 2 holds the problem (the car stops in the middle of the track). Chapter 3 solves it, because Maryam and Hind move the flag that was casting the shadow."),
        en("How does Chapter 1 of Text B help you understand what goes wrong in Chapter 2?", "It tells us Maryam tied a tall red flag to the back and did not test the car, which sets up the shadow on the panel and the car stopping."),
        en("The picture at the end of Text B shows two girls grinning beside the car, with the flag at the front. What does the picture add to the ending?", "It shows in a picture that the problem is solved (the flag has been moved) and that Maryam and Hind are happy working together.")
      ]
    }
  ]
};
