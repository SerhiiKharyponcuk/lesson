"use strict";

window.runTask = function () {
  const bankAccount = {
    ownerName: "Viktor",
    accountNumber: "UA1234567890",
    balance: 1000,

    deposit(amount) {
      this.balance = this.balance + amount;
      return this.balance;
    },

    withdraw(amount) {
      if (amount > this.balance) {
        alert("Недостатньо коштів на рахунку");
        return this.balance;
      }
      this.balance = this.balance - amount;
      return this.balance;
    },
  };

  const wantDeposit = confirm("Хочете поповнити рахунок? (OK - так, Cancel - зняти готівку)");

  if (wantDeposit) {
    const value = Number(prompt("Введіть суму поповнення"));
    if (!isNaN(value) && value > 0) {
      bankAccount.deposit(value);
      alert("Залишок на рахунку: " + bankAccount.balance);
    } else {
      alert("Некоректна сума");
    }
  } else {
    const value = Number(prompt("Введіть суму зняття"));
    if (!isNaN(value) && value > 0) {
      bankAccount.withdraw(value);
      alert("Залишок на рахунку: " + bankAccount.balance);
    } else {
      alert("Некоректна сума");
    }
  }

  const weather = {
    temperature: 0,
    humidity: 60,
    windSpeed: 10,

    isFreezing() {
      return this.temperature < 0;
    },
  };

  weather.temperature = Number(prompt("Введіть температуру (°C)"));

  if (weather.isFreezing()) {
    console.log("температура нижче 0 градусів Цельсія");
  } else {
    console.log("температура вище або рівна 0 градусів Цельсія");
  }

  const user = {
    name: "Viktor",
    email: "viktor@gmail.com",
    password: "123456",

    login(inputEmail, inputPassword) {
      if (inputEmail === this.email && inputPassword === this.password) {
        return true;
      }
      return false;
    },
  };

  const inputEmail = prompt("Введіть email");
  const inputPassword = prompt("Введіть пароль");

  if (user.login(inputEmail, inputPassword)) {
    console.log("Успішний вхід");
  } else {
    console.log("Невірний email або пароль");
  }

  const movie = {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    rating: 8.6,

    isHighRated() {
      return this.rating > 8;
    },
  };

  console.log("Title:", movie.title);
  console.log("Director:", movie.director);
  console.log("Year:", movie.year);
  console.log("Rating:", movie.rating);

  console.log("Рейтинг вище 8:", movie.isHighRated());
};