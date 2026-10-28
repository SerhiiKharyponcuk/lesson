export default async function initImageGallery(editorsChoice = false) {
  try {
    const form = document.querySelector("#search-form");
    const keyInput = document.querySelector("#pixabay-key");
    const categoryInput = document.querySelector("#image-category");
    const gallery = document.querySelector(".gallery");
    const template = document.querySelector("#photo-template");
    const loadMoreButton = document.querySelector("#load-more");
    const status = document.querySelector("#gallery-status");
    const dialog = document.querySelector("#image-dialog");
    const perPage = 12;
    let query = "";
    let category = "";
    let apiKey = "";
    let page = 0;
    let totalHits = 0;
    let loading = false;
    let requestVersion = 0;
    let controller;

    async function showStatus(message, type = "info") {
      try {
        status.textContent = message;
        status.dataset.type = type;
      } catch (error) {
        console.error("Не вдалося показати повідомлення.");
      }
    }

    async function readCache(cacheKey) {
      try {
        const cached = JSON.parse(sessionStorage.getItem(cacheKey));
        if (cached && Date.now() - cached.savedAt < 86400000) {
          return cached.data;
        }
        sessionStorage.removeItem(cacheKey);
        return null;
      } catch (error) {
        return null;
      }
    }

    async function saveCache(cacheKey, data) {
      try {
        sessionStorage.setItem(
          cacheKey,
          JSON.stringify({ savedAt: Date.now(), data }),
        );
      } catch (error) {
        return;
      }
    }

    async function fetchImages(nextPage, signal) {
      try {
        const params = new URLSearchParams({
          key: apiKey,
          q: query,
          page: nextPage,
          per_page: perPage,
          image_type: "photo",
          orientation: "horizontal",
          safesearch: "true",
        });

        if (editorsChoice) params.set("editors_choice", "true");
        if (category) params.set("category", category);

        const cacheKey = `pixabay:${params}`;
        const cached = await readCache(cacheKey);
        if (cached) return cached;

        const response = await fetch(`https://pixabay.com/api/?${params}`, {
          signal,
        });
        if (!response.ok) {
          throw new Error(
            `Pixabay повернув помилку ${response.status}. Перевір API-ключ або повтори пізніше.`,
          );
        }

        const data = await response.json();
        if (!Array.isArray(data.hits) || !Number.isFinite(data.totalHits)) {
          throw new Error("Pixabay повернув некоректну відповідь.");
        }

        await saveCache(cacheKey, data);
        return data;
      } catch (error) {
        throw error;
      }
    }

    async function renderImages(images) {
      try {
        const fragment = document.createDocumentFragment();

        for (const image of images) {
          const card = template.content.cloneNode(true);
          const photo = card.querySelector("img");
          photo.src = image.webformatURL;
          photo.alt = image.tags;
          const photoButton = card.querySelector(".photo-link");
          photoButton.dataset.largeImage = image.largeImageURL;
          photoButton.dataset.tags = image.tags;
          photoButton.setAttribute(
            "aria-label",
            `Відкрити фото: ${image.tags}`,
          );

          for (const property of ["likes", "views", "comments", "downloads"]) {
            card.querySelector(`[data-${property}]`).textContent =
              image[property].toLocaleString("uk-UA");
          }

          const source = card.querySelector(".photo-source");
          source.href = image.pageURL;
          source.textContent = `Фото: ${image.user} · Pixabay`;
          fragment.append(card);
        }

        const firstNewCard = fragment.firstElementChild;
        gallery.append(fragment);
        return firstNewCard;
      } catch (error) {
        throw new Error("Не вдалося відобразити зображення.");
      }
    }

    async function loadImages() {
      if (loading) return;
      const version = requestVersion;
      const nextPage = page + 1;

      try {
        loading = true;
        loadMoreButton.disabled = true;
        gallery.setAttribute("aria-busy", "true");
        controller = new AbortController();
        await showStatus("Завантажуємо зображення…");
        const data = await fetchImages(nextPage, controller.signal);
        if (version !== requestVersion) return;

        const firstNewCard = await renderImages(data.hits);
        page = nextPage;
        totalHits = Math.min(data.totalHits, 500);
        loadMoreButton.hidden =
          data.hits.length === 0 || page * perPage >= totalHits;

        if (data.hits.length === 0 && page === 1) {
          await showStatus("Нічого не знайдено. Спробуй інше ключове слово.");
        } else if (loadMoreButton.hidden) {
          await showStatus(
            `Показано всі доступні зображення: ${gallery.children.length}.`,
          );
        } else {
          await showStatus(
            `Показано ${gallery.children.length} із ${totalHits}. Сторінка ${page}.`,
          );
        }

        if (page > 1 && firstNewCard) {
          firstNewCard.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } catch (error) {
        if (version === requestVersion && error.name !== "AbortError") {
          loadMoreButton.hidden = page === 0;
          await showStatus(
            error.message || "Не вдалося завантажити зображення.",
            "error",
          );
        }
      } finally {
        if (version === requestVersion) {
          loading = false;
          loadMoreButton.disabled = false;
          gallery.setAttribute("aria-busy", "false");
        }
      }
    }

    async function searchImages(event) {
      try {
        event?.preventDefault();
        const newQuery = form.elements.query?.value.trim() || "";
        const newKey = keyInput.value.trim();

        if (!newKey) {
          await showStatus("Введи API-ключ Pixabay.", "error");
          keyInput.closest("details").open = true;
          keyInput.focus();
          return;
        }

        if (!editorsChoice && !newQuery) {
          await showStatus("Введи ключове слово для пошуку.", "error");
          form.elements.query.focus();
          return;
        }

        controller?.abort();
        requestVersion += 1;
        loading = false;
        query = newQuery;
        category = categoryInput?.value || "";
        apiKey = newKey;
        page = 0;
        gallery.replaceChildren();
        loadMoreButton.hidden = true;
        await saveCache("pixabay-key", newKey);
        await loadImages();
      } catch (error) {
        await showStatus("Не вдалося почати пошук.", "error");
      }
    }

    async function openImage(event) {
      try {
        const button = event.target.closest(".photo-link");
        if (!button) return;
        const image = dialog.querySelector("img");
        image.src = button.dataset.largeImage;
        image.alt = button.dataset.tags;
        dialog.showModal();
      } catch (error) {
        await showStatus("Не вдалося відкрити велике зображення.", "error");
      }
    }

    async function closeImage(event) {
      try {
        if (event.target === dialog || event.target.closest("#close-image")) {
          dialog.close();
          dialog.querySelector("img").removeAttribute("src");
        }
      } catch (error) {
        await showStatus("Не вдалося закрити зображення.", "error");
      }
    }

    async function loadApiKey() {
      try {
        const savedKey = await readCache("pixabay-key");
        if (savedKey) {
          keyInput.value = savedKey;
          return;
        }

        if (
          ["localhost", "127.0.0.1"].includes(location.hostname) &&
          location.port === "3001"
        ) {
          const response = await fetch("/api/config");
          if (response.ok) {
            const config = await response.json();
            keyInput.value = config.pixabayKey || "";
          }
        }
      } catch (error) {
        await showStatus("Встав API-ключ у поле, щоб продовжити.");
      }
    }

    form.addEventListener("submit", searchImages);
    loadMoreButton.addEventListener("click", loadImages);
    gallery.addEventListener("click", openImage);
    dialog.addEventListener("click", closeImage);
    window.runTask = searchImages;

    await loadApiKey();
    if (editorsChoice && keyInput.value) await searchImages();
  } catch (error) {
    const status = document.querySelector("#gallery-status");
    if (status)
      status.textContent = "Не вдалося підготувати галерею. Онови сторінку.";
  }
}
