import React from 'react';
import Footer from '../Footer/Footer';
import { Col, Container, Image, Row } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagramSquare } from 'react-icons/fa';
import { Link } from "react-router-dom";
import aboutImage from "../../img/grayson.png";
import Navbarmenu from "../menu/Navbarmenu";
import "./About.css";

const About = () => {
       return (
            <div>
                <Navbarmenu/>
					<Container className="about-container">
						<Row className="align-items-center justify-content-center banner">
							<Col md={6}>
								<h1><span className="top-name">HI</span> I'm Dr. Michael C. Grayson!</h1>
								<div>
									<p className="textPhilosophy">"I break down barriers so team can focus on what matters - working together to create products their customers lover."</p>
								</div>
								<div className="mb-3">
									<p>Dr. Michael C. Grayson is an African American author, entrepreneur, consumer advocate, and credit expert. He serves as the CEO of Credit and Debt Management Institute, Inc. (CDMI). Dr. Grayson completed his Ph.D. in Business Administration from the University of Virginia. His undergrad studies were mathematics and systems engineering. Dr. Grayson has been invited to speak before Congress on access to capital for small businesses, written expert papers for two Presidents, and was Honorary Chairman of the Business Advisory Council under President Bush and is currently working with Mayor Richard Thomas to raise the aggregate credit scores of the entire city of Mt. Vernon, NY.</p>
								</div>
								<div>
								<ul className="about-socials">
                                        <li className="social-menu-item" >
                                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                            <FaFacebookF className="fb"/>
                                            </a>
                                        </li>

                                        <li className="social-menu-item" >
                                            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                            <FaTwitter className="tw"/>
                                            </a>
                                        </li>
                                        <li className="social-menu-item " >
                                            <a href="https://www.linkedin.com/in/" target="_blank" rel="noreferrer">
                                            <FaLinkedinIn className="linkedin"/>                     
                                            </a>
                                        </li>
                                        <li className="social-menu-item" >
                                            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
                                            <FaInstagramSquare className="instagram"/>
                                            </a>
                                        </li>
                                    </ul>
								</div>
								<Link as={Link} to="/contact" className="aboutButton">
								Contact Me
									
								</Link>
							</Col>
							<Col className="offset-md-1" md={6}>
								<Image
									className="img-fluid mt-3"
									src={aboutImage}
									alt="..."
								/>
							</Col>
						</Row>
					</Container>
                <Footer/>
              </div>
       )
}

export default About
