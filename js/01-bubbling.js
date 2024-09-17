/*
 * Спливання подій
 * event.target - цільовий (вихідний) елемент
 * event.currentTarget - поточний елемент, на слухачі якого спіймали подію
 */

// const allElements = document.querySelectorAll('*');

// console.log(allElements);

// allElements.forEach(el => {
//   // в циклі вішаємо обробник подій по кліку на абсолютно кожен елемент в документі (фіксуємо сплиття події)
//   el.addEventListener('click', () => alert(`Сплиття\nCurrentElement: ${el.tagName} | ID: ${el.id}`));

//   // для фіксації занурення події, потрібно просто третім аргументов в addEventListener передати true
//   el.addEventListener('click', () => alert(`Занурення\nCurrentElement: ${el.tagName} | ID: ${el.id}`), true);
// });

const parentEl = document.querySelector('.js-parent');
const childEl = document.querySelector('.js-child');
const innerChildEl = document.querySelector('.js-inner-child');

parentEl.addEventListener('click', event => {
  console.group(`${event.target.id} click`);
  console.log('event.target ->', event.target); // елемент на якому сталася подія (елемент який створив подію)
  console.log('event.currentTarget ->', event.currentTarget); // елемент, на якому висить обробник (елемент який обробив подію)
  console.groupEnd();
});

childEl.addEventListener('click', event => {
  console.group('Клікнули на дитину!');
  console.log('event.target ->', event.target);
  console.log('event.currentTarget ->', event.currentTarget);
  console.error('Сплиття зупинено методом stopPropagation()');
  console.groupEnd();
  event.stopPropagation(); // зупиняє сплиття події
});
