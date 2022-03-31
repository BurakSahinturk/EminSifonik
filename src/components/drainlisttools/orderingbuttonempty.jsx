import React from "react";
import emptysendingicon from "../svg/emptysending.svg";

const EmptyOrderingIcon = (props) => {
  return (
    <img
      src={emptysendingicon}
      alt="Empty Ordering Button"
      width="15em"
      className="mx-0 mb-1"
    />
  );
};

export default EmptyOrderingIcon;
