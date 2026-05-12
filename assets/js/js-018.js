"use strict";

window.runTask = function () {
  // ===== Task 1 =====
  const categoriesList = document.getElementById("categories");

  if (categoriesList) {
    const items = categoriesList.querySelectorAll("li.item");
    console.log("У списку " + items.length + " категорії.");

    for (let i = 0; i < items.length; i++) {
      const title = items[i].querySelector("h2").textContent;
      const count = items[i].querySelectorAll("li").length;

      console.log("Категорія: " + title);
      console.log("Кількість елементів: " + count);
    }
  }

  // ===== Task 2 =====
  const ingredients = ["Картопля", "Гриби", "Часник", "Помідори", "Зелень", "Приправи"];
  const ingredientsList = document.getElementById("ingredients");

  if (ingredientsList) {
    const elements = [];

    for (let i = 0; i < ingredients.length; i++) {
      const li = document.createElement("li");
      li.textContent = ingredients[i];
      elements.push(li);
    }

    ingredientsList.append(...elements);
  }

  // ===== Task 3 =====
  const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
  ];

  const gallery = document.getElementById("gallery");

  if (gallery) {
    gallery.classList.add("ws-gallery");

    let markup = "";

    for (let i = 0; i < images.length; i++) {
      markup += `
        <li class="ws-gallery__item">
          <img class="ws-gallery__img" src="${images[i].url}" alt="${images[i].alt}">
        </li>
      `;
    }

    gallery.insertAdjacentHTML("beforeend", markup);

    if (!document.getElementById("wsGalleryStyles")) {
      const style = document.createElement("style");
      style.id = "wsGalleryStyles";
      style.textContent = `
        .ws-gallery{
          list-style:none;
          padding:0;
          margin:0;
          display:flex;
          gap:12px;
          flex-wrap:wrap;
        }
        .ws-gallery__item{
          flex: 0 1 240px;
        }
        .ws-gallery__img{
          width:100%;
          height:160px;
          object-fit:cover;
          display:block;
          border-radius:12px;
        }
      `;
      document.head.appendChild(style);
    }
  }

  // ===== Task 4 =====
  let counterValue = 0;

  const valueEl = document.getElementById("value");
  const decBtn = document.querySelector('button[data-action="decrement"]');
  const incBtn = document.querySelector('button[data-action="increment"]');

  function updateCounter() {
    if (valueEl) valueEl.textContent = counterValue;
  }

  function increment() {
    counterValue += 1;
    updateCounter();
  }

  function decrement() {
    counterValue -= 1;
    updateCounter();
  }

  if (incBtn) incBtn.addEventListener("click", increment);
  if (decBtn) decBtn.addEventListener("click", decrement);

  updateCounter();
};