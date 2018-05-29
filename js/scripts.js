$(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });

  $("#fade").fadeIn();

  $("#fade").click(function(){
    $("#fade").fadeOut();
  });

  $("#slide").slideDown();

  $("#slide").click(function(){
    $("#slide").slideUp();
  });

  $("#button").click(function(){
    $("#slide-toggle").slideToggle();
  })

  $("button#light").click(function(){
    $("body").removeClass();
    $("body").addClass("light-background");
  });

  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });
});
