// Home activities, one set for each grade band x subject x goal area, plus one
// "balanced profile" set for each band and subject. The key is
//   <subject>.<band>.<area>      for example  ma.35.num   or   rd.35.bal
// (subject ma rd lu sc, band k 12 35 68 911, areas as in family/core.js). A slot
// that has no entry here is a placeholder: the page shows a gentle "ask the
// teacher" line, and build/build-family.mjs lists it in family/SLOTS.md.
//
// To fill a slot, copy one entry and change it. Each needs:
//   activities  2 or 3 short things to try, each { title, text } in en and ar
//   example     one worked example: { question, steps: [...], answer }
//   sheet       a printable practice sheet: items [{ q, a }] with the answers
//               for the parent; set englishOnly for reading and grammar text
//               that must stay in English (the instructions stay bilingual)
// Rules: original wording only (nothing copied from NWEA's Learning Continuum or
// test items), no pigs, pork, alcohol or anything else sensitive in the UAE, no
// em dashes, warm and calm, no test pressure. Mark reviewed.ar true only after a
// native reader has read the Arabic.
const FamilyActivities = {
  "ma.35.num": {
    reviewed: { en: false, ar: false },
    activities: [
      {
        en: { title: "Shop and total", text: "Set out three or four things from the kitchen with price tags, in dirhams. Ask your child to add three prices, then work out the change from AED 50. Let them say each step aloud." },
        ar: { title: "نلعب لعبة المتجر", text: "ضع ثلاثة أو أربعة أشياء من المطبخ وعليها أسعار بالدرهم. اطلب من طفلك جمع ثلاثة أسعار ثم حساب الباقي من 50 درهمًا. ودعه يقول كل خطوة بصوت عالٍ." }
      },
      {
        en: { title: "Ten more, a hundred less", text: "Write a four-digit number on paper. Ask: what is 10 more? 100 more? 1,000 less? Change one digit at a time and say how the number changed. This builds a feel for place value." },
        ar: { title: "عشرة أكثر، ومئة أقل", text: "اكتب عددًا من أربعة أرقام على ورقة. اسأل: ما العدد الذي يزيد عنه بعشرة؟ وبمئة؟ وما العدد الذي ينقص عنه بألف؟ غيّر رقمًا واحدًا في كل مرة واسأل كيف تغيّر العدد. هذا ينمّي الإحساس بالقيمة المكانية." }
      },
      {
        en: { title: "Share it fairly", text: "Count out 24 dates or pebbles and share them between 4 people. Then try 26. What is left over? Talk about what a quarter of the pile looks like." },
        ar: { title: "نقتسم بالعدل", text: "عُدّ 24 تمرة أو حصاة ووزّعها على 4 أشخاص. ثم جرّب 26. ماذا يتبقى؟ وتحدّثا عن شكل ربع الكومة." }
      }
    ],
    example: {
      en: { question: "36 x 4", steps: ["Split 36 into 30 and 6.", "30 x 4 = 120.", "6 x 4 = 24.", "Add the parts: 120 + 24 = 144."], answer: "144" },
      ar: { question: "36 × 4", steps: ["قسّم 36 إلى 30 و6.", "30 × 4 = 120.", "6 × 4 = 24.", "اجمع الجزأين: 120 + 24 = 144."], answer: "144" }
    },
    sheet: {
      title: { en: "Numbers and calculating", ar: "الأعداد والحساب" },
      instructions: { en: "Take your time. Say each step aloud. Use paper if it helps.", ar: "خذ وقتك. قل كل خطوة بصوت عالٍ. استخدم ورقة إن ساعدك ذلك." },
      items: [
        { q: { en: "48 + 27 = ?", ar: "48 + 27 = ؟" }, a: { en: "75", ar: "75" } },
        { q: { en: "100 - 36 = ?", ar: "100 - 36 = ؟" }, a: { en: "64", ar: "64" } },
        { q: { en: "7 x 8 = ?", ar: "7 × 8 = ؟" }, a: { en: "56", ar: "56" } },
        { q: { en: "What is 10 more than 3,460?", ar: "ما العدد الذي يزيد بعشرة عن 3,460؟" }, a: { en: "3,470", ar: "3,470" } },
        { q: { en: "72 / 8 = ?", ar: "72 ÷ 8 = ؟" }, a: { en: "9", ar: "9" } },
        { q: { en: "Maya buys a book for AED 23 and a pen for AED 8. She pays with AED 50. How much change does she get?", ar: "اشترت مايا كتابًا بـ 23 درهمًا وقلمًا بـ 8 دراهم، ودفعت 50 درهمًا. كم الباقي لها؟" }, a: { en: "AED 19 (23 + 8 = 31, then 50 - 31 = 19)", ar: "19 درهمًا (23 + 8 = 31 ثم 50 - 31 = 19)" } }
      ]
    }
  },

  "rd.35.voc": {
    reviewed: { en: false, ar: false },
    activities: [
      {
        en: { title: "A new word each day", text: "Pick one word your child met in their reading. Ask them to guess its meaning from the sentence, then check it together. Use the word in a sentence at dinner." },
        ar: { title: "كلمة جديدة كل يوم", text: "اختر كلمة واحدة صادفها طفلك في قراءته. اطلب منه أن يخمّن معناها من الجملة، ثم تحقّقا منه معًا. واستعملا الكلمة في جملة على العشاء." }
      },
      {
        en: { title: "Clues in the sentence", text: "Cover a hard word with your thumb and read the sentence. What word would fit? Then uncover it and compare. The words around it are often the clue." },
        ar: { title: "أدلّة في الجملة", text: "غطِّ كلمة صعبة بإصبعك واقرأ الجملة. ما الكلمة التي تناسبها؟ ثم اكشفها وقارن. فالكلمات المحيطة بها غالبًا هي الدليل." }
      },
      {
        en: { title: "A ladder of words", text: "Choose a plain word such as big. Together, list stronger words on a ladder: large, huge, enormous. Do the same with a word that means the opposite. Which rung fits best?" },
        ar: { title: "سلّم الكلمات", text: "اختر كلمة بسيطة مثل big. اكتبا معًا كلمات أقوى على درجات سلّم: large و huge و enormous. وافعلا الشيء نفسه مع كلمة معناها العكس. أي درجة تناسب أكثر؟" }
      }
    ],
    example: {
      en: { question: "Layla was reluctant to jump into the pool, so she stood at the edge and waited. What does reluctant mean?", steps: ["Look at what Layla did: she stood at the edge and waited.", "She did not jump straight away.", "So reluctant means not wanting to do something yet, or feeling unsure."], answer: "Not wanting to do something yet" },
      ar: { question: "Layla was reluctant to jump into the pool, so she stood at the edge and waited. What does reluctant mean?", steps: ["انظر إلى ما فعلته ليلى: وقفت عند الحافة وانتظرت.", "لم تقفز فورًا.", "إذًا reluctant تعني لا ترغب في فعل شيء بعد، أو تشعر بالتردد."], answer: "لا ترغب في فعل شيء بعد" }
    },
    sheet: {
      englishOnly: true,
      title: { en: "Word meanings", ar: "معاني الكلمات" },
      instructions: { en: "Read each sentence. Circle the best answer.", ar: "اقرأ كل جملة. ضع دائرة حول أفضل إجابة." },
      items: [
        { q: { en: "The path was narrow, so we walked in a single line. Narrow means: (a) wide (b) not wide (c) very long", ar: "The path was narrow, so we walked in a single line. Narrow means: (a) wide (b) not wide (c) very long" }, a: { en: "(b) not wide", ar: "(b) not wide" } },
        { q: { en: "Which word means almost the same as enormous? (a) tiny (b) huge (c) quiet", ar: "Which word means almost the same as enormous? (a) tiny (b) huge (c) quiet" }, a: { en: "(b) huge", ar: "(b) huge" } },
        { q: { en: "Which word means the opposite of ancient? (a) old (b) new (c) broken", ar: "Which word means the opposite of ancient? (a) old (b) new (c) broken" }, a: { en: "(b) new", ar: "(b) new" } },
        { q: { en: "Omar was exhausted after the long race, so he sat down to rest. Exhausted means: (a) very tired (b) very happy (c) very hungry", ar: "Omar was exhausted after the long race, so he sat down to rest. Exhausted means: (a) very tired (b) very happy (c) very hungry" }, a: { en: "(a) very tired", ar: "(a) very tired" } },
        { q: { en: "The recipe said to add a pinch of salt. A pinch is: (a) a very small amount (b) a full cup (c) a spoon of sugar", ar: "The recipe said to add a pinch of salt. A pinch is: (a) a very small amount (b) a full cup (c) a spoon of sugar" }, a: { en: "(a) a very small amount", ar: "(a) a very small amount" } },
        { q: { en: "The sun was so ______ that we needed sunglasses. (a) bright (b) dim (c) cold", ar: "The sun was so ______ that we needed sunglasses. (a) bright (b) dim (c) cold" }, a: { en: "(a) bright", ar: "(a) bright" } }
      ]
    }
  },

  "ma.35.bal": {
    reviewed: { en: false, ar: false },
    activities: [
      {
        en: { title: "Maths on the way", text: "While walking or driving, ask a quick question about what you see: how many windows on that building? If each floor has 6, how many floors? Which is longer, that bus or two cars?" },
        ar: { title: "رياضيات في الطريق", text: "أثناء المشي أو السفر بالسيارة، اطرح سؤالًا سريعًا عمّا ترى: كم نافذة في ذلك المبنى؟ وإذا كان في كل طابق 6 نوافذ فكم طابقًا؟ أيهما أطول، تلك الحافلة أم سيارتان؟" }
      },
      {
        en: { title: "Cook and measure", text: "Let your child measure ingredients for a simple recipe, then double it or halve it. Ask them to explain how they worked out the new amounts." },
        ar: { title: "نطبخ ونقيس", text: "دع طفلك يقيس مقادير وصفة بسيطة، ثم يضاعفها أو ينصّفها. واطلب منه أن يشرح كيف حسب المقادير الجديدة." }
      },
      {
        en: { title: "Explain it to me", text: "Pick one maths problem from homework. Ask your child to teach it to you as if you were the student. Explaining out loud shows what is secure and what needs a second look." },
        ar: { title: "اشرح لي", text: "اختر مسألة رياضيات من الواجب. اطلب من طفلك أن يعلّمك إياها كأنك أنت الطالب. فالشرح بصوت عالٍ يُظهر ما هو راسخ وما يحتاج إلى نظرة ثانية." }
      }
    ],
    example: {
      en: { question: "A garden is 6 metres long and 4 metres wide. What is its area? How far is it around the edge?", steps: ["Area is length x width: 6 x 4 = 24 square metres.", "Around the edge: 6 + 4 + 6 + 4 = 20 metres."], answer: "Area 24 square metres, edge 20 metres" },
      ar: { question: "حديقة طولها 6 أمتار وعرضها 4 أمتار. ما مساحتها؟ وكم طول محيطها؟", steps: ["المساحة = الطول × العرض: 6 × 4 = 24 مترًا مربعًا.", "المحيط: 6 + 4 + 6 + 4 = 20 مترًا."], answer: "المساحة 24 مترًا مربعًا والمحيط 20 مترًا" }
    },
    sheet: {
      title: { en: "A little of everything", ar: "قليل من كل شيء" },
      instructions: { en: "Take your time. Say each step aloud. Use paper if it helps.", ar: "خذ وقتك. قل كل خطوة بصوت عالٍ. استخدم ورقة إن ساعدك ذلك." },
      items: [
        { q: { en: "What is 3/4 of 20?", ar: "ما قيمة ثلاثة أرباع العدد 20؟" }, a: { en: "15 (20 / 4 = 5, then 5 x 3 = 15)", ar: "15 (20 ÷ 4 = 5 ثم 5 × 3 = 15)" } },
        { q: { en: "A rectangle is 9 cm long and 5 cm wide. What is its area?", ar: "مستطيل طوله 9 سم وعرضه 5 سم. ما مساحته؟" }, a: { en: "45 square centimetres", ar: "45 سنتيمترًا مربعًا" } },
        { q: { en: "Complete the pattern: 4, 8, 12, 16, __", ar: "أكمل النمط: 4، 8، 12، 16، __" }, a: { en: "20 (add 4 each time)", ar: "20 (نضيف 4 في كل مرة)" } },
        { q: { en: "A bar chart shows 12 books read in week 1 and 17 in week 2. How many more were read in week 2?", ar: "يُظهر مخطط الأعمدة قراءة 12 كتابًا في الأسبوع الأول و17 في الثاني. كم كتابًا زيادة قُرئ في الأسبوع الثاني؟" }, a: { en: "5", ar: "5" } },
        { q: { en: "Which is greater: 0.6 or 0.58?", ar: "أيهما أكبر: 0.6 أم 0.58؟" }, a: { en: "0.6 (it is 0.60, and 60 hundredths is more than 58)", ar: "0.6 (فهو 0.60، و60 من مئة أكبر من 58)" } },
        { q: { en: "What is 5 x 30?", ar: "ما ناتج 5 × 30؟" }, a: { en: "150", ar: "150" } }
      ]
    }
  },

  "ma.35.alg": {
    reviewed: { en: false, ar: false },
    activities: [
      {
        en: { title: "Pattern hunt", text: "Look for repeating patterns at home and out and about: the stripes in a sadu woven rug, the tiles in a corridor, the windows on a tower. Ask your child to say the rule in words (for example, two red stripes then one black stripe) and to draw the next three steps. Then ask: what would the 10th stripe be? Let them work it out without drawing every step." },
        ar: { title: "نبحث عن الأنماط", text: "ابحثا عن أنماط متكررة في البيت وخارجه: خطوط سجادة السدو المنسوجة، أو بلاط الممر، أو نوافذ برج عالٍ. اطلب من طفلك أن يقول القاعدة بكلماته (مثلًا: خطان أحمران ثم خط أسود) وأن يرسم الخطوات الثلاث التالية. ثم اسأل: ما لون الخط العاشر؟ ودعه يتوصل إلى الجواب دون أن يرسم كل خطوة." }
      },
      {
        en: { title: "The balance puzzle", text: "Fill a small bag with a secret number of dates and tell your child that the bag and 7 loose dates weigh the same as 15 loose dates. How many dates are in the bag? Write it as a number sentence with a box for the mystery number (box + 7 = 15), then solve it by taking 7 from each side. Make three more puzzles together, and let your child set one for you." },
        ar: { title: "لغز الميزان", text: "ضع في كيس صغير عددًا سريًا من التمر، وقل لطفلك إن الكيس مع 7 تمرات يزن مثل 15 تمرة. كم تمرة في الكيس؟ اكتب ذلك على شكل جملة عددية فيها مربع للعدد المجهول (مربع + 7 = 15)، ثم احلّها بإنقاص 7 من كل جانب. اصنعا معًا ثلاثة ألغاز أخرى، ودع طفلك يصنع لغزًا لك." }
      },
      {
        en: { title: "Guess my rule", text: "Think of a secret rule such as double it and add 1. Your child says a number, you say the answer (3 gives 7, 5 gives 11). After three or four turns they guess the rule and test it. Swap roles. Keep a small table of in and out numbers on paper, because seeing the table is what helps them spot the rule." },
        ar: { title: "خمّن قاعدتي", text: "فكّر في قاعدة سرية مثل: ضاعف العدد ثم أضف 1. يقول طفلك عددًا وتقول له الناتج (3 يعطي 7، و5 يعطي 11). وبعد ثلاث أو أربع محاولات يخمّن القاعدة ويختبرها. بدّلا الأدوار. واحتفظا بجدول صغير للأعداد الداخلة والخارجة على الورق، فرؤية الجدول هي ما يساعده على اكتشاف القاعدة." }
      }
    ],
    example: {
      en: { question: "Solve n + 17 = 40. Then say the rule of this pattern: 5, 11, 17, 23, __", steps: ["To find n, undo the adding: 40 - 17 = 23, so n = 23.", "Check it: 23 + 17 = 40. Yes.", "For the pattern, look at the jumps: 11 - 5 = 6, 17 - 11 = 6, 23 - 17 = 6.", "The rule is add 6, so the next number is 23 + 6 = 29."], answer: "n = 23, and the next number is 29" },
      ar: { question: "حلّ المعادلة n + 17 = 40. ثم اذكر قاعدة هذا النمط: 5، 11، 17، 23، __", steps: ["لإيجاد n نعكس الجمع: 40 - 17 = 23، إذن n = 23.", "نتحقق: 23 + 17 = 40. صحيح.", "وفي النمط ننظر إلى القفزات: 11 - 5 = 6 و17 - 11 = 6 و23 - 17 = 6.", "القاعدة هي أضف 6، فالعدد التالي 23 + 6 = 29."], answer: "n = 23 والعدد التالي 29" }
    },
    sheet: {
      title: { en: "Patterns, equations and rules", ar: "الأنماط والمعادلات والقواعد" },
      instructions: { en: "Say your rule aloud before you write the answer. Check each answer by putting it back into the puzzle.", ar: "قل القاعدة بصوت عالٍ قبل أن تكتب الجواب. وتحقق من كل جواب بإعادته إلى اللغز." },
      items: [
        { q: { en: "Continue the pattern: 3, 8, 13, 18, __, __", ar: "أكمل النمط: 3، 8، 13، 18، __، __" }, a: { en: "23 and 28 (add 5 each time)", ar: "23 و28 (نضيف 5 في كل مرة)" } },
        { q: { en: "Find the missing number: __ + 26 = 71", ar: "أوجد العدد الناقص: __ + 26 = 71" }, a: { en: "45 (71 - 26 = 45)", ar: "45 (71 - 26 = 45)" } },
        { q: { en: "Find the missing number: 9 x __ = 54", ar: "أوجد العدد الناقص: 9 × __ = 54" }, a: { en: "6 (54 / 9 = 6)", ar: "6 (54 ÷ 9 = 6)" } },
        { q: { en: "A rule takes 2 to 7, 3 to 9 and 4 to 11. What is the rule, and what does 10 become?", ar: "قاعدة تحوّل 2 إلى 7 و3 إلى 9 و4 إلى 11. ما القاعدة؟ وماذا يصبح العدد 10؟" }, a: { en: "Double it and add 3. 10 becomes 23.", ar: "ضاعف ثم أضف 3. ويصبح العدد 10 هو 23." } },
        { q: { en: "Khalid saves AED 5 every week. After how many weeks will he have AED 35?", ar: "يوفّر خالد 5 دراهم كل أسبوع. بعد كم أسبوعًا يصبح معه 35 درهمًا؟" }, a: { en: "7 weeks (35 / 5 = 7)", ar: "7 أسابيع (35 ÷ 5 = 7)" } },
        { q: { en: "True or false: 6 + 4 = 3 + 7?", ar: "صح أم خطأ: 6 + 4 = 3 + 7؟" }, a: { en: "True. Both sides make 10.", ar: "صح. فالجانبان يساويان 10." } },
        { q: { en: "A row of tiles has 4 blue tiles, then 1 white, then 4 blue, then 1 white, and so on. What colour is the 15th tile?", ar: "صف من البلاط فيه 4 بلاطات زرقاء ثم بلاطة بيضاء ثم 4 زرقاء ثم بيضاء وهكذا. ما لون البلاطة الخامسة عشرة؟" }, a: { en: "White. The pattern repeats every 5 tiles, and the 5th, 10th and 15th tiles are white.", ar: "بيضاء. فالنمط يتكرر كل 5 بلاطات، والبلاطات الخامسة والعاشرة والخامسة عشرة بيضاء." } }
      ]
    }
  },

  "ma.35.geo": {
    reviewed: { en: false, ar: false },
    activities: [
      {
        en: { title: "Shape hunt", text: "Go on a ten-minute shape hunt at home, at the mall or on a walk: find a cylinder (a tin or a pillar), a rectangle (a door), a triangle (a roof or a road sign) and a circle (a clock). Ask your child to describe each one with maths words: how many sides, how many corners, are the sides equal? Then ask which shape is hardest to stack and why." },
        ar: { title: "رحلة البحث عن الأشكال", text: "قوما برحلة بحث عن الأشكال مدتها عشر دقائق في البيت أو المجمع التجاري أو أثناء المشي: ابحثا عن أسطوانة (علبة أو عمود)، ومستطيل (باب)، ومثلث (سقف أو لافتة طريق)، ودائرة (ساعة). اطلب من طفلك أن يصف كل شكل بلغة الرياضيات: كم ضلعًا وكم زاوية؟ وهل الأضلاع متساوية؟ ثم اسأل: أي الأشكال أصعب في التكديس ولماذا؟" }
      },
      {
        en: { title: "Measure the rug", text: "Estimate first, then measure a rug, a table or a balcony with a ruler or tape in centimetres or metres. Work out the perimeter (the distance round the edge) by adding all the sides. Then cover a small rectangle with square sticky notes to find its area by counting, and notice that multiplying the two sides gives the same answer." },
        ar: { title: "نقيس السجادة", text: "قدّرا أولًا ثم قيسا سجادة أو طاولة أو شرفة بمسطرة أو شريط قياس بالسنتيمتر أو المتر. احسبا المحيط (المسافة حول الحافة) بجمع الأضلاع كلها. ثم غطّيا مستطيلًا صغيرًا بأوراق لاصقة مربعة لتجدا مساحته بالعد، ولاحظا أن ضرب الضلعين يعطي الناتج نفسه." }
      },
      {
        en: { title: "Draw a map to scale", text: "Draw a map of the route from your home to school or to a favourite shop. Choose a scale together, for example 1 cm for every 10 metres. Ask your child to measure each part of the route on the map and to work out the real distance. Which turn is a right angle, and which is smaller or bigger than a right angle?" },
        ar: { title: "نرسم خريطة بمقياس", text: "ارسما خريطة للطريق من بيتكم إلى المدرسة أو إلى متجر مفضل. اختارا مقياسًا معًا، مثل 1 سم لكل 10 أمتار. اطلب من طفلك أن يقيس كل جزء من الطريق على الخريطة ويحسب المسافة الحقيقية. أي منعطف زاويته قائمة، وأيها أصغر من القائمة أو أكبر منها؟" }
      }
    ],
    example: {
      en: { question: "A rectangular garden at a villa is 12 metres long and 5 metres wide. Find its area and its perimeter.", steps: ["Area is length x width: 12 x 5 = 60 square metres.", "Perimeter is the distance all the way round: 12 + 5 + 12 + 5 = 34 metres.", "Area uses square units (m squared). Perimeter uses plain units (metres)."], answer: "Area 60 square metres, perimeter 34 metres" },
      ar: { question: "حديقة مستطيلة في فيلا طولها 12 مترًا وعرضها 5 أمتار. أوجد مساحتها ومحيطها.", steps: ["المساحة = الطول × العرض: 12 × 5 = 60 مترًا مربعًا.", "المحيط هو المسافة حول الحافة كلها: 12 + 5 + 12 + 5 = 34 مترًا.", "المساحة تُقاس بوحدات مربعة (م²)، والمحيط بوحدات عادية (متر)."], answer: "المساحة 60 مترًا مربعًا والمحيط 34 مترًا" }
    },
    sheet: {
      title: { en: "Shapes, measuring and space", ar: "الأشكال والقياس والفراغ" },
      instructions: { en: "Draw a quick sketch for each question. Write the unit with every answer.", ar: "ارسم رسمًا سريعًا لكل سؤال. واكتب الوحدة مع كل جواب." },
      items: [
        { q: { en: "A rectangle is 9 cm long and 4 cm wide. What is its perimeter?", ar: "مستطيل طوله 9 سم وعرضه 4 سم. ما محيطه؟" }, a: { en: "26 cm (9 + 4 + 9 + 4)", ar: "26 سم (9 + 4 + 9 + 4)" } },
        { q: { en: "What is the area of the same rectangle?", ar: "ما مساحة المستطيل نفسه؟" }, a: { en: "36 square cm (9 x 4)", ar: "36 سنتيمترًا مربعًا (9 × 4)" } },
        { q: { en: "A square has sides of 7 m. What is its perimeter?", ar: "مربع طول ضلعه 7 م. ما محيطه؟" }, a: { en: "28 m (4 x 7)", ar: "28 م (4 × 7)" } },
        { q: { en: "The Dubai Metro train leaves at 7:45 and arrives at 8:20. How long is the journey?", ar: "يغادر قطار المترو الساعة 7:45 ويصل الساعة 8:20. كم تستغرق الرحلة؟" }, a: { en: "35 minutes (15 minutes to 8:00, then 20 more)", ar: "35 دقيقة (15 دقيقة حتى الثامنة ثم 20 دقيقة أخرى)" } },
        { q: { en: "Which unit is best for the length of a falcon's wing: centimetres or kilometres?", ar: "أي وحدة أنسب لقياس طول جناح الصقر: السنتيمتر أم الكيلومتر؟" }, a: { en: "Centimetres", ar: "السنتيمتر" } },
        { q: { en: "How many right angles does a rectangle have, and how many sides?", ar: "كم زاوية قائمة في المستطيل، وكم ضلعًا؟" }, a: { en: "4 right angles and 4 sides", ar: "4 زوايا قائمة و4 أضلاع" } },
        { q: { en: "On a map, 1 cm stands for 10 m. A path is 6 cm long on the map. How long is the real path?", ar: "على خريطة، 1 سم يمثل 10 م. طول ممر على الخريطة 6 سم. كم طوله الحقيقي؟" }, a: { en: "60 m (6 x 10)", ar: "60 م (6 × 10)" } }
      ]
    }
  },

  "ma.35.dat": {
    reviewed: { en: false, ar: false },
    activities: [
      {
        en: { title: "Our family survey", text: "Ask ten people (family, neighbours or friends) which fruit they like best: dates, mango, watermelon or banana. Make a tally chart, then a bar graph with a title and labelled axes. Ask your child three questions about the graph: which is most popular, how many more chose dates than bananas, and how many people were asked altogether?" },
        ar: { title: "استطلاع عائلتنا", text: "اسألا عشرة أشخاص (من الأسرة أو الجيران أو الأصدقاء) عن الفاكهة التي يفضلونها: التمر أو المانجو أو البطيخ أو الموز. اصنعا جدول عدّ ثم مخططًا بالأعمدة له عنوان ومحوران مسمّيان. واسأل طفلك ثلاثة أسئلة عن المخطط: ما أكثرها شعبية؟ وكم شخصًا زيادة اختار التمر على الموز؟ وكم شخصًا سُئل في المجموع؟" }
      },
      {
        en: { title: "Weather watch", text: "For one week, write down the afternoon temperature in degrees Celsius from a weather app or the news. Put the numbers in a table and draw a line graph. Find the hottest and coolest day and the range (highest minus lowest). Ask: was it getting warmer or cooler through the week, and how can you tell from the line?" },
        ar: { title: "نراقب الطقس", text: "اكتبا لمدة أسبوع درجة حرارة بعد الظهر بالدرجات المئوية من تطبيق الطقس أو من الأخبار. ضعا الأعداد في جدول وارسما مخططًا خطيًا. أوجدا أحرّ يوم وأبرد يوم والمدى (الأكبر ناقص الأصغر). واسأل: هل كان الطقس يزداد دفئًا أم برودة خلال الأسبوع، وكيف نعرف ذلك من الخط؟" }
      },
      {
        en: { title: "How likely is it?", text: "Put 3 red, 2 blue and 1 yellow paper slip in a bag. Before each draw ask your child to say whether red is likely, unlikely, certain or impossible, then give the chance as a fraction (3 out of 6). Draw 20 times, putting the slip back each time, and compare what happened with what they predicted. Talk about why the results are close but not exactly the same." },
        ar: { title: "ما مدى احتمال ذلك؟", text: "ضع في كيس 3 أوراق حمراء وورقتين زرقاوين وورقة صفراء. قبل كل سحب اطلب من طفلك أن يقول هل سحب الحمراء محتمل أم غير محتمل أم مؤكد أم مستحيل، ثم يعبّر عن الاحتمال بكسر (3 من 6). اسحبا 20 مرة مع إعادة الورقة في كل مرة، وقارنا ما حدث بما توقعه. وتحدثا عن سبب كون النتائج قريبة لكنها ليست مطابقة تمامًا." }
      }
    ],
    example: {
      en: { question: "In a class vote, 8 children chose dates, 5 chose mango and 7 chose watermelon. How many more chose dates than mango? How many children voted?", steps: ["Read the bars: dates 8, mango 5, watermelon 7.", "How many more: 8 - 5 = 3.", "How many voted: 8 + 5 + 7 = 20."], answer: "3 more chose dates, and 20 children voted" },
      ar: { question: "في تصويت داخل الصف اختار 8 أطفال التمر، و5 المانجو، و7 البطيخ. كم طفلًا زيادة اختار التمر على المانجو؟ وكم طفلًا صوّت؟", steps: ["نقرأ الأعمدة: التمر 8 والمانجو 5 والبطيخ 7.", "الفرق: 8 - 5 = 3.", "عدد المصوّتين: 8 + 5 + 7 = 20."], answer: "اختار التمر 3 أطفال زيادة، وصوّت 20 طفلًا" }
    },
    sheet: {
      title: { en: "Data, graphs and chance", ar: "البيانات والرسوم البيانية والاحتمالات" },
      instructions: { en: "Read each table carefully. Show your working in the space.", ar: "اقرأ كل جدول بعناية. اكتب خطوات الحل في المساحة." },
      items: [
        { q: { en: "Temperatures this week: Mon 38, Tue 41, Wed 40, Thu 43, Fri 39 degrees. Which day was hottest?", ar: "درجات الحرارة هذا الأسبوع: الاثنين 38، الثلاثاء 41، الأربعاء 40، الخميس 43، الجمعة 39 درجة. أي يوم كان الأحرّ؟" }, a: { en: "Thursday (43)", ar: "الخميس (43)" } },
        { q: { en: "What is the range of those temperatures (highest minus lowest)?", ar: "ما مدى درجات الحرارة هذه (الأكبر ناقص الأصغر)؟" }, a: { en: "5 degrees (43 - 38)", ar: "5 درجات (43 - 38)" } },
        { q: { en: "A tally shows dates 9, mango 6, banana 3. How many people were asked?", ar: "جدول عدّ يُظهر: التمر 9، المانجو 6، الموز 3. كم شخصًا سُئل؟" }, a: { en: "18", ar: "18" } },
        { q: { en: "How many more people chose dates than banana in that tally?", ar: "كم شخصًا زيادة اختار التمر على الموز في الجدول نفسه؟" }, a: { en: "6 (9 - 3)", ar: "6 (9 - 3)" } },
        { q: { en: "A bag holds 2 blue and 3 green marbles. What is the chance of drawing blue? Write it as a fraction.", ar: "كيس فيه كرتان زرقاوان و3 كرات خضراء. ما احتمال سحب كرة زرقاء؟ اكتبه على شكل كسر." }, a: { en: "2 out of 5 (2/5)", ar: "2 من 5 (2/5)" } },
        { q: { en: "Is it certain, likely, unlikely or impossible that the sun will rise tomorrow?", ar: "هل شروق الشمس غدًا مؤكد أم محتمل أم غير محتمل أم مستحيل؟" }, a: { en: "Certain", ar: "مؤكد" } },
        { q: { en: "Scores in a quiz: 6, 8, 8, 9, 10. What is the mode (the number that appears most)?", ar: "درجات اختبار قصير: 6، 8، 8، 9، 10. ما المنوال (العدد الأكثر تكرارًا)؟" }, a: { en: "8", ar: "8" } }
      ]
    }
  }
,

  "rd.35.inf": {
    reviewed: { en: false, ar: false },
    activities: [
      {
        en: { title: "Main idea in one sentence", text: "Choose a short nonfiction text: a page from a children's magazine, an article about the UAE, or a section of a school book. After reading, ask your child to tell you the main idea in one sentence, then to give three details that support it. If a detail does not support the main idea, it belongs somewhere else. Write the sentence and the three details on a small card." },
        ar: { title: "الفكرة الرئيسة في جملة", text: "اختر نصًا معلوماتيًا قصيرًا: صفحة من مجلة أطفال، أو مقالًا عن الإمارات، أو جزءًا من كتاب مدرسي. بعد القراءة اطلب من طفلك أن يخبرك بالفكرة الرئيسة في جملة واحدة، ثم أن يذكر ثلاث تفاصيل تدعمها. وإذا لم تدعم التفصيلة الفكرة الرئيسة فمكانها في موضع آخر. اكتبا الجملة والتفاصيل الثلاث على بطاقة صغيرة." }
      },
      {
        en: { title: "Use the text features", text: "Before reading, look only at the title, headings, pictures, captions and any words in bold. Ask your child to predict what the text will teach them and what they already know. Then read it and check the predictions. Ask: what did the heading tell you, and why did the writer put that word in bold? These features are a map for the reader." },
        ar: { title: "نستفيد من عناصر النص", text: "قبل القراءة انظرا فقط إلى العنوان والعناوين الفرعية والصور والتعليقات وأي كلمات مكتوبة بخط عريض. اطلب من طفلك أن يتوقع ما سيتعلمه من النص وما يعرفه سلفًا. ثم اقرآ النص وتحققا من التوقعات. اسأل: ماذا أخبرك العنوان؟ ولماذا وضع الكاتب هذه الكلمة بخط عريض؟ هذه العناصر خريطة تدل القارئ." }
      },
      {
        en: { title: "Fact or opinion?", text: "Read a paragraph from a travel leaflet, a menu or an advertisement. Take turns picking out one fact (something that can be checked, such as the tower has 160 floors) and one opinion (what someone thinks, such as it is the most beautiful building). Ask how you could check each fact, and which words give opinions away, such as best, beautiful or delicious." },
        ar: { title: "حقيقة أم رأي؟", text: "اقرآ فقرة من نشرة سياحية أو قائمة طعام أو إعلان. تناوبا على استخراج حقيقة (شيء يمكن التحقق منه، مثل: للبرج 160 طابقًا) ورأي (ما يظنه شخص، مثل: إنه أجمل مبنى). اسأل: كيف نتحقق من كل حقيقة؟ وما الكلمات التي تكشف الرأي، مثل أفضل وجميل ولذيذ؟" }
      }
    ],
    example: {
      en: { question: "Falcons have been part of life in the Emirates for hundreds of years. Long ago, families used trained falcons to help find food in the desert. Today falcons are cared for in special hospitals and are a symbol of the country. What is the main idea?", steps: ["Ask what the whole paragraph is about, not just one sentence.", "Every sentence talks about falcons and their place in the Emirates, then and now.", "A good main idea sentence: Falcons have been important in the Emirates for a very long time."], answer: "Falcons have been important in the Emirates for a very long time." },
      ar: { question: "Falcons have been part of life in the Emirates for hundreds of years. Long ago, families used trained falcons to help find food in the desert. Today falcons are cared for in special hospitals and are a symbol of the country. What is the main idea?", steps: ["اسأل عمّ تتحدث الفقرة كلها، وليس جملة واحدة فقط.", "كل جملة تتحدث عن الصقور ومكانتها في الإمارات قديمًا واليوم.", "جملة جيدة للفكرة الرئيسة: كانت الصقور مهمة في الإمارات منذ زمن طويل جدًا."], answer: "Falcons have been important in the Emirates for a very long time. (الصقور مهمة في الإمارات منذ زمن طويل جدًا.)" }
    },
    sheet: {
      englishOnly: true,
      title: { en: "Reading nonfiction: the Arabian oryx", ar: "قراءة النصوص المعلوماتية: المها العربي" },
      instructions: { en: "Read the text twice. Then answer the questions. Go back to the text to check each answer.", ar: "اقرأ النص مرتين. ثم أجب عن الأسئلة. ارجع إلى النص للتحقق من كل جواب." },
      items: [
        { q: { en: "TEXT. The Arabian oryx: A Desert Success Story. The Arabian oryx is a white antelope with two long, straight horns. It lives in the deserts of the Arabian Peninsula and can go for a long time without drinking, because it gets water from the plants it eats. Its pale coat reflects the sun, and its wide hooves help it walk on soft sand. Many years ago hunting nearly made the oryx disappear from the wild. Then people began breeding programmes and made protected reserves, including in the UAE. Slowly the herds grew again, and today oryx once more live in the wild. It is a beautiful animal that every visitor should see.", ar: "TEXT. The Arabian oryx: A Desert Success Story. The Arabian oryx is a white antelope with two long, straight horns. It lives in the deserts of the Arabian Peninsula and can go for a long time without drinking, because it gets water from the plants it eats. Its pale coat reflects the sun, and its wide hooves help it walk on soft sand. Many years ago hunting nearly made the oryx disappear from the wild. Then people began breeding programmes and made protected reserves, including in the UAE. Slowly the herds grew again, and today oryx once more live in the wild. It is a beautiful animal that every visitor should see." }, a: { en: "(Read the text. Questions follow.)", ar: "(Read the text. Questions follow.)" } },
        { q: { en: "1. What is the main idea of the text? (a) Oryx eat plants (b) The Arabian oryx is well suited to the desert and was saved from disappearing (c) Hunting is allowed in reserves", ar: "1. What is the main idea of the text? (a) Oryx eat plants (b) The Arabian oryx is well suited to the desert and was saved from disappearing (c) Hunting is allowed in reserves" }, a: { en: "(b)", ar: "(b)" } },
        { q: { en: "2. How does the oryx get water? (a) from rivers (b) from the plants it eats (c) from the rain only", ar: "2. How does the oryx get water? (a) from rivers (b) from the plants it eats (c) from the rain only" }, a: { en: "(b) from the plants it eats", ar: "(b) from the plants it eats" } },
        { q: { en: "3. Why does the oryx have a pale coat? (a) to reflect the sun (b) to hide in snow (c) to look beautiful", ar: "3. Why does the oryx have a pale coat? (a) to reflect the sun (b) to hide in snow (c) to look beautiful" }, a: { en: "(a) to reflect the sun", ar: "(a) to reflect the sun" } },
        { q: { en: "4. Which sentence is an opinion? Copy it.", ar: "4. Which sentence is an opinion? Copy it." }, a: { en: "It is a beautiful animal that every visitor should see.", ar: "It is a beautiful animal that every visitor should see." } },
        { q: { en: "5. In the text, the word reserves means: (a) places kept safe for animals (b) animals that are tired (c) tickets booked in advance", ar: "5. In the text, the word reserves means: (a) places kept safe for animals (b) animals that are tired (c) tickets booked in advance" }, a: { en: "(a) places kept safe for animals", ar: "(a) places kept safe for animals" } },
        { q: { en: "6. What happened first and what happened next? Put in order: herds grew again / hunting nearly ended the wild oryx / breeding programmes began.", ar: "6. What happened first and what happened next? Put in order: herds grew again / hunting nearly ended the wild oryx / breeding programmes began." }, a: { en: "Hunting nearly ended the wild oryx, then breeding programmes began, then the herds grew again.", ar: "Hunting nearly ended the wild oryx, then breeding programmes began, then the herds grew again." } }
      ]
    }
  },

  "rd.35.lit": {
    reviewed: { en: false, ar: false },
    activities: [
      {
        en: { title: "Story map", text: "After your child reads or hears a story, draw four boxes on a page: characters, setting, the problem, and how it was solved. Ask them to fill each box in their own words. Then ask what the character learned, because that is often the theme of the story. Use stories from school, a library book or one a grandparent tells." },
        ar: { title: "خريطة القصة", text: "بعد أن يقرأ طفلك قصة أو يسمعها، ارسم أربعة مربعات على ورقة: الشخصيات، والمكان والزمان، والمشكلة، وكيف حُلّت. واطلب منه ملء كل مربع بكلماته. ثم اسأل: ماذا تعلّمت الشخصية؟ فذلك غالبًا هو فكرة القصة. استخدما قصصًا من المدرسة أو من كتاب المكتبة أو قصة يرويها جد أو جدة." }
      },
      {
        en: { title: "Show me the evidence", text: "Pick one feeling in a story (worried, proud, curious). Ask your child to find the exact words or actions that show it, not just to name the feeling. For example, her hands shook shows she was nervous. Then ask how they would feel in the same place, and how the writer wants the reader to feel." },
        ar: { title: "أرني الدليل", text: "اختر شعورًا واحدًا في قصة (قلق أو فخر أو فضول). اطلب من طفلك أن يجد الكلمات أو الأفعال التي تدل عليه بدقة، لا أن يسمّي الشعور فقط. مثلًا: ارتجفت يداها تدل على أنها متوترة. ثم اسأل كيف سيشعر هو في المكان نفسه، وكيف يريد الكاتب أن يشعر القارئ." }
      },
      {
        en: { title: "Read a poem aloud", text: "Choose a short poem, in English or in Arabic. Read it aloud together twice: once plainly, then once with feeling, using loud and soft, fast and slow. Ask your child to point out any sounds that repeat, any comparison (a simile uses like or as), and any picture the poet makes in your mind. Then let them write two lines of their own about the desert, the sea or a rainy day." },
        ar: { title: "نقرأ قصيدة بصوت عالٍ", text: "اختر قصيدة قصيرة بالإنجليزية أو بالعربية. اقرآها معًا مرتين: مرة بصوت عادي، ومرة بإحساس، مع التنويع بين الصوت العالي والخافت والسريع والبطيء. واطلب من طفلك أن يشير إلى أي أصوات تتكرر، وأي تشبيه (يستخدم مثل أو كأن)، وأي صورة يرسمها الشاعر في ذهنك. ثم دعه يكتب سطرين من عنده عن الصحراء أو البحر أو يوم ماطر." }
      }
    ],
    example: {
      en: { question: "Omar's kite got stuck in a palm tree. He frowned and kicked the sand. Then he took a deep breath, and thought, There must be a way. What does the story show about Omar?", steps: ["Look at what he does: he frowns and kicks the sand, so he is upset at first.", "Then he takes a deep breath and tells himself there must be a way.", "He is calming himself and deciding not to give up. That shows he is determined."], answer: "Omar is upset at first but determined not to give up" },
      ar: { question: "Omar's kite got stuck in a palm tree. He frowned and kicked the sand. Then he took a deep breath, and thought, There must be a way. What does the story show about Omar?", steps: ["انظر إلى ما يفعله: يعبس ويركل الرمل، فهو منزعج في البداية.", "ثم يأخذ نفسًا عميقًا ويقول لنفسه: لا بد من طريقة.", "إنه يهدّئ نفسه ويقرر ألّا يستسلم، وهذا يدل على أنه مصمم."], answer: "Omar is upset at first but determined not to give up. (عمر منزعج في البداية لكنه مصمم على ألّا يستسلم.)" }
    },
    sheet: {
      englishOnly: true,
      title: { en: "Reading a story: Omar's kite", ar: "قراءة قصة: طائرة عمر الورقية" },
      instructions: { en: "Read the story slowly. Underline words that show how Omar feels. Then answer.", ar: "اقرأ القصة ببطء. ضع خطًا تحت الكلمات التي تدل على شعور عمر. ثم أجب." },
      items: [
        { q: { en: "STORY. On a windy morning, Omar and his sister Mariam went to the beach with their new red kite. It rose up like a bird, higher and higher. Then a sudden gust pulled the string out of his hand, and the kite landed in the top of a tall palm tree. Omar frowned and kicked the sand. Mariam laughed, but not unkindly. She said, Let us think. They tried to jump. They tried to shake the trunk. Nothing worked. At last Mariam asked a man who was selling cold drinks nearby, and he fetched a long pole. Omar carefully lifted the kite down. Next time, he said with a smile, I will hold the string with both hands.", ar: "STORY. On a windy morning, Omar and his sister Mariam went to the beach with their new red kite. It rose up like a bird, higher and higher. Then a sudden gust pulled the string out of his hand, and the kite landed in the top of a tall palm tree. Omar frowned and kicked the sand. Mariam laughed, but not unkindly. She said, Let us think. They tried to jump. They tried to shake the trunk. Nothing worked. At last Mariam asked a man who was selling cold drinks nearby, and he fetched a long pole. Omar carefully lifted the kite down. Next time, he said with a smile, I will hold the string with both hands." }, a: { en: "(Read the story. Questions follow.)", ar: "(Read the story. Questions follow.)" } },
        { q: { en: "1. Where does the story happen, and what is the weather like?", ar: "1. Where does the story happen, and what is the weather like?" }, a: { en: "At the beach, on a windy morning.", ar: "At the beach, on a windy morning." } },
        { q: { en: "2. What is the problem in the story?", ar: "2. What is the problem in the story?" }, a: { en: "The kite is stuck at the top of a palm tree.", ar: "The kite is stuck at the top of a palm tree." } },
        { q: { en: "3. How does Omar feel when the kite is stuck? Give one detail from the story that shows it.", ar: "3. How does Omar feel when the kite is stuck? Give one detail from the story that shows it." }, a: { en: "Upset or annoyed. He frowned and kicked the sand.", ar: "Upset or annoyed. He frowned and kicked the sand." } },
        { q: { en: "4. The kite rose up like a bird. This comparison is called: (a) a simile (b) a rhyme (c) a heading", ar: "4. The kite rose up like a bird. This comparison is called: (a) a simile (b) a rhyme (c) a heading" }, a: { en: "(a) a simile", ar: "(a) a simile" } },
        { q: { en: "5. Put in order: the man fetches a pole / the gust takes the kite / they try jumping / Omar lifts the kite down.", ar: "5. Put in order: the man fetches a pole / the gust takes the kite / they try jumping / Omar lifts the kite down." }, a: { en: "The gust takes the kite, they try jumping, the man fetches a pole, Omar lifts the kite down.", ar: "The gust takes the kite, they try jumping, the man fetches a pole, Omar lifts the kite down." } },
        { q: { en: "6. What is the theme, or lesson, of the story? (a) Kites are expensive (b) Think calmly and ask for help when you are stuck (c) Never go to the beach", ar: "6. What is the theme, or lesson, of the story? (a) Kites are expensive (b) Think calmly and ask for help when you are stuck (c) Never go to the beach" }, a: { en: "(b)", ar: "(b)" } },
        { q: { en: "7. Who is telling the story: a character in it (I) or someone outside it (he, she)? How do you know?", ar: "7. Who is telling the story: a character in it (I) or someone outside it (he, she)? How do you know?" }, a: { en: "Someone outside the story. It says he and she, not I.", ar: "Someone outside the story. It says he and she, not I." } }
      ]
    }
  },

  "rd.35.bal": {
    reviewed: { en: false, ar: false },
    activities: [
      {
        en: { title: "Ten minutes, shared reading", text: "Read aloud together for ten minutes a day, taking turns by page or by paragraph. Pick books that are a little hard and let your child choose some of them. Pause once or twice to ask three small questions: what just happened, why do you think it happened, and what do you think will happen next? Keep a simple reading log of the titles." },
        ar: { title: "عشر دقائق من القراءة المشتركة", text: "اقرآ بصوت عالٍ معًا عشر دقائق كل يوم، وتناوبا على الصفحات أو الفقرات. اختر كتبًا صعبة قليلًا ودع طفلك يختار بعضها. توقف مرة أو مرتين لتسأل ثلاثة أسئلة صغيرة: ماذا حدث للتو؟ ولماذا تظن أنه حدث؟ وماذا تتوقع أن يحدث بعد ذلك؟ واحتفظا بسجل بسيط لعناوين الكتب." }
      },
      {
        en: { title: "Retell in three sentences", text: "After reading, ask your child to retell what they read in exactly three sentences: a beginning, a middle and an end. Then ask them to add one sentence that starts with I think, to share an opinion with a reason. Retelling in their own words shows what they truly understood." },
        ar: { title: "نعيد الحكاية في ثلاث جمل", text: "بعد القراءة اطلب من طفلك أن يعيد ما قرأه في ثلاث جمل بالضبط: بداية ووسط ونهاية. ثم اطلب منه إضافة جملة تبدأ بـ أظن أن، يعبّر فيها عن رأي مع سبب. فإعادة الحكاية بكلماته تُظهر ما فهمه حقًا." }
      },
      {
        en: { title: "Read the world", text: "Read real things together: a recipe, a museum sign, a bus timetable, a short news story for children. Ask what the text wants you to do or know, and how you can tell. Reading many kinds of text builds the flexibility the test looks for." },
        ar: { title: "نقرأ العالم من حولنا", text: "اقرآ معًا نصوصًا حقيقية: وصفة طعام، ولافتة في متحف، وجدول حافلات، وخبرًا قصيرًا للأطفال. اسأل: ماذا يريدك النص أن تفعل أو تعرف؟ وكيف عرفت ذلك؟ فقراءة أنواع كثيرة من النصوص تنمّي المرونة التي يبحث عنها الاختبار." }
      }
    ],
    example: {
      en: { question: "Noura carried an umbrella to the date farm, even though the sky was blue. Later, a short shower fell, and the farmer ran for cover while Noura stayed dry. Why did Noura carry an umbrella?", steps: ["The text does not say why directly, so we make an inference.", "Clue 1: the sky was blue, so the umbrella was not for rain at that moment.", "Clue 2: a shower fell later, and she stayed dry. She probably expected the shower."], answer: "She expected rain, or was prepared for it" },
      ar: { question: "Noura carried an umbrella to the date farm, even though the sky was blue. Later, a short shower fell, and the farmer ran for cover while Noura stayed dry. Why did Noura carry an umbrella?", steps: ["النص لا يذكر السبب مباشرة، لذلك نستنتج.", "الدليل الأول: السماء زرقاء، فالمظلة لم تكن للمطر في تلك اللحظة.", "الدليل الثاني: نزلت زخة لاحقًا وبقيت جافة. فمن المرجح أنها توقعت الزخة."], answer: "She expected rain, or was prepared for it. (توقعت المطر أو استعدت له.)" }
    },
    sheet: {
      englishOnly: true,
      title: { en: "A little of every kind of reading", ar: "قليل من كل أنواع القراءة" },
      instructions: { en: "Read the text, then answer. Use the text to prove each answer.", ar: "اقرأ النص ثم أجب. استعن بالنص لإثبات كل جواب." },
      items: [
        { q: { en: "TEXT. Every morning, Hamdan helps his grandfather water the date palms. The old man says that a palm needs patience: it takes years to grow, but then it gives fruit for a very long time. Hamdan carries the heavy bucket, though his arms ache. By noon the garden is green and cool, and the two sit in the shade to eat breakfast.", ar: "TEXT. Every morning, Hamdan helps his grandfather water the date palms. The old man says that a palm needs patience: it takes years to grow, but then it gives fruit for a very long time. Hamdan carries the heavy bucket, though his arms ache. By noon the garden is green and cool, and the two sit in the shade to eat breakfast." }, a: { en: "(Read the text. Questions follow.)", ar: "(Read the text. Questions follow.)" } },
        { q: { en: "1. What is the text mostly about? (a) a boy helping his grandfather care for palms (b) a long journey (c) a lost bucket", ar: "1. What is the text mostly about? (a) a boy helping his grandfather care for palms (b) a long journey (c) a lost bucket" }, a: { en: "(a)", ar: "(a)" } },
        { q: { en: "2. What does patience mean here? (a) waiting calmly for good things to happen (b) running fast (c) being hungry", ar: "2. What does patience mean here? (a) waiting calmly for good things to happen (b) running fast (c) being hungry" }, a: { en: "(a)", ar: "(a)" } },
        { q: { en: "3. Does Hamdan find the work easy? How do you know?", ar: "3. Does Hamdan find the work easy? How do you know?" }, a: { en: "No. His arms ache from carrying the heavy bucket.", ar: "No. His arms ache from carrying the heavy bucket." } },
        { q: { en: "4. What happens last in the text?", ar: "4. What happens last in the text?" }, a: { en: "They sit in the shade to eat breakfast.", ar: "They sit in the shade to eat breakfast." } },
        { q: { en: "5. Which is a fact? (a) A palm gives fruit for a long time. (b) The garden is the nicest place on earth.", ar: "5. Which is a fact? (a) A palm gives fruit for a long time. (b) The garden is the nicest place on earth." }, a: { en: "(a)", ar: "(a)" } },
        { q: { en: "6. Why do you think the grandfather talks about patience?", ar: "6. Why do you think the grandfather talks about patience?" }, a: { en: "Any sensible answer, such as: he wants Hamdan to learn that good things, like fruit, take time and work.", ar: "Any sensible answer, such as: he wants Hamdan to learn that good things, like fruit, take time and work." } }
      ]
    }
  }
,

  "lu.35.cps": {
    reviewed: { en: false, ar: false },
    activities: [
      {
        en: { title: "Sign and label hunt", text: "Look at real writing around you: shop signs, a metro map, food labels, a school letter. Ask your child to spot capital letters (at the start of sentences and for names of people and places such as Dubai or Sharjah), full stops, commas in lists and question marks. Find one mistake in a sign if you can, and talk about how to fix it." },
        ar: { title: "رحلة البحث عن اللافتات والملصقات", text: "انظرا إلى الكتابة الحقيقية من حولكما: لافتات المحال، وخريطة المترو، وملصقات الأغذية، ورسالة من المدرسة. اطلب من طفلك أن يلاحظ الأحرف الكبيرة (في بداية الجمل وفي أسماء الأشخاص والأماكن مثل Dubai وSharjah)، والنقاط، والفواصل في القوائم، وعلامات الاستفهام. وإن وجدتما خطأً في لافتة فتحدثا عن كيفية تصحيحه." }
      },
      {
        en: { title: "Edit my note", text: "Write a short note to your child with five deliberate mistakes in it: a missing capital letter on a name, a missing full stop, a missing apostrophe, a comma missing in a list, and one misspelled word. Let them be the editor, with a coloured pencil, and find all five. Then they write you a note with mistakes for you to find." },
        ar: { title: "نحرّر الرسالة", text: "اكتب لطفلك رسالة قصيرة فيها خمسة أخطاء مقصودة: حرف كبير ناقص في اسم، ونقطة ناقصة، وفاصلة عليا ناقصة، وفاصلة ناقصة في قائمة، وكلمة بها خطأ إملائي. ودعه يكون المحرّر بقلم ملون ويجد الأخطاء الخمسة. ثم يكتب هو لك رسالة فيها أخطاء لتجدها أنت." }
      },
      {
        en: { title: "Tricky words in many colours", text: "Choose five words your child often spells wrongly, such as because, friend, necessary, different and favourite. Write each in pencil, then trace over it three times in three colours while saying the letters aloud. Cover the word and write it from memory the next day, and again after three days." },
        ar: { title: "الكلمات الصعبة بألوان كثيرة", text: "اختر خمس كلمات يخطئ طفلك في تهجئتها غالبًا، مثل because وfriend وnecessary وdifferent وfavourite. اكتب كل كلمة بالرصاص ثم يمرّ فوقها ثلاث مرات بثلاثة ألوان وهو يقول حروفها بصوت عالٍ. غطِّ الكلمة واطلب منه كتابتها من الذاكرة في اليوم التالي ثم بعد ثلاثة أيام." }
      }
    ],
    example: {
      en: { question: "Fix this sentence: on friday noura and i went to dubai mall we bought a book a pen and a bag", steps: ["Start with a capital letter and name the days and places with capitals: On Friday, Noura, Dubai Mall.", "The word I is always a capital.", "Split into two sentences with a full stop after Mall.", "Add commas in the list: a book, a pen and a bag."], answer: "On Friday Noura and I went to Dubai Mall. We bought a book, a pen and a bag." },
      ar: { question: "Fix this sentence: on friday noura and i went to dubai mall we bought a book a pen and a bag", steps: ["ابدأ بحرف كبير واكتب الأيام والأماكن بحرف كبير: On Friday وNoura وDubai Mall.", "الضمير I يُكتب دائمًا بحرف كبير.", "افصل إلى جملتين بنقطة بعد Mall.", "أضف الفواصل في القائمة: a book, a pen and a bag."], answer: "On Friday Noura and I went to Dubai Mall. We bought a book, a pen and a bag." }
    },
    sheet: {
      englishOnly: true,
      title: { en: "Capital letters, punctuation and spelling", ar: "الأحرف الكبيرة وعلامات الترقيم والهجاء" },
      instructions: { en: "Write each corrected answer in full. Read it aloud to check.", ar: "اكتب كل جواب مصحَّحًا كاملًا. واقرأه بصوت عالٍ للتحقق." },
      items: [
        { q: { en: "Rewrite with capital letters: we visited abu dhabi in december with hamdan and layla.", ar: "Rewrite with capital letters: we visited abu dhabi in december with hamdan and layla." }, a: { en: "We visited Abu Dhabi in December with Hamdan and Layla.", ar: "We visited Abu Dhabi in December with Hamdan and Layla." } },
        { q: { en: "Add commas: At the souq we saw dates spices lanterns and carpets.", ar: "Add commas: At the souq we saw dates spices lanterns and carpets." }, a: { en: "At the souq we saw dates, spices, lanterns and carpets.", ar: "At the souq we saw dates, spices, lanterns and carpets." } },
        { q: { en: "Add the apostrophe: The falcons wing is strong.", ar: "Add the apostrophe: The falcons wing is strong." }, a: { en: "The falcon's wing is strong.", ar: "The falcon's wing is strong." } },
        { q: { en: "Add the apostrophes: The girls bags are by the door. (Two or more girls.)", ar: "Add the apostrophes: The girls bags are by the door. (Two or more girls.)" }, a: { en: "The girls' bags are by the door.", ar: "The girls' bags are by the door." } },
        { q: { en: "Add the missing punctuation: Where are you going asked Mariam", ar: "Add the missing punctuation: Where are you going asked Mariam" }, a: { en: "Where are you going? asked Mariam.  (or: \"Where are you going?\" asked Mariam.)", ar: "Where are you going? asked Mariam.  (or: \"Where are you going?\" asked Mariam.)" } },
        { q: { en: "Which word is spelled correctly? (a) neccessary (b) necessary (c) necesary", ar: "Which word is spelled correctly? (a) neccessary (b) necessary (c) necesary" }, a: { en: "(b) necessary", ar: "(b) necessary" } },
        { q: { en: "Which is spelled correctly? (a) fourty (b) forty (c) fortey", ar: "Which is spelled correctly? (a) fourty (b) forty (c) fortey" }, a: { en: "(b) forty", ar: "(b) forty" } }
      ]
    }
  },

  "lu.35.gru": {
    reviewed: { en: false, ar: false },
    activities: [
      {
        en: { title: "Sentence builders", text: "Write nouns, verbs, adjectives and adverbs on separate slips of paper, using words from daily life in the UAE (camel, majlis, sparkling, quietly, sail). Your child draws one of each and builds a sentence, such as The golden camel walked slowly. Swap one slip at a time and talk about how the meaning changes. Ask which word class each slip is." },
        ar: { title: "نبني الجمل", text: "اكتب أسماء وأفعالًا وصفات وظروفًا على قصاصات ورق منفصلة بكلمات من الحياة اليومية في الإمارات (camel وmajlis وsparkling وquietly وsail). يسحب طفلك قصاصة من كل نوع ويبني جملة مثل The golden camel walked slowly. ثم تبدلان قصاصة واحدة في كل مرة وتتحدثان عن تغيّر المعنى. واسأل: ما نوع كل كلمة؟" }
      },
      {
        en: { title: "The time machine", text: "Say a sentence about now, such as I walk to the park. Ask your child to travel back (I walked to the park) and forward (I will walk to the park). Try with irregular verbs too: go, went; eat, ate; fly, flew. Keep a list of the ones that change in surprising ways and test each other once a week." },
        ar: { title: "آلة الزمن", text: "قل جملة عن الحاضر مثل I walk to the park. واطلب من طفلك أن يسافر إلى الماضي (I walked to the park) وإلى المستقبل (I will walk to the park). وجرّبا الأفعال الشاذة أيضًا: go وwent، وeat وate، وfly وflew. واحتفظا بقائمة بالتي تتغير بطرق مفاجئة واختبرا بعضكما مرة كل أسبوع." }
      },
      {
        en: { title: "Who is doing it?", text: "Say sentences where the verb must agree with the subject, some right and some wrong: The camels walks across the sand. A falcon fly over the dunes. Your child listens, says thumbs up or thumbs down, and fixes the wrong ones. Explain the rule simply: one thing takes walks, many things take walk." },
        ar: { title: "من الذي يفعل؟", text: "قل جملًا يجب أن يتفق فيها الفعل مع الفاعل، بعضها صحيح وبعضها خاطئ: The camels walks across the sand. A falcon fly over the dunes. يستمع طفلك ويرفع إبهامه للصحيح ويخفضه للخطأ ثم يصحّح الخطأ. واشرح القاعدة ببساطة: شيء واحد يأخذ walks وأشياء كثيرة تأخذ walk." }
      }
    ],
    example: {
      en: { question: "Choose the right verb: The falcons (fly / flies) over the desert every morning.", steps: ["Find the subject: falcons. It is plural, more than one.", "A plural subject takes the plain verb without s: fly.", "Read it aloud: The falcons fly over the desert every morning."], answer: "fly" },
      ar: { question: "Choose the right verb: The falcons (fly / flies) over the desert every morning.", steps: ["نجد الفاعل: falcons، وهو جمع أي أكثر من واحد.", "الفاعل الجمع يأخذ الفعل العادي بلا s: fly.", "اقرأ الجملة بصوت عالٍ: The falcons fly over the desert every morning."], answer: "fly" }
    },
    sheet: {
      englishOnly: true,
      title: { en: "Grammar and word usage", ar: "القواعد واستخدام الكلمات" },
      instructions: { en: "Choose or write the best word. Read the whole sentence aloud each time.", ar: "اختر أو اكتب أفضل كلمة. واقرأ الجملة كاملة بصوت عالٍ في كل مرة." },
      items: [
        { q: { en: "Choose: The boy (run / runs) to school every day.", ar: "Choose: The boy (run / runs) to school every day." }, a: { en: "runs", ar: "runs" } },
        { q: { en: "Choose the past tense: Yesterday we (sail / sailed) on the creek.", ar: "Choose the past tense: Yesterday we (sail / sailed) on the creek." }, a: { en: "sailed", ar: "sailed" } },
        { q: { en: "Write the past tense of: eat, fly, buy.", ar: "Write the past tense of: eat, fly, buy." }, a: { en: "ate, flew, bought", ar: "ate, flew, bought" } },
        { q: { en: "Underline the adjective: The tall tower sparkled at night.", ar: "Underline the adjective: The tall tower sparkled at night." }, a: { en: "tall", ar: "tall" } },
        { q: { en: "Choose the adverb that fits: The camel walked (slow / slowly) across the dunes.", ar: "Choose the adverb that fits: The camel walked (slow / slowly) across the dunes." }, a: { en: "slowly", ar: "slowly" } },
        { q: { en: "Choose the right word: (Their / There / They're) going to the museum on Saturday.", ar: "Choose the right word: (Their / There / They're) going to the museum on Saturday." }, a: { en: "They're (they are)", ar: "They're (they are)" } },
        { q: { en: "Choose the pronoun: Salma and I like maths. (We / Us) like it a lot.", ar: "Choose the pronoun: Salma and I like maths. (We / Us) like it a lot." }, a: { en: "We", ar: "We" } }
      ]
    }
  },

  "lu.35.wri": {
    reviewed: { en: false, ar: false },
    activities: [
      {
        en: { title: "Plan, write, improve", text: "Choose a topic your child knows well, such as a day at the beach or a family meal. Plan it in four boxes: a topic sentence, three details, and a closing sentence. Write one paragraph from the plan. Read it aloud and ask what word or sentence could be stronger. Change two things, then copy it neatly." },
        ar: { title: "نخطط ونكتب ونحسّن", text: "اختر موضوعًا يعرفه طفلك جيدًا، مثل يوم على الشاطئ أو وجبة عائلية. خططا له في أربعة مربعات: جملة الموضوع، وثلاث تفاصيل، وجملة ختام. واكتب فقرة واحدة من الخطة. اقرأها بصوت عالٍ واسأل: أي كلمة أو جملة يمكن أن تكون أقوى؟ غيّر شيئين ثم انسخها بخط مرتب." }
      },
      {
        en: { title: "Five senses place", text: "Describe a place using the five senses: the souq, the date farm, a creek boat ride, the beach at sunset. Make five columns (see, hear, smell, touch, taste) and fill each with a short exact phrase, such as the clink of small tea glasses. Then use three of the phrases in a paragraph. Exact words beat general words such as nice." },
        ar: { title: "مكان بالحواس الخمس", text: "صِفا مكانًا باستخدام الحواس الخمس: السوق أو مزرعة النخيل أو رحلة قارب في الخور أو الشاطئ عند الغروب. ارسما خمسة أعمدة (أرى، أسمع، أشمّ، ألمس، أتذوق) واملآ كل عمود بعبارة قصيرة دقيقة، مثل رنين كؤوس الشاي الصغيرة. ثم استخدما ثلاث عبارات في فقرة. فالكلمات الدقيقة أفضل من الكلمات العامة مثل جميل." }
      },
      {
        en: { title: "A real letter", text: "Help your child write a real letter or email to a grandparent, a friend abroad or the teacher: a greeting, three sentences about what has happened, one question, and a closing. Write a first draft, check it with a reader's eyes, and then send it. Writing for a real reader gives the effort a purpose." },
        ar: { title: "رسالة حقيقية", text: "ساعد طفلك على كتابة رسالة أو بريد إلكتروني حقيقي إلى جد أو جدة أو صديق في الخارج أو المعلم: تحية، وثلاث جمل عمّا حدث، وسؤال واحد، وخاتمة. اكتب مسودة أولى وراجعها بعين القارئ ثم أرسلها. فالكتابة لقارئ حقيقي تمنح الجهد هدفًا." }
      }
    ],
    example: {
      en: { question: "Make this sentence more exact: The food was good.", steps: ["Ask: what food? What was good about it, and how did it taste?", "Replace good with a precise word, and add one detail.", "For example: The warm, sweet dates melted on my tongue."], answer: "The warm, sweet dates melted on my tongue." },
      ar: { question: "Make this sentence more exact: The food was good.", steps: ["اسأل: أي طعام؟ وما الجيد فيه، وكيف كان مذاقه؟", "استبدل كلمة good بكلمة دقيقة وأضف تفصيلة واحدة.", "مثال: The warm, sweet dates melted on my tongue."], answer: "The warm, sweet dates melted on my tongue." }
    },
    sheet: {
      englishOnly: true,
      title: { en: "Writing well", ar: "الكتابة الجيدة" },
      instructions: { en: "Choose the best answer or write your own. Read your writing aloud before you finish.", ar: "اختر أفضل جواب أو اكتب جوابك. واقرأ ما كتبت بصوت عالٍ قبل أن تنتهي." },
      items: [
        { q: { en: "Which is the best topic sentence for a paragraph about a visit to the beach? (a) I like many things. (b) Our Saturday at the beach was full of surprises. (c) Water is wet.", ar: "Which is the best topic sentence for a paragraph about a visit to the beach? (a) I like many things. (b) Our Saturday at the beach was full of surprises. (c) Water is wet." }, a: { en: "(b)", ar: "(b)" } },
        { q: { en: "Put in order: (a) Finally, we packed up and went home. (b) First, we found a shady spot. (c) Then we built a sandcastle.", ar: "Put in order: (a) Finally, we packed up and went home. (b) First, we found a shady spot. (c) Then we built a sandcastle." }, a: { en: "b, c, a", ar: "b, c, a" } },
        { q: { en: "Replace walked with a stronger verb: The boy walked quickly to the bus.", ar: "Replace walked with a stronger verb: The boy walked quickly to the bus." }, a: { en: "Any strong verb, such as hurried, rushed or dashed.", ar: "Any strong verb, such as hurried, rushed or dashed." } },
        { q: { en: "Which sentence does not belong? The souq is busy in the evening. Lanterns hang above the stalls. My brother likes football. The air smells of spices.", ar: "Which sentence does not belong? The souq is busy in the evening. Lanterns hang above the stalls. My brother likes football. The air smells of spices." }, a: { en: "My brother likes football.", ar: "My brother likes football." } },
        { q: { en: "Add a joining word: We wanted to swim, ______ the sea was too rough.", ar: "Add a joining word: We wanted to swim, ______ the sea was too rough." }, a: { en: "but", ar: "but" } },
        { q: { en: "Write a good closing sentence for a paragraph about a family trip to a date farm.", ar: "Write a good closing sentence for a paragraph about a family trip to a date farm." }, a: { en: "Any sentence that wraps up the paragraph, such as: It was a day we will always remember.", ar: "Any sentence that wraps up the paragraph, such as: It was a day we will always remember." } },
        { q: { en: "Write two sentences describing your favourite place, using at least two of the five senses.", ar: "Write two sentences describing your favourite place, using at least two of the five senses." }, a: { en: "Any two sentences with two senses. Look for exact words and a clear picture.", ar: "Any two sentences with two senses. Look for exact words and a clear picture." } }
      ]
    }
  },

  "lu.35.bal": {
    reviewed: { en: false, ar: false },
    activities: [
      {
        en: { title: "Postcard Friday", text: "Once a week, write a short postcard together to a friend or relative: three or four sentences about what happened this week. Before you send it, check it in three ways: capital letters and full stops, a verb that matches its subject, and one sentence made stronger. Keep copies in a folder and watch the writing improve over time." },
        ar: { title: "بطاقة بريدية كل جمعة", text: "مرة كل أسبوع اكتبا معًا بطاقة بريدية قصيرة إلى صديق أو قريب: ثلاث أو أربع جمل عمّا حدث هذا الأسبوع. وقبل إرسالها افحصاها بثلاث طرق: الأحرف الكبيرة والنقاط، وفعل يتفق مع فاعله، وجملة واحدة تجعلانها أقوى. واحتفظا بنسخ في مجلد وراقبا تحسّن الكتابة مع الوقت." }
      },
      {
        en: { title: "Edit a paragraph together", text: "Write or find a paragraph with a few errors of different kinds: spelling, punctuation and grammar. Read it aloud so that your child hears where it sounds wrong. Take turns to find and fix each error, and say the rule that helped: for example, a name needs a capital letter." },
        ar: { title: "نحرّر فقرة معًا", text: "اكتب أو اعثر على فقرة فيها بضعة أخطاء من أنواع مختلفة: إملاء وترقيم وقواعد. اقرأها بصوت عالٍ ليسمع طفلك الموضع الذي يبدو خاطئًا. وتناوبا على إيجاد كل خطأ وتصحيحه مع ذكر القاعدة التي ساعدت، مثل: الاسم يحتاج إلى حرف كبير." }
      },
      {
        en: { title: "Word of the week", text: "Each week, choose one interesting word, such as magnificent, curious or generous. Look up what it means, say it three times, and use it in a sentence every day: at breakfast, in a note, in a story. By the end of the week it will feel like your child's own word." },
        ar: { title: "كلمة الأسبوع", text: "اختر في كل أسبوع كلمة مميزة واحدة مثل magnificent أو curious أو generous. ابحثا عن معناها وانطقاها ثلاث مرات واستخدماها في جملة كل يوم: على الفطور، أو في رسالة، أو في قصة. وبنهاية الأسبوع تصبح الكلمة كأنها كلمة طفلك الخاصة." }
      }
    ],
    example: {
      en: { question: "Fix the mistakes: yesterday me and layla goes to the library we borrow three book", steps: ["Capital letters: Yesterday, Layla, and the first word.", "Use I for the speaker: Layla and I.", "Past tense: went, borrowed. Plural: books.", "Full stop and capital after library."], answer: "Yesterday Layla and I went to the library. We borrowed three books." },
      ar: { question: "Fix the mistakes: yesterday me and layla goes to the library we borrow three book", steps: ["الأحرف الكبيرة: Yesterday وLayla وأول كلمة.", "نستخدم I للمتكلم: Layla and I.", "الماضي: went وborrowed. والجمع: books.", "نقطة وحرف كبير بعد library."], answer: "Yesterday Layla and I went to the library. We borrowed three books." }
    },
    sheet: {
      englishOnly: true,
      title: { en: "A little of every kind of language", ar: "قليل من كل أنواع اللغة" },
      instructions: { en: "Do each task, then read your answer aloud.", ar: "أنجز كل مهمة ثم اقرأ إجابتك بصوت عالٍ." },
      items: [
        { q: { en: "Add capital letters and a full stop: my friend khalid lives in sharjah", ar: "Add capital letters and a full stop: my friend khalid lives in sharjah" }, a: { en: "My friend Khalid lives in Sharjah.", ar: "My friend Khalid lives in Sharjah." } },
        { q: { en: "Choose: The children (is / are) playing in the garden.", ar: "Choose: The children (is / are) playing in the garden." }, a: { en: "are", ar: "are" } },
        { q: { en: "Which is spelled correctly? (a) beautifull (b) beautiful (c) beutiful", ar: "Which is spelled correctly? (a) beautifull (b) beautiful (c) beutiful" }, a: { en: "(b) beautiful", ar: "(b) beautiful" } },
        { q: { en: "Add the apostrophe: Mariams book is on the table.", ar: "Add the apostrophe: Mariams book is on the table." }, a: { en: "Mariam's book is on the table.", ar: "Mariam's book is on the table." } },
        { q: { en: "Join with because: I wore a hat. The sun was very strong.", ar: "Join with because: I wore a hat. The sun was very strong." }, a: { en: "I wore a hat because the sun was very strong.", ar: "I wore a hat because the sun was very strong." } },
        { q: { en: "Write one sentence about last weekend, with a capital letter, a full stop and a past-tense verb.", ar: "Write one sentence about last weekend, with a capital letter, a full stop and a past-tense verb." }, a: { en: "Any correct sentence, such as: We visited my grandparents on Saturday.", ar: "Any correct sentence, such as: We visited my grandparents on Saturday." } }
      ]
    }
  }
,

  "sc.35.bio": {
    reviewed: { en: false, ar: false },
    activities: [
      {
        en: { title: "Plant parts walk", text: "Visit a date palm, a garden, a park or even a herb pot on the balcony. Find the roots (which drink water and hold the plant), the stem or trunk (which carries water up and holds the plant tall), the leaves (which use sunlight to make food) and the fruit or flower (which makes seeds). Ask your child to draw one plant and label its four parts with what each part does." },
        ar: { title: "جولة في أجزاء النبات", text: "زورا نخلة أو حديقة أو منتزهًا، أو حتى وعاء أعشاب على الشرفة. ابحثا عن الجذور (التي تشرب الماء وتثبّت النبات) والساق أو الجذع (الذي ينقل الماء إلى أعلى ويُبقي النبات منتصبًا) والأوراق (التي تستخدم ضوء الشمس لصنع الغذاء) والثمرة أو الزهرة (التي تصنع البذور). اطلب من طفلك رسم نبات وتسمية أجزائه الأربعة مع وظيفة كل جزء." }
      },
      {
        en: { title: "Built for the desert", text: "Choose a desert animal such as a camel, an Arabian oryx, a gecko or a desert fox, and find out how its body helps it live where it is hot and dry. For example, a camel has wide feet that do not sink in sand and long eyelashes that keep sand out of its eyes. Make a table with three columns: the part of the body, what it does, and why that helps in the desert." },
        ar: { title: "مصمَّم للصحراء", text: "اختر حيوانًا صحراويًا مثل الجمل أو المها العربي أو الوزغ أو ثعلب الصحراء، وابحثا كيف يساعده جسمه على العيش حيث الحر والجفاف. مثلًا للجمل أقدام عريضة لا تغوص في الرمل ورموش طويلة تحمي عينيه من الرمل. اصنعا جدولًا بثلاثة أعمدة: جزء الجسم، وماذا يفعل، ولماذا يفيد في الصحراء." }
      },
      {
        en: { title: "A food chain at the creek", text: "Draw a food chain for a mangrove or creek in the Emirates: sunlight, then a mangrove leaf, then a small crab, then a heron. Use arrows to show which way the energy goes (the arrow points to the one that eats). Ask your child which one is the producer (it makes its own food), which are consumers, and what would happen if the crabs disappeared." },
        ar: { title: "سلسلة غذائية في الخور", text: "ارسما سلسلة غذائية لأشجار القرم أو الخور في الإمارات: ضوء الشمس ثم ورقة القرم ثم سلطعون صغير ثم مالك الحزين. استخدما الأسهم لإظهار اتجاه الطاقة (يشير السهم إلى الآكل). واسأل طفلك: من المنتِج (يصنع غذاءه بنفسه)؟ ومن المستهلكون؟ وماذا يحدث لو اختفت السلاطعين؟" }
      }
    ],
    example: {
      en: { question: "In this food chain: mangrove leaf, crab, heron. Which is the producer? Which is a consumer? What does an arrow mean?", steps: ["A producer makes its own food from sunlight: the mangrove.", "Consumers eat other living things: the crab eats the leaf, the heron eats the crab.", "An arrow shows the direction energy moves, from the food to the one that eats it."], answer: "Producer: mangrove. Consumers: crab and heron. The arrow shows the energy moving to the eater." },
      ar: { question: "في هذه السلسلة الغذائية: ورقة القرم، السلطعون، مالك الحزين. من المنتِج؟ ومن المستهلك؟ وماذا يعني السهم؟", steps: ["المنتِج يصنع غذاءه بنفسه من ضوء الشمس: شجرة القرم.", "المستهلكون يأكلون كائنات حية أخرى: السلطعون يأكل الورقة ومالك الحزين يأكل السلطعون.", "السهم يبيّن اتجاه انتقال الطاقة من الغذاء إلى من يأكله."], answer: "المنتِج: القرم. المستهلكان: السلطعون ومالك الحزين. والسهم يبيّن انتقال الطاقة إلى الآكل." }
    },
    sheet: {
      title: { en: "Living things", ar: "الكائنات الحية" },
      instructions: { en: "Think about what each living thing needs to live and grow. Draw a quick picture if it helps.", ar: "فكّر فيما يحتاجه كل كائن حي ليعيش وينمو. وارسم رسمًا سريعًا إن ساعدك ذلك." },
      items: [
        { q: { en: "Which part of a plant takes in water from the soil?", ar: "أي جزء من النبات يمتص الماء من التربة؟" }, a: { en: "The roots", ar: "الجذور" } },
        { q: { en: "What do the leaves of a plant use to make food?", ar: "ماذا تستخدم أوراق النبات لصنع الغذاء؟" }, a: { en: "Sunlight (with air and water)", ar: "ضوء الشمس (مع الهواء والماء)" } },
        { q: { en: "A camel has wide, flat feet. How does that help it in the desert?", ar: "للجمل أقدام عريضة مسطحة. كيف يفيده ذلك في الصحراء؟" }, a: { en: "They spread its weight so it does not sink in the soft sand.", ar: "توزع وزنه فلا يغوص في الرمل الناعم." } },
        { q: { en: "In the food chain sunlight, grass, oryx, which is the producer?", ar: "في السلسلة الغذائية: ضوء الشمس، العشب، المها. من المنتِج؟" }, a: { en: "The grass", ar: "العشب" } },
        { q: { en: "Put these in order for a sea turtle's life: hatchling, egg, adult, young turtle.", ar: "رتّب مراحل حياة السلحفاة البحرية: فقّس صغير، بيضة، بالغة، سلحفاة يافعة." }, a: { en: "Egg, hatchling, young turtle, adult", ar: "بيضة، فقّس صغير، سلحفاة يافعة، بالغة" } },
        { q: { en: "Name two things every animal needs to stay alive.", ar: "اذكر شيئين يحتاجهما كل حيوان ليبقى حيًا." }, a: { en: "Any two of: food, water, air, shelter", ar: "أي شيئين من: الغذاء، الماء، الهواء، المأوى" } },
        { q: { en: "Flamingos wade in shallow water and eat tiny creatures. Which body part helps them: long legs or thick fur?", ar: "يخوض الفلامنغو في الماء الضحل ويأكل مخلوقات صغيرة. أي جزء يساعده: الأرجل الطويلة أم الفراء السميك؟" }, a: { en: "Long legs", ar: "الأرجل الطويلة" } }
      ]
    }
  },

  "sc.35.ear": {
    reviewed: { en: false, ar: false },
    activities: [
      {
        en: { title: "Shadow tracker", text: "On a sunny day stand a stick or a pencil in a ball of modelling clay on a flat sheet of paper outdoors. Trace the shadow and write the time at 9 am, 12 noon and 3 pm. Ask your child: how does the length and direction change, and why? Help them explain that the Earth spins once a day, so the Sun seems to move across the sky." },
        ar: { title: "متتبّع الظل", text: "في يوم مشمس ثبّت عودًا أو قلم رصاص في كرة من الصلصال فوق ورقة مسطحة في الخارج. ارسما حدود الظل واكتبا الوقت عند 9 صباحًا و12 ظهرًا و3 عصرًا. واسأل طفلك: كيف يتغيّر طول الظل واتجاهه ولماذا؟ وساعده على تفسير ذلك بأن الأرض تدور مرة كل يوم فتبدو الشمس وكأنها تتحرك عبر السماء." }
      },
      {
        en: { title: "Moon diary", text: "For two weeks, look at the moon each evening and draw its shape on a calendar. Ask your child to notice how the lit part grows and shrinks, and to guess what the next shape will be. The Moon does not make its own light. It reflects sunlight, and the shape we see depends on how much of the lit half faces us." },
        ar: { title: "يوميات القمر", text: "لمدة أسبوعين انظرا إلى القمر كل مساء وارسما شكله على تقويم. اطلب من طفلك أن يلاحظ كيف يكبر الجزء المضيء ويصغر، وأن يتوقع الشكل التالي. فالقمر لا يصنع ضوءه بنفسه، بل يعكس ضوء الشمس، والشكل الذي نراه يعتمد على مقدار النصف المضيء المواجه لنا." }
      },
      {
        en: { title: "Water and wind change the land", text: "Pour a little water over a pile of sand in a tray and watch it carve a channel, then blow gently across the sand and watch it move. Talk about how wind shapes sand dunes in the desert, and how rain over time has worn the rocks of the Hajar mountains. Ask your child: which changes are fast, and which take thousands of years?" },
        ar: { title: "الماء والرياح يغيّران الأرض", text: "اسكب قليلًا من الماء على كومة رمل في صينية وراقب كيف يحفر مجرى، ثم انفخ برفق على الرمل وراقب حركته. وتحدثا عن كيف تشكّل الرياح الكثبان الرملية في الصحراء، وكيف أن المطر على مدى الزمن نحت صخور جبال الحجر. اسأل طفلك: أي التغيرات سريعة، وأيها يستغرق آلاف السنين؟" }
      }
    ],
    example: {
      en: { question: "Why does the Sun seem to rise in the morning and set in the evening?", steps: ["The Sun is not really moving across our sky.", "The Earth spins like a top, one full turn in about 24 hours.", "As our part of the Earth turns toward the Sun it is day, and as it turns away it is night."], answer: "Because the Earth spins once a day" },
      ar: { question: "لماذا تبدو الشمس وكأنها تشرق صباحًا وتغرب مساءً؟", steps: ["الشمس لا تتحرك فعلًا عبر سمائنا.", "الأرض تدور كالدوّامة، دورة كاملة في نحو 24 ساعة.", "وعندما يدور جزؤنا من الأرض نحو الشمس يكون نهارًا، وعندما يدور بعيدًا عنها يكون ليلًا."], answer: "لأن الأرض تدور حول نفسها مرة كل يوم" }
    },
    sheet: {
      title: { en: "Earth and space", ar: "الأرض والفضاء" },
      instructions: { en: "Think about what you have seen in the sky and on the land. Explain each answer in a full sentence if you can.", ar: "فكّر فيما رأيته في السماء وعلى الأرض. اشرح كل جواب في جملة كاملة إن استطعت." },
      items: [
        { q: { en: "What causes day and night?", ar: "ما سبب تعاقب الليل والنهار؟" }, a: { en: "The Earth spinning on its axis once every 24 hours", ar: "دوران الأرض حول محورها مرة كل 24 ساعة" } },
        { q: { en: "At which time is a shadow shortest on a sunny day: morning, noon or evening?", ar: "في أي وقت يكون الظل أقصر في يوم مشمس: الصباح أم الظهر أم المساء؟" }, a: { en: "Noon", ar: "الظهر" } },
        { q: { en: "Does the Moon make its own light?", ar: "هل يصنع القمر ضوءه بنفسه؟" }, a: { en: "No. It reflects light from the Sun.", ar: "لا. بل يعكس ضوء الشمس." } },
        { q: { en: "The UAE's Hope Probe travels around Mars. Which is the planet closer to the Sun: Earth or Mars?", ar: "يدور مسبار الأمل الإماراتي حول المريخ. أي الكوكبين أقرب إلى الشمس: الأرض أم المريخ؟" }, a: { en: "Earth", ar: "الأرض" } },
        { q: { en: "Name one thing that wears down rock over a long time.", ar: "اذكر شيئًا يفتّت الصخور على مدى زمن طويل." }, a: { en: "Wind, water or rain (or ice)", ar: "الرياح أو الماء أو المطر (أو الجليد)" } },
        { q: { en: "Rain falls, then runs into the sea, then rises as vapour and makes clouds. What is this called?", ar: "يهطل المطر ثم يجري إلى البحر ثم يصعد بخارًا ويكوّن السحب. ماذا نسمي ذلك؟" }, a: { en: "The water cycle", ar: "دورة الماء" } },
        { q: { en: "How long does the Earth take to go once around the Sun?", ar: "كم تستغرق الأرض لتدور دورة كاملة حول الشمس؟" }, a: { en: "About one year (365 days)", ar: "نحو سنة واحدة (365 يومًا)" } }
      ]
    }
  },

  "sc.35.phy": {
    reviewed: { en: false, ar: false },
    activities: [
      {
        en: { title: "Solid, liquid or gas?", text: "Put an ice cube in a dish in the shade and another in a dish in the sun, and time how long each takes to melt. Ask your child to predict first, then explain: heat from the Sun gives the particles energy so they move apart and the solid becomes a liquid. Next, sort ten things around the home into solid, liquid or gas, and talk about what happens to water when it boils or freezes." },
        ar: { title: "صلب أم سائل أم غاز؟", text: "ضع مكعب ثلج في طبق في الظل وآخر في طبق تحت الشمس، وقِس الزمن الذي يستغرقه كل منهما ليذوب. اطلب من طفلك أن يتوقع أولًا ثم يفسّر: حرارة الشمس تعطي الجسيمات طاقة فتبتعد عن بعضها ويتحول الصلب إلى سائل. ثم صنّفا عشرة أشياء في البيت إلى صلب وسائل وغاز، وتحدثا عمّا يحدث للماء عند الغليان أو التجمّد." }
      },
      {
        en: { title: "Ramp and friction", text: "Make a ramp from a tray or a piece of cardboard propped on books. Let a toy car roll down onto a smooth floor, then onto a towel, and measure how far it travels each time. Ask: why did it stop sooner on the towel? Introduce the word friction, a force that slows things that rub together. Change one thing at a time, such as the height of the ramp, to keep the test fair." },
        ar: { title: "منحدر واحتكاك", text: "اصنع منحدرًا من صينية أو قطعة كرتون مسنودة على كتب. اترك سيارة لعبة تنزلق عليه إلى أرضية ملساء ثم إلى منشفة، وقِس المسافة التي تقطعها في كل مرة. اسأل: لماذا توقفت أسرع على المنشفة؟ وعرّف كلمة الاحتكاك: قوة تبطئ الأشياء التي تحتك ببعضها. وغيّر شيئًا واحدًا في كل مرة، كارتفاع المنحدر، ليبقى الاختبار عادلًا." }
      },
      {
        en: { title: "Sun power", text: "Wrap one jar in black paper and leave another in plain white or clear, each with the same amount of water, in the sun for an hour. Safely feel or measure which water is warmer. Talk about why the UAE uses solar panels, such as the large solar parks in the desert, to turn sunlight into electricity, and why dark surfaces take in more heat." },
        ar: { title: "طاقة الشمس", text: "لفّ وعاءً بورق أسود واترك وعاءً آخر أبيض أو شفافًا، في كل منهما كمية الماء نفسها، تحت الشمس ساعة. تحسّسا أو قيسا بأمان أي الماءين أدفأ. وتحدثا عن سبب استخدام الإمارات للألواح الشمسية، كالمحطات الشمسية الكبيرة في الصحراء، لتحويل ضوء الشمس إلى كهرباء، ولماذا تمتص الأسطح الداكنة حرارة أكثر." }
      }
    ],
    example: {
      en: { question: "A toy car rolls 80 cm on a smooth floor and 30 cm on a towel. Why did it go less far on the towel?", steps: ["The car, the ramp and the push were the same, so the surface made the difference.", "A rough surface like a towel has more friction.", "Friction is a force that opposes movement, so it slows the car sooner."], answer: "The towel has more friction, which slows the car" },
      ar: { question: "تدحرجت سيارة لعبة 80 سم على أرضية ملساء و30 سم على منشفة. لماذا قطعت مسافة أقل على المنشفة؟", steps: ["السيارة والمنحدر والدفعة كانت نفسها، فالسطح هو الذي صنع الفرق.", "السطح الخشن كالمنشفة فيه احتكاك أكبر.", "الاحتكاك قوة تعاكس الحركة، لذا يبطئ السيارة أسرع."], answer: "المنشفة فيها احتكاك أكبر يبطئ السيارة" }
    },
    sheet: {
      title: { en: "Matter, forces and energy", ar: "المادة والقوى والطاقة" },
      instructions: { en: "Use what you have seen and tried. Give a reason for each answer.", ar: "استعن بما رأيته وجرّبته. واذكر سببًا لكل جواب." },
      items: [
        { q: { en: "Name the three states of matter.", ar: "اذكر حالات المادة الثلاث." }, a: { en: "Solid, liquid and gas", ar: "الصلبة والسائلة والغازية" } },
        { q: { en: "What happens to an ice cube left in the sun? What is this called?", ar: "ماذا يحدث لمكعب ثلج تُرك تحت الشمس؟ وماذا نسمي ذلك؟" }, a: { en: "It becomes water. This is melting.", ar: "يتحول إلى ماء. ونسمي ذلك الانصهار (الذوبان)." } },
        { q: { en: "Is a push or a pull needed to open a drawer? Which one closes it?", ar: "هل نحتاج دفعًا أم سحبًا لفتح درج؟ وأيهما يغلقه؟" }, a: { en: "A pull opens it, and a push closes it.", ar: "السحب يفتحه والدفع يغلقه." } },
        { q: { en: "Which surface has more friction: smooth tile or a rough carpet?", ar: "أي سطح فيه احتكاك أكبر: بلاط أملس أم سجاد خشن؟" }, a: { en: "The rough carpet", ar: "السجاد الخشن" } },
        { q: { en: "Name an energy source that comes from the Sun and is used in the UAE to make electricity.", ar: "اذكر مصدر طاقة يأتي من الشمس وتستخدمه الإمارات لتوليد الكهرباء." }, a: { en: "Solar energy (solar panels)", ar: "الطاقة الشمسية (الألواح الشمسية)" } },
        { q: { en: "Which is warmer after an hour in the sun: a black bottle or a white bottle of water?", ar: "أي زجاجة ماء أدفأ بعد ساعة تحت الشمس: السوداء أم البيضاء؟" }, a: { en: "The black bottle, because dark things take in more heat", ar: "السوداء، لأن الأشياء الداكنة تمتص حرارة أكثر" } },
        { q: { en: "A magnet picks up a steel paper clip but not a plastic ruler. What does this tell you?", ar: "يلتقط مغناطيس مشبك ورق فولاذيًا ولا يلتقط مسطرة بلاستيكية. ماذا يخبرك ذلك؟" }, a: { en: "Magnets attract some materials, such as iron and steel, but not others, such as plastic.", ar: "المغناطيس يجذب بعض المواد كالحديد والفولاذ ولا يجذب غيرها كالبلاستيك." } }
      ]
    }
  },

  "sc.35.bal": {
    reviewed: { en: false, ar: false },
    activities: [
      {
        en: { title: "A fair test at home", text: "Choose a simple question, such as: does a plant grow better with light or in a dark cupboard? Plant two identical seeds in two identical pots with the same soil and water. Change only one thing (the light), measure the shoots every two days in centimetres and record in a table. Ask: what did we keep the same, and why does that make the test fair?" },
        ar: { title: "اختبار عادل في البيت", text: "اختارا سؤالًا بسيطًا، مثل: هل ينمو النبات أفضل في الضوء أم في خزانة مظلمة؟ ازرعا بذرتين متطابقتين في وعاءين متطابقين بالتربة والماء نفسيهما. غيّرا شيئًا واحدًا فقط (الضوء) وقيسا الشتلات كل يومين بالسنتيمتر وسجّلا في جدول. واسأل: ما الذي أبقيناه ثابتًا ولماذا يجعل ذلك الاختبار عادلًا؟" }
      },
      {
        en: { title: "Kitchen science", text: "Cooking is full of science. Watch what happens when sugar dissolves in warm water, when a pan of water boils and steams, or when dates left on a tray dry in the sun. Ask your child to say what changed and whether the change can be undone (dissolving can be undone by drying the water away, but toast cannot be turned back into bread). Always do the hot parts with an adult." },
        ar: { title: "علوم المطبخ", text: "الطبخ مليء بالعلوم. راقبا ما يحدث عندما يذوب السكر في ماء دافئ، أو عندما يغلي ماء في إناء ويتصاعد البخار، أو عندما يجف التمر المنشور على صينية تحت الشمس. اطلب من طفلك أن يقول ما الذي تغيّر وهل يمكن عكس التغيّر (الذوبان يمكن عكسه بتبخير الماء، أما الخبز المحمّص فلا يعود خبزًا عاديًا). وليكن الجزء الساخن دائمًا مع شخص بالغ." }
      },
      {
        en: { title: "The science diary", text: "Keep a small notebook for a week. Each day write down one thing you noticed in nature or around the house and one question it made you ask: why is the shadow longer today, why did the puddle vanish? Choose one question and find the answer together in a book or from someone who knows. Curious questions are the heart of science." },
        ar: { title: "يوميات العلوم", text: "احتفظا بدفتر صغير لمدة أسبوع. اكتبا كل يوم شيئًا لاحظتماه في الطبيعة أو في البيت وسؤالًا أثاره: لماذا الظل أطول اليوم؟ ولماذا اختفت البركة؟ اختارا سؤالًا واحدًا وابحثا عن إجابته معًا في كتاب أو عند من يعرف. فالأسئلة الفضولية هي قلب العلوم." }
      }
    ],
    example: {
      en: { question: "Salma tests whether warm or cold water dissolves sugar faster. She uses 100 ml of water and one spoon of sugar each time. What must she keep the same, and what does she change?", steps: ["Change only one thing: the temperature of the water.", "Keep the rest the same: 100 ml of water, one spoon of sugar, the same stirring.", "Then any difference in speed is because of the temperature."], answer: "She changes the water temperature and keeps the amounts and stirring the same" },
      ar: { question: "تختبر سلمى هل يذيب الماء الدافئ أم البارد السكر أسرع. تستخدم 100 مل من الماء وملعقة سكر في كل مرة. ما الذي يجب أن تبقيه ثابتًا وما الذي تغيّره؟", steps: ["تغيّر شيئًا واحدًا فقط: درجة حرارة الماء.", "وتُبقي الباقي ثابتًا: 100 مل ماء وملعقة سكر ونفس طريقة التحريك.", "فيكون أي فرق في السرعة بسبب درجة الحرارة."], answer: "تغيّر درجة حرارة الماء وتُبقي الكميات والتحريك ثابتة" }
    },
    sheet: {
      title: { en: "A little of every kind of science", ar: "قليل من كل أنواع العلوم" },
      instructions: { en: "Answer each question and say how you know.", ar: "أجب عن كل سؤال وقل كيف عرفت." },
      items: [
        { q: { en: "Which part of a plant makes seeds: the root or the flower?", ar: "أي جزء من النبات يصنع البذور: الجذر أم الزهرة؟" }, a: { en: "The flower", ar: "الزهرة" } },
        { q: { en: "What is the Moon: a star, a planet or a moon that orbits the Earth?", ar: "ما القمر: نجم أم كوكب أم تابع يدور حول الأرض؟" }, a: { en: "A moon that orbits the Earth", ar: "تابع يدور حول الأرض" } },
        { q: { en: "Is steam a solid, a liquid or a gas?", ar: "هل البخار صلب أم سائل أم غاز؟" }, a: { en: "A gas (water vapour)", ar: "غاز (بخار الماء)" } },
        { q: { en: "In an experiment about plant growth and light, what should be the same in both pots?", ar: "في تجربة عن نمو النبات والضوء، ما الذي يجب أن يكون نفسه في الوعاءين؟" }, a: { en: "The soil, the water, the size of the pot and the seed", ar: "التربة والماء وحجم الوعاء والبذرة" } },
        { q: { en: "Which way does a magnet's pull work: it attracts all metals or only some?", ar: "كيف يعمل جذب المغناطيس: يجذب كل المعادن أم بعضها فقط؟" }, a: { en: "Only some, such as iron and steel", ar: "بعضها فقط، كالحديد والفولاذ" } },
        { q: { en: "Name one animal that lives in the desert and one body part that helps it there.", ar: "اذكر حيوانًا يعيش في الصحراء وجزءًا من جسمه يساعده هناك." }, a: { en: "Any sensible pair, such as a camel and its wide feet.", ar: "أي زوج منطقي، مثل الجمل وأقدامه العريضة." } }
      ]
    }
  }
};

if (typeof module !== "undefined" && module.exports) module.exports = FamilyActivities;
