import require from 'readline-sync';
import { userName, greetings, getRandom } from '../index.js';

console.log(greetings());
console.log('What number is missing in the progression?');

const brainProgressionGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const progression = () => { // формируем рандомную прогрессию
      const array = [];
      let startOfProgression = getRandom(1, 10); // определяем начало прогрессии
      const randomIncrease = getRandom(2, 10); // рандомное увеличение прогресии
      const randomLength = getRandom(5, 10); // рандомная длина прогресии
      while (array.length < randomLength) {
        array.push(startOfProgression);
        startOfProgression += randomIncrease;
      }
      return array;
    };

    const question = progression();
    const hiddenNumber = question[getRandom(0, question.length - 1)]; // определяем скрытое число
    const newArray = () => { // формируем строчку со скрытым числом
      let result = '';
      question[question.indexOf(hiddenNumber)] = '..';
      for (let item = 0; item < question.length; item += 1) {
        result = `${result}${question[item]} `;
      }
      return result;
    };

    console.log(`Question: ${newArray()}`);
    const answer = require.question('');
    if (answer !== hiddenNumber.toString()) {
      return `"${answer}" is wrong answer ;(. Correct answer was "${hiddenNumber}".\nLet's try again, ${userName}!`;
    }
    console.log('Correct!');
  }
  return `Congratulations, ${userName}!`;
};

export default brainProgressionGame;
