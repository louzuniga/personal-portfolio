'use strict';

$(document).ready(() => {
  const typed = new Typed('.typed', {
    strings: ['Software Engineer', 'Student', 'Enternal Learner'],
    typeSpeed: 75,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });

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

  // Footer and copyright ************
  let d = new Date();
  $('#copyright').text(`Copyright \u00A9 ${d.getFullYear()}  Lourexel Zuniga`);
});
