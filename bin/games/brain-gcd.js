#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { create, all } from 'mathjs';
import { randomNumber, correctAnswer, playerAnswer, getRandomNumber, playerMeet, playerAnswerCheck } from '../brain.js';

const math = create(all);
let GCD;

playerMeet();
console.log('Find the greatest common divisor of given numbers.');

for (let i = 0; i < 3 && playerAnswer !== 'incorrect'; i += 1) {
  getRandomNumber(31);
  const randomNumber1 = randomNumber;
  getRandomNumber(31);
  const randomNumber2 = randomNumber;
  GCD = math.gcd(randomNumber1, randomNumber2);
  console.log(`Question: ${randomNumber1} ${randomNumber2}`);
  correctAnswer = GCD;

  playerAnswer = readlineSync.question('Your answer: ');
  playerAnswerCheck();
}
