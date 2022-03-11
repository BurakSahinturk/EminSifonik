import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ContactPic from "../images/contact.png";

const HomeContact = () => {
  return (
    <div className="overlay-container w-100 border border-white col-sm text-white">
      <img src={ContactPic} alt="" className="img-fluid w-100" />
      <div className="overlay">
        <NavLink className="nav-link overlay" to="/iletisim">
          <div className="overlay-text">Fiyat Teklifi için bize ulaşın</div>
        </NavLink>
      </div>
    </div>
  );
};

export default HomeContact;