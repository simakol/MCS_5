/*
 * Об'єкти
 *
 * - Створення об'єкта
 * - Доступ до властивостей через крапку
 * - Доступ до властивостей через квадратні дужки
 * - Вкладені властивості
 * - Доступ до вкладених властивостей
 * - Зміна значення властивостей
 * - Додавання властивостей
 */

const film = {
  title: 'Harry Potter',
  description: 'Lorem ipsum dolor sit amet consectetur',
  rating: 10,
  actors: ['Mary Morton', 'Frances Anderson', 'Fanny Phelps', 'Carrie Holland'],
  translations: {
    en: 'https://en',
    ua: 'https://ua',
  },
};

console.log(film);

// console.log(film.title);
// console.log(film.actors);

// console.log(film['description']);
// console.log(film['rating']);

// const key = 'title';

// console.log(film[key]);

// console.log(film.translations.ua);

film.rating = 9;

film.actors.push('Philip Porter');

film.genre = ['Eula', 'Nannie'];

console.log(film);
