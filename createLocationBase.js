const fs = require('fs');

// Чтение данных из файлов и удаление символов \r
const names = fs
  .readFileSync('AllLocationNames.txt', 'utf8')
  .split('\n')
  .map((line) => line.trim());
const rarity = fs
  .readFileSync('AllLocationRarity.txt', 'utf8')
  .split('\n')
  .map((line) => line.trim());
const status = fs
  .readFileSync('AllLocationStatus.txt', 'utf8')
  .split('\n')
  .map((line) => line.trim());
const descr = fs
  .readFileSync('AllLocationsDescriptions.txt', 'utf8')
  .split('\n')
  .map((line) => line.trim());
const imgUrl = fs
  .readFileSync('AllLocationIMGLinks.txt', 'utf8')
  .split('\n')
  .map((line) => line.trim());

// Создание JSON объекта с именами в качестве ключей
const database = {};

for (let i = 0; i < names.length; i++) {
  database[names[i]] = {
    rarity: rarity[i] || '',
    status: status[i] || '',
    descr: descr[i] || '',
    imgUrl: imgUrl[i] || '',
  };
}

// Сохранение базы данных в JSON файл
fs.writeFileSync('locationBaseJSON.json', JSON.stringify(database, null, 2));
