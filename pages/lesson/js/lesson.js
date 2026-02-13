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

// console.log(10 % 3)
// const number = Math.floor( Math.random()*50+1)
// console.log(number)
// if (number % 2 === 0) {
//     console.log(number % 2 === 0)
// } else {
// console.log(number % 2 === 0)
//     }

// const age = Number( prompt("Ведіть свій вік"))
// console.log(age)

// const chips = parseFloat( "63.5grn")
// const cola = parseFloat( "50grn")
// console.log(chips+cola)

// const number1 = parseFloat(prompt("Веди число"))
// const number2 = parseFloat(prompt("Веди число"))
// const operator = (prompt("Веди знак"))
// if (operator === "+") {
//    console.log(number1 + number2) 
// }if (operator === "-") {
//    console.log(number1 - number2) 
// }if (operator === "*") {
//    console.log(number1 * number2) 
// }if (operator === "/") {
//    console.log(number1 / number2) 
// }

// урок 5

// let name = prompt("Ведіть ваш нік")
// if (name.length > 0) {
//    alert("Все добре")
// }else{
//    alert("Все погано")
// }

// const name = prompt("Ведіть ім'я")
// const nickname = prompt("Ведіть нікнейм")
// if (name.trim().length > 0 && nickname.trim().length > 0) {
//    alert(`${name} ${nickname}`)
// }else{
//    alert("Все погано")
// }

// let role = prompt("Ведіть роль")
// if(role.trim().toLowerCase() === "admin"){
//    console.log("Ви адмін")
// }else{
//    console.log("Ви не адмін")
// }

// УРОК 6

// let email = prompt("Ведіть імейл")
// email = email.trim()
// if (email.length > 0 && email.includes("@")){
// alert("Все добре")
// }else{
//     alert("Все погано")
// }


//  let role = prompt("Ведіть нікнейм")
//  role = role.toLowerCase()
//  role = role[0].toUpperCase()
//  alert(`Привіт ${role.trim()}`)

// виправлено 

//  let role = prompt("Ведіть нікнейм");

// role = role.trim().toLowerCase();
// role = role[0].toUpperCase() + role.slice(1);

// alert(`Привіт ${role}`);

// let comment = prompt("Ведіть коментар:")
// if ((comment.trim().length === 0) || (comment.toLowerCase().includes("стан") || comment.toLowerCase().includes("реклама"))) {
//     alert("Все погано")
// } else {
//     alert("Все добре")
// }

// let email = "http://127.0.0.1:5504/index.html"
// if (email.startsWith("https:")){
//     alert("Протокол є захищено")
// }

// let domenchek = "ua"
// if (domenchek.endsWith("ua")){
//     alert("Домен правельний")
// }

// УРОК 7

// const pasword = prompt("Ведіть пароль")
// if (!pasword){
//     console.log("Ведіть правильний пароль") 
// }else if(pasword.trim().length < 6){
// console.log("Пароль закороткий") 
// }else{
//   console.log("Пароль правильний")  
// }

// let mark = prompt("Ведіть оцінку")

// switch (true){
//     case mark > 90:
//         alert(5)
//         break
//         case mark > 80:
//         alert(4)
//         break
//         case mark > 70:
//         alert(3)
//         break
//         case mark > 60:
//         alert(2)
//         break
//         case mark > 50:
//         alert(1)
//         break
//         default:
//             alert("Не здав")
//             break
// }

// const day = prompt("Ведіть день тижня")
// const ofday = day === "Субота" || day === "Неділя"? alert("Вихідний"): alert("Це будній день")
// if(day === "Субота" || day === "Неділя"){
// alert("Це вихідний")
// }else{
// alert("Це будній день")
// }

// УРОК 8

// const comment = prompt("Напишіть ваш відгук")
// const bedwork = "bed"
// if (comment.trim().length < 10 && comment.includes("bed") ) {
//     console.log("Ведіть правильні слова")
// }

// let status = "Оплачено"

// switch(status) {
//     case "Оплачено":
//         alert("Платіж успішний")
//         break
//     case "Відправлено":
//         alert("Відправлено")
//         break
//     case "Доставлено":
//         alert("Доставлено")
//         break
//     default:
//         alert("Невідомий стан")
//         break
// }

// const status = "не бан"
// const banned = false
// const verifi =  banned === true? alert("Не забанена"): alert("Ви забанені")
// console.log(status, banned)

// for(let i = 0; i <= 100; i += 2) {
//     console.log(i)
// }

// let helth = 100
// while(helth > 0){
//     let hit = 20
//     helth -= hit
//     console.log(hit , helth )
//     if (helth === 0){
//         alert("Game over")
//     }
// }


// УРОК 9

// let info = prompt("Ведіть текст")
// let leters = 0
// for (let i = 0; i < info.length; i += 1) {
//     leters += 1; if (info.length < 10) {
//         alert("Все добре")
//     } else {
//         alert("Потрібно вести менше 10 символів")
//     }
// }
// console.log(leters)

// let energy = 100
// let health = 100
// let skill = 0
// while (energy > 0 && health > 0) {
//     let do_ = prompt("тренування/бій/арена")
//     if (do_ === "тренування") {
//         skill++
//         alert(skill)
//     } else if (do_ === "бій") {
//         health = Math.floor((health - (Math.random() * 20)) + skill)
//         alert(health)
//     } else if (do_ === "відпочинок") {
//         health = Math.floor(health + (Math.random() * 5))
//         alert(health)
//     }
// }

// let age
// do {
//     age = prompt("Скільки вам років?")
// } while (age >= 14)

// УРОК 10

// let info = prompt("Ведіть текст")
// let hasNambers = false
// let hasSpace = false
// let bigLeter = false
// for (let i = 0; i < info.length; i += 1) {
//     let leter = info[i]
//     if (info[i] >= '0' && info[i] <= '9') {
//         hasNambers = true
//     }

//     if (leter !== leter.toLowerCase() && leter === leter.toUpperCase()) {
//         bigLeter = true
//     }

//     if (leter === " ")
//        hasSpace = true
// }
// let result = Number(hasNambers) + Number(hasSpace) + Number(bigLeter);

// switch (result) {
//   case 0:
//     console.log("Дуже поганий пароль");
//     break;
//   case 1:
//     console.log("Поганий пароль");
//     break;
//   case 2:
//     console.log("Середній пароль");
//     break;
//   case 3:
//     console.log("Гарний пароль");
//     break;
// }

// let number = prompt("")
// let maxNumber = Number(number[0])
// let i = 1

// while (i < number.length) {
//     if (maxNumber <= Number(number[i])) {
//         maxNumber = number[i]
//     }
//     i++
// }

// console.log(maxNumber)


// УРОК 11

// let marks = [8 , 9 , 7 , 8 , 9 ]
// let suma = 0
// for (let i = 0; i < marks.length; i += 1) {
//     marks[i]
//     suma += marks[i]
//     console.log(marks[i],suma);
// }
// let allsuma = suma / marks.length
// console.log(allsuma);

// let array = [170, 100, 60, 400, 30]

// let maxPrice = Number(array[0])

// for (let i = 1; i < array.length; i++) {
//   let value = Number(array[i])
//   if (maxPrice < value) {
//     maxPrice = value
//   }
// }

// let discount = 10
// maxPrice = maxPrice * (1 - discount / 100)

// console.log(maxPrice)

// УРОК 11

// const orders = [120, 450, 99, 560, 300, 120, 800];
// let maxPrice = 0
// let sum = 0 
// let maxOrders = 0
// for (let i = 0; i < orders.length; i++) {
//     let value = Number(orders[i])
//     sum += value; 
//   if (maxPrice < value) {
//     maxPrice = value
//   }if (value > 300){
//     maxOrders++
//   }
// }
// let allsuma = sum / orders.length
// let convertSum = Math.floor(allsuma)
// console.log(sum,convertSum, maxPrice,maxOrders);

// УРОК 12

// const message = "Це поганеСлово";
// const bedword = "поганеСлово";
// const messageArr = message.split(" ");
// const newMassage = []

// for (let i = 0; i < messageArr.length; i++) {
//   let element = messageArr[i];
//   if (element.toLowerCase().includes(bedword.toLowerCase())) {
//     element = "***";
//     newMassage.push(element);
//     continue;
//   }
//   newMassage.push(element);
// }

// const result = newMassage.join(" ")

// console.log(result);


// const allowedDomains = ["company.com", "corp.org"];
// const email = "user@company.co";
// const emailArr = email.split("@")[1]
// // emailArr[1]
// if(allowedDomains.includes(emailArr)){
//   alert("Все добре")
// }else{
//   alert("Все погано")
// }
// console.log(emailArr);

const cart = ["apple", "banana", "apple", "orange", "banana"];

const uniqueCart = [];

for (let i = 0; i < cart.length; i++) {
  if (uniqueCart.indexOf(cart[i]) === -1) {
    uniqueCart.push(cart[i]);
  }
}

console.log(uniqueCart);

// const cart = ["apple", "banana", "apple", "orange", "banana"];

// let newCart = [];
// for (let i = 0; i < cart.length; i++) {
//     if (newCart.includes(cart[i])) {
//         continue;
//     };
//     newCart.push(cart[i]);
// };

// console.log(newCart);

