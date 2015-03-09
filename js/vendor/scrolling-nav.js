//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this),
        height = $($anchor.attr('href')).offset().top;
    
    if( $(".navbar-lower").hasClass("affix-top")){
      height = height - 96;
    } else {
      height = height - 48;
    }
    $('html, body').stop().animate({
      scrollTop: height
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});
