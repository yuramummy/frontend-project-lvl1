import launcher from '../index.js';
import getRandom from '../getrandom.js';

const calculator = (num1, num2, operator) => {
  switch (operator) {
    case '*':
      return num1 * num2;
    case '+':
      return num1 + num2;
    default:
      return num1 - num2;
  }
};

const inputData = () => {
  const operators = ['*', '+', '-'];
  const operator = operators[getRandom(0, 2)];
  const num1 = getRandom(0, 30);
  const num2 = getRandom(0, 30);
  const roundQuestion = `Qestion: ${num1} ${operator} ${num2}`;
  const correctAnswer = calculator(num1, num2, operator).toString();
  return [roundQuestion, correctAnswer];
};

const brainCalcGame = () => {
  const gameTask = 'What is the result of the expression?';
  launcher(gameTask, inputData);
};

export default brainCalcGame;
