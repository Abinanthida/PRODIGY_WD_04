// JavaScript to Add Interactivity

// 1. Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});

// 2. Highlight Active Section in Navbar
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      currentSection = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href').substring(1) === currentSection) {
      item.classList.add('active');
    }
  });
});

// 3. Scroll Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// 4. Form Submission Alert
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for reaching out! I will get back to you soon.');
  form.reset();
});
