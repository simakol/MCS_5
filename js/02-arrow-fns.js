/*
 * Стрілочні функції
 * - Оголошення
 * - Явне і неявне поверненя
 * - Псевдомасив arguments (...args)
 * - Інлайн стрілочні функції
 */

//* Два і більше параметрів
// const sum =  (numA, numB) => {
//   return numA + numB;
// };

// console.log(sum(20, 30));

//* Один параметр
// const fnA = message => {
//   console.log(message);
// };

// fnA('Hello world!');

//* Без параметрів
// const fnA = () => {
//   console.log('Hello!');
// };

// fnA();

//* arguments
// const sum = (...args) => {
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(sum(1, 2, 3));
// console.log(sum(20, 30, 40, 2, 4));

//* Неявне повернення
// const sum = (numA, numB) => numA + numB;

// console.log(sum(20, 30));

/*
? Виконайте рефакторинг коду за допомогою стрілочних функцій.
*/

// function createProduct(partialProduct, callback) {
//   const product = { id: Date.now(), ...partialProduct };

//   callback(product);
// }

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice(product) {
//   console.log(product.price * product.quantity);
// }

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

/*
? Виконайте рефакторинг коду за допомогою стрілочних функцій. (each)
*/

// Повна версія
// console.log(
//   each([64, 49, 36, 25, 16], value => {
//     return value * 2;
//   })
// );
// Скорочена версія
// console.log(each([64, 49, 36, 25, 16], value => value * 2));

// Повна версія
// console.log(
//   each([64, 49, 36, 25, 16], value => {
//     return value - 10;
//   })
// );
// Скорочена версія
// console.log(each([64, 49, 36, 25, 16], value => value - 10));

// Повна версія
// console.log(
//   each([64, 49, 36, 25, 16], value => {
//     return Math.sqrt(value);
//   })
// );
// Скорочена версія
// console.log(each([64, 49, 36, 25, 16], value => Math.sqrt(value)));

// Повна версія
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], value => {
//     return Math.ceil(value);
//   })
// );
// Скорочена версія
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));

// Повна версія
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], value => {
//     return Math.floor(value);
//   })
// );
// Скорочена версія
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));
