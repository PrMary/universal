$(document).ready(function () {
  $(".section-button").on("click", function () {
    $(".navbar").toggleClass("navbar--visible");
  });

  var tabsItem = $(".tabs-item");
  var contentItem = $(".content__item");

  tabsItem.on("click", function (event) {
    var activeContent = $(this).attr("data-target");
    var activeTriangle = $(this).children(".tabs-item__triangle");
    tabsItem.removeClass("tabs-item--active");
    contentItem.removeClass("content__item--active");
    $(".tabs-item__triangle").removeClass("tabs-item__triangle--active");
    $(activeContent).addClass("content__item--active");
    $(this).addClass("tabs-item--active");
    $(activeTriangle).addClass("tabs-item__triangle--active");
  });

  var e = $("[data-toggle=modal]"),
    o = $(".modal__close");
  e.on("click", function () {
    var e = $(".modal__overlay"),
      o = $(".modal__dialog");
    e.addClass("modal__overlay--visible"), o.addClass("modal__dialog--visible");
  }),
    o.on("click", function (e) {
      e.preventDefault();
      var o = $(".modal__overlay"),
        l = $(".modal__dialog");
      o.removeClass("modal__overlay--visible"),
        l.removeClass("modal__dialog--visible");
    }),
    $(document).on("keydown", function (e) {
      var o, l;
      27 == e.keyCode &&
        ((o = $(".modal__overlay")),
        (l = $(".modal__dialog")),
        o.removeClass("modal__overlay--visible"),
        l.removeClass("modal__dialog--visible"));
    });

  //закладки в секции page
  $(".bookmark").each(function () {
    var $img = $(this);
    var imgClass = $img.attr("class");
    var imgURL = $img.attr("src");
    $.get(
      imgURL,
      function (data) {
        var $svg = $(data).find("svg");
        if (typeof imgClass !== "undefined") {
          $svg = $svg.attr("class", imgClass + " replaced-svg");
        }
        $svg = $svg.removeAttr("xmlns:a");
        if (
          !$svg.attr("viewBox") &&
          $svg.attr("height") &&
          $svg.attr("width")
        ) {
          $svg.attr(
            "viewBox",
            "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
          );
        }
        $img.replaceWith($svg);
      },
      "xml"
    );
  });

  $(".bookmark-container").on("click", function () {
    $(this).children(".bookmark").toggleClass("bookmark-red");
  });

  //slider
  var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
  });

  //validation
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Name must be at least 2 characters long",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Please specify your phone number",
          minlength: "Please specify your phone number",
        },
      },
    });
  });

  $("#email").inputmask("email");
});
