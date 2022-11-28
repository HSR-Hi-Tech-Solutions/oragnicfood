import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';

const Features = () => {
  return (
    <>
    <Container fluid className="bg-white hsr-features">
        <Container>
            <Row className="justify-content-between">
                <Col md={6} lg={4} xl={3} xs ={12} className="">
                    <Row>
                        <Col xs={12} md={3} lg={3} className="text-center">
                            <span className="hsr-outer-circle">
                            <Icon.Truck className="hsr-icons"></Icon.Truck>
                            </span>
                        </Col>
                        <Col md={9} lg={9} xs={12} className="hsr-right-side border-right">
                            <h4><a href="#">Free Shipping</a></h4>
                            <span>On All Order Over $599</span>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} lg={4} xl={3} xs ={12}>
                    <Row>
                        <Col xs={12} md={3} lg={3} className="text-center">
                            <span className="hsr-outer-circle">
                            <Icon.Basket className="hsr-icons"></Icon.Basket>
                            </span>
                        </Col>
                        <Col md={9} lg={9} xs={12} className="hsr-right-side border-right">
                            <h4><a href="#">Easy Returns</a></h4>
                            <span>30 Day Return Policy</span>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} lg={4} xl={3} xs ={12}>
                    <Row>
                        <Col xs={12} md={3} lg={3} className="text-center">
                            <span className="hsr-outer-circle">
                            <Icon.Fingerprint className="hsr-icons"></Icon.Fingerprint>
                            </span>
                        </Col>
                        <Col md={9} lg={9} xs={12} className="hsr-right-side border-right">
                            <h4><a href="#">Secure Payment</a></h4>
                            <span>100% Secure Gurantee</span>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} lg={4} xl={3} xs ={12}>
                    <Row>
                        <Col xs={12} md={3} lg={3} className="text-center">
                            <span className="hsr-outer-circle">
                            <Icon.Headset className="hsr-icons"></Icon.Headset>
                            </span>
                        </Col>
                        <Col md={9} lg={9} xs={12} className="hsr-right-side">
                            <h4><a href="#">Special Support</a></h4>
                            <span>24/7 Dedicated Support</span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </Container>
    </>
  )
}

export default Features