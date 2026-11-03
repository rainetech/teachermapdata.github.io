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
      standards: ["L.4.1a", "L.4.1b", "L.4.1c", "L.4.1d", "L.4.1e", "L.4.1f", "L.4.1g", "L.4.3a", "L.4.3c", "L.4.4", "L.4.4a", "L.4.4b", "L.4.4c", "L.4.5", "L.4.5a", "L.4.5b", "L.4.5c"],
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
        en("Replace \"said\" with a more exact word: \"Look out!\" said Salem. Then explain why your word is better.", "Example: \"Look out!\" shouted Salem (shouted shows how loudly he spoke; warned also works). A good answer gives an exact word and says what it shows that \"said\" does not."),
        en("Which of these two sentences suits a note to the head teacher, and why? A) Hey, we're gonna be late. B) We will arrive a few minutes late, and we are sorry.", "B. It uses polite, formal English, which suits a note to a head teacher. A is casual and suits talking with friends."),
        en("Read the sentence: After the long walk, the camels were parched, so Khalid gave them water and they drank deeply. Use the other words in the sentence to work out what \"parched\" means.", "Parched means very dry and thirsty (the clue is that the camels needed water and drank deeply)."),
        en("Which reference book would you use to check the meaning of a word, and which would you use to find another word with a similar meaning?", "A dictionary (or glossary) gives the meaning of a word; a thesaurus gives words with a similar meaning."),
        en("Many English words are built from Greek and Latin roots. The Latin root \"port\" means \"carry\". The Greek root \"tele\" means \"far\" and \"scope\" means \"to look at\". What do the words portable and telescope mean?", "Portable means able to be carried. A telescope is an instrument for looking at things that are far away."),
        en("Name the kind of figurative language in each sentence and say what it means. A) The desert sand was a golden blanket. B) Hamdan ran as fast as a falcon. C) The maths quiz was a piece of cake.", "A is a metaphor (the sand is described as being a blanket: it lies smooth and covers the ground). B is a simile (it compares using \"as ... as\": Hamdan ran very fast). C is an idiom (the quiz was very easy; it does not mean real cake)."),
        en("Write one synonym for \"enormous\" and one antonym for \"ancient\".", "Synonym for enormous: huge, giant or very big. Antonym for ancient: modern or new."),
        en("Say in your own words what this proverb means: Many hands make light work.", "When many people share a job, it is easier and quicker to finish.")
      ]
    },
    {
      area: "wri",
      standards: ["W.4.1", "W.4.2", "W.4.3", "W.4.4", "W.4.5", "W.4.7", "W.4.9", "W.4.10", "SL.4.1", "SL.4.2", "SL.4.3", "SL.4.4", "SL.4.6"],
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
        en("Plan a short story called \"A Trip to the Hajar Mountains\" with a family. Write one sentence for the beginning, one for the middle and one for the end.", "A good answer has three sentences: a beginning that sets the scene, a middle with a problem or an exciting event, and an end that solves it. Answers will vary."),
        en("Why does it help to make a plan before you write a story? Give one reason.", "Any sensible reason, for example: the ideas are in order before writing, so the story is clear and stays on the topic."),
        en("Speaking and listening (parent task). First read a short book or article about the Hope Probe together (one chosen by an adult). Then say to your child: \"Let us talk about what we read. We will take turns. I will tell you one thing I found interesting, and you ask me a question about it. Then you tell me one thing, and I will ask you a question about it. Let us keep to the topic and not interrupt each other.\" Do three turns each.", "Listen for: the child has read the text first, takes turns, listens without interrupting, asks questions linked to what was just said (for example: Why do you say that? What did you think of ...?), adds ideas that stay on the topic, and speaks politely. Finish with one specific thing the child did well."),
        en("Listening, part one (parent task). Read this talk aloud once, calmly and clearly: \"We should plant mangroves near our beach. Mangrove roots hold the sand, so the shore does not wash away. Young fish hide in the roots, so there are more fish for fishers. The trees also give shade to visitors.\" Then say: \"Tell me in your own words what this talk was about.\"", "A good retell keeps the main ideas in the child's own words and in order: the speaker wants mangroves planted near the beach, and gives reasons about the sand, the fish and the shade. It does not need to repeat the exact words."),
        en("Listening, part two (parent task). Read Salem's talk aloud again. Then ask: \"What does Salem want? Give me two reasons he gives.\"", "Salem wants mangroves planted near the beach. Any two reasons: the roots hold the sand so the shore stays in place; young fish hide in the roots so there are more fish for fishers; the trees give shade to visitors."),
        en("Speaking (parent task). Say to your child: \"Please give me a talk of about one minute called My Favourite Place in the UAE. Pretend you are speaking to your class, so use formal English, for example I would like to tell you about ... Include two or three facts, and speak clearly at a steady pace.\" Listen without interrupting.", "A good talk has an opening that names the place, two or three facts in a sensible order, a closing sentence, a clear voice at a steady pace, and complete sentences in formal English. Give kind, specific feedback on one thing done well and one thing to try next time."),
        en("Research (parent task, with an adult). Choose one UAE animal, such as the oryx, the camel or the falcon. Find four facts from two sources, such as a library book and, if an adult sits with you, a trusted website (the website is optional). Write a short report of three or four sentences in your own words and say where each fact came from.", "A good answer shows four facts from two sources, written in the child's own words (not copied), with each source named (for example the book title). The facts must be true for the animal chosen."),
        en("Write two sentences about the same animal as a note for a younger child. Use simple words and a friendly tone.", "A good answer is two complete sentences with simple words, a friendly tone, and true facts, showing that writing changes for a younger reader. Example: The oryx is a pale, strong animal. It can live in the hot desert for a long time without a drink!"),
        en("Read this paragraph: \"The Arabian oryx is a pale antelope with long straight horns. Its light coat reflects the heat of the sun. It can live for a long time without drinking, because it gets water from the plants it eats.\" Write three sentences that answer: Why is the oryx well suited to desert life? Use at least two facts from the paragraph as evidence.", "A good answer is in the child's own words and uses the paragraph: the pale coat reflects the sun's heat, and the oryx gets water from plants so it can go a long time without drinking. Example: The oryx is well suited to the desert. Its light coat reflects the heat of the sun. Also, it gets water from the plants it eats, so it does not need to drink often.")
      ]
    }
  ]
};
