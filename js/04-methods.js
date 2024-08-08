/*
 * Методи рядків
 *
 *  - slice
 *  - toLowerCase/toUpperCase
 *  - includes
 *  - startsWith/endsWith
 *  - indexOf
 *  - trim
 */

//* slice(start, end) - повертає копію підрядка починаючи з індексу start і закінчуючи індексом end (не включно) [start, end);

// const str = 'hello';

// console.log(str.slice(2, 4));
// console.log("Hello world".slice(6));
// console.log("Hello world".slice(-5));
// console.log("Hello world".slice(6, -2));

//* toLowerCase/toUpperCase - приводить всі символи рядку у верхній або у нижній регістр

// console.log("HeLLo WoRlD".toLowerCase());
// console.log("HeLLo WoRlD".toUpperCase());

//* includes(value, position) -> повертає true якщо підрядок value є в рядку, і false якщо підрядку value в рядку немає. position можна передати якщо ви знаєте з якої позиції рядку ви почнете пошук підрядку. position це індекс початку пошуку

// console.log("hello world".includes("world"));
// console.log("hello world".includes("q"));
// console.log("hello world".includes("r", 9));

//* startsWith/endsWith(value, position) - повертають тру якщо рядок починається або закінчується підрядком value. Якщо підрядок value не є початком або кінцем рядку - то повертається false;

// const url = 'https://example.ua';

// const isSiteSecure = url.startsWith('https');
// const isSiteCom = url.endsWith('com');

// console.log(`захищений сайт: ${isSiteSecure}`);
// console.log(`сайт з доменом com: ${isSiteCom}`);

//* indexOf(value) - повертає індекс підрядку value в рядку. Якщо такого підрядку немає - повертає -1

// const str = 'hello world!';
// const startIndex = str.indexOf('world');

// console.log(startIndex);

// console.log(str.slice(startIndex, -1));

//* trim - видаляє непотрібні пробіли на початку і в кінці рядку для форматування даних

// const fullName = '   Harry Potter   ';
// const result = fullName.trim();

// console.log('fullName:', fullName);
// console.log('result:', result);

/*
? Нормалізація рядка
?
? Напишіть код, який запитуватиме:
? 'Яка «офіційна» назва JavaScript?'
? Якщо користувач вводить ECMAScript,
? то показати: «Вірно!», інакше – відобразити: «Не знаєте? ECMAScript!»
*/

// const correctAnswer = 'ECMAScript';
// const userAnswer = prompt('Яка «офіційна» назва JavaScript?')
//   .trim()
//   .toLowerCase();

// if (correctAnswer.toLowerCase() === userAnswer) {
//   console.log('Вірно');
// } else {
//   console.log('Не знаєте? ECMAScript!');
// }

/*
? Форматування посилання (endsWith)
?
? Напиши скрипт який перевіряє чи закінчується значення
?  змінної link символом /. Якщо ні, додай до кінця
?  значення link цей символ.
? Використовуй конструкцію if...else.
*/

// let link = 'https://my-site.com/about';

// if (!link.endsWith('/')) {
//   link += '/';
// }

// console.log(link);

/*
? Форматування посилання (includes та логічне «І»)
? Напиши скрипт який перевіряє чи закінчується значення
? змінної link символом /. Якщо ні, додай до кінця
? значення link цей символ, але тільки в тому випадку,
? якщо в link є підрядок "my-site".
? Використовуй конструкцію if...else або тернарний оператор.
*/

let link = 'https://somesite.com/about';

if (!link.endsWith('/') && link.includes('my-site')) {
  link += '/';
}

console.log(link);
