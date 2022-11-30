document.addEventListener("DOMContentLoaded", function (event) {
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
        allowSlideNext: false,
        allowSlidePrev: false,
      },
      550: {
        allowSlideNext: true,
        allowSlidePrev: true,
      },
      600: {
        slidesPerView: 'auto',
        spaceBetween: 120
      },
      1000: {
        slidesPerView: 2,
      },
    },


    spaceBetween: 120,
    centeredSlides: true,
    slidesPerView: 1,

  });

  var swiper2 = new Swiper(".mySwiper2", {
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 'auto',
    spaceBetween: 50,
    speed: 1000,
    duration: 2000,
    transition: 500,

    breakpoints: {
      0: {
        spaceBetween: 20,
      },

      400: {
        spaceBetween: 30,
      },
      768: {
        spaceBetween: 50,
      }
    }
  });


  const scene = document.querySelector('.scene');
  const parallaxInstance = new Parallax(scene, {
    relativeInput: true,
    hoverOnly: true
  })
});


window.onload = function () {
  if (!window.location.href) {
    window.location = window.location + '#loaded';
    window.location.reload();
  }
}

window.resize = function () {
  swiper.reInit()
}

