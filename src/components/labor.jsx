import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ScrollToTopOnMount from "./scrolltotoponmount";

const Labor = () => {
  return (
    <div className="m-3 fs-4">
      <ScrollToTopOnMount />
      <h2 className="fs-1">Uygulama</h2>
      <h3>Tecrübe</h3>
      <p>
        En iyi ürünler ve en yetkin projelendirmenin yanında deneyimli ve
        rekabetçi fiyatlı bir ekipten uygulama istiyorsanız; EMiN
        <span className="text-emin">SiFONiK</span> sifonik drenaj sistemleri
        konusunda 17 yılı aşkın deneyimiyle sizinle birlikte çalışmak için
        hazır.
      </p>
      <p>
        Türkiye'nin dört bir yanında yağmur suyu sistemlerini çözdüğümüz
        yüzlerce yapıdan biri sizin yapınız olabilir.
      </p>
      <h3>Uzman Ekip</h3>
      <p>
        Sifonik drenaj konusunda her türlü ihtiyaç ve sorunuza cevap verebilecek
        uzman kadromuz, projelendirmeden uygulamaya kadar her aşamada yardıma
        hazır. Projenize hazırlanacak malzeme ve işçilik dahil fiyat teklifi
        için bize dilediğiniz zaman ulaşabilirsiniz.
      </p>
      <NavLink className="nav-link fs-3 p-0 text-emin" to="/iletisim">
        İletişim Bilgilerimiz için buraya basın!
      </NavLink>
    </div>
  );
};

export default Labor;
