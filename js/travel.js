$(".comments-load").on("click", function () {
  $(".comment-last").toggleClass("comments__comment-hidden");
});

//slider
var mySwiper = new Swiper(".article-slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".article-slider__button--next",
    prevEl: ".article-slider__button--prev",
  },
  keyboard: { enabled: !0, onlyInViewport: !1 },
});
