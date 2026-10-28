(() => {
  "use strict";

  const input = document.querySelector("#homework-search");
  const counter = document.querySelector("#homework-count");
  const emptyMessage = document.querySelector("#homework-empty");
  const cards = [];

  for (const element of document.querySelectorAll(".wsapp-listItem")) {
    const number = element.href.match(/js4-(\d+)/)?.[1] || "";
    element.dataset.number = String(Number(number)).padStart(2, "0");
    cards.push({ element, text: element.textContent.toLowerCase(), number });
  }

  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();
    let visible = 0;

    for (const card of cards) {
      const matches = card.text.includes(query) || card.number.includes(query);
      card.element.hidden = !matches;
      if (matches) visible += 1;
    }

    counter.textContent = query
      ? `Знайдено: ${visible} із ${cards.length}`
      : `Усі завдання: ${cards.length}`;
    emptyMessage.hidden = visible !== 0;
  });
})();
