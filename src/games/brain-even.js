import { totalGameQuestions, getRandomNumber } from '../index.js';

let randomNumber;
const correctAnswers = [];
const gameQuestions = [];
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

function getCorrectAnswerAndGameQuestions() {
  randomNumber = getRandomNumber(randomNumber, 101);
  let correctAnswer;
  if (randomNumber % 2 == 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  correctAnswers.push(correctAnswer);
  const gameQuestion = randomNumber;
  gameQuestions.push(gameQuestion);
}

for (let i = 0; i < totalGameQuestions; i += 1) {
  getCorrectAnswerAndGameQuestions();
}

export { gameDescription, correctAnswers, gameQuestions };
