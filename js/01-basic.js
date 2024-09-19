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

// console.log(user);

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

// console.log('username:', username);
// console.log('html:', html);
// console.log('css:', css);
// console.log('js:', js);

/*
 * Деструктуризація масива
 */

// const fullNames = ['Herbert Todd', 'Belle Soto', 'Roger Marsh', 'Ethan Lindsey'];

// console.log(fullNames);

// console.log('fullName1:', fullName1);
// console.log('fullName3:', fullName3);

//* Операція rest при деструктуризації
// const user = {
//   firstName: 'John',
//   lastName: 'Reese',
//   age: 30,
//   isAdmin: true,
// };

// console.log(user);

// console.log('firstName:', firstName);
// console.log('lastName:', lastName);
// console.log('otherProps:', otherProps);
