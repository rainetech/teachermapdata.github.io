// Mathematics practice booklet, Grade 7 expectations. See ma-3.js for the format.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });

module.exports = {
  subject: "ma",
  grade: 7,
  framework: "CCSS.MATH",
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "alg",
      standards: ["7.EE.A.1", "7.EE.A.2", "7.EE.B.3", "7.EE.B.4"],
      example: ex("Solve 3x + 5 = 20. Then check your answer.", ["Undo the + 5 by subtracting 5 from both sides: 3x = 15.", "Undo the multiplication by dividing both sides by 3: x = 5.", "Check: 3 x 5 + 5 = 15 + 5 = 20, which is correct."], "x = 5", "حُلّ المعادلة 3x + 5 = 20. ثم تحقق من إجابتك.", ["نلغي + 5 بطرح 5 من الطرفين: 3x = 15.", "نلغي الضرب بقسمة الطرفين على 3: x = 5.", "التحقق: 3 × 5 + 5 = 15 + 5 = 20، وهذا صحيح."], "x = 5"),
      items: [
        it("Simplify: 5x + 3 + 2x - 1", "7x + 2 (5x + 2x = 7x and 3 - 1 = 2)", "بسّط: 5x + 3 + 2x - 1", "7x + 2 (5x + 2x = 7x و 3 - 1 = 2)"),
        it("Expand: 4(x + 3)", "4x + 12", "فُكّ الأقواس: 4(x + 3)", "4x + 12"),
        it("Factor: 6x + 9", "3(2x + 3) (3 is a common factor of 6 and 9)", "حلّل إلى عوامل: 6x + 9", "3(2x + 3) (العدد 3 عامل مشترك لـ 6 و 9)"),
        it("Expand and simplify: 2(3x - 4) + 5", "6x - 3 (6x - 8 + 5)", "فُكّ الأقواس وبسّط: 2(3x - 4) + 5", "6x - 3 (6x - 8 + 5)"),
        it("Simplify: (5x - 2) - (2x - 6)", "3x + 4 (subtracting -6 adds 6)", "بسّط: (5x - 2) - (2x - 6)", "3x + 4 (طرح -6 يعني إضافة 6)"),
        it("Solve: 2x + 7 = 19", "x = 6", "حُلّ: 2x + 7 = 19", "x = 6"),
        it("Solve: 3(x - 2) = 15", "x = 7 (x - 2 = 5, so x = 7)", "حُلّ: 3(x - 2) = 15", "x = 7 (x - 2 = 5 إذن x = 7)"),
        it("Solve: x / 4 - 3 = 5", "x = 32 (x / 4 = 8)", "حُلّ: x ÷ 4 - 3 = 5", "x = 32 (x ÷ 4 = 8)"),
        it("Solve the inequality: 2x + 3 > 11", "x > 4", "حُلّ المتباينة: 2x + 3 > 11", "x > 4"),
        it("Salem buys 3 cups of karak and one pastry that costs AED 4. He pays AED 19 in all. Write an equation and find the price of one cup.", "3c + 4 = 19, so c = 5: a cup costs AED 5.", "اشترى سالم 3 أكواب كرك وفطيرة ثمنها 4 دراهم. دفع 19 درهمًا في المجموع. اكتب معادلة وأوجد ثمن الكوب الواحد.", "3c + 4 = 19 إذن c = 5: ثمن الكوب 5 دراهم."),
        it("Maryam has AED 40 on her metro card. Each trip costs AED 3. Write an inequality for the number of trips n she can take and say the greatest whole number of trips.", "3n ≤ 40, so n ≤ 13.3...; she can take at most 13 trips.", "في بطاقة المترو لدى مريم 40 درهمًا، وتكلفة كل رحلة 3 دراهم. اكتب متباينة لعدد الرحلات n التي تستطيعها، ثم اذكر أكبر عدد صحيح من الرحلات.", "3n ≤ 40 إذن n ≤ 13.3...؛ تستطيع القيام بـ 13 رحلة على الأكثر."),
        it("Hamdan says 3(x + 2) is the same as 3x + 2. Is he right? Explain.", "No. The 3 multiplies both terms: 3(x + 2) = 3x + 6.", "يقول حمدان إن 3(x + 2) تساوي 3x + 2. هل هو محق؟ وضّح.", "لا. العدد 3 يضرب الحدّين معًا: 3(x + 2) = 3x + 6.")
      ]
    },
    {
      area: "geo",
      standards: ["7.G.A.1", "7.G.A.2", "7.G.B.4", "7.G.B.5", "7.G.B.6"],
      example: ex("A circular fountain has a radius of 7 m. Using pi = 22/7, find its circumference and its area.", ["Circumference = 2 x pi x r = 2 x 22/7 x 7 = 44 m.", "Area = pi x r x r = 22/7 x 7 x 7 = 22 x 7 = 154.", "Area is measured in square units: 154 square metres."], "Circumference 44 m, area 154 square metres", "نافورة دائرية نصف قطرها 7 م. باستعمال π = 22/7 أوجد محيطها ومساحتها.", ["المحيط = 2 × π × نق = 2 × 22/7 × 7 = 44 م.", "المساحة = π × نق × نق = 22/7 × 7 × 7 = 22 × 7 = 154.", "تُقاس المساحة بالوحدات المربعة: 154 مترًا مربعًا."], "المحيط 44 م والمساحة 154 مترًا مربعًا"),
      items: [
        it("On a map, 1 cm stands for 5 km. Two towns are 6 cm apart on the map. What is the real distance?", "30 km", "على خريطة، كل 1 سم يمثل 5 كم. تبعد مدينتان 6 سم على الخريطة. ما المسافة الحقيقية؟", "30 كم"),
        it("A room is 4 m by 3 m. In a scale drawing, 1 cm stands for 0.5 m. What are the sides of the room in the drawing?", "8 cm by 6 cm", "غرفة أبعادها 4 م في 3 م. في رسم بمقياس، كل 1 سم يمثل 0.5 م. ما أبعاد الغرفة في الرسم؟", "8 سم في 6 سم"),
        it("Can a triangle be drawn with sides 3 cm, 4 cm and 8 cm? Explain.", "No: 3 + 4 = 7 is less than 8, so the two short sides cannot reach each other.", "هل يمكن رسم مثلث أطوال أضلاعه 3 سم و 4 سم و 8 سم؟ وضّح.", "لا: 3 + 4 = 7 وهو أقل من 8، فلا يستطيع الضلعان القصيران أن يلتقيا."),
        it("A circle has a diameter of 10 cm. Find its circumference. Use pi = 3.14.", "31.4 cm (3.14 x 10)", "قطر دائرة 10 سم. أوجد محيطها. استعمل π = 3.14.", "31.4 سم (3.14 × 10)"),
        it("A circle has a radius of 5 cm. Find its area. Use pi = 3.14.", "78.5 square cm (3.14 x 5 x 5)", "نصف قطر دائرة 5 سم. أوجد مساحتها. استعمل π = 3.14.", "78.5 سم مربع (3.14 × 5 × 5)"),
        it("A circular table has a circumference of 44 cm. Using pi = 22/7, what is its diameter?", "14 cm (44 divided by 22/7)", "محيط طاولة دائرية 44 سم. باستعمال π = 22/7، ما قطرها؟", "14 سم (44 ÷ 22/7)"),
        it("Two angles on a straight line are next to each other. One is 115 degrees. Find the other.", "65 degrees (the two add to 180)", "زاويتان متجاورتان على مستقيم. إحداهما 115 درجة. أوجد الأخرى.", "65 درجة (مجموعهما 180)"),
        it("Two straight lines cross. One of the angles is 50 degrees. Find the angle opposite it and the angle next to it.", "Opposite: 50 degrees. Next to it: 130 degrees (180 - 50).", "يتقاطع مستقيمان. إحدى الزوايا 50 درجة. أوجد الزاوية المقابلة لها بالرأس والزاوية المجاورة لها.", "المقابلة بالرأس: 50 درجة. المجاورة: 130 درجة (180 - 50)."),
        it("A floor is a rectangle 10 m by 6 m with a rectangular corner 4 m by 3 m cut out. What is the area of the floor?", "48 square metres (60 - 12)", "أرضية مستطيلة 10 م في 6 م قُطعت منها زاوية مستطيلة 4 م في 3 م. ما مساحة الأرضية؟", "48 مترًا مربعًا (60 - 12)"),
        it("A triangular prism has a triangular end with base 6 cm and height 4 cm. The prism is 10 cm long. Find its volume.", "120 cubic cm (area of the end is 12, times 10)", "منشور ثلاثي قاعدة مثلثه 6 سم وارتفاعه 4 سم، وطول المنشور 10 سم. أوجد حجمه.", "120 سم مكعب (مساحة القاعدة 12 ثم × 10)"),
        it("Find the surface area of a box that is 5 cm by 4 cm by 3 cm.", "94 square cm (2 x (20 + 15 + 12))", "أوجد مساحة سطح صندوق أبعاده 5 سم و 4 سم و 3 سم.", "94 سم مربع (2 × (20 + 15 + 12))"),
        it("A water tank is 2 m long, 1.5 m wide and 1 m high. How many litres does it hold when full? (1 cubic metre = 1,000 litres)", "3,000 litres (2 x 1.5 x 1 = 3 cubic metres)", "خزان ماء طوله 2 م وعرضه 1.5 م وارتفاعه 1 م. كم لترًا يتسع عند امتلائه؟ (1 متر مكعب = 1,000 لتر)", "3,000 لتر (2 × 1.5 × 1 = 3 أمتار مكعبة)")
      ]
    },
    {
      area: "dat",
      standards: ["7.SP.A.1", "7.SP.A.2", "7.SP.B.3", "7.SP.B.4", "7.SP.C.5", "7.SP.C.6", "7.SP.C.7", "7.SP.C.8"],
      example: ex("A bag holds 2 red, 3 green and 5 yellow beads. One bead is taken without looking. What is the probability that it is green?", ["Count all the beads: 2 + 3 + 5 = 10.", "Green beads: 3.", "Probability = 3 out of 10 = 3/10 = 0.3."], "3/10", "في كيس 2 خرزة حمراء و 3 خضراء و 5 صفراء. تُسحب خرزة دون النظر. ما احتمال أن تكون خضراء؟", ["نعدّ كل الخرزات: 2 + 3 + 5 = 10.", "الخرزات الخضراء: 3.", "الاحتمال = 3 من 10 = 3/10 = 0.3."], "3/10"),
      items: [
        it("What does a probability of 0.9 tell you about an event?", "It is very likely to happen (close to 1, which means certain).", "ماذا يخبرك الاحتمال 0.9 عن حدث ما؟", "أنه مرجّح جدًا أن يقع (قريب من 1 الذي يعني اليقين)."),
        it("A bag has 4 red marbles and 6 blue marbles. One is picked without looking. What is the probability it is blue?", "6/10 = 3/5", "في كيس 4 كريات حمراء و 6 كريات زرقاء. تُسحب كرية دون النظر. ما احتمال أن تكون زرقاء؟", "6/10 = 3/5"),
        it("A fair coin is tossed twice. What is the probability of two heads?", "1/4 (the outcomes are HH, HT, TH, TT, so 1 out of 4)", "تُرمى قطعة نقود عادلة مرتين. ما احتمال ظهور الصورة في المرتين؟", "1/4 (النواتج: صورة صورة، صورة كتابة، كتابة صورة، كتابة كتابة، إذن 1 من 4)"),
        it("A fair coin is tossed once and a spinner with 3 equal colours (red, green, blue) is spun once. How many different outcomes are possible?", "6 (2 x 3)", "تُرمى قطعة نقود عادلة مرة واحدة ويُدار مؤشر ذو 3 ألوان متساوية (أحمر وأخضر وأزرق) مرة واحدة. كم ناتجًا مختلفًا ممكنًا؟", "6 (2 × 3)"),
        it("Layla spins a spinner 50 times and it lands on green 18 times. What is the experimental probability of green?", "18/50 = 9/25 = 0.36", "أدارت ليلى مؤشرًا 50 مرة فوقف على الأخضر 18 مرة. ما الاحتمال التجريبي للأخضر؟", "18/50 = 9/25 = 0.36"),
        it("The probability of landing on green is 1/4. About how many times would you expect green in 80 spins?", "About 20 (1/4 of 80)", "احتمال الوقوف على الأخضر 1/4. كم مرة تتوقع الأخضر تقريبًا في 80 إدارة؟", "نحو 20 مرة (ربع 80)"),
        it("A school wants to know the favourite fruit of its 500 students. Which sample is better: 30 students chosen at random from the school list, or 30 students waiting at the fruit stall? Why?", "The random list: every student has a fair chance, so it is more likely to represent the whole school.", "تريد مدرسة معرفة الفاكهة المفضلة لدى طلابها الـ 500. أي عينة أفضل: 30 طالبًا يُختارون عشوائيًا من قائمة المدرسة أم 30 طالبًا ينتظرون عند كشك الفاكهة؟ ولماذا؟", "القائمة العشوائية: لأن لكل طالب فرصة عادلة، فتمثل المدرسة كلها على نحو أفضل."),
        it("In a random sample of 40 students, 10 prefer football. Predict how many of the 600 students in the school prefer football.", "About 150 (10/40 = 1/4, and 1/4 of 600)", "في عينة عشوائية من 40 طالبًا يفضل 10 منهم كرة القدم. توقّع كم طالبًا من طلاب المدرسة الـ 600 يفضلون كرة القدم.", "نحو 150 (10/40 = 1/4 وربع 600)"),
        it("Team A has a mean height of 150 cm and Team B has a mean height of 156 cm. Both groups have a mean absolute deviation of 4 cm. The difference between the means is how many times the mean absolute deviation?", "1.5 times (6 / 4)", "متوسط طول الفريق أ 150 سم ومتوسط طول الفريق ب 156 سم. متوسط الانحراف المطلق لكل مجموعة 4 سم. الفرق بين المتوسطين يساوي كم مرة متوسط الانحراف المطلق؟", "1.5 مرة (6 ÷ 4)"),
        it("Group A scores: 5, 6, 7, 8, 9. Group B scores: 8, 9, 10, 11, 12. How much higher is the median of group B?", "3 (the medians are 7 and 10)", "درجات المجموعة أ: 5 و 6 و 7 و 8 و 9. درجات المجموعة ب: 8 و 9 و 10 و 11 و 12. بكم يزيد وسيط المجموعة ب؟", "بمقدار 3 (الوسيطان 7 و 10)"),
        it("A seed sprouts with a probability of 40%. You use random digits from 0 to 9 to simulate one seed. Which digits could stand for sprouting?", "Any 4 of the 10 digits, for example 0, 1, 2, 3 (4 out of 10 is 40%).", "تنبت بذرة باحتمال 40%. تستعمل أرقامًا عشوائية من 0 إلى 9 لمحاكاة بذرة واحدة. أي الأرقام يمكن أن تمثل الإنبات؟", "أي 4 أرقام من الأرقام العشرة، مثل 0 و 1 و 2 و 3 (4 من 10 تساوي 40%)."),
        it("Hamdan tosses a fair coin and gets heads 4 times in a row. He says tails is now more likely. Is he right? Explain.", "No. Each toss is independent, so the chance of tails is still 1/2.", "رمى حمدان قطعة نقود عادلة فظهرت الصورة 4 مرات متتالية. يقول إن الكتابة صارت أرجح. هل هو محق؟ وضّح.", "لا. كل رمية مستقلة عن غيرها، فاحتمال الكتابة ما زال 1/2.")
      ]
    },
    {
      area: "num",
      standards: ["7.RP.A.1", "7.RP.A.2", "7.RP.A.3", "7.NS.A.1", "7.NS.A.2", "7.NS.A.3"],
      example: ex("A bag costs AED 80 before VAT. VAT is 5%. What is the price with VAT?", ["VAT = 5% of 80 = 0.05 x 80 = AED 4.", "Price with VAT = 80 + 4 = AED 84.", "Another way: multiply by 1.05: 80 x 1.05 = 84."], "AED 84", "ثمن حقيبة 80 درهمًا قبل ضريبة القيمة المضافة. الضريبة 5%. ما السعر بعد الضريبة؟", ["الضريبة = 5% من 80 = 0.05 × 80 = 4 دراهم.", "السعر بعد الضريبة = 80 + 4 = 84 درهمًا.", "طريقة أخرى: نضرب في 1.05: 80 × 1.05 = 84."], "84 درهمًا"),
      items: [
        it("A boy walks 1/2 km in 1/4 of an hour. What is his speed in km per hour?", "2 km per hour (1/2 divided by 1/4)", "يمشي ولد 1/2 كم في ربع ساعة. ما سرعته بالكيلومتر في الساعة؟", "2 كم في الساعة (1/2 ÷ 1/4)"),
        it("3 kg of dates cost AED 54 at the souq. At the same price, what do 5 kg cost?", "AED 90 (AED 18 for each kg)", "تكلّف 3 كجم من التمر 54 درهمًا في السوق. بالسعر نفسه، كم تكلّف 5 كجم؟", "90 درهمًا (18 درهمًا لكل كجم)"),
        it("A table pairs x and y: (2, 6), (4, 12), (5, 16). Is y proportional to x? Explain.", "No: 6/2 = 3 and 12/4 = 3 but 16/5 = 3.2, so the ratio is not always the same.", "جدول يقرن x مع y: (2، 6) و (4، 12) و (5، 16). هل y متناسبة مع x؟ وضّح.", "لا: 6 ÷ 2 = 3 و 12 ÷ 4 = 3 لكن 16 ÷ 5 = 3.2 فالنسبة ليست ثابتة."),
        it("A shirt costs AED 120. It is sold at 25% off. What is the sale price?", "AED 90 (discount 30, 120 - 30)", "ثمن قميص 120 درهمًا، ويُباع بخصم 25%. ما سعر البيع؟", "90 درهمًا (الخصم 30 و 120 - 30)"),
        it("A pair of shoes costs AED 240 before VAT. What is the total with 5% VAT?", "AED 252 (VAT is 12)", "ثمن حذاء 240 درهمًا قبل الضريبة. ما المجموع بعد ضريبة 5%؟", "252 درهمًا (الضريبة 12)"),
        it("A trader at the souq buys a rug for AED 40 and marks it up by 30%. What is the selling price?", "AED 52 (markup 12)", "اشترى تاجر في السوق سجادة بـ 40 درهمًا ورفع سعرها بنسبة 30%. ما سعر البيع؟", "52 درهمًا (الزيادة 12)"),
        it("Noura saves AED 2,000 at 4% simple interest a year. How much interest does she earn in 3 years?", "AED 240 (80 each year)", "تدّخر نورة 2,000 درهم بفائدة بسيطة 4% في السنة. كم فائدة تكسب في 3 سنوات؟", "240 درهمًا (80 في كل سنة)"),
        it("The price of a ticket rises from AED 50 to AED 60. What is the percent increase?", "20% (increase 10, and 10/50 = 0.2)", "ارتفع سعر تذكرة من 50 درهمًا إلى 60 درهمًا. ما نسبة الزيادة؟", "20% (الزيادة 10 و 10 ÷ 50 = 0.2)"),
        it("A diver is 12 m below the sea surface (-12 m). She swims up 5 m. Where is she now?", "-7 m (7 m below the surface)", "غواصة على عمق 12 م تحت سطح البحر (-12 م). صعدت 5 م. أين هي الآن؟", "-7 م (على عمق 7 م تحت السطح)"),
        it("Work out: (a) -4 - (-9)  (b) (-6) x (-7)", "(a) 5 (subtracting -9 is adding 9)  (b) 42 (two negatives make a positive)", "احسب: (أ) -4 - (-9)  (ب) (-6) × (-7)", "(أ) 5 (طرح -9 يعني إضافة 9)  (ب) 42 (سالبان يعطيان موجبًا)"),
        it("Work out: -3/4 + 1/2", "-1/4 (-3/4 + 2/4)", "احسب: -3/4 + 1/2", "-1/4 (-3/4 + 2/4)"),
        it("A jacket costs AED 150. It is reduced by 20%, and then 5% VAT is added to the reduced price. What does Omar pay? Show the steps.", "AED 126 (150 x 0.8 = 120, then 120 x 1.05 = 126)", "ثمن سترة 150 درهمًا. خُفّض السعر 20% ثم أُضيفت ضريبة 5% على السعر المخفض. كم يدفع عمر؟ اعرض الخطوات.", "126 درهمًا (150 × 0.8 = 120 ثم 120 × 1.05 = 126)")
      ]
    }
  ]
};
