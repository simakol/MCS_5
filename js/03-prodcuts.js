/*
 * Створи картки з товарами на основі масиву products
 *
 * Реалізуй делегування подій на колекції карток
 * Після кліку на картку повинно з'являтись модальне вікно
 * з детальною інформацією про продукт.
 *
 * Для реалізації модального вікна використай
 * бібліотеку basicLightbox (https://github.com/electerious/basicLightbox)
 */

//* Product card template
/*
<li class="product-card">
  <img src="" alt="" class="product-card-img" />
  <div class="product-card-text-content">
    <h2 class="product-card-title"></h2>
    <p class="product-card-price">Price: uah.</p>
  </div>
</li>
*/

//* Modal card template
/*
<img class="product-modal-img" src="" alt="" />
<div class="product-modal-text-content">
  <h2 class="product-modal-title"></h2>
  <p class="product-modal-price">Price: uah.</p>
  <p class="product-modal-desc"></p>
</div>
*/

const products = [
  {
    id: 1,
    img: 'https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG',
    name: 'Monitor',
    price: 3000,
    description: '23-inch monitor with Full HD resolution.',
  },
  {
    id: 2,
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX',
    name: 'Laptop',
    price: 20000,
    description: 'Lightweight and powerful laptop with a 15-inch display and SSD.',
  },
  {
    id: 3,
    img: 'https://cdn.27.ua/799/66/39/6841913_1.jpeg',
    name: 'Smartphone',
    price: 8000,
    description: 'Equipped with a triple camera and a multi-core processor.',
  },
  {
    id: 4,
    img: 'https://cdn.27.ua/799/b6/16/4371990_1.jpeg',
    name: 'Tablet',
    price: 12000,
    description: '10-inch tablet with high performance and a Retina display.',
  },
];

const productListEl = document.querySelector('.js-products');

function createPruductCard(product) {
  return `<li class="product-card" data-id="${product.id}">
  <img src="${product.img}" alt="${product.name}" class="product-card-img" />
  <div class="product-card-text-content">
    <h2 class="product-card-title">${product.name}</h2>
    <p class="product-card-price">Price: ${product.price} uah.</p>
  </div>
</li>`;
}

const productsListMarkup = products.map(createPruductCard).join('');

productListEl.innerHTML = productsListMarkup;

productListEl.addEventListener('click', handleOpenCardModal);

function handleOpenCardModal(event) {
  if (event.target === event.currentTarget) {
    return;
  }

  const liEl = event.target.closest('.product-card'); // шукає найближчого батька з переданим селектором, в даному прикладі ми шукаємо найближчий елемент з класом product-card для того щоб потім дістати айді (навіть якщо ми клікнемо по картинці чи по будь-якому іншому елементу ми все одно отримаємо наближчого батька, тобто нашу лішку)

  const productId = Number(liEl.dataset.id);

  const currentProduct = products.find(product => productId === product.id);

  const instance = basicLightbox.create(`
    <img class="product-modal-img" src="${currentProduct.img}" alt="${currentProduct.name}" />
  <div class="product-modal-text-content">
  <h2 class="product-modal-title">${currentProduct.name}</h2>
  <p class="product-modal-price">Price: ${currentProduct.price} uah.</p>
  <p class="product-modal-desc">${currentProduct.description}</p>
</div>
  `);

  instance.show();
}
