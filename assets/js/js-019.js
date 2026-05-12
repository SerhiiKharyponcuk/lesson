"use strict";

window.runTask = function () {
  // 1) Radio color -> background
  const radios = document.querySelectorAll('input[name="color"]');

  function setBodyColor(color) {
    document.body.style.backgroundColor = color;
  }

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      setBodyColor(radios[i].value);
    }

    radios[i].addEventListener("change", function () {
      setBodyColor(this.value);
    });
  }

  // 2) Input name -> span output
  const nameInput = document.getElementById("name-input");
  const nameOutput = document.getElementById("name-output");

  if (nameInput && nameOutput) {
    nameInput.addEventListener("input", function () {
      if (this.value.trim() === "") {
        nameOutput.textContent = "незнайомець";
      } else {
        nameOutput.textContent = this.value;
      }
    });
  }

  // 2.2) Validation input (blur)
  const validationInput = document.getElementById("validation-input");

  if (validationInput) {
    validationInput.addEventListener("blur", function () {
      const needLength = Number(this.dataset.length);
      const currentLength = this.value.length;

      if (currentLength === needLength) {
        this.classList.remove("invalid");
        this.classList.add("valid");
      } else {
        this.classList.remove("valid");
        this.classList.add("invalid");
      }
    });
  }

  // 3) Range font size -> span text
  const fontControl = document.getElementById("font-size-control");
  const text = document.getElementById("text");

  if (fontControl && text) {
    fontControl.min = 10;
    fontControl.max = 60;
    fontControl.value = 16;
    text.style.fontSize = fontControl.value + "px";

    fontControl.addEventListener("input", function () {
      text.style.fontSize = this.value + "px";
    });
  }
};