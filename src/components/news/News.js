import React from 'react';
import NewsUI from './NewsUI';
import img1 from '../../assets/headimg.jpeg';
import img2 from '../../assets/about.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const News = props => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        
      };
    return (
        <div className='container'>
          <div className='row'>
        <div className="title" data-aos="fade-up">
      <h2>News</h2>
 
    </div>
        </div>
        <Slider {...settings}>
        <div className='container d-flex  mb-5'>
       
            <div className='row'>
             <div className='col-md-3'>
                <NewsUI imgsrc={img1} />
             </div>
             <div className='col-md-3'>
                <NewsUI imgsrc={img2}/>
             </div>
             <div className='col-md-3'>
                <NewsUI imgsrc={img1}/>
             </div>
             <div className='col-md-3'>
                <NewsUI imgsrc={img2}/>
             </div>
            </div>
        </div>
        </Slider>
        </div>
    );
};

export default News;