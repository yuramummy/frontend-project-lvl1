import require from 'readline-sync';
import { userName, greetings } from './greetings.js';

console.log(greetings());
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandom = (min, max) => {
  Math.ceil(min);
  Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const questions = [getRandom(0, 50), getRandom(0, 50), getRandom(0, 50)];

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const brainEvenGame = () => {
  for (let i = 0; i < questions.length; i += 1) {
    console.log(`Question: ${questions[i]}`);
    const answer = require.question('');
    if (answer !== isEven(questions[i])) {
      return `"${answer}" is wrong answer ;(. Correct answer was "${isEven(questions[i])}".\nLet's try again, ${userName}!`;
    }
    console.log('Correct!');
  }
  return `Congratulations, ${userName}!`;
};

export default brainEvenGame;
