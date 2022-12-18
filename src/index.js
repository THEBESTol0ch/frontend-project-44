#!/usr/bin/env node

import readlineSync from 'readline-sync';

let playerName;

function getPlayerName() {
  playerName = readlineSync.question('May I have your name? ');
}

function playerMeet() {
  console.log('Welcome to the Brain Games!');
  getPlayerName();
  console.log(`Hello, ${playerName}!`);
}

function checkPlayerAnswer(playerAnswer, correctAnswer, i) {
  if (playerAnswer == correctAnswer) {
    console.log('Correct!');
    if (i == 2) {
      console.log(`Congratulations, ${playerName}!`);
    }
  } else {
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${playerName}!`);
    playerAnswer = 'incorrect';
  }
}

export { playerMeet, checkPlayerAnswer };
