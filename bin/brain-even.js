#!/usr/bin/env node

import readlineSync from 'readline-sync';

let randomNumber;
let correctAnswer;
let playerAnswer;

function getRandomNumber(max) {
  randomNumber = Math.floor(Math.random() * max);
}

console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
  getRandomNumber(101);
  if (randomNumber % 2 == 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  console.log(`Question:  ${randomNumber}`);
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
