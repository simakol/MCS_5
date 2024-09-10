/*
 * Властивості елемента (hero)
 * - Зображення
 * - Текст та textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

// const titleEl = document.querySelector('.js-hero-title');

// console.log(titleEl.textContent);
// titleEl.textContent = 'My title!';

// console.dir(titleEl);

const imgEl = document.querySelector('.js-hero-image');

// console.dir(imgEl);

imgEl.src = 'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
imgEl.alt = 'Cat!';

// console.dir(imgEl);

// const inputEl = document.querySelector('.js-input');

// console.log(inputEl.textContent); //! не використовується з полями вводу (input, textarea, select)

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

// console.log(imgEl.hasAttribute('src')); // true

// imgEl.removeAttribute('src');
// imgEl.src = '';

// console.log(imgEl.hasAttribute('src')); // false

// if (!imgEl.hasAttribute('src')) {
//   imgEl.src =
//     'https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?cs=srgb&dl=pexels-wojciech-kumpicki-1084687-2071882.jpg&fm=jpg';
// }

// const btnEl = document.querySelector('#btn');

// btnEl.disabled = false;

/*
 * Data-атрибути
 */
const actionBtnEl = document.querySelector('.js-action-btn');

console.dir(actionBtnEl.dataset);
console.dir(actionBtnEl.dataset.action);
console.dir(actionBtnEl.dataset.id);

// console.dir(actionBtnEl.dataset.action);
