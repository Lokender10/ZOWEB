import React, { useEffect } from "react";
import "./Buyfrom.css";
import daimg from "../../assets/daimg.png";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import img1 from "../../assets/buy1.png";
import img2 from "../../assets/buy2.png";
import img3 from "../../assets/buy3.png";
import img4 from "../../assets/buy4.jpg";
import img5 from "../../assets/buy5.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { height } from "@mui/system";
import { Helmet } from "react-helmet";

const Buyfrom = props =>{
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (

    <>
        <section className="buyfrom" style={{}}>
        <div className="title" data-aos="fade-up">
          <h2>{props.title}</h2>
        </div>
        <div className="row buyrow">
            <div className="col-lg-4 col-md-4 col-xs-12">
            <img src={img5}  id="sideimage"></img>
            </div>
            <div className="col-lg-4 col-md-4 col-xs-12">
            <img src={img1}  id="sideimage" style={{height:"23rem"}}></img>
            </div>
            <div className="col-lg-4 col-md-4 col-xs-12">
            <img src={img4}  id="sideimage"></img>
            </div>

        </div>
        </section>
        <Helmet>
            <title>Zobox || SASTE MOBILE KA ADDA</title>
            <meta name="description" content={props.title} />
            </Helmet>
        </>
  );
};

export default Buyfrom;
