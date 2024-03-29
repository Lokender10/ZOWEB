import React from "react";
import { Helmet } from "react-helmet-async";
import "./Howwork.css";


const Howwork = ({ icon, heading, text }) => {
  return (
    <div className="howwork">
          <Helmet>
            <title>Zobox || SASTE MOBILE KA ADDA</title>
            <meta name="description" content={text.slice(0,50)} />
        </Helmet>
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
