/*
 * Контекст виконання функції
 *
 * - Ключове слово this
 * - Глобальний контекст
 * - Контекст методу об'єкта
 */


/*
* Правила визначення this

1. Коли фукнція викликається без контексту (коли немає обʼєкту, який викликає цю фукнцію) то this буде або undefined (use strict) або буде глобальним обʼєктом Window (звичайний режим запуску)

2. this завжди посилається на обʼєкт, який викликає метод (фукнцію). Тому при визначенні значення контексту завжди дивіться на місце де йде виклик вашого методу (обʼєкт стоїть зліва від крапки obj.func())

3. під час передачі методу в якості колбек фукнції контекст буде втрачено (правило 1). Тому для вирішення цієї проблеми втрати контексту ми будемо користуватись методом .bind();

*/

//* Розглянемо як this поводиться в методах
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

// user.showThis();
// user.showName();

//* Розглянемо як this поводиться у звичайних функціях.
//? Function expression
// const greet = function () {
//   console.log('This --->', this);
// };

// greet();

//? Function declaration
// function greet() {
//   console.log('This --->', this);
// }

// greet();

//* Присвоєння функції як методу об'єкта
// const showThis = function () {
//   console.log('This --->', this);
// };

// showThis();

// const showName = function () {
//   console.log(`Hello ${this.name}`);
// };

// showName();

// const user = {
//   name: 'Luis',
//   age: 30,

//   showUserThis: showThis,
//   showUserName: showName,
// };

// user.showUserThis();
// user.showUserName();

// const anotherUser = {
//   name: 'Etta Burgess',
//   age: 40,

//   showAnotherUserThis: showThis,
// };

// anotherUser.showAnotherUserThis();

//* Виклик методу об'єкта без контексту
// const user = {
//   name: 'Luis',
//   age: 30,

//   showUserThis: function () {
//     console.log('This --->', this);
//   },

//   showUserName: function () {
//     console.log(this.name);
//   },
// };

// user.showUserThis();
// user.showUserName();

// const showThis = user.showUserThis;

// showThis();

// const showName = user.showUserName;

// showName();

//* This в callback функціях
// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis: function () {
//     console.log('This --->', this);
//   },

//   showName: function () {
//     console.log(this.name);
//   },
// };

// const someFunction = callback => {
//   // callback = user.showName;

//   callback();
// };

// someFunction(user.showName);

/*
 * This у стрілочних функціях. Стрілочні функції не мають свого this,
 * this в стрілках завжди посилається на батьківський this.
 */

// const user = {
//   name: 'Luis',
//   age: 30,

//   changeAge: newAge => {
//     console.log(`this ---->`, this);

//     this.age = newAge;
//   },
// };

// user.changeAge(40);
