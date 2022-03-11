import React, { Component } from "react";

const ImageCard = (props) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={props.src}
          className="card-img-top my-auto"
          alt={props.title}
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="mb-0">
            {"Min: " + props.min + "lt/sn Max: " + props.max + "lt/sn"}
          </p>
          <p>Boyut: Ø{props.size} mm</p>
          <p className="card-text">{props.text}</p>
        </div>
        <div className="card-footer">
          <small className="">Çizim Linki</small>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
