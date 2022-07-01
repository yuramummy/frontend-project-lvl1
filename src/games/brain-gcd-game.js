import launchGame from '../index.js';
import getRandom from '../get-random.js';

const getGreatestCommonDivisor = (div1, div2) => {
  if (div1 < div2) {
    return getGreatestCommonDivisor(div2, div1);
  }
  if (div1 % div2 === 0) {
    return div2;
  }
  return getGreatestCommonDivisor(div2, div1 % div2);
};

const getInputData = () => {
  const num1 = getRandom(0, 50);
  const num2 = getRandom(0, 50);
  const roundQuestion = `${num1} ${num2}`;
  const correctAnswer = getGreatestCommonDivisor(num1, num2).toString();
  return [roundQuestion, correctAnswer];
};

const brainGCDGame = () => {
  const gameTask = 'Find the greatest common divisor of given numbers.';
  launchGame(gameTask, getInputData);
};

export default brainGCDGame;
