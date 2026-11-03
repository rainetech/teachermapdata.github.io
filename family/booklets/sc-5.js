// Science practice booklet, Grade 5 expectations. See ma-5.js for the format.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });

module.exports = {
  subject: "sc",
  grade: 5,
  framework: "NGSS",
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "bio",
      standards: ["5-LS1-1", "5-LS2-1"],
      example: ex(
        "In a mangrove forest, crabs eat fallen mangrove leaves and herons eat the crabs. Write the food chain, show which way the energy moves, and say where the energy first comes from.",
        ["Start with the producer: the mangrove tree makes its own food using sunlight.", "The crab eats the leaves, and the heron eats the crab.", "Write the chain with arrows pointing from the food to the one that eats it: mangrove leaves to crab to heron.", "The energy first comes from the Sun, because the mangrove uses sunlight to make food."],
        "Mangrove leaves to crab to heron; the energy first comes from the Sun.",
        "في غابة القرم تأكل السرطانات أوراق القرم المتساقطة وتأكل طيور مالك الحزين السرطانات. اكتب السلسلة الغذائية، وبيّن اتجاه انتقال الطاقة، وقل من أين تأتي الطاقة أولًا.",
        ["نبدأ بالمنتج: شجرة القرم تصنع غذاءها بنفسها باستعمال ضوء الشمس.", "يأكل السرطان الأوراق، ويأكل مالك الحزين السرطان.", "نكتب السلسلة بأسهم تشير من الغذاء إلى من يأكله: أوراق القرم إلى السرطان إلى مالك الحزين.", "تأتي الطاقة أولًا من الشمس، لأن شجرة القرم تستعمل ضوء الشمس ليصنع الغذاء."],
        "أوراق القرم إلى السرطان إلى مالك الحزين؛ وتأتي الطاقة أولًا من الشمس."
      ),
      items: [
        it("Which two things from the environment do plants use to make their food?", "Water and carbon dioxide (a gas in the air), with energy from sunlight.", "ما الشيئان من البيئة اللذان تستعملهما النباتات لصنع غذائها؟", "الماء وثاني أكسيد الكربون (غاز في الهواء)، مع طاقة من ضوء الشمس."),
        it("Where does a plant get the energy it needs to make food?", "From the Sun (sunlight).", "من أين يحصل النبات على الطاقة التي يحتاجها لصنع الغذاء؟", "من الشمس (ضوء الشمس)."),
        it("A date palm seedling grows into a tall tree, but the sand around its roots hardly loses any weight. Where does most of the tree's new material come from?", "From water and from carbon dioxide in the air, not from the soil.", "تنمو شتلة نخلة إلى شجرة طويلة، لكن الرمل حول جذورها لا يكاد ينقص وزنه. من أين تأتي معظم مادة الشجرة الجديدة؟", "من الماء ومن ثاني أكسيد الكربون في الهواء، وليس من التربة."),
        it("What is a producer? Give one example from the UAE.", "A living thing that makes its own food, such as a mangrove tree, a ghaf tree or a date palm.", "ما المنتج؟ أعطِ مثالًا من الإمارات.", "كائن حي يصنع غذاءه بنفسه، مثل شجرة القرم أو شجرة الغاف أو نخلة التمر."),
        it("What is a consumer? Is a camel a consumer? Explain.", "A consumer cannot make its own food and eats other living things. A camel is a consumer because it eats plants.", "ما المستهلك؟ هل الجمل مستهلك؟ وضّح.", "المستهلك لا يستطيع صنع غذائه ويأكل كائنات حية أخرى. الجمل مستهلك لأنه يأكل النباتات."),
        it("In the desert, grass is eaten by a hare and the hare is eaten by a fox. Write this food chain with arrows.", "Grass to hare to fox (the arrows point from the food to the animal that eats it).", "في الصحراء يأكل الأرنب البري العشب ويأكل الثعلب الأرنب البري. اكتب هذه السلسلة الغذائية بأسهم.", "العشب إلى الأرنب البري إلى الثعلب (تشير الأسهم من الغذاء إلى الحيوان الذي يأكله)."),
        it("What do the arrows in a food chain show?", "The direction in which energy and matter move, from the food to the one that eats it.", "ماذا تبيّن الأسهم في السلسلة الغذائية؟", "اتجاه انتقال الطاقة والمادة، من الغذاء إلى الكائن الذي يأكله."),
        it("What is the difference between a food chain and a food web?", "A food chain shows one path of energy. A food web joins many chains together, because most animals eat more than one kind of food.", "ما الفرق بين السلسلة الغذائية والشبكة الغذائية؟", "السلسلة الغذائية تبيّن مسارًا واحدًا للطاقة. أما الشبكة الغذائية فتربط سلاسل كثيرة معًا، لأن معظم الحيوانات تأكل أكثر من نوع من الغذاء."),
        it("What do decomposers, such as fungi and bacteria, do in an ecosystem?", "They break down dead plants and animals and return nutrients to the soil, so plants can use them again.", "ماذا تفعل المحلِّلات، مثل الفطريات والبكتيريا، في النظام البيئي؟", "تحلل النباتات والحيوانات الميتة وتعيد المغذيات إلى التربة، فتستعملها النباتات مرة أخرى."),
        it("In a mangrove forest the number of crabs falls a lot. Name two things that might happen.", "Herons and other animals that eat crabs may have less food; leaves may pile up because fewer are eaten. (Any sensible answer.)", "في غابة القرم قلّ عدد السرطانات كثيرًا. اذكر شيئين قد يحدثان.", "قد يقلّ الغذاء لدى مالك الحزين والحيوانات الأخرى التي تأكل السرطانات؛ وقد تتراكم الأوراق لأن ما يؤكل منها أقل. (أي إجابة معقولة.)"),
        it("Explain why almost all the energy in a food web can be traced back to the Sun.", "Plants use sunlight to make food, and animals get their energy by eating plants or by eating animals that ate plants.", "اشرح لماذا يمكن إرجاع كل الطاقة تقريبًا في الشبكة الغذائية إلى الشمس.", "لأن النباتات تستعمل ضوء الشمس لتصنع الغذاء، والحيوانات تحصل على طاقتها بأكل النباتات أو بأكل حيوانات أكلت النباتات.")
      ]
    },
    {
      area: "ear",
      standards: ["5-ESS1-1", "5-ESS1-2", "5-ESS2-1", "5-ESS2-2", "5-ESS3-1"],
      example: ex(
        "Salem measures the shadow of a tall pole at three times of day. At 8 am it is 90 cm, at 12 noon it is 20 cm and at 4 pm it is 85 cm. When is the Sun highest in the sky, and why does the shadow change?",
        ["The shortest shadow is the one at 12 noon (20 cm).", "A short shadow means the Sun is high in the sky.", "The Earth spins, so the Sun seems to move across the sky during the day.", "When the Sun is low (morning and afternoon) the shadow is long, and when it is high the shadow is short."],
        "The Sun is highest at 12 noon, because the Earth spins and the Sun seems to move across the sky.",
        "قاس سالم ظل عمود طويل في ثلاثة أوقات من اليوم. في الثامنة صباحًا كان 90 سم، وفي الثانية عشرة ظهرًا 20 سم، وفي الرابعة عصرًا 85 سم. متى تكون الشمس أعلى ما يمكن في السماء، ولماذا يتغير الظل؟",
        ["أقصر ظل هو ظل الثانية عشرة ظهرًا (20 سم).", "الظل القصير يعني أن الشمس عالية في السماء.", "الأرض تدور حول نفسها، فتبدو الشمس وكأنها تتحرك في السماء خلال اليوم.", "حين تكون الشمس منخفضة (صباحًا وعصرًا) يكون الظل طويلًا، وحين تكون عالية يكون الظل قصيرًا."],
        "تكون الشمس أعلى ما يمكن عند الثانية عشرة ظهرًا، لأن الأرض تدور فتبدو الشمس وكأنها تتحرك في السماء."
      ),
      items: [
        it("Why does the Sun look so much bigger and brighter than the other stars?", "It is much closer to us. The other stars are very far away.", "لماذا تبدو الشمس أكبر وأسطع بكثير من النجوم الأخرى؟", "لأنها أقرب إلينا بكثير. أما النجوم الأخرى فبعيدة جدًا."),
        it("What causes day and night?", "The Earth spins on its axis once about every 24 hours. The side facing the Sun has day and the side facing away has night.", "ما سبب تعاقب الليل والنهار؟", "تدور الأرض حول محورها دورة كاملة كل 24 ساعة تقريبًا. الجانب المواجه للشمس يكون فيه نهار والجانب المبتعد عنها يكون فيه ليل."),
        it("A flagpole's shadow is long at 7 am and short at noon. Where is the Sun in the sky at each time?", "Low in the sky at 7 am and high in the sky at noon.", "ظل سارية العلم طويل في السابعة صباحًا وقصير عند الظهر. أين الشمس في السماء في كل وقت؟", "منخفضة في السماء في السابعة صباحًا وعالية عند الظهر."),
        it("In the morning your shadow falls to the west. In which direction is the Sun?", "In the east (a shadow falls on the opposite side from the Sun).", "في الصباح يقع ظلك جهة الغرب. في أي اتجاه تكون الشمس؟", "في الشرق (يقع الظل في الجهة المعاكسة للشمس)."),
        it("Why do we see different stars in the night sky in winter and in summer?", "The Earth travels around the Sun during the year, so at night we face a different part of the sky in each season.", "لماذا نرى نجومًا مختلفة في سماء الليل في الشتاء وفي الصيف؟", "لأن الأرض تدور حول الشمس خلال السنة، فنواجه ليلًا جزءًا مختلفًا من السماء في كل فصل."),
        it("In summer in the UAE the daylight lasts longer than in winter. What makes the length of daylight change through the year?", "The Earth is tilted as it travels around the Sun, so in summer our part of the Earth leans towards the Sun and gets more hours of daylight.", "في صيف الإمارات يكون النهار أطول منه في الشتاء. ما الذي يجعل طول النهار يتغير خلال السنة؟", "الأرض مائلة وهي تدور حول الشمس، فيميل الجزء الذي نعيش فيه نحو الشمس في الصيف ويحصل على ساعات نهار أكثر."),
        it("Name the four Earth systems that interact with each other.", "The geosphere (rock and land), hydrosphere (water), atmosphere (air) and biosphere (living things).", "اذكر أنظمة الأرض الأربعة التي يؤثر بعضها في بعض.", "الغلاف الصخري (الصخور واليابسة) والغلاف المائي (الماء) والغلاف الجوي (الهواء) والغلاف الحيوي (الكائنات الحية)."),
        it("Rain falls in the Hajar mountains and fills a wadi. Name two Earth systems that are interacting.", "Any two of: the atmosphere (the rain), the geosphere (the mountains and the wadi bed), the hydrosphere (the water that flows and fills the wadi).", "يهطل المطر على جبال الحجر ويملأ الوادي. اذكر نظامين من أنظمة الأرض يتفاعلان.", "أي اثنين من: الغلاف الجوي (المطر)، والغلاف الصخري (الجبال وقاع الوادي)، والغلاف المائي (الماء الذي يجري ويملأ الوادي)."),
        it("About 97 out of every 100 parts of Earth's water are salty ocean water. Which kind of water is most of the rest, and where is much of it kept?", "Fresh water; much of it is frozen in glaciers and ice caps, and the rest is in the ground, rivers and lakes.", "نحو 97 جزءًا من كل 100 جزء من ماء الأرض ماء مالح في المحيطات. ما نوع الماء في معظم الباقي، وأين يُحفظ جزء كبير منه؟", "ماء عذب؛ جزء كبير منه متجمد في الأنهار الجليدية والقمم الجليدية، والباقي في باطن الأرض والأنهار والبحيرات."),
        it("Why does the UAE make fresh water from sea water by desalination?", "There is little rain and there are no big rivers, but there is a lot of sea water.", "لماذا تنتج الإمارات ماءً عذبًا من ماء البحر بالتحلية؟", "لأن المطر قليل ولا توجد أنهار كبيرة، بينما ماء البحر كثير."),
        it("Give two ways a family can save water at home.", "For example: turn off the tap while brushing teeth, take shorter showers, fix leaking taps, water plants in the cool evening. (Any two sensible ways.)", "اذكر طريقتين تستطيع بهما الأسرة توفير الماء في البيت.", "مثلًا: إغلاق الصنبور أثناء تنظيف الأسنان، والاستحمام وقتًا أقصر، وإصلاح الصنابير المتسربة، وسقي النباتات في المساء البارد. (أي طريقتين معقولتين.)"),
        it("Explain how protecting mangrove forests helps both nature and people.", "Mangroves shelter fish, crabs and birds, and their roots help protect the shore from waves and erosion, so nature and coastal communities both benefit.", "اشرح كيف تفيد حماية غابات القرم الطبيعة والناس معًا.", "تؤوي أشجار القرم الأسماك والسرطانات والطيور، وتساعد جذورها على حماية الشاطئ من الأمواج والتآكل، فتستفيد الطبيعة والمجتمعات الساحلية.")
      ]
    },
    {
      area: "phy",
      standards: ["5-PS1-1", "5-PS1-2", "5-PS1-3", "5-PS1-4", "5-PS2-1", "5-PS3-1"],
      example: ex(
        "Maryam stirs 30 g of salt into 200 g of water until the salt seems to disappear. What is the mass of the salty water? How could she get the salt back?",
        ["The salt is still there. It has broken into particles too small to see and spread through the water.", "Matter is not lost when it dissolves, so the masses add up: 200 g + 30 g = 230 g.", "She can heat the salty water gently so the water evaporates; the salt stays in the pot."],
        "230 g; she can evaporate the water and the salt is left.",
        "تحرك مريم 30 غ من الملح في 200 غ من الماء حتى يبدو أن الملح اختفى. ما كتلة الماء المالح؟ وكيف تستعيد الملح؟",
        ["الملح ما زال موجودًا. لقد تفتت إلى جسيمات صغيرة جدًا لا تُرى وانتشرت في الماء.", "المادة لا تضيع عند الذوبان، فتُجمع الكتل: 200 غ + 30 غ = 230 غ.", "تستطيع تسخين الماء المالح بلطف ليتبخر الماء فيبقى الملح."],
        "230 غ؛ تستطيع تبخير الماء فيبقى الملح."
      ),
      items: [
        it("Matter is made of particles that are too small to see. Use this idea to explain how you can smell karak from across a room.", "Tiny particles of the scent travel through the air (a gas) from the cup to your nose, even though we cannot see them.", "المادة مكونة من جسيمات أصغر من أن ترى. استعمل هذه الفكرة لتفسر كيف تشم رائحة الكرك من الجهة الأخرى للغرفة.", "تنتقل جسيمات صغيرة من الرائحة عبر الهواء (وهو غاز) من الكوب إلى أنفك، رغم أننا لا نراها."),
        it("A balloon is full of air. Air is invisible, so how can we show that it is matter?", "Air takes up space (it inflates the balloon) and it has mass, so it is matter.", "بالون ممتلئ بالهواء. الهواء لا يُرى، فكيف نبيّن أنه مادة؟", "الهواء يشغل حيزًا (فهو ينفخ البالون) وله كتلة، لذلك هو مادة."),
        it("Hamdan dissolves 50 g of sugar in 250 g of water. What is the total mass of the sugar water?", "300 g (50 g + 250 g; nothing is lost when sugar dissolves)", "يذيب حمدان 50 غ من السكر في 250 غ من الماء. ما الكتلة الكلية للماء المحلى؟", "300 غ (50 غ + 250 غ؛ لا يضيع شيء عند ذوبان السكر)"),
        it("An ice cube has a mass of 40 g. It melts completely. What is the mass of the water?", "40 g (melting changes the state, not the amount of matter)", "كتلة مكعب ثلج 40 غ. ينصهر كله. ما كتلة الماء الناتج؟", "40 غ (الانصهار يغير الحالة وليس كمية المادة)"),
        it("Salt and sand are mixed together. Describe one way to separate them.", "Add water to dissolve the salt, filter out the sand, then evaporate the water to get the salt back.", "خُلط الملح بالرمل. صف طريقة واحدة لفصلهما.", "نضيف الماء ليذوب الملح، ثم نرشح الرمل، ثم نبخر الماء لنستعيد الملح."),
        it("Desalination plants make fresh water from sea water. Is sea water a mixture? How can the water be separated from the salt?", "Yes, it is a mixture of water and salt. Heating makes the water evaporate; the vapour is cooled and condenses into fresh water, and the salt stays in the pot.", "هل ماء البحر مخلوط؟ وكيف يمكن فصل الماء عن الملح؟", "نعم، هو مخلوط من الماء والملح. بالتسخين يتبخر الماء، ثم يبرد البخار فيتكاثف ماءً عذبًا، ويبقى الملح."),
        it("Why would a cooking pot be made of metal and its handle of wood or plastic?", "Metal conducts heat well, so the food heats up. Wood and plastic do not conduct heat well, so the handle stays cooler to hold.", "لماذا يُصنع وعاء الطبخ من المعدن ومقبضه من الخشب أو البلاستيك؟", "المعدن يوصل الحرارة جيدًا فيسخن الطعام. أما الخشب والبلاستيك فلا يوصلان الحرارة جيدًا فيبقى المقبض أبرد وأسهل في الإمساك."),
        it("Baking soda is added to vinegar and bubbles of gas form. Is this a physical change or a chemical change? How can you tell?", "A chemical change: a new substance (a gas) is made, shown by the bubbles.", "أُضيف بيكربونات الصوديوم إلى الخل فتكونت فقاعات غاز. هل هذا تغير فيزيائي أم كيميائي؟ وكيف تعرف ذلك؟", "تغير كيميائي: تكونت مادة جديدة (غاز) كما تدل الفقاعات."),
        it("Which is a chemical change: tearing paper, melting wax, or burning wood? Explain.", "Burning wood. It makes new substances (ash, smoke and gases) that cannot be turned back into wood.", "أي مما يلي تغير كيميائي: تمزيق الورق أو انصهار الشمع أو احتراق الخشب؟ وضّح.", "احتراق الخشب. فهو ينتج مواد جديدة (رماد ودخان وغازات) لا يمكن إعادتها إلى خشب."),
        it("In which direction does gravity pull objects on Earth? What happens to a ball you drop?", "Down, towards the centre of the Earth. The dropped ball falls to the ground.", "في أي اتجاه تجذب الجاذبية الأجسام على الأرض؟ وماذا يحدث لكرة تتركها؟", "إلى الأسفل، نحو مركز الأرض. وتسقط الكرة المتروكة إلى الأرض."),
        it("A child in the UAE and a child on the opposite side of the world both drop a stone. Both stones fall down. What does this tell us about the direction of gravity?", "Gravity pulls towards the centre of the Earth, so 'down' is a different direction in different places.", "يترك طفل في الإمارات وطفل في الجهة المقابلة من العالم حجرًا. يسقط الحجران إلى الأسفل. ماذا يخبرنا هذا عن اتجاه الجاذبية؟", "الجاذبية تجذب نحو مركز الأرض، لذلك يختلف اتجاه 'الأسفل' من مكان إلى آخر."),
        it("The energy in the dates Layla eats first came from the Sun. Explain how.", "The date palm used sunlight to make food. Layla's body uses the energy in the dates for moving, growing and keeping warm.", "الطاقة في التمر الذي تأكله ليلى جاءت أصلًا من الشمس. اشرح كيف.", "استعملت النخلة ضوء الشمس لتصنع الغذاء. ويستعمل جسم ليلى الطاقة الموجودة في التمر للحركة والنمو والدفء.")
      ]
    }
  ]
};
