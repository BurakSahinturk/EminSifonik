import React, { Component } from "react";
import DrainPic from "../images/stainless_steel_drain_c.png";
import Drain2Pic from "../images/drain_in_water.png";
import Drain3Pic from "../images/125_cropped.png";
import { NavLink } from "react-router-dom";

const HomeDrains = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <NavLink className="nav-link" to="suzgecler">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={DrainPic}
              className="d-block mx-auto my-auto"
              alt="Sifonik Yağmur Suyu Süzgeç"
            />
          </div>
          <div className="carousel-item">
            <img
              src={Drain2Pic}
              className="d-block mx-auto my-auto w-100"
              alt="Sifonik Yağmur Suyu Süzgeç"
            />
          </div>
          <div className="carousel-item">
            <img
              src={Drain3Pic}
              className="d-block mx-auto my-auto w-100"
              alt="Sifonik Yağmur Suyu Süzgeç"
            />
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default HomeDrains;
