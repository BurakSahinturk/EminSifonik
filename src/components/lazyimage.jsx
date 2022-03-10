import React, { Component } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const LazyImage = () => (
  <div>
    <LazyLoadImage
      alt=""
      height="auto"
      src="../images/ist/26fb8829-40d1-41c3-ba1b-44b8e416de66.JPG"
      width="100px"
    />
  </div>
);

export default LazyImage;
