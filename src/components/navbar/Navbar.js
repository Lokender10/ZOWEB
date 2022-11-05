import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { SiAnaconda } from "react-icons/si";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";
import zobox from "../../assets/zobox.png";
import Feature from "../features/Features"
import { BrowserRouter ,Link ,  Route, Routes} from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="navbar ">
    
      <div className="logo">
      <img src={zobox} height="70x"/>
        <div className="logo-text">
         
        </div>
      </div>
      <menu>
        <ul
          className="nav-links"
          id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}
        >

<BrowserRouter>
          <li>
          <Link class="nav-link" to="/feature">
            Abouts
            </Link>
          </li>
          <li>
            <a href="#">Partners</a>
          </li>
          <li>
            <a href="#features">Blog</a>
          </li>
          <li>
            <a href="#download">Download</a>
          </li>
          <li>
            <a href="#subscribe">Partners</a>
          </li>

          {/* <li>
            <a href="#" className="btn btn-dark">
              Get Started
            </a>
          </li> */}
          <li className="nav-btn">
            <Button text={"Shop Now"} btnClass={"btn-dark"} href={"#faq"} />
          </li>

              <Routes>
                        <Route path="/feature" component={Feature}/>
                      
              </Routes>
  </BrowserRouter>
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
