// Reading practice booklet, Grade 10 expectations. English-only: see AUTHORING.md for the format.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const en = (question, answer) => it(question, answer, question, answer);
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });
const mc = (qEn, optsEn, correct, whyEn) => ({ q: T(qEn, qEn), a: T(whyEn, whyEn), options: { en: optsEn, ar: optsEn }, correct });
const exEn = (question, steps, answer) => ex(question, steps, answer, question, steps, answer);

module.exports = {
  subject: "rd",
  grade: 10,
  framework: "CCSS.ELA",
  englishOnly: true,
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "voc",
      standards: ["RL.9-10.4", "L.9-10.4a", "L.9-10.5a", "L.9-10.5b"],
      passage: {
        title: "The Spice Seller's Afternoon",
        text: [
          "Maryam and her cousin Hamdan followed their grandmother into the old spice souq, where the air was thick enough to chew. Saffron, cumin and dried limes jostled for attention on every side, and the narrow lane glowed amber beneath its canvas awnings. Maryam felt as though she had wandered into Aladdin's cave, where every open sack held a small fortune.",
          "\"Stay close,\" said Grandmother, gripping Maryam's wrist with fingers as firm as a clamp. She had shopped here for forty years, and the stallholders greeted her like a returning queen. Even the cats dozing on the doorsteps seemed to lift their heads in respect.",
          "Above the third stall hung a painted sign: THE HONEST SCALE. Beneath it, a young seller named Faisal bowed with a flourish. \"For the most distinguished customer in the whole souq,\" he announced, \"my finest saffron, at a price so low that I am practically giving it away.\"",
          "Grandmother raised one eyebrow. \"How generous,\" she said, in a voice as dry as the dust on the pavement. \"Then you will not mind if I examine it.\"",
          "Faisal's smile flickered. Hamdan leaned towards Maryam. \"Is that a compliment?\" he whispered.",
          "\"Listen to her tone,\" Maryam whispered back. \"She does not believe a word of it.\"",
          "Grandmother rolled a few threads between her fingers, sniffed them and held them up to the light. Real saffron, she explained, stains the skin a deep gold and smells faintly of honey. These threads were pale, and they smelled of nothing at all. \"This is like a loaf of bread that is mostly air,\" she said. \"It looks large, but there is nothing in it to feed anyone.\"",
          "Faisal's cheeks turned the colour of the cinnamon sticks stacked at the back of his stall. \"Perhaps this sack was mixed up with another,\" he muttered.",
          "\"How fortunate,\" said Grandmother, \"that your finest saffron should be mixed up with your cheapest.\" She did not raise her voice. She did not need to. Maryam noticed that the sign above them, which had looked so grand a minute earlier, now seemed to be telling a joke at its owner's expense.",
          "From the next stall, an elderly merchant named Abu Yusuf had been watching in silence. He set a small tin on his counter and lifted the lid. Inside lay threads of a deep, glowing red, and the scent of honey rose from them at once. Grandmother bought a generous pinch, paid without bargaining, and turned back to Faisal.",
          "\"Your good name is like a saffron thread, young man,\" she said gently. \"It is fine, it is precious, and it breaks very easily. Take care of it.\"",
          "Faisal lowered his eyes and said nothing. He had expected an argument, a raised voice, perhaps a crowd gathering to watch his embarrassment. Instead there was only the soft clink of Abu Yusuf's tin closing, and the long, quiet lesson that followed it. As the three of them walked away through the golden lane, Hamdan grinned. \"I was sure she would shout.\"",
          "\"Grandmother never needs to shout,\" said Maryam. \"Her quiet is louder.\""
        ].join("\n\n")
      },
      example: exEn(
        "Read: \"The coach's praise was a warm blanket on a cold day.\" What does the comparison suggest about the praise?",
        ["An analogy compares two things so that the qualities of one are carried over to the other.", "A warm blanket on a cold day is comforting and welcome.", "So the praise made the player feel comforted and glad."],
        "The praise was comforting and welcome."
      ),
      items: [
        mc("The air is described as \"thick enough to chew\". What does this figure of speech suggest about the souq?", ["That the souq sold food that was hard to chew","That the smells were very strong and heavy in the air","That the weather was cold and damp","That the lanes were too crowded to walk through"], 1, "The first paragraph says the air is thick with saffron, cumin and dried limes, so the smells are strong and heavy. If your child chose A, they read the words too literally and pictured food, not smell."),
        en("Maryam feels she has \"wandered into Aladdin's cave\". What does this allusion suggest about how she sees the souq?", "A good answer says the souq feels magical and full of treasure, because Aladdin's cave is a story place of hidden riches and the sacks seem to hold \"a small fortune\". Ask: which words tell you that she is amazed?"),
        mc("The spices \"jostled for attention\". What does the word \"jostled\" suggest about the spices?", ["That they were spilling onto the floor","That they were stacked high on the ground","That they were arranged in neat, quiet rows","That they were crowded together and seemed to compete to be noticed"], 3, "Jostled means pushing close together, and the next words, \"for attention\", show the spices were competing to be noticed. If your child chose C, they picked the opposite: neat, quiet rows would not be jostling."),
        en("The stallholders greet Grandmother \"like a returning queen\". What does this simile show about how she is regarded?", "A good answer says she is greatly respected and welcomed with honour, because a queen is treated with special care. Ask: what else in the paragraph shows people respect her, like the cats?"),
        mc("Why is the sign THE HONEST SCALE ironic in this scene?", ["Its name promises honesty, but the seller tries to pass off cheap saffron as his finest","Its name is painted in large letters that nobody can read","Its name suggests the stall sells scales, but it sells only spices","Its name was chosen by Abu Yusuf, who sells at the next stall"], 0, "Irony is when what happens is the opposite of what is expected: the sign says honest, but Faisal is selling cheap saffron as his finest. If your child chose C, they read the name as being about scales, not about honesty."),
        en("Faisal \"bowed with a flourish\". Using the context, what does \"flourish\" mean?", "A good answer says a showy, dramatic gesture, using clues such as the bow and his grand words to the customer. Ask: which other words in the sentence help you guess it?"),
        mc("Grandmother says, \"How generous.\" What is her tone?", ["Warm and thankful, because the price is low","Sarcastic and doubtful, because she does not believe the offer","Shy and nervous, because many people are watching","Angry and loud, because she wants to shout"], 1, "Maryam says Grandmother \"does not believe a word of it\", and Grandmother then asks to examine the saffron, so she is being sarcastic. If your child chose A, they took \"How generous\" at face value instead of listening to her tone."),
        en("Grandmother says the saffron is \"like a loaf of bread that is mostly air\". What does this analogy explain about the saffron?", "A good answer says the saffron looks like a lot but has little real flavour or value, as bread that is mostly air feeds nobody. Ask: what in the text tells you the threads had no smell?"),
        mc("Faisal's cheeks turn \"the colour of the cinnamon sticks\". What does this comparison suggest he feels?", ["Pleased, because he has made a sale","Hungry, because it is nearly dinner time","Embarrassed, because he has been found out","Cold, because the lane is shaded"], 2, "His cheeks turn red right after Grandmother shows his saffron is fake, so he feels embarrassed at being found out. If your child chose A, they ignored that the sale had just gone badly for him."),
        en("Explain what Grandmother means by \"Your good name is like a saffron thread\".", "A good answer says a good name is fine, precious and easy to break, so Faisal must protect it by being honest. Ask: what could break his good name in this scene?"),
        en("Hamdan expected Grandmother to shout, but she did not. Explain Maryam's reply, \"Her quiet is louder.\"", "A good answer says her calm words had more effect than shouting, so Faisal felt the lesson deeply. Ask: how did Faisal react, and why did he say nothing?")
      ]
    },
    {
      area: "inf",
      standards: ["RI.9-10.1", "RI.9-10.2", "RI.9-10.5", "RI.9-10.6", "RI.9-10.8"],
      passage: {
        title: "A City That Remembers",
        text: [
          "Every fast-growing city faces the same temptation. Land is valuable, towers are profitable, and an old quarter of crumbling walls can look like an obstacle in the way of progress. Some planners therefore argue that the past should be photographed, placed in a museum and then cleared away. I believe this is a serious mistake. A city that grows must find room for its history inside its future, because heritage is not decoration. It is a working part of what makes a place worth living in.",
          "The first reason is practical. Traditional builders in the Gulf solved the problem of heat long before electricity arrived. Their solutions were clever and cost very little to run. Their wind towers, called barjeel, caught breezes high above the roofs and funnelled them down into the rooms below. Thick walls of coral stone and gypsum kept the sun out, and narrow lanes threw shade across the paths. Modern architects, who must now reduce the energy used by air conditioning, are studying these old ideas closely, and some new buildings borrow them directly. If the old quarters were demolished, the lessons would be lost with them.",
          "The second reason concerns people. A neighbourhood is not only a set of buildings but a set of memories: the corner where a grandfather mended nets, the shop where a mother bought her first sewing machine, the lane where children raced each other home. Residents who watch such places vanish often feel like strangers in their own city. By contrast, restored districts that now hold cafes, galleries and small workshops give families somewhere to bring visitors and say, \"This is where we come from.\" Would a city of identical glass towers inspire that feeling? I doubt it.",
          "The third reason is economic. Visitors travel across the world to walk through a lived-in past, and they spend money in the shops, guesthouses and restaurants that grow up around it. A restored quarter can therefore earn its keep year after year, while a tower, once built, adds only one more skyline to a world already full of them.",
          "Critics make a fair point when they say that restoration is expensive and that cities cannot stand still while their populations rise. Land set aside for old houses could, they argue, hold new homes and schools instead. Yet this presents a false choice. Careful planning can place new buildings beside old ones, reuse historic houses as museums, offices or classrooms, and protect only the places of greatest value. Preservation does not mean freezing a city. It means choosing what to carry forward.",
          "Consider what is at stake. A city takes generations to build but only a season to demolish, and once a street has been levelled, no amount of money can bring back its stones, its shade or its stories. That is why the decision deserves patience rather than haste.",
          "Think of a city as a book that is still being written. A sensible author adds new chapters, but she does not tear out the first pages, because without them the later chapters make no sense. The planners of today have the chance to write boldly and still keep the story whole. If they take it, the next generation will inherit both a modern city and the memory of how it began."
        ].join("\n\n")
      },
      example: exEn(
        "Read: \"Some say homework should be banned. But homework builds the habit of working alone, so I believe a little each night is worth keeping.\" Which part is the counterargument, and which part is the author's reply?",
        ["A counterargument is an opposing view that the author mentions in order to answer it.", "\"Some say homework should be banned\" is the view the author disagrees with.", "\"But homework builds the habit of working alone\" is the author's reply."],
        "Counterargument: some say homework should be banned. Reply: homework builds the habit of working alone."
      ),
      items: [
        mc("What is the author's central claim?", ["Old districts should be photographed and then cleared away","Cities should stop building towers of any kind","Growing cities should keep their heritage inside new development","Visitors should be charged more to see old districts"], 2, "The first paragraph says a city \"must find room for its history inside its future\", and the whole passage then gives reasons for this. If your child chose B, they picked an idea the author never states, and A is the opposite of what the author wants."),
        en("The author writes that heritage \"is not decoration. It is a working part\". What does this contrast mean?", "A good answer says heritage is useful and does real work, and is not only for looks. Ask: which words after \"working part\" tell you what the author means?"),
        en("What does the author say traditional builders did to deal with heat? Give two examples.", "A good answer gives any two: wind towers caught breezes, thick walls kept out the sun, or narrow lanes gave shade. Ask: where in the second paragraph did you find each one?"),
        mc("Why are modern architects studying the old building ideas?", ["They need to reduce the energy used by air conditioning","They want to make buildings taller","They are preparing to demolish the old quarters","They are writing a history of the souq"], 0, "The second paragraph says architects \"must now reduce the energy used by air conditioning\", so they study the old cooling ideas. If your child chose B, they guessed from the word \"modern\" and did not find a reason in the text."),
        en("According to the passage, how do residents often feel when familiar places vanish?", "A good answer says they feel like strangers in their own city. Ask: why would losing a familiar place make someone feel that way?"),
        mc("What is the purpose of the question, \"Would a city of identical glass towers inspire that feeling?\"", ["To ask the reader for facts about glass","To introduce the critics' view","To list the costs of new towers","To make the reader think, suggesting the answer is no"], 3, "A rhetorical question is asked to make you think, not to get an answer, and the author follows it with \"I doubt it\". If your child chose A, they treated it as a real question that needs facts."),
        en("Why can a restored quarter \"earn its keep\" according to the author?", "A good answer says visitors come to see it and spend money in nearby shops, guesthouses and restaurants, year after year. Ask: why does the author say a tower cannot do the same?"),
        mc("What do critics say against restoring old districts?", ["Visitors do not enjoy old buildings","Old buildings are too hot to live in","It is expensive, and cities cannot stand still while their populations rise","Wind towers no longer work"], 2, "The critics' paragraph says restoration is expensive and cities cannot stand still while their populations rise. If your child chose A, they picked a claim the author never gives, and if they chose B, they mixed up the critics with the practical reason."),
        mc("The author calls the critics' view \"a false choice\". What does this mean here?", ["The critics have made a mistake in their sums","It treats the options as only old buildings or new homes, when planning can have both","The critics are not telling the truth about the cost","Every old building must be saved"], 1, "A false choice means you are told it is one or the other, but the author says careful planning can place new buildings beside old ones. If your child chose D, they took \"preserve\" to mean everything, but the author says to protect only the places of greatest value."),
        en("What does the book comparison in the last paragraph show about the author's view of history?", "A good answer says the first pages are needed for the later chapters to make sense, so a city needs its history to be understood. Ask: what does the author want planners to do with the old pages?"),
        en("Which of the three reasons relies mainly on factual detail and which mainly on feeling? Explain.", "A good answer says the first reason uses facts such as wind towers and thick walls, and the second appeals to feelings through memories of a grandfather and a mother. Ask: which sentence made you feel something, and why?")
      ]
    },
    {
      area: "lit",
      standards: ["RL.9-10.1", "RL.9-10.2", "RL.9-10.3", "RL.9-10.4", "RL.9-10.5"],
      passage: {
        title: "The Channel",
        text: [
          "Tonight the water runs bright and steady toward the last palm, and I am the one who cleared the way for it. A year ago I would not have believed that.",
          "Last summer, I did not want to be here. My cousin Layla and I had been sent to my grandfather's farm in the oasis while our parents worked in the city, and I had packed a tablet full of games and a head full of complaints. \"There is nothing to do,\" I told Layla. She only shrugged and went to find Grandmother, who was baking bread in the cool kitchen.",
          "My grandfather was cleaning the falaj, the old stone channel that carries water down from the hills to the palms. He did it every morning with a flat shovel, lifting out leaves and silt, and every morning his movements were the same. \"The water arrives on its own,\" I said. \"Why do you keep doing this?\"",
          "He did not look up. \"The water arrives because someone clears the way,\" he said. Then he went back to his shovel, and the matter seemed closed.",
          "I thought it was one of those sayings that old people enjoy making. For three days I watched him from the shade, scrolling and sighing. On the fourth day a rare summer rain fell in the hills, and by afternoon the channel was choked with mud and branches. The water backed up and began to spill sideways, wasting itself on the sand, while the palms at the far end stood dry.",
          "Grandfather's knees were too stiff for the job. \"Fetch the shovel,\" he said quietly. I did not want to. But Layla was already holding out two pairs of gloves, and Grandmother was watching from the doorway. So I stepped into the muddy channel, and for two hours Layla and I pulled out branches and silt while Grandfather showed us where to dig. My arms ached. My shirt was ruined. And then, with a gurgle like a laugh, the water slipped free and ran on down the stone, past the first palm, the second, the third, and the dry earth darkened as it drank.",
          "Grandfather wiped his hands on a cloth and sat down heavily on the edge of the channel, breathing hard and smiling at the sky. \"My father cleared this channel,\" he said, \"and his father before him. None of them owned the water. They only kept the way open.\" He looked at me, and for the first time I understood that he was not talking about water at all.",
          "That is why, this evening, I am standing in the channel again, shovel in hand, while Grandfather rests in the shade with his tea. The water slides past my ankles toward the last palm, which was planted the year my father was born. I do not think I am cleaning a channel any more. I think I am passing something from one pair of hands to the next, and I have only just noticed that mine are now part of the line."
        ].join("\n\n")
      },
      example: exEn(
        "Read: \"The old clock in the hall had stopped years ago, yet nobody in the house would let it be thrown away.\" What might the clock symbolise?",
        ["A symbol is an object that stands for a larger idea.", "The clock no longer works, but the family keeps it, so it must matter for another reason.", "It could stand for memories of the past that the family does not want to lose."],
        "It may symbolise the family's memories and their wish to hold on to the past."
      ),
      items: [
        mc("Who tells the story, and from what point of view?", ["Grandfather, in the third person","Layla, in the third person","An outside narrator who knows every thought","One of the grandchildren, in the first person (\"I\")"], 3, "The story uses \"I\" and \"my grandfather\", so it is told in the first person by a grandchild. If your child chose C, they picked a narrator who knows everyone's thoughts, but we only see what this one child thinks."),
        en("How does the story begin, and how is it organised after that?", "A good answer says it opens in the present, goes back to last summer in a flashback, then returns to this evening. Ask: which words show the story is going back in time?"),
        en("How does the narrator feel at the start of last summer? Give one detail.", "A good answer says bored and unwilling, with one detail such as the tablet full of games or \"a head full of complaints\". Ask: which words tell you that?"),
        mc("What does Grandfather mean, literally, by \"The water arrives because someone clears the way\"?", ["The water flows faster when it rains","The water only reaches the palms if the channel is kept clear of leaves and silt","The water is carried to the palms by hand","The water must be paid for each morning"], 1, "Literally, Grandfather means the channel must be cleaned of leaves and silt, which he does every morning so the water reaches the palms. If your child chose A, they thought about rain, but the sentence is about clearing the channel."),
        mc("How does the rain move the plot forward?", ["It blocks the channel, which forces the narrator to act","It sends the cousins back to the city","It makes Grandfather sell the farm","It fills the kitchen with water"], 0, "The rain fills the channel with mud and branches, the water spills away, and that forces the narrator to step in and help. If your child chose B, they picked a thing the story never says happens."),
        en("\"With a gurgle like a laugh, the water slipped free.\" What effect does this description have?", "A good answer says the water seems alive and joyful, showing happy relief after hard work. Ask: what is the water compared to, and what feeling does that give?"),
        en("What is Grandfather really talking about when he says the family \"only kept the way open\"?", "A good answer says he means looking after something valuable and passing it on, not owning it. Ask: what do you think the family is keeping open besides the water?"),
        mc("What does the falaj, the stone channel, symbolise in the story?", ["The long distance between the farm and the city","The danger of heavy summer rain","The care and traditions passed down from one generation to the next","The wish to have more free time"], 2, "Grandfather says his father and grandfather cleared the channel too, so it stands for care passed down the generations. If your child chose A, they picked a fact about the setting, not what the channel stands for."),
        en("How does the narrator change between the start of last summer and the end?", "A good answer says the narrator changes from bored and reluctant to willing and proud to take responsibility. Ask: what does the narrator do at the end that did not happen at the start?"),
        en("Explain the final image: \"mine are now part of the line\".", "A good answer says the narrator has joined the chain of family who cared for the channel and will pass it on. Ask: who are the other pairs of hands in the line?"),
        en("State a theme of the story and support it with a detail.", "A good answer states a theme, such as caring for what earlier generations began gives life meaning, and backs it with a detail, such as the narrator clearing the channel willingly. Ask: which moment in the story shows that?")
      ]
    }
  ]
};
