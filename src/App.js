import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar";

function App() {
  return (
    <div className="">
      <NavBar />

      <Outlet />
    </div>
  );
}

export default App;
