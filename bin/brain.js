#!/usr/bin/env node

import readlineSync from 'readline-sync';

let randomNumber;
let correctAnswer;
let playerAnswer;

function getRandomNumber(max) {
    randomNumber = Math.floor(Math.random() * max);
}

function playerMeet() {
    console.log('Welcome to the Brain Games!');
    const playerName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${playerName}!`);
}

function playerAnswerCheck() {
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

export { randomNumber, correctAnswer, playerAnswer, getRandomNumber, playerMeet, playerAnswerCheck };
