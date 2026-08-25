/* ==========================================
   TLG — SLIDER.JS
   Swiper carousel configurations
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Work / Portfolio Swiper ----
  const workSwiper = new Swiper('.work-swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    grabCursor: true,
    speed: 700,
    effect: 'slide',

    navigation: {
      prevEl: '.work-prev',
      nextEl: '.work-next',
    },

    pagination: {
      el: '.work-pagination',
      clickable: true,
    },

    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 32,
      },
      1200: {
        slidesPerView: 1.1,
        spaceBetween: 40,
        centeredSlides: true,
      },
    },

    keyboard: { enabled: true },
    a11y: {
      prevSlideMessage: 'Previous project',
      nextSlideMessage: 'Next project',
    },
  });

  // ---- Testimonials Swiper ----
  const testimonialsSwiper = new Swiper('.testimonials-swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    grabCursor: true,
    speed: 600,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    pagination: {
      el: '.testimonials-pagination',
      clickable: true,
    },

    breakpoints: {
      768: {
        slidesPerView: 1.2,
        centeredSlides: true,
      },
      1024: {
        slidesPerView: 1.4,
        centeredSlides: true,
        spaceBetween: 32,
      },
    },

    keyboard: { enabled: true },
  });

});
