import React, { Component } from "react";
import CertificateUSA from "../../certificates/HydroMax_Certifcation_Letter_USA_2015.pdf";
import CertificateUK from "../../certificates/HydroMax_Certifcation_Letter_Europe_2015.pdf";
import { NavLink } from "react-router-dom";

const WhyUsHydrotechnic = () => {
  return (
    <div
      style={{
        color: "white",
        backgroundColor: "#2aabe1",
        fontSize: "2.8vh",
        border: "4px solid white",
        borderRadius: "3vmin",
        height: "100%",
      }}
    >
      <h2 className="text-white m-2" style={{ fontSize: "4.5vh" }}>
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
      <ul style={{ listStylePosition: "inside" }}>
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
          Hesaplarını normal şartlara göre değil, ekstrem koşullara göre yapar.
          Bu sayede bozulma/kırılma/patlama gibi aksaklıklar ve masraflar
          asgariye iner
        </li>
        <li>
          Hesaplarını Avrupa Standartlarından bile daha yüksek olan:
          <ul>
            <li>
              Birleşik Krallık (BS 8490:2007){" "}
              <a
                href={CertificateUK}
                className="text-white"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Tooltip on top"
                target="_blank"
                rel="noopener noreferrer"
              >
                (Sertifikamızı görmek için buraya basın)
              </a>
            </li>
            <li>
              ABD (ASPE/ANSI 45:2013){" "}
              <a
                href={CertificateUSA}
                className="text-white"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Tooltip on top"
                target="_blank"
                rel="noopener noreferrer"
              >
                (Sertifikamızı görmek için buraya basın)
              </a>
            </li>
            <li>Singapur (SS 525:2006) Standartlarına göre yapar.</li>
          </ul>
        </li>
        <li>
          Sistem dolma ve aktifleşme sürelerini de hesaba katar. Bu sayede daha
          sessiz ve daha hızlı drenaj sağlar. Oluk taşmalarının önüne geçer
        </li>
        <li>
          Kullandığı tüm üstün standartlara rağmen keskin hesap gücüyle,
          rakiplerinin güvenli tarafta kalmak için yaptığı aşırı kullanımlara
          ihtiyaç duymadan daha ekonomik çözümler sunar
        </li>
        <li>
          Ön üretim şemalarını otomatik olarak hazırlayarak hem üretimi
          hızlandırır hem de hata riskini azaltır
        </li>
        En iyi sifonik sistem ürünleri ve en kaliteli sistem tasarımları için
        bizimle iletişime geçin
      </ul>
      <NavLink
        className="nav-link text-white"
        to="/iletisim"
        style={{ fontSize: "4.5vh" }}
      >
        İletişim Bilgilerimiz için buraya basın!
      </NavLink>
    </div>
  );
};

export default WhyUsHydrotechnic;
