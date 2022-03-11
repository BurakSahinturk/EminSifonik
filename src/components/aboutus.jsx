import React, { Component } from "react";
import IstCarousel from "./istcarousel";
import Pre2020Carousel from "./pre202carousel";

const AboutUs = () => {
  return (
    <div className="m-3">
      <br />
      <h3 className="text-center">
        EMiN<span className="text-emin">SiFONiK</span> 2005 yılında Bursa'da
        Mahmut Şahintürk tarafından kuruldu. 17 yıldır Türkiye'nin dört bir
        tarafında, değişik sifonik drenaj markalarıyla bir çok endüstri yapısı,
        hastane ve konut dahil sayısız proje uygulaması gerçekleştirdik.
      </h3>
      <div className="row">
        <div className="col-lg-3 col-sm-1"></div>
        <div className="col-lg-6 col-sm-10">
          <Pre2020Carousel />
        </div>
        <div className="col-lg-3 col-sm-1"></div>
      </div>
      <br />
      <br />
      <h3 className="text-center">
        2020 yılında Emin Sifonik'in en prestijli projesi İstanbul Havalimanı
        geldi
      </h3>

      <div className="row">
        <div className="col-lg-3 col-sm-1"></div>
        <div className="col-lg-6 col-sm-10">
          <IstCarousel />
        </div>
        <div className="col-lg-3 col-sm-1"></div>
      </div>

      <br />
      <br />
      <h3 className="text-center">
        2022 yılında ise sifonikte dünya lideri HydroMax® ürünleri kullanmaya
        başladık. HydroMax® dünyanın dört bir yanında milyonlarca kilometre kare
        çatı alanında uygulanmış, dünya lideri markadır.
      </h3>
      <div className="text-center">
        ((HydroMax görselleri slaytı var aslında burda))
      </div>
    </div>
  );
};

export default AboutUs;
