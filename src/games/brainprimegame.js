import launcher from '../index.js';
import getRandom from '../getrandom.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  let divider = 2;

  while (divider <= num / 2) {
    if (num % divider === 0) {
      return false;
    }
    divider += 1;
  }
  return true;
};

const inputData = () => {
  const num = getRandom(1, 50);
  const roundQuestion = `${num}`;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return [roundQuestion, correctAnswer];
};

const brainPrimeGame = () => {
  const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  launcher(gameTask, inputData);
};

export default brainPrimeGame;
