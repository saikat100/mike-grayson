import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import Footer from './Footer/Footer'
import Navbarmenu from './menu/Navbarmenu'
import LifeAria from './LifeArea/LifeAria';
import Mission from './Mission/Mission';
const Home = () => {
	return (
			<>
			<Navbarmenu/>
			<div  className="bannerSection">
			<section
			initial={{ y: -250 }}
			animate={{ y: -10 }}
			transition={{ delay: 0.5, type: "spring", stiffness: 2500 }}
			id="home"
			>
			<header>
				<div class="overlay"></div>
				<Container className="bannerContainer">
					<Row className="align-items-center justify-content-center banner">
						<Col md={12} className="all-center">
							<h1 className="myname">
							TAKE BACK INNER CONTROL
							</h1>
							<span className="line"></span>
							<h4 className="line">FREE LIVE EVENT WITH Dr. GRAYSON</h4>
						</Col>
					</Row>
				</Container>
			</header>
		</section>
		</div>
		<LifeAria/>
		<Mission/>
		<Footer />
		</>
       )
}
export default Home
