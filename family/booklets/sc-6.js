// Science practice booklet, Grade 6 expectations. See ma-5.js for the format.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });

module.exports = {
  subject: "sc",
  grade: 6,
  framework: "NGSS",
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "bio",
      standards: ["MS-LS1-1", "MS-LS1-2", "MS-LS1-3", "MS-LS1-6", "MS-LS2-1", "MS-LS2-3"],
      example: ex(
        "A mangrove leaf is made of cells. Name the part of a leaf cell that captures light for photosynthesis, and say what the leaf makes and gives off.",
        ["Plant cells have green parts called chloroplasts. They contain a green substance that captures light energy.", "In photosynthesis the plant uses light energy, water and carbon dioxide.", "These are changed into sugar (food for the plant) and oxygen.", "The sugar is used or stored by the plant, and the oxygen is released into the air."],
        "Chloroplasts capture the light; the leaf makes sugar and gives off oxygen.",
        "ورقة شجرة القرم مكونة من خلايا. سمِّ الجزء من خلية الورقة الذي يلتقط الضوء لعملية البناء الضوئي، وقل ماذا تصنع الورقة وماذا تطلق.",
        ["تحتوي الخلايا النباتية على أجزاء خضراء تسمى البلاستيدات الخضراء. وفيها مادة خضراء تلتقط طاقة الضوء.", "في عملية البناء الضوئي يستعمل النبات طاقة الضوء والماء وثاني أكسيد الكربون.", "وتتحول هذه المواد إلى سكر (غذاء للنبات) وأكسجين.", "يستعمل النبات السكر أو يخزنه، ويُطلق الأكسجين في الهواء."],
        "البلاستيدات الخضراء تلتقط الضوء؛ وتصنع الورقة السكر وتطلق الأكسجين."
      ),
      items: [
        it("What is the basic unit of structure and function in all living things?", "The cell.", "ما الوحدة الأساسية للتركيب والوظيفة في جميع الكائنات الحية؟", "الخلية."),
        it("What is the job of the cell membrane?", "It surrounds the cell and controls what goes in and out, such as water, food and waste.", "ما وظيفة غشاء الخلية؟", "يحيط بالخلية ويتحكم فيما يدخل إليها ويخرج منها، مثل الماء والغذاء والفضلات."),
        it("Which part of a cell holds the instructions that control the cell's activities?", "The nucleus.", "أي جزء من الخلية يحمل التعليمات التي تتحكم في أنشطتها؟", "النواة."),
        it("Name two parts that a plant cell has but an animal cell does not.", "A cell wall and chloroplasts (plant cells also have a large vacuole).", "اذكر جزأين توجدان في الخلية النباتية ولا توجدان في الخلية الحيوانية.", "جدار الخلية والبلاستيدات الخضراء (وللخلية النباتية أيضًا فجوة كبيرة)."),
        it("Mitochondria are called the 'powerhouses' of the cell. What do they do?", "They release energy from food so the cell can use it.", "تسمى الميتوكوندريا 'مراكز الطاقة' في الخلية. ماذا تفعل؟", "تحرر الطاقة من الغذاء لتستعملها الخلية."),
        it("Write the inputs and outputs of photosynthesis in words.", "Carbon dioxide + water, using light energy, make sugar (glucose) + oxygen.", "اكتب مدخلات عملية البناء الضوئي ومخرجاتها بالكلمات.", "ثاني أكسيد الكربون + الماء، باستعمال طاقة الضوء، ينتجان السكر (الجلوكوز) + الأكسجين."),
        it("Put these in order from smallest to largest: organ, cell, organ system, tissue.", "Cell, tissue, organ, organ system.", "رتب ما يلي من الأصغر إلى الأكبر: عضو، خلية، جهاز، نسيج.", "خلية، نسيج، عضو، جهاز."),
        it("Match each body system to its job: circulatory, respiratory, digestive. (Jobs: breaks down food; brings oxygen in; carries blood around the body.)", "Circulatory carries blood around the body; respiratory brings oxygen in; digestive breaks down food.", "طابق كل جهاز في الجسم مع وظيفته: الدوراني، التنفسي، الهضمي. (الوظائف: يفتت الغذاء؛ يُدخل الأكسجين؛ ينقل الدم في الجسم.)", "الجهاز الدوراني ينقل الدم في الجسم؛ والتنفسي يُدخل الأكسجين؛ والهضمي يفتت الغذاء."),
        it("Hamdan runs in the school yard and his breathing and heartbeat both get faster. Explain how two body systems work together here.", "His muscles need more oxygen. The respiratory system takes in more oxygen and the circulatory system (heart and blood) carries it to the muscles faster.", "يجري حمدان في ساحة المدرسة فيزداد تنفسه ونبض قلبه. اشرح كيف يعمل جهازان في الجسم معًا هنا.", "تحتاج عضلاته إلى أكسجين أكثر. فيُدخل الجهاز التنفسي أكسجينًا أكثر، وينقله الجهاز الدوراني (القلب والدم) إلى العضلات بسرعة أكبر."),
        it("In a mangrove food web, plants make food, crabs eat leaves and herons eat crabs. Which organisms have the most energy available, and why does the amount get smaller along the chain?", "The mangrove plants (producers). At each step much of the energy is used by the organism for living and is lost as heat, so less is passed on.", "في شبكة غذائية في غابة القرم تصنع النباتات الغذاء، وتأكل السرطانات الأوراق، ويأكل مالك الحزين السرطانات. أي الكائنات يتوافر لديها أكبر قدر من الطاقة، ولماذا تقل الكمية على امتداد السلسلة؟", "نباتات القرم (المنتجات). ففي كل خطوة يستعمل الكائن جزءًا كبيرًا من الطاقة في حياته ويفقد جزءًا منها حرارةً، فيصل إلى التالي قدر أقل."),
        it("Oryx and gazelles in a desert reserve share a small number of water holes and plants. What can happen to their numbers if a very dry year reduces the plants?", "There is less food, so the animals compete more and the populations may get smaller. Ecosystems depend on resources being available.", "تتشارك المها والغزلان في محمية صحراوية في عدد قليل من مصادر الماء والنباتات. ماذا يمكن أن يحدث لأعدادها إذا قلّت النباتات في سنة شديدة الجفاف؟", "يقل الغذاء فيزداد التنافس بين الحيوانات وقد تقل أعدادها. فالأنظمة البيئية تعتمد على توافر الموارد."),
        it("A seedling is kept in a dark cupboard for two weeks and turns pale and droopy. Use photosynthesis to explain why.", "Without light the plant cannot do photosynthesis, so it cannot make sugar for energy and growth, and its leaves lose their green colour.", "تُترك شتلة في خزانة مظلمة أسبوعين فتصبح شاحبة وذابلة. استعمل البناء الضوئي لتفسر السبب.", "بلا ضوء لا يستطيع النبات القيام بالبناء الضوئي، فلا يصنع السكر الذي يحتاجه للطاقة والنمو، ويفقد لونه الأخضر.")
      ]
    },
    {
      area: "ear",
      standards: ["MS-ESS2-1", "MS-ESS2-2", "MS-ESS2-3", "MS-ESS2-4", "MS-ESS2-6"],
      example: ex(
        "Seawater in the Gulf warms in the sun, and later rain falls on the Hajar mountains. Describe the steps of the water cycle that connect these two events and say what powers the cycle.",
        ["The Sun warms the sea and some of the water evaporates, turning into water vapour (a gas).", "The warm air rises and cools. The vapour condenses into tiny drops that form clouds.", "When the drops get big enough they fall as precipitation, such as rain.", "The Sun's energy and gravity keep the water moving around the cycle."],
        "Evaporation, condensation, then precipitation; the Sun's energy and gravity power the cycle.",
        "يسخن ماء الخليج بفعل الشمس، ثم يهطل المطر لاحقًا على جبال الحجر. صف مراحل دورة الماء التي تربط هذين الحدثين، وقل ما الذي يحرك الدورة.",
        ["تسخن الشمس البحر فيتبخر بعض الماء ويتحول إلى بخار ماء (غاز).", "يرتفع الهواء الدافئ ويبرد. ويتكاثف البخار إلى قطرات صغيرة جدًا تكوّن الغيوم.", "حين تكبر القطرات بما يكفي تسقط على شكل هطول، مثل المطر.", "طاقة الشمس والجاذبية تبقيان الماء يتحرك في الدورة."],
        "التبخر ثم التكاثف ثم الهطول؛ وطاقة الشمس والجاذبية تحركان الدورة."
      ),
      items: [
        it("Name the three main steps of the water cycle.", "Evaporation, condensation and precipitation.", "اذكر الخطوات الرئيسية الثلاث لدورة الماء.", "التبخر والتكاثف والهطول."),
        it("Water drops form on the outside of a cold glass of juice on a humid day. Which step of the water cycle is this like, and why?", "Condensation: water vapour in the air touches the cold glass, cools and turns into liquid water.", "تتكون قطرات ماء على السطح الخارجي لكوب عصير بارد في يوم رطب. أي خطوة من دورة الماء تشبه هذه، ولماذا؟", "التكاثف: يلامس بخار الماء في الهواء الكوب البارد فيبرد ويتحول إلى ماء سائل."),
        it("Which two things move water around the water cycle?", "Energy from the Sun and gravity.", "ما الشيئان اللذان يحركان الماء في دورة الماء؟", "طاقة الشمس والجاذبية."),
        it("What is the difference between weather and climate?", "Weather is the conditions in one place over a short time (today or this week). Climate is the pattern of weather over many years.", "ما الفرق بين الطقس والمناخ؟", "الطقس هو حالة الجو في مكان ما خلال وقت قصير (اليوم أو هذا الأسبوع). أما المناخ فهو نمط الطقس على مدى سنوات كثيرة."),
        it("Is 'It rained in Fujairah this morning' a statement about weather or climate? Is 'Summers in the UAE are hot and dry' about weather or climate?", "The first is weather. The second is climate.", "هل عبارة 'هطل المطر في الفجيرة هذا الصباح' عن الطقس أم المناخ؟ وهل عبارة 'صيف الإمارات حار وجاف' عن الطقس أم المناخ؟", "الأولى عن الطقس. والثانية عن المناخ."),
        it("List Earth's four main layers from the outside to the centre.", "Crust, mantle, outer core, inner core.", "اذكر طبقات الأرض الأربع الرئيسية من الخارج إلى المركز.", "القشرة، الستار (الوشاح)، اللب الخارجي، اللب الداخلي."),
        it("Which layer of the Earth do we live on, and is it the thinnest or the thickest layer?", "The crust, which is the thinnest layer.", "على أي طبقة من الأرض نعيش، وهل هي أرق الطبقات أم أسمكها؟", "القشرة، وهي أرق الطبقات."),
        it("Earth's crust is broken into large pieces that move a few centimetres each year. What are these pieces called, and name one event they can cause where they meet.", "Tectonic plates. Where they meet they can cause earthquakes, volcanoes or mountains. (Any one.)", "تنقسم قشرة الأرض إلى قطع كبيرة تتحرك بضعة سنتيمترات كل عام. ماذا تسمى هذه القطع، واذكر حدثًا واحدًا يمكن أن تسببه عند التقائها.", "الصفائح التكتونية. وعند التقائها قد تسبب الزلازل أو البراكين أو الجبال. (أي واحد منها.)"),
        it("Scientists find sea shell fossils high in the Hajar mountains. What does this suggest about that place long ago?", "It was once under the sea, and over a very long time the land moved and was lifted up. Earth's surface changes.", "يجد العلماء أحافير أصداف بحرية في أعالي جبال الحجر. ماذا يدل هذا على ذلك المكان منذ زمن بعيد؟", "كان ذلك المكان تحت البحر، ومع مرور زمن طويل جدًا تحركت اليابسة وارتفعت. فسطح الأرض يتغير."),
        it("Name the three main types of rock.", "Igneous, sedimentary and metamorphic.", "اذكر الأنواع الرئيسية الثلاثة للصخور.", "الصخور النارية والرسوبية والمتحولة."),
        it("Wind blows sand and builds a dune, and over millions of years layers of sand are pressed and cemented into rock. Which type of rock forms, and which process moved the sand?", "Sedimentary rock forms. The wind moved the sand (erosion, then deposition where it settled).", "تهب الرياح فتنقل الرمل وتبني كثيبًا، وعلى مدى ملايين السنين تُضغط طبقات الرمل وتتماسك لتصبح صخرًا. أي نوع من الصخور يتكون، وأي عملية نقلت الرمل؟", "تتكون صخور رسوبية. نقلت الرياح الرمل (التعرية، ثم الترسيب حيث استقر)."),
        it("Explain why the rock cycle never ends. Give an example of one rock changing into another type.", "Rocks are always being worn away, melted, pressed or heated and changed. For example, an igneous rock can be broken into sand, which is pressed into sedimentary rock.", "اشرح لماذا لا تنتهي دورة الصخور. أعطِ مثالًا لصخر يتحول إلى نوع آخر.", "الصخور تتعرض دائمًا للتفتت أو الانصهار أو الضغط أو التسخين فتتغير. مثلًا، يمكن أن تتفتت صخرة نارية إلى رمل ثم يُضغط الرمل فيصبح صخرًا رسوبيًا.")
      ]
    },
    {
      area: "phy",
      standards: ["MS-PS1-4", "MS-PS3-3", "MS-PS3-4", "MS-PS2-2"],
      example: ex(
        "Noura puts an ice cube in a cup in a warm kitchen. Describe what happens to the particles of water as the ice melts and then the water warms up.",
        ["In ice (a solid) the particles are packed closely and only vibrate in place.", "Heat flows from the warm room into the ice, and the particles gain energy and move more.", "They loosen and slide past each other: the ice melts into liquid water.", "As the liquid keeps getting heat, the particles move faster and the temperature rises."],
        "The particles gain energy, move more and slide past each other (melting), then move faster as the water warms.",
        "تضع نورة مكعب ثلج في كوب داخل مطبخ دافئ. صف ما يحدث لجسيمات الماء حين ينصهر الثلج ثم يسخن الماء.",
        ["في الثلج (مادة صلبة) تكون الجسيمات متقاربة جدًا وتهتز في أماكنها فقط.", "تنتقل الحرارة من الغرفة الدافئة إلى الثلج، فتكتسب الجسيمات طاقة وتتحرك أكثر.", "فتتحرر وتنزلق بعضها فوق بعض: ينصهر الثلج إلى ماء سائل.", "ومع استمرار وصول الحرارة إلى السائل تتحرك الجسيمات أسرع وترتفع درجة الحرارة."],
        "تكتسب الجسيمات طاقة وتتحرك أكثر وتنزلق بعضها فوق بعض (الانصهار)، ثم تتحرك أسرع مع ارتفاع حرارة الماء."
      ),
      items: [
        it("Describe how the particles are arranged and move in a solid, a liquid and a gas.", "Solid: packed closely, vibrating in place. Liquid: close together but sliding past each other. Gas: far apart, moving freely in all directions.", "صف كيف تترتب الجسيمات وتتحرك في المادة الصلبة والسائلة والغازية.", "الصلبة: متقاربة جدًا وتهتز في أماكنها. السائلة: متقاربة لكنها تنزلق بعضها فوق بعض. الغازية: متباعدة وتتحرك بحرية في كل الاتجاهات."),
        it("What happens to the particles of a substance when it is heated?", "They gain energy and move faster (and the temperature rises).", "ماذا يحدث لجسيمات مادة ما عند تسخينها؟", "تكتسب طاقة وتتحرك أسرع (وترتفع درجة الحرارة)."),
        it("At what temperature does pure water boil and at what temperature does it freeze, in degrees Celsius?", "It boils at 100 °C and freezes at 0 °C.", "عند أي درجة حرارة بالدرجات السيلزية يغلي الماء النقي وعند أي درجة يتجمد؟", "يغلي عند 100 درجة سيلزية ويتجمد عند 0 درجة سيلزية."),
        it("When a puddle dries up in the sun, which change of state has happened?", "Evaporation: liquid water changes to water vapour (a gas).", "حين تجف بركة ماء تحت الشمس، أي تغير في الحالة حدث؟", "التبخر: تحول الماء السائل إلى بخار ماء (غاز)."),
        it("A football left in a hot car in the afternoon sun feels harder and tighter. Use particles to explain why.", "The air particles inside gain energy and move faster, so they hit the inside of the ball harder and more often and push outwards more.", "كرة قدم تُركت في سيارة حارة تحت شمس العصر أصبحت أصلب وأشد امتلاءً. استعمل الجسيمات لتفسر السبب.", "تكتسب جسيمات الهواء داخل الكرة طاقة وتتحرك أسرع، فتصطدم بجدارها من الداخل بقوة أكبر ومرات أكثر وتدفعه إلى الخارج أكثر."),
        it("Khalid holds a hot cup of karak. In which direction does heat flow between the cup and his hands?", "From the hot cup to his cooler hands (heat always flows from hotter to colder).", "يمسك خالد كوب كرك ساخنًا. في أي اتجاه تنتقل الحرارة بين الكوب ويديه؟", "من الكوب الساخن إلى يديه الأبرد (الحرارة تنتقل دائمًا من الأسخن إلى الأبرد)."),
        it("The sand on a UAE beach is too hot to walk on at noon. How does the Sun's energy reach the sand, and which way of heat transfer is it: conduction, convection or radiation?", "It travels through space and air as light and heat rays. This is radiation.", "رمل الشاطئ في الإمارات شديد السخونة للمشي عليه عند الظهر. كيف تصل طاقة الشمس إلى الرمل، وأي طريقة لانتقال الحرارة هي: التوصيل أم الحمل أم الإشعاع؟", "تنتقل عبر الفضاء والهواء على شكل ضوء وأشعة حرارية. وهذا هو الإشعاع."),
        it("Which two pairs are matched correctly? (a) A metal spoon in hot soup warms up: conduction. (b) Warm air rising above a heater: convection. (c) A heater warming the floor through the air: conduction.", "(a) and (b). In (c) the heat reaches the floor through the air, so it is not conduction.", "أي زوجين مما يلي مطابق بشكل صحيح؟ (أ) ملعقة معدنية في شوربة ساخنة تسخن: التوصيل. (ب) هواء دافئ يرتفع فوق مدفأة: الحمل. (ج) مدفأة تسخن الأرض عبر الهواء: التوصيل.", "(أ) و(ب). في (ج) تصل الحرارة إلى الأرض عبر الهواء، فليست توصيلًا."),
        it("Hind wants her cold drink to stay cold on a hot day. Choose a material for the container and explain your choice.", "A good insulator, such as a foam cooler or a vacuum flask. It reduces the heat flowing in from the hot air outside.", "تريد هند أن يبقى مشروبها البارد باردًا في يوم حار. اختر مادة للوعاء وفسّر اختيارك.", "مادة عازلة جيدة، مثل صندوق تبريد من الفوم أو قارورة مفرغة من الهواء. فهي تقلل الحرارة المنتقلة من الهواء الحار في الخارج."),
        it("A bathtub of water and a cup of water are both at 30 °C. Which has more thermal energy, and why?", "The bathtub. It has more water, so more particles carrying energy, even though the temperature is the same.", "حوض استحمام مملوء ماءً وكوب ماء كلاهما عند 30 درجة سيلزية. أيهما فيه طاقة حرارية أكبر، ولماذا؟", "حوض الاستحمام. فيه ماء أكثر، أي جسيمات أكثر تحمل الطاقة، رغم أن درجة الحرارة واحدة."),
        it("Solar panels in a UAE solar park change the Sun's light energy into another form of energy. Which form?", "Electrical energy (electricity).", "تحول الألواح الشمسية في محطة طاقة شمسية في الإمارات طاقة ضوء الشمس إلى شكل آخر من الطاقة. ما هو؟", "الطاقة الكهربائية (الكهرباء)."),
        it("Two teams pull on a rope with equal and opposite forces and the rope does not move. Are the forces balanced or unbalanced? What would happen if one team pulled harder?", "Balanced. If one team pulled harder the forces would be unbalanced and the rope would start moving towards that team.", "يشد فريقان حبلًا بقوتين متساويتين ومتعاكستين فلا يتحرك الحبل. هل القوتان متزنتان أم غير متزنتين؟ وماذا يحدث لو شد أحد الفريقين بقوة أكبر؟", "متزنتان. ولو شد أحد الفريقين بقوة أكبر لصارت القوتان غير متزنتين ولبدأ الحبل يتحرك نحو ذلك الفريق.")
      ]
    }
  ]
};
