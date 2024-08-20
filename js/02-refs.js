/*
 * Об'єкти
 *
 * - Тип даних за посиланням
 * - Масиви і функції - це об'єкти
 */

const user = {
  firstName: 'John',
  lastName: 'Dou',
};
const userCopy = user;

console.log('user:', user);
console.log('userCopy:', userCopy);

userCopy.age = 20;

console.log('user:', user);
console.log('userCopy:', userCopy);
