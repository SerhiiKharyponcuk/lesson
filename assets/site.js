(function () {
  "use strict";

  // ====== State ======
  const state = {
    role: localStorage.getItem("wsapp_role") || "student",
    screen: "home",
    sheetId: null,
  };

  // ====== Demo homework data ======
  const HOMEWORK = [
    { id: "dz-001", title: "be going to — вправа 1", meta: "10 питань · 7 хв" },
    {
      id: "dz-002",
      title: "Читання: Peace Corps",
      meta: "текст + питання · 12 хв",
    },
    { id: "dz-003", title: "Нідерландська A1: прикметники", meta: "8 хв" },
  ];

  // ====== Helpers ======
  const qs = (s, r = document) => r.querySelector(s);
  const qsa = (s, r = document) => Array.from(r.querySelectorAll(s));

  function setRole(role) {
    state.role = role;
    localStorage.setItem("wsapp_role", role);
    renderRole();
    applyRoleVisibility();

    if (
      role === "teacher" &&
      (state.screen === "lesson" || state.screen === "training")
    ) {
      navigate("homework");
    }
  }

  function renderRole() {
    const badge = qs("#wsappRoleBadge");
    if (!badge) return;
    badge.textContent =
      state.role === "teacher" ? "Роль: вчитель" : "Роль: учень";

    const title = qs("#wsappHomeTitle");
    const description = qs("#wsappHomeDescription");
    const eyebrow = qs("#wsappHomeEyebrow");
    if (!title || !description || !eyebrow) return;

    if (state.role === "teacher") {
      title.textContent = "Вітаю, вчителю!";
      description.textContent =
        "Тут ви можете переглянути мої домашні завдання та результати навчання.";
      eyebrow.textContent = "Мої домашні завдання";
    } else {
      title.textContent = "Вчись. Практикуй. Створюй.";
      description.textContent =
        "Уроки, домашні завдання та нові навички — в одному місці.";
      eyebrow.textContent = "Твій простір для розвитку";
    }
  }

  function applyRoleVisibility() {
    qsa('[data-ws-student-only="true"]').forEach((el) => {
      el.classList.toggle("wsapp-menu__tile--hidden", state.role === "teacher");
    });
  }

  function navigate(target) {
    if (
      state.role === "teacher" &&
      (target === "lesson" || target === "training")
    ) {
      target = "homework";
    }

    state.screen = target;

    qsa(".wsapp-screen").forEach((s) =>
      s.classList.remove("wsapp-screen--active"),
    );

    const el = qs(`#wsapp-screen-${target}`);
    if (el) el.classList.add("wsapp-screen--active");
  }

  function renderHomework() {
    const list = qs("#wsappHomeworkList");
    if (!list) return;

    list.innerHTML = HOMEWORK.map(
      (h) => `
      <div class="wsapp-listItem" data-ws-open-sheet="${h.id}">
        <p>${h.title}</p>
        <small>${h.meta}</small>
      </div>
    `,
    ).join("");
  }

  function openSheet(id) {
    state.sheetId = id;
    navigate("sheet");
  }

  // ====== Events ======
  function bindEvents() {
    document.addEventListener("click", (e) => {
      const nav = e.target.closest("[data-wsnav]");
      if (nav) return navigate(nav.dataset.wsnav);

      const sheet = e.target.closest("[data-ws-open-sheet]");
      if (sheet) return openSheet(sheet.dataset.wsOpenSheet);
    });

    // 🔒 КНОПКА «ЗМІНИТИ РОЛЬ» → ТІЛЬКИ GATE
    const roleBtn = qs("#wsappRoleBtn");
    if (roleBtn) {
      roleBtn.addEventListener("click", () => {
        window.wsappOpenRoleGate && window.wsappOpenRoleGate();
      });
    }

    // 👂 слухаємо зміну ролі з gate
    document.addEventListener("wsapp:roleChanged", (e) => {
      setRole(e.detail.role);
    });
  }

  // ====== Init ======
  function init() {
    renderRole();
    applyRoleVisibility();
    renderHomework();
    bindEvents();
    navigate("home");
  }

  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", init)
    : init();
})();
