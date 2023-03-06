import React, { useEffect } from "react";
import "./Features.css";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import about from "../../assets/about.png";
import Feature from "./Feature";
// import { FeatureList } from "../../allData/Aboutdata";


import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const Features = props => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="features">
      <div className=" features">
        <div className="title" data-aos="fade-up">
          <h2>{props.title}</h2>
          {/* <p className="u-text-small">
            SocialX app has Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sequi labore, harum officiis error quia cupiditate?
          </p> */}
        </div>
        <div className="features-content">
          <div className="features-left overflow" data-aos="fade-right">
            <img src={props.imgsrc } alt="phone" />
          </div>
          <div className="features-right" data-aos="fade-left">
            {/* {FeatureList.map((feature) => (
              <Feature
                // key={feature.id}
                // icon={feature.icon}
                // heading={feature.heading}
                text={feature.text}
              />
            ))} */}
            {props.content}
          </div>
        </div>
      </div>
      <Helmet>
            <title>{props.title}</title>
            <meta name="description" content={props.content.slice(0,50)} />
        </Helmet>
    </section>
  );
};

export default Features;
