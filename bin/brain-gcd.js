#!/usr/bin/env node

import { create, all } from 'mathjs';
import { startGame, getRandomNumber, totalGameQuestions } from '../src/index.js';

const math = create(all);
let GCD;
let randomNumber;
const correctAnswers = [];
const gameQuestions = [];
const gameDescription = 'Find the greatest common divisor of given numbers.';

function getCorrectAnswerAndGameQuestions() {
  randomNumber = getRandomNumber(randomNumber, 31);
  const randomNumber1 = randomNumber;
  randomNumber = getRandomNumber(randomNumber, 31);
  const randomNumber2 = randomNumber;
  GCD = math.gcd(randomNumber1, randomNumber2);
  const correctAnswer = GCD;
  correctAnswers.push(correctAnswer);
  const gameQuestion = `${randomNumber1} ${randomNumber2}`;
  gameQuestions.push(gameQuestion);
}

for (let i = 0; i < totalGameQuestions; i += 1) {
  getCorrectAnswerAndGameQuestions();
}

startGame(gameDescription, correctAnswers, gameQuestions);
