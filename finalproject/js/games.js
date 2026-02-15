const container = document.querySelector("#games-container");
const filter = document.querySelector("#genreFilter");

async function loadGames() {
    try {
        const response = await fetch("data/games.json");
        const games = await response.json();

        populateFilter(games);
        renderGames(games);

        filter.addEventListener("change", () => {
            const value = filter.value;
            if (value === "all") {
                renderGames(games);
            } else {
                const filtered = games.filter(game => game.genre === value);
                renderGames(filtered);
            }
        });

    } catch (error) {
        container.innerHTML = "<p>Unable to load games at this time.</p>";
    }
}

function populateFilter(games) {
    const genres = [...new Set(games.map(game => game.genre))];

    genres.forEach(genre => {
        const option = document.createElement("option");
        option.value = genre;
        option.textContent = genre;
        filter.appendChild(option);
    });
}

function renderGames(games) {
    container.innerHTML = games.map(game => `
        <div class="card reveal">
            <img src="${game.image}" alt="${game.title}" loading="lazy">
            <div class="card-title">
                <h3>${game.title}</h3>
                <p>${game.genre} | ${game.platform}</p>
                <p>Status: ${game.status}</p>
            </div>
            <div class="buttons-container">
                <button data-title="${game.title}" class="view-details-btn">🔍 View Details</button>
                <button data-title="${game.title}" class="favorite-btn">❤ Favorite</button>
            </div>

        </div>
    `).join("");
}

loadGames();
