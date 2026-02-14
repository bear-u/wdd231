const container = document.querySelector("#games-container");
const modal = document.querySelector("#modal");
const modalBody = document.querySelector("#modal-body");
const closeModal = document.querySelector("#close-modal");

async function loadGames() {
    try {
        const response = await fetch("data/games.json");
        const games = await response.json();

        const cards = games.map(game => `
            <div class="card">
                <img src="${game.image}" alt="${game.title} cover" loading="lazy">
                <h3>${game.title}</h3>
                <p>${game.genre} | ${game.platform}</p>
                <p>Status: ${game.status}</p>
                <button data-id="${game.id}">View Details</button>
            </div>
        `).join("");

        container.innerHTML = cards;

        document.querySelectorAll("button[data-id]").forEach(btn => {
            btn.addEventListener("click", () => {
                const selected = games.find(g => g.id == btn.dataset.id);

                modalBody.innerHTML = `
                    <h2>${selected.title}</h2>
                    <p><strong>Genre:</strong> ${selected.genre}</p>
                    <p><strong>Platform:</strong> ${selected.platform}</p>
                    <p><strong>Status:</strong> ${selected.status}</p>
                    <p>${selected.description}</p>
                `;

                modal.style.display = "flex";
                modal.setAttribute("aria-hidden", "false");
                localStorage.setItem("lastViewedGame", selected.title);
            });
        });

    } catch (error) {
        container.innerHTML = "<p>Unable to load games at this time.</p>";
    }
}

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
});

window.addEventListener("keydown", e => {
    if (e.key === "Escape") {
        modal.style.display = "none";
    }
});

loadGames();
