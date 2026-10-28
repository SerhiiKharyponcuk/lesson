window.taskReady = (async () => {
  "use strict";

  try {
    const { default: initImageGallery } = await import("./image-gallery.js");
    await initImageGallery(true);
  } catch (error) {
    document.querySelector("#gallery-status").textContent =
      "Не вдалося завантажити галерею.";
  }
})();
