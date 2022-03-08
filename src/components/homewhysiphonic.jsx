import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import TerracePic from "../images/terrace.jpg";

const HomeWhySiphonic = () => {
  return (
    <div className="overlay-container w-100 border border-white col-sm text-white">
      <img src={TerracePic} alt="" className="img-fluid" />
      <div className="overlay">
        <NavLink className="nav-link overlay" to="/nedensifonik">
          <div className="overlay-text">Neden Sifonik?</div>
        </NavLink>
      </div>
    </div>
  );
};

export default HomeWhySiphonic;
