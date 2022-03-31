import React from "react";
import { NavLink } from "react-router-dom";
import ContactPic from "../svg/contacticon.svg";

const HomeContact = () => {
  return (
    <div className="overlay-container w-100 border border-white col-sm text-white">
      <img
        src={ContactPic}
        alt="Emin Sifonikle İletişime geçin"
        className="img-fluid w-100"
      />
      <div className="overlay-text text-emin">
        Fiyat Teklifi için bize ulaşın
      </div>
      <div className="overlay">
        <NavLink className="nav-link overlay" to="/iletisim"></NavLink>
      </div>
    </div>
  );
};

export default HomeContact;
