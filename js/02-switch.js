/*
 * Оператор switch
 */

// switch case це просто суворе порівнянн (===) вашого аргументу (username) з кожним кейсом, тобто це порівняння username === "Mango"

// const username = 'Mango';

// switch (username) {
//   case 'Mango': {
//     console.log('username == Mango ==');
//     break;
//   }
//   case 'Rob': {
//     console.log('username == Rob ==');
//     break;
//   }
//   case 'Boby': {
//     console.log('username == Boby ==');
//     break;
//   }
//   case 'Clay': {
//     console.log('username == Clay ==');
//     break;
//   }
//   default: {
//     console.log('No username');
//   }
// }

// if (username === 'Mango') {
//   console.log('username == Mango ==');
// } else if (username === 'Rob') {
//   console.log('username == Rob ==');
// } else if (username === 'Boby') {
//   console.log('username == Boby ==');
// } else if (username === 'Clay') {
//   console.log('username == Clay ==');
// } else {
//   console.log('No username');
// }

/*
? Напиши скрипт вибору опції доставки товара.
? Опція зберігається в змінній option: 1 - самовивіз, 2 - кур'єр, 3 - пошта
?
? В змінну message потрібно записати повідомлення в залежності від опції.
? - 'Ви можете забрати товар завтра з 12:00 в нашому офісі'
? - 'Кур'єр доставить замовлення завтра з 9:00 до 18:00'
? - 'Посилку буде відправлено сьогодні'
? - 'Вам передзвонить менеджер'
 */

const option = Number(prompt("1 - самовивіз, 2 - кур'єр, 3 - пошта"));
let message = '';

switch (option) {
  case 1: {
    message = 'Ви можете забрати товар завтра з 12:00 в нашому офісі';
    break;
  }
  case 2: {
    message = "Кур'єр доставить замовлення завтра з 9:00 до 18:00";
    break;
  }
  case 3: {
    message = 'Посилку буде відправлено сьогодні';
    break;
  }
  default: {
    message = 'Вам передзвонить менеджер';
  }
}

console.log(message);
