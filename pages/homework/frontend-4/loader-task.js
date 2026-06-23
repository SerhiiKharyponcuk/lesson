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

  const TASKS = ["js4-001.html"];

  const cssMap = {
    "js4-001.html": "../../../assets/js/js4-001.css",
  };

  const jsMap = {
    "js4-001.html": "../../../assets/js/js4-001.js",
  };

  const titleMap = {
    "js4-001.html": "JS-001 - Gallery lightbox",
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

    try {
      const res = await fetch(`./${taskFile}`, { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      elContent.innerHTML = await res.text();
    } catch (e) {
      elContent.innerHTML = `<p>Could not load <strong>${taskFile}</strong></p>`;
      console.error(e);
    }

    setRunButtonState(false);

    try {
      const jsSrc = jsMap[taskFile];
      if (jsSrc) await loadTaskScript(jsSrc);
      setRunButtonState(typeof window.runTask === "function");
    } catch (e) {
      console.error(e);
      setRunButtonState(false);
    }
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
    elContent.innerHTML = "<p>Frontend 4 tasks will appear here after they are added.</p>";
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
