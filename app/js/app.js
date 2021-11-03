$(document).ready(function() {

    $('.circle').click(function() {
      if($('.circle').hasClass('cheked')) {
        $('.circle').removeClass('cheked')
      } else {
        $('.circle').addClass('cheked')
      }
    })  
});