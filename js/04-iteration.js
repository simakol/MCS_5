/*
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */

//? Через цикл for...in - перебирає ключі обʼєкту (або індекси масиву)
// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let total = 0;

// for (const key in feedback) {
//   total += feedback[key];
// }

// console.log(total);

//? Через метод Object.keys()
// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// const objectKeys = Object.keys(feedback);

// console.log(objectKeys);

// let total = 0;

// console.log(Object.keys(feedback)); // ['good', 'neutral', 'bad']

// for (const key of objectKeys) {
//   console.log(key);
//   total += feedback[key];
// }

// console.log(total);

//? Через метод Object.values()
const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

const feedbackValues = Object.values(feedback);

console.log(feedbackValues);

let total = 0;

for (const value of feedbackValues) {
  console.log(value);
  total += value;
}

console.log(total);
