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
        it("What is 7 + 5?", "12", "كم يساوي 7 + 5؟", "12"),
        mc("Hamdan has AED 9. He finds AED 4 more. How many dirhams does he have?", ["12", "13", "14"], 1, "9 + 4 = 13.", "مع حمدان 9 دراهم. وجد 4 دراهم أخرى. كم درهمًا معه الآن؟", ["12", "13", "14"], "9 + 4 = 13."),
        it("What is 15 - 6?", "9", "كم يساوي 15 - 6؟", "9"),
        it("There are 14 date cookies on a plate. Layla and her sister eat 5 of them. How many are left?", "9 (14 - 5 = 9)", "في الصحن 14 كعكة بالتمر. أكلت ليلى وأختها 5 منها. كم كعكة بقيت؟", "9 (14 - 5 = 9)"),
        mc("Find the missing number: 8 + __ = 15", ["7", "8", "23"], 0, "8 + 7 = 15, because 15 - 8 = 7.", "أوجد العدد الناقص: 8 + __ = 15", ["7", "8", "23"], "8 + 7 = 15 لأن 15 - 8 = 7."),
        it("Salem had some dirhams. He spent AED 4 and has AED 6 left. How many dirhams did he have at first?", "10 (10 - 4 = 6)", "كان مع سالم بعض الدراهم. أنفق 4 دراهم وبقيت معه 6 دراهم. كم درهمًا كان معه في البداية؟", "10 (10 - 4 = 6)"),
        mc("Add three numbers: 3 + 4 + 6. Hint: look for two numbers that make 10.", ["10", "12", "13"], 2, "4 + 6 = 10, then 10 + 3 = 13.", "اجمع ثلاثة أعداد: 3 + 4 + 6. تلميح: ابحث عن عددين مجموعهما 10.", ["10", "12", "13"], "4 + 6 = 10 ثم 10 + 3 = 13."),
        it("Is 6 + 4 = 4 + 6 true or false?", "True: both make 10.", "هل 6 + 4 = 4 + 6 صحيحة أم خاطئة؟", "صحيحة: كلاهما يساوي 10."),
        mc("Which fact is in the same family as 6 + 7 = 13?", ["13 - 6 = 7", "13 + 6 = 19", "7 - 6 = 1"], 0, "The family is 6 + 7 = 13, 7 + 6 = 13, 13 - 6 = 7 and 13 - 7 = 6.", "أي عملية من عائلة الحقائق نفسها للعملية 6 + 7 = 13؟", ["13 - 6 = 7", "13 + 6 = 19", "7 - 6 = 1"], "العائلة هي 6 + 7 = 13 و 7 + 6 = 13 و 13 - 6 = 7 و 13 - 7 = 6."),
        it("You know 8 + 8 = 16. Use it to find 8 + 9.", "17 (one more than 16)", "تعرف أن 8 + 8 = 16. استعمل ذلك لإيجاد 8 + 9.", "17 (أكبر بواحد من 16)"),
        mc("Which is bigger, 9 + 4 or 7 + 5?", ["7 + 5", "They are equal", "9 + 4"], 2, "9 + 4 = 13 and 7 + 5 = 12, and 13 is more than 12.", "أيهما أكبر: 9 + 4 أم 7 + 5؟", ["7 + 5", "متساويان", "9 + 4"], "9 + 4 = 13 و 7 + 5 = 12، و 13 أكبر من 12.")
      ]
    },
    {
      area: "geo",
      standards: ["1.G.A.1", "1.G.A.2", "1.G.A.3", "1.MD.A.1", "1.MD.A.2", "1.MD.B.3"],
      example: ex("A round flatbread is cut into 4 equal pieces. What is each piece called? How many pieces make the whole bread?", ["Four equal pieces means each piece is one of four equal shares.", "Each piece is called a quarter.", "All 4 quarters together make the whole bread."], "Each piece is a quarter; 4 quarters make the whole", "قُسِّم رغيف دائري إلى 4 قطع متساوية. ماذا نسمّي كل قطعة؟ وكم قطعة تكوّن الرغيف كاملًا؟", ["أربع قطع متساوية تعني أن كل قطعة هي واحدة من أربع حصص متساوية.", "نسمّي كل قطعة ربعًا.", "الأرباع الأربعة معًا تكوّن الرغيف كاملًا."], "كل قطعة ربع؛ و 4 أرباع تكوّن الرغيف كاملًا"),
      items: [
        mc("How many sides does a triangle have?", ["2", "3", "4"], 1, "A triangle has 3 sides.", "كم ضلعًا للمثلث؟", ["2", "3", "4"], "للمثلث 3 أضلاع."),
        it("How many corners does a square have?", "4", "كم زاوية (ركنًا) للمربع؟", "4"),
        it("Maha holds an AED 1 coin. It is flat and round. What shape is it?", "A circle", "تمسك مها عملة الدرهم الواحد. إنها مسطحة ومستديرة. ما شكلها؟", "دائرة"),
        mc("A door has 4 sides: two long sides and two short sides. What shape is it?", ["A square", "A triangle", "A rectangle"], 2, "Two long sides and two short sides make a rectangle. (A square has 4 equal sides.)", "للباب 4 أضلاع: ضلعان طويلان وضلعان قصيران. ما شكله؟", ["مربع", "مثلث", "مستطيل"], "ضلعان طويلان وضلعان قصيران يكوّنان مستطيلًا. (أضلاع المربع الأربعة متساوية.)"),
        it("Maha puts two square tiles side by side so they touch. What bigger shape can she make?", "A rectangle", "وضعت مها بلاطتين مربعتين جنبًا إلى جنب بحيث تتلامسان. ما الشكل الأكبر الذي تصنعه؟", "مستطيل"),
        it("Noura cuts a sandwich into 2 equal pieces. What is each piece called?", "A half", "قطعت نورة شطيرة إلى قطعتين متساويتين. ماذا نسمّي كل قطعة؟", "نصف"),
        mc("A pizza is cut into 4 equal slices. What is each slice called?", ["A quarter", "A half", "The whole"], 0, "4 equal slices are quarters (also called fourths).", "قُسِّمت بيتزا إلى 4 شرائح متساوية. ماذا نسمّي كل شريحة؟", ["ربع", "نصف", "الكل"], "الشرائح الأربع المتساوية أرباع."),
        it("Salem's pencil is 9 cubes long. Maryam's pencil is 6 cubes long. Which pencil is longer, and by how many cubes?", "Salem's pencil, by 3 cubes (9 - 6 = 3)", "قلم سالم طوله 9 مكعبات. قلم مريم طوله 6 مكعبات. أي القلمين أطول، وبكم مكعبًا؟", "قلم سالم، بـ 3 مكعبات (9 - 6 = 3)"),
        mc("A ribbon is 5 paper clips long. A string is 8 paper clips long. Which one is shorter?", ["The string", "The ribbon", "They are the same length"], 1, "5 is less than 8, so the ribbon is shorter.", "شريط طوله 5 مشابك ورق، وخيط طوله 8 مشابك ورق. أيهما أقصر؟", ["الخيط", "الشريط", "لهما الطول نفسه"], "5 أقل من 8، لذلك الشريط أقصر."),
        it("On a clock the short hand points to 3 and the long hand points to 12. What time is it?", "3 o'clock", "على الساعة العقرب القصير يشير إلى 3 والعقرب الطويل يشير إلى 12. كم الساعة؟", "الساعة 3 تمامًا"),
        mc("On a clock the short hand is between 4 and 5 and the long hand points to 6. What time is it?", ["4:06", "6:04", "4:30"], 2, "The long hand on 6 means half past, so it is half past 4 (4:30).", "على الساعة العقرب القصير بين 4 و 5 والعقرب الطويل يشير إلى 6. كم الساعة؟", ["4:06", "6:04", "4:30"], "العقرب الطويل عند 6 يعني والنصف، إذن الساعة الرابعة والنصف (4:30)."),
        it("Is a half of a bread bigger than a quarter of the same bread? Say why.", "Yes. A half is 2 quarters, so it is bigger.", "هل نصف الرغيف أكبر من ربع الرغيف نفسه؟ قل لماذا.", "نعم. النصف يساوي ربعين، لذلك هو أكبر.")
      ]
    },
    {
      area: "dat",
      standards: ["1.MD.C.4"],
      example: ex("Noura counted the fruit in a bowl: 4 apples, 6 oranges and 3 bananas. How many more oranges than apples are there?", ["Oranges: 6. Apples: 4.", "Take away: 6 - 4 = 2."], "2 more oranges", "عدّت نورة الفاكهة في وعاء: 4 تفاحات و 6 برتقالات و 3 موزات. كم برتقالة زيادة عن التفاح؟", ["البرتقال: 6. التفاح: 4.", "نطرح: 6 - 4 = 2."], "برتقالتان زيادة"),
      items: [
        it("Children chose a favourite fruit: apples 5, bananas 3, oranges 4. How many children chose in all?", "12 (5 + 3 + 4)", "اختار الأطفال فاكهتهم المفضلة: تفاح 5، موز 3، برتقال 4. كم طفلًا اختار في المجموع؟", "12 (5 + 3 + 4)"),
        mc("In the same count, which fruit did the most children choose?", ["Bananas", "Apples", "Oranges"], 1, "Apples have the biggest number, 5.", "في العدّ نفسه، أي فاكهة اختارها أكثر الأطفال؟", ["الموز", "التفاح", "البرتقال"], "التفاح له أكبر عدد، وهو 5."),
        it("Which fruit did the fewest children choose?", "Bananas (3)", "أي فاكهة اختارها أقل عدد من الأطفال؟", "الموز (3)"),
        mc("How many more children chose apples than bananas?", ["2", "3", "8"], 0, "5 - 3 = 2. (3 is the number for bananas and 8 is 5 + 3.)", "بكم زاد عدد الأطفال الذين اختاروا التفاح على الذين اختاروا الموز؟", ["2", "3", "8"], "5 - 3 = 2. (3 هو عدد الموز و 8 هو 5 + 3.)"),
        it("How many fewer children chose bananas than oranges?", "1 (4 - 3 = 1)", "بكم يقلّ عدد الأطفال الذين اختاروا الموز عن الذين اختاروا البرتقال؟", "1 (4 - 3 = 1)"),
        it("How many children chose oranges or bananas?", "7 (4 + 3)", "كم طفلًا اختار البرتقال أو الموز؟", "7 (4 + 3)"),
        it("Hind counted shapes in a picture: 4 circles, 7 squares, 3 triangles. How many squares are there?", "7", "عدّت هند أشكالًا في صورة: 4 دوائر و 7 مربعات و 3 مثلثات. كم مربعًا هناك؟", "7"),
        it("How many shapes are there in all?", "14 (4 + 7 + 3)", "كم شكلًا هناك في المجموع؟", "14 (4 + 7 + 3)"),
        mc("How many more squares than triangles are there?", ["10", "3", "4"], 2, "7 - 3 = 4. (10 is 7 + 3.)", "كم مربعًا زيادة عن المثلثات؟", ["10", "3", "4"], "7 - 3 = 4. (10 هو 7 + 3.)"),
        mc("Which two kinds of shape together make exactly 10?", ["Squares and triangles", "Circles and squares", "Circles and triangles"], 0, "7 + 3 = 10. (Circles and squares make 11; circles and triangles make 7.)", "أي نوعين من الأشكال معًا يكوّنان 10 بالضبط؟", ["المربعات والمثلثات", "الدوائر والمربعات", "الدوائر والمثلثات"], "7 + 3 = 10. (الدوائر والمربعات تكوّنان 11؛ والدوائر والمثلثات تكوّنان 7.)")
      ]
    },
    {
      area: "num",
      standards: ["1.NBT.A.1", "1.NBT.B.2", "1.NBT.B.3", "1.NBT.C.4", "1.NBT.C.5", "1.NBT.C.6"],
      example: ex("How many tens and how many ones are in the number 36?", ["The first digit, 3, is the tens: 3 tens is 30.", "The second digit, 6, is the ones: 6 ones.", "30 + 6 = 36."], "3 tens and 6 ones", "كم عشرة وكم واحدًا في العدد 36؟", ["الرقم الأول 3 هو العشرات: 3 عشرات تساوي 30.", "الرقم الثاني 6 هو الآحاد: 6 آحاد.", "30 + 6 = 36."], "3 عشرات و 6 آحاد"),
      items: [
        it("Count on: 118, 119, __. What number comes next?", "120", "عُدّ: 118، 119، __. ما العدد التالي؟", "120"),
        mc("How many tens and ones are in 52?", ["2 tens and 5 ones", "5 tens and 2 ones", "52 tens"], 1, "The 5 is the tens and the 2 is the ones.", "كم عشرة وكم واحدًا في العدد 52؟", ["عشرتان و 5 آحاد", "5 عشرات وواحدان", "52 عشرة"], "الرقم 5 هو العشرات والرقم 2 هو الآحاد."),
        it("What number is 6 tens and 3 ones?", "63", "ما العدد الذي يتكوّن من 6 عشرات و 3 آحاد؟", "63"),
        it("Which number is bigger, 48 or 84? Say it with the words bigger or smaller.", "84 is bigger; 48 is smaller than 84.", "أي العددين أكبر: 48 أم 84؟ استعمل كلمة أكبر أو أصغر.", "84 أكبر؛ و 48 أصغر من 84."),
        it("Omar says 29 is bigger than 31 because 9 is bigger than 1. Is he right? Explain with tens.", "No. 31 is bigger: it has 3 tens, and 29 has only 2 tens.", "يقول عمر إن 29 أكبر من 31 لأن 9 أكبر من 1. هل هو على صواب؟ وضّح باستعمال العشرات.", "لا. 31 أكبر: فيه 3 عشرات، أما 29 ففيه عشرتان فقط."),
        mc("What is 10 more than 34?", ["24", "35", "44"], 2, "Add 1 ten: 3 tens becomes 4 tens, so 44.", "ما العدد الذي هو أكبر بـ 10 من 34؟", ["24", "35", "44"], "نضيف عشرة: 3 عشرات تصبح 4 عشرات، إذن 44."),
        it("Layla has 58 stickers and gives 10 of them to her cousin. How many stickers does she have left?", "48 (10 less than 58)", "مع ليلى 58 ملصقة، أعطت 10 منها لابنة عمّها. كم ملصقة بقيت معها؟", "48 (أصغر بـ 10 من 58)"),
        mc("Add: 43 + 5", ["48", "93", "47"], 0, "3 ones + 5 ones = 8 ones, so 48. (93 adds 5 to the tens by mistake.)", "اجمع: 43 + 5", ["48", "93", "47"], "3 آحاد + 5 آحاد = 8 آحاد، إذن 48. (93 خطأ لأن 5 أُضيفت إلى العشرات.)"),
        it("Salem has AED 35. His grandmother gives him AED 20 more. How many dirhams does he have now?", "55 (3 tens + 2 tens = 5 tens, and 5 ones stay the same)", "مع سالم 35 درهمًا. أعطته جدّته 20 درهمًا أخرى. كم درهمًا معه الآن؟", "55 (3 عشرات + عشرتان = 5 عشرات، وتبقى 5 آحاد)"),
        mc("Khalid has AED 70 and spends AED 30. How many dirhams does he have left?", ["4", "40", "100"], 1, "7 tens - 3 tens = 4 tens, which is 40. (100 adds instead of taking away.)", "مع خالد 70 درهمًا، أنفق منها 30 درهمًا. كم درهمًا بقي معه؟", ["4", "40", "100"], "7 عشرات - 3 عشرات = 4 عشرات، أي 40. (100 جمع بدل الطرح.)"),
        it("Maryam has four AED 10 notes. How many dirhams is that?", "40 (10, 20, 30, 40)", "مع مريم أربع أوراق نقدية من فئة 10 دراهم. كم درهمًا معها؟", "40 (10، 20، 30، 40)")
      ]
    }
  ]
};
