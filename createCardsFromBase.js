// const data = {
//   Мерзость: {
//     descr: '«Глупый сброд! Вы все подо мной!»',
//     category: 'Стартовый набор',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Abomination-infinity.webp',
//   },
//   Поглотитель: {
//     descr:
//       'При раскрытии: если последняя разыгранная вами карта имеет способность «При раскрытии», эта карта копирует её.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/AbsorbingMan-infinity.webp',
//   },
//   'Адам Уорлок': {
//     descr:
//       'Вытягиваете карту в конце каждого хода, если вы побеждаете на этой локации.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/AdamWarlock-infinity.webp',
//   },
//   Аэро: {
//     descr:
//       'При раскрытии: перемещает на эту локацию все карты противника, разыгранные на этом ходу.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Aero-infinity.webp',
//   },
//   'Агата Харкнесс': {
//     descr:
//       'Агата оказывается в стартовой руке и разыгрывает ваши карты за вас.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/AgathaHarkness-infinity.webp',
//   },
//   'Агент 13': {
//     descr: 'При раскрытии: добавляет в вашу руку случайную карту.',
//     category: 'Пул 2',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Agent13-infinity.webp',
//   },
//   'Агент Колсон': {
//     descr:
//       'При раскрытии: добавляет случайные карты с базовой стоимостью 4 и 5 в вашу руку.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/AgentCoulson-infinity.webp',
//   },
//   'Америка Чавес': {
//     descr: 'Вы всегда берёте эту карту на 6-м ходу, не раньше.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/AmericaChavez-infinity.webp',
//   },
//   Ангел: {
//     descr:
//       'Когда одна из ваших карт уничтожена, эта карта вылетит из колоды и заменит её.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Angel-infinity.webp',
//   },
//   Анжела: {
//     descr: 'Если вы разыгрываете здесь карту, +2 к силе.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Angela-infinity.webp',
//   },
//   'Человек-муравей': {
//     descr: 'Постоянно: если у вас есть другие карты (3шт.) здесь, +3 силе.',
//     category: 'Другое: Сезон рекрута',
//     imgUrl: 'https://static.marvelsnap.pro/cards/AntMan-infinity.webp',
//   },
//   Апокалипсис: {
//     descr:
//       'Когда вы сбрасываете эту карту из своей руки, она возвращается с силой +4.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Apocalypse-infinity.webp',
//   },
//   Броня: {
//     descr: 'Постоянно: карты на этой локации нельзя уничтожить.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Armor-infinity.webp',
//   },
//   'Арним Зола': {
//     descr:
//       'При раскрытии: уничтожает случайную дружественную карту здесь. Добавляет по одной её копии на другие локации.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/ArnimZola-infinity.webp',
//   },
//   Аттума: {
//     descr:
//       'Уничтожается, если в конце вашего хода здесь будет другая ваша карта.',
//     category: 'Пул 4',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Attuma-infinity.webp',
//   },
//   'Барон Мордо': {
//     descr:
//       'При раскрытии: ваш противник вытягивает карту, её стоимость теперь составит 6.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/BaronMordo-infinity.webp',
//   },
//   Баст: {
//     descr: 'При раскрытии: меняет силу всех карт в вашей руке на 3.',
//     category: 'Пул 4',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Bast-infinity.webp',
//   },
//   Зверь: {
//     descr:
//       'При раскрытии:  возвращает остальные ваши карты из этой локации в вашу руку. Эти карты теперь стоят на 1 меньше.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Beast-infinity.webp',
//   },
//   Бишоп: {
//     descr: 'Если вы разыграете карту, получает +1 к силе.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Bishop-infinity.webp',
//   },
//   'Чёрный Гром': {
//     descr:
//       'При раскрытии: ваш противник должен сбросить карту с наименьшей текущей стоимостью со своей руки.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/BlackBolt-infinity.webp',
//   },
//   'Чёрная Кошка': {
//     descr: 'Если эта карта остаётся в вашей руке к концу хода, сбрасывает её.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/BlackCat-infinity.webp',
//   },
//   'Чёрный Рыцарь': {
//     descr: 'Когда эта карта будет уничтожена, вытяните карту.',
//     category: 'Другое: Отсутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/BlackKnight-infinity.webp',
//   },
//   'Чёрная Пантера': {
//     descr: 'При раскрытии: удваивает силу этой карты.',
//     category: 'Пул 4',
//     imgUrl: 'https://static.marvelsnap.pro/cards/BlackPanther-infinity.webp',
//   },
//   'Чёрная Вдова': {
//     descr:
//       'При раскрытии: добавляет карту «Укус Вдовы» в руку вашего противника.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/BlackWidow-infinity.webp',
//   },
//   Блэйд: {
//     descr: 'При раскрытии: сбрасывает карту с вашей руки.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Blade-infinity.webp',
//   },
//   Блинк: {
//     descr:
//       'Вы можете перемещать эту карту каждый ход. Когда она перемещается, получает +1 к силе.',
//     category: 'Другое: Отсутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Blink-infinity.webp',
//   },
//   Блоб: {
//     descr: 'Постоянно: Ничто не может переместить эту карту из этой локации.',
//     category: 'Другое: Отсутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Blob-infinity.webp',
//   },
//   'Синее Чудо': {
//     descr: 'Постоянно: ваши остальные карты получают +1 к силе.',
//     category: 'Другое: Сезон рекрута',
//     imgUrl: 'https://static.marvelsnap.pro/cards/BlueMarvel-infinity.webp',
//   },
//   Бруд: {
//     descr:
//       'При раскрытии:\nдобавляет брудлингов (2) с этой же силой в эту локацию.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Brood-infinity.webp',
//   },
//   'Баки Барнс': {
//     descr: 'При уничтожении создаёт карту «Зимний Солдат» вместо себя.',
//     category: 'Пул 2',
//     imgUrl: 'https://static.marvelsnap.pro/cards/BuckyBarnes-infinity.webp',
//   },
//   Меченый: {
//     descr:
//       'При раскрытии:  следующая карта, которую вы вытянете, будет картой со стоимостью 2 (если таковые остались).',
//     category: 'Другое: Отсутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Bullseye-infinity.webp',
//   },
//   Кейбл: {
//     descr:
//       'При раскрытии: кладёт нижнюю карту из колоды противника в вашу руку.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Cable-infinity.webp',
//   },
//   'Капитан Америка': {
//     descr: 'Постоянно: другие ваши карты в этой локации получают +1 к силе.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/CaptainAmerica-infinity.webp',
//   },
//   'Капитан Марвел': {
//     descr:
//       'После финального хода перемещается на локацию, которая позволит вам победить в мате (если это возможно).',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/CaptainMarvel-infinity.webp',
//   },
//   Карнаж: {
//     descr:
//       'При раскрытии:  уничтожает остальные ваши карты здесь. +2 к силе за каждую уничтоженную карту.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Carnage-infinity.webp',
//   },
//   Церебро: {
//     descr: 'Постоянно: ваши карты с наивысшей силой получают +2 к силе.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Cerebro-infinity.webp',
//   },
//   Плащ: {
//     descr:
//       'При раскрытии: оба игрока смогут перемещать сюда карты на следующем ходу.',
//     category: 'Пул 2',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Cloak-infinity.webp',
//   },
//   'Коллин Винг': {
//     descr:
//       'При раскрытии:\n' +
//       'сбрасывает карту с наименьшей текущей стоимостью с вашей руки.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/ColleenWing-infinity.webp',
//   },
//   Колосс: {
//     descr: 'Постоянно: нельзя уничтожить, переместить или ослабить.',
//     category: 'Другое: Сезон рекрута',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Colossus-infinity.webp',
//   },
//   Космо: {
//     descr:
//       'Постоянно: способности «При раскрытии» не будут срабатывать на этой локации.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Cosmo-infinity.webp',
//   },
//   Кроссбоунс: {
//     descr: 'Эту карту можно разыгрывать только там, где вы выигрываете.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Crossbones-infinity.webp',
//   },
//   Кристалл: {
//     descr:
//       'При раскрытии: если эта карта находится в средней локации, подтасовывает вашу руку в вашу колоду и вытягивает 3 карт(ы).',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Crystal-infinity.webp',
//   },
//   Циклоп: {
//     descr: '«Люди Икс, выдвигаемся».',
//     category: 'Стартовый набор',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Cyclops-infinity.webp',
//   },
//   Кинжал: {
//     descr:
//       'Перемещаясь в локацию, получает +2 к силе за каждую вражескую карту там.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Dagger-infinity.webp',
//   },
//   Сорвиголова: {
//     descr:
//       'На 5-м ходу вы увидите ход оппонента до того, как начнёте ходить сами.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Daredevil-infinity.webp',
//   },
//   'Тёмный Ястреб': {
//     descr: 'Постоянно: +2 к силе за каждую карту в колоде вашего противника.',
//     category: 'Пул 4',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Darkhawk-infinity.webp',
//   },
//   Ослепительная: {
//     descr: 'Постоянно: если у вас есть 4 карт(ы) в каждой локации, +6 к силе.',
//     category: 'Пул 5',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Dazzler-infinity.webp',
//   },
//   Дэдпул: {
//     descr: 'При уничтожении эта карта вернётся в руку и удвоит свою силу.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Deadpool-infinity.webp',
//   },
//   Смерть: {
//     descr:
//       'Будет стоить на 1 меньше за каждую карту, уничтоженную в этой игре.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Death-infinity.webp',
//   },
//   Детлок: {
//     descr: 'При раскрытии:\nуничтожает другие ваши карты в этой локации.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Deathlok-infinity.webp',
//   },
//   Дэбри: {
//     descr:
//       'При раскрытии:\n' +
//       'добавляет карту «Скала» во все остальные локации для каждого игрока.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Debrii-infinity.webp',
//   },
//   Демон: {
//     descr: '«Сделка есть сделка».',
//     category: 'Другое: Присутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Demon-infinity.webp',
//   },
//   Разрушитель: {
//     descr: 'При раскрытии:\nуничтожает другие ваши карты.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Destroyer-infinity.webp',
//   },
//   'Дьявольский Динозавр': {
//     descr: 'Постоянно: +2 к силе за каждую карту в вашей руке.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/DevilDinosaur-infinity.webp',
//   },
//   'Доктор Дум': {
//     descr:
//       'При раскрытии:\nдобавляет карту «Думбот» с силой 5 во все другие локации.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/DrDoom-infinity.webp',
//   },
//   'Доктор Осьминог': {
//     descr:
//       'При раскрытии:\n' +
//       'перемещает 4 случайные карт(ы) из руки противника на его сторону этой локации.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/DoctorOctopus-infinity.webp',
//   },
//   'Доктор Стрэндж': {
//     descr:
//       'При раскрытии:\nперемещает вашу карту с наибольшей силой на эту локацию.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/DoctorStrange-infinity.webp',
//   },
//   Домино: {
//     descr: 'Вы всегда берёте эту карту на 2-м ходу, не раньше.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Domino-infinity.webp',
//   },
//   Думбот: {
//     descr: '«Дум превыше всех!»',
//     category: 'Другое: Присутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/DoomBot-infinity.webp',
//   },
//   Дракула: {
//     descr:
//       'Сбрасывает карту с вашей руки после финального хода. Эта карта получит силу сброшенной.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Dracula-infinity.webp',
//   },
//   Дракс: {
//     descr:
//       'При раскрытии: если противник разыграл карту здесь на этом ходу, +3 к силе.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Drax-infinity.webp',
//   },
//   Дрон: {
//     descr: '«Б-З-З-З!»',
//     category: 'Другое: Присутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Drone-infinity.webp',
//   },
//   'Эбони Мо': {
//     descr:
//       'Эту карту нельзя разыграть после 3-го хода. Постоянно: здесь нельзя разыгрывать карты.',
//     category: 'Пул 2',
//     imgUrl: 'https://static.marvelsnap.pro/cards/EbonyMaw-infinity.webp',
//   },
//   Электро: {
//     descr:
//       'При раскрытии: +1 к макс. энергии. Постоянно: за ход можно разыграть только 1 карту.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Electro-infinity.webp',
//   },
//   Электра: {
//     descr:
//       'При раскрытии: уничтожает случайную вражескую карту с базовой силой стоимостью 1 в этой локации.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Elektra-infinity.webp',
//   },
//   'Эльза Бладстоун': {
//     descr: 'В конце каждого хода, если вы выигрываете эту локацию, +1 к силе.',
//     category: 'Другое: Отсутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/ElsaBloodstone-infinity.webp',
//   },
//   Чаровница: {
//     descr:
//       'При раскрытии:\nубирает постоянные способности всех карт на этой локации.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Enchantress-infinity.webp',
//   },
//   Сокол: {
//     descr:
//       'При раскрытии: возвращает ваши карты с базовой стоимостью 1 в вашу руку.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Falcon-infinity.webp',
//   },
//   'Плоский Человек': {
//     descr: 'Постоянно: Соседние локации имеют +1 к силе.',
//     category: 'Другое: Отсутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Flatman-infinity.webp',
//   },
//   Кузнец: {
//     descr:
//       'При раскрытии: даст следующей карте, которую вы разыграете, +2 к силе.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Forge-infinity.webp',
//   },
//   Галактус: {
//     descr:
//       'При раскрытии:\n' +
//       'уничтожает все другие локации, если это единственная ваша карта здесь.',
//     category: 'Пул 5',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Galactus-infinity.webp',
//   },
//   Гамбит: {
//     descr:
//       'При раскрытии:\n' +
//       'сбрасывает карту с вашей руки. Уничтожает случайную карту противника.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Gambit-infinity.webp',
//   },
//   Гамора: {
//     descr:
//       'При раскрытии: если противник разыграл карту здесь на этом ходу, +5 к силе.',
//     category: 'Другое: Сезон рекрута',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Gamora-infinity.webp',
//   },
//   Призрак: {
//     descr:
//       'Постоянно: ваши карты всегда раскрываются последними (их способности при раскрытии активируются в последнюю очередь).',
//     category: 'Пул 5',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Ghost-infinity.webp',
//   },
//   'Призрачный Гонщик': {
//     descr:
//       'При раскрытии:\n' +
//       'возвращает одну из ваших сброшенных ранее карт на эту локацию.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/GhostRider-infinity.webp',
//   },
//   'Призрак-Паук': {
//     descr:
//       'При раскрытии:\n' +
//       'перемещает последнюю разыгранную вами карту в этой локации.',
//     category: 'Другое: Отсутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/GhostSpider-infinity.webp',
//   },
//   Гиганто: {
//     descr: 'Эту карту можно разыграть только на локации слева.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Giganto-infinity.webp',
//   },
//   'Королева Гоблинов': {
//     descr: 'При раскрытии: другие карты не могут быть раскрыты на этом ходу.',
//     category: 'Другое: Отсутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/GoblinQueen-infinity.webp',
//   },
//   Гуся: {
//     descr:
//       'Постоянно: никто не может разыгрывать карты, которые стоят 4, 5 или 6, в этой локации.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Goose-infinity.webp',
//   },
//   'Зелёный Гоблин': {
//     descr: 'При раскрытии: переходит под контроль противника.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/GreenGoblin-infinity.webp',
//   },
//   Грут: {
//     descr:
//       'При раскрытии: если противник разыграл карту здесь на этом ходу, +2 к силе.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Groot-infinity.webp',
//   },
//   Гвенпул: {
//     descr: 'При раскрытии: удваивает силу этой карты.',
//     category: 'Другое: Отсутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Gwenpool-infinity.webp',
//   },
//   'Соколиный Глаз': {
//     descr:
//       'При раскрытии: если вы разыграете карту здесь на следующем ходу, +2 к силе.',
//     category: 'Стартовый набор',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Hawkeye-infinity.webp',
//   },
//   Хазмат: {
//     descr: 'При раскрытии: снижает силу всех остальных карт на 1.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Hazmat-infinity.webp',
//   },
//   Хеймдалль: {
//     descr:
//       'При раскрытии:\nперемещает ваши другие карты на одну локацию влево.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Heimdall-infinity.webp',
//   },
//   Хела: {
//     descr:
//       'При раскрытии:\n' +
//       'восстанавливает все ваши сброшенные карты на случайных локациях.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Hela-infinity.webp',
//   },
//   Геликарриер: {
//     descr: 'При сбросе из вашей руки добавляет случайные карты (3шт.) в неё.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Helicarrier-infinity.webp',
//   },
//   'Адская корова': {
//     descr: 'При раскрытии:\nсбрасывает 2 карт(ы) из вашей руки.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Hellcow-infinity.webp',
//   },
//   'Хит-Манки': {
//     descr:
//       'При раскрытии:\n' +
//       'получает +2 к силе за каждую разыгранную вами карту на этом ходу.',
//     category: 'Пул 5',
//     imgUrl: 'https://static.marvelsnap.pro/cards/HitMonkey-infinity.webp',
//   },
//   Хобгоблин: {
//     descr: 'При раскрытии:\nпереходит под контроль противника.',
//     category: 'Пул 2',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Hobgoblin-infinity.webp',
//   },
//   Халк: {
//     descr: '«ХАЛК КРУШИТЬ!»',
//     category: 'Стартовый набор',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Hulk-infinity.webp',
//   },
//   Халбастер: {
//     descr:
//       'При раскрытии:\n' +
//       'объединяется со случайной дружественной картой на этой локации.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Hulkbuster-infinity.webp',
//   },
//   'Человек-Факел': {
//     descr: 'Если эта карта перемещается, её сила удваивается.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/HumanTorch-infinity.webp',
//   },
//   'Ледяной Человек': {
//     descr:
//       'При раскрытии:\n' +
//       'увеличивает стоимость случайной карты в руке вашего противника на 1 (вплоть до 6).',
//     category: 'Пул 2',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Iceman-infinity.webp',
//   },
//   'Мистерио?': {
//     descr: 'Какой Мистерио настоящий? Сила настоящего равна 4.',
//     category: 'Другое: Присутствует в игре',
//     imgUrl:
//       'https://static.marvelsnap.pro/cards/MysterioIllusion-infinity.webp',
//   },
//   'Женщина-невидимка': {
//     descr:
//       'Постоянно: карты, которые вы разыгрываете здесь, не будут раскрыты до конца матча.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/InvisibleWoman-infinity.webp',
//   },
//   'Железный кулак': {
//     descr:
//       'При раскрытии:\n' +
//       'следующая разыгранная вами карта будет перемещена на одну локацию влево.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/IronFist-infinity.webp',
//   },
//   'Железный человек': {
//     descr: 'Постоянно: ваша сила в этой локации удваивается.',
//     category: 'Стартовый набор',
//     imgUrl: 'https://static.marvelsnap.pro/cards/IronMan-infinity.webp',
//   },
//   'Железное сердце': {
//     descr: 'При раскрытии: даёт другим дружественным картам (3шт.) +2 к силе.',
//     category: 'Другое: Сезон рекрута',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Ironheart-infinity.webp',
//   },
//   'Дж. Джона Джеймсон': {
//     descr: 'Постоянно: ваши эмоции более грубые.',
//     category: 'Другое: Отсутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/JJonahJameson-infinity.webp',
//   },
//   'Джейн Фостер: Могучий Тор': {
//     descr: 'При раскрытии: берёт все карты, которые стоят 0, из вашей колоды.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/JaneFoster-infinity.webp',
//   },
//   'Джин Грей': {
//     descr:
//       'При раскрытии: следующая карта, которую разыгрывает ваш оппонент, должна быть разыграна здесь, если это возможно.',
//     category: 'Другое: Отсутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/JeanGrey-infinity.webp',
//   },
//   'Джефф Сухопутная Акула': {
//     descr:
//       'Вы можете переместить эту карту один раз. Ничто не может помешать вам переместить или разыграть эту карту в любом месте.',
//     category: 'Пул 5',
//     imgUrl:
//       'https://static.marvelsnap.pro/cards/JeffTheBabyLandShark-infinity.webp',
//   },
//   'Джессика Джонс': {
//     descr:
//       'При раскрытии: если вы не разыграете здесь карту на следующем ходу, +4 к силе.',
//     category: '1-14 лвл.',
//     imgUrl: 'https://static.marvelsnap.pro/cards/JessicaJones-infinity.webp',
//   },
//   Джубили: {
//     descr: 'При раскрытии:\nдобавляет карту из вашей колоды в эту локацию.',
//     category: 'Пул 2',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Jubilee-infinity.webp',
//   },
//   Джаггернаут: {
//     descr:
//       'При раскрытии:\n' +
//       'случайным образом перемещает карты противника, которые тот разыграл здесь на этом ходу.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Juggernaut-infinity.webp',
//   },
//   'Ка-Зар': {
//     descr: 'Постоянно: ваши карты с базовой силой 1 получают +1 к силе.',
//     category: '1-14 лвл.',
//     imgUrl: 'https://static.marvelsnap.pro/cards/KaZar-infinity.webp',
//   },
//   Канг: {
//     descr:
//       'При раскрытии:\n' +
//       'смотрите, что сделал ваш противник, и начинаете ход заново (но без Канга).',
//     category: 'Пул 5',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Kang-infinity.webp',
//   },
//   Киллмонгер: {
//     descr: 'При раскрытии:\nуничтожает ВСЕ карты с базовой стоимостью 1.',
//     category: 'Пул 2',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Killmonger-infinity.webp',
//   },
//   Эйтри: {
//     descr:
//       'При раскрытии:\nследующая разыгранная вами карта получит +4 к силе.',
//     category: 'Другое: Отсутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/KingEitri-infinity.webp',
//   },
//   Кингпин: {
//     descr: 'Уничтожает карту, если она переместиться сюда на 6-м ходу.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Kingpin-infinity.webp',
//   },
//   'Китти Прайд': {
//     descr: 'Эту карту можно вернуть обратно в руку и получить +2 к силе..',
//     category: 'Пул 5',
//     imgUrl: 'https://static.marvelsnap.pro/cards/KittyPryde-infinity.webp',
//   },
//   Кло: {
//     descr: 'Постоянно: локация справа получает +6 к силе.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Klaw-infinity.webp',
//   },
//   Налл: {
//     descr:
//       'Постоянно: получает совокупную силу всех карт, уничтоженных в этом матче.',
//     category: 'Пул 4',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Knull-infinity.webp',
//   },
//   Корг: {
//     descr:
//       'При раскрытии:\nподтасовывает карту «Скала» в колоду вашего противника.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Korg-infinity.webp',
//   },
//   Крейвен: {
//     descr: 'Когда сюда перемещается карта, получает +2 к силе.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Kraven-infinity.webp',
//   },
//   'Леди Смертельный Удар': {
//     descr:
//       'При раскрытии:\n' +
//       'уничтожает карту противника с наибольшей силой в этой локации.',
//     category: 'Другое: Отсутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/LadyDeathstrike-infinity.webp',
//   },
//   'Леди Сиф': {
//     descr:
//       'При раскрытии:\n' +
//       'сбрасывает карту с наибольшей текущей стоимостью с вашей руки.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/LadySif-infinity.webp',
//   },
//   Лидер: {
//     descr:
//       'При раскрытии:\n' +
//       'копирует все сыгранные противником карты на этом ходу на локацию справа от этой, но на вашу сторону.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Leader-infinity.webp',
//   },
//   Пиявка: {
//     descr: 'При раскрытии: убирает способности у всех карт в руке противника.',
//     category: 'Пул 2',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Leech-infinity.webp',
//   },
//   Легион: {
//     descr: 'При раскрытии: превращает другие локацию в копию этой.',
//     category: 'Другое: Отсутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Legion-infinity.webp',
//   },
//   Ящер: {
//     descr: 'Постоянно: -3 к силе, если у противника есть карты (4шт.) здесь.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Lizard-infinity.webp',
//   },
//   Локджо: {
//     descr: 'Заменяет разыгранную вами здесь карту на карту из вашей колоды.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Lockjaw-infinity.webp',
//   },
//   'Люк Кейдж': {
//     descr: 'Постоянно: сила ваших карт не может быть снижена.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/LukeCage-infinity.webp',
//   },
//   "М'Баку": {
//     descr:
//       'Прыгнет на случайную локацию, если после финального хода будет находиться в колоде.',
//     category: 'Пул 4',
//     imgUrl: 'https://static.marvelsnap.pro/cards/MBaku-infinity.webp',
//   },
//   Мэджик: {
//     descr:
//       'Нельзя разыграть на 6-м ходу. При раскрытии: меняет эту локацию на «Лимбо».',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Magik-infinity.webp',
//   },
//   Магнето: {
//     descr:
//       'При раскрытии:\n' +
//       'перемещает все вражеские карты с базовой стоимостью 3 и 4 в эту локацию.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Magneto-infinity.webp',
//   },
//   Маккари: {
//     descr:
//       'Когда эта карта будет взята из колоды, она будет разыграна в случайной локации.',
//     category: 'Другое: Отсутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Makkari-infinity.webp',
//   },
//   Мантис: {
//     descr:
//       'При раскрытии:\n' +
//       'вытяните карту из колоды противника, если тот разыграл здесь карту на этом ходу.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Mantis-infinity.webp',
//   },
//   'Мария Хилл': {
//     descr:
//       'При раскрытии: добавляет случайную карту с базовой стоимостью 1 в вашу руку.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/MariaHill-infinity.webp',
//   },
//   'Мастер Молд': {
//     descr: 'При раскрытии:\nдобавляет 2 карт(ы) «Страж» в руку противника.',
//     category: 'Пул 5',
//     imgUrl: 'https://static.marvelsnap.pro/cards/MasterMold-infinity.webp',
//   },
//   Максимус: {
//     descr: 'При раскрытии: ваш противник берёт 2 карт(ы).',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Maximus-infinity.webp',
//   },
//   Медуза: {
//     descr:
//       'При раскрытии: если эта карта находится в средней локации, +2 к силе.',
//     category: 'Стартовый набор',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Medusa-infinity.webp',
//   },
//   Мефисто: {
//     descr: 'Если вы выиграете этот матч, удваивает ваш выигрыш.',
//     category: 'Другое: Отсутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Mephisto-infinity.webp',
//   },
//   'Майлз Моралес': {
//     descr: 'Если карта переместилась на прошлом ходу, стоимость составит 1.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/MilesMorales-infinity.webp',
//   },
//   'Камень Разума': {
//     descr: 'При раскрытии: берёте 2 карт(ы) «Камень» из свой колоды.',
//     category: 'Другое: Присутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/MindStone-infinity.webp',
//   },
//   Мираж: {
//     descr:
//       'Весь матч маскируется под карту «Мистер Фантастик», становится собой в конце последнего хода.',
//     category: 'Другое: Отсутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Mirage-infinity.webp',
//   },
//   'Мистер Фантастик': {
//     descr: 'Постоянно: соседние локации получают +2 к силе.',
//     category: '1-14 лвл.',
//     imgUrl: 'https://static.marvelsnap.pro/cards/MrFantastic-infinity.webp',
//   },
//   'Мистер Негатив': {
//     descr:
//       'При раскрытии: меняет местами силу и стоимость всех карт в вашей колоде.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/MrNegative-infinity.webp',
//   },
//   'Мистер Зловещий': {
//     descr:
//       'При раскрытии:\n' +
//       'добавляет карту «Зловещий Клон» с той же силой в эту локацию.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/MrSinister-infinity.webp',
//   },
//   'Мисти Найт': {
//     descr: '«Мы должны спасти этот город».',
//     category: 'Стартовый набор',
//     imgUrl: 'https://static.marvelsnap.pro/cards/MistyKnight-infinity.webp',
//   },
//   Мьёльнир: {
//     descr: 'При раскрытии: увеличивает силу карты «Тор» на 6.',
//     category: 'Другое: Присутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Mjolnir-infinity.webp',
//   },
//   МОДОК: {
//     descr: 'При раскрытии: сбрасывает вашу руку.',
//     category: 'Пул 5',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Modok-infinity.webp',
//   },
//   Моджо: {
//     descr:
//       'Постоянно: +6 к силе, если оба игрока имеют по 4 карты на этой локации.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Mojo-infinity.webp',
//   },
//   Монстр: {
//     descr: '«Осторожно... Он любит пюре».',
//     category: 'Другое: Присутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Monster-infinity.webp',
//   },
//   'Лунная девочка': {
//     descr: 'При раскрытии:\nдублирует вашу руку.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/MoonGirl-infinity.webp',
//   },
//   'Лунный рыцарь': {
//     descr: 'При раскрытии:\nсбрасывает по карте с руки каждого игрока.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/MoonKnight-infinity.webp',
//   },
//   Морбиус: {
//     descr: 'Постоянно: +2 к силе за каждую сброшенную вами карту в этой игре.',
//     category: 'Пул 2',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Morbius-infinity.webp',
//   },
//   Морф: {
//     descr:
//       'При раскрытии: становится копией случайной карты из руки противника.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Morph-infinity.webp',
//   },
//   'Мисс Марвел': {
//     descr:
//       'Постоянно: если это ваша единственная карта здесь, соседние локации получают +5 к силе.',
//     category: 'Другое: Отсутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/MsMarvel-infinity.webp',
//   },
//   Множитель: {
//     descr: 'При перемещении оставляет свою копию на предыдущей локации.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/MultipleMan-infinity.webp',
//   },
//   Мистерио: {
//     descr:
//       'При разыгрывании этой карты, также разыгрывает Иллюзии на других локациях. Эта карта маскируется под Иллюзию до конца матча.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Mysterio-infinity.webp',
//   },
//   Мистик: {
//     descr:
//       'При раскрытии: если последняя разыгранная вами карта имеет постоянную способность, эта карта получает её.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Mystique-infinity.webp',
//   },
//   Накия: {
//     descr:
//       'При раскрытии:\n' +
//       'крайние слева карты (2шт.) в вашей руке получают +2 к силе.',
//     category: 'Пул 2',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Nakia-infinity.webp',
//   },
//   Нэмор: {
//     descr: 'Постоянно: +5 к силе, если это ваша единственная карта здесь.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Namor-infinity.webp',
//   },
//   Небула: {
//     descr:
//       'При раскрытии: если ваш оппонент разыграл карту здесь на этом ходу, сила х2 и положите её в свою руку.',
//     category: 'Другое: Отсутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Nebula-infinity.webp',
//   },
//   'Сверхзвуковая Боеголовка': {
//     descr:
//       'Если здесь будет разыграна любая карта, то и та, и эта карты уничтожаются.',
//     category: 'Пул 5',
//     imgUrl:
//       'https://static.marvelsnap.pro/cards/NegasonicTeenageWarhead-infinity.webp',
//   },
//   'Ник Фьюри': {
//     descr:
//       'При раскрытии:\n' +
//       'добавляет случайные карты (3шт.) с базовой стоимостью 6 в вашу руку.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/NickFury-infinity.webp',
//   },
//   'Ночная медсестра': {
//     descr:
//       'При раскрытии: добавьте в свою руку все карты, которые вы сбросили или уничтожили в последний ход.',
//     category: 'Другое: Отсутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/NightNurse-infinity.webp',
//   },
//   'Ночной змей': {
//     descr: 'Эту карту можно переместить один раз.',
//     category: '1-14 лвл.',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Nightcrawler-infinity.webp',
//   },
//   Нимрод: {
//     descr: 'При уничтожении добавляет одну копию во все другие локации.',
//     category: 'Пул 5',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Nimrod-infinity.webp',
//   },
//   Ниндзя: {
//     descr: '«Я служу Руке».',
//     category: 'Другое: Присутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Ninja-infinity.webp',
//   },
//   Нова: {
//     descr: 'При уничтожении увеличивает силу ваших карт на 1.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Nova-infinity.webp',
//   },
//   Один: {
//     descr:
//       'При раскрытии:\n' +
//       'активирует способности «При раскрытии» других ваших карт в этой локации.',
//     category: '1-14 лвл.',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Odin-infinity.webp',
//   },
//   Окойе: {
//     descr: 'При раскрытии: увеличивает силу каждой карты в вашей колоде на 1.',
//     category: 'Пул 2',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Okoye-infinity.webp',
//   },
//   'Красный Омега': {
//     descr:
//       'Постоянно: если у вас есть преимущество в 10 очк. силы здесь, +4 к силе остальных локаций.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/OmegaRed-infinity.webp',
//   },
//   Натиск: {
//     descr:
//       'Постоянно: удваивает ваши другие постоянные эффекты на этой локации.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Onslaught-infinity.webp',
//   },
//   Орка: {
//     descr: 'Постоянно: +5 к силе, если это ваша единственная карта здесь.',
//     category: 'Пул 4',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Orka-infinity.webp',
//   },
//   Патриот: {
//     descr: 'Постоянно: ваши карты без способностей получают +2 к силе.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Patriot-infinity.webp',
//   },
//   Полярис: {
//     descr:
//       'При раскрытии:\n' +
//       'перемещает вражескую карту с базовой стоимостью 1 или 2 в эту локацию.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Polaris-infinity.webp',
//   },
//   'Камень Силы': {
//     descr:
//       'Постоянно: если вы разыграете все 6 Камней, Танос получит +10 к силе. Где бы он ни был.',
//     category: 'Другое: Присутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/PowerStone-infinity.webp',
//   },
//   'Профессор Икс': {
//     descr:
//       'Постоянно: закрывает эту локацию (карты не могут быть добавлены, убраны и т. д.).',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/ProfessorX-infinity.webp',
//   },
//   Псайлок: {
//     descr: 'При раскрытии: на следующем ходу вы получите +1 к энергии.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Psylocke-infinity.webp',
//   },
//   Каратель: {
//     descr: 'Постоянно: +1 к силе за каждую вражескую карту в этой локации.',
//     category: 'Стартовый набор',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Punisher-infinity.webp',
//   },
//   Дрожь: {
//     descr:
//       'При раскрытии: меняет все локации местами, если эта карта находится на средней локации.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Quake-infinity.webp',
//   },
//   Ртуть: {
//     descr: 'Непременно окажется в стартовой руке.',
//     category: 'Стартовый набор',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Quicksilver-infinity.webp',
//   },
//   Квинджет: {
//     descr:
//       'Постоянно: карты, которых изначально не было в вашей колоде, стоят на 1 меньше.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Quinjet-infinity.webp',
//   },
//   Рандом: {
//     descr:
//       'При раскрытии: установите силу этой карты равной силе случайной карты в вашей колоде.',
//     category: 'Другое: Отсутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Random-infinity.webp',
//   },
//   Хищник: {
//     descr: '«СКРРРРРРРР»',
//     category: 'Другое: Присутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Raptor-infinity.webp',
//   },
//   'Камень Реальности': {
//     descr: 'При раскрытии:\nпревращает эту локацию в новую. Вытягиваете карту.',
//     category: 'Другое: Присутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/RealityStone-infinity.webp',
//   },
//   'Красный Страж': {
//     descr: 'При раскрытии: вы должны разыграть карту здесь на следующем ходу.',
//     category: 'Другое: Отсутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/RedGuardian-infinity.webp',
//   },
//   'Красный Череп': {
//     descr: 'Постоянно: повышает силу вражеских карт в этой локации на 2.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/RedSkull-infinity.webp',
//   },
//   Спасительница: {
//     descr:
//       'При раскрытии: если вы разыгрываете карту здесь на следующем ходу, +5 к силе.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Rescue-infinity.webp',
//   },
//   Носорог: {
//     descr:
//       'При раскрытии:\nпревращает эту локацию в руины (убирает её способность).',
//     category: 'Пул 2',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Rhino-infinity.webp',
//   },
//   Скала: {
//     descr: '«Ну, она бесполезная...»',
//     category: 'Другое: Присутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Rock-infinity.webp',
//   },
//   'Енот Ракета': {
//     descr:
//       'При раскрытии: если противник разыграл карту здесь на этом ходу, +2 к силе.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/RocketRaccoon-infinity.webp',
//   },
//   Оползень: {
//     descr:
//       'При раскрытии:\nподтасовывает 2 карт(ы) «Скала» в колоду противника.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Rockslide-infinity.webp',
//   },
//   Шельма: {
//     descr:
//       'При раскрытии:\n' +
//       'похищает постоянную способность случайной карты противника в этой локации.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Rogue-infinity.webp',
//   },
//   'Ронан Обвинитель': {
//     descr: 'Постоянно: +2 к силе за каждую карту в руке вашего противника.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Ronan-infinity.webp',
//   },
//   Саблезубый: {
//     descr: 'При уничтожении возвращается в вашу руку. Теперь стоит 0.',
//     category: 'Пул 2',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Sabretooth-infinity.webp',
//   },
//   'Песочный Человек': {
//     descr: 'Постоянно: за один ход игроки могут разыграть только 1 карту.',
//     category: 'Пул 2',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Sandman-infinity.webp',
//   },
//   Саурон: {
//     descr:
//       'При раскрытии:\n' +
//       'убирает способности всех постоянных карт в вашей руке и колоде.',
//     category: 'Пул 5',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Sauron-infinity.webp',
//   },
//   'Алая Ведьма': {
//     descr: 'При раскрытии:\nзаменяет эту локацию на новую случайным образом.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/ScarletWitch-infinity.webp',
//   },
//   Скорпион: {
//     descr: 'При раскрытии:\nснижает силу карт в руке вашего противника на 1.',
//     category: 'Пул 2',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Scorpion-infinity.webp',
//   },
//   Страж: {
//     descr: 'При раскрытии:\nдобавляет в вашу руку ещё одного Стража.',
//     category: 'Стартовый набор',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Sentinel-infinity.webp',
//   },
//   Часовой: {
//     descr:
//       'Нельзя сыграть на локации справа. При раскрытии: добавляет Пустоту с силой -8 в правую локацию.',
//     category: 'Пул 4',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Sentry-infinity.webp',
//   },
//   Сера: {
//     descr:
//       'Постоянно: карты в вашей руке теперь стоят на 1 меньше (но не менее 1).',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Sera-infinity.webp',
//   },
//   'Король Теней': {
//     descr: 'При раскрытии:\nвозвращает всем картам здесь их базовую силу.',
//     category: 'Пул 5',
//     imgUrl: 'https://static.marvelsnap.pro/cards/ShadowKing-infinity.webp',
//   },
//   'Шан-Чи': {
//     descr:
//       'При раскрытии:\n' +
//       'уничтожает все вражеские карты в этой локации с силой не менее 9.',
//     category: 'Пул 2',
//     imgUrl: 'https://static.marvelsnap.pro/cards/ShangChi-infinity.webp',
//   },
//   Шанна: {
//     descr:
//       'При раскрытии: добавляет случайную карту с базовой стоимостью 1 на каждую локацию.',
//     category: 'Пул 5',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Shanna-infinity.webp',
//   },
//   'Женщина-Халк': {
//     descr:
//       'Будет стоить на 1 меньше за каждое неизрасходованное очко энергии на прошлом ходу.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/SheHulk-infinity.webp',
//   },
//   Шокер: {
//     descr: '«Я взорву тебя!»',
//     category: 'Стартовый набор',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Shocker-infinity.webp',
//   },
//   Шури: {
//     descr: 'При раскрытии: x2 к силе следующей карты, которую вы разыграете.',
//     category: 'Пул 4',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Shuri-infinity.webp',
//   },
//   Шёлк: {
//     descr:
//       'После того, как здесь разыграна ЛЮБАЯ карта, она перемещается в другое место.',
//     category: 'Другое: Отсутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Silk-infinity.webp',
//   },
//   'Серебряный Соболь': {
//     descr:
//       'Вы можете разыграть эту карту только в той локации, на которой у вас есть 6+ силы.',
//     category: 'Другое: Отсутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/SilverSable-infinity.webp',
//   },
//   'Серебряный Самурай': {
//     descr: 'Когда эта карта сбрасывается с вашей руки, возьмите карту.',
//     category: 'Другое: Отсутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/SilverSamurai-infinity.webp',
//   },
//   'Серебряный Сёрфер': {
//     descr:
//       'При раскрытии:\n' +
//       'остальные ваши карты с базовой стоимостью 3 получают +2 к силе.',
//     category: 'Пул 4',
//     imgUrl: 'https://static.marvelsnap.pro/cards/SilverSurfer-infinity.webp',
//   },
//   Сноугард: {
//     descr:
//       'Находясь в вашей руке, эта карта превращается в Ястреба или Медведя на каждом ходу.',
//     category: 'Пул 5',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Snowguard-infinity.webp',
//   },
//   'Камень Души': {
//     descr:
//       'При раскрытии: берёте карту. Постоянно: сила вражеских карт снижена на 1.',
//     category: 'Другое: Присутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/SoulStone-infinity.webp',
//   },
//   'Камень Пространства': {
//     descr:
//       'При раскрытии:\n' +
//       'сможете переместить 1 карту из этой локации на следующем ходу. Вытягиваете карту.',
//     category: 'Другое: Присутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/SpaceStone-infinity.webp',
//   },
//   Спектр: {
//     descr: 'При раскрытии: даёт вашим постоянным картам +2 к силе.',
//     category: '1-14 лвл.',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Spectrum-infinity.webp',
//   },
//   'Человек-паук': {
//     descr:
//       'При раскрытии: ваш противник не сможет разыгрывать карты на этой локации на следующем ходу.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/SpiderMan-infinity.webp',
//   },
//   'Женщина-паук': {
//     descr: 'При раскрытии:\nснижает силу всех вражеских карт здесь на 1.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/SpiderWoman-infinity.webp',
//   },
//   'Девушка-белка': {
//     descr:
//       'При раскрытии:\nдобавляет карту «Белка» с силой 1 во все другие локации.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/SquirrelGirl-infinity.webp',
//   },
//   'Звёздный Лорд': {
//     descr:
//       'При раскрытии: если противник разыграл карту здесь на этом ходу, +3 к силе.',
//     category: 'Стартовый набор',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Starlord-infinity.webp',
//   },
//   Высота: {
//     descr: 'Стоит 1, если противник сбрасывал карту из своей руки в этой игре.',
//     category: 'Пул 5',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Stature-infinity.webp',
//   },
//   Стегрон: {
//     descr:
//       'При раскрытии: перемещает случайную карту противника отсюда в другую локацию.',
//     category: 'Пул 5',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Stegron-infinity.webp',
//   },
//   Шторм: {
//     descr:
//       'При раскрытии:\n' +
//       'затапливает локацию. Следующий ход будет последним ходом, на котором здесь могут быть разыграны карты.',
//     category: 'Пул 2',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Storm-infinity.webp',
//   },
//   Силач: {
//     descr: 'Постоянно: если в вашей руке нет карт, +6 к силе.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/StrongGuy-infinity.webp',
//   },
//   Страйф: {
//     descr:
//       'Если в конце любого из ходов у вашего противника здесь 12+ силы, эта карта уничтожается.',
//     category: 'Другое: Отсутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Stryfe-infinity.webp',
//   },
//   Санспот: {
//     descr:
//       'В конце каждого хода +1 к силе за каждое неизрасходованное очко энергии.',
//     category: 'Пул 2',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Sunspot-infinity.webp',
//   },
//   'Супер-скрулл': {
//     descr: 'Постоянно: обладает постоянными эффектами всех карт противника.',
//     category: 'Пул 4',
//     imgUrl: 'https://static.marvelsnap.pro/cards/SuperSkrull-infinity.webp',
//   },
//   Суртур: {
//     descr:
//       'Если вы переместите карту «Человек-Факел »в эту локацию, +10 к силе.',
//     category: 'Другое: Отсутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Surtur-infinity.webp',
//   },
//   Рой: {
//     descr:
//       'Уходя в сброс из вашей руки, добавляет в неё две копии, которые стоят 0.',
//     category: 'Пул 2',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Swarm-infinity.webp',
//   },
//   'Мастер Меча': {
//     descr: 'При раскрытии:\nсбрасывает карту с вашей руки.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/SwordMaster-infinity.webp',
//   },
//   Симбиот: {
//     descr: '«ЙУУУУММММММ!!!»',
//     category: 'Другое: Присутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Symbiote-infinity.webp',
//   },
//   Таскмастер: {
//     descr:
//       'При раскрытии: сила этой карты становится равной силе последней разыгранной вами карты.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Taskmaster-infinity.webp',
//   },
//   Танос: {
//     descr: 'Подтасовывает в вашу колоду 6 Камней Бесконечности в начале матча.',
//     category: 'Пул 5',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Thanos-infinity.webp',
//   },
//   Коллекционер: {
//     descr:
//       'Каждый раз, когда вы берёте в руку карту (за исключением вытягивания её из колоды), +1 к силе.',
//     category: 'Пул 2',
//     imgUrl: 'https://static.marvelsnap.pro/cards/TheCollector-infinity.webp',
//   },
//   Капюшон: {
//     descr: 'При раскрытии:\nдобавляет карту «Демон» в вашу руку.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Hood-infinity.webp',
//   },
//   Инфинаут: {
//     descr:
//       'Нельзя разыгрывать эту карту, если вы разыграли карту на прошлом ходу.',
//     category: 'Пул 2',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Infinaut-infinity.webp',
//   },
//   'Живой Трибунал': {
//     descr:
//       'В конце матча распределяет вашу общую силу поровну между всеми локациями.',
//     category: 'Пул 5',
//     imgUrl: 'https://static.marvelsnap.pro/cards/LivingTribunal-infinity.webp',
//   },
//   'Сила Феникса': {
//     descr:
//       'При раскрытии:\n' +
//       'восстанавливает одну из ваших уничтоженных карт с силой 5+. Если это карта «Джин Грей», +10 к силе.',
//     category: 'Другое: Отсутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/ThePhoenixForce-infinity.webp',
//   },
//   Существо: {
//     descr: '«Время крушить!»',
//     category: 'Стартовый набор',
//     imgUrl: 'https://static.marvelsnap.pro/cards/TheThing-infinity.webp',
//   },
//   Пустота: {
//     descr: '«И снова здравствуйте...»',
//     category: 'Другое: Присутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/TheVoid-infinity.webp',
//   },
//   Тор: {
//     descr: 'При раскрытии:\nподтасовывает Мьёльнир в вашу колоду.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Thor-infinity.webp',
//   },
//   'Дух тигра': {
//     descr: '«Моя месть!»',
//     category: 'Другое: Присутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/TigerSpirit-infinity.webp',
//   },
//   'Камень Времени': {
//     descr:
//       'При раскрытии: берёте карту. На следующем ходу вы получите +1 к энергии.',
//     category: 'Другое: Присутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/TimeStone-infinity.webp',
//   },
//   Титания: {
//     descr: 'Если здесь будет разыграна любая карта, эта карта сменит сторону.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Titania-infinity.webp',
//   },
//   Жаба: {
//     descr:
//       'При раскрытии:\n' +
//       'перемещает последнюю разыгранную вами карту в эту локацию.',
//     category: 'Другое: Отсутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Toad-infinity.webp',
//   },
//   'Тифозная Мэри': {
//     descr: 'Постоянно: снижает силу остальных ваших карт на 1.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/TyphoidMary-infinity.webp',
//   },
//   'Наблюдатель Уату': {
//     descr:
//       'Если эта карта побывала у вас в руке, вы можете видеть ещё не раскрытые локации.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Uatu-infinity.webp',
//   },
//   Альтрон: {
//     descr:
//       'При раскрытии:\nсоздаёт по 4 Дрона с силой 1 на каждой другой локации.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Ultron-infinity.webp',
//   },
//   'Дядя Бен': {
//     descr: 'При уничтожении добавляет карту «Человек-паук» в вашу руку.',
//     category: 'Другое: Отсутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/UncleBen-infinity.webp',
//   },
//   Валькирия: {
//     descr: 'При раскрытии: меняет силу ВСЕХ карт в этой локации на 3.',
//     category: 'Пул 4',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Valkyrie-infinity.webp',
//   },
//   Веном: {
//     descr:
//       'При раскрытии:\n' +
//       'уничтожает ваши прочие карты на этой локации. Добавляет их силу себе.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Venom-infinity.webp',
//   },
//   Вибраниум: {
//     descr: 'Постоянно: нельзя уничтожить.',
//     category: 'Другое: Присутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Vibranium.webp',
//   },
//   Гадюка: {
//     descr:
//       'При раскрытии:\n' +
//       'противник получает контроль над одной из других ваших карт в этой локации.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Viper-infinity.webp',
//   },
//   Вижн: {
//     descr: 'Эту карту можно перемещать каждый ход.',
//     category: 'Пул 2',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Vision-infinity.webp',
//   },
//   'Вив Вижн': {
//     descr:
//       'Если вы перемещаете другую свою карту, эта карта также перемещается в ту локацию.',
//     category: 'Другое: Отсутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Viv-infinity.webp',
//   },
//   Стервятник: {
//     descr: 'Когда эта карта перемещается, +5 к силе.',
//     category: 'Пул 2',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Vulture-infinity.webp',
//   },
//   Воитель: {
//     descr: 'Постоянно: ваши карты с базовой стоимостью 1 получают +1 к силе.',
//     category: 'Другое: Отсутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/WarMachine-infinity.webp',
//   },
//   Варпатч: {
//     descr: 'Постоянно: если какая-либо из ваших локаций пуста, +4 к силе.',
//     category: 'Пул 2',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Warpath-infinity.webp',
//   },
//   Оса: {
//     descr: '«Моя тайная сила в том, что я довожу дела до конца».',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Wasp-infinity.webp',
//   },
//   Волна: {
//     descr:
//       'При раскрытии: на следующем ходу карты в руках всех игроков будут стоить 4.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Wave-infinity.webp',
//   },
//   'Белая Королева': {
//     descr:
//       'При раскрытии:\n' +
//       'вытаскивает копию карты с самой высокой текущей стоимостью из руки противника.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/WhiteQueen-infinity.webp',
//   },
//   'Белая Тигрица': {
//     descr: 'При раскрытии:\nдобавляет тигра с силой 7 в другую локацию.',
//     category: '1-14 лвл.',
//     imgUrl: 'https://static.marvelsnap.pro/cards/WhiteTiger-infinity.webp',
//   },
//   'Укус Вдовы': {
//     descr:
//       'Если эта карта находится в вашей руке, то карты из вашей колоды не могут быть вытянуты.',
//     category: 'Другое: Присутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/WidowsBite-infinity.webp',
//   },
//   'Зимний Солдат': {
//     descr: '«Пришло время взглянуть в лицо прошлому».',
//     category: 'Другое: Присутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/WinterSoldier-infinity.webp',
//   },
//   'Ведьмин огонь': {
//     descr:
//       'При раскрытии: ваш оппонент берёт карту, её стоимость увеличивается на 1 (вплоть до 6).',
//     category: 'Другое: Отсутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Witchfire-infinity.webp',
//   },
//   Волчица: {
//     descr: 'При раскрытии: +2 к силе за каждую другую вашу карту здесь.',
//     category: '1-14 лвл.',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Wolfsbane-infinity.webp',
//   },
//   Росомаха: {
//     descr:
//       'Если эта карта сброшена или уничтожена, она восстановится на случайной локации и получит +2 к силе.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Wolverine-infinity.webp',
//   },
//   Вонг: {
//     descr:
//       'Постоянно: способности ваших карт «При раскрытии» будут срабатывать дважды на этой локации.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Wong-infinity.webp',
//   },
//   'X-23': {
//     descr:
//       'Когда эта карта сбрасывается с вашей руки, она возвращается обратно в руку и стоит 0.',
//     category: 'Другое: Отсутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/X23-infinity.webp',
//   },
//   'Жёлтый Шершень': {
//     descr:
//       'При раскрытии:\nснижает силу остальных ваших карт в этой локации на 1.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Yellowjacket-infinity.webp',
//   },
//   'Йо-Йо': {
//     descr:
//       'Когда эта карта переместится, перемещается обратно и получает +1 к силе.',
//     category: 'Другое: Отсутствует в игре',
//     imgUrl: 'https://static.marvelsnap.pro/cards/YoYo-infinity.webp',
//   },
//   Йонду: {
//     descr: 'При раскрытии:\nуничтожает верхнюю карту с колоды противника.',
//     category: 'Пул 1',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Yondu-infinity.webp',
//   },
//   Забу: {
//     descr:
//       'Постоянно: ваши карты с базовой стоимостью 4 теперь стоят на 1 меньше (но не менее 1).',
//     category: 'Пул 5',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Zabu-infinity.webp',
//   },
//   Зеро: {
//     descr:
//       'При раскрытии:\n' +
//       'убирает способности со следующей разыгрываемой вами карты.',
//     category: 'Пул 3',
//     imgUrl: 'https://static.marvelsnap.pro/cards/Zero-infinity.webp',
//   },
// };

// let data;

// const fs = require('fs');

// fs.readFile('cardBaseJSON.json', (err, data) => {
//   if (err) throw err;
//   data = JSON.parse(data);
// }

import data from './cardBaseJSON.json' assert { type: 'json' };

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
  const mcu = data.mcu;

  // Создание HTML-элементов для карточки
  const card = document.createElement('div');
  card.classList.add('card');

  if (mcu === 'is') {
    card.setAttribute('data-category', `${category} mcu`);
  } else if (mcu === 'isnot') {
    card.setAttribute('data-category', `${category} notmcu`);
  } else {
    card.setAttribute('data-category', category);
  }

  const cardImage = document.createElement('div');
  cardImage.classList.add('card-image');
  cardImage.style.backgroundImage = `url('${imageUrl}')`;

  const cardStatusMCU = document.createElement('div');

  if (mcu === 'is') {
    cardStatusMCU.classList.add('mcuStyle');
    cardStatusMCU.textContent = 'Присутствует в Кино';
  } else if (mcu === 'isnot') {
    cardStatusMCU.classList.add('notmcuStyle');
    cardStatusMCU.textContent = 'Отсутствует в Кино';
  } else if (mcu === 'other') {
  }

  const cardCategory = document.createElement('div');
  cardCategory.classList.add('card-category');
  cardCategory.textContent = `${data.category}`;

  const cardTitle = document.createElement('div');
  cardTitle.classList.add('card-title');
  cardTitle.innerHTML = `<b>${name}</b>`;

  const cardDescription = document.createElement('div');
  cardDescription.classList.add('card-description');
  cardDescription.innerHTML = description;

  // Добавление созданных элементов на страницу
  card.appendChild(cardImage);

  if (mcu !== 'other') {
    card.appendChild(cardStatusMCU);
  }

  card.appendChild(cardCategory);
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

// const fs = require('fs');

// fs.readFile('cardBaseJSON.json', (err, data) => {
//   if (err) throw err;
//   const cardsObj = JSON.parse(data);
//   // console.log(obj);

//   // const data = {
//   //   Мерзость: {
//   //     descr: '«Глупый сброд! Вы все подо мной!»',
//   //     category: 'Стартовый набор',
//   //     imgUrl: 'https://static.marvelsnap.pro/cards/Abomination-infinity.webp',
//   //   },
//   // здесь должны быть остальные объекты в формате "название карты": { "descr": "", "category": "", "imgUrl": "" }

//   // Функция для определения категории карты
//   function getCategory(category) {
//     switch (category) {
//       case 'Стартовый набор':
//         return 'all starter';
//       case 'Пул 1':
//         return 'all pool1';
//       case 'Пул 2':
//         return 'all pool2';
//       case 'Пул 3':
//         return 'all pool3';
//       case 'Пул 4':
//         return 'all pool4';
//       case 'Пул 5':
//         return 'all pool5';
//       case 'Сезон рекрута':
//         return 'all recruit-season';
//       case 'Отсутствует в игре':
//         return 'all not-available';
//       case 'Присутствует в игре':
//         return 'all available';
//       default:
//         return '';
//     }
//   }

//   // Функция для создания HTML-элементов на основе данных из базы
//   function createCardElement(name, cardsObj) {
//     const category = getCategory(cardsObj.category);
//     const imageUrl = cardsObj.imgUrl;
//     const description = cardsObj.descr;

//     // Создание HTML-элементов для карточки
//     const card = document.createElement('div');
//     card.classList.add('card');
//     card.setAttribute('data-category', category);

//     const cardImage = document.createElement('div');
//     cardImage.classList.add('card-image');
//     cardImage.style.backgroundImage = `url('${imageUrl}')`;

//     const cardCategory = document.createElement('div');
//     cardCategory.classList.add('card-category');
//     cardCategory.textContent = `Другое: ${cardsObj.category}`;

//     const cardTitle = document.createElement('div');
//     cardTitle.classList.add('card-title');
//     cardTitle.textContent = name;

//     const cardDescription = document.createElement('div');
//     cardDescription.classList.add('card-description');
//     cardDescription.textContent = description;

//     // Добавление созданных элементов на страницу
//     card.appendChild(cardImage);
//     card.appendChild(cardCategory);
//     card.appendChild(cardTitle);
//     card.appendChild(cardDescription);

//     return card;
//   }

//   // Создание карточек для каждой записи в базе данных и добавление их на страницу
//   const container = document.querySelector('.cards');

//   for (let name in cardsObj) {
//     const cardElement = createCardElement(name, cardsObj[name]);
//     container.appendChild(cardElement);
//   }
// });
