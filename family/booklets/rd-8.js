// Reading practice booklet, Grade 8 expectations. English-only: see AUTHORING.md for the format.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const en = (question, answer) => it(question, answer, question, answer);
const mc = (qEn, optsEn, correct, whyEn) => ({ q: T(qEn, qEn), a: T(whyEn, whyEn), options: { en: optsEn, ar: optsEn }, correct });
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
          "Noura had never seen the Creek at dawn. Her uncle Rashid, who captained a small cargo dhow, had invited her and her father along, and they walked down the jetty together while the sky was still the colour of a pearl. The water lay as flat as glass, and the air smelled of diesel, salt and sweet cardamom tea from a flask on the deck.",
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
        mc("The passage says Rashid's calm was \"contagious\". Using the clue after the colon, what does contagious mean here?", ["Spreading from one person to others", "Hard to notice at first", "Strong enough to frighten people", "Slow to change"], 0, "A. The clue after the colon says his calm spread from him to the sailors, and then to Noura, so contagious means spreading. If your child chose C, they may have linked the word to catching an illness and thought of something scary."),
        en("Uncle Rashid speaks \"gruffly, though his eyes were kind\". What does this tell you about his tone and character?", "A good answer says Rashid sounds rough or stern but is really caring, using the words 'though his eyes were kind' as the clue. Ask: which words tell you his voice and his feelings are different?"),
        en("The planks are described as \"scarred and silvery\", and Rashid said earlier that she has seen fifty years of hard work. What does \"scarred\" suggest about the dhow?", "A good answer says scarred means marked by wear from many years of hard work, and that Rashid says it with respect. Ask: does the word 'silvery' make the boat sound ruined or admired?"),
        mc("Rashid says Abu Saeed \"thinks every journey is a Sinbad voyage\". What does this allusion suggest about Abu Saeed's view of journeys?", ["He thinks journeys are slow and dull", "He thinks journeys are full of danger and adventure", "He thinks only sailors enjoy journeys", "He thinks journeys should be written down"], 1, "B. Rashid explains right after: journeys full of storms and sea monsters, and says Abu Saeed worries too much. If your child chose A, they may have missed that Sinbad is known for dangerous adventures."),
        mc("\"Glass towers caught the first light and glowed like lanterns.\" What does this simile suggest about the towers?", ["They were cold and empty", "They were taller than the dhow's mast", "They shone warmly and brightly in the early light", "They were switched off at dawn"], 2, "C. Lanterns give a warm glow, and the sentence says the towers caught the first light and glowed. If your child chose A, they may have read glass as cold and skipped the word lanterns."),
        en("The author writes that the engine \"coughed to life\". What does this figure of speech suggest about how the engine started?", "A good answer says the engine started roughly and with effort, as if it struggled like a person coughing. Ask: what does a cough sound like, and how does that match an engine starting badly?"),
        en("The lap of water is called \"a patient, mocking whisper\". What feeling does the word \"mocking\" add to the moment the engine stops?", "A good answer says mocking makes the quiet feel like it is teasing her, which adds worry and unease. Ask: how would you feel if the water around you seemed to laugh at you?"),
        mc("What does the word \"abras\" mean in the passage?", ["Cargo crates stacked on a dhow", "Sailors who work on a quay", "Cranes that lift crates", "Small ferries that carry passengers across the water"], 3, "D. The words right after abras, small ferries that carry passengers across the water, explain it. If your child chose A, they grabbed a boat word from earlier in the passage instead of reading the explanation."),
        mc("How does the mood of the story change after Rashid says, \"Not a storm, habibti\"?", ["It changes from tense and uneasy to relieved and cheerful", "It changes from calm to frightened", "It changes from joyful to sad", "It stays tense until the end"], 0, "A. Before, the engine is silent and Noura is nervous. After Rashid names a blocked fuel line, the engine roars and the crew cheers. If your child chose D, they may have stopped at the tense part and missed the ending."),
        en("Noura's legs \"wobbled, as if the ground itself were swaying\". What does this comparison show?", "A good answer says that after time on the water the ground felt as if it were still moving, so land felt unsteady. Ask: have you felt this after a boat ride or a long car trip?"),
        en("Explain Noura's final sentence in your own words. Why did the quiet \"fool\" her?", "A good answer says the silence made her imagine a storm, but the real problem was a small blocked fuel line, so her fear was bigger than the danger. Ask: what did Noura think first, and what was it really?")
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
        mc("Why does the author mention that rain \"vanishes into the sand or runs off to the sea\"?", ["To show that desalination plants are no longer needed", "To show that rain cannot supply the country's needs, so seawater is made into fresh water", "To show that the desert never gets any rain at all", "To show that the sea is cleaner than rain"], 1, "B. The passage says rain is rare and quickly lost, and the next sentence says the country turns seawater into fresh water. If your child chose C, they missed the word rare, because rare is not the same as never."),
        en("Name two problems with desalination that the author describes.", "A good answer names both problems: it uses large amounts of energy, and its brine can harm sea life if it is not spread out. Ask: where in the second paragraph did you find each one?"),
        en("What is happening to underground water, and what could happen when an aquifer drops too low?", "A good answer says water is pumped out faster than nature refills it, and salty sea water can creep in and spoil it. Ask: what do the words 'faster than nature can refill' tell you?"),
        mc("What is the central idea of the passage?", ["Desalination plants should be closed because they harm sea life", "Aquifers will refill themselves if left alone", "Water security needs both making fresh water and using less", "Technology alone will solve the water problem"], 2, "C. The author argues for a second pillar, using less, beside making more water, and ends by saying water security is not only about bigger plants. If your child chose D, they picked the view the author argues against."),
        en("What is the author's point of view about people who say technology alone will solve the problem? Quote the words that show it.", "A good answer says the author disagrees and thinks the view is too hopeful, and quotes 'I believe this view is too hopeful.' Ask: which words show what the author thinks?"),
        mc("Why does the author say better plants do not solve the problem fully?", ["Better plants cost more than older plants", "Better plants cannot be built near the sea", "Better plants make water that is too salty", "Every litre produced takes energy, and every litre wasted wastes that energy too"], 3, "D. The passage says every litre produced takes energy and every litre wasted wastes that energy, so better plants alone do not solve it. If your child chose A, they picked an idea about higher cost that the passage never says."),
        en("The author calls using less \"a second pillar\". What does this phrase mean?", "A good answer says a pillar is a main support, so using less holds up the plan just as making more water does. Ask: what does a pillar do for a building, and what is the plan's other pillar?"),
        en("Give two pieces of evidence the author offers to support using less water.", "A good answer gives two pieces of evidence: hotels and offices reuse treated water, and homes with low-flow taps use less. Ask: which sentences show the author has proof and not only an opinion?"),
        mc("According to the passage, why store extra desalinated water underground?", ["So it can be used in an emergency", "So it can be sold to other countries", "So it can be mixed with brine", "So it can refill the sea"], 0, "A. The passage says storing water builds a reserve, like a farmer keeping seed for next season, to use in an emergency. If your child chose B, they added an idea about selling water that the text never mentions."),
        en("What do critics say about asking people to save water, and how does the author reply?", "A good answer says critics call it unfair and say habits are hard to change, and the author replies that fair prices, clear bills and good fittings can guide people. Ask: what does the author offer in place of lectures?"),
        en("Why does the author write \"They have a point\" about the critics?", "A good answer says the author admits the critics are partly right, which makes the author seem fair and the argument stronger. Ask: why might readers trust someone who admits the other side has a point?")
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
        en("What does Khalid tell Hind, and why is it not completely true?", "A good answer says he told Hind he made it all himself, but his brother Salem spent an evening shaping the foil. Ask: which part of the model did Salem make, and which words did Khalid use?"),
        en("How does Hind's question, \"Who helped you with that?\", and Khalid's reply move the plot forward?", "A good answer says Hind's question gives Khalid a chance to be honest, and his lie starts the problem he must solve. Ask: what would have been different if he had told the truth then?"),
        mc("\"The words had stuck in his throat like dry bread.\" What does this simile suggest about how Khalid felt?", ["He was hungry and wanted to eat", "Telling the truth felt hard and uncomfortable", "He was proud of his work", "He was angry with Hind"], 1, "B. Dry bread is hard to swallow, so the truth was hard for him to say, and the text says he had meant to tell it. If your child chose A, they took the bread as real food instead of a comparison for a feeling."),
        mc("Why did Khalid's stomach drop when Mrs. Noura asked him to speak at assembly?", ["He was afraid of speaking about Mars", "He had forgotten the day of the assembly", "He did not know how the foil had been folded, so he could not explain it", "He wanted Salem to win a prize"], 2, "C. The next line says he could talk about Mars for hours but had no idea how the foil was folded. If your child chose A, they missed that he is comfortable talking about Mars."),
        en("What does Salem's reaction (\"raised his eyebrows but did not laugh\") show about his character?", "A good answer says Salem is kind and patient, because he does not laugh at Khalid and gives helpful advice. Ask: what might an unkind brother have said instead?"),
        en("Khalid says everyone would think his project is worth nothing. How does Salem answer this worry?", "A good answer says Salem points out that the Mars, the poster and the facts were all Khalid's, so only one piece was hidden. Ask: which parts does Salem say belong to Khalid?"),
        en("What does Khalid's decision to say \"Come with me\" show about how he has changed?", "A good answer says Khalid has decided to face the problem and tell the truth, so he is braver than before. Ask: how was he acting at lunch compared with now?"),
        mc("Why does Mrs. Noura say that telling the truth \"took more courage than building any probe\"?", ["Building a probe is easy for everyone", "She wants Khalid to make a second probe", "She thinks the poster was the best in the school", "Admitting a mistake is hard, and she values honesty more than a perfect project"], 3, "D. She thanks him and says telling the truth took courage, so she values honesty more than a perfect project. If your child chose C, they picked a true detail about the poster that does not explain her words about courage."),
        en("The reader knows about the lie from the start, but Hind and Mrs. Noura do not. How does this affect the way you read Mrs. Noura's praise?", "A good answer says we know the praise is for work that was not all his, so we feel tension and wonder when the truth will come out. Ask: how would you read the praise if you did not know about the lie?"),
        mc("At the end, Khalid feels as if he \"had put down a heavy bag\". What does this show?", ["Telling the truth took away his worry, so he felt lighter", "He was tired from carrying the poster", "He wanted to leave assembly early", "He felt proud that he had fooled everyone"], 0, "A. He had carried the worry of the lie, and after telling the truth he felt lighter, as the heavy bag comparison says. If your child chose D, they missed that he felt relief and not pride."),
        en("State a theme of the story and give one detail that supports it.", "A good answer states a theme such as honesty brings relief and respect, and gives a detail like Mrs. Noura thanking him. Ask: what happened right after Khalid told the truth, and how did he feel?")
      ]
    }
  ]
};
