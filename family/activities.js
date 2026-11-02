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
  }
};

if (typeof module !== "undefined" && module.exports) module.exports = FamilyActivities;
