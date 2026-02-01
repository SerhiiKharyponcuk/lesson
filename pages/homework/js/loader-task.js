(() => {
  "use strict";

  const params = new URLSearchParams(window.location.search);
  const file = params.get("file");

  const elTitle = document.getElementById("taskTitle");
  const elContent = document.getElementById("taskContent");
  const elStyle = document.getElementById("jsStyle");
  const elPrev = document.getElementById("prevTask");
  const elNext = document.getElementById("nextTask");
  const runBtn = document.getElementById("runJsBtn");

  const TASKS = [
    "js-001.html",
    "js-002.html",
    "js-003.html",
    "js-004.html",
    "js-005.html",
    "js-006.html",
    "js-007.html",
  ];


  const cssMap = {
    "js-001.html": "../../../assets/js/js-001.css",
    "js-002.html": "../../../assets/js/js-002.css",
    "js-003.html": "../../../assets/js/js-003.css",
    "js-004.html": "../../../assets/js/js-004.css",
    "js-005.html": "../../../assets/js/js-005.css",
  };

  const jsMap = {
  "js-001.html": "../../../assets/js/js-001.js",
  "js-002.html": "../../../assets/js/js-002.js",
  "js-003.html": "../../../assets/js/js-003.js",
  "js-004.html": "../../../assets/js/js-004.js",
  "js-005.html": "../../../assets/js/js-005.js",
  "js-006.html": "../../../assets/js/js-006.js",
  "js-007.html": "../../../assets/js/js-007.js",
};


 const titleMap = {
  "js-001.html": "JS-001 — Змінні",
  "js-002.html": "JS-002 — Числа",
  "js-003.html": "JS-003 — Рядки",
  "js-004.html": "JS-004 — Умови",
  "js-005.html": "JS-005 — switch та логіка",
  "js-006.html": "JS-006 — switch (напої, дні, пори року)",
  "js-007.html": "JS-007 — Калькулятор",
};


  function setNav(i) {
    const prev = TASKS[i - 1];
    const next = TASKS[i + 1];

    if (prev) {
      elPrev.href = `./layout.html?file=${prev}`;
      elPrev.style.visibility = "visible";
    } else elPrev.style.visibility = "hidden";

    if (next) {
      elNext.href = `./layout.html?file=${next}`;
      elNext.style.visibility = "visible";
    } else elNext.style.visibility = "hidden";
  }

  function setRunButtonState(ready) {
    if (!runBtn) return;
    runBtn.disabled = !ready;
    runBtn.style.opacity = ready ? "1" : "0.6";
  }

  function loadTaskScript(src) {
    // скидаємо попередню функцію
    delete window.runTask;

    // видаляємо попередній інжект-скрипт
    const old = document.querySelector("script[data-task-script='1']");
    if (old) old.remove();

    return new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = src;
      s.defer = true;
      s.dataset.taskScript = "1";
      s.onload = () => resolve();
      s.onerror = () => reject(new Error("Script load failed: " + src));
      document.body.appendChild(s);
    });
  }

  async function loadTask(taskFile) {
    const title = titleMap[taskFile] || taskFile.toUpperCase();
    elTitle.textContent = title;
    document.title = title;

    if (elStyle) elStyle.href = cssMap[taskFile] || "";

    // HTML завдання
    try {
      const res = await fetch(`./${taskFile}`, { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      elContent.innerHTML = await res.text();
    } catch (e) {
      elContent.innerHTML = `<p>❌ Не вдалося завантажити <strong>${taskFile}</strong></p>`;
      console.error(e);
    }

    // JS завдання (кнопка активується тільки після onload)
    setRunButtonState(false);
    try {
      const jsSrc = jsMap[taskFile];
      if (jsSrc) {
        await loadTaskScript(jsSrc);
      }
      setRunButtonState(typeof window.runTask === "function");
    } catch (e) {
      console.error(e);
      setRunButtonState(false);
    }
  }

  // Клік по кнопці запускає window.runTask()
  if (runBtn) {
    runBtn.addEventListener("click", () => {
      if (typeof window.runTask === "function") {
        window.runTask();
      } else {
        alert("❌ Функція runTask() не знайдена. Перевір, що JS-файл огорнутий у window.runTask = function(){}");
      }
    });
  }

  // guards
  if (!file) {
    elTitle.textContent = "Оберіть завдання зі списку";
    elContent.innerHTML = "<p>Немає параметра <code>?file=js-00X.html</code></p>";
    elPrev.style.visibility = "hidden";
    elNext.style.visibility = "hidden";
    setRunButtonState(false);
    return;
  }

  const idx = TASKS.indexOf(file);
  if (idx === -1) {
    elTitle.textContent = "Завдання не знайдено";
    elContent.innerHTML = `<p>Невідомий файл: <strong>${file}</strong></p>`;
    elPrev.style.visibility = "hidden";
    elNext.style.visibility = "hidden";
    setRunButtonState(false);
    return;
  }

  setNav(idx);
  loadTask(file);
})();