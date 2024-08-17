//! TASK 1

/*
? Напиши програму, яка приймає масив чисел і повертає новий масив, в якому кожен елемент буде сумою всіх попередніх чисел в оригінальному масиві. Наприклад, для масиву [1, 2, 3, 4] результат буде [1, 3, 6, 10].
*/

/*
[1,2,3,4] - > [1,3,6,10]

[0] -> 1 -> 1
[1] -> 1 + 2 -> 3
[3] -> 1 + 2 + 3 -> 6
[3] -> 1 + 2 + 3 + 4 -> 10


1. створюємо змінну накопичувач суми
2. створюємо новий масив результату
3. запускаємо цикл for для перебору вхідного масиву
4. накопичуємо поточний елемент до загальної суми
5. пушимо в новий масив результату
*/

// function sumPreviuos(arr) {
//   const result = [];
//   let sum = 0;

//   for (const el of arr) {
//     sum += el;
//     result.push(sum);
//   }

//   return result;
// }

// console.log(sumPreviuos([1, 2, 3, 4]));
// console.log(sumPreviuos([5, 6, 7, 8]));

//! TASK 2

/*
? Створи функцію filterEvenNumbers(arr), яка приймає масив чисел і повертає новий масив, що містить лише парні числа з оригінального масиву.
*/

function filterEvenNumbers(arr) {
  /*
    1. створити масив результату
    2. перебрати оригінальний масив
    3. зробити перевірку на парність
    4. якщо значення парне - додати в масив результату
    */

  const result = [];

  for (const el of arr) {
    if (el % 2 === 0) {
      result.push(el);
    }
  }

  return result;
}

// console.log(filterEvenNumbers([5, 8, 99, 45, 2, 48, 114, 6])); // [8, 2, 48, 114, 6]

//! TASK 3

/*
? Напиши програму, яка обчислює та виводить суму всіх непарних чисел від 1 до n, де n — це число, введене користувачем.
*/

/*
n = 10

[1, 10] -> 1 + 3 + 5 + 7 + 9
*/

/*
* v1 (багато ітерацій)
1. створюємо змінну накопичувач
2. запускаємо цикл який буде рухатись від 1 до змінної n 
3. робимо перевірку, якщо число є не парним - додаємо його до суми

* v2 (менше ітерацій)
1. створюємо змінну накопичувач
2. запускаємо цикл який буде рухатись від 1 до змінної n з кроком 2
3. додаємо значення до змінної суми
*/

function sumOfOdds(n) {
  //* variant 2
  //   let sum = 0;
  //   for (let i = 1; i <= n; i += 2) {
  //     sum += i;
  //   }
  //   return sum;

  //* variant 3

  const oddsAmount = Math.floor((n + 1) / 2);

  return oddsAmount ** 2;
}

// console.log(sumOfOdds(10));
// console.log(sumOfOdds(100));

//! TASK 4

/*
? Напиши функцію findDuplicates(arr), яка приймає масив і повертає новий масив, що містить всі повторювані елементи з оригінального масиву. У новому масиві не повинно бути дублювань.
*/

/*
[1, 2, 3, 2, 4, 5, 1] -> [1, 2]

*/

function findDuplicates1(arr) {
  //* variant 1
  const duplicates = []; // створюємо масив дублікацій

  for (let i = 0; i < arr.length; i += 1) {
    // робимо перевірку
    /*
    arr.slice(i + 1, arr.length).includes(arr[i]) - робимо копію масиву починаючи з наступного елементу до останнього і перевіряємо чи є в цій копії поточний елемент arr[i]
    тобто масив [1, 2, 3, 2, 4, 5, 1, 1, 2, 4]
    і на кожній ітерації у нас буде пропадати по одному елементу з лівої частини масиву, наприклад

    duplicates = [1, 2]

    1. [2, 3, 2, 4, 5, 1, 1, 2, 4] чи є arr[0] -> 1 -> true
    2. [3, 2, 4, 5, 1, 1, 2, 4] чи є arr[1] -> 2 -> true
    3. [2, 4, 5, 1, 1, 2, 4] чи є arr[2] -> 3 -> false
    4. [4, 5, 1, 1, 2, 4] чи є arr[3] -> 2 -> true (не додається в масив дублікацій завдяки перевірці 2)

    перевірка 2: !duplicates.includes(arr[i]) - перевіряємо, перед тим як додати елемент в масив дублікацій перевіряємо чи є цей елемент в цьому масиві. Якщо він вже є, то ми другий раз його не додаємо

    ![1, 2].includes(2) -> !true -> false

    */
    if (
      arr.slice(i + 1, arr.length).includes(arr[i]) &&
      !duplicates.includes(arr[i])
    ) {
      duplicates.push(arr[i]);
    }
  }

  return duplicates;
}

function findDuplicates2(arr) {
  //* variant 2
  const duplicates = []; // створюємо масив дублікацій

  /*
  duplicates = [1]
  arr = [1, 2, 3, 2, 4, 5, 1, 1, 2, 4]

  i = 0
  j = 1
  arr[i] === arr[j] -> arr[0] === arr[1] -> 1 === 2 -> false

  i = 0
  j = 2
  arr[i] === arr[j] -> arr[0] === arr[2] -> 1 === 3 -> false

  i = 0
  j = 3
  arr[i] === arr[j] -> arr[0] === arr[3] -> 1 === 2 -> false

  i = 0
  j = 4
  arr[i] === arr[j] -> arr[0] === arr[4] -> 1 === 4 -> false

  i = 0
  j = 5
  arr[i] === arr[j] -> arr[0] === arr[5] -> 1 === 5 -> false

  i = 0
  j = 6
  arr[i] === arr[j] -> arr[0] === arr[6] -> 1 === 1 -> true
  break;

  i = 1
  j = 2
  arr[i] === arr[j] -> arr[1] === arr[2] -> 2 === 3 -> true

  */

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
        break;
      }
    }
  }

  return duplicates;
}

function findDuplicates(arr) {
  //* variant 2
  const duplicates = []; // створюємо масив дублікацій

  /*
  duplicates = [2]
  [1, 2, 3, 2, 4, 5, 1, 1, 2, 4]

  arr.indexOf(arr[i]) !== i
  1. arr.indexOf(arr[0]) !== 0 -> arr.indexOf(1) !== 0 -> 0 !== 0 -> false
  2. arr.indexOf(arr[1]) !== 1 -> arr.indexOf(2) !== 1 -> 1 !== 1 -> false
  3. arr.indexOf(arr[2]) !== 2 -> arr.indexOf(3) !== 2 -> 2 !== 2 -> false
  4. arr.indexOf(arr[3]) !== 3 -> arr.indexOf(2) !== 3 -> 1 !== 3 -> true
  ...
  */

  for (let i = 0; i < arr.length; i += 1) {
    // if (arr.indexOf(arr[i]) !== i && !duplicates.includes(arr[i])) {
    //   duplicates.push(arr[i]);
    // }

    if (arr.indexOf(arr[i], i + 1) !== -1 && !duplicates.includes(arr[i])) {
      duplicates.push(arr[i]);
    }
  }

  /*
  duplicates = [1, 2]
  [1, 2, 3, 2, 4, 5, 1, 1, 2, 4]

  arr.indexOf(arr[i], i + 1) !== -1
  1. arr.indexOf(arr[0], 1) !== -1 -> arr.indexOf(1) !== -1 -> 6 !== -1 -> true
  2. arr.indexOf(arr[1], 2) !== -1 -> arr.indexOf(2) !== -1 -> 8 !== -1 -> true
  3. arr.indexOf(arr[2], 3) !== -1 -> arr.indexOf(3) !== -1 -> -1 !== -1 -> false
  ...
  */

  return duplicates;
}

// console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1, 1, 2, 4])); // [1, 2, 4]

//! TASK 5

/*
? Напиши програму, яка генерує та виводить таблицю множення (наприклад, для чисел від 1 до 10) у вигляді двовимірного масиву. Кожен рядок масиву повинен містити результати множення одного числа на всі інші числа.
*/

/*
0 1 2 3
1 1 2 3
2 2 4 6
3 3 6 9
*/

function multiplicationTable(size) {
  const result = [];

  for (let i = 1; i <= size; i += 1) {
    const row = [];
    for (let k = 1; k <= size; k += 1) {
      row.push(i * k);
    }
    result.push(row);
  }

  return result;
}

displayMatrix(multiplicationTable(3));
displayMatrix(multiplicationTable(10));

function displayMatrix(matrix) {
  let str = "";

  for (let i = 0; i < matrix.length; i += 1) {
    let row = "";
    for (let k = 0; k < matrix[i].length; k += 1) {
      row += String(matrix[i][k]).padEnd(3, " ");
    }
    str += row + "\n\n";
  }

  console.log(str);
}

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
