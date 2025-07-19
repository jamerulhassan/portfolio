document.addEventListener('DOMContentLoaded', function () {

    // Use dynamic data passed via localized script
    const sliderConfig = window.template1SliderConfig || {
        autoplay: false, 
        autoplay_delay: 1000, 
        effect: 'fade', 
        crossFade: true, 
        lazyLoad: false, 
    };
 
 const swiper = new Swiper('.oe-slider-outer', {
     loop: true,
     navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
     },
     autoplay: sliderConfig.autoplay ? {
        delay: sliderConfig.autoplay_delay || 1000, 
         disableOnInteraction: false,
     } : false, // Disable autoplay if false
     effect: sliderConfig.effect,
     fadeEffect: {
         crossFade: sliderConfig.crossFade,
     },
     lazy: {
         loadPrevNext: true, // Load next and previous slides as well
         loadOnTransitionStart: true, // Start lazy loading as soon as possible
     },
 });
 
     
     // Slide change event for updating counter
     swiper.on('slideChange', function () {
         const activeIndex = swiper.realIndex; 
         const counters = document.querySelectorAll('.count');
 
         counters.forEach((counter, index) => {
             if (index === activeIndex) {
                 counter.classList.add('active');
             } else {
                 counter.classList.remove('active');
             }
         });
     });
 });