const message = document.querySelector("#visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  message.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

  if (days < 1) {
    message.textContent = "Back so soon! Awesome!";
  } else if (days === 1) {
    message.textContent = "You last visited 1 day ago.";
  } else {
    message.textContent = `You last visited ${days} days ago.`;
  }
}

import { items } from "../data/items.mjs";

const container = document.querySelector("#cards-container");

items.forEach(item => {
  const card = document.createElement("section");
  card.classList.add("card");

  card.innerHTML = `
    <h2>${item.name}</h2>
    <figure>
      <img src="${item.image}" alt="${item.name}" loading="lazy">
    </figure>
    <address>${item.address}</address>
    <p>${item.description}</p>
    <button>Learn More</button>
  `;

  container.appendChild(card);
});

localStorage.setItem("lastVisit", now);