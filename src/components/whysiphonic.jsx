import React, { Component } from "react";
import ScrollToTopOnMount from "./scrolltotoponmount";
import WhySiphonicAccordion from "./whysiphoniccomponents/whysiphonicaccordion";

const WhySiphonic = () => {
  return (
    <div className="container-fluid">
      <ScrollToTopOnMount />
      <h2 className="text-center">
        Sifonik Sistem Nedir? Sifonik Sistem Faydaları Nelerdir? Nasıl Çalışır?
      </h2>
      <h3 className="text-center my-3">Sifonik Sistemin Faydaları</h3>
      <WhySiphonicAccordion />
      <h3 className="my-3">Sifonik Sistem Nasıl Çalışır?</h3>
      <div className="row my-3">
        <div className="col-lg-2"></div>
        <div
          className="col-lg text-center ratio ratio-4x3"
          style={{ maxHeight: "80vh" }}
        >
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vSMWDSU0dv0cIO0Z9EmVhdr36XcPJce0K8Xl1LmjUkNByAa9xlaou3bunlzU4jGQA/embed?start=true&loop=false&delayms=5000"
            frameBorder="0"
            allowFullScreen={true}
            mozllowfullscreen="true"
            webkitallowfullscreen="true"
          />
        </div>
        <div className="col-lg-2"></div>
      </div>
      <div className="row my-3">
        <div className="col-lg-1"></div>
        <div className="col-lg text-center ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/VeBLkxgxuDc?rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            className="d-flex"
          ></iframe>
        </div>
        <div className="col-lg-1" style={{ height: "30px" }}></div>
        <div className="col-lg text-center ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/5O0EDaZV8XE?rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            className="d-flex"
          ></iframe>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

export default WhySiphonic;
