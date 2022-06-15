import require from 'readline-sync';
import { userName, greetings, getRandom } from '../index.js';

console.log(greetings());
console.log('What is the result of the expression?');
const operators = ['*', '+', '-'];

const brainCalcGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const operator = operators[getRandom(0, 2)];
    const num1 = getRandom(0, 30);
    const num2 = getRandom(0, 30);

    const calculator = () => {
      switch (operator) {
        case '*':
          return num1 * num2;
        case '+':
          return num1 + num2;
        default:
          return num1 - num2;
      }
    };

    console.log(`Qestion: ${num1} ${operator} ${num2}`);
    const answer = require.question('');
    if (answer !== calculator().toString()) {
      return `"${answer}" is wrong answer ;(. Correct answer was "${calculator()}".\nLet's try again, ${userName}!`;
    }
    console.log('Correct!');
  }
  return `Congratulations, ${userName}!`;
};

export default brainCalcGame;
