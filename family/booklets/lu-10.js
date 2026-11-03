// Language Usage practice booklet, Grade 10 expectations. English only. See ma-5.js for the format.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const en = (question, answer) => it(question, answer, question, answer);
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });
const exEn = (question, steps, answer) => ex(question, steps, answer, question, steps, answer);

module.exports = {
  subject: "lu",
  grade: 10,
  framework: "CCSS.ELA",
  englishOnly: true,
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "cps",
      standards: ["L.9-10.2", "L.9-10.2a", "L.9-10.2b", "L.9-10.2c"],
      example: exEn(
        "Punctuate it: The souq opens at nine however Maryam arrived at eight",
        [
          "There are two complete sentences: The souq opens at nine and Maryam arrived at eight.",
          "However is a conjunctive adverb joining them, so a semicolon goes before it and a comma after it.",
          "Finish with a full stop."
        ],
        "The souq opens at nine; however, Maryam arrived at eight."
      ),
      items: [
        en("Punctuate it: The metro was delayed this morning however Hamdan still reached school on time.", "The metro was delayed this morning; however, Hamdan still reached school on time. (a semicolon before the conjunctive adverb, a comma after it)"),
        en("Join the two sentences with a semicolon and no other word: Layla loves astronomy. Her brother prefers robotics.", "Layla loves astronomy; her brother prefers robotics. (a semicolon joins two closely related complete sentences)"),
        en("Add the colon: Salem packed three items for the desert trip a water bottle, a hat, and sunscreen.", "Salem packed three items for the desert trip: a water bottle, a hat, and sunscreen. (a colon follows a complete sentence that introduces a list)"),
        en("Which sentence is punctuated correctly? (a) The recipe calls for: dates, flour, and butter. (b) The recipe calls for dates, flour, and butter.", "(b). A colon should not come straight after a verb such as calls for; it follows a complete sentence."),
        en("A complete sentence introduces the quotation, so add a colon: Noura read the sign aloud \"Please keep the beach clean.\"", "Noura read the sign aloud: \"Please keep the beach clean.\" (a colon after a complete sentence introduces the quotation)"),
        en("Explain why the comma is wrong in this sentence, and give one way to fix it: The creek was calm, the boats rocked gently.", "Two complete sentences are joined only by a comma (a comma splice). Fixes: use a semicolon (The creek was calm; the boats rocked gently), a full stop, or a comma with a joining word such as and."),
        en("Choose the right word: The committee will (accept / except) the award on behalf of the school.", "accept (a verb meaning to receive; except means to leave out)"),
        en("Choose the right word: The new dhow is faster (than / then) the old ferry.", "than (used in comparisons; then refers to time)"),
        en("Choose the right word: The school (principal / principle) welcomed the visitors at the gate.", "principal (the head of a school; a principle is a rule or belief)"),
        en("Choose the right word: Omar and Khalid left (their / there / they're) bags at the gate.", "their (it shows that the bags belong to them)"),
        en("Which spelling is correct: occurence, occurrence or occurance?", "occurrence (two c's and two r's)"),
        en("Correct the apostrophe: The childrens books were left on the metro.", "The children's books were left on the metro. (children is already plural, so the possessive adds 's)")
      ]
    },
    {
      area: "gru",
      standards: ["L.9-10.1", "L.9-10.1a", "L.9-10.1b", "L.9-10.3"],
      example: exEn(
        "Make the list parallel: Salem likes hiking, to swim, and riding camels.",
        [
          "The list has three activities, so each should have the same form.",
          "Hiking and riding camels are -ing forms; to swim is not.",
          "Change to swim into swimming."
        ],
        "Salem likes hiking, swimming, and riding camels."
      ),
      items: [
        en("Make the list parallel using -ing forms: Hind enjoys reading, painting, and to play chess.", "Hind enjoys reading, painting, and playing chess. (all three items have the same form)"),
        en("Name the appositive: Maryam, a marine biologist, studies the mangroves.", "a marine biologist (a noun phrase that renames Maryam)"),
        en("Name the dependent clause and say what kind it is: Because the road flooded, the bus was late.", "Because the road flooded; an adverbial clause (it tells why the bus was late and cannot stand alone as a sentence)"),
        en("Combine the sentences with a relative clause: The Hope Probe reached Mars. It was launched from Japan.", "Model answer: The Hope Probe, which was launched from Japan, reached Mars. (any correct sentence that turns the second sentence into a who or which clause is fine)"),
        en("Name the mood of the verb: If the metro were free, more people would ride it.", "Subjunctive (were is used for a situation that is imagined or contrary to fact)"),
        en("Choose the right verb: The teacher suggested that Khalid (study / studies) the map tonight.", "study (after a verb of suggestion or request, the subjunctive uses the base form)"),
        en("Change to the active voice: The report was written by Noura and Hind.", "Noura and Hind wrote the report. (the doer of the action becomes the subject)"),
        en("Combine these short sentences into one varied sentence: The market opened. It was busy. People bought spices.", "Model answer: When the market opened, it was busy with people buying spices. (any smooth, correct sentence that keeps all three ideas is fine)"),
        en("Choose the right verb: The collection of old dates (is / are) on the table.", "is (the subject is collection, which is singular; of old dates is a phrase that does not change it)"),
        en("Correct the tense shift in this story, which is told in the past tense: Hamdan opened the door and sees the falcon.", "Hamdan opened the door and saw the falcon. (both verbs stay in the past tense)"),
        en("Choose the right word: The woman to (who / whom) Noura gave the map was a teacher.", "whom (it is the object of the preposition to; test it: Noura gave the map to her)"),
        en("Explain what is wrong with this sentence and rewrite it: Running to catch the metro, Hind's bag fell open.", "The opening phrase seems to describe the bag, but it was Hind who was running (a dangling modifier). Model: Running to catch the metro, Hind felt her bag fall open. or As Hind ran to catch the metro, her bag fell open.")
      ]
    },
    {
      area: "wri",
      standards: ["W.9-10.1", "W.9-10.1a", "W.9-10.1b", "W.9-10.2", "W.9-10.2a", "W.9-10.3", "W.9-10.3a", "W.9-10.5"],
      example: exEn(
        "Plan an argument paragraph: should schools in the UAE offer a coding class to every student? Write a claim, two reasons and a counterclaim with a response.",
        [
          "Claim: Every school in the UAE should offer a coding class.",
          "Reason 1: coding builds problem-solving skills that help in many subjects.",
          "Reason 2: many future jobs will use digital skills.",
          "Counterclaim: the timetable is already full. Response: a short weekly lesson can replace time spent on repeated practice."
        ],
        "Claim: Every school should offer coding. Reasons: it builds problem-solving skills, and many future jobs use digital skills. Counterclaim: the timetable is full. Response: a short weekly lesson can replace repeated practice."
      ),
      items: [
        en("Which sentence is a claim that can be argued? (a) The Dubai Metro opened in 2009. (b) Cities in the UAE should build more cycling lanes.", "(b). It states a position that people could agree or disagree with. (a) is a fact."),
        en("Make this claim more precise: Solar parks are good.", "A good answer names who or what and gives a specific position. Model: Solar parks should supply more of the UAE's electricity because they cut pollution and use a resource the country has in abundance."),
        en("Write a counterclaim and a response for this claim: School should start an hour later.", "A good answer states a fair opposing view and answers it with a reason. Model: Some people say a later start means a later finish to the day. However, students who sleep longer concentrate better, so the later finish is worth it."),
        en("Plan it: you will argue that your neighbourhood should use the metro more than cars. List a claim, two reasons with evidence, and a counterclaim with a response.", "A good answer has a clear claim, two different reasons each backed by a fact or example (for example, the metro avoids traffic and costs less than fuel and parking), and a fair counterclaim (stations may be far from home) with a response (feeder buses and walking routes connect to stations). Answers will vary."),
        en("Choose the best transition to add a second reason: The metro is cheaper than driving. ____, it avoids traffic. (However / In addition / Therefore)", "In addition (it adds one more reason; However shows contrast and Therefore shows a result)"),
        en("Revise in a formal style: Kids these days spend way too much time on their phones, which is kind of a big deal.", "Model: Young people spend a great deal of time on their phones, which is a serious concern. (a good answer removes slang and vague phrases)"),
        en("Revise to remove wordiness: In my personal opinion, I believe that the library should be open in the evenings as well.", "Model: The library should be open in the evenings. (or: I believe the library should be open in the evenings.) The meaning is kept in fewer words."),
        en("Write an introductory sentence for an informative essay about how desalination provides drinking water in the UAE.", "A good answer names the topic and prepares the reader for what follows. Model: Desalination plants along the UAE coast remove salt from seawater to provide much of the country's drinking water."),
        en("Which detail best supports the topic sentence Falcons are skilled hunters? (a) Falcons are often seen at desert camps. (b) A falcon can spot small prey from far away and dive at great speed. (c) Many families care for falcons.", "(b). It gives a fact that shows why falcons hunt well. (a) and (c) are about where falcons are seen or who keeps them."),
        en("Revise this sentence with sensory details instead of naming the feeling: The evening was peaceful.", "A good answer uses sights, sounds or actions. Model: A soft breeze moved the palm leaves, and the sky over the creek turned the colour of ripe apricots."),
        en("Plan a narrative. Fill in a planner with a narrator, a setting, a conflict, the main events in order, and a resolution. Use this start: Noura and her cousin Maryam find a locked box on the beach.", "A good plan names who tells the story, a clear setting, a conflict (for example, the girls must find the owner or the key), three or more events in order, and a resolution that solves the conflict. Answers will vary."),
        en("Put these sentences in the best order: (a) Next, volunteers dig holes along the shore. (b) First, the class chooses a site for the mangrove seedlings. (c) Finally, they water each seedling.", "b, a, c. (the transitions First, Next and Finally show the order of the steps)")
      ]
    }
  ]
};
