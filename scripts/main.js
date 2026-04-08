/* ── Nav: add .scrolled class on scroll ─────────────────────── */
const nav = document.getElementById('nav');

const onScroll = () => {
  if (window.scrollY > 30) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
};

window.addEventListener('scroll', onScroll, { passive: true });
onScroll(); // run once on load in case page is already scrolled

/* ── Gallery: fade-in items as they enter the viewport ──────── */
const galleryItems = document.querySelectorAll('.gallery-item');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // only animate once
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px',
  }
);

galleryItems.forEach((item) => observer.observe(item));
