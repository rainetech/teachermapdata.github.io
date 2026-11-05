// Language Usage practice booklet, Grade 8 expectations. English only. See ma-5.js for the format.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const en = (question, answer) => it(question, answer, question, answer);
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });
const mc = (qEn, optsEn, correct, whyEn) => ({ q: T(qEn, qEn), a: T(whyEn, whyEn), options: { en: optsEn, ar: optsEn }, correct });
const exEn = (question, steps, answer) => ex(question, steps, answer, question, steps, answer);

module.exports = {
  subject: "lu",
  grade: 8,
  framework: "CCSS.ELA",
  englishOnly: true,
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "cps",
      standards: ["L.8.2", "L.8.2a", "L.8.2b", "L.8.2c"],
      example: exEn(
        "Correct this sentence: when the hope probe reached mars the team in dubai cheered",
        [
          "Capital letters for names: Hope Probe, Mars and Dubai.",
          "The sentence opens with a clause (When the Hope Probe reached Mars), so a comma follows it.",
          "A capital letter at the start and a full stop at the end."
        ],
        "When the Hope Probe reached Mars, the team in Dubai cheered."
      ),
      items: [
        mc("Which sentence uses capital letters correctly?", ["In october, the class studied Dubai Creek and the Hajar Mountains.","In October, the class studied Dubai Creek and the Hajar Mountains.","In October, the class studied dubai creek and the hajar mountains.","in October, the class studied Dubai Creek and the Hajar Mountains."], 1, "B. Months and the names of particular places start with a capital letter, and so does the first word of a sentence. If your child chose A, they missed that October is a month; if they chose C, they forgot that Dubai Creek and the Hajar Mountains are names."),
        en("Add the comma: Although the road was closed Hamdan reached the airport on time.", "Although the road was closed, Hamdan reached the airport on time. A comma goes after an opening clause that starts with 'although'. Ask: can you hear the pause after 'closed' when you read it aloud?"),
        en("Add commas where they are needed: The tall sleek falcon landed on Salem's glove.", "The tall, sleek falcon landed on Salem's glove. You could say 'sleek and tall' or put 'and' between the two words, so a comma is needed. Ask: does it still sound right with 'and' in the middle?"),
        mc("Which phrase needs a comma between the adjectives?", ["the old wooden boat","the quiet calm creek","the large blue bag","the new school bus"], 1, "B. Quiet and calm can be swapped or joined with 'and', so they need a comma: the quiet, calm creek. If your child chose A, they treated 'old wooden' as a pair, but 'wooden boat' works as one idea, so no comma is needed."),
        en("Add the commas: Dubai Creek which runs through the old part of the city is popular with visitors.", "Dubai Creek, which runs through the old part of the city, is popular with visitors. The commas wrap extra information that can be removed without changing the main meaning. Ask: if you cover the middle part, does the sentence still make sense?"),
        en("Punctuate it: Khalid said we leave at noon", "Khalid said, \"We leave at noon.\" A comma comes before the speech, the spoken words begin with a capital letter, and the full stop sits inside the quotation marks. Ask: which words did Khalid actually say?"),
        mc("Which sentence is punctuated correctly?", ["The metro was crowded, so Hind stood near the door.","The metro was crowded so, Hind stood near the door.","The metro, was crowded so Hind stood near the door.","The metro was crowded so Hind stood, near the door."], 0, "A. A comma goes before 'so' when it joins two complete sentences. If your child chose B, they put the comma after 'so' instead of before it; if they chose C, they put a comma between the subject and its verb."),
        mc("Which word is spelled correctly?", ["acommodate","accomodate","accommodate","acomodate"], 2, "C. Accommodate has two c's and two m's, so try saying it in chunks: ac-com-mo-date. If your child chose B, they wrote only one m; if they chose A, they wrote only one c."),
        en("Choose the right word: The falcon spread (its / it's) wings and rose over the dunes.", "its. 'It's' always means 'it is' or 'it has', but here the wings belong to the falcon, so 'its' is needed. Ask: does 'it is wings' make sense? If not, use 'its'."),
        mc("Choose the word that completes the sentence: The heat had a strong ____ on the camels.", ["affect","effect","afect","effects of"], 1, "B. A noun meaning a result is needed here, and 'effect' is that noun. If your child chose A, they used 'affect', which is a verb meaning to influence."),
        en("Which punctuation best shows a thought that trails off? Noura said, \"I was going to tell you, but then I...\" Name the mark at the end and say what it does.", "An ellipsis (three dots). It shows that the speaker's words trail off or are left unfinished. A good answer names the mark and says what it shows. Ask: how would Noura's voice sound at the end of that line?"),
        en("A report says: \"The park opened in 2019, welcomed its first school groups that spring, and now has thousands of visitors each year.\" Shorten the quotation to leave out the middle part, and explain what the punctuation shows.", "The park opened in 2019 ... and now has thousands of visitors each year. The ellipsis shows that words were left out, and the meaning must stay fair to the source. Ask: does the shortened version still say what the writer meant?")
      ]
    },
    {
      area: "gru",
      standards: ["L.8.1", "L.8.1a", "L.8.1b", "L.8.1c", "L.8.1d", "L.8.3", "L.8.3a"],
      example: exEn(
        "Rewrite in the active voice: The race was won by Layla.",
        [
          "Find who did the action: Layla won.",
          "Make that person the subject: Layla ...",
          "Use an active verb: Layla won the race."
        ],
        "Layla won the race."
      ),
      items: [
        en("Name the gerund: Swimming in the sea is Salem's favourite hobby.", "Swimming. A gerund is a verb form ending in -ing that works as a noun, here the subject of the sentence. Ask: what is the sentence about? The answer is swimming."),
        mc("Which word is the participle in this sentence, used to describe the camel? The sleeping camel did not move.", ["camel","did","sleeping","move"], 2, "C. 'Sleeping' is a verb form working as an adjective that describes the camel. If your child chose A, they picked the noun being described; if they chose D, they picked the main verb 'move'."),
        en("Name the infinitive and say how it is used: Noura hopes to visit the Hajar Mountains.", "to visit. It is the thing Noura hopes, so it works as a noun, the object of 'hopes'. A good answer names the infinitive and says how it is used. Ask: what does Noura hope to do?"),
        mc("Which sentence is in the active voice and keeps the meaning of: The mangrove seedlings were planted by the students.", ["The students planted the mangrove seedlings.","The mangrove seedlings were planted by the students.","The mangrove seedlings planted the students.","The students were planting by the mangrove seedlings."], 0, "A. The students did the action, so they become the subject: 'The students planted the mangrove seedlings.' If your child chose B, they picked the original passive sentence; if they chose C, they swapped doer and receiver so the meaning changed."),
        en("Change to the passive voice: Engineers built the new metro station.", "The new metro station was built by engineers. The receiver of the action becomes the subject, and 'was built' is the passive verb. Ask: who or what is the sentence about now? It should be the station."),
        en("Name the verb in the subjunctive mood: If I were the captain of the dhow, I would sail at dawn.", "were. The subjunctive is used for a situation that is imagined or contrary to fact, and here the speaker is not the captain. Ask: is the speaker really the captain? If not, 'were' fits."),
        mc("Choose the right verb: I wish the souq ____ open tonight.", ["is","was","has been","were"], 3, "D. A wish about something that is not true uses the subjunctive 'were'. If your child chose B, they used 'was', which sounds natural in everyday speech but is not the form for a wish."),
        en("Correct the shift in voice: Hamdan carried the water, and the tent was set up by him.", "Hamdan carried the water and set up the tent. Both verbs now stay in the active voice. Ask: does Hamdan do both actions? Then both verbs should show him doing them."),
        mc("Which version keeps the same mood throughout? First, add the water to the pot, and then you should stir the mixture.", ["First, add the water to the pot, and then you should stir the mixture.","First, add the water to the pot, and then stir the mixture.","First, add the water to the pot, and then you will stir the mixture.","First, add the water to the pot, and then you might stir the mixture."], 1, "B. Both instructions are commands: add, then stir. If your child chose A, they kept 'you should stir', which switches from a command to advice; if they chose D, 'you might stir' does the same. If your child chose C, 'you will stir' also switches from a command to a statement."),
        en("Combine the sentences with a participial phrase: Omar walked along the beach. He collected shells.", "Model: Walking along the beach, Omar collected shells. A good answer starts with an -ing phrase and keeps Omar as the one doing both actions. Ask: who is walking, and who is collecting? It must be the same person."),
        mc("Which sentence does not say who painted the wall?", ["The wall was painted.","Hamdan painted the wall.","Hamdan and Hind painted the wall.","The wall was painted by Hamdan."], 0, "A. 'The wall was painted' is passive and has no 'by' phrase, so the painter is not named. If your child chose D, they overlooked 'by Hamdan', which names who did it."),
        en("A scientist writes: The water samples were tested twice. Explain why the passive voice suits this sentence.", "A good answer says the test results matter more than who did the testing, so the passive puts the samples first and leaves out the doer. Ask: does the reader need to know who did the testing? Formal science writing often leaves that out.")
      ]
    },
    {
      area: "wri",
      standards: ["W.8.1", "W.8.1a", "W.8.1b", "W.8.1c", "W.8.2", "W.8.2a", "W.8.2b", "W.8.2c", "W.8.3", "W.8.3a", "W.8.3b", "W.8.3d", "W.8.5"],
      example: exEn(
        "Plan an argument paragraph: should schools in the UAE use solar panels? Write a claim, two reasons and a counterclaim with a response.",
        [
          "Claim: Schools in the UAE should use solar panels.",
          "Reason 1: the country has strong sunshine for most of the year.",
          "Reason 2: solar power lowers electricity costs over time.",
          "Counterclaim: panels cost a lot to install. Response: the savings repay the cost over the years."
        ],
        "Claim: Schools in the UAE should use solar panels. Reasons: strong sunshine all year, and lower electricity costs over time. Counterclaim: panels are expensive to install. Response: the savings repay the cost over the years."
      ),
      items: [
        mc("Which sentence is a claim that can be argued?", ["Every school in the UAE should offer a coding class.","The Burj Khalifa is in Dubai.","Dubai Creek runs through the city.","The school day starts at eight."], 0, "A. A claim is a position people could agree or disagree with. If your child chose B or C, they picked a fact, which can be checked but not argued."),
        en("Write a counterclaim and a response for this claim: Students should have a longer break at lunchtime.", "A good answer states a fair opposing view and answers it with a reason. Model: Some people say a longer break leaves less time for lessons. However, students who rest and eat properly concentrate better in the afternoon. Ask: is the other side stated fairly, and does your reply give a reason?"),
        en("Plan it: you will argue that your town should plant more shade trees. List a claim, two reasons with evidence, and a counterclaim with a response.", "A good answer has a clear claim, two different reasons each backed by a fact or example (for example, shade lowers the temperature and makes walking safer), and a fair counterclaim (trees need water) with a response (trees native to the UAE need little water). Answers will vary. Ask: what evidence backs each reason?"),
        mc("Choose the best transition to show contrast: Solar power is clean. ____, it costs a lot to install.", ["For example","Therefore","Similarly","However"], 3, "D. 'However' shows contrast, and a clean power source that costs a lot to install is a contrast. If your child chose B, they used 'Therefore', which shows a result and does not fit here."),
        mc("Which revision is in a formal style? Original: Basically, camels are super cool because they can go for ages without water.", ["Camels are super cool because they can go for ages without water.","Camels are remarkable because they can survive for long periods without water.","Camels are, like, amazing since they never need water.","Basically, camels are great because they can go a long time without water."], 1, "B. A formal style uses precise words and no slang. If your child chose D, they kept 'Basically' and 'a long time', which are still casual; if they chose C, they added 'like' and 'amazing'."),
        en("Write an introductory sentence for an informative essay about how mangroves protect the coast.", "A good answer names the topic and prepares the reader for what follows. Model: Mangrove forests protect the UAE coast by holding the soil in place and softening the force of waves. Ask: does the first sentence tell the reader what the essay is about?"),
        mc("Which detail best supports the topic sentence: Date palms are well suited to desert life?", ["Dates are sold in many souqs.","Some families serve dates with karak.","Dates are often given as gifts.","Their deep roots reach water far below the sand."], 3, "D. A supporting detail explains the topic sentence, and deep roots reaching water explain how the palm suits the desert. If your child chose A, they picked a fact about selling dates, which says nothing about the tree."),
        en("Revise this sentence to show the feeling instead of naming it: Hind was nervous.", "A good answer uses actions or details instead of naming the feeling. Model: Hind's hands trembled as she gripped the page, and her voice came out as a whisper. Ask: can you picture what Hind is doing without the word nervous?"),
        en("Plan a narrative. Fill in a planner with a narrator, a setting, a conflict, the main events in order, and a resolution. Use this start: Layla finds a folded map inside an old library book.", "A good plan names who tells the story, a clear setting (for example the library or her home), a conflict (what the map shows and why Layla must follow it), three or more events in order, and a resolution that solves the conflict. Answers will vary. Ask: what problem does Layla have to solve?"),
        mc("Which sentence should be removed from this paragraph? (1) Falcons have sharp eyesight. (2) They can spot small prey from far away. (3) My brother has a new phone. (4) This helps them hunt over open desert.", ["Sentence 3","Sentence 1","Sentence 2","Sentence 4"], 0, "A. Sentence 3 is about a phone, not falcons, so it does not belong. If your child chose B, they picked an opening sentence that actually sets up the topic."),
        en("Revise to remove wordiness: Due to the fact that the road was closed, we were forced to take a different route that was longer.", "Model: Because the road was closed, we took a longer route. Cutting 'due to the fact that' and 'were forced to' keeps the meaning in fewer words. Ask: which words can you remove without losing any meaning?"),
        en("Explain the difference between revising and editing.", "Revising changes the ideas, order, detail and clarity of the writing (adding, removing, moving or rewording parts). Editing fixes the conventions: spelling, punctuation, capital letters and grammar. Ask: is this change about what the writing says, or about how it is spelled and punctuated?")
      ]
    }
  ]
};
