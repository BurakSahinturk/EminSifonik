import React, { Component } from "react";
import DrainPic from "../images/stainless_steel_drain_c.png";
import Drain2Pic from "../images/drain_in_water.png";

const HomeDrains = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md my-2 p-2">
          <img src={DrainPic} alt="HydroMax® Süzgeç" className="img-fluid" />
        </div>
        <div className="col-md p-2 my-auto">
          <img src={Drain2Pic} alt="HydroMax® Süzgeç" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default HomeDrains;
