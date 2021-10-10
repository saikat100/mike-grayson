import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import missionImg from '../../img/la1.jpg';
import './Mission.css';
export default function Mission() {
    return (
        <div>
            <h1 className="top-hedng">ON A MISSION TO CHANGE LIVES</h1>
            <h5 className="top-sub-hedng">
            Dr. GRAYSON HAS SPENT TRANSFORMING LIVES
            </h5>
            <section className="pb-5"  id="contact" className="contactContainer">
            <Container className="pt-5 footer-style" >
                <div className="mt-4">
                    <form className="contactForm">
                        <Row>
                            <Col md="6">
                                <div>
                                <img className="mission-image" src={missionImg} alt="mission" />
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="missionGroup">
                                   <h3>FIND THE EVENT THAT’S RIGHT FOR YOU</h3>
                                   <p>Know you want MORE in life, but don’t know where to start? Call us at (866) 236-5241 or click the button to schedule a call with one of Tony’s Personal Results Specialists who can guide you to YOUR ideal Tony Robbins event.</p>
                                </div>
                                <button className="missionButton">SEE GRAYSON'S FULL BIO</button>
                            </Col>
                        </Row>
                    </form>
                </div>
            </Container>
    </section>
        </div>
    )
}
