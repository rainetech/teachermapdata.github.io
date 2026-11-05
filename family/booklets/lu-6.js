// Language Usage practice booklet, Grade 6 expectations. English only. See ma-5.js for the format.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const en = (question, answer) => it(question, answer, question, answer);
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });
const mc = (qEn, optsEn, correct, whyEn) => ({ q: T(qEn, qEn), a: T(whyEn, whyEn), options: { en: optsEn, ar: optsEn }, correct });
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
        mc("Which sentence is punctuated correctly?", ["Maryam who lives in Al Ain, won the spelling contest.", "Maryam, who lives in Al Ain won the spelling contest.", "Maryam who lives in Al Ain won, the spelling contest.", "Maryam, who lives in Al Ain, won the spelling contest."], 3, "Extra information that is not needed to know who is meant goes between a pair of commas. If your child chose A, they put the comma after the phrase but not before it. If your child chose B, they put the comma before the phrase but forgot the one after it."),
        en("Add commas: Khalid's grandfather a retired fisherman tells wonderful stories.", "Khalid's grandfather, a retired fisherman, tells wonderful stories. A phrase that renames a noun and is not essential sits between two commas. Ask: if you cover the phrase, does the sentence still make sense?"),
        en("Add commas: The souq I think opens at nine.", "The souq, I think, opens at nine. A short aside in the middle of a sentence is set off by a comma on each side. Ask: can you read it aloud and hear where your voice pauses?"),
        en("Only some of the students finished early, and only those students helped set up the science fair. Which sentence says this correctly? (a) The students, who finished early, helped set up the science fair. (b) The students who finished early helped set up the science fair.", "(b). The words who finished early are needed to tell which students helped, so no commas are used. In (a) the commas would suggest that all the students finished early. Ask: if you take out those words, do we still know which students helped?"),
        en("Add commas: The Hope Probe which was built in the UAE reached Mars in 2021.", "The Hope Probe, which was built in the UAE, reached Mars in 2021. The phrase adds a detail about a probe we already know, so it goes between two commas. Ask: does the sentence still work without the phrase?"),
        mc("Which word is spelled correctly?", ["definately", "definitly", "definitely", "defanitely"], 2, "Definitely ends in -itely: an i after the f and an i after the n. If your child chose A (definately), they spelled the ending as if it said 'ately'. If your child chose B, they left out the e before the l."),
        en("Which spelling is correct: seperate, separate or separete?", "separate. Memory trick: there is 'a rat' inside sepARATe. Ask: which letter is the one children most often swap?"),
        mc("Choose the word that completes the sentence: Everyone will join the trip to the oasis ____ Omar, who has a cold.", ["accept", "except", "expect", "excepts"], 1, "Except means but not, and it fits because Omar is left out. If your child chose A (accept), they used the word for receiving or agreeing, which sounds the same. If your child chose C (expect), they picked a word that means to think something will happen."),
        en("Which spelling is correct: neccessary, necesary or necessary?", "necessary. It has one c and two s's. Memory trick: one collar and two sleeves. Ask: can you spell it out loud and then check it?"),
        mc("Which sentence punctuates the question from Noura correctly?", ["\"Why is the sky so red tonight?\" asked Noura.", "\"Why is the sky so red tonight\"? asked Noura.", "\"Why is the sky so red tonight,\" Asked Noura.", "\"Why is the sky so red tonight?\" Asked Noura."], 0, "The question mark stays inside the quotation marks because it belongs to the spoken question, and asked stays small because the sentence carries on. If your child chose B, they put the mark outside the quotation marks. If your child chose D, they gave asked a capital letter."),
        mc("One teacher owns the desk, and several children own the books. Which sentence is correct?", ["The childrens books were stacked on the teachers desk.", "The children's books were stacked on the teachers' desk.", "The children's books were stacked on the teacher's desk.", "The childrens' books were stacked on the teacher's desk."], 2, "One teacher owns the desk, so the apostrophe goes before the s: teacher's. Children is already plural, so it also takes 's. If your child chose B, they treated teachers' as if the desk had many owners. If your child chose A, they left out the apostrophes."),
        en("Explain how the meaning changes: (a) My sister, who lives in Dubai, works in a hospital. (b) My sister who lives in Dubai works in a hospital.", "In (a) the speaker has one sister, and the commas show the phrase is only extra information. In (b) the phrase tells which sister, so there must be more than one. A good answer says one sister in (a) and several in (b). Ask: do the commas change who we are talking about?")
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
        mc("Choose the word that completes the sentence: Salem and ____ built the model rocket.", ["I", "me", "myself", "mine"], 0, "The pronoun is part of the subject. Test it alone: I built the model rocket. If your child chose B (me), they used the object form, which is only right after words like to or for. If your child chose C (myself), they used a word that needs another word to refer back to."),
        mc("Choose the word that completes the sentence: The teacher gave the certificates to Hind and ____.", ["she", "her", "hers", "herself"], 1, "The pronoun is the object of to. Test it alone: gave the certificates to her. If your child chose A (she), they used the subject form, which sounds right in Hind and she but not after to. If your child chose C (hers), they used a word that shows ownership."),
        en("Complete with an intensive pronoun: Noura ____ carried the trophy to the stage.", "herself. An intensive pronoun repeats the person to add emphasis, and it ends in self. 'Hisself' is not standard English. Ask: which word in the sentence does herself point back to?"),
        mc("Choose the word that completes the sentence: Hamdan and Omar packed ____ bags for the camping trip.", ["his", "its", "they're", "their"], 3, "Two people packed the bags, so the plural pronoun their is needed. If your child chose A (his), they treated the pair as one person. If your child chose C (they're), they mixed up the spelling of they are and their."),
        en("Correct the shift in person without changing the first part: When you visit the desert, one should bring plenty of water.", "When you visit the desert, you should bring plenty of water. The sentence began with 'you', so it should stay with 'you' all the way through. Ask: who is the sentence talking to at the start, and does it still talk to them at the end?"),
        en("Correct the shift in number: Maryam picked a palm leaf and put them in her bag.", "Maryam picked a palm leaf and put it in her bag. One leaf needs the singular pronoun it, not them. Ask: how many leaves did she pick, and does the pronoun match that number?"),
        en("Make the pronoun clear: Salem told Khalid that he had won the prize.", "A good answer removes the doubt about who he is. Model: Salem told Khalid, \"You have won the prize.\" or Salem told Khalid that Salem had won the prize. Ask: who does he mean here, and how could a reader tell?"),
        mc("Which sentence is correct?", ["The two boys was waiting at the metro station.", "The two boys has been waiting at the metro station.", "The two boys were waiting at the metro station.", "The two boys is waiting at the metro station."], 2, "A plural subject needs the plural verb were. Two boys is more than one. If your child chose A (was) or D (is), they used a verb for one person. If your child chose B (has been), they matched the verb to one boy as well."),
        en("Combine into one smooth sentence: The market opens at dawn. Fishermen bring in their catch. The market is near the creek.", "Model: The market near the creek opens at dawn, when fishermen bring in their catch. Any single correct sentence that keeps all three ideas is fine. Ask: have we kept the market, the dawn and the fishermen, and does it read smoothly aloud?"),
        mc("Which sentence has the more formal tone for a letter to the principal?", ["Hey, can we get a longer break?", "We would like to ask whether the break could be made longer.", "Give us a longer break, please.", "Our break is way too short, right?"], 1, "A letter to the principal needs polite, complete wording with no slang or chatty phrases. If your child chose A (Hey, can we get...), they used a casual greeting. If your child chose C (Give us...), they sounded like an order instead of a polite request."),
        en("Join the two sentences with 'although': The Hajar mountains are hot in summer. Many people hike there in winter.", "Although the Hajar mountains are hot in summer, many people hike there in winter. A comma follows the opening clause that starts with although. Ask: which half of the sentence could not stand alone?"),
        en("Explain what is wrong with this sentence and correct it: Please give the book to Hind or myself.", "Myself cannot be an ordinary object, because it only repeats a person who is already named. Correct: Please give the book to Hind or me. A good answer names the pronoun and fixes it. Ask: how would it sound if you took away Hind or?")
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
        mc("Which sentence is a claim that can be argued?", ["Dubai has a metro.", "Every school in the UAE should offer a coding club.", "The metro opened in 2009.", "Many schools have clubs after lessons."], 1, "A claim gives an opinion that people could agree or disagree with. If your child chose A (Dubai has a metro) or C (The metro opened in 2009), they chose a fact that no one can argue about. If your child chose D, they chose a general fact about clubs."),
        mc("Which piece of evidence best supports the claim: Walking to school is good for students?", ["Some students live far away.", "Walking to school takes place in the morning.", "My school bag is blue.", "Walking is exercise, and exercise helps students concentrate in class."], 3, "The best evidence gives a reason that directly supports the claim: exercise helps students concentrate. If your child chose A (Some students live far away), they chose a fact that does not show walking is good. If your child chose C (My school bag is blue), they chose a detail with no link to the claim."),
        en("Write a claim for an argument that your school lunch break should be longer.", "A good answer is one clear sentence that takes a position. Model: Our school should lengthen the lunch break so that students have time to eat and rest. Ask: could someone disagree with your sentence?"),
        en("Put these sentences in order to make an argument paragraph: (1) For these reasons, schools should add solar panels. (2) Schools in the UAE should install solar panels. (3) The country has strong sunshine for most of the year, so panels make a lot of power. (4) This extra power can run the air conditioning without using much oil or gas.", "2, 3, 4, 1. The claim comes first, then the evidence, then a closing sentence. Sentence 4 says 'This extra power', so it must follow sentence 3. Ask: which sentence tells us what the writer wants, and which one wraps it up?"),
        en("Revise to a formal style: No way is homework good, it is just dumb.", "A good answer keeps the position but uses formal, respectful wording and a reason. Model: Homework is not always helpful because some tasks take time without teaching anything new. Ask: could you say that to a teacher politely?"),
        mc("Choose the best linking word: Camels store fat in their humps. ____, they can travel for days without eating.", ["Therefore", "However", "For example", "Meanwhile"], 0, "shows that the second sentence is a result of the first. Fat in the humps is the reason the camels can travel for days. If your child chose B (However), they used a word that shows a contrast. If your child chose C (For example), they used a word that introduces an example."),
        mc("Which is the best introduction for an informative paragraph about the Hope Probe?", ["I like the Hope Probe.", "Mars is red.", "The Hope Probe, the UAE's first mission to Mars, studies the weather in the Martian atmosphere.", "The probe is on a poster in my room."], 2, "The best introduction names the topic and tells the reader what the paragraph will explain. If your child chose A (I like the Hope Probe), they gave an opinion instead of introducing the topic. If your child chose B (Mars is red), they gave one fact that does not name the probe."),
        en("Write a concluding sentence for this paragraph: Date palms grow well in hot, dry places. Their roots reach deep for water, and their leaves give shade. Their fruit has been an important food in the region for centuries.", "A good answer follows from the information and does not add a new fact. Model: Date palms are well suited to desert life and have long been valuable to people. Ask: does your last sentence say anything the paragraph has not already told us?"),
        en("Revise to add sensory details: Omar walked into the spice shop.", "A good answer adds what Omar saw, smelled, heard or felt. Model: Omar stepped into the spice shop, where the warm smell of cardamom and cinnamon filled the air. Ask: what could Omar smell or hear in that shop?"),
        en("Put these parts of a story in the usual order: climax, exposition, resolution, rising action.", "exposition, rising action, climax, resolution. First we meet the characters and setting, then the problem builds, then comes the turning point, then it is solved. Ask: at which point is the story most exciting?"),
        en("Revise to remove repeated meaning: The big, huge crowd was very large at the stadium.", "Model: The huge crowd filled the stadium. Big, huge and large all say the same thing, so one strong word is enough. A good answer uses only one size word. Ask: which words are saying the same thing twice?"),
        en("Plan an argument paragraph: should students in your grade take a trip to a desert reserve each year? Write a claim, two reasons with evidence, and a closing sentence.", "A good answer has a clear claim, two different reasons each backed by a fact or example, formal wording, and a closing sentence that follows from them. Model claim: Students in our grade should visit a desert reserve each year because they can see wildlife up close and learn how people protect it. Answers will vary. Ask: what is your best fact for each reason?")
      ]
    }
  ]
};
