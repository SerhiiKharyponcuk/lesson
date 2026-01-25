// pages/homework/frontend/loader-task.js
(() => {
  "use strict";

  const params = new URLSearchParams(window.location.search);
  const file = params.get("file"); // fe-001.html ... fe-013.html

  const elTitle = document.getElementById("taskTitle");
  const elContent = document.getElementById("taskContent");
  const elStyle = document.getElementById("feStyle");
  const elPrev = document.getElementById("prevTask");
  const elNext = document.getElementById("nextTask");

  const TASKS = [
    "fe-001.html",
    "fe-002.html",
    "fe-003.html",
    "fe-004.html",
    "fe-005.html",
    "fe-006.html",
    "fe-007.html",
    "fe-008.html",
    "fe-009.html",
    "fe-010.html",
    "fe-011.html",
    "fe-012.html",
    "fe-013.html",
  ];

  const cssMap = {
    "fe-001.html": "../../../assets/frontend/fe-001.css",
    "fe-002.html": "../../../assets/frontend/fe-002.css",
    "fe-003.html": "../../../assets/frontend/fe-003.css",
    "fe-004.html": "../../../assets/frontend/fe-004.css",
    "fe-005.html": "../../../assets/frontend/fe-005.css",
    "fe-006.html": "../../../assets/frontend/fe-006.css",
    "fe-007.html": "../../../assets/frontend/fe-007.css",
    "fe-008.html": "../../../assets/frontend/fe-008.css",
    "fe-009.html": "../../../assets/frontend/fe-009.css",
    "fe-010.html": "../../../assets/frontend/fe-010.css",
    "fe-011.html": "../../../assets/frontend/fe-011.css",
    "fe-012.html": "../../../assets/frontend/fe-012.css",
    "fe-013.html": "../../../assets/frontend/fe-013.css",
  };

  const titleMap = {
    "fe-001.html": "FE-001 — Links + Box list",
    "fe-002.html": "FE-002 — 3-column layout",
    "fe-003.html": "FE-003 — Holder",
    "fe-004.html": "FE-004 — BG box",
    "fe-005.html": "FE-005 — Фон елементу",
    "fe-006.html": "FE-006 — Багатошаровий фон",
    "fe-007.html": "FE-007 — Cards list",
    "fe-008.html": "FE-008 — Modal",
    "fe-009.html": "FE-009 — Color boxes",
    "fe-010.html": "FE-010 — Checkbox (no JS)",
    "fe-011.html": "FE-011 — Hover underline menu",
    "fe-012.html": "FE-012 — Sidebar SVG menu",
    "fe-013.html": "FE-013 — Bootstrap demo",
  };

  function setNav(currentIdx) {
    if (!elPrev || !elNext) return;

    const prevFile = TASKS[currentIdx - 1];
    const nextFile = TASKS[currentIdx + 1];

    if (prevFile) {
      elPrev.href = `./layout.html?file=${prevFile}`;
      elPrev.style.visibility = "visible";
    } else {
      elPrev.href = "./index.html";
      elPrev.style.visibility = "hidden";
    }

    if (nextFile) {
      elNext.href = `./layout.html?file=${nextFile}`;
      elNext.style.visibility = "visible";
    } else {
      elNext.href = "./index.html";
      elNext.style.visibility = "hidden";
    }
  }

  async function loadTask(taskFile) {
    // Title
    const title = titleMap[taskFile] || taskFile.toUpperCase();
    if (elTitle) elTitle.textContent = title;
    document.title = title;

    // CSS
    if (elStyle) elStyle.href = cssMap[taskFile] || "";

    // Content
    if (!elContent) return;
    try {
      const res = await fetch(`./${taskFile}`, { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const html = await res.text();
      elContent.innerHTML = html;
    } catch (err) {
      elContent.innerHTML = `
        <p style="margin:0">
          Не можу завантажити <strong>${taskFile}</strong>.
          Перевір: чи файл існує в цій папці і чи запускаєш сайт через сервер (Live Server).
        </p>
      `;
      console.error(err);
    }
  }

  // Guard
  if (!file) {
    if (elTitle) elTitle.textContent = "Оберіть завдання зі списку";
    if (elContent) {
      elContent.innerHTML = `<p style="margin:0">Немає параметра <code>?file=fe-00X.html</code>. Поверніться у список.</p>`;
    }
    if (elPrev) elPrev.style.visibility = "hidden";
    if (elNext) elNext.style.visibility = "hidden";
    return;
  }

  const idx = TASKS.indexOf(file);
  if (idx === -1) {
    if (elTitle) elTitle.textContent = "Завдання не знайдено";
    if (elContent) {
      elContent.innerHTML = `<p style="margin:0">Невідомий файл: <strong>${file}</strong></p>`;
    }
    if (elPrev) elPrev.style.visibility = "hidden";
    if (elNext) elNext.style.visibility = "hidden";
    return;
  }

  setNav(idx);
  loadTask(file);
})();