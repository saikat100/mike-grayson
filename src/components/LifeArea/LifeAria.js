import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Slide from 'react-reveal/Slide';
import LifeAriaImg1 from '../../img/la1.jpg';
import LifeAriaImg2 from '../../img/la2.jpg';
import LifeAriaImg3 from '../../img/la3.jpg';
import LifeAriaImg4 from '../../img/la4.jpg';
import LifeAriaImg5 from '../../img/la5.jpg';
import LifeAriaImg6 from '../../img/la6.jpg';
import './LifeAria.css';
export default function LifeAria() {
    return (

        <div>
            <h1 className="top-hedng">AREA OF LIFE</h1>
            <h5 className="top-sub-hedng">
            SOLUTIONS TO FIT YOUR TIME, YOUR LIFESTYLE AND YOUR BUDGET
            </h5>
            <section className="pb-5"  id="contact" className="contactContainer">
            <Container className="pt-5 footer-style" >
                <div className="mt-4">
                    <form className="mission-form">
                    <Slide  left cascade>
                        <Row>
                            <Col md="4">
                            <div className="image image-style">
                                <img className="image__img" src={LifeAriaImg1} alt="PLATINUM PARTNESHIP"/>
                                <div className="image__overlay image__overlay--primary">
                                    <div className="image__title">PLATINUM PARTNESHIP</div>
                                </div>
                            </div>
                            </Col>
                            <Col md="4">
                            <div className="image image-style">
                                <img className="image__img" src={LifeAriaImg2} alt="PRIVATE COACHING"/>
                                <div className="image__overlay image__overlay--primary">
                                    <div className="image__title">PRIVATE COACHING</div>
                                </div>
                            </div>
                            </Col>
                            <Col md="4">
                            <div className="image image-style">
                                <img className="image__img" src={LifeAriaImg3} alt="UPCOMING EVENTS"/>
                                <div className="image__overlay image__overlay--primary">
                                    <div className="image__title">UPCOMING EVENTS</div>
                                </div>
                            </div>
                            </Col>
                        </Row>
                        </Slide >
                        <Slide  right cascade>
                        <Row>
                            <Col md="4">
                            <div className="image image-style">
                                <img className="image__img" src={LifeAriaImg4} alt="SUPPLEMENTS"/>
                                <div className="image__overlay image__overlay--primary">
                                    <div className="image__title">SUPPLEMENTS</div>
                                </div>
                            </div>
                            </Col>
                            <Col md="4">
                            <div className="image image-style">
                                <img className="image__img" src={LifeAriaImg5} alt="JOIN THE INNER CIRCLE"/>
                                <div className="image__overlay image__overlay--primary">
                                    <div className="image__title">JOIN THE INNER CIRCLE</div>
                                </div>
                            </div>
                            </Col>
                            <Col md="4">
                            <div className="image image-style">
                                <img className="image__img" src={LifeAriaImg6} alt="TRAINING PROGRAMS"/>
                                <div className="image__overlay image__overlay--primary">
                                    <div className="image__title">TRAINING PROGRAMS</div>
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
    )
}
















// import React from 'react';
// import { Container, Row, Col } from "react-bootstrap";
// import Bounce from 'react-reveal/Bounce';
// import la1 from '../../img/la1.jpg';
// import './LifeAria.css';
// export default function LifeAria() {
//     return (

//         <div>
//             <h1 className="top-hedng">AREA OF LIFE</h1>
//             <h5 className="top-sub-hedng">
//             SOLUTIONS TO FIT YOUR TIME, YOUR LIFESTYLE AND YOUR BUDGET
//             </h5>
//             <section className="pt-5">
//                 <Container className="py-5 ">
//                     <Row className="mt-5 life-aria-section">
//                     <div className="image ">
//                         <img className="image__img" src={la1} alt="Bricks"/>
//                         <div className="image__overlay image__overlay--primary">
//                             <div className="image__title">Bricks</div>
//                         </div>
//                     </div>
//                     <div className="image">
//                         <img className="image__img" src={la1} alt="Bricks"/>
//                         <div className="image__overlay image__overlay--primary">
//                             <div className="image__title">Bricks</div>
//                         </div>
//                     </div>
//                         <div className="image">
//                             <img className="image__img" src={la1} alt="Bricks"/>
//                             <div className="image__overlay image__overlay--primary">
//                                 <div className="image__title">Bricks</div>
//                             </div>
//                         </div>
//                     </Row>
//                 </Container>
//             </section>
           
//         </div>
//     )
// }
