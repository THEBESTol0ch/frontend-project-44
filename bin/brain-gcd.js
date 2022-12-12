#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { create, all } from 'mathjs';

const math = create(all);
let randomNumber;
let playerAnswer;
let GCD;

function getRandomNumber(max) {
  randomNumber = Math.floor(Math.random() * max);
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
  GCD = math.gcd(randomNumber1, randomNumber2);
  console.log(`Question: ${randomNumber1} ${randomNumber2}`);

  playerAnswer = readlineSync.question('Your answer: ');

  if (playerAnswer == GCD) {
    console.log('Correct!');
  } else {
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${GCD}'.`);
    console.log(`Let's try again, ${playerName}!`);
    break;
  }
}

if (playerAnswer == GCD) {
  console.log(`Congratulations, ${playerName}!`);
}
