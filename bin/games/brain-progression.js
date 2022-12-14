#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { randomNumber, correctAnswer, playerAnswer, getRandomNumber, playerMeet, playerAnswerCheck } from '../brain.js';

let AP;
let APElement;
let APstep;
let Arr;

playerMeet();
console.log('What number is missing in the progression?');

for (let i = 0; i < 3 && playerAnswer !== 'incorrect'; i += 1) {
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
  playerAnswerCheck();
}
