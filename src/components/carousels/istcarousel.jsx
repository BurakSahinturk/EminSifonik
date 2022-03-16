import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { Navigation, Pagination, Lazy, EffectFade } from "swiper";
import CarouselPic1 from "../../images/ist/0af366f7-4bbb-48ad-b2f6-0d4f56d0520e.JPG";
import CarouselPic2 from "../../images/ist/26fb8829-40d1-41c3-ba1b-44b8e416de66.JPG";
import CarouselPic3 from "../../images/ist/8c436c50-fa71-4419-9bb7-cb2ce84d56d4.JPG";
import CarouselPic4 from "../../images/ist/aa6b9319-4988-42a4-b240-68c827258752.JPG";
import CarouselPic5 from "../../images/ist/igahavalimanianasayfa24_899_548.jpg";
import CarouselPic6 from "../../images/ist/IMG_2862.jpg";
import CarouselPic7 from "../../images/ist/istanbul-havalimani-anket_8910.jpg";
import CarouselPic8 from "../../images/ist/WhatsApp Image 2022-03-11 at 23.03.18.jpeg";
import CarouselPic9 from "../../images/ist/WhatsApp Image 2022-03-11 at 23.05.01.jpeg";
import CarouselPic10 from "../../images/ist/WhatsApp Image 2022-03-11 at 23.15.22 (1).jpeg";
import CarouselPic11 from "../../images/ist/WhatsApp Image 2022-03-11 at 23.15.22.jpeg";
import CarouselPic12 from "../../images/ist/WhatsApp Image 2022-03-11 at 23.17.51 (1).jpeg";
const IstCarousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        pagination={{
          clickable: true,
        }}
        lazy={true}
        navigation={true}
        modules={[Lazy, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={CarouselPic1} className="swiper-lazy" alt="" />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={CarouselPic2} className="swiper-lazy" alt="" />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={CarouselPic3} className="swiper-lazy" alt="" />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={CarouselPic4} className="swiper-lazy" alt="" />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={CarouselPic5} className="swiper-lazy" alt="" />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={CarouselPic6} className="swiper-lazy" alt="" />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={CarouselPic7} className="swiper-lazy" alt="" />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={CarouselPic8} className="swiper-lazy" alt="" />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={CarouselPic9} className="swiper-lazy" alt="" />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={CarouselPic10} className="swiper-lazy" alt="" />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={CarouselPic11} className="swiper-lazy" alt="" />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={CarouselPic12} className="swiper-lazy" alt="" />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default IstCarousel;
