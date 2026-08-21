"use strict";

window.runTask = function () {
  const form = document.querySelector("#contact-form");
  const nameInput = document.querySelector("#contact-name");
  const surnameInput = document.querySelector("#contact-surname");
  const phoneInput = document.querySelector("#contact-phone");
  const emailInput = document.querySelector("#contact-email");
  const submitButton = document.querySelector("#contact-submit");
  const contactList = document.querySelector("#contact-list");
  const emptyText = document.querySelector("#contacts-empty");

  if (form.dataset.ready === "true") {
    return;
  }

  form.dataset.ready = "true";

  let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  let editContactId = null;

  function saveContacts() {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }

  function createContactMarkup(contact) {
    const li = document.createElement("li");
    li.classList.add("contact-item");

    const info = document.createElement("div");

    const fullName = document.createElement("h3");
    fullName.textContent = `${contact.name} ${contact.surname}`;

    const phone = document.createElement("p");
    phone.textContent = `Телефон: ${contact.phone}`;

    const email = document.createElement("p");
    email.textContent = `Email: ${contact.email}`;

    const buttons = document.createElement("div");
    buttons.classList.add("contact-buttons");

    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.textContent = "Редагувати";
    editButton.dataset.action = "edit";
    editButton.dataset.id = contact.id;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Видалити";
    deleteButton.classList.add("delete-button");
    deleteButton.dataset.action = "delete";
    deleteButton.dataset.id = contact.id;

    info.append(fullName, phone, email);
    buttons.append(editButton, deleteButton);
    li.append(info, buttons);

    return li;
  }

  function renderContacts() {
    contactList.innerHTML = "";

    contacts.forEach((contact) => {
      const contactMarkup = createContactMarkup(contact);
      contactList.append(contactMarkup);
    });

    emptyText.hidden = contacts.length > 0;
  }

  function clearForm() {
    form.reset();
    editContactId = null;
    submitButton.textContent = "Додати контакт";
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const contact = {
      id: editContactId || Date.now(),
      name: nameInput.value,
      surname: surnameInput.value,
      phone: phoneInput.value,
      email: emailInput.value,
    };

    if (editContactId) {
      contacts = contacts.map((item) => {
        if (item.id === editContactId) {
          return contact;
        }

        return item;
      });
    } else {
      contacts.push(contact);
    }

    saveContacts();
    renderContacts();
    clearForm();
  });

  contactList.addEventListener("click", (event) => {
    const action = event.target.dataset.action;
    const contactId = Number(event.target.dataset.id);

    if (action === "delete") {
      contacts = contacts.filter((contact) => contact.id !== contactId);
      saveContacts();
      renderContacts();
    }

    if (action === "edit") {
      const contact = contacts.find((item) => item.id === contactId);

      nameInput.value = contact.name;
      surnameInput.value = contact.surname;
      phoneInput.value = contact.phone;
      emailInput.value = contact.email;

      editContactId = contact.id;
      submitButton.textContent = "Зберегти зміни";
    }
  });

  renderContacts();
};
