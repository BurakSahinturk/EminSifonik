import React, { Component } from "react";

const Welcome = () => {
  return (
    <div className="text-wrap">
      <h2 className="text-white text-center pt-2">Tecrübe ve Özen</h2>
      <p className="text-wrap fw-light fs-5">
        2005 yılından itibaren Tükiye'nin dört bir yanında Sifonik Yağmur Suyu
        Drenaj Çözümleri sunan Emin Sifonik 2022 yılı itibariyle Tükiye Genel
        Distribütörü olduğu
        <a className="text-white" href="http://www.hydromax.com/">
          {" "}
          HydroMax
        </a>
        ® ile çok daha güçlü
      </p>
      <h2 className="text-white text-center">En İyi Performans Uygun Fiyata</h2>
      <p className="text-wrap fw-light fs-5">
        <a className="text-white" href="http://www.hydromax.com/">
          HydroMax
        </a>
        ® ürünleri tüm rakiplerinden daha iyi performans sağlarken, aynı zamanda
        bir çok rakibinden daha uygun fiyatlı çözümler sunuyor
      </p>
    </div>
  );
};

export default Welcome;
