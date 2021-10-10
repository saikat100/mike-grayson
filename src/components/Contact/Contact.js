import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Footer from '../Footer/Footer';
import Navbarmenu from '../menu/Navbarmenu';
import ContactImg from '../../img/contact.png';
import "./Contact.css";

const Contact = () => {
    return (
        <div>
            <Navbarmenu/>
        <section className="pb-5"  id="contact" className="contactContainer">
            <Container className="pt-5 footer-style" >
                <div className="text-center mb-5">
                    <h2 className="contact-style">Get in Touch</h2>
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
                                    <ul class="list-unstyled">
                                        <li>
                                            <strong>Email: </strong> office@cdmionline.com
                                        </li>
                                        <li>
                                            <strong>Phone: </strong> (718) 481-3363
                                        </li>
                                        <li>
                                            <strong>Address: </strong> 204-17 Hillside Avenue, Queens NY 11423
                                        </li>
                                    </ul>
                                    <div>
                                    <img className="contact-image" src={ContactImg} alt="contact" />
                                    </div>
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
                                <button className="contactButton">Send</button>
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
