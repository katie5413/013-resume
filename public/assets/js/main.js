(function ($) {
    "use strict";

    //===== Prealoder

    $(window).on("load", function (event) {
        $(".preloader").delay(100).fadeOut(500);
        //===== CopyRight year
        document.getElementById("copyright").innerHTML = new Date().getFullYear();
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
        if (scroll < 10) {
            $(".navigation").removeClass("sticky");
        } else {
            $(".navigation").addClass("sticky");
        }
    });

    //===== Section Menu Active

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

    //===== Navi active
    $(window).on("scroll", function (event) {
        //Init
        if ($(this).scrollTop() + 200 < $("#about").offset().top) {
            $(".nav-item").removeClass("active");
            $(".nav-item:nth-child(1)").addClass("active");
        } else if (
            //About-area
            $(this).scrollTop() + 200 > $("#about").offset().top &&
            $(this).scrollTop() + 200 < $("#experience").offset().top
        ) {
            $(".nav-item").removeClass("active");
            $(".nav-item:nth-child(2)").addClass("active");
        } else if (
            //===== Experiene-area
            $(this).scrollTop() + 200 > $("#experience").offset().top &&
            $(this).scrollTop() + 200 < $("#work").offset().top
        ) {
            $(".nav-item").removeClass("active");
            $(".nav-item:nth-child(3)").addClass("active");
        } else if (
            //===== Portfolio-area
            $(this).scrollTop() + 200 > $("#work").offset().top &&
            $(this).scrollTop() < $("#contact").offset().top - 600
        ) {
            $(".nav-item").removeClass("active");
            $(".nav-item:nth-child(4)").addClass("active");
        } else {
            $(".nav-item").removeClass("active");
            $(".nav-item:nth-child(5)").addClass("active");
        }
    });

    //===== Counter Up

    $(".counter").counterUp({
        delay: 10,
        time: 100,
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

    //Filter
    $(".all-btn").on("click", function (event) {
        $(".design-work").css("display", "inline");
        $(".teach-work").css("display", "inline");
        $(".web-work").css("display", "inline");
        $(".work-more-btn").css("display", "none");
    });
    $(".web-btn").on("click", function (event) {
        $(".web-work").css("display", "inline");
        $(".design-work").css("display", "none");
        $(".teach-work").css("display", "none");
        $(".work-more-btn").css("display", "none");
    });
    $(".teach-btn").on("click", function (event) {
        $(".teach-work").css("display", "inline");
        $(".design-work").css("display", "none");
        $(".web-work").css("display", "none");
        $(".work-more-btn").css("display", "none");
    });
    $(".design-btn").on("click", function (event) {
        $(".design-work").css("display", "inline");
        $(".teach-work").css("display", "none");
        $(".web-work").css("display", "none");
        $(".work-more-btn").css("display", "none");
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
})(jQuery);
