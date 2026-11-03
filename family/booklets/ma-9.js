// Mathematics practice booklet, Grade 9 expectations. See ma-5.js for the format.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });

module.exports = {
  subject: "ma",
  grade: 9,
  framework: "CCSS.MATH",
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "alg",
      standards: ["A-SSE.A.1", "A-SSE.B.3", "A-APR.A.1", "A-CED.A.1", "A-CED.A.4", "A-REI.A.1", "A-REI.B.3", "A-REI.B.4", "A-REI.C.6", "F-IF.A.2", "F-LE.A.1"],
      example: ex("Solve x^2 + 2x - 15 = 0 by factoring. Then check one of your answers.", ["Look for two numbers that multiply to -15 and add to 2: they are 5 and -3.", "So x^2 + 2x - 15 = (x + 5)(x - 3) = 0.", "A product is 0 only when one factor is 0: x + 5 = 0 or x - 3 = 0.", "So x = -5 or x = 3.", "Check x = 3: 9 + 6 - 15 = 0. It works."], "x = -5 or x = 3", "حل المعادلة x^2 + 2x - 15 = 0 بالتحليل إلى العوامل. ثم تحقق من إحدى إجابتيك.", ["نبحث عن عددين حاصل ضربهما -15 ومجموعهما 2: هما 5 و -3.", "إذن x^2 + 2x - 15 = (x + 5)(x - 3) = 0.", "حاصل الضرب يساوي 0 فقط عندما يكون أحد العاملين 0: x + 5 = 0 أو x - 3 = 0.", "إذن x = -5 أو x = 3.", "التحقق من x = 3: 9 + 6 - 15 = 0. الإجابة صحيحة."], "x = -5 أو x = 3"),
      items: [
        it("Solve: 4x - 9 = 19", "x = 7 (4x = 28)", "حل المعادلة: 4x - 9 = 19", "x = 7 (4x = 28)"),
        it("Solve: 3(2x - 1) = 5x + 4", "x = 7 (6x - 3 = 5x + 4, so x = 7)", "حل المعادلة: 3(2x - 1) = 5x + 4", "x = 7 (6x - 3 = 5x + 4 ومنه x = 7)"),
        it("Solve the inequality: 2x + 5 > 17", "x > 6 (2x > 12)", "حل المتباينة: 2x + 5 > 17", "x > 6 (2x > 12)"),
        it("Solve the inequality: -3x <= 12. What happens to the inequality sign, and why?", "x >= -4. The sign turns around because we divided both sides by a negative number.", "حل المتباينة: -3x <= 12. ماذا يحدث لإشارة المتباينة ولماذا؟", "x >= -4. تنقلب الإشارة لأننا قسمنا الطرفين على عدد سالب."),
        it("The perimeter of a rectangle is P = 2l + 2w. Solve the formula for w. Then find w when P = 30 and l = 9.", "w = (P - 2l) / 2. When P = 30 and l = 9, w = (30 - 18) / 2 = 6.", "محيط المستطيل هو P = 2l + 2w. اكتب w بدلالة P و l. ثم أوجد w عندما P = 30 و l = 9.", "w = (P - 2l) ÷ 2. عندما P = 30 و l = 9 يكون w = (30 - 18) ÷ 2 = 6."),
        it("Solve the system: y = 3x - 2 and 2x + y = 13", "x = 3, y = 7 (2x + 3x - 2 = 13 gives 5x = 15)", "حل النظام: y = 3x - 2 و 2x + y = 13", "x = 3 و y = 7 (2x + 3x - 2 = 13 ومنه 5x = 15)"),
        it("Solve the system by elimination: 3x + 2y = 16 and x - 2y = 0", "x = 4, y = 2 (adding the equations gives 4x = 16; check: 12 + 4 = 16)", "حل النظام بالحذف: 3x + 2y = 16 و x - 2y = 0", "x = 4 و y = 2 (بجمع المعادلتين نحصل على 4x = 16؛ التحقق: 12 + 4 = 16)"),
        it("If f(x) = 2x^2 - 3x + 1, find f(3).", "10 (2 x 9 - 9 + 1)", "إذا كانت f(x) = 2x^2 - 3x + 1 فأوجد f(3).", "10 (2 × 9 - 9 + 1)"),
        it("Expand (x + 3)(x - 5). Then factor x^2 + 7x + 12.", "x^2 - 2x - 15. And x^2 + 7x + 12 = (x + 3)(x + 4).", "أوجد ناتج (x + 3)(x - 5). ثم حلّل x^2 + 7x + 12 إلى عوامله.", "x^2 - 2x - 15. و x^2 + 7x + 12 = (x + 3)(x + 4)."),
        it("Solve by factoring: x^2 - 5x + 6 = 0", "x = 2 or x = 3 ((x - 2)(x - 3) = 0)", "حل بالتحليل إلى العوامل: x^2 - 5x + 6 = 0", "x = 2 أو x = 3 ((x - 2)(x - 3) = 0)"),
        it("Noura has AED 50. Karak costs AED 3 a cup and she also buys a snack for AED 8. Write an inequality for the number of cups c she can buy, and solve it.", "3c + 8 <= 50, so c <= 14. She can buy at most 14 cups.", "مع نورة 50 درهمًا. ثمن كوب الكرك 3 دراهم وتشتري أيضًا وجبة خفيفة بثمن 8 دراهم. اكتب متباينة لعدد الأكواب c التي تستطيع شراءها ثم حلّها.", "3c + 8 <= 50 ومنه c <= 14. تستطيع شراء 14 كوبًا على الأكثر."),
        it("Maryam's savings start at AED 200 and grow by AED 50 each month. Her cousin Hamdan starts with AED 100 and his savings double each month. Who has more after 4 months? Which one is linear and which is exponential?", "Maryam: 200 + 4 x 50 = AED 400. Hamdan: 100 x 2^4 = AED 1,600. Hamdan has more. Maryam's is linear (adds the same amount); Hamdan's is exponential (multiplies by the same factor).", "تبدأ مدخرات مريم بـ 200 درهم وتزيد 50 درهمًا كل شهر. وتبدأ مدخرات ابن عمها حمدان بـ 100 درهم وتتضاعف كل شهر. من لديه مبلغ أكبر بعد 4 أشهر؟ أي النموذجين خطي وأيهما أسي؟", "مريم: 200 + 4 × 50 = 400 درهم. حمدان: 100 × 2^4 = 1,600 درهم. حمدان لديه مبلغ أكبر. نموذج مريم خطي (يضيف المقدار نفسه)؛ ونموذج حمدان أسي (يضرب في العامل نفسه).")
      ]
    },
    {
      area: "geo",
      standards: ["G-GPE.B.5", "G-GPE.B.7", "G-GMD.A.3"],
      example: ex("Line A is y = 2x + 3. Write the equation of the line through (4, 1) that is perpendicular to line A.", ["Line A has slope 2.", "A perpendicular line has the negative reciprocal slope: -1/2.", "Use y - 1 = -1/2 (x - 4), so y - 1 = -1/2 x + 2.", "Add 1 to both sides: y = -1/2 x + 3.", "Check: at x = 4, y = -2 + 3 = 1. The line passes through (4, 1)."], "y = -1/2 x + 3", "المستقيم A معادلته y = 2x + 3. اكتب معادلة المستقيم المار بالنقطة (4، 1) والعمودي على المستقيم A.", ["ميل المستقيم A يساوي 2.", "ميل المستقيم العمودي هو مقلوب الميل بإشارة معاكسة: -1/2.", "نستعمل y - 1 = -1/2 (x - 4) أي y - 1 = -1/2 x + 2.", "نضيف 1 إلى الطرفين: y = -1/2 x + 3.", "التحقق: عند x = 4 يكون y = -2 + 3 = 1. المستقيم يمر بالنقطة (4، 1)."], "y = -1/2 x + 3"),
      items: [
        it("Find the distance between (1, 2) and (7, 10).", "10 units (changes of 6 and 8; 36 + 64 = 100)", "أوجد المسافة بين (1، 2) و (7، 10).", "10 وحدات (التغيران 6 و 8؛ 36 + 64 = 100)"),
        it("Find the midpoint of the segment from (-2, 4) to (6, 10).", "(2, 7)", "أوجد نقطة منتصف القطعة المستقيمة من (-2، 4) إلى (6، 10).", "(2، 7)"),
        it("The midpoint of a segment is (3, 5) and one endpoint is (1, 2). Find the other endpoint.", "(5, 8) (3 is 2 more than 1, so 3 + 2 = 5; 5 is 3 more than 2, so 5 + 3 = 8)", "نقطة منتصف قطعة مستقيمة هي (3، 5) وإحدى نهايتيها (1، 2). أوجد النهاية الأخرى.", "(5، 8) (3 تزيد 2 على 1 فنحسب 3 + 2 = 5؛ و 5 تزيد 3 على 2 فنحسب 5 + 3 = 8)"),
        it("Find the slope of the line through (2, 3) and (6, 11).", "2 (rise 8 over run 4)", "أوجد ميل المستقيم المار بالنقطتين (2، 3) و (6، 11).", "2 (التغير الرأسي 8 على التغير الأفقي 4)"),
        it("Write the equation of the line through (0, 5) that is parallel to y = 2x + 1.", "y = 2x + 5 (parallel lines have the same slope)", "اكتب معادلة المستقيم المار بالنقطة (0، 5) والموازي للمستقيم y = 2x + 1.", "y = 2x + 5 (المستقيمان المتوازيان لهما الميل نفسه)"),
        it("A line has slope 3. What is the slope of any line perpendicular to it?", "-1/3 (the negative reciprocal)", "ميل مستقيم هو 3. ما ميل أي مستقيم عمودي عليه؟", "-1/3 (مقلوب الميل بإشارة معاكسة)"),
        it("Are the lines y = 2/3 x + 1 and y = -3/2 x + 4 perpendicular? Explain.", "Yes. The slopes multiply to 2/3 x (-3/2) = -1.", "هل المستقيمان y = 2/3 x + 1 و y = -3/2 x + 4 متعامدان؟ وضّح.", "نعم. حاصل ضرب الميلين 2/3 × (-3/2) = -1."),
        it("Write the equation of the line through (1, 4) that is perpendicular to y = -1/2 x + 3.", "y = 2x + 2 (slope 2; y - 4 = 2(x - 1))", "اكتب معادلة المستقيم المار بالنقطة (1، 4) والعمودي على y = -1/2 x + 3.", "y = 2x + 2 (الميل 2؛ y - 4 = 2(x - 1))"),
        it("A triangle has vertices (0, 0), (4, 0) and (4, 3). Find its perimeter.", "12 units (4 + 3 + 5, and the long side is the distance from (0, 0) to (4, 3): 16 + 9 = 25)", "رؤوس مثلث هي (0، 0) و (4، 0) و (4، 3). أوجد محيطه.", "12 وحدة (4 + 3 + 5، والضلع الأطول هو المسافة من (0، 0) إلى (4، 3): 16 + 9 = 25)"),
        it("A cylindrical water tank has radius 7 m and height 10 m. Find its volume using 22/7 for pi.", "1,540 cubic m (22/7 x 49 x 10)", "خزان ماء أسطواني نصف قطره 7 م وارتفاعه 10 م. أوجد حجمه باستعمال 22/7 لباي.", "1,540 م مكعب (22/7 × 49 × 10)"),
        it("A cone has radius 6 cm and height 10 cm. Find its volume using 3.14 for pi.", "376.8 cubic cm (1/3 x 3.14 x 36 x 10)", "مخروط نصف قطره 6 سم وارتفاعه 10 سم. أوجد حجمه باستعمال 3.14 لباي.", "376.8 سم مكعب (1/3 × 3.14 × 36 × 10)"),
        it("A ball has radius 3 cm. Find its volume in terms of pi, and then using 3.14. If the radius doubles, how many times as large does the volume become?", "36 pi, about 113.04 cubic cm (4/3 x pi x 27). The volume becomes 8 times as large, because 2 cubed is 8.", "كرة نصف قطرها 3 سم. أوجد حجمها بدلالة باي ثم باستعمال 3.14. إذا تضاعف نصف القطر فكم مرة يكبر الحجم؟", "36 باي، أي نحو 113.04 سم مكعب (4/3 × باي × 27). يصبح الحجم 8 أمثال ما كان، لأن 2 أس 3 يساوي 8.")
      ]
    },
    {
      area: "dat",
      standards: ["S-ID.A.1", "S-ID.A.2", "S-ID.A.3", "S-ID.B.5", "S-ID.B.6", "S-ID.C.7", "S-ID.C.8", "S-ID.C.9"],
      example: ex("Find the mean and the standard deviation of the data: 4, 6, 8, 10, 12.", ["Mean: (4 + 6 + 8 + 10 + 12) / 5 = 40 / 5 = 8.", "Distances from the mean: -4, -2, 0, 2, 4. Square them: 16, 4, 0, 4, 16.", "Add the squares: 40. Divide by 5: 8. This is the variance.", "The standard deviation is the square root of 8, about 2.8."], "Mean 8; standard deviation about 2.8", "أوجد الوسط الحسابي والانحراف المعياري للبيانات: 4 و 6 و 8 و 10 و 12.", ["الوسط الحسابي: (4 + 6 + 8 + 10 + 12) ÷ 5 = 40 ÷ 5 = 8.", "البعد عن الوسط: -4 و -2 و 0 و 2 و 4. نربّعها: 16 و 4 و 0 و 4 و 16.", "مجموع المربعات 40. نقسم على 5: 8. وهذا هو التباين.", "الانحراف المعياري هو الجذر التربيعي للعدد 8 أي نحو 2.8."], "الوسط 8؛ والانحراف المعياري نحو 2.8"),
      items: [
        it("A survey of 60 Grade 9 students asked how they get to school. Girls: 12 walk and 18 take the bus. Boys: 15 walk and 15 take the bus. How many students walk in all?", "27 (12 + 15)", "سُئل 60 طالبًا وطالبة في الصف التاسع عن طريقة وصولهم إلى المدرسة. الطالبات: 12 يمشين و 18 يركبن الحافلة. الطلاب: 15 يمشون و 15 يركبون الحافلة. كم طالبًا وطالبة يمشون في المجموع؟", "27 (12 + 15)"),
        it("In the same survey, what percentage of the girls walk? What percentage of the boys walk?", "Girls: 40% (12 out of 30). Boys: 50% (15 out of 30).", "في الاستطلاع نفسه، ما النسبة المئوية للطالبات اللواتي يمشين؟ وما النسبة المئوية للطلاب الذين يمشون؟", "الطالبات: 40% (12 من 30). الطلاب: 50% (15 من 30)."),
        it("In the same survey, what percentage of ALL the students are boys who take the bus?", "25% (15 out of 60)", "في الاستطلاع نفسه، ما النسبة المئوية للطلاب الذكور الذين يركبون الحافلة من بين جميع الطلاب والطالبات؟", "25% (15 من 60)"),
        it("A line of fit for the exam score y against the hours of study x is y = 5x + 50. Predict the score for 4 hours of study.", "70 (5 x 4 + 50)", "خط الملاءمة لدرجة الاختبار y مقابل ساعات المذاكرة x هو y = 5x + 50. توقّع الدرجة لمن ذاكر 4 ساعات.", "70 (5 × 4 + 50)"),
        it("In y = 5x + 50, explain what the slope 5 and the y-intercept 50 mean.", "Slope: each extra hour of study goes with about 5 more points. Intercept: with 0 hours of study the predicted score is 50.", "في y = 5x + 50 اشرح معنى الميل 5 ومعنى الجزء المقطوع من محور y وهو 50.", "الميل: كل ساعة مذاكرة إضافية ترتبط بزيادة نحو 5 درجات. الجزء المقطوع: عند 0 ساعة مذاكرة تكون الدرجة المتوقعة 50."),
        it("A line of fit predicts a score of 70 but the real score was 74. Find the residual (actual minus predicted).", "4 (74 - 70). The point lies 4 above the line.", "يتوقع خط الملاءمة درجة 70 لكن الدرجة الفعلية كانت 74. أوجد الباقي (الفعلي ناقص المتوقع).", "4 (74 - 70). النقطة تقع فوق الخط بمقدار 4."),
        it("Which correlation coefficient shows the strongest negative relationship: r = 0.9, r = -0.8, r = 0.1 or r = -0.2?", "r = -0.8: it is negative and closest to -1.", "أي معامل ارتباط يدل على أقوى علاقة سالبة: r = 0.9 أم r = -0.8 أم r = 0.1 أم r = -0.2؟", "r = -0.8: فهو سالب وأقرب إلى -1."),
        it("Children with bigger shoe sizes tend to read better. Does a bigger shoe size cause better reading? Explain.", "No. Age explains both: older children have bigger feet and have had more practice reading. Correlation does not mean causation.", "الأطفال ذوو مقاس الحذاء الأكبر يميلون إلى القراءة بشكل أفضل. هل مقاس الحذاء الأكبر يسبب قراءة أفضل؟ وضّح.", "لا. العمر يفسّر الأمرين: الأطفال الأكبر سنًا أقدامهم أكبر وتدرّبوا على القراءة أكثر. الارتباط لا يعني السببية."),
        it("Data: 2, 4, 5, 7, 8, 9, 12. Find the median, the lower quartile, the upper quartile and the interquartile range.", "Median 7; lower quartile 4; upper quartile 9; IQR = 9 - 4 = 5.", "البيانات: 2 و 4 و 5 و 7 و 8 و 9 و 12. أوجد الوسيط والربيع الأدنى والربيع الأعلى والمدى الربيعي.", "الوسيط 7؛ الربيع الأدنى 4؛ الربيع الأعلى 9؛ المدى الربيعي = 9 - 4 = 5."),
        it("For the same data, which five numbers mark the ends and the box of a box plot?", "Minimum 2, lower quartile 4, median 7, upper quartile 9, maximum 12.", "للبيانات نفسها، ما الأعداد الخمسة التي تحدد طرفي مخطط الصندوق والصندوق نفسه؟", "أصغر قيمة 2، الربيع الأدنى 4، الوسيط 7، الربيع الأعلى 9، أكبر قيمة 12."),
        it("Daily visitors to a small shop: 5, 6, 7, 8, 9. On a festival day 40 visitors came and this number was added to the list. Find the mean and the median before and after. Which is a better description of a usual day after adding it?", "Before: mean 7, median 7. After: mean 12.5, median 7.5. The median is better because the value 40 pulls the mean up a lot.", "عدد زوار محل صغير في الأيام: 5 و 6 و 7 و 8 و 9. وفي يوم الاحتفال جاء 40 زائرًا وأضيف إلى القائمة. أوجد الوسط والوسيط قبل الإضافة وبعدها. أيهما يصف اليوم المعتاد بشكل أفضل بعد الإضافة؟", "قبل: الوسط 7 والوسيط 7. بعد: الوسط 12.5 والوسيط 7.5. الوسيط أفضل لأن القيمة 40 ترفع الوسط كثيرًا.")
      ]
    },
    {
      area: "num",
      standards: ["N-RN.A.1", "N-RN.A.2", "N-RN.B.3", "N-Q.A.1"],
      example: ex("Evaluate 8^(2/3) and then write 5^(1/2) as a radical.", ["The exponent 2/3 means: take the cube root, then square. The cube root of 8 is 2.", "Square it: 2^2 = 4, so 8^(2/3) = 4.", "An exponent of 1/2 means the square root, so 5^(1/2) is the square root of 5."], "4 and the square root of 5", "احسب 8^(2/3) ثم اكتب 5^(1/2) على صورة جذر.", ["الأس 2/3 يعني: نأخذ الجذر التكعيبي ثم نربّع. الجذر التكعيبي للعدد 8 هو 2.", "نربّعه: 2^2 = 4 إذن 8^(2/3) = 4.", "الأس 1/2 يعني الجذر التربيعي، فـ 5^(1/2) هو الجذر التربيعي للعدد 5."], "4 والجذر التربيعي للعدد 5"),
      items: [
        it("Simplify and evaluate: 2^5 x 2^3", "2^8 = 256 (add the exponents)", "بسّط ثم احسب: 2^5 × 2^3", "2^8 = 256 (نجمع الأسس)"),
        it("Simplify and evaluate: 5^6 / 5^4", "5^2 = 25 (subtract the exponents)", "بسّط ثم احسب: 5^6 ÷ 5^4", "5^2 = 25 (نطرح الأسس)"),
        it("Evaluate: 4^(1/2), 27^(1/3) and 16^(3/2).", "2, 3 and 64. (16^(3/2): the square root is 4, and 4 cubed is 64.)", "احسب: 4^(1/2) و 27^(1/3) و 16^(3/2).", "2 و 3 و 64. (16^(3/2): الجذر التربيعي 4، و 4 مكعب يساوي 64.)"),
        it("Write the cube root of 5 using a rational exponent.", "5^(1/3)", "اكتب الجذر التكعيبي للعدد 5 باستعمال أس نسبي.", "5^(1/3)"),
        it("Evaluate: 5^-2 and 7^0. Explain why 7^0 = 1.", "1/25 and 1. Dividing 7^3 by 7^3 gives 7^0, and any number divided by itself is 1.", "احسب: 5^-2 و 7^0. اشرح لماذا 7^0 = 1.", "1/25 و 1. قسمة 7^3 على 7^3 تعطي 7^0، وأي عدد مقسوم على نفسه يساوي 1."),
        it("Is 1/2 + 3/4 rational or irrational? Is 3 + the square root of 2 rational or irrational?", "1/2 + 3/4 = 5/4, which is rational. 3 + the square root of 2 is irrational.", "هل 1/2 + 3/4 عدد نسبي أم غير نسبي؟ وهل 3 + الجذر التربيعي للعدد 2 عدد نسبي أم غير نسبي؟", "1/2 + 3/4 = 5/4 وهو عدد نسبي. أما 3 + الجذر التربيعي للعدد 2 فهو عدد غير نسبي."),
        it("Is the product of the square root of 2 and the square root of 8 rational or irrational? Show why.", "Rational: the square root of 2 x the square root of 8 = the square root of 16 = 4.", "هل حاصل ضرب الجذر التربيعي للعدد 2 في الجذر التربيعي للعدد 8 عدد نسبي أم غير نسبي؟ بيّن السبب.", "نسبي: الجذر التربيعي للعدد 2 × الجذر التربيعي للعدد 8 = الجذر التربيعي للعدد 16 = 4."),
        it("A falcon flies at 108 km per hour. Convert this to metres per second.", "30 metres per second (108,000 m / 3,600 s)", "يطير صقر بسرعة 108 كم في الساعة. حوّل السرعة إلى متر في الثانية.", "30 مترًا في الثانية (108,000 م ÷ 3,600 ث)"),
        it("A family car uses 8 litres of fuel for every 100 km. How many litres does it use on a 140 km trip?", "11.2 litres (8 x 1.4)", "تستهلك سيارة عائلة 8 لترات وقود لكل 100 كم. كم لترًا تستهلك في رحلة طولها 140 كم؟", "11.2 لتر (8 × 1.4)"),
        it("Write 5.2 x 10^-3 as an ordinary number, and write 45,000,000 in scientific notation.", "0.0052 and 4.5 x 10^7", "اكتب 5.2 × 10^-3 كعدد عادي، واكتب 45,000,000 بالصيغة العلمية.", "0.0052 و 4.5 × 10^7"),
        it("Calculate (2 x 10^4) x (3 x 10^3) and (6 x 10^8) / (3 x 10^5). Give each answer in scientific notation.", "6 x 10^7 and 2 x 10^3", "احسب (2 × 10^4) × (3 × 10^3) و (6 × 10^8) ÷ (3 × 10^5). اكتب كل إجابة بالصيغة العلمية.", "6 × 10^7 و 2 × 10^3"),
        it("A desalination plant makes 3 x 10^6 litres of fresh water a day. How many litres does it make in 7 days? Write the answer in scientific notation, and say which unit you would use to talk about it more easily.", "2.1 x 10^7 litres (21,000,000). Cubic metres or megalitres would be easier: 21,000 cubic metres.", "تنتج محطة تحلية 3 × 10^6 لترات من الماء العذب في اليوم. كم لترًا تنتج في 7 أيام؟ اكتب الإجابة بالصيغة العلمية، واذكر وحدة تجعل الحديث عنها أسهل.", "2.1 × 10^7 لتر (21,000,000). المتر المكعب أسهل: 21,000 م مكعب.")
      ]
    }
  ]
};
