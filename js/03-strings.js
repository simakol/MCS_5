/*
 * Рядки
 *
 * - Конкатенація рядків
 * - Шаблонні рядки
 * - Довжина рядка
 * - Індексація елементів
 * - Незмінність рядків
 */

// рядки це read only значення, тому не можна звернутись до окремого символа і перезаписаи його іншим значенням. Але символи можна читати за допомогою індексів. Індекси починаються з 0 і у кожного символа є свій порядковий номер (індекс).

// const str = "Hello world"
// console.log(str[0]);

// str[6] = "l"

// console.log(str[6]);

//? Обʼєднайте два рядки в один і виведіть до консолі.

// const firstName = "Chelsy";
// const lastName = "Emerald";
// v1 - оператор конкатенації рядків (+) concat
// const fullName = firstName + " " + lastName
// v2 - шаблонні рядки та інтерполяція
// const fullName = `${firstName} ${lastName}`;
// console.log(fullName);

//? Підставте значення зміної quantity до рядка orderMsg, використоуючи шаблоні рядки.

const quantity = 15;
const orderMsg = `You ordered ${quantity} bots`;
// console.log(orderMsg);

//? Дізнайтесь довжину рядка message. Виведіть перший та останій символ рядка message.

// const message = "This string is 28 chars long";
// console.log(message.length);
// console.log(message[0]);
// console.log(message[message.length - 1]);

/*
  ? Запросіть у користувача ім'я та прізвище і виведіть у консоль повідомлення:
  ? Hello <імʼя> <прізвище>, you are logged in.
*/

const firstName = prompt("Enter your first name");
const lastName = prompt("Enter your last name");

const message = `Hello ${firstName} ${lastName}, you are logged in.`;

console.log(message);
