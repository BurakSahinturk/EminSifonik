import React from "react";
import Walmart1 from "../../images/hydrefs/Resim01.png";
import Walmart2 from "../../images/hydrefs/TDSCN0805.JPG";
import Walmart3 from "../../images/hydrefs/wal-mart_grand_haven,_mi_.jpg";

const WhyUsReferences = () => {
  return (
    <div
      style={{
        color: "white",
        backgroundColor: "#2aabe1",
        fontSize: "2.9vh",
        border: "4px solid white",
        borderRadius: "3vmin",
        height: "100%",
      }}
    >
      <h2 className="text-white text-center m-2" style={{ fontSize: "4.5vh" }}>
        <a
          href="http://www.hydromax.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none text-white"
        >
          HydroMax
        </a>
        ® Referansları
      </h2>
      <h3 style={{ fontSize: "3vh" }}>
        Dünyanın en büyük perakendecisi, $523.9 Milyar Dolar ile dünyanın en
        büyük cirosunun sahip şirketi
        <a
          href="https://fortune.com/global500/"
          target="_blank"
          rel="noopener noreferrer"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Fortune Dergisi Global 500 Listesi"
          className="text-decoration-none text-black"
        >
          *
        </a>
        , ve 2.3 milyon çalışanı ile dünyanın en büyük işvereni
        <a
          href="https://fortune.com/global500/"
          target="_blank"
          rel="noopener noreferrer"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Fortune Dergisi Global 500 Listesi"
          className="text-decoration-none text-black"
        >
          *
        </a>
        <a
          href="https://tr.wikipedia.org/wiki/D%C3%BCnyan%C4%B1n_en_b%C3%BCy%C3%BCk_i%C5%9Fverenleri_listesi"
          target="_blank"
          rel="noopener noreferrer"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Vikipedi Dünyanın en büyük işverenleri listesi"
          className="text-decoration-none text-black"
        >
          *
        </a>{" "}
        ABD'li perakende devi Walmart
        <a
          href="https://tr.wikipedia.org/wiki/Walmart"
          target="_blank"
          rel="noopener noreferrer"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Vikipedi Walmart"
          className="text-decoration-none text-black"
        >
          *
        </a>{" "}
        Sadece HydroMax® kullanıyor.
      </h3>
      <div>
        Walmart'tan Mimar Todd Franke'nin yaptığı resmi açıklama:
        <p
          className="fst-italic"
          style={{ textIndent: "2em", marginBottom: "0px" }}
        >
          "Walmart uses HydroMax siphonic roof drains and continues to use
          HydroMax roof drains as a part of our building prototype construction
          documents. In general, Walmart just states the obvious and let’s
          others draw their conclusions, which would be if the World’s largest
          retailer uses this system it must work."
        </p>
        <p style={{ textIndent: "2em", marginTop: "0px" }}>
          "Walmart tip mağaza inşaat projesinde HydroMax süzgeçlerini kullanıyor
          ve kullanmaya devam edecek. Genel olarak, bariz olan şu gerçeğe işaret
          etmek isteriz ki: Dünyanın en büyük perakendecisi bu sistemi
          kullanıyorsa, HydroMax işe yarıyordur."
        </p>
      </div>
      <div className="container-fluid d-flex justify-content-around mb-3">
        <img
          src={Walmart1}
          alt="Wal-mart Store"
          className="img-fluid"
          width="30%"
        />
        <img
          src={Walmart2}
          alt="Wal-mart Store"
          className="img-fluid"
          width="30%"
        />
        <img
          src={Walmart3}
          alt="Wal-mart Store"
          className="img-fluid"
          width="30%"
        />
      </div>
      <p
        style={{
          color: "white",
          fontSize: "2.9vh",
        }}
      >
        HydroMax®'ın kullanıldığı diğer binlerce yapıdan örnekleri görmek için{" "}
        <a
          href="http://www.hydromax.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          {" "}
          HydroMax
        </a>
        ®'ın internet sitesini ziyaret edebilirsiniz
      </p>
    </div>
  );
};

export default WhyUsReferences;
