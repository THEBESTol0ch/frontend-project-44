#!/usr/bin/env node

import { startGame, getRandomNumber, totalGameQuestions } from '../src/index.js'

let randomNumber;
let correctAnswers = [];
let gameQuestions = [];
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
  let gameQuestion = randomNumber;
  gameQuestions.push(gameQuestion);
}

for (let i = 0; i < totalGameQuestions; i += 1) {
  getCorrectAnswerAndGameQuestions();
}

startGame(gameDescription, correctAnswers, gameQuestions);
