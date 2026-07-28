"use strict";

// Frontend 4 homework task JS-003: lazy loading images
window.runTask = function () {
  const images = document.querySelectorAll("img[data-src]");
  const loadAllButton = document.getElementById("load-all");

  function loadImage(image) {
    if (!image.dataset.src) {
      return;
    }

    image.classList.add("loading");
    image.src = image.dataset.src;

    image.addEventListener(
      "load",
      function () {
        image.classList.remove("loading");
        image.classList.add("loaded");
        image.removeAttribute("data-src");
      },
      { once: true }
    );
  }

  const imageObserver = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          loadImage(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "100px",
    }
  );

  images.forEach(function (image) {
    imageObserver.observe(image);
  });

  loadAllButton.addEventListener("click", function () {
    images.forEach(function (image) {
      loadImage(image);
      imageObserver.unobserve(image);
    });
  });
};
