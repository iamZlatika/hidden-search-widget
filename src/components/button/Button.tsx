import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = () => {
  return (
    <button className="btn">
      <FontAwesomeIcon icon={faSearch} />
    </button>
  );
};

export default Button;
