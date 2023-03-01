import React from 'react';
// import signpic from "...images/signup.svg*; 
import './Partnersec.css';
import img1 from '../../assets/google.png'
import { Helmet } from 'react-helmet';

 
const PartnerBenefits = props => {
    return (
      <section class="benifit-background-color">
      <div class="benifits mt-5">
          <h3 class="mt-5 benifits-head-title">Benefits of Becoming a Zobiz Partner</h3>
          <div class="hr-line "></div>
          <p class="benifits-head-text">Your success is our success. Here’s what’s in store for you when you partner
              with Qpe</p>
      </div>
      <div class="container mt-5">
          <div class="row">
              <div class="col-md-3">
                  <div class="benifit-card">
                      <img  src={img1}  alt=""/>
                      <h6 class="benifit-card-title">See Higher Conversions</h6>
                      <p class="benifit-card-text">
                          Obtain lucrative incentive plans. Recommend our AI-powered customer support platform to your
                          network and reap rich awards.</p>
                  </div>
              </div>
              <div class="col-md-3">
                  <div class="benifit-card">
                      <img src={img1}alt=""/>
                      <h6 class="benifit-card-title">Get More ROI</h6>
                      <p class="benifit-card-text">Get a pre-established customer network and grow customer base by
                          partnering with the #1-rated customer support automation platform.</p>
                  </div>
              </div>
              <div class="col-md-3">
                  <div class="benifit-card">
                      <img src={img1}  alt=""/>
                      <h6 class="benifit-card-title">Retain More Customers</h6>
                      <p class="benifit-card-text">Improve customer experience by leveraging AI through conversational
                          support with early access to APIs and product roadmaps.</p>
                  </div>
              </div>
              <div class="col-md-3">
                  <div class="benifit-card">
                      <img src={img1}  alt=""/>
                      <h6 class="benifit-card-title">Be Powerful Partners</h6>
                      <p class="benifit-card-text">Collaborate, learn and grow with co-marketing opportunities with
                          the world’s #1 conversational AI customer support platform.</p>
                  </div>
              </div>
              {/* <div class="col-md-12 mt-5 mb-5 text-center">
                  <a href="!" class="become-partner-butn">Become a Partner</a>
              </div> */}
          </div>
      </div>
      <Helmet>
            <title>Zobox || SASTE MOBILE KA ADDA</title>
            <meta name="description" content="Get a pre-established customer network and grow customer base" />
        </Helmet>
  </section>

    )
    }
export default PartnerBenefits
