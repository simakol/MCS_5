/*
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 */

/*
this - контекст виклику фукнції
- це ключове слово яке зберігає в собі посилання на обʼєкт, який викликає данну фукнцію. Значення this отримується тільки під час виклику.

Обʼєкт який викликає фукнцію це обʼєкт який стоїть до крапки під час виклику методу object.method() - object це обʼєкт, який викликав функцію (метод) method(), тому всередині цієї функції this буде посилатись на обʼєкт object.
*/

const playlist = {
  name: 'My amazing playlist',
  rating: 5,
  tracks: ['track-1', 'track-2', 'track-3'],
  getTracksCount() {
    return this.tracks.length;
  },
  updateRating(newRating) {
    if (newRating >= 0 && newRating <= 5) {
      this.rating = newRating;
    }
  },
  changeName(newName) {
    if (newName.length <= 120) {
      this.name = newName;
    }
  },
};

playlist.updateRating(3);

playlist.changeName('New playlist');

console.log(playlist);

console.log(playlist.getTracksCount());
