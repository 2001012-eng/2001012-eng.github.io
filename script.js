// Scroll-reveal: reveals each element once, respects reduced-motion via CSS fallback
(function () {
  const revealEls = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window) || revealEls.length === 0) {
    revealEls.forEach(el => el.classList.add('in'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => io.observe(el));
})();

// Typewriter effect on the hero role line — same rhythm as the original site's
// designation typing animation: type out, pause, delete, move to next role.
(function () {
  const el = document.getElementById('typedRole');
  if (!el) return;

  const roles = [
    'IoT & Robotics Engineer',
    'Embedded Systems Developer',
    'AI & Automation Enthusiast',
    'Robotics Researcher'
  ];

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    el.textContent = roles[0];
    return;
  }

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = roles[roleIndex];

    if (!deleting) {
      el.textContent = current.substring(0, charIndex++);
      if (charIndex > current.length) {
        deleting = true;
        setTimeout(tick, 1500);
        return;
      }
    } else {
      el.textContent = current.substring(0, charIndex--);
      if (charIndex < 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    setTimeout(tick, deleting ? 50 : 100);
  }

  tick();
})();

// Stagger reveal timing slightly within each grid/gallery for a subtle cascade
(function () {
  document.querySelectorAll('.gallery, .projects, .skills-grid, .focus-list').forEach(group => {
    const items = group.querySelectorAll('.reveal');
    items.forEach((el, i) => {
      el.style.transitionDelay = Math.min(i * 60, 240) + 'ms';
    });
  });
})();
