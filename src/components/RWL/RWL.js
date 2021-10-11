import React from 'react'
import Slide from 'react-reveal/Slide';
import { Container, Row, Col } from "react-bootstrap";
import RWL1 from '../../img/rwl1.jpg';
import RWL2 from '../../img/rwl2.jpg';
import RWL3 from '../../img/rwl3.jpg';
import './RWL.css';
export default function RWL() {
    return (
        <div className="rwl-div">
            <h1 className="top-hedng">READ. WATCH. LISTEN.</h1>
            <h5 className="top-sub-hedng">
            GET STARTED NOW WITH INSIGHTS AND STRATEGIES FROM TONY ROBBINS
            </h5>
            <section className="pb-5"  id="contact" className="contactContainer">
            <Container className="pt-5 footer-style" >
                <div className="mt-4">
                    <form className="mission-form">
                    <Slide bottom cascade>
                        <Row>
                            <Col md="4">
                            <div class="rwl-container">
                            <img className="rwl-img"src={RWL1} alt="Snow"/>
                            <div class="centered"><h1>BLOG</h1></div>
                            </div>
                            </Col>
                            <Col md="4">
                            <div class="rwl-container">
                            <img className="rwl-img" src={RWL2} alt="Snow"/>
                            <div class="centered"><h1>PODCAST</h1></div>
                            </div>
                            </Col>
                            <Col md="4">
                            <div class="rwl-container">
                            <img className="rwl-img" src={RWL3} alt="Snow"/>
                            <div class="centered"><h1>VIDEO</h1></div>
                            </div>
                            </Col>
                        </Row>
                        </Slide>
                    </form>
                </div>
            </Container>
         </section>  
        </div>
    )
}
