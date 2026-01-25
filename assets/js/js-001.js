"use strict";

window.runTask = function () {
  let age = 30;
  console.log(age);

  let name = "Serhii";
  console.log(name);

  let isStudent = false;
  console.log(isStudent);

  let myString = "Навчання — це інвестиція в майбутнє.";
  console.log(myString);

  let myNumber = 5;
  myNumber = myNumber + 10;
  console.log(myNumber);

  let myNull = null;
  console.log(myNull);

  let userName = prompt("Введіть своє ім’я");
  alert("Ваше ім’я: " + userName);
  console.log(typeof userName);

  let userAnswer = confirm("Ви дійсно хочете покинути сторінку?");
  console.log(userAnswer);

  alert("Увага! Дія може бути небезпечною.");
  let confirmAction = confirm("Ви впевнені, що хочете продовжити?");
  console.log(confirmAction);
};