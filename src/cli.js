import require from 'readline-sync';

const brainGames = () => {
  console.log('Welcome to the Brain Games!');
  const userName = require.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default brainGames;
