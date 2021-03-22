//----------------------------SWIPER-----------------------------------
const swiper = document.querySelector('.categories__swiper-container');
let mySwiper3;

function notmobileSlider() {
  if(window.innerWidth > 600 && swiper.dataset.notmobile == 'false') {
    mySwiper3 = new Swiper('.categories__swiper-container', {
      // Optional parameters
      loop: true,
      grabCursor: true,
      speed: 1000,                  
      autoplay: {
        delay: 3000, //задержка
        disableOnInteraction: false, //после взаимодействия с пользователем продолжение автовоспроизведения
      },
      
      breakpoints: {
        // when window width is >= 600px
        600: {
          slidesPerView: 2, // or 'auto'
          slidesPerColumn: 1,
          spaceBetween: 34,
          slidesPerGroup: 2,
        },
        // // when window width is >= 850px
        850: {
          slidesPerView: 2, // or 'auto'
          slidesPerColumn: 1,
          spaceBetween: 50,
          slidesPerGroup: 1,
        },
        // // when window width is >= 1400px
        1400: {
          slidesPerView: 3, // or 'auto'
          slidesPerColumn: 1,
          spaceBetween: 50,
          slidesPerGroup: 3,
        }
      },
    
      // If we need pagination
      pagination: {
        el: '.categories__swiper-pagination',
        type: 'fraction',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.categories__swiper-button-next',
        prevEl: '.categories__swiper-button-prev',
      },
    });
    swiper.dataset.notmobile = 'true';
  }

  if(window.innerWidth <= 600) {
    swiper.dataset.notmobile = 'false';
    if(swiper.classList.contains('swiper-container-initialized')) {
      mySwiper3.destroy();
    }
  }
}

notmobileSlider()
window.addEventListener('resize', () => {
  notmobileSlider();
});



//========================================================================
let categyBtn = document.querySelector('.categories__button');
let categoryForm1 = document.querySelector('.categories__form1');
categyBtn.addEventListener('click', function() {
  categoryForm1.classList.toggle('categories__form1-is-active');
  this.classList.toggle('categories__button-is-active');
})