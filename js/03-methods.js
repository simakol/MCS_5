/*
 * Методи масиву
 *
 * - join
 * - split (Метод рядка)
 * - slice
 * - concat
 * - indexOf
 * - push/pop
 */

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

//* .join(separator) - викликається на масиві та приймає один параметр (знак розділювача). Цей метод повертає рядок у якому всі елементи масиву будуть розділені нашим параметром separator. з масиву в рядок

// const coursesStr = courses.join(', ');
// console.log(`На курсі вивчаються наступні технології: ${coursesStr}.`);

//* .split(splitter) - викликається на рядку та приймає один параметр (знак розділювача). Повертає новий масив де кожен елемент було вибрано з рядка з урахуванням розділювача splitter. з рядка в масив

// const fruits = "banana, apple, mango, lemon";
// const fruitsArr = fruits.split(", ");
// console.log(fruitsArr);

//* .slice(start, end) - повертає новий масив з копією елементів від start до end не включно масиву на якому він викликається. [start, end)

// const arr = [1, 2, 3];
// const arrCopy = arr.slice(); // копія від початку до кінця

// arr[0] = 111;

// console.log(arr);
// console.log(arrCopy);

// const fruitsArr = ['banana', 'apple', 'mango', 'lemon'];

// const someFruits = fruitsArr.slice(1, 3);
// const someFruits = fruitsArr.slice(1); // коли не передається енд, копія відбувається до кінця масиву
// const someFruits = fruitsArr.slice(1, -1);
// console.log(someFruits);

//* .concat(...arrs) - повертає новий масив у якому зілʼє всі масиви, які ви передаєте в якості аргументів в один

// const fruitsArr = ['banana', 'apple', 'mango', 'lemon'];

// const moreFruits = fruitsArr.concat(['melon', 'watermelon'], ['lime', 'avocado'], ['orange', 'papaya']);

// console.log(moreFruits);

//* indexOf(value) - повертає індекс першого входження яке буде рівним значенню value, якщо такого елементу не знайшлось - повертається -1

// const fruitsArr = ['banana', 'apple', 'mango', 'lemon'];

// console.log('apple:', fruitsArr.indexOf('apple')); // 1
// console.log('melon:', fruitsArr.indexOf('melon')); // -1

//* .push(value) - додає значення value у кінець масиву

const fruitsArr = ['banana', 'apple', 'mango', 'lemon'];
console.log(fruitsArr);
fruitsArr.push('melon', 'papaya', 'orange');
console.log(fruitsArr);

//* .pop() - видаляє ОДНЕ значення з кінця масиву та повертає його

console.log(fruitsArr.pop());

console.log(fruitsArr);

//* .includes(value) - повертає true якщо значення value зустрічається у масиві і повертає false, якщо значення value у масиві немає

console.log(fruitsArr.includes('apple'));
console.log(fruitsArr.includes('orange'));
