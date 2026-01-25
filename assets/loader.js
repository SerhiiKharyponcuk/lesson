// loader.js
(function () {
  'use strict';

  const loader = document.getElementById('wsapp-loader');
  const app = document.getElementById('wsapp-app');
  const bar = document.getElementById('wsappLoaderBar');
  const percentEl = document.getElementById('wsappLoaderPercent');
  const skipBtn = document.getElementById('wsappLoaderSkip');

  if (!loader || !bar || !percentEl) {
    console.warn('[WSAPP Loader] Required elements not found.');
    return;
  }

  let progress = 0;
  let finished = false;

  function finish() {
    if (finished) return;
    finished = true;

    loader.classList.add('wsapp-loader--hide');
    if (app) app.classList.remove('wsapp-app--hidden');

    setTimeout(() => {
      if (loader && loader.parentNode) loader.parentNode.removeChild(loader);
    }, 520);
  }

  function tick() {
    const step = progress < 65 ? 6 : (progress < 90 ? 3 : 1);
    progress = Math.min(100, progress + step);

    bar.style.width = progress + '%';
    percentEl.textContent = progress + '%';

    if (progress >= 100) {
      clearInterval(timer);
      setTimeout(finish, 250);
    }
  }

  const timer = setInterval(tick, 120);

  window.addEventListener('load', () => {
    progress = Math.max(progress, 88);
  });

  if (skipBtn) {
    skipBtn.addEventListener('click', () => {
      clearInterval(timer);
      progress = 100;
      bar.style.width = '100%';
      percentEl.textContent = '100%';
      finish();
    });
  }
})();
