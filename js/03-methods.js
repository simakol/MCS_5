/*
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */

/*
всі ці методи потрібні для привʼязки нового контексту до вашої функції

* call - викликає фукнцію на місці з новим контекстом (аргумети передаються через кому)

* apply - викликає фукнцію на місці з новим контекстом (аргумети передаються у вигляді масиву)

* bind - повертає копію фукнції з новим контекстом, щоб можна було викликати її пізніше (наприклад, коли йде передача колбек фукнції). (аргумети передаються через кому)
*/

//* Функції це об'єкти зі своїми властивостями та методами
// const greet = function () {
//   console.log('Hello!');
// };

// greet.test = 10;

// console.dir(greet);

// console.log(greet.test);

//? Викличте функцію showFullName у контексті об'єкта user

const showFullName = function (message, a, b, c) {
  console.log(`${message} ${this.firstName} ${this.lastName}`);
  console.log(a, b, c);
};

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// першим аргументом передається обʼєкт який повинен стати this'ом всередині фукнції яка викликається, тобто ви вручну задаєте контекст виклику.
// showFullName.call(user, 'Hello', 1, 2, 3);
// showFullName.apply(user, ['Hello', 1, 2, 3]);

//? Викличте функцію showFullName у контексті об'єкта anotherUser

// const anotherUser = {
//   firstName: 'Marvin',
//   lastName: 'Jordan',
//   age: 30,
// };

// showFullName.call(anotherUser, 'Hi', 10, 20, 30);

//? Викличте функцію changeColor в контексті різних обʼєктів

// const changeColor = function (color) {
//   console.log('changeColor -> this', this);

//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// const sweater = {
//   color: 'green',
// };

// console.log('hat', hat);
// console.log('sweater', sweater);

// changeColor.call(hat, 'red');

// console.log('hat', hat);

// changeColor.call(sweater, 'grey');

// console.log('sweater', sweater);

//? Створіть копію функції changeColor з привʼязаним контекстом

// const changeColor = function (color) {
//   console.log('changeColor -> this', this);

//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// // повернулась копія функції changeColor з привʼязаним контекстом на обʼєкт hat і ця копія зберіглась в константу changeHatColor
// const changeHatColor = changeColor.bind(hat);

// changeHatColor('yellow');

// console.log(hat);

// changeHatColor('red');

// console.log(hat);

//? Передайте метод обʼєкта в якості callback функції

// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     console.log('This --->', this);
//   },

//   showName() {
//     console.log(this.name);
//   },
// };

// const someFunction = callback => {
//   callback();
// };

// someFunction(user.showName.bind(user)); 
// в якості колбеку ви вже будете передавати копію методу showName у якому this буде привʼязано до обʼєкту user
