#!/usr/bin/env node

import readlineSync from 'readline-sync';

let randomNumber = 0;
let playerAnswer = '';
let correctAnswer = '';
let playerStep = 0;
let playerName = '';

console.log('Welcome to the Brain Games!');

playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
  randomNumber = Math.floor(Math.random() * 101);
  if (randomNumber % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  console.log(`Question:  ${randomNumber}`);
  playerAnswer = readlineSync.question('Your answer: ');
  if (playerAnswer === correctAnswer) {
    console.log('Correct!');
    playerStep += 1;
  }
  if (playerAnswer !== correctAnswer) {
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    break;
  }
}

if (playerStep === 3) {
  console.log(`Congratulations, ${playerName}!`);
}
