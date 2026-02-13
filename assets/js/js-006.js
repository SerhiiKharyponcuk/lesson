"use strict";

window.runTask = function () {

    // 1️⃣ Всі числа від 1 до 10 (while)
    let i = 1;

    while (i <= 10) {
        console.log("While 1-10:", i);
        i++;
    }


    // 2️⃣ Парні числа від 2 до 20 (for + continue)
    for (let j = 2; j <= 20; j++) {

        if (j % 2 !== 0) {
            continue; // пропускаємо непарні
        }

        console.log("Парне число:", j);
    }


    // 3️⃣ Таблиця множення числа 7
    for (let k = 1; k <= 10; k++) {
        console.log(`7 x ${k} = ${7 * k}`);
    }


    // 4️⃣ Всі числа менші за n (break)
    let n = 8;

    for (let m = 1; m <= 20; m++) {

        if (m >= n) {
            break; // зупиняємо цикл
        }

        console.log("Менше за n:", m);
    }


    // 5️⃣ Числа від 1 до 20, крім кратних 3 (while + continue)
    let x = 0;

    while (x < 20) {
        x++;

        if (x % 3 === 0) {
            continue; // пропускаємо кратні 3
        }

        console.log("Не кратне 3:", x);
    }

};
