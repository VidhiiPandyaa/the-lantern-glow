/* ==========================================
   TLG — APP.JS
   Core interactions & utilities
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Init AOS ----
  AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 60,
  });

  // ---- Page Loader ----
  const createLoader = () => {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
      <div class="loader-logo">THE LANTERN GLOW</div>
      <div class="loader-line"></div>
    `;
    document.body.prepend(loader);

    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.classList.add('done');
        setTimeout(() => loader.remove(), 700);
      }, 900);
    });
  };
  createLoader();

  // ---- Sticky Nav ----
  const nav = document.getElementById('nav');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  // ---- Mobile Nav Toggle ----
  const toggle = document.getElementById('navToggle');
  const drawer = document.getElementById('navDrawer');
  if (toggle && drawer) {
    toggle.addEventListener('click', () => {
      drawer.classList.toggle('open');
      const isOpen = drawer.classList.contains('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close on link click
    drawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => drawer.classList.remove('open'));
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target)) drawer.classList.remove('open');
    });
  }

  // ---- Hero Parallax (subtle) ----
  const heroVideo = document.querySelector('.hero-video');
  if (heroVideo) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const rate = scrolled * 0.25;
      heroVideo.style.transform = `scale(1.05) translateY(${rate}px)`;
    }, { passive: true });
  }

  // ---- Smooth anchor scroll ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---- Active nav link on scroll ----
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  const observerOptions = { rootMargin: '-40% 0px -55% 0px' };
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === `#${id}`
            ? 'var(--white)'
            : '';
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => sectionObserver.observe(section));

});
/* ==========================================
   FEATURED WORK VIDEO CONTROLS
   ========================================== */

document.querySelectorAll('.video-container').forEach(container => {

    const video = container.querySelector('.work-video');
    const bgVideo = container.querySelector('.work-video-bg');
    const button = container.querySelector('.video-play-btn');

    if (!video || !button) return;


    /* PLAY BUTTON */

    button.addEventListener('click', (event) => {

        event.stopPropagation();

        video.play();

    });


    /* CLICK MAIN VIDEO = PAUSE */

    video.addEventListener('click', () => {

        if (!video.paused) {
            video.pause();
        }

    });


    /* MAIN VIDEO PLAY */

    video.addEventListener('play', () => {

        if (bgVideo) {

            bgVideo.currentTime = video.currentTime;

            bgVideo.play().catch(() => {});

        }

        button.style.opacity = '0';
        button.style.pointerEvents = 'none';

    });


    /* MAIN VIDEO PAUSE */

    video.addEventListener('pause', () => {

        if (bgVideo) {
            bgVideo.pause();
            bgVideo.currentTime = video.currentTime;
        }

        button.innerHTML = '▶';
        button.setAttribute('aria-label', 'Play video');

        button.style.opacity = '1';
        button.style.pointerEvents = 'auto';

    });


    /* KEEP BACKGROUND SYNCHRONIZED */

    video.addEventListener('timeupdate', () => {

        if (!bgVideo) return;

        if (Math.abs(bgVideo.currentTime - video.currentTime) > 0.15) {

            bgVideo.currentTime = video.currentTime;

        }

    });


    /* VIDEO ENDS */

    video.addEventListener('ended', () => {

        if (bgVideo) {
            bgVideo.pause();
            bgVideo.currentTime = 0;
        }

        button.innerHTML = '▶';
        button.setAttribute('aria-label', 'Play video');

        button.style.opacity = '1';
        button.style.pointerEvents = 'auto';

    });

});
/* =========================================================
   TLG — OUR CRAFT INTERACTION
   ========================================================= */

function toggleService(button) {

    const currentItem = button.closest('.service-item');

    if (!currentItem) return;

    const allItems = document.querySelectorAll(
        '.services .service-item'
    );

    /* Close all other services */

    allItems.forEach(item => {

        if (item !== currentItem) {
            item.classList.remove('service-active');
        }

    });

    /* Toggle current service */

    currentItem.classList.toggle('service-active');

}
\
