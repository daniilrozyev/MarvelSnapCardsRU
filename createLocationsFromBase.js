// let data;

// const fs = require('fs');

// fs.readFile('cardBaseJSON.json', (err, data) => {
//   if (err) throw err;
//   data = JSON.parse(data);
// }

import data from './locationBaseJSON.json' assert { type: 'json' };

// let response = await fetch('cardBaseJSON.json');
// let data;

// if (response.ok) {
//   // если HTTP-статус в диапазоне 200-299
//   // получаем тело ответа (см. про этот метод ниже)
//   data = await response.json();
// } else {
//   alert('Ошибка HTTP: ' + response.status);
// }

// Функция для определения категории карты
function getCategory(category) {
  switch (category) {
    case 'Обычная':
      return 'all common';
    case 'Необычная':
      return 'all uncom';
    case 'Редкая':
      return 'all rare';
    case 'Супер редкая':
      return 'all ultra';
    case 'Присутствует в игре':
      return 'all yes';
    case 'Отсутствует в игре':
      return 'all no';
    default:
      return 'all';
  }
}

// Функция для создания HTML-элементов на основе данных из базы
function createCardElement(name, data) {
  const rarity = getCategory(data.rarity);
  const status = getCategory(data.status);
  const description = data.descr;
  const imageUrl = data.imgUrl;

  // Создание HTML-элементов для карточки
  const card = document.createElement('div');
  card.classList.add('card');
  card.setAttribute('data-category', rarity);

  const cardImage = document.createElement('div');
  cardImage.classList.add('card-image');
  cardImage.style.backgroundImage = `url('${imageUrl}')`;

  const cardRarity = document.createElement('div');
  cardRarity.classList.add('card-rarity');
  cardRarity.classList.add(rarity.slice(4));
  cardRarity.textContent = `${data.rarity}`;

  const cardStatus = document.createElement('div');
  cardStatus.classList.add('card-status');
  cardStatus.textContent = `${data.status}`;

  const cardTitle = document.createElement('div');
  cardTitle.classList.add('card-title');
  cardTitle.innerHTML = `<b>${name}</b>`;

  const cardDescription = document.createElement('div');
  cardDescription.classList.add('card-description');
  cardDescription.innerHTML = description;

  // Добавление созданных элементов на страницу
  card.appendChild(cardImage);
  card.appendChild(cardRarity);
  card.appendChild(cardStatus);
  card.appendChild(cardTitle);
  card.appendChild(cardDescription);

  return card;
}

// Создание карточек для каждой записи в базе данных и добавление их на страницу
const container = document.querySelector('.cards');

for (let name in data) {
  const cardElement = createCardElement(name, data[name]);
  container.appendChild(cardElement);
}
