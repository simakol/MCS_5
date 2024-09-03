//? Що буде виведено в консоль

// function foo() {
//   console.log(this); // undefined
// }

// foo();

//? Що буде виведено в консоль

// const book = {
//   title: 'React for beginners',

//   showThis() {
//     console.log('showThis -> this', this);
//   },

//   showTitle() {
//     console.log('showTitle -> this.title', this.title);
//   },
// };

// book.showThis(); // book

// const outerShowThis = book.showThis;

// outerShowThis(); // undefined

// const outerShowTitle = book.showTitle;

// outerShowTitle(); // err

//? Що буде виведено в консоль

// let user = {
//   name: 'Джон',

//   go() {
//     console.log(this);
//   },
// };

// const goFn = user.go;

// goFn(); // undefined

/*
? Тут функція makeUser повертає об'єкт.
? Яким буде результат при зверненні до об'єкта ref? Чому?
*/

// const makeUser = function () {
//   // this = undefined
//   return {
//     name: 'Джон',
//     ref: this, // this посилається на те, в контексті чого була викликана ФУНКЦІЯ (не дивлячись на те, що this знаходиться всередині обʼєкту, він не має нічого спільного з ним, бо this стосується виключно фукнцій)
//   };
// };

// const user = makeUser(); // this = undefined

// console.log(user.ref); // undefined
// console.log(user.ref.name); // err

//? Що буде виведено в консоль

// function makeUser() {
//   return {
//     name: 'Джон',

//     ref() {
//       return this;
//     },
//   };
// }

// const user = makeUser();
/*

const user = {
  name: 'Джон',
  ref() {
    return this;
   },
}
*/

// console.log(user);
// console.log(user.ref());
// console.log(user.ref().name);

/*
? Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і
? розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та
? кількістю з властивості stones.
 */

// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],

//   calcTotalPrice(stoneName) {
//     const currentStone = this.stones.find(
//       stone => stone.name.toLowerCase() === stoneName.toLowerCase()
//     );

//     if (!currentStone) {
//       console.error(`${stoneName} не знайдено!`);
//       return 0;
//     }

//     return currentStone.price * currentStone.quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600
// console.log(chopShop.calcTotalPrice('Aconit')); // Aconit не знайдено!
