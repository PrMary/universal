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

  $(function () {
    $(".subscribe__button").on("click", validate);

    // Validate email
    function validateEmail(email) {
      var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      return re.test(String(email).toLowerCase());
    }

    // send form
    function sendForm() {
      var msg = $(".subscribe - form").serialize();
      $.ajax({
        type: 'POST',
        url: 'send.php', // Обработчик собственно
        data: msg,
        success: function (data) {
          var url = "thankyou.html";
          $(location).attr('href', url);
        },
        error: function () {
          alert('Ошибка!');
        }
      });
    }

    // validate email and send form after success validation
    function validate() {
      var email = $(".email").val();
      var $error = $(".error");
      $error.text("");

      if (validateEmail(email)) {
        $error.fadeOut();
        sendForm();
      } else {
        $error.fadeIn();
        $error.text(email + " is not valid");
      }
      return false;
    }
  });
});
