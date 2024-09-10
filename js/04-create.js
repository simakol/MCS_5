/*
 * Створення та додавання елементів
 */

/*
<li class="gallery-item">
  <a href="#">
    <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
  </a>
</li>
*/


// creale a li

const liEl = document.createElement('li');
liEl.classList.add('gallery-item');

console.log(liEl);

// create a link

const linkEl = document.createElement('a');
linkEl.href = '#';

console.log(linkEl);

// create an image

const imageEl = document.createElement('img');

imageEl.src = 'https://picsum.photos/id/237/200/300';
imageEl.alt = 'Labrador';

console.log(imageEl);

// append nodes

linkEl.append(imageEl)
liEl.append(linkEl)

console.log(liEl);

const galleryEl = document.querySelector('.js-gallery');

galleryEl.append(liEl)