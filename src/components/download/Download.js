import React, { useEffect } from "react";
import "./Download.css";
import { FaApple, FaWindows } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import { IconContext } from "react-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";

const Download = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="download">
      <Helmet>
            <title>Zobox || SASTE MOBILE KA ADDA</title>
            <meta name="description" content="Our apps are available for download on all stores." />
        </Helmet>
      <div className="container download" data-aos="fade-up">
        <h2>Zobiz download</h2>
        <p className="u-text-small">
          Our apps are available for download on all stores.
        </p>
        <IconContext.Provider value={{ size: "15" }}>
          <div className="download-icons">
            <div className="download-icon">
              <FaApple /> <p>ios</p>
            </div>
            <div className="download-icon">
              <GrAndroid /> <p>Android</p>
            </div>
            {/* <div className="download-icon">
              <FaWindows /> <p>Windows</p>
            </div> */}
          </div>
        </IconContext.Provider>
      </div>
    </section>
  );
};

export default Download;
