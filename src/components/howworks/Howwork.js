import React from "react";
import "./Howwork.css";


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
