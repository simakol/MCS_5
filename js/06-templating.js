//* Різниця між властивостями textContent та innerHTML
// const mainTitleEl = document.querySelector('.js-title');

// mainTitleEl.textContent = '<span>New</span> Title';
// mainTitleEl.innerHTML = '<a href="#"><span>New</span> Title</a>';

const pictures = [
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/0/700/460',
    alt: 'laptop',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1/700/460',
    alt: 'developer',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/10/700/460',
    alt: 'forest',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/100/700/460',
    alt: 'beach',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1000/700/460',
    alt: 'mountain',
  },
];

/*
<li class="gallery-item">
  <a href="#">
    <img src="" alt="" width="" height="">
  </a>
</li>
*/

const createGalleryItem = item => `<li class="gallery-item">
  <a href="#">
    <img src="${item.url}" alt="${item.alt}" width="${item.width}" height="${item.height}">
  </a>
</li>`;

const galleryEl = document.querySelector('.js-gallery');

const galleryMarkup = pictures.map(createGalleryItem).join('');

console.log(galleryMarkup);

// galleryEl.innerHTML = galleryMarkup; //? у випадках коли треба видалити попередній контент з контейнеру і замінити його на новий

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup); //? у випадках, коли треба зберегти вже існуючий контект але додати до нього нові елементи
