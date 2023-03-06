import React from "react";
import "./Footer.css";
import zobox from "../../assets/zobox.png";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container footer">
        <div className="footer-box">
          <h4>Useful Links</h4>
          <div className="footer-links">
            <Link to="/Privacy">&bull; Privacy Policy</Link>
            <a href="#">&bull; About</a>
            <a href="#">&bull; Learn</a>
            <a href="#">&bull; Hosting</a>
            <a href="#">&bull; Messenger</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Support</h4>
          <div className="footer-links">
            <a href="#">&bull; Support</a>
            <a href="#">&bull; About</a>
            <a href="#">&bull; Learn</a>
            <a href="#">&bull; Hosting</a>
            <a href="#">&bull; Messenger</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Contact Us</h4>
          <div className="footer-contact u-text-small">
            <p>
              <FaMapMarkerAlt /> &nbsp; Address: New Delhi Karol Bagh.
            </p>
            <p>
              <FaPhoneAlt /> &nbsp; Phone: +1230 123 1231.
            </p>
            <p>
              <FaFax /> &nbsp; Fax: +12342762178
            </p>
            <p>
              <FaEnvelope /> &nbsp; Email: zobox.in.com
            </p>
          </div>
        </div>
        <div className="footer-box">
          <img src={zobox} alt="logo" className="zobizlogo"/>
        </div>
      </div>
      <div className="copy">
      <p className="copyright">&copy; Copyright 2021 Zobox.in</p>
      </div>
      <Helmet>
            <title>Zobox || SASTE MOBILE KA ADDA</title>
            <meta name="description" content="Buy Refurbished Mobile Phones online at zobox" />
        </Helmet>
    </section>
  );
};

export default Footer;
