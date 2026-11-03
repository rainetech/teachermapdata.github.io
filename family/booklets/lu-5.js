// Language Usage practice booklet, Grade 5 expectations. English only. See ma-5.js for the format.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const en = (question, answer) => it(question, answer, question, answer);
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });
const exEn = (question, steps, answer) => ex(question, steps, answer, question, steps, answer);

module.exports = {
  subject: "lu",
  grade: 5,
  framework: "CCSS.ELA",
  englishOnly: true,
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "cps",
      standards: ["L.5.2", "L.5.2a", "L.5.2b", "L.5.2c", "L.5.2d", "L.5.2e"],
      example: exEn(
        "Correct this sentence: after school on tuesday maryam bought dates milk and bread at the souq",
        [
          "Capital letters: the day Tuesday and the name Maryam.",
          "A comma after the opening phrase: After school on Tuesday, Maryam ...",
          "Commas between the items in a list: dates, milk, and bread.",
          "A full stop at the end."
        ],
        "After school on Tuesday, Maryam bought dates, milk, and bread at the souq."
      ),
      items: [
        en("Correct the sentence: on friday, salem visited dubai mall with his cousin.", "On Friday, Salem visited Dubai Mall with his cousin. (days, names and places start with capital letters)"),
        en("Choose the right word: The children put (their / there / they're) bags by the door.", "their (it shows the bags belong to the children)"),
        en("Add the commas: Maryam packed dates water a hat and sunscreen for the desert trip.", "Maryam packed dates, water, a hat, and sunscreen for the desert trip. (commas separate items in a series; the comma before 'and' is optional)"),
        en("Add the missing comma: After the sun set the camels walked quietly home.", "After the sun set, the camels walked quietly home. (a comma follows an opening phrase or clause)"),
        en("Punctuate it: Noura you are ready for the race aren't you", "Noura, you are ready for the race, aren't you? (commas set off a name being spoken to and a tag question; the sentence ends with a question mark)"),
        en("Choose the correct way to show the title of the poem Rain on the Creek: quotation marks or italics?", "Quotation marks: \"Rain on the Creek\". (short works such as poems and short stories use quotation marks; book titles are underlined or in italics)"),
        en("Which spelling is correct: recieve, receive or receeve?", "receive (i before e, except after c)"),
        en("Choose the right word: The dhow sailed (threw / through) the narrow part of the creek.", "through (threw is the past tense of throw)"),
        en("Add the apostrophe: Khalid borrowed Maryams pencil.", "Khalid borrowed Maryam's pencil. (an apostrophe and s show that the pencil belongs to Maryam)"),
        en("Punctuate it: Salem asked Where is the metro station", "Salem asked, \"Where is the metro station?\" (a comma before the quotation, a capital letter to begin the speech, and the question mark inside the quotation marks)"),
        en("Add a comma: The souq was busy but Omar found the spice shop quickly.", "The souq was busy, but Omar found the spice shop quickly. (a comma goes before 'but' when it joins two complete sentences)"),
        en("Explain why one of these sentences is wrong: (a) I visited Abu Dhabi in March. (b) I visited the city in march.", "Sentence (b) is wrong because months are named and begin with a capital letter: March. In sentence (a) both Abu Dhabi and March are correct.")
      ]
    },
    {
      area: "gru",
      standards: ["L.5.1", "L.5.1a", "L.5.1b", "L.5.1c", "L.5.1d", "L.5.1e", "L.5.3", "L.5.3a", "L.5.4", "L.5.4a", "L.5.4b", "L.5.4c", "L.5.5", "L.5.5a", "L.5.5b", "L.5.5c", "L.5.6"],
      example: exEn(
        "Choose the correct verb and say why: By the time Hind reached the stadium, the match (started / had started).",
        [
          "Two things happened in the past. The match began first, then Hind arrived.",
          "The earlier action uses the past perfect: had + the past participle.",
          "So the match had started."
        ],
        "had started"
      ),
      items: [
        en("Choose the right verb: Hamdan (has visited / have visited) the space exhibition three times.", "has visited (present perfect: the subject Hamdan is one person)"),
        en("Choose the right verb: By the time we got to the creek, the dhow (left / had left).", "had left (the leaving happened before we got there, and By the time needs the past perfect)"),
        en("Complete with the future perfect of finish: By sunset, the fishermen ____ their work.", "will have finished (the work will be complete before a time in the future)"),
        en("Correct the shift in tense: Layla walked to the souq and buys some dates.", "Layla walked to the souq and bought some dates. (both actions are in the past)"),
        en("Complete the pair of words: Either Hind ____ Khalid will carry the water bottles.", "or (either goes with or)"),
        en("Choose the right pair: (Neither / Either) Salem nor Noura has seen a real oryx.", "Neither (neither goes with nor)"),
        en("Name the preposition and say what it shows: The dhow sailed across the creek.", "across; it shows where the dhow sailed (the path of its movement)"),
        en("Which word is the conjunction, and what does it do? Maryam wanted to swim, but the pool was closed.", "but; it joins two ideas and shows a contrast"),
        en("Name the interjection: Wow, the Burj Khalifa is so tall!", "Wow (a word that shows a sudden feeling)"),
        en("Combine into one smooth sentence: The falcon is fast. The falcon is brown. The falcon flew over the dunes.", "Model answer: The fast, brown falcon flew over the dunes. (any single sentence with all three ideas is fine)"),
        en("Explain the difference in meaning: (a) Salem has lived in Sharjah for six years. (b) Salem lived in Sharjah for six years.", "(a) Salem still lives in Sharjah now (present perfect). (b) The six years are finished and he no longer lives there (simple past)."),
        en("Use the context to work out the meaning of the word nocturnal. Sentence: The fennec fox is nocturnal, so it sleeps in its burrow by day and hunts at night.", "nocturnal means active at night (the clue is 'sleeps by day and hunts at night')."),
        en("The Greek root bio means life, logy means the study of, and graph means write. What do the words biology and biography mean?", "Biology is the study of living things (bio + logy). A biography is a written account of a person's life (bio + graph)."),
        en("The Latin root port means carry. Using it, and the prefix or suffix, explain the meaning of (a) transport (trans = across), (b) portable (able = can be), (c) export (ex = out).", "(a) transport: to carry across from one place to another. (b) portable: able to be carried. (c) export: to carry goods out of a country."),
        en("Which reference book would you use to check how to say a new word and what part of speech it is?", "A dictionary (it shows the pronunciation and the part of speech)."),
        en("Name the kind of figurative language (simile, metaphor or idiom) and explain what it means. (a) The dunes were a sea of gold at sunset. (b) The falcon swooped like an arrow. (c) Salem was over the moon when the Hope Probe launched.", "(a) a metaphor: the dunes are described as a sea of gold, shining and wide. (b) a simile (uses 'like'): the falcon dived fast and straight. (c) an idiom: Salem was extremely happy; it does not mean he was really above the moon."),
        en("Explain what this adage means: Actions speak louder than words.", "What people do shows what they really mean more than what they say. Example: helping a friend shows kindness more than only saying you are kind."),
        en("Give an antonym of generous and a synonym of enormous.", "antonym of generous: selfish, mean or stingy; synonym of enormous: huge, giant or massive."),
        en("The word wind is spelled the same in two sentences: 'Please wind the string around the stick' and 'A strong wind blew across the dunes.' Does it mean the same in both? Explain, and name this kind of word.", "No. In 'wind the string' (rhymes with kind) it means to turn or twist; in 'a strong wind' (rhymes with pinned) it means moving air. Words spelled the same with different meanings (and here different sounds) are homographs."),
        en("Choose the best word from the box to complete each sentence. One word is not needed. Box: however, in addition, therefore, although. (a) The market has fresh dates; ____, it sells spices. (b) ____ the desert is hot, many animals live there. (c) Layla studied the map carefully; ____, she found the route easily.", "(a) in addition (adds another fact), (b) Although (shows contrast), (c) therefore (shows a result). However is not needed.")
      ]
    },
    {
      area: "wri",
      standards: ["W.5.1", "W.5.1a", "W.5.1b", "W.5.1c", "W.5.2", "W.5.2a", "W.5.2b", "W.5.2c", "W.5.3", "W.5.4", "W.5.5", "W.5.7", "W.5.8", "W.5.9", "W.5.10", "SL.5.1", "SL.5.2", "SL.5.3", "SL.5.4", "SL.5.5", "SL.5.6"],
      example: exEn(
        "Plan an opinion paragraph: should your class have a reading corner? Write an opinion and two reasons.",
        [
          "State the opinion clearly: Our class should have a reading corner.",
          "Reason 1: it gives a quiet place to read when work is finished.",
          "Reason 2: children who read more find new words and ideas.",
          "Plan a closing sentence that repeats the opinion."
        ],
        "Opinion: Our class should have a reading corner. Reasons: a quiet place to read, and more reading builds new words and ideas. Closing: A reading corner would help everyone enjoy books."
      ),
      items: [
        en("Put these sentences in order to make a paragraph: (1) That is why mangroves are worth protecting. (2) Mangroves are trees that grow in salty water along the coast of the UAE. (3) Fish and crabs also hide among the roots. (4) Their roots hold the mud in place and protect the shore.", "2, 4, 3, 1 (topic sentence first, then the roots, then 'also' adds another detail, and the closing sentence last)"),
        en("Plan it: you will persuade your school to start a recycling bin for plastic bottles. Write your opinion and two reasons.", "A good answer states a clear opinion and gives two different reasons, each with a fact or example. Model: Our school should start a recycling bin for plastic bottles because it keeps litter out of the desert and teaches us to look after our country."),
        en("Which is the better opinion sentence? (a) Recycling is a thing. (b) Our school should add recycling bins because they keep plastic out of the sea.", "(b): it says what should happen and gives a reason. (a) is vague and gives no opinion."),
        en("Write a topic sentence for a paragraph about how a desalination plant makes drinking water.", "A good answer names the topic and tells the reader what the paragraph will explain. Model: A desalination plant turns salty sea water into water that is safe to drink."),
        en("Join the two ideas with a linking word or phrase: Parks help children stay healthy. Parks give families a place to meet.", "Model: Parks help children stay healthy. Also, they give families a place to meet. (other good links: in addition, as well as, another reason)"),
        en("Which sentence does not belong in a paragraph about animals of the Hajar mountains? (a) Arabian tahr climb steep rocky slopes. (b) Some birds nest in the cliffs. (c) My cousin has a red bicycle. (d) Lizards rest on warm rocks.", "(c): it is not about animals of the mountains. A paragraph should keep to one topic."),
        en("Plan a short story. Fill in a planner with a character, a setting, a problem, three main events and an ending. Use this start: Hind and her cousins find a lost key on the beach.", "A good plan has named characters (Hind and her cousins), a setting (the beach), a problem (whose key is it?), three events in order, and an ending that solves the problem. Answers will vary."),
        en("Revise to add detail: We went to a place and saw an animal.", "Model: On Friday we went to the beach and saw a crab scuttling across the wet sand. (a better answer names the time, place and animal, and says what it did)"),
        en("Write a concluding sentence for this paragraph: The Dubai Metro helps people travel without cars. It runs above the ground and under it, and trains arrive often. Fewer cars on the road means cleaner air.", "A good answer restates the main idea and does not add a new fact. Model: For these reasons, the metro is a smart way to travel around the city."),
        en("Revise to avoid repeated words: Khalid likes the souq. Khalid likes the souq because the souq smells of spices.", "Khalid likes the souq because it smells of spices. (pronouns and joining the sentences remove repetition)"),
        en("List three things to check when you proofread your writing.", "Any three of: capital letters, end punctuation, commas, apostrophes, spelling, verb tense stays the same, every sentence is complete."),
        en("Explain two reasons why it helps to plan before you write a first draft.", "A good answer gives two reasons, such as: the ideas can be put in a clear order; you can check that every detail fits the topic; it is easier to see what is missing before you start; and you are less likely to repeat yourself."),
        en("Listening, part one (parent task). Read this talk aloud once, calmly and clearly: \"Mangrove trees should be planted along more of our coast. First, their roots calm the waves and protect the shore. Second, young fish hide among the roots, so fishermen catch more later. Finally, the trees take in carbon dioxide from the air.\" Then say: \"Tell me in your own words what the speaker wants and the reasons given.\"", "A good retelling gives the claim (plant more mangroves) and the three reasons in order: the roots protect the shore, young fish hide there so fishermen catch more later, and the trees take in carbon dioxide. It uses the child's own words."),
        en("Listening, part two (parent task). Read the talk aloud again. Then say: \"Pick one reason the speaker gives. Tell me how it supports the idea that we should plant more mangroves.\"", "A good answer links one reason to the claim. Example: the roots protect the shore, so planting more mangroves keeps the coast safe. Or: fish hide in the roots, so more mangroves means more fish for fishermen. The child may also ask one question about the talk (for example, why do roots protect the shore?)."),
        en("Presentation (parent task). Your child chooses a topic such as the Dubai Metro and prepares three facts and two describing details. They may hold a card with one sentence or a simple drawing. Say: \"Please tell me about your topic in about one minute. Speak clearly at a steady pace, in complete sentences, in formal English, as if you were speaking to your class.\"", "Listen for: a clear opening, three relevant facts in a sensible order, descriptive details, a calm clear voice that is not rushed, complete sentences, and formal English (not slang). The card or drawing should help the listener understand a point. Give one thing done well and one thing to try next time."),
        en("Discussion (parent task). First, your child reads a short book or article about a topic (one chosen by an adult). Then say: \"Let us talk about it. Our rule is that we take turns and do not interrupt. Ask me two questions that need more than yes or no. I will answer, and you build on my answer. At the end, sum up the main ideas in two sentences.\"", "Listen for: the child read the text beforehand, asks questions that need more than yes or no, follows the rule of taking turns, builds on what the parent said, and ends with a short summary of the main ideas."),
        en("Research plan (parent task). Pick a topic such as how the Hope Probe studies Mars. (a) Write one research question. (b) Name two different kinds of sources you could use (a website is optional and only with an adult), and say how you would list one of them.", "(a) An open question, for example: What does the Hope Probe measure on Mars? (b) Two kinds, for example a library book and an interview with a teacher (or a trusted website with an adult). A listed source gives the title, the author or website name, and the date."),
        en("Paraphrase (parent task). Read this sentence to your child: \"The probe orbits the planet and measures how its air changes through the day.\" Say: \"Put this in your own words, without copying.\"", "A paraphrase keeps the meaning and changes the words, for example: The spacecraft circles Mars and checks how the air shifts from morning to night. It must not copy the sentence."),
        en("Using evidence. Read: \"The Arabian oryx almost disappeared from the wild because too many were caught. A breeding programme then raised oryx safely, and later they were returned to protected desert reserves.\" Write two or three sentences to answer: How did people help the oryx? Use evidence from the paragraph.", "A good answer says people ran a breeding programme to raise oryx safely and then returned them to protected reserves, and refers to the text (for example, \"The paragraph says ...\"). It must use details from the paragraph only."),
        en("Write one sentence about the oryx for a friend and one for the school newsletter.", "The friend sentence may be casual (for example: Did you know oryx are back in the desert?); the newsletter sentence is formal and complete (for example: The Arabian oryx has returned to protected desert reserves). Both keep the facts true.")
      ]
    }
  ]
};
