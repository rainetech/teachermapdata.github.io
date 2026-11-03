// Mathematics practice booklet, Grade 3 expectations. One file a booklet:
//   subject, grade, framework   what it is written to (CCSS Mathematics, Grade 3)
//   sections[]                  one for each goal area of the subject, in the order printed
//     area      the goal-area code (family/core.js AREAS)
//     standards the standards the section practises, short codes (3.OA.A.1 is CCSS.MATH.CONTENT.3.OA.A.1)
//     example   one worked example { en: { question, steps, answer }, ar: {...} }
//     items     ten questions, it(questionEn, answerEn, questionAr, answerAr)
// Original wording, UAE settings, nothing copied from CCSS text or NWEA items. The
// alignment is a draft for a teacher to check against the standards document.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const mc = (qEn, optsEn, correct, whyEn, qAr, optsAr, whyAr) => ({ q: T(qEn, qAr), a: T(whyEn, whyAr), options: { en: optsEn, ar: optsAr }, correct });
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });

module.exports = {
  subject: "ma",
  grade: 3,
  framework: "CCSS.MATH",
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "alg",
      standards: ["3.OA.A.1", "3.OA.A.2", "3.OA.A.3", "3.OA.A.4", "3.OA.B.5", "3.OA.B.6", "3.OA.C.7", "3.OA.D.8", "3.OA.D.9"],
      example: ex("There are 6 trays with 4 date cookies on each tray. How many cookies are there? Write the multiplication fact and a related division fact.", ["6 groups of 4 is 6 x 4.", "6 x 4 = 24, so there are 24 cookies.", "A related division fact: 24 / 6 = 4."], "24 cookies; 6 x 4 = 24 and 24 / 6 = 4", "هناك 6 صواني، على كل صينية 4 كعكات بالتمر. كم كعكة هناك؟ اكتب عملية الضرب وعملية القسمة المرتبطة بها.", ["6 مجموعات من 4 تعني 6 × 4.", "6 × 4 = 24، إذن هناك 24 كعكة.", "عملية قسمة مرتبطة: 24 ÷ 6 = 4."], "24 كعكة؛ 6 × 4 = 24 و 24 ÷ 6 = 4"),
      items: [
        it("What does 5 x 7 mean? Say it as groups.", "5 groups of 7 (7 + 7 + 7 + 7 + 7)", "ماذا تعني 5 × 7؟ قلها بصورة مجموعات.", "5 مجموعات من 7 (7 + 7 + 7 + 7 + 7)"),
        mc("A box holds 8 pencils. How many pencils are in 4 boxes?", ["12", "24", "32", "36"], 2, "4 groups of 8 is 4 x 8 = 32.", "يتسع الصندوق لـ 8 أقلام. كم قلمًا في 4 صناديق؟", ["12", "24", "32", "36"], "4 مجموعات من 8 تساوي 4 × 8 = 32."),
        it("30 stickers are shared equally among 5 friends. How many does each friend get?", "6", "وُزّعت 30 ملصقة بالتساوي على 5 أصدقاء. كم ملصقة يأخذ كل صديق؟", "6"),
        mc("Hamad packs 36 date cookies, 4 on each tray. How many trays does he fill?", ["8", "9", "10", "32"], 1, "4 x __ = 36, so 36 / 4 = 9 trays.", "يرتّب حمد 36 كعكة بالتمر، 4 في كل صينية. كم صينية يملأ؟", ["8", "9", "10", "32"], "4 × __ = 36 إذن 36 ÷ 4 = 9 صوانٍ."),
        it("Find the missing number: 42 / __ = 6", "7", "أوجد العدد الناقص: 42 ÷ __ = 6", "7"),
        it("Use a fact you know to find 6 x 8. Hint: 6 x 8 is the same as 8 x 6, and 5 x 8 = 40.", "48 (40 + 8)", "استعن بحقيقة تعرفها لإيجاد 6 × 8. تلميح: 6 × 8 تساوي 8 × 6 و 5 × 8 = 40.", "48 (40 + 8)"),
        it("Are 3 x 9 and 9 x 3 equal? Which property shows it?", "Yes, both are 27: the order does not change the product (commutative property).", "هل 3 × 9 و 9 × 3 متساويان؟ وأي خاصية توضح ذلك؟", "نعم، كلاهما 27: ترتيب العددين لا يغيّر الناتج (خاصية الإبدال)."),
        mc("Maha has 3 packs of 6 stickers and gives 5 away. How many does she have left?", ["13", "18", "23", "8"], 0, "3 x 6 = 18 stickers, then 18 - 5 = 13.", "مع مها 3 علب في كل منها 6 ملصقات، وأعطت 5 ملصقات. كم ملصقة بقي معها؟", ["13", "18", "23", "8"], "3 × 6 = 18 ثم 18 - 5 = 13."),
        mc("What is the rule for this pattern, and what comes next? 4, 8, 12, 16, __", ["Add 2; the next number is 18", "Multiply by 2; the next number is 32", "Add 4; the next number is 19", "Add 4; the next number is 20"], 3, "Each number is 4 more than the one before, so 16 + 4 = 20.", "ما قاعدة هذا النمط وما العدد التالي؟ 4، 8، 12، 16، __", ["نضيف 2؛ والعدد التالي 18", "نضرب في 2؛ والعدد التالي 32", "نضيف 4؛ والعدد التالي 19", "نضيف 4؛ والعدد التالي 20"], "كل عدد يزيد 4 على العدد السابق، إذن 16 + 4 = 20."),
        it("Write a number sentence for: a number times 7 is 56. Use n for the unknown, then solve.", "n x 7 = 56, n = 8", "اكتب جملة عددية: عدد مضروبًا في 7 يساوي 56. استعمل n للمجهول ثم احلّها.", "n × 7 = 56، و n = 8"),
        it("A baker packs 24 date cookies into boxes of 6. How many boxes does she fill? Write the division sentence.", "4 boxes (24 / 6 = 4)", "تضع خبّازة 24 كعكة بالتمر في علب في كل منها 6. كم علبة تملأ؟ اكتب جملة القسمة.", "4 علب (24 ÷ 6 = 4)"),
        it("Fluency check: 7 x 8 = ? and 63 / 9 = ?", "56 and 7", "تدريب على الإتقان: 7 × 8 = ؟ و 63 ÷ 9 = ؟", "56 و 7")
      ]
    },
    {
      area: "geo",
      standards: ["3.MD.C.5", "3.MD.C.6", "3.MD.C.7", "3.MD.D.8", "3.G.A.1", "3.G.A.2", "3.MD.A.1", "3.MD.A.2"],
      example: ex("A rectangular majlis rug is 4 metres long and 3 metres wide. What is its area? What is its perimeter?", ["Area is the number of square metres that cover it: 4 x 3 = 12.", "Perimeter is the distance round the edge: 4 + 3 + 4 + 3 = 14."], "Area 12 square metres; perimeter 14 metres", "سجادة مجلس مستطيلة طولها 4 أمتار وعرضها 3 أمتار. ما مساحتها؟ وما محيطها؟", ["المساحة هي عدد الأمتار المربعة التي تغطيها: 4 × 3 = 12.", "المحيط هو المسافة حول الحافة: 4 + 3 + 4 + 3 = 14."], "المساحة 12 مترًا مربعًا والمحيط 14 مترًا"),
      items: [
        mc("A rug in a model of a majlis is 5 cm long and 2 cm wide. What is the area of the rug?", ["7 square centimetres", "10 square centimetres", "14 square centimetres", "10 centimetres"], 1, "Area is length x width: 5 x 2 = 10 square centimetres. (14 is the perimeter.)", "سجادة في نموذج لمجلس طولها 5 سم وعرضها 2 سم. ما مساحة السجادة؟", ["7 سنتمترات مربعة", "10 سنتمترات مربعة", "14 سنتمترًا مربعًا", "10 سنتمترات"], "المساحة = الطول × العرض: 5 × 2 = 10 سنتمترات مربعة. (14 هو المحيط.)"),
        mc("Layla makes a square card with sides of 6 cm and sticks a ribbon all the way round the edge. How long is the ribbon?", ["12 cm", "24 cm", "36 cm", "6 cm"], 1, "The ribbon goes round 4 sides of 6 cm: 4 x 6 = 24 cm.", "تصنع ليلى بطاقة مربعة طول ضلعها 6 سم وتلصق شريطًا حول حافتها كلها. ما طول الشريط؟", ["12 سم", "24 سم", "36 سم", "6 سم"], "يدور الشريط حول 4 أضلاع طول كل منها 6 سم: 4 × 6 = 24 سم."),
        it("A rectangle has area 24 square units and a width of 4 units. What is its length?", "6 units", "مستطيل مساحته 24 وحدة مربعة وعرضه 4 وحدات. ما طوله؟", "6 وحدات"),
        it("Name a shape with 4 sides and 4 equal sides. Is it always a square?", "A rhombus or a square. A rhombus is not always a square (its angles need not be right angles).", "سمِّ شكلًا له 4 أضلاع متساوية. هل هو دائمًا مربع؟", "معيّن أو مربع. والمعيّن ليس دائمًا مربعًا (فزواياه ليست بالضرورة قائمة)."),
        it("A shape is split into 4 equal parts. What fraction of the whole is each part?", "1/4", "قُسِّم شكل إلى 4 أجزاء متساوية. ما الكسر الذي يمثّله كل جزء من الكل؟", "1/4"),
        mc("The film starts at 4:35 and lasts 40 minutes. When does it end?", ["5:05", "5:25", "5:15", "5:35"], 2, "4:35 plus 25 minutes is 5:00, and 15 more minutes is 5:15.", "يبدأ الفيلم عند 4:35 ويستمر 40 دقيقة. متى ينتهي؟", ["5:05", "5:25", "5:15", "5:35"], "4:35 زائد 25 دقيقة يصبح 5:00، وبعد 15 دقيقة أخرى 5:15."),
        it("A rectangle has sides 7 cm and 3 cm. Find its perimeter.", "20 cm", "مستطيل ضلعاه 7 سم و 3 سم. أوجد محيطه.", "20 سم"),
        it("Draw two different rectangles that both have an area of 12 square units. What are their sides?", "For example 3 by 4 and 2 by 6 (also 1 by 12).", "ارسم مستطيلين مختلفين مساحة كل منهما 12 وحدة مربعة. ما أبعادهما؟", "مثلًا 3 في 4 و 2 في 6 (وكذلك 1 في 12)."),
        mc("A jug holds 2 litres of juice. Hamad pours out 500 millilitres. How many millilitres are left? (1 litre = 1000 ml)", ["500 ml", "1,000 ml", "2,500 ml", "1,500 ml"], 3, "2 litres is 2,000 ml, and 2,000 - 500 = 1,500 ml.", "يتسع إبريق لـ 2 لتر من العصير. سكب حمد 500 مليلتر. كم مليلترًا بقي؟ (1 لتر = 1000 مل)", ["500 مل", "1,000 مل", "2,500 مل", "1,500 مل"], "2 لتر تساوي 2,000 مل، و 2,000 - 500 = 1,500 مل."),
        mc("Layla has two cards. One is a 5 by 3 rectangle and the other is a 4 by 4 square. Which has the larger area?", ["The 5 by 3 rectangle", "The 4 by 4 square", "They are equal", "You cannot tell"], 1, "5 x 3 = 15 and 4 x 4 = 16, so the square has the larger area.", "مع ليلى بطاقتان: مستطيل 5 في 3 ومربع 4 في 4. أيهما مساحته أكبر؟", ["المستطيل 5 في 3", "المربع 4 في 4", "هما متساويتان", "لا يمكن معرفة ذلك"], "5 × 3 = 15 و 4 × 4 = 16، فالمربع مساحته أكبر.")
      ]
    },
    {
      area: "dat",
      standards: ["3.MD.B.3", "3.MD.B.4"],
      example: ex("A bar graph shows books read in a month. Each square stands for 2 books. Salem has 5 squares and Mona has 3 squares. How many more books did Salem read?", ["Salem read 5 x 2 = 10 books.", "Mona read 3 x 2 = 6 books.", "10 - 6 = 4."], "4 more books", "يبيّن مخطط أعمدة الكتب المقروءة في شهر. كل مربع يمثّل كتابين. لدى سالم 5 مربعات ولدى منى 3 مربعات. كم كتابًا زيادة قرأ سالم؟", ["قرأ سالم 5 × 2 = 10 كتب.", "قرأت منى 3 × 2 = 6 كتب.", "10 - 6 = 4."], "4 كتب زيادة"),
      items: [
        it("In a picture graph each star is 5 votes. A drink has 4 stars. How many votes?", "20", "في رسم بياني بالصور كل نجمة تمثّل 5 أصوات. مشروب له 4 نجوم. كم صوتًا؟", "20"),
        mc("In a picture graph each star is 5 votes. Juice has 6 stars and milk has 4 stars. How many more votes does juice have?", ["2", "20", "10", "30"], 2, "Juice has 2 more stars, and 2 x 5 = 10 more votes.", "في رسم بياني بالصور كل نجمة تمثّل 5 أصوات. للعصير 6 نجوم وللحليب 4 نجوم. كم صوتًا زيادة للعصير؟", ["2", "20", "10", "30"], "للعصير نجمتان زيادة، و 2 × 5 = 10 أصوات زيادة."),
        mc("A bar graph's scale goes up in 10s. A bar ends halfway between 20 and 30. What value does it show?", ["25", "15", "30", "35"], 0, "Halfway between 20 and 30 is 25.", "مقياس مخطط أعمدة يزيد بمقدار 10. ينتهي عمود في منتصف المسافة بين 20 و 30. ما القيمة التي يمثّلها؟", ["25", "15", "30", "35"], "منتصف المسافة بين 20 و 30 هو 25."),
        it("Pencil lengths in cm are 12, 14, 12, 15, 14, 12. How many pencils are 12 cm?", "3", "أطوال أقلام بالسنتيمتر: 12، 14، 12، 15، 14، 12. كم قلمًا طوله 12 سم؟", "3"),
        it("Use the lengths in the last question. What is the longest length, and what is the shortest?", "Longest 15 cm, shortest 12 cm", "استعمل الأطوال في السؤال السابق. ما أطول طول وما أقصره؟", "الأطول 15 سم والأقصر 12 سم"),
        mc("A line plot shows lengths to the nearest half centimetre: 2 dots at 3 cm and 4 dots at 3 and a half cm. How many measurements are there?", ["2", "7", "4", "6"], 3, "Each dot is one measurement: 2 + 4 = 6.", "يبيّن مخطط نقطي أطوالًا لأقرب نصف سنتمتر: نقطتان عند 3 سم و 4 نقاط عند 3 سم ونصف. كم قياسًا هناك؟", ["2", "7", "4", "6"], "كل نقطة قياس واحد: 2 + 4 = 6."),
        it("A survey: 8 children like football, 5 like swimming, 7 like running. How many children in all?", "20", "استطلاع: 8 أطفال يحبون كرة القدم و 5 يحبون السباحة و 7 يحبون الجري. كم طفلًا في المجموع؟", "20"),
        it("Which sport in that survey is the most popular, and by how many votes is it ahead of the least popular?", "Football, ahead of swimming by 3", "أي رياضة في ذلك الاستطلاع هي الأكثر شعبية، وبكم صوتًا تتقدم على الأقل شعبية؟", "كرة القدم، وتتقدم على السباحة بثلاثة أصوات"),
        mc("A graph uses 1 square for every 3 students. 12 students walk to school. How many squares does the graph need?", ["3", "4", "6", "9"], 1, "12 students / 3 students per square = 4 squares.", "يستعمل رسم بياني مربعًا واحدًا لكل 3 طلاب. 12 طالبًا يمشون إلى المدرسة. كم مربعًا يلزم في الرسم؟", ["3", "4", "6", "9"], "12 طالبًا ÷ 3 طلاب لكل مربع = 4 مربعات."),
        it("Make a tally of the vowels a, e, i, o, u in the word CALENDAR. Which vowel shows the most, and how many times?", "A shows the most: 2 times (E shows 1 time).", "اجمع بالعلامات حروف العلة a و e و i و o و u في الكلمة CALENDAR. أي حرف يظهر أكثر، وكم مرة؟", "الحرف A يظهر أكثر: مرتين (والحرف E مرة واحدة).")
      ]
    },
    {
      area: "num",
      standards: ["3.NBT.A.1", "3.NBT.A.2", "3.NBT.A.3", "3.NF.A.1", "3.NF.A.2", "3.NF.A.3"],
      example: ex("Round 487 to the nearest ten and to the nearest hundred.", ["Look at the ones digit for the nearest ten: 7 is 5 or more, so round up: 490.", "Look at the tens digit for the nearest hundred: 8 is 5 or more, so round up: 500."], "490 and 500", "قرّب العدد 487 إلى أقرب عشرة وإلى أقرب مئة.", ["انظر إلى رقم الآحاد لأقرب عشرة: 7 يساوي 5 أو أكبر منها فنقرّب إلى أعلى: 490.", "انظر إلى رقم العشرات لأقرب مئة: 8 يساوي 5 أو أكبر منها فنقرّب إلى أعلى: 500."], "490 و 500"),
      items: [
        mc("A shop rounds every price to the nearest ten dirhams. What does it make AED 364?", ["AED 360", "AED 370", "AED 300", "AED 400"], 0, "The ones digit 4 is less than 5, so round down to 360.", "يقرّب متجر كل سعر إلى أقرب عشرة دراهم. ما السعر الذي يكتبه لـ 364 درهمًا؟", ["360 درهمًا", "370 درهمًا", "300 درهم", "400 درهم"], "رقم الآحاد 4 أقل من 5 فنقرّب إلى أسفل: 360."),
        it("Round 751 to the nearest hundred.", "800", "قرّب 751 إلى أقرب مئة.", "800"),
        mc("Salem has 346 date stones and finds 278 more. How many does he have now?", ["524", "614", "624", "634"], 2, "346 + 278 = 624.", "مع سالم 346 نواة تمر ووجد 278 نواة أخرى. كم نواة لديه الآن؟", ["524", "614", "624", "634"], "346 + 278 = 624."),
        it("A shop has 503 stickers and sells 217. How many stickers are left?", "286", "في متجر 503 ملصقات وبيع منها 217 ملصقًا. كم ملصقًا بقي؟", "286"),
        it("Maryam buys 6 packs of dates with 40 dates in each pack. How many dates is that in all?", "240 (6 x 4 tens = 24 tens)", "تشتري مريم 6 علب تمر في كل منها 40 تمرة. كم تمرة لديها في المجموع؟", "240 (6 × 4 عشرات = 24 عشرة)"),
        it("A bag holds 125 dates and a second bag holds 238. How many in total?", "363", "كيس فيه 125 تمرة وكيس ثانٍ فيه 238. كم تمرة في المجموع؟", "363"),
        it("What fraction of the circle is shaded if 3 of 8 equal parts are shaded?", "3/8", "ما الكسر الذي يمثّل الجزء المظلل من الدائرة إذا ظُلّلت 3 من 8 أجزاء متساوية؟", "3/8"),
        mc("Maha eats 1/2 of a pizza and Noura eats 1/4 of the same pizza. Who eats more?", ["Maha", "Noura", "They eat the same", "You cannot tell"], 0, "Halves are bigger pieces than quarters, so 1/2 is greater than 1/4.", "تأكل مها 1/2 من بيتزا وتأكل نورة 1/4 من البيتزا نفسها. من تأكل أكثر؟", ["مها", "نورة", "تأكلان المقدار نفسه", "لا يمكن معرفة ذلك"], "الأنصاف أجزاء أكبر من الأرباع، فـ 1/2 أكبر من 1/4."),
        mc("Which fraction is equal to 1/2 and has 4 as its denominator?", ["1/4", "3/4", "4/4", "2/4"], 3, "1/2 = 2/4: two of the four equal parts make a half.", "أي كسر يساوي 1/2 ومقامه 4؟", ["1/4", "3/4", "4/4", "2/4"], "1/2 = 2/4: جزءان من أربعة أجزاء متساوية يكوّنان نصفًا."),
        it("Place 3/4 on a number line from 0 to 1. At which quarter mark do you stop?", "At the third mark of four equal parts, just before 1.", "ضع 3/4 على خط أعداد من 0 إلى 1. عند أي علامة من علامات الأرباع تتوقف؟", "عند العلامة الثالثة من أربعة أجزاء متساوية، قبل العدد 1 مباشرة.")
      ]
    }
  ]
};
