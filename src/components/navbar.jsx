import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import ESLogo from "./svg/eminsifoniklogo.svg";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" sticky="top">
      <div className="container-fluid">
        <Navbar.Brand href="#">
          <NavLink className="navbar-brand p-0 m-0" to="/">
            <img src={ESLogo} alt="Emin Sifonik Ana Sayfa" width="200px" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="vr d-none d-lg-block"></div>
          <Nav className="me-auto">
            <Nav.Link href="#">
              <NavLink className="nav-link py-0 my-0" to="/hakkimizda">
                Hakkımızda
              </NavLink>
            </Nav.Link>
            <div className="vr d-none d-lg-block"></div>
            <Nav.Link href="#">
              <NavLink className="nav-link py-0 my-0" to="/nedensifonik">
                Neden Sifonik
              </NavLink>
            </Nav.Link>
            <div className="vr d-none d-lg-block"></div>
            <Nav.Link href="#">
              <NavLink className="nav-link py-0 my-0" to="/nedenbiz">
                Neden Biz
              </NavLink>
            </Nav.Link>
            <div className="vr d-none d-lg-block"></div>
            <Nav.Link href="#">
              <NavLink className="nav-link py-0 my-0" to="/partnerlerimiz">
                Partnerlerimiz
              </NavLink>
            </Nav.Link>
            <div className="vr d-none d-lg-block"></div>
            <NavDropdown
              className="py-0 my-0"
              title="Hizmetlerimiz"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#">
                <NavLink className="dropdown-item" to="/suzgecler">
                  Süzgeçler
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                <NavLink className="dropdown-item" to="/projelendirme">
                  Sistem Tasarımı
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                <NavLink className="dropdown-item" to="/uygulama">
                  Uygulama
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <div className="vr d-none d-lg-block"></div>
            <Nav.Link href="#">
              <NavLink className="nav-link py-0 my-0" to="/iletisim">
                İletişim
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;
