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
const mc = (qEn, optsEn, correct, whyEn, qAr, optsAr, whyAr) => ({ q: T(qEn, qAr), a: T(whyEn, whyAr), options: { en: optsEn, ar: optsAr }, correct });
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
        mc("There are 4 cups on the table. Salem puts 1 more cup on the table. How many cups are there?", ["3", "5", "6"], 1, "4 and 1 more is 5.", "هناك 4 أكواب على الطاولة. وضع سالم كوبًا واحدًا آخر على الطاولة. كم كوبًا هناك؟", ["3", "5", "6"], "4 وواحد آخر يصبح 5."),
        it("Hamdan has 5 stones. He gives 2 stones to his brother. How many stones does Hamdan have left?", "3 (5 take away 2)", "مع حمدان 5 حصوات. أعطى أخاه حصاتين. كم حصاة بقيت مع حمدان؟", "3 (5 نأخذ منها 2)"),
        mc("Noura has 2 red cups and 4 blue cups. How many cups does she have in all?", ["8", "2", "6"], 2, "2 and 4 put together make 6.", "عند نورة كوبان أحمران و 4 أكواب زرقاء. كم كوبًا عندها في المجموع؟", ["8", "2", "6"], "2 و 4 معًا يصنعان 6."),
        it("There are 7 dates in a bowl. Layla eats 3 of them. How many dates are left in the bowl?", "4", "في الوعاء 7 تمرات. أكلت ليلى 3 منها. كم تمرة بقيت في الوعاء؟", "4"),
        it("Take 5 buttons. Show 2 ways to split them into two small groups. What are the groups?", "For example 1 and 4, or 2 and 3 (also 0 and 5).", "خذ 5 أزرار. أظهر طريقتين لتقسيمها إلى مجموعتين صغيرتين. ما المجموعتان؟", "مثلًا 1 و 4، أو 2 و 3 (وكذلك 0 و 5)."),
        it("Khalid holds up 3 fingers. How many more fingers make 5?", "2", "رفع خالد 3 أصابع. كم إصبعًا آخر نحتاج لنصل إلى 5؟", "2"),
        mc("Omar has 6 stones. How many more stones does he need to make 10?", ["4", "5", "16"], 0, "6 and 4 make 10.", "مع عمر 6 حصوات. كم حصاة أخرى يحتاج ليصبح العدد 10؟", ["4", "5", "16"], "6 و 4 يصنعان 10."),
        mc("There are 10 cookies on a tray. Hind takes 4 cookies. How many cookies are left on the tray?", ["14", "5", "6"], 2, "10 take away 4 leaves 6.", "على الصينية 10 كعكات. أخذت هند 4 كعكات. كم كعكة بقيت على الصينية؟", ["14", "5", "6"], "10 نأخذ منها 4 يبقى 6."),
        it("Look at the pattern: red button, blue button, red button, blue button, red button. Which button comes next?", "A blue button", "انظر إلى النمط: زر أحمر، زر أزرق، زر أحمر، زر أزرق، زر أحمر. أي زر يأتي بعد ذلك؟", "زر أزرق"),
        it("Look at the pattern: date, date, stone, date, date, stone, date, date. What comes next? How do you know?", "A stone (the pattern is date, date, stone, and it repeats).", "انظر إلى النمط: تمرة، تمرة، حصاة، تمرة، تمرة، حصاة، تمرة، تمرة. ماذا يأتي بعد ذلك؟ كيف عرفت؟", "حصاة (النمط تمرة، تمرة، حصاة، ثم يتكرر).")
      ]
    },
    {
      area: "geo",
      standards: ["K.G.A.1", "K.G.A.2", "K.G.A.3", "K.G.B.4", "K.MD.A.1", "K.MD.A.2"],
      example: ex("Which is longer: a new pencil or a small eraser? Put them side by side with the ends lined up at one end.", ["Line up the left ends of both things.", "Look at the other ends. The one that sticks out more is longer.", "Say the answer: the pencil reaches further, so it is longer."], "The pencil is longer, because it reaches further", "أيهما أطول: قلم رصاص جديد أم ممحاة صغيرة؟ ضعهما جنبًا إلى جنب وحاذِ طرفيهما من جهة واحدة.", ["حاذِ الطرف الأيسر للشيئين.", "انظر إلى الطرفين الآخرين. الذي يبرز أكثر هو الأطول.", "قل الإجابة: القلم يمتد أبعد، لذلك هو الأطول."], "القلم أطول لأنه يمتد أبعد"),
      items: [
        mc("Maryam puts a round plate on the table. What shape is the plate?", ["Square", "Circle", "Triangle"], 1, "A round plate is a circle.", "وضعت مريم صحنًا مستديرًا على الطاولة. ما شكل الصحن؟", ["مربع", "دائرة", "مثلث"], "الصحن المستدير دائرة."),
        it("A cracker has 4 sides that are all the same length. What shape is it?", "A square", "قطعة بسكويت لها 4 أضلاع متساوية في الطول. ما شكلها؟", "مربع"),
        mc("Salem draws a triangle. How many sides does it have?", ["4", "2", "3"], 2, "A triangle has 3 sides.", "رسم سالم مثلثًا. كم ضلعًا له؟", ["4", "2", "3"], "للمثلث 3 أضلاع."),
        it("Noura has a rectangle tray. How many corners does the tray have?", "4", "مع نورة صينية على شكل مستطيل. كم زاوية للصينية؟", "4"),
        it("Hamdan kicks a ball. Is a ball a flat shape or a solid shape? What is its name?", "A solid shape, a sphere", "ركل حمدان كرة. هل الكرة شكل مسطح أم مجسم؟ وما اسمها؟", "مجسم، وهو كرة (مجسم كروي)"),
        mc("A tin of chickpeas is a solid shape. Which solid shape is it?", ["Cylinder", "Cube", "Sphere"], 0, "A tin is a cylinder.", "علبة الحمص شكل مجسم. أي مجسم هي؟", ["أسطوانة", "مكعب", "كرة"], "العلبة أسطوانة."),
        it("A ball is under the chair. Is the ball above the seat or below the seat?", "Below the seat", "كرة تحت الكرسي. هل الكرة فوق المقعد أم تحت المقعد؟", "تحت المقعد"),
        it("Maryam stands between Salem and Noura. Who is in the middle?", "Maryam", "تقف مريم بين سالم ونورة. من في الوسط؟", "مريم"),
        mc("Layla looks at a pencil and a date palm tree. Which is longer?", ["A pencil", "A date palm tree", "A date"], 1, "The date palm tree is much longer than a pencil.", "نظرت ليلى إلى قلم رصاص ونخلة. أيهما أطول؟", ["قلم رصاص", "نخلة", "تمرة"], "النخلة أطول بكثير من القلم."),
        mc("Hind lifts a watermelon and a date. Which is heavier?", ["A watermelon", "A date", "They weigh the same"], 0, "The watermelon is heavier than a date.", "رفعت هند بطيخة وتمرة. أيهما أثقل؟", ["بطيخة", "تمرة", "وزنهما متساوٍ"], "البطيخة أثقل من التمرة."),
        it("Omar's rope is longer than Layla's rope. Which rope is shorter?", "Layla's rope", "حبل عمر أطول من حبل ليلى. أي الحبلين أقصر؟", "حبل ليلى")
      ]
    },
    {
      area: "dat",
      standards: ["K.MD.B.3", "K.CC.C.6", "K.CC.C.7", "K.CC.B.5"],
      example: ex("On a tray there are 3 dates and 2 stones. Sort them into two groups. Which group has more?", ["Make one group of dates and one group of stones.", "Count each group: dates 1, 2, 3 and stones 1, 2.", "3 is more than 2, so the dates are more."], "The dates have more", "على صينية 3 تمرات وحصاتان. صنّفها في مجموعتين. أي مجموعة فيها أكثر؟", ["اصنع مجموعة من التمرات ومجموعة من الحصوات.", "عدّ كل مجموعة: التمرات 1، 2، 3 والحصوات 1، 2.", "3 أكثر من 2، إذن التمرات أكثر."], "التمرات أكثر"),
      items: [
        it("Sort these into groups: 3 dates, 2 stones and 1 button. How many dates are there?", "3", "صنّف هذه الأشياء في مجموعات: 3 تمرات وحصاتان وزر واحد. كم تمرة هناك؟", "3"),
        mc("There are 4 red cups and 3 blue cups. How many cups are there in all?", ["8", "7", "1"], 1, "4 and 3 put together make 7.", "هناك 4 أكواب حمراء و 3 أكواب زرقاء. كم كوبًا هناك في المجموع؟", ["8", "7", "1"], "4 و 3 معًا يصنعان 7."),
        it("Salem has 5 stones and Hind has 3 stones. Who has more stones?", "Salem (5 is more than 3)", "مع سالم 5 حصوات ومع هند 3 حصوات. من معه حصوات أكثر؟", "سالم (5 أكثر من 3)"),
        it("Maryam has 4 buttons and Omar has 6 buttons. Who has fewer buttons?", "Maryam (4 is fewer than 6)", "مع مريم 4 أزرار ومع عمر 6 أزرار. من معه أزرار أقل؟", "مريم (4 أقل من 6)"),
        mc("There are 4 dates and 4 cookies on a plate. Which sentence is true?", ["There are more dates", "There are more cookies", "There is the same number of each"], 2, "4 and 4 are the same.", "على الصحن 4 تمرات و 4 كعكات. أي جملة صحيحة؟", ["التمرات أكثر", "الكعكات أكثر", "العدد متساوٍ في الاثنين"], "4 و 4 متساويان."),
        it("Sort the spoons and forks. There are 3 spoons and 4 forks. How many are there in all?", "7", "صنّف الملاعق والشوكات. هناك 3 ملاعق و 4 شوكات. كم قطعة هناك في المجموع؟", "7"),
        mc("There are 5 cups and 3 plates. How many more cups than plates are there?", ["2", "3", "8"], 0, "5 is 2 more than 3.", "هناك 5 أكواب و 3 صحون. كم كوبًا زيادة عن الصحون؟", ["2", "3", "8"], "5 أكثر من 3 بـ 2."),
        it("There are 2 big stones and 5 small stones. Which group has fewer?", "The big stones", "هناك حصاتان كبيرتان و 5 حصوات صغيرة. أي مجموعة فيها أقل؟", "الحصوات الكبيرة"),
        mc("There are 8 toys. 5 are cars and the rest are balls. How many balls are there?", ["13", "3", "4"], 1, "8 take away 5 leaves 3.", "هناك 8 ألعاب. 5 منها سيارات والباقي كرات. كم كرة هناك؟", ["13", "3", "4"], "8 نأخذ منها 5 يبقى 3."),
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
        it("Maryam counts 12 dates one by one. When she says the last number, how many dates are there?", "12", "تعدّ مريم 12 تمرة واحدة واحدة. عندما تقول آخر عدد، كم تمرة هناك؟", "12"),
        mc("Salem has 9 stones and finds 1 more. What is one more than 9?", ["10", "8", "11"], 0, "One more than 9 is 10.", "مع سالم 9 حصوات ووجد حصاة أخرى. ما العدد الذي هو أكبر من 9 بواحد؟", ["10", "8", "11"], "العدد الأكبر من 9 بواحد هو 10."),
        mc("Noura has 6 cups and puts 1 away. What is one less than 6?", ["7", "4", "5"], 2, "One less than 6 is 5.", "مع نورة 6 أكواب وأبعدت كوبًا واحدًا. ما العدد الذي هو أصغر من 6 بواحد؟", ["7", "4", "5"], "العدد الأصغر من 6 بواحد هو 5."),
        it("Start at 8 and count on. Say the next three numbers.", "9, 10, 11", "ابدأ من 8 وأكمل العدّ. قل الأعداد الثلاثة التالية.", "9، 10، 11"),
        mc("Count by tens: 10, 20, 30. What number comes next?", ["31", "40", "50"], 1, "Counting by tens, 30 and ten more is 40.", "عدّ بالعشرات: 10، 20، 30. ما العدد التالي؟", ["31", "40", "50"], "بالعدّ بالعشرات، 30 وعشرة أخرى تصبح 40."),
        mc("Which one is the number fifteen written with digits?", ["50", "51", "15"], 2, "Fifteen is a 1 for the ten and a 5 for the ones: 15.", "أي عدد هو خمسة عشر مكتوبًا بالأرقام؟", ["50", "51", "15"], "خمسة عشر هو 1 للعشرة و 5 للآحاد: 15."),
        it("Salem has 8 stones and Noura has 6 stones. Which number is greater?", "8", "مع سالم 8 حصوات ومع نورة 6 حصوات. أي العددين أكبر؟", "8"),
        it("Hamdan has 17 dates and Layla has 15 dates. Which number is smaller?", "15", "مع حمدان 17 تمرة ومع ليلى 15 تمرة. أي العددين أصغر؟", "15"),
        mc("13 is ten and how many ones?", ["3", "1", "13"], 0, "13 is ten and 3 ones.", "العدد 13 هو عشرة وكم من الآحاد؟", ["3", "1", "13"], "13 هو عشرة و 3 آحاد."),
        it("Ten buttons and 4 more buttons make what number? Which number comes just before 20?", "14; the number before 20 is 19.", "عشرة أزرار و 4 أزرار أخرى تصنع أي عدد؟ وما العدد الذي يأتي قبل 20 مباشرة؟", "14؛ والعدد الذي يسبق 20 هو 19.")
      ]
    }
  ]
};
