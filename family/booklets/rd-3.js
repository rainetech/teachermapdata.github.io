// Reading practice booklet, Grade 3 expectations. English only. See ma-5.js for the format.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const en = (question, answer) => it(question, answer, question, answer);
const mc = (qEn, optsEn, correct, whyEn) => ({ q: T(qEn, qEn), a: T(whyEn, whyEn), options: { en: optsEn, ar: optsEn }, correct });
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });
const exEn = (question, steps, answer) => ex(question, steps, answer, question, steps, answer);

module.exports = {
  subject: "rd",
  grade: 3,
  framework: "CCSS.ELA",
  englishOnly: true,
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "voc",
      standards: ["L.3.4", "L.3.4a", "L.3.4b", "L.3.4c", "L.3.5a", "RF.3.3", "RF.3.4"],
      passage: {
        title: "The Morning at the Date Farm",
        text: "Maryam woke early on the first day of the date harvest. The sun was not yet scorching. By noon it would be hot enough to burn bare feet, but now the air only felt warm. Her grandfather led her between the tall palm trees, where heavy bunches of dates hung high above them. \"These palms are sturdy,\" he said. \"They have stood here for many years, even in strong winds.\"\n\nWorkers climbed the trunks with ropes, moving carefully from branch to branch. Each bunch was enormous, so big that it took two men to lower it to the ground. Maryam wanted to help, but the dates were delicate and bruised easily, so she was only allowed to gather the ones that had fallen. She placed them gently into a basket.\n\nBy noon, the workers were exhausted. They sat in the shade of a palm and drank cold water. Her grandfather smiled and gave her a golden date. It tasted sweet and sticky. \"Patience is the secret,\" he said. \"Good things take time to ripen.\" Maryam nodded. She felt proud to be part of the harvest."
      },
      example: exEn(
        "Read: \"The sand was scorching, so Omar put on his sandals.\" What does scorching mean?",
        ["Look for a clue near the word: Omar put on sandals to protect his feet.", "Sand that makes you need sandals must be very hot.", "So scorching means extremely hot."],
        "Extremely hot"
      ),
      items: [
        mc("In the passage, what does \"scorching\" mean?", ["Pleasantly cool", "Extremely hot", "Very bright", "Dry and dusty"], 1, "The text says by noon it would be hot enough to burn bare feet. If your child chose A (pleasantly cool), they read the warm morning air, not the noon heat."),
        mc("The palms are called \"sturdy\". What does sturdy mean?", ["Old and tall", "Easy to climb", "Heavy with fruit", "Strong and firm"], 3, "The palms have stood for many years, even in strong winds. If your child chose A (old and tall), they picked a detail about the palms, not what sturdy means."),
        mc("What does \"enormous\" mean in the passage?", ["Easily bruised", "Very ripe", "Very big", "Very sweet"], 2, "The text says it took two men to lower one bunch. If your child chose A (easily bruised), they picked the meaning of delicate instead."),
        en("The dates are \"delicate\". What does delicate mean?", "Easily damaged or bruised. The passage says the dates bruised easily. Ask: which words near delicate give the clue?"),
        mc("Why was Maryam only allowed to gather the dates that had fallen?", ["The dates were delicate and bruised easily", "The ropes were too heavy for her", "She was too tired after noon", "Fallen dates were the sweetest"], 0, "The passage says the dates were delicate and bruised easily, so the workers handled the bunches. If your child chose B (the ropes were too heavy), they added a reason the text does not give."),
        mc("The workers were \"exhausted\" by noon. What does exhausted mean?", ["Very hungry", "Very hot", "Very tired", "Very thirsty"], 2, "The workers sat in the shade to rest after hard work. If your child chose D (very thirsty), they picked something that also happened, but it is not what exhausted means."),
        en("Grandfather says good things take time to \"ripen\". What does ripen mean here?", "To grow until ready to eat. A good answer says the dates become ready over time. Ask: what do you do with fruit that is not ripe yet?"),
        en("Which word in the passage is the opposite of delicate?", "Sturdy. Delicate means easily harmed and sturdy means strong and firm. Ask: which sentence in the passage uses the word sturdy?"),
        mc("In the passage, palm is a kind of tree. In which sentence does palm have a different meaning?", ["Salem sat under a tall palm.", "The palm trees were full of dates.", "The workers climbed the palm trunk.", "Hind held the coin in her palm."], 3, "In Hind held the coin in her palm, palm is the inside of the hand. If your child chose B (the palm trees), they picked a sentence where palm means the tree, as in the passage."),
        mc("The word \"unfair\" begins with the prefix un-. What does unfair mean?", ["Not fair", "Very fair", "Fair again", "Fair before"], 0, "The prefix un- means not. If your child chose C (fair again), they mixed up un- with re-, which means again."),
        en("Look at the word \"carefully\". What is its root (base) word, and what does the ending -ly do?", "The root is care. Adding -ful gives careful, and adding -ly gives carefully, a word that tells how something is done. Ask: which other word ends with -ly?"),
        en("Grandfather says \"Good things take time to ripen.\" He is talking about dates, but he means more than fruit. What does he mean?", "A good answer says good things need time and patience, not only fruit. Ask: what is something you had to wait for?"),
        en("Split these words from the passage into syllables: \"enormous\" and \"exhausted\". How many syllables does each have?", "e-nor-mous has 3 syllables and ex-haust-ed has 3 syllables. Clap each word to check. Ask: where does each word break?"),
        en("The word \"enjoyable\" ends in the suffix -able, which comes from Latin and means \"able to be\". Split enjoyable into syllables and say what it means.", "en-joy-a-ble has 4 syllables, and it means able to be enjoyed, something pleasant to do. Ask: what does the word breakable mean?"),
        en("Read the second paragraph of the passage (\"Workers climbed the trunks...\") aloud to a parent. What should the parent listen for?", "A good answer says to read the words correctly, at a steady pace, with a short pause at each comma and full stop. Ask: can you read the sentence once more?"),
        en("Read Grandfather's words \"Patience is the secret. Good things take time to ripen.\" aloud as he might say them. How should your voice sound, and what should the parent listen for?", "A good answer says the voice sounds calm and warm, with a pause after the full stop. Listen for expression that fits the meaning, not a flat voice. Ask: how would a wise grandfather say it?")
      ]
    },
    {
      area: "inf",
      standards: ["RI.3.1", "RI.3.2", "RI.3.3", "RI.3.4", "RI.3.5", "RI.3.6", "RI.3.7", "RI.3.8", "RI.3.9"],
      passage: [{
        title: "Text A: The Arabian Oryx",
        text: "The Arabian oryx is a beautiful animal with a white coat and two long, straight horns. Its pale colour reflects the sunlight and helps it stay cooler in the desert heat.\n\nOryx live in dry places, but they have clever ways to survive. They can go for many days without drinking water. Instead, they get moisture from the plants they eat, such as grasses and leaves. During the hottest part of the day, an oryx rests in the shade of a tree or digs a shallow hollow in the sand to lie in. Wide hooves help it walk on soft sand without sinking.\n\nMany years ago, very few wild oryx were left because too many had been hunted. Then people began to protect them. Oryx were raised carefully in special reserves, which are areas set aside to keep animals safe. Later, some were returned to the wild. Today, herds live in protected areas in the UAE, and their numbers are growing. The oryx is now an important symbol of the country's care for nature."
      }, {
        title: "Text B: Visiting the Oryx Reserve",
        text: "WHERE TO GO\nThe reserve is in the desert, a short drive from the city. Families can join a guided visit with a ranger. Visitors stay inside the vehicle so that the animals stay calm.\n\nWHAT YOU WILL SEE\nOn a visit you will see herds of oryx walking steadily across the sand. Because oryx have wide hooves, they cross soft ground easily. Rangers count the herds each month. First they drive to the water point, then they walk to the shade trees, and last they write the numbers down.\n\nWHY IT MATTERS\nI believe a visit to the reserve is the best way to learn about oryx. Seeing a herd with your own eyes is better than only reading about it.\n\nMAP OF THE RESERVE (in words)\nThe gate is at the south edge. The water point is north of the gate. The shade trees are east of the water point. The visitor hut is west of the water point.\n\nGLOSSARY\nherd: a group of animals that live and move together\nranger: a person who looks after a protected area"
      }],
      example: exEn(
        "Read: \"Falcons have sharp eyes. They can spot a small bird from far away. Their strong wings help them dive very fast.\" What is the main idea?",
        ["The main idea is what the whole text is mostly about.", "Every sentence tells about a body part that helps the falcon hunt.", "So the main idea is that falcons have features that help them hunt."],
        "Falcons have eyes and wings that help them hunt."
      ),
      items: [
        mc("What is the main idea of the whole of Text A?", ["Oryx have a white coat and two long horns", "Oryx have ways to live in the desert, and people protected them so their numbers grew", "Oryx are kept in reserves so that visitors can see them", "Oryx drink water every day in the desert"], 1, "Text A tells how oryx survive in the desert and how people protected them so their numbers grew. If your child chose A, they picked a detail about its looks, not the main idea."),
        en("What colour is the oryx's coat?", "White, or pale. The first sentence of Text A says the oryx has a white coat. Ask: what else do the first lines tell about how it looks?"),
        en("How does its pale colour help the oryx?", "It reflects sunlight, which helps the oryx stay cooler in the heat. A good answer says how the colour helps. Ask: what does the word reflects mean?"),
        mc("According to Text A, where does an oryx get moisture when it does not drink?", ["From digging in the sand", "From the shade of a tree", "From the water point in the reserve", "From the plants it eats"], 3, "The second paragraph says they get moisture from the plants they eat. If your child chose C (the water point in the reserve), they picked a place from Text B, not Text A."),
        en("What does an oryx do during the hottest part of the day?", "It rests in the shade of a tree or in a hollow it digs in the sand. A good answer says what it does and where. Ask: why does resting there help?"),
        en("How do wide hooves help the oryx?", "They help it walk on soft sand without sinking. A good answer says what the hooves do. Ask: what might happen with narrow hooves?"),
        mc("Why were very few wild oryx left many years ago?", ["Too many had been hunted", "The desert had become too hot", "There were no plants to eat", "Rangers had moved them away"], 0, "Text A says too many had been hunted, so very few were left. If your child chose B (the desert had become too hot), they picked a reason the text does not give."),
        mc("In Text A, what is a \"reserve\"?", ["A person who looks after animals", "A herd of oryx walking together", "An area set aside to keep animals safe", "A shallow hollow in the sand"], 2, "The passage says a reserve is an area set aside to keep animals safe. If your child chose A (a person who looks after animals), they mixed it up with a ranger from Text B."),
        en("Which came first: oryx being raised in reserves, or some being returned to the wild?", "Being raised in reserves came first, then some went back to the wild. The word Later gives the order. Ask: which word tells you what happened next?"),
        en("Is the number of oryx in the UAE growing or getting smaller today?", "Growing. The last paragraph says their numbers are growing today. Ask: which words in the text tell you so?"),
        en("How are the white coat and the habit of resting in the shade connected?", "Both help the oryx stay cool in the desert heat. A good answer says what the two have in common. Ask: how does each one keep it cool?"),
        en("Why does the writer call the oryx an important symbol of the country's care for nature?", "A good answer says people worked to save the oryx and bring it back, which shows care for nature. Ask: what did people do to protect the oryx?"),
        mc("Salem wants to find out how rangers count the herds. Under which heading in Text B should he look?", ["WHERE TO GO", "WHAT YOU WILL SEE", "WHY IT MATTERS", "GLOSSARY"], 1, "The counting is described under WHAT YOU WILL SEE. If your child chose A (WHERE TO GO), they looked at the place, not at what rangers do."),
        mc("Use the map of the reserve in Text B. Start at the water point. Which place is east of it, and which is west of it?", ["East: the gate; west: the shade trees", "East: the visitor hut; west: the shade trees", "East: the visitor hut; west: the gate", "East: the shade trees; west: the visitor hut"], 3, "On the map in words, the shade trees are east of the water point and the visitor hut is west. If your child chose B, they swapped east and west."),
        en("Text B says, \"Because oryx have wide hooves, they cross soft ground easily.\" What is the cause and what is the effect? Then name one thing about wide hooves that both Text A and Text B tell you.", "Cause: oryx have wide hooves. Effect: they cross soft ground easily. Both texts say wide hooves help on soft sand. Ask: which word, because, tells you the cause?"),
        mc("Which sentence from Text B shows the writer's point of view (an opinion)?", ["I believe a visit to the reserve is the best way to learn about oryx.", "Rangers count the herds each month.", "Visitors stay inside the vehicle so that the animals stay calm.", "The reserve is in the desert, a short drive from the city."], 0, "The words I believe and the best way show the writer's opinion. If your child chose B (Rangers count the herds each month), they picked a fact that can be checked."),
      ]
    },
    {
      area: "lit",
      standards: ["RL.3.1", "RL.3.2", "RL.3.3", "RL.3.4", "RL.3.5", "RL.3.6", "RL.3.7"],
      passage: [{
        title: "Text A: Hamdan and the Kite",
        text: "Hamdan had built a kite from paper, string and two thin sticks. On Saturday he carried it to the beach, where the wind was strong.\n\n\"Let me help,\" said his cousin Noura.\n\n\"No, I can do it,\" said Hamdan. He ran along the sand, but the kite only bounced and fell. He tried again. It fell again. Hamdan frowned and kicked the sand.\n\nNoura sat down beside him. \"When I was learning, I ran too fast,\" she said. \"Wait for the wind to lift it instead.\"\n\nHamdan took a deep breath. He held the kite high and stood still. A gust came from the sea. The kite trembled, rose, and began to climb. Hamdan let out more string, a little at a time.\n\nSoon the kite was a bright red spot in the sky. Hamdan laughed. \"It is flying!\" he shouted. \"Thank you, Noura. I should have listened sooner.\"\n\nNoura smiled. \"You did listen,\" she said. \"That is what counts.\" They watched the kite glide above the waves until the sun began to set."
      }, {
        title: "Text B: Kite Day (a poem)",
        text: "The morning wind is soft and low,\nThe sand is cool beneath my toes.\nI hold my kite and wait to go,\nAnd watch which way the breeze now blows.\n\nA gust comes up, the string pulls tight,\nMy kite leaps up and starts to climb.\nIt is a red spark in the light,\nAnd I let out string, one bit at a time.\n\nNow far above the shining sea\nIt floats as calm as it can be.\nI smile and hold the string with care,\nSo happy that the wind is there."
      }],
      example: exEn(
        "Read: \"Layla's tower of blocks fell down. She sighed, then started building again.\" What kind of person is Layla? Use the story to explain.",
        ["Look at what Layla does.", "Her tower fell, but she did not give up: she started again.", "So Layla is determined."],
        "Layla is determined, because she started building again after the tower fell."
      ),
      items: [
        en("What did Hamdan make his kite from?", "Paper, string and two thin sticks. The first sentence names all three. Ask: where in the first sentence do you find them?"),
        en("Where does the story take place?", "On a beach, by the sea. The text says he carried it to the beach, and a gust came from the sea. Ask: which words tell you where?"),
        en("Who is Noura?", "Hamdan's cousin. Text A calls her his cousin Noura when she offers to help. Ask: where does the story say so?"),
        mc("Why did the kite keep falling at first?", ["Hamdan ran too fast instead of waiting for the wind to lift it", "The wind was too light", "The string was too short", "Noura was holding the kite down"], 0, "Hamdan ran too fast, and Noura later says to wait for the wind to lift it. If your child chose B (the wind was too light), they missed that the text says the wind was strong."),
        mc("How did Hamdan feel after the kite fell the second time?", ["Proud", "Sleepy", "Excited", "Annoyed"], 3, "He frowned and kicked the sand, which shows he was cross. If your child chose C (excited), they thought of how he felt at the end."),
        en("What advice did Noura give Hamdan?", "To wait for the wind to lift the kite instead of running too fast. A good answer uses Noura's words. Ask: what did she say she did when she was learning?"),
        en("What did Hamdan do differently the third time?", "He held the kite high and stood still. A good answer says what he did, not only that he waited. Ask: what did he do the first two times?"),
        en("What happened right after the gust came from the sea?", "The kite trembled, rose and began to climb. A good answer says what happened next. Ask: which words in the story tell you so?"),
        mc("Why did Noura say, \"You did listen\"?", ["Hamdan had asked for her help at the start", "Hamdan had kept very quiet", "Hamdan followed her advice in the end", "Hamdan flew the kite for her"], 2, "Noura means Hamdan followed her advice in the end, when he waited and stood still. If your child chose A, they mixed this up with the start, where he said no to help."),
        en("What kind of person is Noura? Give one thing she does or says to show it.", "Kind and patient. A good answer names a trait and one thing she did, like sitting beside him to share advice. Ask: which words tell you that?"),
        mc("The writer says the kite \"was a bright red spot in the sky\". What does this tell you?", ["The kite was very close to Hamdan", "The kite was on fire", "The sun was shining on the kite", "The kite was high and far away, so it looked small"], 3, "A spot is small, so the kite must be high and far away. If your child chose A (very close), they missed that something close would look big."),
        mc("What lesson does Text A teach?", ["Listening to others and being patient can help with something hard", "It is best to do everything alone", "Kites fly best at the beach", "Cousins should share their toys"], 0, "Hamdan listened to Noura and waited, and then the kite flew. If your child chose B (do everything alone), they picked what Hamdan tried first, which did not work."),
        mc("How many stanzas does the poem in Text B have, and which stanza tells how the kite starts to climb?", ["3 stanzas; stanza 3", "3 stanzas; stanza 2", "4 stanzas; stanza 2", "2 stanzas; stanza 1"], 1, "The poem has 3 stanzas, and the kite starts to climb in stanza 2, where it leaps up. If your child chose C (4 stanzas), they counted the lines in a stanza."),
        en("Text A is told by a narrator, not by Hamdan. At the start, Hamdan says, \"No, I can do it,\" and Noura wants to help. Whose point of view is different from Hamdan's, and what is it? Then say what you would have done in Hamdan's place and why.", "Noura thinks helping is a good idea, but Hamdan wants to do it alone. Then the child gives their own view with a reason. Ask: why would you do that?"),
        en("Imagine the picture for Text A shows Hamdan standing still on the sand, holding the red kite high, with the sea beside him. Which moment from the story is it? What does the picture show that the words do not say exactly?", "It shows the moment Hamdan held the kite high and stood still, before the gust. The picture adds details such as the beach and how he stands. Ask: what do you see that the words do not say?"),
        mc("Which title would suit Text A as Chapter 1?", ["The Date Harvest", "The Oryx Returns", "A Morning at the Souq", "A Kite Takes Flight"], 3, "Text A is about Hamdan getting his kite to fly. If your child chose A (The Date Harvest), they picked a title from another text in this booklet."),
      ]
    }
  ]
};
