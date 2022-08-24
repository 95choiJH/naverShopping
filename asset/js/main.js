$(function(){

    var eventSlide = new Swiper(".eventSlide", {
        observer: true,
        loop: true,
        loopAdditionalSlides : 1,
        loopedSlides: 1,
        slidesPerView: "auto",
        spaceBetween: 14,
        centeredSlides: true,
        pagination: {
            el: ".eventSlide-pagination",
        },
    });
    
    var shopLive = new Swiper(".shopLive", {
        pagination: {
            el: ".shopLive-pagination",
      },
    });
  })