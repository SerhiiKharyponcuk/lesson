"use strict";

window.runTask = function () {

  console.log("========== ДЗ 7 ==========");

  // 1️⃣ Масив з трьох чисел + змінити 2-й елемент
  const arr1 = [5, 8, 12];
  arr1[1] = 10;
  console.log("1) Масив після зміни:", arr1);


  // 2️⃣ Масив із трьох рядків + додати ще один
  const arr2 = ["apple", "banana", "orange"];
  arr2.push("grape");
  console.log("2) Масив рядків:", arr2);


  // 3️⃣ Сума всіх чисел в масиві
  const arr3 = [10, 20, 30, 40];
  let sum = 0;

  for (let i = 0; i < arr3.length; i++) {
    sum += arr3[i];
  }

  console.log("3) Сума чисел:", sum);


  // 4️⃣ Масив з 5-ти чисел + вивести всі елементи
  const arr4 = [1, 2, 3, 4, 5];

  console.log("4) Всі елементи масиву:");
  for (let i = 0; i < arr4.length; i++) {
    console.log(arr4[i]);
  }


  // 5️⃣ Масив із 5-ти рядків + вивести рядки > 5 символів
  const arr5 = ["apple", "kiwi", "banana", "pear", "strawberry"];

  console.log("5) Рядки довші за 5 символів:");
  for (let i = 0; i < arr5.length; i++) {
    if (arr5[i].length > 5) {
      console.log(arr5[i]);
    }
  }


  // 6️⃣ Масив з 10-ти чисел + знайти максимум
  const arr6 = [4, 18, 2, 99, 34, 7, 65, 23, 11, 50];
  let max = arr6[0];

  for (let i = 1; i < arr6.length; i++) {
    if (arr6[i] > max) {
      max = arr6[i];
    }
  }

  console.log("6) Максимальне значення:", max);


  // 7️⃣ Масив з 10-ти чисел + знайти парні числа
  const arr7 = [3, 8, 15, 22, 7, 10, 14, 5, 18, 9];

  console.log("7) Парні числа:");
  for (let i = 0; i < arr7.length; i++) {
    if (arr7[i] % 2 === 0) {
      console.log(arr7[i]);
    }
  }

  console.log("========== Кінець ==========");
};
