#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { randomNumber, correctAnswer, playerAnswer, getRandomNumber, playerMeet, playerAnswerCheck } from '../brain.js';

let sign;
let expressionSum;

function getRandomSign() {
  getRandomNumber(3);
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

playerMeet();
console.log('What is the result of the expression?');

for (let i = 0; i < 3 && playerAnswer !== 'incorrect'; i += 1) {
  getRandomNumber(31);
  const randomNumber1 = randomNumber;
  getRandomNumber(31);
  const randomNumber2 = randomNumber;
  getRandomSign();
  console.log(`Question:  ${randomNumber1}  ${sign}  ${randomNumber2}`);
  expressionSum = eval(randomNumber1 + sign + randomNumber2);
  correctAnswer = expressionSum;

  playerAnswer = readlineSync.question('Your answer: ');
  playerAnswerCheck();
}
