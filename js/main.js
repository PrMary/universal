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
});
