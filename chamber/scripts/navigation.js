// Responsive navigation toggle with accessible state
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('primary-nav');

function setExpanded(expanded) {
  toggle.setAttribute('aria-expanded', String(expanded));
  nav.classList.toggle('open', expanded);
}

toggle?.addEventListener('click', () => {
  const isOpen = nav.classList.contains('open');
  setExpanded(!isOpen);
});

// Close menu when a link is clicked (small screens)
nav?.addEventListener('click', (e) => {
  const target = e.target;
  if (target instanceof HTMLAnchorElement) {
    setExpanded(false);
  }
});

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setExpanded(false);
});