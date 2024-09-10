/*
 * Властивості елемента (hero)
 * - Зображення
 * - Текст та textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

// const titleEl = document.querySelector('.js-hero-title');

// titleEl.textContent = 'My title!';

// console.dir(titleEl);

const imgEl = document.querySelector('.js-hero-image');

// imgEl.src = 'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
// imgEl.alt = 'Cat!';

// console.dir(imgEl);

// const inputEl = document.querySelector('.js-input');

// inputEl.value = '';

// console.dir(inputEl);

/*
 * Атрибути
 * - get(ім'я-атрибута)
 * - set(ім'я-атрибута, значення-атрибута)
 * - remove(ім'я-атрибута)
 * - has(ім'я-атрибута)
 */

// console.log(imgEl.getAttribute('src'));
// console.log(imgEl.src);

// imgEl.height = 213;
// imgEl.setAttribute('height', '213');

// imgEl.removeAttribute('src');
// imgEl.src = '';

if (!imgEl.hasAttribute('src')) {
  imgEl.src =
    'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
}

/*
 * Data-атрибути
 */
const actionBtnEl = document.querySelector('.js-action-btn');

console.dir(actionBtnEl.dataset.action);
