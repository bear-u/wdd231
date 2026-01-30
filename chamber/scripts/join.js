// Set timestamp when page loads
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("timestamp").value = new Date().toISOString();

  // Modal functionality
  const links = document.querySelectorAll("[data-modal]");
  const modals = document.querySelectorAll(".modal");
  const closes = document.querySelectorAll(".close");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const modalId = link.getAttribute("data-modal");
      document.getElementById(modalId).style.display = "block";
    });
  });

  closes.forEach(close => {
    close.addEventListener("click", () => {
      close.closest(".modal").style.display = "none";
    });
  });

  window.addEventListener("click", e => {
    modals.forEach(modal => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
});