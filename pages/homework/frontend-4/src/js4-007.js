import { products } from "../data.js";
import productCardTemplate from "./templates/product-card.hbs";

const form = document.querySelector("#product-form");
const productList = document.querySelector("#product-list");
const productCount = document.querySelector("#product-count");
const emptyMessage = document.querySelector("#empty-message");

let currentProducts = [...products];

function renderProducts() {
  productList.innerHTML = currentProducts.map(productCardTemplate).join("");
  productCount.textContent = `Кількість: ${currentProducts.length}`;
  emptyMessage.hidden = currentProducts.length !== 0;
}

form.addEventListener("submit", event => {
  event.preventDefault();

  const formData = new FormData(form);
  const newProduct = {
    id: Date.now(),
    name: formData.get("name").trim(),
    price: Number(formData.get("price")),
    description: formData.get("description").trim(),
  };

  currentProducts.push(newProduct);
  renderProducts();
  form.reset();
  form.elements.name.focus();
});

productList.addEventListener("click", event => {
  const deleteButton = event.target.closest("[data-delete-id]");

  if (!deleteButton) {
    return;
  }

  const productId = Number(deleteButton.dataset.deleteId);
  currentProducts = currentProducts.filter(product => product.id !== productId);
  renderProducts();
});

renderProducts();
