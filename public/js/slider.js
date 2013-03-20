jQuery(function($) { 
  
var timer = setInterval( moveCarousel, 1000);

  

  function moveCarousel()
  {
    if ($(".slider li:first").width() < 1) {
      $(".slider li:last").children().fadeIn()
      $(".slider li:last").animate({ 'width' : "200px"});
      $(".slider li:first").hide().appendTo(".slider").fadeIn();
    }

    $(".slider li:first").children().fadeOut().delay(300);
    $(".slider li:first").animate({ 'width' : "0px"});
  }

 
  $('.slider').hover(function(){
    clearInterval(timer);
  }, function(){
    timer = setInterval(moveCarousel,1000);
  });

});
