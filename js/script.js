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

  // navbar click scroll
  $('#navigation a').click(function(event) {
    event.preventDefault();

    const targetElement = $(this).attr('href');
    const targetPosition = $(targetElement).offset().top;
    $('html, body').animate({ scrollTop: targetPosition - 100 }, 'slow');
  });
});
