import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagramSquare } from 'react-icons/fa';
import { Col, Container, Row } from 'react-bootstrap';
import "./Footer.css";

export default function Footer() {
    return (
        <div className="fotter-bg">
            <footer className="footer-container">
            <Container>
                <Row>
                        <Col md={6} lg={4} className="mt-5">
                           <div className="footer-link">
                                <h3>Explore</h3>
                                <span className="animate-border border-black mb-3"></span>
                                <span className='d-block p-0 mb-4 item-link nav-link text-light mt-5'> Explore</span>
                                <span className='d-block p-0 mb-4 item-link nav-link text-light'> About Grasson</span>
                                <span className='d-block p-0 mb-4 item-link nav-link text-light'> Hire Grasson</span>
                                <span className='d-block p-0 mb-4 item-link nav-link text-light'> Grasson's Blog</span>
                                <span className='d-block p-0 mb-4 item-link nav-link text-light'> Bike cleaning and washing</span>
                                <span className='d-block p-0 mb-4 item-link nav-link text-light'> Bike cleaning and washing</span>
                           </div>
                        </Col>
                        <Col  md={6} lg={4} className="mt-5">     
                            <div>
                                <h3>Company Info</h3>
                                <span className="animate-border border-black mb-3"></span>
                                    <div className="footer-link">
                                    <span className='d-block p-0 mb-4 item-link nav-link text-light mt-5'> About Grasson</span>
                                <span className='d-block p-0 mb-4 item-link nav-link text-light'> Hire Grasson</span>
                                <span className='d-block p-0 mb-4 item-link nav-link text-light'> Grasson's Blog</span>
                                <span className='d-block p-0 mb-4 item-link nav-link text-light'> Bike cleaning and washing</span>
                                <span className='d-block p-0 mb-4 item-link nav-link text-light'> Bike cleaning and washing</span>
                                    </div>
                             </div>   
                        </Col>
                        <Col  md={6} lg={4} className="mt-5">     
                            <div>
                                <h3>Media Inquiries</h3>
                                <span className="animate-border border-black mb-3"></span>
                                    <div className="footer-link">
                                        <div>
                                        <p>Robbins Research International, Inc. has a dedicated media department. Members of the press are welcome to contact us re...</p>
                                        </div>
                                       <div>
                                       <h3 className="pt-5">Social Media</h3>
                                        < FaFacebookF className="socialIcon"/> <FaTwitter className="socialIcon"/> <FaLinkedinIn className="socialIcon"/> <FaInstagramSquare className="socialIcon"/>
                                       </div>
                                    </div>
                             </div>   
                        </Col>
                </Row>
          </Container>   
        </footer>
        <p className='text-center copy-right'>Copyright © 2021  All Right Reserved By Credit and Debt Management Institute, Inc <br />
        Powered by Spread More</p>

        </div>
    )
}
