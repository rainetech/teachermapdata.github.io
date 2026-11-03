// Language Usage practice booklet, Grade 4 expectations. English only. See AUTHORING.md for the format.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const en = (questionEn, answerEn) => it(questionEn, answerEn, questionEn, answerEn);
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });

module.exports = {
  subject: "lu",
  grade: 4,
  framework: "CCSS.ELA",
  englishOnly: true,
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "cps",
      standards: ["L.4.2", "L.4.2a", "L.4.2b", "L.4.2c", "L.4.2d"],
      example: ex(
        "Correct this sentence: hamdan asked \"can we ride the metro to dubai mall\"",
        ["Capitalise names of people and places: Hamdan, Dubai Mall.", "Put a comma before the spoken words: asked, \"...", "Capitalise the first word of the speech: Can.", "The speech is a question, so end it with a question mark inside the quotation marks."],
        "Hamdan asked, \"Can we ride the metro to Dubai Mall?\"",
        "Correct this sentence: hamdan asked \"can we ride the metro to dubai mall\"",
        ["Capitalise names of people and places: Hamdan, Dubai Mall.", "Put a comma before the spoken words: asked, \"...", "Capitalise the first word of the speech: Can.", "The speech is a question, so end it with a question mark inside the quotation marks."],
        "Hamdan asked, \"Can we ride the metro to Dubai Mall?\""
      ),
      items: [
        en("Write this book title correctly: the story of the golden falcon", "The Story of the Golden Falcon (capitalise the first word and the important words, but not small words like of and the in the middle)."),
        en("Correct the capital letters: my cousin salem lives in abu dhabi near the sea.", "My cousin Salem lives in Abu Dhabi near the sea. (names of people and places have capitals; sea is a general word)"),
        en("Punctuate it: let us visit the souq said dad", "\"Let us visit the souq,\" said Dad. (a comma inside the quotation marks, and Dad is a name so it has a capital letter)"),
        en("Punctuate it: Maryam said please pass the dates", "Maryam said, \"Please pass the dates.\""),
        en("Add the missing comma: Hamdan wanted to ride the metro but the train was full.", "Hamdan wanted to ride the metro, but the train was full. (a comma goes before the joining word in a sentence made of two complete parts)"),
        en("Which sentence needs a comma before \"and\"? A) Noura packed her bag and went to school. B) Noura packed her bag and her brother packed his.", "B needs a comma before \"and\" (Noura packed her bag, and her brother packed his.). In A, \"and\" joins two actions by the same person, so no comma is needed."),
        en("Choose the correct spelling and write the sentence: The oryx is a (beautiful / beutiful) animal.", "beautiful: The oryx is a beautiful animal."),
        en("Find and fix the spelling mistake: The mangrove trees grow in shalow water near the coast.", "shallow: The mangrove trees grow in shallow water near the coast."),
        en("Write the plural of each word: family, day, box, wish.", "families (change y to i and add es), days, boxes, wishes"),
        en("Correct everything: layla asked can we visit al ain in winter", "Layla asked, \"Can we visit Al Ain in winter?\""),
        en("Explain why Dad has a capital letter in A but dad does not in B. A) I asked Dad for help. B) I asked my dad for help.", "In A, Dad is used as a name (it stands in for the person's name), so it takes a capital letter. In B, my dad is a general word for a family member, with my in front of it, so it does not.")
      ]
    },
    {
      area: "gru",
      standards: ["L.4.1a", "L.4.1b", "L.4.1c", "L.4.1d", "L.4.1e", "L.4.1f", "L.4.1g", "L.4.3a", "L.4.3c"],
      example: ex(
        "Choose the best word to finish the sentence: The girl ___ kite flew highest won a prize. (who / whose / which)",
        ["The missing word links the girl to the kite that belongs to her.", "A word that shows belonging is needed, so choose whose.", "Check by reading it aloud: The girl whose kite flew highest won a prize."],
        "whose",
        "Choose the best word to finish the sentence: The girl ___ kite flew highest won a prize. (who / whose / which)",
        ["The missing word links the girl to the kite that belongs to her.", "A word that shows belonging is needed, so choose whose.", "Check by reading it aloud: The girl whose kite flew highest won a prize."],
        "whose"
      ),
      items: [
        en("Choose who, which, whose or where: This is the beach ___ we found shells.", "where (it tells the place)"),
        en("Choose who, which, whose or where: My uncle, ___ drives a bus, knows every road in Sharjah.", "who (it refers to a person)"),
        en("Write the past progressive form of \"walk\": Salem ___ along the creek when it began to rain.", "was walking"),
        en("Write the future progressive form of \"drive\": Tomorrow at noon, we ___ to Al Ain.", "will be driving"),
        en("Choose the best helping verb (must, might, can): It is cloudy this morning, so it ___ rain later.", "might (it shows the rain is possible, not certain)"),
        en("Choose the best helping verb (must, might, can): At the cycling track there is a rule: cyclists ___ wear a helmet.", "must (it shows a rule that has to be followed)"),
        en("Which phrase has the adjectives in the right order? A) a brown young big camel B) a big young brown camel C) a young brown big camel", "B (size, then age, then colour)"),
        en("Finish the sentence with a phrase that begins with a word like on, under or near: The falcon landed ___.", "Answers vary. Example: The falcon landed on Khalid's glove. (The phrase must begin with a word such as on, under or near and tell where.)"),
        en("Which is a fragment? A) Running across the sand. B) Omar ran across the sand. Then rewrite it as a complete sentence.", "A is a fragment (it has no complete action by someone). Example fix: Omar was running across the sand."),
        en("Fix this run-on sentence in two different ways: The metro was crowded Layla found a seat near the door.", "Example 1: The metro was crowded. Layla found a seat near the door. Example 2: The metro was crowded, but Layla found a seat near the door."),
        en("Choose the right words: Hind has (to / too / two) cousins, and she wants (to / too / two) visit them (to / too / two).", "Hind has two cousins, and she wants to visit them too."),
        en("Replace \"said\" with a more exact word: \"Look out!\" said Salem. Then explain why your word is better. Also say which of these two sentences suits a note to the head teacher: A) Hey, we're gonna be late. B) We will arrive a few minutes late, and we are sorry.", "Example: \"Look out!\" shouted Salem (shouted shows how loudly he spoke; warned also works). The note to the head teacher should use B, because it is polite and formal.")
      ]
    },
    {
      area: "wri",
      standards: ["W.4.1", "W.4.2", "W.4.3", "W.4.4", "W.4.5"],
      example: ex(
        "Put these sentences in order to make instructions for planting a tree: A) Then water it every day. B) First, dig a small hole in the soil. C) Finally, watch it grow. D) Next, place the seedling in the hole.",
        ["Look for the order words: First, Next, Then, Finally.", "First comes B (dig the hole), because you cannot plant before there is a hole.", "Next comes D (place the seedling), then A (water it), and Finally C (watch it grow)."],
        "B, D, A, C",
        "Put these sentences in order to make instructions for planting a tree: A) Then water it every day. B) First, dig a small hole in the soil. C) Finally, watch it grow. D) Next, place the seedling in the hole.",
        ["Look for the order words: First, Next, Then, Finally.", "First comes B (dig the hole), because you cannot plant before there is a hole.", "Next comes D (place the seedling), then A (water it), and Finally C (watch it grow)."],
        "B, D, A, C"
      ),
      items: [
        en("Put the sentences in order to make a short story: A) At last, she found the key under the cushion. B) One evening, Noura could not find her house key. C) She searched the hall, the kitchen and her bag. D) She smiled and put it safely on its hook.", "B, C, A, D (beginning, middle, solution, ending)"),
        en("Write one sentence that states your opinion on this question: Should every classroom have a reading corner?", "A good answer states a clear opinion in a complete sentence. Example: I believe every classroom should have a reading corner because it makes reading feel welcoming."),
        en("Make a plan for an opinion paragraph: \"Every classroom should have a plant.\" Write your opinion, two reasons and one example for each reason.", "A good plan has the opinion, two different reasons, and an example for each. Example: Reason 1: plants make the air feel fresher (example: the aloe plant by the window). Reason 2: caring for a plant teaches responsibility (example: a pupil waters it each Monday)."),
        en("Which sentence does not belong in a paragraph about falcons? A) Falcons have sharp eyesight. B) Falcons can fly very fast. C) My cousin has a red bicycle. D) Falcons hunt from the sky.", "C (it is not about falcons)"),
        en("Choose the best linking phrase: Mangroves protect the coast. ___, they give young fish a safe place to grow. (In addition / However / Suddenly)", "In addition (it adds a second reason or fact)"),
        en("Join the two sentences with a linking word: Camels store fat in their humps. They can travel far without food.", "Example: Camels store fat in their humps, so they can travel far without food. (Because also works if the order is changed.)"),
        en("Which opening is better for a story, and why? A) There was a girl. B) One morning, Hind heard a tapping sound from the garden wall.", "B. It names a person, a time and something interesting that makes the reader want to know more."),
        en("Revise this sentence by adding at least two details: The boat went on the creek.", "Answers vary. Example: The small wooden boat drifted gently along the quiet creek at sunrise."),
        en("Write a concluding sentence for this paragraph: The Dubai Metro is fast and clean. Passengers can reach many parts of the city without sitting in traffic. Trains arrive every few minutes.", "A good answer sums up the main idea and does not add a new topic. Example: This is why the metro is a good choice for travelling around the city."),
        en("Edit this paragraph (there are several mistakes): yesterday we visit the date farm. we picked many dates they was sweet.", "Yesterday we visited the date farm. We picked many dates. They were sweet. (capital letters, past tense visited, full stops to separate the sentences, were not was)"),
        en("Plan a short story called \"A Trip to the Hajar Mountains\" using a beginning, a middle and an end. Write one sentence for each part and say why a plan helps.", "A good answer has three sentences: a beginning that sets the scene, a middle with a problem or exciting event, and an end that solves it. A plan helps because the ideas are in order before writing, so the story is clear and stays on topic.")
      ]
    }
  ]
};
