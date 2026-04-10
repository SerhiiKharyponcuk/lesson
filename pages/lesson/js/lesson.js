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

// const cart = ["apple", "banana", "apple", "orange", "banana"];

// const uniqueCart = [];

// for (let i = 0; i < cart.length; i++) {
//   if (uniqueCart.indexOf(cart[i]) === -1) {
//     uniqueCart.push(cart[i]);
//   }
// }

// console.log(uniqueCart);

// const cart = ["apple", "banana", "apple", "orange", "banana"];

// let newCart = [];
// for (let i = 0; i < cart.length; i++) {
//     if (newCart.includes(cart[i])) {
//         continue;
//     };
//     newCart.push(cart[i]);
// };

// console.log(newCart);


// const numbers = [5, 10, 15, 20];
// numbers.forEach(num => {
//   console.log(num);
// });


// 🟢 Задача 2

// Помножити кожне число на 2

// const numbers = [2, 4, 6, 8];

// const doubled = numbers.map(num => num * 2);

// console.log(doubled); 


// 🟡 Задача 3

// Числа більше 10

// const numbers = [1, 5, 10, 15, 20];

// const bigNumbers = numbers.filter(num => num > 10);

// console.log(bigNumbers);
// [15, 20]

// 🟡 Задача 4

// Перевірити чи є "orange"

// const fruits = ["apple", "banana", "orange", "banana"];

// const hasOrange = fruits.includes("orange");

// console.log(hasOrange);
// // true

// const numbers = [10, 20, 30, 40];

// const sum = numbers.reduce((acc, num) => acc + num, 0);

// console.log(sum);
// 100

// УРОК 13

// let lessons = [
//   "Math",
//   "English",
//   "Biology",
//   "History",
//   "PE",
//   "Music"
// ];
// let goedLessons = lessons.splice(2 ,2,"Інформатика","Хімія")
// console.log(goedLessons);
// console.log(lessons);

// let cart = ["Apple", "Milk", "Bread", "Sugar", "Eggs"];

// let Milk = cart.indexOf("Milk");
// cart.splice(Milk, 1);
// let Sugar = cart.indexOf("Sugar");
// cart.splice(Sugar, 1, "Honey", "Tea");
// cart.splice(0, 0, "Cheese");
// cart.splice(-1, 1);
// console.log(cart);

// УРОК 14

// const cart = ["laptop", "phone"];

// function addCard(cart, newCart) {
//   cart.push(newCart);
//   return cart;
// };

// function findCart(cart, findCart) {
//   if (cart.indexOf(findCart) !== -1) {
//     return findCart;
//   }
//   return "Такого товару не має";
// };

// function deleteCart(cart, deletCart) {
//   let indexOfcart = cart.indexOf(deletCart);

//   if (indexOfcart !== -1) {
//     cart.splice(indexOfcart, 1);
//   }

//   return cart;
// };

// function copyCart(cart) {
//   let newCarts = [cart];
//   return newCarts;
// };

// let newCart = "Tablet";

// console.log(addCard(cart, newCart));
// console.log(findCart(cart, newCart));
// console.log(addCard(copyCart(cart), "PC"));


// let players = ["Anna", "Max", "Olena"];

// function addPlayer(players, addPalayers) {
//   players.push(addPalayers)
//   return players;
// }
// console.log(players);
// console.log(addPlayer(players, "Viktor"));
// function removePlayer(players, removePlayers) {
//   let removePlayer = players.indexOf(removePlayers);
//   players.splice(removePlayer, 1)
//   return players
// }
// console.log(players);
// console.log(removePlayer(players, "Max"));
// function replacePlayer(players, oldName, newName) {
//   let replacePlayer = players.indexOf(oldName)
//   players.splice(replacePlayer, 1, newName)
//   return players
// }
// console.log(players);
// console.log(replacePlayer(players, "Anna", "Maria"));

// 1️ Що функція отримує?
// 2️ Що вона робить?
// 3️ Що вона повертає?
// 1

// let students = ["Oleh", "Ira", "Dmytro"];
// function addStudent(students,newStudent){
//   students.unshift(newStudent)
//   return students;

// }
// console.log(addStudent(students,"Viktor"));

// function removeStudent(students, name) {
//   const index = students.indexOf(name);

//   if (index !== -1) {
//     students.splice(index, 1);
//   }

//   return students;
// }

// УРОК 15

// function createWallet() {
//   let coins = 0; // приватна змінна
//   return function (amount) {
//     coins += amount;
//     console.log(`Ти маєш стільки ${coins} на гаманці`);
//   };
// }
// const wallet = createWallet()
// console.log(wallet);
// wallet(15);
// wallet(25);


// function createTracker(goal) {
//     return function (staps){
//       if(staps > goal){
//         console.log("---Ціль досягнена---");
//       }else{
//         console.log("---Треба ще пройтись---");
//       }
//     }
// }
// const tracker = createTracker(5000)
// console.log(tracker);
// tracker(10000)

// УРОК 16

// function calculate(number1, number2, operator) {
//   return operator(number1, number2);
// }
// function minus(a, b) {
//   return a - b;
// }

// function plus(a, b) {
//   return a + b;
// }

// function divide(a, b) {
//   return a / b;
// }

// function multiply(a, b) {
//   return a * b;
// }


// console.log(calculate(2, 2, minus));
// console.log(calculate(2, 2, plus)); 
// console.log(calculate(6, 2, divide)); 
// console.log(calculate(3, 2, multiply));

// function upString(string , colback) {
//   return colback(string);
// }
// function up(string) {
//   string.toUpperCase()
//   return string.toUpperCase()
// }
// function low(string) {
//   string.toLowerCase()
//   return string.toLowerCase()
// }

// console.log(upString("рядок", up));
// console.log(upString("РЯДОК", low));

// let Array1 = [0, 5, 10, 5, 25];

// function maxOfArray(array, callback) {
//     let maxNumber = array[0];

//     for (let i = 1; i < array.length; i++) {
//         if (callback(maxNumber, array[i])) {
//             maxNumber = array[i];
//         };
//     };

//     return maxNumber;
// };

// function checkArray(maxNumber, theNumber) {
//     return maxNumber > theNumber;
// };

// console.log(maxOfArray(Array1, checkArray));

// const runLottery = (participants, ruleCallback) => {
//   for (let I = 0; I < participants.length; I++) {
//     const element = participants[I];
//     if (ruleCallback(element)) {
//         return element
//     }
//   }
//   return "Переможця немає"
// };

// function choseWinner(winNumber) {
//     let randomNumber = Math.floor(Math.random()*100)
//     console.log(randomNumber);
//     if(randomNumber === winNumber){
//     return true
//     }else{
//         return false
//     }
// }
// let participants = [11, 25, 77, 54];
// console.log(runLottery(participants,choseWinner)); 

// function sayHello() {
//   console.log("Hello");
// }

// function processUser(callback) {
//   console.log("Processing...");
//   callback();
// }

// processUser(sayHello);

// УРОК 17

const telefon = {
  brand: "Samsung",
  price: 1000,



  color: "black",

  priceUp(money) {
    telefon.price += money;
  },
}
telefon.brand = "Apple"
console.log(telefon.brand);
console.log(telefon["price"]);
console.log(telefon.color);
telefon.priceUp(200);
console.log(telefon.price);


const player = {
  currentSong: "Eminem - Lose Yourself",
  volume: 60,
  isPlaying: false,
  play() {
    this.isPlaying = true;
    console.log(`Грає пісня ${this.currentSong}`);
  },
  setVolume(newVolume) {
    if (newVolume <= 100 && newVolume >= 0) {
      this.volume = newVolume;
    }
  }
}
player.play()
console.log(player);
player.setVolume(100)
console.log(player);

// УРОК 18

// Ти розробляєш ядро системи для управління книжковим фондом(бібліотекою).  Система повинна вміти робити "знімки" (snapshots) стану перед кожною зміною, щоб бібліотекар міг скасувати помилкову дію (undo).

// Твоє ТЗ:

// saveState(): Метод, що робить копію об’єкта books і кладе її в масив history. Важливо: Використовуй спред-оператор {...}, інакше undo не працюватиме через копіювання за посиланням.

// addBook(title, amount): Додає книги. Перед зміною обов'язково викликай saveState().

// lendBook(title): Видає книгу (-1). Додай валідацію: якщо книги немає або її 0 — виводь помилку і зупиняй метод.

// undo(): Повертає стан books до останнього збереженого в history.

const library = {
  name: "Cyber-Library 2026",
  books: { "Clean Code": 5, "JS for Kids": 2 },
  history: [],

  saveState() {
    console.log({ ...this.books });
    this.history.push({ ...this.books });
    // TODO: Додай копію this.books в this.history через {...}
  },

  addBook(title, amount) {
    this.saveState();
    if (this.books[title]) {
      this.books[title] += amount;
    } else {
      this.books[title] = amount;
    }
    console.log(this.books);
    // TODO: Логіка додавання (якщо є — плюсуєм, якщо нема — створюєм ключ)
  },

  lendBook(title) {
    // TODO: Валідація (чи є книга і чи > 0)
    if (!this.books[title] || this.books[title] <= 0) {
      console.log("Книга не знайдена або відсутня");
      return;

    }
    this.saveState();
    this.books[title] -= 1;
    console.log(this.books);
    // TODO: Логіка зменшення на 1
  },

  undo() {
    // TODO: Дістань останній запис з history через .pop() і заміни ним this.books
    let LastState = this.history.pop();
    console.log(LastState);
    this.books = LastState;
  },
};



// Об’єкт:
// const user = {
//   name: "Anna",
//   age: 25
// };

// // Отримати значення:
// user.name
// user["age"]
// Змінити значення:
// user.name = "Olena"
// user["age"] = 30
// Додати нову пару ключ-значення:
// user.location = "Kyiv"
// user["email"] = "anna@kyiv.ua"
// Видалити пару ключ-значення:
// delete user.age
// delete user["email"]
// Перебрати:
// for (let key in user) {
//   console.log(key, user[key]);
// }

const product = {
  title: "Phone",
  price: 500,
  brand: "Samsung"
};

for (let key in product) {
  console.log(`${key}: ${product[key]}`);
}

// УРОК 19

// Завдання:
// Об'єднай всі три об'єкти в один fullProfile за допомогою spread.
// Додай у fullProfile нову властивість lastLogin, яка дорівнює поточній даті (new Date().toLocaleDateString()).
// За допомогою циклу for...in виведи всі пари ключ: значення, але пропусти ключ id (він секретний).

// const user = { id: 1, nick: "DragonSlayer" };
// const stats = { kills: 150, deaths: 20 };
// const achievements = { medal: "Gold", veteran: true };

// const fullProfile = {...user, ...stats, ...achievements, lastLogin: new Date().toLocaleDateString()};
// console.log(fullProfile);


const chest = { gold: 50, diamonds: 5, silver: 100 };
let sum = 0;
for (let key in chest) {
  sum += chest[key];
}

console.log(`Загальна кількість: ${sum}`);
const velues = Object.values(chest);
let sum2 = 0;
for (let i = 0; i < velues.length; i++) {
  sum2 += velues[i];
}
console.log(`Загальна кількість (через Object.values): ${sum2}`);

const chest2 = { ...chest };
console.log(chest2);

// УРОК 20

// Завдання
// Вивести назви всіх товарів
// Порахувати скільки всього різних товарів у магазині

const store = {
  laptop: 5,
  mouse: 12,
  keyboard: 8,
  monitor: 3,
};
const items = Object.keys(store);
let sum1 = 0;
for (let i = 0; i < items.length; i++) {
  const element = items[i];
  console.log(element);
}
sum1 = items.length
console.log(sum1);
console.log(items);


// Завдання
// Вивести імена всіх користувачів
// Порахувати кількість онлайн користувачів

const users = {
  Artem: true,
  Anna: false,
  Ivan: true,
  Olha: true,
};
const user = Object.values(users);
let onlineSum = 0
for (let i = 0; i < user.length; i++) {
  const element = user[i];
  console.log(element);
  if (element === true) {
    onlineSum++
  }
}
console.log(onlineSum);

// Є об'єкт оцінок.

// Завдання: Порахувати середню оцінку

const grades = {
  math: 90,
  english: 75,
  physics: 85,
  history: 80,
};
const gradess = Object.values(grades)
let sum3 = 0
let result = 0
for (const element of gradess) {
  console.log(element);
  sum3 += element
  result = sum3 / gradess.length
}
console.log(sum3);
console.log(result);
// for (let i = 0; i < gradess.length; i++) {
//   const element = gradess[i];

// }


// const car = {
//   marka: "Toyota",
//   model: "Camry",
//   price: 20000,
// };
// const entries = Object.entries(car);

// console.log(entries);
// for (const element of entries) {
//   const key = element[0];
//   const value = element[1];

//   console.log(key, value);
// }

// for (const [key, value] of entries) {
//   console.log(key, value);
// }


const sales = {
  laptop: 12,
  mouse: 25,
  keyboard: 15,
  monitor: 8,
};
const entries = Object.entries(sales);
let bestItem = ""
let bestCount = 0
for (const [key, value] of entries) {
  console.log(key, value);
  if (value > bestCount) {
    bestCount = value;
    bestItem = key;
  }
}
console.log("Top product:", bestItem, bestCount);


// Завдання
// Є об'єкт продажів магазину.
// Потрібно:
// 1️⃣ перебрати всі товари
// 2️⃣ знайти товар з найбільшою кількістю продажів
// 3️⃣ вивести:Top product: mouse (25)


// const products = {
//   laptop: 1200,
//   mouse: 25,
//   keyboard: 80,
//   monitor: 300,
// };

// const expensiveProducts = {};

// for (const key in products) {
//   if (products[key] > 100) {
//     expensiveProducts[key] = products[key];
//   }
// }

// console.log("Товари дорожче 100:", expensiveProducts);

// const products = {
//   laptop: 1200,
//   mouse: 25,
//   keyboard: 80,
//   monitor: 300,
// };

// const expensiveProducts = Object.fromEntries(
//   Object.entries(products).filter(([key, value]) => value > 100)
// );

// console.log(expensiveProducts);



const human = {
  name: "Петро",
  adult: true,
  age: Math.floor((0 + Math.random() * 100) - 1),
}
console.log(Number.MAX_VALUE);
console.log(human.age);
const Petro = {
  ...human,
  age: 19,

  sleep(time) {
    return `Я проспав ${time} годин`
  }

}
console.log(Petro.sleep(12));
console.log(Petro);



const car = {
  brand: "Tesla",
  model: "S",
  location: {
    city: "London",
    x: 121313,
    y: 121212,
  }
}

console.log(car.brand);

const { brand, model } = car;
console.log(brand, model);
function whereIsMyCar({ location }) {
  console.log(location);
  const { x, y } = location;

}
whereIsMyCar(car)

const users1 = [
  { name: "Artem", age: 24 },
  { name: "Anna", age: 20 },
];
for (const { name, age } of users1) {
  console.log(name, age);
  console.log(`${name} is ${age} years old`);
}

// В циклі вивести:
// "Artem is 24 years old"


// УРОК 21

const items1 = [
  { name: 'Футболка', price: 250, quantity: 2 },
  { name: 'Джинси', price: 800, quantity: 1 },
  { name: 'Кросівки', price: 1200, quantity: 1 }
];
function getSum(goods) {
  let sum = 0;
  let sum2 = 0;
  console.log(goods);
  for (const { price, quantity } of goods) {
    sum = price * quantity
    console.log(sum);
    sum2 += sum
  }
  return sum2
};
console.log(getSum(items1));


// УРОК 22



const arr2 = [2, 4, 5, 6];
for (const element of arr2) {
  element
}



console.log(arr2.forEach((number) => { console.log(number * 2); }));

const users2 = [
  { id: 1, name: "Alex", age: 25, isActive: true },
  { id: 2, name: "Maria", age: 17, isActive: false },
  { id: 3, name: "John", age: 30, isActive: true },
  { id: 4, name: "Kate", age: 22, isActive: false },
];

const arr3 = [1, 4, 7, 9, 10, 3, 5, 6]
function filterNam(arr3) {
  const arr4 = []
  for (const element of arr3) {
    const { isActive } = element;
    if (isActive) {
      arr4.push(element);
    }
  }
  return arr4;
}
console.log(filterNam(users2));

const filterArr = users2.filter((user) => user.age > 18).map((user) => user.name)
console.log(filterArr);


const cart = [
  { id: 1, title: "Phone", price: 500 },
  { id: 2, title: "Laptop", price: 1200 },
  { id: 3, title: "Mouse", price: 50 },
];
const filterCart = cart.filter(({ price }) => price <= 1200 && price >= 300)
const findProduct = cart.find(({ title }) => title === "Mouse")
const sortedCart = [...cart].sort(({ title }, { title: b }) => title.localeCompare(b))
console.log(sortedCart);
console.log(cart);
console.log(filterCart);
console.log(findProduct);

const users3 = [
  { id: 2, name: "Maria", age: 17, isActive: false },
  { id: 3, name: "John", age: 30, isActive: true },
  { id: 1, name: "Alex", age: 25, isActive: true },
  { id: 4, name: "Kate", age: 22, isActive: false },
];
const sortedUsers = [...users3].sort(({ isActive }, { isActive: b }) => b - isActive)
console.log(sortedUsers);





// function filterNam(arr3) {
//   const arr4 = []
//   for (const element of arr3) {
//     const { isActive } = element;
//     if (isActive) {
//       arr4.push(element);
//     }
//   }
//   return arr4;
// }

// const numbers5 = [1,2,3,4,5];

// const sum4 = numbers5.reduce((acc,number) => {
//   return(acc += number);
// }, 0);
// console.log(sum4);
const students = [
  { id: 1, name: "Anna", age: 17, isActive: true, progress: 80 },
  { id: 2, name: "Ivan", age: 22, isActive: true, progress: 100 },
  { id: 3, name: "Olena", age: 19, isActive: true, progress: 40 },
  { id: 4, name: "Max", age: 16, isActive: true, progress: 60 },
  { id: 5, name: "Sofia", age: 25, isActive: true, progress: 100 },
];
const isActiveSudent = students.some(({ isActive , progress }) => isActive === false || progress < 30 )
const ageSudent = students.every(({age}) => age >= 15)
const isveSudent = students.every(({isActive}) => isActive)
const progStudent = students.some(({progress}) => progress === 100)
console.log(isveSudent);
console.log(progStudent);
console.log(ageSudent);
console.log(isActiveSudent);


const transactions = [
  { type: "income", amount: 500 },
  { type: "expense", amount: 200 },
  { type: "income", amount: 300 },
];
const reduceInCome = transactions.reduce((acc, transaction) => {
  const { type, amount } = transaction
  if (acc[type] !== undefined) {
    acc[type] += amount
  }else{
    acc[type] = amount
  }
  return acc
}, {})
console.log(reduceInCome);


const characters = [
  { id: 1, name: "Arthas", class: "Paladin", level: 80, health: 12000, faction: "Alliance" },
  { id: 2, name: "Thrall", class: "Shaman", level: 75, health: 9500, faction: "Horde" },
  { id: 3, name: "Sylvanas", class: "Ranger", level: 85, health: 8000, faction: "Horde" },
  { id: 4, name: "Jaina", class: "Mage", level: 78, health: 6500, faction: "Alliance" },
  { id: 5, name: "Uther", class: "Paladin", level: 90, health: 15000, faction: "Alliance" },
  { id: 6, name: "Gul'dan", class: "Warlock", level: 82, health: 7000, faction: "Horde" },
  { id: 7, name: "Illidan", class: "Demon Hunter", level: 99, health: 20000, faction: "Neutral" },
  { id: 8, name: "Malfurion", class: "Druid", level: 88, health: 11000, faction: "Alliance" },
  { id: 9, name: "Vol'jin", class: "Shadow Hunter", level: 72, health: 8800, faction: "Horde" },
  { id: 10, name: "Tyrande", class: "Priest", level: 84, health: 7500, faction: "Alliance" }
];

const charechtersFilter = characters.filter(({ faction }) => faction === "Horde").map(({ name: charactersName }) => charactersName)
const findCharacters = characters.find(({ class: classs }) => classs === "Mage")
const sortCharactersByHealth = [...characters].sort(({ health: a }, { health: b }) => b - a)
const sortCharactersByName = [...characters].sort(({ name: a }, { name: b }) => a.localeCompare(b))
const sumCharactersHealth = characters.reduce((acc, { health }) => {
  return (acc += health)
}, 0)
const reduceShaman = characters.reduce((acc, character) => {
  const { class: classs } = character
  if (classs === "Shaman") {
    acc.push(character)
  } return acc
}, [])
console.log(reduceShaman);
console.log(sumCharactersHealth);
console.log(sortCharactersByName);
console.log(sortCharactersByHealth[0]);
console.log(findCharacters);
console.log(charechtersFilter);


const users5 = [
  { id: 1, name: "Anna", role: "admin" },
  { id: 2, name: "Ivan", role: "user" },
  { id: 3, name: "Olga", role: "admin" },
  { id: 4, name: "Ivan", role: "user" },
  { id: 5, name: "Petro", role: "user" }
];
const reduceUsers = users5.reduce((acc, user) => {
  if (user.role in acc){
   acc[user.role].push(user)
  }else{
  acc[user.role] = [user]
  }
  return acc

},
 {})
 console.log(reduceUsers);

//  admin: [{...}, {...}],
// user: [{...}, {...}]},

const pirat = { 
  name: "Petro",
  pseudo: "Jack",
  money: 0,
  goWalk(){
  this.money += 100;
  console.log(pirat);
  },
};
pirat.goWalk();

class BasePirate {
  constructor(name, pseudo, money){
    this.name = name;
    this.pseudo = pseudo;
    this.money = money;
  }
};
const Bill = new BasePirate("North", "tirn", 0);
for (let i = 0; i < 100; i++) {
 
  
}
console.log(Bill);
console.log(BasePirate);

class Student {
  constructor(name , age , cours) {
    this.name = name;
    this.age = age;
    this.cours = cours;
  }
};
const Fill = new Student( "Fill" , 17 , 2 );
console.log(Fill); 
