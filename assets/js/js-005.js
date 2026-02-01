"use strict";

window.runTask = function () {

    // =========================
    // 1. Напій (switch)
    // =========================
    let drink = "Кава"; // "Кава" | "Чай" | "Сік"

    switch (drink) {
        case "Кава":
            console.log("Ви обрали каву ");
            break;
        case "Чай":
            console.log("Ви обрали чай ");
            break;
        case "Сік":
            console.log("Ви обрали сік ");
            break;
        default:
            console.log("Невідомий напій");
    }

    // =========================
    // 2. День тижня
    // =========================
    let day = "понеділок"; // приклад

    if (
        day === "понеділок" ||
        day === "вівторок" ||
        day === "середа" ||
        day === "четвер" ||
        day === "пʼятниця"
    ) {
        console.log("Це робочий день");
    } else if (day === "субота" || day === "неділя") {
        console.log("Це вихідний день");
    } else {
        console.log("Невідомий день");
    }

    // =========================
    // 3. Пора року за номером місяця
    // =========================
    let month = 4; // 1–12

    if (month === 12 || month === 1 || month === 2) {
        console.log("Зима ");
    } else if (month >= 3 && month <= 5) {
        console.log("Весна ");
    } else if (month >= 6 && month <= 8) {
        console.log("Літо ");
    } else if (month >= 9 && month <= 11) {
        console.log("Осінь ");
    } else {
        console.log("Невірний номер місяця");
    }

    // =========================
    // 4. Світлофор (switch)
    // =========================
    let color = "зелений"; // "червоний" | "жовтий" | "зелений"

    switch (color) {
        case "червоний":
            console.log("Стоп ");
            break;
        case "жовтий":
            console.log("Чекати ");
            break;
        case "зелений":
            console.log("Йти ");
            break;
        default:
            console.log("Невідомий колір");
    }

    // =========================
    // 5. Калькулятор
    // =========================
    let num1 = 10;
    let num2 = 0;
    let operator = "/"; // "+", "-", "*", "/"

    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            console.log("Результат:", result);
            break;

        case "-":
            result = num1 - num2;
            console.log("Результат:", result);
            break;

        case "*":
            result = num1 * num2;
            console.log("Результат:", result);
            break;

        case "/":
            if (num2 === 0) {
                console.warn("Помилка: ділення на нуль!");
            } else {
                result = num1 / num2;
                console.log("Результат:", result);
            }
            break;

        default:
            console.log("Невідомий оператор");
    }
};
