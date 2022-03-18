import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const WhyUsDrains = () => {
  let highlightText = "palegreen";
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
        ® Süzgeçlerinin Üstün Yanları:
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
        ® Süzgeçleri rakiplerinin aynı kapasitedeki ürünlerine göre;
        <li>Daha ekonomiktir</li>
        <li>
          Daha ufak boyutludur, daha dar derelere sığabilirler: 25lt/sn
          kapasiteye sahip bir HydroMax® süzgeci{" "}
          <span style={{ color: { highlightText } }}>23cm çap</span>a sahipken
          en yakın rakibi 26cm çaplıdır. Rakiplerinin en küçük çaplı süzgeci
          19cm iken <span style={{ color: { highlightText } }}>14cm</span> kadar
          küçük boyutlarda HydroMax® süzgeçleri bulunmaktadır.
        </li>
        <li>
          Daha verimlidir, aynı akış miktarını çok daha az göllenme ile sağlar.
          Oluklardaki su birikimini asgariye indirir.
        </li>
        <li>Daha uzun ömürlüdür</li>
        <li>Daha estetik görünümlüdür</li>
        <li>
          Test edildiler, her koşulda test edildiler. Ve sadece çalışıyorlar mı
          çalışmıyorlar mı bakmak için değil, ne kadar su iletiyorlar, hangi
          basınçla iletiyorlar hepsi bilimsel olarak dokümanlandı.
        </li>
      </ul>
      <NavLink
        className="nav-link text-white"
        to="/suzgecler"
        style={{ fontSize: "4.5vh" }}
      >
        Yakışıklı süzgeçlerimize göz atmak için buraya basın
      </NavLink>
    </div>
  );
};

export default WhyUsDrains;
