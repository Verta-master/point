//Header scroll
$(window).scroll(function(){
  if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 100) {
    $(".header").addClass("header--scroll");
    $(".topmenu-block").addClass("menu-scroll");
  } else {
    $(".header").removeClass("header--scroll");
    $(".topmenu-block").removeClass("menu-scroll");
  };
});

$(".search-open").click(function() {
  $(this).next().slideToggle();
});
