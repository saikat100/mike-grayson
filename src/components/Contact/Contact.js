import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagramSquare } from 'react-icons/fa';
import { MdEmail, MdCall, MdLocationOn, MdSend } from 'react-icons/md';
import Footer from '../Footer/Footer';
import Navbarmenu from '../menu/Navbarmenu';
import "./Contact.css";

const Contact = () => {
    return (
        <div>
            <Navbarmenu/>
        <section className="pb-5 "  id="contact">
            <Container className="pt-5 " >
                <div className="text-center mb-5">
                <h1 className="top-hedng space-heding">Get in Touch</h1>
                </div>
                <div className="mt-4">
                    <form className="contactForm">
                        <Row>
                            <Col md="6">
                                <div>
                                    <p className="p-text">
                                    Please fill out the form on this section to contact. Or call between 9:00 a.m. and 5:00 p.m. Monday through Friday
                                    </p>
                                    <br />
                                    <ul className="contact-info">
                                        <li>
                                            <strong><MdEmail/></strong> office@cdmionline.com
                                        </li>
                                        <li>
                                            <strong><MdCall/> </strong> (718) 481-3363
                                        </li>
                                        <li>
                                            <strong><MdLocationOn/> </strong> 204-17 Hillside Avenue, Queens NY 11423
                                        </li>
                                    </ul>
                                    <ul className="contact-socials">
                                        <li className="menu-item" >
                                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                            <FaFacebookF  className="contact-social"/>
                                            </a>
                                        </li>

                                        <li className="menu-item " >
                                            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                            <FaTwitter className="contact-social"/>
                                            </a>
                                        </li>
                                        <li className="menu-item " >
                                            <a href="https://www.linkedin.com/in/" target="_blank" rel="noreferrer">
                                            <FaLinkedinIn className="contact-social"/>                     
                                            </a>
                                        </li>
                                        <li className="menu-item " >
                                            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
                                            <FaInstagramSquare className="contact-social"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>

                            <Col md="6">
                                <div className="contactGroup">
                                    <label>Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter Your Name"
                                        required
                                    />
                                </div>

                                <div className="contactGroup">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter Your Email"
                                        required
                                    />
                                </div>

                                <div className="contactGroup">
                                    <label>Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        required
                                    />
                                </div>
                                <div className="contactGroup">
                                    <label>Message</label>
                                    <textarea
                                        name="message"
                                        placeholder="Write a message..."
                                        required
                                    />
                                </div>
                                <button className="contactButton">Send<MdSend className="send-icon"/> </button>
                            </Col>
                        </Row>
                    </form>
                </div>
            </Container>
    </section>
    <Footer/>
    </div>
    )
}

export default Contact
