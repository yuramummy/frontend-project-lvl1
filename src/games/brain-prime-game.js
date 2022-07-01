import launchGame from '../index.js';
import getRandom from '../get-random.js';

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

const getInputData = () => {
  const number = getRandom(1, 50);
  const roundQuestion = number.toString();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [roundQuestion, correctAnswer];
};

const brainPrimeGame = () => {
  const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  launchGame(gameTask, getInputData);
};

export default brainPrimeGame;
