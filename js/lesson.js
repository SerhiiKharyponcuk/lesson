// урок 2

// let userName = prompt("Ваше ім'я");
// let age = Number(prompt("Ваш вік:"));
// let location = prompt("Ваше місце проживання:");
// console.log(typeof age);
// if (!userName ||  isNaN(age) || !location) {
//     alert("Заповніть всі поля");
// } else {
//     alert(`Ваші данні: ${userName}, ${age}, ${location}`);
// }

// let userName = prompt("Ваш Nickname");
// if (!userName || userName.length >= 3) {
//    alert("Треба вести nickname більше 3 символів")
// }
// else{
//  alert("Все добре")
// }
// console.log(userName.length >= 3)


         // УРОК 3


// console.log(isNaN(67))

         // УРОК 4

console.log(10 % 3)
const number = Math.floor( Math.random()*50+1)
console.log(number)
if (number % 2 === 0) {
    console.log(number % 2 === 0)
} else {
console.log(number % 2 === 0)
    }

const age = Number( prompt("Ведіть свій вік"))
console.log(age)

const chips = parseFloat( "63.5grn")
const cola = parseFloat( "50grn")
console.log(chips+cola)

const number1 = parseFloat(prompt("Веди число"))
const number2 = parseFloat(prompt("Веди число"))
const operator = (prompt("Веди знак"))
if (operator === "+") {
   console.log(number1 + number2) 
}if (operator === "-") {
   console.log(number1 - number2) 
}if (operator === "*") {
   console.log(number1 * number2) 
}if (operator === "/") {
   console.log(number1 / number2) 
}