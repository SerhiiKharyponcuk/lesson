"use strict";

window.runTask = function () {
  // ===== 1) Деструктуризація (приклад на попередніх завданнях) =====

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
    const keys = Object.keys(obj);
    return keys.length;
  }

  console.log("countProps:", countProps(user));

  function findBestEmployee(employees) {
    const names = Object.keys(employees);
    let bestName = names[0];
    let bestValue = employees[bestName];

    for (const name of names) {
      const value = employees[name];
      if (value > bestValue) {
        bestValue = value;
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
      const salary = employees[name];
      total += salary;
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
      const { name, price, quantity } = product;
      if (name === productName) {
        return price * quantity;
      }
    }
    return 0;
  }

  console.log("calculateTotalPrice Apple:", calculateTotalPrice(products, "Apple"));
  console.log("calculateTotalPrice Orange:", calculateTotalPrice(products, "Orange"));

  // ===== 2) Інтернет-банк (account) =====

  const Transaction = {
    DEPOSIT: "deposit",
    WITHDRAW: "withdraw",
  };

  const account = {
    balance: 0,
    transactions: [],
    _nextId: 1,

    createTransaction(amount, type) {
      const transaction = {
        id: this._nextId,
        type: type,
        amount: amount,
      };
      this._nextId += 1;
      return transaction;
    },

    deposit(amount) {
      if (amount <= 0) {
        console.log("Сума поповнення має бути більше 0");
        return;
      }

      const tx = this.createTransaction(amount, Transaction.DEPOSIT);
      this.balance += amount;
      this.transactions.push(tx);
    },

    withdraw(amount) {
      if (amount <= 0) {
        console.log("Сума зняття має бути більше 0");
        return;
      }

      if (amount > this.balance) {
        console.log("Недостатньо коштів для зняття:", amount);
        return;
      }

      const tx = this.createTransaction(amount, Transaction.WITHDRAW);
      this.balance -= amount;
      this.transactions.push(tx);
    },

    getBalance() {
      return this.balance;
    },

    getTransactionDetails(id) {
      for (const tx of this.transactions) {
        const { id: txId } = tx;
        if (txId === id) {
          return tx;
        }
      }
      return null;
    },

    getTransactionTotal(type) {
      let total = 0;

      for (const tx of this.transactions) {
        const { type: txType, amount } = tx;
        if (txType === type) {
          total += amount;
        }
      }

      return total;
    },
  };

  console.log("===== BANK TEST =====");
  account.deposit(1000);
  account.deposit(300);
  account.withdraw(250);
  account.withdraw(2000);

  console.log("Balance:", account.getBalance());
  console.log("Transactions:", account.transactions);

  console.log("Details id=1:", account.getTransactionDetails(1));
  console.log("Total deposit:", account.getTransactionTotal(Transaction.DEPOSIT));
  console.log("Total withdraw:", account.getTransactionTotal(Transaction.WITHDRAW));
};