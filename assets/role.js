(function () {
  'use strict';

  const gate = document.getElementById('wsapp-roleGate');
  if (!gate) return;

  const roleCards = gate.querySelectorAll('[data-role]');
  const form = document.getElementById('wsappGateForm');
  const passwordInput = document.getElementById('wsappGatePassword');
  const errorEl = document.getElementById('wsappGateError');
  const closeBtns = gate.querySelectorAll('[data-gate-close]');

  // 🔐 ПРОСТІ, ПАРОЛІ
  const PASSWORDS = {
    student: '1111',
    teacher: '2222'
  };


  const SHOW_DELAY = 2000;

  let selectedRole = localStorage.getItem('wsapp_role') || 'student';

  // ---------- helpers ----------
  function highlightRole() {
    roleCards.forEach(card => {
      card.classList.toggle(
        'wsapp-gate__card--active',
        card.dataset.role === selectedRole
      );
    });
  }

  function showGate() {
    gate.classList.remove('wsapp-gate--hidden');
    gate.setAttribute('aria-hidden', 'false');

    if (passwordInput) passwordInput.value = '';
    if (errorEl) errorEl.textContent = '';

    highlightRole();
    setTimeout(() => passwordInput && passwordInput.focus(), 0);
  }

  function hideGate() {
    gate.classList.add('wsapp-gate--hidden');
    gate.setAttribute('aria-hidden', 'true');
  }

  // ---------- вибір ролі ----------
  roleCards.forEach(card => {
    card.addEventListener('click', () => {
      selectedRole = card.dataset.role;
      highlightRole();
      if (errorEl) errorEl.textContent = '';
    });
  });

  // ---------- submit ----------
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const pass = passwordInput.value.trim();
    if (pass !== PASSWORDS[selectedRole]) {
      errorEl.textContent = 'Невірний пароль';
      return;
    }

    // ✅ встановлюємо роль
    localStorage.setItem('wsapp_role', selectedRole);

    // повідомляємо app.js
    document.dispatchEvent(
      new CustomEvent('wsapp:roleChanged', {
        detail: { role: selectedRole }
      })
    );

    hideGate();
  });

  // ---------- close ----------
  closeBtns.forEach(btn => btn.addEventListener('click', hideGate));

  // ---------- public API ----------
  window.wsappOpenRoleGate = showGate;

  // ---------- ⏱ СТАРТ ЧЕРЕЗ 3 СЕКУНДИ ----------
  function startGateTimer() {
    setTimeout(showGate, SHOW_DELAY);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startGateTimer);
  } else {
    startGateTimer();
  }
})();
