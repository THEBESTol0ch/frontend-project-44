import readlineSync from 'readline-sync';

let playerName;
const totalGameQuestions = 3;

function getRandomNumber(randomNumber, max) {
  randomNumber = Math.floor(Math.random() * max);
  return randomNumber;
}

function playerMeet() {
  console.log('Welcome to the Brain Games!');
  playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
}

function startGame(gameDescription, correctAnswers, gameQuestions) {
  playerMeet();
  console.log(gameDescription);

  for (let i = 0; i < totalGameQuestions; i += 1) {
    console.log(`Question: ${gameQuestions[i]}`);
    const playerAnswer = readlineSync.question('');

    if (playerAnswer == correctAnswers[i]) {
      console.log('Correct!');
      if (i == 2) {
        console.log(`Congratulations, ${playerName}!`);
      }
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswers[i]}'.`);
      console.log(`Let's try again, ${playerName}!`);
      break;
    }
  }
}

export {
  startGame, getRandomNumber, totalGameQuestions, playerMeet,
};
