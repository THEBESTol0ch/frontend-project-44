#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { playerMeet, checkPlayerAnswer } from '../src/index.js';

let sign;
let expressionSum;
let randomNumber;
let correctAnswer;
let playerAnswer;
const gameDescription = 'What is the result of the expression?';

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

function getRandomNumber(max) {
  randomNumber = Math.floor(Math.random() * max);
}

function gameLogic() {
  getRandomNumber(31);
  const randomNumber1 = randomNumber;
  getRandomNumber(31);
  const randomNumber2 = randomNumber;
  getRandomSign();
  console.log(`Question:  ${randomNumber1}  ${sign}  ${randomNumber2}`);
  expressionSum = eval(randomNumber1 + sign + randomNumber2);
  correctAnswer = expressionSum;
  playerAnswer = readlineSync.question('Your answer: ');
}

playerMeet();
console.log(gameDescription);
for (let i = 0; i < 3 && playerAnswer == correctAnswer; i += 1) {
gameLogic();
checkPlayerAnswer(playerAnswer, correctAnswer, i);
}
