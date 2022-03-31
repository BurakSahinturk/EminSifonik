import React from "react";
import { NavLink } from "react-router-dom";
import Drain3Pic from "../../images/drain.jpg";

const HomeWhyUs = () => {
  return (
    <div className="overlay-container w-100 border border-white col-sm text-white">
      <img
        src={Drain3Pic}
        alt="Sifonik Yağmur Suyu Süzgeci"
        className="img-fluid w-100"
      />
      <div className="overlay-text">Neden Biz?</div>
      <div className="overlay">
        <NavLink className="nav-link overlay" to="/nedenbiz"></NavLink>
      </div>
    </div>
  );
};

export default HomeWhyUs;
