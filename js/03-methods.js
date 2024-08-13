/*
 * Методи масиву
 *
 * - join
 * - split (Метод рядка)
 * - slice
 * - concat
 * - indexOf
 * - push/pop
 */

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

//* .join(separator) - викликається на масиві та приймає один параметр (знак розділювача). Цей метод повертає рядок у якому всі елементи масиву будуть розділені нашим параметром separator. з масиву в рядок

//* .split(splitter) - викликається на рядку та приймає один параметр (знак розділювача). Повертає новий масив де кожен елемент було вибрано з рядка з урахуванням розділювача splitter. з рядка в масив

//* .slice(start, end) - повертає новий масив з копією елементів від start до end не включно масиву на якому він викликається. [start, end)

//* .concat(...arrs) - повертає новий масив у якому зілʼє всі масиви, які ви передаєте в якості аргументів в один

//* indexOf(value) - повертає індекс першого входження яке буде рівним значенню value, якщо такого елементу не знайшлось - повертається -1

//* .push(value) - додає значення value у кінець масиву

//* .pop() - видаляє ОДНЕ значення з кінця масиву

//* .includes(value) - повертає true якщо значення value зустрічається у масиві і повертає false, якщо значення value у масиві немає
