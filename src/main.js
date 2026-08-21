import { showMessage } from "./message.js";

const title = document.querySelector("#title");
const button = document.querySelector("#messageBtn");

button.addEventListener("click", () => {
  title.textContent = showMessage();
});
