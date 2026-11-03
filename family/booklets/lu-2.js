// Language Usage practice booklet, Grade 2 expectations. English only. See ma-5.js for the format.
const T = (en, ar) => ({ en, ar });
const en = (question, answer) => ({ q: T(question, question), a: T(answer, answer) });
const mc = (qEn, optsEn, correct, whyEn) => ({ q: T(qEn, qEn), a: T(whyEn, whyEn), options: { en: optsEn, ar: optsEn }, correct });
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
        mc("Which sentence is written correctly?", ["We visit our cousins during ramadan.", "We visit our cousins during Ramadan.", "we visit our cousins during Ramadan."], 1, "Names of holidays and special months start with a capital, and so does the first word of a sentence."),
        en("Add the missing comma to the greeting of a letter: Dear Layla", "Dear Layla, (A comma goes after the name in a greeting.)"),
        en("Add the missing comma to the closing of a letter: Your friend", "Your friend, (A comma goes after the closing words, and the name is written on the next line.)"),
        mc("Which is the correct short way to write we are?", ["we'r", "wer'e", "we're"], 2, "The apostrophe takes the place of the missing letter a: we're."),
        mc("Which sentence is correct?", ["A falcon's feather was soft.", "A falcons feather was soft.", "A falcons' feather was soft."], 0, "The feather belongs to one falcon, so we add 's."),
        mc("Which is written correctly?", ["Salems' bag", "Salems bag", "Salem's bag"], 2, "The bag belongs to Salem, so we add 's."),
        mc("Which word names a person you like to play with, spelled correctly?", ["friend", "frend", "freind"], 0, "friend."),
        mc("Which spelling completes the sentence, as in: Hind ___ hello to her friend.", ["sed", "said", "sayd"], 1, "said."),
        mc("Which end mark goes at the end of this sentence? Can we go to the beach", [".", "?", "!"], 1, "A sentence that asks something ends with a question mark."),
        en("Which word comes first in a dictionary: date or camel?", "camel (c comes before d in the alphabet)."),
        en("Explain why Dubai starts with a capital letter but city does not.", "Dubai is the special name of one place, so it needs a capital letter. City is a word for any city, so it does not.")
      ]
    },
    {
      area: "gru",
      standards: ["L.2.1", "L.2.1a", "L.2.1b", "L.2.1c", "L.2.1d", "L.2.1e", "L.2.1f", "L.2.3a", "L.2.4", "L.2.4a", "L.2.4b", "L.2.4c", "L.2.5", "L.2.5b", "L.2.6"],
      example: ex(
        "Choose the right word: Yesterday Maryam (goed / went) to the souq.",
        ["Yesterday tells us the action already happened, so we need a past tense verb.", "Go is an irregular verb: it does not add ed.", "The past tense of go is went."],
        "went (Yesterday Maryam went to the souq.)",
        "Choose the right word: Yesterday Maryam (goed / went) to the souq.",
        ["Yesterday tells us the action already happened, so we need a past tense verb.", "Go is an irregular verb: it does not add ed.", "The past tense of go is went."],
        "went (Yesterday Maryam went to the souq.)"
      ),
      items: [
        mc("Which word completes the sentence? A ____ of birds flew over the creek.", ["tower", "flock", "pile"], 1, "A flock is a group of birds."),
        en("Write the plural of each noun: tooth, child, goose.", "teeth, children, geese"),
        mc("Which word completes the sentence? Maryam made the card all by ____.", ["herself", "her", "hers"], 0, "Herself shows that the girl did it on her own."),
        mc("Which word completes the sentence? Yesterday Khalid ____ a date.", ["eated", "eaten", "ate"], 2, "Eat is an irregular verb: the past tense is ate."),
        en("Fix the verb: Yesterday the birds flyed over the creek.", "Yesterday the birds flew over the creek. (The past tense of fly is flew.)"),
        en("Find the adjective in this sentence: The sleepy camel rested in the shade.", "sleepy (it tells what the camel is like)."),
        mc("Which word is an adverb in this sentence? The oryx ran quickly across the sand.", ["quickly", "across", "sand"], 0, "Quickly tells how the oryx ran."),
        mc("Which word completes the sentence? Noura wrote her name ____.", ["careful", "carefully", "care"], 1, "It tells how she wrote, so we need the adverb carefully."),
        en("Join the two sentences into one sentence with the word but: Hamdan wanted to play outside. It was too hot.", "Hamdan wanted to play outside, but it was too hot. (But joins two ideas that go against each other.)"),
        mc("Which word completes the sentence? It was raining, ____ we stayed inside.", ["so", "but", "or"], 0, "Staying inside is the result of the rain, so we use so."),
        en("Which is better to say to a teacher? A) Hey, gimme that book.  B) May I please borrow that book?", "B (careful, polite language is used with a teacher)."),
        en("Write one sentence about a camel that uses an adjective and an adverb.", "A good answer is a full sentence with a describing word for the camel and a word that tells how it moves or acts. Model: The tall camel walked gently across the desert."),
        mc("Read: Layla felt nervous before she spoke, but her friends smiled and she soon felt calm. What does the word nervous mean?", ["very hungry", "a little afraid", "full of joy"], 1, "The word but and the later word calm are clues that nervous is the opposite of calm."),
        en("The prefix un means not. What does each word mean? unhappy, unlock. Then name the root word (the word left when the prefix is taken away) in unfair.", "unhappy means not happy; unlock means to open something that was locked (undo the lock). The root word in unfair is fair."),
        en("Put these words in order from the quietest to the loudest: shout, whisper, talk. Then say which word is the loudest.", "whisper, talk, shout. Shout is the loudest. (Closely related words can have a weaker or stronger meaning.)"),
        en("Your teacher read you a story about an enormous whale shark, and enormous means very, very big. Say or write a sentence about a camel, a mountain or a tower that uses the new word enormous.", "A good answer is a full sentence that uses enormous correctly for something very big. Model: The Hajar mountains are enormous.")
      ]
    },
    {
      area: "wri",
      standards: ["W.2.1", "W.2.2", "W.2.3", "W.2.5", "W.2.6", "W.2.7", "W.2.8", "SL.2.1", "SL.2.2", "SL.2.3", "SL.2.4", "SL.2.5", "SL.2.6"],
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
        mc("Which order makes the best story? (A) She found her mother by the dates stall. (B) Hind got lost in the souq. (C) Hind hugged her mother and felt happy.", ["C, B, A", "A, B, C", "B, A, C"], 2, "The problem comes first, then the search, then the ending."),
        mc("Choose the best word to start this piece: ____ Maryam ate her breakfast. Then she went to school.", ["First", "Last", "Finally"], 0, "The word Then follows, so this is the first step."),
        en("Add more detail to this sentence: The falcon flew.", "A good answer adds describing words, or tells where, when or how. Model: The brown falcon flew high over the desert at sunrise."),
        en("Write a sentence that tells how Salem felt when he lost his hat in the wind.", "A good answer says how Salem felt and may tell why. Model: Salem felt sad when the wind blew his hat away."),
        mc("Which sentence does not belong? Hind went to the souq. She bought some saffron. I like football. The saffron smelled sweet.", ["She bought some saffron.", "I like football.", "The saffron smelled sweet."], 1, "I like football is not about Hind at the souq, so it should be taken out."),
        en("Name two things to check when you read over your own writing.", "Any two of: a capital letter at the start of each sentence and for names, an end mark, spelling, and that every sentence makes sense."),
        en("Talking together, parent and child take turns. Parent: say clearly, Yesterday I saw a falcon at the park with my friend. Then say to your child: Ask me one question about what I said. Answer it. Then say: Now tell me something about falcons or parks.", "A good answer: the child waits until the parent has finished, then asks a question about the falcon that fits, such as Where was the falcon? or What colour was it? The child then listens to the reply and adds a related comment, taking turns without interrupting."),
        en("The parent reads aloud this short story, twice if needed: Hamdan and his sister Noura planted a small date palm in their garden. Every day they gave it water. After a month a green leaf grew. They were proud. The child retells the story in their own words.", "A good retell tells who (Hamdan and Noura), what they did (planted a date palm and watered it), what happened (a green leaf grew) and how they felt (proud), in an order that makes sense and in complete sentences."),
        en("Parent: show your child a picture or photo of a camel in the desert, or let them draw one first. Say: (1) Tell me about your picture in three complete sentences, speaking clearly. (2) Now tell me one more thing we could add to the picture to show more detail.", "A good answer is three full sentences with details such as colour, size, the sand, the sky or what the camel is doing, spoken clearly and not too fast, with an idea like adding a palm tree or the sun to the drawing."),
        en("Parent and child read a book or page about camels together. Parent: say (1) Tell me two facts you learned, in your own words. (2) Now say the first sentence you would write to start a short report about camels.", "A good answer gives two true facts taken from the book, such as camels store fat in their humps or camels can go a long time without water, said in the child's own words, and a first sentence that names the topic, such as Camels are amazing desert animals."),
        en("Optional, done with an adult beside you: if you have a tablet or computer, the adult helps you type three sentences about something you learned this week (or write them on paper if you prefer). Then read them aloud and say two things you learned.", "A good answer shows three sentences (typed or written) read aloud. The child names two things they learned and where the information came from, such as a book, a trip or a talk. The adult helps with typing and saving, but the ideas are the child's.")
      ]
    }
  ]
};
