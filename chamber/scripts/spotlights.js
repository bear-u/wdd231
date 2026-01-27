const spotlightContainer = document.querySelector('#spotlights');

async function loadSpotlights() {
  const res = await fetch("data/members.json");
  const members = await res.json();

  const qualified = members.filter(m => m.membership === "Gold" || m.membership === "Silver");
  const random = qualified.sort(() => 0.5 - Math.random()).slice(0, 3);

  random.forEach(member => {
    const card = document.createElement("section");
    card.classList.add("card");
    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Website</a>
      <p>${member.membership} Member</p>
    `;
    spotlightContainer.appendChild(card);
  });
}

loadSpotlights();
