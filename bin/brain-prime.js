#!/usr/bin/env node

import readlineSync from 'readline-sync';

const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
let randomNumber;
let correctAnswer;
let playerAnswer;

function getRandomNumber(max) {
  randomNumber = Math.floor(Math.random() * max);
}

console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
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
