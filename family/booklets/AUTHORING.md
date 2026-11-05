# Writing a practice booklet

A booklet is general practice written for ONE grade's expectations of ONE subject,
one file a booklet: `family/booklets/<subject>-<grade>.js`
(`ma` Mathematics, `rd` Reading, `lu` Language Usage, `sc` Science; the grade is
0 for KG2, then 1 to 11). Parents are sent a path of booklets from the grade level
a child's score sits at up to their own grade, so a booklet is always written AT
its grade, never "easier" or "harder" than it.

The model to copy is `ma-5.js` (bilingual) and, for the English-only kind, any
booklet with `englishOnly: true`. Check a file as you go:

    node build/booklet-rules.mjs family/booklets/<subject>-<grade>.js

## What a file holds

```js
module.exports = {
  subject: "rd", grade: 4, framework: "CCSS.ELA",
  englishOnly: true,              // Reading and Language Usage only (see below)
  reviewed: { en: false, ar: false },   // always false: a person flips these after checking
  sections: [ { area, standards, passage?, example, items }, ... ]
};
```

- `framework`: `ma` CCSS.MATH, `rd` and `lu` CCSS.ELA, `sc` NGSS.
- `sections`: exactly one for each goal area of the grade's band, in this order
  (the validator tells you if it is wrong):
  - Mathematics: alg, geo, dat, num
  - Reading: grades 0 to 2: fnd, cmp, voc, wl; grades 3 to 11: voc, inf, lit
  - Language Usage: cps, gru, wri
  - Science: bio, ear, phy
- `standards`: the codes the section practises, as short codes, at least one, ALL
  for that grade:
  - Math grades K to 8: `3.OA.A.1`, `K.CC.A.1`; high school: `N-RN.A.1`, `A-REI.B.3`,
    `F-IF.A.1`, `G-SRT.A.1`, `S-ID.A.1`
  - ELA: `RL.4.1`, `RI.5.2`, `L.3.1a`, `W.6.1`, `RF.2.3`, `SL.4.1`; grades 9 and 10
    use `RL.9-10.1`, grade 11 uses `RL.11-12.1`; `RF` only to grade 5
  - NGSS: `3-LS1-1`, `K-PS2-1`; middle school `MS-LS1-1`; high school `HS-LS1-1`
  Use codes you are sure exist and fit the questions. Do not copy the standards' text.
- `passage` (optional, Reading mostly): `{ title, text }`, at least 200 characters,
  printed before the questions; the questions then refer to it.
- `example`: one worked example, `ex(...)` as in `ma-5.js`: a question, two or
  more steps and an answer.
- `items`: 10 to 20 questions, each `it(questionEn, answerEn, questionAr, answerAr)`.
  The answer is what the parent sees in the answer guide: give the answer and, where
  useful, a short reason in brackets.

## Bilingual or English-only

Mathematics and Science are bilingual: every question, answer and example in
English AND Arabic. Reading and Language Usage are about English text, so they are
`englishOnly: true`: write English only (use the `en(question, answer)` helper, which
repeats the English in the Arabic slot, and leave the example's `ar` the same as its
`en`). The Arabic booklet still gets Arabic instructions around the English text.
Arabic is modern standard Arabic, plain and natural, with the numbers as digits.

## Content rules (the validator and the checks enforce these)

- Written AT the grade's expectations: what a typical child of that grade is expected
  to know and do. Original wording and original passages; nothing copied from the
  standards, from textbooks or from NWEA items.
- 10 to 20 questions a section, with a range of difficulty: begin with the core
  skill, end with a question that makes the child explain or use it in a new way.
- Answers must be CORRECT and unambiguous. For Mathematics work every answer out
  (run a line of node if in doubt). For Science be accurate and keep to what the
  grade expects. For Reading, every question about a passage must be answerable
  from the passage alone.
- UAE-embedded and UAE-safe: dirhams, dates and dates cookies, karak, the souq,
  falcons, oryx, camels, the creek, mangroves, the Hajar mountains, the metro, solar
  parks, desalination, the Hope Probe, Emirati and common Arab names (Salem, Maryam,
  Hamdan, Noura, Khalid, Layla, Omar, Hind). Real places and facts only where you
  are sure of them.
- Absolutely nothing culturally sensitive: no pigs, pork, ham, bacon, alcohol, wine,
  beer, gambling or betting, dating or romance, dogs as pets, music or dancing,
  religious practice beyond neutral mention of Ramadan or Eid, politics, or anything
  frightening. No dash used as punctuation (no em dash, en dash or `--`). Use a
  comma, a colon, brackets or a new sentence; the hyphen inside a word is fine.
- Family company in stories and word problems: never show a girl or woman alone with an adult man, even a relative, and never out of sight of family (no early morning outings or boat trips with just an uncle, driver or neighbour). Put children together (siblings, cousins, friends), or with a parent or grandparent present, in public or family places. Boys and girls do not need to be shown mixing in private settings.
- Warm, calm and never blaming: do not use the words fail, behind, weak, poor, lazy,
  slow, stupid. Questions are about the work, never about the child.
- Keep the generic voice: no school, organisation or product names.
- The text is shown in a printed PDF: plain text only, no emoji, no pictures. A
  question that needs a picture must describe it in words or use a small table
  written out in text.
- Leave `reviewed` false.

When done, the file must pass `node build/booklet-rules.mjs <file>`.

## Multiple choice and word problems (MAP style)

MAP Growth is mostly multiple choice, with many short real-world problems. A booklet
therefore practises the same shapes, in original questions (never copy NWEA items):

- Between 25% and 60% of a booklet's questions are multiple choice (aim for about
  40%). The validator checks this and that the right answer is not always in the
  same place (use A, B, C and D about evenly).
- Add this helper next to `it` and write multiple choice with it:
  `const mc = (qEn, optsEn, correct, whyEn, qAr, optsAr, whyAr) => ({ q: T(qEn, qAr), a: T(whyEn, whyAr), options: { en: optsEn, ar: optsAr }, correct });`
  `correct` is the index of the right option (0 is A). `why` is the parent's short
  reason ("4 x 8 = 32."); the PDF prints the letter and the right option before it.
  In an englishOnly booklet repeat the English in the Arabic slots (as with `en()`).
- 4 options (3 for KG2 to Grade 2). Options are short and parallel. Build the wrong
  options from real mistakes (an adjacent fact, the wrong operation, forgetting to
  regroup, using perimeter for area, a distractor taken from the text), never from
  silly answers. No "all of the above" or "none of the above". Do not always list
  numbers in order. Put the right answer in different places.
- Roughly half of the Mathematics (and Science) questions that are not multiple
  choice are short word problems with a context from the UAE (dirhams, the souq,
  dates, falcons, the metro, solar parks) or a short everyday setting, in the style
  of "Maha packs 24 cookies into boxes of 6. How many boxes does she fill?". Keep
  some bare calculation for fluency.
- Keep every question's standard coverage, keep each section's size, and keep every
  answer correct in both languages. Multiple choice stems for Reading and Language
  must be answerable from the passage or the sentence alone with exactly one correct
  option.
- Worked example: `ma-3.js` is the model (a Grade 3 Maths booklet already converted).

## Answer guide: explain, don't just answer

The answer guide is read by a parent who may not know the content, often holding a
child who disagrees. The validator checks these three things (English; keep the
Arabic equivalent in step):

1. **Every open answer shows its working.** Not "23" but "3 x (12 - 7) + 8 = 3 x 5 + 8 = 15 + 8 = 23."
   Not "250 cm" but "2.5 m x 100 = 250 cm (1 m is 100 cm)." At least 5 words.
2. **Every multiple choice reason says why the right option is right and names the
   slip a wrong option traps**, using the word "chose": "C. 9. Brackets first: 4 + 5 = 9,
   then 18 - 9 = 9. If your child chose A (19), they ignored the brackets." Name one or
   two of the commonest wrong options, not all. At least 8 words.
3. **Reading and Language open answers give the parent a script**: what a good answer
   includes, and one question to ask to push it further ("Ask: which words tell you
   that?"). At least 10 words. Keep Maths and Science open answers to the working.
   A fill-in with one right answer still gives a short reason.

Keep each reason to one or two short sentences, in plain words a parent can say aloud.
Do not change questions, options, `correct`, standards, section sizes or examples,
unless you find an error (then fix it and say so).
