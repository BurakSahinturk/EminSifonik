import React, { Component } from "react";

const WhySiphonic = () => {
  return (
    <div className="container-fluid">
      <h2 className="text-center">Neden Sifonik?</h2>
      <div className="row">
        <div className="col-lg text-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VeBLkxgxuDc?rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-lg text-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5O0EDaZV8XE?rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default WhySiphonic;
