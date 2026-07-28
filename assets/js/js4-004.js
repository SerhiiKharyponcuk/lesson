"use strict";

window.runTask = function () {
  console.log("JS-004 - Package.json setup running");
  const taskBox = document.querySelector(".task-box");
  if (taskBox) {
    taskBox.textContent = "Run button clicked for JS-004 - Package.json setup.";
  }
};
