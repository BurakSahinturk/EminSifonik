import React from "react";
import ScrollToTopOnMount from "./scrolltotoponmount";
import WhySiphonicAccordion from "./whysiphoniccomponents/whysiphonicaccordion";

const WhySiphonic = () => {
  return (
    <div className="container-fluid">
      <ScrollToTopOnMount />
      <h2 className="text-center">
        Sifonik Sistem Nedir? Sifonik Sistem Faydaları Nelerdir? Nasıl Çalışır?
      </h2>
      <h3 className="text-center my-3">Sifonik Sistemin Faydaları</h3>
      <WhySiphonicAccordion />
    </div>
  );
};

export default WhySiphonic;
