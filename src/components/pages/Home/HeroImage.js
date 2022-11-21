import React from 'react';

import strawberry from '../../assets/banner-shape-1.png';
import discount from '../../assets/discount-shape.png';
import leafs from '../../assets/banner-shape-2.png';
import vegetables from '../../assets/banner-3.png';
import arrow from '../../assets/curved-arrow.png';
import { Container, Row, Col } from "react-bootstrap";

const HeroImage = () => {
  return (
    <>
    <section className="hsr-hero-image">
        <div className='bottom-image-banner'>
            <img  src={strawberry} alt="Strawberry Image" />
        </div>
        <div className="hsr-discount-tag">
            <img src={discount} alt="Discount Tag" />
            <div className="discount-text">
                <span>50%</span> Off
            </div>
        </div>
        <Container>
            <Row className="align-items-center">
                <Col md={6} lg={6} xs={12}>
                    <div className="hero-left-wrapper">
                        <div className="hsr-leaf">
                            <img src={leafs} alt="Leafs" />
                        </div>
                        <div className="hsr-arrow">
                            <img src={arrow} alt="Curved arrow" />
                        </div>
                        <div className="hsr-content">
                            <h2>Organic <br /> Fresh Food</h2>
                            <p>Discover organic, sustainable food from our organic farm and <br /> fresh vegetable, and food </p>
                            <div class="hsr-cta-button"><a class="hsr-button" href="/shop">Shop Now</a></div>
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={6} xs={12}>
                    <img src={vegetables} alt="Vegetable Bucket" className="w-100" />
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default HeroImage