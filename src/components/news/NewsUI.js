import React from 'react';
import'./newsstyle.css';

const NewsUI = props => {
    return (
        <div className='container-fluid card text-center'>
            <div className='overflow'>
                <img src={props.imgsrc} alt="news" className='card-img-top'/>
            </div>
            <div className='card-body text-dark'>       
                <h4 className='card-title'>Card Title</h4>
                <p className='card-text text-secondary'>
                To create a platform that would enable both online and offline purchases of FINEST  Branded Refurbished Mobile Phones. Our business model has been created in such a way that it benefits both customers and business owners.",

                </p>
                <a href='#' className='btn btn-outline-success'>Read more..</a>
            </div>
        </div>
    );
};

export default NewsUI;