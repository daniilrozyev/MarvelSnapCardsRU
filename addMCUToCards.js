const fs = require('fs');

const data = fs.readFileSync('cardBaseJSON3.json', 'utf8');

const cards = JSON.parse(data);

const cardsNames = Object.keys(cards);

for (let i = 0; i < cardsNames.length; i++) {
  const cardName = cardsNames[i];
  const card = cards[cardName];
  card.mcu = 'is';
}

fs.writeFileSync('cardBaseJSON2.json', JSON.stringify(cards));
