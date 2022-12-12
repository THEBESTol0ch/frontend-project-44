#!/usr/bin/env node

import readlineSync from 'readline-sync';

let randomNumber;
let correctAnswer;
let playerAnswer;
let NOD;

function getRandomNumber(max) {
  randomNumber = Math.floor(Math.random() * max);
}

function GetNOD () {
  for (var x = arguments[0], i = 1; i < arguments.length; i++) {
    var y = arguments[i];
    while (x && y) {
      x > y ? x %= y : y %= x;
    }
    x += y;
  }
  NOD = x;
}

console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}!`);
console.log('Find the greatest common divisor of given numbers.');

for (let i = 0; i < 3; i += 1) {
  getRandomNumber(31);
  const randomNumber1 = randomNumber;
  getRandomNumber(31);
  const randomNumber2 = randomNumber;
  GetNOD(randomNumber1, randomNumber2);
  console.log(`Question: ${randomNumber1} ${randomNumber2}`);
  correctAnswer = NOD;

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
