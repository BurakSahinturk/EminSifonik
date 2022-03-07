import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar";
import HomePage from "./components/home";
import Contact from "./components/contact";
import AboutUs from "./components/aboutus";
import WhyUs from "./components/whyus";
import Partners from "./components/partners";
import WhySiphonic from "./components/whysiphonic";

function App() {
  return (
    <div className="">
      <NavBar />

      <Outlet />
    </div>
  );
}

export default App;
