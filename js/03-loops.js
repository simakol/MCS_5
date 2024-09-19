/*
 * Деструктуризація об'єкта в циклі
 */

const users = [
  {
    username: 'Kate',
    skills: {
      html: true,
      css: false,
    },
  },
  {
    username: 'Alex',
    skills: {
      html: true,
      css: true,
    },
  },
  {
    username: 'Mark',
    skills: {
      html: false,
      css: false,
    },
  },
];

console.log(users);

/*
 ? Без деструктуризації
 */

for (const user of users) {
  console.log(user.username);
}

/*
 ? З деструктуризацією
 */

for (const {
  username,
  skills: { html, css },
} of users) {
  console.log(username);
  console.log(html, css);
}

// for (const user of users) {
//   const { username,  skills: { html, css }} = user;
//   console.log(username);
// }
