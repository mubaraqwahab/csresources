document.addEventListener("DOMContentLoaded", function() {
  var footerYear = document.getElementById("footerYear");
  var currentYear = new Date().getFullYear();
  // Set the footer year as the current year
  footerYear.textContent = currentYear;
  footerYear.setAttribute("datetime", currentYear);
});
