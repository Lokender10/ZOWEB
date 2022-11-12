import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { SiAnaconda } from "react-icons/si";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";
import zobox from "../../assets/zobox.png";
import Feature from "../features/Features"
import { Link } from "react-router-dom";


import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="navbar ">
    
      <div className="logo">
       <Link to="/home"> 
      <img src={zobox} height="70x"/>
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
          <Link class="nav-link" to="/about">
            About Us
            </Link>
          </li>
          <li>
          <Link class="nav-link" to="/BecomePartner">
            Partners
            </Link>
          </li>
          <li>
          <Link class="nav-link" to="/Download">
            Downloads
            </Link>
          </li>
          <li>
          <Link class="nav-link" to="/Testimonial">
            Testimonial
            </Link>
          </li>
          <li>
          <Link class="nav-link" to="/about">
            Contact Us
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
