// Language Usage practice booklet, Grade 3 expectations. English only. See ma-5.js for the format.
const T = (en, ar) => ({ en, ar });
const en = (question, answer) => ({ q: T(question, question), a: T(answer, answer) });
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });

module.exports = {
  subject: "lu",
  grade: 3,
  framework: "CCSS.ELA",
  englishOnly: true,
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "cps",
      standards: ["L.3.2", "L.3.2a", "L.3.2b", "L.3.2c", "L.3.2d", "L.3.2e", "L.3.2f", "L.3.2g"],
      example: ex(
        "Correct this sentence: maryam said \"i bought dates at the souq in sharjah\"",
        ["Start the sentence with a capital letter: Maryam.", "Names of people and places start with a capital: Maryam, Sharjah. The word I is always a capital.", "Put a comma after said, then the speaker's exact words go inside quotation marks, with the full stop inside the closing marks."],
        "Maryam said, \"I bought dates at the souq in Sharjah.\"",
        "Correct this sentence: maryam said \"i bought dates at the souq in sharjah\"",
        ["Start the sentence with a capital letter: Maryam.", "Names of people and places start with a capital: Maryam, Sharjah. The word I is always a capital.", "Put a comma after said, then the speaker's exact words go inside quotation marks, with the full stop inside the closing marks."],
        "Maryam said, \"I bought dates at the souq in Sharjah.\""
      ),
      items: [
        en("Rewrite with correct capital letters: the souq in dubai opens at nine o'clock.", "The souq in Dubai opens at nine o'clock. (A sentence starts with a capital and the name of a city has a capital.)"),
        en("Which title is written correctly? A) The Falcon And The Desert  B) The Falcon and the Desert", "B (in a title, the first word and the important words have capitals; small words such as and and the do not, unless they come first)."),
        en("Add the missing comma: Noura lives in Sharjah United Arab Emirates.", "Noura lives in Sharjah, United Arab Emirates. (A comma separates the city from the country in an address.)"),
        en("Add the missing punctuation: Hamdan said I love date cookies", "Hamdan said, \"I love date cookies.\" (A comma after said, quotation marks round his words, and a full stop inside the marks.)"),
        en("Write the missing apostrophe: the camels hump was full of fat. (There is one camel.)", "The camel's hump was full of fat. (One owner, so the apostrophe goes before the s.)"),
        en("Write the missing apostrophe: the two girls bags were by the door. (There are two girls.)", "The two girls' bags were by the door. (More than one owner with a plural ending in s, so the apostrophe goes after the s.)"),
        en("Write each pair of words as one word with an apostrophe: did not, she is, we will.", "didn't, she's, we'll"),
        en("Which spelling is correct? A) beleive  B) believe  C) beleave", "B, believe."),
        en("Add the ending to the base word and write the new word: happy + ness, swim + ing.", "happiness (change the y to i before ness) and swimming (double the m before ing)."),
        en("Here are guide words at the top of a dictionary page: camel and canal. Which word would you find on that page? A) cap  B) camp  C) cave", "B, camp. (It comes after camel and before canal in alphabetical order.)"),
        en("Explain why Abu Dhabi and Friday begin with capital letters but city and day do not.", "Abu Dhabi and Friday are the special names of one particular place and one particular day (proper nouns), so they take a capital letter. City and day are general words for any city or any day.")
      ]
    },
    {
      area: "gru",
      standards: ["L.3.1", "L.3.1a", "L.3.1b", "L.3.1c", "L.3.1d", "L.3.1e", "L.3.1f", "L.3.1g", "L.3.1h", "L.3.1i", "L.3.3", "L.3.3a", "L.3.3b", "L.3.4", "L.3.4a", "L.3.4b", "L.3.4c", "L.3.4d", "L.3.5", "L.3.5a", "L.3.5c", "L.3.6"],
      example: ex(
        "Choose the right word: Yesterday Salem (runned / ran) to the metro station.",
        ["Yesterday tells us the action is in the past, so we need a past tense verb.", "Run is an irregular verb: it does not add ed.", "The past tense of run is ran."],
        "ran (Yesterday Salem ran to the metro station.)",
        "Choose the right word: Yesterday Salem (runned / ran) to the metro station.",
        ["Yesterday tells us the action is in the past, so we need a past tense verb.", "Run is an irregular verb: it does not add ed.", "The past tense of run is ran."],
        "ran (Yesterday Salem ran to the metro station.)"
      ),
      items: [
        en("In the sentence \"The tall falcon flew over the creek\", name one adjective and one verb.", "Adjective: tall. Verb: flew."),
        en("Write the plural of each noun: child, fox, baby.", "children, foxes, babies"),
        en("Which is an abstract noun (a thing you cannot touch)? A) oryx  B) kindness  C) souq", "B, kindness."),
        en("Choose the right word: Maryam (buyed / bought) a bag of dates yesterday.", "bought (buy is an irregular verb)."),
        en("Rewrite in the future tense: Khalid walks to the metro station.", "Khalid will walk to the metro station."),
        en("Choose the right word: The girl and her sister (is / are) at the mall.", "are (two people, so a plural verb)."),
        en("Choose the right word: This tower is (taller / tallest) than that one. Then: Of the three towers, the blue one is the (taller / tallest).", "taller (comparing two) and tallest (comparing three)."),
        en("Find the adverb in this sentence: Noura carefully poured the karak.", "carefully (it tells how she poured)."),
        en("Choose the best joining word: We stayed inside (because / but) the sandstorm was strong.", "because (the storm is the reason)."),
        en("Choose the best joining word: Hind wanted to swim, (and / but / or) the pool was closed.", "but (the two ideas go against each other)."),
        en("Is this a complete sentence? \"Because the bus was late.\" Say yes or no and explain, then fix it if needed.", "No, it is a fragment: it does not say what happened because of the late bus. Fix: Omar was late because the bus was late."),
        en("Join the two sentences into one sentence with the word although: Layla was tired. She finished her homework.", "Although Layla was tired, she finished her homework. (Or: Layla finished her homework although she was tired. Although shows the two ideas go against each other.)"),
        en("Salem is writing a school report. (a) Which sentence suits written work better? A) The oryx is, like, super big and stuff.  B) The Arabian oryx is a large animal with long straight horns. (b) Which sentence gives a stronger picture? A) The wind was loud.  B) The wind howled across the dunes.", "(a) B. Written work uses full, careful sentences, while A sounds like everyday speech with a friend. (b) B. The word howled and the place across the dunes help the reader hear and see it."),
        en("Read: The desert was scorching, so Layla wore a hat and drank cool water. (a) What does scorching mean? A) very hot  B) very windy  C) very cold. (b) In the word unlock, which part is the prefix, what does it add to the meaning, and what is the root word? (c) Which book would you use to check how a word is spelled and what it means?", "(a) A, very hot (the hat and the cool water are clues). (b) The prefix is un-, and it means not or the opposite, so unlock means to open the lock. The root word is lock. (c) A dictionary."),
        en("(a) Noura was over the moon about her prize. Does this mean she was on the moon? Say what it really means. (b) Put these words in order from the least hot to the most hot: scorching, warm, hot.", "(a) No. It is a nonliteral phrase meaning she was extremely happy. (b) warm, hot, scorching."),
        en("(a) Some birds come to the creek in winter and fly away when it gets warm. Which word means to move to a different place for a season? A) migrate  B) hatch  C) bury. (b) Choose the word that tells when: Omar ate breakfast. (Later / Beside), he took the metro to school.", "(a) A, migrate. (b) Later (it shows the order in time; beside tells where, not when).")
      ]
    },
    {
      area: "wri",
      standards: ["W.3.1", "W.3.1a", "W.3.1b", "W.3.1c", "W.3.1d", "W.3.2", "W.3.2a", "W.3.3", "W.3.3a", "W.3.3c", "W.3.4", "W.3.5", "W.3.6", "W.3.7", "W.3.8", "W.3.10", "SL.3.1", "SL.3.2", "SL.3.3", "SL.3.4", "SL.3.5", "SL.3.6"],
      example: ex(
        "Put these sentences in the best order to make a short story: (A) At last he waved to the fishermen. (B) Then a wooden dhow sailed into view. (C) Khalid went to the creek at sunrise.",
        ["A story needs a beginning, a middle and an end.", "The beginning sets the scene: C, Khalid went to the creek.", "The middle is what happens next (look for the word Then): B.", "The end brings the story to a close (look for At last): A."],
        "C, B, A",
        "Put these sentences in the best order to make a short story: (A) At last he waved to the fishermen. (B) Then a wooden dhow sailed into view. (C) Khalid went to the creek at sunrise.",
        ["A story needs a beginning, a middle and an end.", "The beginning sets the scene: C, Khalid went to the creek.", "The middle is what happens next (look for the word Then): B.", "The end brings the story to a close (look for At last): A."],
        "C, B, A"
      ),
      items: [
        en("Write a first sentence that states your opinion on this topic: Should children walk to school when they can?", "A good answer states one clear opinion about the topic in a full sentence. Model: I think children should walk to school when they can."),
        en("Give two reasons that support this opinion: Our school should have a daily reading time.", "A good answer gives two different reasons, each in its own sentence. Model: Reading helps us learn new words. It is also calm and fun."),
        en("Join these two sentences with a linking word: Mangroves are important. They protect the coast.", "A good answer joins them with a word such as because. Model: Mangroves are important because they protect the coast."),
        en("Put these sentences in order: (A) Finally, the clean water is sent to homes. (B) First, seawater is taken into a desalination plant. (C) Next, the salt is removed.", "B, C, A (First, Next, Finally show the order)."),
        en("Plan a short story about Maryam, who gets lost in the souq. Write a beginning, a middle and an end in note form.", "A good answer has three parts with a character, a setting and a problem. Model: Beginning: Maryam looks at the spices and loses her aunt. Middle: She asks a shopkeeper for help. End: Her aunt finds her and they drink karak."),
        en("You are writing about the Arabian oryx. Sort these facts into two groups: long straight horns, eats grass, white coat, lives in the desert.", "Group 1, how it looks: long straight horns, white coat. Group 2, food and home: eats grass, lives in the desert."),
        en("Make this sentence more exciting by adding detail: The dhow was nice.", "A good answer adds describing words and details that show the picture. Model: The old wooden dhow rocked gently on the shining blue water."),
        en("Which sentence does not belong, and why? Hamdan's falcon is brown. My bike is red. It hunts in the morning. It rests on a perch at night.", "My bike is red. It is not about the falcon, so it should be taken out."),
        en("Add a sentence of your own to the start of a story that tells where and when it happens, for a character named Salem.", "A good answer names the place and the time and introduces Salem. Model: One quiet morning, Salem walked along the beach in Fujairah."),
        en("Write a closing sentence for a piece that says parks are good for families.", "A good answer returns to the opinion and ends the piece. Model: That is why every neighbourhood should have a park."),
        en("Name three things to check when you proofread your own writing.", "Any three of: capital letters at the start of sentences and names, a full stop or other end mark, correct spelling, apostrophes and commas, and that each sentence makes sense."),
        en("Speaking and listening. Parent: read this aloud slowly, twice if needed: The Arabian oryx has a white coat that keeps it cool, and long straight horns. It lives in the desert and eats grass and leaves. Then say: (1) Tell me the main idea in your own words, and one detail. (2) Now ask me one question about the oryx. Answer it, and let your child listen.", "A good answer gives the main idea, for example: the oryx is an animal that is well suited to the desert, with one detail such as the white coat or the horns. The question is about the topic (for example: How much water does it drink?) and the child waits and listens to the answer before speaking again."),
        en("Speaking and listening, with a grown-up. Parent: choose a topic such as dates, falcons or the metro. Say: (1) Let us talk about it together for a minute, taking turns. (2) Now give me a short talk of four or five sentences: say what it is, then tell some facts, then end with a last sentence. Speak clearly in complete sentences.", "Listen for: taking turns and staying on the topic, a clear start, at least two true facts in a sensible order, a closing sentence, speaking clearly at a steady pace in complete sentences (for example: Falcons are birds of prey. They have sharp eyes.), not single words or fragments."),
        en("Speaking and listening, with a grown-up. Parent: let your child draw a simple picture of a dhow at the creek, or use a photograph. Say: (1) Describe your picture to me in at least four complete sentences. (2) Now read me a short story or poem you like, with expression. Optional, with an adult only: you may record the reading on a phone or tablet and play it back together.", "Listen for: complete sentences with a subject and a verb (for example: A wooden dhow floats on the water), describing words and details that match the picture, speaking clearly. In the reading the child reads smoothly, not too fast, with expression (and, if recorded, enjoys listening back). The picture adds to the message."),
        en("Research and notes, with a grown-up. Parent: read this aloud slowly, twice if needed: Date palms grow well in the desert. Their roots reach deep to find water. The sweet fruit, called dates, gives people energy. Palm leaves are used to make baskets and mats. Then say: (1) Write or say brief notes in a few words, not full sentences. (2) Sort them into two groups: the tree, and how people use it. (3) Then find one more fact in a book and add it to a group. Optional: a grown-up may look at a website with you for this fact.", "Group 1, the tree: grows in the desert, deep roots find water. Group 2, how people use it: dates give energy, leaves make baskets and mats. Notes are short words and phrases, each in the right group, and the extra fact is true, matches its group and says where it came from (the book, or the website if one was used)."),
        en("Writing for different readers, with a grown-up. Write two short notes about the same thing, a trip to the museum: one to a friend, Hamdan, and one to your teacher. (2) Say how the two notes are different. (3) Optional, with a grown-up beside you: type one of the notes on a keyboard, then check and fix it together.", "A good answer has two clear notes with a greeting and a sign-off. The note to the friend is friendly and relaxed (Hi Hamdan, I can't wait for the museum trip!). The note to the teacher is polite and careful (Dear Miss Hind, May I bring a water bottle on the museum trip?). The child can say that the words and tone change with the reader. A typed note is neat, with capitals and full stops checked.")
      ]
    }
  ]
};
