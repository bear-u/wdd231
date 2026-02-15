const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  toggle.innerHTML = next === "dark" ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

document.documentElement.setAttribute(
  "data-theme",
  localStorage.getItem("theme") || "light"
);
