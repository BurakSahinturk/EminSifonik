import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination, Lazy } from "swiper";

import CarouselPic1 from "../../images/pre2020/376f6f50-2583-467f-a4fc-628eb531a002.JPG";
import CarouselPic2 from "../../images/pre2020/4df517f0-a695-4c4e-b664-d92460a01b8e.JPG";
import CarouselPic3 from "../../images/pre2020/IMG_1064.jpg";
import CarouselPic4 from "../../images/pre2020/IMG_1065.jpg";
import CarouselPic5 from "../../images/pre2020/IMG_1066.jpg";
import CarouselPic6 from "../../images/pre2020/IMG_2488.jpg";
import CarouselPic7 from "../../images/pre2020/IMG_2489.jpg";
import CarouselPic8 from "../../images/pre2020/IMG_2497.jpg";
import CarouselPic9 from "../../images/pre2020/IMG_3830.jpg";
import CarouselPic10 from "../../images/pre2020/IMG_3831.jpg";
import CarouselPic11 from "../../images/pre2020/IMG_3832.jpg";
import CarouselPic12 from "../../images/pre2020/IMG_3837.jpg";
const Pre2020 = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        lazy={true}
        navigation={true}
        modules={[Lazy, Pagination, Navigation]}
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

export default Pre2020;
