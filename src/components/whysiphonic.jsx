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
            src="https://www.youtube.com/embed/VeBLkxgxuDc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
        <div className="col-lg text-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5O0EDaZV8XE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default WhySiphonic;
