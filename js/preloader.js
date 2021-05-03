$(window).on('load', function(){
  /* $(".loader__page").css({visibility:"hidden",opacity:"0"}); */
  $(".loader__page").css({transform:"translateX(-100%)", transition:"4s"});
  $('body').css({overflowY:'scroll'});
});