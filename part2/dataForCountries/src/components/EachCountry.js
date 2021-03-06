import React, { useState } from "react";
import Detail from "./detail";

const EachCountry = ({ countries }) => {
  const [show, setShow] = useState(false);
  const label = show ? "hide" : "show"

  const buttonClick = (event) => {
    setShow(!show);
    // console.log(show);
  };

  if (show === true) {
    return (
      <div>
        <Detail all={countries} />
        <button onClick={buttonClick}> {label} </button>
      </div>
    );
  } else {
    return (
      <div>
        {countries.name}
        <button onClick={buttonClick}>{label}</button>
      </div>
    );
  }
};

export default EachCountry;
