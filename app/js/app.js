$(document).ready(function() {

  $(window).scroll(function() {
    // Show service slider black content
    if (($(this).scrollTop()) > 10) {
      $('.header').addClass('with-bg')
    } else {
      $('.header').removeClass('with-bg')
    }
  });

  $('.switcher').click(function(){
    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
    } else {
      $(this).addClass('active')
    }
  })

  // Open mobile menu
  $('.burger').click(function(){
    $('.mobile-menu').addClass('opened')
  })  

  // Close mobile menu
  $('.close-btn').click(function(){
    $('.mobile-menu').removeClass('opened')
  })
  
});