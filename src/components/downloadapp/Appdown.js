import "./Appdown.css";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import download_app from "../../assets/download_app.png";
import pngwing from "../../assets/pngwing.com.png";
import apple from "../../assets/apple.png";
import zobiz1 from "../../assets/zobiz1.png";
const Appdown = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="download_app" class="bg-gray section-padding wow fadeIn animated"   data-wow-delay=".1s" style={{visibility: 'visible',delay:' .1s' ,delay: '.1s', animationdelay:' .1s'}}>
    <div class="container">
  <div class="row">
      <div class="col-lg-6 col-md-12 col-xs-12 info" data-aos="fade-right">
      <div class="wow fadeInLeft animated" data-wow-delay="0.3s" style={{visibility: 'visible', delay: '0.3s', delay:' 0.3s', animationdelay: '0.3s'}}>
        <div id="down_app">
          <div class="content text-dark text-left">
                <h1>So what are you<br/> waiting for?</h1>
              <p>Simply download the <span>Super<span class="teal">Sale</span></span> app,
              become a partner and start ordering mobile phones at best rates.</p>
              <div id="down_icon"><a href="https://bit.ly/3cg1ulH" target="_blank"><img src={pngwing} alt="play"/></a> &nbsp;
              <a href="https://apple.co/3vMkz6X" target="_blank"><img src={apple} alt="app"/></a></div>
          </div>
        </div>
      </div>
    </div>
      <div class="col-lg-6 col-md-12 col-xs-12 wow fadeInRight animated" data-wow-delay="0.3s" style={{visibility: 'visible' ,animationdelay:' 0.3s' ,delay: '0.3s', animationdelay: '0.3s'}}>
      <div class="img_box"><img class="img-fluid" src={zobiz1} alt="Download SuperSale App"/></div>
    </div>
  </div>
</div>
</section>
  );
};

export default Appdown;
