document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".accordion-item");

  items.forEach(item => {
    const btn = item.querySelector(".toggle-btn");
    const content = item.querySelector(".accordion-content");

    btn.addEventListener("click", () => {
      const isOpen = content.style.display === "block";

      content.style.display = isOpen ? "none" : "block";

      if (!isOpen) {
        content.appendChild(btn);
        btn.innerText = "Hide";
        btn.style.position = "static";
      } else {
        item.insertBefore(btn, content);
        btn.innerText = "Show";
        btn.style.position = "absolute";
      }
    });
  });
});
