(function ($) {
  "use strict";

  //===== Prealoder

  $(window).on("load", function (event) {
    $(".preloader").delay(500).fadeOut(500);
  });

  //===== Mobile Menu

  $(".navbar-toggler").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".navbar-nav a").on("click", function () {
    $(".navbar-toggler").removeClass("active");
  });

  //===== close navbar-collapse when a  clicked

  $(".navbar-nav a").on("click", function () {
    $(".navbar-collapse").removeClass("show");
  });

  //===== Sticky

  $(window).on("scroll", function (event) {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll < 10) {
      $(".navigation").removeClass("sticky");
    } else {
      $(".navigation").addClass("sticky");
    }
  });

  //===== Section Menu Active

  var scrollLink = $(".page-scroll");
  // Active link switching
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {
      var sectionOffset = $(this.hash).offset().top - 73;

      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
      }
    });
  });

  // Parallaxmouse js

  function parallaxMouse() {
    if ($("#parallax").length) {
      var scene = document.getElementById("parallax");
      var parallax = new Parallax(scene);
    }
  }
  parallaxMouse();

  //===== Header-content
  $(window).on("scroll", function (event) {
    if ($(this).scrollTop() < 400) {
      $(".header-content").addClass("animate-left");
    } else {
      $(".header-content").removeClass("animate-left");
    }
  });

  //===== About-area
  $(window).on("scroll", function (event) {
    if ($(this).scrollTop() > 300) {
      $(".about-area").addClass("animate-bottom");
    } else {
      $(".about-area").removeClass("animate-bottom");
    }
  });

  //===== About-area
  $(window).on("scroll", function (event) {
    if ($(this).scrollTop() > 800) {
      $(".experiene-area").addClass("animate-right");
    } else {
      $(".experiene-area").removeClass("animate-right");
    }
  });

  //===== Counter Up

  $(".counter").counterUp({
    delay: 10,
    time: 1600,
  });

  //===== Magnific Popup

  $(".image-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  //===== Back to top

  // Show or hide the sticky footer button
  $(window).on("scroll", function (event) {
    if ($(this).scrollTop() > 600) {
      $(".back-to-top").fadeIn(200);
    } else {
      $(".back-to-top").fadeOut(200);
    }
  });

  //Animate the scroll to top
  $(".back-to-top").on("click", function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });

  //Show more
  function workMore() {
    $(".work-more").on("click", function (event) {
      $(".more").removeClass("more");
      $(".work-more-btn").css("display", "none");
    });
    $(".work-more-btn").on("click", function (event) {
      $(".more").removeClass("more");
      $(".work-more-btn").css("display", "none");
    });
  }
  workMore();

  //=====
})(jQuery);
