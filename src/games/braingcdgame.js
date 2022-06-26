import require from 'readline-sync';
import { userName, greetings } from '../index.js';
import getRandom from '../getrandom.js';

console.log(greetings());
console.log('Find the greatest common divisor of given numbers.');

const brainGCDGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandom(0, 100);
    const num2 = getRandom(0, 100);

    const greatestCommonDivisor = (div1, div2) => {
      if (div1 < div2) {
        return greatestCommonDivisor(div2, div1);
      }
      if (div1 % div2 === 0) {
        return div2;
      }
      return greatestCommonDivisor(div2, div1 % div2);
    };

    console.log(`Qestion: ${num1} ${num2}`);
    const answer = require.question('');
    if (answer !== greatestCommonDivisor(num1, num2).toString()) {
      return `"${answer}" is wrong answer ;(. Correct answer was "${greatestCommonDivisor(num1, num2)}".\nLet's try again, ${userName}!`;
    }
    console.log('Correct!');
  }
  return `Congratulations, ${userName}!`;
};

export default brainGCDGame;
