import React, { Component } from "react";
import DrainPic from "../images/stainless_steel_drain_c.png";
import Drain2Pic from "../images/drain_in_water.png";
import Drain3Pic from "../images/125_cropped.png";

const HomeDrains = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={DrainPic} className="d-block mx-auto my-auto" alt="..." />
        </div>
        <div className="carousel-item">
          <img
            src={Drain2Pic}
            className="d-block mx-auto my-auto w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src={Drain3Pic}
            className="d-block mx-auto my-auto w-100"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};

export default HomeDrains;
