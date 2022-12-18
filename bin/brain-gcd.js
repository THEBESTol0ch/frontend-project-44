#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { create, all } from 'mathjs';
import { playerMeet, checkPlayerAnswer } from '../src/index.js';

const math = create(all);
let GCD;
let randomNumber;
let correctAnswer;
let playerAnswer;
const gameDescription = 'Find the greatest common divisor of given numbers.';

function getRandomNumber(max) {
    randomNumber = Math.floor(Math.random() * max);
}

function gameLogic() {
  getRandomNumber(31);
  const randomNumber1 = randomNumber;
  getRandomNumber(31);
  const randomNumber2 = randomNumber;
  GCD = math.gcd(randomNumber1, randomNumber2);
  console.log(`Question: ${randomNumber1} ${randomNumber2}`);
  correctAnswer = GCD;
  playerAnswer = readlineSync.question('Your answer: ');
}

playerMeet();
console.log(gameDescription);
for (let i = 0; i < 3 && playerAnswer == correctAnswer; i += 1) {
  gameLogic();
  checkPlayerAnswer(playerAnswer, correctAnswer, i);
}
