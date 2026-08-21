import { showMessage } from "./message.js";

const button = document.getElementById("btn");
const title = document.getElementById("title");

button.addEventListener("click", function () {
  title.textContent = showMessage();
});