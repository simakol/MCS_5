/*
? Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт 
? із властивістю fullName, замість firstName та lastName.
*/

// function transformUsername({ firstName, lastName, ...otherProps }) {
//   // console.log(firstName);
//   // console.log(lastName);
//   // console.log(otherProps);
//   otherProps.fullName = `${firstName} ${lastName}`;
//   return otherProps;
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//   })
// );

/*
{
    id: 1,
    fullName: 'Jacob Mercer',
    email: 'j.mercer@mail.com',
    friendCount: 40,
}
*/

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   })
// );

// const arr = [1, 2, 3, 4, 5];

// console.log(arr);

// arr[2] = 333;

// const obj = {
//   id: 2,
//   firstName: 'Adrian',
//   lastName: 'Cross',
//   email: 'a.cross@hotmail.com',
//   friendCount: 20,
// };

// console.log(JSON.stringify(obj));

// obj.id = 4387384574389;

//! ============

// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemons', price: 70, quantity: 4 },
// ];

// for of
// let sum = 0;
// for (const { price, quantity } of cart) {
//   console.log(price, quantity);
//   sum += price * quantity;
// }

// console.log(sum);

// reduce
// const totalSum = cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);

// console.log(totalSum);

//! ============

// const users = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 35 },
//   { name: 'David', age: 28 },
// ];

// function findUsersOlderThan(users, ageLimit) {
//   // filter
//   // return users.filter(({age}) => age > ageLimit)

//   // for of
//   // const result = [];
//   // for (const { age, ...otherProps } of users) {
//   //   if (age > ageLimit) {
//   //     result.push({ age, ...otherProps });
//   //   }
//   // }
//   // return result;

//   // for of 2
//   const result = [];
//   for (const user of users) {
//     const { age } = user;
//     if (age > ageLimit) {
//       // result.push(user);
//       result.push({ ...user }); // пушимо в масив результату копію обʼєкту юзер
//     }
//   }
//   return result;
// }

// console.log(findUsersOlderThan(users, 28)); // [{ name: 'Charlie', age: 35 }, { name: 'Bob', age: 30 }]

//! =========

// const users = [
//   { name: 'Alice', points: 50 },
//   { name: 'Bob', points: 70 },
//   { name: 'Charlie', points: 60 },
//   { name: 'David', points: 90 },
// ];

// function sortUsersByPoints(users) {
//   //* v1
//   // return users.toSorted((a, b) => b.points - a.points);
//   //* v2
//   return users.toSorted(({ points: pointsA }, { points: pointsB }) => pointsB - pointsA);
// }

// console.log(sortUsersByPoints(users));

//! =========

const products = [
  { name: 'Apple', category: 'Fruits' },
  { name: 'Banana', category: 'Fruits' },
  { name: 'Carrot', category: 'Vegetables' },
  { name: 'Broccoli', category: 'Vegetables' },
  { name: 'Chicken', category: 'Meat' },
];

/*

1. створюємо пустий обʼєкт (який будемо наповнювати)
2. перебираємо масив продуктів (витягуємо назву і категорію)
3. робимо перевірку, якщо в обʼєкті(крок 1) немає такої категорії, то створюємо її і задаємо в якості початкового значення пустий масив
4. додаємо поточнй товар (по імені) в поточну категорію, просто пуш в масив

*/

// function groupProductsByCategory(products) {
//   const categoryObj = {};

//   for (const { name, category } of products) {
//     // перевірка, якщо такої категорії в обʼєкті не існує, то ми її створимо, наприклад
//     /*
//     categoryObj = {}

//     > if(!categoryObj["Fruits"])
//     > categoryObj["Fruits"] = undefined
//     > !undefined = true
//     > categoryObj["Fruits"] = [];

//     categoryObj = {
//     "Fruits": []
//     }
//     */

//     if (!categoryObj[category]) {
//       categoryObj[category] = [];
//     }

//     categoryObj[category].push(name);
//   }

//   return categoryObj;
// }

function groupProductsByCategory(products) {
  return products.reduce((categoryObj, { name, category }) => {
    if (!categoryObj[category]) {
      categoryObj[category] = [];
    }

    categoryObj[category].push(name);
    return categoryObj;
  }, {});
}

console.log(groupProductsByCategory(products));

// {
//   Fruits: ['Apple', 'Banana'],
//   Vegetables: ['Carrot', 'Broccoli'],
//   Meat: ['Chicken']
// }
