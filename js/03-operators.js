/*
 * Логічні оператори
 *
 * - Перетворення типів: логічне
 * - Оператор &&
 * - Оператор ||
 * - Оператор !
 */

//* True: всі числа, крім 0 | будь-який рядок, у якому є хоча б один символ, true

//! False: 0, NaN, пустий рядок, null, undefined, false

/*
результатом використання логічного або і логічного і завжди буде один з перелічених операндів (третього не дано).

* - Логічне АБО (||): повертає перше значення яке при конвертації в булевий тип поверне вам true (якщо таких значень не буде, тобто, всі будуть false, то просто повертається останнє зі списку)

* - Логічне І (&&): повертає перше значення яке при конвертації в булевий тип поверне вам false (якщо таких значень не буде, тобто, всі будуть true, то просто повертається останнє зі списку)

* - Логічне НІ (!): перевертає логічний тип на зворотній, тобто якщо було true - робить false, якщо було false - зробить true. Результатом цієї логічної операції завжди буде буль.

*/

// console.log(true || false);
// console.log(0 || "" || -3 || "hello");
// console.log(0 || "" || null || false || undefined);

// console.log(true && false);
// console.log(3.5 && " " && 0 && null && "");
// console.log(3.5 && " " && "hello" && 7);

// console.log(!true);
// console.log(!false);

// console.log(!0); // !Boolean(0) -> !false -> true
// console.log(!" "); // !Boolean(" ") -> !true -> false

/*
 ? --------------------------------
 */

// console.log(Boolean(true)); // true
// console.log(Boolean(false)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean(3.14)); // true
// console.log(Boolean(-10)); // true
// console.log(Boolean('')); // false
// console.log(Boolean(' ')); // true
// console.log(Boolean('hello')); // true
// console.log(Boolean('false')); // true

/*
 ? --------------------------------
 */

// console.log(5 && 4); // 4
// console.log(5 && 'mango'); // 'mango'
// console.log(0 && 'mango'); // 0

// const userNumber = 15;

// if (userNumber >= 10 && userNumber < 20) {
//   console.log('Done!');
// }

/*
 ? --------------------------------
 */

// console.log(null || 5); // 5
// console.log(0 || null); // null
// console.log(5 || null); // 5

// const firstName = prompt('Введіть імʼя') || 'anonymus';

// null || 'anonymus' -> false || true -> 'anonymus'
// '' || 'anonymus' -> false || true -> 'anonymus'
// 'alex' || 'anonymus' -> true || true -> 'alex'

// console.log(firstName);

/*
 ? --------------------------------
 */

// console.log(!5); // !true -> false
// console.log(!false); // true

/*
 ? --------------------------------
 */

console.log(true && 3); // 3

console.log(false && 3); // false

console.log(true && 4 && 'kiwi'); // kiwi

console.log(true && 0 && 'kiwi'); // 0

console.log(true || 3); // true

console.log(true || 3 || 4); // true

console.log(true || false || 7); // true

console.log(null || 2 || undefined); // 2

console.log(null || (2 && 3) || 4); // 3

// (2 && 3) -> 3
// null || 3 || 4 -> 3
