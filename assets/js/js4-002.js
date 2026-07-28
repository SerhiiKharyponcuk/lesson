"use strict";

const debounce = window._?.debounce || function (fn, wait) {
  let timeout = null;
  return function (...args) {
    const later = () => {
      timeout = null;
      fn.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

window.runTask = function () {
  const sliderInput = document.querySelector(".slider__input");
  const sliderImage = document.querySelector(".slider__image");
  const box = document.getElementById("box");

  const changeImageSize = debounce(function () {
    sliderImage.style.width = sliderInput.value + "px";
  }, 100);

  sliderInput.addEventListener("input", changeImageSize);

  const moveBox = debounce(function (event) {
    box.style.left = event.clientX - 25 + "px";
    box.style.top = event.clientY - 25 + "px";
  }, 100);

  document.addEventListener("mousemove", moveBox);
};
