import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import WhoAreWePic from "../images/mahmut_sahinturk.jpeg";

const HomeAbout = () => {
  return (
    <div className="overlay-container w-100 border border-white col-sm text-white">
      <img
        src={WhoAreWePic}
        alt="Emin Sifonik Kimdir Mahmut Şahintürk"
        className="img-fluid w-100"
      />
      <div className="overlay-text">Biz kimiz?</div>
      <div className="overlay">
        <NavLink className="nav-link overlay" to="/hakkimizda"></NavLink>
      </div>
    </div>
  );
};

export default HomeAbout;
