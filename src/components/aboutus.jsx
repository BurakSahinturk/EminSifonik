import React, { Component } from "react";
import Carousel from "./carousel";
import fileListOne from "./images/ist/filelist.js";

const AboutUs = () => {
  return (
    <div>
      <br />
      <p>
        EMiN<span className="text-emin">SiFONiK</span> 2005 yılında Bursa'da
        Mahmut Şahintürk tarafından kuruldu. 17 yıldır Türkiye'nin dört bir
        tarafında, değişik sifonik drenaj markalarıyla bir çok endüstri yapısı,
        hastane ve konut dahil sayısız proje uygulaması gerçekleştirdik.
      </p>
      <div>
        <Carousel list={fileListOne} dir="../images/ist" />
      </div>
      <br />
      <br />
      <p>
        2020 yılında Emin Sifonik'in en prestijli projesi İstanbul Havalimanı
        geldi
      </p>
      <div>Buraya da istanbul havalimanından fotolu bir karosel</div>
      <br />
      <br />
      <p>
        2022 yılında ise sifonikte dünya lideri HydroMax® ürünleri kullanmaya
        başladık. HydroMax® dünyanın dört bir yanında milyonlarca kilometre kare
        çatı alanında uygulanmış, dünya lideri markadır.
      </p>
      <div>HydroMax görselleri karoseli</div>
    </div>
  );
};

export default AboutUs;
