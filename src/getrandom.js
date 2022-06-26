const getRandom = (min, max) => { // Функция получения рандомного числа.
  Math.ceil(min);
  Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // Максимум и минимум включаются.
};

export default getRandom;
