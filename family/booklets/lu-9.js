// Language Usage practice booklet, Grade 9 expectations. English only. See ma-5.js for the format.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const en = (question, answer) => it(question, answer, question, answer);
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });
const exEn = (question, steps, answer) => ex(question, steps, answer, question, steps, answer);

module.exports = {
  subject: "lu",
  grade: 9,
  framework: "CCSS.ELA",
  englishOnly: true,
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "cps",
      standards: ["L.9-10.2", "L.9-10.2a", "L.9-10.2b", "L.9-10.2c"],
      example: exEn(
        "Join the two complete sentences with a semicolon: The souq was crowded on Friday evening. Noura still found the saffron she needed.",
        [
          "Check that each part could stand alone as a sentence. Both can.",
          "The two ideas are closely related, so a semicolon can join them.",
          "Use a small letter after the semicolon, because the second part continues the sentence."
        ],
        "The souq was crowded on Friday evening; Noura still found the saffron she needed."
      ),
      items: [
        en("Correct the comma splice by using a semicolon: The metro was quiet this morning, the platforms were almost empty.", "The metro was quiet this morning; the platforms were almost empty. (a comma alone cannot join two complete sentences; a semicolon can)"),
        en("Add the colon: Noura packed three items for the trip water, dates and a map.", "Noura packed three items for the trip: water, dates and a map. (a colon follows a complete sentence and introduces a list)"),
        en("Punctuate it with a semicolon and a comma: The road was closed however Omar arrived on time.", "The road was closed; however, Omar arrived on time. (a semicolon comes before the transition word, and a comma comes after it)"),
        en("Choose the correct form: Khalid is a (well known / well-known) falcon trainer.", "well-known (two words that work together as one adjective before a noun take a hyphen)"),
        en("Add the hyphens that are needed: Layla is a twelve year old student.", "Layla is a twelve-year-old student. (the hyphens join the words that work together as one adjective before the noun)"),
        en("Add the commas that are needed: The Hope Probe which was launched in 2020 reached Mars in 2021.", "The Hope Probe, which was launched in 2020, reached Mars in 2021. (the commas set off extra information that can be removed without changing the main meaning)"),
        en("Which spelling is correct: occurence, occurrence or occurance?", "occurrence (two r's and two c's, and the ending is -ence)"),
        en("Choose the right word: The school (principal / principle) welcomed the visitors to the science fair.", "principal (the head of a school; a principle is a rule or a basic idea)"),
        en("Correct the capital letters: my cousin maryam studies spanish and science at a school in abu dhabi.", "My cousin Maryam studies Spanish and science at a school in Abu Dhabi. (names, languages, places and the first word of a sentence take capitals; the name of a school subject such as science does not, unless it is a language)"),
        en("Punctuate it: Hamdan asked Where is the map", "Hamdan asked, \"Where is the map?\" (a comma before the quotation, a capital letter to begin the speech, and the question mark inside the quotation marks)"),
        en("Explain what is wrong with this sentence and correct it: Omar packed: water, dates and a map.", "Omar packed water, dates and a map. (a colon should come after a complete sentence; Omar packed is not complete, so no colon is needed)")
      ]
    },
    {
      area: "gru",
      standards: ["L.9-10.1", "L.9-10.1a", "L.9-10.1b", "L.9-10.3"],
      example: exEn(
        "Make the list parallel: Hind enjoys reading, to paint and playing football.",
        [
          "The items in a list should have the same form.",
          "Reading and playing football both end in -ing, so change to paint to match them.",
          "The -ing form of paint is painting."
        ],
        "Hind enjoys reading, painting and playing football."
      ),
      items: [
        en("Make the list parallel by using -ing forms: Maryam likes swimming, to hike and riding bikes.", "Maryam likes swimming, hiking and riding bikes. (all three items now have the same form)"),
        en("Make the three actions parallel by using base verbs after to: The guide told us to wear a hat, bring water and that we should stay together.", "The guide told us to wear a hat, bring water and stay together. (each action now begins with a base verb)"),
        en("Name the type of phrase Having finished the project, and name the person it describes: Having finished the project, Salem went home.", "A participial phrase; it describes Salem. (it begins with a verb form used as an adjective)"),
        en("Name the prepositional phrase: The falcon landed on the old wooden post.", "on the old wooden post (a preposition, on, followed by its object and the words that describe it)"),
        en("Name the absolute phrase: The sun setting over the dunes, the family packed the car.", "The sun setting over the dunes (a noun and a participle phrase that has its own subject and does not describe a single word; it adds a detail to the whole sentence)"),
        en("Which part is the dependent clause? Because the heat was rising, the guide ended the tour.", "Because the heat was rising (it has a subject and a verb but cannot stand alone as a sentence)"),
        en("Name the adverbial clause: We will visit the creek after the rain stops.", "after the rain stops (it tells when the visit will happen)"),
        en("Combine the sentences with a clause that begins with who: Hind is my cousin. Hind designs solar panels.", "Model answer: Hind, who designs solar panels, is my cousin. (the second sentence becomes a clause set off with commas)"),
        en("Correct the dangling modifier: Walking through the souq, the spices smelled wonderful.", "Model answer: Walking through the souq, Noura smelled the wonderful spices. (the phrase must describe the person who is walking; any correct sentence with a person as the one walking is fine)"),
        en("Combine the three short sentences into one smooth sentence: The oryx is large. The oryx is pale. The oryx lives in the desert.", "Model answer: The large, pale oryx lives in the desert. (adjectives move in front of the noun, and a comma separates the two adjectives)"),
        en("In the sentence The tall guide carried the heavy bags, which words form the noun phrase that is the subject?", "The tall guide (the noun guide with the words that describe it; it names who carried the bags)")
      ]
    },
    {
      area: "wri",
      standards: ["W.9-10.1", "W.9-10.1a", "W.9-10.1b", "W.9-10.1c", "W.9-10.2", "W.9-10.2a", "W.9-10.2c", "W.9-10.3", "W.9-10.3a", "W.9-10.3b", "W.9-10.5"],
      example: exEn(
        "Write a thesis statement for an argument about whether every school in the UAE should have a garden.",
        [
          "Take a clear position: schools should have gardens.",
          "Add the main reason or reasons: students learn about plants and water, and gardens make the school a calmer place.",
          "Put the position and reasons in one sentence."
        ],
        "Every school in the UAE should have a garden, because it teaches students how plants grow with little water and gives them a calm place to learn."
      ),
      items: [
        en("Which sentence could be the thesis of an argument? (a) The metro runs through Dubai. (b) Dubai should extend its metro to every neighbourhood because it would reduce traffic.", "(b). It takes a position that people could agree or disagree with and gives a reason. (a) is a fact."),
        en("Write a thesis statement for an argument about whether the school day should start later.", "A good answer states a clear position and at least one reason in a single sentence. Model: The school day should start later, because students who sleep longer concentrate better in the morning. Answers will vary."),
        en("Which piece of evidence best supports the claim Solar parks are good for the UAE? (a) Many people like them. (b) A large solar park can supply electricity to thousands of homes without burning fuel.", "(b). It is specific, relevant and checkable. (a) is a vague opinion."),
        en("Choose the best transition: Dates are sweet. ____, they are rich in fibre. (However / In addition / Therefore)", "In addition (it adds a second point about dates; however shows contrast and therefore shows a result)"),
        en("Revise in a formal tone: Kids today can't put their phones down, and it's honestly kind of crazy.", "A good answer removes slang and vague words. Model: Many young people find it difficult to stop using their phones, and this concerns their families."),
        en("Plan an argument paragraph: should cars be banned near a school entrance at drop-off time? Write a claim, two reasons with evidence, and a counterclaim with a response.", "A good answer has a clear claim, two different reasons each backed by a fact or example (for example, fewer cars means safer crossing and cleaner air), and a fair counterclaim (parents need a place to drop children) with a response (a drop-off area a short walk away keeps children safe). Answers will vary."),
        en("Write a topic sentence for a body paragraph about how desalination plants make seawater drinkable.", "A good answer names the subject and the point of the paragraph. Model: Desalination plants make seawater drinkable by removing the salt from it. Answers will vary."),
        en("Which sentence is the best conclusion for an informative essay on mangroves? (a) That is all I have to say. (b) In short, mangroves protect the coast, shelter wildlife and store carbon, so looking after them benefits everyone. (c) Also, crabs live there.", "(b). It sums up the main points and leaves the reader with a final idea. (a) adds nothing and (c) introduces a new, unconnected point."),
        en("Revise this sentence with sensory details: The market was busy.", "A good answer adds what can be seen, heard, smelled or felt. Model: The market hummed with voices, and the smell of cardamom and fresh bread drifted between the crowded stalls."),
        en("Plan a narrative. Use this start: Hamdan and his younger brother Salem notice that the lights in their street have gone out for a few minutes one evening. Name the narrator, setting, conflict, main events in order and resolution.", "A good plan names who tells the story, a clear setting, a conflict, three or more events in order and a resolution that solves the conflict. Answers will vary."),
        en("Put these sentences in a logical order for a paragraph: (1) Finally, pour the tea into cups. (2) First, boil the water with the cardamom. (3) Next, add the tea leaves and milk and let them simmer. (4) Karak is a spiced milk tea that many families make at home.", "4, 2, 3, 1. (the topic sentence comes first, then the steps in the order they happen)"),
        en("A draft paragraph argues for more bike lanes but gives only opinions. Name two changes you would make when revising it.", "A good answer includes two of these: add facts or examples as evidence, add a counterclaim with a response, add transitions between ideas, or remove sentences that are off topic.")
      ]
    }
  ]
};
