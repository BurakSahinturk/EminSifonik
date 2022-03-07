import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const HomeAbout = () => {
  return (
    <div className="overlay-container w-100 border border-white col-sm text-white">
      <img src="/images/whoarewe.png" alt="" className="img-fluid w-100" />
      <div className="overlay">
        <NavLink className="nav-link overlay" to="/hakkimizda">
          <div className="overlay-text">Biz kimiz?</div>
        </NavLink>
      </div>
    </div>
  );
};

export default HomeAbout;
