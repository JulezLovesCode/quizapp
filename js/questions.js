let questions = [
  {
    question: "Welches Element hat das chemische Symbol 'O'?",
    answer_1: 'Gold',
    answer_2: 'Sauerstoff',
    answer_3: 'Kalium',
    answer_4: 'Helium',
    right_answer: 2,
  },
  {
    question: 'Wie viele Kontinente gibt es auf der Erde?',
    answer_1: '5',
    answer_2: '6',
    answer_3: '7',
    answer_4: '8',
    right_answer: 3,
  },
  {
    question: 'Welches Tier ist das größte lebende Landtier?',
    answer_1: 'Elefant',
    answer_2: 'Nilpferd',
    answer_3: 'Giraffe',
    answer_4: 'Nashorn',
    right_answer: 1,
  },
  {
    question: 'Welche Farbe entsteht, wenn man Blau und Gelb mischt?',
    answer_1: 'Grün',
    answer_2: 'Orange',
    answer_3: 'Lila',
    answer_4: 'Braun',
    right_answer: 1,
  },
  {
    question: 'In welcher Stadt steht der Eiffelturm?',
    answer_1: 'Rom',
    answer_2: 'Berlin',
    answer_3: 'Paris',
    answer_4: 'London',
    right_answer: 3,
  },
  {
    question: 'Welcher Planet ist der Sonne am nächsten?',
    answer_1: 'Venus',
    answer_2: 'Erde',
    answer_3: 'Mars',
    answer_4: 'Merkur',
    right_answer: 4,
  },
  {
    question: 'Wie viele Zähne hat ein erwachsener Mensch normalerweise?',
    answer_1: '28',
    answer_2: '30',
    answer_3: '32',
    answer_4: '34',
    right_answer: 3,
  },
  {
    question: 'Wer hat die Relativitätstheorie formuliert?',
    answer_1: 'Isaac Newton',
    answer_2: 'Albert Einstein',
    answer_3: 'Nikola Tesla',
    answer_4: 'Galileo Galilei',
    right_answer: 2,
  },
  {
    question: 'Wie viele Ringe sind auf der olympischen Flagge abgebildet?',
    answer_1: '4',
    answer_2: '5',
    answer_3: '6',
    answer_4: '7',
    right_answer: 2,
  },
  {
    question: 'Welches Land hat die größte Bevölkerung der Welt?',
    answer_1: 'Indien',
    answer_2: 'USA',
    answer_3: 'Indonesien',
    answer_4: 'China',
    right_answer: 4,
  },
];

let currentQuestion = 0;
let rightAnswers = 0;
let AUDIO_SUCCESS = new Audio('assets/sounds/success.mp3');
let AUDIO_FAIL = new Audio('assets/sounds/fail.mp3');
