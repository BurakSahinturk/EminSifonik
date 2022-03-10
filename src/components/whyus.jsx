import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const WhyUs = () => {
  return (
    <div className="m-3 fs-4 container-fluid">
      <div className="row">
        <div className="col-lg-3 home-box text-white py-2 border border-white border-4">
          <h2 className="mx-3 text-white">
            <a
              href="http://www.hydromax.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-white"
            >
              HydroMax
            </a>
            ® Süzgeçlerinin Üstün Yanları:
          </h2>
          <ul>
            <a
              href="http://www.hydromax.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-white"
            >
              HydroMax
            </a>
            ® Süzgeçleri rakiplerinin aynı kapasitedeki ürünlerine göre;
            <li>Daha ekonomiktir</li>
            <li>Daha ufak boyutludur, daha dar derelere sığabilirler</li>
            <li>
              Daha verimlidir, aynı akış miktarını çok daha az göllenme ile
              sağlar. Oluklardaki su birikimini asgariye indirir
            </li>
            <li>Daha uzun ömürlüdür</li>
          </ul>
          <NavLink
            className="nav-link fs-3 p-0 ms-4 text-white"
            to="/suzgecler"
          >
            Yakışıklı süzgeçlerimize göz atmak için buraya basın
          </NavLink>
        </div>
        <div className="col-lg-6 home-box text-white py-2 border border-white border-4">
          <h2 className="mx-3 text-white">
            <a
              href="http://www.hydromax.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-white"
            >
              HydroMax
            </a>
            ® Sisteminin Üstün Yanları:
          </h2>
          <ul>
            <a
              href="http://www.hydromax.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-white"
            >
              HydroMax
            </a>
            ® Sifonik Sistem Tasarımları, tescilli yazılımı HydroTechnic® ile
            yapılır. HydroTechnic® rakiplerine göre;
            <li>Daha kesin hesaplar yapabilir</li>
            <li>
              Hesaplarını normal şartlara göre değil, ekstrem koşullara göre
              yapar. Bu sayede bozulma/kırılma/patlama gibi aksaklıklar ve
              masraflar asgariye iner
            </li>
            <li>
              Hesaplarını Avrupa Standartlarından bile daha yüksek olan Birleşik
              Krallık (BS 8490:2007), ABD (ASPE/ANSI 45:2013) ve Singapur (SS
              525:2006) Standartlarına göre yapar.
            </li>
            <li>
              Sistem dolma ve aktifleşme sürelerini de hesaba katar. Bu sayede
              daha sessiz ve daha hızlı drenaj sağlar. Oluk taşmalarının önüne
              geçer
            </li>
            <li>
              Kullandığı tüm üstün standartlara rağmen keskin hesap gücüyle,
              rakiplerinin güvenli tarafta kalmak için yaptığı aşırı
              kullanımlara ihtiyaç duymadan daha ekonomik çözümler sunar
            </li>
            <li>
              Ön üretim şemalarını otomatik olarak hazırlayarak hem üretimi
              hızlandırır hem de hata riskini azaltır
            </li>
            En iyi sifonik sistem ürünleri ve en kaliteli sistem tasarımları
            için bizimle iletişime geçin
          </ul>
          <NavLink className="nav-link fs-3 p-0 ms-4 text-white" to="/iletisim">
            İletişim Bilgilerimiz için buraya basın!
          </NavLink>
        </div>
        <div className="col-lg-3 home-box text-white py-2 border border-white border-4">
          <h2 className="mx-3 text-white">EMiNSiFONiK</h2>
          <ul>
            <a
              href="http://www.hydromax.com/"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-white"
            >
              HydroMax
            </a>
            ® ürünlerinin Türkiye Distrübitörü EMiNSiFONiK,{" "}
            <a
              href="https://coescompany.com/"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-white"
            >
              COES
            </a>
            'in Coestilen® veya dilerseniz ekstra sessiz BluePower®{" "}
            <a
              href="http://www.coescompany.com/images/brochurecoes.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-white"
            >
              {" "}
              boru ve fittingsleri
            </a>
            yle birlikte uygulama konusunda da yanınızda
            <li>Uygun Fiyatlı</li>
            <li>Uzman</li>
            <li>Deneyimli</li>
            <li>Güvenilir</li>
            işçilik sağlamaya her an hazırız. Lütfen Bize ulaşın
          </ul>
          <NavLink className="nav-link fs-3 p-0 mx-4 text-white" to="/iletisim">
            İletişim Bilgilerimiz için buraya basın!
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
