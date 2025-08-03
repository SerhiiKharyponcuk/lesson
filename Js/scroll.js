const upBtn = document.querySelector('.scroll-up');
const downBtn = document.querySelector('.scroll-down');

upBtn.addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: 'smooth' })
);

downBtn.addEventListener('click', () =>
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
);

// Показувати "Вгору" після прокрутки вниз; ховати "Вниз" біля кінця сторінки
const toggleButtons = () => {
  const nearBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 400;
  const pastTop = window.scrollY > 400;

  upBtn.classList.toggle('hidden', !pastTop);
  downBtn.classList.toggle('hidden', nearBottom);
};

window.addEventListener('scroll', toggleButtons);
window.addEventListener('load', toggleButtons);
