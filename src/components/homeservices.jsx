import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import TerraceDrainPic from "../images/services/terrace_drain.jpg";
import HydroTechnicPic from "../images/services/hydrotechnic.jpg";
import UygulamaPic from "../images/services/uygulama.jpg";

const HomeServices = () => {
  return (
    <div className="container-fluid">
      <div className="row m-0">
        <div className="col-sm p-0 border border-white">
          <div className="overlay-container">
            <img
              src={TerraceDrainPic}
              alt="Sifonik Yağmursuyu Teras Süzgeci"
              className="img-fluid w-100"
            />
            <NavLink className="nav-link overlay" to="/suzgecler">
              <div className="overlay">
                <div className="text">Sifonik Süzgeçler</div>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="col-sm p-0 border border-white">
          <div className="overlay-container">
            <img
              src={HydroTechnicPic}
              alt="HydroTechnic"
              className="img-fluid w-100"
            />
            <NavLink className="nav-link overlay" to="/projelendirme">
              <div className="overlay">
                <div className="text">Sifonik Sistem Çözümü</div>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="col-sm p-0 border border-white">
          <div className="overlay-container">
            <img
              src={UygulamaPic}
              alt="Sifonik Uygulama"
              className="img-fluid w-100"
            />
            <NavLink className="nav-link overlay" to="/uygulama">
              <div className="overlay">
                <div className="text">Uygulama</div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
