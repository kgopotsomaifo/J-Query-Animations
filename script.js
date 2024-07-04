// created a function for the chained effect to make all elements slide while changing background color then called it once animation is clicked
// jquery animation resource: https://www.w3schools.com/jquery/jquery_animate.asp
// chain effect resource: https://www.w3schools.com/jquery/jquery_chaining.asp
function chainEffect() {
  setInterval(function () {
    $("h1.mainHeading")
      .css("color", "blue")
      .animate({ left: "150px", fontSize: "50px" })
      .animate({ left: "150px", fontSize: "40px" });
    $("h2")
      .animate({ left: "100px", fontSize: "40px" })
      .css("color", "red")
      .animate({ left: "100px", fontSize: "30px" });
    $("div.siteDiv")
      .delay(3000)
      .queue(function () {
        $("div.siteDiv").css("background-color", "gold");
      });
  }, 3000);
}

// command to create an alert once page has loaded
$(document).ready(function () {
  alert("This page has loaded!");

  // how to select elements: https://www.w3schools.com/jquery/jquery_ref_selectors.asp
  // change background color once page has loaded
  $("body").css("background-color", "#DDA0DD");

  // change styling of paragraph with jquery event methods (resource: https://www.w3schools.com/jquery/jquery_events.asp)
  $(".firstparagraph").mouseenter(function () {
    $(this)
      .css("color", "white")
      .css("font-style", "italic")
      .css("font-size", "25px");
  });

  // jquery fade resource: https://www.w3schools.com/jquery/jquery_fade.asp
  // to fade out any element that is clicked within body
  $("button.elementsFader").click(function () {
    $(".siteDiv *").click(function () {
      $(this).fadeOut("slow");
    });
  });

  // accordion menu resource: https://abdultechhub.com/blog/how-to-create-a-custom-accordion-using-html-css-and-jquery
  // when clicked, the menu should display food options
  $(".menuHeading").click(function () {
    // toggle the content
    $(this).next(".menuContent").slideToggle(200);
  });

  // most of the jquery effects I learned from : https://www.w3schools.com/jquery/jquery_ref_effects.asp
  // to start chain effect animation
  $("button.animation").click(function () {
    // setInterval(chainEffect, 3000);
    chainEffect();
  });
  // code to stop chained effect animation
  $("button.stopAnimation").click(function () {
    let stopAnimation = chainEffect();
    clearInterval(stopAnimation);
  });
  // buttons to fade pictures in and out over 3 seconds
  $("button.fadeOutBtn").click(function () {
    $("img.amabuthoImg").fadeOut(3000);
  });

  $("button.fadeInBtn").click(function () {
    $("img.amabuthoImg").fadeIn(3000);
  });

  $("button.stopFadeBtn").click(function () {
    $("img.amabuthoImg").stop();
  });
});

// struggling with stopping the chained effect. Am I using the correct methods, please advise.
