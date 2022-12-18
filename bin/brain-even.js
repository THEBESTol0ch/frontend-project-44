#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { playerMeet, checkPlayerAnswer } from '../src/index.js';

let randomNumber;
let correctAnswer;
let playerAnswer;
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

function getRandomNumber(max) {
    randomNumber = Math.floor(Math.random() * max);
}

function gameLogic() {
  getRandomNumber(101);
  if (randomNumber % 2 == 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  console.log(`Question:  ${randomNumber}`);
  playerAnswer = readlineSync.question('Your answer: ');
}

playerMeet();
console.log(gameDescription);
for (let i = 0; i < 3 && playerAnswer == correctAnswer; i += 1) {
  gameLogic();
  checkPlayerAnswer(playerAnswer, correctAnswer, i);
}
