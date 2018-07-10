(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 57)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // // Collapse Navbar
  // var navbarCollapse = function() {
  //   if ($("#mainNav").offset().top > 100) {
  //     $("#mainNav").addClass("navbar-shrink");
  //   } else {
  //     $("#mainNav").removeClass("navbar-shrink");
  //   }
  // };
  // // Collapse now if page is not at top
  // navbarCollapse();
  // // Collapse the navbar when page is scrolled
  // $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

  //Navbar active
  $('#nav li a').click(function() {
    $('#nav li').removeClass();
    $($(this).attr('href')).addClass('active');
  });

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

  // Add gallery images
  var ArrayPhotos = new Array(12)
  var carouselLinks = []
  var linksContainer = $('#links')
  var baseUrl
  $.each(ArrayPhotos, function (index) {
    index = index + 1
    baseUrl = "images/behind_the_sences/"

    $('<a/>')
      .append(
        $('<img>').prop('src', baseUrl + 'small/' + index + '.jpg').prop('class', 'img-galleries')
      ).prop('href', baseUrl + index + '.jpg')
      .prop('title', 'soul searching behind the sences')
      .prop('class', 'img-gallery-thumnail')
      .attr('data-gallery', '')
      .appendTo(linksContainer)
    carouselLinks.push({
      href: baseUrl + index + '.jpg',
      title: 'soul searching behind the sences'
    })
  })
  // Initialize the Gallery as image carousel:
  blueimp.Gallery(carouselLinks, {
    container: '#blueimp-image-carousel',
    carousel: true
  })
})(jQuery); // End of use strict
