$(document).ready(function() {
  
  $(window).scroll(function() {
    // Get the height of the main jumbotron
    var scrollThreshold = $(".jumbotron").outerHeight();

    // Add the 'scrolled' class to the navbar,
    // when the user scrolls to or past the threshold.
    // Otherwise remove the class.
    $(".navbar").toggleClass(
      "scrolled",
      $(this).scrollTop() >= scrollThreshold
    );

    // Hide the 'go down' button,
    // when the user scrolls to or past 40% of the threshold.
    if ($(this).scrollTop() >= 0.4 * scrollThreshold) {
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
