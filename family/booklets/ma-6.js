// Mathematics practice booklet, Grade 6 expectations. See ma-3.js for the format.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });

module.exports = {
  subject: "ma",
  grade: 6,
  framework: "CCSS.MATH",
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "alg",
      standards: ["6.EE.A.1", "6.EE.A.2", "6.EE.A.3", "6.EE.A.4", "6.EE.B.5", "6.EE.B.6", "6.EE.B.7", "6.EE.B.8", "6.EE.C.9"],
      example: ex("A falcon eats 5 portions of food a day, so 5x = 35 when x is the number of days a box lasts. Solve for x, then work out 2x + 3.", ["5x means 5 times x. To undo the multiplying, divide both sides by 5.", "x = 35 / 5 = 7.", "Now replace x with 7 in 2x + 3: 2 x 7 + 3 = 14 + 3 = 17."], "x = 7; 2x + 3 = 17", "يأكل صقر 5 حصص طعام في اليوم، فتكون 5x = 35 حيث x عدد الأيام التي يكفيها الصندوق. أوجد x ثم احسب 2x + 3.", ["5x تعني 5 × x. للتخلص من الضرب نقسم الطرفين على 5.", "x = 35 ÷ 5 = 7.", "نعوّض الآن عن x بالعدد 7 في 2x + 3: 2 × 7 + 3 = 14 + 3 = 17."], "x = 7؛ 2x + 3 = 17"),
      items: [
        it("Evaluate: 3^2 + 4 x 2", "17 (3^2 = 9, 4 x 2 = 8, and 9 + 8 = 17)", "احسب: 3^2 + 4 × 2", "17 (3^2 = 9 و 4 × 2 = 8 و 9 + 8 = 17)"),
        it("Evaluate: 2^3 x 5", "40 (2^3 = 2 x 2 x 2 = 8, and 8 x 5 = 40)", "احسب: 2^3 × 5", "40 (2^3 = 2 × 2 × 2 = 8 و 8 × 5 = 40)"),
        it("Write an expression for: five less than twice a number n.", "2n - 5", "اكتب تعبيرًا جبريًا لـ: خمسة أقل من ضعف العدد n.", "2n - 5"),
        it("Evaluate 3x + 4 when x = 6.", "22 (3 x 6 = 18, and 18 + 4 = 22)", "احسب 3x + 4 عندما x = 6.", "22 (3 × 6 = 18 و 18 + 4 = 22)"),
        it("Are 2(x + 3) and 2x + 6 equivalent expressions? Explain.", "Yes: 2 multiplies both x and 3, so 2(x + 3) = 2x + 6 for every value of x.", "هل التعبيران 2(x + 3) و 2x + 6 متكافئان؟ وضّح.", "نعم: العدد 2 يضرب x و 3 معًا، فيكون 2(x + 3) = 2x + 6 لكل قيمة لـ x."),
        it("Simplify: 4a + 3a", "7a", "بسّط: 4a + 3a", "7a"),
        it("Solve: x + 9 = 25", "x = 16 (25 - 9)", "حلّ: x + 9 = 25", "x = 16 (25 - 9)"),
        it("Solve: 6n = 48", "n = 8 (48 / 6)", "حلّ: 6n = 48", "n = 8 (48 ÷ 6)"),
        it("Solve: n / 4 = 7", "n = 28 (7 x 4)", "حلّ: n ÷ 4 = 7", "n = 28 (7 × 4)"),
        it("Dates cost AED 12 a kilogram at the souq. Maryam pays AED 60. Write an equation for the number of kilograms k and solve it.", "12k = 60, so k = 5 kilograms.", "يبلغ سعر كيلوغرام التمر 12 درهمًا في السوق. دفعت مريم 60 درهمًا. اكتب معادلة لعدد الكيلوغرامات k ثم حلّها.", "12k = 60 إذن k = 5 كيلوغرامات."),
        it("A ride at a fun park needs a child to be taller than 120 cm. Write an inequality for the height h in cm.", "h > 120 (any height greater than 120 cm; 125 works, 120 does not)", "تشترط لعبة في مدينة ألعاب أن يكون الطفل أطول من 120 سم. اكتب متباينة للطول h بالسنتمتر.", "h > 120 (أي طول أكبر من 120 سم؛ 125 يصلح و 120 لا يصلح)"),
        it("A car park charges AED 4 for each hour. Let h be the hours and c the cost in AED. Write an equation, say which variable is independent, and find the cost for 5 hours.", "c = 4h; h is independent (you choose it) and c depends on it; 5 hours cost AED 20.", "يتقاضى موقف سيارات 4 دراهم عن كل ساعة. ليكن h عدد الساعات و c التكلفة بالدرهم. اكتب معادلة، وحدّد المتغير المستقل، وأوجد تكلفة 5 ساعات.", "c = 4h؛ المتغير المستقل هو h (أنت تختاره) و c يعتمد عليه؛ و 5 ساعات تكلّف 20 درهمًا.")
      ]
    },
    {
      area: "geo",
      standards: ["6.G.A.1", "6.G.A.2", "6.G.A.3", "6.G.A.4"],
      example: ex("A triangular shade sail over a play area has a base of 8 m and a height of 5 m. What is its area?", ["A triangle is half of a rectangle with the same base and height.", "The rectangle would be 8 x 5 = 40 square metres.", "Half of 40 is 20."], "20 square metres", "شراع ظل مثلث فوق منطقة لعب قاعدته 8 م وارتفاعه 5 م. ما مساحته؟", ["المثلث نصف مستطيل له القاعدة والارتفاع نفسهما.", "مساحة المستطيل ستكون 8 × 5 = 40 مترًا مربعًا.", "نصف 40 هو 20."], "20 مترًا مربعًا"),
      items: [
        it("Find the area of a triangle with base 10 cm and height 6 cm.", "30 square cm (half of 10 x 6)", "أوجد مساحة مثلث قاعدته 10 سم وارتفاعه 6 سم.", "30 سم مربع (نصف 10 × 6)"),
        it("Find the area of a parallelogram with base 8 cm and height 5 cm.", "40 square cm (8 x 5)", "أوجد مساحة متوازي أضلاع قاعدته 8 سم وارتفاعه 5 سم.", "40 سم مربع (8 × 5)"),
        it("A garden is shaped like an L. Split it into a rectangle 8 m by 5 m and a rectangle 4 m by 3 m. What is the total area?", "52 square metres (40 + 12)", "حديقة على شكل حرف L. قسّمها إلى مستطيل 8 م في 5 م ومستطيل 4 م في 3 م. ما المساحة الكلية؟", "52 مترًا مربعًا (40 + 12)"),
        it("A triangle has an area of 24 square cm and a base of 8 cm. What is its height?", "6 cm (24 = half of 8 x h, so 8 x h = 48 and h = 6)", "مساحة مثلث 24 سم مربع وقاعدته 8 سم. ما ارتفاعه؟", "6 سم (24 = نصف 8 × h إذن 8 × h = 48 و h = 6)"),
        it("A box is 5/2 m long, 2 m wide and 3/2 m high. Find its volume.", "15/2 = 7 1/2 cubic metres (5/2 x 2 x 3/2)", "صندوق طوله 5/2 م وعرضه 2 م وارتفاعه 3/2 م. أوجد حجمه.", "15/2 = 7 1/2 مترًا مكعبًا (5/2 × 2 × 3/2)"),
        it("A cube has edges of 1/2 cm. What is its volume?", "1/8 cubic cm (1/2 x 1/2 x 1/2)", "مكعب طول حرفه 1/2 سم. ما حجمه؟", "1/8 سم مكعب (1/2 × 1/2 × 1/2)"),
        it("A rectangle has corners at (1, 2), (6, 2), (6, 5) and (1, 5). Find its length, its width and its area.", "Length 5 units, width 3 units, area 15 square units.", "لمستطيل رؤوس عند (1، 2) و (6، 2) و (6، 5) و (1، 5). أوجد طوله وعرضه ومساحته.", "الطول 5 وحدات والعرض 3 وحدات والمساحة 15 وحدة مربعة."),
        it("Two points are at (-3, 4) and (-3, -2). How far apart are they?", "6 units (4 above zero and 2 below zero, 4 + 2 = 6)", "نقطتان عند (-3، 4) و (-3، -2). كم تبعد إحداهما عن الأخرى؟", "6 وحدات (4 فوق الصفر و 2 تحته، 4 + 2 = 6)"),
        it("A net is folded to make a rectangular box. How many faces does the net have, and what shape are they?", "6 faces, all rectangles (opposite faces are equal).", "تُطوى شبكة لتصنع صندوقًا مستطيل الأوجه. كم وجهًا في الشبكة وما شكلها؟", "6 أوجه كلها مستطيلات (كل وجهين متقابلين متساويان)."),
        it("Find the surface area of a box that is 4 cm long, 3 cm wide and 2 cm high.", "52 square cm (2 x 12 + 2 x 8 + 2 x 6 = 24 + 16 + 12)", "أوجد المساحة السطحية لصندوق طوله 4 سم وعرضه 3 سم وارتفاعه 2 سم.", "52 سم مربع (2 × 12 + 2 × 8 + 2 × 6 = 24 + 16 + 12)"),
        it("A square pyramid has a square base with sides 6 cm and 4 triangular faces, each with base 6 cm and height 5 cm. Find its surface area.", "96 square cm (base 36 + four triangles of 15 each = 36 + 60)", "هرم قاعدته مربعة طول ضلعها 6 سم وله 4 أوجه مثلثة، لكل منها قاعدة 6 سم وارتفاع 5 سم. أوجد مساحته السطحية.", "96 سم مربع (القاعدة 36 + أربعة مثلثات مساحة كل منها 15 = 36 + 60)"),
        it("A triangle and a parallelogram have the same base and the same height. How do their areas compare? Explain.", "The triangle has half the area: two copies of the triangle fit together to make the parallelogram.", "لمثلث ومتوازي أضلاع القاعدة نفسها والارتفاع نفسه. كيف تقارن مساحتاهما؟ وضّح.", "مساحة المثلث نصف مساحة متوازي الأضلاع: إذ يتشكل متوازي الأضلاع من مثلثين متطابقين.")
      ]
    },
    {
      area: "dat",
      standards: ["6.SP.A.1", "6.SP.A.2", "6.SP.A.3", "6.SP.B.4", "6.SP.B.5"],
      example: ex("Five pupils read 3, 5, 8, 4 and 10 books this term. Find the mean and the median.", ["Mean: add the values, 3 + 5 + 8 + 4 + 10 = 30, then divide by 5 to get 6.", "Median: put them in order, 3, 4, 5, 8, 10.", "The middle value is 5."], "Mean 6; median 5", "قرأ خمسة تلاميذ 3 و 5 و 8 و 4 و 10 كتب هذا الفصل. أوجد المتوسط والوسيط.", ["المتوسط: نجمع القيم 3 + 5 + 8 + 4 + 10 = 30 ثم نقسم على 5 فيكون 6.", "الوسيط: نرتب القيم 3 و 4 و 5 و 8 و 10.", "القيمة التي في الوسط هي 5."], "المتوسط 6؛ الوسيط 5"),
      items: [
        it("Which is a statistical question: A) How many hours did Salem sleep last night? B) How many hours do the pupils in Grade 6 usually sleep?", "B: it expects answers that vary from pupil to pupil.", "أي مما يلي سؤال إحصائي: أ) كم ساعة نام سالم الليلة الماضية؟ ب) كم ساعة ينام تلاميذ الصف السادس عادةً؟", "ب: لأنه يتوقع إجابات تختلف من تلميذ إلى آخر."),
        it("Find the mean of 4, 6, 7, 9, 9.", "7 (35 / 5)", "أوجد متوسط الأعداد 4 و 6 و 7 و 9 و 9.", "7 (35 ÷ 5)"),
        it("Find the median of 12, 5, 9, 7, 15, 3.", "8 (in order: 3, 5, 7, 9, 12, 15; the middle two are 7 and 9)", "أوجد وسيط الأعداد 12 و 5 و 9 و 7 و 15 و 3.", "8 (بالترتيب: 3 و 5 و 7 و 9 و 12 و 15؛ والعددان الأوسطان 7 و 9)"),
        it("Find the range of 3, 5, 7, 9, 12, 15.", "12 (15 - 3)", "أوجد مدى الأعداد 3 و 5 و 7 و 9 و 12 و 15.", "12 (15 - 3)"),
        it("Find the mean absolute deviation (MAD) of 3, 5, 7, 9.", "2 (mean 6; distances 3, 1, 1, 3 add to 8; 8 / 4 = 2)", "أوجد متوسط الانحراف المطلق (MAD) للأعداد 3 و 5 و 7 و 9.", "2 (المتوسط 6؛ والمسافات 3 و 1 و 1 و 3 مجموعها 8؛ 8 ÷ 4 = 2)"),
        it("Find the interquartile range (IQR) of 4, 6, 7, 9, 10, 12, 15.", "6 (median 9; lower half 4, 6, 7 has median 6; upper half 10, 12, 15 has median 12; 12 - 6 = 6)", "أوجد المدى الربيعي (IQR) للأعداد 4 و 6 و 7 و 9 و 10 و 12 و 15.", "6 (الوسيط 9؛ النصف الأدنى 4 و 6 و 7 وسيطه 6؛ والنصف الأعلى 10 و 12 و 15 وسيطه 12؛ 12 - 6 = 6)"),
        it("A box plot of taxi fares in AED has minimum 20, lower quartile 30, median 35, upper quartile 50 and maximum 80. Find the range and the IQR.", "Range 60 (80 - 20); IQR 20 (50 - 30).", "مخطط صندوقي لأجرة التاكسي بالدرهم: أصغر قيمة 20 والربيع الأدنى 30 والوسيط 35 والربيع الأعلى 50 وأكبر قيمة 80. أوجد المدى والمدى الربيعي.", "المدى 60 (80 - 20)؛ المدى الربيعي 20 (50 - 30)."),
        it("A dot plot shows books read by 15 pupils: 1 book (2 dots), 2 books (4 dots), 3 books (5 dots), 4 books (3 dots), 5 books (1 dot). What is the mode?", "3 books (it has the most dots)", "يبيّن مخطط نقطي عدد الكتب التي قرأها 15 تلميذًا: كتاب واحد (نقطتان) وكتابان (4 نقاط) و 3 كتب (5 نقاط) و 4 كتب (3 نقاط) و 5 كتب (نقطة واحدة). ما المنوال؟", "3 كتب (لأن لها أكبر عدد من النقاط)"),
        it("Using the same dot plot, what is the median number of books?", "3 books (the 8th of 15 values; 2 + 4 = 6 values are 2 or fewer, and the next 5 are 3)", "باستعمال المخطط النقطي نفسه، ما وسيط عدد الكتب؟", "3 كتب (القيمة الثامنة من 15؛ فهناك 2 + 4 = 6 قيم لا تزيد على 2 والقيم الخمس التالية كلها 3)"),
        it("A histogram shows minutes spent on homework: 0 to 9 minutes (4 pupils), 10 to 19 minutes (7 pupils), 20 to 29 minutes (5 pupils). How many pupils are there, and how many spent less than 20 minutes?", "16 pupils in all; 11 spent less than 20 minutes (4 + 7).", "يبيّن مدرّج تكراري الدقائق المستغرقة في الواجب: من 0 إلى 9 دقائق (4 تلاميذ) ومن 10 إلى 19 دقيقة (7 تلاميذ) ومن 20 إلى 29 دقيقة (5 تلاميذ). كم تلميذًا في المجموع، وكم منهم قضى أقل من 20 دقيقة؟", "16 تلميذًا في المجموع؛ و 11 منهم قضوا أقل من 20 دقيقة (4 + 7)."),
        it("Waiting times in minutes at a metro station on five days: 2, 3, 3, 4, 30. Which is better for describing a typical wait, the mean or the median? Why?", "The median, 3 minutes: the one very long wait of 30 pulls the mean up to 8.4.", "أوقات الانتظار بالدقائق في محطة المترو خلال خمسة أيام: 2 و 3 و 3 و 4 و 30. أيهما أفضل لوصف الانتظار المعتاد: المتوسط أم الوسيط؟ ولماذا؟", "الوسيط وهو 3 دقائق: لأن وقت الانتظار الطويل جدًا (30) يرفع المتوسط إلى 8.4."),
        it("The values 6, 8, 10 have mean 8 and median 8. A value of 20 is added. What happens to the mean and the median?", "Mean becomes 11 and median becomes 9. Both rise, but the mean rises more because it is pulled by the large value.", "للقيم 6 و 8 و 10 متوسط 8 ووسيط 8. أضيفت القيمة 20. ماذا يحدث للمتوسط والوسيط؟", "يصبح المتوسط 11 والوسيط 9. كلاهما يرتفع لكن المتوسط يرتفع أكثر لأن القيمة الكبيرة تسحبه.")
      ]
    },
    {
      area: "num",
      standards: ["6.RP.A.1", "6.RP.A.2", "6.RP.A.3", "6.NS.A.1", "6.NS.B.2", "6.NS.B.3", "6.NS.B.4", "6.NS.C.5", "6.NS.C.6", "6.NS.C.7"],
      example: ex("Work out 3/4 divided by 1/2. Then find 20% of 60.", ["To divide by a fraction, multiply by its reciprocal: 3/4 x 2/1 = 6/4 = 3/2 = 1 1/2.", "20% means 20 out of 100, or 1/5.", "One fifth of 60 is 12."], "1 1/2 and 12", "احسب 3/4 ÷ 1/2. ثم أوجد 20% من 60.", ["للقسمة على كسر نضرب في مقلوبه: 3/4 × 2/1 = 6/4 = 3/2 = 1 1/2.", "20% تعني 20 من كل 100 أي 1/5.", "خُمس 60 هو 12."], "1 1/2 و 12"),
      items: [
        it("A tray has 12 red and 8 white tiles. Write the ratio of red to white in simplest form.", "3:2 (divide both numbers by 4)", "في صينية 12 قطعة حمراء و 8 قطع بيضاء. اكتب النسبة بين الحمراء والبيضاء في أبسط صورة.", "3:2 (نقسم العددين على 4)"),
        it("5 kg of dates cost AED 90. What is the unit rate, the cost for 1 kg?", "AED 18 per kg (90 / 5)", "5 كغ من التمر تكلّف 90 درهمًا. ما معدل الوحدة أي تكلفة 1 كغ؟", "18 درهمًا للكيلوغرام (90 ÷ 5)"),
        it("A recipe uses 2 cups of rice for every 3 cups of water. How much water is needed for 8 cups of rice?", "12 cups (8 is 4 times 2, so 3 x 4 = 12)", "تستعمل وصفة كوبين من الأرز لكل 3 أكواب من الماء. كم كوبًا من الماء يلزم لـ 8 أكواب من الأرز؟", "12 كوبًا (8 يساوي 4 أمثال 2 إذن 3 × 4 = 12)"),
        it("Find 25% of 80.", "20", "أوجد 25% من 80.", "20"),
        it("30% of a number is 45. What is the number?", "150 (10% is 15, so 100% is 150)", "30% من عدد تساوي 45. ما العدد؟", "150 (10% تساوي 15 إذن 100% تساوي 150)"),
        it("A metro train travels 90 km in 1.5 hours at a steady speed. How far does it go in 1 hour?", "60 km (90 / 1.5)", "يقطع قطار المترو 90 كم في ساعة ونصف بسرعة ثابتة. كم كيلومترًا يقطع في ساعة واحدة؟", "60 كم (90 ÷ 1.5)"),
        it("Divide: 3/4 / 1/8", "6 (3/4 x 8/1 = 24/4)", "اقسم: 3/4 ÷ 1/8", "6 (3/4 × 8/1 = 24/4)"),
        it("Divide: 2 1/2 / 5/6", "3 (5/2 x 6/5 = 30/10)", "اقسم: 2 1/2 ÷ 5/6", "3 (5/2 × 6/5 = 30/10)"),
        it("Calculate: 12.6 x 3.5", "44.1", "احسب: 12.6 × 3.5", "44.1"),
        it("Calculate: 7.56 / 0.6", "12.6 (the same as 75.6 / 6)", "احسب: 7.56 ÷ 0.6", "12.6 (مثل 75.6 ÷ 6)"),
        it("Find the greatest common factor and the least common multiple of 12 and 18.", "GCF 6; LCM 36", "أوجد القاسم المشترك الأكبر والمضاعف المشترك الأصغر للعددين 12 و 18.", "القاسم المشترك الأكبر 6؛ والمضاعف المشترك الأصغر 36"),
        it("Put in order from least to greatest: -2.5, 1/2, -4, 0, 1.5. Then say which is colder, -8 degrees or -3 degrees, and which of the two has the greater absolute value.", "-4, -2.5, 0, 1/2, 1.5. -8 degrees is colder, and -8 also has the greater absolute value (8 is greater than 3).", "رتّب من الأصغر إلى الأكبر: -2.5 و 1/2 و -4 و 0 و 1.5. ثم قل أيهما أبرد: -8 درجات أم -3 درجات، وأيهما له القيمة المطلقة الأكبر.", "-4 و -2.5 و 0 و 1/2 و 1.5. الدرجة -8 أبرد، ولها أيضًا القيمة المطلقة الأكبر (8 أكبر من 3).")
      ]
    }
  ]
};
