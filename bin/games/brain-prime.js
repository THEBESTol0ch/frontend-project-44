#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { randomNumber, correctAnswer, playerAnswer, getRandomNumber, playerMeet, playerAnswerCheck } from '../brain.js';

const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

playerMeet();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

for (let i = 0; i < 3 && playerAnswer !== 'incorrect'; i += 1) {
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

  playerAnswer = readlineSync.question('Your answer: ');
  playerAnswerCheck();
}
