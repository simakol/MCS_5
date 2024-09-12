/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 */

/*
? Оброби форму та збережи відгук користувача в об'єкт
*/

const formEl = document.querySelector('.js-form');

formEl.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault(); // зупиняє поведінку браузера за замовчуванням (наприклад, перезавантаження сторінки після сабміту)

  const formElements = event.target.elements;

  const formData = {
    email: formElements.email.value,
    password: formElements.password.value,
    comment: formElements.comment.value,
  };

  console.log(formData);

  event.target.reset(); // скидує поля форми
}
