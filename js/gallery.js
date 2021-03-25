//-----------------------Модальные Окна----------------------
const modal = new GraphModal();
//-----------------------------------------------------------

//---------------Селект---------------
const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
  searchEnabled: false
})
//------------------------------------

//---------------Swiper---------------
const mySwiper1 = new Swiper('.gallery__swiper-container', {
  // Optional parameters
  // loop: true,
  resizeObserver: true,
  speed: 1500,
  // autoplay: {
  //   delay: 5000, //задержка
  //   disableOnInteraction: false, //после взаимодействия с пользователем продолжение автовоспроизведения
  // },
  
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerColumn: 1,
      slidesPerGroup: 1,
    },
    // when window width is >= 600px
    600: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerColumn: 2,
      slidesPerGroup: 2,
    },
    // // when window width is >= 1200px
    1200: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 50,
      slidesPerGroup: 3,
    }
  },

  // If we need pagination
  pagination: {
    el: '.gallery__swiper-pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.gallery__swiper-button-next',
    prevEl: '.gallery__swiper-button-prev',
  },
});