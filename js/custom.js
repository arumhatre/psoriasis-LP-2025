$(document).ready(function () {
  function initOwlCarousel(selector, loop, autoplay, itemsConfig) {
    $(selector).owlCarousel({
      loop: loop,
      responsiveClass: true,
      nav: true,
      margin: 20,
      autoplay: autoplay,
      autoplayTimeout: autoplay ? 6000 : 4000,
      smartSpeed: 400,
      navText: [
        "<img src='images/previmage.webp' alt='001 prev' width='50' height='50' />",
        "<img src='images/nextimage.webp' alt='001 next' width='50' height='50' />",
      ],
      responsive: itemsConfig,
    });
  }

  // Initialize carousels
  initOwlCarousel('.screenshot_slider', true, true, {
    0: { items: 1 },
    600: { items: 1 },
    768: { items: 2 },
    1024: { items: 2 },
    1200: { items: 3 },
  });

  initOwlCarousel('#testimonilas_slider', false, false, {
    0: { items: 1 },
    600: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
    1200: { items: 3 },
  });

  initOwlCarousel('#advance_skin_slider', true, true, {
    0: { items: 1 },
    600: { items: 1 },
    768: { items: 1 },
    1024: { items: 1 },
    1200: { items: 1 },
  });

  initOwlCarousel('#googlerating_slider', true, true, {
    0: { items: 1 },
    600: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
    1200: { items: 3 },
  });

  // Scroll to top button logic
  const scrollToTopBtn = document.querySelector('.scrollToTopBtn');
  const rootElement = document.documentElement;

  function handleScroll() {
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    scrollToTopBtn.classList.toggle('showBtn', rootElement.scrollTop / scrollTotal > 0.02);
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToTopBtn.addEventListener('click', scrollToTop);
  window.addEventListener('scroll', handleScroll);

  // Form Open/Close
  function openForm() {
    $("#myForm").show();
    $("#myForm .myForm-top-form").append($(".form-top-new"));
    $(".contactFormHolder .contactForm").hide();
  }

  function closeForm() {
    $(".contactFormHolder .contactForm").show().append($(".form-top-new"));
    $("#myForm").hide();
  }

  // Initialize Magnific Popup for video popups
  $(".popup-youtube, .popup-vimeo").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: true,
  });
});
