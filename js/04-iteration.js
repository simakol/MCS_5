/*
 * Ітерація по масиву
 *
 * - Ітерація по масиву циклом for
 * - Цикл for...of
 * - Різниця у використанні for и for...of
 */

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

console.log(friends);

//? Через цикл for

for (let i = 0; i < friends.length; i += 1) {
  console.log(`${i}: ${friends[i]}`);
  /*
    friends[0]
    friends[1]
    friends[2]
    friends[3]
  */
}

console.log('======');
//? Через цикл for...of - перебирає значення масиву напряму

for (const friend of friends) {
  console.log(friend);
}

/*
? Напиши скрипт для перебора масиву fruits.
? Для кожного елемента масиву виведи в консоль рядок
? у форматі номер_елемента: значення_елемента.
? Нумерація елементів повинна починатися з 1.
*/

const fruits = ['banana', 'apple', 'mango', 'lemon'];

for (let i = 0; i < fruits.length; i += 1) {
  console.log(`${i + 1}: ${fruits[i]}`);
}
