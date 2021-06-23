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

// // Smooth Scrolling(*Already added by CSS smooth scrolling*)
// $(document).ready(function () {
//   // Add smooth scrolling to all links
//   $("a").on("click", function (event) {
//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
//       event.preventDefault();

//       // Store hash
//       var hash = this.hash;

//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $("html, body").animate(
//         {
//           scrollTop: $(hash).offset().top,
//         },
//         800,
//         function () {
//           // Add hash (#) to URL when done scrolling (default click behavior)
//           window.location.hash = hash;
//         }
//       );
//     } // End if
//   });
// });
