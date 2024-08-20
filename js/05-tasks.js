/*
? Напиши скрипт, який для об'єкта user, послідовно:
? - додає поле mood зі значенням 'happy'
? - замінює значення hobby на 'skydiving'
? - замінює значення premium на false
? - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
*/

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = !user.premium;

// user.premium = !true -> false;
// !true -> false
// !false -> true

// console.log(user);

// const keys = Object.keys(user);

// for(const key of keys){
//     console.log(`${key}: ${user[key]}`);
// }

//? Зведіть у квадрат кожен елемент цього об'єкта.

// const obj = { x: 2, y: 3, z: 4, a: 9 };

// for (const key in obj) {
//   //   obj[key] = obj[key] ** 2;
//   obj[key] **= 2;
// }

// console.log(obj);

/*
? У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
? підсумовування всіх зарплат і збережіть результат у змінній sum.
? Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
*/

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const salariesValues = Object.values(salaries);

// console.log(salariesValues);

// let sum = 0;

// for (const salary of salariesValues) {
//   sum += salary;
// }

// console.log('SUM:', sum);

//? Дано об'єкт, що представляє користувача з кількома властивостями. Напиши функцію, яка поверне кількість властивостей у цьому об'єкті.

const user = {
  firstName: 'John',
  lastName: 'Dou',
  age: 50,
};

console.log(user);

console.log('KEYS AMOUNT:', Object.keys(user).length);

//? Напиши функцію, яка перевіряє, чи є об'єкт порожнім (не містить жодної властивості).

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

console.log(isEmptyObject({})); // true
console.log(isEmptyObject({ username: 'alex' })); // false
