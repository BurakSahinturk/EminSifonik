import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
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

export default class Pre2020Carousel extends Component {
  render() {
    return (
      <Carousel autoPlay={true} infiniteLoop={true} verticalSwipe={"natural"}>
        <div>
          <img
            src={CarouselPic1}
            alt="Sifonik Uygulama Örneği - Altınsar Tekstil"
          />
          <p className="legend">Altınsar Tekstil Fabrika Binası (Uşak)</p>
        </div>

        <div>
          <img
            src={CarouselPic2}
            alt="ASifonik Uygulama Örneği - ltınsar Tekstil"
          />
          <p className="legend">Altınsar Tekstil Fabrika Binası (Uşak)</p>
        </div>

        <div>
          <img
            src={CarouselPic3}
            alt="Sifonik Uygulama Örneği - KJ Jenaratör"
          />
          <p className="legend">
            KJ Jeneratör Fabrika Binası (Pendik, İstanbul)
          </p>
        </div>

        <div>
          <img
            src={CarouselPic4}
            alt="Sifonik Uygulama Örneği - KJ Jenaratör"
          />
          <p className="legend">
            KJ Jeneratör Fabrika Binası (Pendik, İstanbul)
          </p>
        </div>

        <div>
          <img
            src={CarouselPic5}
            alt="Sifonik Uygulama Örneği - KJ Jenaratör"
          />
          <p className="legend">
            KJ Jeneratör Fabrika Binası (Pendik, İstanbul)
          </p>
        </div>

        <div>
          <img
            src={CarouselPic6}
            alt="Sifonik Uygulama Örneği - Doruk Hastanesi"
          />
          <p className="legend">
            Doruk Özel Nilüfer Hastanesi (Nilüfer, Bursa)
          </p>
        </div>

        <div>
          <img
            src={CarouselPic7}
            alt="Sifonik Uygulama Örneği - Doruk Hastanesi"
          />
          <p className="legend">
            Doruk Özel Nilüfer Hastanesi (Nilüfer, Bursa)
          </p>
        </div>

        <div>
          <img
            src={CarouselPic8}
            alt="Sifonik Uygulama Örneği - Doruk Hastanesi"
          />
          <p className="legend">
            Doruk Özel Nilüfer Hastanesi (Nilüfer, Bursa)
          </p>
        </div>

        <div>
          <img
            src={CarouselPic9}
            alt="Sifonik Uygulama Örneği - Çorlu Fabrika"
          />
          <p className="legend">Fabrika Binası (Çorlu, Tekirdağ)</p>
        </div>

        <div>
          <img
            src={CarouselPic10}
            alt="Sifonik Uygulama Örneği - Çorlu Fabrika"
          />
          <p className="legend">Fabrika Binası (Çorlu, Tekirdağ)</p>
        </div>

        <div>
          <img
            src={CarouselPic11}
            alt="Sifonik Uygulama Örneği - Çorlu Fabrika"
          />
          <p className="legend">Fabrika Binası (Çorlu, Tekirdağ)</p>
        </div>

        <div>
          <img
            src={CarouselPic12}
            alt="Sifonik Uygulama Örneği - Çorlu Fabrika"
          />
          <p className="legend">Fabrika Binası (Çorlu, Tekirdağ)</p>
        </div>
      </Carousel>
    );
  }
}
