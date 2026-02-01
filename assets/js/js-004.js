"use strict";

window.runTask = function () {
  // 1. Перевірка двох текстових полів
  let textField1 = "Hello";
  let textField2 = "World";

  if (textField1 !== "" && textField2 !== "") {
    console.log("Обидва поля заповнені");
  } else {
    console.log("Не всі поля заповнені");
  }

  // 2. Перевірка суми чисел
  let number1 = 6;
  let number2 = 5;
  let sum = number1 + number2;

  if (sum > 10) {
    console.log("Сума більша за 10");
  } else {
    console.log("Сума менша або дорівнює 10");
  }

  // 3. Перевірка на слово JavaScript
  let text = "Я вивчаю JavaScript щодня";

  if (text.includes("JavaScript")) {
    console.log("Текст містить слово JavaScript");
  } else {
    console.log("Текст не містить слово JavaScript");
  }

  // 4. Перевірка числа в діапазоні
  let value = 15;

  if (value > 10 && value < 20) {
    console.log("Число входить в діапазон від 10 до 20");
  } else {
    console.log("Число не входить в діапазон від 10 до 20");
  }

  // 5. Перевірка імʼя, email, пароль (ВИПРАВЛЕНО)
  let name = "Viktor";
  let email = "viktor@gmail.com";
  let password = "123456";

  let atIndex = email.indexOf("@");
  let dotIndex = email.indexOf(".");

  if (
    name.length >= 3 &&
    atIndex !== -1 &&
    dotIndex !== -1 &&
    dotIndex > atIndex &&
    password.length >= 6
  ) {
    console.log("Перенаправлення на іншу сторінку");
  } else {
    console.log("Помилка: неправильне заповнення");
  }
};
