#!/usr/bin/env node

import readlineSync from 'readline-sync';

let sign;
let randomNumber;
let expressionSum;
let playerAnswer;

function getRandomNumber(max) {
  randomNumber = Math.floor(Math.random() * max);
}

function getRandomSign() {
  getRandomNumber(3);
  if (randomNumber == 0) {
    sign = '+';
  }
  if (randomNumber == 1) {
    sign = '-';
  }
  if (randomNumber == 2) {
    sign = '*';
  }
}

console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}!`);
console.log('What is the result of the expression?');

for (let i = 0; i < 3; i += 1) {
  getRandomNumber(31);
  const randomNumber1 = randomNumber;
  getRandomNumber(31);
  const randomNumber2 = randomNumber;
  getRandomSign();
  console.log(`${randomNumber1}  ${sign}  ${randomNumber2}`);
  expressionSum = eval(randomNumber1 + sign + randomNumber2);

  playerAnswer = readlineSync.question('Your answer: ');

  if (playerAnswer == expressionSum) {
    console.log('Correct!');
  } else {
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${expressionSum}'.`);
    console.log(`Let's try again, ${playerName}!`);
    break;
  }
}

if (playerAnswer == expressionSum) {
  console.log(`Congratulations, ${playerName}!`);
}
