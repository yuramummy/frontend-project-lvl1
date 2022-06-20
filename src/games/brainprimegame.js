import require from 'readline-sync';
import { userName, greetings, getRandom } from '../index.js';

console.log(greetings());
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const brainPrimeGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const random = getRandom(1, 50);

    const isPrime = (num) => {
      if (num < 2) {
        return 'no';
      }

      let divider = 2;

      while (divider <= num / 2) {
        if (num % divider === 0) {
          return 'no';
        }
        divider += 1;
      }
      return 'yes';
    };

    console.log(`Question: ${random}`);
    const answer = require.question('');
    if (answer !== isPrime(random)) {
      return `"${answer}" is wrong answer ;(. Correct answer was "${isPrime(random)}".\nLet's try again, ${userName}!`;
    }
    console.log('Correct!');
  }
  return `Congratulations, ${userName}!`;
};

export default brainPrimeGame;
