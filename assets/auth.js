(() => {
  "use strict";

  const rootUrl = new URL("../", document.currentScript.src);
  const loginUrl = new URL("index.html", rootUrl);
  const isLoginPage =
    location.pathname === loginUrl.pathname ||
    location.pathname === rootUrl.pathname;
  const sessionKey = "wsapp_session";
  const passwords = {
    teacher: {
      salt: "b9783a26ae3dffcb3d917fe778108119",
      hash: "bfedf96ee903da77c64b6f8af9de9ab391715b7f2dab0f66a9166fc9cbf9364c",
    },
    student: {
      salt: "8d3e5d53b4e555303eeba427f903f15f",
      hash: "f3343baa857643ab12aaa5c46a6d3b84deaa7758005d4ba5f6696bf70e838486",
    },
  };

  function getSession() {
    try {
      const session = JSON.parse(sessionStorage.getItem(sessionKey));
      if (session && passwords[session.role] && session.expiresAt > Date.now())
        return session;
      sessionStorage.removeItem(sessionKey);
      return null;
    } catch (error) {
      return null;
    }
  }

  async function signIn(role, password) {
    const savedPassword = passwords[role];
    if (!savedPassword) return false;
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      "raw",
      encoder.encode(password),
      "PBKDF2",
      false,
      ["deriveBits"],
    );
    const bits = await crypto.subtle.deriveBits(
      {
        name: "PBKDF2",
        salt: encoder.encode(savedPassword.salt),
        iterations: 210000,
        hash: "SHA-256",
      },
      key,
      256,
    );
    const hash = Array.from(new Uint8Array(bits), (byte) =>
      byte.toString(16).padStart(2, "0"),
    ).join("");
    if (hash !== savedPassword.hash) return false;

    sessionStorage.setItem(
      sessionKey,
      JSON.stringify({ role, expiresAt: Date.now() + 8 * 60 * 60 * 1000 }),
    );
    localStorage.setItem("wsapp_role", role);
    return true;
  }

  function redirectToLogin() {
    document.documentElement.style.visibility = "hidden";
    const destination = new URL(loginUrl);
    destination.searchParams.set(
      "returnTo",
      location.pathname + location.search + location.hash,
    );
    location.replace(destination.href);
  }

  function signOut() {
    sessionStorage.removeItem(sessionKey);
    document.documentElement.style.visibility = "hidden";
    location.replace(loginUrl.href);
  }

  function getReturnUrl() {
    const value = new URLSearchParams(location.search).get("returnTo");
    if (!value) return null;

    try {
      const destination = new URL(value, rootUrl);
      if (
        destination.origin === rootUrl.origin &&
        destination.pathname.startsWith(rootUrl.pathname) &&
        destination.pathname !== loginUrl.pathname &&
        destination.pathname !== rootUrl.pathname
      ) {
        return destination.href;
      }
    } catch (error) {
      return null;
    }

    return null;
  }

  function checkAccess() {
    const session = getSession();
    if (!session && !isLoginPage) return redirectToLogin();
    if (
      session?.role === "teacher" &&
      /\/pages\/(lesson|training)\//.test(location.pathname)
    ) {
      location.replace(new URL("index.html", rootUrl).href);
    }
    if (!session && isLoginPage) {
      document.getElementById("wsapp-app")?.classList.add("wsapp-app--hidden");
      document.dispatchEvent(new Event("wsapp:loginRequired"));
    }
  }

  window.wsappAuth = { getSession, signIn, signOut, getReturnUrl };
  checkAccess();
  window.addEventListener("pageshow", checkAccess);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) checkAccess();
  });

  document.addEventListener(
    "DOMContentLoaded",
    () => {
      const session = getSession();
      if (!session || isLoginPage) return;
      const toolbar = document.querySelector(".wsapp-topbar__right");
      if (!toolbar) return;

      const badge = document.createElement("span");
      badge.className = "wsapp-roleBadge";
      badge.textContent = session.role === "teacher" ? "Вчитель" : "Учень";
      const button = document.createElement("button");
      button.type = "button";
      button.className = "wsapp-btn wsapp-btn--ghost";
      button.textContent = "Вийти";
      button.addEventListener("click", signOut);
      toolbar.prepend(badge);
      toolbar.append(button);
    },
    { once: true },
  );
})();
