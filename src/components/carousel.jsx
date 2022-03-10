import React, { Component } from "react";
import CarouselIndicator from "./carouselindicator";
import LazyImage from "./lazyimage";

const Carousel = (props) => {
  let fullSrcList = props.list.map((src) => props.dir + "/" + src);
  console.log(fullSrcList);
  let listFirstItem = fullSrcList[0];
  console.log(listFirstItem);
  let listRest = fullSrcList.slice(1);
  console.log(listRest);
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="" alt="" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
