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
const mc = (qEn, optsEn, correct, whyEn, qAr, optsAr, whyAr) => ({ q: T(qEn, qAr), a: T(whyEn, whyAr), options: { en: optsEn, ar: optsAr }, correct });
const ex = (questionEn, stepsEn, answerEn, questionAr, stepsAr, answerAr) => ({ en: { question: questionEn, steps: stepsEn, answer: answerEn }, ar: { question: questionAr, steps: stepsAr, answer: answerAr } });

module.exports = {
  subject: "ma",
  grade: 2,
  framework: "CCSS.MATH",
  reviewed: { en: false, ar: false },
  sections: [
    {
      area: "alg",
      standards: ["2.OA.A.1", "2.OA.B.2", "2.OA.C.3", "2.OA.C.4", "2.MD.B.6"],
      example: ex("Maryam has 27 stickers. Her cousin gives her 15 more. How many stickers does she have now?", ["Add the tens first: 27 + 10 = 37.", "Then add the ones: 37 + 5 = 42."], "42 stickers", "مع مريم 27 ملصقة. أعطتها ابنة عمها 15 ملصقة أخرى. كم ملصقة معها الآن؟", ["نضيف العشرات أولًا: 27 + 10 = 37.", "ثم نضيف الآحاد: 37 + 5 = 42."], "42 ملصقة"),
      items: [
        mc("Add: 8 + 7", ["14", "15", "16"], 1, "8 + 2 = 10, then 10 + 5 = 15.", "اجمع: 8 + 7", ["14", "15", "16"], "8 + 2 = 10 ثم 10 + 5 = 15."),
        it("Hamdan has 14 AED and buys a juice for 6 AED. How many dirhams are left?", "8 AED (14 - 6 = 8)", "مع حمدان 14 درهمًا فاشترى عصيرًا بـ 6 دراهم. كم درهمًا بقي معه؟", "8 دراهم (14 - 6 = 8)"),
        it("Find the missing number: 9 + __ = 17", "8", "أوجد العدد الناقص: 9 + __ = 17", "8"),
        it("Salem has 56 dates. He eats 23 of them. How many dates are left?", "33 (56 - 23 = 33)", "مع سالم 56 تمرة. أكل منها 23 تمرة. كم تمرة بقيت؟", "33 (56 - 23 = 33)"),
        mc("Which number is even?", ["19", "25", "32"], 2, "32 can be made into pairs with none left over. 19 and 25 are odd.", "أي عدد من هذه الأعداد زوجي؟", ["19", "25", "32"], "يمكن تكوين أزواج من 32 دون أن يبقى شيء. أما 19 و 25 فعددان فرديان."),
        it("Maryam and her cousin Hind share 16 date cookies equally with none left over. How many cookies does each get? Write 16 as a sum of two equal numbers.", "8 cookies each; 8 + 8 = 16 (16 is even)", "تقتسم مريم وابنة عمها هند 16 كعكة بالتمر بالتساوي دون أن يبقى شيء. كم كعكة تأخذ كل منهما؟ اكتب 16 على صورة مجموع عددين متساويين.", "8 كعكات لكل منهما؛ 8 + 8 = 16 (العدد 16 زوجي)"),
        it("There are 5 plates with 2 date cookies on each plate. Write an addition sentence and find the total.", "2 + 2 + 2 + 2 + 2 = 10 cookies", "هناك 5 أطباق، على كل طبق كعكتان بالتمر. اكتب جملة جمع وأوجد المجموع.", "2 + 2 + 2 + 2 + 2 = 10 كعكات"),
        mc("A tray of fruit has 3 rows with 4 apples in each row. Which addition sentence gives the number of apples?", ["4 + 4 + 4 = 12", "3 + 4 = 7", "4 + 4 + 4 + 4 = 16"], 0, "3 rows of 4 apples: 4 + 4 + 4 = 12.", "في صينية فاكهة 3 صفوف، في كل صف 4 تفاحات. أي جملة جمع تعطي عدد التفاحات؟", ["4 + 4 + 4 = 12", "3 + 4 = 7", "4 + 4 + 4 + 4 = 16"], "3 صفوف في كل منها 4 تفاحات: 4 + 4 + 4 = 12."),
        it("Khalid has 28 marbles. His uncle's family gives him 15 more and then he gives 9 to his brother. How many marbles does he have now?", "34 (28 + 15 = 43, then 43 - 9 = 34)", "مع خالد 28 كرة زجاجية. أعطته عائلة عمه 15 كرة أخرى ثم أعطى أخاه 9 كرات. كم كرة معه الآن؟", "34 (28 + 15 = 43 ثم 43 - 9 = 34)"),
        mc("Layla and Noura want to share 17 sweets equally. What happens?", ["Each gets 9 and none are left", "Each gets 8 and 1 is left over", "Each gets 8 and none are left"], 1, "17 is odd, so 1 sweet is left over (8 + 8 = 16).", "تريد ليلى ونورة اقتسام 17 حلوى بالتساوي. ماذا يحدث؟", ["تأخذ كل منهما 9 ولا يبقى شيء", "تأخذ كل منهما 8 وتبقى حلوى واحدة", "تأخذ كل منهما 8 ولا يبقى شيء"], "العدد 17 فردي، لذلك تبقى حلوى واحدة (8 + 8 = 16)."),
        it("Add: 6 + 4 + 9. Which two numbers make a ten?", "19. 6 and 4 make 10, then 10 + 9 = 19.", "اجمع: 6 + 4 + 9. أي عددين يكوّنان عشرة؟", "19. العددان 6 و 4 يكوّنان 10 ثم 10 + 9 = 19."),
        mc("Omar starts at 8 on a number line and jumps 5 more. Where does he land?", ["12", "14", "13"], 2, "8 + 5 = 13.", "يبدأ عمر من العدد 8 على خط أعداد ويقفز 5 قفزات أخرى. أين يهبط؟", ["12", "14", "13"], "8 + 5 = 13.")
      ]
    },
    {
      area: "geo",
      standards: ["2.G.A.1", "2.G.A.2", "2.G.A.3", "2.MD.A.1", "2.MD.A.2", "2.MD.A.3", "2.MD.A.4", "2.MD.B.5", "2.MD.C.7", "2.MD.C.8"],
      example: ex("The short hand of a clock points just past the 3 and the long hand points to the 5. What time is it?", ["The short hand shows the hour: 3.", "The long hand on the 5 means 5 x 5 = 25 minutes."], "3:25", "يشير العقرب القصير في ساعة إلى ما بعد العدد 3 بقليل، ويشير العقرب الطويل إلى العدد 5. كم الساعة؟", ["العقرب القصير يبيّن الساعة: 3.", "العقرب الطويل عند العدد 5 يعني 5 × 5 = 25 دقيقة."], "3:25"),
      items: [
        mc("How many sides and corners does a triangle have?", ["3 sides and 3 corners", "3 sides and 4 corners", "4 sides and 4 corners"], 0, "A triangle has 3 sides and 3 corners.", "كم ضلعًا وكم زاوية للمثلث؟", ["3 أضلاع و 3 زوايا", "3 أضلاع و 4 زوايا", "4 أضلاع و 4 زوايا"], "للمثلث 3 أضلاع و 3 زوايا."),
        it("Maha covers a wall with square tiles: 2 rows with 3 equal tiles in each row. How many tiles is that? Write an addition sentence.", "6 tiles (3 + 3 = 6)", "تكسو مها جدارًا ببلاطات مربعة: صفان في كل منهما 3 بلاطات متساوية. كم بلاطة هناك؟ اكتب جملة جمع.", "6 بلاطات (3 + 3 = 6)"),
        mc("How many flat faces does a cube-shaped box have?", ["4", "6", "8"], 1, "A cube has 6 flat faces. (It has 8 corners.)", "كم وجهًا مسطحًا لصندوق على شكل مكعب؟", ["4", "6", "8"], "للمكعب 6 أوجه مسطحة. (وله 8 زوايا.)"),
        mc("Noura cuts a rectangular sandwich into 2 equal parts. What is each part called?", ["A quarter", "A third", "A half"], 2, "2 equal parts are halves.", "قطعت نورة سندويشًا مستطيلًا إلى جزأين متساويين. ماذا يُسمّى كل جزء؟", ["ربع", "ثلث", "نصف"], "الجزآن المتساويان يُسمّى كل منهما نصفًا."),
        it("A square pizza is cut into 4 equal parts. What is each part called? Do 4 parts make a whole?", "A quarter (one fourth). Yes, 4 quarters make a whole.", "قُسِّمت بيتزا مربعة إلى 4 أجزاء متساوية. ماذا يُسمّى كل جزء؟ وهل تكوّن الأجزاء الأربعة الكل؟", "ربع. نعم، 4 أرباع تكوّن الكل."),
        it("A ribbon is 15 cm long. Another ribbon is 9 cm long. How much longer is the first ribbon?", "6 cm", "شريط طوله 15 سم وشريط آخر طوله 9 سم. بكم سنتمترًا الشريط الأول أطول؟", "6 سم"),
        mc("Which is the best estimate for the length of a pencil?", ["150 centimetres", "15 metres", "15 centimetres"], 2, "A pencil is about 15 centimetres long. The other lengths are far too long.", "أي تقدير هو الأفضل لطول قلم رصاص؟", ["150 سنتمترًا", "15 مترًا", "15 سنتمترًا"], "طول القلم نحو 15 سنتمترًا. أما الطولان الآخران فهما أطول بكثير."),
        mc("The long hand points to the 9 and the short hand is just before the 8. What time is it?", ["7:45", "8:45", "7:09"], 0, "The short hand is before the 8, so the hour is 7. The long hand on 9 means 9 x 5 = 45 minutes.", "يشير العقرب الطويل إلى العدد 9 ويقع العقرب القصير قبل العدد 8 بقليل. كم الساعة؟", ["7:45", "8:45", "7:09"], "العقرب القصير قبل العدد 8 فالساعة 7. والعقرب الطويل عند العدد 9 يعني 9 × 5 = 45 دقيقة."),
        it("The school bus leaves at 8:55 in the morning. The bell rings 5 minutes later. What time does the bell ring? Is it a.m. or p.m.?", "9:00 a.m. (8:55 plus 5 minutes)", "تغادر حافلة المدرسة عند الساعة 8:55 صباحًا. ويرنّ الجرس بعد 5 دقائق. متى يرنّ الجرس؟ وهل الوقت صباحًا (a.m.) أم مساءً (p.m.)؟", "9:00 صباحًا a.m. (8:55 زائد 5 دقائق)"),
        it("Layla buys a notebook for 6 AED and a pencil for 3 AED. She pays with a 10 AED note. How much change does she get?", "1 AED (6 + 3 = 9, then 10 - 9 = 1)", "اشترت ليلى دفترًا بـ 6 دراهم وقلمًا بـ 3 دراهم ودفعت ورقة من فئة 10 دراهم. كم يبلغ الباقي الذي تستلمه؟", "درهم واحد (6 + 3 = 9 ثم 10 - 9 = 1)"),
        it("Omar has one 10 AED note, one 5 AED note and three 1 AED coins. How much money does he have?", "18 AED (10 + 5 + 3)", "مع عمر ورقة من فئة 10 دراهم وورقة من فئة 5 دراهم وثلاث قطع من فئة درهم. كم درهمًا معه؟", "18 درهمًا (10 + 5 + 3)"),
        it("Maryam measures a table with a 20 cm ruler and gets 4 rulers. Then she measures it with a 10 cm strip and gets 8 strips. Why are the two numbers different?", "The 10 cm strip is a smaller unit, so more of them are needed. Both measure 80 cm.", "تقيس مريم طاولة بمسطرة طولها 20 سم فتحصل على 4 مساطر. ثم تقيسها بشريط طوله 10 سم فتحصل على 8 أشرطة. لماذا اختلف العددان؟", "لأن الشريط ذا 10 سم وحدة أصغر فيلزم منه عدد أكبر. وكلاهما يقيس 80 سم.")
      ]
    },
    {
      area: "dat",
      standards: ["2.MD.D.9", "2.MD.D.10"],
      example: ex("A line plot shows the lengths of leaves in cm. There are 2 dots above 3, 3 dots above 4 and 1 dot above 5. How many leaves were measured?", ["Each dot is one leaf.", "Count the dots: 2 + 3 + 1 = 6."], "6 leaves", "يبيّن مخطط نقطي أطوال أوراق شجر بالسنتيمتر. هناك نقطتان فوق 3 و 3 نقاط فوق 4 ونقطة واحدة فوق 5. كم ورقة قيست؟", ["كل نقطة تمثّل ورقة واحدة.", "نعدّ النقاط: 2 + 3 + 1 = 6."], "6 أوراق"),
      items: [
        it("Children chose their favourite fruit: dates 7, mangoes 5, bananas 4, apples 6. How many children chose dates?", "7", "اختار الأطفال فاكهتهم المفضلة: تمر 7، مانجو 5، موز 4، تفاح 6. كم طفلًا اختار التمر؟", "7"),
        mc("In the same table, which fruit did the most children choose?", ["Mangoes", "Apples", "Dates"], 2, "Dates have the biggest number, 7.", "في الجدول نفسه، أي فاكهة اختارها أكبر عدد من الأطفال؟", ["المانجو", "التفاح", "التمر"], "للتمر أكبر عدد وهو 7."),
        it("How many more children chose dates than bananas?", "3 (7 - 4 = 3)", "بكم زاد عدد الأطفال الذين اختاروا التمر على الذين اختاروا الموز؟", "3 (7 - 4 = 3)"),
        mc("How many children chose a fruit in all?", ["22", "18", "21"], 0, "7 + 5 + 4 + 6 = 22. (18 leaves out the bananas.)", "كم طفلًا اختار فاكهة في المجموع؟", ["22", "18", "21"], "7 + 5 + 4 + 6 = 22. (العدد 18 يهمل الموز.)"),
        it("How many children chose mangoes or apples?", "11 (5 + 6)", "كم طفلًا اختار المانجو أو التفاح؟", "11 (5 + 6)"),
        it("In a picture graph of favourite drinks, each smiley stands for 1 child. Karak has 9 smileys. How many children chose karak?", "9", "في رسم بياني بالصور للمشروبات المفضلة، كل وجه مبتسم يمثّل طفلًا واحدًا. للكرك 9 وجوه مبتسمة. كم طفلًا اختار الكرك؟", "9"),
        mc("In a bar graph, Salem's bar goes up to 8 books and Hind's bar goes up to 5 books. How many more books did Salem read?", ["13", "3", "4"], 1, "8 - 5 = 3. (13 is 8 + 5, the total.)", "في مخطط أعمدة، يصل عمود سالم إلى 8 كتب ويصل عمود هند إلى 5 كتب. كم كتابًا زيادة قرأ سالم؟", ["13", "3", "4"], "8 - 5 = 3. (العدد 13 هو 8 + 5، أي المجموع.)"),
        it("Use the leaf line plot from the example (2 dots above 3, 3 dots above 4, 1 dot above 5). How many leaves are 4 cm long?", "3", "استعمل المخطط النقطي للأوراق في المثال (نقطتان فوق 3، و 3 نقاط فوق 4، ونقطة فوق 5). كم ورقة طولها 4 سم؟", "3"),
        mc("In the leaf line plot (2 dots above 3, 3 dots above 4, 1 dot above 5), how long is the longest leaf?", ["5 cm", "3 cm", "4 cm"], 0, "The dot farthest to the right is above 5. (4 cm has the most dots, but it is not the longest leaf.)", "في المخطط النقطي للأوراق (نقطتان فوق 3، و 3 نقاط فوق 4، ونقطة فوق 5)، كم طول أطول ورقة؟", ["5 سم", "3 سم", "4 سم"], "النقطة الأبعد إلى اليمين فوق 5. (الطول 4 سم له أكبر عدد من النقاط لكنه ليس أطول ورقة.)"),
        it("Noura sells date cookies and counts them with tally marks: 2 groups of five and 3 more lines. How many cookies did she sell?", "13 (5 + 5 + 3)", "تعدّ نورة كعكات التمر التي باعتها بعلامات العدّ: مجموعتان من خمس علامات و 3 خطوط أخرى. كم كعكة باعت؟", "13 (5 + 5 + 3)"),
        it("In the fruit table, 4 more children choose bananas. Which fruit is now the most popular?", "Bananas, because bananas would have 8, which is more than dates (7).", "في جدول الفاكهة نفسه، اختار الموز 4 أطفال آخرون. أي فاكهة تصبح الآن الأكثر اختيارًا؟", "الموز، لأن عدده يصبح 8 وهذا أكثر من التمر (7)."),
      ]
    },
    {
      area: "num",
      standards: ["2.NBT.A.1", "2.NBT.A.2", "2.NBT.A.3", "2.NBT.A.4", "2.NBT.B.5", "2.NBT.B.6", "2.NBT.B.7", "2.NBT.B.8", "2.NBT.B.9"],
      example: ex("What is the value of each digit in 374? Write it in expanded form.", ["The 3 is in the hundreds place: 300.", "The 7 is in the tens place: 70. The 4 is in the ones place: 4."], "374 = 300 + 70 + 4", "ما قيمة كل رقم في العدد 374؟ اكتبه بالصيغة الموسّعة.", ["الرقم 3 في خانة المئات: 300.", "الرقم 7 في خانة العشرات: 70. والرقم 4 في خانة الآحاد: 4."], "374 = 300 + 70 + 4"),
      items: [
        it("Write the number: 5 hundreds, 3 tens and 7 ones.", "537", "اكتب العدد: 5 مئات و 3 عشرات و 7 آحاد.", "537"),
        mc("Which is 482 in expanded form?", ["400 + 80 + 2", "40 + 80 + 2", "400 + 8 + 2"], 0, "4 hundreds, 8 tens and 2 ones: 400 + 80 + 2.", "أي صيغة موسّعة صحيحة للعدد 482؟", ["400 + 80 + 2", "40 + 80 + 2", "400 + 8 + 2"], "4 مئات و 8 عشرات و 2 من الآحاد: 400 + 80 + 2."),
        mc("What is the value of the digit 6 in 361?", ["6", "60", "600"], 1, "The 6 is in the tens place, so it is worth 60.", "ما قيمة الرقم 6 في العدد 361؟", ["6", "60", "600"], "الرقم 6 في خانة العشرات، فقيمته 60."),
        mc("Salem has 408 date stones and Hamdan has 480. Which is true?", ["408 > 480", "408 = 480", "408 < 480"], 2, "The hundreds are the same, and 0 tens is less than 8 tens, so 408 < 480.", "مع سالم 408 نواة تمر ومع حمدان 480 نواة. أي عبارة صحيحة؟", ["408 > 480", "408 = 480", "408 < 480"], "المئات متساوية، و 0 عشرات أقل من 8 عشرات، إذن 408 < 480."),
        it("Three boxes hold 325, 235 and 253 dates. Put the numbers in order from least to greatest.", "235, 253, 325", "في ثلاثة صناديق 325 و 235 و 253 تمرة. رتّب الأعداد من الأصغر إلى الأكبر.", "235، 253، 325"),
        mc("Skip count by 5s: 35, 40, 45, __, __. What are the next two numbers?", ["50, 60", "46, 47", "50, 55"], 2, "Add 5 each time: 45 + 5 = 50 and 50 + 5 = 55.", "عُدّ بالقفز بمقدار 5: 35، 40، 45، __، __. ما العددان التاليان؟", ["50، 60", "46، 47", "50، 55"], "نضيف 5 في كل مرة: 45 + 5 = 50 و 50 + 5 = 55."),
        it("Skip count by 10s: 120, 130, 140, __, __", "150, 160", "عُدّ بالقفز بمقدار 10: 120، 130، 140، __، __", "150، 160"),
        it("Skip count by 100s: 300, 400, __, 600", "500", "عُدّ بالقفز بمقدار 100: 300، 400، __، 600", "500"),
        mc("Add: 45 + 38", ["83", "73", "93"], 0, "5 + 8 = 13, so regroup: 40 + 30 + 13 = 83. (73 forgets the regrouped ten.)", "اجمع: 45 + 38", ["83", "73", "93"], "5 + 8 = 13 فنعيد التجميع: 40 + 30 + 13 = 83. (العدد 73 ينسى العشرة المنقولة.)"),
        it("Mona has 74 stickers and gives 29 of them to her relatives. How many stickers does she have left?", "45 (74 - 29 = 45)", "مع منى 74 ملصقًا وأعطت 29 منها لأقاربها. كم ملصقًا بقي معها؟", "45 (74 - 29 = 45)"),
        it("A shop has 357 dates in one box and 128 in another box. How many dates are there in all?", "485 (357 + 128)", "في متجر 357 تمرة في صندوق و 128 في صندوق آخر. كم تمرة في المجموع؟", "485 (357 + 128)"),
        it("What is 10 more than 395? What is 100 less than 250? Hamdan says 1 hundred is the same as 10 tens. Is he right?", "405; 150; yes, 10 tens make 1 hundred (so 300 is 30 tens).", "ما العدد الذي يزيد 10 على 395؟ وما العدد الذي ينقص 100 عن 250؟ يقول حمدان إن المئة تساوي 10 عشرات. هل هو محق؟", "405؛ 150؛ نعم، 10 عشرات تساوي مئة (فالعدد 300 يساوي 30 عشرة).")
      ]
    }
  ]
};
