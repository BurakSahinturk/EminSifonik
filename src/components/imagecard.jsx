import React from "react";
// import img1 from "../images/drains/stainless_steel_drain_c.png";
// import img2 from "../images/drains/terrace_drain_c.png";
// import img3 from "../images/drains/balcony_outlet_1.png";
// import img4 from "../images/drains/75PDSS029.png";
// import img5 from "../images/drains/pvc_overflow_c.png";
// import img6 from "../images/drains/125_cropped.png";
// import img7 from "../images/drains/car_park_drain2.jpg";
// import img8 from "../images/drains/hydromax_leafguard.png";

const ImageCard = (props) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={props.src}
          className="card-img-top my-auto"
          alt={"Sifonik Yağmur Suyu süzgeç" + props.title}
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="mb-0" style={{ fontSize: "smaller" }}>
            {"Min: " + props.min + "lt/sn Max: " + props.max + "lt/sn"}
          </p>
          <p style={{ fontSize: "smaller" }}>Boyut: Ø{props.size} mm</p>
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
