//Footer Date

document.getElementById("footer-year").innerHTML = new Date().getFullYear();

// Navbar

$(document).ready(function () {
  // .scroll() creates an event when the user scrolls
  $(window).scroll(function () {
    // .scrollTop() retrieves vertical position of the scroll bar for the first element in a set of matched elements
    var scroll = $(window).scrollTop();

    var objectSelect = $("#about");

    // .offset() retrieves current position of element relative to document
    var objectPosition = objectSelect.offset().top;

    if (scroll >= objectPosition) {
      $("nav").addClass("displayNav");
      $(".about-inner-wrap").addClass("profile-anim");
    } else {
      $("nav").removeClass("displayNav");
    }
  });
});
