import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const WhyUsEmin = () => {
  return (
    <div
      style={{
        color: "white",
        backgroundColor: "#2aabe1",
        fontSize: "3.15vh",
        border: "4px solid white",
        borderRadius: "3vmin",
        height: "100%",
      }}
    >
      <h2 className="text-white m-2 text-center" style={{ fontSize: "4.5vh" }}>
        EMiNSiFONiK
      </h2>
      <ul style={{ listStylePosition: "inside" }}>
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

export default WhyUsEmin;
