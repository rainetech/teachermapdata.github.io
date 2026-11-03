// Mathematics practice booklet, Grade 4 expectations. See ma-3.js for the format.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });

module.exports = {
  subject: "ma",
  grade: 4,
  framework: "CCSS.MATH",
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "alg",
      standards: ["4.OA.A.1", "4.OA.A.2", "4.OA.A.3", "4.OA.B.4", "4.OA.C.5"],
      example: ex("A ribbon is 3 times as long as a string. The string is 14 cm. How long is the ribbon? Write the equation.", ["3 times as long means multiply: 3 x 14.", "3 x 10 = 30 and 3 x 4 = 12, so 30 + 12 = 42.", "Equation: r = 3 x 14 = 42."], "42 cm", "شريط أطول 3 مرات من خيط. طول الخيط 14 سم. ما طول الشريط؟ اكتب المعادلة.", ["أطول 3 مرات تعني الضرب: 3 × 14.", "3 × 10 = 30 و 3 × 4 = 12 إذن 30 + 12 = 42.", "المعادلة: r = 3 × 14 = 42."], "42 سم"),
      items: [
        it("Write as a multiplication: 24 is 4 times as many as 6.", "4 x 6 = 24", "اكتب بالضرب: 24 تساوي 4 أمثال العدد 6.", "4 × 6 = 24"),
        it("Maryam has 9 stickers. Noor has 5 times as many. How many does Noor have?", "45", "مع مريم 9 ملصقات ومع نور 5 أمثالها. كم ملصقة مع نور؟", "45"),
        it("A shirt costs AED 36 and a bag costs 3 times as much. How much do they cost together?", "AED 144 (bag AED 108, plus AED 36)", "قميص ثمنه 36 درهمًا وحقيبة ثمنها 3 أمثاله. كم ثمنهما معًا؟", "144 درهمًا (الحقيبة 108 دراهم زائد 36 درهمًا)"),
        it("There are 47 students going on a trip and each bus holds 12. How many buses are needed?", "4 buses (47 / 12 = 3 remainder 11, so one more bus is needed)", "يذهب 47 طالبًا في رحلة وتتسع كل حافلة لـ 12. كم حافلة تلزم؟", "4 حافلات (47 ÷ 12 = 3 والباقي 11، فنحتاج إلى حافلة أخرى)"),
        it("List all the factor pairs of 24.", "1 x 24, 2 x 12, 3 x 8, 4 x 6", "اكتب كل أزواج العوامل للعدد 24.", "1 × 24 و 2 × 12 و 3 × 8 و 4 × 6"),
        it("Is 17 prime or composite? How do you know?", "Prime: its only factors are 1 and 17.", "هل 17 عدد أولي أم مركّب؟ وكيف عرفت؟", "أولي: عاملاه الوحيدان هما 1 و 17."),
        it("Is 36 a multiple of 9? Explain.", "Yes: 9 x 4 = 36.", "هل 36 من مضاعفات 9؟ وضّح.", "نعم: 9 × 4 = 36."),
        it("Continue the pattern: 5, 11, 17, 23, __, __. What is the rule?", "29, 35; add 6 each time.", "أكمل النمط: 5، 11، 17، 23، __، __. ما القاعدة؟", "29 و 35؛ نضيف 6 في كل مرة."),
        it("A pattern starts at 2 and the rule is multiply by 2. Write the first five numbers.", "2, 4, 8, 16, 32", "نمط يبدأ من 2 وقاعدته الضرب في 2. اكتب الأعداد الخمسة الأولى.", "2 و 4 و 8 و 16 و 32"),
        it("Ali scores 8 more points than Sami, who scores 3 times as many as Hind. Hind scores 6. How many does Ali score?", "26 (Sami 18, Ali 26)", "يسجّل علي 8 نقاط أكثر من سامي، الذي يسجّل 3 أمثال ما سجلته هند. سجلت هند 6. كم نقطة سجّل علي؟", "26 (سامي 18 وعلي 26)")
      ]
    },
    {
      area: "geo",
      standards: ["4.MD.A.1", "4.MD.A.2", "4.MD.A.3", "4.MD.C.5", "4.MD.C.6", "4.G.A.1", "4.G.A.2", "4.G.A.3"],
      example: ex("A rectangular football pitch for children is 40 m long and 25 m wide. Find the perimeter and the area.", ["Perimeter = 2 x (40 + 25) = 2 x 65 = 130 m.", "Area = 40 x 25 = 1,000 square metres."], "Perimeter 130 m; area 1,000 square metres", "ملعب كرة قدم للأطفال مستطيل طوله 40 م وعرضه 25 م. أوجد المحيط والمساحة.", ["المحيط = 2 × (40 + 25) = 2 × 65 = 130 م.", "المساحة = 40 × 25 = 1,000 متر مربع."], "المحيط 130 م والمساحة 1,000 متر مربع"),
      items: [
        it("A rectangle has area 56 square cm and length 8 cm. What is its width?", "7 cm", "مساحة مستطيل 56 سنتمترًا مربعًا وطوله 8 سم. ما عرضه؟", "7 سم"),
        it("Convert: 3 km = ___ m", "3,000 m", "حوّل: 3 كم = ___ م", "3,000 م"),
        it("Convert: 2 hours 30 minutes = ___ minutes", "150 minutes", "حوّل: ساعتان و 30 دقيقة = ___ دقيقة", "150 دقيقة"),
        it("A rope is 2 m 40 cm and another is 1 m 85 cm. How much longer is the first, in cm?", "55 cm (240 - 185)", "حبل طوله 2 م و 40 سم وآخر 1 م و 85 سم. بكم سنتيمترًا الأول أطول؟", "55 سم (240 - 185)"),
        it("How many degrees is a right angle? Name an angle smaller than that.", "90 degrees; an acute angle (for example 45 degrees)", "كم درجة الزاوية القائمة؟ سمِّ زاوية أصغر منها.", "90 درجة؛ زاوية حادة (مثلًا 45 درجة)"),
        it("A turn of a clock hand from 12 to 3 turns through what angle?", "90 degrees", "دوران عقرب الساعة من 12 إلى 3 يمسح أي زاوية؟", "90 درجة"),
        it("Two angles on a straight line: one is 120 degrees. What is the other?", "60 degrees (a straight line is 180)", "زاويتان على مستقيم: إحداهما 120 درجة. ما الأخرى؟", "60 درجة (المستقيم 180 درجة)"),
        it("How many lines of symmetry does a rectangle that is not a square have?", "2", "كم محور تماثل لمستطيل ليس مربعًا؟", "2"),
        it("Name a triangle that has a right angle.", "A right triangle", "سمِّ مثلثًا فيه زاوية قائمة.", "مثلث قائم الزاوية"),
        it("Which pair of lines never meet however far they go: parallel or perpendicular?", "Parallel", "أي زوجين من المستقيمات لا يلتقيان مهما امتدّا: المتوازيان أم المتعامدان؟", "المتوازيان")
      ]
    },
    {
      area: "dat",
      standards: ["4.MD.B.4"],
      example: ex("A line plot shows rope lengths in quarters of a metre: 1/4 m has 3 dots, 2/4 m has 4 dots, 3/4 m has 1 dot. What is the total length of the 2/4 m ropes?", ["There are 4 dots at 2/4.", "4 x 2/4 = 8/4.", "8/4 is the same as 2 metres."], "2 metres", "يبيّن مخطط نقطي أطوال حبال بالأرباع: عند 1/4 م ثلاث نقاط وعند 2/4 م أربع نقاط وعند 3/4 م نقطة. ما الطول الكلي للحبال التي طولها 2/4 م؟", ["هناك 4 نقاط عند 2/4.", "4 × 2/4 = 8/4.", "8/4 يساوي مترين."], "مترين"),
      items: [
        it("Use the line plot in the example. How many ropes are there in all?", "8", "استعمل المخطط في المثال. كم حبلًا هناك في المجموع؟", "8"),
        it("Which length is the most common in that line plot?", "2/4 m", "ما الطول الأكثر تكرارًا في ذلك المخطط؟", "2/4 م"),
        it("How much longer is the longest rope than the shortest in that line plot?", "2/4 m (3/4 - 1/4)", "بكم الحبل الأطول أطول من الأقصر في ذلك المخطط؟", "2/4 م (3/4 - 1/4)"),
        it("Data: 5, 7, 7, 8, 10. What is the range?", "5 (10 - 5)", "البيانات: 5 و 7 و 7 و 8 و 10. ما المدى؟", "5 (10 - 5)"),
        it("A line plot of rainfall in half centimetres has 3 dots at 1/2 and 2 dots at 1. What is the total?", "3 and 1/2 cm (3 x 1/2 + 2 x 1 = 1 and 1/2 + 2)", "مخطط نقطي لأمطار بنصف السنتمتر فيه 3 نقاط عند 1/2 ونقطتان عند 1. ما المجموع؟", "3 ونصف سم (3 × 1/2 + 2 × 1 = 1 ونصف + 2)"),
        it("A bar graph has a scale in fives. One bar is between 15 and 20. What are the possible values?", "16, 17, 18 or 19 (read the bar against the gridlines)", "مقياس مخطط أعمدة بالخمسات. أحد الأعمدة بين 15 و 20. ما القيم الممكنة؟", "16 أو 17 أو 18 أو 19 (اقرأ العمود بمقارنته بخطوط الشبكة)"),
        it("Which graph is best for showing how a quantity changes over time: bar graph or line graph?", "A line graph", "أي مخطط أفضل لإظهار تغيّر كمية مع الزمن: مخطط الأعمدة أم المخطط الخطي؟", "المخطط الخطي"),
        it("Survey: 12 chose karak, 9 chose juice, 6 chose water. How many more chose karak than water?", "6", "استطلاع: اختار 12 الكرك و 9 العصير و 6 الماء. كم شخصًا زيادة اختار الكرك على الماء؟", "6"),
        it("In the survey above, what fraction of the 27 people chose juice? Simplify.", "9/27 = 1/3", "في الاستطلاع أعلاه، ما الكسر الذي يمثّل من اختاروا العصير من 27 شخصًا؟ بسّطه.", "9/27 = 1/3"),
        it("Seven plants measure 1/2, 1/2, 3/4, 3/4, 3/4, 1, and 1 and 1/4 of a metre. How many measure 3/4 m?", "3", "سبع نباتات قياساتها بالمتر: 1/2 و 1/2 و 3/4 و 3/4 و 3/4 و 1 و 1 وربع. كم نباتًا قياسه 3/4 م؟", "3")
      ]
    },
    {
      area: "num",
      standards: ["4.NBT.A.1", "4.NBT.A.2", "4.NBT.A.3", "4.NBT.B.4", "4.NBT.B.5", "4.NBT.B.6", "4.NF.A.1", "4.NF.A.2", "4.NF.B.3", "4.NF.B.4", "4.NF.C.5", "4.NF.C.6", "4.NF.C.7"],
      example: ex("What is 3/8 + 2/8? What is 3/4 as a fraction with 8 as the denominator?", ["The denominators match, so add the numerators: 3 + 2 = 5, giving 5/8.", "For 3/4: multiply the top and bottom by 2: 6/8."], "5/8 and 6/8", "ما ناتج 3/8 + 2/8؟ وما الكسر المكافئ لـ 3/4 مقامه 8؟", ["المقامان متساويان فنجمع البسطين: 3 + 2 = 5 فيصبح 5/8.", "لـ 3/4: اضرب البسط والمقام في 2: 6/8."], "5/8 و 6/8"),
      items: [
        it("Write in words: 45,208", "Forty-five thousand, two hundred eight", "اكتب بالكلمات: 45,208", "خمسة وأربعون ألفًا ومئتان وثمانية"),
        it("Round 36,482 to the nearest thousand.", "36,000", "قرّب 36,482 إلى أقرب ألف.", "36,000"),
        it("Add: 4,325 + 2,678", "7,003", "اجمع: 4,325 + 2,678", "7,003"),
        it("Subtract: 6,000 - 2,457", "3,543", "اطرح: 6,000 - 2,457", "3,543"),
        it("Multiply: 23 x 14", "322", "اضرب: 23 × 14", "322"),
        it("Divide: 852 / 4", "213", "اقسم: 852 ÷ 4", "213"),
        it("Compare using <, > or =: 3/5 and 2/5", "3/5 > 2/5", "قارن باستعمال < أو > أو =: 3/5 و 2/5", "3/5 > 2/5"),
        it("Add: 4/10 + 5/10", "9/10", "اجمع: 4/10 + 5/10", "9/10"),
        it("Multiply: 3 x 2/5", "6/5 = 1 and 1/5", "اضرب: 3 × 2/5", "6/5 = 1 و 1/5"),
        it("Write 7/10 as a decimal and 0.35 as a fraction.", "0.7 and 35/100 = 7/20", "اكتب 7/10 كعدد عشري و 0.35 ككسر.", "0.7 و 35/100 = 7/20")
      ]
    }
  ]
};
