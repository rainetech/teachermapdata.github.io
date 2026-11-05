// Language Usage practice booklet, Grade 10 expectations. English only. See ma-5.js for the format.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const en = (question, answer) => it(question, answer, question, answer);
const mc = (qEn, optsEn, correct, whyEn) => ({ q: T(qEn, qEn), a: T(whyEn, whyEn), options: { en: optsEn, ar: optsEn }, correct });
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
        mc("Which sentence joins the two ideas with correct punctuation?", ["The metro was delayed this morning, however Hamdan still reached school on time.", "The metro was delayed this morning however, Hamdan still reached school on time.", "The metro was delayed this morning; however, Hamdan still reached school on time.", "The metro was delayed this morning; however Hamdan, still reached school on time."], 2, "C. A semicolon goes before however and a comma goes after it, because however joins two complete sentences. If your child chose A, they joined two full sentences with only a comma. If they chose B, the semicolon is missing."),
        en("Join the two sentences with a semicolon and no other word: Layla loves astronomy. Her brother prefers robotics.", "Layla loves astronomy; her brother prefers robotics. A semicolon can join two closely related complete sentences, so no joining word is needed. Ask: can each half stand alone as a sentence?"),
        en("Add the colon: Salem packed three items for the desert trip a water bottle, a hat, and sunscreen.", "Salem packed three items for the desert trip: a water bottle, a hat, and sunscreen. The words before the colon make a complete sentence, and the colon then introduces the list. Ask: does the part before the colon make sense on its own?"),
        mc("Which sentence is punctuated correctly?", ["The recipe needs three things: dates, flour, and butter.", "The recipe calls for: dates, flour, and butter.", "The recipe calls for dates; flour; and butter.", "The recipe calls for, dates, flour, and butter."], 0, "A. The words before the colon, The recipe needs three things, make a full sentence, so a colon can introduce the list. If your child chose B, they put a colon right after the verb calls for, which cuts the sentence in the middle."),
        en("A complete sentence introduces the quotation, so add a colon: Noura read the sign aloud \"Please keep the beach clean.\"", "Noura read the sign aloud: \"Please keep the beach clean.\" The part before the colon is a complete sentence, so a colon can introduce the quotation. Ask: could the first part stand alone as a sentence?"),
        en("Explain why the comma is wrong in this sentence, and give one way to fix it: The creek was calm, the boats rocked gently.", "A comma cannot join two complete sentences on its own, which is called a comma splice. Fix it with a semicolon, a full stop, or a comma plus a joining word such as and. Ask: can you read each half aloud and hear that it stands alone?"),
        mc("Choose the right word: The committee will ____ the award on behalf of the school.", ["except", "expect", "excerpt", "accept"], 3, "D. Accept is a verb meaning to receive, which fits receiving an award. If your child chose A, they picked except, which means to leave out. If they chose B, expect means to look forward to something."),
        en("Choose the right word: The new dhow is faster (than / then) the old ferry.", "than. Use than when comparing two things, and then when talking about time or order. Ask: are we comparing two things here, or putting events in order?"),
        en("Choose the right word: The school (principal / principle) welcomed the visitors at the gate.", "principal. A principal is the head of a school, and a principle is a rule or belief. Ask: is this word naming a person or an idea?"),
        en("Choose the right word: Omar and Khalid left (their / there / they're) bags at the gate.", "their. Their shows that the bags belong to Omar and Khalid, while there is a place and they're means they are. Ask: does the sentence still work if you say they are?"),
        mc("Which spelling is correct?", ["occurence", "occurrence", "occurance", "ocurrence"], 1, "B. Occurrence has two c's and two r's, so say it in parts: oc-cur-rence. If your child chose A, they used only one r. If they chose C, they ended it with ance instead of ence."),
        mc("Choose the correct form: The ____ books were left on the metro.", ["childrens'", "childrens", "children's", "childs'"], 2, "C. Children is already plural, so the possessive just adds 's to make children's. If your child chose A, they added an apostrophe after an s that does not belong. If they chose B, they left the apostrophe out.")
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
        mc("Which sentence has a parallel list?", ["Hind enjoys reading, painting, and playing chess.", "Hind enjoys reading, painting, and to play chess.", "Hind enjoys to read, painting, and playing chess.", "Hind enjoys reading, to paint, and play chess."], 0, "A. All three activities, reading, painting and playing, use the same -ing form, so the list is parallel. If your child chose B, they mixed -ing words with to play in the same list."),
        en("Name the appositive: Maryam, a marine biologist, studies the mangroves.", "a marine biologist. It is a noun phrase that renames Maryam and is set off by commas. Ask: if you take it out, does the sentence still make sense?"),
        en("Name the dependent clause and say what kind it is: Because the road flooded, the bus was late.", "Because the road flooded is an adverbial clause. It tells why the bus was late and cannot stand alone as a sentence. Ask: does this part make a full sentence by itself?"),
        en("Combine the sentences with a relative clause: The Hope Probe reached Mars. It was launched from Japan.", "Model answer: The Hope Probe, which was launched from Japan, reached Mars. Any correct sentence that turns the second sentence into a who or which clause is fine. Ask: does your sentence keep both ideas?"),
        en("Name the mood of the verb: If the metro were free, more people would ride it.", "Subjunctive. Were is used for a situation that is imagined or not true, and here the metro is not free. Ask: is this a real fact or something we are imagining?"),
        mc("Choose the right verb: The teacher suggested that Khalid ____ the map tonight.", ["studies", "study", "studied", "is studying"], 1, "B. After a verb of suggestion such as suggested, the verb takes its base form, study. If your child chose A, they used studies, the ordinary he or she form. If they chose C, they used the past tense."),
        en("Change to the active voice: The report was written by Noura and Hind.", "Noura and Hind wrote the report. In the active voice the doer of the action becomes the subject. Ask: who did the action, and does that person come first in your sentence?"),
        en("Combine these short sentences into one varied sentence: The market opened. It was busy. People bought spices.", "Model answer: When the market opened, it was busy with people buying spices. Any smooth, correct sentence that keeps all three ideas is fine. Ask: can you read it aloud and does it keep all three ideas?"),
        mc("Choose the right verb: The collection of old dates ____ on the table.", ["are", "were", "have been", "is"], 3, "D. The subject is collection, which is one thing, so the verb is singular: is. If your child chose A, they matched the verb to the word dates instead of collection."),
        en("Correct the tense shift in this story, which is told in the past tense: Hamdan opened the door and sees the falcon.", "Hamdan opened the door and saw the falcon. Both verbs stay in the past tense because the story is told in the past. Ask: which verb slipped into the present tense?"),
        mc("Choose the right word: The woman to ____ Noura gave the map was a teacher.", ["who", "which", "whom", "whose"], 2, "C. Whom is the object of the preposition to, as in Noura gave the map to her. If your child chose A, they used who, which is for the doer of an action. If they chose D, whose shows ownership."),
        en("Explain what is wrong with this sentence and rewrite it: Running to catch the metro, Hind's bag fell open.", "The opening phrase seems to describe the bag, but Hind was the one running, which is called a dangling modifier. Model: Running to catch the metro, Hind felt her bag fall open. Ask: who is doing the running?")
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
        mc("Which sentence is a claim that can be argued?", ["The Dubai Metro opened in 2009.", "Cities in the UAE should build more cycling lanes.", "The Dubai Metro has a red line and a green line.", "Cycling lanes are painted in many colours."], 1, "B. It states a position that people could agree or disagree with, which is what a claim is. If your child chose A or C, they picked a fact that nobody can argue against."),
        en("Make this claim more precise: Solar parks are good.", "A good answer names who or what and takes a specific position with a reason. Model: Solar parks should supply more of the UAE's electricity because they cut pollution and use a resource the country has in abundance. Ask: what exactly should happen, and why?"),
        en("Write a counterclaim and a response for this claim: The school day should start an hour later.", "A good answer states a fair opposing view and answers it with a reason. Model: Some people say a later start means a later finish to the day. However, students who sleep longer concentrate better, so the later finish is worth it. Ask: what would someone who disagrees say, and how would you reply?"),
        en("Plan it: you will argue that your neighbourhood should use the metro more than cars. List a claim, two reasons with evidence, and a counterclaim with a response.", "A good answer has a clear claim, two different reasons each backed by a fact or example, and a fair counterclaim with a response. For example: the metro avoids traffic and costs less than fuel and parking; stations may be far from home, but feeder buses connect them. Answers will vary. Ask: what fact backs up each reason?"),
        mc("Choose the best transition to add a second reason: The metro is cheaper than driving. ____, it avoids traffic.", ["However", "Therefore", "As a result", "In addition"], 3, "D. In addition adds one more reason to the one already given. If your child chose A, however shows a contrast, which does not fit here. If they chose B, therefore shows a result, not a new reason."),
        mc("Which revision uses the most formal style of: Kids these days spend way too much time on their phones, which is kind of a big deal.", ["Young people spend a great deal of time on their phones, which is a serious concern.", "Kids spend way too much time on phones, which is a big deal.", "Young people spend loads of time on their phones, which is kind of a problem.", "Kids these days are on phones too much, which is not great."], 0, "A. It removes slang and vague phrases such as kind of and way too much, and keeps the meaning. If your child chose B, they kept casual words such as big deal. If they chose C, they kept loads and kind of."),
        en("Revise to remove wordiness: In my personal opinion, I believe that the library should be open in the evenings as well.", "Model: The library should be open in the evenings. Cutting In my personal opinion, I believe and as well keeps the meaning in fewer words. Ask: which words can come out without changing the meaning?"),
        en("Write an introductory sentence for an informative essay about how desalination provides drinking water in the UAE.", "A good answer names the topic and prepares the reader for what follows. Model: Desalination plants along the UAE coast remove salt from seawater to provide much of the country's drinking water. Ask: does your first sentence tell the reader what the essay is about?"),
        mc("Which detail best supports the topic sentence Falcons are skilled hunters?", ["Falcons are often seen at desert camps.", "Many families care for falcons.", "A falcon can spot small prey from far away and dive at great speed.", "Falcons have been part of Gulf culture for centuries."], 2, "C. It gives a fact that shows why falcons hunt well, so it supports the topic sentence. If your child chose A, they picked a detail about where falcons are seen, not how they hunt."),
        en("Revise this sentence with sensory details instead of naming the feeling: The evening was peaceful.", "A good answer shows the calm with sights, sounds or actions instead of using the word peaceful. Model: A soft breeze moved the palm leaves, and the sky over the creek turned the colour of ripe apricots. Ask: what could you see and hear that evening?"),
        en("Plan a narrative. Fill in a planner with a narrator, a setting, a conflict, the main events in order, and a resolution. Use this start: Noura and her cousin Maryam find a locked box on the beach.", "A good plan names who tells the story, a clear setting, a conflict (for example, the girls must find the owner or the key), three or more events in order, and a resolution that solves the conflict. Answers will vary. Ask: how does the conflict get solved at the end?"),
        mc("Put these sentences in the best order: (a) Next, volunteers dig holes along the shore. (b) First, the class chooses a site for the mangrove seedlings. (c) Finally, they water each seedling.", ["c, b, a", "b, a, c", "a, b, c", "b, c, a"], 1, "B. The words First, Next and Finally show the order: choose the site, dig the holes, then water the seedlings. If your child chose C, they put digging the holes before choosing the site. If they chose D, they put the watering before the digging.")
      ]
    }
  ]
};
