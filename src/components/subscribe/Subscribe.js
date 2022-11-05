import React, { useEffect } from "react";
import "./Subscribe.css";
import daimg from "../../assets/daimg.png";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

const Subscribe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (

    // <section id="subscribe">
    //   <div className="container subscribe" data-aos="fade-up">
    //     <h2>Become Partner!</h2>
    //     <form>
    //       <div className="form">
    //         <input type="text" placeholder="Your Name" /><br/><br/>
    //         <input type="text" placeholder="Phone No." /> <br/><br/>
    //         <input type="text" placeholder="Your Email" /> <br/><br/>
    //         <input type="text" placeholder="Current Business" /> <br/><br/>
    //         <input type="text" placeholder="Your City" /> <br/><br/>
    //         <input type="text" placeholder="Your Pincode" /> <br/><br/>
    //         <input type="text" placeholder="Shop Type" /> <br/><br/>
    //         <button>Join Now</button>
    //       </div>
    //     </form>
    //     {/* <div className="social-icons">
    //       <div className="social-icon">
    //         <TiSocialGooglePlus />
    //       </div>
    //       <div className="social-icon">
    //         <FaFacebookF />
    //       </div>
    //       <div className="social-icon">
    //         <FaTwitter />
    //       </div>
    //       <div className="social-icon">
    //         <FaInstagram />
    //       </div>
    //     </div> */}
    //   </div>
    // </section>
    <section id="b_partner" class="section-padding"  >
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">          
          <h2 class="section-title wow fadeInUp animated" data-wow-delay="0.5s" style={{visibility:'visible',animationdelay: '0.5s',animationdelay:' 0.5s',animationdelay:'0.5s'}}>How To Become A Partner</h2>
          <div class="shape wow fadeInLeft animated" data-wow-delay="0.6s" style={{visibility: 'visible',animationdelay:'0.6s',animationdelay:'0.6s', animationdelay: '0.6s'}}></div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-xs-12">
			  
            <div class="table wow fadeInLeft animated" data-wow-delay=".2s" style={{visibility: 'visible',animationdelay:'0.2s',animationdelay:'0.2s', animationdelay: '0.2s'}}>
              <div class="img-box">
				  <i>1</i>
                <img class="img-fluid" src={daimg} alt="Download App" />
              </div>
              <div class="b_partner-header">
                <p class="b_title"> Download app from <br/> <span>Google Play/App Store</span></p>
              </div>
            </div> 
          </div>
          <div class="col-lg-4 col-md-4 col-xs-12">
            <div class="table wow fadeInLeft animated" data-wow-delay=".3s" style={{visibility: 'visible',animationdelay:'0.3s',animationdelay:'0.3s', animationdelay: '0.3s'}}>
              <div class="img-box">
				  <i>2</i>
                <img class="img-fluid"src={daimg} alt="Register Yourself"/>
              </div>
              <div class="b_partner-header">
                <p class="b_title"> Register yourself using your GST Registration or Shop &amp; Establishment Registration or Udyog Aadhaar </p>
              </div>
            </div> 
          </div>
		<div class="col-lg-4 col-md-4 col-xs-12">
            <div class="table wow fadeInLeft animated" data-wow-delay=".4s" style={{visibility: 'visible',animationdelay:'0.4s',animationdelay:'0.4s', animationdelay: '0.4s'}}>
              <div class="img-box">
				  <i>3</i>
                <img class="img-fluid" src={daimg} alt="Login Start"/>
              </div>
              <div class="b_partner-header">
                <p class="b_title"> Login &amp; <br/> start placing orders</p>
              </div>
            </div> 
          </div>	
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
