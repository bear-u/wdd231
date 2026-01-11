// Copyright year and last modified
const yearEl = document.getElementById('copyright-year');
const lastModEl = document.getElementById('lastModified');

const now = new Date();
if (yearEl) {
  yearEl.textContent = `© ${now.getFullYear()}`;
}

if (lastModEl) {
  // document.lastModified returns a string; no manipulation required for this assignment
  lastModEl.textContent = `Last modified: ${document.lastModified}`;
}