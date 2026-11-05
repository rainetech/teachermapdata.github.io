// Reading practice booklet, Grade 9 expectations. English-only: see AUTHORING.md for the format.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const en = (question, answer) => it(question, answer, question, answer);
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });
const mc = (qEn, optsEn, correct, whyEn) => ({ q: T(qEn, qEn), a: T(whyEn, whyEn), options: { en: optsEn, ar: optsEn }, correct });
const exEn = (question, steps, answer) => ex(question, steps, answer, question, steps, answer);

module.exports = {
  subject: "rd",
  grade: 9,
  framework: "CCSS.ELA",
  englishOnly: true,
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "voc",
      standards: ["RL.9-10.1", "RL.9-10.4", "L.9-10.4a", "L.9-10.5a", "L.9-10.5b"],
      passage: {
        title: "The Last Palm in the Row",
        text: [
          "Every autumn, Maryam's family drove to the oasis to help with the date harvest, and every autumn her grandmother led the way into the grove as though she were a general inspecting her troops. This year, Maryam walked beside her cousin Hamdan, who carried a ladder over one shoulder and complained about it all the way.",
          "\"Jidda,\" he groaned, \"why must we always begin with the tallest palm?\"",
          "\"Because it is the most stubborn,\" said Grandmother, patting the rough trunk. \"Some people would call that a fault. I call it determination. This tree has stood through a hundred summers, and it has never once asked for pity.\"",
          "Maryam tilted her head back. The palm rose above them like a green fountain frozen in mid-splash, and the clusters of fruit hung from it in heavy amber chains. Far below, a channel of water ran through the grove. Grandmother had explained once that the old falaj system carried water from the mountains by gravity alone, a quiet river that never hurried and never stopped.",
          "Hamdan climbed the ladder with the caution of a man crossing a frozen lake. Maryam held it steady and watched the light flicker through the fronds. Somewhere above, a bird scolded them in a thin, bitter voice. The air smelled of warm dust and syrup.",
          "\"Careful,\" Grandmother called. \"A date is a patient fruit. It will not be rushed, and neither should you.\"",
          "That was typical of her. She was frugal with money, with water and with words, yet she gave advice as generously as other people give sweets. Maryam sometimes thought her grandmother was a living proverb, a person who had boiled a whole life down into a few strong sentences.",
          "When the baskets were full, the three of them sat in the shade, and Grandmother handed round a flask of cardamom tea. Hamdan wiped his forehead. \"I thought that palm would swallow me,\" he said. \"It felt like a giant that did not want me on its back.\"",
          "Grandmother laughed. \"It is only a tree. But trees are good teachers. Look at the roots. They go down so deep that no wind can pull them out. A person should be like that: calm above and firm below.\"",
          "Maryam examined a single date in her palm. It was wrinkled and sticky and no bigger than her thumb, yet it held the whole summer inside it. She remembered that the word \"transplant\" came from the Latin roots for \"across\" and \"plant\", because every young palm in the grove had once been carried across from another place and set into new soil. Her own family, she realised, had done something similar when they moved to the city, and still came back every year to be rooted again.",
          "\"Jidda,\" she said, \"does the grove ever feel lonely when we leave?\"",
          "Grandmother considered the question with her head to one side. \"The palms are never alone,\" she said at last. \"They stand shoulder to shoulder, and they wait. A grove does not need company in the way we do. It needs care, and that is what we bring.\"",
          "On the drive home, the back seat was warm with the smell of dates, and Maryam fell asleep with a sticky smile, dreaming of a tall tree that bent to listen."
        ].join("\n\n")
      },
      example: exEn(
        "Read: \"The old man was thrifty, so he mended his coat for the tenth time.\" Use the context to work out what \"thrifty\" means.",
        ["Look at the clues around the word.", "He mends the coat for the tenth time instead of buying a new one.", "A person who does this is careful about spending money, so thrifty means careful with money."],
        "Thrifty means careful with money."
      ),
      items: [
        mc("Grandmother calls the tallest palm \"stubborn\" but says she prefers the word \"determination\". How do the two words differ in connotation?", ["Both sound like faults", "\"Stubborn\" sounds like a fault; \"determination\" sounds like a strength", "\"Determination\" sounds like a fault; \"stubborn\" sounds like a strength", "Both simply mean that the palm is old"], 1, "B. Grandmother says some people call it a fault but she calls it determination, so one word sounds like a flaw and the other like a strength. If your child chose A, they treated the two words as the same."),
        en("The palm is described as rising \"like a green fountain frozen in mid-splash\". What kind of figurative language is this, and what does it help the reader picture?", "A good answer says it is a simile because of the word like, and it pictures a tall palm with fronds spreading out and down like a fountain. Ask: which word tells you it is a simile?"),
        mc("The falaj is described as \"a quiet river that never hurried and never stopped\". What does this metaphor suggest about how the water moves?", ["It splashes in every direction", "It moves in sudden, fast bursts", "It flows steadily and continuously, with no rush or break", "It stops and starts to rest"], 2, "C. Never hurried and never stopped means the water keeps going at an even pace. If your child chose B, they read river as fast, but the text says it never hurried."),
        en("Hamdan climbs \"with the caution of a man crossing a frozen lake\". What does this simile tell you about how he climbs?", "A good answer says he climbs slowly and nervously, testing each step as if the ladder might give way. Ask: how do people walk on thin ice, and why do they walk that way?"),
        en("The bird \"scolded them in a thin, bitter voice\". What figure of speech is used, and what feeling does it add?", "A good answer says it is personification, because a bird cannot really scold, and it adds a sharp, unfriendly mood. Ask: what does a person do that the bird is doing here?"),
        mc("Grandmother is \"frugal with money, with water and with words\". Using the rest of the sentence as a clue, what does \"frugal\" mean?", ["Careful and sparing, using only what is needed", "Generous and wasteful", "Loud and cheerful", "Slow and forgetful"], 0, "A. The sentence says she is sparing with money, water and words yet generous with advice, so frugal means careful and sparing. If your child chose B, they mixed it up with how she gives advice, which is the opposite."),
        en("Maryam thinks her grandmother is \"a living proverb\". Explain this metaphor.", "A good answer says a proverb is a short wise saying, and her grandmother has boiled a long life down into short strong advice. Ask: which of Grandmother's sayings sound like proverbs?"),
        mc("The passage says \"transplant\" comes from Latin roots meaning \"across\" and \"plant\". What does the word mean?", ["To pick fruit from a tall tree", "To water a plant by hand", "To plant a seed in the soil where it grew", "To move a plant from one place and set it in new soil"], 3, "D. Across plus plant means to carry a plant from one place and set it in new soil, as the young palms in the grove were. If your child chose C, they read plant as a seed in the same place and ignored across."),
        en("Hamdan says the palm felt like \"a giant that did not want me on its back\". What does this comparison suggest about how he felt?", "A good answer says Hamdan felt the tree was huge and unwelcoming, so he felt uneasy and small. Ask: how would you feel climbing a giant that did not want you there?"),
        mc("Grandmother says a person should be \"calm above and firm below\". What does the image of roots stand for in this advice?", ["A wish to leave home", "Inner strength and steadiness that keep a person from being pushed over", "A fear of falling", "Money saved for later"], 1, "B. She says no wind can pull the roots out and a person should be firm below, so roots stand for inner steadiness. If your child chose D, they read roots as something saved up instead of strength."),
        en("Compare the tone of Grandmother's first speech about the palm with her last speech about the grove. How does it change?", "A good answer says at first she is proud and firm about the stubborn palm, and at the end she is gentle and comforting about the grove. Ask: which words in each speech show how she feels?")
      ]
    },
    {
      area: "inf",
      standards: ["RI.9-10.1", "RI.9-10.2", "RI.9-10.3", "RI.9-10.5", "RI.9-10.6", "RI.9-10.8"],
      passage: {
        title: "Forests That Stand in the Sea",
        text: [
          "Along the sheltered coasts of the Gulf, a strange kind of forest grows with its roots in salt water. These are mangroves, small trees whose tangled roots rise above the mud like the legs of a wooden spider. To many visitors they look untidy and even a little dull. I want to argue that this impression is badly mistaken, and that the mangroves of the Emirates deserve far more protection than they have usually received.",
          "Consider first what the trees do for the sea. The roots form a dense maze where young fish, crabs and shrimp can hide from larger hunters. Scientists who survey mangrove channels often find many more juvenile fish there than in open water nearby. In this way a mangrove forest acts as a nursery, and the fish that grow up in it later swim out to feed the fishing grounds. A local fisherman may never visit the forest, yet he depends on it.",
          "The trees also do something for the land. Their roots hold the mud in place, so the shoreline wears away less during storms. Some mangroves get rid of extra salt through tiny pores in their leaves, so a leaf can taste salty when it is touched to the tongue. Mangroves can also store carbon, the gas that warms the planet, in the thick mud beneath them. Studies suggest that, acre for acre, coastal wetlands of this kind can lock away more carbon than many inland forests.",
          "History adds another layer. For centuries, people along this coast cut mangrove wood for building and for fuel. In the twentieth century, however, the pressure grew quickly. Land was cleared for roads, harbours and new neighbourhoods, and in some places large areas of forest disappeared in only a few decades.",
          "Some people respond that a city must grow and that a stretch of muddy trees cannot be allowed to block a harbour. This view deserves a fair hearing, because housing and trade are real needs. But it rests on a false choice. Planners in several coastal nations have shown that roads and buildings can be placed further back from the shore, leaving the forest as a natural wall against the waves. The cost of such planning is small when compared with the cost of repairing a damaged coast.",
          "In recent years, the Emirates has begun to take this lesson seriously. Volunteers and government teams have planted millions of young mangrove seedlings, and some of the planted areas now provide nesting places for birds such as herons. Visitors can paddle quietly through the channels in kayaks and see the forest working for themselves.",
          "The case for mangroves, then, does not depend on beauty, although many people find them beautiful. It depends on service: they shelter young fish, shield the shore and store carbon. A country that values its coast should treat these quiet forests not as an obstacle to progress but as one of the best investments it has."
        ].join("\n\n")
      },
      example: exEn(
        "Read: \"Libraries should stay open on weekends. Many students are busy with sport and clubs on weekdays, so the weekend is when they can read.\" Which sentence gives the author's claim, and which gives a reason?",
        ["The claim is what the author wants readers to accept or do.", "The first sentence says libraries should stay open on weekends. That is the claim.", "The second sentence explains why: students are busy on weekdays. That is the reason."],
        "Claim: libraries should stay open on weekends. Reason: students are busy on weekdays."
      ),
      items: [
        mc("What impression of mangroves does the author say many visitors have, and what does the author think of it?", ["They look dangerous; the author agrees", "They look beautiful; the author thinks this is wrong", "They look untidy and dull; the author thinks this is badly mistaken", "They look untidy and dull; the author agrees with this view"], 2, "C. The first paragraph says visitors find mangroves untidy and dull, and the author says this impression is badly mistaken. If your child chose D, they stopped before the author's reaction and missed the disagreement."),
        en("Which sentence in the first paragraph states the author's main claim?", "A good answer quotes the sentence that begins 'I want to argue', which says the impression is mistaken and mangroves deserve more protection. Ask: which sentence tells you what the author wants readers to believe?"),
        mc("Why does the author call a mangrove forest \"a nursery\"?", ["Young fish, crabs and shrimp hide and grow among its roots", "Fishermen plant new trees there each spring", "Birds raise their chicks in its branches", "Its roots hold the mud in place"], 0, "A. The roots form a maze where young fish, crabs and shrimp hide, and a nursery is a place where young ones grow. If your child chose D, they picked a true job of the roots that is not what a nursery means."),
        en("How does the author show that a fisherman \"depends on\" a forest he may never visit?", "A good answer says the fish that grow up in the forest later swim out to the fishing grounds where he works. Ask: where do the fish he catches spend their early life?"),
        en("Name two ways, other than being a nursery, that mangroves help, according to the passage.", "A good answer names two of these: roots hold the mud and cut shoreline wear in storms, they store carbon, and planted areas give birds nesting places. Ask: what did the author say happens to the shore in storms?"),
        en("How does the author organise paragraph 4, and what is its purpose in the argument?", "A good answer says the paragraph gives a short history in order, showing how cutting and clearing put the forests under threat. Ask: which time words, like 'for centuries', help you follow the order?"),
        mc("What opposing view does the author describe in paragraph 5, and how does the author treat it?", ["That mangroves are beautiful; the author ignores it", "That mangroves store carbon; the author doubts it", "That planting seedlings costs too much; the author rejects it at once", "That a city must grow and trees must not block a harbour; the author hears it fairly, then calls it a false choice"], 3, "D. Paragraph 5 says a city must grow, gives that view a fair hearing, then calls it a false choice. If your child chose C, they mixed it up with the seedling planting in paragraph 6, which is not an opposing view."),
        en("What evidence does the author give that roads and buildings can exist alongside mangroves?", "A good answer says planners in several coastal nations placed roads and buildings further back from the shore, leaving the forest as a wall against waves. Ask: what did those planners do differently?"),
        mc("The author says the case for mangroves \"does not depend on beauty\". What does it depend on instead?", ["Beauty alone", "Service: sheltering young fish, shielding the shore and storing carbon", "Age: how long the forests have stood", "Cost: how cheaply seedlings can be bought"], 1, "B. The last paragraph says the case depends on service: sheltering young fish, shielding the shore and storing carbon. If your child chose A, they picked the very thing the author says it does not depend on."),
        mc("Which detail about the Emirates shows that the lesson is now being taken seriously?", ["Fishermen now avoid the channels", "Roads were built through the forests", "Volunteers and government teams have planted millions of seedlings", "Visitors can rent kayaks"], 2, "C. Planting millions of seedlings shows real effort, as paragraph 6 explains. If your child chose D, they picked a detail about visitors, which is about enjoying the forest and not about protecting it."),
        en("The author ends by calling mangroves \"one of the best investments\" a country has. Explain why this choice of word suits the argument.", "A good answer says an investment gives a lasting return for a small cost, which matches the claim that protection costs less than repairing a damaged coast. Ask: what do you get back when you invest in something?"),
        en("How does the first person (\"I want to argue\") shape the passage, compared with a purely factual report?", "A good answer says the word I shows the author has a clear opinion and is trying to persuade, while a report would only give facts. Ask: which words tell you this is the author's own view?")
      ]
    },
    {
      area: "lit",
      standards: ["RL.9-10.1", "RL.9-10.2", "RL.9-10.3", "RL.9-10.4", "RL.9-10.5"],
      passage: {
        title: "The Lantern Maker",
        text: [
          "Layla had always believed that a good lantern should be perfect. It should be perfectly round, perfectly bright and perfectly neat, with no crooked seam and no smudge of glue. So when her grandfather said she could help him make lanterns for the neighbourhood festival, she arrived at his workshop early, with her cousin Omar trailing sleepily after her, and rolled up her sleeves like a surgeon.",
          "The workshop was small and smelled of tin and warm paper. Strips of coloured glass lay along the shelf, and an old brass lamp, polished by years of handling, sat in the window. Grandfather laid a sheet of metal on the bench and showed her how to cut a pattern of stars into it.",
          "\"Gently,\" he said, in his low, steady voice. \"Let the snips do the work.\"",
          "Layla did not like gently. She cut quickly, and at last held up her first lantern. One of the stars had a bent point, and the seam on one side was a little uneven.",
          "She frowned. \"It is ruined.\"",
          "\"Ruined?\" Grandfather lifted the lantern and turned it in his weathered hands. \"Wait.\"",
          "He lit the small candle inside, and he switched off the lamp overhead. The room filled with a scatter of golden stars that slid across the walls and over the ceiling. The bent star threw a long, curved ray that crossed the room like a comet.",
          "Omar, who had been half asleep, sat up. \"That one is my favourite,\" he said.",
          "Layla stared. \"But it is crooked.\"",
          "\"The crooked star is the one that made the comet,\" said Grandfather. \"When I was young, I too wanted every line to be straight. Then one day a lantern slipped and dented, and the light that came out of the dent was the best I had ever made. I kept that lantern for years.\"",
          "He nodded at the brass lamp in the window. Layla looked at it more closely. It had a small dent near the base, and she had not noticed it before.",
          "\"That one?\" she asked.",
          "\"That one.\"",
          "All morning she worked beside him, and this time she did not hurry. She cut each star with care and left each small flaw alone, simply to see what it would do. By noon, a dozen lanterns lined the bench. No two threw the same shadows, and no two were the same.",
          "At the festival that evening, the lanterns hung from the lamp posts like a string of captured stars. Children pointed and laughed. Omar proudly told everyone which one was his favourite. Layla stood a little apart with her grandfather, watching the light move over the faces of the crowd.",
          "\"You were right,\" she said quietly. \"The light likes the flaws.\"",
          "Grandfather smiled and said nothing. He did not need to."
        ].join("\n\n")
      },
      example: exEn(
        "Read: \"Hind checked her answers three times, then a fourth, and still her pencil hovered.\" What does this sentence suggest about Hind?",
        ["Notice what Hind does and how often she does it.", "She checks her work again and again and still hesitates.", "This suggests she is anxious and wants everything to be exactly right."],
        "She is anxious and wants everything to be right."
      ),
      items: [
        mc("What belief about lanterns does Layla hold at the start of the story?", ["A good lantern should be perfect, with no flaws", "A good lantern should be large", "A good lantern should be made quickly", "A good lantern should have coloured glass"], 0, "A. The first sentence says she believed a good lantern should be perfectly round, bright and neat. If your child chose C, they picked how she worked later, not what she believed at the start."),
        en("The author says Layla \"rolled up her sleeves like a surgeon\". What does this simile show about her attitude?", "A good answer says she is serious and careful, and wants to do the job exactly right. Ask: what does a surgeon do before starting work, and why?"),
        en("Grandfather says \"Gently\". What does this show about how he wants Layla to work, and how does she respond?", "A good answer says he wants her to work slowly and carefully, and she does not like it, so she cuts quickly. Ask: which sentence shows she did not like gently?"),
        mc("What problem does Layla notice in her first lantern?", ["The candle will not stay lit", "The metal sheet is too small", "The glue has left a smudge", "A star has a bent point and one seam is uneven"], 3, "D. The text says one star had a bent point and one seam was a little uneven. If your child chose C, they remembered the glue from the opening, where she wanted no smudge, but that is not the problem she finds."),
        en("Describe how Grandfather answers Layla's complaint. Does he argue with her?", "A good answer says he does not argue; he says Wait, lights the candle and lets the light show her. Ask: how does he teach her without telling her she is wrong?"),
        mc("What happens when the lantern is lit in the dark room, and how does it change the meaning of the bent star?", ["The room fills with smoke, so the lantern is ruined", "The bent star throws a long curved ray like a comet, so the flaw makes something beautiful", "All the stars look the same, so the flaw disappears", "The lantern goes out, so Layla starts again"], 1, "B. The text says the bent star threw a long curved ray like a comet, so the flaw made something beautiful. If your child chose C, they thought the flaw disappears, but the story says the flaw made the comet."),
        en("What does the dented brass lamp tell the reader about Grandfather's own past?", "A good answer says he once wanted every line straight too, then a dented lantern gave his best light, so he kept it. Ask: why would he keep a dented lamp in his window?"),
        mc("How does Omar's reaction support the lesson in the story?", ["He agrees that the lantern is ruined", "He asks to remake the lantern", "He loves the crooked star best, which shows others can value what Layla saw as a flaw", "He falls asleep again"], 2, "C. Omar says the crooked one is his favourite, so someone else values what Layla called a flaw. If your child chose D, they used a detail about Omar being sleepy, but he sits up and speaks."),
        en("How does the way Layla works change after her talk with Grandfather?", "A good answer says she slows down, cuts each star with care and leaves small flaws alone to see what they do. Ask: what did she do differently before and after the talk?"),
        en("Explain the phrase \"a string of captured stars\" in the description of the festival. What does the figurative language add?", "A good answer says the lanterns look like stars caught and hung up, which makes the scene feel magical. Ask: what picture do the words captured stars put in your head?"),
        mc("The lighting of the lantern is the turning point of the story. What does Layla believe before it, and what does she do after it?", ["Before, she wants to finish fast; after, she asks Omar to help", "Before, she is proud of her lantern; after, she cuts the stars again quickly", "Before, she thinks working gently is best; after, she cuts quickly", "Before, she thinks a flawed lantern is ruined; after, she works carefully and leaves small flaws alone"], 3, "D. She first says it is ruined, then works carefully and leaves small flaws alone. If your child chose C, they swapped the order and put her rushing after the lighting instead of before it."),
        en("State a theme of the story and name one detail that supports it.", "A good answer states a theme such as flaws can be beautiful, and names a detail like the bent star making a comet. Ask: what did the light do with the flaw?")
      ]
    }
  ]
};
