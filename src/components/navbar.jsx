import React, { Component } from "react";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import { NavLink } from "react-router-dom";
import ESLogo from "./svg/eminsifoniklogo.svg";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid" id="navbar">
        <NavLink className="navbar-brand" to="/">
          <img src={ESLogo} alt="Ana Sayfa" width="200px" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-lg-center">
            <div className="vr d-none d-md-block"></div>
            <li className="nav-item">
              <NavLink className="nav-link" to="/hakkimizda">
                Hakkımızda
              </NavLink>
            </li>
            <div className="vr d-none d-lg-block"></div>
            <li className="nav-item">
              <NavLink className="nav-link" to="/nedensifonik">
                Neden Sifonik
              </NavLink>
            </li>
            <div className="vr d-none d-lg-block"></div>
            <li className="nav-item">
              <NavLink className="nav-link" to="/nedenbiz">
                Neden Biz
              </NavLink>
            </li>
            <div className="vr d-none d-lg-block"></div>
            <li className="nav-item">
              <NavLink className="nav-link" to="/partnerlerimiz">
                Partnerlerimiz
              </NavLink>
            </li>
            <div className="vr d-none d-lg-block"></div>
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Hizmetlerimiz
              </div>
              <ul
                className="dropdown-menu bg-light"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <NavLink className="dropdown-item" to="/suzgecler">
                    Süzgeçler
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/projelendirme">
                    Sistem Tasarımı
                  </NavLink>
                </li>
                <li></li>
                <li>
                  <NavLink className="dropdown-item" to="/uygulama">
                    Uygulama
                  </NavLink>
                </li>
              </ul>
            </li>
            <div className="vr d-none d-lg-block"></div>
            <li className="nav-item">
              <NavLink className="nav-link" to="/iletisim">
                İletişim
              </NavLink>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Ara"
              aria-label="Ara"
            />
            <button className="btn btn-outline-success" type="submit">
              Ara
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
