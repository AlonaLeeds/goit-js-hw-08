const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

// Отримуємо посилання на елемент списку галереї з класом "gallery"
const galleryList = document.querySelector('.gallery');

// Створюємо HTML розмітку для кожного зображення в галереї за допомогою методу map
const galleryImages = images
  .map(
    image => `
<li class="gallery-item">
  <a class="gallery-link" href="${image.original}">
    <img
      class="gallery-image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
      width="360"
      height="200"
    />
  </a>
</li>`
  )
  .join('');

  // Вставляємо згенеровану HTML розмітку зображень в елемент списку галереї
galleryList.innerHTML = galleryImages;


// Додаємо обробник подій 'click' на елементі списку галереї
galleryList.addEventListener('click', handleImageClick);


// Функція, яка викликається при кліці на зображення мініатюри
function handleImageClick(event) {
  event.preventDefault(); // Зупиняємо стандартну поведінку переходу за посиланням

  // Перевіряємо, чи було клікнуто саме на зображення мініатюри
  if (event.target.nodeName !== 'IMG') {
    return;  // Якщо ні, виходимо з функції
  }

  // Отримуємо URL великого зображення з атрибуту 'data-source' клікнутого зображення
  const handledImageClick = event.target.dataset.source;


  // Створюємо екземпляр модального вікна з великим зображенням
  const instance = basicLightbox.create(
    `<img src="${handledImageClick}" width="1112" height="640">`,
    {

       // Обробник, який викликається при показі модального вікна
      onShow: instance => {
        // Додаємо обробник події 'keydown' для закриття модального вікна при натисканні клавіші 'Escape'
        const handleEscapePress = event => {
          if (event.code === 'Escape') {
            instance.close(); // Закриваємо модальне вікно
          }
        };
        document.addEventListener('keydown', handleEscapePress); // Додаємо обробник події
      },
      
    // Обробник, який викликається при закритті модального вікна
    onClose: instance => {
        // Видаляємо обробник події 'keydown'
        const handleEscapePress = event => {
          if (event.code === 'Escape') {
            instance.close(); // Закриваємо модальне вікно
          }
        };
        document.removeEventListener('keydown', handleEscapePress); // Видаляємо обробник події
      },
    }
  );
 // Показуємо модальне вікно з великим зображенням
  instance.show();
}