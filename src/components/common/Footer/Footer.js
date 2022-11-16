import React from 'react';
import { Container, Row,Col, InputGroup, Button, Form } from "react-bootstrap";
import { ArrowRight, Headset } from "react-bootstrap-icons";
import './Footer.scss';

import { Envelope, HouseDoor } from "react-bootstrap-icons";

import discover from '../../assets/discover.png';
import mastercard from '../../assets/mastercard.png';
import paypal from '../../assets/paypal.png';
import visa from '../../assets/visa.png';

import logo from '../../assets/logo-2.png';

const Footer = () => {
  return (
    <>
    <Container fluid className="hsr-footer">
      <Container>
        <Row>
          <Col xs={12} md={3} lg={3}>
            <img src={logo} alt={"Company Logo"} width={160}  />
            <br />
            <br/>
            <p>Sed perspiciatis unde omnis natus error voluptatem accusan doloreqe laudantium totam aperiam eaque sipsa quae abillo inventore.</p>
            <div className="mt-5">
              <a href="#"> <Envelope /> &emsp;info@example.com</a>
              <a href="#"><HouseDoor/> &emsp;Favicon, New York, USA - 25423</a>
            </div>
          </Col>
          <Col xs={12} md={1} lg={2}></Col>
          <Col xs={12} md={2} lg={2}>
            <h5>Quick Links</h5>
            <ul className="list-none">
              <li>
                <a href="#">About Our Company</a>
              </li>
              <li>
                <a href="#">Wishlist</a>
              </li>
              <li>
                <a href="#">Cart</a>
              </li>
              <li>
                <a href="#">Flash Offers</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={2} lg={2}>
            <h5>Categories</h5>
            <ul className="list-none">
              <li>
                <a href="#">Categories</a>
              </li>
              <li>
                <a href="#">Wishlist</a>
              </li>
              <li>
                <a href="#">Cart</a>
              </li>
              <li>
                <a href="#">Flash Offers</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={3} lg={3}>
          <h5>Newsletter</h5>
          <div className="mt-5">
          <InputGroup className="hsr-search-section">
        <Form.Control
          placeholder="Enter Your Email"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          className="hsr-search-input"
        />
        <Button id="button-addon2">
          <div className="hsr-round"><ArrowRight  /></div>
          
        </Button>
      </InputGroup>
          <Row className="mt-5">
            <Col xs={3} lg={3} md={3}>
            <Headset className="hsr-footer-headphone" /> 
            </Col>
            <Col xs={9} lg={9} md={9}>
            <p className="hsr-footer-time">
8:30 AM - 9:30 PM</p>
<a className="hsr-footer-mobile" href="tel +91 9874561230">+91 98745 61230</a>
            </Col>
          </Row>
          </div>
          </Col>
        </Row>
      </Container>
    </Container>
    <Container fluid className="bg-white hsr-copyright">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6}>
          <p>All Rights Reserved | Copyrighted by ©2022 HSR</p>
          </Col>
          <Col xs={12} md={2} lg={2}></Col>
          <Col xs={12} md={4} lg={4}>
            <div className="ms-auto hsr-cards">
              <span className="me-2">We Support &emsp;</span>
              <img src={discover} alt="Discover Logo" />&emsp;
              <img src={paypal} alt="Discover Logo" />&emsp;
              <img src={mastercard} alt="Discover Logo" />&emsp;
              <img src={visa} alt="Discover Logo" />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
    </>
  )
}

export default Footer