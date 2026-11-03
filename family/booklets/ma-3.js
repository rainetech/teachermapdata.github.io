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
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });

module.exports = {
  subject: "ma",
  grade: 3,
  framework: "CCSS.MATH",
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "alg",
      standards: ["3.OA.A.1", "3.OA.A.3", "3.OA.A.4", "3.OA.B.5", "3.OA.D.8", "3.OA.D.9"],
      example: ex("There are 6 trays with 4 date cookies on each tray. How many cookies are there? Write the multiplication fact and a related division fact.", ["6 groups of 4 is 6 x 4.", "6 x 4 = 24, so there are 24 cookies.", "A related division fact: 24 / 6 = 4."], "24 cookies; 6 x 4 = 24 and 24 / 6 = 4", "هناك 6 صواني، على كل صينية 4 كعكات بالتمر. كم كعكة هناك؟ اكتب عملية الضرب وعملية القسمة المرتبطة بها.", ["6 مجموعات من 4 تعني 6 × 4.", "6 × 4 = 24، إذن هناك 24 كعكة.", "عملية قسمة مرتبطة: 24 ÷ 6 = 4."], "24 كعكة؛ 6 × 4 = 24 و 24 ÷ 6 = 4"),
      items: [
        it("What does 5 x 7 mean? Say it as groups.", "5 groups of 7 (7 + 7 + 7 + 7 + 7)", "ماذا تعني 5 × 7؟ قلها بصورة مجموعات.", "5 مجموعات من 7 (7 + 7 + 7 + 7 + 7)"),
        it("A box holds 8 pencils. How many pencils are in 4 boxes?", "32", "يتسع الصندوق لـ 8 أقلام. كم قلمًا في 4 صناديق؟", "32"),
        it("30 stickers are shared equally among 5 friends. How many does each friend get?", "6", "وُزّعت 30 ملصقة بالتساوي على 5 أصدقاء. كم ملصقة يأخذ كل صديق؟", "6"),
        it("Find the missing number: 4 x __ = 36", "9", "أوجد العدد الناقص: 4 × __ = 36", "9"),
        it("Find the missing number: 42 / __ = 6", "7", "أوجد العدد الناقص: 42 ÷ __ = 6", "7"),
        it("Use a fact you know to find 6 x 8. Hint: 6 x 8 is the same as 8 x 6, and 5 x 8 = 40.", "48 (40 + 8)", "استعن بحقيقة تعرفها لإيجاد 6 × 8. تلميح: 6 × 8 تساوي 8 × 6 و 5 × 8 = 40.", "48 (40 + 8)"),
        it("Are 3 x 9 and 9 x 3 equal? Which property shows it?", "Yes, both are 27: the order does not change the product (commutative property).", "هل 3 × 9 و 9 × 3 متساويان؟ وأي خاصية توضح ذلك؟", "نعم، كلاهما 27: ترتيب العددين لا يغيّر الناتج (خاصية الإبدال)."),
        it("Maha has 3 packs of 6 stickers and gives 5 away. How many does she have left?", "13 (3 x 6 = 18, then 18 - 5 = 13)", "مع مها 3 علب في كل منها 6 ملصقات، وأعطت 5 ملصقات. كم ملصقة بقي معها؟", "13 (3 × 6 = 18 ثم 18 - 5 = 13)"),
        it("What is the rule? 4, 8, 12, 16, __ What comes next?", "Add 4; the next number is 20.", "ما القاعدة؟ 4، 8، 12، 16، __ ما العدد التالي؟", "نضيف 4؛ والعدد التالي 20."),
        it("Write a number sentence for: a number times 7 is 56. Use n for the unknown, then solve.", "n x 7 = 56, n = 8", "اكتب جملة عددية: عدد مضروبًا في 7 يساوي 56. استعمل n للمجهول ثم احلّها.", "n × 7 = 56، و n = 8")
      ]
    },
    {
      area: "geo",
      standards: ["3.MD.C.5", "3.MD.C.6", "3.MD.C.7", "3.MD.D.8", "3.G.A.1", "3.G.A.2", "3.MD.A.1"],
      example: ex("A rectangular majlis rug is 4 metres long and 3 metres wide. What is its area? What is its perimeter?", ["Area is the number of square metres that cover it: 4 x 3 = 12.", "Perimeter is the distance round the edge: 4 + 3 + 4 + 3 = 14."], "Area 12 square metres; perimeter 14 metres", "سجادة مجلس مستطيلة طولها 4 أمتار وعرضها 3 أمتار. ما مساحتها؟ وما محيطها؟", ["المساحة هي عدد الأمتار المربعة التي تغطيها: 4 × 3 = 12.", "المحيط هو المسافة حول الحافة: 4 + 3 + 4 + 3 = 14."], "المساحة 12 مترًا مربعًا والمحيط 14 مترًا"),
      items: [
        it("A rectangle is 5 cm long and 2 cm wide. What is its area?", "10 square centimetres", "مستطيل طوله 5 سم وعرضه 2 سم. ما مساحته؟", "10 سنتمترات مربعة"),
        it("A square has sides of 6 cm. What is its perimeter?", "24 cm", "مربع طول ضلعه 6 سم. ما محيطه؟", "24 سم"),
        it("A rectangle has area 24 square units and a width of 4 units. What is its length?", "6 units", "مستطيل مساحته 24 وحدة مربعة وعرضه 4 وحدات. ما طوله؟", "6 وحدات"),
        it("Name a shape with 4 sides and 4 equal sides. Is it always a square?", "A rhombus or a square. A rhombus is not always a square (its angles need not be right angles).", "سمِّ شكلًا له 4 أضلاع متساوية. هل هو دائمًا مربع؟", "معيّن أو مربع. والمعيّن ليس دائمًا مربعًا (فزواياه ليست بالضرورة قائمة)."),
        it("A shape is split into 4 equal parts. What fraction of the whole is each part?", "1/4", "قُسِّم شكل إلى 4 أجزاء متساوية. ما الكسر الذي يمثّله كل جزء من الكل؟", "1/4"),
        it("The film starts at 4:35 and lasts 40 minutes. When does it end?", "5:15", "يبدأ الفيلم عند 4:35 ويستمر 40 دقيقة. متى ينتهي؟", "5:15"),
        it("A rectangle has sides 7 cm and 3 cm. Find its perimeter.", "20 cm", "مستطيل ضلعاه 7 سم و 3 سم. أوجد محيطه.", "20 سم"),
        it("Draw two different rectangles that both have an area of 12 square units. What are their sides?", "For example 3 by 4 and 2 by 6 (also 1 by 12).", "ارسم مستطيلين مختلفين مساحة كل منهما 12 وحدة مربعة. ما أبعادهما؟", "مثلًا 3 في 4 و 2 في 6 (وكذلك 1 في 12)."),
        it("A jug holds 2 litres of juice. Hamad pours out 500 millilitres. How many millilitres are left? (1 litre = 1000 ml)", "1500 ml", "إبريق يتسع لـ 2 لتر من العصير. سكب حمد 500 مليلتر. كم مليلترًا بقي؟ (1 لتر = 1000 مل)", "1500 مل"),
        it("Which has the larger area: a 5 by 3 rectangle or a 4 by 4 square?", "The 4 by 4 square (16 against 15)", "أيهما مساحته أكبر: مستطيل 5 في 3 أم مربع 4 في 4؟", "المربع 4 في 4 (16 مقابل 15)")
      ]
    },
    {
      area: "dat",
      standards: ["3.MD.B.3", "3.MD.B.4"],
      example: ex("A bar graph shows books read in a month. Each square stands for 2 books. Salem has 5 squares and Mona has 3 squares. How many more books did Salem read?", ["Salem read 5 x 2 = 10 books.", "Mona read 3 x 2 = 6 books.", "10 - 6 = 4."], "4 more books", "يبيّن مخطط أعمدة الكتب المقروءة في شهر. كل مربع يمثّل كتابين. لدى سالم 5 مربعات ولدى منى 3 مربعات. كم كتابًا زيادة قرأ سالم؟", ["قرأ سالم 5 × 2 = 10 كتب.", "قرأت منى 3 × 2 = 6 كتب.", "10 - 6 = 4."], "4 كتب زيادة"),
      items: [
        it("In a picture graph each star is 5 votes. A drink has 4 stars. How many votes?", "20", "في رسم بياني بالصور كل نجمة تمثّل 5 أصوات. مشروب له 4 نجوم. كم صوتًا؟", "20"),
        it("In the same graph, juice has 6 stars and milk has 4 stars. How many more votes does juice have?", "10 (30 - 20)", "في الرسم نفسه، للعصير 6 نجوم وللحليب 4 نجوم. كم صوتًا زيادة للعصير؟", "10 (30 - 20)"),
        it("A bar graph scale goes up in 10s. A bar ends halfway between 20 and 30. What value does it show?", "25", "مقياس مخطط أعمدة يزيد بمقدار 10. ينتهي عمود في منتصف المسافة بين 20 و 30. ما القيمة؟", "25"),
        it("Pencil lengths in cm are 12, 14, 12, 15, 14, 12. How many pencils are 12 cm?", "3", "أطوال أقلام بالسنتيمتر: 12، 14، 12، 15، 14، 12. كم قلمًا طوله 12 سم؟", "3"),
        it("Use the lengths in the last question. What is the longest length, and what is the shortest?", "Longest 15 cm, shortest 12 cm", "استعمل الأطوال في السؤال السابق. ما أطول طول وما أقصره؟", "الأطول 15 سم والأقصر 12 سم"),
        it("On a line plot of lengths measured to the nearest half cm, there are 2 dots at 3 and 4 dots at 3 and a half. How many measurements are there?", "6", "على مخطط نقطي لأطوال مقاسة لأقرب نصف سنتمتر، هناك نقطتان عند 3 و 4 نقاط عند 3 ونصف. كم قياسًا هناك؟", "6"),
        it("A survey: 8 children like football, 5 like swimming, 7 like running. How many children in all?", "20", "استطلاع: 8 أطفال يحبون كرة القدم و 5 يحبون السباحة و 7 يحبون الجري. كم طفلًا في المجموع؟", "20"),
        it("Which sport in that survey is the most popular, and by how many votes is it ahead of the least popular?", "Football, ahead of swimming by 3", "أي رياضة في ذلك الاستطلاع هي الأكثر شعبية، وبكم صوتًا تتقدم على الأقل شعبية؟", "كرة القدم، وتتقدم على السباحة بثلاثة أصوات"),
        it("A graph uses 1 square for 3 students. 12 students walk to school. How many squares?", "4", "يستعمل رسم بياني مربعًا واحدًا لكل 3 طلاب. 12 طالبًا يمشون إلى المدرسة. كم مربعًا؟", "4"),
        it("Make a tally of the vowels a, e, i, o, u in your full name. Which letter shows the most?", "Answers vary with the name.", "اجمع بالعلامات حروف العلة a و e و i و o و u في اسمك الكامل. أي حرف يظهر أكثر؟", "تختلف الإجابة حسب الاسم.")
      ]
    },
    {
      area: "num",
      standards: ["3.NBT.A.1", "3.NBT.A.2", "3.NBT.A.3", "3.NF.A.1", "3.NF.A.2", "3.NF.A.3"],
      example: ex("Round 487 to the nearest ten and to the nearest hundred.", ["Look at the ones digit for the nearest ten: 7 is 5 or more, so round up: 490.", "Look at the tens digit for the nearest hundred: 8 is 5 or more, so round up: 500."], "490 and 500", "قرّب العدد 487 إلى أقرب عشرة وإلى أقرب مئة.", ["انظر إلى رقم الآحاد لأقرب عشرة: 7 أكبر من 5 أو تساويها فنقرّب إلى أعلى: 490.", "انظر إلى رقم العشرات لأقرب مئة: 8 أكبر من 5 أو تساويها فنقرّب إلى أعلى: 500."], "490 و 500"),
      items: [
        it("Round 364 to the nearest ten.", "360", "قرّب 364 إلى أقرب عشرة.", "360"),
        it("Round 751 to the nearest hundred.", "800", "قرّب 751 إلى أقرب مئة.", "800"),
        it("Add: 346 + 278", "624", "اجمع: 346 + 278", "624"),
        it("Subtract: 503 - 217", "286", "اطرح: 503 - 217", "286"),
        it("Multiply: 6 x 40", "240", "اضرب: 6 × 40", "240"),
        it("A bag holds 125 dates and a second bag holds 238. How many in total?", "363", "كيس فيه 125 تمرة وكيس ثانٍ فيه 238. كم تمرة في المجموع؟", "363"),
        it("What fraction of the circle is shaded if 3 of 8 equal parts are shaded?", "3/8", "ما الكسر الذي يمثّل الجزء المظلل من الدائرة إذا ظُلّلت 3 من 8 أجزاء متساوية؟", "3/8"),
        it("Which is greater: 1/2 or 1/4? Explain.", "1/2, because halves are bigger pieces than quarters.", "أيهما أكبر: 1/2 أم 1/4؟ وضّح.", "1/2، لأن الأنصاف أجزاء أكبر من الأرباع."),
        it("Write a fraction equal to 1/2 with 4 as the denominator.", "2/4", "اكتب كسرًا يساوي 1/2 مقامه 4.", "2/4"),
        it("Place 3/4 on a number line from 0 to 1. Between which two quarter marks do you stop?", "At the third mark of four equal parts, just before 1.", "ضع 3/4 على خط أعداد من 0 إلى 1. عند أي علامة من علامات الأرباع تتوقف؟", "عند العلامة الثالثة من أربعة أجزاء متساوية، قبل العدد 1 مباشرة.")
      ]
    }
  ]
};
