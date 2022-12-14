#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { randomNumber, correctAnswer, playerAnswer, getRandomNumber, playerMeet, playerAnswerCheck } from '../brain.js';

playerMeet();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3 && playerAnswer !== 'incorrect'; i += 1) {
  getRandomNumber(101);
  if (randomNumber % 2 == 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  console.log(`Question:  ${randomNumber}`);

  playerAnswer = readlineSync.question('Your answer: ');
  playerAnswerCheck();
}
