"use strict";

window.runTask = function () {
  // 1. result = 5 + 5 + '5'
  let result = 5 + 5 + "5";
  console.log("Result:", result);
  console.log("Type of result:", typeof result);

  // 2. Email: check @ and length
  let email = "example@gmail.com";
  console.log("Email contains @:", email.includes("@"));
  console.log("Email length:", email.length);

  // 3. fullName from words
  let word1 = "My";
  let word2 = "name";
  let word3 = "is";

  let fullName = word1 + " " + word2 + " " + word3;
  fullName = fullName + " Viktor";
  console.log("Full name:", fullName);

  // 4. Template string with alert
  let userName = "Олександро";
  let payment = 300;

  alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);
};