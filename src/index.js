import require from 'readline-sync';

const launchGame = (gameTask, getInputData) => {
  const userName = require.question('Welcome to the Brain Games!\nMay I have your name? ');
  const roundCounter = 3;
  console.log(`Hello, ${userName}!`);
  console.log(gameTask);

  for (let i = 0; i < roundCounter; i += 1) {
    const [roundQuestion, correctAnswer] = getInputData();
    console.log(`Question: ${roundQuestion}`);
    const userAnswer = require.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default launchGame;
