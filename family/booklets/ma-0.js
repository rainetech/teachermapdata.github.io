// Mathematics practice booklet, KG2 (Kindergarten) expectations. One file a booklet:
//   subject, grade, framework   what it is written to (CCSS Mathematics, Kindergarten)
//   sections[]                  one for each goal area of the subject, in the order printed
//     area      the goal-area code (family/core.js AREAS)
//     standards the standards the section practises, short codes (K.CC.A.1 is CCSS.MATH.CONTENT.K.CC.A.1)
//     example   one worked example { en: { question, steps, answer }, ar: {...} }
//     items     questions a parent reads aloud, it(questionEn, answerEn, questionAr, answerAr)
// Original wording, UAE settings, nothing copied from CCSS text or NWEA items. The
// alignment is a draft for a teacher to check against the standards document.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });

module.exports = {
  subject: "ma",
  grade: 0,
  framework: "CCSS.MATH",
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "alg",
      standards: ["K.OA.A.1", "K.OA.A.2", "K.OA.A.3", "K.OA.A.4", "K.OA.A.5"],
      example: ex("Put 3 dates on a plate. Then put 2 more dates on the plate. How many dates are on the plate now?", ["Count the first dates: 1, 2, 3.", "Add the 2 new dates and keep counting: 4, 5.", "Putting 3 and 2 together makes 5."], "5 dates", "ضع 3 تمرات في صحن. ثم ضع تمرتين أخريين في الصحن. كم تمرة في الصحن الآن؟", ["عدّ التمرات الأولى: 1، 2، 3.", "أضف التمرتين الجديدتين وأكمل العدّ: 4، 5.", "عندما نضم 3 مع 2 يصبح المجموع 5."], "5 تمرات"),
      items: [
        it("Maryam has 3 buttons. Her friend gives her 2 more buttons. How many buttons does Maryam have now?", "5 (3 and 2 put together)", "مع مريم 3 أزرار. أعطتها صديقتها زرّين آخرين. كم زرًا مع مريم الآن؟", "5 (نضم 3 مع 2)"),
        it("There are 4 cups on the table. Salem puts 1 more cup on the table. How many cups are there?", "5", "هناك 4 أكواب على الطاولة. وضع سالم كوبًا واحدًا آخر على الطاولة. كم كوبًا هناك؟", "5"),
        it("Hamdan has 5 stones. He gives 2 stones to his brother. How many stones does Hamdan have left?", "3 (5 take away 2)", "مع حمدان 5 حصوات. أعطى أخاه حصاتين. كم حصاة بقيت مع حمدان؟", "3 (5 نأخذ منها 2)"),
        it("Noura has 2 red cups and 4 blue cups. How many cups does she have in all?", "6", "عند نورة كوبان أحمران و 4 أكواب زرقاء. كم كوبًا عندها في المجموع؟", "6"),
        it("There are 7 dates in a bowl. Layla eats 3 of them. How many dates are left in the bowl?", "4", "في الوعاء 7 تمرات. أكلت ليلى 3 منها. كم تمرة بقيت في الوعاء؟", "4"),
        it("Take 5 buttons. Show 2 ways to split them into two small groups. What are the groups?", "For example 1 and 4, or 2 and 3 (also 0 and 5).", "خذ 5 أزرار. أظهر طريقتين لتقسيمها إلى مجموعتين صغيرتين. ما المجموعتان؟", "مثلًا 1 و 4، أو 2 و 3 (وكذلك 0 و 5)."),
        it("You have 3 fingers up. How many more fingers make 5?", "2", "رفعت 3 أصابع. كم إصبعًا آخر نحتاج لنصل إلى 5؟", "2"),
        it("Omar has 6 stones. How many more stones does he need to make 10?", "4 (6 and 4 make 10)", "مع عمر 6 حصوات. كم حصاة أخرى يحتاج ليصبح العدد 10؟", "4 (6 و 4 يصنعان 10)"),
        it("There are 10 cookies on a tray. Hind takes 4 cookies. How many cookies are left on the tray?", "6", "على الصينية 10 كعكات. أخذت هند 4 كعكات. كم كعكة بقيت على الصينية؟", "6"),
        it("Look at the pattern: red button, blue button, red button, blue button, red button. Which button comes next?", "A blue button", "انظر إلى النمط: زر أحمر، زر أزرق، زر أحمر، زر أزرق، زر أحمر. أي زر يأتي بعد ذلك؟", "زر أزرق"),
        it("Look at the pattern: date, date, stone, date, date, stone, date, date. What comes next? How do you know?", "A stone (the pattern is date, date, stone, and it repeats).", "انظر إلى النمط: تمرة، تمرة، حصاة، تمرة، تمرة، حصاة، تمرة، تمرة. ماذا يأتي بعد ذلك؟ كيف عرفت؟", "حصاة (النمط تمرة، تمرة، حصاة، ثم يتكرر).")
      ]
    },
    {
      area: "geo",
      standards: ["K.G.A.1", "K.G.A.2", "K.G.A.3", "K.G.B.4", "K.MD.A.1", "K.MD.A.2"],
      example: ex("Which is longer: a new pencil or a small eraser? Put them side by side with the ends lined up at one end.", ["Line up the left ends of both things.", "Look at the other ends. The one that sticks out more is longer.", "Say the answer: the pencil reaches further, so it is longer."], "The pencil is longer, because it reaches further", "أيهما أطول: قلم رصاص جديد أم ممحاة صغيرة؟ ضعهما جنبًا إلى جنب وحاذِ طرفيهما من جهة واحدة.", ["حاذِ الطرف الأيسر للشيئين.", "انظر إلى الطرفين الآخرين. الذي يبرز أكثر هو الأطول.", "قل الإجابة: القلم يمتد أبعد، لذلك هو الأطول."], "القلم أطول لأنه يمتد أبعد"),
      items: [
        it("What shape is a round plate?", "A circle", "ما شكل الصحن المستدير؟", "دائرة"),
        it("A cracker has 4 sides that are all the same length. What shape is it?", "A square", "قطعة بسكويت لها 4 أضلاع متساوية في الطول. ما شكلها؟", "مربع"),
        it("How many sides does a triangle have?", "3", "كم ضلعًا للمثلث؟", "3"),
        it("How many corners does a rectangle have?", "4", "كم زاوية للمستطيل؟", "4"),
        it("Is a ball a flat shape or a solid shape? What is its name?", "A solid shape, a sphere", "هل الكرة شكل مسطح أم مجسم؟ وما اسمها؟", "مجسم، وهو كرة (مجسم كروي)"),
        it("A tin of chickpeas is a solid shape. Is it a cube, a cylinder or a sphere?", "A cylinder", "علبة الحمص شكل مجسم. هل هي مكعب أم أسطوانة أم كرة؟", "أسطوانة"),
        it("A ball is under the chair. Is the ball above the seat or below the seat?", "Below the seat", "كرة تحت الكرسي. هل الكرة فوق المقعد أم تحت المقعد؟", "تحت المقعد"),
        it("Maryam stands between Salem and Noura. Who is in the middle?", "Maryam", "تقف مريم بين سالم ونورة. من في الوسط؟", "مريم"),
        it("Which is longer: a pencil or a date palm tree?", "The date palm tree", "أيهما أطول: قلم رصاص أم نخلة؟", "النخلة"),
        it("Which is heavier: a watermelon or a date?", "The watermelon", "أيهما أثقل: بطيخة أم تمرة؟", "البطيخة"),
        it("Omar's rope is longer than Layla's rope. Which rope is shorter?", "Layla's rope", "حبل عمر أطول من حبل ليلى. أي الحبلين أقصر؟", "حبل ليلى")
      ]
    },
    {
      area: "dat",
      standards: ["K.MD.B.3", "K.CC.C.6", "K.CC.C.7", "K.CC.B.5"],
      example: ex("On a tray there are 3 dates and 2 stones. Sort them into two groups. Which group has more?", ["Make one group of dates and one group of stones.", "Count each group: dates 1, 2, 3 and stones 1, 2.", "3 is more than 2, so the dates are more."], "The dates have more", "على صينية 3 تمرات وحصاتان. صنّفها في مجموعتين. أي مجموعة فيها أكثر؟", ["اصنع مجموعة من التمرات ومجموعة من الحصوات.", "عدّ كل مجموعة: التمرات 1، 2، 3 والحصوات 1، 2.", "3 أكثر من 2، إذن التمرات أكثر."], "التمرات أكثر"),
      items: [
        it("Sort these into groups: 3 dates, 2 stones and 1 button. How many dates are there?", "3", "صنّف هذه الأشياء في مجموعات: 3 تمرات وحصاتان وزر واحد. كم تمرة هناك؟", "3"),
        it("There are 4 red cups and 3 blue cups. How many cups are there in all?", "7", "هناك 4 أكواب حمراء و 3 أكواب زرقاء. كم كوبًا هناك في المجموع؟", "7"),
        it("Which group has more: 5 stones or 3 stones?", "5 stones", "أي مجموعة فيها أكثر: 5 حصوات أم 3 حصوات؟", "5 حصوات"),
        it("Which group has fewer: 4 buttons or 6 buttons?", "4 buttons", "أي مجموعة فيها أقل: 4 أزرار أم 6 أزرار؟", "4 أزرار"),
        it("There are 4 dates and 4 cookies. Is there the same number of each, or does one group have more?", "The same number (4 and 4)", "هناك 4 تمرات و 4 كعكات. هل عدد كل منهما متساوٍ أم أن إحدى المجموعتين أكثر؟", "العدد متساوٍ (4 و 4)"),
        it("Sort the spoons and forks. There are 3 spoons and 4 forks. How many are there in all?", "7", "صنّف الملاعق والشوكات. هناك 3 ملاعق و 4 شوكات. كم قطعة هناك في المجموع؟", "7"),
        it("There are 5 cups and 3 plates. How many more cups than plates?", "2 more cups", "هناك 5 أكواب و 3 صحون. كم كوبًا زيادة عن الصحون؟", "كوبان زيادة"),
        it("There are 2 big stones and 5 small stones. Which group has fewer?", "The big stones", "هناك حصاتان كبيرتان و 5 حصوات صغيرة. أي مجموعة فيها أقل؟", "الحصوات الكبيرة"),
        it("There are 8 toys. 5 are cars and the rest are balls. How many balls are there?", "3", "هناك 8 ألعاب. 5 منها سيارات والباقي كرات. كم كرة هناك؟", "3"),
        it("5 children want to sit down and there are 4 chairs. Is there a chair for every child? How many more chairs are needed?", "No, 1 more chair is needed.", "5 أطفال يريدون الجلوس وهناك 4 كراسي. هل هناك كرسي لكل طفل؟ وكم كرسيًا آخر نحتاج؟", "لا، نحتاج كرسيًا واحدًا آخر."),
        it("Sort 10 stones: 6 are smooth and 4 are rough. Which group has more, and how many more?", "The smooth stones, 2 more (6 is 2 more than 4).", "صنّف 10 حصوات: 6 منها ناعمة و 4 خشنة. أي مجموعة فيها أكثر، وبكم؟", "الحصوات الناعمة، وبزيادة حصاتين (6 أكثر من 4 بحصاتين).")
      ]
    },
    {
      area: "num",
      standards: ["K.CC.A.1", "K.CC.A.2", "K.CC.A.3", "K.CC.B.4", "K.CC.B.5", "K.CC.C.6", "K.CC.C.7", "K.NBT.A.1"],
      example: ex("Count the dates in the bowl: there are 13. Show 13 as ten and some ones.", ["Make a group of 10 dates.", "Count the dates left over: 1, 2, 3.", "13 is 10 and 3 ones."], "13 is ten and 3 ones", "عدّ التمرات في الوعاء: هناك 13. اعرض العدد 13 على أنه عشرة وآحاد.", ["كوّن مجموعة من 10 تمرات.", "عدّ التمرات المتبقية: 1، 2، 3.", "13 تساوي عشرة و 3 آحاد."], "13 هو عشرة و 3 آحاد"),
      items: [
        it("Count out loud from 1 to 10. What number comes after 7?", "8", "عدّ بصوت عالٍ من 1 إلى 10. ما العدد الذي يأتي بعد 7؟", "8"),
        it("Count 12 dates one by one. When you say the last number, how many dates are there?", "12", "عدّ 12 تمرة واحدة واحدة. عندما تقول آخر عدد، كم تمرة هناك؟", "12"),
        it("What is one more than 9?", "10", "ما العدد الذي هو أكبر من 9 بواحد؟", "10"),
        it("What is one less than 6?", "5", "ما العدد الذي هو أصغر من 6 بواحد؟", "5"),
        it("Start at 8 and count on. Say the next three numbers.", "9, 10, 11", "ابدأ من 8 وأكمل العدّ. قل الأعداد الثلاثة التالية.", "9، 10، 11"),
        it("Count by tens: 10, 20, 30. What number comes next?", "40", "عدّ بالعشرات: 10، 20، 30. ما العدد التالي؟", "40"),
        it("Write the number fifteen with digits.", "15", "اكتب العدد خمسة عشر بالأرقام.", "15"),
        it("Which number is greater: 8 or 6?", "8", "أي العددين أكبر: 8 أم 6؟", "8"),
        it("Which number is smaller: 17 or 15?", "15", "أي العددين أصغر: 17 أم 15؟", "15"),
        it("13 is ten and how many ones?", "3", "العدد 13 هو عشرة وكم من الآحاد؟", "3"),
        it("Ten buttons and 4 more buttons make what number? Which number comes just before 20?", "14; the number before 20 is 19.", "عشرة أزرار و 4 أزرار أخرى تصنع أي عدد؟ وما العدد الذي يأتي قبل 20 مباشرة؟", "14؛ والعدد الذي يسبق 20 هو 19.")
      ]
    }
  ]
};
