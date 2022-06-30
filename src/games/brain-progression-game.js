import launchGame from '../index.js';
import getRandom from '../getrandom.js';

// формирование прогрессии
// begin
const getProgression = (startOfProgression, stepOfProgression, lengthOfProgression) => {
  let roundQuestion = '';
  let hiddenNumber;
  let firstNumber = startOfProgression;
  const hiddenNumberIndex = getRandom(0, lengthOfProgression - 1);
  for (let i = 0; i < lengthOfProgression; i += 1) {
    if (i === hiddenNumberIndex) {
      roundQuestion += '.. ';
      hiddenNumber = firstNumber.toString();
    } else {
      roundQuestion += (`${firstNumber.toString()} `);
    }
    firstNumber += stepOfProgression;
  } //  на выходе получаем прогрессию для вопроса и скрытое число = правильный ответ
  return [roundQuestion, hiddenNumber];
};
// end

const getInputData = () => {
  const startOfProgression = getRandom(1, 10); // определяем начало прогрессии
  const stepOfProgression = getRandom(2, 10); // шаг прогресии
  const lengthOfProgression = getRandom(5, 10); // длина прогресии
  const progression = getProgression(startOfProgression, stepOfProgression, lengthOfProgression);
  const [roundQuestion, correctAnswer] = progression;
  return [roundQuestion, correctAnswer];
};

const brainProgressionGame = () => {
  const gameTask = 'What number is missing in the progression?';
  launchGame(gameTask, getInputData);
};

export default brainProgressionGame;
