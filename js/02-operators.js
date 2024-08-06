/*
 * Арифметичні операції
 * - Оператори +, -, *, /, %, **
 * - Комбіновані оператори
 */

const a = 10;
const b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log(5 ** 3);
console.log(7 ** 4);

console.log(10 % 3); // 9 найближче до 10 яке націло ділиться на 3. 10 - 9 = 1
console.log(10 % 2);
console.log(11 % 2);

/**
 * Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.
 */

const apples = 47;
const grapes = 135;

const sum = apples + grapes;
const diff = grapes - apples;

console.log("sum:", sum);
console.log("diff:", diff);

/**
 * Заміни вираз перевизначення комбінованим оператором
 */

let students = 100;
// students = students + 50;
students += 50
console.log(students);
