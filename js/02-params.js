/*
 * Деструктуризація об'єкта в параметрах функції
 */

const user = {
  username: 'Jacob',
  skills: {
    html: true,
    css: false,
    js: true,
  },
};

//? Без деструктуризації
// function getUserName(obj) {
//   console.log(
//     `Hello my name is ${obj.username}, I know html - ${obj.skills.html}, css - ${obj.skills.css} and js -${obj.skills.js}`
//   );
// }

// getUserName(user);

//? З деструктуризацією
// function getUserName(obj) {

//   console.log(`Hello my name is ${username}, I know html - ${html}, css - ${css} and js -${js}`);
// }

// getUserName(user);

//? Деструктуризація параметрів функції
// function getUserName(obj) {
//   console.log(`Hello my name is ${username}, I know html - ${html}, css - ${css} and js -${js}`);
// }

// getUserName(user);
