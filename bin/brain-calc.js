#!/usr/bin/env node

import { startGame, getRandomNumber, totalGameQuestions } from '../src/index.js';

let sign;
let expressionSum;
let randomNumber;
const correctAnswers = [];
const gameQuestions = [];
const gameDescription = 'What is the result of the expression?';

function getRandomSign() {
  randomNumber = getRandomNumber(randomNumber, 3);
  if (randomNumber == 0) {
    sign = '+';
  }
  if (randomNumber == 1) {
    sign = '-';
  }
  if (randomNumber == 2) {
    sign = '*';
  }
}

function getCorrectAnswerAndGameQuestions() {
  randomNumber = getRandomNumber(randomNumber, 31);
  const randomNumber1 = randomNumber;
  randomNumber = getRandomNumber(randomNumber, 31);
  const randomNumber2 = randomNumber;
  getRandomSign();
  expressionSum = eval(randomNumber1 + sign + randomNumber2);
  const correctAnswer = expressionSum;
  correctAnswers.push(correctAnswer);
  const gameQuestion = `${randomNumber1}  ${sign}  ${randomNumber2}`;
  gameQuestions.push(gameQuestion);
}

for (let i = 0; i < totalGameQuestions; i += 1) {
  getCorrectAnswerAndGameQuestions();
}

startGame(gameDescription, correctAnswers, gameQuestions);
