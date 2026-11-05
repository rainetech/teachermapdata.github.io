// Language Usage practice booklet, Grade 11 expectations. English only. See ma-5.js for the format.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const en = (question, answer) => it(question, answer, question, answer);
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });
const mc = (qEn, optsEn, correct, whyEn) => ({ q: T(qEn, qEn), a: T(whyEn, whyEn), options: { en: optsEn, ar: optsEn }, correct });
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
        mc("Choose the correct form: The ____ author spoke at the book fair in Sharjah.", ["well known","well-known","well- known","wellknown"], 1, "B. A compound adjective placed before a noun takes a hyphen, as in well-known author. After the noun it has none, as in The author is well known. If your child chose A, they left the hyphen out."),
        en("Punctuate it with a semicolon: Salem packed his bag early however the bus was late.", "Salem packed his bag early; however, the bus was late. A semicolon joins two complete sentences, and a comma follows however. Ask: can each half stand alone as a sentence?"),
        en("Add the missing colon: Hind packed three things for the trip a map, a flask of karak and a hat.", "Hind packed three things for the trip: a map, a flask of karak and a hat. A colon follows a complete sentence and introduces a list. Ask: does the part before the colon make sense on its own?"),
        mc("Which spelling is correct?", ["occurence","occurrance","occurance","occurrence"], 3, "D. Occurrence has two c's and two r's and ends in ence. If your child chose B or C, they ended it with ance. If they chose A, they used only one r."),
        mc("Choose the right word: The new metro line will ____ the bus routes.", ["complement","compliment","complementary","complimentary"], 0, "A. Complement is the verb meaning to complete or go well with, which fits the metro and the buses. If your child chose B, they used compliment, which means praise."),
        mc("Choose the right word: The committee agreed on the ____ that every member deserves a fair hearing.", ["principal","principals","principle","principles"], 2, "C. Principle means a rule or belief, and that is what a fair hearing is. If your child chose A, they used principal, which means main or the head of a school."),
        en("Correct the punctuation, using American style: Omar described the view from the top of Jebel Jais as \"breathtaking\".", "Omar described the view from the top of Jebel Jais as \"breathtaking.\" In American style, commas and full stops go inside the closing quotation marks. Ask: does the full stop sit inside or outside the quotation marks?"),
        en("Show how the titles should be marked: Layla read the article Desert Gardens in the magazine Gulf Science.", "Layla read the article \"Desert Gardens\" in the magazine Gulf Science. A short work gets quotation marks, and a longer work such as a magazine is in italics, or underlined when handwritten. Ask: is each title a short piece or a whole publication?"),
        mc("Which phrase is hyphenated correctly?", ["a twenty five year old falcon","a twenty-five-year-old falcon","a twenty-five year old falcon","a twenty five-year-old falcon"], 1, "B. Every part of the compound adjective is joined by hyphens: twenty-five-year-old. If your child chose A, they left the hyphens out. If they chose C or D, they hyphenated only some of the parts."),
        en("Correct the three spelling mistakes: The goverment made a necesary change to the schedual.", "The government made a necessary change to the schedule. Say the tricky parts: govern-ment, one c and two s's in necessary, and schedule ends in ule. Ask: can you sound out each word in parts?"),
        en("Punctuate this list, where some items already contain commas: The exhibition travelled to Abu Dhabi, the capital, Al Ain, the oasis city, and Fujairah, on the east coast.", "The exhibition travelled to Abu Dhabi, the capital; Al Ain, the oasis city; and Fujairah, on the east coast. Semicolons separate the items when the items themselves contain commas. Ask: which commas belong inside an item?"),
        en("Explain the difference in meaning between these sentences, and say what the hyphen does: (1) Omar re-covered the sofa. (2) Omar recovered the sofa.", "Sentence 1 means Omar put a new cover on the sofa. Sentence 2 means Omar got the sofa back after it was lost or taken. The hyphen shows the two-part meaning cover again and keeps it apart from the word recovered. Ask: which sentence is about a new cover?")
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
        mc("Choose the right word: The scientist with ____ Hind discussed the project works at a solar park.", ["who","whose","which","whom"], 3, "D. Whom is the object of the preposition with. Test it: Hind discussed the project with her or him. If your child chose A, they used who, which is for the doer of an action."),
        mc("Choose the right word: There were ____ visitors at the museum this week than last week.", ["less","fewer","fewest","lesser"], 1, "B. Use fewer with things you can count, such as visitors. If your child chose A, they used less, which is for amounts you cannot count."),
        mc("Choose the right word: The Hope Probe, ____ reached Mars orbit in 2021, is studying the planet's atmosphere.", ["which","that","who","whose"], 0, "A. Extra information set off by commas is introduced by which, not that. If your child chose B, they used that, which only fits information the sentence needs."),
        en("Correct the parallel structure: Hamdan likes swimming, to cycle and playing football.", "Hamdan likes swimming, cycling and playing football. All items in a list should have the same form, here the -ing form. Ask: do all three activities end in -ing?"),
        en("Correct the parallel structure: The trip was both educational and it was fun.", "The trip was both educational and fun. The words after both and and must be the same kind of word, here two describing words. Ask: do both words after both and and describe the trip in the same way?"),
        mc("Choose the right verb: The collection of rare coins ____ on display at the museum.", ["are","were","is","been"], 2, "C. The subject is the singular noun collection, so the verb is is. If your child chose A, they matched the verb to coins instead. If they chose B, they used were, which is also plural."),
        en("Which sentence is parallel? (a) The camp taught us to read maps, to pitch tents and cooking meals. (b) The camp taught us to read maps, to pitch tents and to cook meals.", "(b). Every item in the series has the same form, to plus a verb. Sentence (a) switches to cooking meals in the last item. Ask: does each item start the same way?"),
        mc("Which sentence compares two things of the same kind?", ["The metro's route is longer than the tram.","The metro's route is longer than the trams.","The metro's route is longer than the tram's.","The metro's route is longer than tram route."], 2, "C. The tram's means the tram's route, so a route is compared with a route. If your child chose A, they compared a route with a vehicle, which are different kinds of thing."),
        en("Revise for concision without changing the meaning: At this point in time, the museum is in the process of expanding its collection.", "Model answer: The museum is expanding its collection. The wordy phrases at this point in time and is in the process of add nothing. Ask: which words can come out without changing the meaning?"),
        en("Combine the two sentences into one, using a relative clause: Noura visited the Louvre Abu Dhabi. It opened in 2017.", "Model answer: Noura visited the Louvre Abu Dhabi, which opened in 2017. Any correct single sentence that keeps both ideas is fine. Ask: does your sentence keep both ideas and read smoothly?"),
        en("Fix the comma splice in three different ways: The souq opens at nine, Salem arrived early.", "Any three of these: The souq opens at nine; Salem arrived early. / The souq opens at nine. Salem arrived early. / The souq opens at nine, and Salem arrived early. / Although the souq opens at nine, Salem arrived early. A comma alone cannot join two complete sentences. Ask: why does a comma alone not work?"),
        en("Rewrite the sentence so that it is in the active voice, then say which version a writer might choose if the doer is not important: The solar park was completed in the spring.", "Active version, with an invented doer: Engineers completed the solar park in the spring. A writer might keep the passive when the doer is unknown or less important than the result. Both choices are correct. Ask: who did the work, and does that matter here?")
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
        mc("Which thesis is the most precise and takes the other side into account?", ["Social media is bad.","Social media is used by many students.","Although social media helps students keep in touch with family, schools should teach them to limit its use because constant notifications reduce focus.","Social media is bad because it is not good for students."], 2, "C. It takes a clear position, gives a reason and admits a fair point from the other side. If your child chose A or D, they picked a vague opinion. If they chose B, they stated a fact, not a position."),
        en("Write a thesis statement for an essay arguing that more shaded walkways should be built in your city. It should state a clear position and acknowledge an opposing view.", "A good answer has a precise claim, a main reason, and a fair mention of the other side. Model: Although shaded walkways cost money to build, our city should add more of them because they make walking safer and more comfortable in the summer heat. Answers will vary. Ask: what is the other side, and how do you answer it?"),
        en("Write a counterclaim and a rebuttal for this claim: The school day should start later in the morning.", "A good answer states a fair opposing view and answers it with a reason or evidence. Model: Some people say a later start would make the school day end too late for after-school activities. However, the day could be kept the same length by shortening the breaks, and students who sleep longer concentrate better. Answers will vary. Ask: what would someone who disagrees say?"),
        mc("Choose the best transition: Desalination provides fresh water for homes and farms. ____, it uses a great deal of energy.", ["Nevertheless","Similarly","For instance","Consequently"], 0, "A. Nevertheless shows contrast, and the second sentence adds a drawback. If your child chose B, similarly adds a matching idea instead. If they chose D, consequently shows a result, not a drawback."),
        mc("Which sentence introduces the quotation best?", ["\"Oryx numbers have risen steadily.\"","Oryx numbers have risen steadily. \"The reserve's annual report.\"","The reserve's annual report \"Oryx numbers have risen steadily.\"","The reserve's annual report notes, \"Oryx numbers have risen steadily.\""], 3, "D. A signal phrase such as The reserve's annual report notes, with a comma, tells the reader where the quotation comes from. If your child chose A, they dropped the quotation in with no source."),
        en("Write a topic sentence for an informative paragraph about how the Hope Probe studies the atmosphere of Mars.", "A good answer names the topic and prepares the reader for the details. Model: The Hope Probe studies the Martian atmosphere by using its instruments to measure how the weather changes throughout the day and across the seasons. Answers will vary. Ask: what will the reader learn next?"),
        mc("Which order best explains how desalination works? (A) Seawater is drawn in from the Gulf. (B) Fresh water is piped to homes. (C) Pressure pushes the seawater through membranes that hold back the salt. (D) The fresh water is tested to make sure it is safe.", ["A, B, C, D","A, D, C, B","C, A, D, B","A, C, D, B"], 3, "D. Water is drawn in, pushed through membranes, tested, and only then delivered to homes. If your child chose A, they delivered the water before filtering and testing it. If they chose B, they tested it before filtering."),
        en("Revise for precise language and a formal tone: Lots of people think the new park is kind of awesome.", "Model answer: Many residents consider the new park an impressive addition to the neighbourhood. A good answer removes slang and vague words and keeps the meaning. Ask: which words sound too casual, and what could replace them?"),
        en("Write the opening of a narrative that engages the reader and sets the scene. The narrator is Maryam, who is hiking in the Hajar Mountains with her father and her cousins.", "A good answer puts the reader in a clear setting and introduces the narrator and the situation with sensory details. Model: The path above the wadi was loose gravel, and every step sent small stones clattering down the slope below us. Papa led the way, my cousins joked in a line after him, and I held tight to the water bottle, because I was sure the real adventure was about to begin. Answers will vary. Ask: what can the reader see and hear?"),
        en("Name the narrative technique: A story set in Dubai in the present day stops to show, in a few paragraphs, a scene from the narrator's childhood in Fujairah, and then returns to the present.", "A flashback. It moves back in time to give background, then returns to the main timeline. Ask: does the story jump to an earlier time and then come back?"),
        mc("Which concluding sentence best ends an argument essay on building more public libraries?", ["That is all I have to say.","Another point is that some libraries sell coffee.","In short, public libraries give every family free access to knowledge, and a city that invests in them invests in its future.","Libraries have books, and also chairs."], 2, "C. It restates the position and ties it to a larger meaning without adding a new, unrelated point. If your child chose A, they ended with no message. If they chose B, they added a new point that does not belong."),
        en("Revise this message for a parent newsletter so that the tone suits the audience and purpose: \"Yo, the museum trip is gonna be epic, so bring some cash.\"", "A good answer is polite, clear and formal, and gives the reader what they need to know. Model: Our class trip to the museum is coming up, and students are asked to bring money for lunch. Answers will vary. Ask: who is reading this, and does the tone suit them?")
      ]
    }
  ]
};
