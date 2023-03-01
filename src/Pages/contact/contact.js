import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
// import "../App.css";
import "../contact/contact.css";


const contactus =() => {
    return(
        
        <div class="form" >
        <div>
        <div class="container" style={{marginTop:"200px"}} >
            <div class="row">
                <div class="col-lg-12">
                    <h2>Have a question?</h2>
                    <h2>For all queries, reach out at - Contact details</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <input type="text" class="form-control" id="your-name" placeholder="Your Name"/>
                </div>
                <div class="col-lg-6">
                    <input type="email" class="form-control" id="email" placeholder="Your Email"/>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <input type="text" class="form-control" id="subject" placeholder="Subject"/>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <textarea class="form-control" id="message" rows="2" placeholder="Message"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary" type="button">Send Message</button>
                      </div>
                </div>
            </div>
        </div>
        </div>
        <Helmet>
            <title>Zobox || SASTE MOBILE KA ADDA</title>
            <meta name="description" content="Zobox || SASTE MOBILE KA ADDA" />
        </Helmet>
    </div>

    
  )
}


export default contactus;