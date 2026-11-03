// Language Usage practice booklet, Grade 11 expectations. English only. See ma-5.js for the format.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const en = (question, answer) => it(question, answer, question, answer);
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });
const exEn = (question, steps, answer) => ex(question, steps, answer, question, steps, answer);

module.exports = {
  subject: "lu",
  grade: 11,
  framework: "CCSS.ELA",
  englishOnly: true,
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "cps",
      standards: ["L.11-12.2", "L.11-12.2a", "L.11-12.2b"],
      example: exEn(
        "Correct this sentence, using a semicolon: the well known author visited abu dhabi however she stayed only one day",
        [
          "Capital letters for the names of places and for the start of the sentence: Abu Dhabi.",
          "Before a noun, a compound adjective is hyphenated: well-known author.",
          "However joins two complete sentences, so a semicolon goes before it and a comma after it.",
          "End with a full stop."
        ],
        "The well-known author visited Abu Dhabi; however, she stayed only one day."
      ),
      items: [
        en("Choose the correct form: The (well known / well-known) author spoke at the book fair in Sharjah.", "well-known (a compound adjective placed before a noun takes a hyphen; after the noun it would not, as in The author is well known)"),
        en("Punctuate it with a semicolon: Salem packed his bag early however the bus was late.", "Salem packed his bag early; however, the bus was late. (a semicolon joins two complete sentences, and a comma follows the transition however)"),
        en("Add the missing colon: Hind packed three things for the trip a map, a flask of karak and a hat.", "Hind packed three things for the trip: a map, a flask of karak and a hat. (a colon follows a complete sentence and introduces a list)"),
        en("Which spelling is correct: occurence, occurrence or occurance?", "occurrence (two c's and two r's, ending in -ence)"),
        en("Choose the right word: The new metro line will (complement / compliment) the bus routes.", "complement (it means to complete or go well with; a compliment is an expression of praise)"),
        en("Choose the right word: The committee agreed on the (principal / principle) that every member deserves a fair hearing.", "principle (a rule or belief; principal means main, or the head of a school)"),
        en("Correct the punctuation, using American style: Omar described the view from the top of Jebel Jais as \"breathtaking\".", "Omar described the view from the top of Jebel Jais as \"breathtaking.\" (in American style, commas and full stops go inside the closing quotation marks)"),
        en("Show how the titles should be marked: Layla read the article Desert Gardens in the magazine Gulf Science.", "Layla read the article \"Desert Gardens\" in the magazine Gulf Science. (the title of a short work goes in quotation marks; the title of a longer work such as a magazine is in italics, or underlined when handwritten)"),
        en("Choose the correctly hyphenated phrase: (a) a twenty five year old falcon (b) a twenty-five-year-old falcon (c) a twenty-five year old falcon", "(b). When a number and a unit are joined to describe a noun, every part of the compound adjective is linked by hyphens."),
        en("Correct the three spelling mistakes: The goverment made a necesary change to the schedual.", "The government made a necessary change to the schedule. (govern-ment, one c and two s's in necessary, and schedule ends in -ule)"),
        en("Punctuate this list, where some items already contain commas: The exhibition travelled to Abu Dhabi, the capital, Al Ain, the oasis city, and Fujairah, on the east coast.", "The exhibition travelled to Abu Dhabi, the capital; Al Ain, the oasis city; and Fujairah, on the east coast. (semicolons separate the items when the items themselves contain commas)"),
        en("Explain the difference in meaning between these sentences, and say what the hyphen does: (1) Omar re-covered the sofa. (2) Omar recovered the sofa.", "(1) means Omar put a new cover on the sofa, or covered it again. (2) means Omar got the sofa back after it was lost or taken. The hyphen shows the two-part meaning \"cover again\" and separates it from the different word recovered.")
      ]
    },
    {
      area: "gru",
      standards: ["L.11-12.1", "L.11-12.1a", "L.11-12.1b", "L.11-12.3", "L.11-12.3a"],
      example: exEn(
        "Correct the dangling modifier: Walking along the creek, the dhows looked beautiful to Layla.",
        [
          "The opening phrase Walking along the creek must describe the person who is walking.",
          "The dhows are not walking, so Layla must come right after the comma.",
          "Rewrite the main clause with Layla as its subject."
        ],
        "Walking along the creek, Layla thought the dhows looked beautiful."
      ),
      items: [
        en("Choose the right word: The scientist with (who / whom) Hind discussed the project works at a solar park.", "whom (it is the object of the preposition with; test it: Hind discussed the project with her or him)"),
        en("Choose the right word: There were (fewer / less) visitors at the museum this week than last week.", "fewer (use fewer with things you can count, and less with amounts that cannot be counted)"),
        en("Choose the right word: The Hope Probe, (that / which) reached Mars orbit in 2021, is studying the planet's atmosphere.", "which (extra information set off by commas is introduced by which, never by that)"),
        en("Correct the parallel structure: Hamdan likes swimming, to cycle and playing football.", "Hamdan likes swimming, cycling and playing football. (all items in a list should have the same form)"),
        en("Correct the parallel structure: The trip was both educational and it was fun.", "The trip was both educational and fun. (the words after both and and must be the same kind of word or phrase)"),
        en("Choose the right verb: The collection of rare coins (is / are) on display at the museum.", "is (the subject is the singular noun collection; of rare coins is only a phrase that describes it)"),
        en("Which sentence is parallel? (a) The camp taught us to read maps, to pitch tents and cooking meals. (b) The camp taught us to read maps, to pitch tents and to cook meals.", "(b). Every item in the series has the same form (to plus a verb)."),
        en("Correct the faulty comparison: The metro's route is longer than the tram.", "The metro's route is longer than the tram's. or: ...longer than that of the tram. (a route should be compared with a route, not with a vehicle)"),
        en("Revise for concision without changing the meaning: At this point in time, the museum is in the process of expanding its collection.", "Model answer: The museum is expanding its collection. (the wordy phrases at this point in time and is in the process of add nothing)"),
        en("Combine the two sentences into one, using a relative clause: Noura visited the Louvre Abu Dhabi. It opened in 2017.", "Model answer: Noura visited the Louvre Abu Dhabi, which opened in 2017. (any correct single sentence that keeps both ideas is fine)"),
        en("Fix the comma splice in three different ways: The souq opens at nine, Salem arrived early.", "Any three of these: The souq opens at nine; Salem arrived early. / The souq opens at nine. Salem arrived early. / The souq opens at nine, and Salem arrived early. / Although the souq opens at nine, Salem arrived early. (a comma alone cannot join two complete sentences)"),
        en("Rewrite the sentence so that it is in the active voice, then say which version a writer might choose if the doer is not important: The solar park was completed in the spring.", "Active version, with an invented doer: Engineers completed the solar park in the spring. A writer might keep the passive version when the doer is unknown or less important than the result. (both choices are correct; the style depends on what the writer wants to emphasise)")
      ]
    },
    {
      area: "wri",
      standards: ["W.11-12.1", "W.11-12.1a", "W.11-12.1b", "W.11-12.1c", "W.11-12.1e", "W.11-12.2", "W.11-12.2a", "W.11-12.2c", "W.11-12.2d", "W.11-12.3", "W.11-12.3a", "W.11-12.3b", "W.11-12.5"],
      example: exEn(
        "Improve this thesis so that it is more precise and takes the opposing view into account: Cycling lanes are good.",
        [
          "Say exactly what is being claimed: new cycling lanes should be built in UAE cities.",
          "Give the main reason: they cut traffic and keep people healthy.",
          "Recognise the other side with although: some drivers worry about losing road space.",
          "Join these in one sentence."
        ],
        "Although some drivers worry about losing road space, UAE cities should build more cycling lanes because they reduce traffic and encourage healthy daily exercise."
      ),
      items: [
        en("Which thesis is more nuanced? (a) Social media is bad. (b) Although social media helps students keep in touch with family, schools should teach them to limit its use because constant notifications reduce focus.", "(b). It takes a clear position, gives a reason and admits a fair point on the other side. (a) is vague and one-sided."),
        en("Write a thesis statement for an essay arguing that more shaded walkways should be built in your city. It should state a clear position and acknowledge an opposing view.", "A good answer has a precise claim, a main reason, and a fair mention of the other side. Model: Although shaded walkways cost money to build, our city should add more of them because they make walking safer and more comfortable in the summer heat. Answers will vary."),
        en("Write a counterclaim and a rebuttal for this claim: School should start later in the morning.", "A good answer states a fair opposing view and answers it with a reason or evidence. Model: Some people say a later start would make the school day end too late for after-school activities. However, the day could be kept the same length by shortening the breaks, and students who sleep longer concentrate better. Answers will vary."),
        en("Choose the best transition: Desalination provides fresh water for homes and farms. ____, it uses a great deal of energy. (Similarly / Nevertheless / For instance / Consequently)", "Nevertheless (the second sentence adds a drawback, so a transition showing contrast is needed)"),
        en("Which sentence introduces a source better? (a) \"Oryx numbers have risen steadily.\" (b) The reserve's annual report notes, \"Oryx numbers have risen steadily.\"", "(b). A signal phrase tells the reader where the quotation comes from. Quotations should be introduced and attributed, not dropped in alone."),
        en("Write a topic sentence for an informative paragraph about how the Hope Probe studies the atmosphere of Mars.", "A good answer names the topic and prepares the reader for the details. Model: The Hope Probe studies the Martian atmosphere by using its instruments to measure how the weather changes throughout the day and across the seasons. Answers will vary."),
        en("Put these sentences in a logical order to explain how desalination works. (A) Seawater is drawn in from the Gulf. (B) Fresh water is piped to homes. (C) Pressure pushes the seawater through membranes that hold back the salt. (D) The fresh water is tested to make sure it is safe.", "A, C, D, B (water is drawn in, filtered, tested, and only then delivered)"),
        en("Revise for precise language and a formal tone: Lots of people think the new park is kind of awesome.", "Model answer: Many residents consider the new park an impressive addition to the neighbourhood. (a good answer removes slang and vague words and keeps the meaning)"),
        en("Write the opening of a narrative that engages the reader and sets the scene. The narrator is Maryam, who is hiking in the Hajar Mountains with her father and her cousins.", "A good answer puts the reader in a clear setting and introduces the narrator and the situation with sensory details. Model: The path above the wadi was loose gravel, and every step sent small stones clattering down the slope below us. Papa led the way, my cousins joked in a line after him, and I held tight to the water bottle, because I was sure the real adventure was about to begin. Answers will vary."),
        en("Name the narrative technique: A story set in Dubai in the present day stops to show, in a few paragraphs, a scene from the narrator's childhood in Fujairah, and then returns to the present.", "A flashback (it moves back in time to give background, then returns to the main timeline)"),
        en("Which concluding sentence best ends an argument essay on building more public libraries? (a) That is all I have to say. (b) In short, public libraries give every family free access to knowledge, and a city that invests in them invests in its future. (c) Another point is that some libraries sell coffee.", "(b). It restates the position, ties it to a larger meaning, and does not add a new, unrelated point. (a) is empty and (c) brings in an unrelated idea."),
        en("Revise this message for a parent newsletter so that the tone suits the audience and purpose: \"Yo, the museum trip is gonna be epic, so bring some cash.\"", "A good answer is polite, clear and formal, and gives the reader what they need to know. Model: Our class trip to the museum is coming up, and students are asked to bring money for lunch. Answers will vary.")
      ]
    }
  ]
};
