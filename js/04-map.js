/*
 * Array.prototype.map()
 * - Поелементо перебирає оригінальний масив
 * - Не змінює оригінальний масив
 * - Повертає новий масив такої ж довжини
 */

/*
? Переберіть масив numbers і отримайте новий масив в якому кожен елемент помножений на 2.
*/
//? Через forEach()
// const numbers = [1, 2, 3, 4, 5];
// const doubleNumbers = [];

// numbers.forEach(el => doubleNumbers.push(el * 2))

// console.log(numbers);
// console.log(doubleNumbers);

//? Через map()
// const numbers = [1, 2, 3, 4, 5];
// const doubleNumbers = numbers.map(el => el * 2);

// console.log('numbers: ', numbers);
// console.log('doubleNumbers: ', doubleNumbers);

const allCars = [
  { make: 'Honda', model: 'CR-V', amount: 14, price: 24045 },
  { make: 'Honda', model: 'Accord', amount: 2, price: 22455 },
  { make: 'Mazda', model: 'Mazda 6', amount: 8, price: 24195 },
  { make: 'Mazda', model: 'CX-9', amount: 7, price: 31520 },
  { make: 'Toyota', model: '4Runner', amount: 19, price: 34210 },
  { make: 'Toyota', model: 'Sequoia', amount: 16, price: 45560 },
  { make: 'Toyota', model: 'Tacoma', amount: 4, price: 24320 },
  { make: 'Ford', model: 'F-150', amount: 11, price: 27110 },
  { make: 'Ford', model: 'Fusion', amount: 13, price: 22120 },
  { make: 'Ford', model: 'Explorer', amount: 6, price: 31660 },
];

/*
? Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.
 */
// const getModels = cars => cars.map(car => car.model);

// console.log(getModels(allCars));

/*
? Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним
? значенням властивості price залежно від переданої знижки.
 */

const makeCarsWithDiscount = (cars, discount) =>
  cars.map(car => ({ ...car, price: car.price - car.price * discount }));

console.table(makeCarsWithDiscount(allCars, 0.2));
console.table(makeCarsWithDiscount(allCars, 0.4));
