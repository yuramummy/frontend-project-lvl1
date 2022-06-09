import require from 'readline-sync';

const nameDeterminer = () => {
  const userName = require.question('May I have your name? ');
  return `Hello, ${userName}!`;
};

export default nameDeterminer;
