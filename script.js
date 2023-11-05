const tablinks = document.querySelectorAll('.tablinks');
const cards = document.querySelectorAll('.card');

// Открываем вкладки и скрываем соответствующие карточки при загрузке страницы
window.onload = function () {
  // const category = localStorage.getItem('category');
  const category = localStorage.getItem('category')
    ? localStorage.getItem('category')
    : 'all';

  showCards(category);
  setActiveTab(category);
};

// Обработчик клика на вкладке
tablinks.forEach((tablink) => {
  tablink.addEventListener('click', function () {
    localStorage.setItem('category', `${this.id}`);
    // const category = this.id;
    const category = localStorage.getItem('category');
    showCards(category);
    setActiveTab(category);
  });
});

// Функция для показа карточек, соответствующих выбранной категории
function showCards(category) {
  const searchCategory = new RegExp(`\\b${category}\\b`, 'g');
  cards.forEach((card) => {
    if (card.dataset.category.match(searchCategory)) {
      // OLD card.dataset.category.includes(category)
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// Функция для установки активной вкладки
function setActiveTab(category) {
  tablinks.forEach((tablink) => {
    if (tablink.id === category) {
      tablink.classList.add('active');
    } else {
      tablink.classList.remove('active');
    }
  });
}

// Search
function search() {
  let input = document.querySelector('#inputSearch');
  let filter = input.value.toUpperCase();
  let ul = document.querySelector('.cards');
  let li = document.querySelectorAll('.card');

  for (let i = 0; i < li.length; i++) {
    let a = li[i];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}

document.addEventListener('keyup', search);

const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 400 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };
  },
};

btnUp.addEventListener();
