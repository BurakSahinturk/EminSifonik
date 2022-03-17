import React, { Component } from "react";
import ScrollToTopOnMount from "./scrolltotoponmount";
import WhyUsDrains from "./whyuscomponents/drains";
import WhyUsHydrotechnic from "./whyuscomponents/hydrotechnic";
import WhyUsReferences from "./whyuscomponents/references";
import WhyUsEmin from "./whyuscomponents/whyemin";

const WhyUs = () => {
  return (
    <div className="container-fluid g-3 my-1">
      <ScrollToTopOnMount />
      <div className="row p-0 ">
        <div className="col-lg-10">
          <div className="row">
            <WhyUsReferences />
          </div>
          <div className="row">
            <div className="col-lg-4 p-0">
              <WhyUsDrains />
            </div>
            <div className="col-lg-8 p-0">
              <WhyUsHydrotechnic />
            </div>
          </div>
        </div>
        <div className="col-lg-2 p-0">
          <WhyUsEmin />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
