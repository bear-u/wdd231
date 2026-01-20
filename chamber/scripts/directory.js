const url = "data/members.json";
const container = document.querySelector('#member-container');
const gridBtn = document.querySelector('#grid');
const listBtn = document.querySelector('#list');

async function getMembers() {
  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data);
}

function displayMembers(members) {
  container.innerHTML = ""; // Clear existing content
  members.forEach(member => {
      let card = document.createElement('section');
      card.innerHTML = `
          <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
          <h3>${member.name}</h3>
          <p>${member.address}</p>
          <p>${member.phone}</p>
          <a href="${member.website}" target="_blank">Visit Website</a>
      `;
      container.appendChild(card);
  });
}

// Toggle View Logic
gridBtn.addEventListener('click', () => {
  container.classList.add('grid');
  container.classList.remove('list');
  giveFocus(gridBtn);
  removeFocus(listBtn);
});

listBtn.addEventListener('click', () => {
  container.classList.add('list');
  container.classList.remove('grid');
  giveFocus(listBtn);
  removeFocus(gridBtn);
});

function giveFocus(button) {
  button.classList.add('active');
}

function removeFocus(button) {
  button.classList.remove('active');
}

getMembers();
