/*
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Властивості key та code
 */

/*
 * Обробка комбінацій клавіш
 */

// code - зберігає код клавіші в не залежності від мови (розкладки) користувача, грубо кажучи код привʼязаний до фізичного розташування клавіші. Можна використовувати в тих випадках, коли потрібно щоб комбінація працювала в не залежності від мови

// key - зберігає символ клавіші на тій розкладці клавіатури яка стоїть у користувача під час натискання (постійно змінюється в залежності від символу)

document.addEventListener('keydown', handleKeyDown);

// function handleKeyDown(event) {
//   if (event.code === 'Escape') {
//     console.log('Ви настиснули ескейп');
//   } else {
//     console.log('ви натиснули іншу клавішу');
//   }
// }

function handleKeyDown(event) {
  if (event.code === 'KeyC' && (event.ctrlKey || event.metaKey)) {
    event.preventDefault();
    console.error('Копіювання контенту заборонено, купи підписку!');
  }
}
