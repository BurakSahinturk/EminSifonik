import React, { Component } from "react";

const CarouselIndicator = (props) => {
  return (
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={props.id}
      aria-label={"Slide" + ++props.id}
    ></button>
  );
};

export default CarouselIndicator;
