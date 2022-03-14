import React, { Component } from "react";
import DrainPartnerPic from "../images/suzgecpartner.png";
import PipePartnerPic from "../images/borupartner.png";
import ScrollToTopOnMount from "./carousels/scrolltotoponmount";

const Partners = () => {
  return (
    <div className="container-fluid">
      <ScrollToTopOnMount />
      <div className="row text-center">
        <div className="col-sm"></div>
        <div className="col-sm-5 bg-light my-5 p-3">
          <a
            href="http://www.hydromax.com/"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none d-flex flex-column"
          >
            <img
              src={DrainPartnerPic}
              alt="Süzgeç Partneri"
              width="200 px"
              className="mx-auto"
            />
            <p className="caro-text text-decoration-none">Süzgeçler</p>
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
              Sifonik Sistemlerde en iyiye ulaşmak için HydroMax süzgeçleri
              kullanıyoruz
            </p>
            <img
              src="http://www.hydromax.com/images/logo.png"
              alt="HydroMax Logosu"
              width="370 px"
              className="mx-auto img-fluid"
            />
          </a>
        </div>
        <div className="col-sm"></div>
        <div className="col-sm-5 bg-light my-5 p-3">
          <a
            href="http://coescompany.com/eng"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none img-fluid d-flex flex-column"
          >
            <img
              src={PipePartnerPic}
              alt="Süzgeç Partneri"
              width="200 px"
              className="mx-auto img-fluid"
            />
            <p className="caro-text">Boru ve Fittingsler:</p>
            <img
              src="https://coescompany.com/eng/images/2017/01/26/slideiniziale.jpg"
              alt="Coes Boruları"
              width="370 px"
              className="my-2 mx-auto img-fluid"
            />
            <p className="caro-text">
              Uyguladığımız sistemlerin güvenliğinden emin olmak için HDPE
              borularda dünya Lideri Coes ürünleri kullanıyoruz
            </p>
            <img
              src="http://coescompany.com/eng/images/2020/03/09/topnews2.png"
              alt="Coes Logo"
              width="370 px"
              className="mx-auto img-fluid"
            />
          </a>
        </div>
        <div className="col-sm"></div>
      </div>
    </div>
  );
};

export default Partners;
