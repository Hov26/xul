$(document).ready(function() {

  $(window).scroll(function() {
    // Show service slider black content
    if (($(this).scrollTop()) > 10) {
      $('.header').addClass('with-bg')
    } else {
      $('.header').removeClass('with-bg')
    }
  });


  // $('.burger').click(function(){
  //   if($('.mobile-menu-opened').hasClass('opened')) {
  //     $('.mobile-menu').removeClass('opened')
  //   } else {
  //     $('.mobile').addClass('opened')
  //   }
  // })  

  // $('.close').click(function(){
  //   $('.mobile-menu').removeClass('opened')
  // })
});