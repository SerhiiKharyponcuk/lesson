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
    "js4-001.html",
    "js4-002.html",
    "js4-003.html",
    "js4-004.html",
    "js4-005.html",
    "js4-006.html",
    "js4-007.html",
    "js4-008.html",
    "js4-009.html",
    "js4-010.html",
    "js4-011.html",
    "js4-012.html",
    "js4-013.html",
    "js4-014.html",
    "js4-015.html",
    "js4-016.html",
    "js4-017.html",
    "js4-018.html",
    "js4-019.html",
    "js4-020.html",
  ];

  const cssMap = {
    "js4-001.html": "../../../assets/js/js4-001.css",
    "js4-009.html": "../../../assets/js/js4-009.css",
    "js4-010.html": "../../../assets/js/js4-010.css",
    "js4-011.html": "../../../assets/js/js4-011.css",
    "js4-012.html": "../../../assets/js/js4-012.css",
    "js4-014.html": "../../../assets/js/async-homework.css",
    "js4-015.html": "../../../assets/js/async-homework.css",
    "js4-016.html": "../../../assets/js/async-homework.css",
    "js4-017.html": "../../../assets/js/async-homework.css",
    "js4-018.html": "../../../assets/js/async-homework.css",
    "js4-019.html": "../../../assets/js/async-homework.css",
    "js4-020.html": "../../../assets/js/async-homework.css",
  };

  const externalScriptsMap = {
    "js4-005.html": [
      "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/pnotify/3.2.1/pnotify.js",
      "https://cdn.jsdelivr.net/npm/chart.js",
    ],
    "js4-015.html": [
      "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/pnotify/3.2.1/pnotify.js",
      "../../../assets/js/countries-ui.js",
    ],
    "js4-016.html": [
      "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/pnotify/3.2.1/pnotify.js",
      "../../../assets/js/countries-ui.js",
    ],
    "js4-018.html": ["../../../assets/js/students-ui.js"],
    "js4-019.html": ["../../../assets/js/students-ui.js"],
    "js4-002.html": [
      "https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js",
    ],
  };

  const externalStylesMap = {
    "js4-005.html": [
      "https://cdnjs.cloudflare.com/ajax/libs/pnotify/3.2.1/pnotify.css",
    ],
    "js4-015.html": [
      "https://cdnjs.cloudflare.com/ajax/libs/pnotify/3.2.1/pnotify.css",
    ],
    "js4-016.html": [
      "https://cdnjs.cloudflare.com/ajax/libs/pnotify/3.2.1/pnotify.css",
    ],
    "js4-017.html": ["https://fonts.googleapis.com/icon?family=Material+Icons"],
    "js4-020.html": ["https://fonts.googleapis.com/icon?family=Material+Icons"],
  };

  const jsMap = {
    "js4-001.html": "../../../assets/js/js4-001.js",
    "js4-002.html": "../../../assets/js/js4-002.js",
    "js4-003.html": "../../../assets/js/js4-003.js",
    "js4-004.html": "../../../assets/js/js4-004.js",
    "js4-005.html": "../../../assets/js/js4-005.js",
    "js4-006.html": "../../../assets/js/js4-006.js",
    "js4-007.html": "../../../assets/js/js4-007.js",
    "js4-008.html": "../../../assets/js/js4-008.js",
    "js4-009.html": "../../../assets/js/js4-009.js",
    "js4-010.html": "../../../assets/js/js4-010.js",
    "js4-011.html": "../../../assets/js/js4-011.js",
    "js4-012.html": "../../../assets/js/js4-012.js",
    "js4-013.html": "../../../assets/js/js4-013.js",
    "js4-014.html": "../../../assets/js/js4-014.js",
    "js4-015.html": "../../../assets/js/js4-015.js",
    "js4-016.html": "../../../assets/js/js4-016.js",
    "js4-017.html": "../../../assets/js/js4-017.js",
    "js4-018.html": "../../../assets/js/js4-018.js",
    "js4-019.html": "../../../assets/js/js4-019.js",
    "js4-020.html": "../../../assets/js/js4-020.js",
  };

  const titleMap = {
    "js4-001.html": "JS-001 - Gallery lightbox",
    "js4-002.html": "JS-002 - Lodash. Throttle and Debounce",
    "js4-003.html": "JS-003 - Intersection Observer",
    "js4-004.html": "JS-004 - Package.json setup",
    "js4-005.html": "JS-005 - Biblioteks and frameworks",
    "js4-006.html": "JS-006 - Parcel та JavaScript модулі",
    "js4-007.html": "JS-007 - Handlebars і Parcel",
    "js4-008.html": "JS-008 - localStorage і Handlebars",
    "js4-009.html": "JS-009 - Книга контактів",
    "js4-010.html": "JS-010 - Таймери та інтервали",
    "js4-011.html": "JS-011 - Таймери з повідомленням",
    "js4-012.html": "JS-012 - CountdownTimer",
    "js4-013.html": "JS-013 - Promises",
    "js4-014.html": "JS-014 - Методи класу Promise. Цикл подій",
    "js4-015.html": "JS-015 - HTTP-запити 1. REST API",
    "js4-016.html": "JS-016 - HTTP-запити 2. AJAX",
    "js4-017.html": "JS-017 - Пагінація",
    "js4-018.html": "JS-018 - CRUD студентів",
    "js4-019.html": "JS-019 - Асинхронні функції async/await",
    "js4-020.html": "JS-020 - Пошук зображень з async/await",
  };

  function setRunButtonState(ready) {
    if (!runBtn) return;
    runBtn.disabled = !ready;
    runBtn.style.opacity = ready ? "1" : "0.6";
  }

  function setNav(i) {
    const prev = TASKS[i - 1];
    const next = TASKS[i + 1];

    if (prev) {
      elPrev.href = `./layout.html?file=${prev}`;
      elPrev.style.visibility = "visible";
    } else {
      elPrev.style.visibility = "hidden";
    }

    if (next) {
      elNext.href = `./layout.html?file=${next}`;
      elNext.style.visibility = "visible";
    } else {
      elNext.style.visibility = "hidden";
    }
  }

  function loadTaskScript(src) {
    delete window.runTask;
    delete window.taskReady;

    const old = document.querySelector("script[data-task-script='1']");
    if (old) old.remove();

    return new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = src;
      s.async = false;
      s.dataset.taskScript = "1";
      s.onload = () => resolve();
      s.onerror = () => reject(new Error("Script load failed: " + src));
      document.body.appendChild(s);
    });
  }

  async function loadExternalScripts(sources) {
    if (!sources || !sources.length) return;

    for (const src of sources) {
      if (document.querySelector(`script[data-external-src="${src}"]`)) continue;

      await new Promise((resolve, reject) => {
        const s = document.createElement("script");
        s.src = src;
        s.async = false;
        s.dataset.externalSrc = src;
        s.onload = () => resolve();
        s.onerror = () =>
          reject(new Error("External script load failed: " + src));
        document.body.appendChild(s);
      });
    }
  }

  async function loadTask(taskFile) {
    const title = titleMap[taskFile] || taskFile.toUpperCase();
    elTitle.textContent = title;
    document.title = title;

    if (elStyle && cssMap[taskFile]) {
      elStyle.href = cssMap[taskFile];
    } else {
      elStyle?.removeAttribute("href");
    }

    for (const href of externalStylesMap[taskFile] || []) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.append(link);
    }

    try {
      const res = await fetch(`./${taskFile}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const template = document.createElement("template");
      template.innerHTML = await res.text();
      for (const script of template.content.querySelectorAll("script")) {
        script.remove();
      }
      elContent.replaceChildren(template.content);
    } catch (e) {
      elContent.innerHTML = `<p>Could not load <strong>${taskFile}</strong></p>`;
      console.error(e);
    }

    setRunButtonState(false);

    try {
      const externalScripts = externalScriptsMap[taskFile] || [];
      if (externalScripts.length) await loadExternalScripts(externalScripts);

      const jsSrc = jsMap[taskFile];
      if (jsSrc) await loadTaskScript(jsSrc);
      if (window.taskReady) await window.taskReady;
      setRunButtonState(typeof window.runTask === "function");
    } catch (e) {
      console.error(e);
      setRunButtonState(false);
    }
    elContent.setAttribute("aria-busy", "false");
  }

  if (runBtn) {
    runBtn.addEventListener("click", () => {
      if (typeof window.runTask === "function") {
        window.runTask();
      } else {
        alert("runTask() was not found.");
      }
    });
  }

  if (!file) {
    elTitle.textContent = "Choose a task from the list";
    elContent.innerHTML =
      "<p>Frontend 4 tasks will appear here after they are added.</p>";
    elPrev.style.visibility = "hidden";
    elNext.style.visibility = "hidden";
    setRunButtonState(false);
    return;
  }

  const idx = TASKS.indexOf(file);

  if (idx === -1) {
    elTitle.textContent = "Task not found";
    elContent.innerHTML = `<p>Unknown file: <strong>${file}</strong></p>`;
    elPrev.style.visibility = "hidden";
    elNext.style.visibility = "hidden";
    setRunButtonState(false);
    return;
  }

  setNav(idx);
  loadTask(file);
})();
