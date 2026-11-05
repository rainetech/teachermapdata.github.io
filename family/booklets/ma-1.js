// Mathematics practice booklet, Grade 1 expectations. One file a booklet:
//   subject, grade, framework   what it is written to (CCSS Mathematics, Grade 1)
//   sections[]                  one for each goal area of the subject, in the order printed
//     area      the goal-area code (family/core.js AREAS)
//     standards the standards the section practises, short codes (1.OA.A.1 is CCSS.MATH.CONTENT.1.OA.A.1)
//     example   one worked example { en: { question, steps, answer }, ar: {...} }
//     items     ten or more questions, it(questionEn, answerEn, questionAr, answerAr)
// Original wording, UAE settings, nothing copied from CCSS text or NWEA items. The
// alignment is a draft for a teacher to check against the standards document.
// A parent can read each question aloud to the child.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const mc = (qEn, optsEn, correct, whyEn, qAr, optsAr, whyAr) => ({ q: T(qEn, qAr), a: T(whyEn, whyAr), options: { en: optsEn, ar: optsAr }, correct });
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });

module.exports = {
  subject: "ma",
  grade: 1,
  framework: "CCSS.MATH",
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "alg",
      standards: ["1.OA.A.1", "1.OA.A.2", "1.OA.B.3", "1.OA.B.4", "1.OA.C.5", "1.OA.C.6", "1.OA.D.7", "1.OA.D.8"],
      example: ex("Maryam has 8 dates. Her brother gives her 5 more dates. How many dates does she have now?", ["Start with 8 dates.", "Count on 5 more: 9, 10, 11, 12, 13.", "8 + 5 = 13."], "13 dates", "مع مريم 8 تمرات. أعطاها أخوها 5 تمرات أخرى. كم تمرة معها الآن؟", ["نبدأ بـ 8 تمرات.", "نعدّ 5 أخرى: 9، 10، 11، 12، 13.", "8 + 5 = 13."], "13 تمرة"),
      items: [
        it("What is 7 + 5?", "Count on 5 from 7: 8, 9, 10, 11, 12. So 7 + 5 = 12.", "كم يساوي 7 + 5؟", "نعدّ 5 أخرى من 7: 8 ثم 9 ثم 10 ثم 11 ثم 12. إذن 7 + 5 = 12."),
        mc("Hamdan has AED 9. He finds AED 4 more. How many dirhams does he have?", ["12", "13", "14"], 1, "Count on 4 from 9: 10, 11, 12, 13. If your child chose A (12), they counted the 9 as one of the 4 steps.", "مع حمدان 9 دراهم. وجد 4 دراهم أخرى. كم درهمًا معه الآن؟", ["12", "13", "14"], "نعدّ 4 أخرى من 9: 10 ثم 11 ثم 12 ثم 13. إذا اختار طفلك أ (12)، فربما عدّ الرقم 9 على أنه خطوة من الخطوات الأربع."),
        it("What is 15 - 6?", "15 - 5 = 10, then 10 - 1 = 9. So 15 - 6 = 9.", "كم يساوي 15 - 6؟", "15 - 5 = 10 ثم 10 - 1 = 9. إذن 15 - 6 = 9."),
        it("There are 14 date cookies on a plate. Layla and her sister eat 5 of them. How many are left?", "14 - 4 = 10, then 10 - 1 = 9. So 9 cookies are left.", "في الصحن 14 كعكة بالتمر. أكلت ليلى وأختها 5 منها. كم كعكة بقيت؟", "14 - 4 = 10 ثم 10 - 1 = 9. إذن بقيت 9 كعكات."),
        mc("Find the missing number: 8 + __ = 15", ["7", "8", "23"], 0, "8 + 7 = 15, because 15 - 8 = 7. If your child chose C (23), they added 8 and 15 instead of finding the missing part.", "أوجد العدد الناقص: 8 + __ = 15", ["7", "8", "23"], "8 + 7 = 15 لأن 15 - 8 = 7. إذا اختار طفلك ج (23)، فربما جمع 8 و 15 بدل أن يجد الجزء الناقص."),
        it("Salem had some dirhams. He spent AED 4 and has AED 6 left. How many dirhams did he have at first?", "He spent 4 and has 6 left, so put them together: 4 + 6 = 10. He had AED 10.", "كان مع سالم بعض الدراهم. أنفق 4 دراهم وبقيت معه 6 دراهم. كم درهمًا كان معه في البداية؟", "أنفق 4 وبقيت معه 6، لذلك نجمعهما: 4 + 6 = 10. كان معه 10 دراهم."),
        mc("Add three numbers: 3 + 4 + 6. Hint: look for two numbers that make 10.", ["10", "12", "13"], 2, "4 + 6 makes 10, then 10 + 3 = 13. If your child chose A (10), they added only the 4 and the 6.", "اجمع ثلاثة أعداد: 3 + 4 + 6. تلميح: ابحث عن عددين مجموعهما 10.", ["10", "12", "13"], "4 + 6 = 10 ثم 10 + 3 = 13. إذا اختار طفلك أ (10)، فربما جمع العددين 4 و 6 فقط."),
        it("Is 6 + 4 = 4 + 6 true or false?", "6 + 4 and 4 + 6 both make 10, so it is true. Adding in any order gives the same total.", "هل 6 + 4 = 4 + 6 صحيحة أم خاطئة؟", "6 + 4 و 4 + 6 كلاهما يساوي 10، لذلك هي صحيحة. الجمع بأي ترتيب يعطي المجموع نفسه."),
        mc("Which fact is in the same family as 6 + 7 = 13?", ["13 - 6 = 7", "13 + 6 = 19", "7 - 6 = 1"], 0, "The numbers 6, 7 and 13 make a family, and 13 - 6 = 7 uses the same three. If your child chose B (13 + 6 = 19), they added the total instead of taking away.", "أي عملية من عائلة الحقائق نفسها للعملية 6 + 7 = 13؟", ["13 - 6 = 7", "13 + 6 = 19", "7 - 6 = 1"], "الأعداد 6 و 7 و 13 تكوّن عائلة، و 13 - 6 = 7 تستعمل الأعداد الثلاثة نفسها. إذا اختار طفلك ب (13 + 6 = 19)، فربما جمع المجموع بدل أن يطرح."),
        it("You know 8 + 8 = 16. Use it to find 8 + 9.", "8 + 9 is one more than 8 + 8. 16 and 1 more is 17.", "تعرف أن 8 + 8 = 16. استعمل ذلك لإيجاد 8 + 9.", "8 + 9 أكبر بواحد من 8 + 8. و 16 وواحد آخر يصبح 17."),
        mc("Which is bigger, 9 + 4 or 7 + 5?", ["7 + 5", "They are equal", "9 + 4"], 2, "9 + 4 = 13 and 7 + 5 = 12, and 13 is bigger. If your child chose B (equal), they did not work out both totals.", "أيهما أكبر: 9 + 4 أم 7 + 5؟", ["7 + 5", "متساويان", "9 + 4"], "9 + 4 = 13 و 7 + 5 = 12، والعدد 13 أكبر. إذا اختار طفلك ب (متساويان)، فربما لم يحسب المجموعين.")
      ]
    },
    {
      area: "geo",
      standards: ["1.G.A.1", "1.G.A.2", "1.G.A.3", "1.MD.A.1", "1.MD.A.2", "1.MD.B.3"],
      example: ex("A round flatbread is cut into 4 equal pieces. What is each piece called? How many pieces make the whole bread?", ["Four equal pieces means each piece is one of four equal shares.", "Each piece is called a quarter.", "All 4 quarters together make the whole bread."], "Each piece is a quarter; 4 quarters make the whole", "قُسِّم رغيف دائري إلى 4 قطع متساوية. ماذا نسمّي كل قطعة؟ وكم قطعة تكوّن الرغيف كاملًا؟", ["أربع قطع متساوية تعني أن كل قطعة هي واحدة من أربع حصص متساوية.", "نسمّي كل قطعة ربعًا.", "الأرباع الأربعة معًا تكوّن الرغيف كاملًا."], "كل قطعة ربع؛ و 4 أرباع تكوّن الرغيف كاملًا"),
      items: [
        mc("How many sides does a triangle have?", ["2", "3", "4"], 1, "Count the sides of a triangle: 1, 2, 3. If your child chose C (4), they may have thought of a square.", "كم ضلعًا للمثلث؟", ["2", "3", "4"], "نعدّ أضلاع المثلث: 1 ثم 2 ثم 3. إذا اختار طفلك ج (4)، فربما فكّر في المربع."),
        it("How many corners does a square have?", "Touch each corner of a square and count: 1, 2, 3, 4. So a square has 4 corners.", "كم زاوية (ركنًا) للمربع؟", "المس كل زاوية في المربع وعدّ: 1 ثم 2 ثم 3 ثم 4. إذن للمربع 4 زوايا."),
        it("Maha holds an AED 1 coin. It is flat and round. What shape is it?", "A coin is flat and round, so its shape is a circle. A circle has no corners.", "تمسك مها عملة الدرهم الواحد. إنها مسطحة ومستديرة. ما شكلها؟", "العملة مسطحة ومستديرة، لذلك شكلها دائرة. والدائرة ليس لها زوايا."),
        mc("A door has 4 sides: two long sides and two short sides. What shape is it?", ["A square", "A triangle", "A rectangle"], 2, "Two long sides and two short sides make a rectangle. If your child chose A (a square), they missed that a square has 4 equal sides.", "للباب 4 أضلاع: ضلعان طويلان وضلعان قصيران. ما شكله؟", ["مربع", "مثلث", "مستطيل"], "ضلعان طويلان وضلعان قصيران يكوّنان مستطيلًا. إذا اختار طفلك أ (مربع)، فربما لم ينتبه إلى أن أضلاع المربع الأربعة متساوية."),
        it("Maha puts two square tiles side by side so they touch. What bigger shape can she make?", "Two squares side by side make one long shape with 4 corners, which is a rectangle.", "وضعت مها بلاطتين مربعتين جنبًا إلى جنب بحيث تتلامسان. ما الشكل الأكبر الذي تصنعه؟", "مربعان جنبًا إلى جنب يصنعان شكلًا طويلًا له 4 زوايا، وهو مستطيل."),
        it("Noura cuts a sandwich into 2 equal pieces. What is each piece called?", "Cutting into 2 equal pieces makes halves. So each piece is a half.", "قطعت نورة شطيرة إلى قطعتين متساويتين. ماذا نسمّي كل قطعة؟", "القطع إلى قطعتين متساويتين يصنع نصفين. إذن كل قطعة نصف."),
        mc("A pizza is cut into 4 equal slices. What is each slice called?", ["A quarter", "A half", "The whole"], 0, "4 equal slices means each slice is one quarter. If your child chose B (a half), they used the name for 2 equal slices.", "قُسِّمت بيتزا إلى 4 شرائح متساوية. ماذا نسمّي كل شريحة؟", ["ربع", "نصف", "الكل"], "4 شرائح متساوية تعني أن كل شريحة ربع. إذا اختار طفلك ب (نصف)، فربما استعمل اسم القطعة عند التقسيم إلى شريحتين متساويتين."),
        it("Salem's pencil is 9 cubes long. Maryam's pencil is 6 cubes long. Which pencil is longer, and by how many cubes?", "Subtract to compare: 9 - 6 = 3. So Salem's pencil is longer by 3 cubes.", "قلم سالم طوله 9 مكعبات. قلم مريم طوله 6 مكعبات. أي القلمين أطول، وبكم مكعبًا؟", "نطرح للمقارنة: 9 - 6 = 3. إذن قلم سالم أطول بـ 3 مكعبات."),
        mc("A ribbon is 5 paper clips long. A string is 8 paper clips long. Which one is shorter?", ["The string", "The ribbon", "They are the same length"], 1, "5 is less than 8, so the ribbon with 5 clips is shorter. If your child chose A (the string), they picked the longer one.", "شريط طوله 5 مشابك ورق، وخيط طوله 8 مشابك ورق. أيهما أقصر؟", ["الخيط", "الشريط", "لهما الطول نفسه"], "5 أقل من 8، لذلك الشريط ذو 5 مشابك أقصر. إذا اختار طفلك أ (الخيط)، فربما اختار الأطول."),
        it("On a clock the short hand points to 3 and the long hand points to 12. What time is it?", "The short hand on 3 gives the hour and the long hand on 12 means o'clock. So it is 3 o'clock.", "على الساعة العقرب القصير يشير إلى 3 والعقرب الطويل يشير إلى 12. كم الساعة؟", "العقرب القصير عند 3 يعطي الساعة، والعقرب الطويل عند 12 يعني تمامًا. إذن الساعة 3 تمامًا."),
        mc("On a clock the short hand is between 4 and 5 and the long hand points to 6. What time is it?", ["4:06", "6:04", "4:30"], 2, "The long hand on 6 means half past, and the short hand is past 4, so it is 4:30. If your child chose A (4:06), they read the 6 as minutes.", "على الساعة العقرب القصير بين 4 و 5 والعقرب الطويل يشير إلى 6. كم الساعة؟", ["4:06", "6:04", "4:30"], "العقرب الطويل عند 6 يعني والنصف، والعقرب القصير تجاوز 4، إذن الساعة 4:30. إذا اختار طفلك أ (4:06)، فربما قرأ الرقم 6 على أنه دقائق."),
        it("Is a half of a bread bigger than a quarter of the same bread? Say why.", "A half is the same as 2 quarters, and 2 quarters is more than 1 quarter. So a half is bigger.", "هل نصف الرغيف أكبر من ربع الرغيف نفسه؟ قل لماذا.", "النصف يساوي ربعين، وربعان أكثر من ربع واحد. إذن النصف أكبر.")
      ]
    },
    {
      area: "dat",
      standards: ["1.MD.C.4"],
      example: ex("Noura counted the fruit in a bowl: 4 apples, 6 oranges and 3 bananas. How many more oranges than apples are there?", ["Oranges: 6. Apples: 4.", "Take away: 6 - 4 = 2."], "2 more oranges", "عدّت نورة الفاكهة في وعاء: 4 تفاحات و 6 برتقالات و 3 موزات. كم برتقالة زيادة عن التفاح؟", ["البرتقال: 6. التفاح: 4.", "نطرح: 6 - 4 = 2."], "برتقالتان زيادة"),
      items: [
        it("Children chose a favourite fruit: apples 5, bananas 3, oranges 4. How many children chose in all?", "Add the three groups: 5 + 3 + 4 = 12. So 12 children chose.", "اختار الأطفال فاكهتهم المفضلة: تفاح 5، موز 3، برتقال 4. كم طفلًا اختار في المجموع؟", "نجمع المجموعات الثلاث: 5 + 3 + 4 = 12. إذن اختار 12 طفلًا."),
        mc("In the same count, which fruit did the most children choose?", ["Bananas", "Apples", "Oranges"], 1, "Apples have 5, which is bigger than 4 and 3, so most children chose apples. If your child chose C (oranges), they picked the second biggest number.", "في العدّ نفسه، أي فاكهة اختارها أكثر الأطفال؟", ["الموز", "التفاح", "البرتقال"], "للتفاح 5، وهو أكبر من 4 و 3، لذلك اختار أكثر الأطفال التفاح. إذا اختار طفلك ج (البرتقال)، فربما اختار ثاني أكبر عدد."),
        it("Which fruit did the fewest children choose?", "Look for the smallest number: 3 is less than 4 and 5. So bananas, with 3.", "أي فاكهة اختارها أقل عدد من الأطفال؟", "نبحث عن أصغر عدد: 3 أقل من 4 ومن 5. إذن الموز، وعدده 3."),
        mc("How many more children chose apples than bananas?", ["2", "3", "8"], 0, "Take away to compare: 5 - 3 = 2. If your child chose C (8), they added 5 and 3 instead.", "بكم زاد عدد الأطفال الذين اختاروا التفاح على الذين اختاروا الموز؟", ["2", "3", "8"], "نطرح للمقارنة: 5 - 3 = 2. إذا اختار طفلك ج (8)، فربما جمع 5 و 3 بدل أن يطرح."),
        it("How many fewer children chose bananas than oranges?", "Take away to compare: 4 - 3 = 1. So 1 fewer child chose bananas.", "بكم يقلّ عدد الأطفال الذين اختاروا الموز عن الذين اختاروا البرتقال؟", "نطرح للمقارنة: 4 - 3 = 1. إذن اختار الموز طفل واحد أقل."),
        it("How many children chose oranges or bananas?", "Add the oranges and the bananas: 4 + 3 = 7 children.", "كم طفلًا اختار البرتقال أو الموز؟", "نجمع البرتقال والموز: 4 + 3 = 7 أطفال."),
        it("Hind counted shapes in a picture: 4 circles, 7 squares, 3 triangles. How many squares are there?", "Look at the squares in the count. The number for squares is 7.", "عدّت هند أشكالًا في صورة: 4 دوائر و 7 مربعات و 3 مثلثات. كم مربعًا هناك؟", "نقرأ عدد المربعات في العدّ المذكور، وهو 7."),
        it("How many shapes are there in all?", "Add all three groups: 4 + 7 = 11, then 11 + 3 = 14.", "كم شكلًا هناك في المجموع؟", "نجمع المجموعات الثلاث: 4 + 7 = 11 ثم 11 + 3 = 14."),
        mc("How many more squares than triangles are there?", ["10", "3", "4"], 2, "Take away to compare: 7 - 3 = 4. If your child chose A (10), they added 7 and 3 instead.", "كم مربعًا زيادة عن المثلثات؟", ["10", "3", "4"], "نطرح للمقارنة: 7 - 3 = 4. إذا اختار طفلك أ (10)، فربما جمع 7 و 3 بدل أن يطرح."),
        mc("Which two kinds of shape together make exactly 10?", ["Squares and triangles", "Circles and squares", "Circles and triangles"], 0, "7 + 3 = 10, so it is squares and triangles. If your child chose B (circles and squares), they added 4 and 7 to get 11.", "أي نوعين من الأشكال معًا يكوّنان 10 بالضبط؟", ["المربعات والمثلثات", "الدوائر والمربعات", "الدوائر والمثلثات"], "7 + 3 = 10، إذن هما المربعات والمثلثات. إذا اختار طفلك ب (الدوائر والمربعات)، فربما جمع 4 و 7 فحصل على 11.")
      ]
    },
    {
      area: "num",
      standards: ["1.NBT.A.1", "1.NBT.B.2", "1.NBT.B.3", "1.NBT.C.4", "1.NBT.C.5", "1.NBT.C.6"],
      example: ex("How many tens and how many ones are in the number 36?", ["The first digit, 3, is the tens: 3 tens is 30.", "The second digit, 6, is the ones: 6 ones.", "30 + 6 = 36."], "3 tens and 6 ones", "كم عشرة وكم واحدًا في العدد 36؟", ["الرقم الأول 3 هو العشرات: 3 عشرات تساوي 30.", "الرقم الثاني 6 هو الآحاد: 6 آحاد.", "30 + 6 = 36."], "3 عشرات و 6 آحاد"),
      items: [
        it("Count on: 118, 119, __. What number comes next?", "Count on one more after 119. After 119 comes 120.", "عُدّ: 118، 119، __. ما العدد التالي؟", "نعدّ واحدًا آخر بعد 119. بعد 119 يأتي 120."),
        mc("How many tens and ones are in 52?", ["2 tens and 5 ones", "5 tens and 2 ones", "52 tens"], 1, "In 52 the first digit is the tens, so 5 tens, and the second digit is the ones, so 2 ones. If your child chose A (2 tens and 5 ones), they swapped the digits.", "كم عشرة وكم واحدًا في العدد 52؟", ["عشرتان و 5 آحاد", "5 عشرات وواحدان", "52 عشرة"], "في العدد 52 الرقم الأول هو العشرات أي 5 عشرات، والرقم الثاني هو الآحاد أي واحدان. إذا اختار طفلك أ (عشرتان و 5 آحاد)، فربما بدّل مكان الرقمين."),
        it("What number is 6 tens and 3 ones?", "6 tens is 60, and 3 ones is 3. So 60 + 3 = 63.", "ما العدد الذي يتكوّن من 6 عشرات و 3 آحاد؟", "6 عشرات تساوي 60، و 3 آحاد تساوي 3. إذن 60 + 3 = 63."),
        it("Which number is bigger, 48 or 84? Say it with the words bigger or smaller.", "Compare the tens first: 84 has 8 tens and 48 has 4 tens. So 84 is bigger and 48 is smaller.", "أي العددين أكبر: 48 أم 84؟ استعمل كلمة أكبر أو أصغر.", "نقارن العشرات أولًا: في 84 ثماني عشرات وفي 48 أربع عشرات. إذن 84 أكبر و 48 أصغر."),
        it("Omar says 29 is bigger than 31 because 9 is bigger than 1. Is he right? Explain with tens.", "Compare the tens first: 31 has 3 tens and 29 has 2 tens. So 31 is bigger, and Omar is not right.", "يقول عمر إن 29 أكبر من 31 لأن 9 أكبر من 1. هل هو على صواب؟ وضّح باستعمال العشرات.", "نقارن العشرات أولًا: في 31 ثلاث عشرات وفي 29 عشرتان. إذن 31 أكبر، وعمر ليس على صواب."),
        mc("What is 10 more than 34?", ["24", "35", "44"], 2, "10 more is 1 more ten, so 3 tens becomes 4 tens and the answer is 44. If your child chose B (35), they added 1 and not 10.", "ما العدد الذي هو أكبر بـ 10 من 34؟", ["24", "35", "44"], "الأكبر بـ 10 يعني عشرة أخرى، فتصبح 3 عشرات 4 عشرات والجواب 44. إذا اختار طفلك ب (35)، فربما أضاف 1 وليس 10."),
        it("Layla has 58 stickers and gives 10 of them to her cousin. How many stickers does she have left?", "Take 1 ten away: 5 tens becomes 4 tens. So 58 - 10 = 48 stickers.", "مع ليلى 58 ملصقة، أعطت 10 منها لابنة عمّها. كم ملصقة بقيت معها؟", "نأخذ عشرة واحدة: 5 عشرات تصبح 4 عشرات. إذن 58 - 10 = 48 ملصقة."),
        mc("Add: 43 + 5", ["48", "93", "47"], 0, "Add the ones: 3 + 5 = 8, so 43 + 5 = 48. If your child chose B (93), they added the 5 to the tens.", "اجمع: 43 + 5", ["48", "93", "47"], "نجمع الآحاد: 3 + 5 = 8، إذن 43 + 5 = 48. إذا اختار طفلك ب (93)، فربما أضاف 5 إلى العشرات."),
        it("Salem has AED 35. His grandmother gives him AED 20 more. How many dirhams does he have now?", "Add the tens: 3 tens + 2 tens = 5 tens, which is 50. Then 50 + 5 = 55.", "مع سالم 35 درهمًا. أعطته جدّته 20 درهمًا أخرى. كم درهمًا معه الآن؟", "نجمع العشرات: 3 عشرات + عشرتان = 5 عشرات أي 50. ثم 50 + 5 = 55."),
        mc("Khalid has AED 70 and spends AED 30. How many dirhams does he have left?", ["4", "40", "100"], 1, "7 tens - 3 tens = 4 tens, which is 40. If your child chose C (100), they added 70 and 30.", "مع خالد 70 درهمًا، أنفق منها 30 درهمًا. كم درهمًا بقي معه؟", ["4", "40", "100"], "7 عشرات - 3 عشرات = 4 عشرات أي 40. إذا اختار طفلك ج (100)، فربما جمع 70 و 30."),
        it("Maryam has four AED 10 notes. How many dirhams is that?", "Count by tens four times: 10, 20, 30, 40. So she has 40 dirhams.", "مع مريم أربع أوراق نقدية من فئة 10 دراهم. كم درهمًا معها؟", "نعدّ بالعشرات أربع مرات: 10 ثم 20 ثم 30 ثم 40. إذن معها 40 درهمًا.")
      ]
    }
  ]
};
