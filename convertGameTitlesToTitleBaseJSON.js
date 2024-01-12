const fs = require('fs');

// Чтение файла
const inputFilePath = 'Title_ru.json';
const rawData = fs.readFileSync(inputFilePath);
const jsonData = JSON.parse(rawData);

// Обработка данных
const titles = jsonData.m_TableData.map((item) => item.m_Localized);

// Запись результата в новый файл
const outputFilePath = 'titleBaseJSON.json';
const outputData = JSON.stringify(titles, null, 2);
fs.writeFileSync(outputFilePath, outputData);

console.log('Conversion completed.');
