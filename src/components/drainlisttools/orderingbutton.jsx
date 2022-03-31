import React from "react";
import ascendingicon from "../svg/ascendingicon.svg";
import descendingicon from "../svg/descendingicon.svg";

const OrderingIcon = (props) => {
  let imgSrc = props.order === "asc" ? ascendingicon : descendingicon;
  return (
    <img
      src={imgSrc}
      alt="Ordering Button"
      width="15em"
      className="mx-0 mb-1"
    />
  );
};

export default OrderingIcon;
