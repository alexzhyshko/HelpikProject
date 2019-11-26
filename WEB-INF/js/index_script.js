$(".header-maximize").click(function(){
    $(".header-minimize").addClass("active");
    $(".header-maximize").addClass("maximized");
    $(".header-li").addClass("maximized-li");
});


$(".header-minimize").click(function(){
  $(".header-minimize").removeClass("active");
  $(".header-maximize").removeClass("maximized");
  $(".header-li").removeClass("maximized-li");
});
