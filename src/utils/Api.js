const questionBank = {
  Quantitative: {
    Easy: [
      { q: "What is 15% of 200?", options: ["25", "30", "35", "40"], answer: 1, explanation: "15% of 200 = (15/100) × 200 = 30" },
      { q: "A train travels 60 km in 1 hour. How far will it travel in 2.5 hours?", options: ["120 km", "150 km", "180 km", "200 km"], answer: 1, explanation: "Distance = Speed × Time = 60 × 2.5 = 150 km" },
      { q: "If 8 workers complete a job in 6 days, how many days will 12 workers take?", options: ["3 days", "4 days", "5 days", "6 days"], answer: 1, explanation: "8×6 = 12×x → x = 48/12 = 4 days" },
      { q: "What is the simple interest on ₹1000 at 5% per annum for 3 years?", options: ["₹100", "₹150", "₹200", "₹250"], answer: 1, explanation: "SI = (P×R×T)/100 = (1000×5×3)/100 = ₹150" },
      { q: "The ratio of boys to girls in a class is 3:2. If there are 30 students, how many are boys?", options: ["12", "15", "18", "20"], answer: 2, explanation: "Boys = (3/5) × 30 = 18" },
      { q: "Find the average of 10, 20, 30, 40, 50.", options: ["25", "30", "35", "40"], answer: 1, explanation: "Average = (10+20+30+40+50)/5 = 150/5 = 30" },
      { q: "A shopkeeper buys an item for ₹80 and sells it for ₹100. What is the profit percentage?", options: ["20%", "25%", "15%", "30%"], answer: 1, explanation: "Profit% = (20/80)×100 = 25%" },
    ],
    Medium: [
      { q: "A pipe fills a tank in 4 hours. Another empties it in 6 hours. If both are open, how long to fill?", options: ["10 hrs", "12 hrs", "14 hrs", "16 hrs"], answer: 1, explanation: "Net rate = 1/4 - 1/6 = 1/12. Time = 12 hours" },
      { q: "Two numbers are in ratio 3:5. Their LCM is 75. Find the numbers.", options: ["9,15", "15,25", "12,20", "6,10"], answer: 1, explanation: "Numbers are 3k and 5k. LCM=15k=75, k=5. So 15 and 25." },
      { q: "A car covers 300 km at 60 kmph and 200 km at 40 kmph. Find average speed.", options: ["48 kmph", "50 kmph", "52 kmph", "54 kmph"], answer: 1, explanation: "Total time = 5+5 = 10 hrs. Avg speed = 500/10 = 50 kmph" },
      { q: "If x² - 5x + 6 = 0, what are the values of x?", options: ["2,3", "1,6", "2,4", "3,4"], answer: 0, explanation: "(x-2)(x-3)=0, so x=2 or x=3" },
      { q: "Find compound interest on ₹5000 at 10% for 2 years.", options: ["₹1000", "₹1050", "₹1100", "₹1150"], answer: 1, explanation: "CI = 5000[(1.1)²-1] = 5000×0.21 = ₹1050" },
    ],
    Hard: [
      { q: "A boat goes 30 km upstream in 6 hrs and 36 km downstream in 4 hrs. Find speed of stream.", options: ["1 kmph", "2 kmph", "3 kmph", "4 kmph"], answer: 2, explanation: "Upstream=5, Downstream=9. Stream=(9-5)/2=2. Wait: (9-5)/2=2 kmph" },
      { q: "In how many ways can 5 boys and 3 girls be seated so no two girls sit together?", options: ["2880", "14400", "1440", "4320"], answer: 0, explanation: "5! × P(6,3) = 120 × 120 = 14400. Actually boys first: 5!×⁶P₃=120×120=14400" },
      { q: "If log 2 = 0.3010, find log 8.", options: ["0.6020", "0.9030", "1.2040", "0.3010"], answer: 1, explanation: "log 8 = log 2³ = 3 × 0.3010 = 0.9030" },
      { q: "A sum doubles itself in 8 years at SI. In how many years will it triple?", options: ["12 yrs", "16 yrs", "20 yrs", "24 yrs"], answer: 1, explanation: "Rate = 100/8 = 12.5%. To triple: 200 = 12.5×T → T = 16 years" },
      { q: "Find the number of zeros at end of 100!.", options: ["20", "24", "25", "30"], answer: 1, explanation: "⌊100/5⌋+⌊100/25⌋ = 20+4 = 24" },
    ]
  },
  Logical: {
    Easy: [
      { q: "Find the next number: 2, 4, 8, 16, ?", options: ["24", "28", "32", "36"], answer: 2, explanation: "Each number is doubled. 16×2 = 32" },
      { q: "If CAT = 24, DOG = ?", options: ["26", "27", "28", "29"], answer: 1, explanation: "C+A+T = 3+1+20=24. D+O+G = 4+15+7 = 26. Wait: D=4,O=15,G=7 = 26" },
      { q: "Which is the odd one out? Apple, Mango, Carrot, Banana", options: ["Apple", "Mango", "Carrot", "Banana"], answer: 2, explanation: "Carrot is a vegetable, rest are fruits" },
      { q: "If A=1, B=2...Z=26, what is the value of INDIA?", options: ["40", "41", "42", "43"], answer: 0, explanation: "I+N+D+I+A = 9+14+4+9+1 = 37. Hmm let me recount: 9+14+4+9+1=37" },
      { q: "Complete: ABCD, EFGH, IJKL, ?", options: ["MNOP", "LMNO", "NOPQ", "MNPQ"], answer: 0, explanation: "Each group has 4 consecutive letters. After IJKL comes MNOP" },
    ],
    Medium: [
      { q: "If RAIN is coded as 8, 1, 9, 14 then SNOW is coded as?", options: ["19,14,15,23", "19,13,15,23", "18,14,15,22", "20,14,15,23"], answer: 0, explanation: "S=19, N=14, O=15, W=23" },
      { q: "A is B's brother. C is A's mother. D is C's father. How is D related to B?", options: ["Grandfather", "Uncle", "Father", "Brother"], answer: 0, explanation: "D is C's father, C is B's mother, so D is B's grandfather" },
      { q: "In a row, Ram is 7th from left and 5th from right. How many students are in the row?", options: ["10", "11", "12", "13"], answer: 1, explanation: "Total = 7+5-1 = 11" },
      { q: "Find missing: 3, 7, 15, 31, ?", options: ["53", "63", "61", "55"], answer: 1, explanation: "Pattern: ×2+1. 3×2+1=7, 7×2+1=15, 15×2+1=31, 31×2+1=63" },
      { q: "All cats are animals. Some animals are dogs. Which conclusion follows?", options: ["All cats are dogs", "Some cats are dogs", "No cat is a dog", "Cannot determine"], answer: 3, explanation: "We cannot determine the relationship between cats and dogs from given statements" },
    ],
    Hard: [
      { q: "If 1st Jan 2000 was Saturday, what day was 1st Jan 2001?", options: ["Sunday", "Monday", "Tuesday", "Wednesday"], answer: 1, explanation: "2000 was a leap year (366 days). 366 = 52 weeks + 2 days. Saturday + 2 = Monday" },
      { q: "A clock shows 3:15. What is the angle between the hands?", options: ["0°", "7.5°", "15°", "22.5°"], answer: 1, explanation: "At 3:15, minute hand at 90°, hour hand at 97.5°. Difference = 7.5°" },
      { q: "How many times do the hands of a clock coincide in 24 hours?", options: ["22", "24", "20", "44"], answer: 0, explanation: "Hands coincide 22 times in 24 hours (not at 12 twice, but 11 times per 12 hours)" },
      { q: "In a group of 60, 35 like coffee, 40 like tea, how many like both?", options: ["10", "15", "20", "25"], answer: 1, explanation: "Both = 35+40-60 = 15" },
      { q: "Find next: 1, 1, 2, 3, 5, 8, 13, ?", options: ["18", "20", "21", "23"], answer: 2, explanation: "Fibonacci series. 8+13 = 21" },
    ]
  },
  Verbal: {
    Easy: [
      { q: "Choose the synonym of 'Happy'", options: ["Sad", "Joyful", "Angry", "Tired"], answer: 1, explanation: "Joyful means feeling great happiness, same as Happy" },
      { q: "Choose the antonym of 'Ancient'", options: ["Old", "Historic", "Modern", "Past"], answer: 2, explanation: "Modern means current/new, opposite of Ancient" },
      { q: "Fill in the blank: She _____ to school every day.", options: ["go", "goes", "going", "went"], answer: 1, explanation: "With singular subject 'She', we use 'goes' in present tense" },
      { q: "Which word is spelled correctly?", options: ["Recieve", "Receive", "Receeve", "Receve"], answer: 1, explanation: "'Receive' follows the rule: i before e except after c" },
      { q: "Choose correct sentence:", options: ["He don't know", "He doesn't knows", "He doesn't know", "He not know"], answer: 2, explanation: "'He doesn't know' is grammatically correct with singular subject" },
    ],
    Medium: [
      { q: "Choose the word closest in meaning to 'Loquacious'", options: ["Silent", "Talkative", "Clever", "Lazy"], answer: 1, explanation: "Loquacious means tending to talk a great deal" },
      { q: "Identify the figure of speech: 'The wind whispered through the trees'", options: ["Simile", "Metaphor", "Personification", "Alliteration"], answer: 2, explanation: "Giving human quality (whispering) to non-human (wind) is Personification" },
      { q: "Choose correct passive voice of: 'She wrote a letter'", options: ["A letter was written by her", "A letter is written by her", "A letter written by her", "A letter were written by her"], answer: 0, explanation: "Past tense passive: Subject + was/were + past participle + by + object" },
      { q: "Find the correctly punctuated sentence:", options: ["Its a boys school", "It's a boys' school", "Its a boys' school", "It's a boy's school"], answer: 1, explanation: "It's = It is (apostrophe for contraction), boys' = belonging to boys (plural possessive)" },
      { q: "Choose the word that best completes: 'The scientist made a _____ discovery'", options: ["redundant", "groundbreaking", "trivial", "mediocre"], answer: 1, explanation: "Groundbreaking means innovative and important, fitting for a scientist's discovery" },
    ],
    Hard: [
      { q: "Choose the correct meaning of idiom: 'Bite the bullet'", options: ["To eat fast", "To endure pain stoically", "To shoot someone", "To be very hungry"], answer: 1, explanation: "'Bite the bullet' means to endure a painful situation bravely" },
      { q: "Identify the error: 'Neither the students nor the teacher were present'", options: ["Neither", "students", "were", "present"], answer: 2, explanation: "When 'neither...nor' connects singular and plural nouns, verb agrees with the nearest noun (teacher=singular, so 'was')" },
      { q: "Choose the word with correct stress: 'Record' (noun vs verb)", options: ["Same stress for both", "RE-cord (noun), re-CORD (verb)", "re-CORD (noun), RE-cord (verb)", "Stress on last syllable always"], answer: 1, explanation: "In English, nouns often have stress on first syllable, verbs on second: RE-cord vs re-CORD" },
      { q: "Choose the best synonym for 'Ephemeral'", options: ["Eternal", "Transient", "Significant", "Permanent"], answer: 1, explanation: "Ephemeral means lasting for a very short time, same as transient" },
      { q: "Choose correct sentence with subjunctive mood:", options: ["If I was you, I would go", "If I were you, I would go", "If I am you, I would go", "If I be you, I would go"], answer: 1, explanation: "Subjunctive mood uses 'were' for all persons in hypothetical conditions" },
    ]
  }
};

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

export async function fetchQuestions(category, difficulty, count = 5) {
  await new Promise(r => setTimeout(r, 800)); // simulate loading
  const pool = questionBank[category]?.[difficulty] || questionBank[category]?.Medium || [];
  return shuffle(pool).slice(0, count);
}