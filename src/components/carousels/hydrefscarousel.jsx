import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CarouselPic1 from "../../images/hydrefs/DundrumCo-Ord 03.JPG";
import CarouselPic2 from "../../images/hydrefs/Picture1.jpg";
import CarouselPic3 from "../../images/hydrefs/Resim1.png";
import CarouselPic4 from "../../images/hydrefs/Resim2.jpg";
import CarouselPic5 from "../../images/hydrefs/Resim3.jpg";
import CarouselPic6 from "../../images/hydrefs/Resim4.jpg";
import CarouselPic7 from "../../images/hydrefs/Resim5.png";
import CarouselPic8 from "../../images/hydrefs/Resim6.png";
import CarouselPic9 from "../../images/hydrefs/Resim7.jpg";
import CarouselPic10 from "../../images/hydrefs/Resim8.jpg";
import CarouselPic11 from "../../images/hydrefs/Resim9.jpg";
import CarouselPic12 from "../../images/hydrefs/T20170508_094652.jpg";
import CarouselPic13 from "../../images/hydrefs/Resim10.jpg";
import CarouselPic16 from "../../images/hydrefs/TDSCN0805.JPG";

export default class HydrefsCarousel extends Component {
  render() {
    return (
      <Carousel autoPlay={true} infiniteLoop={true} verticalSwipe={"natural"}>
        <div>
          <img src={CarouselPic1} alt="Dundrum" />
          <p className="legend">Dundrum AVM, Dublin, İrlanda</p>
        </div>

        <div>
          <img src={CarouselPic2} alt="Dundrum" />
          <p className="legend">Dundrum AVM, Dublin, İrlanda</p>
        </div>

        <div>
          <img src={CarouselPic3} alt="Walmart" />
          <p className="legend">
            Walmart ABD ve dünyanın en büyük market zinciri, Sadece HydroMax®
            kullanıyor
          </p>
        </div>
        <div>
          <img src={CarouselPic4} alt="Tottenham Hostpurs EPL" />
          <p className="legend">
            Tottenham Hotspurs Stadı, Londra, İngiltere. Avrupadaki bir çok
            stadyum HydroMax® kullanıyor{" "}
          </p>
        </div>

        <div>
          <img src={CarouselPic5} alt="Ng Teng Fong" />
          <p className="legend">Ng Teng Hastanesi, Singapur</p>
        </div>

        <div>
          <img src={CarouselPic6} alt="" />
          <p className="legend">
            HydroMax® hem yeşil çatılarda hem de yeşil alanlarda kullanıma
            uygundur
          </p>
        </div>

        <div>
          <img src={CarouselPic7} alt="" />
          <p className="legend">
            Beoing 737 Fabrikası, Renton, Washington, ABD
          </p>
        </div>

        <div>
          <img src={CarouselPic8} alt="" />
          <p className="legend">
            Mercedes Benz Kuzey Amerika Merkez Deposu, Woodstock, Alabama, ABD
          </p>
        </div>

        <div>
          <img src={CarouselPic9} alt="" />
          <p className="legend">
            Mercedes Benz Kuzey Amerika Merkez Deposu, Woodstock, Alabama, ABD
          </p>
        </div>

        <div>
          <img src={CarouselPic10} alt="" />
          <p className="legend">
            Yeni İskoçya Parlamento Binası, Edinburgh, İskoçya
          </p>
        </div>

        <div>
          <img src={CarouselPic11} alt="" />
          <p className="legend">
            Yeni İskoçya Parlamento Binası, Edinburgh, İskoçya
          </p>
        </div>

        <div>
          <img src={CarouselPic12} alt="" />
        </div>

        <div>
          <img src={CarouselPic13} alt="" />
        </div>

        <div>
          <img src={CarouselPic16} alt="" />
        </div>
      </Carousel>
    );
  }
}
