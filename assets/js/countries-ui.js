(() => {
  "use strict";

  window.initCountrySearch = async function () {
    const input = document.querySelector("#country-search");
    const results = document.querySelector("#country-results");
    const status = document.querySelector("#country-status");
    const listTemplate = document.querySelector("#country-list-template");
    const cardTemplate = document.querySelector("#country-card-template");
    const [{ default: fetchCountries }, { default: debounce }] =
      await Promise.all([
        import("./fetchCountries.js"),
        import("https://cdn.jsdelivr.net/npm/lodash.debounce@4.0.8/+esm"),
      ]);
    let controller;
    let searchVersion = 0;

    function showMessage(text, type = "info") {
      status.textContent = text;
      status.dataset.type = type;

      if (type === "error" && window.PNotify) {
        new window.PNotify({
          title: "Пошук країн",
          text,
          type: "error",
          delay: 3000,
        });
      }
    }

    function renderCountryList(countries) {
      const list = document.createElement("ul");

      for (const country of countries) {
        const item = listTemplate.content.cloneNode(true);
        item.querySelector("li").textContent = country.name;
        list.append(item);
      }

      results.replaceChildren(list);
    }

    function renderCountry(country) {
      const card = cardTemplate.content.cloneNode(true);
      card.querySelector("h3").textContent = country.name;
      card.querySelector("[data-capital]").textContent =
        country.capital || "Немає даних";
      card.querySelector("[data-population]").textContent =
        country.population.toLocaleString("uk-UA");
      card.querySelector("[data-languages]").textContent =
        country.languages?.map((language) => language.name).join(", ") ||
        "Немає даних";
      const flag = card.querySelector("img");
      flag.src = country.flags.svg || country.flags.png;
      flag.alt = `Прапор ${country.name}`;
      results.replaceChildren(card);
    }

    async function searchCountries(query, version) {
      try {
        controller = new AbortController();
        const countries = await fetchCountries(query, controller.signal);
        if (version !== searchVersion) return;

        if (countries.length === 0) {
          showMessage("Країну не знайдено. Перевір назву.", "error");
        } else if (countries.length > 10) {
          showMessage("Знайдено забагато країн. Введи точнішу назву.", "error");
        } else if (countries.length === 1) {
          renderCountry(countries[0]);
          showMessage("Знайдено одну країну.");
        } else {
          renderCountryList(countries);
          showMessage(`Знайдено країн: ${countries.length}.`);
        }
      } catch (error) {
        if (error.name !== "AbortError" && version === searchVersion) {
          showMessage(
            "Не вдалося завантажити країни. Перевір інтернет і повтори пошук.",
            "error",
          );
        }
      }
    }

    const debouncedSearch = debounce(searchCountries, 500);

    input.addEventListener("input", () => {
      searchVersion += 1;
      controller?.abort();
      debouncedSearch.cancel();
      results.replaceChildren();
      const query = input.value.trim();

      if (!query) {
        showMessage("Введи назву країни англійською.");
        return;
      }

      showMessage("Шукаємо країни…");
      debouncedSearch(query, searchVersion);
    });

    window.runTask = function () {
      input.focus();
      input.dispatchEvent(new Event("input"));
    };
  };
})();
