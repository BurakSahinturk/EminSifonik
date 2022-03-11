import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CarouselPic1 from "../images/ist/0af366f7-4bbb-48ad-b2f6-0d4f56d0520e.JPG";
import CarouselPic2 from "../images/ist/26fb8829-40d1-41c3-ba1b-44b8e416de66.JPG";
import CarouselPic3 from "../images/ist/8c436c50-fa71-4419-9bb7-cb2ce84d56d4.JPG";
import CarouselPic4 from "../images/ist/aa6b9319-4988-42a4-b240-68c827258752.JPG";
import CarouselPic5 from "../images/ist/igahavalimanianasayfa24_899_548.jpg";
import CarouselPic6 from "../images/ist/IMG_2862.jpg";
import CarouselPic7 from "../images/ist/istanbul-havalimani-anket_8910.jpg";
import CarouselPic8 from "../images/ist/WhatsApp Image 2022-03-11 at 23.03.18.jpeg";
import CarouselPic9 from "../images/ist/WhatsApp Image 2022-03-11 at 23.05.01.jpeg";
import CarouselPic10 from "../images/ist/WhatsApp Image 2022-03-11 at 23.15.22 (1).jpeg";
import CarouselPic11 from "../images/ist/WhatsApp Image 2022-03-11 at 23.15.22.jpeg";
import CarouselPic12 from "../images/ist/WhatsApp Image 2022-03-11 at 23.17.51 (1).jpeg";

export default class IstCarousel extends Component {
  render() {
    return (
      <Carousel autoPlay={true} infiniteLoop={true}>
        <div>
          <img src={CarouselPic1} />
        </div>

        <div>
          <img src={CarouselPic2} />
        </div>

        <div>
          <img src={CarouselPic3} />
        </div>

        <div>
          <img src={CarouselPic4} />
        </div>

        <div>
          <img src={CarouselPic5} />
        </div>

        <div>
          <img src={CarouselPic6} />
        </div>

        <div>
          <img src={CarouselPic7} />
        </div>

        <div>
          <img src={CarouselPic8} />
        </div>

        <div>
          <img src={CarouselPic9} />
        </div>

        <div>
          <img src={CarouselPic10} />
        </div>

        <div>
          <img src={CarouselPic11} />
        </div>

        <div>
          <img src={CarouselPic12} />
        </div>
      </Carousel>
    );
  }
}
