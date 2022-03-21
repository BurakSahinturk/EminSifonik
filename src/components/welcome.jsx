import React, { Component } from "react";

const Welcome = () => {
  return (
    <div className="text-wrap cotainer-fluid m-2 text-center">
      <div className="row">
        <h1 className="text-white text-center pt-2">Sifonik Drenajda Lider</h1>
        <p className="text-wrap fw-light">
          2005 yılından itibaren Tükiye'nin dört bir yanında Sifonik Yağmur Suyu
          Drenaj Çözümleri sunan Emin Sifonik 2022 yılı itibariyle Tükiye Genel
          Distribütörü olduğu{" "}
          <a className="text-white" href="http://www.hydromax.com/">
            HydroMax
          </a>
          ® ile çok daha güçlü
        </p>
        <h2 className="text-white text-center">Uygun Fiyatlı Sifonik Sistem</h2>
        <p className="text-wrap fw-light">
          <a className="text-white" href="http://www.hydromax.com/">
            HydroMax
          </a>
          ® ürünleri tüm rakiplerinden daha iyi performans sağlarken, aynı
          zamanda bir çok rakibinden daha uygun fiyatlı çözümler sunuyor
        </p>
        <h2 className="text-white text-center">Nedir Bu Sifonik?</h2>
      </div>
      <div className="row ratio ratio-16x9 mx-auto mb-3">
        <iframe
          src="https://www.youtube.com/embed/VeBLkxgxuDc?rel=0"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        ></iframe>
      </div>
    </div>
  );
};

export default Welcome;
