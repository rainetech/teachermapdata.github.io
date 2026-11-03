// Mathematics practice booklet, Grade 2 expectations. One file a booklet:
//   subject, grade, framework   what it is written to (CCSS Mathematics, Grade 2)
//   sections[]                  one for each goal area of the subject, in the order printed
//     area      the goal-area code (family/core.js AREAS)
//     standards the standards the section practises, short codes (2.OA.B.2 is CCSS.MATH.CONTENT.2.OA.B.2)
//     example   one worked example { en: { question, steps, answer }, ar: {...} }
//     items     ten to twelve questions, it(questionEn, answerEn, questionAr, answerAr)
// Original wording, UAE settings, nothing copied from CCSS text or NWEA items. The
// alignment is a draft for a teacher to check against the standards document.
const T = (en, ar) => ({ en, ar });
const it = (questionEn, answerEn, questionAr, answerAr) => ({ q: T(questionEn, questionAr), a: T(answerEn, answerAr) });
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });

module.exports = {
  subject: "ma",
  grade: 2,
  framework: "CCSS.MATH",
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "alg",
      standards: ["2.OA.A.1", "2.OA.B.2", "2.OA.C.3", "2.OA.C.4"],
      example: ex("Maryam has 27 stickers. Her cousin gives her 15 more. How many stickers does she have now?", ["Add the tens first: 27 + 10 = 37.", "Then add the ones: 37 + 5 = 42."], "42 stickers", "مع مريم 27 ملصقة. أعطتها ابنة عمها 15 ملصقة أخرى. كم ملصقة معها الآن؟", ["نضيف العشرات أولًا: 27 + 10 = 37.", "ثم نضيف الآحاد: 37 + 5 = 42."], "42 ملصقة"),
      items: [
        it("Add: 8 + 7", "15", "اجمع: 8 + 7", "15"),
        it("Subtract: 14 - 6", "8", "اطرح: 14 - 6", "8"),
        it("Find the missing number: 9 + __ = 17", "8", "أوجد العدد الناقص: 9 + __ = 17", "8"),
        it("Salem has 56 dates. He eats 23 of them. How many dates are left?", "33 (56 - 23 = 33)", "مع سالم 56 تمرة. أكل منها 23 تمرة. كم تمرة بقيت؟", "33 (56 - 23 = 33)"),
        it("Is 13 odd or even? How can you tell?", "Odd. When you make pairs, 1 is left over.", "هل العدد 13 فردي أم زوجي؟ كيف عرفت؟", "فردي. عندما نكوّن أزواجًا يبقى 1 دون زوج."),
        it("Is 16 odd or even? Write it as a sum of two equal numbers.", "Even; 8 + 8 = 16", "هل العدد 16 فردي أم زوجي؟ اكتبه على صورة مجموع عددين متساويين.", "زوجي؛ 8 + 8 = 16"),
        it("There are 5 plates with 2 date cookies on each plate. Write an addition sentence and find the total.", "2 + 2 + 2 + 2 + 2 = 10 cookies", "هناك 5 أطباق، على كل طبق كعكتان بالتمر. اكتب جملة جمع وأوجد المجموع.", "2 + 2 + 2 + 2 + 2 = 10 كعكات"),
        it("A tray of fruit has 3 rows with 4 apples in each row. Write an addition sentence for the apples and find how many there are.", "4 + 4 + 4 = 12 apples", "في صينية فاكهة 3 صفوف، في كل صف 4 تفاحات. اكتب جملة جمع للتفاح وأوجد عدده.", "4 + 4 + 4 = 12 تفاحة"),
        it("Khalid has 28 marbles. His uncle's family gives him 15 more and then he gives 9 to his brother. How many marbles does he have now?", "34 (28 + 15 = 43, then 43 - 9 = 34)", "مع خالد 28 كرة زجاجية. أعطته عائلة عمه 15 كرة أخرى ثم أعطى أخاه 9 كرات. كم كرة معه الآن؟", "34 (28 + 15 = 43 ثم 43 - 9 = 34)"),
        it("Can 17 sweets be shared equally between 2 friends with none left over? Explain.", "No. 17 is odd, so 1 sweet is left over.", "هل يمكن توزيع 17 حلوى بالتساوي على صديقين دون أن يبقى شيء؟ وضّح.", "لا. العدد 17 فردي، لذلك تبقى حلوى واحدة."),
        it("Add: 6 + 4 + 9. Which two numbers make a ten?", "19. 6 and 4 make 10, then 10 + 9 = 19.", "اجمع: 6 + 4 + 9. أي عددين يكوّنان عشرة؟", "19. العددان 6 و 4 يكوّنان 10 ثم 10 + 9 = 19.")
      ]
    },
    {
      area: "geo",
      standards: ["2.G.A.1", "2.G.A.3", "2.MD.A.1", "2.MD.A.4", "2.MD.B.5", "2.MD.C.7", "2.MD.C.8"],
      example: ex("The short hand of a clock points just past the 3 and the long hand points to the 5. What time is it?", ["The short hand shows the hour: 3.", "The long hand on the 5 means 5 x 5 = 25 minutes."], "3:25", "يشير العقرب القصير في ساعة إلى ما بعد العدد 3 بقليل، ويشير العقرب الطويل إلى العدد 5. كم الساعة؟", ["العقرب القصير يبيّن الساعة: 3.", "العقرب الطويل عند العدد 5 يعني 5 × 5 = 25 دقيقة."], "3:25"),
      items: [
        it("How many sides does a triangle have? How many corners?", "3 sides and 3 corners", "كم ضلعًا للمثلث؟ وكم زاوية؟", "3 أضلاع و 3 زوايا"),
        it("A hexagon has 6 sides. A pentagon has 5 sides. How many sides do they have together?", "11", "للسداسي 6 أضلاع وللخماسي 5 أضلاع. كم ضلعًا لهما معًا؟", "11"),
        it("How many flat faces does a cube have?", "6", "كم وجهًا مسطحًا للمكعب؟", "6"),
        it("A rectangular sandwich is cut into 2 equal parts. What is each part called?", "A half", "قُسِّم سندويش مستطيل إلى جزأين متساويين. ماذا يُسمّى كل جزء؟", "نصف"),
        it("A square pizza is cut into 4 equal parts. What is each part called? Do 4 parts make a whole?", "A quarter (one fourth). Yes, 4 quarters make a whole.", "قُسِّمت بيتزا مربعة إلى 4 أجزاء متساوية. ماذا يُسمّى كل جزء؟ وهل تكوّن الأجزاء الأربعة الكل؟", "ربع. نعم، 4 أرباع تكوّن الكل."),
        it("A ribbon is 15 cm long. Another ribbon is 9 cm long. How much longer is the first ribbon?", "6 cm", "شريط طوله 15 سم وشريط آخر طوله 9 سم. بكم سنتمترًا الشريط الأول أطول؟", "6 سم"),
        it("Which unit is better for measuring the length of your classroom: centimetres or metres?", "Metres", "أي وحدة أنسب لقياس طول صفك: السنتيمتر أم المتر؟", "المتر"),
        it("The long hand points to the 9 and the short hand is just before the 8. What time is it?", "7:45", "يشير العقرب الطويل إلى العدد 9 والعقرب القصير قبل العدد 8 بقليل. كم الساعة؟", "7:45"),
        it("Breakfast is at 7:00 in the morning. Is that a.m. or p.m.? What time is it 5 minutes after 8:55?", "a.m.; 9:00", "الفطور عند الساعة 7:00 في الصباح. هل نكتبها 7:00 a.m. أم 7:00 p.m.؟ وكم الوقت بعد 5 دقائق من الساعة 8:55؟", "a.m. (صباحًا)؛ 9:00"),
        it("Layla buys a notebook for 6 AED and a pencil for 3 AED. She pays with a 10 AED note. How much change does she get?", "1 AED (6 + 3 = 9, then 10 - 9 = 1)", "اشترت ليلى دفترًا بـ 6 دراهم وقلمًا بـ 3 دراهم ودفعت ورقة من فئة 10 دراهم. كم يبلغ الباقي الذي تستلمه؟", "درهم واحد (6 + 3 = 9 ثم 10 - 9 = 1)"),
        it("Omar has one 10 AED note, one 5 AED note and three 1 AED coins. How much money does he have?", "18 AED (10 + 5 + 3)", "مع عمر ورقة من فئة 10 دراهم وورقة من فئة 5 دراهم وثلاث قطع من فئة درهم. كم درهمًا معه؟", "18 درهمًا (10 + 5 + 3)")
      ]
    },
    {
      area: "dat",
      standards: ["2.MD.D.9", "2.MD.D.10"],
      example: ex("A line plot shows the lengths of leaves in cm. There are 2 dots above 3, 3 dots above 4 and 1 dot above 5. How many leaves were measured?", ["Each dot is one leaf.", "Count the dots: 2 + 3 + 1 = 6."], "6 leaves", "يبيّن مخطط نقطي أطوال أوراق شجر بالسنتيمتر. هناك نقطتان فوق 3 و 3 نقاط فوق 4 ونقطة واحدة فوق 5. كم ورقة قيست؟", ["كل نقطة تمثّل ورقة واحدة.", "نعدّ النقاط: 2 + 3 + 1 = 6."], "6 أوراق"),
      items: [
        it("Children chose their favourite fruit: dates 7, mangoes 5, bananas 4, apples 6. How many children chose dates?", "7", "اختار الأطفال فاكهتهم المفضلة: تمر 7، مانجو 5، موز 4، تفاح 6. كم طفلًا اختار التمر؟", "7"),
        it("In the same table, which fruit is the most popular and which is the least popular?", "Most popular: dates. Least popular: bananas.", "في الجدول نفسه، أي فاكهة هي الأكثر اختيارًا وأيها الأقل اختيارًا؟", "الأكثر: التمر. الأقل: الموز."),
        it("How many more children chose dates than bananas?", "3 (7 - 4 = 3)", "بكم زاد عدد الأطفال الذين اختاروا التمر على الذين اختاروا الموز؟", "3 (7 - 4 = 3)"),
        it("How many children chose a fruit in all?", "22 (7 + 5 + 4 + 6)", "كم طفلًا اختار فاكهة في المجموع؟", "22 (7 + 5 + 4 + 6)"),
        it("How many children chose mangoes or apples?", "11 (5 + 6)", "كم طفلًا اختار المانجو أو التفاح؟", "11 (5 + 6)"),
        it("In a picture graph of favourite drinks, each smiley stands for 1 child. Karak has 9 smileys. How many children chose karak?", "9", "في رسم بياني بالصور للمشروبات المفضلة، كل وجه مبتسم يمثّل طفلًا واحدًا. للكرك 9 وجوه مبتسمة. كم طفلًا اختار الكرك؟", "9"),
        it("In a bar graph, Salem's bar goes up to 8 books and Hind's bar goes up to 5 books. How many more books did Salem read?", "3", "في مخطط أعمدة، يصل عمود سالم إلى 8 كتب ويصل عمود هند إلى 5 كتب. كم كتابًا زيادة قرأ سالم؟", "3"),
        it("Use the leaf line plot from the example (2 dots above 3, 3 dots above 4, 1 dot above 5). How many leaves are 4 cm long?", "3", "استعمل المخطط النقطي للأوراق في المثال (نقطتان فوق 3، و 3 نقاط فوق 4، ونقطة فوق 5). كم ورقة طولها 4 سم؟", "3"),
        it("In the same line plot, what is the longest leaf and what is the shortest leaf?", "Longest 5 cm, shortest 3 cm", "في المخطط النقطي نفسه، ما أطول ورقة وما أقصرها؟", "الأطول 5 سم والأقصر 3 سم"),
        it("Noura counts tally marks: 2 groups of five and 3 more lines. How many is that?", "13 (5 + 5 + 3)", "تعدّ نورة علامات عدّ: مجموعتان من خمس علامات و 3 خطوط أخرى. كم العدد؟", "13 (5 + 5 + 3)"),
        it("In the fruit table, 4 more children choose bananas. Which fruit is now the most popular?", "Bananas, because bananas would have 8, which is more than dates (7).", "في جدول الفاكهة نفسه، اختار الموز 4 أطفال آخرون. أي فاكهة تصبح الآن الأكثر اختيارًا؟", "الموز، لأن عدده يصبح 8 وهذا أكثر من التمر (7)."),
      ]
    },
    {
      area: "num",
      standards: ["2.NBT.A.1", "2.NBT.A.2", "2.NBT.A.3", "2.NBT.A.4", "2.NBT.B.5", "2.NBT.B.6", "2.NBT.B.7", "2.NBT.B.8", "2.NBT.B.9"],
      example: ex("What is the value of each digit in 374? Write it in expanded form.", ["The 3 is in the hundreds place: 300.", "The 7 is in the tens place: 70. The 4 is in the ones place: 4."], "374 = 300 + 70 + 4", "ما قيمة كل رقم في العدد 374؟ اكتبه بالصيغة الموسّعة.", ["الرقم 3 في خانة المئات: 300.", "الرقم 7 في خانة العشرات: 70. والرقم 4 في خانة الآحاد: 4."], "374 = 300 + 70 + 4"),
      items: [
        it("Write the number: 5 hundreds, 3 tens and 7 ones.", "537", "اكتب العدد: 5 مئات و 3 عشرات و 7 آحاد.", "537"),
        it("Write 482 in expanded form.", "400 + 80 + 2", "اكتب 482 بالصيغة الموسّعة.", "400 + 80 + 2"),
        it("What is the value of the digit 6 in 361?", "60", "ما قيمة الرقم 6 في العدد 361؟", "60"),
        it("Compare 408 and 480 with <, > or =.", "408 < 480 (the tens: 0 is less than 8)", "قارن بين 408 و 480 باستعمال < أو > أو =.", "408 < 480 (العشرات: 0 أقل من 8)"),
        it("Put in order from least to greatest: 325, 235, 253", "235, 253, 325", "رتّب من الأصغر إلى الأكبر: 325، 235، 253", "235، 253، 325"),
        it("Skip count by 5s: 35, 40, 45, __, __", "50, 55", "عُدّ بالقفز بمقدار 5: 35، 40، 45، __، __", "50، 55"),
        it("Skip count by 10s: 120, 130, 140, __, __", "150, 160", "عُدّ بالقفز بمقدار 10: 120، 130، 140، __، __", "150، 160"),
        it("Skip count by 100s: 300, 400, __, 600", "500", "عُدّ بالقفز بمقدار 100: 300، 400، __، 600", "500"),
        it("Add: 45 + 38", "83", "اجمع: 45 + 38", "83"),
        it("Subtract: 74 - 29", "45", "اطرح: 74 - 29", "45"),
        it("A shop has 357 dates in one box and 128 in another box. How many dates are there in all?", "485 (357 + 128)", "في متجر 357 تمرة في صندوق و 128 في صندوق آخر. كم تمرة في المجموع؟", "485 (357 + 128)"),
        it("What is 10 more than 395? What is 100 less than 250? Hamdan says 1 hundred is the same as 10 tens. Is he right?", "405; 150; yes, 10 tens make 1 hundred (so 300 is 30 tens).", "ما العدد الذي يزيد 10 على 395؟ وما العدد الذي ينقص 100 عن 250؟ يقول حمدان إن المئة تساوي 10 عشرات. هل هو محق؟", "405؛ 150؛ نعم، 10 عشرات تساوي مئة (فالعدد 300 يساوي 30 عشرة).")
      ]
    }
  ]
};
