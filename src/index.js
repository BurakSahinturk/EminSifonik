import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/home";
import Contact from "./components/contact";
import AboutUs from "./components/aboutus";
import WhyUs from "./components/whyus";
import Partners from "./components/partners";
import WhySiphonic from "./components/whysiphonic";
import SystemDesign from "./components/systemdesign";
import Labor from "./components/labor";
import Drains from "./components/drains";
import DrainsTable from "./components/drainstable";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="hakkimizda" element={<AboutUs />} />
          <Route path="nedensifonik" element={<WhySiphonic />} />
          <Route path="nedenbiz" element={<WhyUs />} />
          <Route path="partnerlerimiz" element={<Partners />} />
          <Route path="suzgecler" element={<Drains />} />
          <Route path="suzgectablosu" element={<DrainsTable />} />
          <Route path="projelendirme" element={<SystemDesign />} />
          <Route path="uygulama" element={<Labor />} />
          <Route path="iletisim" element={<Contact />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Burada pek bir şey yok...</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
