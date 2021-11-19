$(document).ready(function () {
  $(window).scroll(function () {
    // Show service slider black content
    if ($(this).scrollTop() > 10) {
      $(".header").addClass("with-bg");
    } else {
      $(".header").removeClass("with-bg");
    }
  });

  if ($(window).scrollTop() > 1) {
    $(".header").addClass("with-bg");
  } else {
    $(".header").removeClass("with-bg");
  }

  $(".switcher").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
    }

    if ($(".monthly-price").hasClass("hide")) {
      $(".monthly-price").removeClass("hide");
      $(".annualy-price").addClass("hide");
    } else {
      $(".monthly-price").addClass("hide");
      $(".annualy-price").removeClass("hide");
    }
  });

  // Open mobile menu
  $(".burger").click(function () {
    $(".mobile-menu").addClass("opened");
    $("body").addClass("scroll-off");
  });

  // Close mobile menu
  $(".close-btn").click(function () {
    $(".mobile-menu").removeClass("opened");
    $("body").removeClass("scroll-off");
  });
});
