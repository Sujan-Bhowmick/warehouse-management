import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner from '../../../images/banner/bannner11.jpg'
import "./Banner.css"

const Banner = () => {
    return (
        <div className='banner'>
             <img className='img-fluid' src= {banner} alt="" />
            
                <div  className='banner-style fw-bold'>
                <h3> <span style={{color:'goldenrod'}}>FIND <span style={{color:'blue'}}>YOUR</span></span>
                 </h3>
                 <h2 style={{color: 'white'}}> DREAM CAR</h2>
                 
                </div>
                <div className='banner-style2 fw-bold'>
                <h2 style={{color:'goldenrod'}}> <span style={{color:'white'}}>DISCOVER</span> and  <span style={{color:'white'}}>BUY</span> the car that is right for <span style={{color:'blue'}}>YOU</span></h2>
                </div>
             
            
        </div>
    );
};

export default Banner;