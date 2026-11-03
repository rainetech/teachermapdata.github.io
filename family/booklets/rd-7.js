// Reading practice booklet, Grade 7 expectations. English-only: see AUTHORING.md for the format.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const en = (question, answer) => it(question, answer, question, answer);
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });
const exEn = (question, steps, answer) => ex(question, steps, answer, question, steps, answer);

module.exports = {
  subject: "rd",
  grade: 7,
  framework: "CCSS.ELA",
  englishOnly: true,
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "voc",
      standards: ["RL.7.4", "L.7.4a", "L.7.4b", "L.7.5a", "L.7.5c"],
      passage: {
        title: "Dawn at the Harbour",
        text: "Maryam arrived at the harbour before the sun had properly risen. The sky was the colour of a pale peach, and the water lay so still that it seemed to be holding its breath. Her uncle Hamdan's fishing boat rocked gently beside the pier, its paint faded and peeling, but he spoke of it with the fondness other people keep for an old friend.\n\n\"She is not elegant,\" he said, patting the rail, \"but she is dependable. She has never once let me down.\"\n\nMaryam smiled at the word. Uncle Hamdan was a man of few words, and he chose each one with care. When other fishermen hurried past, shouting and clattering their crates, he moved slowly and deliberately, checking every knot in the net. Some of the younger men called him stubborn, but Maryam thought the word too harsh. To her, he was determined, a man who would not give up a good habit just because it was old.\n\nA thin cat, scrawny and watchful, crept along the pier and stared at the buckets. A moment later a gull landed, and the cat slunk away, as if it had never been interested at all. Maryam laughed. The gull strutted up and down like a tiny king inspecting his kingdom.\n\nAs the boat slid out of the harbour, the engine coughed, then settled into a steady hum. The water turned from grey to green and then to a deep, glittering blue. Maryam leaned over the side. The sea was so transparent that she could see the sandy bottom and a shoal of silver fish darting like scattered coins.\n\n\"Your grandfather taught me to read the water,\" Uncle Hamdan said. \"When it is dark and ruffled, the fish are hiding. When it is smooth, they are feeding.\" Maryam had been reluctant to come, unsure whether she would enjoy a whole morning with nothing to do but wait. Now, with the cool wind in her hair and the salty tang of the sea on her lips, she wanted the morning to last forever.\n\nBy the time they returned, the harbour had woken. Porters wheeled crates of fish toward the market, and the word transport suddenly made sense to her: port means to carry, and trans means across, so to transport is to carry something across from one place to another. The air smelled of salt, diesel and fresh bread from a nearby bakery, a warm and comforting mix. Uncle Hamdan gave her a single silver fish to take home. \"A small catch,\" he said, \"but an honest one.\"\n\nMaryam held it carefully the whole way back, as though it were a treasure."
      },
      example: exEn(
        "Read: \"The old bridge was sturdy, but the new one was flimsy.\" Using the clue \"but\", what does flimsy mean?",
        ["Look at the word \"but\": it signals a contrast with \"sturdy\".", "Sturdy means strong and solid, so the opposite idea, flimsy, must mean easily damaged or broken."],
        "Flimsy means easily damaged or broken."
      ),
      items: [
        en("Uncle Hamdan \"moved slowly and deliberately, checking every knot in the net.\" Using the context, what does deliberately mean?", "Carefully and on purpose, without rushing."),
        en("Uncle Hamdan calls his boat \"dependable\" and says \"she has never once let me down.\" What does dependable mean?", "Can be trusted or relied on (the clue is that she never let him down)."),
        en("Some men call Uncle Hamdan \"stubborn\", but Maryam prefers \"determined\". How do the feelings of the two words differ?", "Stubborn has a negative feeling (refusing to change for no good reason); determined has a positive feeling (firmly keeping to a good aim)."),
        en("\"The water lay so still that it seemed to be holding its breath.\" What kind of figurative language is this, and what does it suggest?", "Personification (the water is given a human action); it suggests the harbour was very calm and quiet."),
        en("\"The gull strutted up and down like a tiny king inspecting his kingdom.\" What does this simile tell you about the gull?", "It walked proudly and importantly, as if it owned the place."),
        en("The cat \"slunk away, as if it had never been interested.\" What does slunk suggest that the word walked would not?", "Slunk suggests moving quietly and a little guiltily or embarrassed, trying not to be noticed."),
        en("The sea was \"transparent\" so Maryam could see the bottom. What does transparent mean?", "Clear enough to see through."),
        en("The fish were \"darting like scattered coins.\" What two things does this simile tell you about the fish?", "They were silver and shiny, and they moved quickly in different directions."),
        en("Maryam was \"reluctant\" to come. Which words in the same sentence help you understand it, and what does it mean?", "\"Unsure whether she would enjoy\" helps; reluctant means unwilling or not keen."),
        en("The passage explains that port means \"to carry\" and trans means \"across\". What does the word transport mean, and what would a porter do?", "Transport means to carry across from one place to another; a porter carries things (such as crates of fish)."),
        en("At the end, Maryam held the fish \"as though it were a treasure.\" Why does the author choose this comparison?", "It shows she valued the small gift and the memory of the morning very much, even though the fish itself was small.")
      ]
    },
    {
      area: "inf",
      standards: ["RI.7.1", "RI.7.2", "RI.7.3", "RI.7.4", "RI.7.5", "RI.7.8"],
      passage: {
        title: "Bringing Back the Arabian Oryx",
        text: "Few animals show the power of careful planning as clearly as the Arabian oryx. This graceful antelope, with its pale coat and long, straight horns, once roamed the deserts of the Arabian Peninsula in large numbers. It is well suited to life in the sand. Its light colour reflects the sun, its wide hooves keep it from sinking, and it can go many days without drinking, getting most of its water from the plants it eats.\n\nSadly, these strengths could not protect the oryx from people. Hunters took more animals than the herds could replace, and vehicles made it easy to chase them across open ground. By the early 1970s, no oryx remained in the wild. The species had disappeared from the places where it had lived for thousands of years.\n\nThe story did not end there, because a few oryx survived in zoos and private collections. Conservationists gathered these animals and began breeding programmes. The first aim was simple: grow a healthy herd that could one day return to the desert. Later, oryx were released into protected areas in Oman, and other countries, including the UAE, created protected reserves where herds could live safely. Rangers watch over the animals, provide water in dry seasons, and keep records of every birth.\n\nThe results have been encouraging. In recent years, the international group that tracks threatened species moved the Arabian oryx from \"Endangered\" to \"Vulnerable\", a lower level of risk. Today thousands of oryx live in reserves, in breeding centres and in the wild.\n\nSome people argue that money spent on animals would be better spent on human needs. This view deserves respect, but it overlooks an important fact: protecting the oryx also protects its habitat. Reserves keep desert plants growing, which helps other animals, from gazelles to insects. Reserves also give local people jobs as rangers and guides. Therefore the oryx programme serves both wildlife and communities.\n\nThe work is not finished. Oryx still face threats, and a reserve needs constant care. Yet the journey from extinction in the wild to thousands of living animals proves that determined, patient action can repair some of the damage people have caused. The oryx is not only a symbol of the desert; it is evidence that recovery is possible."
      },
      example: exEn(
        "Read: \"Solar panels turn sunlight into power. They need no fuel, they make no smoke, and they last for many years. For these reasons, solar power is a good choice.\" What is the author's claim, and what is the evidence?",
        ["A claim is what the author wants you to believe. Look for the \"for these reasons\" sentence: solar power is a good choice.", "Evidence is the facts that support the claim: no fuel, no smoke, and a long life."],
        "Claim: solar power is a good choice. Evidence: it needs no fuel, makes no smoke and lasts many years."
      ),
      items: [
        en("What is the central idea of the passage?", "Careful conservation work has brought the Arabian oryx back from disappearing in the wild, and it shows that recovery is possible."),
        en("Name two features that help the oryx live in the desert.", "Any two: its light coat reflects the sun, its wide hooves stop it sinking, it can go many days without drinking."),
        en("According to the passage, why did the oryx disappear from the wild?", "Hunters took more animals than the herds could replace, and vehicles made chasing them easy."),
        en("How did the oryx that survived in zoos and private collections help the species?", "They were gathered for breeding programmes to grow a healthy herd that could return to the desert."),
        en("What did the change from \"Endangered\" to \"Vulnerable\" show?", "The oryx was at a lower level of risk, which is evidence that the recovery work was succeeding."),
        en("What does the author mean by saying the opposing view \"overlooks\" an important fact?", "It fails to notice or consider that fact."),
        en("What is the opposing argument the author mentions in paragraph 5?", "That money spent on animals would be better spent on human needs."),
        en("How does the author answer that opposing argument? Give two pieces of evidence.", "Protecting the oryx protects its habitat, which helps other animals such as gazelles and insects; reserves also give local people jobs as rangers and guides."),
        en("How does paragraph 2 connect to paragraph 3? Describe the order of ideas.", "Paragraph 2 explains the problem (the oryx vanished from the wild); paragraph 3 explains the solution (breeding programmes and reserves)."),
        en("Which facts from the passage best support the final claim that \"recovery is possible\"?", "No oryx remained in the wild in the early 1970s, yet today thousands live in reserves, breeding centres and the wild."),
        en("Does the author say the work is finished? Use the passage to explain why this matters to the argument.", "No: oryx still face threats and reserves need constant care. This makes the argument honest and shows that continued effort is needed.")
      ]
    },
    {
      area: "lit",
      standards: ["RL.7.1", "RL.7.2", "RL.7.3", "RL.7.4", "RL.7.6"],
      passage: {
        title: "The Flat Tyre",
        text: "I stared at the dashboard clock for the fourth time. We were meant to reach my cousin Noura's house in Liwa before sunset, because tonight was the family gathering, and I had promised to bring the dessert I had made myself. Then the car gave a loud thump, shuddered, and rolled to a stop at the edge of the road.\n\n\"Flat tyre,\" Baba said calmly, as if he were reporting the weather.\n\nI groaned. Outside, the dunes rose on every side, orange and enormous, and the afternoon heat shimmered above the road. There was no shop, no house, not even a tree. \"We will be late,\" I said. \"Everything will be ruined.\"\n\nBaba only smiled. He opened the boot and began to unpack the tools. I sat in the shade of the open door, hugging the box of dessert, and I felt sure that no one in the world had ever had a worse day.\n\nThen the quiet settled around us, and I noticed things I had not seen from the speeding car. A beetle crossed the sand, leaving a neat line of tiny footprints like stitching on a cloth. The wind whispered over the dune crests and sent ribbons of sand sliding down their sides. High above, a falcon turned wide circles in the pale sky.\n\n\"Look,\" Baba said softly, pointing. I looked up. Far across the dunes, a line of camels was walking in single file, their herder a small dark figure beside them. I watched until they vanished over a ridge. I had lived in this country all my life, yet I could not remember ever simply watching it.\n\nA truck slowed beside us. The driver, a young man with a friendly face, jumped out and helped Baba lift the heavy spare tyre into place. \"We all get stuck sometimes,\" he said, refusing the money Baba offered. \"Just help the next person.\"\n\nBy the time we reached Noura's house, the sun was setting and the lamps were already lit. I braced myself for disapproval. Instead, Noura hugged me and said, \"You are just in time.\" The dessert was a little squashed, but everyone ate it anyway, and Baba told the story of the flat tyre, making the beetle sound like a hero.\n\nLater, lying on the roof under a crowd of stars, I realised that the worst part of my day had given me the best part. I had been so busy hurrying toward the evening that I had almost missed the afternoon."
      },
      example: exEn(
        "Read: \"The ferry did not arrive, so Hind walked along the creek to the next crossing and met an old friend there.\" How did the setting shape what happened?",
        ["Ask what the setting is: a creek where a ferry should arrive.", "Ask what problem the setting caused: the ferry did not come.", "That problem made Hind walk to another crossing, which led to meeting her friend."],
        "The missing ferry at the creek made Hind walk to another crossing, where she met her friend."
      ),
      items: [
        en("Why was the narrator worried about being late?", "There was a family gathering at Noura's house that evening and the narrator had promised to bring a dessert."),
        en("Who is telling the story, and how do you know?", "The narrator tells it in the first person, using \"I\", \"my\" and \"me\"."),
        en("How do the narrator and Baba react differently to the flat tyre?", "The narrator is upset and thinks the day is ruined; Baba stays calm and smiles."),
        en("How does the desert setting shape the plot after the car stops?", "There is no shop or house nearby, so they must change the tyre themselves and wait, which gives the narrator time to notice the desert and lets a passing driver help."),
        en("List two things the narrator notices while waiting.", "Any two: the beetle's tracks, the wind and sliding sand, the falcon, the line of camels."),
        en("\"Tiny footprints like stitching on a cloth.\" What does this simile show about the beetle's tracks?", "They were small, neat and in a straight, regular line."),
        en("Why does the narrator say, \"I could not remember ever simply watching it\"?", "The narrator had always hurried past the desert and never stopped to look closely at it."),
        en("Why does the truck driver refuse the money, and what does he ask instead?", "He believes people should help each other; he asks Baba to help the next person."),
        en("What does \"I braced myself for disapproval\" tell you about the narrator's feelings?", "The narrator was nervous and expected to be scolded for arriving late."),
        en("How does Noura's welcome differ from what the narrator expected?", "The narrator expected disapproval, but Noura hugged the narrator and said it was just in time."),
        en("Explain the last sentence: \"I had almost missed the afternoon.\"", "The narrator was so focused on reaching the evening that the pleasure of the present time, the afternoon in the desert, nearly went unnoticed."),
        en("State a theme of the story and support it with two details.", "Slowing down or accepting delays can bring unexpected good things. Details: the wait let the narrator notice the beetle and camels, and the evening was happy anyway, with Noura saying \"just in time\".")
      ]
    }
  ]
};
