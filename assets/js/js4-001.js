"use strict";

window.runTask = function () {
  const galleryItems = [
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
      description: "Hokkaido Flower",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
      description: "Container Haulage Freight",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
      description: "Aerial Beach View",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
      description: "Flower Blooms",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
      description: "Alpine Mountains",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
      description: "Mountain Lake Sailing",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
      description: "Alpine Spring Meadows",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
      description: "Nature Landscape",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
      description: "Lighthouse Coast Sea",
    },
  ];

  const gallery = document.querySelector(".js-gallery");
  const lightbox = document.querySelector(".js-lightbox");
  const lightboxImage = document.querySelector(".lightbox__image");
  const closeButton = document.querySelector('[data-action="close-lightbox"]');
  const overlay = document.querySelector(".lightbox__overlay");

  if (!gallery || !lightbox || !lightboxImage || !closeButton || !overlay) {
    return;
  }

  if (gallery.dataset.lightboxReady === "true") {
    return;
  }

  let currentIndex = 0;

  gallery.innerHTML = galleryItems
    .map(
      ({ preview, original, description }) => `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>
      `
    )
    .join("");

  function updateImage() {
    const { original, description } = galleryItems[currentIndex];

    lightboxImage.src = original;
    lightboxImage.alt = description;
  }

  function openLightbox(index) {
    currentIndex = index;
    updateImage();

    lightbox.classList.add("is-open");
    window.addEventListener("keydown", onKeydown);
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");

    lightboxImage.src = "";
    lightboxImage.alt = "";

    window.removeEventListener("keydown", onKeydown);
  }

  function showNextImage() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    updateImage();
  }

  function showPrevImage() {
    currentIndex =
      (currentIndex - 1 + galleryItems.length) % galleryItems.length;

    updateImage();
  }

  function onGalleryClick(event) {
    const image = event.target.closest(".gallery__image");

    if (!image) {
      return;
    }

    event.preventDefault();

    const index = galleryItems.findIndex(
      (item) => item.original === image.dataset.source
    );

    if (index !== -1) {
      openLightbox(index);
    }
  }

  function onKeydown(event) {
    switch (event.key) {
      case "Escape":
        closeLightbox();
        break;

      case "ArrowRight":
        showNextImage();
        break;

      case "ArrowLeft":
        showPrevImage();
        break;
    }
  }

  gallery.addEventListener("click", onGalleryClick);
  closeButton.addEventListener("click", closeLightbox);
  overlay.addEventListener("click", closeLightbox);

  gallery.dataset.lightboxReady = "true";
};