(() => {
  "use strict";

  const loader = document.getElementById("wsapp-loader");
  const app = document.getElementById("wsapp-app");
  if (!loader) return;

  function finishLoading() {
    if (window.wsappAuth?.getSession()) {
      app?.classList.remove("wsapp-app--hidden");
    }
    loader.remove();
  }

  document
    .getElementById("wsappLoaderSkip")
    ?.addEventListener("click", finishLoading);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", finishLoading, {
      once: true,
    });
  } else {
    finishLoading();
  }
})();
