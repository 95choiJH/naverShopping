$(function(){
    
  var swiper = new Swiper(".eventSlide", {
    spaceBetween: 14,
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    loopedSlides: 2,
    loopAdditionalSlides : 1,
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