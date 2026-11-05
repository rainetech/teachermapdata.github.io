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
        en("Add the comma that is needed: Salem climbed the steep rocky path to the top of the hill.", "Salem climbed the steep, rocky path to the top of the hill. Steep and rocky are coordinate adjectives: you can swap them or put 'and' between them. Ask: does 'rocky and steep path' sound right?"),
        en("Does this sentence need a comma between the adjectives? Write it correctly: Hind carried a small leather bag to the souq.", "No comma: Hind carried a small leather bag to the souq. You cannot say 'leather small bag' or 'small and leather bag', so the adjectives are not coordinate. Ask: can you swap the two adjectives and still sound natural?"),
        mc("Which sentence is punctuated correctly?", ["The metro was crowded so, Omar stood near the door.","The metro was crowded, so Omar stood near the door.","The metro was, crowded so Omar stood near the door.","The metro was crowded so Omar, stood near the door."], 1, "A comma goes before so when it joins two complete sentences. If your child chose A, they put the comma after so instead of before it. If your child chose C, they put the comma inside the first sentence where it does not belong."),
        mc("Which word is spelled correctly?", ["definately","definitly","defanitely","definitely"], 3, "Definitely ends in -itely, with an i in the middle. If your child chose A (definately), they spelled the ending as if it said 'ately'. If your child chose B (definitly), they left out the e before the l."),
        mc("Choose the right word: The hot weather had a big ____ on how many people came to the beach.", ["effect","affect","affected","effects of"], 0, "Effect is a noun meaning a result, and the sentence has the word a before it. If your child chose B (affect), they used the verb that means to change something. If your child chose D (effects of), they made it plural when the sentence says a big."),
        en("Choose the right word: Noura (accepted / excepted) the invitation to the Eid lunch.", "accepted. It means said yes to the invitation. Excepted means left out. Ask: did Noura say yes or leave the lunch out?"),
        en("Correct the capital letters: my uncle took us to the hajar mountains in january.", "My uncle took us to the Hajar Mountains in January. The first word, a place name and a month all begin with capital letters, and uncle stays lower case after 'my'. Ask: which words name a particular place or month?"),
        en("Punctuate it: Layla asked Can I help you carry the dates", "Layla asked, \"Can I help you carry the dates?\" Use a comma before the quotation, a capital letter to begin the speech, and the question mark inside the quotation marks. Ask: which words did Layla actually say aloud?"),
        mc("Which spelling of the past tense of occur is correct?", ["occured","ocurred","occurred","ocurrd"], 2, "The final r is doubled before -ed, so it is occurred. If your child chose A (occured), they left off the second r. If your child chose B (ocurred), they doubled the r but missed the double c."),
        mc("Choose the right word: The camel lifted ____ head and looked across the dunes.", ["it","its","it's","its'"], 1, "Its shows the head belongs to the camel. It's means it is or it has. If your child chose C (it's), they used 'it is' where ownership is needed. If your child chose A (it), they left out the s that shows the head belongs to it."),
        en("Find and correct the spelling mistake: The desalination plant provides neccessary water for the city.", "necessary. It has one c and two s's. Memory trick: one collar and two sleeves. Ask: can you spell it aloud and check it against the word?"),
        en("Write one sentence about the souq that uses two coordinate adjectives, and say how you tested them.", "A good answer has a comma between two adjectives that each describe the noun alone, and a test: the adjectives can be swapped or joined with 'and'. Model: The souq was a busy, noisy place in the evening. Busy and noisy place, and noisy, busy place, both sound right. Ask: can you swap them and say it aloud?")
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
        en("Is 'after the long drive' a phrase or a clause? Give a reason.", "A phrase has no subject and verb of its own, and 'after the long drive' has neither. Ask: who is doing something in those words?"),
        en("Copy the independent clause (the part that can stand alone): When the sun rose, the fishermen left the harbour.", "The independent clause is the part that can stand alone: the fishermen left the harbour. When the sun rose is a dependent clause, because it cannot stand alone. Ask: which part would still be a full sentence on its own?"),
        mc("What kind of sentence is this? Maryam likes karak, and Omar likes juice.", ["Simple","Complex","Compound","Compound complex"], 2, "It has two independent clauses joined by a comma and and, so it is compound. If your child chose A (Simple), they counted only one idea. If your child chose B (Complex), they looked for a dependent clause, but both clauses can stand alone."),
        mc("What kind of sentence is this? Because the road was closed, Salem took the metro.", ["Complex","Compound","Simple","Compound complex"], 0, "It has one dependent clause and one independent clause, so it is complex. Because the road was closed cannot stand alone. If your child chose B (Compound), they treated it as two equal clauses. If your child chose C (Simple), they missed that it has two clauses."),
        en("Say whether the sentence is simple, compound, complex or compound-complex: Hamdan and Layla walked along the creek at sunset.", "Simple: one independent clause, even though it has two subjects, Hamdan and Layla. Ask: how many separate ideas with their own verb does it have?"),
        mc("Which sentence places the modifier correctly?", ["Salem saw a falcon with his binoculars flying over the dunes.","Salem saw a falcon flying over the dunes with his binoculars.","With his binoculars flying over the dunes, Salem saw a falcon.","With his binoculars, Salem saw a falcon flying over the dunes."], 3, "The binoculars belong with Salem, so the phrase With his binoculars must stay next to Salem. If your child chose A, they gave the falcon the binoculars. If your child chose C, the binoculars seem to be flying over the dunes."),
        en("Fix the dangling modifier: Walking into the souq, the spices smelled wonderful.", "Walking into the souq, Maryam smelled the wonderful spices. Any correct answer names a person who is walking right after the comma, because the spices cannot walk. Ask: who is walking into the souq?"),
        en("Combine into one complex sentence, using 'because': Omar was tired. He had walked all day in the Hajar Mountains.", "Model: Omar was tired because he had walked all day in the Hajar Mountains. The dependent clause begins with because. Because he had walked all day in the Hajar Mountains, Omar was tired is also correct. Ask: which sentence gives the reason?"),
        mc("Which sentence says the same thing most concisely?", ["Due to the fact that it was raining, we stayed inside.","Because it was raining, we stayed inside.","Owing to the circumstance of rain, we stayed inside.","It was raining, which was the reason that we stayed inside."], 1, "Because replaces the long phrase Due to the fact that without changing the meaning. If your child chose A (Due to the fact that), they kept the long wording. If your child chose C (Owing to the circumstance of rain), they used a long, stiff phrase that says the same thing."),
        mc("Which word is the most precise? The falcon ____ down onto the lure.", ["swooped","went","moved","came"], 0, "Swooped shows how the falcon moved, quickly and from above. If your child chose B (went), they chose a general word that tells us little. If your child chose D (came), they chose a general word that does not match a falcon moving down onto the lure."),
        en("Explain why this is a fragment and fix it: Because the bus was late.", "It is a dependent clause with no independent clause to finish the idea. Fix: Because the bus was late, we missed the start of the match. You could also join it to a sentence before it. Ask: what happened because the bus was late?"),
        en("Write a compound-complex sentence about a trip to the beach, and mark the independent and dependent clauses.", "A good answer has two independent clauses and at least one dependent clause. Model: When the tide went out, Khalid collected shells, and Noura built a sandcastle. The dependent clause is When the tide went out. Ask: which parts could stand alone as sentences?")
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
        mc("Which is the stronger claim for an argument?", ["Mangroves are interesting.","The UAE should plant more mangroves because they protect the coast.","Mangroves grow in salty water.","I have seen mangroves near the coast."], 1, "A strong claim takes a side and gives a reason. If your child chose A (Mangroves are interesting), they chose an opinion with no reason. If your child chose C (Mangroves grow in salty water), they chose a fact that cannot be argued."),
        en("Write a claim and two reasons for this topic: Schools should plan one outdoor lesson each week.", "A good answer takes a clear side and gives two different reasons. Model: Schools should plan one outdoor lesson each week because fresh air helps children concentrate and real places make science easier to understand. Ask: are your two reasons different from each other?"),
        mc("Which piece of evidence best supports the claim 'Solar parks are good for the UAE'?", ["Solar parks are big.","My cousin visited one last year.","A solar park can make clean electricity for thousands of homes without burning fuel.","Solar parks are built in sunny places."], 2, "The best evidence is relevant and factual, and it explains why solar parks are good. If your child chose A (Solar parks are big), they chose a detail that does not show they are good. If your child chose B (My cousin visited one last year), they chose a personal remark with no facts."),
        en("Write one sentence that acknowledges an opposing view and then answers it: Your claim is that the school day should start early.", "A good answer names the other side fairly and then responds. Model: Some people say an early start is tiring, but a later start would push the end of the school day into the hottest hours. Ask: what would someone who disagrees say, and what is your answer to them?"),
        mc("Which sentence is the best topic sentence for an informative paragraph about the Hope Probe?", ["The Hope Probe is a spacecraft from the UAE that studies the atmosphere of Mars.","The Hope Probe is cool.","I saw it on the news.","Mars is red."], 0, "A topic sentence names the subject and tells the reader what the paragraph will explain. If your child chose B (The Hope Probe is cool), they gave an opinion with no information. If your child chose C (I saw it on the news), they gave a personal remark that does not introduce the topic."),
        en("Add a transition to join the two sentences so the second adds a new point: Dates give quick energy. ____ they contain fibre that helps digestion.", "Any suitable addition, such as In addition, Also or Furthermore, works because the second sentence adds a new point. Model: Dates give quick energy. In addition, they contain fibre that helps digestion. Ask: is the second sentence a new point or the opposite?"),
        mc("Which sentence does not belong in a paragraph about how the Dubai Metro works? (1) Trains run on a track above and below the ground. (2) Passengers tap a card at the gate. (3) My brother likes football. (4) Trains arrive every few minutes.", ["Sentence 1","Sentence 2","Sentence 4","Sentence 3"], 3, "Sentence 3 is not about how the metro works. All the details in a paragraph should support one topic. If your child chose A (Sentence 1), they overlooked that the track describes how the trains run. If your child chose C (Sentence 4), they missed that train times are part of how the metro works."),
        mc("Which revision is the most formal and precise? Original: The weather was kind of bad and stuff, so lots of people didn't come.", ["The weather was bad, so lots of people did not come.","The weather was kind of stormy, so many people stayed away.","The weather was stormy, so many people stayed home.","The weather was awful and stuff, so many people stayed home."], 2, "It drops slang and vague words and says what the weather was like. If your child chose A, they still used the vague word bad and never said what the weather was like. If your child chose D (and stuff), they kept a casual phrase that does not belong in formal writing."),
        en("Plan the start of a narrative. Write a character, a setting, a problem and one sentence of dialogue to use this opening: Maryam opened the old wooden chest.", "A good plan names the character (Maryam), a setting (for example her grandmother's house), a problem (the chest holds something unexpected), and a line of dialogue in quotation marks with the speaker named. Answers will vary. Ask: what does Maryam find, and what does she say about it?"),
        en("Revise to add sensory detail: The market was busy.", "A good answer adds what the reader can see, hear, smell or touch. Model: The market buzzed with voices, and the smell of cardamom and fresh bread drifted between the crowded stalls. Ask: what would you hear if you stood in that market?"),
        en("Revise the ending of this paragraph to restate the main idea without adding a new fact: Camels store fat in their humps. They can go many days without water. They are well suited to desert life.", "A good answer returns to the main idea only. Model: These features show why camels survive so well in the desert. Ask: does your last sentence bring in anything that was not already in the paragraph?"),
        en("A friend's draft argues that children should have less homework, but gives only the reason 'because it is boring'. Explain two ways to improve it.", "A good answer gives two improvements, for example: give a stronger reason that links to the claim (such as time for rest, reading and family); support it with evidence or an example; answer the other side; and use a formal tone. Ask: what reason would convince a teacher?")
      ]
    }
  ]
};
