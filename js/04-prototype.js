/*
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей з hasOwnProperty()
 * - Ланцюжки прототипів
 */

const animal = {
  head: 1,
  legs: 4,
  ears: 2,
  tail: 1,
};

// Object.create(animal); - створює новий пустий обʼєкт і вказує аргумент як прототип (собака була створена на основі обʼєкту тварини, а значить буде мати доступ до всіх методів та властивостей які є у спільного обʼєкту тварини)

const dog = Object.create(animal);

// власні властивості собаки
dog.name = 'Persik';
dog.bark = () => console.log('Bark!');

console.log(dog);
console.log(dog.tail); // не власна властивість (тому що вона була унаслідувана від обʼєкту прототипа, а саме обʼєкту animal)

/*
як відбувається пошук по ланцюгу прототипів, 


{
name: 'Persik', bark: ƒ
    [[Prototype]]: {
    head: 1,
    legs: 4,
    ears: 2,
    tail: 1,
    }
}

dog.tail - спочатку пошук буде йти у власних властивостях, якщо ми не знаходимо цю властивість, ми йдемо в прототип, і шукаємо там до тих пір, поки не знайдемо
*/

dog.bark();
dog.bark();
dog.bark();

// оператор in не розрізняє чи є властивість власною, чи вона взята з прототипу
console.log('name' in dog); // true
console.log('voice' in dog); // false
console.log('legs' in dog); // true

// Якщо нам треба перевірити чи є властивість власною ми можемо скористатись методом Object.hasOwn()

console.log(Object.hasOwn(dog, 'name')); // true
console.log(Object.hasOwn(dog, 'legs')); // false
console.log(Object.hasOwn(dog, 'tail')); // false

for (const key in dog) {
  if (Object.hasOwn(dog, key)) {
    console.log(key);
  }
}

console.clear();

const arr = [1, 2, 3];

const newArr = arr.map(el => el * 2);

console.log(newArr);
console.log(newArr.hasOwnProperty('length'));

console.log(arr.__proto__); // посилання на обʼєкт прототипу

console.clear();

console.log(5); // примітив, не є обʼєктом
console.log(new Number(5)); // не примітив, це обʼєкт
console.log(new Number(5).toString());

console.log(Number.isFinite(5));