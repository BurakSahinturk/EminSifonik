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
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
