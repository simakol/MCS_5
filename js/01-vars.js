/*
 * Змінні та типи даних
 *
 * - Оголошення змінних з let та const
 * - Перевизначення значення
 * - Найменування змінних
 * - Вибір між const і let
 * - Виведення даних
 * - Отримання даних
 * - Примітивні типи даних: number, string, boolean, null, undefined
 * - Оператор typeof
 */

//! ПОМИЛКА! не можна звертатись до змінних і констант вище місця їх оголошення
// console.log(age);

// ініціалізація це створення змінної та надання їй значення
let age = 30;

console.log(age);

// перезапис
age = 35;

console.log(age);

const firstName = "Oleg";

console.log(firstName);

//! ПОМИЛКА! не можна перезаписувати значення констант
// firstName = "Alice";

// alert("Hellow world!")

// const userName = prompt("Enter your name:");
// prompt завжди повертає тип даних string

// alert("Hello, " + userName);

//* Примітивні типи даних
// - Number: числа (0, -10, 1457, 2.5)
// - String: строки або рядки (все, що записано всередині літералів рядків, тобто, в будь-яких видах лапків(', ", `)) - "Hello world", "100"
// - Boolean(bool): логічний тип, який вміє зберігати всього два значення: правда і неправда, тобто true або false
// - undefined - відсутність присутності (невизначений, Петі немає в школі)
// - null -  присутність відсутності(нульовий, Петя не існує)
// - Symbol - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
// - BigInt - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/BigInt

const userAge = 25; // Number
const userName = "Oleg"; // string
const isUserPlayGames = true; // bool
const userAddress = undefined; // undefined

// typeof - повертає тип даних певного значення або змінної
console.log(typeof isUserPlayGames); // bool
console.log(typeof "100"); // string
console.log(typeof null); // object
