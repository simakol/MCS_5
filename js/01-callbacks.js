/*
 * Функція зворотнього виклика (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */


/*
? Функція calc(a, b, callback)
 */

// const calc = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };

// const add = function (valueA, valueB) {
//   return valueA + valueB;
// };

// const division = function (valueA, valueB) {
//   return valueA / valueB;
// };

// calc(10, 20, function (valueA, valueB) {
//   return valueA + valueB;
// });

// calc(20, 10, function (valueA, valueB) {
//   return valueA / valueB;
// });

/*
? Напишіть функцію each(array, callback), яка першим параметром очікує масив,
? а другим - функцію, яка застосовується до кожного елемента масиву. Функція
? each повинна повернути новий масив, елементами якого будуть
? результати виклику коллбека.
 */


// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );

// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   })
// );

// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   })
// );
