// Language Usage practice booklet, Grade 9 expectations. English only. See ma-5.js for the format.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const en = (question, answer) => it(question, answer, question, answer);
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });
const mc = (qEn, optsEn, correct, whyEn) => ({ q: T(qEn, qEn), a: T(whyEn, whyEn), options: { en: optsEn, ar: optsEn }, correct });
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
        mc("Which sentence correctly joins two complete sentences?", ["The metro was quiet this morning, and, the platforms were almost empty.","The metro was quiet this morning the platforms, were almost empty.","The metro was quiet this morning; the platforms were almost empty.","The metro was quiet this morning; the, platforms were almost empty."], 2, "C. A semicolon can join two complete sentences that are closely related; a comma alone cannot. If your child chose A, they added extra commas around 'and' that do not belong; if they chose B, they left out any mark between the two sentences."),
        en("Add the colon: Noura packed three items for the trip water, dates and a map.", "Noura packed three items for the trip: water, dates and a map. A colon follows a complete sentence and introduces a list. Ask: can the words before the colon stand alone as a sentence?"),
        en("Punctuate it with a semicolon and a comma: The road was closed however Omar arrived on time.", "The road was closed; however, Omar arrived on time. A semicolon comes before the transition word and a comma comes after it. Ask: could each side of the semicolon stand alone as a sentence?"),
        mc("Choose the correct form: Khalid is a ____ falcon trainer.", ["well-known","well known","well-knowned","wellknown"], 0, "A. Two words that work together as one adjective before a noun take a hyphen: well-known. If your child chose B, they left out the hyphen, which is only right when the words come after the noun."),
        en("Add the hyphens that are needed: Layla is a twelve year old student.", "Layla is a twelve-year-old student. The hyphens join words that work together as one adjective before the noun. Ask: do the three words need to stay together to give her age?"),
        en("Add the commas that are needed: The Hope Probe which was launched in 2020 reached Mars in 2021.", "The Hope Probe, which was launched in 2020, reached Mars in 2021. The commas set off extra information that can be removed without changing the main meaning. Ask: if you cover the middle part, does the sentence still work?"),
        mc("Which spelling is correct?", ["occurence","occurrence","occurance","ocurrence"], 1, "B. Occurrence has two c's and two r's, and ends in -ence. If your child chose A, they wrote only one r; if they chose C, they used the ending -ance."),
        mc("Which word completes the sentence? The school ____ welcomed the visitors to the science fair.", ["principle","principals","principally","principal"], 3, "D. Principal is the head of a school, while a principle is a rule or a basic idea. If your child chose A, they used 'principle', which sounds the same but means a rule."),
        en("Correct the capital letters: my cousin maryam studies spanish and science at a school in abu dhabi.", "My cousin Maryam studies Spanish and science at a school in Abu Dhabi. Names, languages, places and the first word of a sentence take capitals, but a subject such as science does not. Ask: which words are names of people, languages or places?"),
        en("Punctuate it: Hamdan asked Where is the map", "Hamdan asked, \"Where is the map?\" A comma comes before the quotation, the speech begins with a capital letter, and the question mark sits inside the quotation marks. Ask: which words did Hamdan say aloud?"),
        en("Explain what is wrong with this sentence and correct it: Omar packed: water, dates and a map.", "Omar packed water, dates and a map. A colon should follow a complete sentence, and 'Omar packed' is not complete, so no colon is needed. Ask: can 'Omar packed' stand alone as a sentence?")
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
        mc("Which sentence has a parallel list?", ["Maryam likes swimming, to hike and riding bikes.","Maryam likes swimming, hiking and riding bikes.","Maryam likes to swim, hiking and riding bikes.","Maryam likes swimming, hike and to ride bikes."], 1, "B. All three items use the -ing form, so the list is parallel. If your child chose A, they mixed 'swimming' with 'to hike'; if they chose C, they mixed 'to swim' with -ing words."),
        en("Make the three actions parallel by using base verbs after to: The guide told us to wear a hat, bring water and that we should stay together.", "The guide told us to wear a hat, bring water and stay together. Each action now begins with a base verb, so the list is parallel. Ask: does each part sound the same when you read the list aloud?"),
        mc("In the sentence Having finished the project, Salem went home, what is the phrase Having finished the project?", ["A prepositional phrase that describes home","A participial phrase that describes Salem","An absolute phrase with its own subject","A dependent clause that describes project"], 1, "B. The phrase starts with a verb form used as an adjective, and it describes Salem, who finished the project. If your child chose C, they thought it had its own subject, but 'Salem' belongs to the main sentence."),
        mc("Which group of words is the prepositional phrase? The falcon landed on the old wooden post.", ["on the old wooden post","The falcon landed","landed on","the old wooden"], 0, "A. 'On' is the preposition, followed by its object 'post' and the words that describe it. If your child chose C, they stopped at 'landed on' and left out the object."),
        en("Name the absolute phrase: The sun setting over the dunes, the family packed the car.", "The sun setting over the dunes. It is a noun with a participle phrase, it has its own subject, and it adds a detail to the whole sentence instead of describing one word. Ask: does this part have its own subject? It does."),
        mc("Which part is the dependent clause? Because the heat was rising, the guide ended the tour.", ["the guide ended the tour","ended the tour","Because the heat was rising","the heat was rising, the guide"], 2, "C. 'Because the heat was rising' has a subject and a verb but cannot stand alone as a sentence. If your child chose A, they picked the main clause, which can stand alone."),
        mc("Which group of words is the adverbial clause? We will visit the creek after the rain stops.", ["We will visit the creek","after the rain stops","visit the creek after","the creek after the rain"], 1, "B. 'After the rain stops' tells when the visit will happen, so it works like an adverb. If your child chose A, they picked the main clause, which does not tell when."),
        en("Combine the sentences with a clause that begins with who: Hind is my cousin. Hind designs solar panels.", "Model: Hind, who designs solar panels, is my cousin. The second sentence becomes a clause set off with commas. Ask: does your new sentence still say both facts, and are the commas in place?"),
        en("Correct the dangling modifier: Walking through the souq, the spices smelled wonderful.", "Model: Walking through the souq, Noura smelled the wonderful spices. The opening phrase must describe the person who is walking. Ask: who is walking through the souq? Any correct sentence with a person as the walker is fine."),
        en("Combine the three short sentences into one smooth sentence: The oryx is large. The oryx is pale. The oryx lives in the desert.", "Model: The large, pale oryx lives in the desert. The adjectives move in front of the noun, and a comma separates the two adjectives. Ask: could you say 'pale and large' as well? If so, the comma belongs."),
        en("In the sentence The tall guide carried the heavy bags, which words form the noun phrase that is the subject?", "The tall guide. It is the noun 'guide' with the words that describe it, and it names who carried the bags. Ask: who carried the bags? The words that answer form the noun phrase.")
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
        mc("Which sentence could be the thesis of an argument?", ["The metro runs through Dubai.","Dubai has many metro stations.","The metro opened in 2009.","Dubai should extend its metro to every neighbourhood because it would reduce traffic."], 3, "D. A thesis takes a position people could agree or disagree with and gives a reason. If your child chose A, they picked a fact, which can be checked but not argued."),
        en("Write a thesis statement for an argument about whether the school day should start later.", "A good answer states a clear position and at least one reason in a single sentence. Model: The school day should start later, because students who sleep longer concentrate better in the morning. Answers will vary. Ask: what is your reason, and is it in the same sentence?"),
        mc("Which piece of evidence best supports the claim Solar parks are good for the UAE?", ["A large solar park can supply electricity to thousands of homes without burning fuel.","Many people like them.","Solar parks are very big.","Some people have seen one."], 0, "A. The best evidence is specific, relevant and checkable, such as supplying electricity to thousands of homes. If your child chose B, they picked 'many people like them', an opinion that proves nothing."),
        mc("Choose the best transition: Dates are sweet. ____, they are rich in fibre.", ["However","In addition","Therefore","Instead"], 1, "B. 'In addition' adds a second point about dates. If your child chose A, they used 'However', which shows contrast; if they chose C, they used 'Therefore', which shows a result."),
        en("Revise in a formal tone: Kids today can't put their phones down, and it's honestly kind of crazy.", "A good answer removes slang and vague words. Model: Many young people find it difficult to stop using their phones, and this concerns their families. Ask: which words sound too casual, and what could replace them?"),
        en("Plan an argument paragraph: should cars be banned near a school entrance at drop-off time? Write a claim, two reasons with evidence, and a counterclaim with a response.", "A good answer has a clear claim, two different reasons each backed by a fact or example (for example, fewer cars means safer crossing and cleaner air), and a fair counterclaim (parents need a place to drop children) with a response (a drop-off area a short walk away keeps children safe). Answers will vary. Ask: what evidence backs each reason?"),
        en("Write a topic sentence for a body paragraph about how desalination plants make seawater drinkable.", "A good answer names the subject and the point of the paragraph. Model: Desalination plants make seawater drinkable by removing the salt from it. Answers will vary. Ask: does the sentence tell the reader what this paragraph will explain?"),
        mc("Which sentence is the best conclusion for an informative essay on mangroves?", ["That is all I have to say.","Also, crabs live there.","In short, mangroves protect the coast, shelter wildlife and store carbon, so looking after them benefits everyone.","Mangroves are a kind of tree."], 2, "C. A good conclusion sums up the main points and leaves the reader with a final idea. If your child chose B, they added a new, unconnected fact about crabs; if they chose A, they said nothing about the topic."),
        en("Revise this sentence with sensory details: The market was busy.", "A good answer adds what can be seen, heard, smelled or felt. Model: The market hummed with voices, and the smell of cardamom and fresh bread drifted between the crowded stalls. Ask: which of your five senses did you use?"),
        en("Plan a narrative. Use this start: Hamdan and his younger brother Salem notice that the lights in their street have gone out for a few minutes one evening. Name the narrator, setting, conflict, main events in order and resolution.", "A good plan names who tells the story, a clear setting, a conflict, three or more events in order and a resolution that solves the conflict. Answers will vary. Ask: what problem do the brothers face, and how is it solved?"),
        mc("Which order makes a logical paragraph? (1) Finally, pour the tea into cups. (2) First, boil the water with the cardamom. (3) Next, add the tea leaves and milk and let them simmer. (4) Karak is a spiced milk tea that many families make at home.", ["2, 3, 1, 4","4, 3, 2, 1","1, 2, 3, 4","4, 2, 3, 1"], 3, "D. The topic sentence comes first, then the steps in the order they happen: boil, add tea, pour. If your child chose C, they used the numbers in order instead of the order that makes sense."),
        en("A draft paragraph argues for more bike lanes but gives only opinions. Name two changes you would make when revising it.", "A good answer includes two of these: add facts or examples as evidence, add a counterclaim with a response, add transitions between ideas, or remove sentences that are off topic. Ask: which sentences are only opinions, and what fact could back each one?")
      ]
    }
  ]
};
