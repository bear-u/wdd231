const toggle = document.querySelector("#menu-toggle");
const nav = document.querySelector("#nav-menu");

if (toggle) {
    toggle.addEventListener("click", () => {
        nav.classList.toggle("open");
    });
}
