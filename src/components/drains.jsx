import React, { Component } from "react";
import ScrollToTopOnMount from "./scrolltotoponmount";
import ImageCard from "./imagecard";
import img1 from "../images/drains/stainless_steel_drain_c.png";
import img2 from "../images/drains/terrace_drain_c.png";
import img3 from "../images/drains/balcony_outlet_1.png";
import img4 from "../images/drains/75PDSS029.png";
import img5 from "../images/drains/pvc_overflow_c.png";
import img6 from "../images/drains/125_cropped.png";
import img7 from "../images/drains/car_park_drain2.jpg";
import img8 from "../images/drains/hydromax_leafguard.png";

const Drains = () => {
  return (
    <div className="container-fluid text-center">
      <h2 className="mt-3">HydroMax® Sifonik Süzgeçleri</h2>
      <ScrollToTopOnMount />
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 p-3">
        <ImageCard
          src={img1}
          title="75mm Çelik Süzgeç"
          text="Küçük boyutlu ve düşük fiyatlı HydroMax®'ın favori süzgeci"
          size="230"
          min="1,5"
          max="25"
        />
        <ImageCard
          src={img2}
          title="50mm Süzgeç"
          text="Hem Estetik görünümlü hem de yüksek kaliteli, 
          rakiplerinin en verimli ürünleriyle yarışan, yürünür çatıların
          vazgeçilmez HydroMax® süzgeci"
          size="140"
          min="1,5"
          max="12"
        />
        <ImageCard
          src={img3}
          title="Balkon Süzgeci"
          text="Geri basma engelleyicili, alt katlarda da kullanılabilen, esnek
          çözümler sunan Hydromax®'ın inovatif çözümü"
          size="120"
          min="0"
          max="1,5"
        />
        <ImageCard
          src={img4}
          title="75mm Çelik Süzgeç"
          text="Teras çatılar için membran su yalıtımlarına uyumlu HydroMax® Süzgeci"
          size="270"
          min="1,5"
          max="25"
        />
        <ImageCard
          src={img5}
          title="Ø230mm Taşkan Süzgeci"
          text="Normal yağmur suyu akışını engellememesi için HydroMax®'ın özel
                olarak tasarladığı yüksek verimli taşkan süzgeci"
          size="230"
          min="1,5"
          max="25"
        />
        <ImageCard
          src={img6}
          title="125mm Çelik Süzgeç"
          text="HydroMax® tarafından ABD'nin kasırgaları için
                tasarlandı. Kasırgalara alışkın Güneydoğu Asya ve ABD Doğu
                Sahillerinde binlerce çatıda güvenle kullanılıyor"
          size="440"
          min="10"
          max="100"
        />
        <ImageCard
          src={img7}
          title="Otopark Süzgeci"
          text="Ağır yük kaldırmaya alışkın, her türlü açık alanda engel
                çıkarmadan çalışan HydroMax® Süzgeci"
          size="280"
          min="1,5"
          max="25"
        />
        <ImageCard
          src={img8}
          title="Çakıl Çatı Süzgeci"
          text="Çakıl kaplı yürünmeyen teras çatılarda en etkin çözümler sunan
                HydroMax® Süzgeci"
          size="280"
          min="1,5"
          max="25"
        />
      </div>
    </div>
  );
};

export default Drains;
