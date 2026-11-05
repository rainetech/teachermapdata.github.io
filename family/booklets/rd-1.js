// Reading practice booklet, Grade 1 expectations. English-only: see AUTHORING.md for the format.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const en = (question, answer) => it(question, answer, question, answer);
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });
const mc = (qEn, optsEn, correct, whyEn) => ({ q: T(qEn, qEn), a: T(whyEn, whyEn), options: { en: optsEn, ar: optsEn }, correct });
const exEn = (question, steps, answer) => ex(question, steps, answer, question, steps, answer);

module.exports = {
  subject: "rd",
  grade: 1,
  framework: "CCSS.ELA",
  englishOnly: true,
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "fnd",
      standards: ["RF.1.1", "RF.1.2", "RF.1.3a", "RF.1.3b", "RF.1.3c", "RF.1.3d", "RF.1.4a", "RF.1.4b"],
      example: exEn(
        "Which word has the long a sound: cap, cake or cat?",
        ["Say each word slowly: cap, cake, cat.", "A long vowel says its own name. In cake, the letter a says \"ay\".", "Cap and cat have the short a sound, as in \"apple\"."],
        "cake"
      ),
      items: [
        mc("Which word has the long a sound: can, cake or cat?", ["can","cake","cat"], 1, "Cake, because the a says its name, helped by the silent e. If your child chose can, they picked the short a sound."),
        mc("Which word has the short i sound: kite, sit or bike?", ["kite","bike","sit"], 2, "Sit, because the i is short, like in big. If your child chose kite, they picked a long i, where the i says its name."),
        mc("Which word begins with the sound sh: ship, chip or thin?", ["ship","chip","thin"], 0, "Ship, because it starts with the sound sh. If your child chose chip, they mixed up sh and ch, which sound alike."),
        en("Which word begins with the sound ch: shop, chop or this?", "Chop. A good answer says it starts with ch, as in chair. Ask: what two letters do you see at the start?"),
        mc("Which word ends with the sound th: bath, back or bag?", ["back","bag","bath"], 2, "Bath, because it ends with th. If your child chose back, they heard the k sound at the end, not th."),
        en("Add a silent e to the word hop. What new word do you make?", "Hope. A good answer adds an e to hop, and the o says its name. Ask: does the o say its name or a short sound?"),
        en("Which two letters make the blend at the start of the word frog?", "Fr. A good answer says f and r are two letters that blend together. Ask: what sound do you hear first?"),
        en("How many syllables (beats) are in the word basket? Clap it: bas-ket.", "Two syllables, bas and ket. A good answer claps two beats. Ask: can you clap it for me?"),
        mc("Which word has the long o sound: hot, home or hop?", ["home","hot","hop"], 0, "Home, because the silent e makes the o say its name. If your child chose hot, they picked the short o sound."),
        en("Read this sentence: The big red bus can go. Which word names something we ride in?", "Bus. A good answer names the thing we ride in. Ask: where would you see a bus?"),
        mc("Which word rhymes with cake: lake, lock or luck?", ["lock","lake","luck"], 1, "Lake, because lake and cake end with the same sound, ake. If your child chose lock, they matched the first letter, not the ending."),
        en("Read this sentence: Hind has a red hat. Which word do you read first?", "Hind, because we read English from left to right. Ask: which side of the page do we start on?"),
        en("How many words are in this sentence: Omar can run fast.", "Four words, because the spaces show where each word ends. Ask: can you point to each word as you count?"),
        en("Blend the sounds s, u, n. What word do they make?", "Sun. A good answer blends the sounds s, u, n smoothly into one word. Ask: can you say it without stopping between sounds?"),
        en("How many sounds are in the word ship? Say it slowly: sh, i, p.", "Three sounds, sh, i and p, because sh counts as one sound. Ask: how many letters are there, and how many sounds?"),
        mc("What is the middle sound in the word dog?", ["a","o","u"], 1, "O, because dog says d, o, g. If your child chose u, they mixed up the vowel sound in the middle."),
        en("Fluency: read these two sentences aloud, twice. Maryam has a big red bag. She puts dates in it. Then say who has the bag and what goes in it.", "Maryam has the bag and dates go in it. A good second reading is smoother, with a short stop at each full stop. Ask: who has the bag, and what goes in it?")
      ]
    },
    {
      area: "cmp",
      standards: ["RL.1.1", "RL.1.2", "RL.1.3", "RL.1.5", "RL.1.6", "RL.1.7", "RL.1.9", "RI.1.1", "RI.1.2", "RI.1.3", "RI.1.4", "RI.1.5", "RI.1.6", "RI.1.7", "RI.1.8", "RI.1.9"],
      passage: [
        {
          title: "Text A: A Day at the Souq",
          text: "Maryam and Hamdan go to the souq with Mama. The souq is big and busy. Maryam sees red dates in a box. Hamdan sees a green hat on a shelf. Mama buys a bag of dates and a jug of milk. Then they sit on a bench. Maryam gives a date to Hamdan. He gives one to Mama. They all smile. The sun is hot, so they go home in a cab."
        },
        {
          title: "Text B: Dates from the Palm",
          text: "Dates grow on tall palm trees. The trees like hot, sunny places like the UAE. The dates grow in big bunches high up in the tree. In autumn the dates are ripe, so a farmer climbs up and cuts the bunches down. Then the dates dry in the sun and turn soft and sweet.\n\n[Picture: A farmer stands on a ladder by a tall palm tree and cuts a big bunch of yellow dates. His two sons wait below with a basket.]\n\nWords to know: A bunch is a group of dates that grow together. Ripe means ready to pick."
        },
        {
          title: "Text C: Eating Dates",
          text: "Many families in the UAE love dates. A date is soft and sweet. Dates make a good snack because they are sweet and easy to carry. Cooks put dates in cakes and cookies. When guests visit, a family may give them dates with a cup of karak. Dates are a tasty treat for everyone."
        },
        {
          title: "Text D: Layla and the Red Kite",
          text: "Layla and her cousin Noura made a red kite. They took it to the park by the creek. The wind blew and the kite flew up, up, up. Layla felt proud. Then the wind stopped and the kite fell to the grass. Layla felt sad. Noura gave her a hug and said, \"We can try again.\" They ran with the kite and it flew once more. Layla smiled and felt happy.\n\n[Picture: Layla stands on the grass with a big smile. She looks up at the red kite high in the sky.]"
        },
        {
          title: "Text E: My Hill",
          text: "I am Omar. Last Friday I went to the Hajar mountains with my father and my brother Salem. We walked up a big hill. My legs felt tired, but I did not stop. Salem said, \"Keep going!\" At the top I saw the whole valley. I felt brave and happy. I called out, \"I did it!\""
        }
      ],
      example: exEn(
        "Who goes to the souq with Mama?",
        ["Read the first sentence again.", "It names the children who go: Maryam and Hamdan."],
        "Maryam and Hamdan."
      ),
      items: [
        mc("Text A: Who goes to the souq with Mama?", ["Maryam and Hamdan","Maryam and Layla","Hamdan and Salem"], 0, "because the first sentence names them. If your child chose Maryam and Layla, they picked a name from a different text."),
        en("Text A: What does Hamdan see on a shelf?", "A green hat. A good answer says what and where, from Text A. Ask: which words in the text tell you that?"),
        en("Text A: What does Mama buy? Name one thing.", "A bag of dates or a jug of milk. Either is right if it is in the text. Ask: which sentence tells you what Mama buys?"),
        mc("Text A: Why do they go home?", ["They are hungry","The sun is hot","It is night"], 1, "because the last sentence says they go home since the sun is hot. If your child chose They are hungry, they guessed and did not look in the text."),
        en("Text A: What happens first, Mama buys the dates and milk, or they sit on a bench?", "Mama buys the dates and milk first, because Then they sit on a bench comes after. Ask: which word tells you what came next?"),
        en("Text A: Tell the story again in two short sentences.", "A good retelling has a start, a middle and an end, in order. For example: they go to the souq, Mama buys things, they go home. Ask: what happened first, next and last?"),
        mc("Text B: What is Text B mostly about?", ["How families eat dates","How to bake a cake","How dates grow"], 2, "because the whole text tells about palm trees, picking and drying. If your child chose How families eat dates, they picked an idea from a different text."),
        mc("Text B: Why does the farmer cut the bunches down in autumn?", ["The sun is hot","The dates are ripe","The dates are dry"], 1, "because the text says in autumn the dates are ripe, so the farmer cuts them. If your child chose The sun is hot, they picked a detail from another part."),
        mc("Text B: At the end is a list called Words to know. Use it to say what a bunch is.", ["A group of dates that grow together","A tall palm tree","A sweet snack"], 0, "because Words to know says so. If your child chose A tall palm tree, they picked the thing the dates grow on."),
        en("Text B: The picture is described in words. What do the farmer's two sons have with them? Does the picture or the writing tell you this?", "A basket. The picture tells us this and the writing does not. Ask: where did you find the answer, in the picture or the words?"),
        mc("One of these texts is a made-up story and the others give facts. Which text is the story?", ["Text A","Text B","Text C"], 0, "because it has people and things that happen to them. If your child chose Text B, they picked a text full of facts about palm trees."),
        en("Text C: What do cooks put dates in? Name one thing.", "Cakes or cookies. Either is right if it is in Text C. Ask: which sentence tells you what cooks do?"),
        mc("Text C: What reason does Text C give for dates being a good snack?", ["They grow on palm trees","They are put in cakes","They are sweet and easy to carry"], 2, "because the text gives that as the reason. If your child chose They grow on palm trees, they picked a fact that is not the reason."),
        en("Text B tells how dates grow. Which text tells how families eat and use dates, Text B or Text C?", "Text C, because it tells about cakes, cookies, guests and karak. Ask: what does Text B tell about instead?"),
        en("Text D: How did Layla feel when the wind stopped and the kite fell?", "Sad. A good answer says the feeling and why, because the kite fell. Ask: which words tell you she felt sad?"),
        mc("Text D: What did Noura do to help Layla?", ["She took the kite home","She gave her a hug and said they could try again","She told her to stop"], 1, "because the text says so. If your child chose She told her to stop, they picked something Noura did not do."),
        en("Text D: The picture is described in words. Where is Layla looking in the picture?", "Up at the red kite in the sky. The picture shows it, because she looks up. Ask: what is her face doing?"),
        en("Text E: Who is telling Text E, Omar or someone outside the story? How can you tell?", "Omar, because he says I, as in I am Omar. Ask: which little word tells you the person is talking about themselves?"),
        mc("Layla in Text D and Omar in Text E each have a hard time. How are they alike? Both of them ___ (kept trying, gave up or went home).", ["gave up","kept trying","went home"], 1, "Kept trying, because Layla tried the kite again and Omar did not stop. If your child chose gave up, they picked what neither of them did."),
        mc("Text E: How did Omar feel at the top of the hill?", ["Tired and sad","Cross and hot","Brave and happy"], 2, "because the text says he felt brave and happy at the top. If your child chose Tired and sad, they picked how he felt earlier on the way up.")
      ]
    },
    {
      area: "voc",
      standards: ["L.1.4a", "L.1.5a", "L.1.5b", "L.1.5c", "L.1.5d", "RL.1.4"],
      example: exEn(
        "What is the opposite of hot?",
        ["Opposite words are as different as they can be.", "Think of how a cup of ice feels, not hot at all."],
        "cold"
      ),
      items: [
        en("What is the opposite of up?", "Down. A good answer is as different from up as it can be. Ask: if one hand goes up, where does the other go?"),
        mc("What is the opposite of happy?", ["glad","sad","funny"], 1, "Sad, because happy and sad are opposites. If your child chose glad, they picked a word that means the same."),
        en("What is the opposite of full?", "Empty. A good answer says a cup with nothing in it. Ask: what is in a full cup?"),
        en("What is the opposite of day?", "Night. A good answer says the dark time when we sleep. Ask: what do you see in the sky at night?"),
        mc("Which word does not belong: apple, banana, chair or grape?", ["chair","banana","grape"], 0, "Chair, because the others are fruit and a chair is not. If your child chose banana, they picked a fruit, but the odd one is not a fruit."),
        en("Camel, oryx and falcon are all kinds of what?", "Animals. A good answer names the group that camels, oryx and falcons belong to. Ask: can you name another animal?"),
        en("Sort the words into two groups, clothes and animals: sock, cat, shoe, fish.", "Clothes: sock, shoe. Animals: cat, fish. Ask: which group do you wear, and which group is alive?"),
        mc("The bag is heavy. Omar cannot lift it. Does heavy mean easy to lift or hard to lift?", ["easy to lift","hard to lift","very small"], 1, "Hard to lift, because Omar cannot lift the bag. If your child chose easy to lift, they picked the opposite of heavy."),
        en("Which word fits: I wear a ___ on my head. hat, cat or bat?", "Hat. A good answer says a hat goes on the head. Ask: which word rhymes with hat but is an animal?"),
        mc("Layla's kite fell to the grass and she felt sad. Which word tells a feeling: kite, sad or grass?", ["sad","kite","grass"], 0, "Sad, because it tells how Layla felt. If your child chose grass, they picked a thing, not a feeling."),
        en("Omar got to the top of the hill and felt proud. Which word tells a feeling: top, proud or hill?", "Proud. A good answer picks the word that tells how Omar felt, not a place. Ask: how do you feel when you do something hard?"),
        mc("Which word shows the most cold: cool, warm or freezing?", ["cool","warm","freezing"], 2, "Freezing, because it is colder than cool or warm. If your child chose warm, they picked a word for something not cold."),
        en("A bike is a thing with wheels that you ___. ride, eat or wear.", "Ride. A good answer is the thing you do on a bike. Ask: do you eat a bike or ride it?"),
        en("Which goes with a hot day: a cold drink or a warm coat?", "A cold drink, because a hot day makes us want something cool. Ask: why would you not wear a warm coat?"),
        mc("Layla said her kite was as light as a feather. Does that mean it was heavy or light?", ["heavy","big","light"], 2, "Light, because a feather is very light. If your child chose heavy, they picked the opposite of what the sentence says.")
      ]
    },
    {
      area: "wl",
      standards: ["L.1.1b", "L.1.1c", "L.1.1j", "L.1.2a", "L.1.2b", "L.1.2d", "W.1.2"],
      example: exEn(
        "Which sentence is written correctly: the cat sat. or The cat sat.?",
        ["A sentence starts with a capital letter.", "A sentence ends with a full stop.", "Only the second one has both."],
        "The cat sat."
      ),
      items: [
        mc("Which sentence begins correctly: the sun is hot. or The sun is hot.?", ["The sun is hot.","the sun is hot.","The sun is Hot."], 0, "because a sentence starts with a capital letter and ends with a full stop. If your child chose The sun is Hot., they put a capital in the middle."),
        mc("What mark goes at the end of this sentence: Hind has a red bag", ["A comma","A full stop","A capital letter"], 1, "because the sentence tells something. If your child chose A comma, they picked a mark that is used inside a sentence."),
        en("Add -s to make the word mean more than one: one book, two ___.", "Books. Add s to a word when there is more than one. Ask: what letter do you add?"),
        mc("Add -s to make the word mean more than one: one cup, three ___.", ["cups","cup","cupes"], 0, "Cups, because we add s for more than one. If your child chose cup, they forgot to add the s."),
        en("In the sentence The camel eats, which word is the naming word?", "Camel. A good answer finds the word that names the animal. Ask: who is the sentence about?"),
        en("In the sentence The camel eats, which word is the action word?", "Eats. A good answer finds the word that tells what the camel does. Ask: what is the camel doing?"),
        mc("Which word is an action word: jump, tree or red?", ["tree","red","jump"], 2, "Jump, because it is something you do. If your child chose tree, they picked a thing, not an action."),
        mc("Find the action word in this sentence: Salem kicks the ball.", ["Salem","ball","kicks"], 2, "Kicks, because it tells what Salem does. If your child chose Salem, they picked the naming word, not the action."),
        en("Fix this sentence: maryam has a hat", "Maryam has a hat. Fix it by making the M big and ending with a full stop. Ask: what two things are missing?"),
        en("Put the words in order to make a sentence: dates likes Noura", "Noura likes dates. A good answer starts with the person, then what she does. Ask: who is the sentence about?"),
        en("Fill in the missing letter: The opposite of cold is h_t.", "O, which makes hot. Hot is the opposite of cold. Ask: does hot sound right when you say it slowly?"),
        en("Write one complete sentence about a falcon. Start with a capital letter and end with a full stop.", "Any sentence about a falcon that starts with a capital and ends with a full stop works. Ask: does your sentence tell a whole idea?")
      ]
    }
  ]
};
