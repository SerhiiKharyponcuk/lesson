(() => {
  "use strict";

  window.taskReady = window.initCountrySearch().catch(() => {
    document.querySelector("#country-status").textContent =
      "Не вдалося підготувати пошук. Онови сторінку.";
  });
})();
