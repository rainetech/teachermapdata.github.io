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
        en("Rewrite with correct capital letters: on friday hamdan went to abu dhabi.", "On Friday Hamdan went to Abu Dhabi. (A sentence starts with a capital, and so do days, names of people and names of places.) Ask: can you point to each capital and say why it is there?"),
        mc("Which sentence is written correctly?", ["We visit our cousins during ramadan.", "We visit our cousins during Ramadan.", "we visit our cousins during Ramadan."], 1, "B. Ramadan is a special name, like a day or a place, so it starts with a capital. If your child chose A, they missed the capital on Ramadan. If your child chose C, they forgot the capital on the first word, we."),
        en("Add the missing comma to the greeting of a letter: Dear Layla", "Dear Layla, A comma goes after the name in a greeting. Ask: where does the comma go when we say hello at the top of a letter?"),
        en("Add the missing comma to the closing of a letter: Your friend", "Your friend, A comma goes after the closing words, and the name is written on the next line. Ask: what do we write on the line under the comma?"),
        mc("Which is the correct short way to write we are?", ["we'r", "wer'e", "we're"], 2, "C. we're. The apostrophe stands in for the missing letter a in we are. If your child chose A (we'r), they put the apostrophe at the end, not where the letter is missing. If your child chose B (wer'e), they put it one place too late."),
        mc("Which sentence is correct?", ["A falcon's feather was soft.", "A falcons feather was soft.", "A falcons' feather was soft."], 0, "A. One falcon owns the feather, so we add 's after falcon. If your child chose B, they left out the apostrophe. If your child chose C, they put it after the s, which is for more than one falcon."),
        mc("Which is written correctly?", ["Salems' bag", "Salems bag", "Salem's bag"], 2, "C. Salem's bag. The bag belongs to one person, so we add 's. If your child chose A, they put the apostrophe after the s, which is for more than one owner. If your child chose B, they left it out."),
        mc("Which word names a person you like to play with, spelled correctly?", ["friend", "frend", "freind"], 0, "A. friend. A trick is to hear fri and then end. If your child chose C (freind), they swapped the i and the e. If your child chose B (frend), they left out the i."),
        mc("Which spelling completes the sentence, as in: Hind ___ hello to her friend.", ["sed", "said", "sayd"], 1, "B. said. This word is spelled differently from how it sounds, so it is one to learn by heart. If your child chose A (sed), they spelled it by sound alone. If your child chose C (sayd), they copied the y from say."),
        mc("Which end mark goes at the end of this sentence? Can we go to the beach", [".", "?", "!"], 1, "B. A question mark. The sentence asks something, so it ends with a question mark. If your child chose A, they used a full stop, which is for sentences that tell. If your child chose C, they used an exclamation mark, which shows strong feeling."),
        en("Which word comes first in a dictionary: date or camel?", "camel. The first letters are c and d, and c comes before d in the alphabet. Ask: which letter do we look at first when words start with different letters?"),
        en("Explain why Dubai starts with a capital letter but city does not.", "Dubai is the special name of one place, so it needs a capital letter. City is a word for any city, so it does not. Ask: can you think of another special name and a general word to match it?")
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
        mc("Which word completes the sentence? A ____ of birds flew over the creek.", ["tower", "flock", "pile"], 1, "B. A flock is the word for a group of birds. If your child chose A (tower), they may have thought of a tall building, not a group. If your child chose C (pile), that word is for a heap of things."),
        en("Write the plural of each noun: tooth, child, goose.", "teeth, children, geese. These plurals change the word instead of adding s. Ask: why does tooths sound wrong when we say it aloud?"),
        mc("Which word completes the sentence? Maryam made the card all by ____.", ["herself", "her", "hers"], 0, "A. herself. The girl made the card on her own, so we use herself, which points back to Maryam. If your child chose B (her), it would sound as if someone else made it. If your child chose C (hers), that word shows something belongs to her."),
        mc("Which word completes the sentence? Yesterday Khalid ____ a date.", ["eated", "eaten", "ate"], 2, "C. ate. Eat is an irregular verb, and Yesterday needs the past tense, which is ate. If your child chose A (eated), they added ed to an irregular verb. If your child chose B (eaten), that form needs a helper word such as had."),
        en("Fix the verb: Yesterday the birds flyed over the creek.", "Yesterday the birds flew over the creek. Fly is an irregular verb, so the past tense is flew, not flyed. Ask: how do you know this sentence is about the past?"),
        en("Find the adjective in this sentence: The sleepy camel rested in the shade.", "sleepy. It tells what the camel is like, so it is the adjective. Ask: which word in the sentence is the animal that sleepy describes?"),
        mc("Which word is an adverb in this sentence? The oryx ran quickly across the sand.", ["quickly", "across", "sand"], 0, "A. quickly. It tells how the oryx ran, and words that tell how are adverbs. If your child chose B (across), that word tells where. If your child chose C (sand), that is a naming word (a noun)."),
        mc("Which word completes the sentence? Noura wrote her name ____.", ["careful", "carefully", "care"], 1, "B. carefully. The blank tells how she wrote, so we need an adverb, and many adverbs end in ly. If your child chose A (careful), that is the describing word for a noun. If your child chose C (care), that is a noun."),
        en("Join the two sentences into one sentence with the word but: Hamdan wanted to play outside. It was too hot.", "Hamdan wanted to play outside, but it was too hot. (But joins two ideas that go against each other.) Ask: why does but fit better here than and?"),
        mc("Which word completes the sentence? It was raining, ____ we stayed inside.", ["so", "but", "or"], 0, "A. so. Staying inside is the result of the rain, so we join the two parts with so. If your child chose B (but), that word is for ideas that go against each other. If your child chose C (or), that word offers a choice."),
        en("Which is better to say to a teacher? A) Hey, gimme that book.  B) May I please borrow that book?", "B. May I please borrow that book? We use careful, polite words with a teacher. Ask: how would you ask a friend, and how is that different?"),
        en("Write one sentence about a camel that uses an adjective and an adverb.", "A good answer is a full sentence with a describing word for the camel and a word that tells how it moves or acts. Model: The tall camel walked gently across the desert. Ask: which word describes the camel, and which word tells how it moved?"),
        mc("Read: Layla felt nervous before she spoke, but her friends smiled and she soon felt calm. What does the word nervous mean?", ["very hungry", "a little afraid", "full of joy"], 1, "B. a little afraid. The word but and the later word calm are clues that nervous is the opposite of calm. If your child chose A (very hungry), they guessed from the word alone. If your child chose C (full of joy), the smiling friends may have misled them, but the feeling changed to calm."),
        en("The prefix un means not. What does each word mean? unhappy, unlock. Then name the root word (the word left when the prefix is taken away) in unfair.", "unhappy means not happy; unlock means to open something that was locked (undo the lock). The root word in unfair is fair. Ask: what does un do to the meaning of a word?"),
        en("Put these words in order from the quietest to the loudest: shout, whisper, talk. Then say which word is the loudest.", "whisper, talk, shout. Shout is the loudest. (Closely related words can have a weaker or stronger meaning.) Ask: which of the three words would you say in a library, and why?"),
        en("Your teacher read you a story about an enormous whale shark, and enormous means very, very big. Say or write a sentence about a camel, a mountain or a tower that uses the new word enormous.", "A good answer is a full sentence that uses enormous correctly for something very big. Model: The Hajar mountains are enormous. Ask: can you say your sentence aloud and tell me which word shows the size?")
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
        en("Write a sentence that gives your opinion: Is it better to read a book or to play outside?", "A good answer states one clear opinion in a full sentence. Model: I think it is better to play outside. Ask: can you give me one reason for your opinion?"),
        en("Finish this opinion with a reason: I like going to the beach because ...", "A good answer gives a reason that makes sense. Model: I like going to the beach because I can build sandcastles. Ask: does your reason tell me why you like the beach?"),
        en("Write a last sentence for this opinion piece: I think everyone should visit the Hajar mountains. The views are beautiful. The air is cool.", "A good answer ends the piece and repeats the opinion. Model: That is why I think everyone should visit the Hajar mountains. Ask: does your last sentence remind the reader of your opinion?"),
        en("Write two facts about the Arabian oryx.", "A good answer gives two true facts in full sentences. Model: The Arabian oryx has long straight horns. It lives in the desert. Ask: how do you know that each fact is true?"),
        en("Put these steps in order: (A) Water the soil. (B) Dig a small hole. (C) Cover the seed with soil. (D) Put the seed in the hole.", "B, D, C, A. Dig the hole first, then put the seed in, then cover it, then water it. Ask: what would go wrong if we watered before digging?"),
        mc("Which order makes the best story? (A) She found her mother by the dates stall. (B) Hind got lost in the souq. (C) Hind hugged her mother and felt happy.", ["C, B, A", "A, B, C", "B, A, C"], 2, "C. B, A, C. The problem comes first (Hind got lost), then the search ends happily, then the last sentence closes the story. If your child chose A (C, B, A), they started with the ending. If your child chose B (A, B, C), they put finding her mother before getting lost."),
        mc("Choose the best word to start this piece: ____ Maryam ate her breakfast. Then she went to school.", ["First", "Last", "Finally"], 0, "A. First. The next sentence starts with Then, so this word must begin the steps. If your child chose B (Last), that word belongs at the end. If your child chose C (Finally), that is also an ending word."),
        en("Add more detail to this sentence: The falcon flew.", "A good answer adds describing words, or tells where, when or how. Model: The brown falcon flew high over the desert at sunrise. Ask: where, when or how did the falcon fly?"),
        en("Write a sentence that tells how Salem felt when he lost his hat in the wind.", "A good answer says how Salem felt and may tell why. Model: Salem felt sad when the wind blew his hat away. Ask: why do you think Salem felt that way?"),
        mc("Which sentence does not belong? Hind went to the souq. She bought some saffron. I like football. The saffron smelled sweet.", ["She bought some saffron.", "I like football.", "The saffron smelled sweet."], 1, "B. I like football. The other sentences are about Hind at the souq, so this one is about something else. If your child chose A or C, ask them to say whether that sentence is about the souq or not."),
        en("Name two things to check when you read over your own writing.", "Any two of: a capital letter at the start of each sentence and for names, an end mark, spelling, and that every sentence makes sense. Ask: can you read it aloud and listen for mistakes?"),
        en("Talking together, parent and child take turns. Parent: say clearly, Yesterday I saw a falcon at the park with my friend. Then say to your child: Ask me one question about what I said. Answer it. Then say: Now tell me something about falcons or parks.", "A good answer: the child waits until the parent has finished, then asks a question about the falcon that fits, such as Where was the falcon? or What colour was it? The child then listens to the reply and adds a related comment, taking turns without interrupting. Ask: did you wait until I finished before you asked your question?"),
        en("The parent reads aloud this short story, twice if needed: Hamdan and his sister Noura planted a small date palm in their garden. Every day they gave it water. After a month a green leaf grew. They were proud. The child retells the story in their own words.", "A good retell tells who (Hamdan and Noura), what they did (planted a date palm and watered it), what happened (a green leaf grew) and how they felt (proud), in an order that makes sense and in complete sentences. Ask: what happened first, next and last in the story?"),
        en("Parent: show your child a picture or photo of a camel in the desert, or let them draw one first. Say: (1) Tell me about your picture in three complete sentences, speaking clearly. (2) Now tell me one more thing we could add to the picture to show more detail.", "A good answer is three full sentences with details such as colour, size, the sand, the sky or what the camel is doing, spoken clearly and not too fast, with an idea like adding a palm tree or the sun to the drawing. Ask: what else could we add to your picture, and why?"),
        en("Parent and child read a book or page about camels together. Parent: say (1) Tell me two facts you learned, in your own words. (2) Now say the first sentence you would write to start a short report about camels.", "A good answer gives two true facts taken from the book, such as camels store fat in their humps or camels can go a long time without water, said in the child's own words, and a first sentence that names the topic, such as Camels are amazing desert animals. Ask: where in the book did you find each fact?"),
        en("Optional, done with an adult beside you: if you have a tablet or computer, the adult helps you type three sentences about something you learned this week (or write them on paper if you prefer). Then read them aloud and say two things you learned.", "A good answer shows three sentences (typed or written) read aloud. The child names two things they learned and where the information came from, such as a book, a trip or a talk. The adult helps with typing and saving, but the ideas are the child's. Ask: what did you learn, and how did you find out?")
      ]
    }
  ]
};
