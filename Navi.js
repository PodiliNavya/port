$(document).ready(function() {
    $('.menu-toggler').click(function() {
      $(this).toggleClass('open');
      $('.top-nav').toggleClass('open');
    });
  
    $('.top-nav .nav-link').click(function() {
      $('.menu-toggler').toggleClass('open');
      $('.top-nav').toggleClass('open');
    });
  
    $('nav a[href*="#"]').click(function(event) {
      event.preventDefault();
      var target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top - 100
      }, 2000);
    });
  
    $('#up').click(function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 2000);
    });
  
    AOS.init({
      easing: 'ease',
      duration: 1800
    });
  });
  