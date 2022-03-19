import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import TerracePic from "../images/terrace.jpg";

const HomeWhySiphonic = () => {
  return (
    <div className="overlay-container w-100 border border-white col-sm text-white">
      <img
        src={TerracePic}
        alt="Sifonik Yağmur Suyu Süzgeci"
        className="img-fluid w-100"
      />
      <div className="overlay-text">Neden Sifonik?</div>
      <div className="overlay">
        <NavLink className="nav-link overlay" to="/nedensifonik"></NavLink>
      </div>
    </div>
  );
};

export default HomeWhySiphonic;
