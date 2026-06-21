// ══════════════════════════════
//  RAISSA CRANE — Portfolio JS
// ══════════════════════════════

document.addEventListener('DOMContentLoaded', () => {

  // ── NAV: scroll behavior ──
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // ── NAV: mobile toggle ──
  const navToggle = document.getElementById('navToggle');
  const navMobile = document.getElementById('navMobile');
  navToggle.addEventListener('click', () => {
    navMobile.classList.toggle('open');
  });
  // Close on link click
  navMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navMobile.classList.remove('open'));
  });

  // ── STAT COUNTER ANIMATION ──
  const counters = document.querySelectorAll('.stat-num[data-target]');
  let countersStarted = false;

  function startCounters() {
    if (countersStarted) return;
    const heroStats = document.querySelector('.hero-stats');
    if (!heroStats) return;
    const rect = heroStats.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      countersStarted = true;
      counters.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        const duration = 1400;
        const start = performance.now();
        function update(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          counter.textContent = Math.floor(eased * target);
          if (progress < 1) requestAnimationFrame(update);
          else counter.textContent = target;
        }
        requestAnimationFrame(update);
      });
    }
  }

  // ── REVEAL ON SCROLL ──
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger siblings slightly
        const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal'));
        const idx = siblings.indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, idx * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => revealObserver.observe(el));

  // ── COUNTER TRIGGER ──
  window.addEventListener('scroll', startCounters, { passive: true });
  startCounters(); // Try immediately in case page loads at bottom

  // ── ACTIVE NAV LINK HIGHLIGHTING ──
  const sections = document.querySelectorAll('section[id]');
  const navLinksAll = document.querySelectorAll('.nav-links a');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinksAll.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.style.color = 'var(--green)';
          }
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => sectionObserver.observe(s));

  // ── SMOOTH SCROLL offset for fixed nav ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = target.getBoundingClientRect().top + window.scrollY - 76;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    });
  });

  // ── PROJECT IMAGE SLIDERS ──
  // Works with any number of .slide elements inside .project-slider.
  // Arrows/dots only appear automatically once a card has more than one image.
  document.querySelectorAll('.project-media').forEach(media => {
    const track = media.querySelector('.project-slider');
    const slides = Array.from(media.querySelectorAll('.slide'));
    const prevBtn = media.querySelector('.slide-prev');
    const nextBtn = media.querySelector('.slide-next');
    const dotsWrap = media.querySelector('.slide-dots');
    let index = 0;

    if (slides.length <= 1) return; // single image — no controls needed

    media.classList.add('has-multiple');

    slides.forEach((_, i) => {
      const dot = document.createElement('span');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    });
    const dots = Array.from(dotsWrap.children);

    function goTo(i) {
      index = (i + slides.length) % slides.length;
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((d, di) => d.classList.toggle('active', di === index));
    }

    prevBtn.addEventListener('click', () => goTo(index - 1));
    nextBtn.addEventListener('click', () => goTo(index + 1));
  });

});
