const nav = document.querySelector("#nav-menu");
const themeBtn = document.querySelector("#themeToggle");

const heroImg = document.querySelector(".hero-img");

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


window.addEventListener("scroll", () => {
    if (heroImg) {
        const offset = window.scrollY * 0.4;
        heroImg.style.transform = `translateY(${offset}px)`;
    }
});

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const canvas = document.getElementById("particles");

if (canvas) {
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 50 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        dx: Math.random() * 0.5,
        dy: Math.random() * 0.5
    }));

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.x += p.dx;
            p.y += p.dy;

            if (p.x > canvas.width) p.x = 0;
            if (p.y > canvas.height) p.y = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(0,170,255,0.4)";
            ctx.fill();
        });
        requestAnimationFrame(animate);
    }

    animate();
}

const featuredContainer = document.querySelector("#featured-container");

async function loadFeatured() {
    if (!featuredContainer) return;

    try {
        const response = await fetch("data/games.json");
        const games = await response.json();

        const featured = games.slice(0, 3);

        featuredContainer.innerHTML = featured.map(game => `
            <div class="card reveal">
                <img src="${game.image}" alt="${game.title}" loading="lazy">
                <h3>${game.title}</h3>
                <p>${game.genre}</p>
            </div>
        `).join("");

    } catch {
        featuredContainer.innerHTML = "<p>Unable to load featured titles.</p>";
    }
}

loadFeatured();

