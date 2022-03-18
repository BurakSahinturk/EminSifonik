import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ScrollToTopOnMount from "./scrolltotoponmount";
import PipeComparison from "../images/pipecomparison.png";
import HydroTechnicPic from "../images/services/hydrotechnic.jpg";
import Walmart2 from "../images/hydrefs/TDSCN0805.JPG";

const SystemDesign = () => {
  return (
    <div className="m-3">
      <div className="fs-4">
        <ScrollToTopOnMount />
        <h2 className="fs-1 text-center">Sifonik Sistem Çözümü</h2>
        <div
          className="bg-light clearfix"
          style={{ borderRadius: "30px", padding: "10px" }}
        >
          <img
            src={PipeComparison}
            class="float-md-end m-3"
            alt="Caption from the software: HydroTechnic"
            height="300vh"
          />
          <h3>Çözüm Bizde!</h3>
          <p>
            HydroMax® Sifonik Sistemlerimizin en uygun, en ekonomik ve en etkili
            bir sistem içerisinde uygulanabilmesi için projelendirme hizmeti
            sunuyoruz
          </p>
          <h3>Tasarruflu!</h3>
          <p>
            HydroMax® Sifonik Sistemlerini, konvansiyonel sistemlerden daha
            tasarruflu kılan şey boru çaplarının çok daha küçük olması ve iniş
            borularının sayısının çok daha az olmasıdır
          </p>
          <NavLink className="nav-link fs-3 p-0 text-emin" to="/nedensifonik">
            Sifonik sistemin avantajlarıyla ilgili daha fazla detay için buraya
            basın!
          </NavLink>
        </div>
        <hr />
        <div
          className="bg-light clearfix"
          style={{ borderRadius: "30px", padding: "10px" }}
        >
          <img
            src={HydroTechnicPic}
            class="float-md-start m-3"
            alt="Caption from the software: HydroTechnic"
            height="300vh"
          />
          <h3>Farkımız: HydroTechnic®</h3>
          <p>
            Drenajı hem uygun, sessiz ve hızlı, hem de ekonomik bir şekilde
            yapabilmek için HydroMax'ın bağımsız kuruluşlarca denetlenip
            onaylanan, rakiplerinden üstünlüğünü kanıtlamış HydroTechnic®
            yazılımını kullanıyoruz.
          </p>
          <h3>Neden HydroTechnic®?</h3>
          <p>
            HydroTechnic® rakiplerinden çok daha efektif ve dolayısıyla ekonomik
            sonuçlar çıkartan üstün bir yazılımdır.
          </p>
          <NavLink className="nav-link fs-3 p-0 text-emin" to="/nedenbiz">
            Daha fazla detay için buraya basın!
          </NavLink>
        </div>
        <hr />
        <div
          className="bg-light clearfix"
          style={{ borderRadius: "30px", padding: "10px" }}
        >
          <img
            src={Walmart2}
            class="float-md-end m-3"
            alt="Caption from the software: HydroTechnic"
            height="300vh"
          />
          <h3>Tekrar: Çözüm bizde</h3>
          <p>
            Karşılaştırma yapabilmek için fiyat teklifinizi hemen alın.
            İsterseniz sistem çözümü ve malzeme şeklinde, isterseniz işçilik
            dahil projelendirme ve fiyatlandırma hizmetimizden hemen şimdi
            faydalanmak için hemen bize ulaşın.
          </p>
          <NavLink className="nav-link fs-3 p-0 text-emin" to="/iletisim">
            İletişim Bilgilerimiz için buraya basın!
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SystemDesign;
