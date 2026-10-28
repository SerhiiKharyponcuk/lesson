(() => {
  "use strict";

  const auth = window.wsappAuth;
  const gate = document.getElementById("wsapp-roleGate");
  const app = document.getElementById("wsapp-app");
  const form = document.getElementById("wsappGateForm");
  const passwordInput = document.getElementById("wsappGatePassword");
  const passwordToggle = document.getElementById("wsappGateToggle");
  const passwordLabel = document.querySelector(
    'label[for="wsappGatePassword"]',
  );
  const errorMessage = document.getElementById("wsappGateError");
  const submitButton = form?.querySelector('[type="submit"]');
  if (!gate || !auth || !form) return;

  const roleCards = gate.querySelectorAll("[data-role]");
  const savedRole = localStorage.getItem("wsapp_role");
  let selectedRole = savedRole === "teacher" ? "teacher" : "student";
  let checking = false;

  function selectRole(role) {
    selectedRole = role;
    for (const card of roleCards) {
      const selected = card.dataset.role === role;
      card.classList.toggle("wsapp-gate__card--active", selected);
      card.setAttribute("aria-pressed", String(selected));
    }
    passwordLabel.textContent =
      role === "teacher" ? "Пароль вчителя" : "Мій пароль";
    submitButton.textContent =
      role === "teacher" ? "Увійти як вчитель" : "Увійти як учень";
    errorMessage.textContent = "";
    passwordInput.value = "";
    passwordInput.type = "password";
    passwordToggle.textContent = "👁";
    passwordToggle.setAttribute("aria-pressed", "false");
    passwordToggle.setAttribute("aria-label", "Показати пароль");
  }

  function showGate() {
    app.classList.add("wsapp-app--hidden");
    gate.classList.remove("wsapp-gate--hidden");
    gate.setAttribute("aria-hidden", "false");
    selectRole(selectedRole);
    passwordInput.focus({ preventScroll: true });
  }

  function showApp(role) {
    passwordInput.value = "";
    gate.classList.add("wsapp-gate--hidden");
    gate.setAttribute("aria-hidden", "true");
    app.classList.remove("wsapp-app--hidden");
    document.dispatchEvent(
      new CustomEvent("wsapp:roleChanged", { detail: { role } }),
    );
  }

  for (const card of roleCards) {
    card.addEventListener("click", () => {
      if (!checking) selectRole(card.dataset.role);
    });
  }

  passwordToggle.addEventListener("click", () => {
    const visible = passwordInput.type === "password";
    passwordInput.type = visible ? "text" : "password";
    passwordToggle.textContent = visible ? "🙈" : "👁";
    passwordToggle.setAttribute("aria-pressed", String(visible));
    passwordToggle.setAttribute(
      "aria-label",
      visible ? "Сховати пароль" : "Показати пароль",
    );
  });

  passwordInput.addEventListener("input", () => {
    errorMessage.textContent = "";
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (checking) return;

    try {
      checking = true;
      submitButton.disabled = true;
      submitButton.textContent = "Перевіряємо…";
      for (const card of roleCards) card.disabled = true;
      const success = await auth.signIn(selectedRole, passwordInput.value);

      if (!success) {
        errorMessage.textContent = "Невірний пароль. Спробуйте ще раз.";
        passwordInput.select();
        return;
      }

      showApp(selectedRole);
      const returnUrl = auth.getReturnUrl();
      if (returnUrl) {
        location.replace(returnUrl);
      } else {
        history.replaceState(null, "", location.pathname);
        document.querySelector("#wsapp-screen-home button")?.focus();
      }
    } catch (error) {
      errorMessage.textContent =
        "Не вдалося виконати вхід. Оновіть сторінку та спробуйте ще раз.";
    } finally {
      checking = false;
      submitButton.disabled = false;
      submitButton.textContent =
        selectedRole === "teacher" ? "Увійти як вчитель" : "Увійти як учень";
      for (const card of roleCards) card.disabled = false;
    }
  });

  gate.addEventListener("keydown", (event) => {
    if (event.key === "Escape") event.preventDefault();
    if (event.key !== "Tab") return;
    const controls = gate.querySelectorAll(
      "button:not(:disabled), input:not(:disabled)",
    );
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  window.wsappOpenRoleGate = auth.signOut;
  document.addEventListener("wsapp:loginRequired", showGate);

  function init() {
    const session = auth.getSession();
    if (session) showApp(session.role);
    else showGate();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
