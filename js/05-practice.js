/*
? Реалізуй пошук автомобілів по сайту
? Користувач потрапляє на сайт і одразу бачить форму для пошуку і картки всіх автомобілів (масив cars)
? Користувач може ввести в форму назву Марки або Моделі авто і в тегу селект обрати що він ввів Марку або Модель (https://prnt.sc/PkkZZRy_ggtT)
? Після натискання кнопки пошуку (сабміт форми) відмалюй авто які збігаються з критеріями пошуку
 */

/*
  <li class="car-list-item">
    <img class="car-list-img" src="" alt="" />
    <div class="car-list-text-content">
      <h3 class="car-list-title"></h3>
      <p class="car-list-price"></p>
    </div>
  </li>
*/

const allCars = [
  {
    id: 1,
    car: 'Audi',
    model: 'A6',
    price: 30000,
    img: 'https://static.wixstatic.com/media/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg/v1/fill/w_520,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg',
  },
  {
    id: 2,
    car: 'Honda',
    model: 'Civic',
    price: 12000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
  },
  {
    id: 3,
    car: 'Audi',
    model: 'Q7',
    price: 40000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
  },
  {
    id: 4,
    car: 'BMW',
    model: '5 siries',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
  },
  {
    id: 5,
    car: 'Honda',
    model: 'Accord',
    price: 20000,
    number: '+380000000000',
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
  },
  {
    id: 6,
    car: 'Volvo',
    model: 'XC60',
    price: 7000,
    img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
  },
];

const refs = {
  form: document.querySelector('.js-form'),
  list: document.querySelector('.js-list'),
  notFoundText: document.querySelector('.js-not-found'),
};

refs.form.addEventListener('submit', handleSearch);

const createGalleryMarkup = cars =>
  cars
    .map(
      car => `<li class="car-list-item" data-id="${car.id}">
    <img class="car-list-img" src="${car.img}" alt="${car.model}" />
    <div class="car-list-text-content">
      <h3 class="car-list-title">${car.car}</h3>
      <p class="car-list-price">${car.price}</p>
    </div>
  </li>`
    )
    .join('');

refs.list.innerHTML = createGalleryMarkup(allCars);

function handleSearch(event) {
  event.preventDefault();
  refs.notFoundText.classList.add('hidden');

  const form = event.target;
  const formElements = form.elements;
  const formData = {
    query: formElements.query.value.trim().toLowerCase(),
    options: formElements.options.value, // car || model
  };

  const filteredCars = allCars.filter(car =>
    car[formData.options].toLowerCase().includes(formData.query)
  );

  form.reset();

  if (filteredCars.length === 0) {
    refs.list.innerHTML = '';
    refs.notFoundText.classList.remove('hidden');
    refs.notFoundText.querySelector('span').textContent = formData.query;
    return;
  }

  refs.list.innerHTML = createGalleryMarkup(filteredCars);
}

/*
formData.query = "audi"
formData.options = "car"

* car => car[formData.options].toLowerCase().includes(formData.query)

! 1. car = {
    id: 1,
    car: 'Audi',
    model: 'A6',
    price: 30000,
    img: 'https://static.wixstatic.com/media/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg/v1/fill/w_520,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg',
  }

  car["car"].toLowerCase().includes("audi") ->
  'Audi'.toLowerCase().includes("audi") ->
  'audi'.includes("audi") -> true

  !2. car = {
    id: 2,
    car: 'Honda',
    model: 'Civic',
    price: 12000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
  }

   car["car"].toLowerCase().includes("audi") ->
   'Honda'.toLowerCase().includes("audi") -> 
   'honda'.includes("audi") -> false


   ! =========

   formData.query = "civic"
   formData.options = "model"

    * car => car[formData.options].toLowerCase().includes(formData.query)

    ! 1. car = {
        id: 1,
        car: 'Audi',
        model: 'A6',
        price: 30000,
        img: 'https://static.wixstatic.com/media/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg/v1/fill/w_520,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg',
      }

      car["model"].toLowerCase().includes("civic") ->
      'A6'.toLowerCase().includes("civic") ->
      'a6'.includes("civic") -> false
      
    ! 2. car =  {
    id: 2,
    car: 'Honda',
    model: 'Civic',
    price: 12000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
  }

      car["model"].toLowerCase().includes("civic") ->
      'Civic'.toLowerCase().includes("civic") ->
      'civic'.includes("civic") -> true



*/
