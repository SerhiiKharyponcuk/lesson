"use strict";

window.runTask = function () {
  const input = document.getElementById("textInput");
  const button = document.getElementById("changeBtn");

  if (input && button) {
    button.textContent = input.value;
  }

  const image1 = document.getElementById("mainImage");
  if (image1) {
    image1.src = "https://picsum.photos/400/250";
  }

  const link = document.getElementById("siteLink");
  if (link) {
    link.href = "https://www.google.com";
  }

  const image2 = document.getElementById("linkImage");
  if (image2) {
    image2.alt = "Нове зображення";
  }

  const firstItem = document.querySelector("ul li");
  if (firstItem) {
    firstItem.textContent = "Новий текст першого елемента";
  }
};