(() => {
  "use strict";

  const delay = (ms) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(ms);
      }, ms);
    });
  };

  const users = [
    { name: "Mango", active: true },
    { name: "Poly", active: false },
    { name: "Ajax", active: true },
    { name: "Lux", active: false },
  ];

  const toggleUserState = (allUsers, userName) => {
    const updatedUsers = allUsers.map((user) => {
      if (user.name === userName) {
        return { ...user, active: !user.active };
      }

      return user;
    });

    return Promise.resolve(updatedUsers);
  };

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const makeTransaction = (transaction) => {
    const transactionDelay = randomIntegerFromInterval(200, 500);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const canProcess = Math.random() > 0.3;

        if (canProcess) {
          resolve({ id: transaction.id, time: transactionDelay });
        } else {
          reject(transaction.id);
        }
      }, transactionDelay);
    });
  };

  window.delay = delay;
  window.toggleUserState = toggleUserState;
  window.makeTransaction = makeTransaction;

  window.runTask = function () {
    const delayResult = document.querySelector("#delay-result");
    const usersResult = document.querySelector("#users-result");
    const transactionsResult = document.querySelector("#transactions-result");
    const runButton = document.querySelector("#runJsBtn");

    if (runButton.dataset.running === "true") {
      return;
    }

    runButton.dataset.running = "true";
    delayResult.textContent = "";
    usersResult.textContent = "";
    transactionsResult.textContent = "";
    runButton.disabled = true;

    const logger = (time) => {
      const message = `Resolved after ${time}ms`;
      console.log(message);
      delayResult.textContent += `${message}\n`;
    };

    const usersLogger = (updatedUsers) => {
      console.table(updatedUsers);
      usersResult.textContent += `${JSON.stringify(updatedUsers, null, 2)}\n`;
    };

    const logSuccess = ({ id, time }) => {
      const message = `Transaction ${id} processed in ${time}ms`;
      console.log(message);
      transactionsResult.textContent += `${message}\n`;
    };

    const logError = (id) => {
      const message = `Error processing transaction ${id}. Please try again later.`;
      console.warn(message);
      transactionsResult.textContent += `${message}\n`;
    };

    const delayPromises = [
      delay(2000).then(logger),
      delay(1000).then(logger),
      delay(1500).then(logger),
    ];

    toggleUserState(users, "Mango").then(usersLogger);
    toggleUserState(users, "Lux").then(usersLogger);

    const transactions = [
      { id: 70, amount: 150 },
      { id: 71, amount: 230 },
      { id: 72, amount: 75 },
      { id: 73, amount: 100 },
    ];

    const transactionPromises = transactions.map((transaction) => {
      return makeTransaction(transaction).then(logSuccess).catch(logError);
    });

    Promise.allSettled([...delayPromises, ...transactionPromises]).then(() => {
      runButton.dataset.running = "false";
      runButton.disabled = false;
    });
  };
})();
