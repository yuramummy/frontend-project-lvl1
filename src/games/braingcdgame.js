import launcher from '../index.js';
import getRandom from '../getrandom.js';

const greatestCommonDivisor = (div1, div2) => {
  if (div1 < div2) {
    return greatestCommonDivisor(div2, div1);
  }
  if (div1 % div2 === 0) {
    return div2;
  }
  return greatestCommonDivisor(div2, div1 % div2);
};

const inputData = () => {
  const num1 = getRandom(0, 50);
  const num2 = getRandom(0, 50);
  const roundQuestion = `${num1} ${num2}`;
  const correctAnswer = greatestCommonDivisor(num1, num2).toString();
  return [roundQuestion, correctAnswer];
};

const brainGCDGame = () => {
  const gameTask = 'Find the greatest common divisor of given numbers.';
  launcher(gameTask, inputData);
};

export default brainGCDGame;
