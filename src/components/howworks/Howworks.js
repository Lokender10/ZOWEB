import React, { useEffect } from "react";
import "./Howworks.css";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import about from "../../assets/about.png";
import Feature from "./Howwork";
import { howworkList} from "./data";


import AOS from "aos";
import "aos/dist/aos.css";

const Howworks = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="howworks">
      <div className=" howworks">
        <div className="title" data-aos="fade-up">
          <h2>How It Works</h2>
          {/* <p className="u-text-small">
            SocialX app has Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sequi labore, harum officiis error quia cupiditate?
          </p> */}
        </div>
        <div className="howworks-content">
          <div className="howworks-right" data-aos="fade-left">
            {howworkList.map((feature) => (
              <Feature
                // key={feature.id}
                // icon={feature.icon}
                // heading={feature.heading}
                text={feature.text}
              />
            ))}
          </div>
          
          <div className="howworks-left" data-aos="fade-right">
            <img src={about} alt="phone" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Howworks;