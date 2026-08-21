import { products } from "../../data.js";
import productsTemplate from "./template.hbs";

const BOOKMARKS_KEY = "js8-bookmarks";
const FORM_KEY = "js8-form-data";

const bookmarkForm = document.querySelector("#bookmarkForm");
const bookmarkInput = document.querySelector("#bookmarkInput");
const bookmarkList = document.querySelector("#bookmarkList");
const bookmarkEmpty = document.querySelector("#bookmarkEmpty");

const savedForm = document.querySelector("#savedForm");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const saveStatus = document.querySelector("#saveStatus");

const productSearch = document.querySelector("#productSearch");
const productContainer = document.querySelector("#productContainer");
const productCount = document.querySelector("#productCount");
const productEmpty = document.querySelector("#productEmpty");

let bookmarks = JSON.parse(localStorage.getItem(BOOKMARKS_KEY)) || [];

function saveBookmarks() {
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
}

function normalizeUrl(value) {
  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  return `https://${value}`;
}

function createBookmarkItem(bookmark) {
  const item = document.createElement("li");
  item.className = "bookmark-item";

  const link = document.createElement("a");
  link.href = bookmark.url;
  link.textContent = bookmark.url;
  link.target = "_blank";
  link.rel = "noreferrer";

  const actions = document.createElement("div");
  actions.className = "item-actions";

  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.className = "edit-button";
  editButton.dataset.editId = bookmark.id;
  editButton.textContent = "Редагувати";

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "delete-button";
  deleteButton.dataset.deleteId = bookmark.id;
  deleteButton.textContent = "Видалити";

  actions.append(editButton, deleteButton);
  item.append(link, actions);

  return item;
}

function renderBookmarks() {
  bookmarkList.innerHTML = "";
  bookmarks.forEach(bookmark => {
    bookmarkList.append(createBookmarkItem(bookmark));
  });
  bookmarkEmpty.hidden = bookmarks.length !== 0;
}

bookmarkForm.addEventListener("submit", event => {
  event.preventDefault();

  bookmarks.push({
    id: Date.now(),
    url: normalizeUrl(bookmarkInput.value.trim()),
  });

  saveBookmarks();
  renderBookmarks();
  bookmarkForm.reset();
});

bookmarkList.addEventListener("click", event => {
  const deleteButton = event.target.closest("[data-delete-id]");
  const editButton = event.target.closest("[data-edit-id]");

  if (deleteButton) {
    const bookmarkId = Number(deleteButton.dataset.deleteId);
    bookmarks = bookmarks.filter(bookmark => bookmark.id !== bookmarkId);
    saveBookmarks();
    renderBookmarks();
  }

  if (editButton) {
    const bookmarkId = Number(editButton.dataset.editId);
    const bookmark = bookmarks.find(item => item.id === bookmarkId);
    const newUrl = prompt("Введіть нову адресу", bookmark.url);

    if (newUrl && newUrl.trim()) {
      bookmark.url = normalizeUrl(newUrl.trim());
      saveBookmarks();
      renderBookmarks();
    }
  }
});

function loadFormData() {
  const savedData = JSON.parse(localStorage.getItem(FORM_KEY));

  if (!savedData) {
    return;
  }

  usernameInput.value = savedData.username;
  passwordInput.value = savedData.password;
}

savedForm.addEventListener("submit", event => {
  event.preventDefault();

  const formData = {
    username: usernameInput.value,
    password: passwordInput.value,
  };

  localStorage.setItem(FORM_KEY, JSON.stringify(formData));
  saveStatus.textContent = "Дані збережено";
});

function renderProducts() {
  const searchValue = productSearch.value.trim().toLowerCase();
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchValue),
  );

  productContainer.innerHTML = productsTemplate({ products: filteredProducts });
  productCount.textContent = `Знайдено: ${filteredProducts.length}`;
  productEmpty.hidden = filteredProducts.length !== 0;
}

productSearch.addEventListener("input", renderProducts);

renderBookmarks();
loadFormData();
renderProducts();
