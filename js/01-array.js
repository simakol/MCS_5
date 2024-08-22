/*
 * Масив об'єктів
 *
 * - Перебір масива
 * - Пошук об'єкта за значенням властивості
 */

const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: true },
  { name: 'Ajax', online: false },
];

console.table(friends);

/*
? Пошук друга за іменем
*/
const findFriendByName = function (allFriends, friendName) {
  for (const friend of allFriends) {
    if (friend.name.toLowerCase() === friendName.toLowerCase()) {
      return friend;
    }
  }
  return `Друга з іменем ${friendName} не знайдено!`;
};

// console.log(findFriendByName(friends, 'poly')); // { name: 'Poly', online: true }
// console.log(findFriendByName(friends, 'Chelsy')); // Друга з іменем Chelsy не знайдено

/*
? Отримуємо імена всіх друзів
*/
const getAllNames = function (allFriends) {
  const friends = [];

  //   for (const { name } of allFriends) {
  //     friends.push(name);
  //   }

  for (const friend of allFriends) {
    friends.push(friend.name);
  }

  return friends;

  //   return allFriends.map(({ name }) => name);
};

// console.log(getAllNames(friends)); // ['Mango', 'Kiwi', 'Poly', 'Ajax']

/*
? Отримуємо імена тільки тих друзів, які зараз онлайн
*/
const getOnlineFriends = function (allFriends) {
  const friends = [];

  for (const friend of allFriends) {
    if (friend.online) {
      friends.push(friend.name);
    }
  }

  return friends;
};

// console.log(getOnlineFriends(friends));

/*
? Напишіть функцію calcTotalPrice(stones, stoneName),
? яка приймає масив об'єктів та рядок з назвою каменю.
? Функція рахує і повертає загальну вартість каміння з
? таким ім'ям, ціною та кількістю з об'єкта
*/

const stones = [
  { name: 'Смарагд', price: 1300, quantity: 4 },
  { name: 'Діамант', price: 2700, quantity: 3 },
  { name: 'Сапфір', price: 400, quantity: 7 },
  { name: 'Аконіт', price: 200, quantity: 2 },
];

console.log(stones);

const calcTotalPrice = function (allStones, stoneName) {
  for (const stone of allStones) {
    if (stone.name.toLowerCase() === stoneName.toLowerCase()) {
      return stone.price * stone.quantity;
    }
  }

  return 0;
};

console.log(calcTotalPrice(stones, 'Діамант'));
console.log(calcTotalPrice(stones, 'Смарагд'));
console.log(calcTotalPrice(stones, 'Аметист'));
