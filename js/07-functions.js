/*
 * Функції
 *
 * - Оголошення та виклик функції
 * - Параметри та аргументи
 * - Повернення значення
 * - Порядок виконання коду
 * - Області видимості
 */

/*
function declaration
* створення функції
function назваФункції (список параметрів) {
  тіло функції
}

* виклик фукнції
назваФункції(список аргументів);




*/

// console.log("Start!");

function greeting(firstName, lastName) {
  // firstName, lastName - параметри фукнції. Це звичайні змінні які доступні тільки всередині фукції. Значення цих змінних отримується під час виклику фукнції у вигляді аргументів.
  console.log(`Welcome ${firstName} ${lastName}!`);
}

// greeting("Alex", "Simak"); // "Alex", "Simak" - аргументи це просто значення для параметрів функції
// greeting("Oleg", "Dou");
// greeting("Maria", "Trust");
// greeting("Ryan", "Gosling");

// console.log("End!");

//! ===========================

function sum(numA, numB) {
  const result = numA + numB;

  return result;
  // 1. зупиняє виконання фукнції
  // 2. повертає значення у зовнішній код як результат роботи вашої фукнції
}
// якщо у фукнції відсутній оператор return то вона за замовчуванням повертає undefined

const total = sum(20, 30); // зберігаю результат роботи фукнції sum (те, що вона повертає) в константу total

// console.log(total);

//! ===========================

/*
? Напишіть функцію getRectArea(sideA, sideB) для обчислення площі прямокутника.
? Сторони прямокутника будуть переденні до параметрів sideA та sideB.
*/

function getRectArea(sideA, sideB) {
  return sideA * sideB;
}

// console.log(getRectArea(8, 11)); // 88
// console.log(getRectArea(18, 11)); // 198
// console.log(getRectArea(8, 21)); // 168

//! ===========================

/*
 ? Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 ? маси тіла людини. Для цього необхідно розділити вагу на
 ? квадрат висоти.
 ?
 ? Вага та висота будуть спеціально передані як рядки.
 ?
 ? Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */

function calcBMI(weight, height) {
  weight = Number(weight);
  height = Number(height);

  const result = weight / height ** 2;

  return Number(result.toFixed(1));
}

const bmi = calcBMI("88.3", "1.75");

console.log(bmi); // 28.8

console.log(calcBMI("95.6", "1.93"));
