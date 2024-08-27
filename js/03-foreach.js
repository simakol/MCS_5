/*
 * Метод forEach(callback)
 * - Поелементо перебирає оригінальний масив
 * - Нічого не повертає
 * - Замінює класичний for, якщо не потрібно переривати цикл
 */

//* Чиста фукція суми

// function add(a, b) {
//   return a + b;
// }

// console.log(add(5, 2));
// console.log(add(5, 2));
// console.log(add(5, 2));

//! не чиста фукція суми

// let b = 2;

// function add(a) {
//   return a + b;
// }

// console.log(add(5));
// console.log(add(5));
// b = 10
// console.log(add(5));

// const numbers = [5, 10, 15, 20, 25];

// console.log(numbers);

// numbers.forEach((el, idx, arr) => {
//   console.log('==================');
//   console.log('idx:', idx, '\nel:', el, '\narr:', arr);
// });

/*
? Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */

// before
// function logItems(items) {
//   for (let i = 0; i < items.length; i++) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// after

// const logItems = items =>
//   items.forEach((el, i) => console.log(`${i + 1} - ${el}`));

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/*
? Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */

// before
function printContactsInfo(names, phones) {
  const nameList = names.split(',');
  const phoneList = phones.split(',');

  console.log(nameList);
  console.log(phoneList);

  for (let i = 0; i < nameList.length; i++) {
    console.log(`${nameList[i]}: ${phoneList[i]}`);
  }
}

// after

// const printContactsInfo = (names, phones) => {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');

//   nameList.forEach((name, i) => console.log(`${name}: ${phoneList[i]}`));
// };

// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300'
// );

/*
? Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */

// before
// function calculateAverage(...args) {
//   let total = 0;

//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }

//   return total / args.length;
// }

//after

const calculateAverage = (...args) => {
  let total = 0;

  args.forEach(arg => (total += arg));

  return total / args.length;
};

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2
