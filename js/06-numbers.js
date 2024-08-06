/*
 * Арифметичні функції
 *
 * - Number.parseInt
 * - Number.parseFloat
 * - Math
 */

/* 
  ? Попросіть користувача ввести число.
  ? Виведіть результат у консоль.
  ? Приведіть рядок до числа.
*/

// const firstNumber = Number(prompt("Enter first number"));
// const secondNumber = Number(prompt("Enter first number"));
// const sum = firstNumber + secondNumber;

// console.log(`${firstNumber} + ${secondNumber} = ${sum}`);

// console.log(Math.max(5, 32, 235, 235, 5, 6, 345, 2352, 3245));
// console.log(Math.min(5, 32, 235, 235, 5, 6, 345, 2352, 3245));

//? Дізнайтесь числове значення ширини елемента.
const elementWidth = "50px";
const numericalWidth = Number.parseInt(elementWidth);

console.log("elementWidth:", elementWidth);
console.log("numericalWidth:", numericalWidth);

//? Дізнайтесь числове значення висоти елемента.
const elementHeight = "200.74px";
const numericalHeight = Number.parseFloat(elementHeight);

console.log("elementHeight: ", elementHeight);
console.log("numericalHeight: ", numericalHeight);

/*
 ? Напиши скрипт, який виводить у консоль заокруглені вгору/вниз значення
 ? змінної value. Використовуй методи Math.floor(), Math.ceil()
 ? та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.
*/

const value = 27.4;

console.log(Math.round(value)); // якщо дробова частина >= 0.5 округлюємо вгору, якщо менша - вниз
console.log(Math.ceil(value));
console.log(Math.floor(value));
