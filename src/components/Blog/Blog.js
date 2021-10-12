import React from 'react'
import Navbarmenu from '../menu/Navbarmenu';
import Footer from '../Footer/Footer';
import { Container, Row, Col } from "react-bootstrap";
import Slide from 'react-reveal/Slide';
import blogImg1 from '../../img/b1.jpg';
import blogImg2 from '../../img/b2.jpg';
import blogImg3 from '../../img/b3.jpg';
import blogImg4 from '../../img/b4.jpg';
import blogImg5 from '../../img/b5.jpg';
import blogImg6 from '../../img/b6.jpg';
import "./Blog.css";
export default function Blog() {
    return (
        <>
            <Navbarmenu/>
            <div>
            <section className="blogContainer">
            <Container className="pt-5 footer-style space-heding" >
            <h1 className="top-hedng">LATEST NEWS FROM MY BLOG</h1>
                <div className="mt-4">
                    <form className="mission-form">
                    <Slide  left cascade>
                        <Row style={{marginTop:"50px"}}>
                            <Col md="4">
                            <div className="image image-style imgDiv">
                                <img className="image__img blogImage" src={blogImg1} alt="PLATINUM PARTNESHIP"/>
                                <div style={{marginTop: '12px'}}>
                                    <p> Lorem sit amet, consecte ipsum  amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip</p>
                                    <button className="contactButton">Read More</button>
                                </div>
                            </div>
                            </Col>
                            <Col md="4">
                            <div className="image image-style imgDiv">
                                <img className="image__img blogImage" src={blogImg2} alt="PLATINUM PARTNESHIP"/>
                                <div style={{marginTop: '12px'}}>
                                    <p> Lorem ipsum dolor sit amet, consectetur adip  Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip</p>
                                    <button className="contactButton">Read More</button>
                                </div>
                            </div>
                            </Col>
                            <Col md="4">
                           <div className="image image-style imgDiv">
                                <img className="image__img blogImage" src={blogImg3} alt="PLATINUM PARTNESHIP"/>
                                <div style={{marginTop: '12px'}}>
                                    <p> Lorem ipsum dolor sit amet, consectetur adip  Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip</p>
                                    <button className="contactButton">Read More</button>
                                </div>
                            </div>
                            </Col>
                        </Row>
                        </Slide >
                        <Slide  right cascade>
                        <Row>
                            <Col md="4">
                            <div className="image image-style imgDiv">
                                <img className="image__img blogImage" src={blogImg4} alt="PLATINUM PARTNESHIP"/>
                                <div style={{marginTop: '12px'}}>
                                    <p> Lorem ipsum dolor sit amet, consectetur adip  Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip</p>
                                    <button className="contactButton">Read More</button>
                                </div>
                            </div>
                            </Col>
                            <Col md="4">
                            <div className="image image-style imgDiv">
                                <img className="image__img blogImage" src={blogImg5} alt="PLATINUM PARTNESHIP"/>
                                <div style={{marginTop: '12px'}}>
                                    <p> Lorem ipsum dolor sit amet, consectetur adip  Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip</p>
                                    <button className="contactButton">Read More</button>
                                </div>
                            </div>
                            </Col>
                            <Col md="4">
                            <div className="image image-style imgDiv">
                                <img className="image__img blogImage" src={blogImg6} alt="PLATINUM PARTNESHIP"/>
                                <div style={{marginTop: '12px'}}>
                                    <p> Lorem ipsum dolor sit amet, consectetur adip  Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip</p>
                                    <button className="contactButton">Read More</button>
                                </div>
                            </div>
                            </Col>
                        </Row>
                        </Slide >
                    </form>
                </div>
            </Container>
         </section>  
            </div>
            <Footer />
        </>
    )
}
