// Screenshot carousel initialization
$('.icon_banner_foot_slider').owlCarousel({
  loop: true,
  responsiveClass: true,
  nav: true,
  margin: 5,
  autoplay: true,
  autoplayTimeout: 6000,
  smartSpeed: 400,
  navText: [
    "<img src='images/previmage.webp' alt='001 prev' width='50' height='50' />",
    "<img src='images/nextimage.webp' alt='001 next' width='50' height='50' />",
  ],
  responsive: {
    0: { items: 1 },
    600: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
    1200: { items: 4 },
  },
});

// Screenshot carousel initialization
$('.screenshot_slider').owlCarousel({
  loop: true,
  responsiveClass: true,
  nav: true,
  margin: 5,
  autoplay: true,
  autoplayTimeout: 6000,
  smartSpeed: 400,
  navText: [
    "<img src='images/previmage.webp' alt='001 prev' width='50' height='50' />",
    "<img src='images/nextimage.webp' alt='001 next' width='50' height='50' />",
  ],
  responsive: {
    0: { items: 1 },
    600: { items: 1 },
    768: { items: 2 },
    1024: { items: 2 },
    1200: { items: 3 },
  },
});

// Testimonial carousel initialization
$('#testimonilas_slider').owlCarousel({
  loop: false,
  responsiveClass: true,
  nav: true,
  margin: 20,
  autoplay: false,
  autoplayTimeout: 4000,
  smartSpeed: 400,
  navText: [
    "<img src='images/previmage.webp' alt='002 prev' width='50' height='50' />",
    "<img src='images/nextimage.webp' alt='002 next' width='50' height='50' />",
  ],
  responsive: {
    0: { items: 1 },
    600: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
    1200: { items: 3 },
  },
});

// Advance skin carousel initialization
$('#advance_skin_slider').owlCarousel({
  loop: true,
  responsiveClass: true,
  nav: true,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 8000,
  smartSpeed: 400,
  navText: [
    "<img src='images/previmage.webp' alt='003 prev' width='50' height='50' />",
    "<img src='images/nextimage.webp' alt='003 next' width='50' height='50' />",
  ],
  responsive: {
    0: { items: 1 },
    600: { items: 1 },
    768: { items: 1 },
    1024: { items: 1 },
    1200: { items: 1 },
  },
});

// Google rating carousel initialization
$('#googlerating_slider').owlCarousel({
  loop: true,
  responsiveClass: true,
  nav: true,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 8000,
  smartSpeed: 400,
  navText: [
    "<img src='images/previmage.webp' alt='004 prev' width='50' height='50' />",
    "<img src='images/nextimage.webp' alt='004 next' width='50' height='50' />",
  ],
  responsive: {
    0: { items: 1 },
    600: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
    1200: { items: 3 },
  },
});

$(".owl-nav .owl-prev").attr("role", "button"), $(".owl-nav .owl-next").attr("role", "button")

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

// Open & Close Form
function openForm() {
  document.getElementById("myForm").style.display = "block";
  $("#myForm .myForm-top-form").append($(".form-top-new"));
  $(".contactFormHolder .contactForm").hide();
}

function closeForm() {
  $(".contactFormHolder .contactForm").show().append($(".form-top-new"));
  document.getElementById("myForm").style.display = "none";
}

// Popup Video Initialization
$(function() {
  $(".popup-youtube, .popup-vimeo").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: true
  });
});
