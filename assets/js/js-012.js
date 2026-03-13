"use strict";

window.runTask = function () {
  const user = {
    name: "Viktor",
    age: 16,
    hobby: "gaming",
    premium: true,
  };

  user.mood = "happy";
  user.hobby = "skydiving";
  user.premium = false;

  const keys = Object.keys(user);
  for (const key of keys) {
    console.log(key + ":" + user[key]);
  }

  function countProps(obj) {
    return Object.keys(obj).length;
  }

  console.log("countProps:", countProps(user));

  function findBestEmployee(employees) {
    const names = Object.keys(employees);
    let bestName = names[0];
    let bestValue = employees[bestName];

    for (const name of names) {
      if (employees[name] > bestValue) {
        bestValue = employees[name];
        bestName = name;
      }
    }

    return bestName;
  }

  const employeesTasks = {
    Anna: 29,
    Viktor: 35,
    Oleg: 12,
    Maria: 18,
  };

  console.log("findBestEmployee:", findBestEmployee(employeesTasks));

  function countTotalSalary(employees) {
    let total = 0;
    const names = Object.keys(employees);

    for (const name of names) {
      total += employees[name];
    }

    return total;
  }

  const salaries = {
    Anna: 1200,
    Viktor: 1500,
    Oleg: 900,
    Maria: 1100,
  };

  console.log("countTotalSalary:", countTotalSalary(salaries));

  function getAllPropValues(arr, prop) {
    const result = [];

    for (const item of arr) {
      if (item[prop] !== undefined) {
        result.push(item[prop]);
      }
    }

    return result;
  }

  const products = [
    { name: "Apple", price: 30, quantity: 3 },
    { name: "Banana", price: 20, quantity: 5 },
    { name: "Orange", price: 25, quantity: 2 },
  ];

  console.log("getAllPropValues name:", getAllPropValues(products, "name"));
  console.log("getAllPropValues price:", getAllPropValues(products, "price"));

  function calculateTotalPrice(allProducts, productName) {
    for (const product of allProducts) {
      if (product.name === productName) {
        return product.price * product.quantity;
      }
    }
    return 0;
  }

  console.log("calculateTotalPrice Apple:", calculateTotalPrice(products, "Apple"));
  console.log("calculateTotalPrice Orange:", calculateTotalPrice(products, "Orange"));
};