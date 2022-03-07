import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const WhyUs = () => {
  return (
    <div className="m-3">
      <h2 className="">Neden HydroMax® Süzgeçleri?</h2>
      <ul className="">
        Hydromax® Süzgeçleri aynı kapasitedeki rakiplerine göre:
        <li>Daha ucuzdur</li>
        <li>
          Daha verimlidir, aynı miktardaki suyu daha az göllenme ile tahliye
          eder, bu sayede oluk taşmalarını engeller
        </li>
        <li>Daha küçüktür, bu sayede daha küçük oluklara uygulanabilir</li>
        <li>
          Daha estetik görünümlüdür, Teras çatılarda görsel rahatsızlık vermeden
          uygulanabilir
        </li>
      </ul>
      <NavLink className="nav-link" to="/suzgecler">
        {" "}
        Yakışıklı süzgeçlerimizi görmek için buraya basın
      </NavLink>
      <hr />
      <h2 className="">Neden HydroMax® Sistemi?</h2>
      <ul className="">
        HydroMax® sistem tasarımı için kullanılan HydroTechnic® Yazılımı
        rakiplerine göre:
        <li>Daha kesin hesaplar yapar</li>
        <li>
          Hesaplarını normal koşullara göre değil, ekstrem koşullara göre yapar
        </li>
        <li>
          Sistem dolma ve aktifleşme süresini de hesaba katar, bu sayede daha
          etkin ve sessiz bir drenaj sağlar
        </li>
        <li>
          Buna rağmen, keskin hesap gücüyle rakiplerinin güvenli alanda kalmak
          için yaptığı aşırı kullanımlardan kaçınarak optimum sonuçlar vererek
          daha ekonomik çözümler sonuçlar
        </li>
      </ul>
      <NavLink className="nav-link" to="/iletisim">
        {" "}
        Projenizde HydroMax® ürünleri kullanmak için bizimle iletişime geçin.
        Bizimle iletişime geçmek için buraya basın{" "}
      </NavLink>
    </div>
  );
};

export default WhyUs;
