import require from 'readline-sync';

export const name = () => require.question('Welcome to the Brain Games!\nMay I have your name? ');
export const userName = name();

export const greetings = () => `Hello, ${userName}!`;
