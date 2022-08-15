$(function(){
    
  var swiper = new Swiper(".eventSlide", {
    loopAdditionalSlides : 1,
    loopedSlides: 2,
    spaceBetween: 14,
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });

  var swiper = new Swiper(".shopLive", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
})