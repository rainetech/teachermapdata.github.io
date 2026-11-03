// Reading practice booklet, Grade 8 expectations. English-only: see AUTHORING.md for the format.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const en = (question, answer) => it(question, answer, question, answer);
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });
const exEn = (question, steps, answer) => ex(question, steps, answer, question, steps, answer);

module.exports = {
  subject: "rd",
  grade: 8,
  framework: "CCSS.ELA",
  englishOnly: true,
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "voc",
      standards: ["RL.8.4", "L.8.4a", "L.8.5a", "L.8.5c"],
      passage: {
        title: "Dawn on the Creek",
        text: [
          "Noura had never seen the Creek at dawn. Her uncle Rashid, who captained a small cargo dhow, had promised to take her along, and she crept down the jetty while the sky was still the colour of a pearl. The water lay as flat as glass, and the air smelled of diesel, salt and sweet cardamom tea from a flask on the deck.",
          "\"Mind your step,\" said Uncle Rashid gruffly, though his eyes were kind. \"A dhow is not a palace. She has seen fifty years of hard work, and she shows it.\"",
          "The old boat did show it. Her planks were scarred and silvery, and the rail felt as smooth as a river stone under Noura's palm. Crates of rice, tyres and bright plastic buckets were stacked high, and the sailors moved among them with the ease of people who had done this a thousand times.",
          "As the engine coughed to life, a man on the quay shouted and waved. Rashid only shrugged. \"Abu Saeed thinks every journey is a Sinbad voyage,\" he said, \"full of storms and sea monsters. He worries too much. Today we are only crossing to the far side of the Creek.\"",
          "Noura laughed, but she felt a flutter of nerves all the same. The dhow slid past the abras, the small ferries that carry passengers across the water, and the city began to wake. Glass towers caught the first light and glowed like lanterns. A cormorant dived and surfaced beside them with a silver fish, looking thoroughly pleased with itself.",
          "Then the engine stuttered and stopped. Silence settled over the boat. The sailors exchanged glances, and no one spoke. Noura's stomach tightened. The only sound was the lap of water against the hull, a patient, mocking whisper.",
          "\"Is this a storm?\" she murmured.",
          "Rashid chuckled and lifted a hatch. \"Not a storm, habibti. A blocked fuel line. Hand me that cloth.\" His calm was contagious: it spread from him to the sailors, and then to Noura. Within ten minutes, with a rattle and a puff of grey smoke, the engine roared again, and the crew cheered.",
          "On the far side, Noura stepped onto the quay with legs that wobbled, as if the ground itself were swaying. She had expected to feel like a hero. Instead she felt something quieter and better: she felt that she belonged to the water.",
          "\"Well, Captain Noura,\" said her uncle, \"what did you learn?\"",
          "She thought for a moment. \"That the sea only seems dangerous when you let the quiet fool you,\" she said."
        ].join("\n\n")
      },
      example: exEn(
        "Both \"thrifty\" and \"stingy\" describe a person who is careful with money. Which word has a positive connotation, and which has a negative one?",
        ["Connotation is the feeling a word carries, beyond its basic meaning.", "\"Thrifty\" suggests a sensible person who spends wisely, so we usually mean it as praise.", "\"Stingy\" suggests someone who is unwilling to share, so it sounds like criticism."],
        "\"Thrifty\" is positive and \"stingy\" is negative."
      ),
      items: [
        en("The passage says Rashid's calm was \"contagious\". Using the clue after the colon, what does contagious mean here?", "Spreading from one person to others (it spread from him to the sailors and then to Noura)."),
        en("Uncle Rashid speaks \"gruffly, though his eyes were kind\". What does this tell you about his tone and character?", "His voice sounds rough, but he is caring; the roughness is not unkind."),
        en("The planks are described as \"scarred and silvery\", and Rashid said earlier that she has seen fifty years of hard work. What does \"scarred\" suggest about the dhow?", "That it has lived through many years of hard use (and is respected for it)."),
        en("Rashid says Abu Saeed \"thinks every journey is a Sinbad voyage\". What does this allusion to Sinbad suggest about Abu Saeed's view of journeys?", "He thinks journeys are full of danger and adventure, such as storms and sea monsters."),
        en("\"Glass towers caught the first light and glowed like lanterns.\" What does this simile suggest about the towers?", "They shone warmly and brightly in the early light."),
        en("The author writes that the engine \"coughed to life\". What does this figure of speech suggest about how the engine started?", "It started roughly and reluctantly, like a person coughing."),
        en("The lap of water is called \"a patient, mocking whisper\". What feeling does the word \"mocking\" add to the moment the engine stops?", "It makes the quiet seem to tease Noura, so she feels uneasy and nervous."),
        en("What does the word \"abras\" mean? Which words in the same sentence help you?", "Small ferries that carry passengers across the water (the phrase after the comma explains it)."),
        en("How does the mood of the story change after Rashid says, \"Not a storm, habibti\"?", "It changes from tense and uneasy to relieved and cheerful."),
        en("Noura's legs \"wobbled, as if the ground itself were swaying\". What does this comparison show?", "After the time on the water, the land felt unsteady to her."),
        en("Explain Noura's final sentence in your own words. Why did the quiet \"fool\" her?", "The silence made her imagine a big danger, but the real problem was small and easy to fix.")
      ]
    },
    {
      area: "inf",
      standards: ["RI.8.1", "RI.8.2", "RI.8.4", "RI.8.6", "RI.8.8"],
      passage: {
        title: "Every Litre Counts",
        text: [
          "The Emirates sit in one of the driest regions on Earth. Rain is rare and often arrives in short, heavy bursts that vanish into the sand or run off to the sea. For decades, the country has met its needs by turning seawater into fresh water at desalination plants, and this has allowed cities to grow and gardens to bloom. Yet this success hides a worry that planners cannot afford to ignore: a supply that depends on a single method is a fragile one.",
          "Consider how desalination works. Seawater is heated, or forced through very fine membranes, until the salt is separated from the water. The process uses large amounts of energy, and it produces a concentrated brine that must be returned to the Gulf, where it can harm sea life if it is not carefully spread out. Meanwhile, underground water that gathered over thousands of years is being pumped faster than nature can refill it. Once such an aquifer drops too low, salty water from the sea can creep in and spoil it.",
          "Some people argue that technology alone will solve the problem. They say that better plants will simply make more water at a lower cost. I believe this view is too hopeful. Better plants help, but they do not change the fact that every litre produced takes energy, and every litre wasted wastes that energy too. A sensible strategy needs a second pillar: using less.",
          "The evidence for this is encouraging. Many hotels and office buildings now treat used water from sinks and showers and reuse it to flush toilets and water gardens. A city that did this widely would need to produce far less fresh water. Engineers have also found that homes fitted with low-flow taps use noticeably less water, and families barely notice the difference.",
          "Another promising step is to store extra desalinated water underground during quiet months, so that it can be drawn on in an emergency. This builds a reserve, much as a farmer keeps seed in a storeroom for the next season.",
          "Critics respond that asking people to save water is unfair when supplies seem plentiful, and that habits are hard to change. They have a point: lectures rarely work. But fair prices that reward saving, clear information on every bill and well-designed fittings can guide people gently without scolding them.",
          "Water security, then, is not only a matter of building bigger plants. It is a matter of treating each litre as valuable. A nation that learns to value its water will be ready for a hotter, drier future, whatever the plants can deliver."
        ].join("\n\n")
      },
      example: exEn(
        "Read: \"Our school should plant more shade trees. Trees cool the playground by several degrees, so children can play outside for longer.\" What is the author's claim, and what is the supporting evidence?",
        ["A claim is what the author wants the reader to believe or do.", "The first sentence says what the school should do: plant more shade trees. That is the claim.", "The second sentence gives a fact and a result (cooler playground, longer play). That is the evidence."],
        "Claim: the school should plant more shade trees. Evidence: trees cool the playground, so children can play outside longer."
      ),
      items: [
        en("Why does the author mention that rain \"vanishes into the sand or runs off to the sea\"?", "To show that rain cannot supply the country's needs, which is why seawater is turned into fresh water."),
        en("Name two problems with desalination that the author describes.", "Any two: it uses large amounts of energy; it leaves a brine that can harm sea life if not spread out carefully."),
        en("What is happening to underground water, and what could happen when an aquifer drops too low?", "It is pumped faster than nature refills it; salty sea water can creep in and spoil it."),
        en("What is the central idea of the passage?", "Water security needs both making fresh water and using less (reusing and saving); relying on technology alone is not enough."),
        en("What is the author's point of view about people who say technology alone will solve the problem? Quote the words that show it.", "The author thinks they are too hopeful: \"I believe this view is too hopeful.\""),
        en("Why does the author say better plants do not solve the problem fully?", "Every litre produced takes energy, and every litre wasted wastes that energy too."),
        en("The author calls using less \"a second pillar\". What does this phrase mean?", "A second main support for the strategy, beside making more water."),
        en("Give two pieces of evidence the author offers to support using less water.", "Any two: hotels and offices reuse treated water for toilets and gardens; homes with low-flow taps use noticeably less water."),
        en("According to the passage, why store extra desalinated water underground?", "So it can be used in an emergency (it builds a reserve)."),
        en("What do critics say about asking people to save water, and how does the author reply?", "Critics say it is unfair and habits are hard to change; the author says fair prices, clear bills and good fittings can guide people gently."),
        en("Why does the author write \"They have a point\" about the critics?", "To show fairness by admitting the critics are partly right, which makes the argument more convincing.")
      ]
    },
    {
      area: "lit",
      standards: ["RL.8.1", "RL.8.2", "RL.8.3", "RL.8.4", "RL.8.6"],
      passage: {
        title: "The Foil Probe",
        text: [
          "The Hope Probe poster was almost finished when Khalid stepped back to admire it. His whole class was preparing displays for Space Week, and every display was due the next day. Khalid's was the best-looking in the room, with a glittering red Mars cut from card and a tiny probe made of foil.",
          "\"Who helped you with that?\" asked Hind, peering at the foil probe.",
          "\"No one,\" said Khalid quickly. \"I made it all myself.\"",
          "It was not quite true. His older brother Salem had spent a whole evening shaping the foil, bending it patiently while Khalid watched and ate dates. Khalid had meant to say so. But the words had stuck in his throat like dry bread, and the lie had slipped out smooth and quick.",
          "The next morning, Mrs. Noura stopped at his desk. \"Khalid, this is remarkable work,\" she said. \"I would like you to explain how you built the probe to the whole school at assembly.\"",
          "Khalid's stomach dropped. He could talk about Mars for hours, but he had no idea how the foil had been folded.",
          "At lunch, he found Salem by the fountain. \"I need your help,\" Khalid mumbled, staring at his shoes. \"I told everyone I built it myself.\"",
          "Salem raised his eyebrows but did not laugh. \"And now you cannot explain it.\"",
          "\"Right.\"",
          "\"Well,\" said Salem thoughtfully, \"you could tell Mrs. Noura the truth.\"",
          "\"She would be disappointed.\" Khalid's voice cracked. \"Everyone would think my project is worth nothing.\"",
          "\"Would it be worth nothing?\" Salem asked. \"The Mars was yours. The poster was yours. Every fact on that board was yours. All you have done is hide the one piece that was not.\"",
          "Khalid said nothing. A gentle breeze carried the smell of cut grass across the yard. At last he straightened his shoulders. \"Come with me,\" he said.",
          "They found Mrs. Noura in the classroom. Khalid took a long breath. \"I did not make the probe alone. My brother folded the foil. I should have said so at the start.\"",
          "Mrs. Noura was quiet for a moment, and Khalid braced himself. Then she smiled. \"Thank you for telling me. That took more courage than building any probe.\" She turned to Salem. \"Would you stand beside him at assembly? You can both explain it.\"",
          "At assembly, Khalid spoke about Mars while Salem showed how the foil was folded. When the applause came, Khalid felt lighter than he had in days, as if he had put down a heavy bag he had been carrying without noticing."
        ].join("\n\n")
      },
      example: exEn(
        "Read: \"I will do it myself,\" Hamdan said, brushing his sister's hand away. \"I do not need help.\" What does this line of dialogue show about Hamdan?",
        ["Look at what he says and what he does while saying it.", "He refuses help twice and pushes his sister's hand away.", "This suggests he is proud and wants to do things on his own."],
        "He is proud and independent: he wants to do the task without help."
      ),
      items: [
        en("What does Khalid tell Hind, and why is it not completely true?", "He says he made the probe all by himself, but his brother Salem shaped the foil."),
        en("How does Hind's question, \"Who helped you with that?\", and Khalid's reply move the plot forward?", "It leads to Khalid's lie, which causes the problem he has to solve later."),
        en("\"The words had stuck in his throat like dry bread.\" What does this simile suggest about how Khalid felt?", "Telling the truth felt uncomfortable and hard, perhaps because he was embarrassed."),
        en("Why did Khalid's stomach drop when Mrs. Noura asked him to speak at assembly?", "He did not know how the foil had been folded, so he could not explain it and would be found out."),
        en("What does Salem's reaction (\"raised his eyebrows but did not laugh\") show about his character?", "He is kind and patient; he helps rather than mocks."),
        en("Khalid says everyone would think his project is worth nothing. How does Salem answer this worry?", "He points out that the Mars, the poster and every fact were Khalid's own; only one piece was hidden."),
        en("What does Khalid's decision to say \"Come with me\" show about how he has changed?", "He has decided to face the problem and tell the truth."),
        en("Why does Mrs. Noura say that telling the truth \"took more courage than building any probe\"?", "Admitting a mistake is hard, and she values honesty more than a perfect project."),
        en("The reader knows about the lie from the start, but Hind and Mrs. Noura do not. How does this affect the way you read Mrs. Noura's praise?", "We know the praise is for work that was not all his, so we feel tension about when the truth will come out."),
        en("At the end, Khalid feels as if he \"had put down a heavy bag\". What does this show?", "Telling the truth took away his worry and guilt, so he felt lighter."),
        en("State a theme of the story and give one detail that supports it.", "Honesty brings relief and respect (or: own up to mistakes). Detail: after Khalid admits the truth, Mrs. Noura thanks him and he feels lighter.")
      ]
    }
  ]
};
