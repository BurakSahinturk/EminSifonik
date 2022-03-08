import React, { Component } from "react";

const Partners = () => {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col bg-light m-5 p-3 d-flex flex-column">
          <a
            href="http://www.hydromax.com/"
            target="_blank"
            className="text-decoration-none"
          >
            <img
              src="/images/suzgecpartner.png"
              alt="Süzgeç Partneri"
              width="200 px"
              className="mx-auto"
            />
            <p className="caro-text text-decoration-none">"Süzgeçler</p>
            <img
              src="http://www.hydromax.com/cms/images/products/terrace_drain_c.jpg"
              alt="HydroMax Süzgeçleri"
              height="100 px"
              className="my-2 mx-auto"
            />
            <p className="caro-text">
              Emin Sifonik HydroMax Ürünlerinin Türkiye Distribütörüdür
            </p>
            <p className="caro-text">
              Sifonik Sistemlerde en iyiye ulaşfmak için HydroMax süzgeçleri
              kullanıyoruz
            </p>
            <img
              src="http://www.hydromax.com/images/logo.png"
              alt="HydroMax Logosu"
              width="370 px"
            />
          </a>
        </div>
        <div className="col bg-light m-5 p-3 d-flex flex-column">
          <a
            href="http://coescompany.com/eng"
            target="_blank"
            className="text-decoration-none"
          >
            <img
              src="/images/borupartner.png"
              alt="Süzgeç Partneri"
              width="200 px"
              className="mx-auto"
            />
            <p className="caro-text">Boru ve Fittingsler:</p>
            <img
              src="https://coescompany.com/eng/images/2017/01/26/slideiniziale.jpg"
              alt="Coes Boruları"
              width="370 px"
              className="my-2 mx-auto"
            />
            <p className="caro-text">
              Uyguladığımız sistemlerin güvenliğinden emin olmak için PE
              borularda dünya Lideri Coes ürünleri kullanıyoruz"
            </p>
            <img
              src="http://coescompany.com/eng/images/2020/03/09/topnews2.png"
              alt="Coes Logo"
              width="370 px"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partners;
