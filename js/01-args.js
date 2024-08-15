/*
 * - Function expression
 * - Псевдомасив arguments и Array.from
 * - hoisting
 */

//? Function declaration

// console.log(sum(1, 4)); //? hoisting - механізм за допомогою якого всі Function declaration піднімаються на самий верх вашого коду і дають змогу викликати себе в будь-якому місці програми

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(5, 8));
// console.log(sum(2, 9));

//? Function expression

// const sum = function (a, b) {
//   return a + b;
// };

// console.log(sum(5, 8));
// console.log(sum(3, 9));

//? arguments

// function foo() {
//   console.log(Array.from(arguments));
//   console.log(arguments);

//   for (const arg of arguments) {
//     console.log(arg);
//   }
// }

// foo(1, 2, 3);
// foo('hello', false, 5);

/*
? Напиши функцію add для складання довільної кількості аргументів (чисел)
*/

// function add() {
//   let total = 0;
//   for (const arg of arguments) {
//     total += arg;
//   }
//   return total;
// }

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

/*
? Створіть функцію calculateAverage(), яка приймає довільну кількість числових аргументів
? та розраховує середнє арефметичне.
*/

function calculateAverage() {
    let total = 0;
    for (const arg of arguments) {
      total += arg;
    }
    return total / arguments.length;
  }

console.log(calculateAverage(1, 2, 3, 4)); // 2.5
console.log(calculateAverage(14, 8, 2)); // 8
console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2
