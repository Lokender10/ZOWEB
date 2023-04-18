import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { SiAnaconda } from "react-icons/si";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";
import zobox from "../../assets/zobox.png";
import Feature from "../features/Features";
import { Link } from "react-router-dom";


import "./Navbar.css";
import { Helmet } from "react-helmet-async";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const top =() => {
    window.scrollTo(0,0);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="navbar ">
         <Helmet>
            <title>Zobox || SASTE MOBILE KA ADDA</title>
            <meta name="description" content="Zobox || SASTE MOBILE KA ADDAt" />
        </Helmet>
      <div className="logo">
       <Link to="/home"> 
      <img src={zobox} onClick={top} height="70x"/>
      </Link>
        <div className="logo-text">
         
        </div>
      </div>
      <menu>
        <ul
          className="nav-links"
          id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}
        >

          <li>
          <Link class="nav-link" to="/about" onClick={top}>
            About Us
            </Link>
          </li>
          <li>
          <Link class="nav-link" to="/BecomePartner" onClick={top}>
            Partners
            </Link>
          </li>
          <li>
          <Link class="nav-link" to="/Testimonial" onClick={top}>
            Testimonial
            </Link>
          </li>
          <li>
          <Link class="nav-link" to="/contact" onClick={top}>
            Contact Us
            </Link>
          </li>
          <li>
          <Link class="nav-link" to="/Blog" onClick={top}>
            Blog
            </Link>
          </li>

          {/* <li>
            <a href="#" className="btn btn-dark">
              Get Started
            </a>
          </li> */}
          <li className="nav-btn">
            <Button text={"Shop Now"} btnClass={"btn-dark"} href={"http://mobile-n-you.surge.sh/category#"} />
          </li>


        </ul>
      </menu>
      <div className="menu-icons" onClick={toggleMenu}>
        {showMenu ? (
          <RiCloseLine color="#fff" size={30} />
        ) : (
          <AiOutlineBars color="#fff" size={27} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
