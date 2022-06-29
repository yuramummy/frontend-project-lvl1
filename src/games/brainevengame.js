import launcher from '../index.js';
import getRandom from '../getrandom.js';

const isEven = (num) => (num % 2 === 0);

const inputData = () => {
  const num = getRandom(0, 50);
  const roundQuestion = `Qestion: ${num}`;
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return [roundQuestion, correctAnswer];
};

const brainEvenGame = () => {
  const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';
  launcher(gameTask, inputData);
};

export default brainEvenGame;
