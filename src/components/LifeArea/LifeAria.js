import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Bounce from 'react-reveal/Bounce';
import la1 from '../../img/la1.jpg';
import './LifeAria.css';
export default function LifeAria() {
    return (

        <div>
            <h1 className="top-hedng">AREA OF LIFE</h1>
            <h5 className="top-sub-hedng">
            SOLUTIONS TO FIT YOUR TIME, YOUR LIFESTYLE AND YOUR BUDGET
            </h5>
            <section className="pt-5">
                <Container className="py-5 ">
                    <Row className="mt-5 life-aria-section">
                    <div class="image ">
                        <img class="image__img" src={la1} alt="Bricks"/>
                        <div class="image__overlay image__overlay--primary">
                            <div class="image__title">Bricks</div>
                        </div>
                    </div>
                    <div class="image">
                        <img class="image__img" src={la1} alt="Bricks"/>
                        <div class="image__overlay image__overlay--primary">
                            <div class="image__title">Bricks</div>
                        </div>
                    </div>
                        <div class="image">
                            <img class="image__img" src={la1} alt="Bricks"/>
                            <div class="image__overlay image__overlay--primary">
                                <div class="image__title">Bricks</div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
           
        </div>
    )
}
