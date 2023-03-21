const tablinks = document.querySelectorAll('.tablinks');
const cards = document.querySelectorAll('.card');

// Открываем вкладки и скрываем соответствующие карточки при загрузке страницы
window.onload = function () {
  showCards('all');
};

// Обработчик клика на вкладке
tablinks.forEach((tablink) => {
  tablink.addEventListener('click', function () {
    const category = this.id;
    showCards(category);
    setActiveTab(category);
  });
});

// Функция для показа карточек, соответствующих выбранной категории
function showCards(category) {
  cards.forEach((card) => {
    if (card.dataset.category.includes(category)) {
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
