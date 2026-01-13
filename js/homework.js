
// homework 1
// // 1. age
// let age = 30;
// console.log(age);

// // 2. name
// let name = "Serhii";
// console.log(name);

// // 3. isStudent
// let isStudent = false;
// console.log(isStudent);

// // 4. myString
// let myString = "Навчання — це інвестиція в майбутнє.";
// console.log(myString);

// // 5. myNumber + 10
// let myNumber = 5;
// myNumber = myNumber + 10;
// console.log(myNumber);

// // 6. myNull
// let myNull = null;
// console.log(myNull);

// // 7. prompt + alert + typeof
// let userName = prompt("Введіть своє ім’я");
// alert("Ваше ім’я: " + userName);
// console.log(typeof userName);

// // 8. confirm
// let userAnswer = confirm("Ви дійсно хочете покинути сторінку?");
// console.log(userAnswer);

// // 9. alert + confirm
// alert("Увага! Дія може бути небезпечною.");
// let confirmAction = confirm("Ви впевнені, що хочете продовжити?");
// console.log(confirmAction);

// homework 2


// 1) Celsius -> Fahrenheit
let celsius = 25;
let fahrenheit = (celsius * 9) / 5 + 32;
console.log("1) Celsius:", celsius, "=> Fahrenheit:", fahrenheit);

// 2) Days in month -> hours and minutes
let daysInMonth = 30;
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = hoursInMonth * 60;
console.log("2) Days:", daysInMonth, "Hours:", hoursInMonth, "Minutes:", minutesInMonth);

// 3) Health and energy (decrease)
let health = 100;
let energy = 80;

health = health - 20;
energy = energy - 15;

console.log("3) Health after damage:", health);
console.log("3) Energy after actions:", energy);

// 4) Discount 10%
let totalPrice = 1500;
let discount = 0.10;
let discountedPrice = totalPrice * (1 - discount);
console.log("4) Total price:", totalPrice, "Discounted price:", discountedPrice);

// 5) Math.floor()
const floatNumber = 12.78;
const roundedDown = Math.floor(floatNumber);
console.log("5) floatNumber:", floatNumber, "roundedDown:", roundedDown);

// 6) parseFloat()
const floatString = "45.67";
const parsedFloat = parseFloat(floatString);
console.log("6) floatString:", floatString, "parsedFloat:", parsedFloat);

// 7) parseInt()
const intString = "123";
const parsedInt = parseInt(intString);
console.log("7) intString:", intString, "parsedInt:", parsedInt);

// 8) Math.sqrt()
let number = 64;
let sqrtNumber = Math.sqrt(number);
console.log("8) number:", number, "sqrtNumber:", sqrtNumber);

// 9) parseInt() + toString()
const integer = 42;
const stringNumber = "256";

const convertedInt = parseInt(stringNumber);
console.log("9) stringNumber:", stringNumber, "convertedInt:", convertedInt);

const convertedString = integer.toString();
console.log("9) integer:", integer, "convertedString:", convertedString);
