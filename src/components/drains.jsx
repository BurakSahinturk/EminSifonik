import React, { Component } from "react";
import ImageCard from "./imagecard";

const Drains = () => {
  return (
    <div className="container-fluid text-center">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 p-3">
        <ImageCard
          src="http://www.hydromax.com/cms/images/products/stainless_steel_drain_c.jpg"
          title="75mm Çelik Süzgeçler"
          text="25 lt/sn yüklere kadar etkin sonuçlar veren; piyasada eşi
                benzeri bulunmayan; yüksek verimli, küçük boyutlu ve düşük
                maliyetli HydroMax®'ın favori süzgeci"
        />
        <ImageCard
          src="http://www.hydromax.com/cms/images/products/terrace_drain_c.jpg"
          title="50mm Süzgeç"
          text="Hem Estetik görünümlü hem de yüksek kaliteli, 12 lt/sn debi
          kapasitesiyle yapı estetiğini bozmayan ve buna rağmen
          rakiplerinin en verimli ürünleriyle yarışan, yürünür çatıların
          vazgeçilmez HydroMax® süzgeci"
        />

        <ImageCard
          src="http://www.hydromax.com/cms/images/products/balcony_outlet_1.jpg"
          title="Balkon Süzgeci"
          text="Geri basma engelleyicili, alt katlarda da kullanılabilen, esnek
          çözümler sunan Hydromax®'ın inovatif çözümü"
        />

        <ImageCard
          src="http://www.hydromax.com/cms/images/products/pvc_overflow_c.jpg"
          title="Taşkan Süzgeci"
          text="Normal yağmur suyu akışını engellememesi için HydroMax®'ın özel
                olarak tasarladığı bu özeliğiyle piyasada eşi bulunmayan yüksek
                verimli taşkan süzgeci"
        />

        <ImageCard
          src="http://www.hydromax.com/cms/images/products/125_cropped.jpg"
          title="125mm Çelik Süzgeç"
          text="100 lt/sn gücüyle HydroMax® tarafından ABD'nin kasırgaları için
                tasarlandı. Kasırgalara alışkın Güneydoğu Asya ve ABD Doğu
                Sahillerinde binlerce çatıda güvenle kullanılıyor"
        />

        <ImageCard
          src="http://www.hydromax.com/cms/images/car_park_drain2.jpg"
          text="Ağır yük kaldırmaya alışkın, her türlü açık alanda engel
                çıkarmadan çalışan HydroMax® Süzgeci"
        />

        <ImageCard
          src="http://www.hydromax.com/cms/images/products/hydromax_leafguard.jpg"
          title="Çakıl Çatı Süzgeci"
          text="Çakıl kaplı yürünmeyen teras çatılarda en etkin çözümler sunan
                HydroMax® Süzgeci"
        />
      </div>
    </div>
  );
};

export default Drains;
