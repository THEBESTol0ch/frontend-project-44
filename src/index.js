import readlineSync from 'readline-sync';

const welcomeUser = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const askQuestion = (question) => {
  console.log(question);

  return readlineSync.question('Your answer: ');
};

export function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

let userScores = 0;
const scoresForWin = 3;

export const gameLoop = (userName, gameLogic) => {
  const [userAnswer, calculateAnswer] = gameLogic();

  if (String(userAnswer) !== String(calculateAnswer)) {
    console.log(`'${userAnswer}'is wrong answer ;(. Correct answer was ${calculateAnswer}`);
    console.log(`Let's try again, ${userName}!`);
    return;
  }
  userScores += 1;
  console.log('Correct!');

  if (userScores === scoresForWin) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  gameLoop(userName, gameLogic);
};

export const createNewGame = (gameLogic, gameDescription) => () => {
  const name = welcomeUser();
  console.log(gameDescription);
  gameLoop(name, gameLogic);
};

export default welcomeUser;
