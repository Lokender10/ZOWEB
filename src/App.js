import "./App.css";
import React from 'react';
import ReactGA from "react-ga4";
import { Helmet } from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from "./components/navbar/Navbar";
// import Header from "./components/header/Header";
// import Features from "./components/features/Features";
// import Download from "./components/download/Download";
// import Subscribe from "./components/subscribe/Subscribe";
// import Footer from "./components/footer/Footer";
import about from "../src/assets/headimg.png";
import img2 from "../src/assets/Mission.png";
import img3 from "../src/assets/Vision.png";
import img4 from "../src/assets/whypart.png";
import img5 from "../src/assets/letsgrow.png";
import img6 from "../src/assets/Unique.png";

// import {  HowitlistList} from "./allData/Howitdata";
import Feature from "./components/features/Feature";
import { VisionList } from "./allData/Visiondata";
import { AboutList } from "./allData/Aboutdata";
import { MissionList } from "./allData/Missiondata";

import {
  Route,
  Routes,
  Navigate
  
} from "react-router-dom";

import features from '../src/components/features/Features'
import {
  Navbar,
  Header,
  Features,
  Download,
  Buyfrom,
  Subscribe,
  Faq,
  Footer,
  Howworks,
  Carousel,
  PartCarousel,
  Counter,
  Testimonial,
  Resellcarousel,
  Appdown,
  News,
  PartnerBenefits,
  Contactform,
  Privacy,
  
} from "./components";
import BlogPost from "./components/blog/BlogPost";
import FullBlog from "./components/blog/FullBlog";
import { useEffect } from "react";

/*
const TRACKING_ID = "G-ZMGJ2958RV";
ReactGA.initialize(TRACKING_ID);

ReactGA.event({
category: 'User',
action: 'Created an Account'
});


useEffect(() => {
    ReactGA.send("pageview");
  }, []);

  */
    

const  App = () =>  {

  
  return (
    <>
 <Helmet>
            <title>Zobox || SASTE MOBILE KA ADDA</title>
            <meta name="description" content="We operate in B2B AND B2C models, engaging our consumers in the best possibilities . In a simple manner, we provide the best brands in Best Price. This was the motto behind conceiving ZOBOX." />
           </Helmet>
    <div>
      
        <> 
            </>
          <Routes>
            <Route exact path="/home"  element={<>
            <><header className="header-bg">
              <Navbar />
              <Header />
            </header>
            </>
              <Carousel />
              <Features imgsrc={about} title={"About Us"}
              content={AboutList.map((feature) => (
                <Feature
                  // key={feature.id}
                  // icon={feature.icon}
                  // heading={feature.heading}
                  text={feature.text}
                />
              ))}  data-aos="fade-up" />
              <Howworks imgsrc={about} title={"How It Works"} 
               content={AboutList.map((feature) => (
                <Feature
                  // key={feature.id}
                  // icon={feature.icon}
                  // heading={feature.heading}
                  text={feature.text}
                />
              ))} 
              data-aos="fade-up" />
              {/* <Features imgsrc={img2} title={"Buy From Zobox"} data-aos="fade-up" /> */}
             <Buyfrom title={"Buy From Zobox"}/>
              <Subscribe />
              <Counter />
              <PartCarousel />
              <Resellcarousel />
              <Testimonial />
              
              <br />
              <br />
              <br />
              <News />
              <br />
              <br />
              <br />
              <Appdown />
              <Faq />
              <Footer />
            </>} />
            <Route path="/" element={<Navigate to="/home" />} />

            <Route path="/About" element={<><br /><br /><br /><br /><Navbar />
              <Features imgsrc={about} title={"About Us"}
                // {Howitlist.map((feature) => (
                //   <Feature
                //     // key={feature.id}
                //     // icon={feature.icon}
                //     // heading={feature.heading}
                //     text={feature.text}
                //   />
                // ))}
                content={AboutList.map((feature) => (
                  <Feature
                    // key={feature.id}
                    // icon={feature.icon}
                    // heading={feature.heading}
                    text={feature.text}
                  />
                ))} 
                data-aos="fade-up" />
              <Howworks imgsrc={img2} title={"Mission"} 
               content={MissionList.map((feature) => (
                <Feature
                  // key={feature.id}
                  // icon={feature.icon}
                  // heading={feature.heading}
                  text={feature.text}
                />
              ))}
              style={{boxshadow:" 0 5px 15px rgba(0, 0, 0, 0.1)"}}
              data-aos="fade-up" />

              <Features imgsrc={img3} title={"Vision"}
               content={VisionList.map((feature) => (
                <Feature
                  // key={feature.id}
                  // icon={feature.icon}
                  // heading={feature.heading}
                  text={feature.text}
                />
              ))} data-aos="fade-up" />
              <Howworks imgsrc={img6} title={"Unique Features"}
               content={VisionList.map((feature) => (
                <Feature
                  // key={feature.id}
                  // icon={feature.icon}
                  // heading={feature.heading}
                  text={feature.text}
                />
              ))}
              data-aos="fade-up" />
              <Footer /></>} />

            {/* <Route path="/Contact"  element={<><Navbar /><Contactus/></>   } /> */}
            <Route path="/BecomePartner" element={<><Navbar />
              <br /><br /><br /><br />
              <Howworks imgsrc={img4} title={"Why Partner With Us"} 
               content={AboutList.map((feature) => (
                <Feature
                  // key={feature.id}
                  // icon={feature.icon}
                  // heading={feature.heading}
                  text={feature.text} 
                />
              ))} 
              data-aos="fade-up" />
              <br /><br /><br /><br />
              <Features imgsrc={img5} title={"Lets Grow Together"}
               content={AboutList.map((feature) => (
                <Feature
                  // key={feature.id}
                  // icon={feature.icon}
                  // heading={feature.heading}
                  text={feature.text}
                />
              ))} 
                data-aos="fade-up" />
              <PartnerBenefits />
              <Subscribe /><Footer /></>} />
            <Route path="/News" element={<><Navbar /><br /><br /><News /></>} />
          
            {/* <Route path="/Query"  element={<><Navbar /><br/><br/><Contactus/></>   } /> */}
            <Route path="/Download" element={<><Navbar /><br /><br /><Appdown /><Footer /></>} />
            <Route path="/Testimonial" element={<><Navbar /><br /><br /><Testimonial /><Footer /></>} />
            <Route path="/Partner" element={<><Navbar /><br /><br /><PartnerBenefits /><Footer /></>} />
            <Route path="/Contact" element={<><Navbar /><br /><br /><Contactform /><Footer /></>} />
            <Route path="/Privacy" element={<><Navbar /><br /><br /><Privacy /><Footer /></>} />
            <Route path="/Blog" element={<><Navbar /><br /><br /><BlogPost /><Footer /></>} />
            <Route path="/blog/user/:id" element={<><Navbar /><br /><br /><FullBlog /><Footer /></>} />
          </Routes>
      
      </div></>
  );
}
export default App;
