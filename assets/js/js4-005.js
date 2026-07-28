"use strict";

window.runTask = function () {
  const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l", "m"];

  let currentKeyIndex = 0;

  const keyElement = document.getElementById("key");
  const messageElement = document.getElementById("message");
  const newGameButton = document.getElementById("new-game");

  function showCurrentKey() {
    keyElement.textContent = keys[currentKeyIndex];
  }

  function showSuccess() {
    new PNotify({
      title: "Правильно!",
      text: "Ти натиснув правильну клавішу.",
      type: "success",
      delay: 1500,
    });
  }

  function showError() {
    new PNotify({
      title: "Помилка",
      text: "Натиснута неправильна клавіша.",
      type: "error",
      delay: 1500,
    });
  }

  function startNewGame() {
    currentKeyIndex = Math.floor(Math.random() * keys.length);

    messageElement.textContent = "Натисни клавішу:";
    showCurrentKey();

    new PNotify({
      title: "Нова гра",
      text: "Гру розпочато!",
      type: "info",
      delay: 1500,
    });
  }

  document.addEventListener("keydown", function (event) {
    const pressedKey = event.key.toLowerCase();

    if (pressedKey === keys[currentKeyIndex]) {
      showSuccess();

      currentKeyIndex += 1;

      if (currentKeyIndex >= keys.length) {
        currentKeyIndex = 0;
      }

      showCurrentKey();
    } else {
      showError();
    }
  });

  document.addEventListener("keypress", function (event) {
    event.preventDefault();
  });

  newGameButton.addEventListener("click", startNewGame);

  showCurrentKey();

  const chartData = {
    labels: [
      "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
      "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
      "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"
    ],

    datasets: [
      {
        label: "Продажі за останній місяць",

        data: [
          150, 220, 180, 200, 250, 300, 280, 350, 400, 380,
          420, 450, 500, 550, 600, 650, 700, 750, 800, 850,
          900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350
        ],

        backgroundColor: "#2196f3",
        borderColor: "#2196f3",
        borderWidth: 2,
      },
    ],
  };

  const canvas = document.getElementById("sales-chart");

  new Chart(canvas, {
    type: "line",
    data: chartData,

    options: {
      responsive: true,

      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};