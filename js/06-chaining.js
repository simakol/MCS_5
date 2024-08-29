/*
 * Ланцюжки методів
 */
const allCars = [
  { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
  { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
  { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
  { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
  { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
  { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
  { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
];

// [1, 2, 3, 4, 5].map(el => el * 2).filter(el => el > 5).toSorted((a, b) => b - a)
/*
1. [1, 2, 3, 4, 5].map(el => el * 2) -> [2, 4, 6, 8, 10]
2. [2, 4, 6, 8, 10].filter(el => el > 5) -> [6, 8, 10]
3. [6, 8, 10].toSorted((a, b) => b - a) -> [10, 8, 6]
*/

/*
? Нехай функція getModelsOnSale повертає масив моделей автомобілів,
? але тільки тих, які зараз на розпродажі.
 */

// const getModelsOnSale = cars => cars.filter(car => car.onSale).map(car => car.model);

// console.log(getModelsOnSale(allCars));

/*
? Нехай функція getSortedCarsOnSale повертає масив автомобілів
? на розпродажі (властивість onSale, яких true), відсортованих за зростанням ціни.
 */

// const getSortedCarsOnSale = cars => cars.filter(car => car.onSale).toSorted((a, b) => a.price - b.price);

// console.table(getSortedCarsOnSale(allCars));

//! ======

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const tags = tweets.flatMap(el => el.tags);
const uniqueTags = tags.filter((el, i) => tags.indexOf(el) === i);

console.log(tags);
console.log(uniqueTags);


/*
! tags = ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']

! tags.filter((el, i) => tags.indexOf(el) === i);

! uniqueTags = []

 ? 1 iter
 el = 'js'
 i = 0

 > tags.indexOf(el) === i
 > tags.indexOf(el) = 0
 > 0 === 0 - true
 > uniqueTags = ['js']


 ? 2 iter
 el = 'nodejs'
 i = 1

 > tags.indexOf(el) === i
 > tags.indexOf(el) = 1
 > 1 === 1 - true
 > uniqueTags = ['js', 'nodejs']

 .........

 ? 5 iter
 uniqueTags = ['js', 'nodejs', 'html', 'css']
 el = 'html'
 i = 4

 > tags.indexOf('html') === i
 > tags.indexOf(el) = 2
 > 2 === 4 - false
 > uniqueTags = ['js', 'nodejs', 'html', 'css']
*/
