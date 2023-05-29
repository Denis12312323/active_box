$('.icon-menu').click(function (e) {
  $(this).toggleClass('active');
  $('.menu__body').toggleClass('active');
  $('body').toggleClass('lock');
})
function ibg() {
  $.each($('.ibg'), function (index, val) {
    if ($(this).find('img').length > 0) {
      $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")')
    }
  })
}
ibg();

//slider
if ($('.slider__body').length > 0) {
  $('.slider__body').slick({
    //autoplay: true,
    //infinite: false,
    dots: true,
    arrows: false,
    accessibility: false,
    slidesToShow: 1,
    autoplaySpeed: 3000,
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    responsive: [{
      breakpoint: 768,
      settings: {}
    }]
  })
}
// =======================================

  let header = $('#header');
  let intro = $('#intro');
  let introH = intro.innerHeight();
  let scrollPos = $(window).scrollTop();

  checkScroll(scrollPos, introH);

  $(window).on('scroll resize', function () {
    introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();


    checkScroll(scrollPos, introH);
  });

function checkScroll(scrollPos, introH) {
  if (scrollPos > introH) {
    header.addClass('fixed');
  } else {
    header.removeClass('fixed');
  }
}

// Burger

let nav = $('#nav')

$("#burger").on('click', function (e) {
  e.preventDefault();

  nav.toggleClass('show');
})

// ======================================= Scroll

$('[data-scroll]').on('click', function (e) {
  e.preventDefault();

  let elementId = $(this).data('scroll');
  let elementOffset = $(elementId).offset().top;

  nav.removeClass('show')

  $('html, body').animate({
    scrollTop: elementOffset - 75

  }, 700);
});


// ======================================= Slick-Slider

let slider = $('#testimonialsSlider');

slider.slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows: false,
  dots: true
});