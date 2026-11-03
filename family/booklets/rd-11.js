// Reading practice booklet, Grade 11 expectations. English-only: see AUTHORING.md for the format.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const en = (question, answer) => it(question, answer, question, answer);
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });
const mc = (qEn, optsEn, correct, whyEn) => ({ q: T(qEn, qEn), a: T(whyEn, whyEn), options: { en: optsEn, ar: optsEn }, correct });
const exEn = (question, steps, answer) => ex(question, steps, answer, question, steps, answer);

module.exports = {
  subject: "rd",
  grade: 11,
  framework: "CCSS.ELA",
  englishOnly: true,
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "voc",
      standards: ["RL.11-12.1", "RL.11-12.4", "RL.11-12.6", "L.11-12.4a", "L.11-12.5a", "L.11-12.5b"],
      passage: {
        title: "The Generous Hour",
        text: [
          "My grandfather Hamad measured the day by the moods of the souq. In the morning it was brisk and businesslike: shutters rattled upward like a clatter of small, impatient thunder, and the lanes filled with porters and delivery boys who had no time to look at anything. By noon the whole place dozed under the heat, awnings sagging, cats sprawled across the cool tiles. But the last hour before closing, when the light turned the colour of saffron and the air smelled of frankincense and frying dough, belonged to him. He called it the generous hour.",
          "I assumed, as a child, that he meant the prices. Everyone knew that as the sun sank, a shopper could coax a better bargain from the stallholders, who preferred a modest sale to a heavy sack carried home. Yet my grandfather insisted that he never haggled. \"I do not bargain,\" he would announce, with the dignity of a judge, while a customer weighed a bag of dried limes in her hand. \"I merely discuss.\"",
          "There was an art to it, and my grandfather treated it as a craft. He claimed that the first offer was always an insult, the second a joke, and only the third an honest sentence. A tourist once tried to skip straight to the third. My grandfather looked at him with such tragic disappointment, as though a story had been told without its middle, that the man apologised and began again from the insult.",
          "Then he would discuss for twenty minutes. He sighed over the cost of the limes; he gazed at the ceiling as though consulting an ancestor; he shrugged so elaborately that a stranger might have believed he was being cheated in daylight. Always, in the end, a price was reached, and always the customer left smiling, convinced she had won. My grandfather called this \"a fair trade in pride.\" Each side carried home the better deal in its own opinion, and no one's dignity was bruised.",
          "It took me years to notice what he did when the lane emptied. Each evening the old woman who swept the street stopped at our stall, and each evening he slipped a twist of paper into her basket. \"A pinch of cardamom,\" he would say carelessly. \"Left over. No use to me.\" It was never left over. I had watched him weigh it out that morning, grain by careful grain. The sweeper never thanked him aloud, and he would not have allowed it. When I finally said so, he looked genuinely wounded. \"Do you suspect me of kindness?\" he demanded. \"That is slander.\"",
          "The stall itself was a matter of dispute. My grandfather described it as cosy. My grandmother called it cramped, and pointed out that two customers could not stand inside without trading elbows. The truth, as usual, lived somewhere between the words. It was small, certainly, but it was small in the way a held hand is small.",
          "Last month I returned to the souq. The old lanes have been cleaned and cooled, and the signs are crisp and bilingual. Where our stall stood, a young man sells the same spices at fixed prices printed in tidy black type. His goods are better labelled than ours ever were, and probably cheaper. Nobody sighs. Nobody consults the ceiling. It is, by every measurable standard, an improvement. And yet I stood there in the last hour of the afternoon, holding a bag of dried limes, and realised that I was waiting for someone to tell me that he never bargains."
        ].join("\n\n")
      },
      example: exEn(
        "A writer says, \"The committee praised the plan so thoroughly that no one noticed it had no budget.\" What does the sentence really suggest about the committee?",
        ["Irony is when the real meaning differs from the surface meaning.", "The words praise the plan, but the end of the sentence says the plan lacked a budget, which is a serious gap.", "So the writer is gently mocking the committee for admiring the plan without looking closely."],
        "The writer is being ironic: the committee was so busy praising the plan that it missed an obvious flaw."
      ),
      items: [
        mc("In the first paragraph, the morning souq is \"brisk and businesslike\". Using the clues that follow the colon, what does brisk mean?", ["Slow and sleepy", "Quiet and tidy", "Quick and energetic", "Crowded and dirty"], 2, "Shutters rattle up and people have no time to look at anything, so brisk means quick and energetic."),
        en("The souq \"dozed under the heat\" at noon. What does the verb \"dozed\" suggest, and what technique is it?", "That the souq was quiet and half asleep; it is personification (a place given a human action)."),
        mc("What does \"coax\" mean in \"coax a better bargain from the stallholders\"?", ["To force someone to agree", "To gently persuade someone", "To loudly refuse an offer", "To secretly copy a price"], 1, "To coax is to gently persuade, not force."),
        mc("Hamad says, \"I do not bargain. I merely discuss.\" Why is this ironic?", ["He bargains for twenty minutes while saying he does not", "He refuses to sell anything to tourists", "He speaks to customers in a language they do not know", "He charges more than the other stallholders"], 0, "He then bargains for twenty minutes, so his words say the opposite of what he does."),
        en("The narrator describes how he \"shrugged so elaborately\" that a stranger might think he was being cheated. What is the tone of this description, and what does \"elaborately\" add?", "Humorous and affectionate; \"elaborately\" shows his shrugs were exaggerated and full of show."),
        en("Explain \"a fair trade in pride\" in your own words.", "Both buyer and seller go home feeling they won, so neither loses dignity."),
        en("What is the narrator really showing when Hamad says, \"Do you suspect me of kindness? That is slander\"?", "He is modest and hides his kindness by pretending it is an insult (slander is a false, harmful claim)."),
        mc("The grandfather calls the stall \"cosy\" and the grandmother calls it \"cramped\". How do the connotations of the two words differ?", ["Cosy means larger than cramped", "Cosy sounds uncomfortable and cramped sounds warm", "Both words give exactly the same feeling", "Cosy sounds warm and pleasant; cramped sounds uncomfortable"], 3, "Both describe a small space, but cosy feels warm and cramped feels uncomfortable."),
        en("What does the narrator mean by \"small in the way a held hand is small\"?", "The stall was small but close, warm and comforting, so the smallness is a good thing."),
        mc("At first the narrator thought the \"generous hour\" meant lower prices. What does it turn out to mean?", ["The hour when prices are lowest", "The hour when the souq is quietest", "The hour when Hamad quietly gives to others", "The hour when the most tourists arrive"], 2, "It is the hour when Hamad quietly gives, such as the cardamom for the street sweeper."),
        en("The narrator calls the new souq \"an improvement\", then writes \"And yet\". What is the tone of the final paragraph, and which words show it?", "Wistful and nostalgic: \"And yet\" turns the praise into longing for the old warmth.")
      ]
    },
    {
      area: "inf",
      standards: ["RI.11-12.1", "RI.11-12.2", "RI.11-12.4", "RI.11-12.5", "RI.11-12.6", "RI.11-12.8"],
      passage: {
        title: "Words Worth Keeping",
        text: [
          "It is often said that somewhere in the world a language loses its last fluent speaker every few weeks. When that happens, something more than vocabulary is lost: a whole way of describing the world goes quiet. The Gulf has its own examples. The coastal dialects once held many terms for the winds that carried pearling boats out and home, and rich vocabulary for the stages of a date's ripening. I will argue that these words deserve to be saved, but that recording them is not enough. A heritage language survives only when people go on using it.",
          "The opposing view deserves a fair hearing. Languages, its supporters say, have always changed. Children adopt the languages that offer them schools, careers and friends across the world, and spending public money to preserve old words looks to some like sentimentality. This argument has force. No one can order a community to speak in a particular way, and no one should try.",
          "But the argument misunderstands what a word can hold. A sailor's term for a particular wind was never simply a label. It packed into one sound a season, a direction, a risk and a lifetime's experience of the sea. When the word disappears, the knowledge it carried is harder to pass on. Consider, too, that a language often carries its jokes, riddles and proverbs, which are the things people remember last and miss most. Losing such a word is like losing a tool from a workshop: the job may still be done, but less skilfully.",
          "Some advocates of preservation make their case badly, and it is worth saying so. They point out that many teenagers now mix Arabic and English in their messages, and conclude that the dialect is doomed. This reasoning is unconvincing. A single habit among teenagers proves very little about a whole community, and mixing two languages can show fluency in both rather than the loss of either. A cause is not helped by evidence that does not support it.",
          "What, then, should be done? Recordings and archives are valuable, and I would not abandon them. Yet a recording of a word is like a pressed flower: it keeps the shape but not the scent. A language needs speakers who laugh, argue and tell stories in it. That is why the most promising projects put the generations together. Imagine a coastal town where pupils interviewed their grandparents about fishing and collected the words they heard, and where a year later they could name more traditional terms than they could at the start. A single example like this proves little, and I do not claim otherwise. It does suggest that the method is worth trying.",
          "Schools and families can go further. Poetry competitions in the local dialect, storytelling evenings, and even new dictionary entries for modern things, such as the metro or the solar park, all treat the language as a living thing that can grow rather than as an exhibit in a glass case. Such efforts are modest and cheap, and they ask nothing of anyone except attention and company.",
          "In the oases of this country, a falaj, the ancient irrigation channel, has carried water to date palms for centuries. It never flowed by itself: each generation cleared it, repaired it and shared its water by agreed turns. A language is kept in much the same way. It is not preserved by admiring it from a distance, but by using it and tending it every day."
        ].join("\n\n")
      },
      example: exEn(
        "A writer argues, \"Our town should build a new library, because the old one is too small. Last Saturday it was so crowded that I could not find a seat.\" What is the claim, and is the evidence enough to support it?",
        ["The claim is what the writer wants the reader to accept: build a new library.", "The evidence is a single Saturday, which may have been unusually busy.", "One day is not enough to show that the library is always too small, so the evidence is thin."],
        "Claim: build a new library. The evidence (one crowded Saturday) is too limited to prove the library is too small."
      ),
      items: [
        en("State the author's thesis in one sentence.", "Heritage words deserve to be saved, but recording them is not enough: a language survives only when people keep using it."),
        en("The essay begins with the claim that a language loses its last speaker \"every few weeks\". What effect does this opening have?", "It creates urgency and concern, drawing the reader into the problem."),
        mc("What opposing view does the author state in the second paragraph?", ["Languages should never change", "Languages change naturally, and spending money to save old words seems sentimental", "Children should not learn other languages", "Recordings are better than living speakers"], 1, "The paragraph says languages have always changed and that preserving old words looks sentimental to some."),
        en("How does the author respond to the idea that language change is natural?", "By arguing that a word holds knowledge (a season, a direction, a risk) that is lost when the word disappears."),
        en("What does the sailor's term for a wind illustrate?", "That a word can carry a whole body of experience, not just a label."),
        mc("Which phrase shows the author is willing to admit that the opposing side has some merit?", ["\"I will argue\"", "\"But the argument misunderstands\"", "\"This argument has force.\"", "\"It is not preserved by admiring it\""], 2, "\"This argument has force\" grants that the other side has a point."),
        mc("Some advocates say the dialect is doomed because teenagers mix Arabic and English. Why does the author find this reasoning unconvincing?", ["It generalises from one habit to a whole community, and mixing can show fluency in both", "The author thinks teenagers should not use Arabic", "The author thinks English is a danger to every dialect", "The evidence is too old to be useful"], 0, "One habit among teenagers proves little, and mixing two languages can show fluency in both."),
        mc("What does the comparison to \"a pressed flower\" mean?", ["Recordings are beautiful but fragile", "Recordings should be thrown away", "Recordings make a language grow", "A recording keeps a word's form but not its life"], 3, "A pressed flower keeps the shape but not the scent, so a recording is not enough on its own."),
        en("The author says, \"A single example like this proves little, and I do not claim otherwise.\" Why does admitting this make the argument stronger?", "It shows honesty about the limits of the evidence, so readers trust the writer more."),
        en("Does the author reject recordings and archives? Give the words that show it.", "No. The author says they are valuable: \"I would not abandon them.\""),
        en("How does the falaj comparison in the last paragraph support the thesis?", "A falaj flows only if each generation tends it, just as a language lives only if people use and care for it each day.")
      ]
    },
    {
      area: "lit",
      standards: ["RL.11-12.1", "RL.11-12.2", "RL.11-12.3", "RL.11-12.4", "RL.11-12.5", "RL.11-12.6"],
      passage: {
        title: "Not in the Least",
        text: [
          "1. Before",
          "I want it understood from the start that I am not the jealous sort. My cousin Omar and I built our robots in the same corner of the school workshop for six weeks, and I never once checked how his was coming along. I only happened to notice, in passing, that his had a tidier tower of wires, that it turned corners without wobbling, and that Mr. Hamdan patted it twice. A pat is a cheerful gesture. It means nothing. Mr. Hamdan's workshop smells of warm solder and orange peel, and I know exactly which of the stools wobbles, which is the one Omar always chooses.",
          "Mine, I should say, was perfectly adequate. It rolled forward and, on most days, back. It had a name painted on its side, Falcon, in letters I redid four times, but that was only for fun.",
          "2. The Showcase",
          "On the day of the showcase, our families filled the hall. Grandmother sat in the front row beside my mother, holding her handbag on her knees as though it might escape. I did not look to see whether she was watching Omar's robot or mine. I looked at the ceiling, which has fourteen lights, two of them dim.",
          "Omar's turn came first. He placed his robot on the starting line, rubbed his hands on his trousers, and glanced once towards the audience, as though checking that the ceiling was still there. I did not see this. I heard about it later from Layla, who sits next to me in class and sees everything. Falcon sat on my table the whole time, patient and slightly lopsided, and I will say only that she did her best.",
          "Falcon completed the course in one minute and nine seconds, including one pause, which I would describe as strategic. Omar's robot completed it in fifty-one seconds, and the hall applauded for what I timed, purely out of habit, at eleven seconds. Falcon received nine. (Habit. I time everything.)",
          "When Mr. Hamdan announced the winner, I was studying my shoelaces, which is how I know that the trophy was silver, with a small dent in its left handle and a gold star that was slightly crooked. I did not look at it at all.",
          "3. After",
          "Later, in the car park, Omar was carrying the trophy in one hand and his robot in the other when a front wheel dropped off and rolled away across the tarmac. He stared after it. I could have said something clever. Instead I ran, stopped the wheel against the kerb, and carried it back, a little out of breath. It was warm from the sun, and heavier than I expected.",
          "\"It was always loose,\" Omar said. \"I tightened it twice. I thought maybe that was why you...\" He stopped.",
          "\"Why I what?\"",
          "\"Why you kept looking over.\"",
          "\"I was not looking,\" I said.",
          "\"Right,\" said Omar, and he was kind enough to smile at the tarmac.",
          "Our mothers were calling us from the car, and Grandmother was waving her handbag like a flag. I fished a small screwdriver out of my bag, since I carry one for emergencies and for no other reason.",
          "I am not saying I was glad that he won. I am only saying that the screwdriver was in my hand, that the wheel is back on, and that on Monday I will be asking him how he got his corners so smooth. For research."
        ].join("\n\n")
      },
      example: exEn(
        "A narrator says, \"I did not mind at all that they forgot my birthday,\" and then spends three paragraphs describing exactly what each person was doing that day. Why might this narrator be unreliable?",
        ["An unreliable narrator tells us something that the details of the story do not support.", "Saying \"I did not mind at all\" is a claim; the three long paragraphs show how closely the narrator noticed and remembered.", "The details suggest the narrator did mind, so we should trust the details more than the words."],
        "Because her claim (not minding) is contradicted by how much she remembers; the details show she did mind."
      ),
      items: [
        mc("From whose point of view is the story told, and what is the limit of that point of view?", ["Third person, so we can read Omar's thoughts", "First person, so we can read everyone's thoughts", "Third person, told by Layla", "First person, so we only know what the narrator sees and chooses to say"], 3, "The narrator says \"I\", so we cannot know Omar's thoughts directly."),
        en("The narrator says she is \"not the jealous sort\". What details in the first section suggest otherwise?", "She noticed Omar's tidier wires, smooth corners and Mr. Hamdan's two pats, though she says she never checked."),
        en("\"A pat is a cheerful gesture. It means nothing.\" What tone does this show?", "Defensive and a little hurt: she insists it means nothing because it clearly matters to her."),
        mc("How many seconds longer did Falcon take to finish the course than Omar's robot?", ["18 seconds", "8 seconds", "9 seconds", "120 seconds"], 0, "1 minute 9 seconds is 69 seconds, and 69 minus 51 is 18 seconds."),
        en("The narrator says she timed the applause \"purely out of habit\". How does this detail work against her claim of not caring?", "She was paying close attention to how much each robot was applauded (eleven seconds against nine), which shows she cared."),
        mc("How does the narrator reveal that she did look at the trophy, although she says she did not?", ["She says she was proud of it", "She describes its silver colour, the dent in the left handle and the crooked gold star", "She asks Mr. Hamdan about it", "Omar shows it to her"], 1, "Her detailed description shows she looked closely."),
        en("What event in the third section is the turning point of the story?", "The front wheel of Omar's robot drops off and she runs to catch it."),
        mc("What does Omar's line \"Why you kept looking over\" reveal?", ["He is angry with her about the stool", "He did not see the showcase", "He noticed she was watching him, so her claim that she did not look is untrue", "He wants to swap robots"], 2, "He noticed her watching, which contradicts what she says."),
        mc("Why is Omar \"kind enough to smile at the tarmac\"?", ["He is embarrassed about his robot", "He is laughing at her", "He cannot find his wheel", "He looks away so she can keep her pride"], 3, "He looks away to let her keep her pride and does not argue with her denial."),
        en("The story is divided into three titled parts: Before, The Showcase and After. How does this structure help show the narrator's change?", "Before shows her denial and hidden jealousy, The Showcase builds the tension of her pretended indifference, and After shows her acting kindly by helping with the wheel."),
        en("State a theme of the story and give one detail that supports it.", "Actions show feelings more truly than words (or: pride can be softened by generosity). Detail: she says she does not care, yet she runs to save his wheel and plans to ask him for advice.")
      ]
    }
  ]
};
