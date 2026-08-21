"use strict";

window.runTask = function () {
  const startMessagesButton = document.querySelector("#start-messages");
  const messagesList = document.querySelector("#messages-list");

  const startAnimationButton = document.querySelector("#start-animation");
  const stopAnimationButton = document.querySelector("#stop-animation");
  const animationBoxes = document.querySelectorAll(".animation-box");

  const startGameButton = document.querySelector("#start-game");
  const gameTarget = document.querySelector("#game-target");
  const gameArea = document.querySelector("#game-area");
  const gameTime = document.querySelector("#game-time");
  const gameScore = document.querySelector("#game-score");

  const secondsInput = document.querySelector("#timeout-seconds");
  const startTimeoutButton = document.querySelector("#start-timeout");
  const timeoutMessage = document.querySelector("#timeout-message");

  if (startMessagesButton.dataset.ready === "true") {
    return;
  }

  startMessagesButton.dataset.ready = "true";

  let messagesInterval = null;
  let animationInterval = null;
  let gameInterval = null;
  let timeoutId = null;
  let score = 0;

  startMessagesButton.addEventListener("click", () => {
    let messageCount = 0;

    clearInterval(messagesInterval);
    messagesList.innerHTML = "";
    startMessagesButton.disabled = true;

    messagesInterval = setInterval(() => {
      messageCount += 1;

      const message = document.createElement("p");
      message.textContent = `Повідомлення ${messageCount}`;
      messagesList.append(message);

      if (messageCount === 5) {
        clearInterval(messagesInterval);
        startMessagesButton.disabled = false;
      }
    }, 1000);
  });

  startAnimationButton.addEventListener("click", () => {
    clearInterval(animationInterval);

    animationInterval = setInterval(() => {
      animationBoxes.forEach((box) => {
        box.classList.toggle("animation-box-active");
      });
    }, 500);
  });

  stopAnimationButton.addEventListener("click", () => {
    clearInterval(animationInterval);
  });

  function moveTarget() {
    const maxLeft = gameArea.clientWidth - gameTarget.offsetWidth;
    const maxTop = gameArea.clientHeight - gameTarget.offsetHeight;

    gameTarget.style.left = `${Math.random() * maxLeft}px`;
    gameTarget.style.top = `${Math.random() * maxTop}px`;
  }

  startGameButton.addEventListener("click", () => {
    let seconds = 10;

    clearInterval(gameInterval);
    score = 0;
    gameScore.textContent = score;
    gameTime.textContent = seconds;
    gameTarget.disabled = false;
    startGameButton.disabled = true;
    moveTarget();

    gameInterval = setInterval(() => {
      seconds -= 1;
      gameTime.textContent = seconds;
      moveTarget();

      if (seconds === 0) {
        clearInterval(gameInterval);
        gameTarget.disabled = true;
        startGameButton.disabled = false;
      }
    }, 1000);
  });

  gameTarget.addEventListener("click", () => {
    score += 1;
    gameScore.textContent = score;
    moveTarget();
  });

  startTimeoutButton.addEventListener("click", () => {
    const seconds = Number(secondsInput.value);

    clearTimeout(timeoutId);

    if (seconds <= 0) {
      timeoutMessage.textContent = "Введіть кількість секунд.";
      return;
    }

    timeoutMessage.textContent = "Таймер запущено.";

    timeoutId = setTimeout(() => {
      timeoutMessage.textContent = "Встановлений час минув!";
    }, seconds * 1000);
  });
};
