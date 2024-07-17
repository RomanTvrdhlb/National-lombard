import Swiper from "swiper";
import vars from "../_vars";
import { Pagination, Autoplay} from "swiper/modules";

const { mainSliders, reviewSliders } = vars;

mainSliders && mainSliders.forEach(function(slider){
  const container = slider.querySelector('.swiper-container');
  const pagination = slider.querySelector(".swiper-pagination");
  
  const swiper = new Swiper(container,
    {
      modules: [Autoplay, Pagination],
      spaceBetween: 20,
      slidesPerView: 1,
      loop: true,
      speed: 1500,
      observer: true,
      observeParents: true,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        clickable: true,
        el: pagination && pagination,
      },
      breakpoints:{
        320:{
          spaceBetween: 15,
        },
        576:{
          spaceBetween: 20,
        },
      },
    }
  );
})



reviewSliders && reviewSliders.forEach(function(slider){
  const container = slider.querySelector('.swiper-container');
  
  const swiper = new Swiper(container,
    {
      spaceBetween: 20,
      slidesPerView: 'auto',
      grabCursor: true,
      speed: 1500,
      observer: true,
      observeParents: true,
      watchSlidesProgress: true,
      autoHeight: true,
      slidesPerGroup: 1,

      breakpoints:{
        320:{
          slidesPerView: 1.1,
        },
        576:{
          slidesPerView: 'auto',
        },
      },

      on:{
        slideChangeTransitionEnd: function () {
            const isAtEnd = swiper.isEnd;
            const isAtBeginning = swiper.isBeginning;


            if (isAtEnd) {
              slider.classList.add('end');
            } else {
              slider.classList.remove('end');
            }

            if (isAtBeginning) {
              slider.classList.remove('active');
            }
        },
        slideChange: function () {
          const isAtBeginning = swiper.isBeginning;

          slider.classList.remove('end');

          if (!isAtBeginning) {
            slider.classList.add('active');
          }
        }
      }
    }
  );
})


