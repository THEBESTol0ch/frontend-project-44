#!/usr/bin/env node

import { startGame, getRandomNumber, totalGameQuestions } from '../src/index.js'

let AP;
let APElement;
let APstep;
let Arr;
let randomNumber;
let correctAnswers = [];
let gameQuestions = [];
const gameDescription = 'What number is missing in the progression?';

function getCorrectAnswerAndGameQuestions() {
  randomNumber = getRandomNumber(randomNumber, 11);
  APstep = randomNumber;
  randomNumber = getRandomNumber(randomNumber, 11);
  APElement = randomNumber;
  AP = APElement;
  for (let j = 0; j < 9; j += 1) {
    APElement += APstep;
    AP = (`${AP} ${APElement}`);
  }
  Arr = AP.split(' ');
  randomNumber = getRandomNumber(randomNumber, 10);
  let correctAnswer = Arr[randomNumber];
  correctAnswers.push(correctAnswer);
  Arr[randomNumber] = '..';
  AP = '';
  for (const item of Arr) {
    AP = (`${AP} ${item}`);
  }
  let gameQuestion = AP;
  gameQuestions.push(gameQuestion);
}

for (let i = 0; i < totalGameQuestions; i += 1) {
  getCorrectAnswerAndGameQuestions();
}

startGame(gameDescription, correctAnswers, gameQuestions);
