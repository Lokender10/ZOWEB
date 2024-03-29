import React, { useEffect, useState } from "react";
import "./Subscribe.css";
import daimg from "../../assets/daimg.png";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import img4 from "../../assets/front1.png";
import img1 from "../../assets/step01.png";
import img2 from "../../assets/step02.png";
import img3 from "../../assets/step03.png";
import imgform from "../../assets/leftmen.png";
import http from "../httpServices/httpServices";
// import imgform from " ";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";

const Subscribe = () => {

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNo, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [savedQuery, setSaved] = useState("");
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({});
  const [typeofQuery, setTypeQuery] = useState("Enquiry");
  const [queryContent, setqueryContent] = useState("");



  const handleSubmit = async (e) => {
    e.preventDefault();
    let error = validateAll();
    if(isValid(error)){
    try{
        let body = {};
        body.name = name;
        body.address = {"Plot":address};
        body.phoneNo = phoneNo;
        body.email = email;
        body.typeofQuery = typeofQuery;
        body.dateofUpdate = new Date();
        body.queryContent = queryContent;
        let response = await http.post("/saveQuery", body)
        let { data } = response;
         setSaved(data);
         setErrors({});
         setName("");
         setAddress("");
         setPhone("");
         setEmail("");
         setqueryContent("");
    }
    catch(ex) {
          setError("Failed!");
    }
  }
  else {
    setErrors(error);
  }
}

const isValid = (error) => {
let keys = Object.keys(error);
let count = keys.reduce((acc, curr) => error[curr] ? acc+1: acc, 0);
return count === 0;
}

const validateAll = () => {
let error = {};
error.name = validateName(name);
error.address = validateAddress(address);
error.phoneNo = validatePhone(phoneNo);
error.email = validateEmail(email);
error.queryContent = validatequeryContent(queryContent);
 return error;
}

const validateName = (name) =>  !name ? "Name must be entered": "";
const validateAddress = (address) =>  !address ? "Address must be entered": "";
const validatePhone = (phoneNo) =>  !phoneNo ? "Phone number must be entered": "";
const validateEmail = (email) =>  !email ? "Email must be entered": "";
const validatequeryContent = (queryContent) =>  !queryContent ? "Enter your query": "";


useEffect(() => {
  AOS.init({
    duration: 1000,
  });
}, []);

  return (

    <>
    <Helmet>
            <title>Zobox || SASTE MOBILE KA ADDA</title>
            <meta name="description" content="Our Sales Person Contact And Register You As A Partner On Zobiz App" />
        </Helmet>
    <section id="b_partner" class="section-padding"  >
      <div class="">
        <div class="section-header text-center" data-aos="fade-up">          
          <h2 class="section-title wow fadeInUp animated" data-wow-delay="0.5s" style={{visibility:'visible',animationdelay: '0.5s',animationdelay:' 0.5s',animationdelay:'0.5s'}}>How To Become A Partner</h2>
          <div class="shape wow fadeInLeft animated" data-wow-delay="0.6s" style={{visibility: 'visible',animationdelay:'0.6s',animationdelay:'0.6s', animationdelay: '0.6s'}}></div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-xs-12">
			  
            <div class="table wow fadeInLeft animated" data-wow-delay=".2s" style={{visibility: 'visible',animationdelay:'0.2s',animationdelay:'0.2s', animationdelay: '0.2s'}}>
              <div class="img-box">
				  <i>1</i>
                <img class="img-fluid" src={img1} alt="Download App" />
              </div>
              <div class="b_partner-header">
                <p class="b_title"> Fill Form For Join Us At <br/> <span>Zobox.in</span></p>
              </div>
            </div> 
          </div>
          <div class="col-lg-4 col-md-4 col-xs-12">
            <div class="table wow fadeInLeft animated" data-wow-delay=".3s" style={{visibility: 'visible',animationdelay:'0.3s',animationdelay:'0.3s', animationdelay: '0.3s'}}>
              <div class="img-box">
				  <i>2</i>
                <img class="img-fluid"src={img2} alt="Register Yourself"/>
              </div>
              <div class="b_partner-header">
                <p class="b_title"> Our Sales Person Contact And Register You As A Partner On Zobiz App </p>
              </div>
            </div> 
          </div>
		<div class="col-lg-4 col-md-4 col-xs-12">
            <div class="table wow fadeInLeft animated" data-wow-delay=".4s" style={{visibility: 'visible',animationdelay:'0.4s',animationdelay:'0.4s', animationdelay: '0.4s'}}>
              <div class="img-box">
				  <i>3</i>
                <img class="img-fluid" src={img3} alt="Login Start"/>
              </div>
              <div class="b_partner-header">
                <p class="b_title"> Login &amp; <br/> start placing orders</p>
              </div>
            </div> 
          </div>	
        </div>
      </div>
    </section>
   
   {/* form start */}
    <section id="subscribe" className="row">
      <div className="container subscribe col-md-5" data-aos="fade-up">
        <h2>Become a Partner!</h2>
        {savedQuery ? <span className="text-success" style={{fontSize:"16px"}}>{savedQuery}</span> : error? <span className="text-danger" style={{fontSize:"25px"}}>{error}</span> : ""}
        <form>
        <div className="form">
            <input type="text" placeholder="Name" id="name" name="name" value={name} onChange={(e)=> setName(e.currentTarget.value)} /><br />
            {errors.name ? <span className="text-danger" style={{fontSize:"16px"}}>{errors.name} </span> : ""}
            <br/><br/>
            <input type="text" placeholder="Address" id="address" name="address" value={address} onChange={(e)=> setAddress(e.currentTarget.value)} /><br />
            {errors.address ? <span className="text-danger" style={{fontSize: "16px"}}>{errors.address} </span> : ""}
             <br/><br/>
            <input type="phone" placeholder="Phone No." id="phoneNo" name="phoneNo" value={phoneNo} onChange={(e)=> setPhone(e.currentTarget.value)} /><br />
            {errors.phoneNo ? <span className="text-danger" style={{fontSize: "16px"}}>{errors.phoneNo} </span> : ""}
             <br/><br/>
            <input type="email" placeholder="Your Email" id="email" name="email" value={email} onChange={(e)=> setEmail(e.currentTarget.value)} /> <br />
            {errors.email ? <span className="text-danger" style={{fontSize: "16px"}}>{errors.email} </span> : ""}
            <br/><br/>
            <textarea className="queryContent" name="queryContent" id="queryContent" placeholder="Type your query here" rows={6} cols={58} style={{fontSize:"14px", padding:"4px"}} /> <br />
            {errors.queryContent ? <span className="text-danger" style={{fontSize: "16px"}}>{errors.queryContent} </span> : ""}
             <br /> <br />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </form>  
        {/* <div className="social-icons">
          <div className="social-icon">
            <TiSocialGooglePlus />
          </div>
          <div className="social-icon">
            <FaFacebookF />
          </div>
          <div className="social-icon">
            <FaTwitter />
          </div>
          <div className="social-icon">
            <FaInstagram />
          </div>
        </div>  */}
      </div>
      <div className="col-md-7" >
      <img src={imgform}  id="sideimage"></img>
      </div>
    </section>
    </>
  );
};

export default Subscribe;
