// Language Usage practice booklet, Grade 7 expectations. English only. See ma-5.js for the format.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const en = (question, answer) => it(question, answer, question, answer);
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });
const mc = (qEn, optsEn, correct, whyEn) => ({ q: T(qEn, qEn), a: T(whyEn, whyEn), options: { en: optsEn, ar: optsEn }, correct });
const exEn = (question, steps, answer) => ex(question, steps, answer, question, steps, answer);

module.exports = {
  subject: "lu",
  grade: 7,
  framework: "CCSS.ELA",
  englishOnly: true,
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "cps",
      standards: ["L.7.2", "L.7.2a", "L.7.2b"],
      example: exEn(
        "Correct this sentence: the long dusty road to the hajar mountains was empty so we stopped for karak",
        [
          "Capital letters: The (first word) and the place name Hajar Mountains.",
          "Long and dusty are coordinate adjectives: each one describes the road on its own, and you could say 'dusty and long road'. Put a comma between them: long, dusty road.",
          "A comma goes before 'so' because it joins two complete sentences: ... was empty, so we stopped for karak.",
          "End with a full stop."
        ],
        "The long, dusty road to the Hajar Mountains was empty, so we stopped for karak."
      ),
      items: [
        en("Add the comma that is needed: Salem climbed the steep rocky path to the top of the hill.", "Salem climbed the steep, rocky path to the top of the hill. (steep and rocky are coordinate adjectives: you can swap them or put 'and' between them)"),
        en("Does this sentence need a comma between the adjectives? Write it correctly: Hind carried a small leather bag to the souq.", "No comma: Hind carried a small leather bag to the souq. (you cannot say 'leather small bag' or 'small and leather bag', so the adjectives are not coordinate)"),
        mc("Which sentence is punctuated correctly?", ["The metro was crowded so, Omar stood near the door.","The metro was crowded, so Omar stood near the door.","The metro was, crowded so Omar stood near the door.","The metro was crowded so Omar, stood near the door."], 1, "A comma goes before so when it joins two complete sentences."),
        mc("Which word is spelled correctly?", ["definately","definitly","defanitely","definitely"], 3, "definitely has the letters i-n-i-t-e-l-y in the middle."),
        mc("Choose the right word: The hot weather had a big ____ on how many people came to the beach.", ["effect","affect","affected","effects of"], 0, "effect is a noun meaning a result. Affect is usually a verb meaning to change something."),
        en("Choose the right word: Noura (accepted / excepted) the invitation to the Eid lunch.", "accepted (it means said yes; excepted means left out)"),
        en("Correct the capital letters: my uncle took us to the hajar mountains in january.", "My uncle took us to the Hajar Mountains in January. (the first word, a place name and a month all begin with capital letters; uncle stays lower case after 'my')"),
        en("Punctuate it: Layla asked Can I help you carry the dates", "Layla asked, \"Can I help you carry the dates?\" (a comma before the quotation, a capital letter to begin the speech, and the question mark inside the quotation marks)"),
        mc("Which spelling of the past tense of occur is correct?", ["occured","ocurred","occurred","ocurrd"], 2, "The final r is doubled before -ed: occurred."),
        mc("Choose the right word: The camel lifted ____ head and looked across the dunes.", ["it","its","it's","its'"], 1, "its shows the head belongs to the camel. It's means it is or it has."),
        en("Find and correct the spelling mistake: The desalination plant provides neccessary water for the city.", "necessary (one c and two s's)"),
        en("Write one sentence about the souq that uses two coordinate adjectives, and say how you tested them.", "A good answer has a comma between two adjectives that each describe the noun alone, and a test: the adjectives can be swapped or joined with 'and'. Model: The souq was a busy, noisy place in the evening. (busy and noisy place, and noisy, busy place, both sound right)")
      ]
    },
    {
      area: "gru",
      standards: ["L.7.1", "L.7.1a", "L.7.1b", "L.7.1c", "L.7.3", "L.7.3a"],
      example: exEn(
        "Name the kind of sentence: Although the market was crowded, Noura found the dates, and she paid quickly.",
        [
          "Find the clauses. 'Although the market was crowded' has a subject and verb but cannot stand alone (dependent). 'Noura found the dates' and 'she paid quickly' each can stand alone (independent).",
          "Two independent clauses make it compound, and one or more dependent clauses make it complex.",
          "It has both, so it is compound-complex."
        ],
        "compound-complex"
      ),
      items: [
        en("Is 'after the long drive' a phrase or a clause? Give a reason.", "A phrase: it has no subject and verb of its own."),
        en("Copy the independent clause (the part that can stand alone): When the sun rose, the fishermen left the harbour.", "the fishermen left the harbour (When the sun rose is a dependent clause)"),
        mc("What kind of sentence is this? Maryam likes karak, and Omar likes juice.", ["Simple","Complex","Compound","Compound complex"], 2, "It has two independent clauses joined by a comma and and, so it is compound."),
        mc("What kind of sentence is this? Because the road was closed, Salem took the metro.", ["Complex","Compound","Simple","Compound complex"], 0, "It has one dependent clause and one independent clause, so it is complex."),
        en("Say whether the sentence is simple, compound, complex or compound-complex: Hamdan and Layla walked along the creek at sunset.", "simple (one independent clause, even though it has two subjects)"),
        mc("Which sentence places the modifier correctly?", ["Salem saw a falcon with his binoculars flying over the dunes.","Salem saw a falcon flying over the dunes with his binoculars.","With his binoculars flying over the dunes, Salem saw a falcon.","With his binoculars, Salem saw a falcon flying over the dunes."], 3, "The binoculars belong with Salem, so the phrase With his binoculars must stay next to Salem."),
        en("Fix the dangling modifier: Walking into the souq, the spices smelled wonderful.", "Walking into the souq, Maryam smelled the wonderful spices. (any correct answer names a person who is walking right after the comma; the spices cannot walk)"),
        en("Combine into one complex sentence, using 'because': Omar was tired. He had walked all day in the Hajar Mountains.", "Model: Omar was tired because he had walked all day in the Hajar Mountains. (the dependent clause begins with 'because'; Because he had walked all day in the Hajar Mountains, Omar was tired is also correct)"),
        mc("Which sentence says the same thing most concisely?", ["Due to the fact that it was raining, we stayed inside.","Because it was raining, we stayed inside.","Owing to the circumstance of rain, we stayed inside.","It was raining, which was the reason that we stayed inside."], 1, "Because replaces the long phrase Due to the fact that without changing the meaning."),
        mc("Which word is the most precise? The falcon ____ down onto the lure.", ["swooped","went","moved","came"], 0, "swooped shows how the falcon moved. The other words are general."),
        en("Explain why this is a fragment and fix it: Because the bus was late.", "It is a dependent clause with no independent clause to finish the idea. Fix: Because the bus was late, we missed the start of the match. (or join it to a sentence before it)"),
        en("Write a compound-complex sentence about a trip to the beach, and mark the independent and dependent clauses.", "A good answer has two independent clauses and at least one dependent clause. Model: When the tide went out, Khalid collected shells, and Noura built a sandcastle. (dependent: When the tide went out; independent: Khalid collected shells, Noura built a sandcastle)")
      ]
    },
    {
      area: "wri",
      standards: ["W.7.1", "W.7.1a", "W.7.1b", "W.7.2", "W.7.2a", "W.7.3", "W.7.3a", "W.7.4", "W.7.5"],
      example: exEn(
        "Plan the start of an argument: should children in the UAE walk or cycle to school when the distance is short? Write a claim and two reasons with evidence.",
        [
          "Write a clear claim that takes a side: Children who live close to school should walk or cycle.",
          "Reason 1 with evidence: it keeps them active. Evidence: walking ten minutes each way adds twenty minutes of exercise a day.",
          "Reason 2 with evidence: it cuts traffic outside the school gate. Evidence: fewer cars means shorter queues in the morning.",
          "Plan one sentence that answers the other side (for example, the heat) and a closing sentence that repeats the claim."
        ],
        "Claim: Children who live close to school should walk or cycle. Reason 1: it keeps them active (twenty minutes of exercise a day). Reason 2: it cuts traffic at the gate (shorter queues). Other side: it can be hot, but early mornings and shaded paths make it comfortable. Closing: Walking or cycling is good for children and for the whole school community."
      ),
      items: [
        mc("Which is the stronger claim for an argument?", ["Mangroves are interesting.","The UAE should plant more mangroves because they protect the coast.","Mangroves grow in salty water.","I have seen mangroves near the coast."], 1, "It takes a side and gives a reason. The others are statements or personal remarks that cannot be argued."),
        en("Write a claim and two reasons for this topic: Schools should plan one outdoor lesson each week.", "A good answer takes a clear side and gives two different reasons. Model: Schools should plan one outdoor lesson each week because fresh air helps children concentrate and real places make science easier to understand."),
        mc("Which piece of evidence best supports the claim 'Solar parks are good for the UAE'?", ["Solar parks are big.","My cousin visited one last year.","A solar park can make clean electricity for thousands of homes without burning fuel.","Solar parks are built in sunny places."], 2, "It is relevant and factual, and it explains why solar parks are good."),
        en("Write one sentence that acknowledges an opposing view and then answers it: Your claim is that the school day should start early.", "A good answer names the other side fairly and then responds. Model: Some people say an early start is tiring, but a later start would push the end of the school day into the hottest hours."),
        mc("Which sentence is the best topic sentence for an informative paragraph about the Hope Probe?", ["The Hope Probe is a spacecraft from the UAE that studies the atmosphere of Mars.","The Hope Probe is cool.","I saw it on the news.","Mars is red."], 0, "It names the subject and tells the reader what the paragraph will explain."),
        en("Add a transition to join the two sentences so the second adds a new point: Dates give quick energy. ____ they contain fibre that helps digestion.", "Any suitable addition, such as In addition, Also or Furthermore. Model: Dates give quick energy. In addition, they contain fibre that helps digestion."),
        mc("Which sentence does not belong in a paragraph about how the Dubai Metro works? (1) Trains run on a track above and below the ground. (2) Passengers tap a card at the gate. (3) My brother likes football. (4) Trains arrive every few minutes.", ["Sentence 1","Sentence 2","Sentence 4","Sentence 3"], 3, "Sentence 3 is not about how the metro works. All the details should support one topic."),
        mc("Which revision is the most formal and precise? Original: The weather was kind of bad and stuff, so lots of people didn't come.", ["The weather was bad, so lots of people did not come.","The weather was kind of stormy, so many people stayed away.","The weather was stormy, so many people stayed home.","The weather was awful and stuff, so many people stayed home."], 2, "It drops slang and vague words and says what the weather was like."),
        en("Plan the start of a narrative. Write a character, a setting, a problem and one sentence of dialogue to use this opening: Maryam opened the old wooden chest.", "A good plan names the character (Maryam), a setting (for example her grandmother's house), a problem (the chest holds something unexpected), and a line of dialogue in quotation marks with the speaker named. Answers will vary."),
        en("Revise to add sensory detail: The market was busy.", "A good answer adds what the reader can see, hear, smell or touch. Model: The market buzzed with voices, and the smell of cardamom and fresh bread drifted between the crowded stalls."),
        en("Revise the ending of this paragraph to restate the main idea without adding a new fact: Camels store fat in their humps. They can go many days without water. They are well suited to desert life.", "A good answer returns to the main idea only. Model: These features show why camels survive so well in the desert."),
        en("A friend's draft argues that children should have less homework, but gives only the reason 'because it is boring'. Explain two ways to improve it.", "A good answer gives two improvements, for example: give a stronger reason that links to the claim (such as time for rest, reading and family); support it with evidence or an example; answer the other side; and use a formal tone.")
      ]
    }
  ]
};
