import React from "react";
import "./Howwork.css";
import { FaAccessibleIcon } from "react-icons/fa";
import { BsHexagon } from "react-icons/bs";

const Howwork = ({ icon, heading, text }) => {
  return (
    <div className="howwork">
      <div className="howwork-icon">
        {/* <BsHexagon color="#fc5412" size={55} /> */}
        <div className="inner-icon">{icon}</div>
      </div>

      <div className="howwork-text">
        <h3>{heading}</h3>
        <p className="u-text-small">{text}</p>
      </div>
    </div>
  );
};

export default Howwork;
