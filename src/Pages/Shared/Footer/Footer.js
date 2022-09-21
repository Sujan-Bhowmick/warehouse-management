import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='social '>
                <div>
                    <h6 className=''> <i style={{color: "#4267B2"}} className ="fa-brands fa-square-facebook mx-2 "> </i>FACEBOOK </h6>
                
                </div>
                <div>
                    <h6> <i style={{color: "#1DA1F2"}} className="fa-brands fa-twitter mx-2"></i> TWITER</h6>
                </div>
                <div>
                    <h6>  <i style={{color: "#e95950"}} className="fa-brands fa-square-instagram mx-2"></i>INSTAGRAM </h6>
                </div>
                <div>
                    <h6><i style={{color: "#0072b1"}} className="fa-brands fa-linkedin mx-2"></i> LINKEDIN </h6>
                 
                </div>
                <div>
                    <h6> <i  className="fa-brands fa-dribbble mx-2"></i> DRIBBBLE</h6>
                </div>
                <div>
                    <h6> <i style={{color: " #1AB7EA "}} className="fa-brands fa-vimeo mx-2"></i> VIMEO</h6>
                </div>
            </div>
            <div className='footer-link'>
                <div>
                    <h6 className=' mx-3'>CAR DEALER</h6>
                    <small>
                        <p className='my-1 mx-3'>Copyright <i className="fa-regular fa-copyright"></i> 2020</p>
                        <p className='my-1 mx-3'>All Rights Reserved</p>
                    </small>
                </div>
                <div>
                    <h6 className=''>USEFUL LINKS</h6>
                    <small>
                        <a href="/home">About Us</a>
                        <a href="/home">Our Services</a>
                        <a href="/home">Information</a>
                        <a href="/home">privacy Policy</a>
                    </small>
                </div>
                <div className='our-terms'>
                    <h6 className=''>OUR TERMS</h6>
                    <small>
                        <a href="/home">Support</a>
                        <a href="/home">Contacts</a>
                        <a href="/home">Typography</a>
                        <a href="/home">FAQ</a>
                    </small>
                </div>
                <div>
                    <h6 className=''>SHOWROOMS</h6>
                    <small>
                        <p className='my-1'>Bangladesh, Auto, king St. 665089</p>
                        <p className='my-1'>Phone: +01751234532</p>
                        <p className='my-1'>Email: info@shop.com</p>
                        <p className='my--1'>c 2020 AutoLTD</p>
                    </small>
                </div>
            </div>
            <small><p className='my-5'>Copyright <i className="fa-regular fa-copyright"></i> 2021. All Rights Reserved </p></small>
        </div>
    );
};

export default Footer;