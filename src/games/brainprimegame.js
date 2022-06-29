import launcher from '../index.js';
import getRandom from '../getrandom.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  let divider = 2;

  while (divider <= number / 2) {
    if (number % divider === 0) {
      return false;
    }
    divider += 1;
  }
  return true;
};

const inputData = () => {
  const number = getRandom(1, 50);
  const roundQuestion = `${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [roundQuestion, correctAnswer];
};

const brainPrimeGame = () => {
  const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  launcher(gameTask, inputData);
};

export default brainPrimeGame;
