// Виведення всіх чисел з масиву і консоль
// let numbers = [3, 7, 10, 25];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// Виведення  парних чисел

// let numbers = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     console.log(numbers[i]); //2 4 6
//   }
// }

// задачка
// пройтися по масиву циклом for
// знайти суму всіх чисел
// вивести суму в консоль

// let numbers = [5, 8, 3, 10, 7];
// let sum = 0
// for (let i = 0; i < numbers.length; i++) {
//     sum = sum += numbers[i] 
// }
// console.log(sum);

// Задача: знайти найбільше число в масиві

// let numbers = [51, 8, 3, 10, 50];

// let max = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
// }

// console.log(max);

// Задача: порахувати кількість парних чисел

// let numbers = [4, 7, 10, 3, 8, 1, 6, 12];
// let count = 0;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//   count++;
// }
// }

// console.log(count);

// задача сума парних чисел
// let sum = 0;
// let numbers = [4, 7, 10, 3, 8, 1, 6];

// for (let i = 0; i < numbers.length; i++) {  
//   if (numbers[i] % 2 === 0) {
//     sum += numbers[i]
//   }
// }
// console.log(sum);
// якщо не парні 
// if (numbers[i] % 2 !== 0) 

// 📌 1. Методи для ДОДАВАННЯ / ВИДАЛЕННЯ

// ➕ push() — додає в кінець 

const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

// ➖ pop() — видаляє з кінця
arr.pop();
console.log(arr);

// ➕ unshift() — додає на початок
arr.unshift(0);
console.log(arr); 

// ➖ shift() — видаляє з початку
arr.shift();
console.log(arr); 

// 📌 2. ПЕРЕБІР масиву
// 🔁 forEach() — просто перебір
arr.forEach(item => {
  console.log(item);
});


// 📌 3. СТВОРЮЮТЬ НОВИЙ масив

// 🔹 map() — змінює кожен елемент
// const numbers = [1, 2, 3];
// const doubled = numbers.map(n => n * 2)

// console.log(doubled); // [2, 4, 6]

// 🔹 filter() — фільтр
// const nums = [1, 2, 3, 4];
// const even = nums.filter(n => n % 2 === 0);

// console.log(even); // [2, 4]

// 📌 4. ПОШУК

// 🔍 find() — перший знайдений
const users = [{name: "Anna"}, {name: "Oleg"}];

const user = users.find(u => u.name === "Oleg");
console.log(user);

// 🔍 includes() — чи є елемент
const fruits = ["apple", "banana"];

console.log(fruits.includes("apple")); // true

// 🔍 indexOf() — індекс
console.log(fruits.indexOf("banana")); // 1

// 📌 5. ЗМІНА МАСИВУ

// 🔄 slice() — копія частини

console.log(arr.slice(1, 3)); // [2, 3]

// 🔄 splice() — вирізає / додає
arr.splice(1, 1); 
console.log(arr); // [1, 3]

// 📌 6. СОРТУВАННЯ

// 🔢 sort()
const nums = [5, 1, 10];
nums.sort((a, b) => a - b);
console.log(nums); // [1, 5, 10]

// ➕ reduce()
const numbers = [1, 2, 3];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 6
