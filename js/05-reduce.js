/*
 * Метод reduce
 *
 * - Поелементно перебирає оригінальний масив
 * - Значення, що повертається, залежить від розробника
 */

const numbers = [5, 10, 15];
// let total = 0;

// for (const el of numbers) {
//   total += el;
// }

//.reduce(callback, initalAcc)
// callback(acc, el, i, arr) - колбек який викликається на кожному елементі масиву. acc - це зовнішня змінна яка знаходиться за межами циклу для взаємодії (наприклад, накопичення значень)
// initalAcc - початкове значення для параметру acc

const total = numbers.reduce((total, el) => total + el, 0);

/*
numbers.reduce((total, el) => total = el, 0);

1. 
(total = 0, el = 5) => total + el -> 5

2. 
(total = 5, el = 10) => total + el -> 5 + 10 -> 15

3. 
(total = 15, el = 15) => total + el -> 15 + 15 -> 30

*/

// console.log(numbers);
// console.log(total);

/*
? Рахуємо загальну зарплату
 */

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const salariesValues = Object.values(salary); // [100, 50, 150]

// const salariesSum = salariesValues.reduce((total, salary) => total + salary, 0);

// console.log(salariesSum);

/*
? Рахуємо загальну кількість годин
 */
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

const totalTimePlayed = players.reduce((total, player) => total + player.timePlayed, 0);

// console.log(totalTimePlayed);

//! with inital
/*
? 1 Iter
* > total = 0
* > player =  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false }

players.reduce((total = 0, player = {1}) => total + player.timePlayed, 0);

* > total + player.timePlayed -> 0 + 310 = 310

? 2 Iter
* > total = 310
* > player =   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true }

players.reduce((total = 0, player = {1}) => total + player.timePlayed, 0);

* > total + player.timePlayed -> 310 + 470 = 780

...

*/

//! without inital
/*
players.reduce((total = 0, player = {1}) => total + player.timePlayed);

Коли ми не передаємо початкове значення для акумулятора, то ним стає перший елемент масиву (в нашому випадку це обʼєкт). Також пропускається 1ша ітерація і ви починаєте відразу з 2го елементу масиву

? 1 Iter
* > total =  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false }
* > player = { id: 'player-2', name: 'Poly', timePlayed: 470, online: true }

* > total + player.timePlayed -> 
* > String({ id: 'player-2', name: 'Poly', timePlayed: 470, online: true }) + 470 -> "[object Object]" + 470 -> "[object Object]" + String(470) -> "[object Object]470"

? 2 Iter
* > total = "[object Object]470"
* > player =  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true }


* > total + player.timePlayed -> "[object Object]470" + 230 -> "[object Object]470230"

...

in the end [object Object]47023015080
*/

/*
? Рахуємо загальну суму товарів кошика
 */
// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemons', price: 70, quantity: 4 },
// ];

// const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

// console.log(totalAmount);
