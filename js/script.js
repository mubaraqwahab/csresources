$(document).ready(function() {
  // Hide the 'go down' button when the user scrolls down
  $(window).scroll(function() {
    var scrollThreshold = $(".jumbotron").outerHeight();
    $(".navbar").toggleClass(
      "scrolled",
      $(this).scrollTop() >= scrollThreshold
    );

    if ($(this).scrollTop() >= (2 * scrollThreshold) / 5) {
      $(".header-angle-down").hide();
    }
  });

  // Change the navbar toggler icon on click
  $(".navbar-toggler").on("click", function() {
    $(".navbar-toggler i")
      .toggleClass("fa-bars")
      .toggleClass("fa-minus")
      .toggleClass("text-light");
  });

  // Hide the 'go down' button on click
  $(".header-angle-down").on("click", function() {
    $(this).hide();
  });
});
