// Language Usage practice booklet, Grade 8 expectations. English only. See ma-5.js for the format.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const en = (question, answer) => it(question, answer, question, answer);
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });
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
        en("Correct the capital letters: in october, the class studied dubai creek and the hajar mountains.", "In October, the class studied Dubai Creek and the Hajar Mountains. (months and the names of particular places begin with capital letters)"),
        en("Add the comma: Although the road was closed Hamdan reached the airport on time.", "Although the road was closed, Hamdan reached the airport on time. (a comma follows an opening clause)"),
        en("Add commas where they are needed: The tall sleek falcon landed on Salem's glove.", "The tall, sleek falcon landed on Salem's glove. (tall and sleek are coordinate adjectives: you could say sleek and tall, or put and between them)"),
        en("Which phrase needs a comma between the adjectives? (a) the old wooden boat (b) the quiet calm creek", "(b) the quiet, calm creek. (quiet and calm can be swapped or joined with and; in (a), wooden boat works as one idea, so there is no comma)"),
        en("Add the commas: Dubai Creek which runs through the old part of the city is popular with visitors.", "Dubai Creek, which runs through the old part of the city, is popular with visitors. (the commas set off extra information that can be removed without changing the main meaning)"),
        en("Punctuate it: Khalid said we leave at noon", "Khalid said, \"We leave at noon.\" (a comma before the quotation, a capital letter to begin the speech, and the full stop inside the quotation marks)"),
        en("Add the missing comma: The metro was crowded so Hind stood near the door.", "The metro was crowded, so Hind stood near the door. (a comma goes before so when it joins two complete sentences)"),
        en("Which spelling is correct: acommodate, accomodate or accommodate?", "accommodate (two c's and two m's)"),
        en("Choose the right word: The falcon spread (its / it's) wings and rose over the dunes.", "its (it's always means it is or it has; its shows that the wings belong to the falcon)"),
        en("Choose the right word: The heat had a strong (affect / effect) on the camels.", "effect (here it is a noun meaning a result; the verb affect means to influence)"),
        en("Which punctuation best shows a thought that trails off? Noura said, \"I was going to tell you, but then I...\" Name the mark at the end and say what it does.", "An ellipsis (three dots). It shows that the speaker's words trail off or are left unfinished."),
        en("A report says: \"The park opened in 2019, welcomed its first school groups that spring, and now has thousands of visitors each year.\" Shorten the quotation to leave out the middle part, and explain what the punctuation shows.", "The park opened in 2019 ... and now has thousands of visitors each year. (the ellipsis shows that words have been omitted from the original; the meaning must stay fair to the source)")
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
        en("Name the gerund: Swimming in the sea is Salem's favourite hobby.", "Swimming (a verb form ending in -ing that works as a noun; it is the subject of the sentence)"),
        en("Name the participle and the word it describes: The sleeping camel did not move.", "sleeping; it describes the camel (a participle is a verb form used as an adjective)"),
        en("Name the infinitive and say how it is used: Noura hopes to visit the Hajar Mountains.", "to visit; it is the thing Noura hopes, so it works as a noun, the object of hopes"),
        en("Change to the active voice: The mangrove seedlings were planted by the students.", "The students planted the mangrove seedlings. (the doer of the action becomes the subject)"),
        en("Change to the passive voice: Engineers built the new metro station.", "The new metro station was built by engineers. (the receiver of the action becomes the subject; was built is the passive verb)"),
        en("Name the verb in the subjunctive mood: If I were the captain of the dhow, I would sail at dawn.", "were (the subjunctive is used for a situation that is imagined or contrary to fact)"),
        en("Choose the right verb: I wish the souq (was / were) open tonight.", "were (a wish about something that is not true uses the subjunctive were)"),
        en("Correct the shift in voice: Hamdan carried the water, and the tent was set up by him.", "Hamdan carried the water and set up the tent. (both verbs now stay in the active voice)"),
        en("Correct the shift in mood: First, add the water to the pot, and then you should stir the mixture.", "First, add the water to the pot, and then stir the mixture. (both instructions now use the imperative mood)"),
        en("Combine the sentences with a participial phrase: Omar walked along the beach. He collected shells.", "Model answer: Walking along the beach, Omar collected shells. (any correct sentence that starts with a phrase such as Walking along the beach and has Omar as the one doing both actions is fine)"),
        en("Which sentence does not say who painted the wall? (a) Hamdan painted the wall. (b) The wall was painted.", "(b). The passive voice lets the writer leave out the doer of the action."),
        en("A scientist writes: The water samples were tested twice. Explain why the passive voice suits this sentence.", "The test results matter more than who did the testing, so the passive voice puts the samples first and the doer can be left out. (formal and scientific writing often uses the passive for this reason)")
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
        en("Which sentence is a claim that can be argued? (a) The Burj Khalifa is in Dubai. (b) Every school in the UAE should offer a coding class.", "(b). It states a position that people could agree or disagree with. (a) is a fact that cannot be argued."),
        en("Write a counterclaim and a response for this claim: Students should have a longer break at lunchtime.", "A good answer states a fair opposing view and answers it with a reason. Model: Some people say a longer break leaves less time for lessons. However, students who rest and eat properly concentrate better in the afternoon."),
        en("Plan it: you will argue that your town should plant more shade trees. List a claim, two reasons with evidence, and a counterclaim with a response.", "A good answer has a clear claim, two different reasons each backed by a fact or example (for example, shade lowers the temperature and makes walking safer), and a fair counterclaim (trees need water) with a response (trees native to the UAE need little water). Answers will vary."),
        en("Choose the best transition to show contrast: Solar power is clean. ____, it costs a lot to install. (For example / However / Therefore)", "However (it joins two ideas that pull against each other)"),
        en("Revise in a formal style: Basically, camels are super cool because they can go for ages without water.", "Model: Camels are remarkable because they can survive for long periods without water. (a good answer removes slang and vague words)"),
        en("Write an introductory sentence for an informative essay about how mangroves protect the coast.", "A good answer names the topic and prepares the reader for what follows. Model: Mangrove forests protect the UAE coast by holding the soil in place and softening the force of waves."),
        en("Which detail best supports the topic sentence Date palms are well suited to desert life? (a) Dates are sold in many souqs. (b) Their deep roots reach water far below the sand. (c) Some families serve dates with karak.", "(b). It gives a fact that explains why the palm suits the desert. (a) and (c) are about dates, not about how the tree survives."),
        en("Revise this sentence to show the feeling instead of naming it: Hind was nervous.", "A good answer uses actions or details. Model: Hind's hands trembled as she gripped the page, and her voice came out as a whisper."),
        en("Plan a narrative. Fill in a planner with a narrator, a setting, a conflict, the main events in order, and a resolution. Use this start: Layla finds a folded map inside an old library book.", "A good plan names who tells the story, a clear setting (for example the library or her home), a conflict (what the map shows and why Layla must follow it), three or more events in order, and a resolution that solves the conflict. Answers will vary."),
        en("Which sentence should be removed from this paragraph? (1) Falcons have sharp eyesight. (2) They can spot small prey from far away. (3) My brother has a new phone. (4) This helps them hunt over open desert.", "Sentence (3). It is not about falcons, and a paragraph should stay on one topic."),
        en("Revise to remove wordiness: Due to the fact that the road was closed, we were forced to take a different route that was longer.", "Model: Because the road was closed, we took a longer route. (the meaning is kept in fewer words)"),
        en("Explain the difference between revising and editing.", "Revising changes the ideas, order, detail and clarity of the writing (adding, removing, moving or rewording parts). Editing fixes the conventions: spelling, punctuation, capital letters and grammar.")
      ]
    }
  ]
};
