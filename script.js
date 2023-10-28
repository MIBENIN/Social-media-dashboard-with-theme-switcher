document.addEventListener("DOMContentLoaded", function () {
  const toggle_btn = document.getElementById("check");
  const isDarkMode = localStorage.getItem("darkMode");

  if (isDarkMode === "true") {
    toggle_btn.checked = true;
    document.body.classList.add("dark-mode");
  }

  toggle_btn.addEventListener("change", () => {
    if (toggle_btn.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "false");
    }
  });
});
