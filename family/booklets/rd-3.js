// Reading practice booklet, Grade 3 expectations. English only. See ma-5.js for the format.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const en = (question, answer) => it(question, answer, question, answer);
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
      standards: ["L.3.4", "L.3.4a", "L.3.4b", "L.3.4c", "L.3.5a"],
      passage: {
        title: "The Morning at the Date Farm",
        text: "Maryam woke early on the first day of the date harvest. The sun was not yet scorching, but the air already felt warm. Her grandfather led her between the tall palm trees, where heavy bunches of dates hung high above them. \"These palms are sturdy,\" he said. \"They have stood here for many years, even in strong winds.\"\n\nWorkers climbed the trunks with ropes, moving carefully from branch to branch. Each bunch was enormous, so big that it took two men to lower it to the ground. Maryam wanted to help, but the dates were delicate and bruised easily, so she was only allowed to gather the ones that had fallen. She placed them gently into a basket.\n\nBy noon, the workers were exhausted. They sat in the shade of a palm and drank cold water. Her grandfather smiled and gave her a golden date. It tasted sweet and sticky. \"Patience is the secret,\" he said. \"Good things take time to ripen.\" Maryam nodded. She felt proud to be part of the harvest."
      },
      example: exEn(
        "Read: \"The sand was scorching, so Omar put on his sandals.\" What does scorching mean?",
        ["Look for a clue near the word: Omar put on sandals to protect his feet.", "Sand that makes you need sandals must be very hot.", "So scorching means extremely hot."],
        "Extremely hot"
      ),
      items: [
        en("In the passage, what does \"scorching\" mean? Which clue helps you?", "Extremely hot. The clue is that the air \"already felt warm\", so the sun was not yet at its hottest."),
        en("The palms are called \"sturdy\". What does sturdy mean? Which words in the passage help?", "Strong and firm. The clue is that they have stood for years \"even in strong winds\"."),
        en("What does \"enormous\" mean? Which clue helps you?", "Very big. It took two men to lower one bunch."),
        en("The dates are \"delicate\". What does delicate mean?", "Easily damaged or bruised. The passage says they bruised easily."),
        en("Why was Maryam only allowed to gather the dates that had fallen?", "The dates were delicate and bruised easily, so the workers handled the bunches themselves."),
        en("The workers were \"exhausted\" by noon. What does exhausted mean?", "Very tired. The clue is that they sat in the shade and drank water."),
        en("Grandfather says good things take time to \"ripen\". What does ripen mean here?", "To grow until ready to eat (or ready to enjoy)."),
        en("Which word in the passage is the opposite of delicate?", "Sturdy (strong, not easily harmed)."),
        en("The word \"palm\" in the passage is a kind of tree. What is a different meaning of palm?", "The inside part of the hand."),
        en("The word \"unfair\" begins with the prefix un-. What does unfair mean?", "Not fair. The prefix un- means \"not\"."),
        en("Look at the word \"carefully\". What is its root (base) word, and what does the ending -ly do?", "The root is \"care\". The ending -ly turns it into a word that tells how something is done."),
        en("Grandfather says \"Patience is the secret.\" Explain in your own words what he means.", "Waiting calmly and not rushing is what gives good results. Any answer that explains waiting and good results is correct.")
      ]
    },
    {
      area: "inf",
      standards: ["RI.3.1", "RI.3.2", "RI.3.3", "RI.3.4"],
      passage: {
        title: "The Arabian Oryx",
        text: "The Arabian oryx is a beautiful animal with a white coat and two long, straight horns. Its pale colour reflects the sunlight and helps it stay cooler in the desert heat.\n\nOryx live in dry places, but they have clever ways to survive. They can go for many days without drinking water. Instead, they get moisture from the plants they eat, such as grasses and leaves. During the hottest part of the day, an oryx rests in the shade of a tree or digs a shallow hollow in the sand to lie in. Wide hooves help it walk on soft sand without sinking.\n\nMany years ago, very few wild oryx were left because too many had been hunted. Then people began to protect them. Oryx were raised carefully in special reserves, which are areas set aside to keep animals safe. Later, some were returned to the wild. Today, herds live in protected areas in the UAE, and their numbers are growing. The oryx is now an important symbol of the country's care for nature."
      },
      example: exEn(
        "Read: \"Falcons have sharp eyes. They can spot a small bird from far away. Their strong wings help them dive very fast.\" What is the main idea?",
        ["The main idea is what the whole text is mostly about.", "Every sentence tells about a body part that helps the falcon hunt.", "So the main idea is that falcons have features that help them hunt."],
        "Falcons have eyes and wings that help them hunt."
      ),
      items: [
        en("What is the main idea of the whole passage?", "The oryx has ways to live in the desert, and people protected it so its numbers grew again."),
        en("What colour is the oryx's coat?", "White (pale)."),
        en("How does its pale colour help the oryx?", "It reflects sunlight and helps the oryx stay cooler."),
        en("Where does an oryx get moisture when it does not drink?", "From the plants it eats, such as grasses and leaves."),
        en("What does an oryx do during the hottest part of the day?", "It rests in the shade of a tree or in a shallow hollow it digs in the sand."),
        en("How do wide hooves help the oryx?", "They help it walk on soft sand without sinking."),
        en("Why were very few wild oryx left many years ago?", "Too many had been hunted."),
        en("In the passage, what is a \"reserve\"? How do you know?", "An area set aside to keep animals safe. The passage explains this right after the word."),
        en("Which came first: oryx being raised in reserves, or some being returned to the wild?", "Being raised in reserves came first. The word \"Later\" shows the return to the wild came after."),
        en("Is the number of oryx in the UAE growing or getting smaller today?", "Growing."),
        en("How are the white coat and the habit of resting in the shade connected?", "Both help the oryx stay cool in the desert heat."),
        en("Why does the writer call the oryx an important symbol of the country's care for nature?", "Because people worked to save the oryx and bring it back, which shows care for nature. Any answer using this idea is correct.")
      ]
    },
    {
      area: "lit",
      standards: ["RL.3.1", "RL.3.2", "RL.3.3", "RL.3.4"],
      passage: {
        title: "Hamdan and the Kite",
        text: "Hamdan had built a kite from paper, string and two thin sticks. On Saturday he carried it to the beach, where the wind was strong.\n\n\"Let me help,\" said his cousin Noura.\n\n\"No, I can do it,\" said Hamdan. He ran along the sand, but the kite only bounced and fell. He tried again. It fell again. Hamdan frowned and kicked the sand.\n\nNoura sat down beside him. \"When I was learning, I ran too fast,\" she said. \"Wait for the wind to lift it instead.\"\n\nHamdan took a deep breath. He held the kite high and stood still. A gust came from the sea. The kite trembled, rose, and began to climb. Hamdan let out more string, a little at a time.\n\nSoon the kite was a bright red spot in the sky. Hamdan laughed. \"It is flying!\" he shouted. \"Thank you, Noura. I should have listened sooner.\"\n\nNoura smiled. \"You did listen,\" she said. \"That is what counts.\" They watched the kite glide above the waves until the sun began to set."
      },
      example: exEn(
        "Read: \"Layla's tower of blocks fell down. She sighed, then started building again.\" What kind of person is Layla? Use the story to explain.",
        ["Look at what Layla does.", "Her tower fell, but she did not give up: she started again.", "So Layla is determined."],
        "Layla is determined, because she started building again after the tower fell."
      ),
      items: [
        en("What did Hamdan make his kite from?", "Paper, string and two thin sticks."),
        en("Where does the story take place?", "On a beach (by the sea)."),
        en("Who is Noura?", "Hamdan's cousin."),
        en("Why did the kite keep falling at first?", "Hamdan was running instead of waiting for the wind to lift it."),
        en("How did Hamdan feel after the kite fell the second time? How do you know?", "Annoyed or frustrated. He frowned and kicked the sand."),
        en("What advice did Noura give Hamdan?", "To wait for the wind to lift the kite instead of running too fast."),
        en("What did Hamdan do differently the third time?", "He held the kite high and stood still."),
        en("What happened right after the gust came from the sea?", "The kite trembled, rose and began to climb."),
        en("Why did Noura say, \"You did listen\"?", "Hamdan did follow her advice in the end, even though he had first said he could do it alone."),
        en("What kind of person is Noura? Give one thing she does or says to show it.", "Kind and patient. She sat beside Hamdan and shared her own experience and advice to help him. Any fitting trait with evidence is correct."),
        en("The writer says the kite \"was a bright red spot in the sky\". What does this tell you?", "The kite was high up and far away, so it looked small."),
        en("What lesson does the story teach?", "Listening to others and being patient can help you do something you find hard. Any answer close to this is correct.")
      ]
    }
  ]
};
