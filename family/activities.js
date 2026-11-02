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
// Short builders, so a set reads as its content and not as its brackets.
//   T(en, ar)                         a text in both languages
//   act(titleEn, textEn, titleAr, textAr)   one activity
//   ex(questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr)   the worked example
//   it(questionEn, answerEn, questionAr, answerAr)   one practice question and its answer
//   en(question, answer)              a question that stays in English (reading, grammar)
const T = (en, ar) => ({ en, ar });
const act = (titleEn, textEn, titleAr, textAr) => ({ en: { title: titleEn, text: textEn }, ar: { title: titleAr, text: textAr } });
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const en = (question, answer) => it(question, answer, question, answer);

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
  },

  "ma.12.num": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Count the coins", "Put a small pile of AED 1 coins and a few AED 5 and AED 10 notes on the table. Ask your child to count them in ones, then in fives and tens. Ask: can you make AED 10 in three different ways? Let them play shopkeeper and give change from AED 10 for something that costs AED 6.", "نعدّ النقود", "ضع كومة صغيرة من عملات الدرهم الواحد وبعض أوراق الخمسة والعشرة دراهم على الطاولة. اطلب من طفلك عدّها بالآحاد ثم بالخمسات والعشرات. اسأل: هل تستطيع تكوين 10 دراهم بثلاث طرق مختلفة؟ ودعه يلعب دور البائع ويعطيك الباقي من 10 دراهم لشيء ثمنه 6 دراهم."),
      act("Tens and ones", "Collect 30 date stones, pebbles or buttons. Help your child put them in bags of ten, with a few left over, and say the number: 3 tens and 4 ones is 34. Ask them to make 46, then 58. Then ask what number is 10 more than 34, and 10 less. The pattern in the tens digit is the secret.", "عشرات وآحاد", "اجمع 30 نواة تمر أو حصاة أو زرًّا. ساعد طفلك على وضعها في أكياس من عشرة مع بقاء بعضها، وقل العدد: 3 عشرات و4 آحاد هي 34. اطلب منه تكوين 46 ثم 58. ثم اسأل: ما العدد الذي يزيد عن 34 بعشرة؟ وما الذي ينقص عنه بعشرة؟ سرّ الأمر في تغيّر رقم العشرات."),
      act("Number line hops", "Draw a long number line from 0 to 20 on the ground with chalk. Your child stands on 6, then hops forward 5 and says where they land. Hop back 3. Ask them to say the number sentence aloud: 6 plus 5 is 11. Switch, and let them give you the hops.", "قفزات على خط الأعداد", "ارسم بالطباشير على الأرض خط أعداد طويلًا من 0 إلى 20. يقف طفلك عند 6 ثم يقفز 5 خطوات إلى الأمام ويقول أين هبط. ثم يقفز 3 إلى الخلف. اطلب منه أن يقول الجملة العددية بصوت عالٍ: 6 زائد 5 يساوي 11. ثم بدّلا الأدوار ودعه يعطيك القفزات.")
    ],
    example: ex("What is 34 + 20?", ["Split 34 into 3 tens and 4 ones.", "Add 2 more tens: 3 tens + 2 tens = 5 tens.", "The ones stay the same: 4 ones.", "So 5 tens and 4 ones is 54."], "54", "ما ناتج 34 + 20؟", ["نقسم 34 إلى 3 عشرات و4 آحاد.", "نضيف عشرتين: 3 عشرات + عشرتان = 5 عشرات.", "تبقى الآحاد كما هي: 4 آحاد.", "إذن 5 عشرات و4 آحاد تساوي 54."], "54"),
    sheet: { title: T("Numbers to 100", "الأعداد حتى 100"), instructions: T("Use objects, fingers or a number line if you like. Say each answer aloud.", "استعن بأشياء أو بأصابعك أو بخط الأعداد إن شئت. وقل كل جواب بصوت عالٍ."), items: [
      it("What is 8 + 7?", "15", "ما ناتج 8 + 7؟", "15"),
      it("What is 20 - 6?", "14", "ما ناتج 20 - 6؟", "14"),
      it("How many tens and ones are in 47?", "4 tens and 7 ones", "كم عشرة وكم واحدًا في العدد 47؟", "4 عشرات و7 آحاد"),
      it("What number is 10 more than 52?", "62", "ما العدد الذي يزيد بعشرة عن 52؟", "62"),
      it("Which is greater: 38 or 83?", "83", "أيهما أكبر: 38 أم 83؟", "83"),
      it("Mariam has AED 10. She buys a banana for AED 4. How much does she have left?", "AED 6", "مع مريم 10 دراهم. اشترت موزة بـ 4 دراهم. كم بقي معها؟", "6 دراهم"),
      it("Count in fives: 5, 10, 15, __, __", "20 and 25", "عدّ بالخمسات: 5، 10، 15، __، __", "20 و25")
    ] }
  },

  "ma.12.alg": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Bead patterns", "Thread beads or lay out coloured pieces in a pattern, such as red, blue, blue, red, blue, blue. Ask your child to say the repeating part (the core) and to carry on for the next six. Then they make a pattern for you to continue. Describe it in words: two blue after every red.", "أنماط الخرز", "نظّم حبات خرز أو قطعًا ملونة في نمط، مثل أحمر، أزرق، أزرق، أحمر، أزرق، أزرق. اطلب من طفلك أن يقول الجزء المتكرر وأن يكمل الست التالية. ثم يصنع نمطًا لتكمله أنت. وصِفاه بالكلمات: أزرقان بعد كل أحمر."),
      act("The missing number", "Write number sentences with a gap and let your child fill it with a small drawing or a number: 5 + __ = 9, __ + 3 = 10, 12 - __ = 7. Use real things to help, such as dates in a bowl. Ask: how did you work it out? There are always several ways.", "العدد المفقود", "اكتب جملًا عددية فيها فراغ ودع طفلك يملؤه برسم صغير أو بعدد: 5 + __ = 9، و__ + 3 = 10، و12 - __ = 7. واستعن بأشياء حقيقية مثل تمر في وعاء. اسأل: كيف توصلت إلى الجواب؟ فهناك دائمًا أكثر من طريقة."),
      act("The seesaw", "Draw a seesaw on paper. Put 4 + 3 on one side and ask what number to put on the other side to make it balance. Try 10 on one side and 6 + __ on the other. The equals sign means both sides are the same amount, not just the answer comes next.", "الأرجوحة المتوازنة", "ارسم أرجوحة على ورقة. ضع 4 + 3 في أحد الجانبين واسأل: ما العدد الذي نضعه في الجانب الآخر ليتوازن؟ جرّب 10 في جانب و6 + __ في الجانب الآخر. فعلامة يساوي تعني أن الجانبين بالمقدار نفسه، وليست فقط أن الجواب يأتي بعدها.")
    ],
    example: ex("What comes next? 2, 4, 6, 8, __. And find the missing number: 5 + __ = 9.", ["Look at the jumps: 2 to 4 is 2 more, 4 to 6 is 2 more.", "The rule is add 2, so the next number is 8 + 2 = 10.", "For 5 + __ = 9, count up from 5 to 9: 6, 7, 8, 9. That is 4 steps.", "Check: 5 + 4 = 9."], "10, and the missing number is 4", "ما العدد التالي؟ 2، 4، 6، 8، __. وأوجد العدد المفقود: 5 + __ = 9.", ["ننظر إلى القفزات: من 2 إلى 4 زيادة 2، ومن 4 إلى 6 زيادة 2.", "القاعدة أضف 2، فالعدد التالي 8 + 2 = 10.", "في 5 + __ = 9 نعدّ من 5 إلى 9: 6، 7، 8، 9. أي 4 خطوات.", "نتحقق: 5 + 4 = 9."], "10 والعدد المفقود 4"),
    sheet: { title: T("Patterns and missing numbers", "الأنماط والأعداد المفقودة"), instructions: T("Say the rule before you answer.", "قل القاعدة قبل أن تجيب."), items: [
      it("Continue: 5, 10, 15, 20, __", "25 (add 5)", "أكمل: 5، 10، 15، 20، __", "25 (نضيف 5)"),
      it("Continue: 20, 18, 16, 14, __", "12 (take away 2)", "أكمل: 20، 18، 16، 14، __", "12 (ننقص 2)"),
      it("Find the missing number: 6 + __ = 10", "4", "أوجد العدد المفقود: 6 + __ = 10", "4"),
      it("Find the missing number: __ - 3 = 5", "8", "أوجد العدد المفقود: __ - 3 = 5", "8"),
      it("True or false: 4 + 5 = 5 + 4", "True", "صح أم خطأ: 4 + 5 = 5 + 4", "صح"),
      it("A pattern goes camel, palm, palm, camel, palm, palm. What comes next?", "camel", "نمط: جمل، نخلة، نخلة، جمل، نخلة، نخلة. ما التالي؟", "جمل"),
      it("Which is even: 7, 12 or 15?", "12", "أي هذه الأعداد زوجي: 7 أم 12 أم 15؟", "12")
    ] }
  },

  "ma.12.geo": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Shape detectives", "Look for flat shapes (circle, square, rectangle, triangle) and solid shapes (cube, ball, tin, box) at home and on a walk. A clock is a circle, a door is a rectangle, a tin is a cylinder. Ask your child to count the sides and corners of each flat shape and to tell you how they know.", "محققو الأشكال", "ابحثا عن أشكال مسطحة (دائرة ومربع ومستطيل ومثلث) وأشكال مجسمة (مكعب وكرة وعلبة وصندوق) في البيت وفي المشي. الساعة دائرة، والباب مستطيل، والعلبة أسطوانة. اطلب من طفلك عدّ أضلاع كل شكل مسطح وزواياه وأن يخبرك كيف عرف."),
      act("Measure with hands", "Measure a table or a sofa with hand spans, then with paper clips, then with a ruler in centimetres. Ask: why do we get different numbers? Talk about why a ruler is better for telling someone else the length. Predict first, measure second.", "نقيس بالأيدي", "قيسا طاولة أو أريكة بعدد الأشبار ثم بمشابك الورق ثم بمسطرة بالسنتيمتر. اسأل: لماذا حصلنا على أعداد مختلفة؟ وتحدثا عن سبب كون المسطرة أفضل لإخبار شخص آخر بالطول. توقعا أولًا ثم قيسا."),
      act("What time is it?", "Use a real clock or draw one. Show an o'clock time and a half past time each day, such as when school starts or when dinner is ready. Ask your child to put the short hand and the long hand in the right place. Ask them what they usually do at half past four.", "كم الساعة؟", "استخدما ساعة حقيقية أو ارسما واحدة. اعرض كل يوم وقتًا تامًّا ووقتًا ونصفًا، مثل بدء المدرسة أو موعد العشاء. اطلب من طفلك وضع العقرب القصير والطويل في مكانهما الصحيح. واسأله ماذا يفعل عادة عند الرابعة والنصف.")
    ],
    example: ex("A rectangle has how many sides and corners? And what time is it when the short hand points to 3 and the long hand to 12?", ["Count the sides of a rectangle: 4 sides.", "Count its corners: 4 corners.", "The long hand on 12 means o'clock.", "The short hand on 3 gives the hour: 3 o'clock."], "4 sides, 4 corners, and 3 o'clock", "كم ضلعًا وكم زاوية في المستطيل؟ وكم الساعة عندما يشير العقرب القصير إلى 3 والطويل إلى 12؟", ["نعدّ أضلاع المستطيل: 4 أضلاع.", "نعدّ زواياه: 4 زوايا.", "العقرب الطويل عند 12 يعني ساعة تامة.", "والعقرب القصير عند 3 يحدد الساعة: الثالثة تمامًا."], "4 أضلاع و4 زوايا والساعة الثالثة تمامًا"),
    sheet: { title: T("Shapes, measuring and time", "الأشكال والقياس والوقت"), instructions: T("Look carefully and draw if it helps.", "انظر بعناية وارسم إن ساعدك ذلك."), items: [
      it("How many sides does a triangle have?", "3", "كم ضلعًا للمثلث؟", "3"),
      it("Which shape is round like a ball: a cube or a sphere?", "A sphere", "أي شكل مستدير كالكرة: المكعب أم الكرة؟", "الكرة"),
      it("A tin of beans is the shape of a: cylinder, cube or cone?", "Cylinder", "علبة الفول على شكل: أسطوانة أم مكعب أم مخروط؟", "أسطوانة"),
      it("Which is longer: a pencil or a classroom?", "A classroom", "أيهما أطول: قلم رصاص أم غرفة صف؟", "غرفة الصف"),
      it("What time is it when the long hand is on 6 and the short hand is between 4 and 5?", "Half past 4", "كم الساعة عندما يكون العقرب الطويل على 6 والقصير بين 4 و5؟", "الرابعة والنصف"),
      it("The table is 9 paper clips long. A second table is 5 paper clips long. How much longer is the first?", "4 paper clips", "الطاولة طولها 9 مشابك ورق. وطاولة ثانية 5 مشابك. بكم تزيد الأولى؟", "4 مشابك"),
      it("Which comes first in the day: morning or evening?", "Morning", "أيهما يأتي أولًا في اليوم: الصباح أم المساء؟", "الصباح")
    ] }
  },

  "ma.12.dat": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Sort and count", "Give your child a mixed handful of buttons, shells or coloured pencils. Ask them to sort them by colour or size, then count each group and say which has the most and which has the least. Ask: how many more red than blue? Sorting is the first step of every graph.", "نفرز ونعد", "أعطِ طفلك حفنة مختلطة من الأزرار أو الأصداف أو الأقلام الملونة. اطلب منه فرزها حسب اللون أو الحجم ثم عدّ كل مجموعة وقول أيها الأكثر وأيها الأقل. اسأل: كم أحمر زيادة عن الأزرق؟ فالفرز هو الخطوة الأولى في كل رسم بياني."),
      act("A picture graph of us", "Ask five family members or friends which they like best: dates, grapes or watermelon. Draw a small picture for each answer in a column on paper. Read the graph together: which has the most, and how many people were asked altogether?", "رسم بياني بالصور لنا", "اسأل خمسة من أفراد الأسرة أو الأصدقاء عمّا يحبونه أكثر: التمر أو العنب أو البطيخ. ارسم صورة صغيرة لكل إجابة في عمود على الورقة. واقرآ الرسم معًا: أيها الأكثر؟ وكم شخصًا سُئل في المجموع؟"),
      act("Tally the cars", "Sit at a window or on a bench for five minutes and make a tally mark for every white car, then every silver car, then every other colour. Count the groups of five. Which colour was most common? Would it be the same tomorrow?", "نعدّ السيارات بالعلامات", "اجلسا عند نافذة أو على مقعد خمس دقائق وضعا علامة عدّ لكل سيارة بيضاء ثم لكل سيارة فضية ثم لكل لون آخر. عدّا مجموعات الخمس. أي لون كان الأكثر؟ وهل سيكون هو نفسه غدًا؟")
    ],
    example: ex("A picture graph shows dates 6, grapes 3, watermelon 5. Which is most popular? How many more chose dates than grapes?", ["Find the longest column: dates, with 6.", "Compare dates and grapes: 6 and 3.", "6 take away 3 is 3."], "Dates, and 3 more", "يُظهر رسم بياني: التمر 6، والعنب 3، والبطيخ 5. أيها الأكثر شعبية؟ وكم شخصًا زيادة اختار التمر على العنب؟", ["نبحث عن أطول عمود: التمر وفيه 6.", "نقارن التمر والعنب: 6 و3.", "6 ناقص 3 يساوي 3."], "التمر، و3 زيادة"),
    sheet: { title: T("Sorting, counting and graphs", "الفرز والعد والرسوم البيانية"), instructions: T("Use the tally and the graph to answer.", "استعن بجدول العدّ والرسم البياني للإجابة."), items: [
      it("A tally shows |||| |||. How many is that?", "8", "جدول عدّ يُظهر |||| |||. كم يساوي؟", "8"),
      it("In a graph, 7 children like mango and 4 like banana. Which is more popular?", "Mango", "في رسم بياني أحب 7 أطفال المانجو و4 الموز. أيهما أكثر شعبية؟", "المانجو"),
      it("How many more like mango than banana?", "3", "كم طفلًا زيادة أحب المانجو على الموز؟", "3"),
      it("How many children were asked in all?", "11", "كم طفلًا سُئلوا في المجموع؟", "11"),
      it("Sort these into two groups: camel, falcon, oryx, parrot. Which are birds?", "Falcon and parrot", "صنّف في مجموعتين: جمل، صقر، مها، ببغاء. أيها طيور؟", "الصقر والببغاء"),
      it("There are 5 red shells, 8 white shells and 2 pink shells. Which colour has the fewest?", "Pink", "5 أصداف حمراء و8 بيضاء و2 وردية. أي لون الأقل؟", "الوردي"),
      it("Is it certain, possible or impossible that it will be dark at night?", "Certain", "هل مؤكد أم ممكن أم مستحيل أن يكون الليل مظلمًا؟", "مؤكد")
    ] }
  },

  "ma.12.bal": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Maths all day", "Look for small chances to use numbers during the day: how many plates for dinner, which shelf is higher, what time we leave, how many steps to the door. Ask your child a question at each one and let them answer out loud. Maths feels natural when it belongs to real life.", "رياضيات طوال اليوم", "ابحثا عن فرص صغيرة لاستخدام الأعداد خلال اليوم: كم طبقًا للعشاء؟ وأي رف أعلى؟ ومتى نخرج؟ وكم خطوة إلى الباب؟ اسأل طفلك سؤالًا في كل منها ودعه يجيب بصوت عالٍ. فتبدو الرياضيات طبيعية حين تكون جزءًا من الحياة."),
      act("Tell me how", "After your child answers any maths question, ask: how did you know? Listen to their method without correcting it at once. Then ask whether there is another way to find the same answer. Explaining out loud builds understanding.", "أخبرني كيف", "بعد أن يجيب طفلك عن أي سؤال رياضي اسأله: كيف عرفت؟ واستمع إلى طريقته دون أن تصحّحها فورًا. ثم اسأل: هل هناك طريقة أخرى للوصول إلى الجواب نفسه؟ فالشرح بصوت عالٍ ينمّي الفهم."),
      act("Number stories", "Make up short number stories using your child's favourite things: Three falcons sat on a branch and two more came. How many now? Take turns telling the stories, and let your child draw a picture to solve each.", "حكايات الأعداد", "اخترعا حكايات عددية قصيرة بأشياء يحبها طفلك: جلست ثلاثة صقور على غصن وجاء صقران آخران. كم صارت؟ وتناوبا على رواية الحكايات ودع طفلك يرسم صورة لحل كل واحدة.")
    ],
    example: ex("Three falcons sat on a branch and 2 more came. Then 1 flew away. How many are on the branch?", ["Start with 3.", "2 more came: 3 + 2 = 5.", "1 flew away: 5 - 1 = 4."], "4 falcons", "جلست ثلاثة صقور على غصن وجاء صقران آخران. ثم طار صقر واحد. كم بقي على الغصن؟", ["نبدأ بـ 3.", "جاء 2 آخران: 3 + 2 = 5.", "طار واحد: 5 - 1 = 4."], "4 صقور"),
    sheet: { title: T("A little of everything", "قليل من كل شيء"), instructions: T("Take your time and say your steps aloud.", "خذ وقتك وقل خطواتك بصوت عالٍ."), items: [
      it("What is 9 + 6?", "15", "ما ناتج 9 + 6؟", "15"),
      it("What is 17 - 8?", "9", "ما ناتج 17 - 8؟", "9"),
      it("Continue: 10, 20, 30, __", "40", "أكمل: 10، 20، 30، __", "40"),
      it("How many sides does a square have?", "4", "كم ضلعًا للمربع؟", "4"),
      it("There are 5 dates in one bowl and 7 in another. How many altogether?", "12", "5 تمرات في وعاء و7 في وعاء آخر. كم المجموع؟", "12"),
      it("What time is it when both hands point to 12?", "12 o'clock", "كم الساعة عندما يشير العقربان إلى 12؟", "الثانية عشرة تمامًا")
    ] }
  }
,

  "rd.12.fnd": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Sound hunt", "Play I spy with sounds, not letters: I spy something that starts with the sound /s/. Take turns. Then say a word slowly, such as sun, and ask your child to tell you each sound (s, u, n) and how many sounds there are. Listening for sounds is the base of reading.", "لعبة البحث عن الأصوات", "العبا لعبة أرى بعينيّ الصغيرتين، لكن بالأصوات لا بالحروف: أرى شيئًا يبدأ بصوت /s/. وتناوبا. ثم انطق كلمة ببطء مثل sun واطلب من طفلك أن يخبرك بكل صوت (s, u, n) وكم صوتًا فيها. فالإصغاء إلى الأصوات أساس القراءة."),
      act("Change one sound", "Write cat on paper or with letter tiles. Ask your child to read it, then change just one letter to make hat, then hot, then hop. Each time they say the new word and write it. Changing one sound at a time teaches how letters stand for sounds.", "نغيّر صوتًا واحدًا", "اكتب cat على ورقة أو بحروف مفكّكة. اطلب من طفلك قراءتها ثم تغيير حرف واحد فقط لتصبح hat ثم hot ثم hop. وفي كل مرة ينطق الكلمة الجديدة ويكتبها. فتغيير صوت واحد في كل مرة يعلّم كيف تمثّل الحروف الأصوات."),
      act("Finger-point reading", "Choose a very short book or sentence your child can almost read. Let them point at each word with a finger while they read, and sound out any tricky word by blending the sounds. Praise effort, then read the page again smoothly. Ten calm minutes daily works better than a long session.", "قراءة بالإصبع", "اختر كتابًا أو جملة قصيرة جدًا يكاد طفلك يقرؤها. دعه يشير بإصبعه إلى كل كلمة وهو يقرأ، ويقرأ الكلمة الصعبة بدمج أصواتها. امدح المجهود ثم اقرآ الصفحة مرة أخرى بانسيابية. فعشر دقائق هادئة كل يوم أفضل من جلسة طويلة.")
    ],
    example: ex("Read this word by blending the sounds: ship. How many sounds does it have?", ["Look for sounds that go together: sh is one sound made by two letters.", "The sounds are sh, i, p.", "Blend them: sh, i, p, ship.", "It has three sounds but four letters."], "3 sounds", "Read this word by blending the sounds: ship. How many sounds does it have?", ["ابحث عن حروف تُنطق معًا: sh صوت واحد من حرفين.", "الأصوات هي sh وi وp.", "ادمجها: sh, i, p, ship.", "فيها ثلاثة أصوات لكن أربعة حروف."], "3 sounds (ثلاثة أصوات)"),
    sheet: { englishOnly: true, title: T("Sounds, letters and reading", "الأصوات والحروف والقراءة"), instructions: T("Read each word or sentence aloud. A grown-up can help with the instructions.", "اقرأ كل كلمة أو جملة بصوت عالٍ. يمكن لشخص بالغ المساعدة في التعليمات."), items: [
      en("Which word starts with the sound /s/? sun, hat, pen", "sun"),
      en("Which word rhymes with cat? hat, log, sun", "hat"),
      en("How many sounds are in the word log? (l, o, g)", "3"),
      en("Read: The camel can sit on the sand.", "The camel can sit on the sand. (The child reads it aloud.)"),
      en("Change one letter in pin to make pan. Which letter changes?", "The i changes to an a."),
      en("Which word has the sound /sh/? fish, fist, fit", "fish"),
      en("Which word names a round fruit? apple, bus, hat", "apple")
    ] }
  },

  "rd.12.cmp": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Who, where, what happened?", "After reading a short story or page together, ask three easy questions: who was in it, where did it happen, and what happened? Ask your child to answer in a whole sentence. Then ask one why question, such as why was she happy? Showing you where the answer is on the page is part of the skill.", "من؟ أين؟ ماذا حدث؟", "بعد أن تقرآ قصة قصيرة أو صفحة معًا اسأل ثلاثة أسئلة سهلة: من كان فيها؟ وأين حدث ذلك؟ وماذا حدث؟ واطلب من طفلك أن يجيب بجملة كاملة. ثم اسأل سؤال لماذا واحدًا، مثل: لماذا كانت سعيدة؟ وإشارته إلى موضع الجواب في الصفحة جزء من المهارة."),
      act("Beginning, middle, end", "Fold a paper into three parts. After reading, your child draws what happened first, then next, then last, and says a sentence for each. Use first, next and last. This teaches how stories are put in order.", "بداية ووسط ونهاية", "اطوِ ورقة إلى ثلاثة أجزاء. بعد القراءة يرسم طفلك ما حدث أولًا ثم بعد ذلك ثم أخيرًا، ويقول جملة لكل جزء. استخدما كلمات أولًا ثم أخيرًا. فهذا يعلّم كيف تُرتّب أحداث القصة."),
      act("Read it like a picture", "Read a page aloud without showing the picture. Ask your child to close their eyes and imagine the picture the words make, then to draw it. Compare it with the real picture. Good readers make pictures in their minds as they read.", "نقرأ كأنها صورة", "اقرأ صفحة بصوت عالٍ دون إظهار الصورة. اطلب من طفلك أن يغمض عينيه ويتخيل الصورة التي ترسمها الكلمات ثم يرسمها. وقارنا بين رسمه والصورة الحقيقية. فالقارئ الجيد يكوّن صورًا في ذهنه وهو يقرأ.")
    ],
    example: ex("Hamda found a shell on the beach. She picked it up and held it to her ear. She smiled because she could hear the sea. Why did Hamda smile?", ["Find the sentence with because: She smiled because she could hear the sea.", "The sentence tells us the reason.", "She smiled because she heard the sea in the shell."], "She could hear the sea", "Hamda found a shell on the beach. She picked it up and held it to her ear. She smiled because she could hear the sea. Why did Hamda smile?", ["ابحث عن الجملة التي فيها because: She smiled because she could hear the sea.", "الجملة تعطينا السبب.", "ابتسمت لأنها سمعت صوت البحر في الصدفة."], "She could hear the sea (سمعت صوت البحر)"),
    sheet: { englishOnly: true, title: T("Understanding a story: Hamda and the shell", "فهم القصة: حمدة والصدفة"), instructions: T("Read the story twice, then answer.", "اقرأ القصة مرتين ثم أجب."), items: [
      en("STORY. Hamda went to the beach with her father. She found a small pink shell. She held it to her ear and heard the sea. She put it in her bag to show her teacher. At school, everyone wanted a turn to listen.", "(Read the story. Questions follow.)"),
      en("1. Who went to the beach?", "Hamda and her father"),
      en("2. What did Hamda find?", "A small pink shell"),
      en("3. What did she hear?", "The sea"),
      en("4. Where did she put the shell?", "In her bag"),
      en("5. What happened at school?", "Everyone wanted a turn to listen."),
      en("6. What do you think Hamda felt when she found the shell? Why?", "Any sensible answer, such as happy or excited, because she found something special.")
    ] }
  },

  "rd.12.voc": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Word sorting", "Write ten words on slips of paper, such as apple, camel, date, falcon, banana, oryx, mango, goat, grape and horse. Ask your child to sort them into two groups, fruit and animals, and then name another group you could make. Sorting words by meaning helps them stay in memory.", "نفرز الكلمات", "اكتب عشر كلمات على قصاصات، مثل apple وcamel وdate وfalcon وbanana وoryx وmango وgoat وgrape وhorse. اطلب من طفلك فرزها في مجموعتين، فواكه وحيوانات، ثم تسمية مجموعة أخرى يمكن تكوينها. فتصنيف الكلمات بحسب المعنى يساعدها على البقاء في الذاكرة."),
      act("Opposites", "Say a word and ask for its opposite: hot, cold; big, small; up, down; open, closed. Then turn it into a game where your child says the opposite as fast as they can. Ask them to use each pair in a sentence: The tea is hot but the juice is cold.", "الأضداد", "قل كلمة واطلب ضدها: hot وcold، وbig وsmall، وup وdown، وopen وclosed. ثم حوّلها إلى لعبة يقول فيها طفلك الضد بأسرع ما يمكن. واطلب منه استخدام كل زوج في جملة: The tea is hot but the juice is cold."),
      act("A new word each day", "Choose one new word from a book, such as enormous. Say it, show or act its meaning, and use it in a sentence. Put it on the fridge and use it again at dinner. Aim for one new word a day, five in a week.", "كلمة جديدة كل يوم", "اختر كلمة جديدة واحدة من كتاب، مثل enormous. انطقها وأظهر معناها أو مثّله واستعملها في جملة. علّقها على الثلاجة واستعملها مرة أخرى على العشاء. والهدف كلمة جديدة كل يوم، خمس كلمات في الأسبوع.")
    ],
    example: ex("Which word means the opposite of big? And which word does not belong: apple, banana, camel, mango?", ["The opposite of big is small.", "Apple, banana and mango are fruits.", "A camel is an animal, so it does not belong."], "small, and camel", "Which word means the opposite of big? And which word does not belong: apple, banana, camel, mango?", ["ضد big هو small.", "apple وbanana وmango فواكه.", "camel حيوان فلا ينتمي إليها."], "small, and camel (small وcamel)"),
    sheet: { englishOnly: true, title: T("Word meanings", "معاني الكلمات"), instructions: T("Read each question aloud and choose the best word.", "اقرأ كل سؤال بصوت عالٍ واختر أفضل كلمة."), items: [
      en("What is the opposite of hot? cold, warm, red", "cold"),
      en("What is the opposite of open? shut, wide, tall", "shut"),
      en("Which word does not belong? sun, moon, star, shoe", "shoe"),
      en("Which word means very, very big? tiny, enormous, quiet", "enormous"),
      en("Finish the sentence: The soup is too ____ to drink. (hot, tall, soft)", "hot"),
      en("Which two words mean about the same? big, large, small", "big and large"),
      en("Write one word for something you can eat.", "Any food word, such as date or bread.")
    ] }
  },

  "rd.12.wl": {
    reviewed: { en: false, ar: false },
    activities: [
      act("One good sentence", "Ask your child to say a sentence about their day aloud first, then write it. Check the three things every sentence needs: a capital letter at the start, spaces between words, and a full stop at the end. Read it back together. Then add one more word to make it more interesting, such as big, red or happy.", "جملة واحدة جيدة", "اطلب من طفلك أن يقول جملة عن يومه بصوت عالٍ أولًا ثم يكتبها. افحصا الأمور الثلاثة التي تحتاجها كل جملة: حرف كبير في البداية، ومسافات بين الكلمات، ونقطة في النهاية. اقرآها معًا. ثم أضف كلمة واحدة لتصبح أشد إثارة، مثل big أو red أو happy."),
      act("My weekend in three sentences", "At the weekend ask your child to write three sentences: what I did, who I was with, and how I felt. Help with spelling when they ask, and let them draw a picture. Keep these in a folder and enjoy how the writing grows.", "عطلتي في ثلاث جمل", "في نهاية الأسبوع اطلب من طفلك أن يكتب ثلاث جمل: ماذا فعلت، ومع من كنت، وكيف شعرت. ساعده في الإملاء حين يطلب، ودعه يرسم صورة. واحتفظا بها في مجلد واستمتعا برؤية الكتابة تنمو."),
      act("Name it, then describe it", "Choose an object, such as a date, a kite or a shell. Together, write its name, then three describing words (small, brown, sweet), then a sentence using them. Nouns are naming words and adjectives are describing words. You can play it as a guessing game.", "نسمّي ثم نصف", "اختر شيئًا مثل تمرة أو طائرة ورقية أو صدفة. اكتبا معًا اسمه ثم ثلاث كلمات تصفه (small وbrown وsweet) ثم جملة تستخدمها. الأسماء كلمات تسمّي والصفات كلمات تصف. ويمكنكما لعبها كلعبة تخمين.")
    ],
    example: ex("Fix this sentence: my brother has a red kite", ["Start with a capital letter: My.", "Check the words are spaced and make sense.", "Finish with a full stop."], "My brother has a red kite.", "Fix this sentence: my brother has a red kite", ["نبدأ بحرف كبير: My.", "نتأكد أن الكلمات متباعدة ولها معنى.", "ننهي الجملة بنقطة."], "My brother has a red kite."),
    sheet: { englishOnly: true, title: T("Writing sentences", "كتابة الجمل"), instructions: T("Write neatly. Say each sentence aloud before you write it.", "اكتب بخط مرتب. وقل كل جملة بصوت عالٍ قبل أن تكتبها."), items: [
      en("Fix: the camel is big", "The camel is big."),
      en("Fix: we went to the beach on friday", "We went to the beach on Friday."),
      en("Put the words in order: sat the falcon on branch the", "The falcon sat on the branch."),
      en("Add a describing word: I have a ____ ball.", "Any adjective, such as red or big."),
      en("Which is a naming word (noun)? run, camel, happy", "camel"),
      en("Write one sentence about your favourite food.", "Any sentence with a capital letter and a full stop."),
      en("What does a question end with? a full stop or a question mark?", "A question mark")
    ] }
  },

  "rd.12.bal": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Read together every day", "Spend ten minutes reading together every day. Take turns: you read a page, then your child reads a page. Let them pick books about things they love. Stop and talk about the story, the pictures and any new word.", "نقرأ معًا كل يوم", "اقضيا عشر دقائق في القراءة معًا كل يوم. وتناوبا: تقرأ أنت صفحة ثم يقرأ طفلك صفحة. دعه يختار كتبًا عن أشياء يحبها. وتوقفا للحديث عن القصة والصور وأي كلمة جديدة."),
      act("Library trip", "Visit a library or the school library once a week and let your child choose two books, one they can read and one to be read to them. Having books at home that they chose themselves builds a love of reading.", "رحلة إلى المكتبة", "زورا مكتبة أو مكتبة المدرسة مرة في الأسبوع ودع طفلك يختار كتابين: واحدًا يستطيع قراءته وآخر يُقرأ له. فوجود كتب في البيت اختارها بنفسه ينمّي حب القراءة."),
      act("Retell it", "After a story, ask your child to tell it back to you in their own words, from the beginning. Ask what they liked best and why. Retelling shows how much they understood and builds speaking skills too.", "نعيد الحكاية", "بعد القصة اطلب من طفلك أن يرويها لك بكلماته من البداية. واسأله عمّا أعجبه أكثر ولماذا. فإعادة الحكاية تُظهر مقدار فهمه وتنمّي مهارات التحدث أيضًا.")
    ],
    example: ex("Omar ate a sweet date. He wanted another one. Why did Omar want another date?", ["Look for the reason in the story.", "It says the date was sweet.", "He liked it, so he wanted another."], "Because the date was sweet", "Omar ate a sweet date. He wanted another one. Why did Omar want another date?", ["ابحث عن السبب في القصة.", "تقول إن التمرة كانت حلوة.", "أعجبته فأراد أخرى."], "Because the date was sweet (لأن التمرة كانت حلوة)"),
    sheet: { englishOnly: true, title: T("A little of every kind of reading", "قليل من كل أنواع القراءة"), instructions: T("Read, then answer.", "اقرأ ثم أجب."), items: [
      en("TEXT. Layla has a little kite. It is blue and yellow. On a windy day she runs on the sand and the kite flies high in the sky.", "(Read the text. Questions follow.)"),
      en("1. What colour is the kite?", "Blue and yellow"),
      en("2. Where does Layla run?", "On the sand"),
      en("3. What weather does she need to fly the kite?", "A windy day"),
      en("4. Which word means the opposite of low? high, tall, kite", "high"),
      en("5. Write the naming word (noun) from this sentence: Layla has a kite.", "Layla or kite")
    ] }
  }
,

  "lu.12.cps": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Capital letter check", "Write four short sentences without capitals or full stops. Ask your child to be the checker: put a capital letter at the start of each sentence, on every name, and the word I. Add a full stop or question mark at the end. Cross-check each other's work.", "فحص الأحرف الكبيرة", "اكتب أربع جمل قصيرة بلا أحرف كبيرة ولا نقاط. اطلب من طفلك أن يكون المدقّق: يضع حرفًا كبيرًا في بداية كل جملة وعلى كل اسم وعلى كلمة I. ثم يضيف نقطة أو علامة استفهام في النهاية. وراجعا عمل بعضكما."),
      act("Spelling in the sand", "Put a little sand or flour on a tray. Your child writes each spelling word with a finger, says the letters, wipes it, and writes it again. Choose five words per week, such as the, said, was, they and because. Practise a few minutes each day.", "الإملاء في الرمل", "ضع قليلًا من الرمل أو الدقيق في صينية. يكتب طفلك كل كلمة إملاء بإصبعه ويقول حروفها ثم يمسحها ويكتبها مرة أخرى. اختر خمس كلمات في الأسبوع، مثل the وsaid وwas وthey وbecause. وتدرّبا بضع دقائق كل يوم."),
      act("Sign spotting", "Out and about, read signs, shop names and food packets. Look for capital letters and full stops, and ask which letters you can read. Real writing makes the rules feel useful.", "نكتشف اللافتات", "وأنتما في الخارج اقرآ اللافتات وأسماء المحال وعلب الطعام. ابحثا عن الأحرف الكبيرة والنقاط، واسأل عن الحروف التي يستطيع قراءتها. فالكتابة الحقيقية تجعل القواعد مفيدة.")
    ],
    example: ex("Fix: today is saturday we go to the park", ["Capital letter for the first word: Today.", "Capital letter for the day: Saturday.", "Full stop after Saturday, then a capital letter: We.", "Full stop at the end."], "Today is Saturday. We go to the park.", "Fix: today is saturday we go to the park", ["حرف كبير للكلمة الأولى: Today.", "حرف كبير لليوم: Saturday.", "نقطة بعد Saturday ثم حرف كبير: We.", "نقطة في النهاية."], "Today is Saturday. We go to the park."),
    sheet: { englishOnly: true, title: T("Capital letters, full stops and spelling", "الأحرف الكبيرة والنقاط والإملاء"), instructions: T("Write the sentence again correctly.", "أعد كتابة الجملة بشكل صحيح."), items: [
      en("Fix: my name is salma", "My name is Salma."),
      en("Fix: we live in dubai", "We live in Dubai."),
      en("Fix: can i have a drink", "Can I have a drink?"),
      en("Which is spelled correctly? (a) becuase (b) because", "(b) because"),
      en("Which is spelled correctly? (a) frend (b) friend", "(b) friend"),
      en("Fix: the cat and the hen sat down", "The cat and the hen sat down."),
      en("Write the word: s_id (said)", "said")
    ] }
  },

  "lu.12.gru": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Naming and doing words", "Read a short sentence together, such as The camel walks. Ask your child which word names something (camel, a noun) and which word shows what it does (walks, a verb). Make a list of ten nouns and ten verbs from the room you are in, and match them up to build new sentences.", "كلمات التسمية وكلمات الفعل", "اقرآ جملة قصيرة معًا، مثل The camel walks. اسأل طفلك: أي كلمة تسمّي شيئًا (camel، اسم)؟ وأي كلمة تدل على ما يفعله (walks، فعل)؟ اصنعا قائمة بعشرة أسماء وعشرة أفعال من الغرفة التي أنتما فيها وطابقاها لتكوين جمل جديدة."),
      act("One or many?", "Show one object and then several: one date, two dates; one box, three boxes. Ask your child to say and write the word for many. Look for words that change in surprising ways, such as man and men, or child and children.", "واحد أم كثير؟", "أظهر شيئًا واحدًا ثم عدة أشياء: تمرة واحدة وتمرتان؛ صندوق واحد وثلاثة صناديق. اطلب من طفلك أن يقول ويكتب كلمة الجمع. وابحثا عن كلمات تتغير بطرق مفاجئة، مثل man وmen أو child وchildren."),
      act("Yesterday and today", "Say what you do today (I walk) and what you did yesterday (I walked). Practise with five actions. Notice that many past words end in ed, but some change, such as go and went.", "أمس واليوم", "قل ما تفعله اليوم (I walk) وما فعلته أمس (I walked). تدرّبا على خمسة أفعال. ولاحظا أن كثيرًا من كلمات الماضي تنتهي بـ ed لكن بعضها يتغير مثل go وwent.")
    ],
    example: ex("Pick the right word: One date, two (date / dates).", ["One means just one, so no change.", "Two means more than one, so add s.", "Two dates."], "dates", "Pick the right word: One date, two (date / dates).", ["واحدة تعني شيئًا واحدًا فلا تغيير.", "اثنتان تعني أكثر من واحد فنضيف s.", "Two dates."], "dates"),
    sheet: { englishOnly: true, title: T("Words and how they work", "الكلمات وكيف تعمل"), instructions: T("Circle or write the best word.", "ضع دائرة أو اكتب أفضل كلمة."), items: [
      en("Which word is a noun (a naming word)? run, camel, big", "camel"),
      en("Which word is a verb (a doing word)? jump, blue, table", "jump"),
      en("One boat, two ____", "boats"),
      en("Yesterday I (walk / walked) to school.", "walked"),
      en("The birds (is / are) flying.", "are"),
      en("Which word describes: a ____ cat? soft, run, on", "soft"),
      en("The girl (have / has) a book.", "has")
    ] }
  },

  "lu.12.wri": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Draw, talk, write", "Ask your child to draw a picture of something that happened to them, then tell you about it, then write a sentence under it. Talking first makes writing easier. Encourage sentences that start in different ways, not always I went.", "نرسم ونتحدث ونكتب", "اطلب من طفلك أن يرسم شيئًا حدث له، ثم يخبرك عنه، ثم يكتب جملة تحت الرسم. فالحديث أولًا يسهّل الكتابة. وشجّعه على جمل تبدأ بطرق مختلفة، لا I went دائمًا."),
      act("First, next, last", "Choose a simple activity, such as making a sandwich or planting a seed. Write three sentences with the words first, next and last. Check each sentence has a capital letter and a full stop. This teaches order in writing.", "أولًا، ثم، أخيرًا", "اختر نشاطًا بسيطًا، مثل تحضير شطيرة أو زراعة بذرة. اكتب ثلاث جمل بالكلمات first وnext وlast. وتحقق أن لكل جملة حرفًا كبيرًا ونقطة. فهذا يعلّم الترتيب في الكتابة."),
      act("A letter to someone", "Write a short letter to a grandparent: Dear ..., two sentences about your week, and Love from ... Draw a picture to go with it. A real reader makes writing matter.", "رسالة إلى شخص ما", "اكتب رسالة قصيرة إلى جد أو جدة: عزيزي ...، وجملتان عن أسبوعك، ثم مع محبتي ... وارسم صورة معها. فالقارئ الحقيقي يجعل للكتابة معنى.")
    ],
    example: ex("Put in order and write: (a) Last, I ate it. (b) First, I spread jam on bread. (c) Next, I cut it in half.", ["First comes b, then next comes c, and last comes a.", "Write them in that order."], "First, I spread jam on bread. Next, I cut it in half. Last, I ate it.", "Put in order and write: (a) Last, I ate it. (b) First, I spread jam on bread. (c) Next, I cut it in half.", ["الأولى هي b ثم c ثم a.", "اكتبها بهذا الترتيب."], "First, I spread jam on bread. Next, I cut it in half. Last, I ate it."),
    sheet: { englishOnly: true, title: T("Writing", "الكتابة"), instructions: T("Write full sentences. Check the capital letters and full stops.", "اكتب جملًا كاملة. وراجع الأحرف الكبيرة والنقاط."), items: [
      en("Write one sentence about a place you like.", "Any complete sentence."),
      en("Put in order: Last, we went home. First, we got to the beach. Next, we built a sandcastle.", "First, we got to the beach. Next, we built a sandcastle. Last, we went home."),
      en("Add a describing word: I saw a ____ falcon.", "Any adjective."),
      en("Which sentence is better? (a) I saw a bird. (b) I saw a tiny green bird.", "(b)"),
      en("Write a question you would like to ask your teacher.", "Any question ending with ?."),
      en("Write two sentences about your weekend.", "Any two complete sentences."),
      en("What do you start a name with: a capital letter or a small letter?", "A capital letter")
    ] }
  },

  "lu.12.bal": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Little notes", "Leave each other short notes during the week: a lunchbox note, a bedtime note, a thank-you note. Writing for a real person is the best practice. Check together for a capital letter, a full stop and spelling.", "رسائل صغيرة", "اتركا لبعضكما رسائل قصيرة خلال الأسبوع: رسالة في علبة الغداء أو عند النوم أو رسالة شكر. فالكتابة لشخص حقيقي أفضل تدريب. وافحصا معًا الحرف الكبير والنقطة والإملاء."),
      act("Spot the mistake", "Write a sentence with one mistake, and ask your child to find it: the camel are big. Take turns to make mistakes and spot them. Talk about the rule each time.", "اكتشف الخطأ", "اكتب جملة فيها خطأ واحد واطلب من طفلك أن يجده: the camel are big. وتناوبا على صنع الأخطاء واكتشافها. وتحدثا عن القاعدة في كل مرة."),
      act("Tell me more", "When your child writes a short sentence, ask: tell me more. Where? When? How? Add one detail each time. The sentence I saw a bird becomes I saw a green bird in the palm tree this morning.", "أخبرني أكثر", "عندما يكتب طفلك جملة قصيرة اسأله: أخبرني أكثر. أين؟ ومتى؟ وكيف؟ وأضف تفصيلة في كل مرة. فتصبح جملة I saw a bird: I saw a green bird in the palm tree this morning.")
    ],
    example: ex("Fix and improve: i saw a bird", ["Capital letter: I.", "Add a full stop.", "Add a detail: a green bird.", "I saw a green bird."], "I saw a green bird.", "Fix and improve: i saw a bird", ["حرف كبير: I.", "أضف نقطة.", "أضف تفصيلة: a green bird.", "I saw a green bird."], "I saw a green bird."),
    sheet: { englishOnly: true, title: T("A little of every kind of language", "قليل من كل أنواع اللغة"), instructions: T("Write each answer.", "اكتب كل جواب."), items: [
      en("Fix: we play in the garden", "We play in the garden."),
      en("Choose: The boys (is / are) happy.", "are"),
      en("Which is spelled correctly? (a) wich (b) which", "(b)"),
      en("Add a describing word: a ____ date", "Any adjective such as sweet."),
      en("Write one sentence about your day.", "Any complete sentence."),
      en("One bird, two ____", "birds")
    ] }
  }
,

  "ma.68.num": {
    reviewed: { en: false, ar: false },
    activities: [
      act("The sale is on", "At a shop or from a sales leaflet, choose three items with a percentage discount. Ask your child to work out the sale price in dirhams without a calculator: 25 percent off AED 240 is a quarter off, so AED 60 off and AED 180 to pay. Then ask which is the better deal: 30 percent off AED 200 or AED 50 off AED 180? Compare by finding the final price each time.", "التخفيضات", "من أحد المتاجر أو من نشرة التخفيضات اختر ثلاث سلع عليها خصم بنسبة مئوية. اطلب من طفلك حساب سعر البيع بالدرهم دون آلة حاسبة: خصم 25 بالمئة من 240 درهمًا هو ربع المبلغ، أي 60 درهمًا خصمًا ويدفع 180. ثم اسأل: أيهما أفضل: خصم 30 بالمئة من 200 درهم أم خصم 50 درهمًا من 180؟ قارنا بإيجاد السعر النهائي في كل مرة."),
      act("Ratio in the kitchen", "Choose a recipe, such as a rice recipe that uses 2 cups of water for every 1 cup of rice. Ask your child to scale it for 3 cups, then for 5 cups, then for a small portion of half a cup. Make a ratio table with the amounts and look for the pattern that stays the same, which is the constant of proportion.", "النسبة في المطبخ", "اختر وصفة، مثل وصفة أرز تستخدم كوبين من الماء لكل كوب من الأرز. اطلب من طفلك تكبيرها لـ 3 أكواب ثم لـ 5 أكواب ثم تصغيرها لنصف كوب. اصنعا جدول نسبة بالمقادير وابحثا عن الشيء الذي يبقى ثابتًا، وهو ثابت التناسب."),
      act("Up and down the building", "Use a tall building or a car park with underground levels as a number line: ground is 0, the floors above are positive, the basements are negative. Ask: if the lift goes from level -3 to level 5, how many floors does it travel? Then add and subtract negative numbers with the lift: start at 2 and go down 6. Where do you finish?", "صعودًا ونزولًا في المبنى", "استخدما مبنى عاليًا أو موقف سيارات تحت الأرض كخط أعداد: الأرضي صفر، والطوابق العليا موجبة، والطوابق السفلية سالبة. اسأل: إذا انتقل المصعد من الطابق -3 إلى الطابق 5 فكم طابقًا يقطع؟ ثم اجمعا واطرحا أعدادًا سالبة بالمصعد: ابدأ من 2 وانزل 6. أين تنتهي؟")
    ],
    example: ex("A watch costs AED 240 and is on sale for 25 percent off. What is the sale price?", ["25 percent is one quarter.", "A quarter of 240 is 240 / 4 = 60.", "Take it off: 240 - 60 = 180."], "AED 180", "ساعة سعرها 240 درهمًا عليها خصم 25 بالمئة. كم سعر البيع؟", ["25 بالمئة هي الربع.", "ربع 240 هو 240 ÷ 4 = 60.", "نطرحه: 240 - 60 = 180."], "180 درهمًا"),
    sheet: { title: T("Fractions, percentages, ratio and integers", "الكسور والنسب المئوية والنسبة والأعداد الصحيحة"), instructions: T("Show your working. Check each answer is sensible.", "اكتب خطوات الحل. وتأكد أن كل جواب منطقي."), items: [
      it("What is 20 percent of 150?", "30", "ما قيمة 20 بالمئة من 150؟", "30"),
      it("Write 3/8 as a decimal.", "0.375", "اكتب 3/8 على شكل عدد عشري.", "0.375"),
      it("A shirt costs AED 80 and is reduced by 15 percent. What is the new price?", "AED 68", "قميص سعره 80 درهمًا وخُفّض 15 بالمئة. كم سعره الجديد؟", "68 درهمًا"),
      it("Simplify the ratio 18 : 24.", "3 : 4", "بسّط النسبة 18 : 24.", "3 : 4"),
      it("Paint is mixed 2 parts blue to 3 parts white. How much white is needed for 10 litres of blue?", "15 litres", "يُخلط الطلاء بنسبة جزأين أزرق إلى 3 أجزاء أبيض. كم لترًا أبيض يلزم لـ 10 لترات أزرق؟", "15 لترًا"),
      it("Work out: -4 + 9", "5", "احسب: -4 + 9", "5"),
      it("The temperature falls from 6 degrees to -3 degrees. By how many degrees did it fall?", "9 degrees", "انخفضت الحرارة من 6 درجات إلى -3 درجات. بكم درجة انخفضت؟", "9 درجات")
    ] }
  },

  "ma.68.alg": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Equation detective", "Write a balance puzzle such as 3x + 5 = 29. Ask your child to say what two steps undo the equation: take away 5 from both sides, then divide both sides by 3. Check the answer by putting it back in. Make them write each step on a new line, always doing the same to both sides.", "محقق المعادلات", "اكتب لغز ميزان مثل 3x + 5 = 29. اطلب من طفلك أن يقول الخطوتين اللتين تفكّان المعادلة: نطرح 5 من الجانبين ثم نقسم الجانبين على 3. ثم يتحقق من الجواب بتعويضه. واطلب منه كتابة كل خطوة في سطر جديد مع فعل الشيء نفسه بالجانبين."),
      act("The taxi fare", "A taxi charges AED 12 to start plus AED 2 for each kilometre. Make a table for 1, 2, 5 and 10 km, find the rule in words, and then write it as an expression: 12 + 2k. Ask how far you can go for AED 40. This shows how a rule can be written with letters.", "أجرة التاكسي", "يتقاضى تاكسي 12 درهمًا عند البدء و2 درهم لكل كيلومتر. اصنعا جدولًا لـ 1 و2 و5 و10 كم، وجدا القاعدة بالكلمات ثم اكتباها على شكل تعبير: 12 + 2k. واسأل: كم كيلومترًا نقطع بـ 40 درهمًا؟ فهذا يبيّن كيف تُكتب القاعدة بالحروف."),
      act("Substitute and see", "Choose an expression such as 4n - 3. Ask your child to find its value for n = 1, 2, 5 and 10, then to find which n gives 37. Next, give a number machine and ask them to write the expression for it. Moving between tables, words and letters is the heart of algebra.", "نعوّض ونرى", "اختر تعبيرًا مثل 4n - 3. اطلب من طفلك إيجاد قيمته عندما n = 1 و2 و5 و10 ثم إيجاد قيمة n التي تعطي 37. ثم أعطه آلة أعداد واطلب كتابة التعبير لها. فالانتقال بين الجداول والكلمات والحروف هو جوهر الجبر.")
    ],
    example: ex("Solve 3x + 5 = 29.", ["Undo the + 5 by taking 5 from both sides: 3x = 24.", "Undo the times 3 by dividing both sides by 3: x = 8.", "Check: 3 x 8 + 5 = 29. Yes."], "x = 8", "حلّ المعادلة 3x + 5 = 29.", ["نفكّ + 5 بطرح 5 من الجانبين: 3x = 24.", "نفكّ الضرب في 3 بقسمة الجانبين على 3: x = 8.", "نتحقق: 3 × 8 + 5 = 29. صحيح."], "x = 8"),
    sheet: { title: T("Expressions and equations", "التعابير والمعادلات"), instructions: T("Do the same to both sides. Check by substituting.", "افعل الشيء نفسه بالجانبين. وتحقق بالتعويض."), items: [
      it("Solve: x + 14 = 31", "x = 17", "حلّ: x + 14 = 31", "x = 17"),
      it("Solve: 5x = 45", "x = 9", "حلّ: 5x = 45", "x = 9"),
      it("Solve: 2x - 7 = 15", "x = 11", "حلّ: 2x - 7 = 15", "x = 11"),
      it("Find the value of 3n + 2 when n = 6.", "20", "أوجد قيمة 3n + 2 عندما n = 6.", "20"),
      it("A taxi costs AED 12 plus AED 2 per km. Write the cost for k km.", "12 + 2k", "تتقاضى سيارة أجرة 12 درهمًا و2 درهم لكل كم. اكتب الكلفة لـ k كم.", "12 + 2k"),
      it("How far can you go for AED 40 with that taxi?", "14 km (12 + 2k = 40, so k = 14)", "كم كيلومترًا تقطع بـ 40 درهمًا في تلك السيارة؟", "14 كم (12 + 2k = 40 إذن k = 14)"),
      it("Simplify: 4a + 3a - 2a", "5a", "بسّط: 4a + 3a - 2a", "5a")
    ] }
  },

  "ma.68.geo": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Area and perimeter at home", "Measure a room, a rug or a balcony. Work out the perimeter and the area, then a triangle-shaped corner by using half of base times height. Ask your child to draw the shape to scale on squared paper (1 cm for 1 m) and compare the plan with the real room. Talk about when you need area (floor tiles) and when you need perimeter (skirting board).", "المساحة والمحيط في البيت", "قيسا غرفة أو سجادة أو شرفة. احسبا المحيط والمساحة، ثم ركنًا مثلثيًا باستخدام نصف القاعدة في الارتفاع. اطلب من طفلك رسم الشكل بمقياس على ورق مربعات (1 سم لكل متر) ومقارنة المخطط بالغرفة الحقيقية. وتحدثا عن متى نحتاج المساحة (بلاط الأرضية) ومتى نحتاج المحيط (إفريز الجدار)."),
      act("Circles around us", "Find circles: a plate, a coin, a round table, a clock. Measure the distance across (diameter) and round (circumference) with a string, and divide the second by the first. You will always get a number close to 3.14, which is pi. Then find the area of a circle with radius 7 cm by using pi times radius squared.", "الدوائر من حولنا", "ابحثا عن دوائر: طبق وعملة وطاولة مستديرة وساعة. قيسا المسافة عبرها (القطر) وحولها (المحيط) بخيط، وقسّما الثاني على الأول. ستحصلان دائمًا على عدد قريب من 3.14 وهو الثابت باي. ثم أوجدا مساحة دائرة نصف قطرها 7 سم بحساب باي × نصف القطر²."),
      act("Pack the box", "Take a box and fill it with sugar cubes or small blocks to find its volume by counting: layers times rows times columns. Then use length times width times height. Ask which of two boxes holds more, and how you could tell without filling them.", "نملأ الصندوق", "خذ صندوقًا واملأه بمكعبات سكر أو قطع صغيرة لتجد حجمه بالعدّ: عدد الطبقات × الصفوف × الأعمدة. ثم استخدم الطول × العرض × الارتفاع. واسأل: أي الصندوقين يتسع لأكثر؟ وكيف نعرف دون ملئهما؟")
    ],
    example: ex("A triangle has a base of 10 m and a height of 6 m. What is its area? And what is the area of a circle with radius 7 cm (use 22/7 for pi)?", ["Triangle: half x base x height = 1/2 x 10 x 6 = 30 square metres.", "Circle: pi x r x r = 22/7 x 7 x 7.", "7 x 7 = 49, and 22/7 x 49 = 22 x 7 = 154."], "Triangle 30 square metres, circle 154 square cm", "مثلث قاعدته 10 م وارتفاعه 6 م. ما مساحته؟ وما مساحة دائرة نصف قطرها 7 سم (استخدم 22/7 لـ باي)؟", ["المثلث: نصف × القاعدة × الارتفاع = 1/2 × 10 × 6 = 30 مترًا مربعًا.", "الدائرة: باي × نق × نق = 22/7 × 7 × 7.", "7 × 7 = 49 و22/7 × 49 = 22 × 7 = 154."], "المثلث 30 مترًا مربعًا والدائرة 154 سنتيمترًا مربعًا"),
    sheet: { title: T("Area, circles, volume and angles", "المساحة والدوائر والحجم والزوايا"), instructions: T("Write the formula, then the working, then the unit.", "اكتب القانون ثم الحل ثم الوحدة."), items: [
      it("Find the area of a rectangle 14 m by 9 m.", "126 square metres", "أوجد مساحة مستطيل 14 م في 9 م.", "126 مترًا مربعًا"),
      it("Find the area of a triangle with base 12 cm and height 5 cm.", "30 square cm", "أوجد مساحة مثلث قاعدته 12 سم وارتفاعه 5 سم.", "30 سنتيمترًا مربعًا"),
      it("A circle has radius 10 cm. Find its circumference (use 3.14).", "62.8 cm (2 x 3.14 x 10)", "دائرة نصف قطرها 10 سم. أوجد محيطها (استخدم 3.14).", "62.8 سم (2 × 3.14 × 10)"),
      it("Find the volume of a box 5 cm by 4 cm by 3 cm.", "60 cubic cm", "أوجد حجم صندوق 5 سم × 4 سم × 3 سم.", "60 سنتيمترًا مكعبًا"),
      it("Two angles in a triangle are 50 and 60 degrees. What is the third?", "70 degrees", "زاويتان في مثلث 50 و60 درجة. ما الثالثة؟", "70 درجة"),
      it("What is the sum of the angles on a straight line?", "180 degrees", "ما مجموع الزوايا على خط مستقيم؟", "180 درجة"),
      it("A swimming pool is 25 m long, 10 m wide and 2 m deep. How much water does it hold when full?", "500 cubic metres", "مسبح طوله 25 م وعرضه 10 م وعمقه 2 م. كم يتسع من الماء عندما يمتلئ؟", "500 متر مكعب")
    ] }
  },

  "ma.68.dat": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Collect your own data", "Choose a question you can measure, such as how long it takes to walk to the shop on five different days, or the number of steps in a day. Collect at least ten values in a table. Find the mean (add up, divide by how many), the median (the middle value when ordered), the mode (the most common) and the range (biggest minus smallest). Say what each one tells you.", "نجمع بياناتنا بأنفسنا", "اختر سؤالًا يمكن قياسه، مثل الزمن الذي يستغرقه المشي إلى المتجر في خمسة أيام مختلفة أو عدد الخطوات في اليوم. اجمع عشر قيم على الأقل في جدول. أوجد المتوسط (نجمع ونقسم على العدد) والوسيط (القيمة الوسطى بعد الترتيب) والمنوال (الأكثر تكرارًا) والمدى (الأكبر ناقص الأصغر). وقل ما يخبرك به كل منها."),
      act("Draw it two ways", "Draw the same data as a bar chart and as a line graph. Ask which one is better for comparing groups and which one is better for showing a change over time, such as daily temperature through the week. Check both have a title, labelled axes and an even scale.", "نرسمها بطريقتين", "ارسم البيانات نفسها بمخطط أعمدة وبمخطط خطي. اسأل: أيهما أفضل لمقارنة المجموعات وأيهما أفضل لإظهار تغيّر مع الزمن، مثل درجة الحرارة اليومية خلال الأسبوع؟ وتأكدا أن لكل منهما عنوانًا ومحورين مسمّيين ومقياسًا منتظمًا."),
      act("Is it fair? Chance experiments", "Use a spinner made from paper with a pencil and a paper clip, with four equal coloured sections. Spin 40 times and tally the results. Compare with what you expected (one in four each). Ask: why are the results close to, but not the same as, the expected ones? What would happen with 400 spins?", "هل هو عادل؟ تجارب الحظ", "استخدم دوّارة من الورق بقلم رصاص ومشبك ورق وفيها أربعة أقسام متساوية ملونة. أدرها 40 مرة وسجّل النتائج بالعدّ. قارنها بما توقعته (واحد من أربعة لكل لون). اسأل: لماذا النتائج قريبة من المتوقع لكنها ليست مطابقة له؟ وماذا يحدث بعد 400 دورة؟")
    ],
    example: ex("Walking times in minutes: 12, 15, 15, 18, 40. Find the mean and the median. Which is a better description of a typical time?", ["Mean: add them 12 + 15 + 15 + 18 + 40 = 100, then divide by 5 = 20.", "Median: the middle value in order is 15.", "The 40 is much bigger than the rest, so it pulls the mean up. The median 15 is a better picture of a typical time."], "Mean 20, median 15; the median is better here", "أزمنة المشي بالدقائق: 12، 15، 15، 18، 40. أوجد المتوسط والوسيط. أيهما أفضل لوصف الزمن المعتاد؟", ["المتوسط: نجمع 12 + 15 + 15 + 18 + 40 = 100 ثم نقسم على 5 = 20.", "الوسيط: القيمة الوسطى بعد الترتيب هي 15.", "العدد 40 أكبر بكثير من الباقي فيرفع المتوسط. والوسيط 15 أصدق في وصف الزمن المعتاد."], "المتوسط 20 والوسيط 15، والوسيط أفضل هنا"),
    sheet: { title: T("Averages, graphs and chance", "المتوسطات والرسوم البيانية والاحتمالات"), instructions: T("Show your working. Say what the answer tells you.", "اكتب خطوات الحل. وقل ماذا يخبرك الجواب."), items: [
      it("Find the mean of 4, 7, 9, 10, 15.", "9", "أوجد المتوسط للأعداد 4، 7، 9، 10، 15.", "9"),
      it("Find the median of 3, 8, 5, 12, 9.", "8 (in order: 3, 5, 8, 9, 12)", "أوجد الوسيط للأعداد 3، 8، 5، 12، 9.", "8 (بعد الترتيب: 3، 5، 8، 9، 12)"),
      it("Find the mode of 2, 5, 5, 6, 7, 5, 9.", "5", "أوجد المنوال للأعداد 2، 5، 5، 6، 7، 5، 9.", "5"),
      it("Find the range of 14, 22, 9, 30, 18.", "21 (30 - 9)", "أوجد المدى للأعداد 14، 22، 9، 30، 18.", "21 (30 - 9)"),
      it("A bag has 4 red and 6 blue counters. What is the chance of picking red? Give it as a fraction and a percentage.", "4/10 = 2/5 = 40 percent", "في كيس 4 قطع حمراء و6 زرقاء. ما احتمال سحب قطعة حمراء؟ اكتبه ككسر ونسبة مئوية.", "4/10 = 2/5 = 40 بالمئة"),
      it("Which graph best shows how the temperature changes through a day: a bar chart or a line graph?", "A line graph", "أي مخطط أفضل لإظهار تغيّر الحرارة خلال اليوم: الأعمدة أم الخطي؟", "المخطط الخطي"),
      it("The mean of five numbers is 12. Four of them are 10, 11, 13 and 14. What is the fifth?", "12 (60 - 48)", "متوسط خمسة أعداد 12. أربعة منها 10 و11 و13 و14. ما الخامس؟", "12 (60 - 48)")
    ] }
  },

  "ma.68.bal": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Estimate first", "Before using a calculator or paper, ask your child to estimate: about how much will the shopping cost, how long is the journey if we travel at this speed, how many tiles for the floor? Compare the estimate with the real answer and talk about how close it was. Good estimating protects against mistakes.", "نقدّر أولًا", "قبل استخدام الآلة الحاسبة أو الورق اطلب من طفلك أن يقدّر: كم تقريبًا ستكلف المشتريات؟ وكم تستغرق الرحلة بهذه السرعة؟ وكم بلاطة تلزم للأرضية؟ قارنا التقدير بالجواب الحقيقي وتحدثا عن مدى قربه. فالتقدير الجيد يحمي من الأخطاء."),
      act("Maths in the news", "Find a number in a news story, such as the height of a tower, a percentage rise or a distance. Ask your child to say what the number means, to check if it is believable, and to make up a question from it. Maths in real contexts makes the ideas stick.", "رياضيات في الأخبار", "ابحثا عن رقم في خبر، مثل ارتفاع برج أو نسبة ارتفاع أو مسافة. اطلب من طفلك أن يقول ماذا يعني الرقم، وهل هو معقول، وأن يصوغ سؤالًا منه. فالرياضيات في سياقات حقيقية تجعل الأفكار راسخة."),
      act("Teach me", "Ask your child to teach you one topic they have done in maths this week as if you were the student, using a drawing and an example. If they get stuck, that is where to practise. Teaching is the best test of understanding.", "علّمني", "اطلب من طفلك أن يعلّمك موضوعًا واحدًا درسه في الرياضيات هذا الأسبوع كأنك الطالب، بالرسم وبمثال. فإذا تعثّر فهنا موضع التدرب. والتعليم أفضل اختبار للفهم.")
    ],
    example: ex("A train covers 240 km in 3 hours. How far will it go in 5 hours at the same speed?", ["Find the speed: 240 / 3 = 80 km per hour.", "Multiply by 5 hours: 80 x 5 = 400.", "Check it is sensible: more time means more distance."], "400 km", "يقطع قطار 240 كم في 3 ساعات. كم يقطع في 5 ساعات بالسرعة نفسها؟", ["نجد السرعة: 240 ÷ 3 = 80 كم في الساعة.", "نضرب في 5 ساعات: 80 × 5 = 400.", "نتأكد أن الجواب منطقي: زمن أطول يعني مسافة أكبر."], "400 كم"),
    sheet: { title: T("A little of every kind of maths", "قليل من كل أنواع الرياضيات"), instructions: T("Estimate first, then work it out.", "قدّر أولًا ثم احسب."), items: [
      it("What is 35 percent of 80?", "28", "ما قيمة 35 بالمئة من 80؟", "28"),
      it("Solve: 4x = 36", "x = 9", "حلّ: 4x = 36", "x = 9"),
      it("Find the area of a rectangle 12 m by 7 m.", "84 square metres", "أوجد مساحة مستطيل 12 م في 7 م.", "84 مترًا مربعًا"),
      it("Find the mean of 6, 8, 10, 12.", "9", "أوجد المتوسط للأعداد 6، 8، 10، 12.", "9"),
      it("Simplify the ratio 20 : 35.", "4 : 7", "بسّط النسبة 20 : 35.", "4 : 7"),
      it("What is -7 + 3?", "-4", "ما ناتج -7 + 3؟", "-4"),
      it("A car travels at 90 km per hour for 2.5 hours. How far does it go?", "225 km", "تسير سيارة بسرعة 90 كم في الساعة مدة 2.5 ساعة. كم تقطع؟", "225 كم")
    ] }
  }
,

  "rd.68.voc": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Roots, prefixes and suffixes", "Choose a word part and hunt for it: un- (not), re- (again), -able (can be), bio- (life), graph (write). Write ten words that use it and guess the meaning of an unfamiliar one by breaking it up: unbreakable means not able to be broken. Keep a small word-part notebook, because one root can unlock dozens of words.", "الجذور والبادئات واللواحق", "اختر جزءًا من الكلمة وابحثا عنه: un- (ليس) وre- (مرة أخرى) و-able (يمكن) وbio- (حياة) وgraph (كتابة). اكتبا عشر كلمات تستخدمه وخمّنا معنى كلمة غير مألوفة بتفكيكها: unbreakable تعني لا يمكن كسره. واحتفظا بدفتر صغير لأجزاء الكلمات، فجذر واحد يفتح عشرات الكلمات."),
      act("Context detective", "When your child meets a hard word in a book or article, ask them not to look it up at once. First, read the sentences before and after for clues, such as a definition, an example, an opposite or a description. Make a guess, then check it in a dictionary. Which clue helped most?", "محقق السياق", "عندما يصادف طفلك كلمة صعبة في كتاب أو مقال اطلب منه ألا يبحث عنها فورًا. أولًا يقرأ الجمل قبلها وبعدها بحثًا عن أدلة، مثل تعريف أو مثال أو ضد أو وصف. ثم يخمّن ويتحقق في المعجم. أي دليل ساعد أكثر؟"),
      act("Shades of meaning", "Choose a plain word, such as walk, and list stronger words that are close in meaning: stroll, march, stride, trudge, wander. Discuss how each feels different. Ask which one you would use for a tired traveller, and which for a proud soldier. Word choice changes the picture the reader sees.", "درجات المعنى", "اختر كلمة بسيطة مثل walk وسجّل كلمات أقوى قريبة منها في المعنى: stroll وmarch وstride وtrudge وwander. وناقشا كيف يختلف إحساس كل منها. اسأل: أيها تستخدم لمسافر متعب؟ وأيها لجندي فخور؟ فاختيار الكلمة يغيّر الصورة التي يراها القارئ.")
    ],
    example: ex("Use the clues to find the meaning of reluctant: The reluctant camel stopped at the edge of the water and would not move, even though its rider pulled the rope.", ["The camel stopped and would not move.", "The rider pulled the rope, but it still would not go.", "So reluctant means unwilling or hesitant."], "Unwilling or hesitant", "Use the clues to find the meaning of reluctant: The reluctant camel stopped at the edge of the water and would not move, even though its rider pulled the rope.", ["الجمل توقف ولم يتحرك.", "الراكب شدّ الحبل ومع ذلك لم يمضِ.", "إذن reluctant تعني غير راغب أو متردد."], "Unwilling or hesitant (غير راغب أو متردد)"),
    sheet: { englishOnly: true, title: T("Vocabulary in context", "المفردات في السياق"), instructions: T("Use the context to work out each answer. Write your reasoning in a few words.", "استعن بالسياق لتجد كل جواب. واكتب تفسيرك في كلمات قليلة."), items: [
      en("The scientist gave a lucid explanation, so everyone understood at once. Lucid means: (a) confusing (b) clear (c) long", "(b) clear"),
      en("Because the desert is so arid, almost nothing grows there. Arid means: (a) very dry (b) very cold (c) very large", "(a) very dry"),
      en("Benevolent comes from bene (good) and vol (wish). A benevolent donor is: (a) greedy (b) kind and generous (c) tired", "(b)"),
      en("Which prefix means not? (a) re- (b) un- (c) pre-", "(b) un-"),
      en("Choose the stronger word: The cheetah ____ across the plain. (a) went (b) sprinted (c) moved", "(b) sprinted"),
      en("The word mediocre means just ordinary, neither very good nor very bad. Which word means almost the same? (a) outstanding (b) average (c) terrible", "(b) average"),
      en("Write a sentence using the word persistent in a way that shows its meaning.", "Any sentence where the word clearly means keeps trying, for example: The persistent student practised until the speech was perfect.")
    ] }
  },

  "rd.68.inf": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Central idea and evidence", "Read an article together, such as a science news piece or a report about a UAE project. Ask your child to write the central idea in one sentence, then to find two pieces of evidence (facts, numbers, quotations) that the writer uses to support it. If evidence does not match the idea, the idea needs changing.", "الفكرة المحورية والدليل", "اقرآ معًا مقالًا، مثل خبر علمي أو تقرير عن مشروع في الإمارات. اطلب من طفلك كتابة الفكرة المحورية في جملة ثم إيجاد دليلين (حقائق أو أرقام أو اقتباسات) استخدمهما الكاتب لدعمها. فإذا لم يطابق الدليلُ الفكرةَ وجب تغيير الفكرة."),
      act("Why did the writer write this?", "For three short texts (a news item, an advert and a recipe), ask: what is the writer's purpose: to inform, persuade or instruct? How can you tell? Look at the words chosen, the headline and the pictures. Ask who would gain if you believed it.", "لماذا كتب الكاتب هذا؟", "لثلاثة نصوص قصيرة (خبر وإعلان ووصفة) اسأل: ما هدف الكاتب: الإعلام أم الإقناع أم التوجيه؟ وكيف عرفت؟ انظر إلى الكلمات المختارة والعنوان والصور. واسأل: من يستفيد إن صدّقت ذلك؟"),
      act("Fact, opinion and strong words", "Highlight facts in one colour and opinions in another in a short article. Then circle strong or loaded words, such as shocking, amazing or disaster, and ask what feeling they aim to create. Rewrite one sentence in a neutral way. Spotting these helps with careful reading of any news.", "حقيقة ورأي وكلمات قوية", "ظلّل الحقائق بلون والآراء بلون آخر في مقال قصير. ثم ضع دائرة حول الكلمات القوية أو المشحونة، مثل صادم ومذهل وكارثة، واسأل: أي شعور تريد خلقه؟ ثم أعد كتابة جملة بأسلوب محايد. فرصد ذلك يعين على القراءة الحذرة لأي خبر.")
    ],
    example: ex("A text says: Solar parks in the desert give clean electricity during the day. They are the best idea for any country. Which sentence is a fact and which is an opinion?", ["A fact can be checked: Solar parks give clean electricity during the day.", "An opinion is a judgement: the best idea for any country.", "The words best and any show an opinion."], "The first is a fact and the second is an opinion", "A text says: Solar parks in the desert give clean electricity during the day. They are the best idea for any country. Which sentence is a fact and which is an opinion?", ["الحقيقة يمكن التحقق منها: محطات الطاقة الشمسية توفر كهرباء نظيفة نهارًا.", "الرأي حكم شخصي: أفضل فكرة لأي بلد.", "كلمتا best وany تدلان على رأي."], "The first is a fact and the second is an opinion (الأولى حقيقة والثانية رأي)"),
    sheet: { englishOnly: true, title: T("Reading nonfiction: turning seawater into drinking water", "قراءة المعلومات: تحويل ماء البحر إلى ماء للشرب"), instructions: T("Read the text twice. Underline the central idea. Then answer, using evidence from the text.", "اقرأ النص مرتين. ضع خطًا تحت الفكرة المحورية. ثم أجب مستعينًا بدليل من النص."), items: [
      en("TEXT. In a country with little rain and no large rivers, finding fresh water is a challenge. Many coastal cities solve it by desalination: removing salt from seawater. In one common method, called reverse osmosis, seawater is pushed under high pressure through a very fine filter that lets water through but holds the salt back. The method uses a lot of energy, so engineers are working to make plants more efficient, and some now use solar power. The fresh water is then stored and carried to homes, farms and schools. Desalination is therefore not a perfect solution, but it is an essential one for dry places.", "(Read the text. Questions follow.)"),
      en("1. What is the central idea of the text? (a) Seawater is dangerous (b) Desalination gives dry places the fresh water they need, though it has costs (c) Reverse osmosis uses no energy", "(b)"),
      en("2. What does reverse osmosis do? Use evidence from the text.", "It pushes seawater under high pressure through a fine filter that lets water through but holds the salt back."),
      en("3. What is one problem with desalination?", "It uses a lot of energy."),
      en("4. What is being done about that problem?", "Engineers are making plants more efficient and some now use solar power."),
      en("5. The word essential means: (a) very important (b) expensive (c) new", "(a)"),
      en("6. What is the writer's purpose: to inform, to persuade or to instruct? Explain.", "To inform. The text explains how desalination works and gives balanced facts, including a drawback.")
    ] }
  },

  "rd.68.lit": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Theme and evidence", "After a story, a film or a chapter, ask your child to state the theme in a full sentence, such as courage grows when we face what we fear. A theme is a message about life, not just a topic like courage. Then ask for two moments in the story that prove it. If there is no evidence, the theme needs to change.", "الفكرة والدليل", "بعد قصة أو فيلم أو فصل اطلب من طفلك أن يذكر الفكرة (العبرة) في جملة كاملة، مثل: الشجاعة تنمو حين نواجه ما نخاف. فالعبرة رسالة عن الحياة وليست مجرد موضوع كالشجاعة. ثم اطلب لحظتين في القصة تثبتانها. فإن لم يوجد دليل وجب تغيير العبرة."),
      act("How a character changes", "Pick one main character and draw a two-column chart: at the beginning and at the end. Fill in what they thought, felt and did. Then find the event that changed them, and the sentence where you could see it. Characters who change are the heart of most stories.", "كيف تتغير الشخصية", "اختر شخصية رئيسة وارسم جدولًا من عمودين: في البداية وفي النهاية. املأ ما فكرت فيه وشعرت به وفعلته. ثم جد الحدث الذي غيّرها والجملة التي ظهر فيها ذلك. فالشخصيات المتغيرة قلب أغلب القصص."),
      act("Whose eyes?", "Retell a short scene from two different characters' points of view, such as the owner of a lost kite and the child who found it. How do the descriptions change? Then ask whether the narrator is inside the story (I) or outside it (he, she). The point of view decides what we know and what we are hidden from.", "بعيني من؟", "أعيدا رواية مشهد قصير من وجهتي نظر شخصيتين مختلفتين، مثل صاحب طائرة ورقية ضائعة والطفل الذي وجدها. كيف تتغير الأوصاف؟ ثم اسأل: هل الراوي داخل القصة (أنا) أم خارجها (هو، هي)؟ فوجهة النظر تحدد ما نعرفه وما يُخفى عنا.")
    ],
    example: ex("Hamdan was afraid to speak in class. After his teacher asked him gently, he stood and read his poem, though his voice shook. His classmates clapped. What is a possible theme?", ["Look at what changes: he starts afraid and ends by reading aloud.", "His voice shook, but he did it anyway.", "A theme: courage means acting even when you are afraid."], "Courage means acting even when you are afraid", "Hamdan was afraid to speak in class. After his teacher asked him gently, he stood and read his poem, though his voice shook. His classmates clapped. What is a possible theme?", ["انظر إلى ما تغيّر: يبدأ خائفًا وينتهي بقراءة بصوت عالٍ.", "ارتجف صوته لكنه فعل ذلك رغم الخوف.", "العبرة: الشجاعة أن تتصرف حتى وأنت خائف."], "Courage means acting even when you are afraid (الشجاعة أن تتصرف رغم الخوف)"),
    sheet: { englishOnly: true, title: T("Reading a story: The pearl and the sea", "قراءة قصة: اللؤلؤة والبحر"), instructions: T("Read the story slowly. Use quotations from it when you answer.", "اقرأ القصة ببطء. واستعن بعبارات منها عند الإجابة."), items: [
      en("STORY. Khalid had heard his grandfather's stories about the days when men dived for pearls, holding their breath, with only a stone and a rope. He had always thought it sounded like an adventure. Then, one afternoon, his grandfather took him to a museum on the Creek. In a glass case lay a tiny, scratched stone and a coil of worn rope. Khalid read the words beside them: Each dive lasted about a minute. A season could last for months. He stood quiet for a long time. When he looked up, his grandfather was smiling, but his eyes were wet. They were not stories, Khalid whispered. They were lives. The old man nodded. Now you know why I tell them.", "(Read the story. Questions follow.)"),
      en("1. How did Khalid feel about the stories at the start? Use a quotation.", "He thought they were an adventure: it sounded like an adventure."),
      en("2. What changed his view?", "Seeing the stone and rope in the museum and reading how hard the dives were."),
      en("3. What does the sentence He stood quiet for a long time show?", "That he was thinking deeply and was moved."),
      en("4. Why were the grandfather's eyes wet although he was smiling?", "He felt proud and sad together: Khalid finally understood what the past was like."),
      en("5. State the theme of the story in one sentence.", "Something like: Understanding the past helps us respect the people who lived it."),
      en("6. From whose point of view is the story told, and how do you know?", "From outside the characters, mostly through Khalid. It uses he and his, not I.")
    ] }
  },

  "rd.68.bal": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Read for fifteen minutes", "Make fifteen minutes of reading a daily habit, with books your child has chosen: stories, biographies, science magazines. Ask one question each day that begins with why or how. Notice and praise the variety of reading, because strong readers read all kinds of texts.", "نقرأ خمس عشرة دقيقة", "اجعلا خمس عشرة دقيقة من القراءة عادة يومية، بكتب اختارها طفلك: قصص وسير ومجلات علمية. واسأل كل يوم سؤالًا واحدًا يبدأ بـ لماذا أو كيف. ولاحظ تنوع قراءته وامدحه، فالقارئون الأقوياء يقرؤون كل أنواع النصوص."),
      act("Annotate as you read", "Give your child a pencil to underline the main idea, circle new words and write a question in the margin of an article or a photocopied page. Active readers talk back to the text. Look at their notes together after reading.", "نعلّق ونحن نقرأ", "أعطِ طفلك قلم رصاص ليضع خطًا تحت الفكرة الرئيسة ودائرة حول الكلمات الجديدة ويكتب سؤالًا في هامش مقال أو صفحة مصورة. فالقارئ النشط يحاور النص. وانظرا معًا في ملاحظاته بعد القراءة."),
      act("Two minutes to summarise", "After reading anything, ask your child to summarise it in two minutes, or in three sentences: what it was about, the key points and what they thought. A good summary leaves out the small details and keeps the heart of the text.", "دقيقتان للتلخيص", "بعد قراءة أي شيء اطلب من طفلك أن يلخّصه في دقيقتين أو في ثلاث جمل: عمّ كان، وأهم النقاط، وما رأيه. والتلخيص الجيد يحذف التفاصيل الصغيرة ويُبقي جوهر النص.")
    ],
    example: ex("Summarise: The Arabian oryx nearly disappeared from the wild because of hunting. Breeding programmes and protected reserves helped it recover. Today it is once more seen in the wild.", ["Find the key points: nearly disappeared, programmes and reserves helped, now recovering.", "Leave out small details.", "Write one sentence joining them."], "The Arabian oryx nearly disappeared but breeding programmes and reserves have helped it return to the wild", "Summarise: The Arabian oryx nearly disappeared from the wild because of hunting. Breeding programmes and protected reserves helped it recover. Today it is once more seen in the wild.", ["ابحث عن النقاط الأساسية: كاد يختفي، البرامج والمحميات ساعدت، يتعافى الآن.", "اترك التفاصيل الصغيرة.", "اكتب جملة واحدة تجمعها."], "The Arabian oryx nearly disappeared but breeding programmes and reserves have helped it return to the wild"),
    sheet: { englishOnly: true, title: T("A little of every kind of reading", "قليل من كل أنواع القراءة"), instructions: T("Read, then answer. Back each answer with the text.", "اقرأ ثم أجب. وادعم كل جواب بالنص."), items: [
      en("TEXT. When Mariam first used a metro card, she tapped it on the gate and nothing happened. She tried again and again. The man waiting in the line sighed. Then she noticed the card was upside down. She turned it over, the gate opened, and she laughed at herself as she stepped through.", "(Read the text. Questions follow.)"),
      en("1. What is the main idea? (a) Mariam is clumsy (b) Mariam solves a small problem and stays good-humoured (c) The metro is broken", "(b)"),
      en("2. What caused the gate not to open?", "The card was upside down."),
      en("3. What does she laughed at herself show about Mariam?", "She does not take herself too seriously."),
      en("4. What does sighed suggest about the man in the line?", "He was impatient."),
      en("5. Write a one-sentence summary.", "Mariam struggled to open the gate, then found her card was upside down and laughed at her mistake.")
    ] }
  }
,

  "lu.68.cps": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Comma and semicolon workshop", "Write five short pairs of related sentences about a trip, such as We arrived early. The museum was still closed. Ask your child to join each pair three ways: with a comma and and or but, with a semicolon, and with a full stop. Talk about which feels best. Then add commas after introductory phrases: After lunch, we went to the park.", "ورشة الفاصلة والفاصلة المنقوطة", "اكتب خمسة أزواج من الجمل القصيرة المترابطة عن رحلة، مثل We arrived early. The museum was still closed. اطلب من طفلك وصل كل زوج بثلاث طرق: بفاصلة مع and أو but، وبفاصلة منقوطة، وبنقطة. وتحدثا عن أيها أحسن وقعًا. ثم أضف فواصل بعد العبارات الافتتاحية: After lunch, we went to the park."),
      act("Its and it's, your and you're", "Make a card for each confusing pair, such as its (belonging) and it's (it is), your and you're, their, there and they're. Write a sentence for each. Use the test: can I say it is? If yes, it is it's. Check a real text, such as a message or an advert, for any errors.", "its وit's، وyour وyou're", "اصنع بطاقة لكل زوج محيّر، مثل its (ملكية) وit's (it is) وyour وyou're وtheir وthere وthey're. واكتب جملة لكل واحدة. واستخدم الاختبار: هل أستطيع قول it is؟ فإن كان نعم فهي it's. وافحص نصًا حقيقيًا، كرسالة أو إعلان، بحثًا عن الأخطاء."),
      act("Speech marks", "Read a short conversation from a story aloud and ask your child to write it with speech marks, a new line for each speaker and the right punctuation: Where are you going? asked Layla. Then they write their own short conversation between two people at a souq.", "علامات الاقتباس", "اقرأ حوارًا قصيرًا من قصة بصوت عالٍ واطلب من طفلك كتابته بعلامات الاقتباس وسطر جديد لكل متحدث وبالترقيم الصحيح: Where are you going? asked Layla. ثم يكتب حوارًا قصيرًا من تأليفه بين شخصين في السوق.")
    ],
    example: ex("Fix: its a lovely day lets go to the park after lunch we can have a picnic", ["Its a lovely day should be It's (it is) a lovely day.", "Lets should be Let's (let us).", "Add a full stop and a capital letter before After.", "Put a comma after the introductory phrase After lunch."], "It's a lovely day. Let's go to the park. After lunch, we can have a picnic.", "Fix: its a lovely day lets go to the park after lunch we can have a picnic", ["Its a lovely day تصبح It's (it is) a lovely day.", "Lets تصبح Let's (let us).", "نضيف نقطة وحرفًا كبيرًا قبل After.", "نضع فاصلة بعد العبارة الافتتاحية After lunch."], "It's a lovely day. Let's go to the park. After lunch, we can have a picnic."),
    sheet: { englishOnly: true, title: T("Punctuation, capital letters and spelling", "الترقيم والأحرف الكبيرة والإملاء"), instructions: T("Rewrite each sentence correctly.", "أعد كتابة كل جملة بشكل صحيح."), items: [
      en("Add commas: Before the match the players stretched their arms legs and backs.", "Before the match, the players stretched their arms, legs and backs."),
      en("Choose: (Its / It's) a hot day, and the camel is resting in (its / it's) shade.", "It's ... its"),
      en("Join with a semicolon: The tower is very tall. It can be seen from far away.", "The tower is very tall; it can be seen from far away."),
      en("Add speech marks: Where is the station asked Noura.", "\"Where is the station?\" asked Noura."),
      en("Add apostrophes: The childrens books are on the teachers desk.", "The children's books are on the teacher's desk."),
      en("Which is spelled correctly? (a) definately (b) definitely", "(b) definitely"),
      en("Fix: we visited abu dhabi dubai and sharjah in december", "We visited Abu Dhabi, Dubai and Sharjah in December.")
    ] }
  },

  "lu.68.gru": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Build longer sentences", "Start with a short sentence, such as The falcon flew. Ask your child to expand it one step at a time: when, where, how, why, and with a describing clause. The majestic falcon, which had been resting all morning, flew swiftly over the dunes because it spotted its trainer. Read each version aloud and decide which is clearest.", "نبني جملًا أطول", "ابدأ بجملة قصيرة مثل The falcon flew. واطلب من طفلك توسيعها خطوة خطوة: متى وأين وكيف ولماذا، وبجملة وصفية. The majestic falcon, which had been resting all morning, flew swiftly over the dunes because it spotted its trainer. اقرآ كل صيغة بصوت عالٍ وقرّرا أيها الأوضح."),
      act("Active and passive", "Take a sentence like The chef cooked the dinner and turn it into the passive: The dinner was cooked by the chef. Ask when each is better: the active is direct, the passive is useful when the doer is unknown or unimportant, as in The bridge was built in 1998. Find examples in a newspaper.", "المبني للمعلوم والمبني للمجهول", "خذ جملة مثل The chef cooked the dinner وحوّلها إلى المبني للمجهول: The dinner was cooked by the chef. واسأل: متى يكون كل منهما أفضل؟ فالمبني للمعلوم مباشر، والمبني للمجهول مفيد حين يكون الفاعل مجهولًا أو غير مهم، كما في The bridge was built in 1998. وابحثا عن أمثلة في صحيفة."),
      act("Who is it about?", "Check pronouns in a short paragraph: does each he, she, it or they clearly point to one person or thing? Rewrite any that are unclear. Then check verbs agree with their subjects, especially in long sentences: The group of students (was / were) late. Fix with the rule: the subject is the group, so was.", "عن من نتحدث؟", "افحصا الضمائر في فقرة قصيرة: هل يشير كل he أو she أو it أو they بوضوح إلى شخص أو شيء واحد؟ أعيدا كتابة ما كان غامضًا. ثم افحصا اتفاق الأفعال مع فاعلها، خاصة في الجمل الطويلة: The group of students (was / were) late. والقاعدة: الفاعل هو المجموعة فنقول was.")
    ],
    example: ex("Change to the passive: The students planted the trees. Then choose: The group of players (is / are) ready.", ["Passive: the object becomes the subject: The trees were planted by the students.", "The subject is the group, which is one thing, so we use is.", "The group of players is ready."], "The trees were planted by the students. The group of players is ready.", "Change to the passive: The students planted the trees. Then choose: The group of players (is / are) ready.", ["في المبني للمجهول يصبح المفعول فاعلًا: The trees were planted by the students.", "الفاعل هو المجموعة، وهي شيء واحد، فنستخدم is.", "The group of players is ready."], "The trees were planted by the students. The group of players is ready."),
    sheet: { englishOnly: true, title: T("Grammar and usage", "القواعد والاستخدام"), instructions: T("Choose or write the best answer. Read the sentence aloud to check.", "اختر أو اكتب أفضل جواب. واقرأ الجملة بصوت عالٍ للتحقق."), items: [
      en("Choose: Neither the teacher nor the students (was / were) ready.", "were"),
      en("Change to the passive: The council built a new park.", "A new park was built by the council."),
      en("Choose the right pronoun: The winners were Layla and (I / me).", "I"),
      en("Underline the clause that cannot stand alone: Although it was raining, we played outside.", "Although it was raining"),
      en("Fix the tense: Yesterday we go to the museum and see the old boats.", "Yesterday we went to the museum and saw the old boats."),
      en("Choose: Each of the boys (has / have) a book.", "has"),
      en("Which sentence is a complete sentence? (a) Because the road was closed. (b) The road was closed.", "(b)")
    ] }
  },

  "lu.68.wri": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Claim, evidence, reason", "Ask your child a real question with two sides, such as should school start later in the morning? Have them write a claim (their position), two pieces of evidence (a fact, an example or an expert) and a reason that explains how the evidence supports the claim. Then ask them to argue the other side in one sentence to show they have considered it.", "الادعاء والدليل والتعليل", "اطرح على طفلك سؤالًا حقيقيًا له وجهان، مثل: هل ينبغي أن يبدأ اليوم الدراسي متأخرًا؟ واطلب منه كتابة ادعاء (موقفه) ودليلين (حقيقة أو مثال أو رأي خبير) وتعليل يشرح كيف يدعم الدليل الادعاء. ثم اطلب منه عرض الجانب الآخر في جملة ليُظهر أنه فكّر فيه."),
      act("Show, don't tell", "Take a flat sentence such as She was nervous. Rewrite it so that actions and details show the feeling: Her hands trembled as she gripped the edge of the stage. Do this with three more feelings (excited, tired, proud). The best writing lets the reader work the feeling out.", "نُري ولا نخبر", "خذ جملة مسطحة مثل She was nervous. وأعد كتابتها بحيث تُظهر الأفعال والتفاصيل الشعور: Her hands trembled as she gripped the edge of the stage. افعل ذلك مع ثلاثة مشاعر أخرى (متحمس ومتعب وفخور). فأفضل الكتابة تدع القارئ يستنتج الشعور."),
      act("Draft, leave, improve", "Write a paragraph, then leave it for a few hours or a day. Come back and read it aloud as if it were someone else's. Mark one sentence to cut, one to strengthen and one transition word to add (however, for example, as a result). Revising is where good writing is made.", "مسودة وانتظار وتحسين", "اكتب فقرة ثم دعها بضع ساعات أو يومًا. وعد فاقرأها بصوت عالٍ كأنها لشخص آخر. ضع علامة على جملة للحذف وجملة للتقوية وكلمة ربط للإضافة (however وfor example وas a result). فالتنقيح هو موضع صنع الكتابة الجيدة.")
    ],
    example: ex("Strengthen this: I think we should recycle more because it is good.", ["Make the claim precise: schools should recycle more paper.", "Add evidence: a school can use about 2,000 sheets of paper a week.", "Add a reason: recycling saves trees and reduces waste."], "Schools should recycle more paper. A school can use about 2,000 sheets a week, so recycling saves trees and reduces waste.", "Strengthen this: I think we should recycle more because it is good.", ["اجعل الادعاء دقيقًا: على المدارس إعادة تدوير مزيد من الورق.", "أضف دليلًا: قد تستهلك المدرسة نحو 2,000 ورقة أسبوعيًا.", "أضف تعليلًا: إعادة التدوير توفر الأشجار وتقلل النفايات."], "Schools should recycle more paper. A school can use about 2,000 sheets a week, so recycling saves trees and reduces waste."),
    sheet: { englishOnly: true, title: T("Writing well", "الكتابة الجيدة"), instructions: T("Choose the best answer or write your own. Read your writing aloud before you finish.", "اختر أفضل جواب أو اكتب جوابك. واقرأ ما كتبت بصوت عالٍ قبل أن تنتهي."), items: [
      en("Which is the strongest claim? (a) Homework is bad. (b) Homework should be limited to thirty minutes a night because rest improves learning. (c) I do not like homework.", "(b)"),
      en("Add a transition word: Bicycles are cheap to run. ____, they are good for health.", "Also, Moreover, In addition, or similar."),
      en("Rewrite to show, not tell: He was tired.", "Any vivid sentence, such as: His eyelids drooped and he leaned on the wall."),
      en("Which sentence does not belong in a paragraph about the benefits of reading? Reading builds vocabulary. It helps us understand others. Football is a popular sport. It improves concentration.", "Football is a popular sport."),
      en("Write a topic sentence for a paragraph about why people should visit the desert.", "Any clear topic sentence."),
      en("Write a formal version of: Hey, can you send me the stuff tomorrow?", "Good afternoon. Could you please send me the documents tomorrow?"),
      en("Write a concluding sentence for a paragraph about the importance of sleep.", "Any sentence that sums up the point.")
    ] }
  },

  "lu.68.bal": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Edit one page a week", "Choose one piece of your child's real writing each week, such as a class essay or a message. Ask them to mark and fix two things: one spelling or punctuation point, and one sentence to make clearer. Keep the corrected pages in a folder and look back over the term.", "نحرّر صفحة كل أسبوع", "اختر كل أسبوع قطعة من كتابة طفلك الحقيقية، كمقال دراسي أو رسالة. واطلب منه أن يحدد ويصحح أمرين: نقطة في الإملاء أو الترقيم، وجملة يجعلها أوضح. واحتفظا بالصفحات المصححة في مجلد وراجعاها في نهاية الفصل."),
      act("Read it out loud", "Reading writing aloud reveals what the eye misses: missing words, long sentences, repeated words. Ask your child to read their work aloud slowly, pen in hand, and mark every place they stumble. Those are the places to fix.", "نقرأ بصوت عالٍ", "قراءة الكتابة بصوت عالٍ تكشف ما تغفله العين: كلمات ناقصة وجملًا طويلة وكلمات مكررة. اطلب من طفلك قراءة عمله ببطء وفي يده قلم، ووضع علامة عند كل موضع يتعثر فيه. تلك المواضع هي ما يحتاج إصلاحًا."),
      act("Say it two ways", "Take a sentence and rewrite it two ways: in a formal style for a teacher and in a casual style for a friend. Talk about what changes: word choice, length, tone. Knowing your reader is the first rule of good writing.", "نقولها بطريقتين", "خذ جملة وأعد كتابتها بطريقتين: بأسلوب رسمي لمعلم وبأسلوب غير رسمي لصديق. وتحدثا عمّا يتغير: اختيار الكلمات والطول والنبرة. فمعرفة القارئ أول قاعدة في الكتابة الجيدة.")
    ],
    example: ex("Fix and improve: me and my freinds goes to the library its very quiet there", ["Subject form: My friends and I.", "Verb agreement: go.", "Spelling: friends.", "Punctuation: full stop, and It's (it is) for it is."], "My friends and I go to the library. It's very quiet there.", "Fix and improve: me and my freinds goes to the library its very quiet there", ["صيغة الفاعل: My friends and I.", "اتفاق الفعل: go.", "الإملاء: friends.", "الترقيم: نقطة، وIt's بمعنى it is."], "My friends and I go to the library. It's very quiet there."),
    sheet: { englishOnly: true, title: T("A little of every kind of language", "قليل من كل أنواع اللغة"), instructions: T("Do each task, then read your answer aloud.", "أنجز كل مهمة ثم اقرأ إجابتك بصوت عالٍ."), items: [
      en("Fix the punctuation: its important to drink water especially in summer", "It's important to drink water, especially in summer."),
      en("Choose: The team (is / are) training hard.", "is"),
      en("Rewrite in the active: The match was won by the home team.", "The home team won the match."),
      en("Which is spelled correctly? (a) accomodate (b) accommodate", "(b)"),
      en("Combine into one sentence with a comma and a joining word: The sea was calm. We went sailing.", "The sea was calm, so we went sailing."),
      en("Write a topic sentence about why reading is a good habit.", "Any clear topic sentence.")
    ] }
  }
,

  "sc.68.bio": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Look at a leaf", "Look at a leaf, with a magnifying glass if you have one. Find the veins, which carry water and food. Ask your child to explain photosynthesis in their own words: leaves take in carbon dioxide from the air and water from the roots, and use light energy from the Sun to make glucose (food) and oxygen. Draw the process as a diagram with arrows and write what goes in and what comes out.", "ننظر في ورقة شجر", "انظرا إلى ورقة شجر، بعدسة مكبّرة إن وجدت. اعثرا على العروق التي تنقل الماء والغذاء. اطلب من طفلك أن يشرح البناء الضوئي بكلماته: تأخذ الأوراق ثاني أكسيد الكربون من الهواء والماء من الجذور وتستخدم طاقة الضوء من الشمس لصنع الغلوكوز (الغذاء) والأكسجين. ارسما العملية في مخطط بالأسهم واكتبا ما يدخل وما يخرج."),
      act("Mangroves and salt", "Mangrove trees grow in salty water along the creek, which would kill most plants. Find out how they cope: some have roots that filter out salt, and some leaves that push out extra salt, and stilt roots that hold the tree upright in soft mud. Ask your child to list three adaptations and how each helps the tree survive. Link adaptations to the habitat.", "القرم والملح", "تنمو أشجار القرم في الماء المالح على امتداد الخور، وهو ما يقتل أغلب النباتات. ابحثا كيف تتأقلم: بعضها له جذور ترشّح الملح، وبعضها أوراق تطرد الملح الزائد، وجذور داعمة تثبّت الشجرة في الطين الرخو. اطلب من طفلك ذكر ثلاثة تكيفات وكيف يفيد كل منها الشجرة. واربطا التكيفات بالموطن."),
      act("A balanced ecosystem", "Choose an ecosystem, such as a date farm, the creek or the desert. Draw a food web with at least eight living things: producers, herbivores, carnivores and decomposers. Ask: what would happen if one animal disappeared? How would the others change? Use the idea that everything is connected.", "نظام بيئي متوازن", "اختر نظامًا بيئيًا، كمزرعة نخيل أو الخور أو الصحراء. ارسم شبكة غذائية فيها ثمانية كائنات حية على الأقل: منتجات وآكلات أعشاب وآكلات لحوم ومحلِّلات. اسأل: ماذا يحدث لو اختفى حيوان واحد؟ وكيف تتغير الكائنات الأخرى؟ واستخدم فكرة أن كل شيء مترابط.")
    ],
    example: ex("Write the word equation for photosynthesis, and say where it happens in the plant.", ["Reactants: carbon dioxide and water.", "Energy from sunlight is needed.", "Products: glucose and oxygen.", "It happens in the leaves, in the chloroplasts that contain chlorophyll."], "Carbon dioxide + water (with light) gives glucose + oxygen, in the chloroplasts of leaves", "اكتب معادلة البناء الضوئي بالكلمات وقل أين يحدث في النبات.", ["المتفاعلات: ثاني أكسيد الكربون والماء.", "تلزم طاقة ضوء الشمس.", "النواتج: الغلوكوز والأكسجين.", "يحدث في الأوراق، في البلاستيدات الخضراء التي تحتوي على الكلوروفيل."], "ثاني أكسيد الكربون + الماء (مع الضوء) ينتج غلوكوز + أكسجين، في البلاستيدات الخضراء في الأوراق"),
    sheet: { title: T("Living things and their environment", "الكائنات الحية وبيئتها"), instructions: T("Use scientific words and give a reason with each answer.", "استخدم مصطلحات علمية واذكر سببًا مع كل جواب."), items: [
      it("What is the job of chlorophyll?", "It absorbs light energy for photosynthesis.", "ما وظيفة الكلوروفيل؟", "يمتص طاقة الضوء للبناء الضوئي."),
      it("Name the two things plants take in for photosynthesis.", "Carbon dioxide and water", "اذكر الشيئين اللذين تأخذهما النباتات للبناء الضوئي.", "ثاني أكسيد الكربون والماء"),
      it("What is a producer in a food chain? Give an example.", "A living thing that makes its own food, such as a mangrove or a date palm.", "ما المنتِج في السلسلة الغذائية؟ أعطِ مثالًا.", "كائن حي يصنع غذاءه بنفسه، مثل القرم أو نخلة التمر."),
      it("What does a decomposer do?", "It breaks down dead plants and animals and returns nutrients to the soil.", "ماذا تفعل المحلِّلات؟", "تفكك النباتات والحيوانات الميتة وتعيد العناصر الغذائية إلى التربة."),
      it("How do mangrove roots help the tree live in salty mud?", "They filter out salt and hold the tree upright in soft mud.", "كيف تساعد جذور القرم الشجرة على العيش في الطين المالح؟", "ترشّح الملح وتثبّت الشجرة منتصبة في الطين الرخو."),
      it("A camel stores fat in its hump. How does this help it survive in the desert?", "It is a store of energy for when food is hard to find.", "يخزّن الجمل الدهن في سنامه. كيف يساعده ذلك على البقاء في الصحراء؟", "هو مخزون للطاقة حين يصعب إيجاد الطعام."),
      it("What is the smallest unit of life called?", "The cell", "ما اسم أصغر وحدة بنائية للحياة؟", "الخلية")
    ] }
  },

  "sc.68.ear": {
    reviewed: { en: false, ar: false },
    activities: [
      act("The Hajar mountains and rocks", "Look at rocks from the garden, a mountain trip or the sea shore. Sort them by colour, hardness, grains and layers. Learn the three kinds: igneous (cooled from molten rock), sedimentary (made of layers of settled pieces), and metamorphic (changed by heat and pressure). Ask your child how a rock made in the sea could end up on a mountain top: the Earth's moving plates push the land up over millions of years.", "جبال الحجر والصخور", "افحصا صخورًا من الحديقة أو رحلة جبلية أو شاطئ البحر. صنّفاها بحسب اللون والصلابة والحبيبات والطبقات. وتعلّما الأنواع الثلاثة: نارية (تبرّدت من صخر منصهر) ورسوبية (من طبقات قطع مترسبة) ومتحولة (تغيّرت بالحرارة والضغط). واسأل طفلك: كيف يمكن لصخر تكوّن في البحر أن يصير على قمة جبل؟ ألواح الأرض المتحركة ترفع اليابسة على مدى ملايين السنين."),
      act("Weather and climate", "Keep a weather log for two weeks with temperature, wind and cloud. Then compare it with the climate, which is the average weather over many years. Ask why the UAE has hot dry summers and little rain, and what causes rare heavy rain and fog. Explain the difference between weather (today) and climate (the long pattern).", "الطقس والمناخ", "سجّلا يوميات الطقس لأسبوعين: الحرارة والرياح والغيوم. ثم قارناها بالمناخ، وهو معدل الطقس على مدى سنوات كثيرة. اسأل: لماذا صيف الإمارات حار وجاف وقليل المطر؟ وما سبب المطر الغزير النادر والضباب؟ واشرحا الفرق بين الطقس (اليوم) والمناخ (النمط الطويل)."),
      act("Our place in space", "Using a torch and a ball, show why we have day and night and the seasons: the Earth spins on a tilted axis while it travels around the Sun. Then talk about the planets: the UAE's Hope Probe studies the atmosphere of Mars. Make a scale model of the distances in a corridor or garden, with the Sun at one end.", "مكاننا في الفضاء", "باستخدام مصباح وكرة وضّحا سبب تعاقب الليل والنهار والفصول: تدور الأرض حول محور مائل بينما تسير حول الشمس. ثم تحدثا عن الكواكب: يدرس مسبار الأمل الإماراتي غلاف المريخ الجوي. واصنعا نموذجًا مصغرًا للمسافات في ممر أو حديقة، والشمس عند أحد الطرفين.")
    ],
    example: ex("Why does the UAE have warm weather all year, with the hottest weather in the middle of the year?", ["The UAE lies near the Tropic of Cancer, so the Sun is high in the sky for most of the year.", "The Earth's tilt means the northern half leans toward the Sun in June to August.", "So summer, when the Sun is highest and days are longest, is the hottest time."], "The Sun is high in the sky, and in summer the northern half is tilted toward it", "لماذا يكون طقس الإمارات دافئًا طوال العام وأشد حرارة في منتصفه؟", ["تقع الإمارات قرب مدار السرطان، فالشمس مرتفعة في السماء معظم العام.", "ميل الأرض يجعل نصفها الشمالي يميل نحو الشمس من يونيو إلى أغسطس.", "لذا يكون الصيف، حين تكون الشمس في أعلى ارتفاع وأيامها أطول، أحرّ وقت."], "الشمس مرتفعة في السماء، وفي الصيف يميل النصف الشمالي نحوها"),
    sheet: { title: T("Earth, weather and space", "الأرض والطقس والفضاء"), instructions: T("Explain each answer in a sentence. Use scientific words.", "اشرح كل جواب في جملة. واستخدم المصطلحات العلمية."), items: [
      it("Name the three types of rock.", "Igneous, sedimentary and metamorphic", "اذكر أنواع الصخور الثلاثة.", "نارية ورسوبية ومتحولة"),
      it("What type of rock is made of layers of settled sand and shells?", "Sedimentary rock", "ما نوع الصخر المتكوّن من طبقات رمل وأصداف مترسبة؟", "صخر رسوبي"),
      it("What is the difference between weather and climate?", "Weather is what it is like today. Climate is the average pattern over many years.", "ما الفرق بين الطقس والمناخ؟", "الطقس هو حالة الجو اليوم، والمناخ هو النمط المعتاد على مدى سنوات."),
      it("What causes the seasons on Earth?", "The tilt of the Earth's axis as it travels around the Sun", "ما سبب الفصول على الأرض؟", "ميل محور الأرض أثناء دورانها حول الشمس"),
      it("Name one way wind changes the land.", "It moves sand and forms dunes, or wears down rock (erosion).", "اذكر طريقة تغيّر بها الرياح اليابسة.", "تنقل الرمل وتكوّن الكثبان، أو تفتّت الصخور (التعرية)."),
      it("What is the Hope Probe studying?", "The atmosphere of Mars", "ماذا يدرس مسبار الأمل؟", "الغلاف الجوي للمريخ"),
      it("Why is it dark at night?", "Our side of the Earth faces away from the Sun as the Earth rotates.", "لماذا يكون الليل مظلمًا؟", "لأن جانبنا من الأرض يكون بعيدًا عن الشمس أثناء دوران الأرض.")
    ] }
  },

  "sc.68.phy": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Speed, distance and time", "Time a family member walking a measured 20 metres, and then jogging it. Calculate speed as distance divided by time. Draw a distance-time graph for each: the steeper line is the faster one. Ask what a flat line on such a graph means (stopped). Repeat on a bicycle if you can.", "السرعة والمسافة والزمن", "قِس بالمؤقت زمن مشي أحد أفراد الأسرة مسافة 20 مترًا مقيسة، ثم هرولته للمسافة نفسها. احسب السرعة = المسافة ÷ الزمن. وارسم مخطط مسافة وزمن لكل منهما: الخط الأشدّ انحدارًا هو الأسرع. واسأل: ماذا يعني الخط الأفقي في هذا المخطط؟ (التوقف). وكرّر الأمر على دراجة إن أمكن."),
      act("Sink or float", "Collect small objects and a bowl of water. Predict whether each will sink or float and why. Then relate it to density, which is how much mass is packed into a given volume. Ask why a huge steel ship floats but a steel nail sinks, and why it is easier to float in very salty water.", "يغرق أم يطفو؟", "اجمع أشياء صغيرة ووعاء ماء. توقع هل يغرق كل منها أم يطفو ولماذا. ثم اربط ذلك بالكثافة، أي مقدار الكتلة المضغوطة في حجم معين. اسأل: لماذا تطفو سفينة فولاذية ضخمة بينما يغرق مسمار فولاذي؟ ولماذا يسهل الطفو في الماء شديد الملوحة؟"),
      act("Energy changes", "Follow the energy in a simple chain: sunlight shines on a solar panel, which gives electricity (electrical energy), which lights a bulb (light and heat). Draw an energy flow diagram for a solar car toy, a kettle or a fan. Ask where the energy goes, and why no machine is perfect: some energy always leaks out as heat.", "تحوّلات الطاقة", "تتبّع الطاقة في سلسلة بسيطة: ضوء الشمس يسطع على لوح شمسي فيعطي كهرباء (طاقة كهربائية) فتضيء مصباحًا (ضوء وحرارة). ارسم مخطط تدفق الطاقة لسيارة لعبة تعمل بالطاقة الشمسية أو غلاية أو مروحة. واسأل: أين تذهب الطاقة؟ ولماذا لا توجد آلة كاملة؟ فبعض الطاقة يتسرب دائمًا على شكل حرارة.")
    ],
    example: ex("A cyclist rides 30 km in 2 hours. What is the average speed? How far in 3 hours at that speed?", ["Speed = distance / time = 30 / 2 = 15 km per hour.", "In 3 hours: 15 x 3 = 45 km."], "15 km per hour, and 45 km", "يقطع راكب دراجة 30 كم في ساعتين. ما متوسط سرعته؟ وكم يقطع في 3 ساعات بالسرعة نفسها؟", ["السرعة = المسافة ÷ الزمن = 30 ÷ 2 = 15 كم في الساعة.", "في 3 ساعات: 15 × 3 = 45 كم."], "15 كم في الساعة، و45 كم"),
    sheet: { title: T("Matter, forces and energy", "المادة والقوى والطاقة"), instructions: T("Write the formula, the working and the unit.", "اكتب القانون والحل والوحدة."), items: [
      it("A car travels 120 km in 1.5 hours. What is its average speed?", "80 km per hour", "تقطع سيارة 120 كم في ساعة ونصف. ما متوسط سرعتها؟", "80 كم في الساعة"),
      it("Which has a greater density: a block of iron or a block of wood of the same size?", "The iron", "أيهما أكبر كثافة: قطعة حديد أم قطعة خشب بالحجم نفسه؟", "الحديد"),
      it("What energy change happens in a solar panel?", "Light energy changes into electrical energy.", "ما تحوّل الطاقة الذي يحدث في اللوح الشمسي؟", "تتحول طاقة الضوء إلى طاقة كهربائية."),
      it("What happens to the particles of a solid when it is heated until it melts?", "They gain energy and move more, then break free of their fixed positions.", "ماذا يحدث لجسيمات مادة صلبة عندما تُسخَّن حتى تنصهر؟", "تكتسب طاقة وتتحرك أكثر ثم تتحرر من مواضعها الثابتة."),
      it("Why does a ball rolling on grass stop sooner than on smooth tiles?", "There is more friction on the grass.", "لماذا تتوقف كرة تتدحرج على العشب أسرع منها على بلاط أملس؟", "لأن احتكاك العشب أكبر."),
      it("What is the unit of force?", "The newton (N)", "ما وحدة القوة؟", "النيوتن (N)"),
      it("Name a renewable energy source used in the UAE.", "Solar energy (the Sun)", "اذكر مصدر طاقة متجددة تستخدمه الإمارات.", "الطاقة الشمسية (الشمس)")
    ] }
  },

  "sc.68.bal": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Design a fair test", "Pick a question you can test, such as does the temperature of water affect how fast sugar dissolves? Write the variable you change (temperature), the variable you measure (time to dissolve) and the variables you keep the same (amount of water, amount of sugar, stirring). Do the test, record results in a table and draw a graph. Say what you would improve next time.", "نصمم اختبارًا عادلًا", "اختر سؤالًا يمكن اختباره، مثل: هل تؤثر حرارة الماء في سرعة ذوبان السكر؟ اكتب المتغير الذي تغيّره (الحرارة) والمتغير الذي تقيسه (زمن الذوبان) والمتغيرات التي تُبقيها ثابتة (كمية الماء وكمية السكر والتحريك). نفّذ الاختبار وسجّل النتائج في جدول وارسم مخططًا. وقل ما الذي تحسّنه في المرة القادمة."),
      act("Science in the news", "Find a news article about a science topic, such as a space mission, new energy or a medical advance. Ask your child to summarise it, to say what evidence is given, and to say what questions it leaves unanswered. Practise asking: how do they know?", "العلوم في الأخبار", "ابحثا عن خبر علمي، مثل مهمة فضائية أو طاقة جديدة أو تقدم طبي. اطلب من طفلك تلخيصه وذكر الأدلة المقدمة وما الأسئلة التي لم يجب عنها. وتدرّبا على سؤال: كيف يعرفون؟"),
      act("Draw and label", "Draw a clear labelled diagram of something from this term: a plant cell, the water cycle or a circuit. Add a title, straight label lines and a short explanation. Drawing and explaining shows quickly what is and is not understood.", "نرسم ونسمّي", "ارسم مخططًا واضحًا مسمّى لشيء من هذا الفصل: خلية نباتية أو دورة الماء أو دارة كهربائية. أضف عنوانًا وخطوطًا مستقيمة للتسميات وشرحًا قصيرًا. فالرسم والشرح يكشفان بسرعة ما فُهم وما لم يُفهم.")
    ],
    example: ex("In an experiment on plant growth and light, three plants get 0, 4 and 8 hours of light a day. What should stay the same?", ["The independent variable is the hours of light, which we change.", "Keep the others fixed: type of plant, soil, amount of water, pot size, temperature.", "Then differences in growth can be put down to light."], "Plant type, soil, water, pot size and temperature", "في تجربة عن نمو النبات والضوء تتلقى ثلاث نباتات 0 و4 و8 ساعات ضوء يوميًا. ما الذي يجب أن يبقى ثابتًا؟", ["المتغير المستقل هو ساعات الضوء وهو ما نغيّره.", "نُبقي الباقي ثابتًا: نوع النبات والتربة وكمية الماء وحجم الوعاء والحرارة.", "عندئذٍ ننسب الفروق في النمو إلى الضوء."], "نوع النبات والتربة والماء وحجم الوعاء والحرارة"),
    sheet: { title: T("A little of every kind of science", "قليل من كل أنواع العلوم"), instructions: T("Answer each question and explain how you know.", "أجب عن كل سؤال واشرح كيف عرفت."), items: [
      it("What is a variable you keep the same in a fair test called?", "A control variable", "ما اسم المتغير الذي تُبقيه ثابتًا في الاختبار العادل؟", "متغير مضبوط"),
      it("Name the gas plants release during photosynthesis.", "Oxygen", "اذكر الغاز الذي تطلقه النباتات أثناء البناء الضوئي.", "الأكسجين"),
      it("Which type of rock forms from cooled lava?", "Igneous", "أي نوع من الصخور يتكوّن من اللابة المتبرّدة؟", "الصخر الناري"),
      it("Work out the speed: 150 metres in 30 seconds.", "5 m/s", "احسب السرعة: 150 مترًا في 30 ثانية.", "5 م/ث"),
      it("Which is a better conductor of electricity: copper or plastic?", "Copper", "أيهما موصل أفضل للكهرباء: النحاس أم البلاستيك؟", "النحاس"),
      it("Why do scientists repeat experiments?", "To check the results are reliable and not just chance.", "لماذا يكرر العلماء التجارب؟", "ليتحققوا أن النتائج موثوقة وليست مصادفة."),
      it("What does a food web show?", "How energy and food pass between living things in a habitat.", "ماذا تُظهر الشبكة الغذائية؟", "كيف تنتقل الطاقة والغذاء بين الكائنات الحية في الموطن.")
    ] }
  },

  "ma.k.num": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Count what you can touch", "Set out up to 10 dates, buttons or small stones in a line. Ask your child to touch each one once as they say the number, then tell you how many there are in all. Mix them up and count again. Ask: did we get the same number? Counting each thing only once is the first big idea.", "نعدّ ما نلمسه", "ضع حتى 10 تمرات أو أزرار أو حصيات صغيرة في صف. اطلب من طفلك أن يلمس كل واحدة مرة واحدة وهو يقول العدد، ثم يخبرك كم عددها كلها. اخلطها وعدّها مرة أخرى. اسأل: هل خرج العدد نفسه؟ عدّ كل شيء مرة واحدة فقط هو الفكرة الكبيرة الأولى."),
      act("One more, one less", "Put 4 blocks on the table. Ask: how many if I add one more? Take one away: how many now? Try with other starting numbers up to 9. Let your child use their fingers. Soon they will know the answer without counting from the start.", "واحد أكثر وواحد أقل", "ضع 4 مكعبات على الطاولة. اسأل: كم يصبح العدد إذا أضفت مكعبًا؟ أنقص مكعبًا: كم بقي؟ جرّب أعدادًا أخرى حتى 9. دع طفلك يستعين بأصابعه. وسرعان ما سيعرف الجواب دون أن يعدّ من البداية."),
      act("Make five", "Hold up five fingers. Fold some down and ask how many are standing and how many are down: 2 and 3, 4 and 1, 5 and 0. Say the pairs aloud and find them with real objects too. Knowing the pairs that make 5, and later 10, is a strong base for adding.", "نكوّن خمسة", "ارفع أصابع يدك الخمسة. اطوِ بعضها واسأل: كم إصبعًا واقفة وكم إصبعًا مطويّة: 2 و3 أو 4 و1 أو 5 و0. قولا الأزواج بصوت عالٍ وابحثا عنها بأشياء حقيقية أيضًا. ومعرفة الأزواج التي تكوّن 5 ثم 10 أساس قوي للجمع.")
    ],
    example: ex("There are 6 dates on the plate. Your friend gives you 2 more. How many now?", ["Count the first group: 1, 2, 3, 4, 5, 6.", "Add the two new dates, one at a time: 7, 8.", "Say the answer: there are 8 dates."], "8", "على الطبق 6 تمرات. أعطاك صديقك تمرتين أخريين. كم صار العدد؟", ["عدّ المجموعة الأولى: 1، 2، 3، 4، 5، 6.", "أضف التمرتين الجديدتين واحدة واحدة: 7، 8.", "قل الجواب: صار عدد التمرات 8."], "8"),
    sheet: { title: T("Counting and adding", "العدّ والجمع"), instructions: T("A grown-up reads each question aloud. Use fingers or objects, and let your child take their time.", "يقرأ شخص بالغ كل سؤال بصوت عالٍ. استعن بالأصابع أو الأشياء، وامنح طفلك وقته."), items: [
      it("Count to 20 out loud.", "1, 2, 3 ... 20", "عدّ حتى 20 بصوت عالٍ.", "1، 2، 3 ... 20"),
      it("What number comes after 7?", "8", "ما العدد الذي يأتي بعد 7؟", "8"),
      it("What number comes before 5?", "4", "ما العدد الذي يأتي قبل 5؟", "4"),
      it("Which is more: 3 stones or 6 stones?", "6 stones", "أيهما أكثر: 3 حصيات أم 6 حصيات؟", "6 حصيات"),
      it("You have 3 dates and get 2 more. How many in all?", "5", "عندك 3 تمرات وحصلت على تمرتين أخريين. كم صار العدد؟", "5"),
      it("You have 5 balloons and 1 pops. How many are left?", "4", "عندك 5 بالونات وانفجر واحد. كم بقي؟", "4"),
      it("Show 10 with your fingers. How many fingers are on each hand?", "5 on each hand", "أظهر 10 بأصابعك. كم إصبعًا في كل يد؟", "5 في كل يد")
    ] }
  },

  "ma.k.alg": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Make a pattern", "Use two kinds of objects, such as a date and a stone. Make a line: date, stone, date, stone. Ask your child to say what comes next and keep going. Then try a pattern with three parts: date, stone, stone, date, stone, stone. Say the pattern aloud like a song.", "نصنع نمطًا", "استعمل نوعين من الأشياء، كتمرة وحصاة. كوّن صفًّا: تمرة، حصاة، تمرة، حصاة. اطلب من طفلك أن يقول ما التالي ويكمل. ثم جرّب نمطًا من ثلاثة أجزاء: تمرة، حصاة، حصاة، تمرة، حصاة، حصاة. واقرآ النمط بصوت عالٍ كأنه أنشودة."),
      act("Spot the mistake", "Make a pattern with one mistake in it, such as red, blue, red, red, blue. Ask your child to find the piece that does not belong and fix it. Then let them make a mistake for you to find. Explaining why a piece is wrong is real mathematical thinking.", "نكتشف الخطأ", "كوّن نمطًا فيه خطأ واحد، مثل: أحمر، أزرق، أحمر، أحمر، أزرق. اطلب من طفلك أن يجد القطعة التي لا تنتمي ويصلحها. ثم دعه يضع لك خطأً لتكتشفه. فشرح سبب الخطأ تفكير رياضي حقيقي."),
      act("Sort it your way", "Give your child a pile of mixed items from a drawer: spoons, buttons, pegs. Ask them to sort them into groups and tell you the rule. Then sort in a different way. Can you guess the rule when they sort and you do not know it?", "نصنّف بطريقتنا", "أعطِ طفلك كومة من أشياء مختلطة من درج: ملاعق وأزرار ومشابك. اطلب منه تصنيفها في مجموعات وأن يخبرك بالقاعدة. ثم صنّفا بطريقة أخرى. هل تستطيع تخمين القاعدة حين يصنّف وأنت لا تعرفها؟")
    ],
    example: ex("Look at this pattern: clap, stomp, clap, stomp, clap, __. What comes next?", ["Say the pattern: clap, stomp, clap, stomp, clap.", "It repeats two things in the same order.", "After clap comes stomp."], "stomp", "انظر إلى هذا النمط: تصفيق، دبّ بالقدم، تصفيق، دبّ بالقدم، تصفيق، __. ما التالي؟", ["قل النمط: تصفيق، دبّ، تصفيق، دبّ، تصفيق.", "يتكرر شيئان بالترتيب نفسه.", "بعد التصفيق يأتي الدبّ بالقدم."], "دبّ بالقدم"),
    sheet: { title: T("Patterns and rules", "الأنماط والقواعد"), instructions: T("A grown-up reads each pattern aloud. Your child says what comes next.", "يقرأ شخص بالغ كل نمط بصوت عالٍ، ويقول طفلك ما التالي."), items: [
      it("red, blue, red, blue, red, __", "blue", "أحمر، أزرق، أحمر، أزرق، أحمر، __", "أزرق"),
      it("circle, square, circle, square, __", "circle", "دائرة، مربع، دائرة، مربع، __", "دائرة"),
      it("big, small, small, big, small, small, __", "big", "كبير، صغير، صغير، كبير، صغير، صغير، __", "كبير"),
      it("1, 2, 3, 1, 2, __", "3", "1، 2، 3، 1، 2، __", "3"),
      it("2, 4, 6, __", "8", "2، 4، 6، __", "8"),
      it("Which one does not belong: apple, banana, shoe, orange?", "shoe (the others are fruit)", "أيها لا ينتمي: تفاحة، موزة، حذاء، برتقالة؟", "الحذاء (الباقي فاكهة)"),
      it("Make your own pattern with claps and tell the rule.", "Any repeating pattern with a clear rule.", "كوّن نمطك الخاص بالتصفيق وقل القاعدة.", "أي نمط متكرر بقاعدة واضحة.")
    ] }
  },

  "ma.k.geo": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Shape hunt at home", "Walk around your home and look for circles, squares, rectangles and triangles. A clock is a circle, a window may be a rectangle. Ask your child to tell you the shape and how many sides it has. Take a photo or draw the best ones.", "رحلة البحث عن الأشكال", "تجوّلا في البيت وابحثا عن دوائر ومربعات ومستطيلات ومثلثات. الساعة دائرة، والنافذة قد تكون مستطيلًا. اطلب من طفلك أن يسمّي الشكل ويقول كم ضلعًا له. صوّرا أجمل ما وجدتما أو ارسماه."),
      act("Where is it?", "Hide a small toy and give clues with position words: it is under the table, next to the chair, inside the basket. Then swap: your child gives the clues and you search. These words help them describe where things are.", "أين هو؟", "أخفِ لعبة صغيرة وأعطِ تلميحات بكلمات الموقع: هي تحت الطاولة، بجانب الكرسي، داخل السلة. ثم بدّلا الأدوار: يعطيك طفلك التلميحات وأنت تبحث. تساعده هذه الكلمات على وصف أماكن الأشياء."),
      act("Longer, shorter, heavier", "Collect three objects, such as a pencil, a spoon and a book. Ask which is longest, which is shortest. Line them up from shortest to longest. Then hold two things in your hands and ask which feels heavier. Compare before you use a ruler.", "أطول وأقصر وأثقل", "اجمع ثلاثة أشياء، كقلم وملعقة وكتاب. اسأل: أيها الأطول وأيها الأقصر. رتّبها من الأقصر إلى الأطول. ثم أمسك شيئين بيديك واسأل: أيهما أثقل؟ قارنا قبل أن تستعملا المسطرة.")
    ],
    example: ex("Which shape has three sides and three corners?", ["Think of a slice of pizza or a roof.", "Count the sides: one, two, three.", "A shape with three sides is a triangle."], "A triangle", "أي شكل له ثلاثة أضلاع وثلاث زوايا؟", ["فكّر في شريحة بيتزا أو سقف بيت.", "عدّ الأضلاع: واحد، اثنان، ثلاثة.", "الشكل ذو الأضلاع الثلاثة مثلث."], "مثلث"),
    sheet: { title: T("Shapes and where things are", "الأشكال وأماكن الأشياء"), instructions: T("A grown-up reads each question aloud. Pointing to real objects helps.", "يقرأ شخص بالغ كل سؤال بصوت عالٍ. والإشارة إلى أشياء حقيقية تساعد."), items: [
      it("What shape is a ball: a circle or a sphere (a round solid)?", "A sphere (a round solid)", "ما شكل الكرة: دائرة أم كرة مجسّمة؟", "كرة مجسّمة"),
      it("How many sides does a square have?", "4", "كم ضلعًا للمربع؟", "4"),
      it("How many sides does a triangle have?", "3", "كم ضلعًا للمثلث؟", "3"),
      it("Which is longer: a pencil or a car?", "A car", "أيهما أطول: القلم أم السيارة؟", "السيارة"),
      it("If the ball is on the table, where is the table compared with the ball?", "Under the ball", "إذا كانت الكرة على الطاولة، فأين الطاولة بالنسبة إلى الكرة؟", "تحت الكرة"),
      it("Which is heavier: a feather or a stone?", "A stone", "أيهما أثقل: ريشة أم حجر؟", "الحجر"),
      it("Name something in the room that is a rectangle.", "A door, a book, a window, a table top ...", "سمِّ شيئًا في الغرفة على شكل مستطيل.", "باب أو كتاب أو نافذة أو سطح طاولة ...")
    ] }
  },

  "ma.k.dat": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Sort and count", "Pour out a bag of mixed items, such as buttons of different colours. Ask your child to sort them into groups, count each group and say which has the most and which has the fewest. Ask: how many more is that?", "نصنّف ونعدّ", "افرد كيسًا من أشياء مختلطة، كأزرار بألوان مختلفة. اطلب من طفلك تصنيفها في مجموعات وعدّ كل مجموعة، وقول أي مجموعة فيها الأكثر وأيها فيها الأقل. اسأل: كم هو الفرق؟"),
      act("Our family graph", "Ask everyone at home to choose a favourite fruit from three choices. Draw one square for each person above the fruit they chose. Now look at the graph and ask: which is the most popular? Which has the fewest? Are any the same?", "رسم عائلتنا البياني", "اطلب من كل أفراد البيت أن يختاروا فاكهتهم المفضلة من ثلاث. ارسم مربعًا لكل شخص فوق الفاكهة التي اختارها. ثم انظرا إلى الرسم واسألا: أي فاكهة هي الأكثر حبًا؟ وأيها الأقل؟ وهل تتساوى فاكهتان؟"),
      act("Will it happen?", "Talk about what will certainly happen, might happen or cannot happen. The sun will rise tomorrow. It might rain. A fish will not climb a tree. Ask your child to give one of each. Then drop a coin ten times and see how often it lands on each side.", "هل سيحدث؟", "تحدّثا عمّا سيحدث حتمًا وما قد يحدث وما لا يمكن أن يحدث. الشمس ستشرق غدًا. قد تمطر. السمكة لن تتسلق شجرة. اطلب من طفلك مثالًا لكل نوع. ثم ارميا قطعة نقد عشر مرات وانظرا كم مرة تقع على كل وجه.")
    ],
    example: ex("In a picture graph, 5 children like apples and 3 like bananas. Which has more, and how many more?", ["Count the apples: 5.", "Count the bananas: 3.", "Apples are more. Take away 3 from 5 to find how many more: 2."], "Apples, by 2", "في رسم بياني بالصور، 5 أطفال يحبون التفاح و3 يحبون الموز. أيهما أكثر وبكم؟", ["عدّ التفاح: 5.", "عدّ الموز: 3.", "التفاح أكثر. اطرح 3 من 5 لتعرف الفرق: 2."], "التفاح بفارق 2"),
    sheet: { title: T("Sorting, counting and comparing", "التصنيف والعدّ والمقارنة"), instructions: T("A grown-up reads each question aloud. Use real objects where you can.", "يقرأ شخص بالغ كل سؤال بصوت عالٍ. استعملا أشياء حقيقية حيثما أمكن."), items: [
      it("There are 4 red buttons and 6 blue buttons. Which colour has more?", "Blue", "هناك 4 أزرار حمراء و6 أزرار زرقاء. أي لون أكثر؟", "الأزرق"),
      it("How many buttons are there altogether?", "10", "كم زرًّا في المجموع؟", "10"),
      it("How many more blue buttons than red?", "2", "كم زرًّا أزرق زيادة على الأحمر؟", "2"),
      it("Which can sort things: by colour, by size, by shape?", "All of them", "بأي شيء يمكن تصنيف الأشياء: باللون أم بالحجم أم بالشكل؟", "بكلها"),
      it("In a graph, one group has 3 squares and another has 3 squares. What do you notice?", "They are the same.", "في رسم بياني، مجموعة فيها 3 مربعات وأخرى فيها 3 مربعات. ماذا تلاحظ؟", "إنهما متساويتان."),
      it("Which is certain: the sun rises tomorrow, or it snows in Abu Dhabi today?", "The sun rises tomorrow", "أيهما مؤكد: تشرق الشمس غدًا أم يتساقط الثلج في أبوظبي اليوم؟", "تشرق الشمس غدًا"),
      it("Ask five people if they like milk or juice. Count each.", "Answers vary.", "اسأل خمسة أشخاص: هل تحبون الحليب أم العصير؟ وعدّ كل مجموعة.", "تختلف الإجابات.")
    ] }
  },

  "ma.k.bal": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Maths at snack time", "Let your child set out plates and share snacks: one plate for each person, two dates on each plate. Ask: how many plates, how many dates in all? Is everyone's share fair? Real jobs make number ideas easy to see.", "رياضيات وقت الوجبة", "دع طفلك يضع الأطباق ويوزّع الوجبة الخفيفة: طبقًا لكل شخص وتمرتين في كل طبق. اسأل: كم طبقًا؟ وكم تمرة في المجموع؟ هل حصة الجميع عادلة؟ فالأعمال الحقيقية تجعل أفكار الأعداد واضحة."),
      act("Count steps", "Count steps from the door to the kitchen, then to your room. Which is more? How many more? Then try with giant steps and tiny steps and see if the number changes. Why does it?", "نعدّ الخطوات", "عدّا الخطوات من الباب إلى المطبخ ثم إلى غرفتك. أيهما أكثر؟ وبكم؟ ثم جرّبا بخطوات كبيرة وخطوات صغيرة وانظرا هل يتغير العدد. ولماذا يتغير؟"),
      act("Bedtime number story", "Make up a short story with numbers: three birds sat on a palm tree, two flew away. How many are left? Let your child make a story for you. Stories turn adding and taking away into something to picture.", "حكاية أعداد قبل النوم", "ألّفا حكاية قصيرة بالأعداد: جلست ثلاثة عصافير على نخلة وطار اثنان. كم بقي؟ ودع طفلك يؤلف لك حكاية. فالحكايات تجعل الجمع والطرح شيئًا يمكن تخيّله.")
    ],
    example: ex("There are 5 children and 3 chairs. Are there enough chairs? How many more are needed?", ["Match each chair with one child: 3 children have a chair.", "Two children are left standing.", "We need 2 more chairs."], "2 more chairs", "هناك 5 أطفال و3 كراسي. هل الكراسي كافية؟ وكم كرسيًّا نحتاج بعد؟", ["نقابل كل كرسي بطفل: 3 أطفال لهم كراسي.", "يبقى طفلان واقفين.", "نحتاج إلى كرسيين آخرين."], "كرسيان آخران"),
    sheet: { title: T("A little of everything", "قليل من كل شيء"), instructions: T("A grown-up reads each question aloud. Use fingers or objects if they help.", "يقرأ شخص بالغ كل سؤال بصوت عالٍ. استعن بالأصابع أو الأشياء إن ساعدتك."), items: [
      it("Count from 1 to 15.", "1, 2, 3 ... 15", "عدّ من 1 إلى 15.", "1، 2، 3 ... 15"),
      it("What is 2 + 3?", "5", "كم يساوي 2 + 3؟", "5"),
      it("What comes next: red, green, red, green, __", "red", "ما التالي: أحمر، أخضر، أحمر، أخضر، __", "أحمر"),
      it("How many corners does a square have?", "4", "كم زاوية للمربع؟", "4"),
      it("Which is heavier: a bag of rice or a balloon?", "The bag of rice", "أيهما أثقل: كيس الأرز أم البالون؟", "كيس الأرز"),
      it("5 apples, 2 are eaten. How many are left?", "3", "5 تفاحات أُكلت منها تفاحتان. كم بقي؟", "3"),
      it("Which group has more: 7 stones or 9 stones?", "9 stones", "أي مجموعة أكثر: 7 حصيات أم 9 حصيات؟", "9 حصيات")
    ] }
  },

  "rd.k.fnd": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Sound games", "Say two words and ask whether they rhyme: cat, hat (yes), cat, dog (no). Take turns making up silly rhymes. Then clap the beats in names: Sa-ra has two claps, Fa-ti-ma has three. Listening to sounds comes before reading letters.", "ألعاب الأصوات", "انطق كلمتين واسأل: هل تتقافيان؟ cat و hat (نعم)، cat و dog (لا). وتناوبا على تأليف قوافٍ طريفة. ثم صفّقا مقاطع الأسماء: سارة فيها تصفيقتان، وفاطمة فيها ثلاث تصفيقات. فالإصغاء إلى الأصوات يسبق قراءة الحروف."),
      act("Letter of the day", "Choose one English letter a day. Say its name and its sound. Look for it on signs, packets and books. Trace it in a tray of sand or rice with a finger. Say words that begin with it: b for ball, banana, bus.", "حرف اليوم", "اختر حرفًا إنجليزيًّا واحدًا كل يوم. انطق اسمه وصوته. وابحثا عنه في اللافتات والعلب والكتب. ارسماه بإصبعك في صينية من الرمل أو الأرز. وقولا كلمات تبدأ به: b لـ ball و banana و bus."),
      act("Read together", "Share a picture book every day. Run your finger under the words from left to right as you read. Stop and ask your child to find a letter they know, or to say what sound a word begins with. Read the same favourite book again and again; it is how reading grows.", "نقرأ معًا", "شاركا كتابًا مصوّرًا كل يوم. مرّر إصبعك تحت الكلمات من اليسار إلى اليمين وأنت تقرأ. توقف واطلب من طفلك أن يجد حرفًا يعرفه أو يقول بأي صوت تبدأ الكلمة. أعيدا قراءة الكتاب المفضل نفسه مرارًا؛ فهكذا تنمو القراءة.")
    ],
    example: ex("What sound does the word ball begin with?", ["Say the word slowly: b, all.", "Listen to the very first sound: /b/.", "Ball begins with the letter b."], "/b/ (the letter b)", "What sound does the word ball begin with?", ["انطق الكلمة ببطء: b, all.", "أصغِ إلى أول صوت: /b/.", "تبدأ ball بالحرف b."], "/b/ (the letter b)"),
    sheet: { englishOnly: true, title: T("Sounds and letters", "الأصوات والحروف"), instructions: T("A grown-up reads each question aloud. Your child answers or points.", "يقرأ شخص بالغ كل سؤال بصوت عالٍ، ويجيب طفلك أو يشير."), items: [
      en("Which word starts like sun: sock or hat?", "sock"),
      en("Do these words rhyme: cat, mat?", "Yes"),
      en("Do these words rhyme: pen, bus?", "No"),
      en("Clap the parts of: banana (ba-na-na). How many claps?", "3"),
      en("Point to the letter a: b, a, d.", "a"),
      en("What sound does the letter m make?", "/m/ as in moon"),
      en("Say the letters of your name.", "The child says their own letters.")
    ] }
  },

  "rd.k.cmp": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Talk about the picture", "Before reading a picture book, look at the cover. Ask: what do you see? What might happen? As you read, pause and ask: why do you think she did that? Looking and wondering are the first steps of understanding.", "نتحدث عن الصورة", "قبل قراءة كتاب مصوّر، انظرا إلى الغلاف. اسأل: ماذا ترى؟ ماذا قد يحدث؟ وأثناء القراءة توقف واسأل: لماذا تظن أنها فعلت ذلك؟ فالنظر والتساؤل أولى خطوات الفهم."),
      act("Beginning, middle, end", "After a story, ask your child to tell you what happened first, next and last. Use three pieces of paper and let them draw each part. Put them in order and tell the story again using the drawings.", "بداية ووسط ونهاية", "بعد القصة اطلب من طفلك أن يخبرك ماذا حدث أولًا ثم ماذا حدث بعده وأخيرًا. استعمل ثلاث أوراق ودعه يرسم كل جزء. رتّبها وأعيدا رواية القصة بمساعدة الرسوم."),
      act("Who, what, where", "Ask simple questions after a page or story: who is in it? where are they? what are they doing? what do you think will happen next? Accept short answers and praise any good guess, then go back to the page to check together.", "من وماذا وأين", "اطرح أسئلة بسيطة بعد صفحة أو قصة: من فيها؟ أين هم؟ ماذا يفعلون؟ ماذا تظن سيحدث بعد ذلك؟ اقبل الإجابات القصيرة وامدح كل تخمين جيد، ثم عودا إلى الصفحة لتتحققا معًا.")
    ],
    example: ex("Listen: Salem put on his hat and went to the beach with his sister. They built a sandcastle. Who went to the beach? What did they build?", ["Listen for the names: Salem and his sister.", "Listen for what they did: they built a sandcastle.", "Answer in a full sentence."], "Salem and his sister went to the beach. They built a sandcastle.", "Listen: Salem put on his hat and went to the beach with his sister. They built a sandcastle. Who went to the beach? What did they build?", ["أصغِ إلى الأسماء: سالم وأخته.", "أصغِ إلى ما فعلاه: بنيا قلعة رمل.", "أجب بجملة كاملة."], "Salem and his sister went to the beach. They built a sandcastle."),
    sheet: { englishOnly: true, title: T("Listening to a story", "الإصغاء إلى قصة"), instructions: T("A grown-up reads the story aloud, then asks the questions. Your child answers in their own words.", "يقرأ شخص بالغ القصة بصوت عالٍ ثم يطرح الأسئلة. ويجيب طفلك بكلماته."), items: [
      en("STORY. Noura has a small kitten called Misk. One morning Misk was not in her basket. Noura looked under the bed. She looked beside the sofa. At last she heard a tiny meow. Misk was asleep in the laundry basket. Noura smiled and gave her a gentle hug.", "(Read the story aloud. Questions follow.)"),
      en("Who is the story about?", "Noura and her kitten Misk"),
      en("What was missing in the morning?", "The kitten (Misk)"),
      en("Where did Noura look first?", "Under the bed"),
      en("Where did she find Misk?", "In the laundry basket"),
      en("How do you think Noura felt at the end?", "Happy and relieved"),
      en("What happened first, and what happened last?", "First the kitten was missing; last Noura found her.")
    ] }
  },

  "rd.k.voc": {
    reviewed: { en: false, ar: false },
    activities: [
      act("New word, new sentence", "Choose one new word from a book each day, such as enormous, tiny or gentle. Explain it in simple words, act it out, and use it in a sentence about your own day. Ask your child to use it too. A word used three times starts to stay.", "كلمة جديدة وجملة جديدة", "اختر كلمة جديدة من كتاب كل يوم، مثل enormous أو tiny أو gentle. اشرحها بكلمات بسيطة ومثّلها واستعملها في جملة عن يومك. واطلب من طفلك أن يستعملها أيضًا. فالكلمة التي تُستعمل ثلاث مرات تبدأ بالرسوخ."),
      act("Opposites game", "Say a word and let your child say its opposite: hot and cold, up and down, open and closed, big and small. Then switch. Look at pictures in books and describe them with two opposite words.", "لعبة الأضداد", "قل كلمة ودع طفلك يقول ضدها: hot و cold و up و down و open و closed و big و small. ثم بدّلا الأدوار. وانظرا إلى صور الكتب وصفاها بكلمتين متضادتين."),
      act("Name the group", "Gather things from around the house and ask what group they belong to: spoon, fork, knife (things we eat with). Or say the group and ask for three things: animals, colours, things in the kitchen. Grouping builds word knowledge.", "نسمّي المجموعة", "اجمع أشياء من البيت واسأل إلى أي مجموعة تنتمي: ملعقة وشوكة وسكين (أشياء نأكل بها). أو قل اسم المجموعة واطلب ثلاثة أشياء منها: حيوانات أو ألوان أو أشياء في المطبخ. فالتصنيف ينمّي معرفة الكلمات.")
    ],
    example: ex("What is the opposite of hot?", ["Think of ice cream or a cold drink.", "Hot is the temperature of tea or sun on the sand.", "The word we use for the other end is cold."], "cold", "What is the opposite of hot?", ["فكّر في الآيس كريم أو مشروب بارد.", "Hot هي حرارة الشاي أو الشمس على الرمل.", "الكلمة المقابلة هي cold."], "cold"),
    sheet: { englishOnly: true, title: T("Words and their meanings", "الكلمات ومعانيها"), instructions: T("A grown-up reads each question aloud. Your child answers or points.", "يقرأ شخص بالغ كل سؤال بصوت عالٍ، ويجيب طفلك أو يشير."), items: [
      en("What is the opposite of big?", "small"),
      en("What is the opposite of up?", "down"),
      en("Which one is an animal: cat, chair, cup?", "cat"),
      en("Which one is a colour: green, spoon, door?", "green"),
      en("Which word means very, very big: tiny, enormous, soft?", "enormous"),
      en("Name two things you can eat.", "Any food, such as bread and rice."),
      en("Name three words for things in a classroom.", "Any three, such as desk, pencil, book.")
    ] }
  },

  "rd.k.wl": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Write my name", "Help your child write their name with a pencil, then in sand, with chalk or with paint. Show how to begin with a capital letter and use small letters for the rest. Then write the names of family members together.", "أكتب اسمي", "ساعد طفلك على كتابة اسمه بقلم الرصاص ثم في الرمل أو بالطباشير أو بالألوان. أره كيف يبدأ بحرف كبير ثم أحرف صغيرة. ثم اكتبا معًا أسماء أفراد العائلة."),
      act("Draw and say", "Ask your child to draw a picture of something from their day, then tell you about it in a sentence. Write their sentence underneath, saying each word as you write. Later, let them add letters they know, or write the first letter of each word.", "نرسم ونقول", "اطلب من طفلك أن يرسم شيئًا من يومه ثم يخبرك عنه في جملة. اكتب جملته تحت الرسمة وأنت تنطق كل كلمة. وفي وقت لاحق دعه يضيف حروفًا يعرفها، أو يكتب الحرف الأول من كل كلمة."),
      act("Labels around the home", "Write labels on cards for a few things in the house: door, chair, table. Read them together, stick them on, then ask your child to match them again. This shows that writing carries meaning and that letters make words.", "ملصقات في البيت", "اكتب أسماء بعض الأشياء في البيت على بطاقات: door و chair و table. اقرآها معًا والصقاها، ثم اطلب من طفلك أن يطابقها من جديد. وهذا يريه أن الكتابة تحمل معنى وأن الحروف تكوّن الكلمات.")
    ],
    example: ex("Write a sentence about your picture: a sun.", ["Say it first: I see the sun.", "Write each word and leave a space between words.", "Begin with a capital letter and end with a full stop."], "I see the sun.", "Write a sentence about your picture: a sun.", ["قلها أولًا: I see the sun.", "اكتب كل كلمة واترك فراغًا بين الكلمات.", "ابدأ بحرف كبير وانتهِ بنقطة."], "I see the sun."),
    sheet: { englishOnly: true, title: T("Writing and language", "الكتابة واللغة"), instructions: T("A grown-up reads each task aloud. Your child writes or says the answer.", "يقرأ شخص بالغ كل مهمة بصوت عالٍ، ويكتب طفلك الجواب أو يقوله."), items: [
      en("Write your name.", "The child's own name with a capital first letter."),
      en("Which is the capital letter: a or A?", "A"),
      en("Say a sentence about your day.", "Any complete sentence."),
      en("What goes at the end of a sentence: a dot or a star?", "A dot (full stop)"),
      en("Write the first letter of: sun, moon, star.", "s, m, s"),
      en("Put the words in order: dog the runs.", "The dog runs."),
      en("Draw a picture and write one word to go with it.", "Any picture with a matching word.")
    ] }
  },

  "rd.k.bal": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Read every day", "Choose a picture book each evening and read it together for ten calm minutes. Let your child choose sometimes. Talk about the pictures, the story and the words. It does not matter if it is the same book again; repeating is how new words stay.", "نقرأ كل يوم", "اختر كل مساء كتابًا مصوّرًا واقرآه معًا عشر دقائق هادئة. دع طفلك يختار أحيانًا. وتحدّثا عن الصور والقصة والكلمات. لا بأس أن يكون الكتاب نفسه؛ فالتكرار هو ما يثبّت الكلمات الجديدة."),
      act("Tell it back", "After a story, ask your child to retell it in their own words with the pictures as help. Ask: what was your favourite part and why? Retelling shows what they understood and builds speaking skills.", "نعيد الحكاية", "بعد القصة اطلب من طفلك أن يعيد روايتها بكلماته مستعينًا بالصور. اسأل: ما الجزء المفضل عندك ولماذا؟ فإعادة الرواية تُظهر ما فهمه وتنمّي مهارات الكلام."),
      act("Letters and scribbles", "Keep paper and crayons within reach. Let your child write shopping lists, signs for a toy shop or a letter to a relative. Invented spellings are fine at this age; praise the idea and read it back together.", "حروف وخربشات", "اجعل الورق وأقلام التلوين في متناوله. دعه يكتب قوائم تسوّق أو لافتات لمتجر ألعاب أو رسالة إلى قريب. لا بأس بالتهجئة المبتكرة في هذا العمر؛ امدح الفكرة واقرآ المكتوب معًا.")
    ],
    example: ex("Which word starts with the sound /m/: moon or sun?", ["Say each word slowly.", "Moon starts with the sound mmm.", "Sun starts with the sound sss."], "moon", "Which word starts with the sound /m/: moon or sun?", ["انطق كل كلمة ببطء.", "تبدأ moon بصوت mmm.", "تبدأ sun بصوت sss."], "moon"),
    sheet: { englishOnly: true, title: T("A little of reading and writing", "قليل من القراءة والكتابة"), instructions: T("A grown-up reads each question aloud. Your child answers or points.", "يقرأ شخص بالغ كل سؤال بصوت عالٍ، ويجيب طفلك أو يشير."), items: [
      en("Say the letter that starts: apple.", "a"),
      en("Do these rhyme: hat, bat?", "Yes"),
      en("What is the opposite of open?", "closed (shut)"),
      en("Listen: Sara has a red ball. What colour is the ball?", "red"),
      en("Which way do we read: left to right or right to left (in English)?", "Left to right"),
      en("Write the first letter of your name.", "The child writes it as a capital letter."),
      en("What goes at the end of a sentence?", "A dot (full stop)")
    ] }
  },

  "ma.911.num": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Percent in real shops", "Next time you shop, ask your child to work out a price after a discount, such as 20% off AED 150, and then the price with 5% VAT added. Ask them to explain two ways: find 10% and double it, or multiply by 0.8. Comparing methods builds flexible thinking.", "النسبة المئوية في المتاجر", "في المرة القادمة التي تتسوقان فيها، اطلب من طفلك حساب السعر بعد خصم، مثل خصم 20% من 150 درهمًا، ثم السعر بعد إضافة ضريبة قيمة مضافة 5%. واطلب منه أن يشرح طريقتين: إيجاد 10% ومضاعفتها، أو الضرب في 0.8. فمقارنة الطرق تنمّي المرونة في التفكير."),
      act("Very big, very small", "Write big and small numbers from real life in scientific notation: the Earth is about 150,000,000 km from the Sun, which is 1.5 x 10^8 km, and a human hair is about 0.00008 m wide, or 8 x 10^-5 m. Ask your child to move the decimal point and say why the power of ten changes.", "كبير جدًا وصغير جدًا", "اكتبا أعدادًا كبيرة وصغيرة من الحياة بالصيغة العلمية: تبعد الأرض عن الشمس نحو 150,000,000 كم أي 1.5 × 10^8 كم، وعرض الشعرة نحو 0.00008 م أي 8 × 10^-5 م. اطلب من طفلك أن ينقل الفاصلة العشرية ويشرح لماذا تتغير قوة العشرة."),
      act("Powers and roots", "Make a table of squares and cubes from 1 to 10 together. Ask: what is the square root of 81? Which cube is 64? Between which two whole numbers does the square root of 20 fall? Estimating before using a calculator is a strong habit.", "القوى والجذور", "كوّنا معًا جدولًا بمربعات الأعداد ومكعباتها من 1 إلى 10. اسأل: ما الجذر التربيعي للعدد 81؟ وأي مكعب يساوي 64؟ وبين أي عددين صحيحين يقع الجذر التربيعي للعدد 20؟ فالتقدير قبل استعمال الآلة الحاسبة عادة قوية.")
    ],
    example: ex("Simplify 2^3 x 2^4.", ["When the base is the same, add the powers: 3 + 4 = 7.", "So 2^3 x 2^4 = 2^7.", "2^7 = 2 x 2 x 2 x 2 x 2 x 2 x 2 = 128."], "2^7 = 128", "بسّط: 2^3 × 2^4.", ["عندما يكون الأساس واحدًا نجمع القوى: 3 + 4 = 7.", "إذن 2^3 × 2^4 = 2^7.", "2^7 = 2 × 2 × 2 × 2 × 2 × 2 × 2 = 128."], "2^7 = 128"),
    sheet: { title: T("Numbers, powers and percentages", "الأعداد والقوى والنسب المئوية"), instructions: T("Show your working. Check each answer by estimating first.", "اعرض خطوات الحل. وتحقق من كل جواب بالتقدير أولًا."), items: [
      it("3^2 x 3^3 = ?", "3^5 = 243", "3^2 × 3^3 = ؟", "3^5 = 243"),
      it("Write 4,500 in scientific notation.", "4.5 x 10^3", "اكتب 4,500 بالصيغة العلمية.", "4.5 × 10^3"),
      it("Write 5.2 x 10^-2 as an ordinary number.", "0.052", "اكتب 5.2 × 10^-2 كعدد عادي.", "0.052"),
      it("What is the square root of 49?", "7", "ما الجذر التربيعي للعدد 49؟", "7"),
      it("Find 15% of 80.", "12 (10% is 8, 5% is 4)", "أوجد 15% من 80.", "12 (10% تساوي 8 و5% تساوي 4)"),
      it("A coat costs AED 200. The price goes up 10%, then down 10%. What is the final price?", "AED 198 (200 -> 220 -> 198)", "معطف ثمنه 200 درهم. زاد السعر 10% ثم نقص 10%. ما السعر النهائي؟", "198 درهمًا (200 ثم 220 ثم 198)"),
      it("Is the square root of 2 a rational or an irrational number? Why?", "Irrational: its decimal never ends or repeats.", "هل الجذر التربيعي للعدد 2 عدد نسبي أم غير نسبي؟ ولماذا؟", "غير نسبي: كسره العشري لا ينتهي ولا يتكرر.")
    ] }
  },

  "ma.911.alg": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Balance it", "Write an equation such as 3x + 5 = 20 and treat it like a balance scale. Do the same thing to both sides, one step at a time: subtract 5, then divide by 3. Ask your child to check by putting the answer back. Then let them write an equation for you to solve.", "نوازن الميزان", "اكتب معادلة مثل 3x + 5 = 20 وعاملها كميزان. افعل الشيء نفسه بطرفيها خطوة بعد خطوة: اطرح 5 ثم اقسم على 3. واطلب من طفلك أن يتحقق بإرجاع الجواب إلى المعادلة. ثم دعه يكتب لك معادلة لتحلها."),
      act("Taxi fare lines", "A taxi charges AED 12 to start and AED 2 for each kilometre. Make a table for 0 to 6 km, plot the points and draw the line. Ask: what does the 12 tell us on the graph? What does the 2 tell us? Connect the equation y = 2x + 12 to the picture.", "خط أجرة التاكسي", "يتقاضى تاكسي 12 درهمًا عند الانطلاق و2 درهم عن كل كيلومتر. كوّنا جدولًا من 0 إلى 6 كم وعيّنا النقاط وارسما الخط. اسأل: ماذا يخبرنا الرقم 12 على الرسم؟ وماذا يخبرنا الرقم 2؟ واربطا المعادلة y = 2x + 12 بالرسم."),
      act("Two clues, two unknowns", "Make a puzzle: two numbers add to 10 and differ by 2. Solve it by guessing and checking, then by writing x + y = 10 and x - y = 2. Add the equations to see how the y disappears. Seeing the same answer both ways builds trust in algebra.", "مجهولان وشرطان", "ألّفا لغزًا: عددان مجموعهما 10 والفرق بينهما 2. حلاه بالتخمين والتحقق، ثم بكتابة x + y = 10 و x - y = 2. اجمعا المعادلتين لترى كيف يختفي y. ورؤية الجواب نفسه بالطريقتين تبني الثقة بالجبر.")
    ],
    example: ex("Solve 3x + 5 = 20.", ["Subtract 5 from both sides: 3x = 15.", "Divide both sides by 3: x = 5.", "Check: 3 x 5 + 5 = 20. It works."], "x = 5", "حلّ المعادلة: 3x + 5 = 20.", ["اطرح 5 من الطرفين: 3x = 15.", "اقسم الطرفين على 3: x = 5.", "تحقق: 3 × 5 + 5 = 20. صحيح."], "x = 5"),
    sheet: { title: T("Equations and graphs", "المعادلات والرسوم البيانية"), instructions: T("Show each step. Check your answer in the original equation.", "اعرض كل خطوة. وتحقق من جوابك في المعادلة الأصلية."), items: [
      it("Solve 2x - 7 = 9.", "x = 8", "حلّ: 2x - 7 = 9.", "x = 8"),
      it("If y = 2x + 1, find y when x = 4.", "y = 9", "إذا كان y = 2x + 1 فأوجد y عندما x = 4.", "y = 9"),
      it("Find the slope of the line through (1, 3) and (3, 7).", "2 (rise 4, run 2)", "أوجد ميل المستقيم المار بالنقطتين (1، 3) و(3، 7).", "2 (الارتفاع 4 والامتداد 2)"),
      it("Solve: x + y = 10 and x - y = 2.", "x = 6, y = 4", "حلّ: x + y = 10 و x - y = 2.", "x = 6 و y = 4"),
      it("Factor x^2 + 5x + 6.", "(x + 2)(x + 3)", "حلّل إلى عوامل: x^2 + 5x + 6.", "(x + 2)(x + 3)"),
      it("Solve x^2 = 49.", "x = 7 or x = -7", "حلّ: x^2 = 49.", "x = 7 أو x = -7"),
      it("A taxi costs AED 12 plus AED 2 per km. How much is a 9 km ride?", "AED 30", "أجرة تاكسي 12 درهمًا زائد 2 درهم لكل كيلومتر. كم أجرة رحلة 9 كم؟", "30 درهمًا")
    ] }
  },

  "ma.911.geo": {
    reviewed: { en: false, ar: false },
    activities: [
      act("The 3-4-5 rope", "Mark a rope with knots at equal spaces. Make a triangle with sides 3, 4 and 5 units long. Check the corner with a book: it is a right angle. Try 6, 8 and 10. Ask: why does a squared + b squared = c squared hold? Builders have used this idea for thousands of years.", "حبل 3-4-5", "علّم حبلًا بعقد على مسافات متساوية. كوّن مثلثًا أضلاعه 3 و4 و5 وحدات. تحقق من الزاوية بكتاب: إنها قائمة. جرّب 6 و8 و10. اسأل: لماذا يصح أن a^2 + b^2 = c^2؟ استعمل البنّاؤون هذه الفكرة منذ آلاف السنين."),
      act("Measure a height from a shadow", "On a sunny day, measure your child's shadow and your own height. At the same time, measure a tall pole or building's shadow. Use similar triangles: height of pole / its shadow = child's height / child's shadow. Work out the height and check it with a measuring app if you like.", "نقيس الارتفاع من الظل", "في يوم مشمس قس ظل طفلك وطوله. وفي الوقت نفسه قس ظل عمود طويل أو مبنى. استعمل تشابه المثلثات: ارتفاع العمود ÷ ظله = طول الطفل ÷ ظله. احسب الارتفاع وتحقق منه بتطبيق قياس إن شئت."),
      act("Volumes at home", "Measure a cylinder, such as a tin of beans, and a box. Find the volume of each (pi x r^2 x h for the tin, length x width x height for the box). Which holds more? Then check by filling one with rice and pouring it into the other.", "الأحجام في البيت", "قس أسطوانة مثل علبة معلبات وصندوقًا. أوجد حجم كل منهما (π × r^2 × h للعلبة، والطول × العرض × الارتفاع للصندوق). أيهما يتسع لأكثر؟ ثم تحقق بملء أحدهما بالأرز وسكبه في الآخر.")
    ],
    example: ex("A right triangle has legs 6 cm and 8 cm. How long is the hypotenuse?", ["Use a^2 + b^2 = c^2.", "6^2 + 8^2 = 36 + 64 = 100.", "c = the square root of 100 = 10."], "10 cm", "مثلث قائم الزاوية ضلعاه القائمان 6 سم و8 سم. كم طول الوتر؟", ["استعمل a^2 + b^2 = c^2.", "6^2 + 8^2 = 36 + 64 = 100.", "c = الجذر التربيعي للعدد 100 = 10."], "10 سم"),
    sheet: { title: T("Shapes, triangles and volumes", "الأشكال والمثلثات والأحجام"), instructions: T("Draw a sketch for each question. Show your working and the units.", "ارسم مخططًا لكل سؤال. اعرض خطوات الحل والوحدات."), items: [
      it("A right triangle has legs 5 and 12. Find the hypotenuse.", "13", "مثلث قائم ضلعاه القائمان 5 و12. أوجد الوتر.", "13"),
      it("Find the area of a circle with radius 7 (use 22/7 for pi).", "154 square units", "أوجد مساحة دائرة نصف قطرها 7 (استعمل 22/7 لقيمة π).", "154 وحدة مربعة"),
      it("A cylinder has radius 3 cm and height 10 cm. Write its volume in terms of pi.", "90 pi cm^3 (about 283 cm^3)", "أسطوانة نصف قطرها 3 سم وارتفاعها 10 سم. اكتب حجمها بدلالة π.", "90π سم^3 (نحو 283 سم^3)"),
      it("Two similar triangles have a scale factor of 2 : 3. A side of 6 in the small one matches what side in the large one?", "9", "مثلثان متشابهان نسبة التشابه بينهما 2 : 3. الضلع 6 في الصغير يقابل أي ضلع في الكبير؟", "9"),
      it("In a right triangle with sides 3, 4, 5, what is sin of the angle opposite the side 3?", "3/5 = 0.6", "في مثلث قائم أضلاعه 3 و4 و5، ما جيب الزاوية المقابلة للضلع 3؟", "3/5 = 0.6"),
      it("A 20 m pole casts a 15 m shadow. At the same time a building casts a 60 m shadow. How tall is the building?", "80 m", "عمود طوله 20 م يلقي ظلًّا طوله 15 م. وفي الوقت نفسه يلقي مبنى ظلًّا طوله 60 م. ما ارتفاع المبنى؟", "80 م"),
      it("What is the sum of the interior angles of a hexagon?", "720 degrees", "ما مجموع الزوايا الداخلية لسداسي؟", "720 درجة")
    ] }
  },

  "ma.911.dat": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Mean, median, mode", "Collect a list of ten numbers from daily life, such as minutes of reading each day or the temperatures this week. Find the mean, median, mode and range. Ask: which one best describes the list? What happens if one number is much bigger than the rest?", "المتوسط والوسيط والمنوال", "اجمعا قائمة من عشرة أعداد من الحياة اليومية، مثل دقائق القراءة كل يوم أو درجات حرارة هذا الأسبوع. أوجدا المتوسط والوسيط والمنوال والمدى. اسأل: أيها يصف القائمة أفضل؟ وماذا يحدث إذا كان عدد واحد أكبر بكثير من البقية؟"),
      act("Scatter and spot", "Measure the height and hand span of six family members or friends. Plot each person as a point. Does the cloud of points rise from left to right? Draw a line that fits and use it to predict a span for a given height. Connection is not the same as cause: talk about why.", "نبعثر النقاط ونلاحظ", "قس الطول وفتحة اليد لستة من أفراد العائلة أو الأصدقاء. عيّن كل شخص بنقطة. هل تصعد سحابة النقاط من اليسار إلى اليمين؟ ارسم خطًّا يلائمها واستعمله للتنبؤ بفتحة اليد لطول معيّن. والارتباط ليس سببًا: ناقشا لماذا."),
      act("How many ways?", "A cafe offers 3 sandwiches, 4 juices and 2 desserts. How many different meals have one of each? Make a tree diagram, then multiply 3 x 4 x 2. Then roll two dice 36 times and see how often the total is 7. Compare with 6 out of 36.", "كم طريقة؟", "يقدّم مقهى 3 أنواع من الشطائر و4 من العصائر و2 من الحلوى. كم وجبة مختلفة فيها واحد من كل نوع؟ ارسما مخطط الشجرة ثم اضربا 3 × 4 × 2. ثم ارميا حجري نرد 36 مرة وانظرا كم مرة يكون المجموع 7. وقارنا مع 6 من 36.")
    ],
    example: ex("Find the mean and median of 4, 7, 9, 12, 13.", ["Add the numbers: 4 + 7 + 9 + 12 + 13 = 45.", "Divide by 5: the mean is 9.", "The middle number in order is 9, so the median is 9."], "Mean 9 and median 9", "أوجد المتوسط والوسيط للأعداد: 4 و7 و9 و12 و13.", ["اجمع الأعداد: 4 + 7 + 9 + 12 + 13 = 45.", "اقسم على 5: المتوسط 9.", "العدد الأوسط بعد الترتيب هو 9، فالوسيط 9."], "المتوسط 9 والوسيط 9"),
    sheet: { title: T("Data, graphs and chance", "البيانات والرسوم والاحتمالات"), instructions: T("Show your working. Write probabilities as fractions.", "اعرض خطوات الحل. واكتب الاحتمالات على صورة كسور."), items: [
      it("Data: 3, 5, 5, 8, 9. Find the mean.", "6", "البيانات: 3 و5 و5 و8 و9. أوجد المتوسط.", "6"),
      it("For the same data, find the median and the mode.", "Median 5, mode 5", "للبيانات نفسها، أوجد الوسيط والمنوال.", "الوسيط 5 والمنوال 5"),
      it("For the same data, find the range.", "6 (9 - 3)", "للبيانات نفسها، أوجد المدى.", "6 (9 - 3)"),
      it("Two dice are rolled. What is the probability the total is 7?", "6/36 = 1/6", "يُرمى حجرا نرد. ما احتمال أن يكون المجموع 7؟", "6/36 = 1/6"),
      it("A cafe has 3 sandwiches and 4 juices. How many different pairs can you choose?", "12", "في مقهى 3 شطائر و4 عصائر. كم زوجًا مختلفًا يمكنك اختياره؟", "12"),
      it("A scatter plot rises from left to right. What kind of relationship is that?", "A positive relationship", "رسم انتشار يصعد من اليسار إلى اليمين. ما نوع العلاقة؟", "علاقة موجبة"),
      it("A coin is flipped twice. What is the probability of two heads?", "1/4", "تُرمى قطعة نقد مرتين. ما احتمال ظهور الصورة مرتين؟", "1/4")
    ] }
  },

  "ma.911.bal": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Teach it back", "Choose one problem from this week's maths homework and ask your child to teach it to you, step by step, as if you were the student. Make one deliberate mistake and ask them to catch it. Explaining out loud shows what is secure and what needs another look.", "نعلّمها لك", "اختر مسألة من واجب الرياضيات هذا الأسبوع واطلب من طفلك أن يعلّمك إياها خطوة بخطوة كأنك الطالب. ارتكب خطأً واحدًا متعمدًا واطلب منه أن يكتشفه. فالشرح بصوت عالٍ يُظهر ما هو راسخ وما يحتاج إلى نظرة أخرى."),
      act("Maths in the news", "Find a number in the news, such as a price change, a survey percentage or a record temperature. Ask your child to say what the number means, whether it is a fair comparison, and what other number you would want to see. Questioning numbers is a life skill.", "رياضيات في الأخبار", "ابحثا عن رقم في الأخبار، مثل تغيّر سعر أو نسبة في استطلاع أو درجة حرارة قياسية. اطلب من طفلك أن يقول ما معنى الرقم، وهل المقارنة عادلة، وأي رقم آخر تود أن ترى. فمساءلة الأرقام مهارة حياتية."),
      act("Plan a trip budget", "Plan a family day out with a budget of AED 500: transport, food and tickets. Use percentages for discounts, an equation to find how many tickets you can afford, and a table to compare choices. Let your child present the plan.", "نخطط ميزانية رحلة", "خططا ليوم ترفيهي للعائلة بميزانية 500 درهم: مواصلات وطعام وتذاكر. استعملا النسب للخصومات ومعادلة لمعرفة عدد التذاكر الممكن شراؤها وجدولًا لمقارنة الخيارات. ودع طفلك يعرض الخطة.")
    ],
    example: ex("A ticket costs AED 45 after a 10% discount. What was the original price?", ["After a 10% discount you pay 90% of the price.", "So 0.9 x original = 45.", "Original = 45 / 0.9 = 50."], "AED 50", "تذكرة ثمنها 45 درهمًا بعد خصم 10%. ما سعرها الأصلي؟", ["بعد خصم 10% تدفع 90% من السعر.", "إذن 0.9 × السعر الأصلي = 45.", "السعر الأصلي = 45 ÷ 0.9 = 50."], "50 درهمًا"),
    sheet: { title: T("A little of every kind of maths", "قليل من كل أنواع الرياضيات"), instructions: T("Show your working. Estimate before you calculate.", "اعرض خطوات الحل. وقدّر قبل أن تحسب."), items: [
      it("What is 25% of 240?", "60", "ما هو 25% من 240؟", "60"),
      it("Solve 5x - 3 = 22.", "x = 5", "حلّ: 5x - 3 = 22.", "x = 5"),
      it("Find the hypotenuse of a right triangle with legs 9 and 12.", "15", "أوجد وتر مثلث قائم ضلعاه القائمان 9 و12.", "15"),
      it("Find the mean of 12, 15, 18, 19, 21.", "17", "أوجد متوسط الأعداد 12 و15 و18 و19 و21.", "17"),
      it("Write 0.00032 in scientific notation.", "3.2 x 10^-4", "اكتب 0.00032 بالصيغة العلمية.", "3.2 × 10^-4"),
      it("A bag has 3 red and 7 blue marbles. What is the probability of picking red?", "3/10", "في كيس 3 كرات حمراء و7 زرقاء. ما احتمال سحب كرة حمراء؟", "3/10"),
      it("What is the slope of y = 4x - 2?", "4", "ما ميل المستقيم y = 4x - 2؟", "4")
    ] }
  },

  "rd.911.voc": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Word parts", "Choose a long word from a textbook, such as biography. Split it into parts: bio (life) and graph (write). Look for the same parts in other words: biology, autograph, photograph. Build a small family of words from one root and use each in a sentence. Roots and prefixes unlock thousands of words.", "أجزاء الكلمة", "اختر كلمة طويلة من كتاب مدرسي، مثل biography. قسّمها: bio (حياة) و graph (كتابة). ابحثا عن الأجزاء نفسها في كلمات أخرى: biology و autograph و photograph. كوّنا عائلة صغيرة من الكلمات من جذر واحد واستعملا كل كلمة في جملة. فالجذور والبادئات تفتح آلاف الكلمات."),
      act("Same meaning, different feeling", "Compare pairs such as slim and skinny, or determined and stubborn. They have close meanings but different feelings. Ask your child to say which is kind, which is critical, and why a writer would choose one. This is how tone is built.", "المعنى نفسه والشعور مختلف", "قارنا أزواجًا مثل slim و skinny أو determined و stubborn. معناهما متقارب لكن شعورهما مختلف. اطلب من طفلك أن يقول أيهما لطيف وأيهما ناقد ولماذا يختار الكاتب إحداهما. هكذا تُبنى النبرة."),
      act("Figures of speech", "Find five figures of speech in a book or in conversation: a metaphor (time is a thief), a simile (as quiet as the desert at night), an idiom (it is a piece of cake). Say what each really means and why it is more vivid than a plain statement.", "الصور البلاغية", "ابحثا عن خمس صور بلاغية في كتاب أو في الحديث: استعارة (الوقت لصّ) وتشبيه (هادئ كصحراء في الليل) وتعبير اصطلاحي (الأمر سهل جدًا). قولا ما معنى كل منها فعلًا ولماذا هي أوضح من العبارة المباشرة.")
    ],
    example: ex("The scientist's hypothesis was tentative; she needed more data before she was sure. What does tentative mean?", ["Look at the clue after the semicolon: she needed more data before she was sure.", "So the idea was not yet certain.", "Tentative means not final, still to be confirmed."], "Not yet certain", "The scientist's hypothesis was tentative; she needed more data before she was sure. What does tentative mean?", ["انظر إلى الدليل بعد الفاصلة المنقوطة: she needed more data before she was sure.", "إذن كانت الفكرة غير مؤكدة بعد.", "تعني tentative غير نهائي وما زال بحاجة إلى تأكيد."], "Not yet certain (غير مؤكد بعد)"),
    sheet: { englishOnly: true, title: T("Words in context", "الكلمات في سياقها"), instructions: T("Read each sentence. Choose the best answer and say how you know.", "اقرأ كل جملة. اختر أفضل إجابة وقل كيف عرفت."), items: [
      en("The word benefit comes from bene, meaning good. Which word probably shares that root? (a) benevolent (b) bench (c) beneath", "(a) benevolent"),
      en("Which word has a more positive feeling: frugal or stingy?", "frugal"),
      en("The desert at noon was an oven. This is: (a) a simile (b) a metaphor (c) an idiom", "(b) a metaphor"),
      en("Her argument was lucid, so everyone understood at once. Lucid means: (a) confusing (b) clear (c) loud", "(b) clear"),
      en("The new rule was met with scepticism. Scepticism means: (a) doubt (b) joy (c) fear", "(a) doubt"),
      en("The prefix un- in unavoidable means: (a) not (b) again (c) before", "(a) not"),
      en("The project was a labour of love. This idiom means work done: (a) for money (b) with great care and affection (c) by force", "(b) with great care and affection")
    ] }
  },

  "rd.911.inf": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Claim, evidence, reasoning", "Read an opinion article or a report together. Ask your child to find the claim (what the writer wants us to believe), the evidence (facts, data or examples) and the reasoning (how the evidence supports the claim). Is the evidence strong enough? What else would you want to know?", "الادعاء والدليل والتعليل", "اقرآ معًا مقال رأي أو تقريرًا. اطلب من طفلك أن يجد الادعاء (ما يريدنا الكاتب أن نصدقه) والدليل (حقائق أو بيانات أو أمثلة) والتعليل (كيف يدعم الدليل الادعاء). هل الدليل قوي بما يكفي؟ وماذا تود أن تعرف أيضًا؟"),
      act("Summarise in a sentence", "After reading an article, ask your child to say what it is about in one sentence, then in three. A summary keeps the main idea and the key points and leaves out the details. Check: could someone who has not read it understand?", "نلخّص في جملة", "بعد قراءة مقال اطلب من طفلك أن يقول عمّ يدور في جملة واحدة ثم في ثلاث جمل. التلخيص يحتفظ بالفكرة الرئيسة والنقاط المهمة ويترك التفاصيل. تحقق: هل يفهمه من لم يقرأ المقال؟"),
      act("Who wrote this, and why?", "Compare two articles on the same topic from different sources. Ask: who wrote each? What do they want the reader to think? Which words show their attitude? Is anything left out? Reading with questions turns a reader into a careful judge of sources.", "من كتب هذا ولماذا؟", "قارنا مقالين عن الموضوع نفسه من مصدرين مختلفين. اسأل: من كتب كلًّا منهما؟ ماذا يريد أن يظن القارئ؟ أي كلمات تُظهر موقفه؟ هل حُذف شيء؟ فالقراءة بالأسئلة تجعل القارئ حكَمًا دقيقًا على المصادر.")
    ],
    example: ex("A writer says: Our school should plant more shade trees. Studies show shaded playgrounds can be up to 10 degrees cooler. What is the claim and what is the evidence?", ["The claim is what the writer wants: plant more shade trees.", "The evidence is the fact from studies: shaded playgrounds can be up to 10 degrees cooler.", "The reasoning: a cooler playground is safer and more comfortable."], "Claim: plant more shade trees. Evidence: shaded playgrounds can be up to 10 degrees cooler.", "A writer says: Our school should plant more shade trees. Studies show shaded playgrounds can be up to 10 degrees cooler. What is the claim and what is the evidence?", ["الادعاء هو ما يريده الكاتب: زراعة مزيد من أشجار الظل.", "الدليل هو الحقيقة من الدراسات: الملاعب المظللة أبرد بما يصل إلى 10 درجات.", "التعليل: الملعب الأبرد أكثر أمانًا وراحة."], "Claim: plant more shade trees. Evidence: shaded playgrounds can be up to 10 degrees cooler."),
    sheet: { englishOnly: true, title: T("Reading an article: The channels of Al Ain", "قراءة مقال: قنوات العين"), instructions: T("Read the article carefully. Use evidence from it in your answers.", "اقرأ المقال بعناية. واستعن بأدلة منه في إجاباتك."), items: [
      en("ARTICLE. In the oasis of Al Ain, farmers have used narrow underground and surface channels called aflaj for hundreds of years. A falaj carries water from a distant source, using only the pull of gravity, to palm groves and gardens. Because water is shared by turn, families agreed on a fair timetable, and a trusted person measured each share. Today, the aflaj are protected as part of the region's heritage, and visitors can walk beside them. They show how careful planning and cooperation allowed people to grow food in a dry land.", "(Read the article. Questions follow.)"),
      en("1. What is the main idea of the article?", "The aflaj are a clever shared water system that let people farm in a dry land."),
      en("2. How does a falaj move water?", "Using gravity alone, from a distant source to the groves."),
      en("3. Which detail shows the system was fair?", "Water was shared by turn on an agreed timetable and measured by a trusted person."),
      en("4. What does the word heritage suggest about the aflaj?", "They are valued things from the past that people want to keep."),
      en("5. What conclusion does the writer draw in the last sentence?", "Planning and cooperation made farming possible in dry land."),
      en("6. Write a one-sentence summary of the article.", "Something like: The aflaj of Al Ain are channels that fairly share water and are protected as heritage.")
    ] }
  },

  "rd.911.lit": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Read a poem three times", "Choose a short poem. First read it aloud for the sound. Then read it again and underline images that you can see or feel. Then read it a third time and ask: what is it really about? Writers often say one thing to mean another.", "نقرأ القصيدة ثلاث مرات", "اختر قصيدة قصيرة. اقرأها أولًا بصوت عالٍ للاستمتاع بالموسيقى. ثم اقرأها ثانية وضع خطًّا تحت الصور التي تراها أو تحسها. ثم اقرأها ثالثة واسأل: عمّ تتحدث فعلًا؟ فالكتّاب كثيرًا ما يقولون شيئًا ليعنوا آخر."),
      act("Symbol hunt", "Look for a symbol in a story or a film: an object, a place or an action that stands for a bigger idea, like a locked door for fear or a bird for freedom. Ask: where does it appear? what changes around it? What would be lost if the writer removed it?", "البحث عن الرمز", "ابحثا عن رمز في قصة أو فيلم: شيء أو مكان أو فعل يدل على فكرة أكبر، كباب مقفل للخوف أو طائر للحرية. اسأل: أين يظهر؟ وماذا يتغير حوله؟ وماذا نخسر لو حذفه الكاتب؟"),
      act("Write the next scene", "After finishing a chapter, ask your child to write the next scene in the style of the author: the same voice, the same kind of sentences. Then compare: what did you copy? What did you change? Writing like an author shows how the author works.", "نكتب المشهد التالي", "بعد إنهاء فصل اطلب من طفلك أن يكتب المشهد التالي بأسلوب المؤلف: الصوت نفسه والجمل من النوع نفسه. ثم قارنا: ماذا قلّدت؟ وماذا غيّرت؟ فالكتابة على طريقة المؤلف تكشف كيف يعمل.")
    ],
    example: ex("In the poem, the writer says the evening sky is a quiet sea of gold. What does this image suggest, and what is the figure of speech?", ["The sky is compared to a sea without using like or as, so it is a metaphor.", "Sea suggests wide and calm, gold suggests warmth and beauty.", "Together they suggest a peaceful, glowing evening."], "A metaphor suggesting a calm, glowing evening", "In the poem, the writer says the evening sky is a quiet sea of gold. What does this image suggest, and what is the figure of speech?", ["يُشبَّه السماء بالبحر دون استعمال like أو as، فهي استعارة.", "البحر يوحي بالاتساع والهدوء والذهب يوحي بالدفء والجمال.", "معًا يوحيان بمساء هادئ متوهج."], "A metaphor suggesting a calm, glowing evening (استعارة توحي بمساء هادئ متوهج)"),
    sheet: { englishOnly: true, title: T("Reading a story: The telescope", "قراءة قصة: المنظار"), instructions: T("Read the story slowly. Use quotations from it when you answer.", "اقرأ القصة ببطء. واستعن بعبارات منها عند الإجابة."), items: [
      en("STORY. Maryam had always been told the stars were too far to matter. But on the roof one night, with her grandfather's old brass telescope, she found Saturn: a small, tilted ring, steady as a coin balanced on a thread. She held her breath. All the hours of homework, all the doubts, seemed to shrink. Her grandfather smiled in the dark. He had said nothing, because nothing was needed. Far away, the light she saw had left Saturn more than an hour before. Yet it had arrived exactly when she was ready.", "(Read the story. Questions follow.)"),
      en("1. What had people told Maryam about the stars?", "That they were too far away to matter."),
      en("2. Find a simile in the story.", "steady as a coin balanced on a thread"),
      en("3. Why does the writer say She held her breath?", "To show wonder and excitement at what she saw."),
      en("4. What might the telescope symbolise?", "Curiosity, or a link between generations."),
      en("5. Why did the grandfather say nothing?", "Because the moment spoke for itself and he did not want to interrupt."),
      en("6. State the theme in one sentence.", "Something like: Wonder and patience can make distant things feel close.")
    ] }
  },

  "rd.911.bal": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Read widely", "Aim for thirty minutes of reading a day of something your child chooses: a novel, a magazine, an online article, a biography. Talk about it for five minutes at dinner. Wide reading builds vocabulary and background knowledge more than anything else.", "نقرأ في مجالات متنوعة", "اجعلا هدفكما ثلاثين دقيقة قراءة يوميًا في شيء يختاره طفلك: رواية أو مجلة أو مقال إلكتروني أو سيرة. تحدّثا عنه خمس دقائق على العشاء. فالقراءة الواسعة تبني المفردات والمعرفة الخلفية أكثر من أي شيء آخر."),
      act("Annotate as you read", "Give your child a pencil to underline the main idea, circle new words and write a question in the margin. After a chapter, look at the notes together. Active readers notice more and remember more.", "نعلّق أثناء القراءة", "أعطِ طفلك قلم رصاص ليضع خطًّا تحت الفكرة الرئيسة وحلقة حول الكلمات الجديدة ويكتب سؤالًا في الهامش. وبعد الفصل انظرا إلى الملاحظات معًا. فالقارئ النشط يلاحظ أكثر ويتذكر أكثر."),
      act("Discuss and disagree", "Choose a topic from a book or a news story and take opposite sides in a polite debate. Each person must use evidence from the text. Then swap sides. Seeing both sides makes a reader fair and thoughtful.", "نناقش ونختلف", "اختر موضوعًا من كتاب أو خبر وخذا موقفين متقابلين في نقاش مهذب. على كل منكما أن يستعمل أدلة من النص. ثم بدّلا المواقف. ورؤية الجانبين تجعل القارئ منصفًا ومتأملًا.")
    ],
    example: ex("A passage says: The market was busy, yet Hind felt strangely alone. What does the word yet show?", ["Yet signals a contrast.", "The market was busy, which suggests she should feel surrounded.", "But she felt alone: the two ideas are opposite."], "A contrast between busy and alone", "A passage says: The market was busy, yet Hind felt strangely alone. What does the word yet show?", ["تدل yet على تباين.", "السوق مزدحم، مما يوحي بأنها محاطة بالناس.", "لكنها شعرت بالوحدة: فالفكرتان متعاكستان."], "A contrast between busy and alone (تباين بين الزحام والوحدة)"),
    sheet: { englishOnly: true, title: T("A little of every kind of reading", "قليل من كل أنواع القراءة"), instructions: T("Answer each question. Say how you know.", "أجب عن كل سؤال. وقل كيف عرفت."), items: [
      en("What is the difference between a main idea and a detail?", "The main idea is what the whole text is about; a detail supports it."),
      en("What does the prefix mis- mean in misread?", "wrongly"),
      en("What is a metaphor?", "A comparison that says one thing is another, without like or as."),
      en("A writer says the report is comprehensive. Does that suggest it is incomplete or thorough?", "thorough"),
      en("Why might an author use a statistic?", "To give evidence or make a claim more convincing."),
      en("What does a character's actions reveal that their words may not?", "Their true feelings or character."),
      en("Write a topic sentence for a paragraph about reading daily.", "Any clear sentence stating the main idea, such as: Reading daily builds vocabulary.")
    ] }
  },

  "lu.911.cps": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Comma checks", "Take a paragraph your child wrote and check three comma rules together: after an introductory phrase (After lunch, we left), between items in a list, and around extra information (My cousin, who lives in Sharjah, called). Read the sentence aloud: does a pause fit where the comma is?", "فحص الفواصل", "خذ فقرة كتبها طفلك وتحققا معًا من ثلاث قواعد للفاصلة: بعد العبارة التمهيدية (After lunch, we left) وبين عناصر القائمة وحول المعلومة الإضافية (My cousin, who lives in Sharjah, called). اقرآ الجملة بصوت عالٍ: هل يناسب الوقف موضع الفاصلة؟"),
      act("Semicolon and colon", "Show how a semicolon joins two closely linked complete sentences (The sun set; the lights came on) and how a colon introduces a list or an explanation (Bring three things: a pen, a notebook and water). Ask your child to write two of each from their day.", "الفاصلة المنقوطة والنقطتان", "أرِ كيف تصل الفاصلة المنقوطة بين جملتين كاملتين مرتبطتين (The sun set; the lights came on) وكيف تقدّم النقطتان قائمة أو توضيحًا (Bring three things: a pen, a notebook and water). اطلب من طفلك أن يكتب مثالين من كل نوع من يومه."),
      act("Spelling families", "Collect commonly confused words in a notebook: their, there, they're; its, it's; affect, effect; principal, principle. Write a sentence for each and a short memory trick. Test each other once a week.", "عائلات التهجئة", "اجمعا الكلمات الشائعة الالتباس في دفتر: their و there و they're و its و it's و affect و effect و principal و principle. اكتبا جملة لكل منها وحيلة قصيرة للتذكر. واختبرا بعضكما مرة في الأسبوع.")
    ],
    example: ex("Add the missing punctuation: After the match the team celebrated and Omar the captain thanked everyone", ["After an introductory phrase, add a comma: After the match, ...", "Extra information about Omar needs commas around it: Omar, the captain, ...", "End with a full stop."], "After the match, the team celebrated and Omar, the captain, thanked everyone.", "Add the missing punctuation: After the match the team celebrated and Omar the captain thanked everyone", ["بعد العبارة التمهيدية نضع فاصلة: After the match, ...", "المعلومة الإضافية عن Omar تحتاج فاصلتين حولها: Omar, the captain, ...", "ننهي بنقطة."], "After the match, the team celebrated and Omar, the captain, thanked everyone."),
    sheet: { englishOnly: true, title: T("Punctuation and spelling", "علامات الترقيم والتهجئة"), instructions: T("Correct each sentence. Rewrite it with the right punctuation or spelling.", "صحّح كل جملة. وأعد كتابتها بعلامات الترقيم أو التهجئة الصحيحة."), items: [
      en("Fix: When we arrived the museum was already open", "When we arrived, the museum was already open."),
      en("Fix: I need three things pens paper and glue", "I need three things: pens, paper and glue."),
      en("Fix: The desert is quiet at night the stars are bright", "The desert is quiet at night; the stars are bright."),
      en("Choose: (Their / There / They're) going to the park.", "They're"),
      en("Choose: The dog wagged (its / it's) tail.", "its"),
      en("Choose: The weather will (affect / effect) our plans.", "affect"),
      en("Fix: The students books were on the desk. (More than one student.)", "The students' books were on the desk.")
    ] }
  },

  "lu.911.gru": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Active or passive?", "Take a few sentences from a book and decide whether the subject does the action (The team won the cup) or receives it (The cup was won by the team). Practise changing between them. Passive is useful when the doer is unknown or unimportant, but active is usually clearer.", "مبني للمعلوم أم للمجهول؟", "خذ جملًا من كتاب وقرّر هل الفاعل يقوم بالفعل (The team won the cup) أم يقع عليه الفعل (The cup was won by the team). تدرّبا على التحويل بينهما. المبني للمجهول مفيد حين يكون الفاعل مجهولًا أو غير مهم، لكن المبني للمعلوم أوضح عادة."),
      act("Keep it parallel", "Check lists for balance: She likes swimming, reading and to cook is uneven. Fix it: swimming, reading and cooking. Collect uneven sentences and balance them. Parallel structure makes writing smooth and strong.", "نحافظ على التوازي", "افحصا القوائم للتوازن: She likes swimming, reading and to cook غير متوازنة. أصلحها: swimming, reading and cooking. اجمعا جملًا غير متوازنة وعدّلاها. فالتوازي في التركيب يجعل الكتابة سلسة وقوية."),
      act("Join and vary", "Take five short sentences and combine them using clauses: Because it was hot, we stayed inside, although we wanted to play. Mix short and long sentences. Read aloud: does it sound natural? Variety keeps the reader interested.", "نصل وننوّع", "خذ خمس جمل قصيرة وادمجها باستعمال العبارات التابعة: Because it was hot, we stayed inside, although we wanted to play. امزج الجمل القصيرة والطويلة. اقرأ بصوت عالٍ: هل تبدو طبيعية؟ فالتنويع يُبقي القارئ مهتمًا.")
    ],
    example: ex("Correct the sentence: Each of the students have finished their project.", ["The subject is each, which is singular.", "A singular subject needs a singular verb: has.", "Change have to has."], "Each of the students has finished their project.", "Correct the sentence: Each of the students have finished their project.", ["الفاعل هو each وهو مفرد.", "الفاعل المفرد يحتاج إلى فعل مفرد: has.", "غيّر have إلى has."], "Each of the students has finished their project."),
    sheet: { englishOnly: true, title: T("Grammar and word choice", "القواعد واختيار الكلمات"), instructions: T("Improve each sentence. Say why your version is better.", "حسّن كل جملة. وقل لماذا نسختك أفضل."), items: [
      en("Fix the verb: The group of boys are playing outside.", "The group of boys is playing outside."),
      en("Make it parallel: He enjoys hiking, to swim and cycling.", "He enjoys hiking, swimming and cycling."),
      en("Change to active: The report was written by the committee.", "The committee wrote the report."),
      en("Choose: (Who / Whom) did you invite?", "Whom"),
      en("Combine: It was cold. We wore coats.", "Because it was cold, we wore coats."),
      en("Fix the pronoun: Every student must bring their own book. (Is this acceptable? Explain.)", "Yes, singular they is widely accepted; or: Students must bring their own books."),
      en("Fix the tense: Yesterday we go to the market and buy dates.", "Yesterday we went to the market and bought dates.")
    ] }
  },

  "lu.911.wri": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Plan before you write", "Before an essay, make a plan on one page: the thesis (the main claim) in one sentence, three reasons, and for each reason one piece of evidence. Talk it through aloud. A clear plan makes the writing much faster and the argument stronger.", "نخطط قبل أن نكتب", "قبل المقال ضع خطة في صفحة واحدة: الأطروحة (الادعاء الرئيس) في جملة وثلاثة أسباب ولكل سبب دليل واحد. ناقشا الخطة بصوت عالٍ. فالخطة الواضحة تجعل الكتابة أسرع والحجة أقوى."),
      act("The counter-argument", "Take a thesis, such as school should start later. Ask your child to write one strong reason someone might disagree, then answer it politely and with evidence. A writer who answers the other side sounds fair and convincing.", "الحجة المضادة", "خذ أطروحة مثل: ينبغي أن يبدأ الدوام المدرسي متأخرًا. اطلب من طفلك أن يكتب سببًا قويًّا قد يعارض به أحدهم، ثم يرد عليه بأدب وبدليل. فالكاتب الذي يرد على الرأي الآخر يبدو منصفًا ومقنعًا."),
      act("Revise one thing at a time", "Read a draft three times: once for ideas, once for clear organisation, once for word choice and punctuation. Underline the strongest sentence. Cut one sentence that does not help. Revision, not the first draft, is where good writing is made.", "نراجع شيئًا واحدًا في كل مرة", "اقرأ المسودة ثلاث مرات: مرة للأفكار ومرة للتنظيم الواضح ومرة لاختيار الكلمات وعلامات الترقيم. ضع خطًّا تحت أقوى جملة. واحذف جملة لا تفيد. فالمراجعة، لا المسودة الأولى، هي ما يصنع الكتابة الجيدة.")
    ],
    example: ex("Improve this thesis: I think social media is bad.", ["It is vague: bad in what way, and for whom?", "Name the claim and a reason: Social media can harm teenagers' sleep.", "A strong thesis is specific and can be argued."], "Social media can harm teenagers' sleep because late-night use delays rest.", "Improve this thesis: I think social media is bad.", ["العبارة غامضة: سيئة بأي معنى ولمن؟", "حدّد الادعاء وسببًا: Social media can harm teenagers' sleep.", "الأطروحة القوية محددة ويمكن الجدال فيها."], "Social media can harm teenagers' sleep because late-night use delays rest."),
    sheet: { englishOnly: true, title: T("Planning and improving writing", "التخطيط وتحسين الكتابة"), instructions: T("Write short answers. A grown-up can read them and ask: how do you know?", "اكتب إجابات قصيرة. ويمكن لشخص بالغ أن يقرأها ويسأل: كيف تعرف؟"), items: [
      en("What are the parts of a strong paragraph?", "A topic sentence, evidence, explanation and a closing sentence."),
      en("Improve: Football is good.", "Football builds teamwork and keeps young people active."),
      en("Write a topic sentence for: reading daily helps students.", "Reading daily helps students by building vocabulary and focus."),
      en("What is a counter-argument?", "A reason that goes against your claim, which you then answer."),
      en("Which is stronger evidence: I feel it is true, or a statistic from a study?", "The statistic from a study"),
      en("Give a linking word that adds a reason.", "because, since, also, in addition ..."),
      en("Write a closing sentence for an essay on saving water.", "Any sentence that restates the claim and looks forward.")
    ] }
  },

  "lu.911.bal": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Write daily", "Ask your child to write a short paragraph each day about something they noticed: an opinion, an event, an explanation. Read it together and fix one thing. Short, regular writing beats one long essay.", "نكتب كل يوم", "اطلب من طفلك أن يكتب فقرة قصيرة كل يوم عن شيء لاحظه: رأي أو حدث أو تفسير. اقرآها معًا وأصلحا شيئًا واحدًا. فالكتابة القصيرة المنتظمة أفضل من مقال طويل واحد."),
      act("Read it aloud", "Read your child's writing aloud slowly, exactly as it is written. They will often hear what does not sound right and fix it on their own. Reading aloud is the best proofreading tool.", "نقرأ بصوت عالٍ", "اقرأ كتابة طفلك بصوت عالٍ وببطء كما هي مكتوبة. سيسمع كثيرًا ما لا يبدو صحيحًا ويصلحه بنفسه. فالقراءة بصوت عالٍ أفضل أداة للتدقيق."),
      act("Edit a sentence", "Pick one rule each week: commas after introductory phrases, subject-verb agreement, or parallel lists. Look for it in the books you read and in your child's writing. One rule at a time is easier to remember.", "نعدّل جملة", "اختر قاعدة واحدة كل أسبوع: الفاصلة بعد العبارة التمهيدية أو توافق الفاعل والفعل أو توازي القوائم. ابحثا عنها في الكتب التي تقرآنها وفي كتابة طفلك. فقاعدة واحدة في كل مرة أسهل في التذكر.")
    ],
    example: ex("Choose the best sentence: (a) Their going to the library. (b) They're going to the library. (c) There going to the library.", ["They're means they are.", "Check: They are going to the library makes sense.", "So the answer is (b)."], "(b) They're going to the library.", "Choose the best sentence: (a) Their going to the library. (b) They're going to the library. (c) There going to the library.", ["تعني They're الصيغة they are.", "تحقق: They are going to the library جملة صحيحة.", "إذن الجواب (b)."], "(b) They're going to the library."),
    sheet: { englishOnly: true, title: T("A little of every kind of language", "قليل من كل أنواع اللغة"), instructions: T("Correct or improve each item.", "صحّح كل بند أو حسّنه."), items: [
      en("Fix: me and my friend went to the souq", "My friend and I went to the souq."),
      en("Punctuate: however the results were clear", "However, the results were clear."),
      en("Choose: (Its / It's) a beautiful morning.", "It's"),
      en("Improve: It was a good day.", "Any vivid version, such as: It was a bright, cheerful day."),
      en("Combine: The museum is old. It is popular.", "The museum is old, but it is popular."),
      en("What is a thesis statement?", "The main claim of an essay."),
      en("Write one sentence with a semicolon.", "Any complete example, such as: I studied hard; the test went well.")
    ] }
  },

  "sc.911.bio": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Cells up close", "Look at a thin layer of onion skin or a leaf under a microscope or a phone magnifier. Draw what you see and label the cell wall, nucleus and chloroplasts where visible. Compare with a diagram of an animal cell. Ask: why do plant cells have things animal cells lack?", "الخلايا عن قرب", "انظرا إلى طبقة رقيقة من قشر البصل أو ورقة تحت مجهر أو عدسة هاتف مكبّرة. ارسم ما ترى وسمِّ الجدار الخلوي والنواة والبلاستيدات الخضراء حيث تظهر. قارن بمخطط خلية حيوانية. اسأل: لماذا في الخلية النباتية ما ليس في الحيوانية؟"),
      act("Inheritance with dice", "Use a coin for each parent to show how two alleles combine: heads is a dominant allele (T) and tails a recessive allele (t). Toss one coin for each parent 20 times and tally TT, Tt and tt. Compare with a Punnett square. Ask why the results are close to, but not exactly, 1:2:1.", "الوراثة بقطع النقد", "استعمل قطعة نقد لكل والد لتمثيل اتحاد أليلين: الصورة أليل سائد (T) والكتابة أليل متنحٍّ (t). ارمِ قطعة لكل والد 20 مرة وسجّل TT و Tt و tt. قارن بمربع بانيت. اسأل: لماذا النتائج قريبة من 1:2:1 لكنها ليست مطابقة تمامًا؟"),
      act("Mangrove ecosystem map", "Draw a food web for a mangrove, such as the ones on the UAE coast: mangrove trees, algae, small fish, crabs, herons and fish-eating birds. Mark where energy comes from and where it goes. Predict what happens if one species is removed, then discuss why protecting mangroves matters.", "خريطة نظام القرم", "ارسم شبكة غذائية لغابات القرم (المانغروف) كالتي على سواحل الإمارات: أشجار القرم والطحالب والأسماك الصغيرة والسلطعونات والطيور آكلة الأسماك. بيّن من أين تأتي الطاقة وإلى أين تذهب. توقّع ما يحدث إذا أُزيل نوع واحد، ثم ناقشا أهمية حماية القرم.")
    ],
    example: ex("In pea plants, tall (T) is dominant over short (t). Two plants that are both Tt are crossed. What fraction of the offspring is short?", ["Draw a Punnett square: T and t across the top and the side.", "The four boxes are TT, Tt, Tt and tt.", "Only tt is short: 1 box out of 4."], "1/4", "في نبات البازلاء الطول (T) سائد على القصر (t). تم تلقيح نباتين كلاهما Tt. ما الكسر الذي يمثل النسل القصير؟", ["ارسم مربع بانيت: T و t في الأعلى وعلى الجانب.", "الخانات الأربع هي TT و Tt و Tt و tt.", "القصير هو tt فقط: خانة واحدة من 4."], "1/4"),
    sheet: { title: T("Life science", "علوم الحياة"), instructions: T("Answer each question and explain how you know.", "أجب عن كل سؤال واشرح كيف عرفت."), items: [
      it("Which organelle makes most of the cell's energy?", "The mitochondrion", "أي عُضية تنتج معظم طاقة الخلية؟", "الميتوكوندريا"),
      it("Write the word equation for photosynthesis.", "Carbon dioxide + water -> glucose + oxygen (using light)", "اكتب المعادلة اللفظية للبناء الضوئي.", "ثاني أكسيد الكربون + ماء -> غلوكوز + أكسجين (بالضوء)"),
      it("What does DNA stand for, and what does it do?", "Deoxyribonucleic acid; it carries the instructions for building an organism.", "ماذا يعني DNA وما وظيفته؟", "الحمض النووي الريبوزي منقوص الأكسجين؛ يحمل تعليمات بناء الكائن الحي."),
      it("In a cross of Tt x Tt, what is the chance of a tt offspring?", "1/4 (25%)", "في تزاوج Tt × Tt، ما احتمال أن يكون النسل tt؟", "1/4 (25%)"),
      it("How does a camel's body suit a desert? Give two features.", "Stores fat in the hump, wide feet for sand, thick eyelashes, saves water.", "كيف يلائم جسم الجمل الصحراء؟ اذكر ميزتين.", "يخزن الدهن في السنام وأقدامه عريضة للرمال وله رموش كثيفة ويوفر الماء."),
      it("What is natural selection?", "Individuals with helpful traits survive and pass them on more often.", "ما الانتقاء الطبيعي؟", "الأفراد ذوو الصفات المفيدة يبقون ويورثونها أكثر."),
      it("Why are mangroves important to the coast?", "They shelter young fish, protect the shore and store carbon.", "لماذا القرم مهم للساحل؟", "يؤوي صغار الأسماك ويحمي الشاطئ ويخزن الكربون.")
    ] }
  },

  "sc.911.ear": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Rocks of the Hajar", "On a family trip to the mountains, collect safe, small rock samples and look closely: colour, texture, layers, grains. Sort them by how you think they formed. Ask: why do mountains here show layers that were once at the bottom of the sea? Read about how plate movements built them over millions of years.", "صخور الحجر", "في رحلة عائلية إلى الجبال اجمعا عينات صخرية صغيرة وآمنة وتأملاها: اللون والملمس والطبقات والحبيبات. صنّفاها حسب ما تظنان أنها تكوّنت. اسأل: لماذا تُظهر الجبال هنا طبقات كانت يومًا في قاع البحر؟ واقرآ كيف بنتها حركة الصفائح على مدى ملايين السنين."),
      act("Greenhouse jar", "Put a thermometer in each of two identical jars, one with a lid and one without. Place both in the sun and record the temperature every five minutes. Explain why the closed jar warms more, then compare it with how some gases trap heat in the atmosphere.", "مرطبان الدفيئة", "ضع مقياس حرارة في كل من مرطبانين متماثلين، أحدهما مغطى والآخر مكشوف. ضعهما في الشمس وسجّل الحرارة كل خمس دقائق. فسّر لماذا يسخن المغطى أكثر، ثم قارن ذلك بكيفية احتجاز بعض الغازات للحرارة في الغلاف الجوي."),
      act("Follow a space mission", "Choose a mission, such as the UAE's Hope Probe to Mars. Find out what it measures, how far it travelled and what the data shows about the Martian atmosphere. Ask: how do we know what we know about planets we have never visited?", "نتابع مهمة فضائية", "اختر مهمة، مثل مسبار الأمل الإماراتي إلى المريخ. اعرفا ماذا يقيس وكم قطع من مسافة وماذا تُظهر بياناته عن غلاف المريخ الجوي. اسأل: كيف نعرف ما نعرفه عن كواكب لم نزرها؟")
    ],
    example: ex("Why are there seasons on Earth?", ["Earth's axis is tilted by about 23.5 degrees.", "As Earth orbits the Sun, different parts lean toward it.", "The hemisphere leaning toward the Sun gets more direct light and is warmer."], "Because Earth's axis is tilted", "لماذا تحدث الفصول على الأرض؟", ["محور الأرض مائل بنحو 23.5 درجة.", "وبينما تدور الأرض حول الشمس تميل أجزاء مختلفة نحوها.", "النصف المائل نحو الشمس يتلقى ضوءًا أكثر مباشرة فيكون أدفأ."], "لأن محور الأرض مائل"),
    sheet: { title: T("Earth and space", "الأرض والفضاء"), instructions: T("Answer each question and explain how you know.", "أجب عن كل سؤال واشرح كيف عرفت."), items: [
      it("What causes the tides?", "The pull of the Moon's gravity (and the Sun's)", "ما سبب المد والجزر؟", "جاذبية القمر (والشمس)"),
      it("Name the layers of the Earth from the surface down.", "Crust, mantle, outer core, inner core", "سمِّ طبقات الأرض من السطح إلى الداخل.", "القشرة والستار واللب الخارجي واللب الداخلي"),
      it("What is the greenhouse effect?", "Gases in the atmosphere trap heat from the Sun.", "ما الاحتباس الحراري؟", "غازات في الغلاف الجوي تحتجز حرارة الشمس."),
      it("Where does most of the UAE's drinking water come from?", "Desalinated seawater", "من أين يأتي معظم مياه الشرب في الإمارات؟", "مياه البحر المحلاة"),
      it("What is a light year?", "The distance light travels in one year.", "ما السنة الضوئية؟", "المسافة التي يقطعها الضوء في سنة."),
      it("What are tectonic plates?", "Large pieces of the Earth's crust that slowly move.", "ما الصفائح التكتونية؟", "قطع كبيرة من قشرة الأرض تتحرك ببطء."),
      it("Why is the Moon's side we see always the same?", "It spins once in the time it takes to orbit Earth once.", "لماذا الجانب الذي نراه من القمر هو نفسه دائمًا؟", "لأنه يدور حول نفسه دورة واحدة في زمن دورة واحدة حول الأرض.")
    ] }
  },

  "sc.911.phy": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Speed and acceleration", "Mark 20 metres in a corridor or park. Time your child walking, then jogging, then sprinting. Work out the speed for each (distance / time). Then ask: how fast would they have to go to cover the same distance in half the time?", "السرعة والتسارع", "علّم 20 مترًا في ممر أو حديقة. قس زمن مشي طفلك ثم هرولته ثم عدوه. احسب السرعة في كل حالة (المسافة ÷ الزمن). ثم اسأل: ما السرعة اللازمة لقطع المسافة نفسها في نصف الزمن؟"),
      act("Energy changes at home", "Walk around the home and list energy changes: a lamp (electrical to light and heat), a fan (electrical to movement), a solar charger (light to electrical). Draw an energy flow diagram for two of them and ask where energy is wasted as heat.", "تحوّلات الطاقة في البيت", "تجوّلا في البيت واذكرا تحوّلات الطاقة: المصباح (كهربائية إلى ضوء وحرارة) والمروحة (كهربائية إلى حركة) والشاحن الشمسي (ضوء إلى كهرباء). ارسما مخطط تدفق الطاقة لاثنين منها واسألا أين تُهدر الطاقة على شكل حرارة."),
      act("Balance an equation", "Use coloured counters for atoms to build 2H2 + O2 -> 2H2O. Count atoms on each side. Try to balance CH4 + 2O2 -> CO2 + 2H2O. A balanced equation shows that atoms are not created or destroyed, only rearranged.", "نوازن معادلة", "استعمل قطعًا ملونة للذرات لبناء 2H2 + O2 -> 2H2O. عدّ الذرات في الطرفين. جرّب موازنة CH4 + 2O2 -> CO2 + 2H2O. فالمعادلة الموزونة تُظهر أن الذرات لا تُخلق ولا تفنى بل يُعاد ترتيبها.")
    ],
    example: ex("A car travels 150 km in 2 hours. What is its average speed?", ["Speed = distance / time.", "150 / 2 = 75.", "The units are km/h."], "75 km/h", "تقطع سيارة 150 كم في ساعتين. ما متوسط سرعتها؟", ["السرعة = المسافة ÷ الزمن.", "150 ÷ 2 = 75.", "الوحدة كم/ساعة."], "75 كم/ساعة"),
    sheet: { title: T("Chemistry and physics", "الكيمياء والفيزياء"), instructions: T("Show your working and the units.", "اعرض خطوات الحل والوحدات."), items: [
      it("Force = mass x acceleration. Find the force on a 5 kg mass accelerating at 3 m/s^2.", "15 N", "القوة = الكتلة × التسارع. أوجد القوة المؤثرة في كتلة 5 كغ بتسارع 3 م/ث^2.", "15 نيوتن"),
      it("Ohm's law: V = I x R. Find V when I = 2 A and R = 6 ohms.", "12 V", "قانون أوم: V = I × R. أوجد V عندما I = 2 أمبير و R = 6 أوم.", "12 فولت"),
      it("Balance: H2 + O2 -> H2O", "2H2 + O2 -> 2H2O", "وازن: H2 + O2 -> H2O", "2H2 + O2 -> 2H2O"),
      it("What is the pH of a neutral solution?", "7", "ما الرقم الهيدروجيني للمحلول المتعادل؟", "7"),
      it("What is the difference between a physical and a chemical change?", "A chemical change makes new substances; a physical change does not.", "ما الفرق بين التغير الفيزيائي والكيميائي؟", "التغير الكيميائي ينتج مواد جديدة، والفيزيائي لا ينتج."),
      it("A solar panel changes which energy into which?", "Light into electrical energy", "ما الطاقة التي يحوّلها اللوح الشمسي وإلى أي طاقة؟", "من ضوئية إلى كهربائية"),
      it("Which has more kinetic energy: a car at 10 m/s or the same car at 20 m/s?", "The car at 20 m/s (it is four times as much).", "أيهما أكبر طاقة حركية: سيارة بسرعة 10 م/ث أم السيارة نفسها بسرعة 20 م/ث؟", "السيارة بسرعة 20 م/ث (أربعة أضعاف).")
    ] }
  },

  "sc.911.bal": {
    reviewed: { en: false, ar: false },
    activities: [
      act("Ask a testable question", "Choose something at home to explore, such as does the colour of a cup change how fast hot water cools? Write the question, a prediction, the variable you change, the one you measure and the ones you keep the same. Do the test and write one sentence about what the results show.", "نطرح سؤالًا يمكن اختباره", "اختر شيئًا في البيت لتستكشفه، مثل: هل يغيّر لون الكوب سرعة برودة الماء الساخن؟ اكتب السؤال والتوقع والمتغير الذي تغيّره والذي تقيسه والمتغيرات التي تُبقيها ثابتة. نفّذ الاختبار واكتب جملة عمّا تُظهره النتائج."),
      act("Read a graph", "Find a science graph in a news story, such as energy use or rainfall. Ask your child to describe the trend, to say what the axes show and to explain what might cause it. Then ask what the graph does not tell you.", "نقرأ رسمًا بيانيًّا", "ابحثا عن رسم بياني علمي في خبر، مثل استهلاك الطاقة أو الأمطار. اطلب من طفلك أن يصف الاتجاه ويقول ما تُظهره المحاور ويفسّر السبب المحتمل. ثم اسأل: ماذا لا يخبرنا به الرسم؟"),
      act("Science around us", "Pick one everyday thing, such as a fridge, a phone or an air conditioner, and explain how it works using at least two science ideas: energy, forces, materials or chemistry. Draw a labelled diagram and present it to the family.", "العلم حولنا", "اختر شيئًا يوميًّا كالثلاجة أو الهاتف أو المكيّف واشرح كيف يعمل باستعمال فكرتين علميتين على الأقل: الطاقة أو القوى أو المواد أو الكيمياء. ارسم مخططًا مسمّى وقدّمه للعائلة.")
    ],
    example: ex("Why should only one variable be changed in a fair test?", ["If two things change, we cannot tell which caused the result.", "So we change one variable, measure another and keep the rest the same.", "Then the result can be linked to the one change."], "So we know which change caused the result", "لماذا يجب تغيير متغير واحد فقط في الاختبار العادل؟", ["إذا تغيّر شيئان فلا نعرف أيهما سبّب النتيجة.", "لذلك نغيّر متغيرًا واحدًا ونقيس آخر ونُبقي الباقي ثابتًا.", "عندئذٍ ننسب النتيجة إلى التغيير الواحد."], "لنعرف أي تغيير سبّب النتيجة"),
    sheet: { title: T("A little of every kind of science", "قليل من كل أنواع العلوم"), instructions: T("Answer each question and explain how you know.", "أجب عن كل سؤال واشرح كيف عرفت."), items: [
      it("What is the independent variable?", "The one the experimenter changes.", "ما المتغير المستقل؟", "المتغير الذي يغيّره المجرِّب."),
      it("Which is the best conductor: copper, wood or plastic?", "Copper", "أيها أفضل موصل: النحاس أم الخشب أم البلاستيك؟", "النحاس"),
      it("Name one gas in the air that plants use.", "Carbon dioxide", "اذكر غازًا في الهواء تستخدمه النباتات.", "ثاني أكسيد الكربون"),
      it("Speed = distance / time. Find the speed: 90 m in 30 s.", "3 m/s", "السرعة = المسافة ÷ الزمن. أوجد السرعة: 90 م في 30 ث.", "3 م/ث"),
      it("Why do scientists use repeated trials?", "To make the results more reliable.", "لماذا يكرر العلماء المحاولات؟", "لتكون النتائج أكثر موثوقية."),
      it("What is an atom made of?", "Protons, neutrons and electrons", "مم تتكون الذرة؟", "بروتونات ونيوترونات وإلكترونات"),
      it("Name one renewable source of energy used in the UAE.", "Solar energy", "اذكر مصدرًا متجددًا للطاقة تستخدمه الإمارات.", "الطاقة الشمسية")
    ] }
  }
};

if (typeof module !== "undefined" && module.exports) module.exports = FamilyActivities;
