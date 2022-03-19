import React, { Component } from "react";
import ScrollToTopOnMount from "./scrolltotoponmount";

const WhySiphonic = () => {
  return (
    <div className="container-fluid">
      <ScrollToTopOnMount />
      <h2 className="text-center">Sifonik Sistem Nedir? Nasıl Çalışır?</h2>
      <div className="row my-3">
        <div className="col-lg-2"></div>
        <div className="col-lg-8 text-center">
          <iframe
            src="https://onedrive.live.com/embed?cid=06CD78FE24EE5287&amp;resid=6CD78FE24EE5287%21214&amp;authkey=AIb22oGmPWUHyAA&amp;em=2&amp;wdAr=1.3333333333333333"
            width="640px"
            height="480px"
            frameBorder="0"
          >
            Bu{" "}
            <a target="_blank" href="https://office.com/webapps">
              Office
            </a>{" "}
            tarafından sağlanan eklenmiş bir{" "}
            <a target="_blank" href="https://office.com">
              Microsoft Office
            </a>{" "}
            belgesidir.
          </iframe>
        </div>
        <div className="col-lg-2"></div>
      </div>
      <div className="row">
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
