import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import SearchBox from "./searchbox";
import ESLogo from "./svg/eminsifoniklogo.svg";
import { useState } from "react";

window.addEventListener("click", function (e) {
  if (window.innerWidth < 992) {
    if (e.target.id == !"navbarDropdown") {
      document.getElementById("navbarmainbtn").click();
    }
  }
});

const NavBar = () => {
  const [searchQuery] = useState("");
  let handleSearch = {};

  // document.getElementById.on("click", function () {
  //  document.getElementById(".navbar .collapse").collapse("hide");
  //});
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid" id="navbar">
        <NavLink className="navbar-brand" to="/">
          <img src={ESLogo} alt="Emin Sifonik Ana Sayfa" width="200px" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          id="navbarmainbtn"
          role="button"
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
          <SearchBox value={searchQuery} onChange={useState.handleSearch} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
