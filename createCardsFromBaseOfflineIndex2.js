import data from './cardBaseJSON.json' assert { type: 'json' };
//const fs = require('fs');
import fs from 'fs';

// Функция для определения категории карты
function getCategory(category) {
  switch (category) {
    case 'Другое: Стартовый набор':
      return 'all starter';
    case '1 серия': //case 'Пул 1':
      return 'all pool1';
    case '2 серия': //case 'Пул 2':
      return 'all pool2';
    case '3 серия': //case 'Пул 3':
      return 'all pool3';
    case '4 серия': //case 'Пул 4':
      return 'all pool4';
    case '5 серия': //case 'Пул 5':
      return 'all pool5';
    case 'Другое: Сезон рекрута':
      return 'all recruit-season';
    case 'Другое: Присутствует в игре':
      return 'all yes';
    case 'Другое: Отсутствует в игре':
      return 'all no';
    default:
      return '';
  }
}

// Функция для создания HTML-элементов на основе данных из базы
function createCardElement(name, data) {
  const category = getCategory(data.category);
  const imageUrl = data.imgUrl;
  const description = data.descr;

  const card = `<div class="card" data-category="${category}" style="display: flex;"><div class="card-image" style="background-image: url(&quot;${imageUrl}&quot;);"></div><div class="card-category">Другое: Стартовый набор</div><div class="card-title"><b>Мерзость</b></div><div class="card-description">${description}</div></div>`;

  return card;
}

// Создание карточек для каждой записи в базе данных и добавление их на страницу
// const container = document.querySelector('.cards');

const cards = [];

for (let name in data) {
  const cardElement = createCardElement(name, data[name]);
  cards.push(cardElement);
}

let resultStr = `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Все карты MARVEL SNAP на Русском языке</title>
    <link rel="icon" href="/img/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <!-- Container -->
    <div class="container">
      <h1 class="header">Все карты MARVEL SNAP на Русском языке</h1>
      <div class="forum-link-wrapper">
        <h2 class="subheader">Присоединяйтесь к форуму по игре в Telegram:</h2>
        <a class="forum-link" href="https://t.me/marvelsnapcom"
          >t.me/marvelsnapcom</a
        >
      </div>
      <!-- Tabs -->
      <div class="tabs">
        <button class="tablinks active" id="all">Все карты</button>
        <button class="tablinks" id="pool1">1 серия</button>
        <button class="tablinks" id="pool2">2 серия</button>
        <button class="tablinks" id="pool3">3 серия</button>
        <button class="tablinks" id="pool4">4 серия</button>
        <button class="tablinks" id="pool5">5 серия</button>
        <button class="tablinks" id="starter">Другое: Стартовый набор</button>
        <button class="tablinks" id="recruit-season">
          Другое: Сезон рекрута
        </button>
        <button class="tablinks" id="yes">Другое: Присутствует в игре</button>
        <button class="tablinks" id="no">Другое: Отсутствует в игре</button>
        <!-- End Tabs -->
      </div>
      <!-- Search -->
      <div class="search-wrapper">
        <input
          type="text"
          id="inputSearch"
          placeholder="Поиск..."
          title="Поиск"
        />
      </div>
      <!-- Cards -->
      <div class="cards">
	  ${cards.join('')}
        <!-- End Cards -->
      </div>
      <div class="btn-up btn-up_hide"></div>
    </div>
    <script src="createCardsFromBase.js" type="module"></script>
    <script src="script.js" type="module"></script>
  </body>
</html>
`;

fs.writeFile('index2.html', resultStr, (err) => {
  if (err) throw err;
  console.log('Файл index2.html сохранён');
});
