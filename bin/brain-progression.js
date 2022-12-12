#!/usr/bin/env node

import readlineSync from 'readline-sync';

let AP;
let APElement;
let APstep;
let Arr;
let randomNumber;
let correctAnswer;
let playerAnswer;

function getRandomNumber(max) {
  randomNumber = Math.floor(Math.random() * max);
}

console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}!`);
console.log('What number is missing in the progression?');

for (let i = 0; i < 3; i += 1) {
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

  if (playerAnswer == correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${playerName}!`);
    break;
  }
}

if (playerAnswer == correctAnswer) {
  console.log(`Congratulations, ${playerName}!`);
}
