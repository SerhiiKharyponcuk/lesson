"use strict";

window.runTask = function () {
  const hourTimer = document.querySelector("#hour-timer");
  const startHourButton = document.querySelector("#start-hour-timer");
  const resetHourButton = document.querySelector("#reset-hour-timer");
  const hourMessage = document.querySelector("#hour-message");

  const secondsTimer = document.querySelector("#seconds-timer");
  const startSecondsButton = document.querySelector("#start-seconds-timer");
  const secondsMessage = document.querySelector("#seconds-message");
  const animationElement = document.querySelector("#animation-element");

  if (startHourButton.dataset.ready === "true") {
    return;
  }

  startHourButton.dataset.ready = "true";

  let hourInterval = null;
  let secondsInterval = null;
  let minutesLeft = 60;

  function showHourTime() {
    const hours = Math.floor(minutesLeft / 60);
    const minutes = minutesLeft % 60;

    hourTimer.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:00`;
  }

  startHourButton.addEventListener("click", () => {
    clearInterval(hourInterval);
    startHourButton.disabled = true;
    hourMessage.textContent = "Таймер запущено.";

    hourInterval = setInterval(() => {
      minutesLeft -= 1;
      showHourTime();

      if (minutesLeft === 30) {
        hourMessage.textContent = "Залишилось менше половини часу!";
      }

      if (minutesLeft === 0) {
        clearInterval(hourInterval);
        hourMessage.textContent = "Час вийшов!";
        startHourButton.disabled = false;
      }
    }, 60000);
  });

  resetHourButton.addEventListener("click", () => {
    clearInterval(hourInterval);
    minutesLeft = 60;
    showHourTime();
    hourMessage.textContent = "";
    startHourButton.disabled = false;
  });

  startSecondsButton.addEventListener("click", () => {
    const timerDuration = 30000;
    const startTime = Date.now();

    clearInterval(secondsInterval);
    startSecondsButton.disabled = true;
    startSecondsButton.textContent = "Таймер працює";
    secondsMessage.textContent = "";
    animationElement.classList.remove("animation-active");

    secondsInterval = setInterval(() => {
      const timePassed = Date.now() - startTime;
      const timeLeft = Math.max(0, timerDuration - timePassed);

      secondsTimer.textContent = (timeLeft / 1000).toFixed(3);

      if (timeLeft <= 10000) {
        animationElement.classList.add("animation-active");
      }

      if (timeLeft === 0) {
        clearInterval(secondsInterval);
        secondsMessage.textContent = "Час вийшов!";
        startSecondsButton.disabled = false;
        startSecondsButton.textContent = "Почати знову";
      }
    }, 1);
  });

  showHourTime();
};
