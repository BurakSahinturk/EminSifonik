import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const OurServices = () => {
  return (
    <div className="container">
      <div className="row m-0">
        <div className="col-sm p-0 border border-white">
          <div className="overlay-container">
            <img
              src="/images/services/terrace_drain.jpg"
              alt="Teras Süzgeci"
              className="img-fluid w-100"
            />
            <div className="overlay">
              <NavLink className="nav-link overlay" to="/suzgecler">
                <div className="text">Sifonik Süzgeçler</div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-sm p-0 border border-white">
          <div className="overlay-container">
            <img
              src="/images/services/hydrotechnic.jpg"
              alt="HydroTechnic"
              className="img-fluid w-100"
            />
            <div className="overlay">
              <NavLink className="nav-link overlay" to="/sistemcozumu">
                <div className="text">Sifonik Sistem Çözümü</div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-sm p-0 border border-white">
          <div className="overlay-container">
            <img
              src="/images/services/uygulama.jpg"
              alt="Uygulama"
              className="img-fluid w-100"
            />
            <div className="overlay">
              <NavLink className="nav-link overlay" to="/uygulama">
                <div className="text">Uygulama</div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
