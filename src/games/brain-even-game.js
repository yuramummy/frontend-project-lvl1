import launchGame from '../index.js';
import getRandom from '../getrandom.js';

const isEven = (num) => (num % 2 === 0);

const getInputData = () => {
  const num = getRandom(0, 50);
  const roundQuestion = `${num}`;
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return [roundQuestion, correctAnswer];
};

const brainEvenGame = () => {
  const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';
  launchGame(gameTask, getInputData);
};

export default brainEvenGame;
