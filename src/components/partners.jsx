import React, { Component } from "react";
import DrainPartnerPic from "../images/suzgecpartner.png";
import PipePartnerPic from "../images/borupartner.png";
import ScrollToTopOnMount from "./scrolltotoponmount";

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
              alt="Sifonik Süzgeç Partneri"
              width="20%"
              className="mx-auto"
            />
            <p style={{ fontSize: "3vh", color: "black" }}>Süzgeçler</p>
            <div className="mx-auto">
              <img
                src="http://www.hydromax.com/cms/images/products/terrace_drain_c.jpg"
                alt="HydroMax Sifonik Süzgeçleri"
                width="20%"
                className="my-2 mx-3"
              />
              <img
                src="http://www.hydromax.com/cms/images/products/stainless_steel_drain_c.jpg"
                alt="HydroMax Sifonik Süzgeçleri"
                width="20%"
                className="my-2 mx-3"
              />
              <img
                src="http://www.hydromax.com/cms/images/products/pvc_overflow_c.jpg"
                alt="HydroMax Sifonik Süzgeçleri"
                width="20%"
                className="my-2 mx-3"
              />
            </div>
            <p style={{ fontSize: "3vh", color: "black" }}>
              Emin Sifonik HydroMax Ürünlerinin Türkiye Distribütörüdür
            </p>
            <p
              style={{ fontSize: "3vh", color: "black", marginBottom: "-10%" }}
            >
              Sifonik Sistemlerde en iyiye ulaşmak için HydroMax süzgeçleri
              kullanıyoruz
            </p>
            <img
              src="http://www.hydromax.com/images/logo.png"
              alt="HydroMax Sifonik Logosu"
              width="80%"
              className="mx-auto my-0 img-fluid"
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
              alt="Boru Partneri"
              width="20%"
              className="mx-auto img-fluid"
            />
            <p style={{ fontSize: "3vh", color: "black" }}>
              Boru ve Fittingsler:
            </p>
            <img
              src="https://coescompany.com/eng/images/2017/01/26/slideiniziale.jpg"
              alt="Coes Boruları"
              width="60%"
              className="my-2 mx-auto img-fluid"
            />
            <p style={{ fontSize: "3vh", color: "black" }}>
              Uyguladığımız sistemlerin güvenliğinden emin olmak için HDPE
              borularda dünya Lideri Coes ürünleri kullanıyoruz
            </p>
            <img
              src="http://coescompany.com/eng/images/2020/03/09/topnews2.png"
              alt="Coes Company Logo"
              width="60%"
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
