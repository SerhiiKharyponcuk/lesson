"use strict";

window.runTask = function () {
  console.log("===== JS-009 (простий варіант) =====");

  // 1) logItems(array)
  function logItems(array) {
    for (let i = 0; i < array.length; i++) {
      console.log((i + 1) + " - " + array[i]);
    }
  }

  console.log("Завдання 1:");
  logItems(["Mango", "Poly", "Ajax"]);


  // 2) calculateEngravingPrice(message, pricePerWord)
  function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(" ");
    return words.length * pricePerWord;
  }

  console.log("Завдання 2:");
  console.log(calculateEngravingPrice("JavaScript is awesome", 10));


  // 3) findLongestWord(string)
  function findLongestWord(string) {
    const words = string.split(" ");
    let longestWord = words[0];

    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }

    return longestWord;
  }

  console.log("Завдання 3:");
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));


  // 4) formatString(string)
  function formatString(string) {
    if (string.length <= 40) {
      return string;
    } else {
      return string.slice(0, 40) + "...";
    }
  }

  console.log("Завдання 4:");
  console.log(formatString("Curabitur ligula sapien, tincidunt non."));
  console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));


  // 5) checkForSpam(message)
  function checkForSpam(message) {
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes("spam") || lowerMessage.includes("sale")) {
      return true;
    } else {
      return false;
    }
  }

  console.log("Завдання 5:");
  console.log(checkForSpam("Latest technology news"));
  console.log(checkForSpam("Get best SALE offers now!"));
  console.log(checkForSpam("This is SPAM message"));


  // 6) prompt -> numbers -> total
  console.log("Завдання 6:");

  let input;
  const numbers = [];
  let total = 0;

  while (true) {
    input = prompt("Введіть число (Cancel — завершити)");

    if (input === null) {
      break;
    }

    const number = Number(input);

    if (isNaN(number)) {
      alert("Було введено не число, попробуйте ще раз");
    } else {
      numbers.push(number);
    }
  }

  if (numbers.length > 0) {
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    console.log("Загальна сума чисел дорівнює " + total);
  } else {
    console.log("Масив порожній");
  }


  // 7) (додаткове) логіни
  console.log("Завдання 7 (додаткове):");

  const logins = ["Mango", "Poly", "Ajax"];

  function isLoginValid(login) {
    if (login.length >= 4 && login.length <= 16) {
      return true;
    } else {
      return false;
    }
  }

  function isLoginUnique(allLogins, login) {
    if (allLogins.includes(login)) {
      return false;
    } else {
      return true;
    }
  }

  function addLogin(allLogins, login) {
    if (!isLoginValid(login)) {
      return "Помилка! Логін повинен бути від 4 до 16 символів";
    }

    if (!isLoginUnique(allLogins, login)) {
      return "Такий логін уже використовується!";
    }

    allLogins.push(login);
    return "Логін успішно доданий!";
  }

  console.log(addLogin(logins, "Kiwi"));
  console.log(addLogin(logins, "Ajax"));
  console.log(addLogin(logins, "A"));
  console.log("Поточні logins:", logins);

  console.log("===== Кінець =====");
};