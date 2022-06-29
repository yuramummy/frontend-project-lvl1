import launcher from '../index.js';
import getRandom from '../getrandom.js';

const getProgression = (startOfProgression, stepOfProgression, lengthOfProgression) => {
  const progression = [];
  let firstNumber = startOfProgression;
  while (progression.length < lengthOfProgression) {
    progression.push(firstNumber);
    firstNumber += stepOfProgression;
  }
  return progression; // формирование прогрессии
};

const getQuestion = (progression, hiddenNumberIndex) => { // формирование вопроса
  let result = '';
  for (let i = 0; i < progression.length; i += 1) {
    if (i === hiddenNumberIndex) {
      result = `${result} ..`;
    } else result = `${result} ${progression[i]}`;
  }
  return result;
};

const inputData = () => {
  const startOfProgression = getRandom(1, 10); // определяем начало прогрессии
  const stepOfProgression = getRandom(2, 10); // шаг прогресии
  const lengthOfProgression = getRandom(5, 10); // длина прогресии
  const progression = getProgression(startOfProgression, stepOfProgression, lengthOfProgression);
  const hiddenNumberIndex = getRandom(0, progression.length - 1); // индекс скрытого числа
  const hiddenNumber = progression[hiddenNumberIndex]; // скрытое число = правильный ответ
  const roundQuestion = `${getQuestion(progression, hiddenNumberIndex)}`;
  const correctAnswer = hiddenNumber.toString();
  return [roundQuestion, correctAnswer];
};

const brainProgressionGame = () => {
  const gameTask = 'What number is missing in the progression?';
  launcher(gameTask, inputData);
};

export default brainProgressionGame;
