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
            <Link to="/about">&bull; About</Link>
            <Link to="/BecomePartner">&bull; Partners</Link>
            <Link to="/Testimonial">&bull; Testimonial</Link>
            <Link to="/Blog">&bull; Blog</Link>
          </div>
        </div>
        <div className="footer-box">
          <h4>Support</h4>
          <div className="footer-links">
            <Link to="/contact">&bull; Support</Link>
            <Link to="/about">&bull; About</Link>
            <Link to="/Download">&bull; Download</Link>
          </div>
        </div>
        <div className="footer-box">
          <h4>Contact Us</h4>
          <div className="footer-contact u-text-small">
            <p>
              <FaMapMarkerAlt /> &nbsp; <a href="https://goo.gl/maps/L39SCjVG8wQmsx2T7" target="_blank">Address: 6/77, 4th Floor, WEA Karol Bagh Ajmal Khan Road, New Delhi-110005.</a>
            </p>
            <p>
              <FaPhoneAlt /> &nbsp; Phone: +1230 123 1231.
            </p>
            <p>
              <FaEnvelope /> &nbsp; Email: hello@zobox.in
            </p>
          </div>
        </div>
        <div className="footer-box">
          <img src={zobox} alt="logo" className="zobizlogo"/>
        </div>
      </div>
      <div className="copy">
      <p className="copyright">&copy; Copyright @ 2023 Zobox.in</p>
      </div>
      <Helmet>
            <title>Zobox || SASTE MOBILE KA ADDA</title>
            <meta name="description" content="Buy Refurbished Mobile Phones online at zobox" />
        </Helmet>
    </section>
  );
};

export default Footer;
