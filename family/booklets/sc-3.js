// Science practice booklet, Grade 3 expectations. See ma-5.js for the format.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });

module.exports = {
  subject: "sc",
  grade: 3,
  framework: "NGSS",
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "bio",
      standards: ["3-LS1-1", "3-LS2-1", "3-LS3-1", "3-LS3-2", "3-LS4-1", "3-LS4-2", "3-LS4-3", "3-LS4-4"],
      example: ex(
        "Maryam sees a baby Arabian oryx standing next to its mother. Both have a pale coat and long, straight horns. Is the pale coat an inherited trait or a learned one? Explain.",
        ["An inherited trait is passed from parents to their young, like the colour of a coat.", "The baby oryx did not have to learn to have a pale coat. It was born with it.", "So the pale coat is an inherited trait."],
        "Inherited: the baby is born with the coat its parents have.",
        "ترى مريم صغيرًا من المها العربي واقفًا بجانب أمه. لكل منهما فرو فاتح اللون وقرنان طويلان مستقيمان. هل لون الفرو الفاتح صفة موروثة أم متعلَّمة؟ وضّح.",
        ["الصفة الموروثة تنتقل من الآباء إلى صغارهم، مثل لون الفرو.", "لم يحتج صغير المها إلى أن يتعلم الفرو الفاتح. لقد وُلد به.", "إذن لون الفرو الفاتح صفة موروثة."],
        "موروثة: يولد الصغير بالفرو الذي لدى والديه."
      ),
      items: [
        it("Name the stages in the life cycle of a falcon, in order.", "Egg, chick, young falcon, adult falcon.", "اذكر مراحل دورة حياة الصقر بالترتيب.", "بيضة، ثم فرخ، ثم صقر صغير، ثم صقر بالغ."),
        it("A butterfly starts as an egg. What stage comes after the caterpillar?", "The chrysalis (pupa), and then the adult butterfly.", "تبدأ الفراشة بيضة. ما المرحلة التي تأتي بعد اليرقة؟", "الشرنقة (العذراء)، ثم الفراشة البالغة."),
        it("Put the life of a date palm in order: adult palm with fruit, seed, young palm, seedling.", "Seed, seedling, young palm, adult palm with fruit.", "رتّب حياة نخلة التمر: نخلة بالغة تحمل الثمر، بذرة، نخلة صغيرة، شتلة.", "بذرة، ثم شتلة، ثم نخلة صغيرة، ثم نخلة بالغة تحمل الثمر."),
        it("Arabian oryx live in herds. Give one way that living in a group helps an oryx.", "Any one of: more eyes to spot danger, protection for the young, or finding food and water together.", "يعيش المها العربي في قطعان. اذكر طريقة واحدة تساعد بها الحياة في مجموعة المها.", "أي طريقة واحدة من: عيون أكثر لاكتشاف الخطر، أو حماية الصغار، أو العثور معًا على الطعام والماء."),
        it("Which is an inherited trait: the colour of a child's eyes, or knowing how to ride a bicycle?", "The colour of the eyes. Riding a bicycle is learned.", "أيهما صفة موروثة: لون عيني الطفل أم معرفة ركوب الدراجة؟", "لون العينين. أما ركوب الدراجة فيُتعلَّم."),
        it("A falcon is trained to return to its owner's glove. Is this trait inherited or learned?", "Learned: the falcon is taught it by its trainer.", "يُدرَّب الصقر على العودة إلى قفاز صاحبه. هل هذه الصفة موروثة أم متعلَّمة؟", "متعلَّمة: فالمدرّب هو من يعلّمها للصقر."),
        it("Two seeds from the same date palm are planted. One gets plenty of water and sunlight, the other gets very little. Which grows taller, and what does this show?", "The one with plenty of water and sunlight. The environment can change how a living thing grows.", "زُرعت بذرتان من النخلة نفسها. حصلت إحداهما على ماء وضوء كثيرين، والأخرى على القليل منهما. أيهما تنمو أطول؟ وماذا يدل ذلك؟", "التي حصلت على ماء وضوء كثيرين. فالبيئة قد تغيّر طريقة نمو الكائن الحي."),
        it("Hamdan finds the fossil of a sea shell in a rock in the UAE desert, far from the sea. What might this tell us about that place long ago?", "It was once covered by the sea.", "وجد حمدان أحفورة صدفة بحرية في صخرة في صحراء الإمارات، بعيدًا عن البحر. ماذا قد يخبرنا ذلك عن ذلك المكان قديمًا؟", "كان مغطى بالبحر ذات يوم."),
        it("A camel has wide, padded feet. How does this help it live in the desert?", "The wide feet spread its weight so it does not sink into soft sand.", "للجمل أقدام عريضة ذات وسائد. كيف يساعده ذلك على العيش في الصحراء؟", "الأقدام العريضة توزع وزنه فلا يغوص في الرمل الناعم."),
        it("Mangrove trees grow in salty water on the coast. Their roots stick up out of the mud. Why is this useful?", "The roots take in air, because the mud around them holds very little air.", "تنمو أشجار القرم في الماء المالح على الساحل، وتبرز جذورها من الطين. لماذا يفيدها ذلك؟", "تمتص الجذور الهواء، لأن الطين من حولها يحوي هواءً قليلًا جدًا."),
        it("A small pond in a wadi dries up in a very hot summer. What might happen to the animals that lived there?", "Some move to find water in another place, and some may not survive. Changes in a habitat affect the animals living in it.", "جفّت بركة صغيرة في وادٍ في صيف شديد الحرارة. ماذا قد يحدث للحيوانات التي كانت تعيش فيها؟", "بعضها ينتقل ليبحث عن الماء في مكان آخر، وقد لا ينجو بعضها. فالتغيّر في الموطن يؤثر في الحيوانات التي تعيش فيه."),
        it("Explain why the pale sandy coat of an Arabian oryx helps it survive in the desert.", "Pale colours reflect sunlight, which helps it stay cooler, and the coat matches the sand so it is harder to spot.", "وضّح لماذا يساعد الفرو الرملي الفاتح للمها العربي على البقاء في الصحراء.", "الألوان الفاتحة تعكس ضوء الشمس فتبقيه أبرد، ويشبه الفرو لون الرمل فيصعب رؤيته.")
      ]
    },
    {
      area: "ear",
      standards: ["3-ESS2-1", "3-ESS2-2", "3-ESS3-1"],
      example: ex(
        "The forecast for Tuesday in Dubai says 38 degrees and sunny, with no rain. Is that weather or climate? Explain.",
        ["Weather is what the air is like in one place on one day or over a short time.", "Climate is the pattern of weather over many years.", "A forecast for one day is about weather."],
        "Weather: it describes one day.",
        "تقول نشرة الطقس ليوم الثلاثاء في دبي إن الحرارة 38 درجة والجو مشمس بلا مطر. هل هذا طقس أم مناخ؟ وضّح.",
        ["الطقس هو حالة الجو في مكان ما في يوم واحد أو خلال فترة قصيرة.", "المناخ هو نمط الطقس على مدى سنوات كثيرة.", "نشرة ليوم واحد تتحدث عن الطقس."],
        "طقس: فهو يصف يومًا واحدًا."
      ),
      items: [
        it("What is the difference between weather and climate?", "Weather is what the air is like on a given day. Climate is the usual pattern of weather in a place over many years.", "ما الفرق بين الطقس والمناخ؟", "الطقس هو حالة الجو في يوم معين. أما المناخ فهو نمط الطقس المعتاد في مكان ما على مدى سنوات كثيرة."),
        it("Which describes climate: \"It rained this morning in Fujairah\" or \"Summers in the UAE are usually hot and dry\"?", "\"Summers in the UAE are usually hot and dry\" (it is a pattern over many years).", "أيهما يصف المناخ: \"أمطرت هذا الصباح في الفجيرة\" أم \"الصيف في الإمارات حار وجاف عادة\"؟", "\"الصيف في الإمارات حار وجاف عادة\" (فهو نمط على مدى سنوات)."),
        it("Which tool measures how much rain has fallen?", "A rain gauge.", "أي أداة تقيس كمية المطر الذي هطل؟", "مقياس المطر."),
        it("Which tool measures how hot the air is?", "A thermometer.", "أي أداة تقيس درجة حرارة الهواء؟", "الترمومتر (مقياس الحرارة)."),
        it("Rainfall in millimetres from Monday to Friday was: 0, 0, 5, 12, 0. On which day did it rain the most?", "Thursday (12 mm).", "كان المطر بالمليمترات من الاثنين إلى الجمعة: 0 و 0 و 5 و 12 و 0. في أي يوم هطل أكثر مطر؟", "الخميس (12 مم)."),
        it("Using the same rainfall data, how much rain fell in the five days altogether?", "17 mm (5 + 12).", "باستعمال بيانات المطر نفسها، كم بلغ المطر في الأيام الخمسة معًا؟", "17 مم (5 + 12)."),
        it("The usual daytime temperature in one city is 22 degrees in January and 41 degrees in July. Which month is hotter, and which season is July in?", "July is hotter, and it is in summer.", "درجة حرارة النهار المعتادة في مدينة ما 22 درجة في يناير و 41 درجة في يوليو. أي الشهرين أحر؟ وفي أي فصل يقع يوليو؟", "يوليو أحر، وهو في فصل الصيف."),
        it("Describe the climate of most of the UAE in a few words.", "Hot summers, mild winters, and very little rain.", "صف مناخ معظم الإمارات في كلمات قليلة.", "صيف حار وشتاء معتدل ومطر قليل جدًا."),
        it("A sandstorm is coming. Give two ways to stay safe.", "Any two of: stay indoors, close the windows and doors, cover the nose and mouth if outside, protect the eyes.", "تقترب عاصفة رملية. اذكر طريقتين للبقاء بأمان.", "أي طريقتين من: البقاء في الداخل، وإغلاق النوافذ والأبواب، وتغطية الأنف والفم إذا كنت في الخارج، وحماية العينين."),
        it("After very heavy rain, water rushes down a dry wadi. Why should people stay away from it?", "The fast water can carry people and cars away, even if it looks shallow.", "بعد مطر غزير جدًا يندفع الماء في وادٍ جاف. لماذا ينبغي للناس الابتعاد عنه؟", "الماء السريع قد يجرف الناس والسيارات، حتى لو بدا قليل العمق."),
        it("In July the weather can be dangerously hot. Give two ways to stay safe from the heat.", "Any two of: drink plenty of water, stay in the shade or indoors at midday, wear light clothes and a hat.", "في يوليو قد يكون الطقس شديد الحرارة. اذكر طريقتين للوقاية من الحر.", "أي طريقتين من: شرب الماء بكثرة، والبقاء في الظل أو في الداخل وقت الظهيرة، ولبس ملابس خفيفة وقبعة."),
        it("Each August for the last five years the top temperature in Abu Dhabi was above 40 degrees. What do you expect for next August? Explain.", "Probably above 40 degrees again, because weather patterns from past years help us predict what is likely to happen.", "في كل أغسطس خلال السنوات الخمس الماضية كانت أعلى حرارة في أبوظبي فوق 40 درجة. ماذا تتوقع لأغسطس القادم؟ وضّح.", "غالبًا ستكون فوق 40 درجة مرة أخرى، لأن أنماط الطقس في السنوات الماضية تساعدنا على توقع ما يُرجَّح حدوثه.")
      ]
    },
    {
      area: "phy",
      standards: ["3-PS2-1", "3-PS2-2", "3-PS2-3", "3-PS2-4"],
      example: ex(
        "Salem and Khalid pull a rope in opposite directions in a tug of war. They pull with the same strength. What happens to the rope?",
        ["Each boy pulls one way with a force.", "The two forces are the same size and in opposite directions, so they are balanced.", "Balanced forces do not change the motion of the rope, so it stays still."],
        "The rope does not move.",
        "يشدّ سالم وخالد حبلًا في اتجاهين متعاكسين في لعبة شدّ الحبل. يشدّان بالقوة نفسها. ماذا يحدث للحبل؟",
        ["كل ولد يشدّ في اتجاه بقوة.", "القوتان متساويتان في المقدار ومتعاكستان في الاتجاه، فهما متزنتان.", "القوى المتزنة لا تغيّر حركة الحبل، فيبقى ساكنًا."],
        "لا يتحرك الحبل."
      ),
      items: [
        it("What do we call two forces that are the same size and push or pull in opposite directions on an object?", "Balanced forces.", "ماذا نسمي قوتين متساويتين في المقدار وتدفعان أو تشدّان جسمًا في اتجاهين متعاكسين؟", "قوى متزنة."),
        it("In a tug of war, a team pulls much harder than the other team. Which way does the rope move?", "Towards the team that pulls harder, because the forces are unbalanced.", "في لعبة شدّ الحبل يشدّ فريق بقوة أكبر بكثير من الفريق الآخر. في أي اتجاه يتحرك الحبل؟", "نحو الفريق الذي يشدّ بقوة أكبر، لأن القوى غير متزنة."),
        it("A book rests on a table and does not move. Which two forces act on it?", "Gravity pulls it down and the table pushes it up. They are balanced.", "كتاب ساكن فوق طاولة. ما القوتان المؤثرتان فيه؟", "الجاذبية تسحبه إلى الأسفل والطاولة تدفعه إلى الأعلى. وهما متزنتان."),
        it("Layla kicks a ball that is lying still. What does the kick do to the ball's motion?", "It starts the ball moving. A push is a force that can change motion.", "ركلت ليلى كرة ساكنة. ماذا تفعل الركلة بحركة الكرة؟", "تجعل الكرة تتحرك. الدفع قوة يمكن أن تغيّر الحركة."),
        it("Why does a ball that you drop fall to the ground?", "Gravity, a pull from the Earth, pulls it downwards.", "لماذا تسقط الكرة التي تتركها إلى الأرض؟", "بسبب الجاذبية، وهي قوة سحب من الأرض تسحبها إلى الأسفل."),
        it("A swing moves forward and back. One full swing takes 2 seconds. About how many full swings will it make in 10 seconds?", "5 swings (10 divided by 2). The pattern repeats in the same time.", "تتحرك أرجوحة إلى الأمام والخلف. تستغرق الذبذبة الكاملة ثانيتين. كم ذبذبة كاملة تقريبًا تقوم بها في 10 ثوانٍ؟", "5 ذبذبات (10 ÷ 2). فالنمط يتكرر في الزمن نفسه."),
        it("Omar notices that a toy car rolled down a ramp stops at about the same place each time he tries. How can he use this pattern?", "He can predict where the car will stop the next time it is rolled the same way.", "لاحظ عمر أن سيارة لعبة تنزل منحدرًا تتوقف في المكان نفسه تقريبًا في كل مرة. كيف يستفيد من هذا النمط؟", "يستطيع أن يتوقع أين ستتوقف السيارة في المرة القادمة إذا دحرجها بالطريقة نفسها."),
        it("Which of these will a magnet pick up: a steel paperclip, a plastic spoon, a wooden pencil?", "The steel paperclip.", "أي هذه الأشياء يجذبها المغناطيس: مشبك ورق من الصلب، ملعقة بلاستيكية، قلم رصاص خشبي؟", "مشبك الورق من الصلب."),
        it("Can a magnet pull a paperclip without touching it? Explain.", "Yes. A magnet's force works across a small gap, so the paperclip can jump to it.", "هل يستطيع المغناطيس جذب مشبك الورق دون أن يلمسه؟ وضّح.", "نعم. فقوة المغناطيس تعمل عبر مسافة صغيرة، فيقفز المشبك نحوه."),
        it("What happens when you bring the north ends of two magnets close together? What if you bring a north end and a south end together?", "Two north ends push apart (repel). A north and a south end pull together (attract).", "ماذا يحدث عند تقريب القطبين الشماليين لمغناطيسين؟ وماذا يحدث عند تقريب قطب شمالي من قطب جنوبي؟", "القطبان الشماليان يتنافران. والقطب الشمالي والقطب الجنوبي يتجاذبان."),
        it("Hind wants a cupboard door to stay shut without a lock. How could she use two small magnets?", "Fix one magnet on the door and one on the cupboard so that opposite ends face each other. They attract and hold the door closed.", "تريد هند أن يبقى باب الخزانة مغلقًا دون قفل. كيف تستعمل مغناطيسين صغيرين؟", "تثبّت مغناطيسًا على الباب وآخر على الخزانة بحيث يتقابل قطبان مختلفان. فيتجاذبان ويُبقيان الباب مغلقًا."),
        it("Two magnets keep pushing each other away when Noura tries to join them. What can she do to make them stick together? Explain.", "Turn one magnet around. Then different ends face each other, and different ends attract.", "يظل مغناطيسان يتنافران عندما تحاول نورة ضمهما. ماذا تفعل ليلتصقا؟ وضّح.", "تدير أحد المغناطيسين. عندها يتقابل قطبان مختلفان، والقطبان المختلفان يتجاذبان.")
      ]
    }
  ]
};
