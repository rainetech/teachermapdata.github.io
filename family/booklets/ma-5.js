// Mathematics practice booklet, Grade 5 expectations. See ma-3.js for the format.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });

module.exports = {
  subject: "ma",
  grade: 5,
  framework: "CCSS.MATH",
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "alg",
      standards: ["5.OA.A.1", "5.OA.A.2", "5.OA.B.3"],
      example: ex("Work out 4 x (6 + 3) - 5. Then write the expression for: add 6 and 3, then multiply the sum by 4.", ["Brackets first: 6 + 3 = 9.", "Then multiply: 4 x 9 = 36.", "Then subtract: 36 - 5 = 31.", "Expression for the words: 4 x (6 + 3)."], "31; 4 x (6 + 3)", "احسب 4 × (6 + 3) - 5. ثم اكتب التعبير لـ: اجمع 6 و 3 ثم اضرب المجموع في 4.", ["الأقواس أولًا: 6 + 3 = 9.", "ثم الضرب: 4 × 9 = 36.", "ثم الطرح: 36 - 5 = 31.", "التعبير للكلمات: 4 × (6 + 3)."], "31؛ 4 × (6 + 3)"),
      items: [
        it("Evaluate: 18 - (4 + 5)", "9", "احسب: 18 - (4 + 5)", "9"),
        it("Evaluate: 3 x (12 - 7) + 8", "23", "احسب: 3 × (12 - 7) + 8", "23"),
        it("Evaluate: {20 - [3 x (2 + 1)]} / 2", "5.5 (inside: 2 + 1 = 3, 3 x 3 = 9, 20 - 9 = 11, 11 / 2)", "احسب: {20 - [3 × (2 + 1)]} ÷ 2", "5.5 (بالداخل: 2 + 1 = 3 و 3 × 3 = 9 و 20 - 9 = 11 و 11 ÷ 2)"),
        it("Write as an expression: three times the sum of 8 and 4.", "3 x (8 + 4)", "اكتب كتعبير: ثلاثة أمثال مجموع 8 و 4.", "3 × (8 + 4)"),
        it("Without calculating, is 2 x (45 + 17) bigger or smaller than 45 + 17?", "Bigger: it is twice the sum.", "دون حساب، هل 2 × (45 + 17) أكبر أم أصغر من 45 + 17؟", "أكبر: فهو ضعف المجموع."),
        it("Rule A: start at 0 and add 3. Rule B: start at 0 and add 6. Write the first five numbers of each.", "A: 3, 6, 9, 12, 15. B: 6, 12, 18, 24, 30.", "القاعدة أ: ابدأ من 0 وأضف 3. القاعدة ب: ابدأ من 0 وأضف 6. اكتب الأعداد الخمسة الأولى لكل منهما.", "أ: 3 و 6 و 9 و 12 و 15. ب: 6 و 12 و 18 و 24 و 30."),
        it("How does each number in Rule B compare with the matching number in Rule A?", "It is twice as big.", "كيف يقارن كل عدد في القاعدة ب بالعدد المقابل في القاعدة أ؟", "هو ضعفه."),
        it("Write the ordered pairs from the last two questions (A first, B second).", "(3, 6), (6, 12), (9, 18), (12, 24), (15, 30)", "اكتب الأزواج المرتبة من السؤالين الأخيرين (أ أولًا ثم ب).", "(3، 6) و (6، 12) و (9، 18) و (12، 24) و (15، 30)"),
        it("A taxi charges AED 10 to start and AED 2 for each km. Write a rule for the cost and find the cost of 6 km.", "Cost = 10 + 2 x km; 6 km costs AED 22.", "تاكسي يتقاضى 10 دراهم عند الانطلاق ودرهمين عن كل كيلومتر. اكتب قاعدة للتكلفة وأوجد تكلفة 6 كم.", "التكلفة = 10 + 2 × عدد الكيلومترات؛ و 6 كم تكلّف 22 درهمًا."),
        it("Insert brackets to make this true: 2 + 3 x 4 = 20", "(2 + 3) x 4 = 20", "ضع أقواسًا لتصبح العبارة صحيحة: 2 + 3 × 4 = 20", "(2 + 3) × 4 = 20")
      ]
    },
    {
      area: "geo",
      standards: ["5.MD.A.1", "5.MD.C.3", "5.MD.C.4", "5.MD.C.5", "5.G.A.1", "5.G.A.2", "5.G.B.3", "5.G.B.4"],
      example: ex("A fish tank is 50 cm long, 30 cm wide and 40 cm high. Find its volume in cubic centimetres and in litres (1 litre = 1,000 cubic cm).", ["Volume = length x width x height.", "50 x 30 = 1,500, then 1,500 x 40 = 60,000 cubic cm.", "60,000 / 1,000 = 60 litres."], "60,000 cubic cm, which is 60 litres", "حوض أسماك طوله 50 سم وعرضه 30 سم وارتفاعه 40 سم. أوجد حجمه بالسنتمتر المكعب وباللتر (1 لتر = 1,000 سم مكعب).", ["الحجم = الطول × العرض × الارتفاع.", "50 × 30 = 1,500 ثم 1,500 × 40 = 60,000 سم مكعب.", "60,000 ÷ 1,000 = 60 لترًا."], "60,000 سم مكعب أي 60 لترًا"),
      items: [
        it("A box is 5 cm by 4 cm by 3 cm. What is its volume?", "60 cubic cm", "صندوق أبعاده 5 سم و 4 سم و 3 سم. ما حجمه؟", "60 سم مكعب"),
        it("A cube has edges of 4 cm. What is its volume?", "64 cubic cm", "مكعب طول حرفه 4 سم. ما حجمه؟", "64 سم مكعب"),
        it("A box has a volume of 120 cubic cm. Its base is 10 cm by 4 cm. How tall is it?", "3 cm", "حجم صندوق 120 سم مكعب وقاعدته 10 سم في 4 سم. ما ارتفاعه؟", "3 سم"),
        it("Convert 2.5 m to centimetres.", "250 cm", "حوّل 2.5 م إلى سنتمترات.", "250 سم"),
        it("Convert 3,200 mL to litres.", "3.2 litres", "حوّل 3,200 مل إلى لترات.", "3.2 لترًا"),
        it("Point A is at (2, 3) on a grid. Starting at the origin, describe how to get there.", "Go 2 units right, then 3 units up.", "النقطة A عند (2، 3) على شبكة. بدءًا من نقطة الأصل، صف كيف تصل إليها.", "اذهب وحدتين إلى اليمين ثم 3 وحدات إلى الأعلى."),
        it("Plot the points (1, 1), (4, 1), (4, 3) and (1, 3) and join them in order. What shape do they make, and what is its area?", "A rectangle, 3 units by 2 units: area 6 square units", "عيّن النقاط (1، 1) و (4، 1) و (4، 3) و (1، 3) ثم صِلْها بالترتيب. ما الشكل الناتج وما مساحته؟", "مستطيل أبعاده 3 وحدات و 2 وحدتان، ومساحته 6 وحدات مربعة"),
        it("Is every square also a rectangle? Explain.", "Yes: a square has four right angles and opposite sides equal.", "هل كل مربع مستطيل أيضًا؟ وضّح.", "نعم: للمربع أربع زوايا قائمة وكل ضلعين متقابلين متساويان."),
        it("Is every rectangle also a square? Explain.", "No: a rectangle's sides need not all be equal.", "هل كل مستطيل مربع أيضًا؟ وضّح.", "لا: فأضلاع المستطيل ليست بالضرورة كلها متساوية."),
        it("A pool is 10 m by 5 m with water 2 m deep. How many cubic metres of water fill it?", "100 cubic metres", "حوض سباحة أبعاده 10 م في 5 م وعمق الماء 2 م. كم مترًا مكعبًا من الماء يملؤه؟", "100 متر مكعب")
      ]
    },
    {
      area: "dat",
      standards: ["5.MD.B.2", "5.NF.A.1", "5.NF.B.3"],
      example: ex("Water in 5 cups measures 1/2, 1/4, 1/4, 1/2 and 1/2 of a litre. If all the water is poured evenly into the 5 cups, how much does each hold?", ["Add: 1/2 + 1/4 + 1/4 + 1/2 + 1/2 = 2/4 + 1/4 + 1/4 + 2/4 + 2/4 = 8/4 = 2 litres.", "Share equally between 5 cups: 2 / 5 = 2/5 of a litre."], "2/5 of a litre", "تحتوي 5 أكواب على 1/2 و 1/4 و 1/4 و 1/2 و 1/2 لتر من الماء. إذا سُكب كل الماء بالتساوي في الأكواب الخمسة فكم يحتوي كل كوب؟", ["اجمع: 1/2 + 1/4 + 1/4 + 1/2 + 1/2 = 2/4 + 1/4 + 1/4 + 2/4 + 2/4 = 8/4 = 2 لتر.", "نوزع بالتساوي على 5 أكواب: 2 ÷ 5 = 2/5 لتر."], "2/5 لتر"),
      items: [
        it("A line plot shows 4 dots at 1/4 and 2 dots at 1/2. What is the total?", "2 (4 x 1/4 = 1 and 2 x 1/2 = 1)", "يبيّن مخطط نقطي 4 نقاط عند 1/4 ونقطتين عند 1/2. ما المجموع؟", "2 (4 × 1/4 = 1 و 2 × 1/2 = 1)"),
        it("Four friends have 3, 5, 6 and 10 stickers. They put them together and share them equally. How many stickers does each get?", "6 (3 + 5 + 6 + 10 = 24, and 24 / 4 = 6)", "مع 4 أصدقاء 3 و 5 و 6 و 10 ملصقات. جمعوها معًا واقتسموها بالتساوي. كم ملصقة يأخذ كل واحد؟", "6 (3 + 5 + 6 + 10 = 24 و 24 ÷ 4 = 6)"),
        it("A line plot shows 4 cups of water: 2 dots at 1/2 litre, 1 dot at 1/4 litre and 1 dot at 3/4 litre. How many litres of water are there in all?", "2 litres (1 + 1/4 + 3/4)", "يبيّن مخطط نقطي 4 أكواب ماء: نقطتان عند 1/2 لتر ونقطة عند 1/4 لتر ونقطة عند 3/4 لتر. كم لترًا من الماء هناك في المجموع؟", "لتران (1 + 1/4 + 3/4)"),
        it("If the water in the last question is poured evenly into the 4 cups, how much is in each cup?", "1/2 litre (2 / 4 = 1/2)", "إذا سُكب الماء في السؤال السابق بالتساوي في الأكواب الأربعة فكم لترًا في كل كوب؟", "1/2 لتر (2 ÷ 4 = 1/2)"),
        it("Is the answer to the worked example, 2/5 of a litre, more or less than 1/2 litre? Explain.", "Less: 2/5 = 4/10 and 1/2 = 5/10, and 4/10 is smaller.", "هل جواب المثال المحلول، 2/5 لتر، أكبر من 1/2 لتر أم أصغر منه؟ وضّح.", "أصغر: 2/5 = 4/10 و 1/2 = 5/10 و 4/10 أصغر."),
        it("A line plot of eggs per nest: 2 nests have 3 eggs each, 5 nests have 4 eggs each and 3 nests have 5 eggs each. How many nests are there?", "10", "مخطط نقطي لبيض الأعشاش: في عشّين 3 بيضات في كل عش، وفي 5 أعشاش 4 بيضات في كل عش، وفي 3 أعشاش 5 بيضات في كل عش. كم عشًّا هناك؟", "10"),
        it("Using the same data, how many eggs are there in all?", "41 (6 + 20 + 15)", "باستعمال البيانات نفسها، كم بيضة في المجموع؟", "41 (6 + 20 + 15)"),
        it("In that data, how many eggs does a nest most often have?", "4 eggs (5 nests have 4 eggs, more than any other number)", "في تلك البيانات، كم بيضة يضم العش في أغلب الأحيان؟", "4 بيضات (5 أعشاش فيها 4 بيضات، أكثر من أي عدد آخر)"),
        it("In the worked example, how much more water is in all the 1/2 litre cups than in all the 1/4 litre cups?", "1 litre (3 x 1/2 = 6/4, and 2 x 1/4 = 2/4, so 6/4 - 2/4 = 4/4)", "في المثال المحلول، كم لترًا زيادة في الأكواب التي فيها 1/2 لتر مقارنةً بالأكواب التي فيها 1/4 لتر؟", "لتر واحد (3 × 1/2 = 6/4 و 2 × 1/4 = 2/4 إذن 6/4 - 2/4 = 4/4)"),
        it("Check the worked example: if each of the 5 cups holds 2/5 litre, how much water is that altogether? Does it match the total?", "2 litres (5 x 2/5 = 10/5 = 2), the same as the total", "تحقق من المثال المحلول: إذا كان في كل كوب من الأكواب الخمسة 2/5 لتر فكم لترًا يكون المجموع؟ وهل يطابق المجموع الأصلي؟", "لتران (5 × 2/5 = 10/5 = 2) وهو يطابق المجموع الأصلي"),
      ]
    },
    {
      area: "num",
      standards: ["5.NBT.A.1", "5.NBT.A.2", "5.NBT.A.3", "5.NBT.A.4", "5.NBT.B.5", "5.NBT.B.6", "5.NBT.B.7", "5.NF.A.1", "5.NF.A.2", "5.NF.B.3", "5.NF.B.4", "5.NF.B.5", "5.NF.B.6", "5.NF.B.7"],
      example: ex("What is 2/3 + 1/4? What is 2/3 x 3/5?", ["Unlike denominators: find a common one, 12. 2/3 = 8/12 and 1/4 = 3/12.", "8/12 + 3/12 = 11/12.", "Multiplying: top times top and bottom times bottom: 2 x 3 = 6 and 3 x 5 = 15, giving 6/15 = 2/5."], "11/12 and 2/5", "ما ناتج 2/3 + 1/4؟ وما ناتج 2/3 × 3/5؟", ["المقامان مختلفان: نوجد مقامًا مشتركًا وهو 12. 2/3 = 8/12 و 1/4 = 3/12.", "8/12 + 3/12 = 11/12.", "في الضرب: البسط في البسط والمقام في المقام: 2 × 3 = 6 و 3 × 5 = 15 فينتج 6/15 = 2/5."], "11/12 و 2/5"),
      items: [
        it("What is 10 times 3.4? What is one tenth of 3.4?", "34 and 0.34", "ما ناتج 10 × 3.4؟ وما عُشر العدد 3.4؟", "34 و 0.34"),
        it("Write 4.075 in words.", "Four and seventy-five thousandths", "اكتب 4.075 بالكلمات.", "أربعة وخمسة وسبعون جزءًا من ألف"),
        it("A recipe uses 2/3 cup of flour. Maha makes 3/4 of the recipe. How much flour does she use?", "1/2 cup (2/3 x 3/4 = 6/12 = 1/2)", "تحتاج وصفة إلى 2/3 كوب من الدقيق. تُعدّ مها 3/4 الوصفة. كم كوبًا من الدقيق تستعمل؟", "1/2 كوب (2/3 × 3/4 = 6/12 = 1/2)"),
        it("Round 7.846 to the nearest hundredth.", "7.85", "قرّب 7.846 إلى أقرب جزء من مئة.", "7.85"),
        it("Multiply: 346 x 27", "9,342", "اضرب: 346 × 27", "9,342"),
        it("Divide: 1,248 / 24", "52", "اقسم: 1,248 ÷ 24", "52"),
        it("Add: 12.45 + 3.8", "16.25", "اجمع: 12.45 + 3.8", "16.25"),
        it("Salem walks 1/2 km to the souq and then 1/3 km to the bakery. How far does he walk in all?", "5/6 km (3/6 + 2/6)", "يمشي سالم 1/2 كم إلى السوق ثم 1/3 كم إلى المخبز. كم يمشي في المجموع؟", "5/6 كم (3/6 + 2/6)"),
        it("Calculate: 3/4 - 1/6", "7/12 (9/12 - 2/12)", "احسب: 3/4 - 1/6", "7/12 (9/12 - 2/12)"),
        it("4 friends share 3 pizzas equally. How much pizza does each get? Write it as a fraction.", "3/4 of a pizza", "يتقاسم 4 أصدقاء 3 بيتزات بالتساوي. كم من البيتزا يأخذ كل صديق؟ اكتبه ككسر.", "3/4 من بيتزا"),
        it("3 friends share 1/4 of a pizza equally. What fraction of the whole pizza does each friend get?", "1/12 (1/4 divided by 3 is 1/12)", "يتقاسم 3 أصدقاء ربع بيتزا بالتساوي. ما الكسر الذي يأخذه كل صديق من البيتزا كاملة؟", "1/12 (1/4 ÷ 3 = 1/12)"),
        it("Without multiplying, is 5 x 2/3 greater or less than 5? Explain.", "Less than 5, because 2/3 is less than 1, so 5 groups of 2/3 make less than 5.", "دون إجراء الضرب، هل 5 × 2/3 أكبر من 5 أم أصغر منها؟ وضّح.", "أصغر من 5، لأن 2/3 أقل من 1 فخمس مجموعات من 2/3 تعطي أقل من 5.")
      ]
    }
  ]
};
