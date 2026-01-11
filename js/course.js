// Course List Array
const courses = [
  { code: 'WDD 130', name: 'Web Fundamentals', credits: 2, type: 'WDD', completed: true },
  { code: 'WDD 131', name: 'Dynamic Web Fundamentals', credits: 2, type: 'WDD', completed: true },
  { code: 'WDD 231', name: 'Web Frontend Development I', credits: 3, type: 'WDD', completed: false },
  { code: 'WDD 330', name: 'Web Frontend Development II', credits: 3, type: 'WDD', completed: false },
  { code: 'CSE 110', name: 'Introduction to Programming', credits: 2, type: 'CSE', completed: true },
  { code: 'CSE 111', name: 'Programming with Functions', credits: 2, type: 'CSE', completed: false },
  { code: 'CSE 210', name: 'Programming with Classes', credits: 3, type: 'CSE', completed: false },
  { code: 'CSE 230', name: 'Discrete Mathematics', credits: 3, type: 'CSE', completed: false }
];

// Elements
const coursesContainer = document.getElementById('courses');
const totalCreditsEl = document.getElementById('total-credits');
const filterButtons = document.querySelectorAll('.filter-btn');

// Render helpers
function courseCardTemplate(course) {
  const statusClass = course.completed ? 'completed' : 'pending';
  const statusText = course.completed ? 'Completed' : 'In progress';

  const card = document.createElement('article');
  card.className = 'course-card';
  card.setAttribute('aria-label', `${course.code} ${course.name}`);

  const title = document.createElement('h3');
  title.textContent = `${course.code} • ${course.name}`;

  const meta = document.createElement('p');
  meta.className = 'course-meta';
  meta.textContent = `${course.type} • ${course.credits} credits`;

  const badge = document.createElement('span');
  badge.className = `badge ${statusClass}`;
  badge.textContent = statusText;

  card.appendChild(title);
  card.appendChild(badge);
  card.appendChild(meta);

  return card;
}

function renderCourses(list) {
  coursesContainer.innerHTML = '';
  list.forEach(c => coursesContainer.appendChild(courseCardTemplate(c)));

  const total = list.reduce((sum, c) => sum + (Number(c.credits) || 0), 0);
  totalCreditsEl.textContent = total;
}

// Filtering
function applyFilter(type) {
  let filtered = courses;
  if (type === 'WDD') filtered = courses.filter(c => c.type === 'WDD');
  else if (type === 'CSE') filtered = courses.filter(c => c.type === 'CSE');
  renderCourses(filtered);
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  renderCourses(courses);

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.getAttribute('data-filter');
      applyFilter(type);
      // Wayfinding: visually indicate active filter
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
});