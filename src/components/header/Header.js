import React, { useEffect } from "react";
import "./Header.css";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";
import about from "../../assets/about.png";
import head from "../../assets/headimg.png";
import head1 from "../../assets/headimg1.png";
import { BsMouse } from "react-icons/bs";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="header">
      <div className="header">
        <div className="header-left" data-aos="fade-right">
          <h1>
            <span>Zobox Unfolds Your Business Potential by SuperEasy App Zobiz</span>
            <span>Just One Click Away From Your Dream Income</span>
            {/* <span>B2B Part</span> */}
          </h1>
          {/* <p className="u-text-small">
            Zobox is a Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Obcaecati ea aliquam sit nemo nisi! Nesciunt quis illum id qui
            et!
          </p>
          <div className="header-cta">
            <Button className="btn1" text={"Get Started"} btnClass={"btn-dark"} href={"#"} />
            <Button text={"How It Works"} btnClass={"btn-light"} href={"#"} />
          </div> */}
        </div>
        <div className="header-right" data-aos="fade-left">
          <img src={head} alt="phone" />
        </div>
      </div>
      {/* <div className="floating-icon">
        <a href="#features">
          <BsMouse color="#fff" size={25} className="mouse" />
        </a>
      </div> */}
    </section>
  );
};

export default Header;
