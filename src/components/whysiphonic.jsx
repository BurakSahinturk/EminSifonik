import React, { Component } from "react";
import ScrollToTopOnMount from "./carousels/scrolltotoponmount";

const WhySiphonic = () => {
  return (
    <div className="container-fluid">
      <ScrollToTopOnMount />
      <h2 className="text-center">Neden Sifonik?</h2>
      <div className="row">
        <div className="col-lg text-center ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/VeBLkxgxuDc?rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            className="d-flex"
          ></iframe>
        </div>
        <div className="col-lg text-center ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/5O0EDaZV8XE?rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            className="d-flex"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default WhySiphonic;
