document.addEventListener("DOMContentLoaded", function () {
  // Tab switching
  const tabs = document.querySelectorAll(".example-tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-target");

      // Reset all tabs and content
      document
        .querySelectorAll(".example-tab")
        .forEach((t) => t.classList.remove("active"));
      document
        .querySelectorAll(".example-content")
        .forEach((c) => c.classList.remove("active"));

      // Activate selected tab and content
      tab.classList.add("active");
      document.getElementById(target).classList.add("active");
    });
  });

  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });

  // Handle navigation links
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    });
  });
});
