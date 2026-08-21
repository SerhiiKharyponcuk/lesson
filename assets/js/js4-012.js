"use strict";

window.CountdownTimer = class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.timer = document.querySelector(selector);
    this.targetDate = targetDate;
    this.intervalId = null;

    this.daysValue = this.timer.querySelector('[data-value="days"]');
    this.hoursValue = this.timer.querySelector('[data-value="hours"]');
    this.minsValue = this.timer.querySelector('[data-value="mins"]');
    this.secsValue = this.timer.querySelector('[data-value="secs"]');
  }

  start() {
    this.updateTimer();

    this.intervalId = setInterval(() => {
      this.updateTimer();
    }, 1000);
  }

  updateTimer() {
    const time = this.targetDate.getTime() - Date.now();

    if (time <= 0) {
      clearInterval(this.intervalId);
      this.updateValues({ days: 0, hours: 0, mins: 0, secs: 0 });
      return;
    }

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    this.updateValues({ days, hours, mins, secs });
  }

  updateValues({ days, hours, mins, secs }) {
    this.daysValue.textContent = days;
    this.hoursValue.textContent = this.pad(hours);
    this.minsValue.textContent = this.pad(mins);
    this.secsValue.textContent = this.pad(secs);
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
};

window.runTask = function () {
  const timerElement = document.querySelector("#timer-1");

  if (timerElement.dataset.ready === "true") {
    return;
  }

  timerElement.dataset.ready = "true";

  const timer = new window.CountdownTimer({
    selector: "#timer-1",
    targetDate: new Date("Jan 1, 2030 00:00:00"),
  });

  timer.start();
};
