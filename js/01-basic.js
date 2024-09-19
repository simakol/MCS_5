/*
 * Деструктуризація об'єкта
 */

/*
? Напишіть деструктуруюче присвоєння, яке:
? властивість firstName присвоє до змінної firstName.
? властивість lastName присвоє до змінної lastName.
? властивість age присвоє до змінної userAge.
? властивість isAdmin присвоє до змінної isAdmin (false, якщо немає такої властивості)
*/

// const user = {
//   firstName: 'John',
//   lastName: 'Reese',
//   age: 30,
// };

// const { firstName, lastName, age: userAge, isAdmin = false } = user;
// const firstName = user.firstName;
// const lastName = user.lastName;
// const userAge = user.age;
// const isAdmin = user.isAdmin || false;

// console.log(user);
// console.log(firstName);
// console.log(lastName);
// console.log(userAge);
// console.log(isAdmin);
// console.log(user.firstName);
// console.log(user.lastName);
// console.log(user.age);

/*
 * Глибока деструктуризація об'єкта
 */

//? Без глибокої деструктуризації
// const user = {
//   username: 'Jacob name',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// const { username, skills } = user;
// const {html, css, js} = skills

// console.log('username:', username);
// console.log('skills:', skills);
// console.log('html:', html);
// console.log('css:', css);
// console.log('js:', js);

//? З глибокою деструктуризацією
// const user = {
//   username: 'Jacob name',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// const {
//   username,
//   skills: { html, css, js },
// } = user;

// const username = user.username
// const html = user.skills.html
// const css = user.skills.css
// const js = user.skills.js

// console.log('username:', username);
// console.log('html:', html);
// console.log('css:', css);
// console.log('js:', js);

/*
 * Деструктуризація масива
 */

// const fullNames = ['Herbert Todd', 'Belle Soto', 'Roger Marsh', 'Ethan Lindsey'];

// console.log(fullNames);

// const [fullName1, , fullName3] = fullNames;
// const fullName1 = fullNames[0];
// const fullName3 = fullNames[2];

// console.log('fullName1:', fullName1);
// console.log('fullName3:', fullName3);

//* Операція rest при деструктуризації
const user = {
  firstName: 'John',
  lastName: 'Reese',
  age: 30,
  isAdmin: true,
};

// const firstName = user.firstName;
// const lastName = user.lastName;
// const otherProps = { age: 30, isAdmin: true };

const { firstName, lastName, ...otherProps } = user;

console.log(user);

console.log('firstName:', firstName);
console.log('lastName:', lastName);
console.log('otherProps:', otherProps);
