import React from 'react'
import Navbarmenu from '../menu/Navbarmenu';
import { Col, Container, Row } from "react-bootstrap";
import Slide from 'react-reveal/Slide';
import book1 from '../../img/book1.jpg';
import book2 from '../../img/book2.jpg';
import Footer from '../Footer/Footer';
import "./Book.css";
export default function Book() {
    return (
        <>
        <Navbarmenu/>
        <div className="book-container ">
            <h1 className="top-hedng space-heding">ABOUT MY BOOK</h1>
            <h4>This amazing manual tells you how to use existing government programs to defer all of your creditor payments including your rent and mortgage for up to 12 months without damaging your credit or creditor relationships. Using this technique you can also arrange settlements, loan modifications and cancel some types of debts. This book is written by the World’s leading Credit Expert. Dr. Grayson’s techniques are so effective that he offers a $1 million reward to anyone who can beat his records. This book serves as a powerful introduction to the revolutionary Extreme Credit Series.</h4>
            <section className="pb-5 contactContainer"  id="contact">
                <Container className="pt-5 footer-style" >
                    <div className="mt-4">
                        <form className="mission-form">
                            <Row>
                            <Slide left cascade>
                                <Col md="4">
                                    <div>
                                    <img className="mission-image" src={book1} alt="mission" />
                                    </div>
                                </Col>
                                </Slide>
                                <Slide right cascade>
                                <Col md="8">
                                    <div className="missionGroup">
                                    <h3>HOW TO STOP MAKING PAYMENTS</h3>
                                    <p>HOW TO LEGALLY DEFER ALL OF YOUR CREDITOR PAYMENTS INCLUDING RENT AND MORTGAGES FOR 3-12 MONTHS AND SAVE YOUR CREDIT (EXTREME CREDIT) KINDLE EDITION</p>
                                    </div>
                                    <a href="https://www.amazon.com/How-Stop-Making-Payments-including-ebook/dp/B087BGHGBW/ref=sr_1_2?dchild=1&qid=1632541776&refinements=p_27%3ADR+MICHAEL+C+GRAYSON&s=books&sr=1-2" target='_blank' rel='noreferrer'>
                                        <button className="missionButton">Learn More</button>
                                    </a>
                                </Col>
                                </Slide>
                            </Row>
                        </form>
                    </div>
                </Container>
            </section>
            <section className="pb-5 contactContainer"  id="contact">
                <Container className="pt-5 footer-style" >
                    <div className="mt-4">
                        <form className="mission-form">
                            <Row>
                            <Slide left cascade>
                            <Col md="8">
                                    <div className="missionGroup">
                                    <h3>Extreme Credit: Perfect Credit in 90 Days (EXTREME CREDIT, VOLUME 1)</h3>
                                    <p>by DR MICHAEL C GRAYSON | Jan 1, 2011</p>
                                    </div>
                                    <a href="https://www.amazon.com/Extreme-Credit-Perfect-EXTREME-CREDIT/dp/0615422608/ref=sr_1_4?dchild=1&qid=1632541776&refinements=p_27%3ADR+MICHAEL+C+GRAYSON&s=books&sr=1-4" target='_blank' rel='noreferrer'>
                                        <button className="missionButton btn-space">Learn More</button>
                                    </a>
                                </Col>
                                </Slide>
                                <Slide right cascade>
                                <Col md="4">
                                    <div>
                                    <img className="mission-image" src={book2} alt="mission" />
                                    </div>
                                </Col>
                                </Slide>
                            </Row>
                        </form>
                    </div>
                </Container>
            </section>
        </div>
        <Footer />
    </>
    )
}
