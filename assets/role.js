(function () {
  'use strict';

  const gate = document.getElementById('wsapp-roleGate');
  if (!gate) return;

  const roleCards = gate.querySelectorAll('[data-role]');
  const form = document.getElementById('wsappGateForm');
  const passwordInput = document.getElementById('wsappGatePassword');
  const togglePasswordBtn = document.getElementById('wsappGateToggle');
  const errorEl = document.getElementById('wsappGateError');
  const closeBtns = gate.querySelectorAll('[data-gate-close]');

  const PASSWORDS = {
    student: '1111',
    teacher: '2222'
  };

  const SHOW_DELAY = 2000;

  let selectedRole = localStorage.getItem('wsapp_role') || 'student';

  function highlightRole() {
    roleCards.forEach(card => {
      card.classList.toggle(
        'wsapp-gate__card--active',
        card.dataset.role === selectedRole
      );
    });
  }

  function resetPasswordField() {
    if (!passwordInput) return;

    passwordInput.value = '';
    passwordInput.type = 'password';

    if (togglePasswordBtn) {
      togglePasswordBtn.textContent = '👁';
      togglePasswordBtn.setAttribute('aria-label', 'Показати пароль');
      togglePasswordBtn.setAttribute('aria-pressed', 'false');
    }
  }

  function showGate() {
    gate.classList.remove('wsapp-gate--hidden');
    gate.setAttribute('aria-hidden', 'false');

    resetPasswordField();

    if (errorEl) {
      errorEl.textContent = '';
    }

    highlightRole();

    setTimeout(() => {
      if (passwordInput) passwordInput.focus();
    }, 0);
  }

  function hideGate() {
    gate.classList.add('wsapp-gate--hidden');
    gate.setAttribute('aria-hidden', 'true');
  }

  roleCards.forEach(card => {
    card.addEventListener('click', () => {
      selectedRole = card.dataset.role;
      highlightRole();

      if (errorEl) {
        errorEl.textContent = '';
      }
    });
  });

  if (togglePasswordBtn && passwordInput) {
    togglePasswordBtn.addEventListener('click', () => {
      const isHidden = passwordInput.type === 'password';

      passwordInput.type = isHidden ? 'text' : 'password';
      togglePasswordBtn.textContent = isHidden ? '🙈' : '👁';
      togglePasswordBtn.setAttribute(
        'aria-label',
        isHidden ? 'Сховати пароль' : 'Показати пароль'
      );
      togglePasswordBtn.setAttribute(
        'aria-pressed',
        isHidden ? 'true' : 'false'
      );
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const pass = passwordInput.value.trim();

      if (pass !== PASSWORDS[selectedRole]) {
        if (errorEl) {
          errorEl.textContent = 'Невірний пароль';
        }
        return;
      }

      localStorage.setItem('wsapp_role', selectedRole);

      document.dispatchEvent(
        new CustomEvent('wsapp:roleChanged', {
          detail: { role: selectedRole }
        })
      );

      hideGate();
    });
  }

  closeBtns.forEach(btn => {
    btn.addEventListener('click', hideGate);
  });

  window.wsappOpenRoleGate = showGate;

  function startGateTimer() {
    setTimeout(showGate, SHOW_DELAY);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startGateTimer);
  } else {
    startGateTimer();
  }
})();