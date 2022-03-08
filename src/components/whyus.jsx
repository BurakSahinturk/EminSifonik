import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const WhyUs = () => {
  return (
    <div className="m-3 fs-4">
      <h2 className="mx-3">HydroMax® Süzgeçlerinin Üstün Yanları:</h2>
      <ul>
        HydroMax® Süzgeçleri rakiplerinin aynı kapasitedeki ürünlerine göre;
        <li>Daha ekonomiktir</li>
        <li>Daha ufak boyutludur, daha dar derelere sığabilirler</li>
        <li>
          Daha verimlidir, aynı akış miktarını çok daha az göllenme ile sağlar.
          Oluklardaki su birikimini asgariye indirir
        </li>
        <li>Daha uzun ömürlüdür</li>
      </ul>
      <NavLink className="nav-link fs-3 p-0 ms-4" to="/suzgecler">
        Yakışıklı süzgeçlerimize göz atmak için buraya basın
      </NavLink>
      <hr />
      <h2 className="mx-3">HydroMax® Sisteminin Üstün Yanları:</h2>
      <ul>
        HydroMax® Sifonik Sistem çözümleri rakiplerine göre;
        <li>Daha kesin hesaplar yapabilir</li>
        <li>
          Hesaplarını normal şartlara göre değil, ekstrem koşullara göre yapar.
          Bu sayede bozulma/kırılma/patlama gibi aksaklıklar ve masraflar
          asgariye iner
        </li>
        <li>
          Hesaplarını Avrupa Standartlarından bile daha yüksek olan Birleşik
          Krallık (BS 8490:2007), ABD (ASPE/ANSI 45:2013) ve Singapur (SS
          525:2006) Standartlarına göre yapar.
        </li>
        <li>
          Sistem dolma ve aktifleşme sürelerini de hesaba katar. Bu sayede daha
          sessiz ve daha hızlı drenaj sağlar. Oluk taşmalarının önüne geçer
        </li>
        <li>
          Kullandığı tüm üstün standartlara rağmen kesin hesap gücüyle,
          rakiplerinin güvenli tarafta kalmak için yaptığı aşırı kullanımlara
          ihtiyaç duymadan daha ekonomik çözümler sunar
        </li>
        <li>
          Ön üretim şemalarını otomatik olarak hazırlayarak hem üretimi
          hızlandırır hem de hata riskini azaltır
        </li>
      </ul>
      <NavLink className="nav-link fs-3 p-0 ms-4" to="/nedenbiz">
        Daha fazla detay için buraya basın!
      </NavLink>
      <hr />
      <h2 className="mx-3">
        <span>EMiN</span>SiFONiK
      </h2>
      <ul>
        HydroMax® ürünlerinin Türkiye Distrübitörü EMiN
        <span className="text-emin">SiFONiK</span> uygulama konusunda da
        yanınızdadır
        <li>Uygun Fiyatlı</li>
        <li>Uzman</li>
        <li>Deneyimli</li>
        <li>Güvenilir</li>
        işçilik sağlamaya her an hazırız. Lütfen Bize ulaşın
      </ul>
      <NavLink className="nav-link fs-3 p-0 mx-4" to="/iletisim">
        İletişim Bilgilerimiz için buraya basın!
      </NavLink>
    </div>
  );
};

export default WhyUs;
