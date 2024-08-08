/*
? У змінній minutes лежить число від 0 до 59.
? Визначте, в яку чверть години потрапляє це число (у першу, другу, третю чи четверту).
? [0 до 15) - перша чверть години
? [15 до 30) - друга чверть години
? [30 до 45) - третя чверть години
? [45 до 60) - четверта чверть години
*/

const minutes = 55;

//* v1
// const quarter = Math.floor(minutes / 15) + 1;

// console.log(`Quarter: ${quarter}`);

//* v2

// if (minutes >= 0 && minutes < 15) {
//   console.log('Quarter: 1');
// } else if (minutes < 30) {
//   console.log('Quarter: 2');
// } else if (minutes < 45) {
//   console.log('Quarter: 3');
// } else if (minutes < 60) {
//   console.log('Quarter: 4');
// } else {
//   console.log('Incorrect value');
// }

/*
?  Перепишіть код за допомогою однієї конструкції switch:
*/

// const number = Number(prompt('Введіть число між 0 та 3'));

// if (number === 0) {
//   console.log('Ви ввели число 0');
// } else if (number === 1) {
//   console.log('Ви ввели число 1');
// } else if (number === 2 || number === 3) {
//   console.log('Ви ввели число 2, а може й 3');
// } else {
//   console.log('Ви ввели якесь інше число');
// }

// switch (number) {
//   case 0: {
//     console.log('Ви ввели число 0');
//     break;
//   }
//   case 1: {
//     console.log('Ви ввели число 1');
//     break;
//   }
//   case 2:
//   case 3: {
//     console.log('Ви ввели число 2, а може й 3');
//     break;
//   }

//   default: {
//     console.log('Ви ввели якесь інше число');
//   }
// }

/*
? Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
? Для цього, користувач має бути:
? - другом
? - онлайн
? - без режима не турбувати
 */

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// let canOpenChat = isOnline && isFriend && !isDnd;

// console.log('Чи можна відкрити чат? ', canOpenChat);

/*
? Напишіть програму, яка виводить через console.log усі числа від 1 до 100, з трьома винятками.
? Для чисел, що націло діляться на 3, вона повинна виводити 'Fizz',
? а для чисел, що діляться на 5 – 'Buzz'.
? Для чисел які кратні 3 та 5 = 'FizzBuzz'
*/

// for (let i = 1; i <= 100; i += 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`${i} FizzBuzz`);
//   } else if (i % 5 === 0) {
//     console.log(`${i} Buzz`);
//   } else if (i % 3 === 0) {
//     console.log(`${i} Fizz`);
//   } else {
//     console.log(i);
//   }
// }
