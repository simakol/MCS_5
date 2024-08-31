/*
Напиши програму, яка приймає число n і виводить в консоль ялинку з зірок висотою n. Кожен наступний рядок має збільшуватись на одну зірку.

Приклад:
Для n = 5, результат в консолі виглядатиме так:

    *
   ***
  *****
 *******
*********

*/

//* v1
// function doTree(row, i = "*") {
//   if (row > 1) {
//     console.log(" ".repeat(row - 1) + i);
//     doTree(row - 1, i + "**");
//   } else {
//     console.log(i);
//   }
// }

// doTree(5);

/*
1. 
doTree(row = 5, i = "*")
 if (5 > 1){
  console.log(" ".repeat(5 - 1) + i); "    *"
    doTree(row - 1, i + "**");
 }

2. 
doTree(row = 4, i = "***")
if (4 > 1){
  console.log(" ".repeat(4 - 1) + i); "   ***"
    doTree(4 - 1, i + "**");
 }

 .....n....

 5.
doTree(row = 1, i = "*********")
if (1 > 1) false

else 
    console.log("*********");
*/

//* v2
// function doTree(row, i = "*") {
//   if (row > 1) {
//     console.log(i.padStart(row - 1 + i.length, " "));
//     doTree(row - 1, i + "**");
//   } else {
//     console.log(i);
//   }
// }

// doTree(5);

//* v3

// function displayTree(n) {
//   let str = "";

//   for (let i = 1; i <= n; i += 1) {
//     let row = "";

//     for (let j = 1; j <= n - i; j += 1) {
//       row += " ";
//     }

//     for (let k = 1; k <= 2 * i - 1; k += 1) {
//       row += "*";
//     }

//     str += row + "\n";
//   }

//   console.log(str);
// }

// displayTree(5);

//* v4

// function asterisksTree(count) {
//   let str = "";
//   for (let i = 0; i < count; i++) {
//     const spaces = " ".repeat(count - i - 1);
//     const row = spaces + "*".repeat(i * 2 + 1) + spaces;
//     str += row + "\n";
//   }
//   return str;
// }

// console.log(asterisksTree(5));

//* v5

// function displayXmasTree(size) {
//   for (let i = size; i > 0; i--) {
//     let str = "*".padStart(i, " ");
//     str += "".padStart((size - i) * 2, "*");
//     console.log(str);
//   }
// }

// displayXmasTree(5);

//! ===

//? Знайти спільні елементи в масивах:
// Напиши функцію, яка приймає два масиви і повертає масив, що містить спільні елементи обох масивів.

//* v1
// function findCommonElements(arr1, arr2) {
//   return arr1.filter((el) => arr2.includes(el));
// }

//* v2
// function findCommonElements(arr1, arr2) {
//   const common = []; // масив спільних
//   const biggerArr = arr1.length > arr2.length ? arr1 : arr2; // визначаємо який з масивів більше
//   const shorterArr = arr1.length > arr2.length ? arr2 : arr1; // визначаємо який з масивів менше

//   for (const item of shorterArr) {
//     if (includes(biggerArr, item)) {
//       common.push(item);
//     }
//   }

//   return common;
// }

// function includes(arr, searchEl) {
//   for (const item of arr) {
//     if (item === searchEl) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(findCommonElements([1, 2, 3], [2, 5, 3, 4])); // [2, 3]
// console.log(findCommonElements([1, 2, 6, 3], [2, 5, 3, 1, 6, 4])); // [2, 3, 1, 6]

//! ===

//? Перетворити об'єкт у масив ключів та значень:
// Напиши функцію, яка приймає об'єкт і повертає масив, де кожен елемент — масив із двох елементів: ключ та його значення.

//* v1
// function objectToArray(obj) {
//   return Object.entries(obj);
// }

//* v2
// function objectToArray(obj) {
//   const results = [];

//   for (const key in obj) {
//     // * v1
//     // const pair = [key, obj[key]];
//     // results.push(pair);

//     //* v2
//     results.push([key, obj[key]]);
//   }

//   return results;
// }

// console.log(objectToArray({ a: 1, b: 2, c: 3 })); // [['a', 1], ['b', 2], ['c', 3]]

//! ===

//? Групування об'єктів за ключем:
// Напиши функцію, яка приймає масив об'єктів і ключ, за яким треба групувати ці об'єкти. Функція повинна повернути об'єкт, де ключі — це унікальні значення за вказаним ключем, а значення — це масиви об'єктів, що мають це значення.

/*
    1. створити пустий обʼєкт результату
    2. перебираємо масив обʼєктів
        2.1. витягуємо значення нашого ключа key з обʼєкту 
        2.2. перевіряємо чи взагалі є цей ключ, якщо немає, то з обʼєктом нічого не робимо (+ можна такі безключевні обʼєкти додати в обʼєкт результату під ключем rest)
        2.3. перевіряємо чи є ключ в обʼєкті результату
        2.4. якщо ключ є, то ми пушимо наш обʼєкт в масив групи в обʼєкті результату
        2.5. якщо ключа немає, то додаємо такий ключ і в якості значення записуємо пустий масив
    3. повертаємо результат
*/

//* v1
// function groupBy(arr, key) {
//   const result = {
//     rest: [],
//   };

//   for (const obj of arr) {
//     const groupKey = obj[key];

//     if (!groupKey) {
//       result.rest.push(obj);
//       continue;
//     }

//     if (!result[groupKey]) {
//       result[groupKey] = [];
//     }
//     result[groupKey].push(obj);
//   }

//   return result;
// }

//* v2
// function groupBy(arr, key) {
//   return arr.reduce(
//     (result, obj) => {
//       const groupKey = obj[key];

//       if (!groupKey) {
//         result.rest.push(obj);
//         return result;
//       }

//       if (!result[groupKey]) {
//         result[groupKey] = [];
//       }
//       result[groupKey].push(obj);

//       return result;
//     },
//     { rest: [] }
//   );
// }

// console.log(
//   groupBy(
//     [
//       { name: "Alex", group: "A" },
//       { name: "Maria", group: "B" },
//       { name: "Rick", group: "C" },
//       { name: "John", group: "A" },
//       { name: "Mark", mark: "F" },
//       { name: "Natalia", group: "A" },
//       { name: "Evgen", group: "C" },
//     ],
//     "group"
//   )
// );
// { A: [{ name: 'Alex', group: 'A' }, { name: 'John', group: 'A' }], B: [{ name: 'Maria', group: 'B' }] }

//! ===

//? Знайти найчастіше значення в масиві:
// Напиши функцію, яка приймає масив і повертає елемент, що зустрічається найчастіше.

/*
    1. створюємо обʼєкт-лічільник у якому будемо зберігати підрахунок частоти певної цифри. Ключем буде цифра, значенням буде кількість її повторень
    2. Перебираємо масив чисел і наповнюємо обʼєкт (створюємо ключ цифри і записуємо туди або 1, якщо цифра вже зустрічалась, або += 1 якщо цифра зустрічається вже не вперше)
    3. Створюємо дві змінні (1 для ключа (mostFrequent = null), тобто це буде найчастіше число яке зустрічається в масиві і 2 для значення (maxCount = 0), тобто скільки разів зустрічається)
    4. Перебираємо обʼєкт-лічильник циклом for in
        4.1. робимо перевірку якщо значення поточного ключа більше за змінну maxCount, то перезаписуємо mostFrequent = поточному ключу і maxCount = значенню поточного ключа
    5. повертаємо mostFrequent

*/

function findMostFrequent(arr) {
  const frequency = {};

  arr.forEach((num) => (frequency[num] = (frequency[num] || 0) + 1));

  /*
  arr = [1, 2, 2, 3, 3, 3, 4]
  frequency = { 1: 1 }

  ? Iter 1.
  num = 1

  frequency[1] = (frequency[num] || 0) + 1
  > frequency[num] -> frequency[1] -> undefined
  > (undefined || 0) -> 0
  > 0 + 1 -> 1
  > frequency[1] = 1
  > { 1: 1 }

  */

  let mostFrequent = null;
  let maxCount = 0;

  for (const item in frequency) {
    if (frequency[item] > maxCount) {
      mostFrequent = item;
      maxCount = frequency[item];
    }
  }

  /*

  let mostFrequent = "2";
  let maxCount = 2;
  frequency = {1: 1, 2: 2, 3: 3, 4: 1}

  ? Iter 1
 
  item = "1"
   if (frequency[item] > maxCount) -> frequency["1"] > 0 -> 1 > 0 - true
    mostFrequent = "1"
    maxCount = 1


  ? Iter 2
 
  item = "2"
   if (frequency[item] > maxCount) -> frequency["2"] > 1 -> 2 > 1 - true
    mostFrequent = "2"
    maxCount = 2

  ? Iter 3
 
  item = "3"
   if (frequency[item] > maxCount) -> frequency["3"] > 2 -> 3 > 2 - true
    mostFrequent = "3"
    maxCount = 3

  ? Iter 4
 
  item = "4"
   if (frequency[item] > maxCount) -> frequency["4"] > 3 -> 1 > 3 - false
    
   the end
  */

  return Number(mostFrequent);
}

console.log(findMostFrequent([1, 2, 2, 3, 3, 3, 4])); // 3
console.log(
  findMostFrequent([1, 2, 1, 4, 5, 1, 6, 1, 2, 1, 1, 6, 6, 4, 3, 2, 2])
); // 1
