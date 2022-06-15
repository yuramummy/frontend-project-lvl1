import require from 'readline-sync';

const name = () => require.question('Welcome to the Brain Games!\nMay I have your name? ');
export const userName = name();
export const greetings = () => `Hello, ${userName}!`;

export const getRandom = (min, max) => { // Функция получения рандомного числа.
  Math.ceil(min);
  Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // Максимум и минимум включаются.
};
