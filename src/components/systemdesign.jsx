import React from "react";
import { NavLink } from "react-router-dom";
import ScrollToTopOnMount from "./scrolltotoponmount";
import PipeComparison from "../images/pipecomparison.png";
import HydroTechnicPic from "../images/services/hydrotechnic.jpg";
import Walmart2 from "../images/hydrefs/TDSCN0805.JPG";
import HydroTechnicPic2 from "../images/hydrotechnic2.png";

const SystemDesign = () => {
  return (
    <main className="m-3 fs-4">
      <ScrollToTopOnMount />
      <h2 className="fs-1 text-center">Sifonik Sistem Çözümü</h2>
      <h2 className="fs-1 text-center">
        En İyi Sifonik Sistem Hesap Programı: HydroTechnic™
      </h2>
      <div
        className="bg-light clearfix"
        style={{ borderRadius: "30px", padding: "10px" }}
      >
        <img
          src={PipeComparison}
          className="float-md-end m-3"
          alt="Sifonik sistem faydası diyagram"
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
          className="float-md-start m-3"
          alt="Caption from the software: HydroTechnic"
          height="300vh"
        />
        <h3>Farkımız: HydroTechnic™</h3>
        <p>
          Drenajı hem uygun, sessiz ve hızlı, hem de ekonomik bir şekilde
          yapabilmek için HydroMax'ın bağımsız kuruluşlarca denetlenip
          onaylanan, rakiplerinden üstünlüğünü kanıtlamış HydroTechnic™
          yazılımını kullanıyoruz.
        </p>
        <h3>Neden HydroTechnic®?</h3>
        <p>
          HydroTechnic™ rakiplerinden çok daha efektif ve dolayısıyla ekonomik
          sonuçlar çıkartan üstün bir yazılımdır.
        </p>
        <NavLink className="nav-link fs-3 p-0 text-emin" to="/nedenbiz">
          Daha fazla detay için buraya basın!
        </NavLink>
      </div>
      <hr />
      <div
        className="bg-light clearfix overflow-hidden"
        style={{
          borderRadius: "30px",
          padding: "10px",
          maxWidth: "92vw",
        }}
      >
        <img
          src={HydroTechnicPic2}
          className="float-md-end m-3"
          alt="Caption from the software: HydroTechnic"
          height="300vh"
        />
        <h3>Projenizi hazırlamak için hangi veriler gerekli?</h3>
        <ul style={{ listStylePosition: "inside" }}>
          <li>Projenin Konumu (Tasarım Yağış miktarının belirlenmesi için)</li>
          <li>Çatı Planları</li>
          <li>Kat Planları (Borulama güzergahının kontrolü için)</li>
          <li>Mekanik Projeler (Çakışmaları engellemek için)</li>
          <li>Kesit ve Görünüşler</li>
          <li>Kanalizasyon Bağlantıları</li>
          <li>Yağmur Suyu Hasat / Uzaklaştırma Gereksinimleri</li>
          <li>Oluk Profili (Uyumluluk kontrolleri için)</li>
          Sistem tasarımı, fiyatlandırma ve diğer detaylar için bizimle
          dilediğiniz zaman iletişime geçebilirsiniz
        </ul>
        <NavLink className="nav-link fs-3 p-0 text-emin" to="/iletisim">
          İletişim Bilgilerimiz için buraya basın!
        </NavLink>
      </div>
      <hr />
      <div
        className="bg-light clearfix overflow-hidden"
        style={{
          borderRadius: "30px",
          padding: "10px",
          maxWidth: "92vw",
        }}
      >
        <img
          src={Walmart2}
          className="float-md-start m-3"
          alt="Walmart Sifonik Referans"
          height="300vh"
        />
        <h3>Tekrar: Çözüm bizde</h3>
        <p>
          Karşılaştırma yapabilmek için fiyat teklifinizi hemen alın. İsterseniz
          sistem çözümü ve malzeme şeklinde, isterseniz işçilik dahil
          projelendirme ve fiyatlandırma hizmetimizden hemen şimdi faydalanmak
          için hemen bize ulaşın.
        </p>
        <NavLink className="nav-link fs-3 p-0 text-emin" to="/iletisim">
          İletişim Bilgilerimiz için buraya basın!
        </NavLink>
      </div>
    </main>
  );
};

export default SystemDesign;
