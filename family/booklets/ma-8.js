// Mathematics practice booklet, Grade 8 expectations. See ma-5.js for the format.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });

module.exports = {
  subject: "ma",
  grade: 8,
  framework: "CCSS.MATH",
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "alg",
      standards: ["8.EE.B.5", "8.EE.B.6", "8.EE.C.7", "8.EE.C.8", "8.F.A.1", "8.F.A.2", "8.F.A.3", "8.F.B.4"],
      example: ex("Solve: 3(x - 4) = 2x + 5. Then check your answer.", ["Expand the bracket: 3x - 12 = 2x + 5.", "Take 2x from both sides: x - 12 = 5.", "Add 12 to both sides: x = 17.", "Check: 3 x (17 - 4) = 39 and 2 x 17 + 5 = 39. Both sides match."], "x = 17", "حل المعادلة: 3(x - 4) = 2x + 5. ثم تحقق من إجابتك.", ["نفك القوس: 3x - 12 = 2x + 5.", "نطرح 2x من الطرفين: x - 12 = 5.", "نضيف 12 إلى الطرفين: x = 17.", "التحقق: 3 × (17 - 4) = 39 و 2 × 17 + 5 = 39. الطرفان متساويان."], "x = 17"),
      items: [
        it("Solve: 3x + 7 = 28", "x = 7 (3x = 21)", "حل المعادلة: 3x + 7 = 28", "x = 7 (3x = 21)"),
        it("Solve: 5(x - 2) = 3x + 6", "x = 8 (5x - 10 = 3x + 6, so 2x = 16)", "حل المعادلة: 5(x - 2) = 3x + 6", "x = 8 (5x - 10 = 3x + 6 ومنه 2x = 16)"),
        it("Solve: x/2 + 3 = 11", "x = 16 (x/2 = 8)", "حل المعادلة: x/2 + 3 = 11", "x = 16 (x/2 = 8)"),
        it("Does 2x + 3 = 2x + 5 have a solution? Explain.", "No solution: taking 2x from both sides gives 3 = 5, which is never true.", "هل للمعادلة 2x + 3 = 2x + 5 حل؟ وضّح.", "لا يوجد حل: بطرح 2x من الطرفين نحصل على 3 = 5 وهذا غير صحيح أبدًا."),
        it("Find the slope of the line through (1, 2) and (4, 11).", "3 (rise 9 over run 3)", "أوجد ميل المستقيم المار بالنقطتين (1، 2) و (4، 11).", "3 (الارتفاع 9 على الامتداد 3)"),
        it("Write the equation of the line with slope 2 that crosses the y-axis at (0, -3).", "y = 2x - 3", "اكتب معادلة المستقيم الذي ميله 2 ويقطع محور y عند (0، -3).", "y = 2x - 3"),
        it("A taxi in Dubai charges AED 12 to start and AED 3 for each km. Write the cost y for x km, then find the cost of 10 km.", "y = 3x + 12; 10 km costs AED 42.", "تاكسي في دبي يتقاضى 12 درهمًا عند الانطلاق و 3 دراهم عن كل كيلومتر. اكتب التكلفة y لمسافة x كم ثم أوجد تكلفة 10 كم.", "y = 3x + 12؛ و 10 كم تكلّف 42 درهمًا."),
        it("Solve the system: y = 2x + 1 and y = x + 4", "x = 3, y = 7 (2x + 1 = x + 4 gives x = 3, then y = 7)", "حل النظام: y = 2x + 1 و y = x + 4", "x = 3 و y = 7 (من 2x + 1 = x + 4 نجد x = 3 ثم y = 7)"),
        it("Solve the system: x + y = 10 and x - y = 4", "x = 7, y = 3 (adding gives 2x = 14)", "حل النظام: x + y = 10 و x - y = 4", "x = 7 و y = 3 (بالجمع نحصل على 2x = 14)"),
        it("Is {(1, 3), (2, 5), (2, 7)} a function? Explain.", "No: the input 2 has two different outputs, 5 and 7.", "هل المجموعة {(1، 3)، (2، 5)، (2، 7)} دالة؟ وضّح.", "لا: فالمدخل 2 له مخرجان مختلفان هما 5 و 7."),
        it("Function A is y = 4x + 2. Function B has the table: x = 0, 1, 2 and y = 5, 7, 9. Which function grows faster?", "Function A: its rate of change is 4, while B's is 2.", "الدالة A هي y = 4x + 2. الدالة B جدولها: x = 0 و 1 و 2 و y = 5 و 7 و 9. أي الدالتين تزداد أسرع؟", "الدالة A: معدل تغيّرها 4 أما معدل تغيّر B فهو 2."),
        it("Salem has AED 50 and saves AED 20 a week. Hamdan has AED 10 and saves AED 30 a week. After how many weeks do they have the same amount, and how much is it?", "After 4 weeks, AED 130 each (50 + 20w = 10 + 30w gives w = 4, and 50 + 20 x 4 = 130).", "مع سالم 50 درهمًا ويدّخر 20 درهمًا أسبوعيًا. ومع حمدان 10 دراهم ويدّخر 30 درهمًا أسبوعيًا. بعد كم أسبوعًا يصبح معهما المبلغ نفسه وكم يكون؟", "بعد 4 أسابيع، 130 درهمًا لكل منهما (من 50 + 20w = 10 + 30w نجد w = 4، و 50 + 20 × 4 = 130).")
      ]
    },
    {
      area: "geo",
      standards: ["8.G.A.1", "8.G.A.2", "8.G.A.3", "8.G.A.4", "8.G.A.5", "8.G.B.6", "8.G.B.7", "8.G.B.8", "8.G.C.9"],
      example: ex("Find the distance between (-2, 1) and (4, 9).", ["Horizontal change: 4 - (-2) = 6. Vertical change: 9 - 1 = 8.", "These are the two legs of a right triangle: 6 squared + 8 squared = 36 + 64 = 100.", "The distance is the square root of 100, which is 10."], "10 units", "أوجد المسافة بين (-2، 1) و (4، 9).", ["التغير الأفقي: 4 - (-2) = 6. التغير الرأسي: 9 - 1 = 8.", "هما ضلعا القائمة في مثلث قائم الزاوية: 6 تربيع + 8 تربيع = 36 + 64 = 100.", "المسافة هي الجذر التربيعي للعدد 100 أي 10."], "10 وحدات"),
      items: [
        it("Translate the point (2, 3) by 4 units right and 5 units down. If a whole triangle were translated like this, would the image be congruent to the original triangle?", "(6, -2). Yes, a translation keeps size and shape.", "انقل النقطة (2، 3) أربع وحدات إلى اليمين وخمس وحدات إلى الأسفل. لو انسحب مثلث كامل بالطريقة نفسها، فهل تكون صورته مطابقة للمثلث الأصلي؟", "(6، -2). نعم، فالانسحاب يحافظ على الحجم والشكل."),
        it("Reflect the point (3, -4) across the x-axis, then reflect the original point across the y-axis.", "Across the x-axis: (3, 4). Across the y-axis: (-3, -4).", "اعكس النقطة (3، -4) حول محور x، ثم اعكس النقطة الأصلية حول محور y.", "حول محور x: (3، 4). حول محور y: (-3، -4)."),
        it("Rotate the point (2, 5) by 90 degrees anticlockwise about the origin.", "(-5, 2)", "دوّر النقطة (2، 5) بزاوية 90 درجة عكس عقارب الساعة حول نقطة الأصل.", "(-5، 2)"),
        it("A triangle is dilated from the origin with scale factor 3. The point (2, 4) is on it and one side is 2 cm long. Where does the point go and how long is the side now? Is the image congruent or similar?", "The point goes to (6, 12); the side is 6 cm. The image is similar, not congruent.", "يُكبَّر مثلث من نقطة الأصل بمعامل تكبير 3. تقع عليه النقطة (2، 4) وطول أحد أضلاعه 2 سم. إلى أين تنتقل النقطة وكم يصبح طول الضلع؟ وهل الصورة مطابقة أم مشابهة؟", "تنتقل النقطة إلى (6، 12) ويصبح الضلع 6 سم. الصورة مشابهة وليست مطابقة."),
        it("Triangle ABC has angles 40 and 60 degrees. Triangle DEF has angles 60 and 80 degrees. Are the triangles similar? Explain.", "Yes. ABC's third angle is 80 and DEF's third angle is 40, so both have angles 40, 60, 80.", "في المثلث ABC زاويتان قياسهما 40 و 60 درجة. وفي المثلث DEF زاويتان قياسهما 60 و 80 درجة. هل المثلثان متشابهان؟ وضّح.", "نعم. الزاوية الثالثة في ABC تساوي 80 وفي DEF تساوي 40 فلكليهما الزوايا 40 و 60 و 80."),
        it("Two angles of a triangle are 62 degrees and 47 degrees. Find the third angle.", "71 degrees (the angles add to 180)", "زاويتان في مثلث قياسهما 62 و 47 درجة. أوجد الزاوية الثالثة.", "71 درجة (مجموع الزوايا 180)"),
        it("Two parallel lines are cut by a transversal. One angle is 65 degrees. Find its alternate interior angle and the same-side interior angle.", "Alternate interior: 65 degrees. Same-side interior: 115 degrees (180 - 65).", "يقطع قاطع مستقيمين متوازيين وإحدى الزوايا 65 درجة. أوجد الزاوية الداخلية المتبادلة لها والزاوية الداخلية على جهة واحدة من القاطع.", "الداخلية المتبادلة: 65 درجة. الداخلية على جهة واحدة: 115 درجة (180 - 65)."),
        it("A ladder leans against a wall. Its foot is 3 m from the wall and it reaches 4 m up the wall. How long is the ladder?", "5 m (9 + 16 = 25)", "يستند سلّم إلى جدار. قاعدته تبعد 3 م عن الجدار ويصل ارتفاعه إلى 4 م على الجدار. ما طول السلّم؟", "5 م (9 + 16 = 25)"),
        it("A triangle has sides 8 cm, 15 cm and 17 cm. Is it a right triangle? Show why.", "Yes: 8 squared + 15 squared = 64 + 225 = 289 = 17 squared.", "مثلث أطوال أضلاعه 8 سم و 15 سم و 17 سم. هل هو قائم الزاوية؟ بيّن السبب.", "نعم: 8 تربيع + 15 تربيع = 64 + 225 = 289 = 17 تربيع."),
        it("Find the distance between (2, 1) and (7, 13).", "13 units (changes of 5 and 12, and 25 + 144 = 169)", "أوجد المسافة بين (2، 1) و (7، 13).", "13 وحدة (التغيران 5 و 12 و 25 + 144 = 169)"),
        it("A cylindrical water tank has radius 2 m and height 5 m. Find its volume in terms of pi, then use 3.14 for pi.", "20 pi cubic m, about 62.8 cubic m (pi x 4 x 5)", "خزان ماء أسطواني نصف قطره 2 م وارتفاعه 5 م. أوجد حجمه بدلالة باي، ثم استعمل 3.14 قيمةً لباي.", "20 باي متر مكعب، أي نحو 62.8 م مكعب (باي × 4 × 5)"),
        it("A cone has radius 3 cm and height 4 cm. A sphere has radius 3 cm. Find each volume (use 3.14 for pi).", "Cone: 12 pi, about 37.7 cubic cm. Sphere: 36 pi, about 113 cubic cm.", "مخروط نصف قطره 3 سم وارتفاعه 4 سم، وكرة نصف قطرها 3 سم. أوجد حجم كل منهما (استعمل 3.14 لباي).", "المخروط: 12 باي، أي نحو 37.7 سم مكعب. الكرة: 36 باي، أي نحو 113 سم مكعب.")
      ]
    },
    {
      area: "dat",
      standards: ["8.SP.A.1", "8.SP.A.2", "8.SP.A.3", "8.SP.A.4"],
      example: ex("In Grade 6, 20 students were asked about lunch: 15 bring a lunch box and 5 buy lunch. In Grade 8, 30 students were asked: 15 bring a lunch box and 15 buy lunch. Which grade is more likely to bring a lunch box?", ["The groups are different sizes, so compare percentages, not counts.", "Grade 6: 15 out of 20 = 75%.", "Grade 8: 15 out of 30 = 50%.", "75% is more than 50%."], "Grade 6 (75% compared with 50%)", "سُئل 20 طالبًا في الصف السادس عن الغداء: 15 يحضرون وجبة من البيت و 5 يشترون الغداء. وسُئل 30 طالبًا في الصف الثامن: 15 يحضرون وجبة من البيت و 15 يشترون الغداء. أي الصفين أكثر احتمالًا لإحضار وجبة من البيت؟", ["حجما المجموعتين مختلفان، لذا نقارن النسب المئوية لا الأعداد.", "الصف السادس: 15 من 20 = 75%.", "الصف الثامن: 15 من 30 = 50%.", "75% أكبر من 50%."], "الصف السادس (75% مقابل 50%)"),
      items: [
        it("A scatter plot shows that on hotter days a shop sells more cold drinks. Describe the association.", "Positive association: as one value goes up, so does the other.", "يبيّن مخطط الانتشار أن المحل يبيع مشروبات باردة أكثر في الأيام الأشد حرارة. صف نوع الارتباط.", "ارتباط موجب: كلما زادت إحدى القيمتين زادت الأخرى."),
        it("A scatter plot of the age of cars and their selling price slopes downward. Describe the association.", "Negative association: older cars tend to sell for less.", "مخطط انتشار لأعمار السيارات وأسعار بيعها يميل إلى الأسفل. صف نوع الارتباط.", "ارتباط سالب: السيارات الأقدم يميل سعرها إلى الانخفاض."),
        it("The points on a scatter plot are spread out with no pattern. What can you say?", "There is no association between the two variables.", "نقاط مخطط انتشار موزعة دون نمط. ماذا تقول عن العلاقة؟", "لا يوجد ارتباط بين المتغيرين."),
        it("Points: (1, 2), (2, 4), (3, 6), (4, 8), (5, 20). Which point is an outlier?", "(5, 20): it is far from the pattern of the others.", "النقاط: (1، 2) و (2، 4) و (3، 6) و (4، 8) و (5، 20). أي نقطة شاذة؟", "النقطة (5، 20): فهي بعيدة عن نمط النقاط الأخرى."),
        it("A line of best fit for the walking time y (minutes) over x km is y = 12x + 3. Predict the time for 5 km.", "63 minutes (12 x 5 + 3)", "خط الملاءمة لزمن المشي y (بالدقائق) لمسافة x كم هو y = 12x + 3. توقّع الزمن لمسافة 5 كم.", "63 دقيقة (12 × 5 + 3)"),
        it("In y = 12x + 3, what does the slope 12 mean in this situation?", "Each extra km adds about 12 minutes of walking.", "في y = 12x + 3 ماذا يعني الميل 12 في هذا الموقف؟", "كل كيلومتر إضافي يزيد زمن المشي بنحو 12 دقيقة."),
        it("A line of best fit passes through (0, 4) and (10, 24). Write its equation.", "y = 2x + 4 (slope 20 / 10 = 2)", "يمر خط ملاءمة بالنقطتين (0، 4) و (10، 24). اكتب معادلته.", "y = 2x + 4 (الميل 20 ÷ 10 = 2)"),
        it("A survey of 50 students: Grade 7: 18 have a library card and 12 do not. Grade 8: 14 have a card and 6 do not. How many students have a card in all?", "32 (18 + 14)", "استطلاع شمل 50 طالبًا: في الصف السابع 18 لديهم بطاقة مكتبة و 12 ليس لديهم. وفي الصف الثامن 14 لديهم بطاقة و 6 ليس لديهم. كم طالبًا لديه بطاقة في المجموع؟", "32 (18 + 14)"),
        it("In the same survey, what percentage of Grade 8 students have a card?", "70% (14 out of 20)", "في الاستطلاع نفسه، ما النسبة المئوية لطلاب الصف الثامن الذين لديهم بطاقة؟", "70% (14 من 20)"),
        it("What percentage of Grade 7 students have a card? Compare with Grade 8.", "60% (18 out of 30). A greater share of Grade 8 have a card, which suggests a small association.", "ما النسبة المئوية لطلاب الصف السابع الذين لديهم بطاقة؟ قارنها بالصف الثامن.", "60% (18 من 30). نسبة أكبر من طلاب الصف الثامن لديهم بطاقة، وهذا يشير إلى ارتباط صغير."),
        it("Why is it better to compare percentages than counts in that survey?", "The grades have different numbers of students (30 and 20), so counts would not be a fair comparison.", "لماذا من الأفضل مقارنة النسب المئوية لا الأعداد في ذلك الاستطلاع؟", "لأن عدد طلاب الصفين مختلف (30 و 20) فلا تكون مقارنة الأعداد عادلة."),
        it("Pool visits and ice cream sales both rise in hot weather. Does a strong association mean ice cream causes more swimming?", "No: the heat explains both. Association does not prove one thing causes the other.", "ترتفع زيارات المسبح ومبيعات المثلجات معًا في الطقس الحار. هل يعني الارتباط القوي أن المثلجات تسبب زيادة السباحة؟", "لا: فالحرارة تفسّر الأمرين. والارتباط لا يثبت أن شيئًا يسبب الآخر.")
      ]
    },
    {
      area: "num",
      standards: ["8.NS.A.1", "8.NS.A.2", "8.EE.A.1", "8.EE.A.2", "8.EE.A.3", "8.EE.A.4"],
      example: ex("Write 0.666... (6 repeating) as a fraction. Then simplify 2^5 x 2^-2.", ["Let x = 0.666... Then 10x = 6.666...", "Subtract: 10x - x = 6, so 9x = 6 and x = 6/9 = 2/3.", "Same base, so add the exponents: 2^5 x 2^-2 = 2^3 = 8."], "2/3 and 8", "اكتب 0.666... (الرقم 6 يتكرر) ككسر. ثم بسّط 2^5 × 2^-2.", ["لنفرض x = 0.666... فيكون 10x = 6.666...", "نطرح: 10x - x = 6 أي 9x = 6 ومنه x = 6/9 = 2/3.", "الأساس نفسه، فنجمع الأسس: 2^5 × 2^-2 = 2^3 = 8."], "2/3 و 8"),
      items: [
        it("Write 5/8 as a decimal.", "0.625", "اكتب 5/8 على صورة عدد عشري.", "0.625"),
        it("Write 0.272727... (27 repeating) as a fraction.", "3/11 (27/99 simplified)", "اكتب 0.272727... (العددان 27 يتكرران) ككسر.", "3/11 (27/99 بعد التبسيط)"),
        it("Which of these are irrational: the square root of 16, the square root of 20, pi, 0.5?", "The square root of 20 and pi. (The square root of 16 is 4, and 0.5 is 1/2.)", "أي من هذه أعداد غير نسبية: الجذر التربيعي للعدد 16، الجذر التربيعي للعدد 20، باي، 0.5؟", "الجذر التربيعي للعدد 20 وباي. (الجذر التربيعي للعدد 16 يساوي 4 و 0.5 يساوي 1/2.)"),
        it("Between which two whole numbers does the square root of 50 lie?", "Between 7 and 8 (49 < 50 < 64)", "بين أي عددين صحيحين يقع الجذر التربيعي للعدد 50؟", "بين 7 و 8 (49 < 50 < 64)"),
        it("Estimate the square root of 50 to the nearest tenth.", "7.1 (7.1 squared is 50.41)", "قدّر الجذر التربيعي للعدد 50 إلى أقرب جزء من عشرة.", "7.1 (7.1 تربيع = 50.41)"),
        it("Which is bigger: the square root of 10 or 3.2?", "3.2 (3.2 squared is 10.24, which is more than 10)", "أيهما أكبر: الجذر التربيعي للعدد 10 أم 3.2؟", "3.2 (3.2 تربيع = 10.24 وهو أكبر من 10)"),
        it("Simplify and evaluate: 3^4 x 3^2", "3^6 = 729", "بسّط ثم احسب: 3^4 × 3^2", "3^6 = 729"),
        it("Simplify and evaluate: 5^7 / 5^4", "5^3 = 125", "بسّط ثم احسب: 5^7 ÷ 5^4", "5^3 = 125"),
        it("Evaluate: (2^3)^2", "2^6 = 64", "احسب: (2^3)^2", "2^6 = 64"),
        it("Evaluate: 2^-3 and 10^0", "1/8 and 1", "احسب: 2^-3 و 10^0", "1/8 و 1"),
        it("The Hope Probe travelled about 493,000,000 km to reach Mars. Write this in scientific notation. Then write 0.00032 in scientific notation.", "4.93 x 10^8 and 3.2 x 10^-4", "قطع مسبار الأمل نحو 493,000,000 كم ليصل إلى المريخ. اكتب هذا العدد بالصيغة العلمية. ثم اكتب 0.00032 بالصيغة العلمية.", "4.93 × 10^8 و 3.2 × 10^-4"),
        it("How many times as large is 8 x 10^6 as 4 x 10^3? Write the answer in scientific notation.", "2 x 10^3 (8 / 4 = 2 and 10^6 / 10^3 = 10^3), so 2,000 times.", "العدد 8 × 10^6 يساوي كم مرة من العدد 4 × 10^3؟ اكتب الإجابة بالصيغة العلمية.", "2 × 10^3 (8 ÷ 4 = 2 و 10^6 ÷ 10^3 = 10^3) أي 2,000 مرة.")
      ]
    }
  ]
};
