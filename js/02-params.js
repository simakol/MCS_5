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
// function displayUserMsg(obj) {
//   console.log(
//     `Hello my name is ${obj.username}, I know html - ${obj.skills.html}, css - ${obj.skills.css} and js -${obj.skills.js}`
//   );
// }

// displayUserMsg(user);

//? З деструктуризацією
// function displayUserMsg(obj) {
//   const {
//     username,
//     skills: { html, css, js },
//   } = obj;

//   console.log(`Hello my name is ${username}, I know html - ${html}, css - ${css} and js -${js}`);
// }

// displayUserMsg(user);

//? Деструктуризація параметрів функції
function displayUserMsg({ username, skills: { html, css, js } }) {
  console.log(`Hello my name is ${username}, I know html - ${html}, css - ${css} and js -${js}`);
}

displayUserMsg(user);
