// Reading practice booklet, Grade 6 expectations. English-only: see AUTHORING.md for the format.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const en = (question, answer) => it(question, answer, question, answer);
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });
const exEn = (question, steps, answer) => ex(question, steps, answer, question, steps, answer);

module.exports = {
  subject: "rd",
  grade: 6,
  framework: "CCSS.ELA",
  englishOnly: true,
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "voc",
      standards: ["RL.6.4", "L.6.4a", "L.6.4b", "L.6.5a", "L.6.5c"],
      passage: {
        title: "Dawn at the Old Harbour",
        text: `Maryam and her older cousin Noura stepped onto the wooden jetty at dawn, and the creek greeted them with a golden glow. The water was a sheet of glass, and the old dhows rested against the quay like tired camels at the end of a long journey. Her grandfather Hamdan, a boat repairer, was already at work. The sound of his hammer drifted across the harbour, steady as a heartbeat.

"Hand me that plank," he said. "Be careful. It is fragile, and one crack would spoil a whole morning's work."

Maryam lifted it as gently as a bird's egg. Grandfather Hamdan nodded. "Good. Some people call these boats dusty relics. I call them veterans. Each one has faced wind, salt and storms, and still it floats."

"What did they carry?" Maryam asked.

"Everything," he said. "For hundreds of years, dhows transported dates, pearls, spices and cloth across the sea. Think of the word itself. The prefix trans- means across, and the root port means to carry. So to transport something is to carry it across."

Maryam repeated the word quietly, turning it over like a shell in her palm. Then she noticed a tangle of rope on the deck. She frowned, because it looked hopeless. Her grandfather saw her face. "Do not be discouraged," he said. "Every knot has an end, and every end can be found. Be patient, and the rope will give way."

She sat down and worked at it for a long while. At first her fingers felt clumsy, and the knot seemed to grow tighter. But she kept going, and at last one loop slid free, then another. When the rope lay straight, she held it up like a trophy.

"You are tenacious," said Grandfather Hamdan. "That means you do not give up easily."

By midday the harbour was bustling, and the heat pressed down like a heavy blanket. Maryam's arms ached, yet she felt light inside. The old boat in front of her no longer looked like a relic. It looked ready for the sea, and she had helped to make it so. As the sun sank toward the water, the creek turned the colour of honey, and she knew she would return.`
      },
      example: exEn(
        "Read: \"Do not touch the glass vase. It is delicate, and the slightest knock could shatter it.\" What does delicate mean?",
        ["Look for clues near the word. The next part says the slightest knock could shatter it.", "Something that can be broken by a small knock is easy to break.", "So delicate means easily broken or damaged."],
        "Easily broken or damaged."
      ),
      items: [
        en("Grandfather Hamdan says the plank is \"fragile\" and that \"one crack would spoil\" the work. Using that clue, what does fragile mean?", "Easily broken."),
        en("\"The old dhows rested against the quay like tired camels.\" What does this simile suggest about the dhows?", "They were still and resting, as if worn out after long journeys."),
        en("The hammer sound is \"steady as a heartbeat\". What does this tell you about how Grandfather Hamdan worked?", "He hammered in a regular, even rhythm, calmly and without stopping suddenly."),
        en("\"The water was a sheet of glass.\" Is this a simile or a metaphor, and what does it mean?", "A metaphor (it says the water WAS glass, with no \"like\" or \"as\"); the water was very smooth and still."),
        en("Grandfather Hamdan says some people call the boats \"dusty relics\" but he calls them \"veterans\". Which word has the more respectful feeling, and why?", "\"Veterans\": it suggests experienced, brave survivors, while \"dusty relics\" suggests old things that are no longer useful."),
        en("Grandfather Hamdan explains that trans- means across and port means to carry. What does \"transport\" mean?", "To carry something across (from one place to another)."),
        en("Grandfather Hamdan says, \"Do not be discouraged.\" Using the sentences around it, what does discouraged most likely mean?", "Feeling like giving up, having lost hope or confidence."),
        en("The rope \"looked hopeless\". The suffix -less means \"without\". What does hopeless mean here?", "Without hope: it looked as if it could never be untangled."),
        en("Maryam turned the word over \"like a shell in her palm\". What does this simile show about how she treated the word?", "She thought about it slowly and carefully, as if looking closely at something interesting."),
        en("What does Grandfather Hamdan mean when he calls Maryam \"tenacious\", and which of her actions shows it?", "She does not give up easily; she kept working at the knot even when it seemed to grow tighter."),
        en("At the end, the old boat \"no longer looked like a relic\" to Maryam. Explain what changed in the way she saw it.", "At first it was just an old boat, but after helping to repair it she saw it as valuable and ready for the sea.")
      ]
    },
    {
      area: "inf",
      standards: ["RI.6.1", "RI.6.2", "RI.6.4", "RI.6.5", "RI.6.6", "RI.6.8"],
      passage: {
        title: "Fresh Water from the Sea",
        text: `The UAE is a land of sand, sun and very little rain. Rivers do not flow here, and the underground water that people once reached by digging wells is limited. So where does the water in your kitchen tap come from? For many homes, the answer is the sea.

The process is called desalination, which means taking the salt out of water. Seawater is too salty to drink. In a modern plant, the water is first filtered to remove sand and seaweed. Then a pump pushes it at high pressure against a thin sheet called a membrane. The membrane has holes so tiny that water passes through but salt does not. This method is called reverse osmosis. What comes out is clean, fresh water, which is tested and then sent to homes through pipes.

An older method uses heat. The seawater is boiled, and the steam is collected and cooled back into water. The salt is left in the tank. Heating uses a great deal of energy, which is why many newer plants prefer membranes, which need less.

Desalination has brought important benefits. Cities such as Abu Dhabi and Dubai could grow quickly because they had a dependable supply of water, even in a long, dry summer. However, it also brings challenges. Pumping and heating take electricity, and making electricity can add pollution to the air. The salt that is removed leaves the plant as a very salty liquid called brine. If it is poured back into the sea carelessly, it can harm sea plants and animals near the shore.

Engineers are working on answers. Some plants now run on energy from solar panels. Others release the brine through many small pipes so that it mixes quickly with the sea.

Still, the best answer may begin at home. Every litre saved is a litre that does not need to be made, pumped and carried. Turning off the tap while brushing teeth, fixing a dripping pipe and watering plants in the cool evening all help. Desalination is a clever solution, but it is not a magic one. Using water wisely is a habit that every family can share.`
      },
      example: exEn(
        "Read: \"Camels store fat in their humps. This fat gives them energy on long journeys. A camel can also drink a great deal of water at once.\" What is the central idea?",
        ["Ask: what is the whole paragraph mostly about? Camels and how their bodies help them travel far.", "Each sentence gives a detail that supports that idea.", "Put the main point in one sentence."],
        "Camels' bodies are well suited to long journeys."
      ),
      items: [
        en("According to the first paragraph, why does the UAE need water from the sea?", "There is very little rain, no flowing rivers and only a limited amount of underground water."),
        en("What is the first step in a modern desalination plant?", "The seawater is filtered to remove sand and seaweed."),
        en("In reverse osmosis, what lets water pass through but keeps the salt out?", "A thin sheet called a membrane with very tiny holes."),
        en("How is the older heat method different from the membrane method?", "It boils the seawater and cools the steam back into water, leaving the salt in the tank; it uses much more energy."),
        en("Read: \"they had a dependable supply of water, even in a long, dry summer.\" Using the context, what does dependable mean?", "Able to be relied on; steady and always there."),
        en("What harm can brine cause, and when?", "It can harm sea plants and animals near the shore if it is poured back into the sea carelessly."),
        en("Name two ways engineers are trying to solve the problems of desalination.", "Running plants on solar energy, and releasing brine through many small pipes so it mixes quickly with the sea."),
        en("How does the fourth paragraph fit into the whole passage?", "It shows both sides of desalination, its benefits (cities could grow) and its challenges (energy, pollution and brine)."),
        en("The author writes, \"Desalination is a clever solution, but it is not a magic one.\" What does this mean?", "It helps a great deal but does not solve every problem, so people still need to use water wisely."),
        en("The author claims that \"the best answer may begin at home.\" Which reason does the author give to support this?", "Every litre saved is a litre that does not need to be made, pumped and carried."),
        en("What do you think is the author's main purpose in writing this passage? Give evidence.", "To explain how desalination works and to persuade readers to save water; the last paragraph gives ways families can save water.")
      ]
    },
    {
      area: "lit",
      standards: ["RL.6.1", "RL.6.2", "RL.6.3", "RL.6.4", "RL.6.5", "RL.6.6"],
      passage: {
        title: "Hind and the Oryx Talk",
        text: `On Thursday morning, Mrs. Salma told the class that every student would give a two-minute talk about an animal of the UAE. Hind's stomach twisted like a wrung cloth. She loved animals, and she had read three books about the Arabian oryx, but standing at the front of the room with twenty pairs of eyes on her felt like standing at the edge of a cliff.

Every evening she practised in her bedroom, whispering to the mirror. Her older brother Khalid heard her through the wall. "You sound like a tiny bird in there," he teased, and then he added kindly, "Say it louder. Pretend the wall is the class."

On Monday morning, her turn came. Hind's legs felt heavy as she walked to the front. She opened her notes, and the words on the page blurred. For a long moment she could not make a sound. Someone at the back coughed. Hind wanted to run out of the door.

Then she looked at the picture she had brought: an oryx standing alone on a pale dune, its white coat shining, its long horns pointing straight at the sky. She remembered what she had learned. Oryx had once vanished from the wild, yet careful people had brought them back, one small herd at a time. They had not given up, and neither would she.

"The Arabian oryx," she began, and her voice came out thin as thread. She swallowed and started again. "The Arabian oryx can go a long time without drinking, because it gets moisture from the plants it eats." This time the words were steadier. She spoke about its pale coat, which reflects the sunlight, and about the herds that now roam protected land. When she finished, the class clapped. Her cheeks were warm, but she was smiling.

Afterwards, Mrs. Salma said, "That was brave."

Hind shook her head. "I was nervous the whole time."

"Exactly," said Mrs. Salma. "Bravery is being nervous and speaking anyway."

That evening, Hind knocked on Khalid's door. "Next time, I will practise out loud," she said. "Thank you for the tip."

Khalid grinned. "Next time?"

"Yes," said Hind, surprising herself. "I think I might even enjoy it."`
      },
      example: exEn(
        "Read: \"Omar shook his head at first. But after he tried the climbing wall twice, he laughed and asked for a third turn.\" How did Omar change?",
        ["Look at how Omar acts at the start: he shook his head, so he was unwilling.", "Look at how he acts at the end: he laughed and asked for a third turn.", "Compare the two: he went from unwilling to eager."],
        "He changed from unwilling to eager."
      ),
      items: [
        en("What task did Mrs. Salma give the class?", "Each student had to give a two-minute talk about an animal of the UAE."),
        en("\"Hind's stomach twisted like a wrung cloth.\" What does this simile show about how she felt?", "She felt very nervous and uncomfortable about the talk."),
        en("Who tells this story, and how do you know? Is it first person or third person?", "Third person: an outside narrator tells it, using \"Hind\", \"she\" and \"her\" (not \"I\")."),
        en("What advice did Khalid give Hind, and what attitude did he show?", "He told her to say it louder and pretend the wall was the class; he teased her a little but was kind and helpful."),
        en("Why could Hind not speak at first when she reached the front?", "She was so nervous that the words on her page blurred and no sound would come out."),
        en("What did Hind do and remember that helped her to begin?", "She looked at her picture of the oryx and remembered that people had brought the oryx back by not giving up."),
        en("\"Her voice came out thin as thread.\" What does this tell you about her voice at that moment?", "It was very quiet and shaky."),
        en("Why does the author include the story of the oryx being brought back from the wild?", "It matches Hind's own situation: like the people who helped the oryx, she keeps going when something is hard."),
        en("Explain Mrs. Salma's idea of bravery in your own words.", "Being brave does not mean having no fear; it means doing the thing even though you feel nervous."),
        en("How is Hind different at the end of the story from the beginning?", "At the start she dreaded speaking in front of the class; at the end she is proud and thinks she might enjoy doing it again."),
        en("State a theme of this story and give one detail that supports it.", "Courage means acting even when you are nervous (or: practice and support help you grow). Detail: Hind spoke anyway and then wanted to try again.")
      ]
    }
  ]
};
