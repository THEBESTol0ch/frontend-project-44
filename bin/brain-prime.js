#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { playerMeet, checkPlayerAnswer } from '../src/index.js';

const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
let randomNumber;
let correctAnswer;
let playerAnswer;
const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function getRandomNumber(max) {
    randomNumber = Math.floor(Math.random() * max);
}

function gameLogic() {
  getRandomNumber(102);
  console.log(`Question:  ${randomNumber}`);
  playerAnswer = readlineSync.question('Your answer: ');
  for (const item of primeNumbers) {
    if (randomNumber == item) {
      correctAnswer = 'yes';
      break;
    } else {
      correctAnswer = 'no';
    }
  }
}

playerMeet();
console.log(gameDescription);
for (let i = 0; i < 3 && playerAnswer == correctAnswer; i += 1) {
  gameLogic();
  checkPlayerAnswer(playerAnswer, correctAnswer, i);
}
