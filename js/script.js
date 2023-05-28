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

$(function (e) {
  let header = $('#header');
  let intro = $('#intro');
  let introH = intro.innerHeight();
  let scrollPos = $(window).scrollTop();

  $(window).on('scroll load resize', function () {
    let introH = intro.innerHeight();
    scrollPos = $(this).scrollTop()

    if (scrollPos > introH) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  });
});

// =======================================