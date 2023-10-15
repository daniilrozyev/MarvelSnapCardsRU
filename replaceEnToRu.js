const fs = require('fs');

// const filename = 'AllLocationRarity';
const filename = 'AllLocationStatus';

// Чтение содержимого исходного файла
fs.readFile(`${filename}.txt`, 'utf8', (err, data) => {
  if (err) {
    console.error('Ошибка чтения файла:', err);
    return;
  }

  // Создание объекта для замен
  const replacements = {
    common: 'Обычная',
    uncommon: 'Необычная',
    rare: 'Редкая',
    'ultra-rare': 'Супер редкая',
    released: 'Присутствует в игре',
    unreleased: 'Отсутствует в игре',
  };

  // Создание регулярного выражения для поиска целых слов
  const regex = new RegExp(Object.keys(replacements).join('|'), 'g');

  // Выполнение замен в тексте
  const replacedText = data.replace(regex, (match) => replacements[match]);

  // Сохранение замененного текста в другом файле
  fs.writeFile(`${filename}2.txt`, replacedText, 'utf8', (err) => {
    if (err) {
      console.error('Ошибка сохранения файла:', err);
    } else {
      console.log(`Замененный текст успешно сохранен в ${filename}2.txt`);
    }
  });
});
