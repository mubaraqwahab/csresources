$(window).scroll(function() {
  let scrollThreshold = $('.jumbotron').outerHeight();
  $('.navbar').toggleClass('scrolled', $(this).scrollTop() >= scrollThreshold);

  if($(this).scrollTop() >= (2*scrollThreshold/5)) {
    $('.header-angle-down').hide();
  }
});

$('.navbar-toggler').on('click', function() {
  $('.navbar-toggler i').toggleClass('fa-bars').toggleClass('fa-minus').toggleClass('text-light');
});

$('.header-angle-down').on('click', function() {
  $(this).hide();
});