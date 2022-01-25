$(document).ready(function() {
	// Scroll To Top JS
  var webPageffset = 200;
  var duration = 500;
  $(window).scroll(function() {
    if($(this).scrollTop() > webPageffset) {
      $(".scroll-to-top").addClass("active");
    } else {
      $(".scroll-to-top").removeClass("active");
    }
  });
  $(".scroll-to-top").click(function() {
    $('html,body').animate({scrollTop: 0},2000);
  });
});
// Remove URL When Refreshing Page
window.history.replaceState(null, null, window.location.pathname);