(() => {
  "use strict";

  function delayedPromise(value, delay) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(value), delay);
    });
  }

  function randomDelay(value) {
    const delay = Math.floor(Math.random() * 4001) + 1000;
    return delayedPromise(value, delay);
  }

  window.delayedPromise = delayedPromise;
  window.randomDelay = randomDelay;

  window.runTask = function () {
    const button = document.querySelector("#runJsBtn");
    const allResult = document.querySelector("#all-result");
    const raceResult = document.querySelector("#race-result");
    if (button.disabled) return;

    button.disabled = true;
    allResult.textContent = "Очікуємо всі п’ять промісів…";
    raceResult.textContent = "Очікуємо найшвидший проміс…";

    const promises = [
      delayedPromise("Перший", 2000),
      delayedPromise("Другий", 1000),
      delayedPromise("Третій", 3000),
      delayedPromise("Четвертий", 1500),
      delayedPromise("П’ятий", 500),
    ];

    const randomPromises = [
      randomDelay("Учасник 1"),
      randomDelay("Учасник 2"),
      randomDelay("Учасник 3"),
      randomDelay("Учасник 4"),
      randomDelay("Учасник 5"),
    ];

    const allTask = Promise.all(promises).then((values) => {
      console.log("Promise.all:", values);
      allResult.textContent = JSON.stringify(values, null, 2);
    });

    const raceTask = Promise.race(randomPromises).then((winner) => {
      console.log("Promise.race:", winner);
      raceResult.textContent = `Найшвидший: ${winner}`;
    });

    Promise.all([allTask, raceTask])
      .catch((error) => {
        console.error(error);
        raceResult.textContent = "Не вдалося виконати проміси.";
      })
      .finally(() => {
        button.disabled = false;
      });
  };
})();
