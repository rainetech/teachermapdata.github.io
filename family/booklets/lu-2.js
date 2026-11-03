// Language Usage practice booklet, Grade 2 expectations. English only. See ma-5.js for the format.
const T = (en, ar) => ({ en, ar });
const en = (question, answer) => ({ q: T(question, question), a: T(answer, answer) });
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });

module.exports = {
  subject: "lu",
  grade: 2,
  framework: "CCSS.ELA",
  englishOnly: true,
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "cps",
      standards: ["L.2.2", "L.2.2a", "L.2.2b", "L.2.2c", "L.2.2d", "L.2.2e"],
      example: ex(
        "Correct this sentence: on saturday salem went to dubai",
        ["Start the sentence with a capital letter: On.", "Days of the week, names of people and names of places start with a capital: Saturday, Salem, Dubai.", "A sentence that tells something ends with a full stop."],
        "On Saturday Salem went to Dubai.",
        "Correct this sentence: on saturday salem went to dubai",
        ["Start the sentence with a capital letter: On.", "Days of the week, names of people and names of places start with a capital: Saturday, Salem, Dubai.", "A sentence that tells something ends with a full stop."],
        "On Saturday Salem went to Dubai."
      ),
      items: [
        en("Rewrite with correct capital letters: on friday hamdan went to abu dhabi.", "On Friday Hamdan went to Abu Dhabi. (A sentence starts with a capital, and so do days, names of people and names of places.)"),
        en("Rewrite with correct capital letters: we visit our cousins during ramadan.", "We visit our cousins during Ramadan. (Names of holidays and special months start with a capital.)"),
        en("Add the missing comma to the greeting of a letter: Dear Layla", "Dear Layla, (A comma goes after the name in a greeting.)"),
        en("Add the missing comma to the closing of a letter: Your friend", "Your friend, (A comma goes after the closing words, and the name is written on the next line.)"),
        en("Write each pair of words as one word with an apostrophe: is not, we are, I am.", "isn't, we're, I'm"),
        en("Add the missing apostrophe: A falcons feather was soft.", "A falcon's feather was soft. (The feather belongs to one falcon, so we add 's.)"),
        en("Which is written correctly? A) Salems bag  B) Salem's bag  C) Salems' bag", "B, Salem's bag. (The bag belongs to Salem.)"),
        en("Which word is spelled correctly? A) frend  B) friend  C) freind", "B, friend."),
        en("Which word is spelled correctly? A) sed  B) sayd  C) said", "C, said."),
        en("Add the correct end mark: Can we go to the beach", "Can we go to the beach? (A sentence that asks something ends with a question mark.)"),
        en("Which word comes first in a dictionary: date or camel?", "camel (c comes before d in the alphabet)."),
        en("Explain why Dubai starts with a capital letter but city does not.", "Dubai is the special name of one place, so it needs a capital letter. City is a word for any city, so it does not.")
      ]
    },
    {
      area: "gru",
      standards: ["L.2.1", "L.2.1a", "L.2.1b", "L.2.1c", "L.2.1d", "L.2.1e", "L.2.1f", "L.2.3a"],
      example: ex(
        "Choose the right word: Yesterday Maryam (goed / went) to the souq.",
        ["Yesterday tells us the action already happened, so we need a past tense verb.", "Go is an irregular verb: it does not add ed.", "The past tense of go is went."],
        "went (Yesterday Maryam went to the souq.)",
        "Choose the right word: Yesterday Maryam (goed / went) to the souq.",
        ["Yesterday tells us the action already happened, so we need a past tense verb.", "Go is an irregular verb: it does not add ed.", "The past tense of go is went."],
        "went (Yesterday Maryam went to the souq.)"
      ),
      items: [
        en("Choose the right word: A (flock / tower) of birds flew over the creek.", "flock (a flock is a group of birds)."),
        en("Write the plural of each noun: tooth, child, goose.", "teeth, children, geese"),
        en("Choose the right word: Maryam made the card all by (her / herself).", "herself (the girl did it on her own)."),
        en("Choose the right word: Yesterday Khalid (eated / ate) a date.", "ate (eat is an irregular verb)."),
        en("Fix the verb: Yesterday the birds flyed over the creek.", "Yesterday the birds flew over the creek. (The past tense of fly is flew.)"),
        en("Find the adjective in this sentence: The sleepy camel rested in the shade.", "sleepy (it tells what the camel is like)."),
        en("Find the adverb in this sentence: The oryx ran quickly across the sand.", "quickly (it tells how the oryx ran)."),
        en("Choose the right word: Noura wrote her name (careful / carefully).", "carefully (it tells how she wrote, so we need the adverb)."),
        en("Join the two sentences into one sentence with the word but: Hamdan wanted to play outside. It was too hot.", "Hamdan wanted to play outside, but it was too hot. (But joins two ideas that go against each other.)"),
        en("Choose the best joining word: It was raining, (so / but) we stayed inside.", "so (staying inside is the result of the rain)."),
        en("Which is better to say to a teacher? A) Hey, gimme that book.  B) May I please borrow that book?", "B (careful, polite language is used with a teacher)."),
        en("Write one sentence about a camel that uses an adjective and an adverb.", "A good answer is a full sentence with a describing word for the camel and a word that tells how it moves or acts. Model: The tall camel walked gently across the desert.")
      ]
    },
    {
      area: "wri",
      standards: ["W.2.1", "W.2.2", "W.2.3", "W.2.5"],
      example: ex(
        "Put these sentences in the best order to make a short story: (A) At last he waved to the fishermen. (B) Then a wooden dhow sailed into view. (C) Khalid went to the creek at sunrise.",
        ["A story needs a beginning, a middle and an end.", "The beginning tells who and where: C, Khalid went to the creek.", "The middle tells what happens next (look for the word Then): B.", "The end finishes the story (look for At last): A."],
        "C, B, A",
        "Put these sentences in the best order to make a short story: (A) At last he waved to the fishermen. (B) Then a wooden dhow sailed into view. (C) Khalid went to the creek at sunrise.",
        ["A story needs a beginning, a middle and an end.", "The beginning tells who and where: C, Khalid went to the creek.", "The middle tells what happens next (look for the word Then): B.", "The end finishes the story (look for At last): A."],
        "C, B, A"
      ),
      items: [
        en("Write a sentence that gives your opinion: Is it better to read a book or to play outside?", "A good answer states one clear opinion in a full sentence. Model: I think it is better to play outside."),
        en("Finish this opinion with a reason: I like going to the beach because ...", "A good answer gives a reason that makes sense. Model: I like going to the beach because I can build sandcastles."),
        en("Write a last sentence for this opinion piece: I think everyone should visit the Hajar mountains. The views are beautiful. The air is cool.", "A good answer ends the piece and repeats the opinion. Model: That is why I think everyone should visit the Hajar mountains."),
        en("Write two facts about the Arabian oryx.", "A good answer gives two true facts in full sentences. Model: The Arabian oryx has long straight horns. It lives in the desert."),
        en("Put these steps in order: (A) Water the soil. (B) Dig a small hole. (C) Cover the seed with soil. (D) Put the seed in the hole.", "B, D, C, A"),
        en("Put these sentences in order to make a story: (A) She found her mother by the dates stall. (B) Hind got lost in the souq. (C) Hind hugged her mother and felt happy.", "B, A, C (the problem comes first, then the search, then the ending)."),
        en("Choose the best word to start this piece: ____ Maryam ate her breakfast. Then she went to school. A) First  B) Last  C) Finally", "A, First. (The word Then follows, so this is the first step.)"),
        en("Add more detail to this sentence: The falcon flew.", "A good answer adds describing words, or tells where, when or how. Model: The brown falcon flew high over the desert at sunrise."),
        en("Write a sentence that tells how Salem felt when he lost his hat in the wind.", "A good answer says how Salem felt and may tell why. Model: Salem felt sad when the wind blew his hat away."),
        en("Which sentence does not belong, and why? Hind went to the souq. She bought some saffron. I like football. The saffron smelled sweet.", "I like football. It is not about Hind at the souq, so it should be taken out."),
        en("Name two things to check when you read over your own writing.", "Any two of: a capital letter at the start of each sentence and for names, an end mark, spelling, and that every sentence makes sense.")
      ]
    }
  ]
};
