/* ==========================================
   TLG — ANIMATIONS.JS
   GSAP + ScrollTrigger animations
   ========================================== */

// Wait for GSAP and ScrollTrigger to be available
window.addEventListener('load', () => {
  if (typeof gsap === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  // ---- Intro Statement Split Reveal ----
  const introStatement = document.querySelector('.intro-statement');
  if (introStatement) {
    // Wrap each line in a div for a stagger reveal
    const lines = introStatement.innerHTML.split('<br>');
    if (lines.length > 1) {
      introStatement.innerHTML = lines
        .map(line => `<span class="intro-line" style="display:block;overflow:hidden"><span class="intro-line-inner" style="display:block">${line}</span></span>`)
        .join('');

      gsap.from('.intro-line-inner', {
        yPercent: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.intro-statement',
          start: 'top 75%',
        },
      });
    }
  }

  // ---- Services — stagger on scroll ----
  gsap.from('.service-item', {
    opacity: 0,
    x: -20,
    duration: 0.7,
    ease: 'power2.out',
    stagger: 0.07,
    scrollTrigger: {
      trigger: '.services-list',
      start: 'top 70%',
    },
  });

  // ---- BTS Gallery — stagger ----
  gsap.from('.bts-item', {
    opacity: 0,
    scale: 0.96,
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.bts-gallery',
      start: 'top 75%',
    },
  });

  // ---- Final CTA Headline ----
  gsap.from('.final-cta-headline', {
    opacity: 0,
    y: 40,
    duration: 1.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.final-cta',
      start: 'top 65%',
    },
  });

  // ---- Process steps ----
  gsap.from('.process-step', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.process-steps',
      start: 'top 70%',
    },
  });

  // ---- Gold divider lines on scroll ----
  // Adds a thin gold line reveal to section headings
  document.querySelectorAll('.section-title').forEach(title => {
    const line = document.createElement('span');
    line.style.cssText = `
      display: block;
      width: 0;
      height: 1px;
      background: var(--gold);
      margin-top: 1rem;
      opacity: 0.5;
    `;
    title.after(line);

    gsap.to(line, {
      width: 48,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: title,
        start: 'top 80%',
      },
    });
  });

});
