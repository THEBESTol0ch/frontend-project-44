#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { playerMeet, checkPlayerAnswer } from '../src/index.js';

let AP;
let APElement;
let APstep;
let Arr;
let randomNumber;
let correctAnswer;
let playerAnswer;
const gameDescription = 'What number is missing in the progression?';

function getRandomNumber(max) {
    randomNumber = Math.floor(Math.random() * max);
}

function gameLogic() {
  getRandomNumber(11);
  APstep = randomNumber;
  getRandomNumber(11);
  APElement = randomNumber;
  AP = APElement;
  for (let j = 0; j < 9; j += 1) {
    APElement += APstep;
    AP = (`${AP} ${APElement}`);
  }
  Arr = AP.split(' ');
  getRandomNumber(10);
  correctAnswer = Arr[randomNumber];
  Arr[randomNumber] = '..';
  AP = '';
  for (const item of Arr) {
    AP = (`${AP} ${item}`);
  }
  console.log(`Question: ${AP}`);
  playerAnswer = readlineSync.question('Your answer: ');
}

playerMeet();
console.log(gameDescription);
for (let i = 0; i < 3 && playerAnswer == correctAnswer; i += 1) {
  gameLogic();
  checkPlayerAnswer(playerAnswer, correctAnswer, i);
}
