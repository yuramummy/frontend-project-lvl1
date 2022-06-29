import require from 'readline-sync';

const launcher = (gameTask, inputData) => {
  const userName = require.question('Welcome to the Brain Games!\nMay I have your name? ');
  const roundCounter = 3;
  console.log(`Hello, ${userName}!`);
  console.log(gameTask);

  for (let i = 0; i < roundCounter; i += 1) {
    const [roundQuestion, correctAnswer] = inputData();
    console.log(`Question: ${roundQuestion}`);
    const userAnswer = require.question('');
    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default launcher;
