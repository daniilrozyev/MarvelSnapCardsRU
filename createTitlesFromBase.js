// fs = require('fs');
// import titles from './titleBaseJSON';

// const container = document.querySelector('.cards');

// titles.forEach((title) => {
//   const titleElem = document.createElement('div');
//   titleElem.classList.add('title');
//   titleElem.innerHTML = `<b>${title}</b>`;

//   container.appendChild(titleElem);
// });

fetch('./titleBaseJSON.json') // Укажите правильный путь к файлу
  .then((response) => response.json())
  .then((data) => {
    const container = document.querySelector('.cards');

    data.forEach((title) => {
      const titleElem = document.createElement('div');
      titleElem.classList.add('title');
      titleElem.innerHTML = `<b>${title}</b>`;

      container.appendChild(titleElem);
    });
  })
  .catch((error) => {
    console.error('Ошибка при загрузке JSON файла:', error);
  });
