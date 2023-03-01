import React, { useEffect } from "react";
import http from "../httpServices/httpServices";
import "./Contactform.css";
import daimg from "../../assets/daimg.png";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import img4 from "../../assets/front1.png";
import img1 from "../../assets/step01.png";
import img2 from "../../assets/step02.png";
import img3 from "../../assets/step03.png";
import imgform from "../../assets/Contactus.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Contactform = () => {

     const [name, setName] = useState("");
     const [address, setAddress] = useState("");
     const [phoneNo, setPhone] = useState("");
     const [email, setEmail] = useState("");
     const [savedQuery, setSaved] = useState("");
     const [error, setError] = useState("");
     const [errors, setErrors] = useState({});
     const [typeofQuery, setTypeQuery] = useState("");
     const [queryContent, setqueryContent] = useState("");



/*


/*
      {blog.map((e,index) => (
                        index > 0 ? 
                        <Row>
                        <Col xs={7}>
                        <Card.Img src={e.image[0]} />
                        </Col>
                        <Col xs={5}><h3>{e.title}</h3> 
                         <p><span style={{color: "darkgray"}}>By : </span> <span style={{color: "blue"}}>{ " "+e.writtenBy}</span></p><br />
                         <p><span style={{color: "darkgray"}}>Date : </span>{handleDate(e.dateofCreation)}</p><br />
                        <p>{e.content.substring(0,30)}</p><br />
                        </Col>
                        </Row>
                        : "" 
                        ))}
*\
*/
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

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
             setTypeQuery("");
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
    error.typeofQuery = validateTypeofQuery(typeofQuery);
    error.queryContent = validatequeryContent(queryContent);
     return error;
  }

 const validateName = (name) =>  !name ? "Name must be entered": "";
 const validateAddress = (address) =>  !address ? "Address must be entered": "";
 const validatePhone = (phoneNo) =>  !phoneNo ? "Phone number must be entered": "";
 const validateEmail = (email) =>  !email ? "Email must be entered": "";
 const validateTypeofQuery = (typeofQuery) =>  !typeofQuery ? "Select query type": "";
 const validatequeryContent = (queryContent) =>  !queryContent ? "Enter your query": "";


  return (
    <>

    {/* <section id="b_partner" class="section-padding"  >
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
                <img class="img-fluid" src={img1} alt="Download App" />
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
                <img class="img-fluid"src={img2} alt="Register Yourself"/>
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
                <img class="img-fluid" src={img3} alt="Login Start"/>
              </div>
              <div class="b_partner-header">
                <p class="b_title"> Login &amp; <br/> start placing orders</p>
              </div>
            </div> 
          </div>	
        </div>
      </div> // progress indicator
    </section> */}
   
    
    
   {/* form start */}
    <section id="subscribe" className="row">
      <div className="container subscribe col-md-6" data-aos="fade-up">
        <h2>Contact Us</h2>
        {savedQuery ? <span className="text-success" style={{fontSize:"16px"}}>{savedQuery}</span> : error? <span className="text-danger" style={{fontSize:"25px"}}>{error}</span> : ""}
        <form>
          <div className="form">
            <div className="form-group">
            <select className="form-control" id="typeofQuery" name="typeofQuery" value={typeofQuery} onChange={(e) => setTypeQuery(e.currentTarget.value)}>
              <option value="">Select type of query</option>
              <option>Enquiry</option>
              <option>Complaint</option>
            </select>
            <br />
            {errors.typeofQuery ? <span className="text-danger" style={{fontSize:"16px"}}>{errors.typeofQuery} </span> : ""}
            </div>
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
         <div className="social-icons">
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
        </div>
      </div>
      <div className="col-md-6" >
      <img src={imgform}  id="sideimage"></img>
      </div>
    </section>
    <Helmet>
            <title>Contact Form</title>
            <meta name="description" content="Zobox || SASTE MOBILE KA ADDA" />
        </Helmet>
    </>
  );
};

export default Contactform;
