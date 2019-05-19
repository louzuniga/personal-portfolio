'use strict';

//pinwheel loader
$(window).on('load', () => {
  $('.loader .inner-loader').fadeOut(300, () => {
    $('.loader').fadeOut(500);
  });
});

// self-typing header titles
const typed = new Typed('.typed', {
  strings: [
    'Software Engineer',
    'Web Developer',
    'Student',
    'Eternal Learner',
    'Animal Lover'
  ],
  typeSpeed: 95,
  loop: true,
  startDelay: 1000,
  showCursor: false
});

// Footer and copyright ************
let d = new Date();
$('#copyright').text(`Copyright \u00A9 ${d.getFullYear()}  Lourexel Zuniga`);

$(document).ready(() => {
  // Skillset carousel
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });

  // Navbar responsive function
  $('#nav').on('click', event => {
    let nav = document.getElementById('nav');
    if (nav.className === 'nav-list') {
      nav.className += ' responsive';
    } else {
      nav.className = 'nav-list';
    }
  });

  // navbar responsive
  $('.page-nav').click(function(event) {
    const targetElement = $(this).attr('href');
    const targetPosition = $(targetElement).offset().top;
    $('html, body').animate({ scrollTop: targetPosition - 50 }, 'slow');
  });
});
