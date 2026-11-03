// Language Usage practice booklet, Grade 6 expectations. English only. See ma-5.js for the format.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const en = (question, answer) => it(question, answer, question, answer);
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });
const exEn = (question, steps, answer) => ex(question, steps, answer, question, steps, answer);

module.exports = {
  subject: "lu",
  grade: 6,
  framework: "CCSS.ELA",
  englishOnly: true,
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "cps",
      standards: ["L.6.2", "L.6.2a", "L.6.2b"],
      example: exEn(
        "Add commas: Salem's uncle who works at the port brought back a model dhow.",
        [
          "Find the extra information: who works at the port. It adds a detail but is not needed to know which uncle.",
          "Extra information that is not essential is set off with a comma before it and a comma after it.",
          "Put the commas around the phrase."
        ],
        "Salem's uncle, who works at the port, brought back a model dhow."
      ),
      items: [
        en("Add commas: Maryam who lives in Al Ain won the spelling contest.", "Maryam, who lives in Al Ain, won the spelling contest. (the phrase adds extra information, so it is set off by a pair of commas)"),
        en("Add commas: Khalid's grandfather a retired fisherman tells wonderful stories.", "Khalid's grandfather, a retired fisherman, tells wonderful stories. (a phrase that renames a noun and is not essential is set off by commas)"),
        en("Add commas: The souq I think opens at nine.", "The souq, I think, opens at nine. (a short aside inside a sentence is set off by commas)"),
        en("Only some of the students finished early, and only those students helped set up the science fair. Which sentence says this correctly? (a) The students, who finished early, helped set up the science fair. (b) The students who finished early helped set up the science fair.", "(b). The words who finished early are needed to tell which students helped, so no commas are used. In (a) the commas would suggest that all the students finished early."),
        en("Add commas: The Hope Probe which was built in the UAE reached Mars in 2021.", "The Hope Probe, which was built in the UAE, reached Mars in 2021. (the phrase gives extra information about a probe we already know)"),
        en("Which spelling is correct: definately, definitely or definitly?", "definitely"),
        en("Which spelling is correct: seperate, separate or separete?", "separate (remember: there is 'a rat' in separate)"),
        en("Choose the right word: Everyone will join the trip to the oasis (accept / except) Omar, who has a cold.", "except (it means 'but not'; accept means 'to receive or agree to')"),
        en("Which spelling is correct: neccessary, necesary or necessary?", "necessary (one c and two s's)"),
        en("Punctuate it: Why is the sky so red tonight asked Noura", "\"Why is the sky so red tonight?\" asked Noura. (the question mark stays inside the quotation marks, and asked is not capitalised)"),
        en("Add the apostrophes. One teacher owns the desk, and several children own the books: The childrens books were stacked on the teachers desk.", "The children's books were stacked on the teacher's desk. (children is already plural, so 's is added; teacher is one person, so 's is added)"),
        en("Explain how the meaning changes: (a) My sister, who lives in Dubai, works in a hospital. (b) My sister who lives in Dubai works in a hospital.", "In (a) the speaker has one sister, and the phrase only gives extra information. In (b) the phrase tells which sister is meant, which suggests there is more than one sister.")
      ]
    },
    {
      area: "gru",
      standards: ["L.6.1", "L.6.1a", "L.6.1b", "L.6.1c", "L.6.1d", "L.6.1e", "L.6.3", "L.6.3a", "L.6.3b"],
      example: exEn(
        "Choose the correct pronoun: The teacher gave the new books to Hind and (I / me).",
        [
          "Take Hind away to test each choice: The teacher gave the new books to (I / me).",
          "Gave the books to I does not sound right. The pronoun is the object of the word to, so it needs the object form.",
          "So the correct choice is me."
        ],
        "me (the object form is used after the word to)"
      ),
      items: [
        en("Choose the right pronoun: Salem and (I / me) built the model rocket.", "I (the pronoun is part of the subject; test it alone: I built the model rocket)"),
        en("Choose the right pronoun: The teacher gave the certificates to Hind and (she / her).", "her (the pronoun is the object of 'to'; test it alone: gave the certificates to her)"),
        en("Complete with an intensive pronoun: Noura ____ carried the trophy to the stage.", "herself (an intensive pronoun adds emphasis; 'hisself' is not standard English)"),
        en("Choose the right pronoun: Hamdan and Omar packed (his / their) bags for the camping trip.", "their (two people are the antecedent, so the pronoun must be plural)"),
        en("Correct the shift in person without changing the first part: When you visit the desert, one should bring plenty of water.", "When you visit the desert, you should bring plenty of water. (the sentence began with 'you', so it should stay with 'you')"),
        en("Correct the shift in number: Maryam picked a palm leaf and put them in her bag.", "Maryam picked a palm leaf and put it in her bag. (one leaf needs the singular pronoun it)"),
        en("Make the pronoun clear: Salem told Khalid that he had won the prize.", "A good answer removes the doubt about who 'he' is. Model: Salem told Khalid, \"You have won the prize.\" or Salem told Khalid that Salem had won the prize."),
        en("Correct the sentence: The two boys was waiting at the metro station.", "The two boys were waiting at the metro station. (a plural subject needs the plural verb were)"),
        en("Combine into one smooth sentence: The market opens at dawn. Fishermen bring in their catch. The market is near the creek.", "Model: The market near the creek opens at dawn, when fishermen bring in their catch. (any single, correct sentence that keeps all three ideas is fine)"),
        en("Which sentence has the more formal tone for a letter to the principal? (a) Hey, can we get a longer break? (b) We would like to ask whether the break could be made longer.", "(b). It uses polite, complete wording with no slang or chatty phrases."),
        en("Join the two sentences with 'although': The Hajar mountains are hot in summer. Many people hike there in winter.", "Although the Hajar mountains are hot in summer, many people hike there in winter. (a comma follows the opening clause)"),
        en("Explain what is wrong with this sentence and correct it: Please give the book to Hind or myself.", "Myself is a reflexive or intensive pronoun and cannot be used as an ordinary object. Correct: Please give the book to Hind or me.")
      ]
    },
    {
      area: "wri",
      standards: ["W.6.1", "W.6.1a", "W.6.1b", "W.6.1c", "W.6.1d", "W.6.1e", "W.6.2", "W.6.2a", "W.6.2c", "W.6.2f", "W.6.3", "W.6.3a", "W.6.3d", "W.6.5"],
      example: exEn(
        "Plan an argument paragraph: should your school have a quiet reading hour each week? Write a claim and two pieces of evidence.",
        [
          "Write a clear claim that someone could agree or disagree with: Our school should have a quiet reading hour each week.",
          "Evidence 1: reading for a full hour builds children's vocabulary.",
          "Evidence 2: a calm hour helps children focus for the rest of the day.",
          "Plan a closing sentence that follows from the claim and the evidence."
        ],
        "Claim: Our school should have a quiet reading hour each week. Evidence: it builds vocabulary, and a calm hour helps children focus. Closing: A weekly reading hour would help every child learn."
      ),
      items: [
        en("Which sentence is a claim that can be argued? (a) Dubai has a metro. (b) Every school in the UAE should offer a coding club. (c) The metro opened in 2009.", "(b). It gives an opinion that people could agree or disagree with. (a) and (c) are facts."),
        en("Which piece of evidence best supports the claim 'Walking to school is good for students'? (a) Some students live far away. (b) Walking is exercise, and exercise helps students concentrate in class. (c) My school bag is blue.", "(b). It gives a reason that directly supports the claim. (a) and (c) do not."),
        en("Write a claim for an argument that your school lunch break should be longer.", "A good answer is one clear sentence that states a position. Model: Our school should lengthen the lunch break so that students have time to eat and rest."),
        en("Put these sentences in order to make an argument paragraph: (1) For these reasons, schools should add solar panels. (2) Schools in the UAE should install solar panels. (3) The country has strong sunshine for most of the year, so panels make a lot of power. (4) This extra power can run the air conditioning without using much oil or gas.", "2, 3, 4, 1 (claim first, then the evidence, then a closing sentence; sentence 4 says 'This extra power', so it follows sentence 3)"),
        en("Revise to a formal style: No way is homework good, it is just dumb.", "A good answer keeps a position but uses formal, respectful wording and a reason. Model: Homework is not always helpful because some tasks take time without teaching anything new."),
        en("Choose the best linking word: Camels store fat in their humps. ____, they can travel for days without eating. (For example / Therefore / However)", "Therefore (the second sentence is a result of the first)"),
        en("Which is the best introduction for an informative paragraph? (a) I like the Hope Probe. (b) The Hope Probe, the UAE's first mission to Mars, studies the weather in the Martian atmosphere. (c) Mars is red.", "(b). It names the topic and tells the reader what the paragraph will explain."),
        en("Write a concluding sentence for this paragraph: Date palms grow well in hot, dry places. Their roots reach deep for water, and their leaves give shade. Their fruit has been an important food in the region for centuries.", "A good answer follows from the information and does not add a new fact. Model: Date palms are well suited to desert life and have long been valuable to people."),
        en("Revise to add sensory details: Omar walked into the spice shop.", "A good answer adds what Omar saw, smelled, heard or felt. Model: Omar stepped into the spice shop, where the warm smell of cardamom and cinnamon filled the air."),
        en("Put these parts of a story in the usual order: climax, exposition, resolution, rising action.", "exposition, rising action, climax, resolution (introduce the characters and setting, build the problem, reach the turning point, then solve it)"),
        en("Revise to remove repeated meaning: The big, huge crowd was very large at the stadium.", "Model: The huge crowd filled the stadium. (big, huge and large all say the same thing, so one strong word is enough)"),
        en("Plan an argument paragraph: should students in your grade take a trip to a desert reserve each year? Write a claim, two reasons with evidence, and a closing sentence.", "A good answer has a clear claim, two different reasons each backed by a fact or example, formal wording, and a closing sentence that follows from them. Model claim: Students in our grade should visit a desert reserve each year because they can see wildlife up close and learn how people protect it. Answers will vary.")
      ]
    }
  ]
};
