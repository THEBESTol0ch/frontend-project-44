#!/usr/bin/env node

import { startGame, getRandomNumber, totalGameQuestions } from '../src/index.js';

const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
let randomNumber;
const correctAnswers = [];
const gameQuestions = [];
const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function getCorrectAnswerAndGameQuestions() {
  randomNumber = getRandomNumber(randomNumber, 102);
  let correctAnswer;
  for (const item of primeNumbers) {
    if (randomNumber == item) {
      correctAnswer = 'yes';
      break;
    } else {
      correctAnswer = 'no';
    }
  }
  correctAnswers.push(correctAnswer);
  const gameQuestion = randomNumber;
  gameQuestions.push(gameQuestion);
}

for (let i = 0; i < totalGameQuestions; i += 1) {
  getCorrectAnswerAndGameQuestions();
}

startGame(gameDescription, correctAnswers, gameQuestions);
