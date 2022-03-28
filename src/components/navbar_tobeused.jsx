import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { NavDropdown } from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import ESLogo from "./svg/eminsifoniklogo.svg";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect="true" expand="lg" bg="light" sticky="top">
      <Container>
        {/* <Navbar.Brand>
          <NavLink className="navbar-brand" to="/">
            <img src={ESLogo} alt="Emin Sifonik Ana Sayfa" width="200px" />
          </NavLink>
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/hakkimizda">
              Hakkımızda
            </Nav.Link>
            <Nav.Link as={NavLink} to="/nedensifonik">
              Neden Sifonik
            </Nav.Link>
            <Nav.Link as={NavLink} to="/nedenbiz">
              Neden Biz
            </Nav.Link>
            <Nav.Link as={NavLink} to="/partnerlerimiz">
              Partnerlerimiz
            </Nav.Link>

            {/* <NavDropdown title="Hizmetlerimiz" id="basic-nav-dropdown">
            <NavDropdown.Item>
                Süzgeçler

            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink className="dropdown-item" to="/projelendirme">
                Sistem Tasarımı

            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink className="dropdown-item" to="/uygulama">
                Uygulama
            </NavLink>
            </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link as={NavLink} to="/iletisim">
              İletişim
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
