import React, { Component } from "react";
import LazyImage from "./lazyimage";

const CarouselInner = (props) => {
  return (
    <div class="carousel-item active">
      <LazyImage src={props.src} />
    </div>
  );
};

export default CarouselInner;
